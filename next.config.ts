import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  }),
};

export default nextConfig;
