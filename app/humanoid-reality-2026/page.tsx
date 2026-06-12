import type { Metadata } from "next";
import HeroSection from "@/components/humanoid/HeroSection";
import EconomicImpact from "@/components/humanoid/EconomicImpact";
import MarketLeaders from "@/components/humanoid/MarketLeaders";
import BrainBehind from "@/components/humanoid/BrainBehind";
import SurvivalGuide from "@/components/humanoid/SurvivalGuide";
import FooterCTA from "@/components/humanoid/FooterCTA";

export const metadata: Metadata = {
  title: "Realitatea Umanoidă 2026 — De la Science Fiction la Realitate Industrială",
  description:
    "Hardware-ul este gata. Modelele AI preiau controlul. Costul operațional a ajuns la 2$/oră. Descoperă economia de 4 Trilioane $ care redefinește industria globală în 2026.",
  openGraph: {
    title: "Realitatea Umanoidă 2026",
    description:
      "De la Science Fiction la Realitate Industrială. Piața de 750 Miliarde $, liderii pieței și ghidul de supraviețuire pentru companii.",
    type: "website",
  },
};

export default function HumanoidRealityPage() {
  return (
    <div className="bg-[#080810] text-white min-h-screen">
      <HeroSection />
      <EconomicImpact />
      <MarketLeaders />
      <BrainBehind />
      <SurvivalGuide />
      <FooterCTA />
    </div>
  );
}
