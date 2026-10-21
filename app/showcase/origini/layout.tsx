import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Origini: showcase site de prezentare",
  description: "Demonstrație Reverb de site de prezentare construit în jurul originii, poveștii și identității vizuale a unui brand.",
  path: "/showcase/origini",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
