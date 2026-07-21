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
    { href: "/clarity-architecture", label: "Claritate" },
  ],
  en: [
    { href: "/en/about", label: "About" },
    { href: "/en/services", label: "Services" },
    { href: "/en/showcase", label: "Showcase" },
    { href: "/clarity-architecture", label: "Clarity" },
  ]
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isEn, setIsEn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsEn(pathname.startsWith("/en"));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      if (pathname.startsWith("/en")) return;
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
      if (!pathname.startsWith("/en")) return;
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
    start: isEn ? "Start Project" : "Start Proiect"
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 pointer-events-none">
      <div 
        className={`w-full max-w-6xl rounded-full border bg-[#f5f1ea]/85 dark:bg-[#0a0a0c]/80 backdrop-blur-md px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-500 shadow-sm ${
          scrolled 
            ? "border-[#1d2731]/15 dark:border-neutral-850 shadow-[0_12px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2.5 max-w-5xl" 
            : "border-[#1d2731]/8 dark:border-neutral-800/30 py-3.5"
        }`}
      >
        {/* Left: Logo and Brand Name */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d2731]/12 bg-white/70 shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(29,39,49,0.15)] group-hover:-translate-y-0.5 text-[#1d2731]">
              <Logo size={28} />
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#1d2731] dark:text-neutral-100 transition-colors duration-300">reverb.ro</div>
              <div className="text-[8px] uppercase tracking-widest font-semibold text-[#1d2731]/40 dark:text-neutral-500">{translations.clarity}</div>
            </div>
          </Link>
        </div>

        {/* Center: centered navigation menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`transition-all duration-300 text-[10px] uppercase tracking-widest font-bold relative py-1 px-2 ${
                  isActive 
                    ? "text-[#1d2731] dark:text-white" 
                    : "text-[#1d2731]/45 dark:text-neutral-400 hover:text-[#1d2731] dark:hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1d2731] dark:bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA button and language switcher */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#1d2731] dark:bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#f5f1ea] dark:text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(29,39,49,0.15)] hover:shadow-[0_8px_20px_rgba(29,39,49,0.3)] dark:shadow-none"
          >
            {translations.start}
          </Link>

          {/* Discreet Language Selector */}
          <div className="flex bg-[#1d2731]/5 dark:bg-neutral-800/40 rounded-full p-[2px] border border-[#1d2731]/10 dark:border-neutral-800/30 items-center">
             <button onClick={() => handleLangChange("ro")} className={`px-2 py-0.5 text-[8px] uppercase tracking-widest font-extrabold rounded-full transition-all duration-300 ${!isEn ? 'bg-white dark:bg-neutral-700 text-[#1d2731] dark:text-white shadow-sm' : 'text-[#1d2731]/30 dark:text-neutral-500 hover:text-[#1d2731]/60'}`}>RO</button>
             <button onClick={() => handleLangChange("en")} className={`px-2 py-0.5 text-[8px] uppercase tracking-widest font-extrabold rounded-full transition-all duration-300 ${isEn ? 'bg-white dark:bg-neutral-700 text-[#1d2731] dark:text-white shadow-sm' : 'text-[#1d2731]/30 dark:text-neutral-500 hover:text-[#1d2731]/60'}`}>EN</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1d2731]/10 dark:border-neutral-800/40 bg-white/60 dark:bg-neutral-900/60 md:hidden transition-transform duration-300 hover:scale-105 pointer-events-auto"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-4 bg-[#1d2731] dark:bg-white transition-all ${open ? "translate-y-px rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute block h-px w-4 bg-[#1d2731] dark:bg-white transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-px w-4 bg-[#1d2731] dark:bg-white transition-all ${open ? "-translate-y-px -rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown from the floating capsule */}
      {open && (
        <div className="w-full max-w-6xl mt-2 px-4 pointer-events-auto md:hidden">
          <div className="rounded-3xl border border-[#1d2731]/10 dark:border-neutral-800/50 bg-[#f5f1ea]/95 dark:bg-[#0a0a0c]/95 backdrop-blur-lg p-6 shadow-2xl space-y-4">
            {nav.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  pathname === href ? "text-[#1d2731] dark:text-white" : "text-[#1d2731]/50 dark:text-neutral-400"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#1d2731] dark:bg-white py-3 text-xs font-bold uppercase tracking-widest text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              {translations.start}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
