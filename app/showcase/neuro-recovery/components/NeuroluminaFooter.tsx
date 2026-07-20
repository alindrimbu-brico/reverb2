"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

export default function NeuroluminaFooter() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  const translations = {
    title: "Neurolumina",
    subtitle: isEn 
      ? "An interactive exploration of dopamine, addiction, and the architecture of joy." 
      : "O explorare interactivă a dopaminei, a dependenței și a arhitecturii bucuriei.",
    tagline1: isEn ? "Homeostasis" : "Homeostazie",
    tagline2: isEn ? "Awareness" : "Conștientizare",
    tagline3: isEn ? "Liberation" : "Eliberare",
    socialsTitle: isEn ? "Synaptic Socials" : "Conexiuni Sinaptice",
    poweredBy: isEn ? "Powered by" : "Sustinut de",
    engineeringBy: isEn ? "Engineering by" : "Inginerie de",
    copyright: "© 2026 NEUROLUMINA · SYSTEM DESIGN BY REVERB DIGITAL SRL",
  };

  const navLinks = isEn 
    ? [
        { href: "/en/showcase/neuro-recovery", label: "Neurolumina Home" },
        { href: "/en/showcase/neuro-recovery/roots", label: "Neurobiologic Roots" },
        { href: "/en/showcase/neuro-recovery/homeostasis", label: "Dynamic Homeostasis" },
        { href: "/en/showcase/neuro-recovery/recovery", label: "Consciousness Axis" }
      ]
    : [
        { href: "/showcase/neuro-recovery", label: "Acasă Neurolumina" },
        { href: "/showcase/neuro-recovery/roots", label: "Rădăcini Neurobiologice" },
        { href: "/showcase/neuro-recovery/homeostasis", label: "Homeostazie Dinamică" },
        { href: "/showcase/neuro-recovery/recovery", label: "Axa Conștiinței" }
      ];

  return (
    <footer className="border-t border-amber-500/20 bg-gradient-to-b from-[#FFFDF9] to-[#FFF8EB] text-stone-850 relative overflow-hidden py-12">
      
      {/* Decorative Golden Neural Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D97706" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radiant Amber Backlight (Lumina Core) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-amber-250/20 to-transparent blur-[100px] pointer-events-none" />

      {/* Main Structural Layout */}
      <div className="mx-auto max-w-[100rem] px-8 lg:px-16 relative z-10 space-y-12">
        
        {/* Upper Dashboard Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pb-12 border-b border-amber-500/10">
          
          {/* Column 1: Neurolumina Interactive Core Brand */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white/60 border border-amber-500/10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/20 bg-white shadow-sm text-amber-600 transition-transform duration-500 hover:rotate-45">
                  <Logo size={24} />
                </div>
                <div>
                  <div className="text-base font-bold tracking-[0.35em] uppercase text-stone-900 leading-none">{translations.title}</div>
                  <div className="text-[9px] text-amber-600 font-mono tracking-widest uppercase mt-1 font-semibold">NEURO-PORTAL</div>
                </div>
              </div>
              
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {translations.subtitle}
              </p>
            </div>

            {/* Neural state tags */}
            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-amber-700/60 border-l-2 border-amber-500/30 pl-4 py-1 flex flex-col gap-1.5">
              <span className="flex items-center gap-2">{translations.tagline1} <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></span></span>
              <span className="flex items-center gap-2">{translations.tagline2} <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span></span>
              <span className="flex items-center gap-2">{translations.tagline3} <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></span></span>
            </div>
          </div>

          {/* Column 2: Dashboard Navigation Links */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white/40 border border-amber-500/5 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-stone-400 border-b border-amber-500/10 pb-2 mb-6">
                {isEn ? "Neuromorphic Map Index" : "Indexul Hărții Neuromorfe"}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link 
                    key={href} 
                    href={href} 
                    className="group flex items-center gap-2 text-xs text-stone-600 hover:text-amber-700 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-amber-500 group-hover:scale-125 transition-all" />
                    <span className="group-hover:underline">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Status indicator */}
            <div className="mt-8 pt-4 border-t border-amber-500/5 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span>SYSTEM STATE:</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE COHERENCE
              </span>
            </div>
          </div>

          {/* Column 3: Synaptic Social connections */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white/60 border border-amber-500/10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-stone-400 border-b border-amber-500/10 pb-2">
                {translations.socialsTitle}
              </div>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                {isEn 
                  ? "Connect with Reverb Digital to explore human digital marketing ecosystems."
                  : "Conectează-te cu Reverb Digital pentru a explora ecosisteme de human digital marketing."}
              </p>
            </div>
            
            {/* Social Media Glass Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-[0_4px_15px_rgba(217,119,6,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-[0_4px_15px_rgba(217,119,6,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-[0_4px_15px_rgba(217,119,6,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-[0_4px_15px_rgba(217,119,6,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Lower Subfooter: Tech Badges & Legal Copyright */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between pt-4">
          
          {/* Partner & Tech Stack Badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            
            {/* Nevronix Partnership */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-stone-400 font-mono">{translations.poweredBy}</span>
              <a 
                href="https://nevronix.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center mt-0.5 px-3 py-1.5 transition-all duration-300 bg-white hover:bg-stone-50 rounded-xl border border-stone-250/60 shadow-sm"
              >
                 <span className="font-bold text-[13px] leading-none tracking-tight flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                   <span style={{ color: '#1B1464' }}>Nevronix</span>
                   <span style={{ color: '#CE2051' }}>AI</span>
                 </span>
              </a>
            </div>

            {/* AI Engineering Badge */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-stone-400 font-mono">{translations.engineeringBy}</span>
              <div className="group flex items-center gap-2 mt-0.5 px-3 py-1.5 transition-all duration-300 bg-white rounded-xl border border-stone-250/60 shadow-sm cursor-default">
                 <span className="relative flex h-1.5 w-1.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                   <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-650"></span>
                 </span>
                 <span className="font-bold text-[11px] uppercase leading-none tracking-widest origin-left flex items-center text-stone-750 font-mono">
                   Gemini 3.5 (Pro)
                 </span>
              </div>
            </div>

          </div>

          {/* Legal / Copyright Inline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-stone-450 text-xs">
            <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">{translations.copyright}</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-stone-300" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-600 flex items-center gap-1.5 font-mono">
              HOMEOSTASIS <span className="w-1.5 h-1.5 bg-amber-500/40 rotate-45" /> AWARENESS
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
