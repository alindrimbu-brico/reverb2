import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message, business } = body;

    if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Câmpuri obligatorii lipsă." },
        { status: 400 }
      );
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

    await transporter.sendMail({
      from: `"Reverb Contact" <${process.env.REVERB_EMAIL_USER}>`,
      to: process.env.REVERB_EMAIL_USER,
      replyTo: email,
      subject: `[Reverb] Cerere nouă — ${service} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1d2731;">
          <h2 style="border-bottom: 2px solid #1d2731; padding-bottom: 8px;">Cerere nouă de pe reverb.ro</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Nume</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Business</td><td>${business || "—"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Serviciu</td><td>${service}</td></tr>
          </table>
          <h3 style="margin-top: 20px;">Mesaj</h3>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #888;">Trimis pe ${new Date().toLocaleString("ro-RO")} prin formularul de contact reverb.ro</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Reverb Contact Error]", err);
    return NextResponse.json(
      { error: "Eroare de server. Încearcă din nou." },
      { status: 500 }
    );
  }
}
