"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./components/HeroSection";
import HomeostasisGraph from "./components/HomeostasisGraph";
import SubstanceCards from "./components/SubstanceCards";
import RecoveryAlgorithm from "./components/RecoveryAlgorithm";

import JoyCelebration from "./components/JoyCelebration";
import GlobalAudioToggle from "./components/GlobalAudioToggle";

export default function NeuroRecoveryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to a background color
  // 0% -> dark, 25% -> medium, 50% -> light, 75% -> lighter, 100% -> vibrant gold/amber
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.8, 1],
    ["#0a0a0a", "#171717", "#f5f5f4", "#fafaf9", "#FFFAF0"] // dark -> stone -> warm ivory/gold base
  );

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor }}
      className="min-h-screen w-full transition-colors duration-1000 ease-out"
    >
      <GlobalAudioToggle />
      <HeroSection />
      <HomeostasisGraph />
      <SubstanceCards />
      <RecoveryAlgorithm />
      <JoyCelebration />
    </motion.div>
  );
}
