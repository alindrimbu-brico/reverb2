import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ShoppingCart, Zap, CheckCircle2, ShieldCheck, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/magazine-online", languages: { ro: "/magazine-online", en: "/en/online-store", "x-default": "/magazine-online" } },
  title: "Arhitectură Magazine Online — Reverb Digital",
  description:
    "Construim magazine online de înaltă viteză optimizate pentru conversie, căutare AI (GEO) și integrare cu procesatori de plăți și curieri.",
};

const modules = [
  {
    category: "Structură & Experiență",
    items: [
      "Arhitectură dinamică categorii și filtre instantanee",
      "Pagini de produs cu retenție cognitivă ridicată",
      "Căutare semantică internă cu răspuns sub 100ms",
      "Optimizare nativă mobil-first fără lag de randare",
    ],
  },
  {
    category: "Checkout & Conversie",
    items: [
      "Proces de checkout 1-step fără formulare redundante",
      "Elemente clare de încredere (livrare rapidă, retur, garanție)",
      "Recuperare automată coșuri abandonate prin email/SMS",
      "Timp total de încărcare verificat sub 1.2 secunde",
    ],
  },
  {
    category: "Plăți & Automatizare Operațională",
    items: [
      "Integrare nativă carduri (Netopia, Stripe, EuPlătesc)",
      "Emitere automată facturi fiscale (FGO / SmartBill)",
      "Generare instantanee AWB-uri curieri (DPD, Fan Courier, Sameday)",
      "Sincronizare stocuri în timp real și alerte de prag",
    ],
  },
  {
    category: "AI Search & Căutare Generativă (GEO)",
    items: [
      "Etichetare semantică completă JSON-LD pentru fiecare produs",
      "Optimizat pentru ChatGPT, Perplexity și Gemini shopping agents",
      "Conținut video scurt demonstrativ integrat direct în pagină",
      "Panou de control modern (Next.js / Payload CMS / WooCommerce)",
    ],
  },
];

export default function MagazineOnlinePage() {
  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <ShoppingCart size={12} className="text-white" />
              <span>Infrastructură E-Commerce Nativă</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              Magazine construite <br />
              <span className="text-neutral-400 font-light">pentru vânzare, nu doar design.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              Arhitectură de mare viteză pe Next.js și WooCommerce. Checkout fluid, plăți securizate, facturare automată și optimizare nativă pentru căutarea AI.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?pachet=magazin-complet"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>Demarează Proiectul (€1.500)</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/pachete"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white hover:border-white/40 transition-all"
              >
                Vezi Toate Pachetele
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
        <Reveal>
          <div className="mb-12">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">Specificații Tehnice</div>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              Ce livrăm în fiecare magazin online
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {modules.map((mod, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 hover:border-white/25 transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-mono uppercase tracking-wider text-white mb-6 border-b border-white/10 pb-3">
                    {mod.category}
                  </h3>
                  <div className="space-y-4">
                    {mod.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-300 font-light">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
          Pregătit pentru un magazin cu adevărat rapid?
        </h2>
        <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-md mx-auto font-light leading-relaxed">
          Preț ferm de €1.500, termen de livrare 14–30 de zile și verificare completă a tuturor fluxurilor înainte de lansare.
        </p>
        <Link
          href="/contact?pachet=magazin-complet"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
        >
          <span>Alege Pachetul Magazin Complet</span>
          <ArrowRight size={14} />
        </Link>
      </section>

    </div>
  );
}
