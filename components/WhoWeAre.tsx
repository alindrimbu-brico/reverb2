// Cine vinde, pe un rând: firma, orașul și cum ne găsești. Folosit pe Pachete (decizia lui Alin, 12 nov 2026:
// trei revizori fără context au spus că nu lasă date fără să știe cine e firma) și, din 13 nov 2026, pe prima pagină
// („Pune cine suntem și pe prima pagină”), cu `full`: anul înființării și CUI-ul. Numărul din registru stă în footer.
// Datele firmei vin din lib/company.ts (aceleași ca în e-mailuri).

import { company } from "@/lib/company";

const BTN =
  "rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black";

/** Anul din numărul de la Registrul Comerțului („J39/335/2020” → „2020”). */
const founded = company.regCom.split("/").pop();

export default function WhoWeAre({
  lang = "ro",
  center = false,
  full = false,
}: {
  lang?: "ro" | "en";
  center?: boolean;
  /** Propoziția lungă: și anul înființării, și CUI-ul. */
  full?: boolean;
}) {
  const en = lang === "en";
  const sentence = full
    ? en
      ? `Reverb Digital is the brand of ${company.legalName}, a company from ${company.city}, Romania, founded in ${founded} (tax ID ${company.cui}).`
      : `Reverb Digital este marca firmei ${company.legalName}, din ${company.city}, înființată în ${founded} (CUI ${company.cui}).`
    : en
      ? `Reverb Digital is the brand of ${company.legalName}, a company from ${company.city}, Romania.`
      : `Reverb Digital este marca firmei ${company.legalName}, din ${company.city}.`;
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2.5 ${center ? "justify-center text-center" : ""}`}>
      <p className="text-sm font-light leading-relaxed text-neutral-300">{sentence}</p>
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
