import type { Metadata } from "next";
import PortfolioIndex from "@/components/PortfolioIndex";
import { liveProjectsRo } from "@/lib/liveProjects";

export const metadata: Metadata = {
  alternates: { canonical: "/portofoliu", languages: { ro: "/portofoliu", en: "/en/portfolio", "x-default": "/portofoliu" } },
  title: "Portofoliu",
  description:
    "Portofoliul Reverb: site-urile, magazinele online și aplicațiile pe care le-am realizat, fiecare pe adresa ei, cu drumul parcurs și ce face azi.",
};

export default function PortofoliuPage() {
  return <PortfolioIndex lang="ro" projects={liveProjectsRo} />;
}
