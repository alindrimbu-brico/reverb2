import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

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

    // TODO: integrate email delivery (e.g. Resend, Nodemailer, Postmark)
    // Example with Resend:
    // import { Resend } from "resend"
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from: "...", to: "contact@reverb.ro", subject: `[Contact] ${name}`, html: `...` })

    console.log("[Reverb Contact]", {
      name,
      email,
      business: body.business ?? "",
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Eroare de server. Încearcă din nou." },
      { status: 500 }
    );
  }
}
