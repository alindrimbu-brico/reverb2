"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { company } from "@/lib/company";

interface SocialFooterLink {
  id: string;
  label: string;
  url: string;
  handle?: string;
}

export default function Footer({ socialLinks = [] }: { socialLinks?: SocialFooterLink[] }) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const [activeTab, setActiveTab] = useState<"navigare" | "ecosistem">("navigare");

  const navInfo = {
    ro: [
      { href: "/", label: "Acasă" },
      { href: "/servicii", label: "Servicii" },
      { href: "/pachete", label: "Pachete" },
      { href: "/portofoliu", label: "Portofoliu" },
      { href: "/despre", label: "Despre" },
      { href: "/contact", label: "Contact" },
      { href: "/legal", label: "Legal" },
    ],
    en: [
      { href: "/en", label: "Home" },
      { href: "/en/services", label: "Services" },
      { href: "/en/packages", label: "Packages" },
      { href: "/en/portfolio", label: "Portfolio" },
      { href: "/en/about", label: "About" },
      { href: "/en/contact", label: "Contact" },
      { href: "/en/legal", label: "Legal" },
    ]
  };

  const nav = isEn ? navInfo.en : navInfo.ro;

  // Hide global Reverb footer on individual showcase prototypes (they have their own tailored footers)
  const isShowcaseDemo = Boolean(
    (pathname.startsWith("/showcase/") && pathname !== "/showcase") ||
    (pathname.startsWith("/en/showcase/") && pathname !== "/en/showcase")
  );

  const showcaseLinks = [
    { href: "https://reverb.ro", label: "Reverb.ro", external: true },
    { href: "https://bythefire.app", label: "ByTheFire.app", external: true },
    { href: isEn ? "/en/showcase" : "/showcase", label: isEn ? "Design Concepts" : "Concepte de design" },
    { href: "https://bricolando.ro", label: "Bricolando.ro", external: true },
    { href: "https://raftplin.ro", label: "RaftPlin.ro", external: true },
    { href: "https://kalki.work", label: "Kalki.work", external: true },
    { href: "https://kalki.nexus", label: "Kalki.nexus", external: true },
    { href: "https://numerarium.app", label: "Numerarium", external: true },
    { href: "https://elumia.app", label: "Elumia", external: true },
    { href: "https://don-barbershop.pages.dev", label: "DON Barbershop", external: true },
  ];

  const t = {
    desc: isEn 
      ? "We build presentation websites, online stores and videos for new businesses."
      : "Facem site-uri de prezentare, magazine online și clipuri video pentru afaceri la început.",
    tagline1: isEn ? "Fixed price" : "Preț Fix",
    tagline2: isEn ? "Clear steps" : "Pași clari",
    tagline3: isEn ? "Support after launch" : "Sprijin după lansare",
    communications: "Contact",
    hq: isEn ? "Where we are" : "Unde suntem",
    office: isEn ? "Our office" : "Biroul nostru",
    partnerTitle: isEn ? "Our partner in London, for large projects" : "Partenerul nostru din Londra, pentru proiecte mari",
    partner: isEn ? "Partner" : "Partener",
    whatsapp: isEn ? "Message us on WhatsApp" : "Scrie-ne pe WhatsApp",
    navTab: isEn ? "Navigation" : "Navigare",
    ecoTab: isEn ? "Our work" : "Lucrările noastre",
    clarity: isEn ? "Websites and online stores" : "Site-uri și magazine online",
    rights: isEn ? "ALL RIGHTS RESERVED" : "TOATE DREPTURILE REZERVATE",
  };

  if (isShowcaseDemo) return null;
  // Reverb Studio e aplicație separată: fără subsolul site-ului.
  if (pathname === "/studio" || (pathname || "").startsWith("/studio/")) return null;

  return (
    <footer className="relative z-10 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#16181b] text-neutral-900 dark:text-neutral-100 font-sans antialiased transition-colors duration-300">
      {/* Container Principal Full-Width Grid */}
      <div className="mx-auto max-w-[100rem]">
        
        {/* Arhitectură Brutalistă: 3 Coloane separate vizual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
          
          {/* Coloana 1: Identitate Brand */}
          <div className="p-8 lg:p-14 lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full bg-white dark:bg-[#16181b]">
            <div className="max-w-sm">
              <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white transition-transform duration-500 group-hover:scale-105">
                  <Logo size={26} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-[0.35em] uppercase text-neutral-900 dark:text-white font-mono">reverb.ro</div>
                  <div className="text-[10px] text-neutral-600 dark:text-neutral-400 font-mono tracking-wider">{t.clarity}</div>
                </div>
              </Link>
              <p className="mt-6 text-xs text-neutral-700 dark:text-neutral-400 font-light leading-relaxed">
                {t.desc}
              </p>
              <div className="mt-8 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-600 dark:text-neutral-500 border-l border-black/20 dark:border-white/20 pl-4 py-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{t.tagline1}</span>
                <span className="text-neutral-400 dark:text-neutral-700">•</span>
                <span>{t.tagline2}</span>
                <span className="text-neutral-400 dark:text-neutral-700">•</span>
                <span>{t.tagline3}</span>
              </div>
            </div>
          </div>

          {/* Coloana 2: Matricea de Navigare (Tab-uri Funcționale) */}
          <div className="p-8 lg:p-14 lg:col-span-4 xl:col-span-5 flex flex-col bg-[#F1F2F4] dark:bg-[#1d2024]">
            
            {/* Headers Tab-uri cu contrast ridicat în ambele teme */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 border-b border-black/10 dark:border-white/10 pb-4 font-mono">
               <button 
                  onClick={() => setActiveTab("navigare")} 
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all px-4 py-1.5 rounded-full ${
                    activeTab === "navigare" 
                      ? "bg-[#111215] text-[#ffffff] dark:bg-white dark:text-black shadow-md font-extrabold" 
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
               >
                  {t.navTab}
               </button>
               <button 
                  onClick={() => setActiveTab("ecosistem")} 
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all px-4 py-1.5 rounded-full ${
                    activeTab === "ecosistem" 
                      ? "bg-[#111215] text-[#ffffff] dark:bg-white dark:text-black shadow-md font-extrabold" 
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
               >
                  {t.ecoTab}
               </button>
            </div>

            {/* Conținut Tab-uri */}
            <div className="flex-1 w-full font-mono">
               {/* TAB: NAVIGARE */}
               {activeTab === "navigare" && (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    {nav.map(({ href, label }) => (
                      <Link 
                        key={href} 
                        href={href} 
                        className="mech-magnetic mech-btn group flex justify-center items-center w-full rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/[0.06] px-3.5 py-2.5 text-neutral-900 dark:text-neutral-200 font-bold transition-all duration-300 hover:bg-[#111215] hover:text-[#ffffff] dark:hover:bg-white dark:hover:border-white dark:hover:text-black shadow-sm text-center"
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
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    {showcaseLinks.map((item) => (
                      item.external ? (
                        <a 
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mech-magnetic mech-btn group flex justify-center items-center gap-1 w-full rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/[0.06] px-3.5 py-2.5 text-neutral-900 dark:text-neutral-200 font-bold transition-all duration-300 hover:bg-[#111215] hover:text-[#ffffff] dark:hover:bg-white dark:hover:border-white dark:hover:text-black shadow-sm text-center"
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
                          className="mech-magnetic mech-btn group flex justify-center items-center w-full rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/[0.06] px-3.5 py-2.5 text-neutral-900 dark:text-neutral-200 font-bold transition-all duration-300 hover:bg-[#111215] hover:text-[#ffffff] dark:hover:bg-white dark:hover:border-white dark:hover:text-black shadow-sm text-center"
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
          <div className="p-8 lg:p-14 lg:col-span-4 xl:col-span-3 flex flex-col justify-center bg-white dark:bg-[#16181b] font-mono text-xs">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-600 dark:text-neutral-500 border-b border-black/10 dark:border-white/10 pb-2">
                  {t.communications}
                </div>
                <div className="space-y-2">
                  <a href={`mailto:${company.email}`} className="flex items-center justify-between text-neutral-900 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-white transition-colors font-medium">
                    <span>{company.email}</span>
                    <span className="text-neutral-500">↗</span>
                  </a>
                  <a href={company.tel} className="flex items-center justify-between text-neutral-900 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-white transition-colors font-medium">
                    <span>{company.phoneIntl}</span>
                    <span className="text-neutral-500">↗</span>
                  </a>
                  <a 
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors font-bold"
                  >
                    <span>{t.whatsapp}</span>
                    <span>↗</span>
                  </a>
                </div>
                {socialLinks.length > 0 && (
                  <div className="pt-3 mt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2">
                    {socialLinks.map((ch) => (
                      <a
                        key={ch.id}
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-black/15 dark:border-white/15 bg-white dark:bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        <span>{ch.label}</span>
                        <span>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-600 dark:text-neutral-500 border-b border-black/10 dark:border-white/10 pb-2">
                  {t.hq}
                </div>
                <div className="space-y-3">
                  {/* Birou România */}
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-900 dark:text-neutral-200 tracking-wider">
                      {t.office}
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-400 text-[11px] leading-relaxed mt-0.5">
                      {isEn ? "Focșani, Vrancea, Romania" : "Focșani, Vrancea, România"}<br />
                      <span data-no-translate className="text-neutral-700 dark:text-neutral-400 block font-medium">
                        {`${company.legalName} · CUI ${company.cui} · ${company.regCom}`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-600 dark:text-neutral-500 border-b border-black/10 dark:border-white/10 pb-2">
                  {t.partnerTitle}
                </div>
                <div className="space-y-3">

                  {/* Partenerul din Londra - Zylaris Group London */}
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-900 dark:text-neutral-200 tracking-wider flex flex-wrap items-center justify-between gap-1">
                      <span>Zylaris Group London</span>
                      <a href="https://zylarisgroup.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-[9px]">zylarisgroup.com ↗</a>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-400 text-[11px] leading-relaxed mt-0.5">
                      167–169 Great Portland Street<br />
                      London, W1W 5PF, United Kingdom
                    </p>
                    <div className="mt-1.5 space-y-1 text-[10px] text-neutral-600 dark:text-neutral-400">
                      <a href="mailto:office@zylarisgroup.com" className="flex items-center justify-between hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <span>office@zylarisgroup.com</span>
                        <span className="text-neutral-500">↗</span>
                      </a>
                      <a href="tel:+442071838739" className="flex items-center justify-between hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <span>+44 20 7183 8739</span>
                        <span className="text-neutral-500">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bara Subsol: partenerul și drepturile */}
        <div className="px-8 lg:px-14 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-[#E9EBEE] dark:bg-[#101214] font-mono text-xs border-t border-black/10 dark:border-white/10">
          {/* Strategic Partner */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-600 dark:text-neutral-500">{t.partner}:</span>
            <a
              href="https://zylarisgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-900 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-white underline underline-offset-4 text-[11px] font-semibold transition-colors"
            >
              <span>Zylaris Group London</span>
              <span className="text-[9px] text-neutral-500">↗</span>
            </a>
          </div>

          {/* Legal / Manifest Inline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-neutral-600 dark:text-neutral-500 text-[10px]">
            <span>&copy; 2026 KALKI DRIM MAGAZIN S.R.L.</span>
            <span className="hidden sm:inline text-neutral-400 dark:text-neutral-700">•</span>
            <span>{t.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
