import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Relațiile: plăcere, vulnerabilitate și pasiune",
  description: "Articol demonstrativ despre straturile unei relații: ușurință, sprijin, stabilitate și pasiune.",
  path: "/showcase/spiritual-blog/relationships",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
