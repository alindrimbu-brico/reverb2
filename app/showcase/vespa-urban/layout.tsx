import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Veloce: showcase vehicul electric urban",
  description: "Demonstrație Reverb pentru un scuter electric urban: libertate asimetrică, amprentă subțire și manevrabilitate în trafic.",
  path: "/showcase/vespa-urban",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
