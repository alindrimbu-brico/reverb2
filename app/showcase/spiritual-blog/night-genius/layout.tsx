import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Geniul nopții: cronobiologie și ritm circadian",
  description: "Articol demonstrativ despre cronotipuri, ritm circadian și creativitatea tipurilor de seară.",
  path: "/showcase/spiritual-blog/night-genius",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
