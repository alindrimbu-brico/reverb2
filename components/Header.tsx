"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import { Grid, X, ArrowUpRight, ChevronRight, Layers, Sparkles } from "lucide-react";

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
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [matrixOpen, setMatrixOpen] = useState(false);
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
    start: isEn ? "Start Project" : "Start Proiect",
    ecosystem: isEn ? "Matrix & Ecosystem" : "Ecosistem & Matrice",
    close: isEn ? "Close" : "Închide",
    liveSystems: isEn ? "Live Production Systems" : "Sisteme Live În Producție",
    corePages: isEn ? "Core Platform Architecture" : "Arhitectură & Pagini Cheie",
    verticals: isEn ? "Industry Vertical Showcases" : "Showcase-uri Industriale",
    legalBlog: isEn ? "Knowledge & Legal" : "Articole & Juridic"
  };

  const liveEcosystem = [
    { name: "Bricolando.ro", desc: isEn ? "Flagship e-commerce" : "Magazin online unelte & echipamente", href: "https://bricolando.ro", badge: "LIVE" },
    { name: "RaftPlin.ro", desc: isEn ? "Second store" : "Platformă e-commerce modernă", href: "https://raftplin.ro", badge: "LIVE" },
    { name: "Kalki.work", desc: isEn ? "AI voice systems" : "Atelier digital & tehnologii vocale AI", href: "https://kalki.work", badge: "LIVE" },
    { name: "Kalki.nexus", desc: isEn ? "Digital publishing" : "Publicație culturală & cărți digitale", href: "https://kalki.nexus", badge: "LIVE" },
    { name: "Numerarium.app", desc: isEn ? "Dynamic algorithm app" : "Aplicație dinamică de calcul analitic", href: "https://numerarium.app", badge: "LIVE" },
  ];

  const industryVerticals = [
    { name: "Vespa Urban (Veloce)", href: "/showcase/vespa-urban", desc: isEn ? "Aerodynamic Mobility" : "Mobilitate Urbană & Micro-Card" },
    { name: "Jim Curtis Neuroscience", href: "/showcase/jim-curtis", desc: isEn ? "Cognitive Clinical" : "Neuroștiință & Hypno-Coaching" },
    { name: "Xiaolong Packaging", href: "/showcase/xiaolong", desc: isEn ? "Industrial B2B" : "Design corporativ matur B2B" },
    { name: "Florarte Textile", href: "/showcase/florarte", desc: isEn ? "Pastel Atelier" : "Atelier floral & estetică textilă" },
    { name: "Architecture Studio", href: "/showcase/architecture", desc: isEn ? "Monolithic Grid" : "Arhitectură bazată pe proporția 1.618" },
  ];

  const coreLinks = isEn ? [
    { label: "Home", href: "/en" },
    { label: "Services", href: "/en/services" },
    { label: "Packages & Pricing", href: "/en/packages" },
    { label: "Online Store Architecture", href: "/en/online-store" },
    { label: "Case Studies / Portfolio", href: "/en/portfolio" },
    { label: "Full Industry Matrix", href: "/en/showcase" },
    { label: "About Reverb Digital", href: "/en/about" },
    { label: "Contact & Audit", href: "/en/contact" },
  ] : [
    { label: "Acasă", href: "/" },
    { label: "Servicii & Capabilități", href: "/servicii" },
    { label: "Pachete & Prețuri", href: "/pachete" },
    { label: "Arhitectură Magazine Online", href: "/magazine-online" },
    { label: "Studii de Caz / Portofoliu", href: "/portofoliu" },
    { label: "Index Complet Matrice (Showcase)", href: "/showcase" },
    { label: "Despre Reverb Digital", href: "/despre" },
    { label: "Contact & Solicitare Audit", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 pointer-events-none">
        <div 
          className={`w-full max-w-6xl rounded-full border bg-[#0a0b0e]/85 backdrop-blur-md px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-500 shadow-sm border-white/10 ${
            scrolled 
              ? "py-2.5 max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-white/20 bg-[#070809]/95" 
              : "py-3.5"
          }`}
        >
          {/* Left: Logo and Brand Name */}
          <div className="flex-1 flex justify-start">
            <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-sm transition-all duration-500 group-hover:scale-105 text-white">
                <Logo size={26} />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-white font-mono">reverb.ro</div>
                <div className="text-[8px] uppercase tracking-widest font-semibold text-neutral-400">{translations.clarity}</div>
              </div>
            </Link>
          </div>

          {/* Center: centered navigation menu */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {nav.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`transition-all duration-300 text-[10px] font-mono uppercase tracking-widest font-bold relative py-1 px-2 ${
                    isActive 
                      ? "text-white" 
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA button, Matrix Portal Trigger & language switcher */}
          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3">
            
            {/* Ecosistem & Matrice Trigger */}
            <button
              onClick={() => setMatrixOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-neutral-300 hover:text-white hover:bg-white/10 transition-all pointer-events-auto"
              title={translations.ecosystem}
            >
              <Grid size={11} className="text-neutral-400" />
              <span className="hidden sm:inline">{translations.ecosystem}</span>
            </button>

            {/* CTA Start Project */}
            <Link
              href={isEn ? "/en/contact" : "/contact"}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-neutral-200 pointer-events-auto shadow-md"
            >
              {translations.start}
            </Link>

            {/* Language Selector */}
            <div className="flex bg-neutral-900/80 rounded-full p-[2px] border border-white/10 items-center pointer-events-auto">
               <button 
                onClick={() => handleLangChange("ro")} 
                className={`px-2 py-0.5 text-[8px] font-mono uppercase tracking-widest font-extrabold rounded-full transition-all duration-300 ${!isEn ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}
               >
                 RO
               </button>
               <button 
                onClick={() => handleLangChange("en")} 
                className={`px-2 py-0.5 text-[8px] font-mono uppercase tracking-widest font-extrabold rounded-full transition-all duration-300 ${isEn ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}
               >
                 EN
               </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden transition-transform duration-300 hover:scale-105 pointer-events-auto text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-4 bg-white transition-all ${open ? "translate-y-px rotate-45" : "-translate-y-1"}`} />
              <span className={`absolute block h-px w-4 bg-white transition-all ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-px w-4 bg-white transition-all ${open ? "-translate-y-px -rotate-45" : "translate-y-1"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Quick Dropdown */}
        {open && (
          <div className="w-full max-w-6xl mt-2 px-4 pointer-events-auto lg:hidden">
            <div className="rounded-3xl border border-white/15 bg-[#070809]/95 backdrop-blur-xl p-6 shadow-2xl space-y-3 font-mono">
              {nav.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                    pathname === href ? "text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}

              <button
                onClick={() => { setOpen(false); setMatrixOpen(true); }}
                className="w-full text-left py-2 text-xs uppercase tracking-widest font-bold text-amber-400 flex items-center justify-between"
              >
                <span>{translations.ecosystem}</span>
                <Grid size={14} />
              </button>

              <Link
                href={isEn ? "/en/contact" : "/contact"}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white py-3 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-neutral-200 transition-all shadow-md"
              >
                {translations.start}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ── FULL-SCREEN ARCHITECTURAL MATRIX & ECOSYSTEM PORTAL ── */}
      {matrixOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#0b0c0f] to-[#050608] border border-white/20 rounded-[36px] md:rounded-[48px] p-6 sm:p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.8)] text-neutral-100 font-sans">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 font-mono">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                  <Grid size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white font-bold">{translations.ecosystem}</div>
                  <div className="text-[10px] text-neutral-500">REVERB DIGITAL // GLOBAL MATRIX DIRECTORY</div>
                </div>
              </div>
              <button
                onClick={() => setMatrixOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest font-mono"
              >
                <span>{translations.close}</span>
                <X size={14} />
              </button>
            </div>

            {/* Matrix 3-Column Architectural Directory */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              
              {/* Column 1: Core Pages */}
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-400 border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                  <Layers size={12} className="text-white" />
                  <span>{translations.corePages}</span>
                </div>
                <div className="space-y-2">
                  {coreLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMatrixOpen(false)}
                      className="group flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all text-xs font-mono text-neutral-300 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={12} className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                  <Link
                    href={isEn ? "/en/blog" : "/blog"}
                    onClick={() => setMatrixOpen(false)}
                    className="group flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    <span>{isEn ? "Blog & AI Research" : "Blog & Cercetare AI"}</span>
                    <ChevronRight size={12} className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    href={isEn ? "/en/legal" : "/legal"}
                    onClick={() => setMatrixOpen(false)}
                    className="group flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    <span>{isEn ? "Corporate Data & Legal" : "Date Juridice & Legal"}</span>
                    <ChevronRight size={12} className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Column 2: Live Production Systems */}
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-400 border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                  <Sparkles size={12} className="text-emerald-400" />
                  <span>{translations.liveSystems}</span>
                </div>
                <div className="space-y-3">
                  {liveEcosystem.map((sys) => (
                    <a
                      key={sys.name}
                      href={sys.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-3.5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/10 hover:border-white/30 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                          {sys.name}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400">
                          <span>{sys.badge}</span>
                          <ArrowUpRight size={12} />
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                        {sys.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 3: Industry Showcases */}
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-400 border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                  <Grid size={12} className="text-neutral-400" />
                  <span>{translations.verticals}</span>
                </div>
                <div className="space-y-2.5">
                  {industryVerticals.map((v) => (
                    <Link
                      key={v.name}
                      href={v.href}
                      onClick={() => setMatrixOpen(false)}
                      className="group block p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-neutral-200 group-hover:text-white">
                        <span>{v.name}</span>
                        <ChevronRight size={12} className="text-neutral-500 group-hover:text-white transition-all" />
                      </div>
                      <div className="text-[10px] text-neutral-500 font-sans mt-0.5">
                        {v.desc}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Link
                      href={isEn ? "/en/showcase" : "/showcase"}
                      onClick={() => setMatrixOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white underline underline-offset-4"
                    >
                      <span>{isEn ? "View All 21 Showcases →" : "Vezi Toate Cele 21 de Showcase-uri →"}</span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Bottom Summary */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-neutral-500">
              <div>
                Surya Group Holding • Reverb Digital AI Architecture • Strategic Partner Zylaris Group London
              </div>
              <div className="text-neutral-400">
                Direct Contact: +40 767 235 693
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
