import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Surya Group: brutalist B2B showcase",
  description: "Reverb demo of a brutalist website for a B2B group: huge typography, sharp divisions and advanced architecture.",
  path: "/en/showcase/surya",
  languages: { ro: "/showcase/surya", en: "/en/showcase/surya", "x-default": "/showcase/surya" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
