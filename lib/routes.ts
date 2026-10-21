/**
 * Registrul paginilor publice ale site-ului. Este sursa pentru sitemap.ts și
 * pentru scripts/check-seo.mjs (care verifică, după build, că fiecare pagină
 * din app/ este fie aici, fie în NOINDEX, fie o redirecționare).
 *
 * Căile sunt relative; forma absolută se face cu SITE_URL din lib/seo.ts.
 */

/** Pagini de marketing cu variantă RO și EN: [RO, EN]. */
export const RO_EN_PAIRS: [string, string][] = [
  ["/", "/en"],
  ["/despre", "/en/about"],
  ["/servicii", "/en/services"],
  ["/pachete", "/en/packages"],
  ["/magazine-online", "/en/online-store"],
  ["/portofoliu", "/en/portfolio"],
  ["/blog", "/en/blog"],
  ["/contact", "/en/contact"],
  ["/legal", "/en/legal"],
  ["/ai-humans", "/en/ai-humans"],
  ["/nevronix", "/en/nevronix"],
  ["/templates", "/en/templates"],
  ["/xiaolong", "/en/xiaolong"],
  ["/showcase", "/en/showcase"],
];

/** Pagini doar în română (fără echivalent EN). */
export const RO_ONLY: string[] = [
  "/templates/industrii",
  "/clarity-architecture",
  "/convertor",
  "/humanoid-reality-2026",
  "/humanoid-reality-2026/ai-leaders",
  "/humanoid-reality-2026/democratization",
  "/humanoid-reality-2026/mass-production",
  "/humanoid-reality-2026/peak-performance",
];

/** Showcase-uri care există și în RO (/showcase/x), și în EN (/en/showcase/x). */
export const SHOWCASE_RO_EN: string[] = [
  "ai-future",
  "architecture",
  "artisan-cafe",
  "auto-service",
  "crossfit",
  "cyber-sec",
  "event-music",
  "fashion-boutique",
  "fine-dining",
  "fintech",
  "florarte",
  "legal-firm",
  "lens-portfolio",
  "logistics-hub",
  "medical-center",
  "real-estate",
  "surya",
];

/** Showcase-uri doar în română. */
export const SHOWCASE_RO_ONLY: string[] = [
  "bricolando",
  "canapuff",
  "cuprum-medical",
  "fish-io",
  "inhale-exhale",
  "jim-curtis",
  "kalki",
  "metanoia",
  "origini",
  "reverb-hybrid",
  "soare",
  "spiritual-blog",
  "spiritual-blog/emotional-intelligence",
  "spiritual-blog/happiness-science",
  "spiritual-blog/hipnagogic-state",
  "spiritual-blog/mel-gibson",
  "spiritual-blog/mount-athos",
  "spiritual-blog/night-genius",
  "spiritual-blog/night-wisdom",
  "spiritual-blog/relationships",
  "the-anchor",
  "urban-culture",
  "vespa-urban",
  "virtus",
];

/** NeuroLumina (/showcase/neuro-recovery): limbile și articolele. */
export const NEURO_LOCALES = ["ro", "en", "es", "pt", "ru", "zh"] as const;
export type NeuroLocale = (typeof NEURO_LOCALES)[number];

/** Articole disponibile în toate cele 6 limbi ("" = pagina de start). */
export const NEURO_SLUGS_ALL: string[] = [
  "",
  "roots",
  "collective-trauma-hpa",
  "epigenetics-gabor-mate",
  "pleasure",
  "happiness",
  "joy-soul",
  "ecstasy",
  "human-connection",
  "medical-shield",
  "neuroplasticity",
  "brain-balance",
  "substances/alcohol",
  "substances/cannabis",
  "substances/stimulants",
];

/** Articole care există doar în RO și EN. */
export const NEURO_SLUGS_RO_EN: string[] = ["homeostasis", "joy", "recovery"];

export function neuroPath(locale: NeuroLocale, slug: string): string {
  const base = locale === "ro" ? "/showcase/neuro-recovery" : `/${locale}/showcase/neuro-recovery`;
  return slug ? `${base}/${slug}` : base;
}

/** Pagini care rămân accesibile, dar nu se indexează. */
export const NOINDEX: string[] = ["/portal", "/en/portal", "/checkout", "/en/checkout", "/guru"];

/** Pagini care doar redirecționează (nu au conținut propriu). */
export const REDIRECT_PAGES: string[] = ["/showcase/xiaolong", "/en/showcase/xiaolong"];

/** Toate paginile indexabile, cu alternativele de limbă (hreflang -> cale). */
export function publicRoutes(): { path: string; languages?: Record<string, string> }[] {
  const out: { path: string; languages?: Record<string, string> }[] = [];

  for (const [ro, en] of RO_EN_PAIRS) {
    const languages = { ro, en, "x-default": ro };
    out.push({ path: ro, languages });
    out.push({ path: en, languages });
  }
  for (const p of RO_ONLY) out.push({ path: p });

  for (const s of SHOWCASE_RO_EN) {
    const ro = `/showcase/${s}`;
    const en = `/en/showcase/${s}`;
    const languages = { ro, en, "x-default": ro };
    out.push({ path: ro, languages });
    out.push({ path: en, languages });
  }
  for (const s of SHOWCASE_RO_ONLY) out.push({ path: `/showcase/${s}` });

  for (const slug of NEURO_SLUGS_ALL) {
    const languages: Record<string, string> = {};
    for (const l of NEURO_LOCALES) languages[l] = neuroPath(l, slug);
    languages["x-default"] = neuroPath("ro", slug);
    for (const l of NEURO_LOCALES) out.push({ path: neuroPath(l, slug), languages });
  }
  for (const slug of NEURO_SLUGS_RO_EN) {
    const ro = neuroPath("ro", slug);
    const en = neuroPath("en", slug);
    const languages = { ro, en, "x-default": ro };
    out.push({ path: ro, languages });
    out.push({ path: en, languages });
  }

  return out;
}
