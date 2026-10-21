import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Xiaolong Packaging: showcase B2B pentru un producător de carton",
  description: "Prezentare demonstrativă Reverb pentru un producător asiatic de carton și ambalaje: catalog industrial, prețuri cu adaos dinamic și structură B2B.",
  path: "/xiaolong",
  languages: { ro: "/xiaolong", en: "/en/xiaolong", "x-default": "/xiaolong" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
