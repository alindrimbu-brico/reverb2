import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Inteligența emoțională: recunoașterea și gestionarea emoțiilor",
  description: "Articol demonstrativ despre inteligența emoțională: recunoașterea emoțiilor în timp real, gestionarea lor și direcționarea energiei spre scopuri profunde.",
  path: "/showcase/spiritual-blog/emotional-intelligence",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
