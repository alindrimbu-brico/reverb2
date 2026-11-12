// Registrul de pachete: singurul loc unde se scrie un preț sau un termen de livrare.
// Paginile (prima pagină, Pachete, Servicii, Contact, Magazine online, Portofoliu, RO și EN) citesc de aici.
// Textele în engleză stau în lib/packagesEn.ts, fără preț.
// Textele pachetelor se scriu pe înțelesul unui om care nu lucrează în IT: fără nume de tehnologii
// (Next.js, Payload, JSON-LD) și fără prescurtări (GEO, A/B, SLA) în ce vede clientul.

export type PackageId =
  | "social-growth"
  | "daily-impact"
  | "dominance-3x"
  | "site-start"
  | "start-digital"
  | "magazin-start"
  | "magazin-digital-activ"
  | "infrastructura-enterprise";

export type Package = {
  id: PackageId;
  name: string;
  /** Nume scurt, pentru liste înguste și pentru opțiunile din formular. */
  shortName: string;
  tagline: string;
  price: string;
  priceExtra?: string;
  delivery: string;
  description: string;
  includes: string[];
  ideal: string;
  href: string;
  highlight?: boolean;
  badge?: string;
  category?: "social" | "web" | "b2b";
};

/** Toate prețurile din registru sunt fără TVA. Eticheta stă lângă preț, nota sub o listă de prețuri. */
export const VAT_LABEL = "+ TVA"; // spațiu care nu se rupe: eticheta rămâne întreagă pe un rând
export const VAT_NOTE = "Prețurile nu includ TVA.";

