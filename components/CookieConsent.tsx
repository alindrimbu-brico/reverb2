// Nota de cookie-uri a fost scoasă (Alin, 14 nov 2026: „Scoate nota”). Componenta e montată în app/layout.tsx și
// ține acum singura măsurare a site-ului, ca regula de mai jos să stea lângă cod.
//
// Măsurarea (Alin, 18 nov 2026: „da” la Umami): Umami Cloud, fără cookie-uri și fără stocare în browser, fără date
// personale, deci fără cerere de acord. Pornește doar când există variabila NEXT_PUBLIC_UMAMI_WEBSITE_ID (Vercel,
// Production) și numără doar pe reverb.ro (`data-domains`), nu pe copiile *.vercel.app și nici local.
// Dacă adaugi vreodată o măsurare CU cookie-uri sau un pixel (Vercel Analytics, Google, Meta…), aici se pune o CERERE
// DE ACORD, cu cheia de stocare `reverb_cookie_consent_v2` (cheia veche `reverb_cookie_consent` a ținut răspunsuri date
// pe altă descriere). `scripts/check-seo.mjs` pică dacă apare un pachet de măsurare în package.json.
import Script from "next/script";

const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export default function CookieConsent() {
  if (!UMAMI_ID) return null;
  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={UMAMI_ID}
      data-domains="reverb.ro,www.reverb.ro"
      strategy="afterInteractive"
    />
  );
}
