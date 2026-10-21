import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Client Space",
  description: "Sign in to the Reverb client space.",
  path: "/en/portal",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
