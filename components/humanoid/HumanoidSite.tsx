"use client";

// Pagina principală a raportului. Limba, arborele motor, diafragma și șublerul vin din cadrul comun
// (components/humanoid/HumanoidFrame.tsx, pus de app/humanoid-reality-2026/layout.tsx).
// Între secțiuni stă câte o bielă-manivelă legată de același arbore.

import HeroSection from "./HeroSection";
import EconomicImpact from "./EconomicImpact";
import MarketLeaders from "./MarketLeaders";
import BrainBehind from "./BrainBehind";
import SurvivalGuide from "./SurvivalGuide";
import FooterCTA from "./FooterCTA";
import AudioEngine from "./AudioEngine";
import BackToTop from "./BackToTop";
import CrankSlider from "@/components/mech/CrankSlider";

export default function HumanoidSite() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CrankSlider label="01" id="crank" />
      <EconomicImpact />
      <CrankSlider label="02" />
      <MarketLeaders />
      <CrankSlider label="03" />
      <BrainBehind />
      <CrankSlider label="04" />
      <SurvivalGuide />
      <CrankSlider label="05" />
      <FooterCTA />
      <AudioEngine />
      <BackToTop />
    </div>
  );
}
