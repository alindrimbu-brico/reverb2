// Etichetele pozelor cu inamici: public/abyss-assets/enemies/enemy_1.jpg ... enemy_150.jpg
// (numerotate de la 1 în fișiere; în cod, indexul unei poze începe de la 0, deci enemy_N.jpg = index N-1).
// Pozele 101-150 sunt copii exacte ale pozelor 1-50: descărcarea inițială a dat doar 100 de poze unice.
// Etichetele au fost puse uitându-ne la poze; dacă o poză e etichetată greșit, se mută numărul ei în altă listă.

export type Kind =
  | "pasare"
  | "veverita"
  | "pisica"
  | "capra"
  | "elefant"
  | "sarpe"
  | "felina"
  | "canid"
  | "cervid"
  | "mamifer"
  | "altele";

// Numerele pozelor unice (1-100) pe fiecare fel de animal.
const UNIQUE_PHOTOS_BY_KIND: Record<Kind, number[]> = {
  pasare: [1, 4, 7, 8, 9, 10, 13, 15, 17, 18, 22, 24, 26, 29, 30, 41, 46, 47, 52, 53, 56, 60, 61, 62, 63, 70, 71, 73, 74, 76, 77, 78, 84, 87, 88, 89, 93, 97, 100],
  veverita: [3, 31, 37, 48, 55, 66],
  pisica: [16, 20, 21, 27, 79, 86, 92, 98],
  capra: [6, 14, 28, 33, 40, 44, 57, 94, 99],
  elefant: [23, 25, 72],
  sarpe: [5],
  felina: [35, 36, 50, 58, 81],
  canid: [64, 65, 75, 85],
  cervid: [11, 34, 69],
  mamifer: [12, 19, 39, 42, 43, 45, 51, 54, 59, 82, 90, 95],
  altele: [2, 32, 38, 49, 67, 68, 80, 83, 91, 96],
};

export const PHOTO_COUNT = 150;

// Felul animalului pentru fiecare poză, după index (0-149).
export const ENEMY_KIND: Kind[] = (() => {
  const byPhoto: Kind[] = new Array(100);
  (Object.keys(UNIQUE_PHOTOS_BY_KIND) as Kind[]).forEach(kind => {
    UNIQUE_PHOTOS_BY_KIND[kind].forEach(n => { byPhoto[n - 1] = kind; });
  });
  return Array.from({ length: PHOTO_COUNT }, (_, i) => byPhoto[i % 100]);
})();

// Indexurile (0-149) ale pozelor de un anumit fel, inclusiv copiile.
export function photosOfKind(kind: Kind): number[] {
  const out: number[] = [];
  ENEMY_KIND.forEach((k, i) => { if (k === kind) out.push(i); });
  return out;
}

// Raza (în unități din lume) a animalelor de fiecare fel. Jucătorul pornește cu raza 20 și poate mânca
// ce are raza sub ~18 (raza lui / 1,1). Păsările și veverițele pot fi mâncate de la început; restul cer să crești.
export const KIND_RADIUS: Record<Kind, [number, number]> = {
  pasare: [11, 20],
  veverita: [11, 20],
  pisica: [26, 40],
  capra: [30, 48],
  elefant: [58, 70],
  sarpe: [24, 32],
  felina: [44, 62],
  canid: [32, 46],
  cervid: [34, 50],
  mamifer: [20, 55],
  altele: [10, 40],
};

// Cum se numește fiecare fel în texte: „plural” (mănâncă 6 păsări), „none” (nu atinge nicio pasăre).
export const KIND_LABEL: Record<Kind, { plural: string; none: string }> = {
  pasare: { plural: "păsări", none: "nicio pasăre" },
  veverita: { plural: "veverițe", none: "nicio veveriță" },
  pisica: { plural: "pisici", none: "nicio pisică" },
  capra: { plural: "capre", none: "nicio capră" },
  elefant: { plural: "elefanți", none: "niciun elefant" },
  sarpe: { plural: "șerpi", none: "niciun șarpe" },
  felina: { plural: "feline mari", none: "nicio felină mare" },
  canid: { plural: "lupi și vulpi", none: "niciun lup sau vulpe" },
  cervid: { plural: "cerbi", none: "niciun cerb" },
  mamifer: { plural: "mamifere", none: "niciun mamifer" },
  altele: { plural: "alte animale", none: "niciun alt animal" },
};

// Poza care arată cel mai clar felul respectiv (index 0-149), folosită ca iconiță în panoul de task-uri.
export const KIND_ICON_PHOTO: Record<Kind, number> = {
  pasare: 21, // măcăleandru pe cioată
  veverita: 2,
  pisica: 19,
  capra: 13,
  elefant: 24,
  sarpe: 4,
  felina: 35,
  canid: 64,
  cervid: 10,
  mamifer: 38,
  altele: 66,
};
