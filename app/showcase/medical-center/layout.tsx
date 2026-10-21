import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Showcase centru medical cu triaj AI",
  description: "Demonstrație Reverb pentru un centru medical: interfață curată, starea sălilor în timp real și asistent AI care evaluează urgența.",
  path: "/showcase/medical-center",
  languages: { ro: "/showcase/medical-center", en: "/en/showcase/medical-center", "x-default": "/showcase/medical-center" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
