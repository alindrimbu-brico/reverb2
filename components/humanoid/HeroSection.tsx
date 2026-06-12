"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToExplore = () => {
    document.getElementById("economic-impact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[#080810] flex flex-col justify-center items-center text-center px-6 py-24 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00E5FF]/5 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] rounded-full bg-[#FFE600]/4 blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] rounded-full bg-[#00E5FF]/3 blur-[80px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 border border-[#00E5FF]/20 rounded-full px-5 py-2 bg-[#00E5FF]/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#00E5FF]/80 font-semibold">
            2026 · Economia de 4 Trilioane $
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          Revoluția Umanoidă:{" "}
          <br className="hidden md:block" />
          <span className="text-[#00E5FF]">De la Science Fiction</span>
          <br className="hidden md:block" />
          la Realitate Industrială
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-base md:text-xl text-white/50 font-light max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Hardware-ul este gata. Modelele AI preiau controlul. Costul operațional a ajuns la{" "}
          <span className="text-[#FFE600] font-semibold">2$/oră</span>.{" "}
          Ești pregătit pentru economia de{" "}
          <span className="text-[#00E5FF] font-semibold">4 Trilioane $</span>?
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToExplore}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(0,229,255,0.45), 0 0 100px rgba(0,229,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-[#00E5FF] text-[#080810] px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] cursor-pointer transition-colors hover:bg-white"
          >
            Explorează Noua Lume &nbsp;→
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#00E5FF]/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
