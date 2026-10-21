import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Pasiunea lui Iisus Hristos: arhitectura suferinței divine",
  description: "Articol demonstrativ despre filmul lui Mel Gibson și suferința ca instrument de transformare spirituală.",
  path: "/showcase/spiritual-blog/mel-gibson",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
