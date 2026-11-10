"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import InstallPWA from "@/components/InstallPWA";

const navInfo = {
  ro: [
    { href: "/servicii", label: "Servicii" },
    { href: "/pachete", label: "Pachete" },
    { href: "/showcase", label: "Portofoliu" },
    { href: "/despre", label: "Despre" },
    { href: "/contact", label: "Contact" },
  ],
  en: [
    { href: "/en/services", label: "Services" },
    { href: "/en/packages", label: "Packages" },
    { href: "/en/showcase", label: "Portfolio" },
    { href: "/en/about", label: "About" },
    { href: "/en/contact", label: "Contact" },
  ]
};

export default function Header() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isEn, setIsEn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setIsEn(pathname.startsWith("/en"));
  }, [pathname]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("reverb_theme") as "dark" | "light" | null;
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("reverb_theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

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

  // Hide global Reverb header on individual showcase prototypes (after all hooks)
  const isShowcaseDemo = Boolean(
    (pathname.startsWith("/showcase/") && pathname !== "/showcase") ||
    (pathname.startsWith("/en/showcase/") && pathname !== "/en/showcase")
  );
  if (isShowcaseDemo) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none">
      <div 
        className={`w-full max-w-6xl rounded-full border bg-[#f5f1ea]/90 dark:bg-[#0a0a0c]/85 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all duration-500 shadow-sm ${
          scrolled 
            ? "border-[#1d2731]/15 dark:border-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 sm:py-2.5 max-w-5xl" 
            : "border-[#1d2731]/8 dark:border-neutral-800/40 py-2.5 sm:py-3.5"
        }`}
      >
        {/* Left: Logo and Brand Name */}
        <div className="flex-1 flex justify-start items-center min-w-0">
          <Link href={isEn ? "/en" : "/"} className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#1d2731]/12 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(29,39,49,0.15)] group-hover:-translate-y-0.5 text-[#1d2731] dark:text-white">
              <Logo size={26} />
            </div>
            <div className="hidden xs:block sm:block text-left">
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#1d2731] dark:text-neutral-100 transition-colors duration-300">reverb.ro</div>
              <div className="text-[8px] uppercase tracking-widest font-semibold text-[#1d2731]/50 dark:text-neutral-400">{translations.clarity}</div>
            </div>
          </Link>
        </div>

        {/* Center: centered navigation menu (visible on desktop >= 1024px to prevent tablet clipping) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm shrink-0">
          {nav.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`mech-nav-link transition-all duration-300 text-[10px] uppercase tracking-widest font-bold relative py-1 px-2 ${
                  isActive 
                    ? "text-[#1d2731] dark:text-white" 
                    : "text-[#1d2731]/50 dark:text-neutral-400 hover:text-[#1d2731] dark:hover:text-white"
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

        {/* Right: CTA button, One-time App Install, Theme Toggle, Language Switcher, Hamburger */}
        <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3 shrink-0">
          {!pathname.startsWith("/studio") && (
            <InstallPWA mode="site" compact className="hidden sm:inline-flex" />
          )}
          <Link
            href={isEn ? "/en/contact" : "/contact"}
            className="mech-magnetic mech-btn hidden xl:inline-flex items-center justify-center rounded-full bg-[#1d2731] dark:bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#f5f1ea] dark:text-neutral-900 transition-all duration-300 shadow-[0_4px_12px_rgba(29,39,49,0.15)] hover:shadow-[0_8px_20px_rgba(29,39,49,0.3)] dark:shadow-none shrink-0"
          >
            {translations.start}
          </Link>

          {/* Minimalist Theme Toggle (Dark / Light) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="mech-magnetic flex items-center justify-center h-8 w-8 rounded-full border border-[#1d2731]/10 dark:border-white/10 bg-white/60 dark:bg-neutral-850/80 text-[#1d2731] dark:text-neutral-200 transition-all duration-300 hover:scale-105 shrink-0"
            title={theme === "dark" ? "Comută pe tema Light" : "Comută pe tema Dark"}
          >
            <span className="text-xs">{theme === "dark" ? "☾" : "☼"}</span>
          </button>

          {/* Discreet Language Selector with shrink-0 so it never clips off-screen */}
          <div className="flex bg-[#1d2731]/5 dark:bg-neutral-850/80 rounded-full p-[2px] border border-[#1d2731]/10 dark:border-white/10 items-center shrink-0">
             <button 
               onClick={() => handleLangChange("ro")} 
               aria-label="Limba Română"
               className={`px-2 py-0.5 text-[8px] uppercase tracking-widest font-extrabold rounded-full transition-all duration-300 ${!isEn ? 'bg-white dark:bg-neutral-700 text-[#1d2731] dark:text-white shadow-sm' : 'text-[#1d2731]/40 dark:text-neutral-400 hover:text-[#1d2731]/70'}`}
             >
               RO
             </button>
             <button 
               onClick={() => handleLangChange("en")} 
               aria-label="English Language"
               className={`px-2 py-0.5 text-[8px] uppercase tracking-widest font-extrabold rounded-full transition-all duration-300 ${isEn ? 'bg-white dark:bg-neutral-700 text-[#1d2731] dark:text-white shadow-sm' : 'text-[#1d2731]/40 dark:text-neutral-400 hover:text-[#1d2731]/70'}`}
             >
               EN
             </button>
          </div>

          {/* Mobile & Tablet Menu Button (< 1024px) */}
          <button
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#1d2731]/10 dark:border-white/10 bg-white/60 dark:bg-neutral-850/80 lg:hidden transition-transform duration-300 hover:scale-105 pointer-events-auto shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-4 bg-[#1d2731] dark:bg-white transition-all ${open ? "translate-y-px rotate-45" : "-translate-y-1"}`} />
            <span className={`absolute block h-px w-4 bg-[#1d2731] dark:bg-white transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-px w-4 bg-[#1d2731] dark:bg-white transition-all ${open ? "-translate-y-px -rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Dropdown from the floating capsule */}
      {open && (
        <div className="w-full max-w-6xl mt-2 px-3 sm:px-4 pointer-events-auto lg:hidden">
          <div className="rounded-3xl border border-[#1d2731]/10 dark:border-neutral-800/80 bg-[#f5f1ea]/95 dark:bg-[#0a0a0c]/95 backdrop-blur-lg p-6 shadow-2xl space-y-4">
            {nav.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  pathname === href ? "text-[#1d2731] dark:text-white" : "text-[#1d2731]/60 dark:text-neutral-400"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href={isEn ? "/en/contact" : "/contact"}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#1d2731] dark:bg-white py-3 text-xs font-bold uppercase tracking-widest text-[#f5f1ea] dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              {translations.start}
            </Link>
            <div className="pt-2 flex justify-center">
              <InstallPWA mode="site" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
