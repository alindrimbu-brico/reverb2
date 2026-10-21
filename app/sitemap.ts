import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { publicRoutes } from "@/lib/routes";
import { posts } from "@/lib/posts";

/**
 * Sitemapul conține toate paginile indexabile (registrul din lib/routes.ts +
 * articolele din lib/posts.ts). Paginile noindex (portal, checkout, guru) și
 * redirecționările nu intră. lastModified se pune doar unde avem o dată reală
 * (articolele); Google ignoră priority și changeFrequency.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (p: string) => `${SITE_URL}${p === "/" ? "" : p}`;

  const pages: MetadataRoute.Sitemap = publicRoutes().map(({ path, languages }) => ({
    url: abs(path),
    ...(languages
      ? {
          alternates: {
            languages: Object.fromEntries(
              Object.entries(languages).map(([lang, p]) => [lang, abs(p)])
            ),
          },
        }
      : {}),
  }));

  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: abs(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
  }));

  return [...pages, ...articles];
}
