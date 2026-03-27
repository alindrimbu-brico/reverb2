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
  monthly?: boolean;
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
    id: "prezenta-online",
    name: "Prezență Online",
    tagline: "Un website care susține vânzările, nu doar imaginea.",
    price: "€990",
    delivery: "7–14 zile",
    description:
      "Implementare rapidă, structură orientată pe conversie și integrare Google pentru firme care vor o fundație digitală corectă.",
    includes: [
      "Website 3–7 pagini, mobil-first",
      "Formular contact + WhatsApp + Maps",
      "SEO de bază + setare Google Business",
      "Structură orientată pe conversie",
      "Preț fix, fără costuri ascunse",
      "Implementare completă, nu doar design",
    ],
    ideal: "IMM-uri de servicii, construcții, clinici, consultanță care vor o prezență digitală corectă și rapidă.",
    href: "/contact",
  },
  {
    id: "clienti-locali",
    name: "Clienți Locali",
    tagline: "Un sistem care aduce cereri locale, constant.",
    price: "€1.790",
    priceExtra: "Administrare lunară: €490/lună (+ buget ads separat)",
    delivery: "Setup inițial: 30 zile",
    description:
      "SEO local + Google Ads + Meta Ads + tracking apeluri. Fără trafic inutil. Doar clienți relevanți, din zona ta.",
    includes: [
      "Landing pagină optimizat pentru conversie",
      "SEO local (structură + optimizare)",
      "Setup Google Ads + Meta Ads local",
      "Tracking apeluri & formulare",
      "Optimizare Google Business",
      "Raport lunar clar",
    ],
    ideal: "Firme locale de servicii: construcții, clinici, service auto, instalatori — oricine are nevoie de apeluri și cereri constante.",
    href: "/contact",
    highlight: true,
    badge: "Recomandat",
  },
  {
    id: "magazin-digital",
    name: "Magazin Digital",
    tagline: "Un magazin online construit pentru vânzare, nu doar pentru design.",
    price: "de la €2.490",
    delivery: "14–30 zile",
    description:
      "Setup platformă eCommerce potrivită, structură de categorii, checkout optimizat și integrare completă plăți & livrare.",
    includes: [
      "Setup platformă eCommerce potrivită proiectului",
      "Structură categorii + produse demo",
      "Checkout optimizat pentru conversie",
      "Plăți & livrare configurate",
      "Tracking esențial (vânzări, add-to-cart, checkout)",
      "Implementare completă, nu doar design",
    ],
    ideal: "Retail, producători, branduri în creștere și business-uri B2B care vor să vândă online serios.",
    href: "/magazine-online",
  },
  {
    id: "ai-creative-sprint",
    name: "AI Creative Sprint",
    tagline: "Poziționare și direcție vizuală, livrate în 7 zile.",
    price: "€790",
    delivery: "7 zile",
    description:
      "Powered by AI, ghidat de om. Concepte vizuale, moodboard, idei de campanii și direcție de conținut — rapid și aplicabil.",
    includes: [
      "Poziționare rapidă + direcție vizuală",
      "Concepte vizuale + moodboard brand",
      "10 idei campanii (ads) + unghiuri mesaj",
      "Direcție conținut social (simplu, aplicabil)",
    ],
    ideal: "Branduri care au nevoie de direcție înainte de lansare sau relansare.",
    href: "/contact",
  },
];

export const monthlyTiers: MonthlyTier[] = [
  {
    name: "Start",
    price: "€390 / lună",
    desc: "Pentru business-uri locale simple.",
    features: [
      "1 canal principal (Google sau Meta)",
      "Optimizare săptămânală",
      "Raport lunar",
      "Suport email",
    ],
  },
  {
    name: "Growth",
    price: "€590 / lună",
    desc: "Recomandat pentru cereri constante.",
    features: [
      "Google + Meta (sau SEO + Ads)",
      "Testare mesaje & landing",
      "Tracking conversii",
      "Raport lunar + plan",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    price: "€790 / lună",
    desc: "Pentru eCommerce / B2B cu volum.",
    features: [
      "2–3 canale + optimizare conversie",
      "Iterație săptămânală avansată",
      "Raportare extinsă",
      "Suport prioritar",
    ],
  },
];

export function getPackage(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}
