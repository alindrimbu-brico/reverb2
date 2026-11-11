import type { Metadata } from "next";
import PortfolioIndex from "@/components/PortfolioIndex";
import { liveProjectsEn } from "@/lib/liveProjects";

export const metadata: Metadata = {
  alternates: { canonical: "/en/portfolio", languages: { ro: "/portofoliu", en: "/en/portfolio", "x-default": "/portofoliu" } },
  title: "Portfolio",
  description:
    "The Reverb portfolio: the websites, online stores and applications we built, each on its own address, with the road travelled and what it does today.",
};

export default function PortfolioPage() {
  return <PortfolioIndex lang="en" projects={liveProjectsEn} />;
}
