// Reverb Studio — Muzică: rețeta de sunet și compilarea ei în promptul de stil Suno
// (docs/designs/motor_creatie_2026-11-12/design_v2_decizii.md). Fără importuri: fișierul e folosit de pagină, de rută și de testele Node.
// Suno nu primește procente: cursorul unui stil alege o treaptă față de stilul de bază, iar treapta e cuvântul care pleacă.

export type Treapta = "baza" | "egal" | "clar" | "idee" | "abia";
export type Pozitie = "fara" | "putin" | "normal" | "mult"; // „auto” = instrumentul lipsește din rețetă
export type StilActiv = { id: string; pondere: number };
export type Reteta = {
  stiluri: StilActiv[];
  instrumente: Record<string, Pozitie>;
  voce: string | null;
  caracter: string | null;
  stari: string[];
  tempo: number | null;
  tonalitate: "major" | "minor" | null;
  energie: "calm" | "mare" | null;
  sunet: string | null;
  note: string;
};
export type Element = { id: string; ro: string; en: string; alias?: string[] };
export type Stil = Element & { familie: string };

export const MAX_STILURI = 4;
export const MAX_INSTRUMENTE = 8;
export const MAX_STARI = 3;
export const TINTA_STIL = 950;
export const ETICHETE_TREAPTA: Record<Treapta, string> = { baza: "baza", egal: "la egal", clar: "clar", idee: "o idee", abia: "abia simțit" };
export const ETICHETE_POZITIE: Record<Pozitie | "auto", string> = { auto: "auto", fara: "fără", putin: "puțin", normal: "normal", mult: "mult" };
export const POZITII: Pozitie[] = ["fara", "putin", "normal", "mult"];
/** Mijlocul fiecărei trepte, ca raport față de bază: folosit când o treaptă se alege din butoane sau din cuvinte. */
export const MIJLOC_TREAPTA: Record<Exclude<Treapta, "baza">, number> = { egal: 0.95, clar: 0.67, idee: 0.37, abia: 0.15 };

export const FAMILII = [
  "Pop și folk", "Orchestră și film", "Jazz, soul, blues", "Rock", "Electronic și ambient", "Hip-hop și urban", "Din lume",
  "Românesc și sărbători", "Pentru copii",
] as const;

