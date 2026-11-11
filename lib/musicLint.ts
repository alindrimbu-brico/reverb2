// Reverb Studio — Muzică: verificatorul promptului Suno (design_v2_1_decizii.md, „Compunerea”). Fără importuri.

export type Instrument = { ro: string; en: string };
export type Scena = { nr: number; strofa: string; prompt_en: string };
export type PiesaCompusa = {
  limba: string;
  titlu: string;
  stil: string;
  exclude: string;
  versuri: string;
  instrumente_cerute: Instrument[];
  scene: Scena[];
  kit: { titlu: string; descriere: string; etichete: string[] };
};

// Nume care nu au ce căuta în prompturi (Suno le refuză oricum) și titluri de cântece existente.
export const ARTISTI_INTERZISI = [
  "mariah carey", "michael bublé", "michael buble", "bing crosby", "frank sinatra", "elvis", "wham", "george michael",
  "taylor swift", "ariana grande", "justin bieber", "andrea bocelli", "celine dion", "pentatonix", "michael jackson",
  "smiley", "holograf", "inna", "andra", "loredana", "delia", "fuego",
];
export const TITLURI_INTERZISE = [
  "last christmas", "all i want for christmas", "white christmas", "silent night", "feliz navidad", "let it snow",
  "santa claus is coming to town", "rudolph the red", "jingle all the way", "o, ce veste minunată", "o ce veste minunata",
  "moș crăciun cu plete dalbe", "mos craciun cu plete dalbe", "astăzi s-a născut hristos", "steaua sus răsare",
  "o, brad frumos", "o brad frumos", "domn, domn să-nălțăm",
];
export const PERMISE = ["leru-i ler", "lerui ler", "florile dalbe"];

function numara(text: string, termen: string): number {
  if (!termen) return 0;
  const t = text.toLowerCase();
  const k = termen.toLowerCase().trim();
  let n = 0;
  let i = t.indexOf(k);
  while (i !== -1) {
    n++;
    i = t.indexOf(k, i + k.length);
  }
  return n;
}

function indicatii(versuri: string): string {
  return (versuri.match(/\[[^\]]*\]/g) || []).join(" ").toLowerCase();
}

export function lintPiesa(p: PiesaCompusa): string[] {
  const motive: string[] = [];
  const titlu = (p.titlu || "").trim();
  const stil = p.stil || "";
  const versuri = p.versuri || "";
  if (!titlu) motive.push("titlul lipsește");
  if (titlu.length > 80) motive.push("titlul are peste 80 de caractere");
  if (!stil.trim()) motive.push("stilul lipsește");
  if (stil.length > 1000) motive.push(`stilul are ${stil.length} caractere (maximum 1.000)`);
  if (versuri.length > 3000) motive.push(`versurile au ${versuri.length} caractere (maximum 3.000)`);
  if (!/\[verse/i.test(versuri)) motive.push("lipsește eticheta [Verse]");
  if (!/\[chorus\]/i.test(versuri)) motive.push("lipsește eticheta [Chorus]");
  const ind = indicatii(versuri);
  for (const ins of p.instrumente_cerute || []) {
    const en = (ins.en || "").trim();
    if (!en) {
      motive.push(`instrumentul „${ins.ro}” nu are numele în engleză`);
      continue;
    }
    const n = numara(stil, en);
    if (n < 2) motive.push(`„${en}” apare de ${n} ori în stil (minimum 2)`);
    if (!ind.includes(en.toLowerCase())) motive.push(`„${en}” nu apare ca indicație [${en}] în versuri`);
  }
  const tot = `${titlu}\n${stil}\n${versuri}`.toLowerCase();
  for (const a of ARTISTI_INTERZISI) {
    if (new RegExp(`(^|[^a-zăâîșț])${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-zăâîșț]|$)`, "i").test(tot)) {
      motive.push(`conține numele unui artist: „${a}”`);
    }
  }
  const tv = `${titlu}\n${versuri}`.toLowerCase();
  for (const t of TITLURI_INTERZISE) {
    if (tv.includes(t)) motive.push(`conține titlul unui cântec existent: „${t}”`);
  }
  const scene = p.scene || [];
  if (scene.length < 4 || scene.length > 8) motive.push(`are ${scene.length} scene (4–8)`);
  if (!(p.kit && (p.kit.titlu || "").trim())) motive.push("kitul YouTube nu are titlu");
  return motive;
}

export function lintToate(piese: PiesaCompusa[]): string[] {
  const motive: string[] = [];
  for (const p of piese) for (const m of lintPiesa(p)) motive.push(`${(p.limba || "?").toUpperCase()}: ${m}`);
  return motive;
}
