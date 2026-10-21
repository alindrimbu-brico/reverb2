import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Reverb Hybrid: showcase marketing digital uman și AI",
  description: "Demonstrație Reverb de agenție hibridă: marketing digital uman completat de AI, cu un exemplu local din Focșani.",
  path: "/showcase/reverb-hybrid",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