export const STILURI: Stil[] = [
  { id: "pop", ro: "Pop", en: "pop", familie: "Pop și folk" },
  { id: "folk", ro: "Folk", en: "folk", familie: "Pop și folk" },
  { id: "folk-pop", ro: "Folk-pop", en: "folk-pop", familie: "Pop și folk" },
  { id: "balada", ro: "Baladă", en: "ballad", familie: "Pop și folk", alias: ["balada"] },
  { id: "acustic", ro: "Acustic", en: "acoustic singer-songwriter", familie: "Pop și folk" },
  { id: "country", ro: "Country", en: "country", familie: "Pop și folk" },
  { id: "indie", ro: "Indie pop", en: "indie pop", familie: "Pop și folk", alias: ["indie"] },
  { id: "orchestral", ro: "Orchestră", en: "orchestral", familie: "Orchestră și film", alias: ["orchestra", "orchestral", "simfonic"] },
  { id: "cinematic", ro: "Muzică de film", en: "cinematic score", familie: "Orchestră și film", alias: ["film", "cinematic"] },
  { id: "neoclasic", ro: "Neoclasic", en: "neoclassical", familie: "Orchestră și film", alias: ["clasic", "clasica"] },
  { id: "pian-solo", ro: "Pian solo", en: "solo piano", familie: "Orchestră și film" },
  { id: "epic", ro: "Epic", en: "epic orchestral", familie: "Orchestră și film" },
  { id: "coral", ro: "Coral", en: "choral", familie: "Orchestră și film" },
  { id: "jazz", ro: "Jazz", en: "jazz", familie: "Jazz, soul, blues" },
  { id: "soul", ro: "Soul", en: "soul", familie: "Jazz, soul, blues" },
  { id: "blues", ro: "Blues", en: "blues", familie: "Jazz, soul, blues" },
  { id: "bossa", ro: "Bossa nova", en: "bossa nova", familie: "Jazz, soul, blues", alias: ["bossa"] },
  { id: "swing", ro: "Swing", en: "swing", familie: "Jazz, soul, blues" },
  { id: "gospel", ro: "Gospel", en: "gospel", familie: "Jazz, soul, blues" },
  { id: "rnb", ro: "R&B", en: "R&B", familie: "Jazz, soul, blues", alias: ["rnb", "r&b"] },
  { id: "funk", ro: "Funk", en: "funk", familie: "Jazz, soul, blues" },
  { id: "rock", ro: "Rock", en: "rock", familie: "Rock" },
  { id: "rock-alternativ", ro: "Rock alternativ", en: "alternative rock", familie: "Rock" },
  { id: "rock-clasic", ro: "Rock clasic", en: "classic rock", familie: "Rock" },
  { id: "post-rock", ro: "Post-rock", en: "post-rock", familie: "Rock" },
  { id: "ambient", ro: "Ambient", en: "ambient", familie: "Electronic și ambient" },
  { id: "electronic", ro: "Electronic", en: "electronic", familie: "Electronic și ambient", alias: ["electronica"] },
  { id: "synthwave", ro: "Synthwave", en: "synthwave", familie: "Electronic și ambient" },
  { id: "lofi", ro: "Lo-fi", en: "lo-fi", familie: "Electronic și ambient", alias: ["lofi", "lo-fi"] },
  { id: "house", ro: "Deep house", en: "deep house", familie: "Electronic și ambient", alias: ["house"] },
  { id: "chillout", ro: "Chillout", en: "downtempo chillout", familie: "Electronic și ambient" },
  { id: "meditatie", ro: "Meditație", en: "meditation music", familie: "Electronic și ambient", alias: ["meditatie", "relaxare"] },
  { id: "hiphop", ro: "Hip-hop", en: "hip-hop", familie: "Hip-hop și urban", alias: ["hip hop", "hiphop", "hip-hop", "rap"] },
  { id: "trap", ro: "Trap", en: "trap", familie: "Hip-hop și urban" },
  { id: "spoken", ro: "Poezie pe muzică", en: "spoken word poetry", familie: "Hip-hop și urban", alias: ["spoken word"] },
  { id: "latino", ro: "Latino", en: "latin pop", familie: "Din lume" },
  { id: "reggae", ro: "Reggae", en: "reggae", familie: "Din lume" },
  { id: "flamenco", ro: "Flamenco", en: "flamenco", familie: "Din lume" },
  { id: "oriental", ro: "Oriental", en: "middle eastern", familie: "Din lume" },
  { id: "celtic", ro: "Celtic", en: "celtic", familie: "Din lume" },
  { id: "balcanic", ro: "Balcanic", en: "balkan brass", familie: "Din lume" },
  { id: "mpb", ro: "MPB brazilian", en: "MPB", familie: "Din lume", alias: ["mpb"] },
  { id: "tango", ro: "Tango", en: "tango", familie: "Din lume" },
  { id: "colind", ro: "Colind", en: "Romanian Christmas carol", familie: "Românesc și sărbători", alias: ["colind", "colinde"] },
  { id: "craciun", ro: "Crăciun", en: "Christmas", familie: "Românesc și sărbători", alias: ["craciun"] },
  { id: "popular", ro: "Folclor românesc", en: "Romanian folk", familie: "Românesc și sărbători", alias: ["folclor", "muzica populara"] },
  { id: "romanta", ro: "Romanță", en: "Romanian romance", familie: "Românesc și sărbători", alias: ["romanta"] },
  { id: "doina", ro: "Doină", en: "Romanian doina", familie: "Românesc și sărbători", alias: ["doina"] },
  { id: "copii", ro: "Cântec de copii", en: "children's song", familie: "Pentru copii", alias: ["cantec de copii"] },
  { id: "leagan", ro: "Cântec de leagăn", en: "lullaby", familie: "Pentru copii", alias: ["cantec de leagan", "leagan"] },
  { id: "poveste", ro: "Poveste cântată", en: "musical storytelling", familie: "Pentru copii", alias: ["poveste cantata"] },
];

