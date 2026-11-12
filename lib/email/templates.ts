// Șabloanele de e-mail Reverb, toate peste același schelet (lib/email/layout.ts).
// Fiecare funcție întoarce { subject, html, text }. Textul primit din afară se dă aici așa cum e:
// escaparea o face scheletul. Un e-mail nou se adaugă aici, nu se scrie HTML într-o rută.

import { company } from "../company";
import { renderEmail, type Block } from "./layout";

export type Rendered = { subject: string; html: string; text: string };

/** Data și ora României, oriunde ar rula serverul (Vercel rulează în UTC). */
export function oraRomaniei(d: Date): string {
  return new Intl.DateTimeFormat("ro-RO", { timeZone: "Europe/Bucharest", dateStyle: "long", timeStyle: "short" }).format(d);
}

/** Prenumele pentru salut: primul cuvânt, doar dacă e făcut din litere și cratimă (2–30). Altfel, gol. */
export function firstName(name: string): string {
  const w = name.trim().split(/\s+/)[0] ?? "";
  return /^[A-Za-zÀ-ÖØ-öø-ÿĀ-žȘșȚț][A-Za-zÀ-ÖØ-öø-ÿĀ-žȘșȚț-]{1,29}$/.test(w) ? w : "";
}

// ───────────── 1. Cerere nouă din formularul de contact (către noi)

export function contactRequest(i: {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
  receivedAt?: Date;
  assetBase?: string;
}): Rendered {
  const { html, text } = renderEmail({
    lang: "ro",
    preheader: `${i.name} · ${i.service}`,
    eyebrow: "Cerere nouă",
    title: i.name,
    intro: `A scris prin formularul de pe reverb.ro. Răspunde direct la acest e-mail: răspunsul pleacă la ${i.email}.`,
    blocks: [
      {
        kind: "rows",
        rows: [
          { label: "Nume", value: i.name },
          { label: "E-mail", value: i.email, href: `mailto:${i.email}` },
          { label: "Firmă", value: i.business || "—" },
          { label: "Pachet", value: i.service },
          { label: "Primit", value: oraRomaniei(i.receivedAt ?? new Date()) },
        ],
      },
      { kind: "quote", label: "Mesaj", text: i.message },
    ],
    footer: "intern",
    reason: "Trimis automat de formularul de contact de pe reverb.ro.",
    assetBase: i.assetBase,
  });
  return { subject: `[Reverb] Cerere nouă — ${i.service} — ${i.name}`, html, text };
}

// ───────────── 2. Confirmare către omul care a trimis cererea (RO / EN)

export function contactConfirmation(i: {
  lang: "ro" | "en";
  name: string;
  /** Ce a ales omul: nume, preț, termen. Vin din registru (lib/email/packageRows.ts), niciodată din textul formularului. */
  details?: { label: string; value: string }[];
  assetBase?: string;
}): Rendered {
  const en = i.lang === "en";
  const fn = firstName(i.name);
  const blocks: Block[] = [];
  if (i.details?.length) blocks.push({ kind: "rows", rows: i.details });
  blocks.push(
    {
      kind: "steps",
      items: en
        ? [
            { title: "A person reads your request", text: "Not a robot: someone on our team." },
            { title: "We reply by e-mail within 24 working hours", text: "With our questions and a proposal at a fixed price." },
            { title: "We set up a talk", text: `By phone, online or at our office in ${company.city}, whichever is easier for you.` },
          ]
        : [
            { title: "Un om îți citește cererea", text: "Nu un robot: cineva din echipa noastră." },
            { title: "Îți răspundem pe e-mail în cel mult 24 de ore lucrătoare", text: "Cu întrebările noastre și o propunere cu preț fix." },
            { title: "Stabilim o discuție", text: `La telefon, online sau la biroul nostru din ${company.city}, cum îți e mai simplu.` },
          ],
    },
    {
      kind: "paragraph",
      text: en
        ? "You do not need to do anything until then. Meanwhile, you can look at what we have built."
        : "Până atunci nu ai nimic de făcut. Între timp, poți vedea ce am construit.",
    },
    { kind: "button", label: en ? "See our work" : "Vezi lucrările noastre", href: `${company.site}${en ? "/en/portfolio" : "/portofoliu"}` },
    {
      kind: "paragraph",
      text: en
        ? `If it is urgent, write to us on WhatsApp or call ${company.phoneIntl}.`
        : `Dacă e urgent, scrie-ne pe WhatsApp sau sună la ${company.phoneDisplay}.`,
    },
    { kind: "button", label: "WhatsApp", href: company.whatsapp, variant: "outline" },
  );
  const { html, text } = renderEmail({
    lang: i.lang,
    preheader: en ? "We reply by e-mail within 24 working hours." : "Îți răspundem pe e-mail în cel mult 24 de ore lucrătoare.",
    eyebrow: en ? "Request received" : "Cerere primită",
    title: en
      ? fn ? `Thank you, ${fn}. We have your request.` : "Thank you. We have your request."
      : fn ? `Mulțumim, ${fn}. Am primit cererea ta.` : "Mulțumim. Am primit cererea ta.",
    intro: en ? "The request arrived safely. Here is what happens next." : "Cererea a ajuns cu bine. Iată ce urmează.",
    blocks,
    footer: "client",
    reason: en
      ? "You received this e-mail because a request was sent through the form on reverb.ro with this address. If it was not you, ignore this message."
      : "Ai primit acest e-mail pentru că s-a trimis o cerere prin formularul de pe reverb.ro cu această adresă. Dacă nu ai trimis tu cererea, ignoră acest mesaj.",
    assetBase: i.assetBase,
  });
  return { subject: en ? "We received your request — Reverb Digital" : "Am primit cererea ta — Reverb Digital", html, text };
}

