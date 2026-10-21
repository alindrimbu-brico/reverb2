import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "The Anchor: showcase pagină manifest",
  description: "Demonstrație Reverb de pagină manifest despre loialitate, forță și prezență în mijlocul haosului.",
  path: "/showcase/the-anchor",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
