import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GURU Store — Idei Premium & Strategii Scalabile",
  description:
    "Hint-uri educaționale și strategii testate pentru business: arhitectura scalării, psihologia conversiei, viralitate și retenție. Plătești pentru claritate, primești revelație.",
  alternates: {
    canonical: "https://reverb.ro/guru",
    languages: { en: "https://reverb.ro/en/guru" },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://reverb.ro/guru",
    siteName: "Reverb.ro",
    title: "GURU Store — Idei Premium & Strategii Scalabile | Reverb",
    description:
      "Descoperă hint-uri educaționale și strategii scalabile care îți schimbă perspectiva. Arhitectura scalării, conversia, viralitate, retenție.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GURU Store — Idei Premium & Strategii Scalabile",
    description:
      "Descoperă hint-uri educaționale și strategii scalabile care îți schimbă perspectiva.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GURU Store — Idei Premium",
  description: "Magazin de idei premium și strategii scalabile pentru antreprenori.",
  url: "https://reverb.ro/guru",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Arhitectura Scalării",
        description:
          "Hint-ul suprem despre cum să structurezi operațiunile logistice ale unui eCommerce fără a distruge marginile de profit.",
        offers: {
          "@type": "Offer",
          price: "190",
          priceCurrency: "RON",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Reverb.ro" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Lumina Conversiei",
        description:
          "O perspectivă rară asupra psihologiei clientului care renunță la coșul de cumpărături. Crește rata de conversie cu 40%.",
        offers: {
          "@type": "Offer",
          price: "250",
          priceCurrency: "RON",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Reverb.ro" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Algoritmul Viralității",
        description:
          "Cum să gândești o reclamă asumată pentru publicul de nișă, testat pe zeci de mii de views.",
        offers: {
          "@type": "Offer",
          price: "150",
          priceCurrency: "RON",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Reverb.ro" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Retenția Guru",
        description:
          "Nu vinde o dată. Vinde de 10 ori. O strategie în 5 pași de email marketing implementată de experți.",
        offers: {
          "@type": "Offer",
          price: "320",
          priceCurrency: "RON",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Reverb.ro" },
        },
      },
    },
  ],
};

export default function GuruLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
