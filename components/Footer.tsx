"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const navInfo = {
    ro: [
      { href: "/", label: "Acasă" },
      { href: "/servicii", label: "Servicii" },
      { href: "/pachete", label: "Pachete" },
      { href: "/portofoliu", label: "Portofoliu" },
      { href: "/despre", label: "Despre" },
      { href: "/contact", label: "Contact" },
      { href: "/legal", label: "Legal" },
      { href: "/confidentialitate", label: "Confidențialitate" },
    ],
    en: [
      { href: "/en", label: "Home" },
      { href: "/en/services", label: "Services" },
      { href: "/en/packages", label: "Packages" },
      { href: "/en/portfolio", label: "Portfolio" },
      { href: "/en/about", label: "About" },
      { href: "/en/contact", label: "Contact" },
      { href: "/en/legal", label: "Legal" },
      { href: "/en/privacy", label: "Privacy" },
    ]
  };

  const nav = isEn ? navInfo.en : navInfo.ro;

  // Hide global Reverb footer on individual showcase prototypes (they have their own tailored footers)
  const isShowcaseDemo = Boolean(
    (pathname.startsWith("/showcase/") && pathname !== "/showcase") ||
    (pathname.startsWith("/en/showcase/") && pathname !== "/en/showcase")
  );

  // Subsolul ține doar date (Alin, 14 nov 2026: „Minimalist… Pure data”; „partener și atât”). Fără paragrafe explicative,
  // fără a doua listă de lucrări (portofoliul are pagina lui).
  const t = {
    tagline1: isEn ? "No hidden costs" : "Fără costuri ascunse",
    tagline2: isEn ? "Clear steps" : "Pași clari",
    tagline3: isEn ? "Support after launch" : "Sprijin după lansare",
    communications: "Contact",
    hq: isEn ? "Office" : "Sediu",
    partner: isEn ? "Partner" : "Partener",
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white">
                  <Logo size={26} />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-[0.35em] uppercase text-neutral-900 dark:text-white font-mono">reverb.ro</div>
                  <div className="text-[13px] text-neutral-600 dark:text-neutral-400 font-mono">{t.clarity}</div>
                </div>
              </Link>
              <div className="mt-8 text-[13px] font-mono uppercase tracking-[0.14em] text-neutral-600 dark:text-neutral-500 border-l border-black/20 dark:border-white/20 pl-4 py-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{t.tagline1}</span>
                <span className="text-neutral-400 dark:text-neutral-700">•</span>
                <span>{t.tagline2}</span>
                <span className="text-neutral-400 dark:text-neutral-700">•</span>
                <span>{t.tagline3}</span>
              </div>
            </div>
          </div>

          {/* Coloana 2: Matricea de Navigare (Tab-uri Funcționale) */}
          <div className="p-5 sm:p-8 lg:p-14 lg:col-span-4 xl:col-span-5 flex flex-col bg-[#F1F2F4] dark:bg-[#1d2024]">
            
            <div className="flex-1 w-full font-mono">
              {/* Coloanele se aleg după lățimea coloanei, ca cel mai lung cuvânt („CONFIDENȚIALITATE”, 17 litere la 13 px ≈ 151 px
                  cu tot cu margini) să încapă pe un rând: o coloană pe telefoanele foarte înguste și între 1024 și 1279 px. */}
              <div className="grid grid-cols-1 gap-3 min-[340px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2">
                {nav.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="mech-magnetic mech-btn group flex justify-center items-center w-full rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-white/[0.06] px-2 py-2.5 text-neutral-900 dark:text-neutral-200 font-bold transition-all duration-300 hover:bg-[#111215] hover:text-[#ffffff] dark:hover:bg-white dark:hover:border-white dark:hover:text-black shadow-sm text-center"
                  >
                    <span className="min-w-0 text-[13px] leading-tight uppercase tracking-normal [overflow-wrap:anywhere]">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Coloana 3: Comunicații & Date Oficiale */}
          <div className="p-8 lg:p-14 lg:col-span-4 xl:col-span-3 flex flex-col justify-center bg-white dark:bg-[#16181b] font-mono text-[13px]">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-neutral-600 dark:text-neutral-500 border-b border-black/10 dark:border-white/10 pb-2">
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
                    data-umami-event="whatsapp-click"
                    data-umami-event-loc="subsol"
                    className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors font-bold"
                  >
                    <span data-no-translate>WhatsApp</span>
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
                        className="inline-flex items-center gap-1 rounded-full border border-black/15 dark:border-white/15 bg-white dark:bg-white/[0.04] px-2.5 py-1 text-[13px] font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        <span>{ch.label}</span>
                        <span>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-neutral-600 dark:text-neutral-500 border-b border-black/10 dark:border-white/10 pb-2">
                  {t.hq}
                </div>
                <div className="space-y-3">
                  {/* Birou România */}
                  <div>
                    <div data-no-translate className="text-[13px] uppercase font-bold text-neutral-900 dark:text-neutral-200 tracking-wider">
                      {company.brand}
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-400 text-[13px] leading-relaxed mt-0.5">
                      {isEn ? "Focșani, Vrancea, Romania" : "Focșani, Vrancea, România"}<br />
                      <span data-no-translate className="text-neutral-700 dark:text-neutral-400 block font-medium">
                        {`${company.legalName} · CUI ${company.cui} · ${company.regCom}`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-neutral-600 dark:text-neutral-500 border-b border-black/10 dark:border-white/10 pb-2">
                  {t.partner}
                </div>
                <div className="space-y-3">

                  {/* Partenerul din Londra - Zylaris Group London */}
                  <div>
                    <div className="text-[13px] uppercase font-bold text-neutral-900 dark:text-neutral-200 tracking-wider flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <span>Zylaris Group London</span>
                      <a href="https://zylarisgroup.com" target="_blank" rel="noopener noreferrer" className="font-medium normal-case tracking-normal text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-[13px]">zylarisgroup.com ↗</a>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-400 text-[13px] leading-relaxed mt-0.5">
                      167–169 Great Portland Street<br />
                      London, W1W 5PF, United Kingdom
                    </p>
                    <div className="mt-0.5 text-[13px] text-neutral-600 dark:text-neutral-400">
                      {/* `py-1`: ținta de atingere are cel puțin 24 px înălțime (rândurile de 19,5 px picau verificarea de accesibilitate). */}
                      <a href="mailto:office@zylarisgroup.com" className="flex items-center justify-between py-1 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <span>office@zylarisgroup.com</span>
                        <span className="text-neutral-500">↗</span>
                      </a>
                      <a href="tel:+442071838739" className="flex items-center justify-between py-1 hover:text-neutral-900 dark:hover:text-white transition-colors">
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

        {/* Bara de jos: drepturile (partenerul are blocul lui, deasupra) */}
        <div className="px-8 lg:px-14 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-end bg-[#E9EBEE] dark:bg-[#101214] font-mono text-[13px] border-t border-black/10 dark:border-white/10">
          {/* Legal / Manifest Inline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 gap-y-2 text-neutral-600 dark:text-neutral-400 text-[13px]">
            <span>&copy; 2026 KALKI DRIM MAGAZIN S.R.L.</span>
            <span className="hidden sm:inline text-neutral-400 dark:text-neutral-700">•</span>
            <span>{t.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
