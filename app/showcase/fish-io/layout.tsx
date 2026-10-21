import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Abyss.io: showcase joc în browser cu clasament global",
  description: "Demonstrație Reverb de joc în browser: un prădător din adâncuri, clasament global și interfață de arcade în timp real.",
  path: "/showcase/fish-io",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
