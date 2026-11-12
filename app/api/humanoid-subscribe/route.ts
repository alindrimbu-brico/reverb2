import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { subscriberNotice, subscriberWelcome } from "@/lib/email/templates";

// Abonarea la raportul „Realitatea Umanoidă 2026”. E-mailurile se fac din șabloanele din lib/email
// (aceeași temă ca restul site-ului, text escapat); aici nu se scrie HTML.
const camp = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
// Strict: adresa ajunge în subiect și într-un link mailto:.
const EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Câmp-capcană: oamenii nu îl văd, roboții îl completează. Răspundem „ok” și nu trimitem nimic.
    if (camp(body?.hp, 200)) return NextResponse.json({ ok: true });

    const email = camp(body?.email, 200);
    if (!email) {
      return NextResponse.json({ error: "Email lipsă." }, { status: 400 });
    }
    if (!EMAIL.test(email)) {
      return NextResponse.json({ error: "Email invalid." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.REVERB_EMAIL_USER,
        pass: process.env.REVERB_EMAIL_PASS,
      },
    });

    // 1. Notificarea către noi. La o eroare de șablon pleacă în text simplu.
    let notice: { subject: string; text: string; html?: string };
    try {
      notice = subscriberNotice({ email });
    } catch (err) {
      console.error("[Humanoid Template Error]", err);
      notice = { subject: `[Humanoid 2026] Nou abonat: ${email}`, text: `Abonat nou la raportul Realitatea Umanoidă 2026: ${email}` };
    }
    await transporter.sendMail({
      from: `"Realitatea Umanoidă 2026" <${process.env.REVERB_EMAIL_USER}>`,
      to: process.env.REVERB_EMAIL_USER,
      subject: notice.subject,
      text: notice.text,
      html: notice.html,
    });

    // 2. Confirmarea către abonat: text fix, nimic din ce a scris omul în afară de adresa lui.
    const welcome = subscriberWelcome();
    await transporter.sendMail({
      from: `"Realitatea Umanoidă 2026" <${process.env.REVERB_EMAIL_USER}>`,
      to: email,
      replyTo: process.env.REVERB_EMAIL_USER,
      subject: welcome.subject,
      text: welcome.text,
      html: welcome.html,
      headers: { "Auto-Submitted": "auto-replied", "X-Auto-Response-Suppress": "All" },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Humanoid Subscribe Error]", err);
    return NextResponse.json({ error: "Eroare server." }, { status: 500 });
  }
}
