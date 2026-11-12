import { NextRequest } from "next/server";
import { company } from "@/lib/company";
import { pkg, VAT_LABEL } from "@/lib/packages";
import { packageRows } from "@/lib/email/packageRows";
import {
  contactConfirmation,
  contactRequest,
  letter,
  subscriberNotice,
  subscriberWelcome,
  type Rendered,
} from "@/lib/email/templates";

// Previzualizarea șabloanelor de e-mail, cu date de probă. Există doar pe serverul de dezvoltare
// (`next dev`); oriunde altundeva răspunde 404. Niciun parametru nu ajunge în răspuns: se alege
// doar dintr-o listă fixă. Datele de probă sunt inventate (depozitul e public).
//
//   /api/email-preview?t=cerere|confirmare|abonat|raport|scrisoare&lang=ro|en&caz=ostil&text=1

const OSTIL = {
  name: `<script>alert(1)</script> "O'Neil" ${"x".repeat(200)}`,
  email: "test@example.com",
  business: `<img src=x onerror=alert(2)> & Fiii`,
  service: `Site Start — €267 <b>bold</b>`,
  message: `Rând 1\nRând 2 cu <a href="javascript:alert(3)">link</a>\n\n${"cuvantfoartelung".repeat(14)}\n"ghilimele" & 'apostrof'`,
};

const NORMAL = {
  name: "Maria Ionescu",
  email: "maria@example.com",
  business: "Atelier Ceramic Exemplu SRL",
  service: `${pkg("site-start").shortName} — ${pkg("site-start").price}`,
  message:
    "Bună ziua,\n\nAm un atelier de ceramică și vreau un site simplu, cu câteva poze și un formular de comandă.\nCând am putea vorbi?\n\nMulțumesc!",
};

function build(t: string, lang: "ro" | "en", ostil: boolean, assetBase: string): Rendered | null {
  const d = ostil ? OSTIL : NORMAL;
  const at = new Date("2026-11-12T10:20:00Z");
  switch (t) {
    case "cerere":
      return contactRequest({ ...d, receivedAt: at, assetBase });
    case "confirmare":
      return contactConfirmation({ lang, name: d.name, details: ostil ? [] : packageRows("site-start", lang), assetBase });
    case "abonat":
      return subscriberNotice({ email: d.email, receivedAt: at, assetBase });
    case "raport":
      return subscriberWelcome({ assetBase });
    case "scrisoare": {
      const p = pkg("site-start");
      return lang === "en"
        ? letter({
            lang,
            subject: "Your offer — Website Start",
            eyebrow: "Offer",
            title: "Your website, in 7–10 days.",
            paragraphs: [
              "Hello Maria,",
              "Thank you for the talk. Below is the offer we discussed, with what it includes and what happens next.",
            ],
            rows: [
              { label: "Package", value: "Website Start" },
              { label: "Price", value: `${p.price} ${VAT_LABEL}`.replace("TVA", "VAT") },
              { label: "Delivery", value: p.delivery.replace("zile", "days") },
            ],
            note: "If the offer suits you, reply to this e-mail and we send the contract.",
            button: { label: "See the package", href: `${company.site}/en/packages#web` },
            signatureName: "Reverb Digital team",
            signatureRole: company.offersEmail,
            assetBase,
          })
        : letter({
            lang,
            subject: "Oferta ta — Site Start",
            eyebrow: "Ofertă",
            title: "Site-ul tău, în 7–10 zile.",
            paragraphs: [
              "Bună ziua, Maria,",
              "Mulțumim pentru discuție. Mai jos e oferta despre care am vorbit, cu ce include și ce urmează.",
            ],
            rows: [
              { label: "Pachet", value: p.name },
              { label: "Preț", value: `${p.price} ${VAT_LABEL}` },
              { label: "Livrare", value: p.delivery },
            ],
            note: "Dacă oferta ți se potrivește, răspunde la acest e-mail și îți trimitem contractul.",
            button: { label: "Vezi pachetul", href: `${company.site}/pachete#web` },
            signatureName: "Echipa Reverb Digital",
            signatureRole: company.offersEmail,
            assetBase,
          });
    }
    default:
      return null;
  }
}

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV !== "development") return new Response("Not found", { status: 404 });
  const q = req.nextUrl.searchParams;
  const lang = q.get("lang") === "en" ? "en" : "ro";
  const out = build(q.get("t") ?? "", lang, q.get("caz") === "ostil", req.nextUrl.origin);
  if (!out) return new Response("Not found", { status: 404 });
  const text = q.get("text") === "1";
  return new Response(text ? `${out.subject}\n\n${out.text}` : out.html, {
    headers: {
      "Content-Type": text ? "text/plain; charset=utf-8" : "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
