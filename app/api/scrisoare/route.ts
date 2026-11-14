import { NextRequest, NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "crypto";
import nodemailer from "nodemailer";

// Scrisorile Reverb (de ex. „verificarea gratuită” aprobată de Alin) pleacă de AICI, de pe serverul site-ului, nu de pe laptop.
// De ce (14 nov 2026, obs. 888): orice e-mail trimis de pe laptop prin smtp.hostinger.com poartă IP-ul de acasă în antete și ajunge
// în Spam, chiar și un „Salut” de două rânduri; confirmarea formularului, trimisă de aici, ajunge în Inbox.
// Folosită doar de scripts/trimite_scrisoare.cjs. Fără cheia REVERB_SCRISOARE_CHEIE în mediul Vercel, ruta nu există (404).
// Textul vine gata aprobat; aici doar se trimite, cu o copie ascunsă la noi.

const EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const oLinie = (s: string) => s.replace(/[\r\n]+/g, " ").trim();
const sir = (v: unknown, max: number) => (typeof v === "string" && v.length <= max ? v : null);
const amprenta = (s: string) => createHash("sha256").update(s, "utf8").digest();

function cheieBuna(req: NextRequest, cheie: string): boolean {
  const m = /^Bearer\s+(.+)$/.exec(req.headers.get("authorization") ?? "");
  return !!m && timingSafeEqual(amprenta(m[1].trim()), amprenta(cheie));
}

export async function POST(req: NextRequest) {
  const cheie = process.env.REVERB_SCRISOARE_CHEIE ?? "";
  if (cheie.length < 32) return new NextResponse(null, { status: 404 });
  if (!cheieBuna(req, cheie)) return NextResponse.json({ error: "neautorizat" }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON nevalid" }, { status: 400 });
  }
  const user = process.env.REVERB_EMAIL_USER ?? "";
  const test = body.test === true;
  const catre = sir(body.catre, 200)?.trim() ?? "";
  const subiect = oLinie(sir(body.subiect, 300) ?? "");
  const text = sir(body.text, 50_000);
  const html = body.html == null ? undefined : sir(body.html, 400_000);
  const nume = oLinie(sir(body.de, 80) ?? "Alin · Reverb Digital").replace(/["<>]/g, "");

  if (!EMAIL.test(catre)) return NextResponse.json({ error: "adresă nevalidă" }, { status: 400 });
  if (!subiect || !text || html === null) return NextResponse.json({ error: "subiect, text sau html lipsă / prea lung" }, { status: 400 });

  try {
    const t = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: { user, pass: process.env.REVERB_EMAIL_PASS },
    });
    const info = await t.sendMail({
      from: `"${nume}" <${user}>`,
      to: test ? user : catre,
      bcc: test ? undefined : user,
      replyTo: user,
      subject: subiect,
      text,
      html,
    });
    return NextResponse.json({
      ok: true,
      test,
      catre: test ? user : catre,
      acceptat: info.accepted,
      respins: info.rejected,
      id: info.messageId,
    });
  } catch (err) {
    console.error("[Reverb Scrisoare Error]", err);
    return NextResponse.json({ error: "trimiterea a eșuat pe server" }, { status: 502 });
  }
}
