// Cartea de vizită a agenției: ce suntem, firma, omul de contact. Pe prima pagină și pe Pachete.
// Alin, 14 nov 2026: „Minimalist. Punctual, exact, concis. Pure data.” și „Da, un prenume.”
// Datele firmei vin din lib/company.ts (aceleași ca în e-mailuri). Rândul de date și prenumele au `data-no-translate`:
// sunt nume proprii, la fel în toate limbile.

import { company } from "@/lib/company";

const BTN =
  "rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black";

export default function WhoWeAre({ lang = "ro", center = false }: { lang?: "ro" | "en"; center?: boolean }) {
  const en = lang === "en";
  return (
    <div className={`flex flex-col gap-2.5 ${center ? "items-center text-center" : ""}`}>
      <p className="text-sm font-light leading-relaxed text-neutral-300">
        {en ? "Digital marketing agency. Design, development, promotion." : "Agenție de marketing digital. Design, dezvoltare, promovare."}
      </p>
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
