"use client";

import React from "react";
import Reveal from "@/components/Reveal";
import { Linie } from "@/components/RunningLine";

interface TechAuthorityGridProps {
  lang?: "ro" | "en";
}

export default function TechAuthorityGrid({ lang = "ro" }: TechAuthorityGridProps) {
  const isEn = lang === "en";

  const t = {
    badge: isEn ? "[ WHAT WE BUILD WITH ]" : "[ CU CE LUCRĂM ]",
    heading: isEn
      ? "We build with tools that the largest companies in the world use too."
      : "Construim cu unelte pe care le folosesc și cele mai mari companii din lume.",
    tagline1: isEn ? "Built to run fast." : "Făcut să meargă repede.",
    tagline2: isEn ? "Written to sell." : "Scris ca să vândă.",
  };

  const stack = [
    {
      name: "Next.js",
      role: isEn ? "Fast websites" : "Site-uri rapide",
      usedBy: isEn ? "Used by Apple, Netflix, Twitch, Nike" : "Folosit de Apple, Netflix, Twitch, Nike",
      svg: (
        <svg viewBox="0 0 180 180" className="h-8 w-auto fill-current" aria-label="Next.js">
          <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#mask0)">
            <circle cx="90" cy="90" fill="currentColor" fillOpacity="0.1" r="90" stroke="currentColor" strokeWidth="6" />
            <path d="M149.508 157.086L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 159.998 149.508 157.086Z" fill="currentColor" />
            <rect fill="currentColor" height="72" width="12" x="115" y="54" />
          </g>
        </svg>
      ),
    },
    {
      name: "Payload CMS",
      role: isEn ? "Admin panel" : "Panou de administrare",
      usedBy: isEn ? "Used by Figma, Kong, Red Bull, Nintendo" : "Folosit de Figma, Kong, Red Bull, Nintendo",
      svg: (
        <svg viewBox="0 0 120 120" className="h-8 w-auto fill-current" aria-label="Payload CMS">
          <path d="M60 10L103.3 35V85L60 110L16.7 85V35L60 10Z" fill="none" stroke="currentColor" strokeWidth="7" />
          <path d="M60 30L85 45V75L60 90L35 75V45L60 30Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="5" />
          <circle cx="60" cy="60" r="8" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Cloudflare",
      role: isEn ? "Speed and protection" : "Viteză și protecție",
      usedBy: isEn ? "Secures 20% of Global Internet Traffic" : "Protejează 20% din traficul global de internet",
      svg: (
        <svg viewBox="0 0 120 60" className="h-7 w-auto fill-current" aria-label="Cloudflare">
          <path d="M96.4 28.5c-.8-6.8-6.6-12-13.6-12-3.8 0-7.2 1.6-9.6 4.2C70.6 15 63.8 11 56 11c-10.4 0-19.1 7.2-21.4 17-1.1-.3-2.3-.5-3.6-.5-6.6 0-12 5.4-12 12s5.4 12 12 12h65.4c6.4 0 11.6-5.2 11.6-11.6 0-5.7-4.1-10.4-9.6-11.4z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Google DeepMind",
      role: isEn ? "AI videos and images" : "Clipuri și imagini cu AI",
      usedBy: isEn ? "The Veo and Imagen models" : "Modelele Veo și Imagen",
      svg: (
        <svg viewBox="0 0 120 120" className="h-8 w-auto fill-current" aria-label="Google AI">
          <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="6 4" />
          <circle cx="60" cy="60" r="28" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="5" />
          <circle cx="60" cy="60" r="10" fill="currentColor" />
          <line x1="60" y1="6" x2="60" y2="24" stroke="currentColor" strokeWidth="5" />
          <line x1="60" y1="96" x2="60" y2="114" stroke="currentColor" strokeWidth="5" />
          <line x1="6" y1="60" x2="24" y2="60" stroke="currentColor" strokeWidth="5" />
          <line x1="96" y1="60" x2="114" y2="60" stroke="currentColor" strokeWidth="5" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      role: isEn ? "Card payments" : "Plăți cu cardul",
      usedBy: isEn ? "Powers OpenAI, Amazon, Shopify" : "Procesează plăți pentru OpenAI, Amazon, Shopify",
      svg: (
        <svg viewBox="0 0 80 40" className="h-7 w-auto fill-current" aria-label="Stripe">
          <text x="5" y="30" fontFamily="sans-serif" fontSize="32" fontWeight="900" letterSpacing="-1.5" fill="currentColor">
            stripe
          </text>
        </svg>
      ),
    },
    {
      name: "ElevenLabs",
      role: isEn ? "AI-generated voice" : "Voce generată cu AI",
      usedBy: isEn ? "Used by Time, HarperCollins, Global Media" : "Folosit de Time, HarperCollins și publicații globale",
      svg: (
        <svg viewBox="0 0 100 40" className="h-7 w-auto fill-current" aria-label="ElevenLabs">
          <rect x="18" y="6" width="6" height="28" rx="2" fill="currentColor" />
          <rect x="30" y="6" width="6" height="28" rx="2" fill="currentColor" />
          <text x="44" y="29" fontFamily="monospace" fontSize="20" fontWeight="bold" letterSpacing="1" fill="currentColor">
            II
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 lg:px-10 max-w-7xl mx-auto border-t border-b border-white/10 dark:border-white/10 light:border-black/10">
      
      {/* Intro Header */}
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] px-3.5 py-1 text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-400 mb-6">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-[38px] font-light text-white dark:text-white light:text-neutral-900 tracking-tight leading-snug">
            <Linie>{t.heading}</Linie>
          </h2>
        </div>
      </Reveal>

      {/* Architectural CAD Grid with Crosshairs */}
      <div className="relative">
        
        {/* Top-left Crosshair */}
        <span className="cad-crosshair absolute -top-3 -left-3 text-neutral-500 font-mono text-sm select-none z-20">+</span>
        {/* Top-right Crosshair */}
        <span className="cad-crosshair absolute -top-3 -right-3 text-neutral-500 font-mono text-sm select-none z-20">+</span>
        {/* Bottom-left Crosshair */}
        <span className="cad-crosshair absolute -bottom-3 -left-3 text-neutral-500 font-mono text-sm select-none z-20">+</span>
        {/* Bottom-right Crosshair */}
        <span className="cad-crosshair absolute -bottom-3 -right-3 text-neutral-500 font-mono text-sm select-none z-20">+</span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/15 dark:border-white/15 light:border-black/15 gap-px bg-white/15 dark:bg-white/15 light:bg-black/15 rounded-none overflow-hidden">
          {stack.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 80}>
              <div className="mech-card mech-cad relative p-8 sm:p-10 flex flex-col justify-between min-h-[200px] h-full bg-[#070809] dark:bg-[#070809] light:bg-[#F6F7F8] group transition-all duration-300 hover:bg-white/[0.04] dark:hover:bg-white/[0.04] light:hover:bg-black/[0.02]">
                
                {/* Subtle Cell Crosshair Indicator */}
                <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-600 dark:text-neutral-600 light:text-neutral-400 opacity-60">
                  [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                </span>

                {/* Logo & Name */}
                <div className="mb-6">
                  <div className="text-white dark:text-white light:text-neutral-900 opacity-80 group-hover:opacity-100 transition-opacity mb-4 flex items-center h-10">
                    {item.svg}
                  </div>
                  <div className="text-lg font-mono font-medium text-white dark:text-white light:text-neutral-900 tracking-tight">
                    {item.name}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                    {item.role}
                  </div>
                </div>

                {/* Cine mai folosește unealta */}
                <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10 font-mono text-[11px]">
                  <div className="text-neutral-400 text-[10px] leading-relaxed">
                    {item.usedBy}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Cele două rânduri mari de la final */}
      <Reveal delay={200}>
        <div className="text-center mt-16 sm:mt-24">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-light text-white dark:text-white light:text-neutral-900 tracking-tight leading-[1.15]">
            <Linie>{t.tagline1}</Linie>
            <br />
            <span className="text-neutral-400 font-normal">
              <Linie>{t.tagline2}</Linie>
            </span>
          </h3>
        </div>
      </Reveal>
    </section>
  );
}
