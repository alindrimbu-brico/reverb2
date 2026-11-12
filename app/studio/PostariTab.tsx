"use client";

// Fila „Postări” a Reverb Studio (docs/designs/studio_instrument_2026-11-12/design_v2_decizii.md).
// Marcă → tip → rețele → ideea → când. Laptopul scrie textul (Claude), face grafica în tema mărcii și urcă previzualizarea;
// după „Public”, rutina Claude `studio-publica` programează postarea pe rețele și scrie dovada. Nimic nu se publică fără aprobare.
import { useCallback, useEffect, useMemo, useState } from "react";

type Text = { text: string; hashtaguri: string[]; titlu?: string };
type Dovada = { rezultat: "ok" | "esec"; url?: string; programata?: string; motiv?: string; la?: string };
type Postare = {
  id: string; marca: string; tip: "text" | "grafic" | "video"; retele: string[]; stare: string; ideea: string; cand: string;
  lucru?: { actiune: string; de_la: string } | null; eroare?: string | null; texte?: Record<string, Text>;
  previzualizari?: Record<string, string>; format_retea?: Record<string, string>; hash?: string; dovezi?: Record<string, Dovada>;
  eticheta_ai?: boolean; fond?: string; motor_text?: string; creat_la?: string; actualizat_la?: string;
  grafica?: { titlu?: string; subtitlu?: string }; istoric?: { la: string; ce: string }[];
};
type Marca = { id: string; nume: string; activ: boolean; motiv: string; retele_active: string[]; tipuri_active: string[]; conturi: Record<string, string> };
type Oglinda = {
  marci?: Marca[]; tipuri_retea?: Record<string, string[]>; limite_retea?: Record<string, { text: number; hashtaguri?: number }>;
  postari?: Postare[]; oprit?: boolean; rutina_viu?: string | null; eroare?: string;
};
type Stare = { ok: boolean; mesaj?: string; stare?: { postari?: Oglinda }; viu?: { lucrez_la: string | null; pas: string; primit: string } | null; coada?: number };

const NUME_RETEA: Record<string, string> = { facebook: "Facebook", instagram: "Instagram", pinterest: "Pinterest", x: "X", tiktok: "TikTok", youtube: "YouTube" };
const NUME_TIP: Record<string, string> = { text: "Text", grafic: "Grafic", video: "Video" };
const ETICHETE: Record<string, [string, string]> = {
  in_lucru: ["Se creează", "border border-white/20 text-neutral-200"],
  previzualizare: ["De văzut și aprobat", "border border-white/40 text-white"],
  aprobata: ["Aprobată: așteaptă rutina de publicare", "border border-white/20 text-neutral-200"],
  programata: ["Programată pe rețele", "border border-emerald-400/40 text-emerald-400"],
  publicata: ["Publicată", "border border-emerald-400/40 text-emerald-400"],
  publicata_partial: ["Publicată doar pe unele rețele", "border border-rose-400/30 text-rose-300"],
  esuata: ["Eșuată", "border border-rose-400/30 text-rose-300"],
  respinsa: ["Respinsă", "border border-white/10 text-neutral-500 line-through"],
};
const BUTON_PRINCIPAL = "rounded-full bg-white px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-black font-bold hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed";
const BUTON_SECUNDAR = "rounded-full border border-white/15 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/10 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed";
const CAMP = "w-full rounded-2xl border border-white/10 bg-black/40 p-3 text-sm text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40";

function minute(iso?: string | null): number {
  if (!iso) return Infinity;
  const t = new Date(iso).getTime();
  return Number.isNaN(t) ? Infinity : (Date.now() - t) / 60000;
}

function acumCat(iso?: string | null): string {
  const m = minute(iso);
  if (m === Infinity) return "niciodată";
  if (m < 1.5) return "acum";
  if (m < 90) return `acum ${Math.round(m)} min`;
  if (m < 36 * 60) return `acum ${Math.round(m / 60)} h`;
  return `acum ${Math.round(m / 1440)} zile`;
}

