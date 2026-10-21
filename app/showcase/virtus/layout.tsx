import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Virtus: showcase vitalitate și antrenament",
  description: "Demonstrație Reverb de pagină manifest despre corp, disciplină și standarde ridicate împreună.",
  path: "/showcase/virtus",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
