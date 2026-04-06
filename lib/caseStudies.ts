export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  challenge: string;
  approach: string[];
  results: string[];
  quote?: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-relansat-structura-mesaj",
    title: "E-commerce relansat cu structură și mesaj clar",
    category: "Magazine Online",
    tags: ["WooCommerce", "Branding", "Conversie", "Copy comercial"],
    challenge:
      "Un magazin online de mobilă și decor cu trafic existent dar conversii slabe (0.4%). Mesajul era vag, categoriile confuze, pagina de produs supraîncărcată cu informații tehnice dar fără beneficii clare. Checkout-ul abandona la 68%.",
    approach: [
      "Audit complet: analytics, heatmaps, sesiuni de utilizare reală cu 5 clienți",
      "Restructurare categorii bazată pe intenție de cumpărare, nu pe tipul de produs",
      "Rescrierea întregului copy comercial — titluri, descrieri de produs, pagina Despre",
      "Redesign pagina de produs cu focus pe beneficii, imagini contextuale și recenzii vizibile",
      "Simplificare checkout: de la 6 pași la 3, eliminarea obligativității contului",
      "Setare email post-achiziție + campanie de reactivare coș abandonat",
    ],
    results: [
      "Rata de conversie: de la 0.4% la 1.8% în primele 60 de zile",
      "Abandon checkout: de la 68% la 41%",
      "Valoare medie comandă +23%",
      "Bounce rate pe pagina de produs scăzut cu 35%",
    ],
    quote: {
      text: "Reverb ne-a pus ordine în ofertă, în mesaj și în procesul de vânzare. În sfârșit, site-ul nostru spune clar ce facem și pentru cine.",
      author: "Slot testimonial client 01",
      role: "Fondator, magazin decor online",
    },
  },
  {
    slug: "brand-repozitionat-ai-funneluri",
    title: "Brand repoziționat cu suport AI și funnel-uri coerente",
    category: "Branding & Marketing",
    tags: ["Branding", "AI", "Meta Ads", "Email marketing"],
    challenge:
      "O companie de consultanță B2B cu servicii bune dar o prezentare digitală generică. Mesajele erau identice cu ale tuturor competitorilor, site-ul nu diferenția, iar campaniile de ads aduceau lead-uri de slabă calitate.",
    approach: [
      "Sesiune de strategie: identificarea diferențiatorilor reali prin interviuri cu clienți actuali",
      "Redefinire poziționare: de la 'consultanță de business' la o nișă specifică cu mesaj unic",
      "Creare ghid de brand: voice, tone, mesaje cheie, ce să zicem și ce să nu zicem niciodată",
      "Rescrierea site-ului complet cu noul mesaj — home, servicii, despre, studii de caz",
      "Campanii Meta Ads cu creativeuri aliniate la noul brand — testare 8 variante",
      "Sequence de email onboarding pentru lead-urile noi (5 emailuri, 3 săptămâni)",
    ],
    results: [
      "Cost per lead calificat scăzut cu 44%",
      "Rata de calificare lead-uri: de la 18% la 52%",
      "3 contracte noi în primele 45 de zile după relansat",
      "Rata de deschidere email sequence: 68% (față de 22% anterior)",
    ],
    quote: {
      text: "Au folosit AI inteligent, fără să piardă vocea umană a brandului. Rezultatul a fost mai clar, mai rapid și mai stabil.",
      author: "Slot testimonial client 02",
      role: "CEO, companie consultanță B2B",
    },
  },
  {
    slug: "sistem-marketing-integrat-saas",
    title: "Sistem de marketing integrat pentru un produs SaaS",
    category: "Marketing Digital",
    tags: ["SaaS", "Content", "SEO", "Automatizări", "Retenție"],
    challenge:
      "Un produs SaaS cu churn ridicat (8% lunar) și creștere organică stagnantă. Echipa internă producea conținut fără strategie, fără calendar și fără legătură cu funnel-ul de achiziție. Nu exista nicio secvență de onboarding sau retenție.",
    approach: [
      "Audit: identificarea etapelor din customer journey unde churn-ul era cel mai mare",
      "Creare strategie de content bazată pe intenție de căutare și etape de funnel",
      "Calendar editorial lunar cu 12 articole/lună + distribuție pe canale",
      "Sequence de onboarding (7 emailuri, 14 zile): activare feature-uri cheie",
      "Campanie de reactivare pentru useri inactivi: 3 emailuri + ofertă personalizată",
      "Dashboard de raportare lunar: trafic organic, activation rate, churn, MRR",
    ],
    results: [
      "Churn lunar: de la 8% la 4.2% în 90 de zile",
      "Trafic organic: +180% în 6 luni",
      "Activation rate (users care activează ≥3 features în prima săptămână): de la 31% la 67%",
      "MRR growth: +34% în primele 6 luni de parteneriat",
    ],
    quote: {
      text: "Nu au venit cu magie ieftină. Au venit cu structură, calm și execuție. Exact ce lipsea în agenția anterioară.",
      author: "Slot testimonial client 03",
      role: "Co-fondator, produs SaaS",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
