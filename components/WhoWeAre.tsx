// Cartea de vizită a agenției: ce suntem, firma, omul de contact. Pe prima pagină și pe Pachete.
// Alin, 14 nov 2026: „Minimalist. Punctual, exact, concis. Pure data.” și „Da, un prenume.”
// Datele firmei vin din lib/company.ts (aceleași ca în e-mailuri). Rândul de date și prenumele au `data-no-translate`:
// sunt nume proprii, la fel în toate limbile.

import { company } from "@/lib/company";

const BTN =
  "rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black";

/** Definiția agenției, în două bucăți (două chei de traducere): pagina Despre le folosește ca titlu și ca rând de sub titlu. */
export const AGENCY_DEF = {
  ro: { what: "Agenție de marketing digital.", does: "Construim, promovăm și administrăm site-uri, magazine online și aplicații." },
  en: { what: "Digital marketing agency.", does: "We build, promote and manage websites, online stores and apps." },
} as const;

export default function WhoWeAre({
  lang = "ro",
  center = false,
  showDef = true,
}: {
  lang?: "ro" | "en";
  center?: boolean;
  /** `false` pe pagina Despre, unde definiția e deja titlul paginii. */
  showDef?: boolean;
}) {
  const en = lang === "en";
  const def = AGENCY_DEF[lang];
  return (
    <div className={`flex flex-col gap-2.5 ${center ? "items-center text-center" : ""}`}>
      {showDef && (
        <p className="text-sm font-light leading-relaxed text-neutral-300">
          <span>{def.what}</span> <span>{def.does}</span>
        </p>
      )}
      <p data-no-translate className="text-xs font-mono leading-relaxed text-neutral-400">
        {`${company.brand} · ${company.legalName} · ${company.city} · CUI ${company.cui}`}
      </p>
      <div className={`flex flex-wrap items-center gap-2.5 ${center ? "justify-center" : ""}`}>
        <span className="text-xs font-mono text-neutral-300">
          <span>Contact</span>
          <span data-no-translate>{`: ${company.contactName}`}</span>
        </span>
        <a href={company.tel} className={BTN}>
          {en ? `Call ${company.phoneIntl}` : `Sună: ${company.phoneDisplay}`}
        </a>
        <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className={BTN}>
          <span data-no-translate>WhatsApp ↗</span>
        </a>
      </div>
    </div>
  );
}
