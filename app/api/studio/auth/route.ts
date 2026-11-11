import { NextResponse } from "next/server";
import crypto from "crypto";
import {
  STUDIO_COOKIE_NAME,
  STUDIO_SESSION_TTL_SECONDS,
  STUDIO_SECURITY_HEADERS,
  MIN_PASSPHRASE_LENGTH,
  getConfiguredPassphrase,
  createStudioSessionToken,
  verifyStudioSessionToken,
  extractCookieValue,
} from "@/lib/studioAuth";

// Protecție suplimentară în memorie (pe instanță serverless) pentru întârziere progresivă & fallback lockout
interface LocalAttemptRecord {
  failures: number[];
  blockedUntilMs: number;
}

const localAttempts = new Map<string, LocalAttemptRecord>();
const WINDOW_MS = 15 * 60 * 1000; // 15 minute
const LOCKOUT_MS = 60 * 60 * 1000; // 60 minute
const MAX_FAILURES = 5;

function getClientIpHash(req: Request): string {
  const xf = req.headers.get("x-forwarded-for") || "";
  const realIp = req.headers.get("x-real-ip") || "";
  const rawIp = (xf.split(",")[0] || realIp || "unknown-ip").trim();
  return crypto.createHash("sha256").update(`reverb-studio-ip::${rawIp}`).digest("hex").slice(0, 24);
}

function getLocalLockoutState(ipHash: string): { locked: boolean; retryAfterSec: number; recentFailures: number } {
  const now = Date.now();
  const rec = localAttempts.get(ipHash);
  if (!rec) {
    return { locked: false, retryAfterSec: 0, recentFailures: 0 };
  }
  if (rec.blockedUntilMs > now) {
    return {
      locked: true,
      retryAfterSec: Math.ceil((rec.blockedUntilMs - now) / 1000),
      recentFailures: MAX_FAILURES,
    };
  }
  const validFailures = rec.failures.filter((t) => now - t < WINDOW_MS);
  rec.failures = validFailures;
  localAttempts.set(ipHash, rec);
  return { locked: false, retryAfterSec: 0, recentFailures: validFailures.length };
}

function recordLocalAttempt(ipHash: string, success: boolean): { locked: boolean; retryAfterSec: number; recentFailures: number } {
  if (success) {
    localAttempts.delete(ipHash);
    return { locked: false, retryAfterSec: 0, recentFailures: 0 };
  }
  const now = Date.now();
  const rec = localAttempts.get(ipHash) || { failures: [], blockedUntilMs: 0 };
  rec.failures = rec.failures.filter((t) => now - t < WINDOW_MS);
  rec.failures.push(now);
  if (rec.failures.length >= MAX_FAILURES) {
    rec.blockedUntilMs = now + LOCKOUT_MS;
  }
  localAttempts.set(ipHash, rec);
  return {
    locked: rec.blockedUntilMs > now,
    retryAfterSec: rec.blockedUntilMs > now ? Math.ceil((rec.blockedUntilMs - now) / 1000) : 0,
    recentFailures: rec.failures.length,
  };
}

function getRelayConfig(): { baseUrl: string; authHeader: string } | null {
  const user = (process.env.BRICO_WP_APP_USER || "").trim();
  const pass = (process.env.BRICO_WP_APP_PASS || "").trim();
  const baseUrl = (process.env.BRICO_WP_URL || "https://bricolando.ro").trim().replace(/\/+$/, "");
  if (!user || !pass) {
    return null;
  }
  const basic = Buffer.from(`${user}:${pass}`, "utf-8").toString("base64");
  return { baseUrl, authHeader: `Basic ${basic}` };
}

async function checkRelayLockout(ipHash: string): Promise<{ locked: boolean; retryAfterSec: number } | null> {
  const relay = getRelayConfig();
  if (!relay) return null;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);
    const res = await fetch(`${relay.baseUrl}/wp-json/bricolando/v1/panou-studio-auth`, {
      method: "GET",
      headers: {
        Authorization: relay.authHeader,
        Accept: "application/json",
      },
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.locked) {
      return {
        locked: true,
        retryAfterSec: Number(data.remaining_seconds || 3600),
      };
    }
    // Verificăm și pe ip_hash dacă e raportat în chei
    const byIp = data?.ip_locks?.[ipHash];
    if (byIp?.locked) {
      return {
        locked: true,
        retryAfterSec: Number(byIp.remaining_seconds || 3600),
      };
    }
    return { locked: false, retryAfterSec: 0 };
  } catch {
    return null;
  }
}