// rutina studio-publica rulează la :00 și :30, între 07:00 și 22:30
function urmatoareaRulare(): string {
  const d = new Date();
  d.setSeconds(0, 0);
  d.setMinutes(d.getMinutes() < 30 ? 30 : 60);
  if (d.getHours() < 7) d.setHours(7, 0);
  if (d.getHours() > 22) {
    d.setDate(d.getDate() + 1);
    d.setHours(7, 0);
    return "07:00 mâine";
  }
  return d.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" });
}

const NUME_COMANDA: Record<string, string> = {
  post_publica: "Aprobarea de publicare",
  post_refa: "Cererea de refacere",
  post_text: "Textul schimbat",
  post_reincearca: "Reîncercarea",
  post_respinge: "Respingerea",
};

function mediaUrl(f: string) {
  return `/api/studio/muzica?op=media&f=${encodeURIComponent(f)}`;
}

export default function PostariTab({ onNeautentificat }: { onNeautentificat: () => void }) {
  const [stare, setStare] = useState<Stare | null>(null);
  const [eroareStare, setEroareStare] = useState<string | null>(null);
  const [marca, setMarca] = useState<string>("");
  const [tip, setTip] = useState<string>("grafic");
  const [retele, setRetele] = useState<Record<string, boolean>>({});
  const [ideea, setIdeea] = useState("");
  const [cand, setCand] = useState("");
  const [trimit, setTrimit] = useState<Record<string, boolean>>({});
  const [mesaje, setMesaje] = useState<Record<string, string>>({});
  const [inAsteptare, setInAsteptare] = useState<{ id: string; marca: string; ideea: string; la: number }[]>([]);
  const [texteEditate, setTexteEditate] = useState<Record<string, string>>({});
  const [observatii, setObservatii] = useState<Record<string, string>>({});
  // comenzile plecate din Studio și încă nepreluate de laptop: confirmarea stă lângă buton până se schimbă postarea
  const [trimise, setTrimise] = useState<Record<string, { actiune: string; la: number; ref: string }>>({});
  const [, setTic] = useState(0);
  const asteaptaLaptop = Object.keys(trimise).length > 0;

  const incarca = useCallback(async () => {
    try {
      const r = await fetch("/api/studio/muzica?op=stare", { cache: "no-store" });
      if (r.status === 401) return onNeautentificat();
      const d = (await r.json()) as Stare;
      if (!d.ok) return setEroareStare(d.mesaj || "Starea nu poate fi citită.");
      setEroareStare(null);
      setStare(d);
    } catch {
      setEroareStare("Studio nu poate citi starea acum (fără conexiune).");
    }
  }, [onNeautentificat]);

  useEffect(() => {
    incarca();
    const t = setInterval(() => {
      if (document.visibilityState === "visible") incarca();
    }, asteaptaLaptop ? 5000 : 12000);
    return () => clearInterval(t);
  }, [incarca, asteaptaLaptop]);

  useEffect(() => {
    // cât timp o comandă așteaptă laptopul, numărătoarea de lângă buton se împrospătează
    if (!asteaptaLaptop) return;
    const t = setInterval(() => setTic((n) => n + 1), 10000);
    return () => clearInterval(t);
  }, [asteaptaLaptop]);

  const og = stare?.stare?.postari;
  const marci = useMemo(() => og?.marci || [], [og]);
  const postari = useMemo(() => og?.postari || [], [og]);
  const marcaAleasa = marci.find((m) => m.id === marca) || marci.find((m) => m.activ);
  const laptopViu = minute(stare?.viu?.primit) < 5;
  const rutinaVie = minute(og?.rutina_viu) < 45;

  const reteleDisponibile = useMemo(() => {
    if (!marcaAleasa) return [];
    const peTip = og?.tipuri_retea?.[tip] || [];
    return marcaAleasa.retele_active.filter((r) => peTip.includes(r));
  }, [marcaAleasa, og, tip]);

  useEffect(() => {
    // la schimbarea mărcii sau a tipului, toate rețelele potrivite sunt bifate
    setRetele(Object.fromEntries(reteleDisponibile.map((r) => [r, true])));
  }, [reteleDisponibile]);

  useEffect(() => {
    // o postare trimisă dispare din „în așteptare” când apare în catalogul de pe laptop
    setInAsteptare((l) => l.filter((x) => !postari.some((p) => p.id === x.id)));
  }, [postari]);

  useEffect(() => {
    // confirmarea dispare când laptopul a atins postarea (starea sau ora ei s-a schimbat)
    setTrimise((t) => {
      const ramase = Object.fromEntries(Object.entries(t).filter(([id, x]) => postari.find((p) => p.id === id)?.actualizat_la === x.ref));
      return Object.keys(ramase).length === Object.keys(t).length ? t : ramase;
    });
  }, [postari]);

  async function comanda(actiune: string, piesa: string, date: Record<string, unknown> = {}): Promise<{ ok: boolean; piesa?: string; mesaj?: string }> {
    const cheie = `${actiune}:${piesa}`;
    setTrimit((t) => ({ ...t, [cheie]: true }));
    try {
      const r = await fetch("/api/studio/muzica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ op: "comanda", actiune, piesa, date }),
      });
      if (r.status === 401) {
        onNeautentificat();
        return { ok: false };
      }
      const d = await r.json();
      const existenta = postari.find((p) => p.id === piesa);
      if (d.ok && existenta) {
        setTrimise((t) => ({ ...t, [piesa]: { actiune, la: Date.now(), ref: existenta.actualizat_la || "" } }));
        setMesaje((m) => ({ ...m, [piesa]: "" }));
      } else {
        setMesaje((m) => ({ ...m, [piesa]: d.ok ? "" : `Nu s-a trimis: ${d.mesaj || "eroare"}` }));
      }
      return d;
    } catch {
      setMesaje((m) => ({ ...m, [piesa]: "Nu s-a trimis: fără conexiune." }));
      return { ok: false };
    } finally {
      setTrimit((t) => ({ ...t, [cheie]: false }));
    }
  }

  async function creeaza() {
    if (!marcaAleasa) return;
    const alese = reteleDisponibile.filter((r) => retele[r]);
    const d = await comanda("post_creeaza", "nou", { marca: marcaAleasa.id, tip, retele: alese, ideea: ideea.trim(), cand: cand || "cat_mai_repede" });
    if (d.ok && d.piesa) {
      setInAsteptare((l) => [{ id: d.piesa as string, marca: marcaAleasa.nume, ideea: ideea.trim(), la: Date.now() }, ...l]);
      setIdeea("");
    }
  }

  const ocupat = (actiune: string, id: string) => Boolean(trimit[`${actiune}:${id}`]);
  const poateCrea = Boolean(marcaAleasa?.activ) && ideea.trim().length >= 8 && reteleDisponibile.some((r) => retele[r]) && !ocupat("post_creeaza", "nou");

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 font-sans space-y-8">
      {/* Starea mașinii: două verigi, fiecare cu numele ei */}
      <div className="grid gap-3 sm:grid-cols-3 text-xs">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
          <div className="flex items-center gap-2 font-bold text-neutral-200">
            <span className={`h-1.5 w-1.5 rounded-full ${laptopViu ? "bg-emerald-400" : "border border-neutral-400"}`} />
            Laptopul (creează postările)
          </div>
          <div className="mt-1 text-neutral-400">
            {laptopViu
              ? stare?.viu?.lucrez_la ? `lucrează: ${stare.viu.pas}` : "pornit, așteaptă comenzi"
              : `fără semn de viață (${acumCat(stare?.viu?.primit)}). Ideile trimise se păstrează și pornesc când îl deschizi.`}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
          <div className="flex items-center gap-2 font-bold text-neutral-200">
            <span className={`h-1.5 w-1.5 rounded-full ${rutinaVie ? "bg-emerald-400" : "border border-neutral-400"}`} />
            Rutina de publicare (Claude + Chrome)
          </div>
          <div className="mt-1 text-neutral-400">
            {rutinaVie ? `a rulat ${acumCat(og?.rutina_viu)}; verifică la fiecare jumătate de oră, 07–23` : `n-a rulat (${acumCat(og?.rutina_viu)}). Publică doar cu Claude Desktop pornit pe laptop.`}
          </div>
        </div>
        <div className={`rounded-2xl border p-4 ${og?.oprit ? "border-rose-400/30" : "border-white/10 bg-neutral-900/40"}`}>
          <div className={`flex items-center gap-2 font-bold ${og?.oprit ? "text-rose-300" : "text-neutral-200"}`}>
            {og?.oprit ? "Publicarea e OPRITĂ" : "Publicarea e pornită"}
          </div>
          <button
            onClick={() => comanda(og?.oprit ? "post_pornire" : "post_oprire", "general")}
            disabled={ocupat("post_oprire", "general") || ocupat("post_pornire", "general")}
            className={`mt-2 ${BUTON_SECUNDAR}`}
          >
            {og?.oprit ? "Pornește publicarea" : "Oprește tot"}
          </button>
          {mesaje.general && <div className="mt-2 text-neutral-400">{mesaje.general}</div>}
        </div>
      </div>

      {eroareStare && <div className="rounded-xl border border-rose-400/30 p-3 text-xs text-rose-300">Eroare: {eroareStare}</div>}
      {og?.eroare && <div className="rounded-xl border border-rose-400/30 p-3 text-xs text-rose-300">Eroare pe laptop: {og.eroare}</div>}

      {/* Postare nouă */}
      <section className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 md:p-8 backdrop-blur-md">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Postare nouă</span>
        <h2 className="text-2xl font-medium text-white mt-1">Spune ce vrei să postezi</h2>
        <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
          Alegi marca și rețelele, scrii ideea în câteva cuvinte. Laptopul scrie textul pentru fiecare rețea și face grafica în tema mărcii; tu vezi, schimbi dacă vrei și apeși „Public”.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">1. Marca</div>
            <div className="flex flex-wrap gap-2">
              {marci.map((m) => (
                <button
                  key={m.id}
                  disabled={!m.activ}
                  onClick={() => setMarca(m.id)}
                  title={m.activ ? "" : m.motiv}
                  className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider ${
                    marcaAleasa?.id === m.id ? "bg-white text-black font-bold" : m.activ ? "border border-white/15 text-neutral-300 hover:bg-white/10" : "border border-white/10 text-neutral-500 cursor-not-allowed"
                  }`}
                >
                  {m.nume}
                  {!m.activ && " · în pregătire"}
                </button>
              ))}
              {marci.length === 0 && <span className="text-xs text-neutral-400">Lista mărcilor vine de pe laptop; apare după primul semn de viață.</span>}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">2. Ce fel de postare</div>
              <div className="flex flex-wrap gap-2">
                {(marcaAleasa?.tipuri_active || []).map((t) => (
                  <button key={t} onClick={() => setTip(t)} className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider ${tip === t ? "bg-white text-black font-bold" : "border border-white/15 text-neutral-300 hover:bg-white/10"}`}>
                    {NUME_TIP[t] || t}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-[11px] text-neutral-500">Video vine în pasul următor al construcției; butonul apare când funcționează.</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">3. Unde</div>
              <div className="flex flex-wrap gap-3">
                {reteleDisponibile.map((r) => (
                  <label key={r} className="flex items-center gap-2 text-sm text-neutral-200">
                    <input type="checkbox" className="accent-white h-4 w-4" checked={Boolean(retele[r])} onChange={(e) => setRetele((x) => ({ ...x, [r]: e.target.checked }))} />
                    {NUME_RETEA[r] || r}
                    <span className="text-[11px] text-neutral-500">{marcaAleasa?.conturi?.[r]}</span>
                  </label>
                ))}
                {reteleDisponibile.length === 0 && <span className="text-xs text-neutral-400">Nicio rețea pornită pentru acest tip.</span>}
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">4. Ideea</div>
            <textarea
              value={ideea}
              onChange={(e) => setIdeea(e.target.value.slice(0, 1500))}
              rows={4}
              placeholder="Ex.: Un sfat pentru cine își face ordine în atelier înainte de iarnă. Sau lipește linkul unui produs de pe site și spune ce vrei să scoți în față."
              className={CAMP}
            />
            <div className="mt-1 text-[11px] text-neutral-500">Dacă pui linkul unui produs de pe site, grafica folosește poza reală a produsului. Altfel se generează o imagine de fundal, marcată „generată cu AI”.</div>
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <label className="text-xs text-neutral-300">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">5. Când</span>
              <input type="datetime-local" value={cand} onChange={(e) => setCand(e.target.value)} className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white [color-scheme:dark]" />
            </label>
            <div className="text-[11px] text-neutral-500 pb-2 max-w-xs">Gol = cât mai repede după ce apeși „Public” (de obicei 30–60 de minute: rutina o programează pe rețea peste ~25 de minute).</div>
            <button onClick={creeaza} disabled={!poateCrea} className={`ml-auto ${BUTON_PRINCIPAL}`}>
              {ocupat("post_creeaza", "nou") ? "Se trimite…" : "Creează postarea"}
            </button>
          </div>
          {mesaje.nou && <div className="text-xs text-neutral-300">{mesaje.nou}</div>}
        </div>
      </section>

      {/* Biblioteca */}
      <section className="space-y-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Postările tale</div>

        {inAsteptare.map((x) => (
          <div key={x.id} className="rounded-3xl border border-white/10 bg-neutral-900/40 p-5 text-xs text-neutral-300">
            <div className="flex items-center gap-2 font-bold text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-pulse" />
              {x.marca}: trimisă, {laptopViu ? "laptopul o preia în 1–3 minute, apoi lucrează cam un minut" : "așteaptă deschiderea laptopului"}
            </div>
            <div className="mt-1 text-neutral-400">„{x.ideea.slice(0, 160)}”</div>
          </div>
        ))}

        {postari.length === 0 && inAsteptare.length === 0 && <div className="rounded-3xl border border-white/10 p-6 text-sm text-neutral-400">Nicio postare încă. Scrie prima idee mai sus.</div>}

        {postari.map((p) => {
          const [eticheta, clasa] = ETICHETE[p.stare] || [p.stare, "border border-white/10 text-neutral-400"];
          const numeMarca = marci.find((m) => m.id === p.marca)?.nume || p.marca;
          const formate = Array.from(new Set(Object.values(p.format_retea || {})));
          const tr = trimise[p.id];
          const blocat = Boolean(p.lucru) || Boolean(tr);
          const minTr = tr ? (Date.now() - tr.la) / 60000 : 0;
          return (
            <article key={p.id} className="rounded-3xl border border-white/10 bg-neutral-900/40 p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {numeMarca} · {NUME_TIP[p.tip] || p.tip} · {p.retele.map((r) => NUME_RETEA[r] || r).join(" + ")} · {p.cand === "cat_mai_repede" ? "cât mai repede" : p.cand.replace("T", " ")}
                  </div>
                  <h3 className="mt-1 text-lg font-medium text-white break-words">{p.grafica?.titlu || p.ideea.slice(0, 90)}</h3>
                  <div className="mt-1 text-xs text-neutral-400 break-words">Ideea: „{p.ideea.slice(0, 220)}”</div>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider ${clasa}`}>{eticheta}</span>
              </div>

              {p.lucru && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 p-3 text-xs text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-pulse" />
                  În lucru pe laptop{stare?.viu?.lucrez_la === p.id ? `: ${stare.viu.pas}` : ""} (de obicei sub un minut)
                </div>
              )}
              {p.eroare && <div className="mt-4 rounded-xl border border-rose-400/30 p-3 text-xs text-rose-300">Eroare: {p.eroare}</div>}

              {p.texte && (
                <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,320px)_1fr]">
                  {formate.length > 0 && (
                    <div className="space-y-3">
                      {formate.map((f) =>
                        p.previzualizari?.[f] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={f} src={mediaUrl(p.previzualizari[f])} alt={`Grafica ${f} pentru ${numeMarca}`} loading="lazy" className="w-full rounded-2xl border border-white/10 bg-black" />
                        ) : (
                          <div key={f} className="rounded-2xl border border-white/10 p-4 text-xs text-neutral-500">Previzualizarea {f} nu mai e pe server.</div>
                        ),
                      )}
                      <div className="text-[11px] text-neutral-500">
                        Fundal: {p.fond === "produs" ? "poza reală a produsului" : p.fond === "generat" ? "imagine generată (marcată pe grafică)" : "tema mărcii"} · text: {p.motor_text || "—"}
                      </div>
                    </div>
                  )}
                  <div className="space-y-4 min-w-0">
                    {p.retele.map((r) => {
                      const x = p.texte?.[r];
                      if (!x) return null;
                      const cheie = `${p.id}:${r}`;
                      const original = [x.text, x.hashtaguri.join(" ")].filter(Boolean).join("\n\n");
                      const curent = texteEditate[cheie] ?? original;
                      const limita = og?.limite_retea?.[r]?.text || 900;
                      const dov = p.dovezi?.[r];
                      return (
                        <div key={r} className="rounded-2xl border border-white/10 p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                            <span>{NUME_RETEA[r] || r}</span>
                            <span className={curent.length > limita ? "text-rose-300" : ""}>{curent.length} / {limita}</span>
                          </div>
                          {p.stare === "previzualizare" && !blocat ? (
                            <>
                              <textarea value={curent} onChange={(e) => setTexteEditate((t) => ({ ...t, [cheie]: e.target.value }))} rows={Math.min(22, Math.max(5, curent.split("\n").length + Math.ceil(curent.length / 62)))} className={`mt-2 ${CAMP}`} />
                              {curent !== original && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  <button
                                    onClick={async () => {
                                      const d = await comanda("post_text", p.id, { retea: r, text: curent });
                                      if (d.ok) setTimeout(() => setTexteEditate((t) => { const n = { ...t }; delete n[cheie]; return n; }), 75000);
                                    }}
                                    disabled={ocupat("post_text", p.id)}
                                    className={BUTON_SECUNDAR}
                                  >
                                    Salvează textul
                                  </button>
                                  <button onClick={() => setTexteEditate((t) => { const n = { ...t }; delete n[cheie]; return n; })} className="text-[11px] text-neutral-500 hover:text-white">
                                    renunță
                                  </button>
                                </div>
                              )}
                            </>
                          ) : (
                            <p className="mt-2 whitespace-pre-wrap break-words text-sm text-neutral-200">{original}</p>
                          )}
                          {dov && (
                            <div className={`mt-3 text-xs ${dov.rezultat === "ok" ? "text-neutral-200" : "text-rose-300"}`}>
                              {dov.rezultat === "esec" && <>Eșec: {dov.motiv}</>}
                              {dov.rezultat === "ok" && dov.url && (
                                <a href={dov.url} target="_blank" rel="noopener noreferrer" className="text-white underline">
                                  Vezi postarea ↗
                                </a>
                              )}
                              {dov.rezultat === "ok" && !dov.url && <>Programată pe rețea pentru {dov.programata}. Linkul apare după ce se publică.</>}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {p.stare === "previzualizare" && (
                  <>
                    <button
                      onClick={() => comanda("post_publica", p.id, { hash: p.hash })}
                      disabled={blocat || ocupat("post_publica", p.id) || Boolean(og?.oprit) || Object.keys(texteEditate).some((k) => k.startsWith(p.id + ":"))}
                      title={og?.oprit ? "Publicarea e oprită" : Object.keys(texteEditate).some((k) => k.startsWith(p.id + ":")) ? "Salvează întâi textul schimbat" : ""}
                      className={BUTON_PRINCIPAL}
                    >
                      Public pe {p.retele.map((r) => NUME_RETEA[r] || r).join(" + ")}
                    </button>
                    <input
                      value={observatii[p.id] || ""}
                      onChange={(e) => setObservatii((o) => ({ ...o, [p.id]: e.target.value.slice(0, 600) }))}
                      placeholder="Ce să schimbe? (ex.: mai scurt, alt titlu, altă imagine)"
                      className="min-w-[14rem] flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none"
                    />
                    <button onClick={() => comanda("post_refa", p.id, { observatie: observatii[p.id] || "" })} disabled={blocat || ocupat("post_refa", p.id)} className={BUTON_SECUNDAR}>
                      Refă
                    </button>
                  </>
                )}
                {(p.stare === "esuata" || p.stare === "publicata_partial") && (
                  <>
                    {p.texte && Object.keys(p.dovezi || {}).length > 0 && (
                      <button onClick={() => comanda("post_reincearca", p.id)} disabled={blocat || ocupat("post_reincearca", p.id) || Boolean(og?.oprit)} className={BUTON_PRINCIPAL}>
                        Reîncearcă pe rețelele căzute
                      </button>
                    )}
                    {p.stare === "esuata" && (
                      <button onClick={() => comanda("post_refa", p.id, { observatie: observatii[p.id] || "" })} disabled={blocat || ocupat("post_refa", p.id)} className={BUTON_SECUNDAR}>
                        Refă postarea
                      </button>
                    )}
                  </>
                )}
                {p.stare === "aprobata" && (
                  <span className="text-xs text-neutral-200">
                    Aprobată {acumCat(p.actualizat_la)}. Rutina de publicare o ia la {urmatoareaRulare()} și o programează pe rețele; primești mesaj pe Telegram.
                    {!rutinaVie && " Atenție: rutina n-a rulat de curând, deci publică doar cu Claude Desktop pornit pe laptop."}
                  </span>
                )}
                {!["publicata", "respinsa"].includes(p.stare) && (
                  <button
                    onClick={() => {
                      if (window.confirm("Respingi postarea? Nu se mai publică.")) comanda("post_respinge", p.id);
                    }}
                    disabled={ocupat("post_respinge", p.id)}
                    className="ml-auto text-[11px] text-neutral-500 hover:text-rose-300"
                  >
                    Respinge
                  </button>
                )}
              </div>

              {tr && (
                <div role="status" className="mt-4 flex items-start gap-3 rounded-xl border border-white/25 bg-white/5 p-4 text-sm text-white">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white animate-pulse" />
                  <div>
                    <div className="font-medium">
                      {NUME_COMANDA[tr.actiune] || "Comanda"} a plecat la {new Date(tr.la).toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" })}.
                    </div>
                    <div className="mt-1 text-xs text-neutral-300">
                      {!laptopViu
                        ? "Laptopul nu răspunde acum. Comanda rămâne în coadă și pornește când îl deschizi."
                        : minTr < 4
                          ? "Aștept laptopul să o preia. Durează de obicei 1–3 minute; pagina se schimbă singură."
                          : `Au trecut ${Math.round(minTr)} minute și laptopul n-a preluat-o încă. Nu apăsa din nou: comanda e în coadă.`}
                    </div>
                  </div>
                </div>
              )}
              {mesaje[p.id] && (
                <div role="alert" className="mt-4 rounded-xl border border-rose-400/40 p-4 text-sm text-rose-300">
                  {mesaje[p.id]}
                </div>
              )}

              {p.istoric && p.istoric.length > 0 && (
                <details className="mt-4 text-[11px] text-neutral-500">
                  <summary className="cursor-pointer hover:text-white">Pașii postării</summary>
                  <ul className="mt-2 space-y-1">
                    {p.istoric.map((h, i) => (
                      <li key={`${h.la}-${i}`}>{h.la.slice(0, 16).replace("T", " ")} · {h.ce}</li>
                    ))}
                  </ul>
                </details>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
