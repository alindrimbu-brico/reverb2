"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const navInfo = {
  ro: [
    { href: "/despre", label: "Despre" },
    { href: "/servicii", label: "Servicii" },
    { href: "/showcase", label: "Showcase" },
  ],
  en: [
    { href: "/en/about", label: "About" },
    { href: "/en/services", label: "Services" },
    { href: "/en/showcase", label: "Showcase" },
  ]
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isEn, setIsEn] = useState(false);

  useEffect(() => {
    setIsEn(pathname.startsWith("/en"));
  }, [pathname]);

  const handleLangChange = (lang: "ro" | "en") => {
    localStorage.setItem("reverb_lang", lang);
    setIsEn(lang === "en");
    
    const routesRoToEn: Record<string, string> = {
      "/": "/en",
      "/despre": "/en/about",
      "/servicii": "/en/services",
      "/showcase": "/en/showcase",
      "/contact": "/en/contact",
      "/portal": "/en/portal",
      "/magazine-online": "/en/online-store",
      "/pachete": "/en/packages",
      "/portofoliu": "/en/portfolio",
      "/blog": "/en/blog",
      "/legal": "/en/legal",
      "/checkout": "/en/checkout",
      "/nevronix": "/en/nevronix",
      "/ai-humans": "/en/ai-humans"
    };

    const routesEnToRo: Record<string, string> = {
      "/en": "/",
      "/en/about": "/despre",
      "/en/services": "/servicii",
      "/en/showcase": "/showcase",
      "/en/contact": "/contact",
      "/en/portal": "/portal",
      "/en/online-store": "/magazine-online",
      "/en/packages": "/pachete",
      "/en/portfolio": "/portofoliu",
      "/en/blog": "/blog",
      "/en/legal": "/legal",
      "/en/checkout": "/checkout",
      "/en/nevronix": "/nevronix",
      "/en/ai-humans": "/ai-humans"
    };

    if (lang === "en") {
      if (pathname.startsWith("/en")) return; // Already in English
      let targetPath = "/en";
      
      if (routesRoToEn[pathname]) {
        targetPath = routesRoToEn[pathname];
      } else {
        const sortedKeys = Object.keys(routesRoToEn).filter(k => k !== '/').sort((a, b) => b.length - a.length);
        const prefix = sortedKeys.find(k => pathname.startsWith(k + '/'));
        if (prefix) {
          targetPath = pathname.replace(prefix, routesRoToEn[prefix]);
        } else {
          targetPath = "/en" + (pathname === "/" ? "" : pathname);
        }
      }
      router.push(targetPath);
    } else {
      if (!pathname.startsWith("/en")) return; // Already in Romanian
      let targetPath = "/";
      
      if (routesEnToRo[pathname]) {
        targetPath = routesEnToRo[pathname];
      } else {
        const sortedKeys = Object.keys(routesEnToRo).filter(k => k !== '/en').sort((a, b) => b.length - a.length);
        const prefix = sortedKeys.find(k => pathname.startsWith(k + '/'));
        if (prefix) {
          targetPath = pathname.replace(prefix, routesEnToRo[prefix]);
        } else {
          targetPath = pathname.replace("/en", "") || "/";
        }
      }
      router.push(targetPath);
    }
  };

  const nav = isEn ? navInfo.en : navInfo.ro;
  
  const translations = {
    clarity: isEn ? "Clarity & Structure" : "Claritate & Structură",
    client: isEn ? "Client Login" : "Client Login",
    start: isEn ? "Start Project" : "Start Proiect"
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1d2731]/8 bg-[#f5f1ea]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/12 bg-white/70 shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(29,39,49,0.15)] group-hover:-translate-y-0.5 text-[#1d2731]">
            <Logo size={28} />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.35em] uppercase text-[#1d2731] transition-colors duration-300">reverb.ro</div>
            <div className="text-[9px] uppercase tracking-widest font-bold text-[#1d2731]/50">{translations.clarity}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map(({ href, label }) => {
            const isXiaolong = href === "/xiaolong";
            return (
              <Link
                key={label}
                href={href}
                className={`transition-all duration-300 text-xs uppercase tracking-widest font-semibold ${
                  isXiaolong
                    ? "px-4 py-2 rounded-full bg-[#208b53] text-white shadow-md hover:shadow-lg hover:scale-105 float-button"
                    : `hover:text-[#1d2731] ${
                        pathname === href ? "text-[#1d2731]" : "text-[#1d2731]/50"
                      }`
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/portal"
            className="ml-2 inline-flex items-center justify-center rounded-full border border-[#1d2731] bg-transparent hover:bg-[#1d2731]/5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1d2731] transition-all duration-300 hover:-translate-y-0.5"
          >
            {translations.client}
          </Link>
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#1d2731] px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#f5f1ea] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(29,39,49,0.2)] hover:shadow-[0_10px_20px_rgba(29,39,49,0.4)]"
          >
            {translations.start}
          </Link>

          {/* Tab Discret RO | EN */}
          <div className="flex bg-[#1d2731]/5 rounded-full p-[3px] border border-[#1d2731]/10 ml-2 items-center shadow-inner">
             <button onClick={() => handleLangChange("ro")} className={`px-2.5 py-1 text-[9px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 ${!isEn ? 'bg-white text-[#1d2731] shadow-sm' : 'text-[#1d2731]/30 hover:text-[#1d2731]/70'}`}>RO</button>
             <button onClick={() => handleLangChange("en")} className={`px-2.5 py-1 text-[9px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 ${isEn ? 'bg-white text-[#1d2731] shadow-sm' : 'text-[#1d2731]/30 hover:text-[#1d2731]/70'}`}>EN</button>
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* Tab Discret RO | EN pe mobil */}
          <div className="flex bg-[#1d2731]/5 rounded-full p-[3px] border border-[#1d2731]/10 items-center shadow-inner">
             <button onClick={() => handleLangChange("ro")} className={`px-2 py-1 text-[9px] uppercase tracking-widest font-bold rounded-full transition-all ${!isEn ? 'bg-white text-[#1d2731] shadow-sm' : 'text-[#1d2731]/30'}`}>RO</button>
             <button onClick={() => handleLangChange("en")} className={`px-2 py-1 text-[9px] uppercase tracking-widest font-bold rounded-full transition-all ${isEn ? 'bg-white text-[#1d2731] shadow-sm' : 'text-[#1d2731]/30'}`}>EN</button>
          </div>
          
          <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/10 bg-white/60 md:hidden transition-transform duration-300 hover:scale-105"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-[#1d2731] transition-all ${open ? "translate-y-px rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute block h-px w-5 bg-[#1d2731] transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-px w-5 bg-[#1d2731] transition-all ${open ? "-translate-y-px -rotate-45" : "translate-y-1"}`} />
        </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#1d2731]/8 bg-[#f5f1ea] px-6 py-4 md:hidden">
          {nav.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm uppercase tracking-widest font-bold transition-colors ${
                pathname === href ? "text-[#1d2731]" : "text-[#1d2731]/60"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/portal"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#1d2731] py-3 text-xs font-bold uppercase tracking-widest text-[#1d2731] hover:bg-[#1d2731]/5 transition-colors"
          >
            {translations.client}
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#1d2731] py-3 text-xs font-bold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
          >
            {translations.start}
          </Link>
        </div>
      )}
    </header>
  );
}