export const INSTRUMENTE: Element[] = [
  { id: "bas", ro: "Bas", en: "bass", alias: ["bas", "bass", "basul", "basi"] },
  { id: "tobe", ro: "Tobe", en: "drums", alias: ["tobe", "tobele", "baterie", "bateria"] },
  { id: "percutie", ro: "Percuție", en: "percussion", alias: ["percutie", "percutii"] },
  { id: "pian", ro: "Pian", en: "piano", alias: ["pian", "pianul"] },
  { id: "corzi", ro: "Viori, corzi", en: "strings", alias: ["viori", "viorile", "corzi", "corzile"] },
  { id: "vioara", ro: "Vioară solo", en: "solo violin", alias: ["vioara", "vioara solo"] },
  { id: "violoncel", ro: "Violoncel", en: "cello", alias: ["violoncel", "violoncelul", "cello"] },
  { id: "orchestra", ro: "Orchestră", en: "full orchestra", alias: ["orchestra", "orchestra mare"] },
  { id: "chitara-acustica", ro: "Chitară acustică", en: "acoustic guitar", alias: ["chitara acustica", "chitara", "chitari"] },
  { id: "chitara-electrica", ro: "Chitară electrică", en: "electric guitar", alias: ["chitara electrica"] },
  { id: "sintetizator", ro: "Sintetizator", en: "synthesizer", alias: ["sintetizator", "sintetizatoare", "synth", "sinti"] },
  { id: "alamuri", ro: "Alămuri", en: "brass", alias: ["alamuri", "trompeta", "trompete", "suflatori"] },
  { id: "flaut", ro: "Flaut", en: "flute", alias: ["flaut", "flautul"] },
  { id: "nai", ro: "Nai", en: "pan flute", alias: ["nai", "naiul"] },
  { id: "acordeon", ro: "Acordeon", en: "accordion", alias: ["acordeon", "acordeonul"] },
  { id: "harpa", ro: "Harpă", en: "harp", alias: ["harpa"] },
  { id: "cor", ro: "Cor", en: "choir", alias: ["cor", "corul"] },
  { id: "zurgalai", ro: "Zurgălăi", en: "sleigh bells", alias: ["zurgalai", "clopotei"] },
  { id: "saxofon", ro: "Saxofon", en: "saxophone", alias: ["saxofon", "saxofonul", "sax"] },
];

