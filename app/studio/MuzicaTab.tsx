"use client";

// Reverb Studio — Muzică: Compune (prompt + versuri pentru Suno) și Bibliotecă (piesele de pe laptop: player, imagini, clip, kit YouTube).
// Plan: docs/designs/studio_muzica_2026-11-11/design_v2.md + design_v2_1_decizii.md. Nimic de aici nu publică singur pe YouTube.

import { useCallback, useEffect, useMemo, useState } from "react";

type Instrument = { ro: string; en: string };
type Scena = { nr: number; strofa: string; prompt_en: string };
type Kit = { titlu: string; descriere: string; etichete: string[]; playlist?: string };
type PiesaCompusa = {
  id: string; pereche: string | null; cerere: string; limba: "ro" | "en"; titlu: string; stil: string; exclude: string;
  versuri: string; instrumente_cerute: Instrument[]; scene: Scena[]; kit: Kit;
};
type Varianta = { nr: number; durata_s: number | null; scor: number | null; media: string | null };
type PiesaOglinda = {
  id: string; titlu: string; limba: "ro" | "en"; pereche: string | null; sursa: string; stare: string;
  lucru: { actiune: string; pornit_la: string } | null; eroare: string | null; varianta_aleasa: number | null; imagini: number;
  variante: Varianta[]; scene: Scena[];
  clip: { previzualizare: string | null; sincronizare: string | null; final: boolean; short: boolean };
  kit: Kit; youtube_url: string | null; actualizat_la: string;
};
type Stare = {
  stare?: { piese?: PiesaOglinda[]; erori_comenzi?: { comanda: string; piesa: string; actiune: string; la: string; motiv: string }[]; generat_la?: string };
  viu?: { lucrez_la: string | null; pas: string; primit: string } | null;
  coada?: number;
};

const ETICHETE_STARE: Record<string, [string, string]> = {
  ciorna: ["Ciornă: lipsește piesa", "bg-neutral-700 text-neutral-200"],
  generata: ["Piesă gata: alege și aprobă", "bg-sky-500/20 text-sky-200"],
  previzualizare: ["Previzualizare clip", "bg-amber-400/20 text-amber-200"],
  de_urcat: ["Kit gata de urcat", "bg-emerald-500/20 text-emerald-200"],
  urcata: ["Urcată pe YouTube", "bg-emerald-600 text-white"],
  respinsa: ["Respinsă", "bg-rose-500/20 text-rose-200"],
};
const CHEIE_LOCALA = "reverb-muzica-ciorne-v1";

function citesteLocal(): Record<string, PiesaCompusa> {
  try {
    return JSON.parse(localStorage.getItem(CHEIE_LOCALA) || "{}");
  } catch {
    return {};
  }
}
function scrieLocal(d: Record<string, PiesaCompusa>) {
  try {
    localStorage.setItem(CHEIE_LOCALA, JSON.stringify(d));
  } catch {
    /* fără stocare locală: ciorna rămâne doar în pagină */
  }
}
function mediaUrl(f: string) {
  return `/api/studio/muzica?op=media&f=${encodeURIComponent(f)}`;
}
function minute(iso?: string) {
  if (!iso) return Infinity;
  return (Date.now() - Date.parse(iso)) / 60000;
}
function fmtDurata(s: number | null) {
  if (!s) return "—";
  const t = Math.round(s);   // întâi rotunjirea, apoi minutele (altfel 179,7 s ieșea „2:60”)
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
}

function Copiaza({ text, eticheta }: { text: string; eticheta: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setOk(true);
          setTimeout(() => setOk(false), 1500);
        } catch {
          /* clipboard indisponibil */
        }
      }}
      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-200 hover:bg-white/10"
    >
      {ok ? "✓ copiat" : `Copiază ${eticheta}`}
    </button>
  );
}

