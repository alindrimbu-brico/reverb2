import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { packages, VAT_NOTE } from "@/lib/packages";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/contact", languages: { ro: "/contact", en: "/en/contact", "x-default": "/contact" } },
  title: "Contact — Reverb Digital",
  description:
    "Discută proiectul tău cu echipa Reverb Digital. Audit tehnic, ofertă fermă și termen precis de livrare.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] light:opacity-[0.075]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.1em] sm:tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>Inițiere Proiect & Audit Tehnic</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Hai să vorbim despre afacerea ta.</Linie>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Stabilim obiectivul, arhitectura optimă și termenul de implementare din prima discuție. Fără obligații sau presiune.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main content */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28 border-b border-white/10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
          
          {/* Left Column: Direct Info */}
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-8 md:p-10">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3">Contact Direct</div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-4"><Linie>Discuție la Obiect</Linie></h2>
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                  Dacă ai nevoie de o estimare rapidă sau vrei să afli cum putem implementa conținut video AI sau un magazin nou, ne poți contacta direct:
                </p>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <span className="text-neutral-500">TELEFON:</span>
                    <a href="tel:0767235693" className="text-white hover:underline font-bold">
                      0767&nbsp;235&nbsp;693
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <span className="text-neutral-500">WHATSAPP:</span>
                    <a
                      href="https://wa.me/40767235693"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-bold"
                    >
                      Mesaj Rapid WhatsApp ↗
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <span className="text-neutral-500">EMAIL:</span>
                    <span className="text-neutral-300">contact@reverb.ro</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">Repere Bugetare</div>
                <div className="space-y-3.5 text-xs font-mono">
                  {packages.map((p, i) => (
                    <div
                      key={p.id}
                      className={`flex items-start justify-between gap-4 ${i < packages.length - 1 ? "border-b border-white/5 pb-2.5" : ""}`}
                    >
                      <span className="min-w-0 text-neutral-300">{p.shortName}</span>
                      <span className="shrink-0 whitespace-nowrap text-white font-bold">{p.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-[11px] font-mono text-neutral-500">{VAT_NOTE}</div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Formular */}
          <div>
            <Reveal delay={150}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6 sm:p-8 md:p-12">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-3">Formular Securizat</div>
                <h3 className="text-2xl font-medium text-white mb-6"><Linie>Trimite Detaliile Proiectului</Linie></h3>
                <ContactForm />
              </div>
            </Reveal>
          </div>

        </div>
      </section>

    </div>
  );
}
