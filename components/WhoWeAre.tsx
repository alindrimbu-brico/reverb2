// Cine vinde, pe un rând: firma, orașul și cum ne găsești. Folosit pe Pachete (decizia lui Alin, 12 nov 2026:
// trei revizori fără context au spus că nu lasă date fără să știe cine e firma). Pe restul paginilor, datele stau în footer.
// Datele firmei vin din lib/company.ts (aceleași ca în e-mailuri).

import { company } from "@/lib/company";

const BTN =
  "rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black";

export default function WhoWeAre({ lang = "ro", center = false }: { lang?: "ro" | "en"; center?: boolean }) {
  const en = lang === "en";
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2.5 ${center ? "justify-center text-center" : ""}`}>
      <p className="text-sm font-light leading-relaxed text-neutral-300">
        {en
          ? `Reverb Digital is the brand of ${company.legalName}, a company from ${company.city}, Romania.`
          : `Reverb Digital este marca firmei ${company.legalName}, din ${company.city}.`}
      </p>
      <div className={`flex flex-wrap gap-2.5 ${center ? "justify-center" : ""}`}>
        <a href={company.tel} className={BTN}>
          {en ? `Call ${company.phoneIntl}` : `Sună: ${company.phoneDisplay}`}
        </a>
        <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className={BTN}>
          WhatsApp ↗
        </a>
      </div>
    </div>
  );
}
