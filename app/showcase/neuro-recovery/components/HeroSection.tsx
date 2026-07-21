"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { BrainCircuit, Dna, History, BookOpen, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { setTheme } from "./AudioEngine";
import { getLocaleFromPath, localizePath, translationStrings, uiStrings } from "./translations";

interface InteractiveCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  imageSrc: string;
  children: React.ReactNode;
  hoverGlowColor: string;
  hoverBorderClass: string;
  enterText: string;
}

function InteractiveCard({ href, icon, title, imageSrc, children, hoverGlowColor, hoverBorderClass, enterText }: InteractiveCardProps) {
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);

    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onClick={() => router.push(href)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-xl relative overflow-hidden group cursor-pointer transition-colors duration-500 shadow-2xl select-none ${hoverBorderClass}`}
    >
      {/* Flashlight Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, ${hoverGlowColor}, transparent)`
        }}
      />

      <div className="z-10" style={{ transform: "translateZ(10px)" }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
            {icon}
            {title}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 duration-300">
            {enterText} <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* Cinematic Image Portlet */}
        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-neutral-800/80 mb-6 group-hover:border-neutral-700/80 transition-all duration-500 shadow-inner">
          <motion.img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
        </div>
        
        {children}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  
  const ui = {
    badge: uiStrings.headerBadge[locale],
    title: uiStrings.headerTitle[locale],
    subtitle: uiStrings.headerSubtitle[locale],
    subtitle2: uiStrings.headerSubtitle2[locale],
    exploreBtn: uiStrings.exploreBtn[locale],
    enterPortal: uiStrings.enterPortal[locale]
  };

  const epigenetics = translationStrings["epigenetics-gabor-mate"][locale];
  const collectiveTrauma = translationStrings["collective-trauma-hpa"][locale];

  return (
    <motion.section 
      onViewportEnter={() => setTheme("chaos")}
      onMouseEnter={() => setTheme("chaos")}
      onFocusCapture={() => setTheme("chaos")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 bg-neutral-950"
    >
      {/* Background abstract elements to simulate "chaos/noise" */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-900 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-red-900 rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex flex-wrap gap-4 items-center">
            {/* Neurolumina Brand Logo & Name */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-950/40 to-neutral-900/60 border border-purple-500/25 px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.1)] backdrop-blur-md">
              {/* Sugestive Glowing Logo */}
              <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <BrainCircuit className="w-4 h-4 animate-pulse text-purple-400" />
                <span className="absolute inset-0 rounded-full border border-purple-500/40 animate-ping opacity-60" />
              </div>
              <span className="font-extrabold tracking-[0.25em] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-rose-400 font-sans uppercase text-[11px]">
                Neurolumina
              </span>
            </div>

            {/* Sub-Badge */}
            <div className="inline-flex items-center space-x-2 bg-neutral-900/40 border border-neutral-800 px-4 py-2.5 rounded-full text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
              <span>{ui.badge}</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
            {ui.title}
          </h1>

          <div className="border-l-4 border-purple-800/50 pl-6 space-y-4">
            <p className="text-xl text-neutral-300 leading-relaxed font-light">
              {ui.subtitle}
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              {ui.subtitle2}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href={localizePath("/showcase/neuro-recovery/roots", locale)}
              className="flex items-center space-x-2 text-sm font-mono tracking-widest uppercase text-purple-400 bg-purple-900/20 hover:bg-purple-900/40 px-8 py-4 rounded-full transition-all border border-purple-500/30 hover:border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <BookOpen className="w-5 h-5" />
              <span>{ui.exploreBtn}</span>
            </Link>
          </div>
        </motion.div>

        <div className="space-y-6">
          {/* Card 1: Epigenetics / Gabor Mate */}
          <InteractiveCard
            href={localizePath("/showcase/neuro-recovery/epigenetics-gabor-mate", locale)}
            icon={<Dna className="text-purple-500" />}
            title={epigenetics.title.split(" — ")[0]}
            imageSrc="/images/epigenetics.jpg"
            hoverGlowColor="rgba(168, 85, 247, 0.4)"
            hoverBorderClass="hover:border-purple-900/50"
            enterText={ui.enterPortal}
          >
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              {epigenetics.subtitle}
            </p>
            {epigenetics.quote && (
              <div className="bg-neutral-950/50 p-4 rounded-xl border border-neutral-800/50 flex gap-3 items-start z-10 relative">
                <Quote className="w-5 h-5 text-purple-500/50 shrink-0 mt-1" />
                <p className="text-xs text-neutral-300 font-light italic">
                  {epigenetics.quote} — {epigenetics.quoteAuthor}
                </p>
              </div>
            )}
          </InteractiveCard>

          {/* Card 2: Collective Trauma & HPA Axis */}
          <InteractiveCard
            href={localizePath("/showcase/neuro-recovery/collective-trauma-hpa", locale)}
            icon={<History className="text-red-500" />}
            title={collectiveTrauma.title.split(" — ")[0]}
            imageSrc="/images/collective-trauma.jpg"
            hoverGlowColor="rgba(239, 68, 68, 0.4)"
            hoverBorderClass="hover:border-red-900/50"
            enterText={ui.enterPortal}
          >
            <p className="text-neutral-400 text-sm leading-relaxed">
              {collectiveTrauma.subtitle}
            </p>
          </InteractiveCard>
        </div>
      </div>
    </motion.section>
  );
}
