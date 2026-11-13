"use client";

// Reverb Studio — Muzică → Creează: tema + rețeta de sunet (stiluri pe trepte, instrumente, voce, stare, tempo) + reglaj în cuvinte.
// Plan: docs/designs/motor_creatie_2026-11-12/design_v2_decizii.md. Stilul care pleacă la Suno îl scrie lib/musicReteta.ts, nu modelul;
// textul afișat aici e exact cel compilat. Controalele au ținte de cel puțin 44 px și text de cel puțin 14 px.

import { useMemo, useState } from "react";
import { useStored } from "@/lib/useStored";
import {
  CARACTERE, ETICHETE_POZITIE, ETICHETE_TREAPTA, FAMILII, INSTRUMENTE, MAX_STARI, MAX_STILURI, POZITII, STARI, STILURI, SUNETE, VOCI,
  compileazaStil, normalizeazaReteta, regleazaInCuvinte, retetaEGoala, retetaGoala, trepteStiluri, type Pozitie, type Reteta,
} from "@/lib/musicReteta";

export type CerereCreatie = { cerere: string; limbi: ("ro" | "en")[]; reteta: Reteta; copii: boolean };

const CHEIE = "reverb-muzica-creeaza-v1";
type Salvat = { cerere: string; ro: boolean; en: boolean; copii: boolean; reteta: Reteta };

/** Ciorna ținută minte în browser (un singur șir JSON, citit cu lib/useStored.ts) → starea ecranului, cu valori implicite. */
function desface(brut: string): Salvat {
  try {
    const d = JSON.parse(brut || "null");
    if (d && typeof d === "object") {
      return { cerere: String(d.cerere || "").slice(0, 1500), ro: d.ro !== false, en: !!d.en, copii: !!d.copii, reteta: normalizeazaReteta(d.reteta) };
    }
  } catch {
    /* ciornă stricată: pornim de la zero */
  }
  return { cerere: "", ro: true, en: false, copii: false, reteta: retetaGoala() };
}

const pastila = (activ: boolean) =>
  `min-h-11 rounded-full border px-4 text-sm ${activ ? "border-white bg-white text-black font-medium" : "border-white/15 bg-white/5 text-neutral-200 hover:bg-white/10"} disabled:opacity-35`;
const titluSectiune = "text-xs font-mono uppercase tracking-widest text-neutral-400";

