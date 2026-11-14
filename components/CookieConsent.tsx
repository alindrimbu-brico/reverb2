// Nota de cookie-uri a fost scoasă (Alin, 14 nov 2026: „Scoate nota”). Componenta rămâne, goală, fiindcă e montată în
// app/layout.tsx. Paginile agenției nu pun cookie-uri de publicitate și nu au niciun program de măsurare
// (verificat 13–14 nov 2026: niciun Set-Cookie pe /, /en, /pachete; niciun pachet de măsurare în package.json).
// Dacă adaugi vreodată măsurare (Vercel Analytics, Google, Meta…), aici se pune o CERERE DE ACORD, cu cheia de stocare
// `reverb_cookie_consent_v2` (cheia veche `reverb_cookie_consent` a ținut răspunsuri date pe altă descriere).
// `scripts/check-seo.mjs` pică dacă apare un pachet de măsurare în package.json.

export default function CookieConsent() {
  return null;
}
