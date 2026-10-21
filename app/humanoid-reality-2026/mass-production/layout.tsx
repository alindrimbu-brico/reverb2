import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Producția de masă a roboților umanoizi în 2026",
  description: "Fabricile, lanțurile de aprovizionare și volumele care transformă roboții umanoizi dintr-un prototip într-un produs industrial.",
  path: "/humanoid-reality-2026/mass-production",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