export default function MuzicaTab({ onNeautentificat }: { onNeautentificat: () => void }) {
  const [sub, setSub] = useState<"compune" | "biblioteca">("compune");
  const [cerere, setCerere] = useState("");
  const [limbi, setLimbi] = useState<{ ro: boolean; en: boolean }>({ ro: true, en: true });
  const [compune, setCompune] = useState<{ lucreaza: boolean; eroare: string | null; motive: string[] }>({ lucreaza: false, eroare: null, motive: [] });
  const [ciorne, setCiorne] = useState<Record<string, PiesaCompusa>>({});
  const [linkuri, setLinkuri] = useState<Record<string, string>>({});
  const [stare, setStare] = useState<Stare | null>(null);
  const [eroareStare, setEroareStare] = useState<string | null>(null);
  const [trimise, setTrimise] = useState<Record<string, string>>({});
  const [optiuni, setOptiuni] = useState<Record<string, { varianta?: number; versuri: boolean; short: boolean }>>({});
  const [ytLink, setYtLink] = useState<Record<string, string>>({});

  useEffect(() => setCiorne(citesteLocal()), []);

  const incarcaStare = useCallback(async () => {
    try {
      const r = await fetch("/api/studio/muzica?op=stare", { cache: "no-store" });
      if (r.status === 401) return onNeautentificat();
      const d = await r.json();
      if (!d.ok) {
        setEroareStare(d.mesaj || "Starea nu poate fi citită.");
        return;
      }
      setEroareStare(null);
      setStare(d);
    } catch {
      setEroareStare("Studio nu poate citi starea laptopului acum.");
    }
  }, [onNeautentificat]);

  useEffect(() => {
    incarcaStare();
    const t = setInterval(() => {
      if (document.visibilityState === "visible") incarcaStare();
    }, 15000);
    return () => clearInterval(t);
  }, [incarcaStare]);

  const piese = useMemo(() => stare?.stare?.piese || [], [stare]);
  const laptopViu = minute(stare?.viu?.primit) < 5;

  async function trimite(actiune: string, piesa: string, date: Record<string, unknown> = {}) {
    setTrimise((t) => ({ ...t, [piesa]: `trimis „${actiune}”, aștept laptopul…` }));
    try {
      const r = await fetch("/api/studio/muzica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ op: "comanda", actiune, piesa, date }),
      });
      if (r.status === 401) return onNeautentificat();
      const d = await r.json();
      if (!d.ok) setTrimise((t) => ({ ...t, [piesa]: `nu s-a trimis: ${d.mesaj || "eroare"}` }));
      return d.ok as boolean;
    } catch {
      setTrimise((t) => ({ ...t, [piesa]: "nu s-a trimis: fără conexiune" }));
      return false;
    }
  }

  async function scrie() {
    const l = (["ro", "en"] as const).filter((x) => limbi[x]);
    setCompune({ lucreaza: true, eroare: null, motive: [] });
    try {
      const r = await fetch("/api/studio/muzica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ op: "compune", cerere, limbi: l }),
      });
      if (r.status === 401) return onNeautentificat();
      const d = await r.json();
      if (!d.ok) {
        setCompune({ lucreaza: false, eroare: d.mesaj || "Compunerea a eșuat.", motive: d.motive_lint || [] });
        return;
      }
      const noi = { ...citesteLocal() };
      for (const p of d.piese as PiesaCompusa[]) noi[p.id] = p;
      scrieLocal(noi);
      setCiorne(noi);
      setCompune({ lucreaza: false, eroare: null, motive: [] });
      for (const p of d.piese as PiesaCompusa[]) {
        await trimite("ciorna", p.id, {
          titlu: p.titlu, limba: p.limba, pereche: p.pereche, cerere: p.cerere, stil: p.stil, exclude: p.exclude, versuri: p.versuri,
          instrumente: p.instrumente_cerute, scene: p.scene, kit: p.kit,
        });
      }
    } catch {
      setCompune({ lucreaza: false, eroare: "Fără conexiune la Studio.", motive: [] });
    }
  }

  function importa(id: string) {
    const l = (linkuri[id] || "").split(/\s+/).map((x) => x.trim()).filter(Boolean).slice(0, 2);
    if (!l.length) return;
    trimite("importa", id, { linkuri: l });
  }

  function stergeCiornaLocala(id: string) {
    const noi = { ...ciorne };
    delete noi[id];
    scrieLocal(noi);
    setCiorne(noi);
  }

  const ciorneRecente = Object.values(ciorne).slice(-6).reverse();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-amber-400/25 bg-neutral-900/40 p-6 md:p-8 backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between border-b border-white/10 pb-5 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">Surya Music · Alin Dragoș</span>
            <h2 className="text-2xl font-medium text-white mt-1">🎵 Muzică: de la cerere la YouTube</h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
              Scrii ce melodie vrei → primești promptul și versurile pentru Suno → lipești linkul piesei → laptopul o aduce aici, faci clipul,
              îl vezi, apeși „Publică” și primești kitul de urcare. Nimic nu se publică singur.
            </p>
          </div>
          <div className={`shrink-0 rounded-2xl border px-4 py-3 text-xs ${laptopViu ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200" : "border-rose-500/40 bg-rose-500/10 text-rose-200"}`}>
            <div className="font-bold">{laptopViu ? "● Laptopul lucrează" : "● Laptopul e oprit"}</div>
            <div className="mt-0.5 text-[11px] opacity-80">
              {laptopViu
                ? stare?.viu?.lucrez_la ? `acum: ${stare.viu.pas}` : "așteaptă comenzi"
                : "comenzile așteaptă până pornește"}
              {stare?.coada ? ` · ${stare.coada} în coadă` : ""}
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {(["compune", "biblioteca"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSub(s)}
              className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-widest ${sub === s ? "bg-amber-400 text-black font-bold" : "bg-white/5 text-neutral-300 hover:bg-white/10"}`}
            >
              {s === "compune" ? "1. Compune" : `2. Bibliotecă (${piese.filter((p) => p.stare !== "respinsa").length})`}
            </button>
          ))}
        </div>

        {eroareStare && <div className="mb-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-200">{eroareStare}</div>}

        {sub === "compune" && (
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400" htmlFor="cerere-muzica">Ce melodie vrei?</label>
              <textarea
                id="cerere-muzica"
                value={cerere}
                onChange={(e) => setCerere(e.target.value)}
                rows={4}
                maxLength={1500}
                placeholder="Ex.: colind vesel de iarnă, Moș Crăciun, copii care se joacă pe uliță, obligatoriu zurgălăi, folk-pop cu acordeon"
                className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400/60 focus:outline-none"
              />
              <div className="flex flex-wrap items-center gap-4">
                {(["ro", "en"] as const).map((x) => (
                  <label key={x} className="flex items-center gap-2 text-sm text-neutral-200">
                    <input type="checkbox" checked={limbi[x]} onChange={(e) => setLimbi((l) => ({ ...l, [x]: e.target.checked }))} />
                    {x === "ro" ? "Română" : "Engleză"}
                  </label>
                ))}
                <button
                  onClick={scrie}
                  disabled={compune.lucreaza || cerere.trim().length < 8 || (!limbi.ro && !limbi.en)}
                  className="rounded-full bg-amber-400 px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-amber-300 disabled:opacity-40"
                >
                  {compune.lucreaza ? "Scriu… (~20 s)" : "Scrie promptul și versurile"}
                </button>
              </div>
              {compune.eroare && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-200">
                  {compune.eroare}
                  {compune.motive.length > 0 && <ul className="mt-2 list-disc pl-5">{compune.motive.map((m) => <li key={m}>{m}</li>)}</ul>}
                </div>
              )}
            </div>

            {ciorneRecente.map((p) => (
              <div key={p.id} className="rounded-2xl border border-white/10 bg-black/30 p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">{p.limba === "ro" ? "Română" : "English"} · {p.id}</span>
                    <h3 className="text-lg text-white font-medium">{p.titlu}</h3>
                  </div>
                  <button onClick={() => stergeCiornaLocala(p.id)} className="text-[11px] text-neutral-500 hover:text-neutral-300">ascunde</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Copiaza text={p.titlu} eticheta="titlul" />
                  <Copiaza text={p.stil} eticheta="stilul" />
                  <Copiaza text={p.exclude} eticheta="exclude" />
                  <Copiaza text={p.versuri} eticheta="versurile" />
                  <a href="https://suno.com/create" target="_blank" rel="noopener noreferrer"
                    className="rounded-full bg-white px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-black font-bold hover:bg-neutral-200">
                    Deschide Suno ↗
                  </a>
                </div>
                <details className="text-xs text-neutral-300">
                  <summary className="cursor-pointer text-neutral-400">Vezi stilul și versurile</summary>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <pre className="whitespace-pre-wrap rounded-xl bg-black/50 p-3 font-mono text-[11px]">{p.stil}{"\n\nExclude: "}{p.exclude}</pre>
                    <pre className="whitespace-pre-wrap rounded-xl bg-black/50 p-3 font-mono text-[11px]">{p.versuri}</pre>
                  </div>
                </details>
                <div className="flex flex-col gap-2 md:flex-row">
                  <input
                    value={linkuri[p.id] || ""}
                    onChange={(e) => setLinkuri((l) => ({ ...l, [p.id]: e.target.value }))}
                    placeholder="Lipește linkul piesei din Suno (1 sau 2, separate prin spațiu)"
                    className="flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white placeholder:text-neutral-500"
                  />
                  <button onClick={() => importa(p.id)} className="rounded-full bg-sky-400 px-4 py-2 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-sky-300">
                    Importă în bibliotecă
                  </button>
                </div>
                {trimise[p.id] && <div className="text-[11px] text-neutral-400">{trimise[p.id]}</div>}
              </div>
            ))}
          </div>
        )}

        {sub === "biblioteca" && (
          <div className="space-y-4">
            {piese.length === 0 && <div className="py-10 text-center text-xs text-neutral-400">Nicio piesă încă. Compune una sau așteaptă laptopul.</div>}
            {piese.filter((p) => p.stare !== "respinsa").map((p) => {
              const [eticheta, culoare] = ETICHETE_STARE[p.stare] || [p.stare, "bg-neutral-700 text-white"];
              const o = optiuni[p.id] || { versuri: true, short: false };
              return (
                <div key={p.id} className="rounded-2xl border border-white/10 bg-black/30 p-5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">{p.limba.toUpperCase()} · {p.sursa} · {p.id}</span>
                      <h3 className="text-lg text-white font-medium">{p.titlu}</h3>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${culoare}`}>{eticheta}</span>
                  </div>
                  {p.lucru && <div className="rounded-xl bg-amber-400/10 p-3 text-xs text-amber-200">⏳ În lucru: {p.lucru.actiune}{stare?.viu?.lucrez_la === p.id ? ` · ${stare.viu.pas}` : ""}</div>}
                  {p.eroare && <div className="rounded-xl bg-rose-500/10 p-3 text-xs text-rose-200">⚠ {p.eroare}</div>}
                  {trimise[p.id] && <div className="text-[11px] text-neutral-400">{trimise[p.id]}</div>}

                  {p.variante.length > 0 && p.stare !== "urcata" && (
                    <div className="grid gap-3 md:grid-cols-2">
                      {p.variante.map((v) => (
                        <label key={v.nr} className={`rounded-xl border p-3 text-xs ${(o.varianta ?? p.varianta_aleasa) === v.nr ? "border-amber-400/60 bg-amber-400/5" : "border-white/10"}`}>
                          <div className="flex items-center justify-between text-neutral-300">
                            <span>
                              <input type="radio" name={`v-${p.id}`} className="mr-2" checked={(o.varianta ?? p.varianta_aleasa) === v.nr}
                                onChange={() => setOptiuni((x) => ({ ...x, [p.id]: { ...o, varianta: v.nr } }))} />
                              Varianta {v.nr} · {fmtDurata(v.durata_s)}
                            </span>
                            <span className="text-neutral-500">scor {v.scor ?? "—"}</span>
                          </div>
                          {v.media ? <audio controls preload="none" src={mediaUrl(v.media)} className="mt-2 w-full" /> : <div className="mt-2 text-neutral-500">player-ul apare după ce laptopul urcă previzualizarea</div>}
                        </label>
                      ))}
                    </div>
                  )}

                  {["ciorna", "generata"].includes(p.stare) && (
                    <div className="flex flex-col gap-2 md:flex-row">
                      <input value={linkuri[p.id] || ""} onChange={(e) => setLinkuri((l) => ({ ...l, [p.id]: e.target.value }))}
                        placeholder={p.stare === "ciorna" ? "Linkul piesei din Suno" : "Alt link Suno (înlocuiește variantele)"}
                        className="flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white placeholder:text-neutral-500" />
                      <button onClick={() => importa(p.id)} className="rounded-full bg-sky-400 px-4 py-2 text-xs font-mono uppercase tracking-widest text-black font-bold">Importă</button>
                      <button onClick={() => trimite("importa", p.id, { local: true })} className="rounded-full border border-white/15 px-4 py-2 text-[11px] text-neutral-300">Importă fișierul pus în dosar</button>
                    </div>
                  )}

                  {["ciorna", "generata", "previzualizare"].includes(p.stare) && (
                    <div className="rounded-xl border border-white/10 p-4 space-y-3">
                      <div className="text-xs text-neutral-300">
                        <b>Imagini: {p.imagini}</b> (minimum 4). Le poți face cu Nano Banana (aplicația Gemini / Flow, inclus în Ultra), MagicLight sau Higgsfield
                        și le pui în <code className="text-amber-200">Music\Reverb Studio\piese\{p.id}\imagini\</code> ca <code>s01_…jpg</code>, <code>s02_…</code>;
                        sau spune-i lui Claude „fă imaginile pentru {p.id}”.
                      </div>
                      {p.scene.length > 0 && (
                        <details className="text-xs text-neutral-300">
                          <summary className="cursor-pointer text-neutral-400">Prompturile pentru cele {p.scene.length} scene</summary>
                          <div className="mt-2 space-y-2">
                            {p.scene.map((s) => (
                              <div key={s.nr} className="flex items-start justify-between gap-3 rounded-lg bg-black/40 p-2">
                                <span><b>s{String(s.nr).padStart(2, "0")}</b> · <i className="text-neutral-400">{s.strofa}</i><br />{s.prompt_en}</span>
                                <Copiaza text={s.prompt_en} eticheta="" />
                              </div>
                            ))}
                          </div>
                        </details>
                      )}
                      {p.scene.length > 0 && (
                        <button onClick={() => trimite("imagini", p.id, { sursa: "gemini_api" })} className="rounded-full border border-amber-400/40 px-4 py-2 text-[11px] text-amber-200">
                          Imagini automate (Gemini API, plătit separat de Ultra)
                        </button>
                      )}
                    </div>
                  )}

                  {["generata", "previzualizare"].includes(p.stare) && (
                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300">
                      <label className="flex items-center gap-2"><input type="checkbox" checked={o.versuri} onChange={(e) => setOptiuni((x) => ({ ...x, [p.id]: { ...o, versuri: e.target.checked } }))} /> versurile pe ecran</label>
                      <label className="flex items-center gap-2"><input type="checkbox" checked={o.short} onChange={(e) => setOptiuni((x) => ({ ...x, [p.id]: { ...o, short: e.target.checked } }))} /> și un Short 9:16</label>
                      <button disabled={p.imagini < 4 || !!p.lucru}
                        onClick={() => trimite("aproba_sunet", p.id, { varianta: o.varianta ?? p.varianta_aleasa ?? 1, versuri_pe_ecran: o.versuri, short: o.short })}
                        className="rounded-full bg-amber-400 px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold disabled:opacity-40">
                        {p.stare === "previzualizare" ? "Refă previzualizarea" : "Aprobă sunetul → fă clipul"}
                      </button>
                    </div>
                  )}

                  {p.stare === "previzualizare" && (
                    <div className="space-y-3">
                      {p.clip.previzualizare ? <video controls preload="none" src={mediaUrl(p.clip.previzualizare)} className="w-full rounded-xl" /> : <div className="text-xs text-neutral-500">previzualizarea se urcă…</div>}
                      {p.clip.sincronizare === "aproximativa" && <div className="text-[11px] text-amber-200">Versurile sunt sincronizate aproximativ (pe strofe).</div>}
                      <div className="flex flex-wrap gap-2">
                        <button onClick={() => trimite("publica", p.id)} disabled={!!p.lucru} className="rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold disabled:opacity-40">Publică (clip final + kit)</button>
                        <button onClick={() => trimite("anuleaza", p.id)} className="rounded-full border border-white/15 px-4 py-2 text-[11px] text-neutral-300">Înapoi (refac clipul)</button>
                      </div>
                    </div>
                  )}

                  {p.stare === "de_urcat" && (
                    <div className="space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs text-neutral-200">
                      <div className="font-bold text-emerald-200">Kitul de urcare pe Surya Music — playlist „{p.kit.playlist}”, conținut sintetic: Da</div>
                      <div className="flex flex-wrap gap-2">
                        <Copiaza text={p.kit.titlu} eticheta="titlul" />
                        <Copiaza text={p.kit.descriere} eticheta="descrierea" />
                        <Copiaza text={(p.kit.etichete || []).join(", ")} eticheta="etichetele" />
                      </div>
                      <div className="text-neutral-400">Fișierele (clip{p.clip.short ? ", Short" : ""}, miniatură) sunt pe laptop în <code>Music\Reverb Studio\piese\{p.id}\</code>. Spune-i lui Claude „urcă piesa {p.id}” sau urcă-le tu.</div>
                      <div className="flex flex-col gap-2 md:flex-row">
                        <input value={ytLink[p.id] || ""} onChange={(e) => setYtLink((y) => ({ ...y, [p.id]: e.target.value }))} placeholder="Linkul YouTube după urcare"
                          className="flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white placeholder:text-neutral-500" />
                        <button onClick={() => trimite("marcheaza_urcat", p.id, { youtube_url: (ytLink[p.id] || "").trim() })} className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-mono uppercase tracking-widest text-black font-bold">Am urcat</button>
                        <button onClick={() => trimite("anuleaza", p.id)} className="rounded-full border border-white/15 px-4 py-2 text-[11px] text-neutral-300">Înapoi</button>
                      </div>
                    </div>
                  )}

                  {p.stare === "urcata" && p.youtube_url && (
                    <a href={p.youtube_url} target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-emerald-300 underline">Vezi pe YouTube ↗</a>
                  )}

                  {!["urcata", "respinsa"].includes(p.stare) && (
                    <button onClick={() => trimite("respinge", p.id)} className="text-[11px] text-neutral-500 hover:text-rose-300">Respinge piesa</button>
                  )}
                </div>
              );
            })}
            {(stare?.stare?.erori_comenzi || []).length > 0 && (
              <details className="rounded-xl border border-white/10 p-3 text-xs text-neutral-400">
                <summary className="cursor-pointer">Comenzi refuzate de laptop ({stare?.stare?.erori_comenzi?.length})</summary>
                <ul className="mt-2 space-y-1">
                  {(stare?.stare?.erori_comenzi || []).slice().reverse().map((e) => (
                    <li key={e.comanda + e.la}>{e.la.slice(0, 16).replace("T", " ")} · {e.actiune} · {e.piesa}: {e.motiv}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
