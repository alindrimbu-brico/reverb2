// Reverb Studio — Muzică (design_v2_1_decizii.md):
//   POST {op:"compune", cerere, limbi}  → Gemini (prompt + versuri + scene + kit), verificat de musicLint, max 2 reîncercări
//   POST {op:"comanda", actiune, piesa, date} → releul de pe bricolando.ro (HMAC A), laptopul o preia la ≤ 1 min
//   GET  ?op=stare                       → oglinda catalogului + semnul de viață al laptopului
//   GET  ?op=media&f=<nume>              → 302 spre linkul semnat (Vercel nu transferă octeți de media)
import { NextResponse } from "next/server";
import { createHmac, randomBytes } from "node:crypto";
import { STUDIO_COOKIE_NAME, STUDIO_SECURITY_HEADERS, verifyStudioSessionToken, extractCookieValue } from "@/lib/studioAuth";
import { PROMPT_SISTEM, SCHEMA_RASPUNS, promptUtilizator, type Limba } from "@/lib/musicPrompt";
import { lintToate, type PiesaCompusa } from "@/lib/musicLint";

export const maxDuration = 300; // o compunere Gemini 3.8 Flash cu schemă durează ~50 s (măsurat 11 nov); reîncercările se opresc după 180 s
export const dynamic = "force-dynamic";

const RELEU = (process.env.STUDIO_RELEU_URL || "https://bricolando.ro/wp-json/reverb-sr/v1").replace(/\/+$/, "");
const ACTIUNI = new Set(["ciorna", "importa", "imagini", "aproba_sunet", "publica", "marcheaza_urcat", "anuleaza", "respinge"]);
const RE_PIESA = /^p-[0-9a-f]{12}$/;
const RE_MEDIA = /^[0-9a-f]{24}\.(mp3|mp4)$/;

function json(payload: unknown, status = 200) {
  return NextResponse.json(payload, { status, headers: STUDIO_SECURITY_HEADERS });
}

async function autentificat(req: Request): Promise<boolean> {
  return verifyStudioSessionToken(extractCookieValue(req.headers.get("cookie"), STUDIO_COOKIE_NAME));
}

function secret(): string | null {
  const s = (process.env.STUDIO_RELAY_SECRET || "").trim();
  return /^[0-9a-f]{64}$/.test(s) ? s : null;
}

function semneaza(s: string, mesaj: string): string {
  return createHmac("sha256", s).update(mesaj, "utf8").digest("hex");
}

async function catreReleu(metoda: "GET" | "POST", cale: string, corp?: unknown) {
  const s = secret();
  if (!s) return { ok: false, status: 503, date: { mesaj: "Releul muzicii nu e configurat (STUDIO_RELAY_SECRET)." } };
  const text = corp === undefined ? "" : JSON.stringify(corp);
  const ts = Math.floor(Date.now() / 1000).toString();
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 12000);
  try {
    const r = await fetch(`${RELEU}/${cale}`, {
      method: metoda,
      headers: { "Content-Type": "application/json", "X-Studio-Ts": ts, "X-Studio-Sig": semneaza(s, `${ts}\n${text}`) },
      body: metoda === "POST" ? text : undefined,
      cache: "no-store",
      signal: ctrl.signal,
    });
    const date = await r.json().catch(() => ({}));
    return { ok: r.ok, status: r.status, date };
  } catch (e: unknown) {
    return { ok: false, status: 502, date: { mesaj: `Releul nu răspunde: ${e instanceof Error ? e.message : "eroare"}` } };
  } finally {
    clearTimeout(t);
  }
}

