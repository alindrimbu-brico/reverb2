import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Finalizare comandă",
  description: "Finalizarea comenzii pentru clienții Reverb.",
  path: "/checkout",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
