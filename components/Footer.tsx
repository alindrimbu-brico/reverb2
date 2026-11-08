"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

export default function Footer() {
  const pathname = usePathname() || "";
  
  // Suppress global footer on Neurolumina (neuro-recovery) pages
  if (pathname.includes("/showcase/neuro-recovery")) {
    return null;
  }

  const isEn = pathname.startsWith("/en");

  const t = {
    tagline1: isEn ? "Structure" : "Structură",
    tagline2: isEn ? "Execution" : "Execuție",
    tagline3: isEn ? "Results" : "Rezultate",
    desc: isEn 
      ? "High-velocity web architecture, daily generative video systems, and Generative Engine Optimization (GEO). Part of Surya Group ecosystem."
      : "Infrastructură web de mare viteză, sisteme de conținut video generativ zilnic și optimizare pentru căutare AI (GEO). Ecosistem al Grupului Surya.",
    communications: isEn ? "Direct Contact" : "Contact Direct",
    hq: isEn ? "Headquarters" : "Cartier General",
    partner: isEn ? "Strategic Partner" : "Partener Strategic",
    clarity: isEn ? "Clarity & Structure" : "Claritate & Structură",
    rights: isEn ? "ALL RIGHTS RESERVED" : "TOATE DREPTURILE REZERVATE",
    legal: isEn ? "Legal & Corporate Data" : "Date Juridice & Fiscale",
    matrixPortal: isEn ? "Explore Production Matrix →" : "Explorează Matricea de Producție →"
  };

  return (
    <footer className="border-t border-white/10 bg-[#070809] text-neutral-100 font-sans selection:bg-neutral-700 selection:text-white antialiased">
      {/* Container Principal */}
      <div className="mx-auto max-w-[100rem]">
        
        {/* Arhitectură Brutalistă Curată: 3 Coloane fără aglomerare de meniuri */}
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
          
          {/* Coloana 1: Identitate Brand & Viziune */}
          <div className="p-8 lg:p-14 md:col-span-6 lg:col-span-5 flex flex-col justify-between bg-[#070809]">
            <div className="max-w-md">
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

              <div className="mt-6">
                <Link
                  href={isEn ? "/en/showcase" : "/showcase"}
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-white underline underline-offset-4 tracking-wider transition-colors"
                >
                  {t.matrixPortal}
                </Link>
              </div>

              <div className="mt-8 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 border-l border-white/20 pl-4 py-1 flex items-center gap-2">
                <span>{t.tagline1}</span>
                <span className="text-neutral-700">•</span>
                <span>{t.tagline2}</span>
                <span className="text-neutral-700">•</span>
                <span>{t.tagline3}</span>
              </div>
            </div>
          </div>

          {/* Coloana 2: Contact Direct & Asistență Imediată */}
          <div className="p-8 lg:p-14 md:col-span-3 lg:col-span-4 flex flex-col justify-center bg-[#090a0c]/60 font-mono text-xs">
            <div className="space-y-4">
              <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-500 border-b border-white/10 pb-2">
                {t.communications}
              </div>
              <div className="space-y-3">
                <a 
                  href="mailto:contact@reverb.ro" 
                  className="flex items-center justify-between text-neutral-300 hover:text-white transition-colors py-1 border-b border-white/5"
                >
                  <span>contact@reverb.ro</span>
                  <span className="text-neutral-500">↗</span>
                </a>
                <a 
                  href="tel:0767235693" 
                  className="flex items-center justify-between text-neutral-300 hover:text-white transition-colors py-1 border-b border-white/5"
                >
                  <span>+40 767 235 693</span>
                  <span className="text-neutral-500">↗</span>
                </a>
                <a 
                  href="https://wa.me/40767235693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-emerald-400 hover:text-emerald-300 transition-colors py-1 font-bold"
                >
                  <span>WhatsApp Direct</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coloana 3: Cartier General & Juridic */}
          <div className="p-8 lg:p-14 md:col-span-3 lg:col-span-3 flex flex-col justify-center bg-[#070809] font-mono text-xs">
            <div className="space-y-4">
              <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-neutral-500 border-b border-white/10 pb-2">
                {t.hq}
              </div>
              <div className="space-y-2 text-neutral-400 text-[11px] leading-relaxed">
                <p>
                  Focșani, Vrancea, România<br />
                  <span className="text-neutral-200 font-semibold block mt-1">SC Kalki Drim Magazin SRL</span>
                  <span className="text-neutral-500 text-[10px] block mt-0.5">RO 620157</span>
                </p>
                <div className="pt-2">
                  <Link 
                    href={isEn ? "/en/legal" : "/legal"} 
                    className="text-[10px] text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    {t.legal}
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bara Subsol: Strategic Partner Zylaris Group London & Copyright */}
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