async function gemini(cerere: string, limbi: Limba[], motive: string[]): Promise<PiesaCompusa[]> {
  // 11 nov 2026: GOOGLE_GENERATIVE_AI_API_KEY din Vercel (220 de zile) e invalidă; cheia bună e STUDIO_GEMINI_API_KEY.
  const cheie = (process.env.STUDIO_GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || "").trim();
  if (!cheie) throw new Error("Cheia Gemini lipsește în Vercel (STUDIO_GEMINI_API_KEY).");
  const model = (process.env.STUDIO_GEMINI_MODEL || "gemini-3.8-flash").trim();
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": cheie },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: PROMPT_SISTEM }] },
      contents: [{ role: "user", parts: [{ text: promptUtilizator(cerere, limbi, motive) }] }],
      generationConfig: { responseMimeType: "application/json", responseSchema: SCHEMA_RASPUNS, temperature: 0.9 },
    }),
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`Gemini a răspuns HTTP ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const d = await r.json();
  const text = d?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("") || "";
  const piese = (JSON.parse(text)?.piese || []) as PiesaCompusa[];
  return piese.filter((p) => limbi.includes(p.limba as Limba));
}

export async function POST(req: Request) {
  if (!(await autentificat(req))) return json({ ok: false, mesaj: "Neautentificat." }, 401);
  let corp: Record<string, unknown>;
  try {
    corp = await req.json();
  } catch {
    return json({ ok: false, mesaj: "Cerere invalidă." }, 400);
  }

  if (corp.op === "compune") {
    const cerere = String(corp.cerere || "").trim().slice(0, 1500);
    const limbi = (Array.isArray(corp.limbi) ? corp.limbi : ["ro"]).filter((l): l is Limba => l === "ro" || l === "en");
    if (cerere.length < 8) return json({ ok: false, mesaj: "Scrie cererea (ce fel de melodie, gen, stare, instrumente)." }, 400);
    if (!limbi.length) return json({ ok: false, mesaj: "Alege cel puțin o limbă." }, 400);
    let motive: string[] = [];
    const t0 = Date.now();
    for (let incercare = 0; incercare < 3 && (incercare === 0 || Date.now() - t0 < 180000); incercare++) {
      let piese: PiesaCompusa[];
      try {
        piese = await gemini(cerere, limbi, motive);
      } catch (e: unknown) {
        return json({ ok: false, mesaj: e instanceof Error ? e.message : "Eroare la Gemini." }, 502);
      }
      if (piese.length !== limbi.length) {
        motive = [`trebuie exact ${limbi.length} piese (${limbi.join(", ")})`];
        continue;
      }
      motive = lintToate(piese);
      if (!motive.length) {
        const ids = piese.map(() => `p-${randomBytes(6).toString("hex")}`);
        const rez = piese.map((p, i) => ({ ...p, id: ids[i], pereche: ids.length === 2 ? ids[1 - i] : null, cerere }));
        return json({ ok: true, piese: rez, incercari: incercare + 1 });
      }
    }
    return json({ ok: false, motive_lint: motive, mesaj: "Varianta nu a trecut verificarea după 3 încercări." }, 422);
  }

  if (corp.op === "comanda") {
    const actiune = String(corp.actiune || "");
    const piesa = String(corp.piesa || "");
    if (!ACTIUNI.has(actiune) || !RE_PIESA.test(piesa)) return json({ ok: false, mesaj: "Comandă invalidă." }, 400);
    const date = corp.date && typeof corp.date === "object" ? corp.date : {};
    const comanda = { v: 1, id: `c-${randomBytes(6).toString("hex")}`, ts: Math.floor(Date.now() / 1000), actiune, piesa, date };
    if (JSON.stringify(comanda).length > 24000) return json({ ok: false, mesaj: "Comanda e prea mare." }, 413);
    const r = await catreReleu("POST", "comanda", comanda);
    return json({ ok: r.ok, id: comanda.id, ...(r.ok ? {} : { mesaj: (r.date as { mesaj?: string })?.mesaj || `HTTP ${r.status}` }) }, r.ok ? 200 : r.status);
  }

  return json({ ok: false, mesaj: "Operație necunoscută." }, 400);
}

export async function GET(req: Request) {
  if (!(await autentificat(req))) return json({ ok: false, mesaj: "Neautentificat." }, 401);
  const url = new URL(req.url);
  const op = url.searchParams.get("op");

  if (op === "stare") {
    const r = await catreReleu("GET", "stare");
    return json(r.ok ? { ok: true, ...(r.date as object) } : { ok: false, mesaj: (r.date as { mesaj?: string })?.mesaj || `HTTP ${r.status}` },
      r.ok ? 200 : r.status);
  }

  if (op === "media") {
    const f = url.searchParams.get("f") || "";
    const s = secret();
    if (!RE_MEDIA.test(f) || !s) return json({ ok: false, mesaj: "Fișier invalid." }, 400);
    const exp = (Math.floor(Date.now() / 1000 / 3600) + 2) * 3600;
    const tinta = `${RELEU}/media?f=${encodeURIComponent(f)}&exp=${exp}&s=${semneaza(s, `${f}\n${exp}`)}`;
    return NextResponse.redirect(tinta, { status: 302, headers: { "Cache-Control": "private, max-age=600" } });
  }

  return json({ ok: false, mesaj: "Operație necunoscută." }, 400);
}
