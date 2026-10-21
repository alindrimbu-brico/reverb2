import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Inhale Exhale: showcase de branding minimalist",
  description: "Demonstrație de pagină de brand: maparea valorilor fundamentale și eliminarea complexității inutile de la prima vedere.",
  path: "/showcase/inhale-exhale",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
