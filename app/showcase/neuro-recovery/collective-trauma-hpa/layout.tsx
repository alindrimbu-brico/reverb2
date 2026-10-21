import { neuroMeta } from "@/app/showcase/neuro-recovery/components/neuroMeta";

// Pagina este "use client", deci metadata ei (titlu, descriere, canonical, hreflang) stă în acest layout.
export const metadata = neuroMeta("ro", "collective-trauma-hpa");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
