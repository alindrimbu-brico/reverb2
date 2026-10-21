import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Canapuff: showcase magazin online CBD",
  description: "Demonstrație de magazin online pentru produse CBD: catalog de vape-uri, flori și lichide, într-un design de laborator premium.",
  path: "/showcase/canapuff",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
