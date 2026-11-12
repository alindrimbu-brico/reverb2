// Registrul de pachete: singurul loc unde se scrie un preț sau un termen de livrare.
// Paginile (prima pagină, Pachete, Servicii, Contact, Magazine online, Portofoliu, RO și EN) citesc de aici.
// Textele în engleză stau în lib/packagesEn.ts, fără preț.

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

export const packages: Package[] = [
  {
    id: "social-growth",
    name: "Social Growth AI Video",
    shortName: "Social Growth (12 video/lună)",
    tagline: "Prezență video constantă și credibilitate vizuală pe rețele.",
    price: "€330 / lună",
    delivery: "Livrabil săptămânal",
    category: "social",
    description:
      "12 clipuri video scurte și 12 caruseluri de produs generate cu modele AI, optimizate pentru algoritmii TikTok, Reels și YouTube Shorts.",
    includes: [
      "12 clipuri video scurte lunar, ritm de 3 pe săptămână",
      "12 postări grafice și carusel de produs",
      "Publicare sincronizată TikTok, Instagram, Facebook, Shorts",
      "Scenarii de vânzare și subtitrări dinamice",
      "Raport lunar clar de vizibilitate și reach",
    ],
    ideal: "Firme locale, servicii, clinici și ateliere care vor prezență video constantă fără costuri de filmare clasică.",
    href: "/contact",
  },
  {
    id: "daily-impact",
    name: "Daily Impact 1 Video Zilnic",
    shortName: "Daily Impact (30 video/lună)",
    tagline: "Dominare vizuală prin conținut video zilnic de produs.",
    price: "€588 / lună",
    delivery: "Livrare zilnică",
    category: "social",
    description:
      "30 de clipuri video lunar, câte 1 în fiecare zi, plus 30 de postări grafice. Demonstrații de utilaje, produse și servicii în acțiune, cu voiceover sintetic și montaj dinamic.",
    includes: [
      "30 de clipuri video scurte lunar, 1 clip în fiecare zi",
      "30 de postări grafice adaptate fiecărei platforme",
      "Demonstrații de produse și utilaje în acțiune",
      "Voiceover sintetic de înaltă fidelitate",
      "Scenarii orientate spre conversie și vânzare directă",
      "Consultanță săptămânală de conținut și optimizare",
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
    tagline: "Scalare agresivă pentru acoperire maximă pe algoritmi.",
    price: "€1.275 / lună",
    delivery: "3 livrări zilnice",
    category: "social",
    description:
      "90 de clipuri video lunar, câte 3 pe zi, pentru branduri și retaileri care vor să ocupe complet feed-ul utilizatorilor din nișa lor.",
    includes: [
      "90 de clipuri video scurte lunar, 3 clipuri zilnic",
      "Distribuție pe multiple conturi de campanie",
      "Testare A/B intensivă pe unghiuri de vânzare",
      "Voiceover multilingv la cerere",
      "Suport dedicat prioritar 24/7",
    ],
    ideal: "Retaileri mari, branduri naționale și companii cu cataloage vaste de produse.",
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
      "Publicare pe domeniul tău (domeniul se plătește separat)",
    ],
    ideal: "Firme mici, cabinete și meșteri care au nevoie repede de o prezență online corectă, cu buget mic.",
    href: "/contact",
  },
  {
    id: "start-digital",
    name: "Start Digital Web și Video",
    shortName: "Start Digital (site + 15 video)",
    tagline: "Un website rapid și modern, susținut de conținut video din prima zi.",
    price: "€1.275",
    delivery: "7–14 zile",
    category: "web",
    description:
      "Website de prezentare cu 3–5 pagini, de mare viteză pe Next.js, conectat cu formular de contact, hartă Google, WhatsApp și un pachet de lansare de 15 clipuri video.",
    includes: [
      "Website de mare viteză pe Next.js cu încărcare sub 1.2 secunde",
      "Design exclusiv, fără șabloane generice",
      "Formular contact, WhatsApp și Google Maps integrat",
      "Optimizare completă pentru telefoane mobile",
      "Structură de date pregătită pentru Google și Agenți AI GEO",
      "Pachet lansare: 15 clipuri video scurte incluse",
    ],
    ideal: "IMM-uri de servicii, cabinete, consultanță și ateliere care intră serios în digital.",
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
      "Magazin online pe WooCommerce, pornit dintr-o temă pregătită de noi, cu plată cu cardul, un curier cu AWB generat din comandă și facturare automată. Îți încărcăm primele 50 de produse.",
    includes: [
      "Până la 50 de produse încărcate de noi",
      "Plată cu cardul, ramburs și transfer bancar",
      "Un curier integrat, cu AWB generat din comandă",
      "Facturare automată FGO sau SmartBill",
      "Temă pregătită de noi, adaptată mărcii tale; două runde de modificări",
      "Găzduirea, domeniul și contractele cu procesatorul de plăți, curierul și programul de facturare sunt ale tale",
    ],
    ideal: "Producători locali și magazine mici care vor să înceapă să vândă online fără o investiție mare.",
    href: "/contact",
  },
  {
    id: "magazin-digital-activ",
    name: "Magazin Digital Activ eCommerce și AI",
    shortName: "Magazin Digital Activ (+ 30 video)",
    tagline: "Un magazin online complet construit pentru vânzare și optimizat pentru căutare AI.",
    price: "€2.499",
    delivery: "14–30 zile",
    category: "web",
    description:
      "Platformă eCommerce completă pe WooCommerce sau Next.js cu Payload CMS, checkout optimizat cognitiv, integrări plăți securizate, facturare automată, AWB curieri și 30 de clipuri video de lansare.",
    includes: [
      "Setup magazin online complet cu plăți card și curieri",
      "Opțiune Panou Control Enterprise Payload CMS sau WooCommerce",
      "Facturare automată FGO sau SmartBill plus emitere AWB instant",
      "Catalog de produse structurat pe conversie",
      "Optimizare pentru căutare generativă GEO și Schema JSON-LD",
      "Pachet lansare: 30 de clipuri video de prezentare produse",
    ],
    ideal: "Retail, distribuitori, producători locali și branduri în creștere care vor să vândă online masiv.",
    href: "/contact",
    highlight: true,
    badge: "Sistem Complet",
  },
  {
    id: "infrastructura-enterprise",
    name: "Infrastructură Enterprise & B2B",
    shortName: "Infrastructură Enterprise",
    tagline: "Arhitectură digitală dedicată și transformare operațională.",
    price: "de la €3.315",
    delivery: "Proiect dedicat",
    category: "b2b",
    description:
      "Proiecte de anvergură executate în parteneriat cu Zylaris Group London: portaluri de clienți B2B, automatizări de procese interne, integrarea agenților autonomi AI și hosting securizat.",
    includes: [
      "Arhitectură cloud scalabilă dedicată",
      "Portaluri securizate pentru clienți și parteneri B2B",
      "Audit operațional și integrarea agenților autonomi AI",
      "Guvernanță și securitate gestionată internațional",
      "Mentenanță proactivă 24/7 și SLA garantat",
    ],
    ideal: "Companii mari, corporații și organizații care necesită sisteme digitale robuste fără compromisuri.",
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
  { value: "geo-search", label: "Optimizare Pentru Căutare AI (GEO)" },
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
