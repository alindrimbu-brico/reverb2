import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";
import { TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/portofoliu", languages: { ro: "/portofoliu", en: "/en/portfolio", "x-default": "/portofoliu" } },
  title: "Portofoliu & Studii de Caz — Reverb Digital",
  description:
    "Studii de caz reale din ecosistem: magazine online lansate, conversii măsurate și optimizare pentru căutare generativă (GEO).",
};

const categoryPills: Record<string, string> = {
  "Magazine Online": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Branding & Marketing": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Marketing Digital": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function PortofoliuPage() {
  return (
    <PageEnter>
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
                <TrendingUp size={12} className="text-emerald-400" />
                <span>Validare Operațională & Rezultate</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
                Impact măsurabil. <br />
                <span className="text-neutral-400 font-light">Infrastructură, nu promisiuni.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                Fiecare proiect din ecosistemul nostru este fundamentat pe metrici clare: viteză sub 1 secundă, conversie fără fricțiune și volum zilnic de distribuție video.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
          <div className="space-y-12">
            {caseStudies.map((cs, idx) => (
              <Reveal key={cs.slug} delay={idx * 80}>
                <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-12 hover:border-white/25 transition-all">
                  <div className="grid gap-10 lg:grid-cols-12 items-start">
                    
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className={`rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider border ${categoryPills[cs.category] ?? "bg-white/10 text-neutral-300 border-white/10"}`}>
                          {cs.category}
                        </span>
                        {cs.tags.map((t) => (
                          <span key={t} className="rounded-full px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-white/5 text-neutral-400 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                        {cs.title}
                      </h2>

                      <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                        {cs.challenge}
                      </p>

                      <div className="space-y-2 mb-6">
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 border-b border-white/10 pb-2">
                          Abordare & Implementare
                        </div>
                        {cs.approach.slice(0, 4).map((appr, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                            <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{appr}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-black/50 border border-white/10 rounded-2xl p-6 md:p-8 font-mono">
                      <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 border-b border-white/10 pb-2">
                        Rezultate Măsurate
                      </div>
                      <div className="space-y-3 mb-6">
                        {cs.results.map((res, rIdx) => (
                          <div key={rIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-200">
                            {res}
                          </div>
                        ))}
                      </div>

                      {cs.quote && (
                        <div className="border-t border-white/10 pt-4 text-[11px] text-neutral-400 italic">
                          "{cs.quote.text}"
                          <div className="mt-2 text-[9px] uppercase tracking-widest text-neutral-500 not-italic">
                            — {cs.quote.author}, {cs.quote.role}
                          </div>
                        </div>
                      )}
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
            Vrei rezultate similare pentru afacerea ta?
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-md mx-auto font-light leading-relaxed">
            Analizăm gratuit arhitectura actuală și îți propunem pași conciși pentru îmbunătățirea ratei de conversie.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
          >
            <span>Solicită Audit Gratuit</span>
            <ArrowRight size={14} />
          </Link>
        </section>

      </div>
    </PageEnter>
  );
}
