import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Starea hipnagogică: neurobiologie spirituală",
  description: "Articol demonstrativ despre starea hipnagogică: accesul la soluții din subconștient și conexiuni neobișnuite între idei.",
  path: "/showcase/spiritual-blog/hipnagogic-state",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
