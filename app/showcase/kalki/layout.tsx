import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Kalki: showcase editorial de modă",
  description: "Demonstrație Reverb de site editorial de modă: tipografie serifată, imagini mari și estetică de revistă.",
  path: "/showcase/kalki",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