async function recordRelayAttempt(ipHash: string, success: boolean): Promise<{ locked: boolean; retryAfterSec: number } | null> {
  const relay = getRelayConfig();
  if (!relay) return null;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);
    const res = await fetch(`${relay.baseUrl}/wp-json/bricolando/v1/panou-studio-auth`, {
      method: "POST",
      headers: {
        Authorization: relay.authHeader,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        action: success ? "reset_success" : "record_failure",
        ip_hash: ipHash,
      }),
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      locked: Boolean(data?.locked),
      retryAfterSec: Number(data?.remaining_seconds || 0),
    };
  } catch {
    return null;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function comparePassphraseConstantTime(provided: string, expected: string): boolean {
  const digestProvided = crypto.createHash("sha256").update(provided, "utf-8").digest();
  const digestExpected = crypto.createHash("sha256").update(expected, "utf-8").digest();
  return crypto.timingSafeEqual(digestProvided, digestExpected);
}

export async function GET(req: Request) {
  const configuredPassphrase = getConfiguredPassphrase();
  const cookieVal = extractCookieValue(req.headers.get("cookie"), STUDIO_COOKIE_NAME);
  const authenticated = configuredPassphrase ? await verifyStudioSessionToken(cookieVal) : false;

  return NextResponse.json(
    {
      authenticated,
      configured: Boolean(configuredPassphrase),
      relayConfigured: Boolean(getRelayConfig()),
    },
    { status: 200, headers: STUDIO_SECURITY_HEADERS }
  );
}

export async function POST(req: Request) {
  const configuredPassphrase = getConfiguredPassphrase();
  if (!configuredPassphrase) {
    return NextResponse.json(
      {
        authenticated: false,
        configured: false,
        error:
          "Setează variabila REVERB_STUDIO_PASSPHRASE în Vercel Settings -> Environment Variables pentru a activa accesul securizat.",
      },
      { status: 503, headers: STUDIO_SECURITY_HEADERS }
    );
  }

  const ipHash = getClientIpHash(req);

  // 1. Verificare lockout local + releu centralizat WP
  const localState = getLocalLockoutState(ipHash);
  if (localState.locked) {
    return NextResponse.json(
      {
        authenticated: false,
        locked: true,
        retryAfterSeconds: localState.retryAfterSec,
        error: `Acces blocat temporar după 5 încercări nereușite. Reîncearcă peste ${Math.ceil(localState.retryAfterSec / 60)} minute.`,
      },
      { status: 429, headers: STUDIO_SECURITY_HEADERS }
    );
  }

  const relayLock = await checkRelayLockout(ipHash);
  if (relayLock?.locked) {
    return NextResponse.json(
      {
        authenticated: false,
        locked: true,
        retryAfterSeconds: relayLock.retryAfterSec,
        error: `Acces blocat temporar pentru 60 de minute după încercări repetate nereușite. Reîncearcă peste ${Math.ceil(relayLock.retryAfterSec / 60)} minute.`,
      },
      { status: 429, headers: STUDIO_SECURITY_HEADERS }
    );
  }

  // 2. Citire passphrase
  let candidate = "";
  try {
    const body = await req.json();
    candidate = typeof body?.passphrase === "string" ? body.passphrase.trim() : "";
  } catch {
    return NextResponse.json(
      { authenticated: false, error: "Cerere invalidă." },
      { status: 400, headers: STUDIO_SECURITY_HEADERS }
    );
  }

  // 3. Întârziere progresivă anti-bruteforce dacă există deja erori recente
  if (localState.recentFailures > 0) {
    const delayMs = Math.min(3500, localState.recentFailures * 650);
    await sleep(delayMs);
  }

  const isLengthAcceptable = candidate.length >= MIN_PASSPHRASE_LENGTH;
  const hashesMatch = comparePassphraseConstantTime(candidate, configuredPassphrase);
  const isValid = isLengthAcceptable && hashesMatch;

  if (!isValid) {
    await sleep(350);
    const updatedLocal = recordLocalAttempt(ipHash, false);
    const updatedRelay = await recordRelayAttempt(ipHash, false);
    const nowLocked = updatedLocal.locked || Boolean(updatedRelay?.locked);
    const retrySec = Math.max(updatedLocal.retryAfterSec, updatedRelay?.retryAfterSec || 0, 3600);

    if (nowLocked) {
      return NextResponse.json(
        {
          authenticated: false,
          locked: true,
          retryAfterSeconds: retrySec,
          error: "Prea multe încercări eșuate (5 în 15 minute). Accesul a fost blocat pentru 60 de minute.",
        },
        { status: 429, headers: STUDIO_SECURITY_HEADERS }
      );
    }

    return NextResponse.json(
      {
        authenticated: false,
        error: "Parolă de acces incorectă.",
      },
      { status: 401, headers: STUDIO_SECURITY_HEADERS }
    );
  }

  // 4. Succes: resetare contor erori și emitere cookie semnat HMAC-SHA256 (90 zile)
  recordLocalAttempt(ipHash, true);
  await recordRelayAttempt(ipHash, true);

  const { token } = await createStudioSessionToken(configuredPassphrase);
  const isProd = process.env.NODE_ENV === "production";

  const res = NextResponse.json(
    {
      authenticated: true,
      configured: true,
    },
    { status: 200, headers: STUDIO_SECURITY_HEADERS }
  );

  res.cookies.set({
    name: STUDIO_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: isProd,
    sameSite: "strict",
    path: "/",
    maxAge: STUDIO_SESSION_TTL_SECONDS,
  });

  return res;
}

export async function DELETE() {
  const isProd = process.env.NODE_ENV === "production";
  const res = NextResponse.json(
    { authenticated: false, loggedOut: true },
    { status: 200, headers: STUDIO_SECURITY_HEADERS }
  );

  res.cookies.set({
    name: STUDIO_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: isProd,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  return res;
}
