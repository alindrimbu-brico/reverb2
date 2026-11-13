"use client";

// Reverb Studio — Muzică: starea unei piese în coada Suno și butoanele ei
// (felia 2 a motorului de creație: docs/designs/motor_creatie_2026-11-12/felia2_decizii.md).
// Butonul NU trimite nimic în Suno: pune un semn pe ciornă. Generarea o face o sesiune Claude pe laptop, la cuvântul lui Alin,
// după scripts/PROCEDURA_SUNO.md. Textele de aici trebuie să spună asta fără ocol.

import { useState } from "react";

export type SunoPiesa = { trimis_la: string | null; inceput_la: string | null; ids: string[] } | null;
export type SunoCota = { ramase: number; citita_la?: string | null; reinnoire?: string | null } | null;

export const FRAZA_COADA = "generează ce e în coadă";
export const FRAZA_REIA = "reia coada Suno";

const LUNI = ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "nov", "dec"];

/** „14:02” pentru azi, „12 nov, 14:02” pentru altă zi. */
export function oraScurta(iso?: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const ora = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  return d.toDateString() === new Date().toDateString() ? ora : `${d.getDate()} ${LUNI[d.getMonth()]}, ${ora}`;
}

export function ziScurta(iso?: string | null): string {
  if (!iso) return "";
  const d = new Date(iso.length === 10 ? `${iso}T12:00:00` : iso);
  return Number.isNaN(d.getTime()) ? "" : `${d.getDate()} ${LUNI[d.getMonth()]}`;
}

function minuteDe(iso?: string | null): number {
  if (!iso) return 0;
  const t = Date.parse(iso);
  return Number.isNaN(t) ? 0 : (Date.now() - t) / 60000;
}

/** Cota de descărcări, într-un rând; după data reînnoirii numărul vechi nu se mai arată. */
export function textCota(cota: SunoCota): string {
  if (!cota || typeof cota.ramase !== "number") return "";
  if (cota.reinnoire && Date.parse(`${cota.reinnoire}T00:00:00`) <= Date.now()) return "";
  return `descărcări Suno rămase: ${cota.ramase}${cota.reinnoire ? ` (se reînnoiesc ${ziScurta(cota.reinnoire)})` : ""}`;
}

const BUTON = "min-h-11 rounded-full px-5 text-sm font-medium transition-colors";
const BUTON_PLIN = `${BUTON} bg-white text-black hover:bg-neutral-200 disabled:opacity-40`;
const BUTON_GOL = `${BUTON} border border-white/20 text-neutral-200 hover:bg-white/10`;

function CopiazaFraza({ fraza }: { fraza: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      className={BUTON_GOL}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(fraza);
          setOk(true);
          setTimeout(() => setOk(false), 1500);
        } catch {
          /* clipboard indisponibil: fraza e scrisă alături */
        }
      }}
    >
      {ok ? "✓ Copiat" : "Copiază fraza"}
    </button>
  );
}

type Props = {
  /** Starea piesei pe laptop; null = piesa nu a ajuns (încă) pe laptop. */
  stare: string | null;
  suno: SunoPiesa;
  /** Piesa are stil și versuri, deci poate intra în coadă. */
  poate: boolean;
  cota: SunoCota;
  /** Id-urile Suno ale variantelor deja aduse pe laptop. */
  aduse: string[];
  titlu: string;
  /** Ora apăsării, cât laptopul nu a confirmat încă. */
  asteptare: string | null;
  /** Ultimul refuz al laptopului pentru această piesă, dacă e mai nou decât apăsarea. */
  refuz: string | null;
  laptopViu: boolean;
  onPune: () => void;
  onRetrage: () => void;
  onBiblioteca?: () => void;
};

