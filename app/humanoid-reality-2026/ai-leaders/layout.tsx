import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Liderii AI ai roboticii umanoide 2026: Figure 03 și Sanctuary Phoenix",
  description: "Analiza software-ului cognitiv care conduce roboții umanoizi în 2026: Figure 03, Sanctuary Phoenix, metrici comparative și perspective de investiție.",
  path: "/humanoid-reality-2026/ai-leaders",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