export default function CreeazaPanou({
  lucreaza, eroare, motive, onScrie,
}: { lucreaza: boolean; eroare: string | null; motive: string[]; onScrie: (c: CerereCreatie) => void }) {
  // Ciorna (tema + reglajele) se salvează singură la fiecare schimbare, doar în acest browser.
  const [brut, setBrut] = useStored(CHEIE, "");
  const salvat = useMemo(() => desface(brut), [brut]);
  const { cerere, copii, reteta } = salvat;
  const limbi = useMemo(() => ({ ro: salvat.ro, en: salvat.en }), [salvat.ro, salvat.en]);
  const pune = (p: Partial<Salvat>) => setBrut(JSON.stringify({ ...salvat, ...p }));
  const [familie, setFamilie] = useState<string | null>(null);
  const [fraza, setFraza] = useState("");
  const [reglaj, setReglaj] = useState<{ schimbari: string[]; neinteles: string[] } | null>(null);

  const trepte = useMemo(() => trepteStiluri(reteta.stiluri), [reteta.stiluri]);
  const limbaAfisata: "ro" | "en" = limbi.ro ? "ro" : "en";
  const compilat = useMemo(() => compileazaStil(reteta, { limba: limbaAfisata }), [reteta, limbaAfisata]);
  const goala = retetaEGoala(reteta);
  const schimba = (f: (r: Reteta) => Reteta) => pune({ reteta: normalizeazaReteta(f(structuredClone(reteta))) });

  const comutaStil = (id: string) =>
    schimba((r) => {
      if (r.stiluri.some((s) => s.id === id)) r.stiluri = r.stiluri.filter((s) => s.id !== id);
      else if (r.stiluri.length < MAX_STILURI) r.stiluri.push({ id, pondere: r.stiluri.length ? 50 : 100 });
      return r;
    });
  const punePondere = (id: string, p: number) =>
    schimba((r) => {
      const s = r.stiluri.find((x) => x.id === id);
      if (s) s.pondere = Math.max(1, Math.min(100, Math.round(p)));
      return r;
    });
  const puneInstrument = (id: string, poz: Pozitie | "auto") =>
    schimba((r) => {
      if (poz === "auto") delete r.instrumente[id];
      else r.instrumente[id] = poz;
      return r;
    });

  function aplicaFraza() {
    if (!fraza.trim()) return;
    const rez = regleazaInCuvinte(reteta, fraza);
    pune({ reteta: rez.reteta });
    setReglaj({ schimbari: rez.schimbari, neinteles: rez.neinteles });
    setFraza("");
  }
  function puneLaNote() {
    if (!reglaj?.neinteles.length) return;
    schimba((r) => ({ ...r, note: [r.note, ...reglaj.neinteles].filter(Boolean).join("; ") }));
    setReglaj({ schimbari: reglaj.schimbari, neinteles: [] });
  }

  const rezumatInstrumente = useMemo(() => {
    const p = INSTRUMENTE.filter((i) => reteta.instrumente[i.id]).map((i) =>
      reteta.instrumente[i.id] === "fara" ? `fără ${i.ro.toLowerCase()}` : `${i.ro.toLowerCase()} ${ETICHETE_POZITIE[reteta.instrumente[i.id]]}`);
    return p.length ? `${p.join(", ")} · restul auto` : "toate pe auto";
  }, [reteta.instrumente]);
  const rezumatVoce = [VOCI.find((v) => v.id === reteta.voce)?.ro, CARACTERE.find((c) => c.id === reteta.caracter)?.ro].filter(Boolean).join(", ") || "auto";
  const rezumatStare = [
    ...reteta.stari.map((s) => STARI.find((x) => x.id === s)?.ro),
    reteta.tempo !== null ? `${reteta.tempo} BPM` : null,
    reteta.tonalitate, reteta.energie === "calm" ? "energie mică" : reteta.energie === "mare" ? "energie mare" : null,
    SUNETE.find((s) => s.id === reteta.sunet)?.ro,
  ].filter(Boolean).join(", ") || "auto";

  const poateScrie = !lucreaza && cerere.trim().length >= 8 && (limbi.ro || limbi.en) && !compilat.eroare;

  return (
    <div className="space-y-7">
      {/* 1. Tema */}
      <div className="space-y-3">
        <label className={titluSectiune} htmlFor="tema-muzica">Despre ce e cântecul?</label>
        <textarea
          id="tema-muzica"
          value={cerere}
          onChange={(e) => pune({ cerere: e.target.value })}
          rows={3}
          maxLength={1500}
          placeholder="Ex.: o seară de iarnă pe uliță, copiii se întorc de la colindat, bunica îi așteaptă cu cozonac"
          className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-base text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none"
        />
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {(["ro", "en"] as const).map((x) => (
            <label key={x} className="flex min-h-11 items-center gap-2 text-sm text-neutral-200">
              <input type="checkbox" className="h-5 w-5" checked={limbi[x]} onChange={(e) => pune({ [x]: e.target.checked })} />
              {x === "ro" ? "Română" : "Engleză"}
            </label>
          ))}
          <label className="flex min-h-11 items-center gap-2 text-sm text-neutral-200">
            <input type="checkbox" className="h-5 w-5" checked={copii} onChange={(e) => pune({ copii: e.target.checked })} />
            Pentru copii
          </label>
        </div>
      </div>

      {/* 2. Stilul */}
      <div className="space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <span className={titluSectiune}>Stilul muzical</span>
          <span className="text-xs text-neutral-400">{reteta.stiluri.length} din {MAX_STILURI} alese</span>
        </div>

        {reteta.stiluri.length === 0 && (
          <p className="text-sm text-neutral-400">Alege unul până la patru stiluri de mai jos. Dacă nu alegi nimic, stilul îl hotărăște compozitorul din temă.</p>
        )}

        {reteta.stiluri.map((s) => {
          const def = STILURI.find((x) => x.id === s.id)!;
          const t = trepte[s.id];
          const singur = reteta.stiluri.length === 1;
          return (
            <div key={s.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-base text-white font-medium">{def.ro}</span>
                <span className="text-sm text-neutral-300">{singur ? "singurul stil" : `${s.pondere} · ${ETICHETE_TREAPTA[t]}`}</span>
              </div>
              {!singur && (
                <div className="mt-2 flex items-center gap-2">
                  <button type="button" aria-label={`Mai puțin ${def.ro}`} onClick={() => punePondere(s.id, s.pondere - 5)}
                    className="h-11 w-11 shrink-0 rounded-full border border-white/15 text-lg text-neutral-200 hover:bg-white/10">−</button>
                  <input
                    type="range" min={1} max={100} value={s.pondere} aria-label={`Cât ${def.ro}, de la 1 la 100`}
                    onChange={(e) => punePondere(s.id, Number(e.target.value))}
                    className="h-11 min-w-0 flex-1 text-neutral-200" style={{ touchAction: "pan-y", accentColor: "currentColor" }}
                  />
                  <button type="button" aria-label={`Mai mult ${def.ro}`} onClick={() => punePondere(s.id, s.pondere + 5)}
                    className="h-11 w-11 shrink-0 rounded-full border border-white/15 text-lg text-neutral-200 hover:bg-white/10">+</button>
                </div>
              )}
              <button type="button" onClick={() => comutaStil(s.id)} className="mt-1 min-h-11 text-sm text-neutral-400 hover:text-neutral-200">Scoate stilul</button>
            </div>
          );
        })}

        {reteta.stiluri.length > 1 && (
          <p className="text-sm text-neutral-400">
            Suno nu măsoară procente. Cursorul alege una din două trepte față de stilul de bază: „o idee” (sub jumătatea bazei) sau „clar” (de la jumătate în sus). Treapta e cuvântul care pleacă; doza fină o alegi ascultând variantele.
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {FAMILII.map((f) => {
            const n = reteta.stiluri.filter((s) => STILURI.find((x) => x.id === s.id)?.familie === f).length;
            return (
              <button key={f} type="button" aria-expanded={familie === f} onClick={() => setFamilie(familie === f ? null : f)} className={pastila(familie === f)}>
                {f}{n ? ` · ${n}` : ""}
              </button>
            );
          })}
        </div>
        {familie && (
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap gap-2">
              {STILURI.filter((s) => s.familie === familie).map((s) => {
                const ales = reteta.stiluri.some((x) => x.id === s.id);
                return (
                  <button key={s.id} type="button" aria-pressed={ales} disabled={!ales && reteta.stiluri.length >= MAX_STILURI} onClick={() => comutaStil(s.id)} className={pastila(ales)}>
                    {s.ro}
                  </button>
                );
              })}
            </div>
            {reteta.stiluri.length >= MAX_STILURI && <p className="mt-3 text-sm text-neutral-400">Ai ales {MAX_STILURI} stiluri. Scoate unul ca să pui altul.</p>}
          </div>
        )}
      </div>

      {/* 3. Ce pleacă la Suno */}
      {!goala && (
        <div className="space-y-2">
          <span className={titluSectiune}>Pleacă la Suno</span>
          <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm text-neutral-200">{compilat.text}</pre>
          {compilat.exclude && <p className="text-sm text-neutral-300">Exclude: <span className="font-mono">{compilat.exclude}</span></p>}
          <p className="text-sm text-neutral-400">La scriere se adaugă o propoziție de atmosferă, potrivită cu tema.</p>
          {compilat.scoase.length > 0 && <p className="text-sm text-neutral-300">N-a mai încăput: {compilat.scoase.join(", ")}.</p>}
          {compilat.eroare && <div className="rounded-xl border border-rose-400/30 p-3 text-sm text-rose-300">{compilat.eroare}</div>}
        </div>
      )}

      {/* 4. Reglajul în cuvinte */}
      <div className="space-y-2">
        <label className={titluSectiune} htmlFor="regleaza-muzica">Reglează în cuvinte</label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="regleaza-muzica"
            value={fraza}
            onChange={(e) => setFraza(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") aplicaFraza(); }}
            placeholder="mai mult bas, scoate tobele, adaugă viori și pian"
            className="min-h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-black/40 px-4 text-base text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none"
          />
          <button type="button" onClick={aplicaFraza} disabled={!fraza.trim()} className="min-h-11 rounded-full border border-white/20 px-5 text-sm text-neutral-100 hover:bg-white/10 disabled:opacity-35">
            Aplică
          </button>
        </div>
        {reglaj && (reglaj.schimbari.length > 0 || reglaj.neinteles.length > 0) && (
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
            {reglaj.schimbari.length > 0 && (
              <ul className="space-y-1 text-neutral-200">{reglaj.schimbari.map((s, i) => <li key={`${s}-${i}`}>{s}</li>)}</ul>
            )}
            {reglaj.neinteles.length > 0 && (
              <div className="mt-2 space-y-2">
                <p className="text-neutral-300">N-am un reglaj pentru: {reglaj.neinteles.map((n) => `„${n}”`).join(", ")}.</p>
                <button type="button" onClick={puneLaNote} className="min-h-11 rounded-full border border-white/20 px-4 text-sm text-neutral-100 hover:bg-white/10">
                  Pune-le la note pentru compozitor
                </button>
              </div>
            )}
          </div>
        )}
        {reteta.note && (
          <p className="text-sm text-neutral-300">
            Note pentru compozitor: „{reteta.note}”{" "}
            <button type="button" onClick={() => schimba((r) => ({ ...r, note: "" }))} className="min-h-11 px-2 text-neutral-400 underline hover:text-neutral-200">șterge</button>
          </p>
        )}
      </div>

      {/* 5. Reglaje ascunse implicit, cu rezumatul în titlu */}
      <details className="rounded-2xl border border-white/10 bg-black/30">
        <summary className="min-h-11 cursor-pointer px-4 py-3 text-sm leading-snug text-neutral-200">Instrumente: <span className="ml-1 text-neutral-400">{rezumatInstrumente}</span></summary>
        <div className="grid grid-cols-1 gap-3 border-t border-white/10 p-4 md:grid-cols-2">
          {INSTRUMENTE.map((i) => {
            const acum: Pozitie | "auto" = reteta.instrumente[i.id] || "auto";
            return (
              <div key={i.id} className="min-w-0">
                <div className="mb-1 text-sm text-neutral-200">{i.ro}</div>
                <div className="grid grid-cols-5 gap-1" role="group" aria-label={i.ro}>
                  {(["auto", ...POZITII] as const).map((p) => (
                    <button key={p} type="button" aria-pressed={acum === p} onClick={() => puneInstrument(i.id, p)}
                      className={`min-h-11 rounded-lg border text-sm ${acum === p ? "border-white bg-white text-black font-medium" : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10"}`}>
                      {ETICHETE_POZITIE[p]}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </details>

      <details className="rounded-2xl border border-white/10 bg-black/30">
        <summary className="min-h-11 cursor-pointer px-4 py-3 text-sm leading-snug text-neutral-200">Voce: <span className="ml-1 text-neutral-400">{rezumatVoce}</span></summary>
        <div className="space-y-4 border-t border-white/10 p-4">
          <div className="flex flex-wrap gap-2">
            {VOCI.map((v) => (
              <button key={v.id} type="button" aria-pressed={reteta.voce === v.id} onClick={() => schimba((r) => ({ ...r, voce: r.voce === v.id ? null : v.id }))} className={pastila(reteta.voce === v.id)}>{v.ro}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {CARACTERE.map((c) => (
              <button key={c.id} type="button" aria-pressed={reteta.caracter === c.id} onClick={() => schimba((r) => ({ ...r, caracter: r.caracter === c.id ? null : c.id }))} className={pastila(reteta.caracter === c.id)}>{c.ro}</button>
            ))}
          </div>
        </div>
      </details>

      <details className="rounded-2xl border border-white/10 bg-black/30">
        <summary className="min-h-11 cursor-pointer px-4 py-3 text-sm leading-snug text-neutral-200">Stare, tempo, sunet: <span className="ml-1 text-neutral-400">{rezumatStare}</span></summary>
        <div className="space-y-5 border-t border-white/10 p-4">
          <div>
            <div className="mb-2 text-sm text-neutral-300">Starea (cel mult {MAX_STARI})</div>
            <div className="flex flex-wrap gap-2">
              {STARI.map((s) => {
                const ales = reteta.stari.includes(s.id);
                return (
                  <button key={s.id} type="button" aria-pressed={ales} disabled={!ales && reteta.stari.length >= MAX_STARI}
                    onClick={() => schimba((r) => ({ ...r, stari: ales ? r.stari.filter((x) => x !== s.id) : [...r.stari, s.id] }))} className={pastila(ales)}>{s.ro}</button>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between text-sm text-neutral-300">
              <span>Tempo: {reteta.tempo === null ? "auto" : `${reteta.tempo} bătăi pe minut`}</span>
              {reteta.tempo !== null && (
                <button type="button" onClick={() => schimba((r) => ({ ...r, tempo: null }))} className="min-h-11 px-2 text-neutral-400 underline hover:text-neutral-200">pune pe auto</button>
              )}
            </div>
            <input type="range" min={50} max={180} value={reteta.tempo ?? 100} aria-label="Tempo, bătăi pe minut"
              onChange={(e) => schimba((r) => ({ ...r, tempo: Number(e.target.value) }))} className="h-11 w-full text-neutral-200" style={{ touchAction: "pan-y", accentColor: "currentColor" }} />
            <div className="flex justify-between text-xs text-neutral-500"><span>lent</span><span>alert</span></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["major", "minor"] as const).map((t) => (
              <button key={t} type="button" aria-pressed={reteta.tonalitate === t} onClick={() => schimba((r) => ({ ...r, tonalitate: r.tonalitate === t ? null : t }))} className={pastila(reteta.tonalitate === t)}>
                {t === "major" ? "Major (luminos)" : "Minor (umbrit)"}
              </button>
            ))}
            {(["calm", "mare"] as const).map((e) => (
              <button key={e} type="button" aria-pressed={reteta.energie === e} onClick={() => schimba((r) => ({ ...r, energie: r.energie === e ? null : e }))} className={pastila(reteta.energie === e)}>
                {e === "calm" ? "Energie mică" : "Energie mare"}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {SUNETE.map((s) => (
              <button key={s.id} type="button" aria-pressed={reteta.sunet === s.id} onClick={() => schimba((r) => ({ ...r, sunet: r.sunet === s.id ? null : s.id }))} className={pastila(reteta.sunet === s.id)}>{s.ro}</button>
            ))}
          </div>
        </div>
      </details>

      {/* 6. Scrie */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onScrie({ cerere: cerere.trim(), limbi: (["ro", "en"] as const).filter((x) => limbi[x]), reteta, copii })}
            disabled={!poateScrie}
            className="min-h-12 rounded-full bg-white px-6 text-sm font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 disabled:opacity-40"
          >
            {lucreaza ? "Scriu… (până la un minut)" : "Scrie promptul și versurile"}
          </button>
          {!goala && (
            <button type="button" onClick={() => { pune({ reteta: retetaGoala() }); setReglaj(null); }} className="min-h-11 rounded-full border border-white/15 px-4 text-sm text-neutral-300 hover:bg-white/10">
              Golește reglajele
            </button>
          )}
        </div>
        {cerere.trim().length < 8 && <p className="text-sm text-neutral-400">Scrie tema ca să pot compune.</p>}
        {eroare && (
          <div className="rounded-xl border border-rose-400/30 p-3 text-sm text-rose-300">
            {eroare}
            {motive.length > 0 && <ul className="mt-2 list-disc pl-5">{motive.map((m) => <li key={m}>{m}</li>)}</ul>}
          </div>
        )}
      </div>
    </div>
  );
}
