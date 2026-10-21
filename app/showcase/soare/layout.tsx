import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Soare: showcase energie solară",
  description: "Demonstrație Reverb pentru un furnizor de energie solară: pilonii energiei digitale, claritate și un design luminos.",
  path: "/showcase/soare",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