export const VOCI: Element[] = [
  { id: "barbat", ro: "Bărbat", en: "male vocals", alias: ["voce de barbat", "voce barbateasca", "voce masculina"] },
  { id: "femeie", ro: "Femeie", en: "female vocals", alias: ["voce de femeie", "voce feminina"] },
  { id: "duet", ro: "Duet", en: "male and female duet vocals", alias: ["duet"] },
  { id: "cor-copii", ro: "Cor de copii", en: "children's choir vocals", alias: ["cor de copii", "voci de copii"] },
  { id: "vorbit", ro: "Vorbit, recitat", en: "spoken word delivery", alias: ["vorbit", "recitat", "recitata"] },
];
export const CARACTERE: Element[] = [
  { id: "calda", ro: "Caldă", en: "warm" },
  { id: "soptita", ro: "Șoptită", en: "soft, breathy" },
  { id: "puternica", ro: "Puternică", en: "powerful" },
  { id: "clara", ro: "Clară, poetică", en: "clear, poetic" },
  { id: "ragusita", ro: "Răgușită", en: "raspy" },
];
export const STARI: Element[] = [
  { id: "vesel", ro: "Vesel", en: "joyful", alias: ["vesel", "vesela"] },
  { id: "cald", ro: "Cald", en: "warm", alias: ["cald", "calda"] },
  { id: "nostalgic", ro: "Nostalgic", en: "nostalgic", alias: ["nostalgic", "nostalgica"] },
  { id: "melancolic", ro: "Melancolic", en: "melancholic", alias: ["melancolic", "melancolica"] },
  { id: "romantic", ro: "Romantic", en: "romantic", alias: ["romantic", "romantica"] },
  { id: "linistit", ro: "Liniștit", en: "calm, peaceful", alias: ["linistit", "linistita"] },
  { id: "solemn", ro: "Solemn", en: "solemn", alias: ["solemn", "solemna"] },
  { id: "speranta", ro: "Plin de speranță", en: "hopeful", alias: ["plin de speranta", "speranta"] },
  { id: "jucaus", ro: "Jucăuș", en: "playful", alias: ["jucaus", "jucausa"] },
  { id: "misterios", ro: "Misterios", en: "mysterious", alias: ["misterios", "misterioasa"] },
  { id: "triumfal", ro: "Triumfal", en: "triumphant", alias: ["triumfal", "triumfala"] },
  { id: "trist", ro: "Trist", en: "sad", alias: ["trist", "trista"] },
  { id: "visator", ro: "Visător", en: "dreamy", alias: ["visator", "visatoare"] },
  { id: "energic", ro: "Energic", en: "energetic", alias: ["energic", "energica"] },
  { id: "intim", ro: "Intim", en: "intimate", alias: ["intim", "intima"] },
  { id: "spiritual", ro: "Spiritual", en: "spiritual", alias: ["spiritual", "spirituala"] },
];
export const SUNETE: Element[] = [
  { id: "studio", ro: "Studio curat", en: "clean studio production" },
  { id: "live", ro: "Live, în sală", en: "live room recording" },
  { id: "lofi", ro: "Lo-fi", en: "lo-fi tape warmth" },
  { id: "vechi", ro: "Bandă veche", en: "vintage analog tape sound" },
];

export function retetaGoala(): Reteta {
  return { stiluri: [], instrumente: {}, voce: null, caracter: null, stari: [], tempo: null, tonalitate: null, energie: null, sunet: null, note: "" };
}

const gaseste = <T extends Element>(lista: T[], id: unknown): T | undefined => lista.find((x) => x.id === id);

/** Aduce orice intrare (din browser, din stocarea locală, din rută) la o rețetă validă. */
export function normalizeazaReteta(x: unknown): Reteta {
  const r = retetaGoala();
  if (!x || typeof x !== "object") return r;
  const o = x as Record<string, unknown>;
  if (Array.isArray(o.stiluri)) {
    for (const s of o.stiluri) {
      if (r.stiluri.length >= MAX_STILURI) break;
      const id = (s as StilActiv)?.id;
      const p = Math.round(Number((s as StilActiv)?.pondere));
      if (!gaseste(STILURI, id) || !Number.isFinite(p) || p < 1) continue;
      if (r.stiluri.some((y) => y.id === id)) continue;
      r.stiluri.push({ id, pondere: Math.min(100, p) });
    }
  }
  if (o.instrumente && typeof o.instrumente === "object") {
    for (const [id, poz] of Object.entries(o.instrumente as Record<string, unknown>)) {
      if (gaseste(INSTRUMENTE, id) && POZITII.includes(poz as Pozitie)) r.instrumente[id] = poz as Pozitie;
    }
  }
  if (gaseste(VOCI, o.voce)) r.voce = o.voce as string;
  if (gaseste(CARACTERE, o.caracter)) r.caracter = o.caracter as string;
  if (Array.isArray(o.stari)) {
    for (const s of o.stari) if (gaseste(STARI, s) && !r.stari.includes(s as string) && r.stari.length < MAX_STARI) r.stari.push(s as string);
  }
  const t = Math.round(Number(o.tempo));
  if (o.tempo !== null && o.tempo !== undefined && Number.isFinite(t) && t >= 40 && t <= 200) r.tempo = t;
  if (o.tonalitate === "major" || o.tonalitate === "minor") r.tonalitate = o.tonalitate;
  if (o.energie === "calm" || o.energie === "mare") r.energie = o.energie;
  if (gaseste(SUNETE, o.sunet)) r.sunet = o.sunet as string;
  if (typeof o.note === "string") r.note = o.note.replace(/\s+/g, " ").trim().slice(0, 200);
  return r;
}

