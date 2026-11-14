import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { packages, VAT_NOTE } from "@/lib/packages";
import { company } from "@/lib/company";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/contact", languages: { ro: "/contact", en: "/en/contact", "x-default": "/contact" } },
  title: "Contact — Reverb Digital",
  description:
    "Contact Reverb Digital: telefon, WhatsApp, e-mail și formular. Răspuns în cel mult 24 de ore lucrătoare.",
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
              <span>Contact</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Hai să vorbim.</Linie>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Răspuns în cel mult 24 de ore lucrătoare.
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
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-6">Contact Direct</h2>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <span className="text-neutral-500">CONTACT:</span>
                    <span data-no-translate className="text-white font-bold">{company.contactName}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <span className="text-neutral-500">TELEFON:</span>
                    <a href={company.tel} data-no-translate className="whitespace-nowrap text-white hover:underline font-bold">
                      {company.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <span className="text-neutral-500">WHATSAPP:</span>
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-bold"
                    >
                      Mesaj Rapid WhatsApp ↗
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <span className="text-neutral-500">EMAIL:</span>
                    <a href={`mailto:${company.email}`} data-no-translate className="text-neutral-300 hover:underline">{company.email}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8">
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-4">Prețuri</div>
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
                <ContactForm />
              </div>
            </Reveal>
          </div>

        </div>
      </section>

    </div>
  );
}
