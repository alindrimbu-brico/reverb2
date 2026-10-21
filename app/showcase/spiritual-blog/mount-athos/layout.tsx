import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Muntele Athos: isihasm, Rugăciunea lui Iisus și Filocalia",
  description: "Articol demonstrativ despre tradiția isihastă de la Muntele Athos, Rugăciunea lui Iisus și Filocalia.",
  path: "/showcase/spiritual-blog/mount-athos",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
