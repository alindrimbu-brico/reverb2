import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Florarte: floral studio showcase",
  description: "Reverb demo for a B2C floral studio: sage and rose pastel palette, textiles and a mature digital presence.",
  path: "/en/showcase/florarte",
  languages: { ro: "/showcase/florarte", en: "/en/showcase/florarte", "x-default": "/showcase/florarte" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
