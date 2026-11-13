import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { serviceOptions } from "@/lib/packages";
import { serviceOptionsEn } from "@/lib/packagesEn";
import { packageRows } from "@/lib/email/packageRows";
import { contactConfirmation, contactRequest, oraRomaniei } from "@/lib/email/templates";

// Formularul de contact (RO și EN). E-mailul se face din șabloanele din lib/email; aici nu se scrie HTML.
// Textul venit din formular se taie la o lungime rezonabilă; escaparea o face scheletul e-mailului.
const camp = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
// Subiectul și antetele primesc doar un rând: fără rânduri noi venite din formular.
const oLinie = (s: string) => s.replace(/[\r\n]+/g, " ");
// Strict, fără „?”, „&” sau spații: adresa ajunge și într-un link mailto: din e-mail.
const EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Câmp-capcană: oamenii nu îl văd, roboții îl completează. Răspundem „ok” și nu trimitem nimic.
    if (camp(body?.hp, 200)) return NextResponse.json({ ok: true });

    const name = oLinie(camp(body?.name, 120));
    const email = oLinie(camp(body?.email, 200));
    const business = oLinie(camp(body?.business, 160));
    const message = camp(body?.message, 5000);
    const lang: "ro" | "en" = body?.lang === "en" ? "en" : "ro";
    const serviceId = camp(body?.serviceId, 60);

    // Eticheta se ia din registru după id; textul trimis de formular rămâne doar ca rezervă (pagini vechi în cache).
    const options = lang === "en" ? serviceOptionsEn() : serviceOptions();
    const fromRegistry = options.find((o) => o.value === serviceId)?.label;
    // Selectorul de limbă: cine a citit pagina românească în altă limbă (germană, franceză…) trimite `siteLang`; eticheta
    // din subiect arată limba lui în loc de [EN], ca să știm cu cine vorbim. Confirmarea către el pleacă în engleză.
    const siteLang = /^[a-z]{2}$/.test(camp(body?.siteLang, 2)) ? camp(body?.siteLang, 2).toUpperCase() : "";
    const tag = siteLang || "EN";
    const service = fromRegistry ? (lang === "en" ? `[${tag}] ${fromRegistry}` : fromRegistry) : oLinie(camp(body?.service, 160));

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Câmpuri obligatorii lipsă." }, { status: 400 });
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

    // Dacă șablonul dă vreodată eroare, cererea pleacă oricum, în text simplu: nu pierdem un client pentru un e-mail frumos.
    const subject = `[Reverb] Cerere nouă — ${service} — ${name}`;
    let mail: { subject: string; text: string; html?: string };
    try {
      mail = contactRequest({ name, email, business, service, message });
    } catch (err) {
      console.error("[Reverb Contact Template Error]", err);
      mail = {
        subject,
        text: `Cerere nouă de pe reverb.ro\n\nNume: ${name}\nE-mail: ${email}\nFirmă: ${business || "—"}\nPachet: ${service}\nPrimit: ${oraRomaniei(new Date())}\n\nMesaj:\n${message}`,
      };
    }

    await transporter.sendMail({
      from: `"Reverb Contact" <${process.env.REVERB_EMAIL_USER}>`,
      to: process.env.REVERB_EMAIL_USER,
      replyTo: email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });

    // Confirmarea către omul care a scris. Oprită până când Alin o pornește (variabila CONTACT_CONFIRMATION=on).
    // Nu repetă nimic din textul liber al formularului: doar prenumele (litere) și datele pachetului din registru.
    // O eroare aici nu strică cererea, care a plecat deja.
    if (process.env.CONTACT_CONFIRMATION === "on") {
      try {
        const c = contactConfirmation({ lang, name, details: packageRows(serviceId, lang) });
        await transporter.sendMail({
          from: `"Reverb Digital" <${process.env.REVERB_EMAIL_USER}>`,
          to: email,
          replyTo: process.env.REVERB_EMAIL_USER,
          subject: c.subject,
          text: c.text,
          html: c.html,
          headers: { "Auto-Submitted": "auto-replied", "X-Auto-Response-Suppress": "All" },
        });
      } catch (err) {
        console.error("[Reverb Contact Confirmation Error]", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Reverb Contact Error]", err);
    return NextResponse.json({ error: "Eroare de server. Încearcă din nou." }, { status: 500 });
  }
}
