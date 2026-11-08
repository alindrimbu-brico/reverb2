export type Package = {
  id: string;
  name: string;
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

export type MonthlyTier = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  recommended?: boolean;
};

export const packages: Package[] = [
  {
    id: "social-growth",
    name: "Social Growth AI Video",
    tagline: "Prezență video constantă și credibilitate vizuală pe rețele.",
    price: "€390 / lună",
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
    tagline: "Dominare vizuală prin conținut video zilnic de produs.",
    price: "€690 / lună",
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
    tagline: "Scalare agresivă pentru acoperire maximă pe algoritmi.",
    price: "€1.500 / lună",
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
    id: "start-digital",
    name: "Start Digital Web și Video",
    tagline: "Un website rapid și modern, susținut de conținut video din prima zi.",
    price: "€1.500",
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
    id: "magazin-digital-activ",
    name: "Magazin Digital Activ eCommerce și AI",
    tagline: "Un magazin online complet construit pentru vânzare și optimizat pentru căutare AI.",
    price: "€2.940",
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
    tagline: "Arhitectură digitală dedicată și transformare operațională.",
    price: "de la €3.900",
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

export const monthlyTiers: MonthlyTier[] = [
  {
    name: "Social Growth",
    price: "€390 / lună",
    desc: "Pentru prezență video constantă.",
    features: [
      "12 clipuri video scurte lunar, 3 pe săptămână",
      "12 postări grafice și carusel",
      "Publicare TikTok, Reels, Shorts și FB",
      "Subtitrări dinamice și scenarii incluse",
    ],
  },
  {
    name: "Daily Impact",
    price: "€690 / lună",
    desc: "1 clip video în fiecare zi.",
    features: [
      "30 de clipuri video lunar, 1 în fiecare zi",
      "30 de postări grafice adaptate",
      "Demonstrații utilaje și produse în acțiune",
      "Voiceover sintetic de înaltă fidelitate",
      "Consultanță săptămânală de conținut",
    ],
    recommended: true,
  },
  {
    name: "Dominance 3X",
    price: "€1.500 / lună",
    desc: "Volum maxim pentru dominare feed.",
    features: [
      "90 de clipuri video lunar, 3 în fiecare zi",
      "Campanii A/B testing avansate",
      "Voiceover multilingv la cerere",
      "Suport dedicat prioritar 24/7",
    ],
  },
];

export function getPackage(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}
