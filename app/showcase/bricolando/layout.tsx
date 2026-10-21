import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Bricolando: showcase magazin online de bricolaj",
  description: "Demonstrație Reverb pentru un magazin online de scule și bricolaj din Focșani: flux B2B cu discount automat, livrare națională și catalog structurat.",
  path: "/showcase/bricolando",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
