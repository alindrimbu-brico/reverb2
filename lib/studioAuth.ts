/**
 * Utilitar comun (compatibil Edge Runtime + Node.js Runtime) pentru sesiunea
 * securizată `reverb.ro/studio` (`reverb_studio_session`, HMAC-SHA256, 90 zile).
 */

export const STUDIO_COOKIE_NAME = "reverb_studio_session";
export const STUDIO_SESSION_TTL_SECONDS = 90 * 24 * 60 * 60; // 90 zile
export const MIN_PASSPHRASE_LENGTH = 16;

export const STUDIO_SECURITY_HEADERS: Record<string, string> = {
  "Cache-Control": "no-store, private, must-revalidate",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

export function getConfiguredPassphrase(): string | null {
  const raw = (process.env.REVERB_STUDIO_PASSPHRASE || "").trim();
  if (raw.length < MIN_PASSPHRASE_LENGTH) {
    return null;
  }
  return raw;
}

function getSigningSecret(passphrase: string): string {
  const extra = (process.env.REVERB_STUDIO_COOKIE_SECRET || "").trim();
  return extra.length >= 16 ? `${extra}::${passphrase}` : `reverb-studio-hmac-v1::${passphrase}`;
}

function bytesToHex(bytes: Uint8Array): string {
  let out = "";
  for (let i = 0; i < bytes.length; i++) {
    out += bytes[i].toString(16).padStart(2, "0");
  }
  return out;
}

async function hmacSha256Hex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return bytesToHex(new Uint8Array(sig));
}

function constantTimeHexEqual(a: string, b: string): boolean {
  if (a.length !== b.length || a.length === 0) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function createStudioSessionToken(passphrase: string): Promise<{
  token: string;
  expiresAtEpochSec: number;
}> {
  const issuedAt = Math.floor(Date.now() / 1000);
  const expiresAtEpochSec = issuedAt + STUDIO_SESSION_TTL_SECONDS;
  const nonceBytes = new Uint8Array(16);
  crypto.getRandomValues(nonceBytes);
  const nonce = bytesToHex(nonceBytes);
  const payload = `v1.${issuedAt}.${expiresAtEpochSec}.${nonce}`;
  const sig = await hmacSha256Hex(getSigningSecret(passphrase), payload);
  return {
    token: `${payload}.${sig}`,
    expiresAtEpochSec,
  };
}

export async function verifyStudioSessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token || typeof token !== "string") {
    return false;
  }
  const passphrase = getConfiguredPassphrase();
  if (!passphrase) {
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 5 || parts[0] !== "v1") {
    return false;
  }

  const [, issuedStr, expStr, nonce, providedSig] = parts;
  if (!/^\d+$/.test(issuedStr) || !/^\d+$/.test(expStr) || !/^[0-9a-f]{32}$/.test(nonce) || !/^[0-9a-f]{64}$/.test(providedSig)) {
    return false;
  }

  const nowSec = Math.floor(Date.now() / 1000);
  const expSec = Number(expStr);
  const issuedSec = Number(issuedStr);
  if (!Number.isFinite(expSec) || !Number.isFinite(issuedSec)) {
    return false;
  }
  if (expSec <= nowSec || issuedSec > nowSec + 300) {
    return false;
  }

  const payload = `v1.${issuedStr}.${expStr}.${nonce}`;
  const expectedSig = await hmacSha256Hex(getSigningSecret(passphrase), payload);
  return constantTimeHexEqual(providedSig, expectedSig);
}

export function extractCookieValue(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) return null;
  const pairs = cookieHeader.split(";");
  for (const pair of pairs) {
    const idx = pair.indexOf("=");
    if (idx === -1) continue;
    const k = pair.slice(0, idx).trim();
    if (k === name) {
      return decodeURIComponent(pair.slice(idx + 1).trim());
    }
  }
  return null;
}
