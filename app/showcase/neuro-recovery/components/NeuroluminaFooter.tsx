"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { useNeuroluminaTheme } from "./ThemeContext";

export default function NeuroluminaFooter() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const { theme } = useNeuroluminaTheme();
  const isDark = theme === "dark";

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
    <footer className={`border-t transition-all duration-700 ease-in-out relative overflow-hidden py-12 ${
      isDark 
        ? "border-neutral-800 bg-[#070708] text-neutral-300" 
        : "border-amber-500/20 bg-gradient-to-b from-[#FFFDF9] to-[#FFF8EB] text-stone-850"
    }`}>
      
      {/* Decorative Grids Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke={isDark ? "#38bdf8" : "#D97706"} 
                strokeWidth="1" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radiant Backlight */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none transition-all duration-700 ${
        isDark 
          ? "bg-gradient-to-b from-blue-500/10 via-red-500/5 to-transparent" 
          : "bg-gradient-to-b from-amber-250/20 to-transparent"
      }`} />

      {/* Main Structural Layout */}
      <div className="mx-auto max-w-[100rem] px-8 lg:px-16 relative z-10 space-y-12">
        
        {/* Upper Dashboard Block */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pb-12 border-b ${
          isDark ? "border-neutral-800" : "border-amber-500/10"
        }`}>
          
          {/* Column 1: Neurolumina Interactive Core Brand */}
          <div className={`p-8 rounded-3xl border backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col justify-between space-y-6 transition-all duration-700 ${
            isDark 
              ? "bg-neutral-900/60 border-neutral-800 text-neutral-350" 
              : "bg-white/60 border-amber-500/10 text-stone-600"
          }`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all duration-700 hover:rotate-45 ${
                  isDark 
                    ? "border-neutral-800 bg-neutral-950 text-white" 
                    : "border-amber-500/20 bg-white text-amber-600"
                }`}>
                  <Logo size={24} />
                </div>
                <div>
                  <div className={`text-base font-bold tracking-[0.35em] uppercase leading-none transition-colors ${
                    isDark ? "text-white" : "text-stone-900"
                  }`}>{translations.title}</div>
                  <div className={`text-[9px] font-mono tracking-widest uppercase mt-1 font-semibold ${
                    isDark ? "text-blue-400" : "text-amber-600"
                  }`}>NEURO-PORTAL</div>
                </div>
              </div>
              
              <p className="text-xs font-light leading-relaxed">
                {translations.subtitle}
              </p>
            </div>

            {/* Neural state tags */}
            <div className={`text-[9px] font-mono font-bold uppercase tracking-[0.25em] border-l-2 pl-4 py-1 flex flex-col gap-1.5 transition-colors ${
              isDark ? "text-neutral-500 border-neutral-700" : "text-amber-700/60 border-amber-500/30"
            }`}>
              <span className="flex items-center gap-2">{translations.tagline1} <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></span></span>
              <span className="flex items-center gap-2">{translations.tagline2} <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span></span>
              <span className="flex items-center gap-2">{translations.tagline3} <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></span></span>
            </div>
          </div>

          {/* Column 2: Dashboard Navigation Links */}
          <div className={`p-8 rounded-3xl border backdrop-blur-sm flex flex-col justify-between transition-all duration-700 ${
            isDark 
              ? "bg-neutral-950/40 border-neutral-900/50" 
              : "bg-white/40 border-amber-500/5"
          }`}>
            <div>
              <div className={`text-[9px] font-mono uppercase tracking-[0.3em] border-b pb-2 mb-6 ${
                isDark ? "text-neutral-600 border-neutral-800" : "text-stone-400 border-amber-500/10"
              }`}>
                {isEn ? "Neuromorphic Map Index" : "Indexul Hărții Neuromorfe"}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link 
                    key={href} 
                    href={href} 
                    className={`group flex items-center gap-2 text-xs transition-colors ${
                      isDark ? "text-neutral-400 hover:text-white" : "text-stone-600 hover:text-amber-700"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-all group-hover:scale-125 ${
                      isDark ? "bg-neutral-700 group-hover:bg-blue-400" : "bg-stone-300 group-hover:bg-amber-500"
                    }`} />
                    <span className="group-hover:underline">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Status indicator */}
            <div className={`mt-8 pt-4 border-t flex items-center justify-between text-[10px] font-mono transition-colors ${
              isDark ? "border-neutral-850 text-neutral-500" : "border-amber-500/5 text-stone-500"
            }`}>
              <span>SYSTEM STATE:</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE COHERENCE
              </span>
            </div>
          </div>

          {/* Column 3: Synaptic Social connections */}
          <div className={`p-8 rounded-3xl border backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col justify-between transition-all duration-700 ${
            isDark 
              ? "bg-neutral-900/60 border-neutral-800 text-neutral-350" 
              : "bg-white/60 border-amber-500/10 text-stone-600"
          }`}>
            <div className="space-y-4">
              <div className={`text-[9px] font-mono uppercase tracking-[0.3em] border-b pb-2 ${
                isDark ? "text-neutral-600 border-neutral-800" : "text-stone-400 border-amber-500/10"
              }`}>
                {translations.socialsTitle}
              </div>
              <p className="text-xs font-light leading-relaxed">
                {isEn 
                  ? "Connect with Reverb Digital to explore human digital marketing ecosystems."
                  : "Conectează-te cu Reverb Digital pentru a explora ecosisteme de human digital marketing."}
              </p>
            </div>
            
            {/* Social Media Glass Buttons */}
            <div className="flex items-center gap-3 mt-6">
              {["linkedin", "facebook", "instagram", "youtube"].map((social) => {
                const svgs: Record<string, React.ReactNode> = {
                  linkedin: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ),
                  facebook: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  ),
                  instagram: (
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  youtube: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                };

                return (
                  <a 
                    key={social}
                    href={`https://${social}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 shadow-sm ${
                      isDark 
                        ? "border-neutral-800 bg-neutral-950 text-neutral-400 hover:bg-white hover:text-neutral-950 hover:border-white hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:scale-105" 
                        : "border-stone-200 bg-white text-stone-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-[0_4px_15px_rgba(217,119,6,0.15)] hover:scale-105"
                    } active:scale-95`}
                    aria-label={social}
                  >
                    {svgs[social]}
                  </a>
                );
              })}
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
                className={`group flex items-center mt-0.5 px-3 py-1.5 transition-all duration-500 rounded-xl border shadow-sm ${
                  isDark 
                    ? "bg-neutral-900 border-neutral-800 hover:bg-neutral-850" 
                    : "bg-white border-stone-250/60 hover:bg-stone-50"
                }`}
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
              <div className={`group flex items-center gap-2 mt-0.5 px-3 py-1.5 transition-all duration-500 rounded-xl border shadow-sm cursor-default ${
                isDark 
                  ? "bg-neutral-900 border-neutral-800 text-white" 
                  : "bg-white border-stone-250/60 text-stone-750"
              }`}>
                 <span className="relative flex h-1.5 w-1.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                   <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-655"></span>
                 </span>
                 <span className="font-bold text-[11px] uppercase leading-none tracking-widest origin-left flex items-center font-mono">
                   Gemini 3.5 (Pro)
                 </span>
              </div>
            </div>

          </div>

          {/* Legal / Copyright Inline */}
          <div className={`flex flex-col sm:flex-row sm:items-center gap-4 text-xs transition-colors ${
            isDark ? "text-neutral-500" : "text-stone-450"
          }`}>
            <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">{translations.copyright}</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-stone-300" />
            <span className={`text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-1.5 font-mono ${
              isDark ? "text-blue-400" : "text-amber-600"
            }`}>
              HOMEOSTASIS <span className={`w-1.5 h-1.5 rotate-45 ${isDark ? "bg-blue-400/40" : "bg-amber-500/40"}`} /> AWARENESS
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
