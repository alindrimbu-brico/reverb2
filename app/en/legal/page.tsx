import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Building2, Landmark, CreditCard, ShieldCheck, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/en/legal", languages: { ro: "/legal", en: "/en/legal", "x-default": "/legal" } },
  title: "Legal & Corporate Data — Reverb Digital",
  description: "Official registration details, tax identifiers, and B2B bank accounts of SC Kalki Drim Magazin SRL.",
};

export default function LegalPageEn() {
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
              <ShieldCheck size={12} className="text-white" />
              <span>Corporate Governance & Transparency</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              Corporate Data & <br />
              <span className="text-neutral-400 font-light">Legal Information.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              Complete entity registration, tax identifiers, verified B2B banking rails, and corporate governance for European and international engagements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Registration Details */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
        <Reveal>
          <div className="mb-10">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">Legal Operating Entity</div>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              SC KALKI DRIM MAGAZIN SRL
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Registration */}
          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-neutral-900/40 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Building2 size={20} className="text-neutral-400" />
                <h3 className="text-base font-mono uppercase tracking-widest text-white">Entity Registration</h3>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">VAT / Tax ID (CUI)</span>
                  <span className="text-white font-bold text-sm">RO 42565965</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Commerce Registry No.</span>
                  <span className="text-white font-bold">J39/335/2020</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Share Capital</span>
                  <span className="text-white font-bold">45,000 RON</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Jurisdiction</span>
                  <span className="text-white">Romania, European Union</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-500 uppercase">Parent Ecosystem</span>
                  <span className="text-white">Surya Group Holding</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Address & Direct Contact */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-white/15 bg-neutral-900/40 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Landmark size={20} className="text-neutral-400" />
                <h3 className="text-base font-mono uppercase tracking-widest text-white">Headquarters & Contact</h3>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="py-2 border-b border-white/5">
                  <div className="text-neutral-500 uppercase text-[10px] mb-1">Registered Address</div>
                  <div className="text-white text-sm leading-relaxed">
                    Str. Măgura 57 F, Focșani, Vrancea, RO 620157
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Direct Phone</span>
                  <a href="tel:0767235693" className="text-white hover:underline">
                    +40 767 235 693
                  </a>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">General Inquiries</span>
                  <a href="mailto:contact@reverb.ro" className="text-white hover:underline">
                    contact@reverb.ro
                  </a>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-500 uppercase">Strategic Partner</span>
                  <a href="https://zylarisgroup.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white underline">
                    Zylaris Group London ↗
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bank Accounts */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
        <Reveal>
          <div className="mb-10">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">Commercial Banking</div>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              Official Corporate Bank Accounts (B2B)
            </h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-400 font-light">
              Wire transfers must cite the invoice or proforma reference number.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              bank: "BRD Groupe Société Générale",
              iban: "RO26BRDE400SV39132184000",
              currency: "RON & EUR",
            },
            {
              bank: "UniCredit Bank S.A.",
              iban: "RO82BACX0000002458934000",
              currency: "RON & EUR",
            },
            {
              bank: "Romanian State Treasury",
              iban: "RO43TREZ6915069XXX011686",
              currency: "RON",
            },
          ].map((acc, i) => (
            <Reveal key={acc.bank} delay={i * 80}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/30 p-6 flex flex-col justify-between h-full hover:border-white/30 transition-all">
                <div>
                  <div className="flex items-center gap-2 text-neutral-400 mb-3 font-mono text-[10px] uppercase tracking-wider">
                    <CreditCard size={14} />
                    <span>{acc.currency}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-4">{acc.bank}</h3>
                  <div className="bg-black/60 rounded-xl p-3 border border-white/10 font-mono text-xs text-neutral-200 break-all select-all">
                    {acc.iban}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  Beneficiary: Kalki Drim Magazin SRL
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
          Need commercial invoicing or a formal B2B agreement?
        </h2>
        <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-lg mx-auto font-light leading-relaxed">
          Our team provides verified documentation, NDAs, and technical SLAs within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all"
          >
            <span>Open Contact Form</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href="tel:0767235693"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Phone size={14} />
            <span>Call: +40 767 235 693</span>
          </a>
        </div>
      </section>

    </div>
  );
}
