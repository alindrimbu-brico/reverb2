import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Showcase casă de avocatură cu analiză AI a contractelor",
  description: "Demonstrație Reverb pentru o firmă de avocatură: titluri masive, autoritate vizuală și un analizor de contracte bazat pe Nevronix.",
  path: "/showcase/legal-firm",
  languages: { ro: "/showcase/legal-firm", en: "/en/showcase/legal-firm", "x-default": "/showcase/legal-firm" },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
