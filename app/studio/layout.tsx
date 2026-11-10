import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverb Studio AI — Panou Producție Muzică, Video & Virale",
  description: "Panoul de comandă Reverb Studio AI pentru producție muzicală, videoclipuri și conținut viral automatizat.",
  manifest: "/studio-manifest.json",
  icons: {
    icon: [
      { url: "/icon-studio-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/icon-studio-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-studio.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
