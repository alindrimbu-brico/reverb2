import { RO_EN_PAIRS, RO_ONLY, isMockupPath } from "@/lib/routes";

/**
 * Unde are voie motorul de traducere să lucreze:
 *  - "full": pagina românească întreagă (paginile agenției, culese de scripts/i18n_extrage.py);
 *  - "chrome": doar bara, subsolul și banda de cookie-uri (blog, legal, Humanoid…: corpul rămâne în română);
 *  - "off": nimic (paginile /en, machetele cu limbile lor, Studio).
 * Aceeași listă e în scriptul din HTML (lib/i18n/inline.ts) și în scripts/i18n_extrage.py: se schimbă împreună.
 */
export type Scope = "full" | "chrome" | "off";

export const FULL_PATHS = ["/", "/servicii", "/pachete", "/portofoliu", "/despre", "/contact", "/magazine-online", "/showcase"];

export const clean = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

export const isEnPath = (pathname: string) => /^\/en(\/|$)/.test(pathname);

export function scopeFor(pathname: string): Scope {
  const p = clean(pathname);
  if (/^\/(en|es|pt|ru|zh)(\/|$)/.test(p)) return "off";
  if (/^\/studio(\/|$)/.test(p)) return "off";
  if (p.startsWith("/showcase/") || isMockupPath(p)) return "off";
  return FULL_PATHS.includes(p) ? "full" : "chrome";
}

// ── Perechile română ↔ engleză: o singură sursă (lib/routes.ts) plus portalul, care nu e în sitemap ──

const PAIRS: [string, string][] = [...RO_EN_PAIRS, ["/portal", "/en/portal"]];

/** Perechile exacte, pentru saltul automat spre engleză din scriptul din HTML. */
export const EXACT_EN: Record<string, string> = Object.fromEntries(PAIRS);

/** Adresa englezească a unei pagini românești (subpaginile urmează prefixul; fără pereche → prima pagină în engleză). */
export function toEn(pathname: string): string {
  const p = clean(pathname);
  if (isEnPath(p)) return p;
  const exact = PAIRS.find(([ro]) => ro === p);
  if (exact) return exact[1];
  const prefix = PAIRS.filter(([ro]) => ro !== "/").sort((a, b) => b[0].length - a[0].length).find(([ro]) => p.startsWith(ro + "/"));
  if (prefix) return prefix[1] + p.slice(prefix[0].length);
  if (RO_ONLY.some((r) => p === r || p.startsWith(r + "/"))) return "/en";
  return "/en" + (p === "/" ? "" : p);
}

/** Adresa românească a unei pagini englezești. */
export function toRo(pathname: string): string {
  const p = clean(pathname);
  if (!isEnPath(p)) return p;
  const exact = PAIRS.find(([, en]) => en === p);
  if (exact) return exact[0];
  const prefix = PAIRS.filter(([, en]) => en !== "/en").sort((a, b) => b[1].length - a[1].length).find(([, en]) => p.startsWith(en + "/"));
  if (prefix) return prefix[0] + p.slice(prefix[1].length);
  return p.replace(/^\/en/, "") || "/";
}

/** true = pagina românească are o pereche englezească reală (nu doar prima pagină ca rezervă). */
export function hasEnPair(pathname: string): boolean {
  const p = clean(pathname);
  return PAIRS.some(([ro]) => ro === p || (ro !== "/" && p.startsWith(ro + "/")));
}
