import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Florarte: showcase atelier floral",
  description: "Demonstrație Reverb pentru un atelier floral B2C: paletă pastel sage și roz, textile și o prezență digitală matură.",
  path: "/showcase/florarte",
  languages: { ro: "/showcase/florarte", en: "/en/showcase/florarte", "x-default": "/showcase/florarte" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
