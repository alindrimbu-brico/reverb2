"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Sparkles, 
  Video, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Clock, 
  Flame,
  Layers
} from "lucide-react";

interface PackagesShowcaseProps {
  isEn?: boolean;
}

export default function PackagesShowcaseInteractive({ isEn = false }: PackagesShowcaseProps) {
  const [activeId, setActiveId] = useState<string>("daily");

  const packagesData = [
    {
      id: "sprint",
      name: isEn ? "Launch Sprint" : "Sprint Lansare",
      badge: isEn ? "FAST TRACTION" : "TRACȚIUNE RAPIDĂ",
      price: "€390",
      period: isEn ? "/ month" : "/ lună",
      tagline: isEn 
        ? "Essential momentum for emerging brands and products." 
        : "Momentum esențial pentru branduri și produse în lansare.",
      desc: isEn
        ? "15 high-fidelity AI short videos per month (every 2 days) with synthetic voiceover, dynamic subtitles, and direct traffic funnel."
        : "15 clipuri video AI scurte / lună (la fiecare 2 zile), voiceover sintetic hiper-realist, subtitrări dinamice și direcționare trafic.",
      deliverables: isEn ? [
        "15 High-Definition Reels / Shorts / TikToks",
        "Cloned realistic voiceover & kinetic captions",
        "Targeted conversion hook & copy",
        "Multi-platform optimization (9:16 vertical)",
        "Zero filming time required from your team"
      ] : [
        "15 clipuri video verticale (TikTok, Reels, Shorts)",
        "Voiceover sintetic realist & subtitrări dinamice",
        "Scenarii optimizate pentru retenție și conversie",
        "Format adaptat 9:16 pentru toate platformele",
        "Zero timp pierdut cu filmări de către echipa ta"
      ],
      metricLabel: isEn ? "DELIVERY SPEED" : "TIMP LIVRARE",
      metricValue: isEn ? "48 HOURS" : "48 ORE",
      metricSub: isEn ? "First assets live" : "Primele clipuri active",
      icon: Clock,
      visualBadge: isEn ? "15 Short Videos" : "15 ClipurI / Lună",
      visualHeadline: isEn ? "Rapid Market Feedback" : "Validare Rapidă În Piață",
      accentColor: "from-amber-500/20 to-orange-500/10",
      pillBg: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      id: "daily",
      name: isEn ? "Daily Impact" : "Daily Impact",
      badge: isEn ? "RECOMMENDED • 0 EMPLOYEES" : "RECOMANDAT • 0 ANGAJAȚI",
      price: "€690",
      period: isEn ? "/ month" : "/ lună",
      tagline: isEn
        ? "Full organic domination: 1 fresh video produced and published every single day."
        : "Dominație organică totală: 1 clip video proaspăt produs și distribuit în fiecare zi.",
      desc: isEn
        ? "30 daily production videos monthly. Autonomous pipeline converting voice ideas into hooks, visual prompts, and polished assets."
        : "30 de clipuri video lunare (zilnic). Sistem complet autonom care transformă ideile în scenarii, cadre vizuale și clipuri finale.",
      deliverables: isEn ? [
        "30 High-Fidelity short videos (1 published daily)",
        "Custom Voice Cloning tailored to your brand",
        "Algorithmic retention hooks (3-second rules)",
        "Complete publishing schedule across 4 channels",
        "Weekly performance review & iterative scaling"
      ] : [
        "30 de clipuri scurte lunare (1 clip publicat zilnic)",
        "Clonare vocală personalizată pentru brandul tău",
        "Cârlige algoritmice testate pentru primele 3 secunde",
        "Distribuție optimizată pe 4 canale concomitent",
        "Rapoarte săptămânale de retenție și optimizare continuă"
      ],
      metricLabel: isEn ? "DAILY VOLUME" : "PRODUCȚIE ZILNICĂ",
      metricValue: "30 CLIPS",
      metricSub: isEn ? "100% Automated" : "100% Automatizat",
      icon: Flame,
      visualBadge: isEn ? "Daily Momentum" : "Prezență 24/7",
      visualHeadline: isEn ? "Full Organic Saturation" : "Saturare Organică Maximă",
      accentColor: "from-emerald-500/20 to-teal-500/10",
      pillBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      id: "magazin",
      name: isEn ? "Turnkey Online Store" : "Magazin Online Complet",
      badge: isEn ? "FIXED PRICE • HIGH VELOCITY" : "PREȚ FIX • VITEZĂ MAXIMĂ",
      price: "€1.500",
      period: isEn ? "fixed price" : "preț fix",
      tagline: isEn
        ? "Ultra-fast e-commerce infrastructure built natively for conversion and AI search."
        : "Infrastructură e-commerce ultra-rapidă construită nativ pentru conversie și căutare AI.",
      desc: isEn
        ? "Next.js / WooCommerce turnkey architecture: sub-1s page load, automated card checkout, instant invoicing (FGO/SmartBill), and courier sync."
        : "Arhitectură Next.js / WooCommerce la cheie: încărcare sub 1s, checkout securizat 1-step, facturare automată FGO/SmartBill și AWB curieri.",
      deliverables: isEn ? [
        "Sub-1.2s verified load speed on mobile & desktop",
        "Native GEO (Generative Engine Optimization) structured data",
        "1-step seamless checkout & card payment gateways",
        "Automated invoicing & direct courier dispatch integration",
        "Optional enterprise Payload CMS control panel"
      ] : [
        "Timp de încărcare verificat sub 1.2s pe mobil și desktop",
        "Date semantice structurate nativ pentru motoare AI (GEO)",
        "Flux de checkout 1-step fără fricțiune & procesator card",
        "Facturare automată instantanee și emitere AWB curier",
        "Opțiune panou de administrare modern cu Payload CMS"
      ],
      metricLabel: isEn ? "PAGE VELOCITY" : "VITEZĂ ÎNCĂRCARE",
      metricValue: "0.8 SEC",
      metricSub: isEn ? "Conversion Ready" : "Optimizat Conversie",
      icon: Zap,
      visualBadge: isEn ? "Turnkey E-Commerce" : "Magazin La Cheie",
      visualHeadline: isEn ? "Zero Friction Commerce" : "Vânzare Fără Fricțiune",
      accentColor: "from-blue-500/20 to-indigo-500/10",
      pillBg: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      id: "enterprise",
      name: isEn ? "Enterprise & Systems" : "Enterprise & Sisteme B2B",
      badge: isEn ? "ZYLARIS PARTNERSHIP" : "PARTENERIAT ZYLARIS",
      price: isEn ? "SLA / Custom" : "SLA / Personalizat",
      period: isEn ? "guaranteed SLA" : "SLA garantat",
      tagline: isEn
        ? "Scalable cloud architecture, autonomous AI agents, and corporate governance."
        : "Arhitectură cloud scalabilă, agenți autonomi AI și guvernanță internațională.",
      desc: isEn
        ? "Engineered in strategic alliance with Zylaris Group London. Dedicated B2B client portals, custom workflow automation, and bank-grade security."
        : "Dezvoltat în parteneriat strategic cu Zylaris Group London. Portaluri B2B pentru clienți, automatizări de fluxuri interne și securitate bancară.",
      deliverables: isEn ? [
        "Dedicated cloud infrastructure architecture",
        "Internal operational AI agent deployment",
        "Secure multi-tenant partner & supplier portals",
        "24/7 proactive monitoring & guaranteed SLA",
        "UK corporate governance via Zylaris Group London"
      ] : [
        "Arhitectură cloud dedicată de înaltă performanță",
        "Implementare agenți AI interni pentru fluxuri operaționale",
        "Portaluri securizate pentru parteneri și comenzi B2B",
        "Monitorizare proactivă 24/7 și SLA contractual garantat",
        "Guvernanță corporativă internațională prin Zylaris Group"
      ],
      metricLabel: isEn ? "SYSTEM UPTIME" : "DISPONIBILITATE",
      metricValue: "99.99%",
      metricSub: isEn ? "London SLA Shield" : "Garanție Zylaris UK",
      icon: ShieldCheck,
      visualBadge: isEn ? "Corporate Architecture" : "Arhitectură B2B",
      visualHeadline: isEn ? "Mission-Critical Systems" : "Sisteme Misiune Critică",
      accentColor: "from-purple-500/20 to-pink-500/10",
      pillBg: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  const current = packagesData.find((p) => p.id === activeId) || packagesData[1];
  const MetricIcon = current.icon;

  return (
    <section className="relative z-10 py-24 px-4 md:px-8 max-w-[1400px] mx-auto border-b border-white/10">
      
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-4 backdrop-blur-md">
            <Sparkles size={12} className="text-white" />
            <span>{isEn ? "Engineered Pricing" : "Pachete & Prețuri Fixe"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            {isEn ? "Structure. Speed. Predictability." : "Structură. Viteză. Predictibilitate."}
          </h2>
        </div>
        <p className="max-w-md text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
          {isEn 
            ? "Transparent fixed pricing with guaranteed delivery milestones. No hidden fees, no mandatory 12-month lock-in."
            : "Prețuri fixe transparente și termene garantate prin contract. Fără costuri ascunse și fără contracte obligatorii pe 12 luni."}
        </p>
      </div>

      {/* ── Interactive Switcher Pills ── */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2 border-b border-white/10">
        {packagesData.map((pkg) => {
          const isActive = pkg.id === activeId;
          return (
            <button
              key={pkg.id}
              onClick={() => setActiveId(pkg.id)}
              className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.25)] scale-[1.02]"
                  : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              <span>{pkg.name}</span>
              <span className={`text-[10px] opacity-70 ${isActive ? "text-black" : "text-neutral-500"}`}>
                {pkg.price}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Aerodynamic Main Showcase Frame (Vespa Urban Interactive Module) ── */}
      <div className="relative bg-gradient-to-br from-neutral-900/90 via-[#0c0d10] to-neutral-950 rounded-[40px] md:rounded-[56px] border border-white/15 p-8 md:p-14 lg:p-16 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
        
        {/* Glow Ambient Filter */}
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${current.accentColor} rounded-full mix-blend-screen opacity-20 blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3 transition-all duration-700`} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          
          {/* Stânga: Detalii Pachet & Beneficii */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className={`inline-block rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest border mb-4 ${current.pillBg}`}>
                {current.badge}
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl md:text-6xl font-light text-white tracking-tight font-sans">
                  {current.price}
                </span>
                <span className="text-xs md:text-sm text-neutral-400 font-mono">
                  {current.period}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                {current.tagline}
              </h3>

              <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed mb-8">
                {current.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 mb-10">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 border-b border-white/10 pb-2">
                  {isEn ? "Included Deliverables" : "Livrabile Incluse În Pachet"}
                </div>
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-300 font-light">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={isEn ? `/en/contact?pachet=${current.id}` : `/contact?pachet=${current.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 text-xs font-mono uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>{isEn ? "Select Package" : "Selectează Pachetul"}</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href={isEn ? "/en/packages" : "/pachete"}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white hover:border-white/30 transition-all"
              >
                {isEn ? "Compare All Features" : "Compară Toate Specificațiile"}
              </Link>
            </div>
          </div>

          {/* Dreapta: Mecanica Vespa Urban (Fereastra Mare Înclinată + Căsuța Mică Flotantă) */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[460px] md:h-[500px] flex items-center justify-center pt-4 sm:pt-0">
            
            {/* ── Fereastra Mare Înclinată cu depth & hover ── */}
            <div className="w-full h-full relative rounded-[36px] md:rounded-[44px] border border-white/20 bg-gradient-to-b from-neutral-800/90 via-neutral-900/95 to-[#0b0c0e] shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 p-6 md:p-8 flex flex-col justify-between">
              
              {/* Window Header Decorator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  REVERB://SYSTEMS/{current.id.toUpperCase()}
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                  v2.6 LIVE
                </span>
              </div>

              {/* Dynamic Mockup Body */}
              <div className="py-6 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 shadow-inner">
                  <Layers size={32} strokeWidth={1.5} className="text-white" />
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-1">
                  {current.visualBadge}
                </div>
                <h4 className="text-2xl md:text-3xl font-light text-white tracking-tight max-w-xs mb-3">
                  {current.visualHeadline}
                </h4>
                <p className="text-xs text-neutral-400 max-w-sm font-light leading-relaxed">
                  {isEn
                    ? "Full architectural precision deployed directly into live production with dedicated analytics and SLA."
                    : "Precizie inginerească livrată direct în producție live cu monitorizare dedicată și SLA ferm."}
                </p>
              </div>

              {/* Window Footer Status */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                <span>GEO INDEX: ACTIVE</span>
                <span className="text-emerald-400">● VERIFIED STACK</span>
              </div>
            </div>

            {/* ── CĂSUȚA MICĂ FLOTANTĂ CU JOC SUS-JOS (Inspirată 1:1 din Vespa Urban) ── */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 bg-white text-black p-5 sm:p-6 rounded-[28px] md:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 animate-bounce border border-neutral-200 z-30 transition-all duration-500">
              <div className="bg-neutral-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                <MetricIcon size={22} className="text-white" />
              </div>
              <div>
                <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                  {current.metricLabel}
                </div>
                <div className="font-sans font-bold text-lg sm:text-2xl text-neutral-950 tracking-tight leading-none mt-0.5">
                  {current.metricValue}
                </div>
                <div className="text-[9px] font-mono text-neutral-500 mt-0.5">
                  {current.metricSub}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
