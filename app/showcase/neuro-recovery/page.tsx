"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./components/HeroSection";
import HomeostasisGraph from "./components/HomeostasisGraph";
import SubstanceCards from "./components/SubstanceCards";
import RecoveryAlgorithm from "./components/RecoveryAlgorithm";

import JoyCelebration from "./components/JoyCelebration";
import { useNeuroluminaTheme } from "./components/ThemeContext";

export default function NeuroRecoveryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useNeuroluminaTheme();
  const isDark = theme === "dark";
  
  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to a background color
  // Dark mode transitions from black to deep space. Light mode transitions from cream to honey gold.
  const darkColors = ["#0a0a0a", "#121214", "#17171f", "#1b1b24", "#0a0a0c"];
  const lightColors = ["#FFFDF9", "#FFFDF9", "#FFF8EB", "#FFF8EB", "#FFFAF0"];
  const bgColors = isDark ? darkColors : lightColors;

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.8, 1],
    bgColors
  );

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor }}
      className="min-h-screen w-full transition-colors duration-1000 ease-out"
    >
      <HeroSection />
      <HomeostasisGraph />
      <SubstanceCards />
      <RecoveryAlgorithm />
      <JoyCelebration />
    </motion.div>
  );
}