export default function SunoStare({ stare, suno, poate, cota, aduse, titlu, asteptare, refuz, laptopViu, onPune, onRetrage, onBiblioteca }: Props) {
  const inCoada = stare === "ciorna" && !!suno?.trimis_la;
  const ids = suno?.ids || [];
  const neaduse = ids.filter((id) => !aduse.includes(id));
  const cotaText = textCota(cota);

  // Piesa are deja sunet pe laptop.
  if (stare && stare !== "ciorna") {
    if (stare === "respinsa") return null;
    return (
      <div className="space-y-2 text-sm text-neutral-300" data-suno="gata">
        {onBiblioteca && (
          <div className="flex flex-wrap items-center gap-3">
            <span>Piesa e gata.</span>
            <button type="button" className={BUTON_PLIN} onClick={onBiblioteca}>Ascult-o în Bibliotecă</button>
          </div>
        )}
        {neaduse.length > 0 && (
          <p>
            {neaduse.length === 1 ? "O variantă a rămas doar în Suno: " : "Variante rămase doar în Suno: "}
            {neaduse.map((id) => (
              <a key={id} href={`https://suno.com/song/${id}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 mr-2">
                ascult-o acolo ↗
              </a>
            ))}
            Ca s-o ai și aici, spune-i lui Claude: „adu și a doua pentru «{titlu}»”. Costă 1 descărcare{cotaText ? `; ${cotaText}` : ""}.
          </p>
        )}
      </div>
    );
  }

  // Generată în Suno, dar neadusă pe laptop.
  if (inCoada && ids.length > 0) {
    return (
      <div className="space-y-3 rounded-xl border border-white/15 p-4 text-sm text-neutral-200" data-suno="neadusa">
        <p className="font-medium text-white">Generată în Suno, încă neadusă pe laptop.</p>
        <p>
          {ids.map((id, i) => (
            <a key={id} href={`https://suno.com/song/${id}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 mr-3">
              Varianta {i + 1} în Suno ↗
            </a>
          ))}
        </p>
        <p className="text-neutral-300">Ca să apară aici, pe laptop spune-i lui Claude: „{FRAZA_REIA}”.{cotaText ? ` Acum: ${cotaText}.` : ""}</p>
        <CopiazaFraza fraza={FRAZA_REIA} />
      </div>
    );
  }

  // Generarea a pornit.
  if (inCoada && suno?.inceput_la) {
    const intrerupta = minuteDe(suno.inceput_la) > 15;
    return (
      <div className="space-y-3 rounded-xl border border-white/15 p-4 text-sm text-neutral-200" data-suno={intrerupta ? "intrerupta" : "se-genereaza"}>
        {intrerupta ? (
          <>
            <p className="font-medium text-white">Generarea pare întreruptă (pornită la {oraScurta(suno.inceput_la)}).</p>
            <p className="text-neutral-300">Pe laptop spune-i lui Claude: „{FRAZA_REIA}”. Nu se generează a doua oară: caută întâi piesa în Suno.</p>
            <CopiazaFraza fraza={FRAZA_REIA} />
          </>
        ) : (
          <p className="font-medium text-white">Se generează în Suno (din {oraScurta(suno.inceput_la)}). Apare în Bibliotecă în câteva minute.</p>
        )}
      </div>
    );
  }

  // În coadă, neîncepută.
  if (inCoada) {
    return (
      <div className="space-y-3 rounded-xl border border-white/15 p-4 text-sm text-neutral-200" data-suno="in-coada">
        <p className="font-medium text-white">În coada Suno din {oraScurta(suno?.trimis_la)}. Nu pleacă singură.</p>
        <p className="text-neutral-300">
          Pe laptop, cu Chrome deschis, spune-i lui Claude: „{FRAZA_COADA}”. Cam 4 minute pe piesă, apoi o asculți în Bibliotecă.
        </p>
        <div className="flex flex-wrap gap-2">
          <CopiazaFraza fraza={FRAZA_COADA} />
          <button type="button" className={BUTON_GOL} onClick={onRetrage}>Retrage din coadă</button>
        </div>
        {refuz && <p className="text-rose-300">Laptopul a refuzat: {refuz}</p>}
      </div>
    );
  }

  // Ciornă care nu e în coadă (sau încă neajunsă pe laptop).
  return (
    <div className="space-y-2 text-sm" data-suno="de-pus">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className={BUTON_PLIN} onClick={onPune} disabled={stare === "ciorna" && !poate}>Pune în coada Suno</button>
        <span className="text-neutral-400">
          10 credite{cotaText ? ` · ${cotaText}` : ""}
        </span>
      </div>
      <p className="text-neutral-400">
        Pleacă abia când îi spui lui Claude, pe laptop: „{FRAZA_COADA}”. De aici doar o pui la rând.
      </p>
      {stare === "ciorna" && !poate && <p className="text-neutral-400">Piesa nu are stil și versuri; scrie-o întâi în „Creează”.</p>}
      {asteptare && !refuz && (
        <p className="text-neutral-300">
          Pusă la rând la {oraScurta(asteptare)}; {laptopViu ? "aștept confirmarea laptopului (până la un minut)." : "laptopul e oprit, intră în coadă când pornește."}
        </p>
      )}
      {refuz && <p className="text-rose-300">Laptopul a refuzat: {refuz}</p>}
    </div>
  );
}
