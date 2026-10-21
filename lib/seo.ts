import type { Metadata } from "next";

/**
 * Un singur loc pentru adresa publică a site-ului. Codul folosește forma fără
 * www; redirecția www -> apex se face în Vercel (Domains), nu aici.
 */
export const SITE_URL = "https://reverb.ro";
export const SITE_NAME = "Reverb";
export const TITLE_TEMPLATE = "%s | Reverb";

/**
 * Titlu pentru un layout de secțiune (care are pagini sub el). Un layout cu
 * titlul ca text simplu ar anula șablonul „| Reverb” pentru paginile de sub el;
 * forma { default, template } îl păstrează.
 */
export function sectionTitle(name: string): Metadata["title"] {
  return { default: name, template: TITLE_TEMPLATE };
}

type PageMetaInput = {
  title?: Metadata["title"];
  description?: string;
  /** Calea canonică a paginii, relativă la metadataBase (ex. "/despre"). */
  path: string;
  /** hreflang -> cale (include și pagina însăși). */
  languages?: Record<string, string>;
  /** Pagini care nu trebuie indexate (portal, checkout, guru). */
  noindex?: boolean;
};

/**
 * Construiește metadata pentru o pagină: canonical propriu, alternative de
 * limbă și, la nevoie, noindex. Se folosește în page.tsx (server) sau în
 * layout.tsx-ul unei pagini "use client".
 */
export function pageMeta({ title, description, path, languages, noindex }: PageMetaInput): Metadata {
  const meta: Metadata = {
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
  };
  if (title !== undefined) meta.title = title;
  if (description) meta.description = description;
  if (noindex) meta.robots = { index: false, follow: false };
  return meta;
}

/** Perechea RO <-> EN a unei pagini de marketing (RO este varianta implicită). */
export function roEn(ro: string, en: string): Record<string, string> {
  return { ro, en, "x-default": ro };
}
