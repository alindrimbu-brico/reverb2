import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Democratizarea roboților umanoizi: primul model funcțional sub 20.000 $",
  description: "Cum scad prețurile roboților umanoizi în 2026 și ce înseamnă un umanoid funcțional la 16.000 $ pentru companii și locuințe.",
  path: "/humanoid-reality-2026/democratization",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