/** Rețeta nu cere nimic: stilul îl scrie modelul, ca la compunerea simplă. */
export function retetaEGoala(r: Reteta): boolean {
  return !r.stiluri.length && !Object.keys(r.instrumente).length && !r.voce && !r.caracter && !r.stari.length && r.tempo === null
    && !r.tonalitate && !r.energie && !r.sunet;
}

/** Stilurile în ordinea tăriei (baza prima; la egalitate, primul activat). */
function ordonate(stiluri: StilActiv[]): StilActiv[] {
  return stiluri.map((s, i) => ({ s, i })).sort((a, b) => b.s.pondere - a.s.pondere || a.i - b.i).map((x) => x.s);
}

/** Treapta fiecărui stil activ față de bază. */
export function trepteStiluri(stiluri: StilActiv[]): Record<string, Treapta> {
  const rez: Record<string, Treapta> = {};
  const o = ordonate(stiluri);
  if (!o.length) return rez;
  const baza = o[0].pondere;
  o.forEach((s, i) => {
    const r = s.pondere / baza;
    rez[s.id] = i === 0 ? "baza" : r >= 0.85 ? "egal" : r >= 0.5 ? "clar" : r >= 0.25 ? "idee" : "abia";
  });
  return rez;
}

const lista = (v: string[]) => (v.length <= 1 ? v.join("") : `${v.slice(0, -1).join(", ")} and ${v[v.length - 1]}`);

function frazaGenuri(stiluri: StilActiv[], faraAbia: boolean): string {
  const o = ordonate(stiluri);
  if (!o.length) return "";
  const tr = trepteStiluri(stiluri);
  const en = (t: Treapta) => o.filter((s) => tr[s.id] === t).map((s) => gaseste(STILURI, s.id)!.en);
  const egali = en("egal");
  const baza = en("baza")[0];
  if (o.length === 1) return baza;
  const parti = [egali.length ? `an even blend of ${lista([baza, ...egali])}` : `primarily ${baza}`];
  const clar = en("clar");
  if (clar.length) parti.push(clar.length === 1 ? `with a strong ${clar[0]} influence` : `with strong ${lista(clar)} influences`);
  const idee = en("idee");
  if (idee.length) parti.push(`with touches of ${lista(idee)}`);
  const abia = faraAbia ? [] : en("abia");
  if (abia.length) parti.push(`with a subtle hint of ${lista(abia)}`);
  return parti.join(", ");
}

export type Compilat = {
  text: string;
  exclude: string;
  instrumente_cerute: { ro: string; en: string }[];
  trepte: Record<string, Treapta>;
  scoase: string[];
  eroare: string | null;
};

