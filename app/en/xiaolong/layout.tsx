import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Xiaolong Packaging: B2B showcase for a paperboard manufacturer",
  description: "Reverb demo for an Asian paperboard and packaging manufacturer: industrial catalogue, dynamic markup pricing and a B2B structure.",
  path: "/en/xiaolong",
  languages: { ro: "/xiaolong", en: "/en/xiaolong", "x-default": "/xiaolong" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
