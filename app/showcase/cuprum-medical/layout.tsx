import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Cuprum Medical: showcase clinică medicală",
  description: "Prezentare demonstrativă pentru o clinică medicală: estetică de cupru patinat, programări clare și informație medicală ușor de parcurs.",
  path: "/showcase/cuprum-medical",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