/** Rețeta → textul de stil Suno. Aceeași rețetă dă mereu același text. */
export function compileazaStil(
  retetaBruta: unknown,
  o: { limba?: "ro" | "en"; atmosfera?: string; excludeModel?: string } = {},
): Compilat {
  const r = normalizeazaReteta(retetaBruta);
  const trepte = trepteStiluri(r.stiluri);
  const inst = (poz: Pozitie) => INSTRUMENTE.filter((i) => r.instrumente[i.id] === poz);
  const pomenite = [...inst("mult"), ...inst("normal"), ...inst("putin")].slice(0, MAX_INSTRUMENTE);
  const multe = pomenite.filter((i) => r.instrumente[i.id] === "mult");
  const stari = r.stari.map((s) => gaseste(STARI, s)!.en);
  const voce = gaseste(VOCI, r.voce);
  const caracter = gaseste(CARACTERE, r.caracter);
  const atmosfera = (o.atmosfera || "").replace(/\s+/g, " ").trim().replace(/[.;,]+$/, "").slice(0, 160);

  const scoase: string[] = [];
  let cuAtmosfera = !!atmosfera, cuPutin = true, cuAbia = true, nStari = stari.length;
  const construieste = () => {
    const parti: string[] = [];
    const genuri = frazaGenuri(r.stiluri, !cuAbia);
    if (genuri) parti.push(genuri);
    if (nStari) parti.push(stari.slice(0, nStari).join(", "));
    if (r.tempo !== null) parti.push(`${r.tempo} BPM`);
    if (r.tonalitate) parti.push(`${r.tonalitate} key`);
    if (r.energie) parti.push(r.energie === "calm" ? "calm, low energy" : "high energy");
    if (voce) parti.push(caracter ? `${caracter.en} ${voce.en}` : voce.en);
    else if (caracter) parti.push(`${caracter.en} vocals`);
    for (const i of pomenite) {
      const poz = r.instrumente[i.id];
      if (poz === "putin" && !cuPutin) continue;
      parti.push(poz === "mult" ? `prominent ${i.en}` : poz === "putin" ? `subtle ${i.en}` : i.en);
    }
    const sunet = gaseste(SUNETE, r.sunet);
    if (sunet) parti.push(sunet.en);
    if (cuAtmosfera) parti.push(atmosfera);
    if (o.limba) parti.push(o.limba === "ro" ? "Romanian lyrics" : "English lyrics");
    for (const i of multe) parti.push(`${i.en} upfront in the mix`);
    return parti.join(", ");
  };

  let text = construieste();
  const pasi: [() => boolean, () => void, string][] = [
    [() => cuAtmosfera, () => { cuAtmosfera = false; }, "propoziția de atmosferă"],
    [() => cuPutin && pomenite.some((i) => r.instrumente[i.id] === "putin"), () => { cuPutin = false; }, "instrumentele „puțin”"],
    [() => cuAbia && Object.values(trepte).includes("abia"), () => { cuAbia = false; }, "stilurile „abia simțit”"],
    [() => nStari > 2, () => { nStari = 2; }, "a treia stare"],
    [() => nStari > 1, () => { nStari = 1; }, "a doua stare"],
  ];
  for (const [seAplica, aplica, nume] of pasi) {
    if (text.length <= TINTA_STIL) break;
    if (!seAplica()) continue;
    aplica();
    scoase.push(nume);
    text = construieste();
  }
  const eroare = text.length > TINTA_STIL ? `Stilul are ${text.length} de caractere (maximum ${TINTA_STIL}). Scoate din reglaje.` : null;

  const fara = inst("fara").map((i) => i.en);
  const dinModel = (o.excludeModel || "").split(",").map((x) => x.trim()).filter(Boolean);
  const exc: string[] = [];
  for (const e of [...fara, ...dinModel]) {
    if (exc.some((y) => y.toLowerCase() === e.toLowerCase())) continue;
    if ([...exc, e].join(", ").length > 300) break;
    exc.push(e);
  }
  return { text, exclude: exc.join(", "), instrumente_cerute: multe.map((i) => ({ ro: i.ro, en: i.en })), trepte, scoase, eroare };
}

// ── Reglajul în cuvinte: frazele simple se rezolvă în cod, pe loc ─────────────────────────────────────────────────────────

const faraDiacritice = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9&\- ]+/g, " ").replace(/\s+/g, " ").trim();
const contine = (text: string, termen: string) => new RegExp(`(^| )${termen.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}( |$)`).test(text);
const numeAlias = (e: Element) => [faraDiacritice(e.ro), ...(e.alias || [])].sort((a, b) => b.length - a.length);

