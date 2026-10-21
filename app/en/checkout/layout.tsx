import { pageMeta } from "@/lib/seo";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical) stă în acest layout.
export const metadata = pageMeta({
  title: "Checkout",
  description: "Order checkout for Reverb clients.",
  path: "/en/checkout",
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