// ───────────── 3. Abonat nou la raportul „Realitatea Umanoidă 2026” (către noi)

export function subscriberNotice(i: { email: string; receivedAt?: Date; assetBase?: string }): Rendered {
  const { html, text } = renderEmail({
    lang: "ro",
    preheader: i.email,
    eyebrow: "Abonat nou",
    title: i.email,
    intro: "A cerut raportul „Realitatea Umanoidă 2026” de pe reverb.ro/humanoid-reality-2026.",
    blocks: [
      {
        kind: "rows",
        rows: [
          { label: "E-mail", value: i.email, href: `mailto:${i.email}` },
          { label: "Primit", value: oraRomaniei(i.receivedAt ?? new Date()) },
        ],
      },
    ],
    footer: "intern",
    reason: "Trimis automat de formularul de pe reverb.ro/humanoid-reality-2026.",
    assetBase: i.assetBase,
  });
  return { subject: `[Humanoid 2026] Nou abonat: ${i.email}`, html, text };
}

// ───────────── 4. Confirmare către abonatul la raport

export function subscriberWelcome(i: { assetBase?: string } = {}): Rendered {
  const { html, text } = renderEmail({
    lang: "ro",
    preheader: "Îți trimitem accesul la raport în cel mult 24 de ore.",
    eyebrow: "Realitatea Umanoidă 2026",
    title: "Raportul e al tău.",
    intro: "Echipa Reverb îți trimite accesul complet la raport în cel mult 24 de ore.",
    blocks: [
      {
        kind: "list",
        label: "Ce vei primi",
        items: [
          "48 de pagini de date despre economia umanoidelor",
          "Harta actorilor: liderii AI, producătorii de serie, cei care o fac accesibilă",
          "Predicții pentru 2027–2030",
          "Ghid de adaptare pentru companii europene",
        ],
      },
      { kind: "button", label: "Deschide pagina raportului", href: `${company.site}/humanoid-reality-2026` },
    ],
    footer: "client",
    reason:
      "Ai primit acest e-mail pentru că adresa ta a fost scrisă în formularul de pe reverb.ro/humanoid-reality-2026. Dacă nu tu ai cerut raportul, răspunde la acest mesaj și ștergem adresa.",
    assetBase: i.assetBase,
  });
  return { subject: "Raportul tău — Realitatea Umanoidă 2026", html, text };
}

// ───────────── 5. Scrisoare: ofertă, răspuns, „site-ul tău e live” (scrisă de mână, trimisă de un om)

export function letter(i: {
  lang: "ro" | "en";
  subject: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  rows?: { label: string; value: string }[];
  note?: string;
  button?: { label: string; href: string };
  signatureName: string;
  signatureRole?: string;
  preheader?: string;
  reason?: string;
  assetBase?: string;
}): Rendered {
  const blocks: Block[] = i.paragraphs.slice(1).map((text) => ({ kind: "paragraph", text }) as Block);
  if (i.rows?.length) blocks.push({ kind: "rows", rows: i.rows });
  if (i.note) blocks.push({ kind: "paragraph", text: i.note });
  if (i.button) blocks.push({ kind: "button", label: i.button.label, href: i.button.href });
  blocks.push({ kind: "divider" }, { kind: "signature", name: i.signatureName, role: i.signatureRole });
  const { html, text } = renderEmail({
    lang: i.lang,
    preheader: i.preheader ?? i.paragraphs[0] ?? i.title,
    eyebrow: i.eyebrow,
    title: i.title,
    intro: i.paragraphs[0],
    blocks,
    footer: "client",
    reason: i.reason,
    assetBase: i.assetBase,
  });
  return { subject: i.subject, html, text };
}