function potrivit<T extends Element>(listaEl: T[], clauza: string): T | undefined {
  let cel: T | undefined, lung = 0;
  for (const e of listaEl) for (const a of numeAlias(e)) if (a.length > lung && contine(clauza, a)) { cel = e; lung = a.length; }
  return cel;
}

type Gest = "plus" | "minus" | "scoate" | "adauga";
const GESTURI: [Gest, RegExp][] = [
  ["scoate", /(^| )(scoate|fara|elimina|sterge|nu vreau|renunta la)( |$)/],
  ["plus", /(^| )(mai mult|mai multa|mai multe|mai tare|mai puternic|mai puternica|intareste|creste)( |$)/],
  ["minus", /(^| )(mai putin|mai putina|mai putine|mai incet|mai slab|mai slaba|scade|redu)( |$)/],
  ["adauga", /(^| )(adauga|pune|vreau|cu|baga|si)( |$)/],
];

export type Reglaj = { reteta: Reteta; schimbari: string[]; neinteles: string[] };

/** „mai mult bas, scoate tobele, adaugă viori și pian” → rețeta nouă + ce s-a schimbat + ce nu s-a înțeles. */
export function regleazaInCuvinte(retetaBruta: unknown, fraza: string): Reglaj {
  const r = normalizeazaReteta(retetaBruta);
  const schimbari: string[] = [], neinteles: string[] = [];
  let gestAnterior: Gest | null = null;
  const clauze = fraza.split(/[,.;!\n]+|\s+(?:și|si|iar|apoi)\s+/i).map((c) => c.trim()).filter(Boolean);
  for (const original of clauze) {
    const c = faraDiacritice(original);
    if (!c) continue;
    const spus = GESTURI.find(([, re]) => re.test(c))?.[0];
    const arePic = /(^| )(un pic|putin|putina|usor|o idee|o tusa)( |$)/.test(c);
    // „un pic de harpă” fără alt verb e o adăugare, chiar dacă propoziția dinainte spunea „scoate”
    const gest: Gest = spus ?? (arePic ? "adauga" : gestAnterior ?? "adauga");
    const unPic = arePic && gest === "adauga";

    // tempo
    if (/(^| )(mai rapid|mai rapida|mai alert|mai alerta|mai repede|mai vioi)( |$)/.test(c)) {
      r.tempo = Math.min(200, (r.tempo ?? 108) + 12); schimbari.push(`tempo → ${r.tempo} BPM`); continue;
    }
    if (/(^| )(mai lent|mai lenta|mai rar|mai domol|mai incet tempo)( |$)/.test(c)) {
      r.tempo = Math.max(40, (r.tempo ?? 96) - 12); schimbari.push(`tempo → ${r.tempo} BPM`); continue;
    }
    // voce
    const voce = potrivit(VOCI, c);
    if (voce && /voce|voci|duet|cor de copii|recitat|vorbit/.test(c)) {
      r.voce = gest === "scoate" ? null : voce.id; schimbari.push(gest === "scoate" ? "vocea → auto" : `vocea → ${voce.ro}`); gestAnterior = gest; continue;
    }
    const vreaStil = /(^| )(stil|stilul|gen|genul)( |$)/.test(c);
    const instr = vreaStil ? undefined : potrivit(INSTRUMENTE, c);
    const stil = instr ? undefined : potrivit(STILURI, c);
    const stare = instr || stil ? undefined : potrivit(STARI, c);

    if (instr && gest) {
      const acum: Pozitie | undefined = r.instrumente[instr.id];
      let nou: Pozitie | undefined = acum;
      if (gest === "scoate") nou = "fara";
      else if (gest === "adauga") nou = !acum || acum === "fara" ? (unPic ? "putin" : "normal") : acum;
      else if (gest === "plus") nou = !acum ? "mult" : acum === "fara" ? "putin" : acum === "putin" ? "normal" : "mult";
      else nou = !acum ? "putin" : acum === "mult" ? "normal" : acum === "normal" ? "putin" : acum;
      if (nou === acum) schimbari.push(`${instr.ro}: e deja la ${gest === "plus" ? "maximum" : gest === "minus" ? "minimum (spune „scoate” ca să dispară)" : ETICHETE_POZITIE[acum!]}`);
      else { r.instrumente[instr.id] = nou!; schimbari.push(`${instr.ro} → ${ETICHETE_POZITIE[nou!]}`); }
      gestAnterior = gest; continue;
    }
    if (stil && gest) {
      const activ = r.stiluri.find((s) => s.id === stil.id);
      const baza = ordonate(r.stiluri)[0];
      const pune = (t: Exclude<Treapta, "baza">) => Math.max(1, Math.round((baza?.pondere ?? 100) * MIJLOC_TREAPTA[t]));
      if (gest === "scoate") {
        if (activ) { r.stiluri = r.stiluri.filter((s) => s.id !== stil.id); schimbari.push(`${stil.ro}: scos`); }
        else schimbari.push(`${stil.ro}: nu era ales`);
      } else if (!activ) {
        if (r.stiluri.length >= MAX_STILURI) schimbari.push(`${stil.ro}: sunt deja ${MAX_STILURI} stiluri; scoate unul întâi`);
        else if (!baza) { r.stiluri.push({ id: stil.id, pondere: 100 }); schimbari.push(`${stil.ro} → singurul stil`); }
        else { const t = unPic || gest === "minus" ? "idee" : "clar"; r.stiluri.push({ id: stil.id, pondere: pune(t) }); schimbari.push(`${stil.ro} → ${ETICHETE_TREAPTA[t]}`); }
      } else if (gest === "adauga") schimbari.push(`${stil.ro}: e deja ales`);
      else {
        const t = trepteStiluri(r.stiluri)[stil.id];
        const scara: Treapta[] = ["abia", "idee", "clar", "egal", "baza"];
        const k = scara.indexOf(t) + (gest === "plus" ? 1 : -1);
        if (r.stiluri.length === 1) schimbari.push(`${stil.ro}: e singurul stil; adaugă altul ca să-l poți doza`);
        else if (k < 0) schimbari.push(`${stil.ro}: e deja la minimum (spune „scoate” ca să dispară)`);
        else if (k >= scara.length) schimbari.push(`${stil.ro}: e deja baza`);
        else if (scara[k] === "baza") {
          activ.pondere = Math.min(100, baza.pondere + 10);
          if (activ.pondere <= baza.pondere) for (const s of r.stiluri) if (s !== activ) s.pondere = Math.max(1, Math.round(s.pondere * 0.85));
          schimbari.push(`${stil.ro} → baza`);
        } else if (t === "baza") {
          const urm = ordonate(r.stiluri)[1];
          activ.pondere = Math.max(1, Math.round(urm.pondere * 0.9));
          schimbari.push(`${stil.ro}: nu mai e baza (baza devine ${gaseste(STILURI, urm.id)!.ro})`);
        } else { activ.pondere = pune(scara[k] as Exclude<Treapta, "baza">); schimbari.push(`${stil.ro} → ${ETICHETE_TREAPTA[scara[k]]}`); }
      }
      gestAnterior = gest; continue;
    }
    if (stare) {
      if (gest === "scoate") { r.stari = r.stari.filter((s) => s !== stare.id); schimbari.push(`starea „${stare.ro}”: scoasă`); }
      else if (r.stari.includes(stare.id)) schimbari.push(`starea „${stare.ro}”: e deja aleasă`);
      else if (r.stari.length >= MAX_STARI) schimbari.push(`starea „${stare.ro}”: sunt deja ${MAX_STARI}; scoate una întâi`);
      else { r.stari.push(stare.id); schimbari.push(`starea → + ${stare.ro}`); }
      continue;
    }
    neinteles.push(original);
  }
  return { reteta: r, schimbari, neinteles };
}
