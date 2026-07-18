import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email lipsă." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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

    // 1. Notificare admin
    await transporter.sendMail({
      from: `"Realitatea Umanoidă 2026" <${process.env.REVERB_EMAIL_USER}>`,
      to: process.env.REVERB_EMAIL_USER,
      subject: `[Humanoid 2026] Nou abonat: ${email}`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 560px; margin: 0 auto; background: #080810; color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid rgba(0,229,255,0.15);">
          <div style="border-bottom: 1px solid rgba(0,229,255,0.2); padding-bottom: 20px; margin-bottom: 24px;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.25em; color: #00E5FF;">Realitatea Umanoidă 2026</span>
          </div>
          <h2 style="font-size: 22px; font-weight: 700; color: #ffffff; margin: 0 0 16px;">Nou abonat la raport</h2>
          <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 0 0 20px;">Un nou utilizator a solicitat Raportul Realitatea Umanoidă 2026:</p>
          <div style="background: rgba(0,229,255,0.06); border: 1px solid rgba(0,229,255,0.2); border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
            <strong style="color: #00E5FF;">Email:</strong>
            <span style="color: #ffffff; margin-left: 8px;">${email}</span>
          </div>
          <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0;">
            Trimis pe ${new Date().toLocaleString("ro-RO")} · reverb.ro/humanoid-reality-2026
          </p>
        </div>
      `,
    });

    // 2. Confirmare subscriber
    await transporter.sendMail({
      from: `"Realitatea Umanoidă 2026" <${process.env.REVERB_EMAIL_USER}>`,
      to: email,
      replyTo: process.env.REVERB_EMAIL_USER,
      subject: "Raportul tău — Realitatea Umanoidă 2026",
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 560px; margin: 0 auto; background: #080810; color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid rgba(0,229,255,0.15);">
          <div style="border-bottom: 1px solid rgba(0,229,255,0.2); padding-bottom: 20px; margin-bottom: 32px;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.25em; color: #00E5FF;">Realitatea Umanoidă · 2026</span>
          </div>

          <h1 style="font-size: 28px; font-weight: 700; color: #ffffff; margin: 0 0 12px; line-height: 1.2;">
            Raportul e al tău.
          </h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 15px; line-height: 1.6; margin: 0 0 32px;">
            Bun venit în economia de <strong style="color: #00E5FF;">4 Trilioane $</strong>.<br/>
            Echipa Reverb îți va trimite accesul complet la raport în cel mult <strong style="color: #FFE600;">24 de ore</strong>.
          </p>

          <div style="background: rgba(0,229,255,0.05); border: 1px solid rgba(0,229,255,0.15); border-radius: 10px; padding: 24px; margin-bottom: 32px;">
            <p style="color: rgba(255,255,255,0.4); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 12px;">Ce vei primi</p>
            <ul style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li>48 de pagini de date exclusive despre economia umanoidelor</li>
              <li>Harta completă a actorilor — AI leaders, mass producers, democratizatori</li>
              <li>Predicții validate pentru 2027–2030</li>
              <li>Playbook de adaptare pentru companii europene</li>
            </ul>
          </div>

          <a href="https://reverb.ro/humanoid-reality-2026" style="display: inline-block; background: #00E5FF; color: #080810; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 14px 28px; border-radius: 100px; text-decoration: none; margin-bottom: 32px;">
            Accesează site-ul →
          </a>

          <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px;">
            <p style="color: rgba(255,255,255,0.2); font-size: 11px; margin: 0;">
              Ai primit acest email pentru că te-ai abonat la reverb.ro/humanoid-reality-2026<br/>
              <a href="https://reverb.ro/legal" style="color: rgba(0,229,255,0.5); text-decoration: none;">Dezabonează-te</a> ·
              <a href="https://reverb.ro/legal" style="color: rgba(0,229,255,0.5); text-decoration: none;">Politica de confidențialitate</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Humanoid Subscribe Error]", err);
    return NextResponse.json({ error: "Eroare server." }, { status: 500 });
  }
}
