import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Metanoia: showcase strategie de marketing pe o pagină",
  description: "Demonstrație Reverb de strategie pe o singură pagină: decizii binare, 90 % substanță, 10 % execuție.",
  path: "/showcase/metanoia",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
