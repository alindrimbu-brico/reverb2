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
    { source: "/flooare-portal", destination: "https://www.flooare.ro/", permanent: true },
    { source: "/flooare-portal/:path*", destination: "https://www.flooare.ro/:path*", permanent: true },
  ],
  rewrites: async () => ({
    beforeFiles: [
      {
        source: '/:path*',
        destination: '/aura/:path*',
        has: [
          {
            type: 'host',
            value: 'oglinda.eu',
          },
        ],
      },
    ],
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
