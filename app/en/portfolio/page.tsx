import type { Metadata } from "next";
import PortfolioIndex from "@/components/PortfolioIndex";
import { liveProjectsEn } from "@/lib/liveProjects";

export const metadata: Metadata = {
  alternates: { canonical: "/en/portfolio", languages: { ro: "/portofoliu", en: "/en/portfolio", "x-default": "/portofoliu" } },
  title: "Portfolio",
  description:
    "The Reverb Digital portfolio: online stores, websites and applications we manage, and projects in progress, each on its own address.",
};

export default function PortfolioPage() {
  return <PortfolioIndex lang="en" projects={liveProjectsEn} />;
}
