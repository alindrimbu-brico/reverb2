import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Surya Group: showcase brutalist B2B",
  description: "Demonstrație Reverb de site brutalist pentru un grup B2B: tipografie imensă, delimitări tăioase și arhitectură avansată.",
  path: "/showcase/surya",
  languages: { ro: "/showcase/surya", en: "/en/showcase/surya", "x-default": "/showcase/surya" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
