import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Jim Curtis: showcase pagină de coach transformațional",
  description: "Prezentare demonstrativă pentru un coach transformațional: poveste, metodă și structură de conversie pentru servicii premium.",
  path: "/showcase/jim-curtis",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
