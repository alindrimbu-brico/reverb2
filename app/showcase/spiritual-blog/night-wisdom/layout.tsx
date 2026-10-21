import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Înțelepciunea nopții în Tora, Coran, Vede și Biblie",
  description: "Articol demonstrativ despre rugăciunea și practicile nocturne din marile tradiții spirituale.",
  path: "/showcase/spiritual-blog/night-wisdom",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
