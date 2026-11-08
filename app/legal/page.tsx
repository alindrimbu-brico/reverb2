import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Building2, Landmark, CreditCard, ShieldCheck, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/legal", languages: { ro: "/legal", en: "/en/legal", "x-default": "/legal" } },
  title: "Date Juridice & Fiscale — Reverb Digital",
  description: "Datele oficiale de înregistrare, codul fiscal și conturile bancare B2B ale SC Kalki Drim Magazin SRL.",
};

export default function LegalPage() {
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
              <span>Transparență & Guvernanță Juridică</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              Date Oficiale & <br />
              <span className="text-neutral-400 font-light">Informații Fiscale.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              Înregistrare corporativă completă, detalii fiscale, conturi bancare pentru tranzacții B2B și guvernanță operațională în România.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Registration Details */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
        <Reveal>
          <div className="mb-10">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">Entitatea Comercială</div>
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
                <h3 className="text-base font-mono uppercase tracking-widest text-white">Date Înregistrare</h3>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Cod Unic Înregistrare (CUI)</span>
                  <span className="text-white font-bold text-sm">RO 42565965</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Nr. Reg. Comerțului</span>
                  <span className="text-white font-bold">J39/335/2020</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Capital Social</span>
                  <span className="text-white font-bold">45.000 RON</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Țară</span>
                  <span className="text-white">România</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-500 uppercase">Ecosistem</span>
                  <span className="text-white">Grupul Surya (Holding)</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Address & Direct Contact */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-white/15 bg-neutral-900/40 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Landmark size={20} className="text-neutral-400" />
                <h3 className="text-base font-mono uppercase tracking-widest text-white">Sediu & Comunicații</h3>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="py-2 border-b border-white/5">
                  <div className="text-neutral-500 uppercase text-[10px] mb-1">Adresă Sediu Social</div>
                  <div className="text-white text-sm leading-relaxed">
                    Str. Măgura 57 F, Focșani, Vrancea, RO 620157
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Telefon Direct</span>
                  <a href="tel:0767235693" className="text-white hover:underline">
                    +40 767 235 693
                  </a>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">E-mail General</span>
                  <a href="mailto:contact@reverb.ro" className="text-white hover:underline">
                    contact@reverb.ro
                  </a>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-500 uppercase">Partener Strategic</span>
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
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-2">Tranzacții Comerciale</div>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
              Conturi Bancare Oficiale (B2B)
            </h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-400 font-light">
              Utilizați contul IBAN corespunzător în funcție de moneda facturată pe contract sau proformă.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              bank: "Banca Română de Dezvoltare (BRD)",
              iban: "RO26BRDE400SV39132184000",
              currency: "RON & EUR",
            },
            {
              bank: "UniCredit Bank S.A.",
              iban: "RO82BACX0000002458934000",
              currency: "RON & EUR",
            },
            {
              bank: "Trezoreria Statului (Vrancea)",
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
                  Beneficiar: Kalki Drim Magazin SRL
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
          Ai nevoie de facturare proformă sau contract B2B?
        </h2>
        <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-lg mx-auto font-light leading-relaxed">
          Echipa noastră răspunde în maximum 24 de ore cu documentația completă și specificațiile tehnice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all"
          >
            <span>Deschide Formularul Contact</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href="tel:0767235693"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Phone size={14} />
            <span>Sună: +40 767 235 693</span>
          </a>
        </div>
      </section>

    </div>
  );
}
