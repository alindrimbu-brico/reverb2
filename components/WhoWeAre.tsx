// Cine vinde, pe un rând: firma, orașul și cum ne găsești. Folosit pe Pachete (decizia lui Alin, 12 nov 2026:
// trei revizori fără context au spus că nu lasă date fără să știe cine e firma). Pe restul paginilor, datele stau în footer.
// Datele sunt aceleași cu cele din components/Footer.tsx; se schimbă împreună.

const COMPANY = "Kalki Drim Magazin SRL";
const CITY = "Focșani";
const PHONE_RO = "0767 235 693";
const PHONE_EN = "+40 767 235 693";
const TEL = "tel:+40767235693";
const WHATSAPP = "https://wa.me/40767235693";

const BTN =
  "rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black";

export default function WhoWeAre({ lang = "ro", center = false }: { lang?: "ro" | "en"; center?: boolean }) {
  const en = lang === "en";
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2.5 ${center ? "justify-center text-center" : ""}`}>
      <p className="text-sm font-light leading-relaxed text-neutral-300">
        {en
          ? `Reverb Digital is the brand of ${COMPANY}, a company from ${CITY}, Romania.`
          : `Reverb Digital este marca firmei ${COMPANY}, din ${CITY}.`}
      </p>
      <div className={`flex flex-wrap gap-2.5 ${center ? "justify-center" : ""}`}>
        <a href={TEL} className={BTN}>
          {en ? `Call ${PHONE_EN}` : `Sună: ${PHONE_RO}`}
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={BTN}>
          WhatsApp ↗
        </a>
      </div>
    </div>
  );
}
