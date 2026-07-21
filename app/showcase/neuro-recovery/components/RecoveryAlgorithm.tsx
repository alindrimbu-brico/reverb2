"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShieldPlus, Brain, Users, HeartHandshake, ArrowRight, Play } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { setTheme } from "./AudioEngine";
import { getLocaleFromPath, localizePath } from "./translations";
import { recoveryUI } from "./recoveryTranslations";

interface InteractiveCardProps {
  href: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  badge: string;
  accentClass: string;
  glowColor: string;
  themeName: 'recovery' | 'joy';
  accessPortalText: string;
}

function InteractiveCard({
  href,
  title,
  subtitle,
  desc,
  icon,
  badge,
  accentClass,
  glowColor,
  themeName,
  accessPortalText
}: InteractiveCardProps) {
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTheme(themeName);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <motion.div
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl hover:border-neutral-700 transition-colors duration-500 overflow-hidden cursor-pointer group flex flex-col justify-between min-h-[380px] text-left select-none"
    >
      {/* Flashlight Glow effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent)`
        }}
      />

      {/* Ambient Blur effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-neutral-800 rounded-full blur-[80px] group-hover:bg-neutral-700 transition-colors duration-500 pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10 space-y-6" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center justify-between">
          <div className={`p-4 bg-neutral-800 rounded-2xl border border-neutral-700 shadow-inner group-hover:border-neutral-600 transition-colors text-white ${accentClass}`}>
            {icon}
          </div>
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900">
            {badge}
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
            {subtitle}
          </span>
          <h3 className="text-2xl font-bold text-white group-hover:text-neutral-100 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed font-light">
          {desc}
        </p>
      </div>

      {/* Footer Card Navigation */}
      <div className="relative z-10 pt-6 flex items-center justify-between border-t border-neutral-800 group-hover:border-neutral-700/50 transition-colors mt-auto" style={{ transform: "translateZ(15px)" }}>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors flex items-center gap-2">
          {accessPortalText} <Play className="w-3 h-3 fill-neutral-500 group-hover:fill-white transition-all" />
        </span>
        <div className="w-10 h-10 rounded-full border border-neutral-800 group-hover:border-neutral-600 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-all duration-300">
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function RecoveryAlgorithm() {
  const router = useRouter();
  const pathname = usePathname() || "";
  const locale = getLocaleFromPath(pathname);
  
  const ui = {
    sectionBadge: recoveryUI.sectionBadge[locale],
    sectionTitle: recoveryUI.sectionTitle[locale],
    sectionDesc: recoveryUI.sectionDesc[locale],
    accessPortal: recoveryUI.accessPortal[locale],
    conclusionTitle: recoveryUI.conclusionTitle[locale],
    conclusionDesc: recoveryUI.conclusionDesc[locale],
    conclusionBtn: recoveryUI.conclusionBtn[locale]
  };

  const shield = {
    title: recoveryUI.medicalShield.title[locale],
    subtitle: recoveryUI.medicalShield.subtitle[locale],
    badge: recoveryUI.medicalShield.badge[locale],
    desc: recoveryUI.medicalShield.desc[locale]
  };

  const plasticity = {
    title: recoveryUI.neuroplasticity.title[locale],
    subtitle: recoveryUI.neuroplasticity.subtitle[locale],
    badge: recoveryUI.neuroplasticity.badge[locale],
    desc: recoveryUI.neuroplasticity.desc[locale]
  };

  return (
    <motion.section 
      onViewportEnter={() => setTheme("recovery")}
      onMouseEnter={() => setTheme("recovery")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 z-10 bg-neutral-950 transition-colors duration-1000"
    >
      <div className="max-w-5xl mx-auto w-full space-y-24 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center justify-center space-x-2 text-neutral-400 bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800">
            <HeartHandshake className="w-5 h-5 text-rose-500" />
            <span className="uppercase tracking-widest text-xs font-mono font-semibold">{ui.sectionBadge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            {ui.sectionTitle}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light text-lg">
            {ui.sectionDesc}
          </p>
        </motion.div>

        {/* 3D Playful Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <InteractiveCard
            href={localizePath("/showcase/neuro-recovery/medical-shield", locale)}
            title={shield.title}
            subtitle={shield.subtitle}
            badge={shield.badge}
            desc={shield.desc}
            icon={<ShieldPlus className="w-6 h-6 text-blue-400" />}
            accentClass="shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            glowColor="rgba(59,130,246,0.35)"
            themeName="recovery"
            accessPortalText={ui.accessPortal}
          />

          <InteractiveCard
            href={localizePath("/showcase/neuro-recovery/neuroplasticity", locale)}
            title={plasticity.title}
            subtitle={plasticity.subtitle}
            badge={plasticity.badge}
            desc={plasticity.desc}
            icon={<Brain className="w-6 h-6 text-purple-400" />}
            accentClass="shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            glowColor="rgba(168,85,247,0.35)"
            themeName="recovery"
            accessPortalText={ui.accessPortal}
          />
        </div>

        {/* Conclusion / Spiritual connection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => router.push(localizePath('/showcase/neuro-recovery/human-connection', locale))}
          whileHover={{ scale: 1.01, borderColor: "rgba(244, 63, 94, 0.3)" }}
          className="mt-24 p-10 md:p-16 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 text-center shadow-2xl relative overflow-hidden cursor-pointer group flex flex-col items-center select-none"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Users size={200} />
          </div>
          <HeartHandshake className="w-12 h-12 text-rose-500 mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {ui.conclusionTitle}
          </h3>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light mb-6">
            {ui.conclusionDesc}
          </p>

          <div className="px-6 py-3 rounded-full bg-rose-600/10 text-rose-400 border border-rose-500/20 group-hover:bg-rose-600/20 group-hover:border-rose-500/40 text-xs font-mono uppercase tracking-widest transition-all">
            {ui.conclusionBtn}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