export const packages: Package[] = [
  {
    id: "social-growth",
    name: "Social Growth AI Video",
    shortName: "Social Growth (12 video/lună)",
    tagline: "Prezență video constantă pe rețelele de socializare.",
    price: "€330 / lună",
    delivery: "Livrabil săptămânal",
    category: "social",
    description:
      "12 clipuri video scurte și 12 caruseluri de produs pe lună, făcute cu AI și gândite pentru TikTok, Reels și YouTube Shorts.",
    includes: [
      "12 clipuri video scurte pe lună, câte 3 pe săptămână",
      "12 postări grafice și caruseluri de produs",
      "Publicare pe TikTok, Instagram, Facebook și YouTube Shorts",
      "Scenarii de vânzare și subtitrări pe ecran",
      "Raport lunar: câți oameni ți-au văzut clipurile",
    ],
    ideal: "Firme locale, servicii, clinici și ateliere care vor prezență video constantă fără costuri de filmare clasică.",
    href: "/contact",
  },
  {
    id: "daily-impact",
    name: "Daily Impact 1 Video Zilnic",
    shortName: "Daily Impact (30 video/lună)",
    tagline: "Un clip nou în fiecare zi, cu produsele tale.",
    price: "€588 / lună",
    delivery: "Livrare zilnică",
    category: "social",
    description:
      "30 de clipuri video pe lună, câte unul în fiecare zi, plus 30 de postări grafice. Arătăm utilajele, produsele și serviciile tale în acțiune, cu voce generată cu AI și montaj alert.",
    includes: [
      "30 de clipuri video scurte pe lună, unul în fiecare zi",
      "30 de postări grafice adaptate fiecărei platforme",
      "Produse și utilaje arătate în acțiune",
      "Voce de prezentare generată cu AI, cu sunet natural",
      "Scenarii scrise ca să vândă",
      "O discuție pe săptămână: ce a mers și ce schimbăm",
    ],
    ideal: "Magazine online, distribuitori și companii care vor creștere accelerată prin volum susținut.",
    href: "/contact",
    highlight: true,
    badge: "Cel Mai Solicitat",
  },
  {
    id: "dominance-3x",
    name: "Dominance 3X 3 Video Zilnic",
    shortName: "Dominance 3X (90 video/lună)",
    tagline: "Trei clipuri pe zi, ca marca ta să apară peste tot.",
    price: "€1.275 / lună",
    delivery: "3 livrări zilnice",
    category: "social",
    description:
      "90 de clipuri video pe lună, câte 3 pe zi, pentru mărci și magazine mari care vor să fie văzute zilnic de toți cei interesați de domeniul lor.",
    includes: [
      "90 de clipuri video scurte pe lună, 3 în fiecare zi",
      "Publicare pe mai multe conturi",
      "Testăm mai multe variante de mesaj și păstrăm ce vinde",
      "Voce în mai multe limbi, la cerere",
      "Suport cu prioritate, la orice oră",
    ],
    ideal: "Retaileri mari, mărci naționale și firme cu cataloage mari de produse.",
    href: "/contact",
  },
  {
    id: "site-start",
    name: "Site Start",
    shortName: "Site Start",
    tagline: "Site de prezentare rapid, pornit dintr-un stil gata făcut.",
    price: "€267",
    delivery: "7–10 zile",
    category: "web",
    description:
      "Site de prezentare cu până la 5 pagini, construit pornind de la un stil din galeria noastră de concepte și adaptat la firma ta: culori, texte, poze.",
    includes: [
      "Până la 5 pagini: Acasă, Despre, Servicii, Galerie, Contact",
      "Design pornit dintr-un stil din galeria noastră, adaptat mărcii tale",
      "Formular de contact, WhatsApp și hartă Google",
      "Optimizat pentru telefon și pentru viteză",
      "Textele și pozele vin de la tine; două runde de modificări incluse",
      "Găzduire inclusă în primul an; apoi €60 / an sau îl muți la găzduirea ta",
      "Publicat pe domeniul tău (domeniul se plătește separat)",
    ],
    ideal: "Firme mici, cabinete și meșteri care au nevoie repede de o prezență online corectă, cu buget mic.",
    href: "/contact",
  },
  {
    id: "start-digital",
    name: "Start Digital Web și Video",
    shortName: "Start Digital (site + 15 video)",
    tagline: "Un site rapid și modern, susținut de clipuri video din prima zi.",
    price: "€1.275",
    delivery: "7–14 zile",
    category: "web",
    description:
      "Site de prezentare cu 3–5 pagini, foarte rapid, cu design făcut doar pentru tine, formular de contact, hartă Google și WhatsApp, plus 15 clipuri video pentru lansare.",
    includes: [
      "Site foarte rapid: se încarcă în sub 1,2 secunde",
      "Design exclusiv, fără șabloane",
      "Formular de contact, WhatsApp și hartă Google",
      "Arată bine și pe telefon",
      "Pregătit ca să fie găsit de Google și de asistenții AI (ChatGPT, Gemini)",
      "15 clipuri video scurte pentru lansare",
    ],
    ideal: "Firme de servicii, cabinete, consultanți și ateliere care intră serios în online.",
    href: "/contact",
  },
  {
    id: "magazin-start",
    name: "Magazin Start",
    shortName: "Magazin Start",
    tagline: "Magazin online gata de vânzare, cu plată cu cardul, curier și facturi automate.",
    price: "€690",
    delivery: "14–21 zile",
    category: "web",
    description:
      "Magazin online pe WooCommerce, o platformă de magazine foarte răspândită, pornit dintr-o temă pregătită de noi. Clientul plătește cu cardul, eticheta de curier (AWB) iese direct din comandă, iar factura se emite singură. Îți încărcăm primele 50 de produse.",
    includes: [
      "Până la 50 de produse încărcate de noi",
      "Plată cu cardul, ramburs și transfer bancar",
      "Un curier integrat: eticheta de curier (AWB) se face din comandă",
      "Facturare automată, prin FGO sau SmartBill (programe de facturare)",
      "Temă pregătită de noi, adaptată mărcii tale; două runde de modificări",
      "Găzduirea, domeniul și contractele cu procesatorul de plăți, curierul și programul de facturare sunt ale tale",
    ],
    ideal: "Producători locali și magazine mici care vor să înceapă să vândă online fără o investiție mare.",
    href: "/contact",
  },
  {
    id: "magazin-digital-activ",
    name: "Magazin Digital Activ",
    shortName: "Magazin Digital Activ (+ 30 video)",
    tagline: "Magazin online complet, făcut să vândă și să fie găsit de Google și de asistenții AI.",
    price: "€2.499",
    delivery: "14–30 zile",
    category: "web",
    description:
      "Magazin online complet, cu plată cu cardul, facturare automată și AWB la curieri, un panou din care îți administrezi singur produsele și comenzile, plus 30 de clipuri video pentru lansare.",
    includes: [
      "Magazin online complet, cu plată cu cardul și curieri",
      "Panou de administrare pentru produse și comenzi: WooCommerce sau unul construit la comandă",
      "Facturare automată FGO sau SmartBill și AWB generat pe loc",
      "Catalog de produse organizat ca să fie ușor de cumpărat",
      "Pregătit ca să fie găsit de Google și de asistenții AI (ChatGPT, Gemini)",
      "30 de clipuri video de prezentare a produselor, pentru lansare",
    ],
    ideal: "Magazine, distribuitori, producători locali și mărci în creștere care vor să vândă mult online.",
    href: "/contact",
    highlight: true,
    badge: "Sistem Complet",
  },
  {
    id: "infrastructura-enterprise",
    name: "Proiecte Mari și B2B",
    shortName: "Proiecte Mari și B2B",
    tagline: "Sisteme digitale la comandă pentru firme mari.",
    price: "de la €3.315",
    delivery: "Proiect dedicat",
    category: "b2b",
    description:
      "Proiecte mari, lucrate împreună cu partenerul nostru din Londra, Zylaris Group: portaluri pentru clienți și parteneri, automatizarea muncii repetitive din firmă, asistenți AI care lucrează singuri și găzduire securizată.",
    includes: [
      "Infrastructură proprie, care crește odată cu firma",
      "Portaluri securizate pentru clienți și parteneri",
      "Analiza proceselor din firmă și asistenți AI care preiau munca repetitivă",
      "Securitate și reguli de lucru la standard internațional",
      "Supraveghere permanentă și timp de răspuns garantat prin contract",
    ],
    ideal: "Companii mari și organizații care au nevoie de sisteme digitale pe care se pot baza.",
    href: "/contact",
  },
];

