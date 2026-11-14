import type { Metadata } from "next";
import PortfolioIndex from "@/components/PortfolioIndex";
import { liveProjectsRo } from "@/lib/liveProjects";

export const metadata: Metadata = {
  alternates: { canonical: "/portofoliu", languages: { ro: "/portofoliu", en: "/en/portfolio", "x-default": "/portofoliu" } },
  title: "Portofoliu",
  description:
    "Portofoliul Reverb Digital: magazine online, site-uri și aplicații aflate în administrare și proiecte în desfășurare, fiecare pe adresa ei.",
};

export default function PortofoliuPage() {
  return <PortfolioIndex lang="ro" projects={liveProjectsRo} />;
}
