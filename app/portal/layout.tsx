import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Spațiu client",
  description: "Conectare în spațiul de client Reverb.",
  path: "/portal",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
