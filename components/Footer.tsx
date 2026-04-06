"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const navInfo = {
  ro: [
    { href: "/", label: "Acasă" },
    { href: "/despre", label: "Despre" },
    { href: "/servicii", label: "Servicii" },
    { href: "/pachete", label: "Pachete" },
    { href: "/magazine-online", label: "Magazine Online" },
    { href: "/portofoliu", label: "Portofoliu" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/legal", label: "Legal" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/about", label: "About Us" },
    { href: "/en/services", label: "Services" },
    { href: "/en/packages", label: "Packages" },
    { href: "/en/online-store", label: "Online Store" },
    { href: "/en/portfolio", label: "Portfolio" },
    { href: "/en/blog", label: "Blog" },
    { href: "/en/contact", label: "Contact" },
    { href: "/en/legal", label: "Legal" },
  ]
};

export default function Footer() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const nav = isEn ? navInfo.en : navInfo.ro;

  const translations = {
    tagline1: isEn ? "Structure" : "Structură",
    tagline2: isEn ? "Execution" : "Execuție",
    tagline3: isEn ? "Results" : "Rezultate",
    communications: isEn ? "Communications" : "Comunicații",
    hq: isEn ? "Headquarters" : "Cartier General",
  };

  return (
    <footer className="border-t border-[#1d2731]/10 bg-[#f2eee7]">
      {/* Container Principal Full-Width Grid */}
      <div className="mx-auto max-w-[100rem]">
        
        {/* Arhitectură Brutalistă: 3 Coloane separate vizual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1d2731]/10 border-b border-[#1d2731]/10">
          
          {/* Coloana 1: Identitate Brand */}
          <div className="p-8 lg:p-16 lg:col-span-4 xl:col-span-3 flex flex-col justify-between h-full bg-[#f2eee7]">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/15 bg-white/70 text-[#1d2731] transition-transform duration-500 group-hover:scale-105">
                  <Logo size={26} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-[0.35em] uppercase text-[#1d2731]">reverb.ro</div>
                  <div className="text-xs text-[#1d2731]/55 tracking-wider">Clarity & Structure</div>
                </div>
              </Link>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#1d2731]/60 border-l-2 border-[#1d2731]/20 pl-4 py-2 flex flex-col gap-2">
                <span className="flex items-center gap-2">{translations.tagline1} <span className="w-1 h-1 rounded-full bg-[#1d2731]/20"></span></span>
                <span className="flex items-center gap-2">{translations.tagline2}  <span className="w-1 h-1 rounded-full bg-[#1d2731]/20"></span></span>
                <span className="flex items-center gap-2">{translations.tagline3}</span>
              </p>
            </div>
          </div>

          {/* Coloana 2: Matricea de Navigare */}
          <div className="p-8 lg:p-16 lg:col-span-4 xl:col-span-5 flex items-center bg-[#f2eee7]/50 shadow-inner rounded-3xl m-4 lg:m-0 lg:rounded-none">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-full">
              {nav.map(({ href, label }) => (
                <Link 
                  key={href} 
                  href={href} 
                  className="group flex justify-center items-center w-full rounded-full border border-[#1d2731] bg-transparent px-4 py-2.5 text-[#1d2731] transition-all duration-300 hover:bg-[#1d2731]/5 hover:-translate-y-0.5"
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] transition-transform duration-300 group-hover:scale-[1.02]">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Coloana 3: Comunicații & Date Oficiale */}
          <div className="p-8 lg:p-16 lg:col-span-4 xl:col-span-4 flex flex-col justify-center bg-[#f2eee7]">
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-12 text-sm">
              <div className="flex flex-col gap-4">
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#1d2731]/40 border-b border-[#1d2731]/10 pb-2">{translations.communications}</div>
                <div className="flex flex-col gap-2">
                  <a href="mailto:reverb@reverb.ro" className="group flex items-center gap-2 text-[#1d2731]/70 transition-all hover:text-[#1d2731] hover:translate-x-1 text-xs">
                    <span className="relative">
                      reverb@reverb.ro
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1d2731]/30 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <span className="opacity-0 -translate-x-2 text-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                  </a>
                  <a href="tel:0737478238" className="group flex items-center gap-2 text-[#1d2731]/70 transition-all hover:text-[#1d2731] hover:translate-x-1 text-xs">
                    <span className="font-mono text-[11px]">+40 737 478 238</span>
                    <span className="opacity-0 -translate-x-2 text-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">↗</span>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#1d2731]/40 border-b border-[#1d2731]/10 pb-2">{translations.hq}</div>
                <p className="text-[#1d2731]/70 text-xs leading-[1.8]">
                  Str. Măgura 57 F<br />
                  Focșani, Vrancea<br />
                  <span className="text-[#1d2731]/40 font-mono text-[10px] uppercase tracking-widest mt-1 block">RO 620157</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bara Subsol: Tech Badge & Legal */}
        <div className="px-8 lg:px-16 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-[#f2eee7]">
          {/* Partner & Tech Stack Badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            
            {/* Nevronix Partnership */}
            <div className="flex flex-col items-start gap-1.5 float-badge">
              <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#1d2731]/40">Powered by</span>
              <a href="https://nevronix.ai" target="_blank" rel="noopener noreferrer" className="group flex items-center mt-0.5 px-3 py-1.5 transition-all duration-500 bg-white/30 hover:bg-white rounded-lg border border-[#1d2731]/5 hover:shadow-sm">
                 <span className="font-bold text-[14px] leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                   <span style={{ color: '#1B1464' }}>Nevronix</span>
                   <span style={{ color: '#CE2051' }}>AI</span>
                 </span>
              </a>
            </div>

            {/* Ultra AI Engineering */}
            <div className="flex flex-col items-start gap-1.5 float-badge" style={{ animationDelay: '0.2s' }}>
              <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#1d2731]/40">Engineering by</span>
              <div className="group flex items-center gap-2 mt-0.5 px-3 py-1.5 transition-all duration-500 bg-white/30 hover:bg-white rounded-lg border border-[#1d2731]/5 hover:shadow-sm cursor-default">
                 <span className="relative flex h-1.5 w-1.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                   <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                 </span>
                 <span className="font-bold text-[11px] uppercase leading-none tracking-widest transition-transform duration-500 group-hover:scale-105 origin-left flex items-center text-[#1d2731]">
                   Google Ultra <span className="text-emerald-700 ml-1 font-extrabold" style={{ textShadow: "0 0 10px rgba(16,185,129,0.3)" }}>AI</span>
                 </span>
              </div>
            </div>

          </div>

          {/* Legal / Manifest Inline */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-[#1d2731]/40">
            <span className="font-mono text-[10px] uppercase tracking-widest">&copy; 2026 KALKI DRIM MAGAZIN S.R.L.</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#1d2731]/20"></span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
               CLARITY <span className="w-1 h-1 bg-[#1d2731]/20 rotate-45"></span> 
               STRUCTURE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
