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
