import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Guru: idei de business la bucată",
  description: "Pagină demonstrativă: idei de business vândute la bucată, cu coș de cumpărături.",
  path: "/guru",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
