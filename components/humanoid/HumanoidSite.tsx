"use client";

import { LanguageProvider } from "./LanguageContext";
import HeroSection from "./HeroSection";
import EconomicImpact from "./EconomicImpact";
import MarketLeaders from "./MarketLeaders";
import BrainBehind from "./BrainBehind";
import SurvivalGuide from "./SurvivalGuide";
import FooterCTA from "./FooterCTA";
import AudioEngine from "./AudioEngine";
import HumanoidScrollProgress from "./HumanoidScrollProgress";
import BackToTop from "./BackToTop";

export default function HumanoidSite() {
  return (
    <LanguageProvider>
      <div className="bg-[#080810] text-white min-h-screen">
        <HumanoidScrollProgress />
        <HeroSection />
        <EconomicImpact />
        <MarketLeaders />
        <BrainBehind />
        <SurvivalGuide />
        <FooterCTA />
        <AudioEngine />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}
