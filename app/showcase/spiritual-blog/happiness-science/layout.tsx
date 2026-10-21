import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Știința fericirii: piramida fericirii adevărate",
  description: "Articol demonstrativ despre știința fericirii: de la senzații plăcute la flow și la sens.",
  path: "/showcase/spiritual-blog/happiness-science",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
