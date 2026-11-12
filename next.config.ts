import type { NextConfig } from "next";
import { GITHUB_SHOWCASES } from "./lib/githubShowcases";

const nextConfig: NextConfig = {
  // Paginile statice din GitHub au nevoie de slash final (resursele relative);
  // redirect-urile de slash sunt făcute în middleware.ts.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Repo-ul `flooare` are acum domeniul propriu (www.flooare.ro), deci github.io
  // redirecționează și proxy-ul vechi nu mai merge.
  redirects: async () => [
    // Machetele cu nume de mărci reale au fost scoase (11 nov 2026); adresele vechi duc la galerie.
    { source: "/showcase/canapuff", destination: "/showcase", permanent: true },
    { source: "/showcase/jim-curtis", destination: "/showcase", permanent: true },
    // Pagini vechi scoase pe 12 nov 2026 (prețuri și servicii care nu mai există, un formular de card fără plată în spate).
    { source: "/templates", destination: "/showcase", permanent: true },
    { source: "/en/templates", destination: "/en/showcase", permanent: true },
    { source: "/templates/:path*", destination: "/showcase", permanent: true },
    { source: "/macheta", destination: "/", permanent: true },
    { source: "/checkout", destination: "/pachete", permanent: true },
    { source: "/en/checkout", destination: "/en/packages", permanent: true },
    { source: "/ai-humans", destination: "/servicii", permanent: true },
    { source: "/en/ai-humans", destination: "/en/services", permanent: true },
    { source: "/flooare-portal", destination: "https://www.flooare.ro/", permanent: true },
    { source: "/flooare-portal/:path*", destination: "https://www.flooare.ro/:path*", permanent: true },
  ],
  rewrites: async () => ({
    // oglinda.eu (site-ul AURA din public/aura) e servit din middleware.ts, care acoperă și www.
    // O a doua regulă aici dubla prefixul (/aura/aura/...) și paginile ieșeau 404.
    beforeFiles: [],
    // Slash-ul final se păstrează explicit: fără el GitHub răspunde cu 301 spre github.io.
    afterFiles: Object.entries(GITHUB_SHOWCASES).flatMap(([path, repo]) => {
      const origin = `https://alindrimbu-brico.github.io/${repo}`;
      return [
        { source: `/${path}/`, destination: `${origin}/` },
        { source: `/${path}/:rest+/`, destination: `${origin}/:rest+/` },
        { source: `/${path}/:rest+`, destination: `${origin}/:rest+` },
      ];
    }),
  }),
};

export default nextConfig;
