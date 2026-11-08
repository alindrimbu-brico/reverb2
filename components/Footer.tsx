"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";

const navInfo = {
  ro: [
    { href: "/", label: "Acasă" },
    { href: "/servicii", label: "Servicii" },
    { href: "/pachete", label: "Pachete" },
    { href: "/showcase", label: "Portofoliu" },
    { href: "/despre", label: "Despre" },
    { href: "/contact", label: "Contact" },
    { href: "/legal", label: "Legal" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/services", label: "Services" },
    { href: "/en/packages", label: "Packages" },
    { href: "/en/showcase", label: "Portfolio" },
    { href: "/en/about", label: "About" },
    { href: "/en/contact", label: "Contact" },
    { href: "/en/legal", label: "Legal" },
  ]
};

export default function Footer() {
  const pathname = usePathname() || "";
  
  // Suppress global footer on Neurolumina (neuro-recovery) pages
  if (pathname.includes("/showcase/neuro-recovery")) {
    return null;
  }

  const isEn = pathname.startsWith("/en");
  const nav = isEn ? navInfo.en : navInfo.ro;
  
  const [activeTab, setActiveTab] = useState("navigare");

  const showcaseLinks = [
    { href: isEn ? "/en/showcase" : "/showcase", label: isEn ? "Matrix Index" : "Index Matrice" },
    { href: "https://bricolando.ro", label: "Bricolando.ro", external: true },
    { href: "https://raftplin.ro", label: "RaftPlin.ro", external: true },
    { href: "https://kalki.work", label: "Kalki.work", external: true },
    { href: "https://kalki.nexus", label: "Kalki.nexus", external: true },
    { href: "https://numerarium.app", label: "Numerarium.app", external: true },
  ];

  const t = {
    tagline1: isEn ? "Structure" : "Structură",
    tagline2: isEn ? "Execution" : "Execuție",
    tagline3: isEn ? "Results" : "Rezultate",
    desc: isEn 
      ? "Digital infrastructure, high-velocity web platforms, and Generative Engine Optimization (GEO). Part of Surya Group ecosystem."
      : "Infrastructură digitală, platforme web de mare viteză și optimizare pentru căutare generativă (GEO). Ecosistem al Grupului Surya.",
    communications: isEn ? "Direct Contact" : "Contact Direct",
    hq: isEn ? "Headquarters" : "Cartier General",
    partner: isEn ? "Strategic Partner" : "Partener Strategic",
    navTab: isEn ? "Navigation" : "Navigare",
    ecoTab: isEn ? "Production Systems" : "Sisteme Live",
    clarity: isEn ? "Clarity & Structure" : "Claritate & Structură",
    rights: isEn ? "ALL RIGHTS RESERVED" : "TOATE DREPTURILE REZERVATE",
  };

  return (
    <footer className="border-t border-white/10 bg-[#070809] text-neutral-100 font-sans selection:bg-neutral-700 selection:text-white antialiased">
      {/* Container Principal Full-Width Grid */}
      <div className="mx-auto max-w-[100rem]">
        
        {/* Arhitectură Brutalistă: 3 Coloane separate vizual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
          
          {/* Coloana 1: Identitate Brand */}
          <div className="p-8 lg:p-14 lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full bg-[#070809]">
            <div className="max-w-sm">
              <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-transform duration-500 group-hover:scale-105">
                  <Logo size={26} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-[0.35em] uppercase text-white font-mono">reverb.ro</div>
                  <div className="text-[10px] text-neutral-400 font-mono tracking-wider">{t.clarity}</div>
                </div>
              </Link>
              <p className="mt-6 text-xs text-neutral-400 font-light leading-relaxed">
                {t.desc}
              </p>
              <div className="mt-8 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 border-l border-white/20 pl-4 py-1 flex items-center gap-2">
                <span>{t.tagline1}</span>
                <span className="text-neutral-700">•</span>
                <span>{t.tagline2}</span>
                <span className="text-neutral-700">•</span>
                <span>{t.tagline3}</span>
              </div>
            </div>
          </div>

          {/* Coloana 2: Matricea de Navigare (Tab-uri Funcționale) */}
          <div className="p-8 lg:p-14 lg:col-span-4 xl:col-span-5 flex flex-col bg-[#090a0c]/60">
            
            {/* Headers Tab-uri */}
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 font-mono">
               <button 
                  onClick={() => setActiveTab("navigare")} 
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all px-4 py-1.5 rounded-full ${
                    activeTab === "navigare" 
                      ? "bg-white text-black shadow-md" 
                      : "text-neutral-400 hover:text-white"
                  }`}
               >
                  {t.navTab}
               </button>
               <button 
                  onClick={() => setActiveTab("ecosistem")} 
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all px-4 py-1.5 rounded-full ${
                    activeTab === "ecosistem" 
                      ? "bg-white text-black shadow-md" 
                      : "text-neutral-400 hover:text-white"
                  }`}
               >
                  {t.ecoTab}
               </button>
            </div>

            {/* Conținut Tab-uri */}
            <div className="flex-1 w-full font-mono">
               {/* TAB: NAVIGARE */}
               {activeTab === "navigare" && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {nav.map(({ href, label }) => (
                      <Link 
                        key={href} 
                        href={href} 
                        className="group flex justify-center items-center w-full rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-neutral-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white text-center"
                      >
                        <span className="text-[10px] uppercase tracking-wider">
                          {label}
                        </span>
                      </Link>
                    ))}
                  </div>
               )}

               {/* TAB: ECOSISTEM */}
               {activeTab === "ecosistem" && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {showcaseLinks.map((item) => (
                      item.external ? (
                        <a 
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex justify-center items-center gap-1 w-full rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-neutral-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white text-center"
                        >
                          <span className="text-[10px] uppercase tracking-wider">
                            {item.label}
                          </span>
                          <span className="text-[8px] text-neutral-500">↗</span>
                        </a>
                      ) : (
                        <Link 
                          key={item.label}
                          href={item.href}
                          className="group flex justify-center items-center w-full rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-neutral-300 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white text-center"
                        >
                          <span className="text-[10px] uppercase tracking-wider">
                            {item.label}
                          </span>
                        </Link>
                      )
                    ))}
                  </div>
               )}
            </div>
            
          </div>

          {/* Coloana 3: Comunicații & Date Oficiale */}
          <div className="p-8 lg:p-14 lg:col-span-4 xl:col-span-3 flex flex-col justify-center bg-[#070809] font-mono text-xs">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-500 border-b border-white/10 pb-2">
                  {t.communications}
                </div>
                <div className="space-y-2">
                  <a href="mailto:contact@reverb.ro" className="flex items-center justify-between text-neutral-300 hover:text-white transition-colors">
                    <span>contact@reverb.ro</span>
                    <span className="text-neutral-500">↗</span>
                  </a>
                  <a href="tel:0767235693" className="flex items-center justify-between text-neutral-300 hover:text-white transition-colors">
                    <span>+40 767 235 693</span>
                    <span className="text-neutral-500">↗</span>
                  </a>
                  <a 
                    href="https://wa.me/40767235693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                  >
                    <span>WhatsApp Direct</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-500 border-b border-white/10 pb-2">
                  {t.hq}
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed">
                  Focșani, Vrancea, România<br />
                  <span className="text-neutral-600 block mt-0.5">SC Kalki Drim Magazin SRL</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bara Subsol: Strategic Partner & Legal */}
        <div className="px-8 lg:px-14 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-[#050607] font-mono text-xs">
          {/* Strategic Partner */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500">{t.partner}:</span>
            <a
              href="https://zylarisgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white underline underline-offset-4 text-[11px] transition-colors"
            >
              <span>Zylaris Group London</span>
              <span className="text-[9px] text-neutral-500">↗</span>
            </a>
          </div>

          {/* Legal / Manifest Inline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-neutral-500 text-[10px]">
            <span>&copy; 2026 KALKI DRIM MAGAZIN S.R.L.</span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span>{t.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
