// Selectorul de limbă (13 nov 2026, cererea lui Alin: „unul la fel” ca aurencomputers.com).
// Planul și deciziile: docs/designs/selector_limba_2026-11-13/. Cum se întreține: AI_SYNC.md, „Selectorul de limbă”.
//
// Româna e sursa, engleza e scrisă de mână pe /en. Celelalte limbi sunt dicționare (public/i18n/<cod>.json) aplicate în
// browser peste pagina românească. O limbă apare în selector doar dacă dicționarul ei există (lib/i18n/generated.ts).
// Scoaterea unei limbi = ștergerea rândului ei de aici.

export type LocaleInfo = { code: string; name: string };

/** Limbile oficiale ale UE, cu numele lor native, în ordinea din panou. */
export const LOCALES: LocaleInfo[] = [
  { code: "ro", name: "Română" },
  { code: "en", name: "English" },
  { code: "bg", name: "Български" },
  { code: "cs", name: "Čeština" },
  { code: "da", name: "Dansk" },
  { code: "de", name: "Deutsch" },
  { code: "el", name: "Ελληνικά" },
  { code: "es", name: "Español" },
  { code: "et", name: "Eesti" },
  { code: "fi", name: "Suomi" },
  { code: "fr", name: "Français" },
  { code: "ga", name: "Gaeilge" },
  { code: "hr", name: "Hrvatski" },
  { code: "hu", name: "Magyar" },
  { code: "it", name: "Italiano" },
  { code: "lt", name: "Lietuvių" },
  { code: "lv", name: "Latviešu" },
  { code: "mt", name: "Malti" },
  { code: "nl", name: "Nederlands" },
  { code: "pl", name: "Polski" },
  { code: "pt", name: "Português" },
  { code: "sk", name: "Slovenčina" },
  { code: "sl", name: "Slovenščina" },
  { code: "sv", name: "Svenska" },
];

/**
 * Țara vizitatorului → limba propusă la prima vizită. Țările care lipsesc primesc engleza; RO și MD nu primesc nimic
 * (pagina rămâne în română). Regulile întregi: lib/i18n/inline.ts.
 */
export const COUNTRY_LANG: Record<string, string> = {
  RO: "ro", MD: "ro",
  BG: "bg", CZ: "cs", DK: "da", DE: "de", AT: "de", CH: "de", LI: "de", GR: "el", CY: "el",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es",
  EE: "et", FI: "fi", FR: "fr", LU: "fr", MC: "fr", HR: "hr", HU: "hu", IT: "it", SM: "it",
  LT: "lt", LV: "lv", MT: "mt", NL: "nl", BE: "nl", PL: "pl", PT: "pt", BR: "pt",
  SK: "sk", SI: "sl", SE: "sv",
  // Irlanda primește engleza (irlandeza se alege din panou).
};

/** Cheia din localStorage cu limba aleasă din panou. */
export const STORAGE_KEY = "reverb_locale";

/**
 * Roboții nu primesc țara (antetul Server-Timing din middleware.ts), deci nici traducere sau salt automat: Google trebuie
 * să vadă româna la adresa românească. Lista cuprinde și roboții fără „bot” în nume.
 */
export const BOT_UA =
  /bot|crawl|spider|slurp|facebookexternalhit|google-inspectiontool|googleother|lighthouse|pagespeed|chatgpt-user|perplexity-user|claude-user|claude-web|headlesschrome|preview|curl|wget|python|scrapy|httpclient|okhttp|axios|node-fetch/i;