export function getPackage(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}

/** Pachetul, cu eroare la construcție dacă id-ul nu există (în loc de un preț gol pe pagină). */
export function pkg(id: PackageId): Package {
  const p = getPackage(id);
  if (!p) throw new Error(`Pachet inexistent în lib/packages.ts: ${id}`);
  return p;
}

/** „€1.275 / lună” → „€1,275 / month”; „de la €3.315” → „from €3,315”. */
export function priceEn(price: string): string {
  return price
    .replace(/^de la\s+/i, "from ")
    .replace(/(\d)\.(\d{3})/g, "$1,$2")
    .replace("/ lună", "/ month");
}

/** „7–14 zile” → „7–14 days”. Termenele care nu sunt în zile au textul lor în lib/packagesEn.ts. */
export function deliveryEn(delivery: string): string {
  return delivery.replace(/\bzile\b/, "days");
}

/** „€330 / lună” → { amount: „€330”, period: „/ lună” }; fără perioadă, period e gol. */
export function splitPrice(price: string): { amount: string; period: string } {
  const i = price.indexOf(" / ");
  return i < 0 ? { amount: price, period: "" } : { amount: price.slice(0, i), period: price.slice(i + 1) };
}

/** Ține o expresie scurtă pe un singur rând („în 7–14 zile”), fără span nowrap (WebKit îl scoate din card). */
export function noBreak(text: string): string {
  return text.replace(/–/g, "–⁠").replace(/ /g, " ");
}

/** Valori vechi ale parametrului ?pachet= (linkuri mai vechi) → id-ul din registru. */
export const packageAliases: Record<string, PackageId> = {
  "magazin-complet": "start-digital",
  "platforma-prezentare": "magazin-digital-activ",
  "dominant-omnichannel": "dominance-3x",
  "ecosistem-enterprise": "infrastructura-enterprise",
  enterprise: "infrastructura-enterprise",
  "site-magazin": "site-start",
  "web-store": "site-start",
};

/** Opțiunile care nu sunt pachete, în formularul de contact. */
export const extraServiceOptions = [
  { value: "geo-search", label: "Să fiu găsit de asistenții AI (ChatGPT, Gemini)" },
  { value: "consultanta-alta", label: "Consultanță / Proiect Personalizat" },
];

/** Opțiunile formularului de contact, în ordinea registrului. */
export function serviceOptions(): { value: string; label: string }[] {
  return [
    ...packages.map((p) => ({ value: p.id, label: `${p.shortName} — ${p.price}` })),
    ...extraServiceOptions,
  ];
}

/** Traduce valoarea din ?pachet= într-o opțiune care există; orice altceva devine gol. */
export function resolveService(param: string | null | undefined): string {
  if (!param) return "";
  const v = packageAliases[param] ?? param;
  return serviceOptions().some((o) => o.value === v) ? v : "";
}
