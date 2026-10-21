import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Convertor de unități de măsură",
  description: "Convertor online pentru lungime, greutate, volum, temperatură și alte unități. Un instrument gratuit, rapid, fără reclame, de la Reverb.",
  path: "/convertor",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
