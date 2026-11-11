import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  alternates: { canonical: "/pachete", languages: { ro: "/pachete", en: "/en/packages", "x-default": "/pachete" } },
  title: "Pachete & Prețuri — Reverb Digital",
  description:
    "Prețuri fixe, fără surprize. Pachete de promovare video zilnică AI, magazine online la cheie și infrastructură digitală enterprise.",
};

const faqs = [
  {
    q: "Cât durează un proiect?",
    a: "Pentru promovare video AI, primele livrabile încep în 48 de ore de la semnare. Un website de prezentare durează 7–14 zile, iar un magazin online complet între 14 și 30 de zile.",
  },
  {
    q: "Cum funcționează plata?",
    a: "Pentru pachetele de promovare video, plata se face lunar în avans. Pentru proiectele de construcție web/magazin: 50% avans la începere și 50% la predare și verificare completă.",
  },
  {
    q: "Ce înseamnă optimizarea pentru Agenți AI GEO?",
    a: "Structurăm datele, cataloagele de produse și prețurile în format semantic JSON-LD avansat, astfel încât motoarele de căutare AI ChatGPT, Perplexity și Gemini să înțeleagă exact oferta ta și să o recomande ca primă opțiune utilizatorilor.",
  },
  {
    q: "Pot adăuga un panou Payload CMS pe magazinul meu?",
    a: "Da. Pentru clienții care vor viteză maximă și independență de WordPress, construim panoul de administrare direct pe Payload CMS pe TypeScript nativ în Next.js, cu editare vizuală live și securitate enterprise.",
  },
  {
    q: "Bugetul de promovare plătită Ads este inclus?",
    a: "Prețurile pachetelor noastre acoperă integral producția video AI, copywritingul, montajul și publicarea pe rețele. Bugetul de reclame plătite pentru reclame Meta, TikTok sau Google Ads se plătește separat, direct către platforme, în contul tău de publicitate.",
  },
];

export default function PachetePage() {
  const socialPackages = packages.filter((p) => p.category === "social");
  const webPackages = packages.filter((p) => p.category === "web" || p.category === "b2b");

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
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>[ CLARITATE FINANCIARĂ • PREȚURI FIXE ]</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              Prețuri fixe.<br />
              <span className="text-neutral-400 font-light">Fără costuri ascunse.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Fiecare pachet Reverb Digital include un set fix de livrabile, un termen ferm de predare și o arhitectură pregătită pentru noile motoare de căutare AI.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-mono text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Fără contract obligatoriu pe 12 luni: testezi o lună, măsori rezultatele și decizi dacă dorești continuarea.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Promovare Video Social Media AI */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="max-w-5xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">01 / PRODUCȚIE VIDEO ZILNICĂ AI</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Pachete Social Media • Video Scurt și Imagini
            </h2>
            <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">
              Generăm conținut video de înaltă fidelitate cu Google Imagen & Veo pentru TikTok, Reels, Shorts și Facebook. Demonstrații de produse, scenarii de vânzare și subtitrări dinamice fără bătăi de cap.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {socialPackages.map((pkg, idx) => (
            <Reveal key={pkg.id} delay={idx * 100}>
              <div
                className={`relative h-full rounded-3xl p-8 md:p-10 flex flex-col justify-between border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-neutral-900 to-[#121316] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)] scale-100 lg:scale-[1.02]"
                    : "bg-neutral-900/30 border-white/10"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-black shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    {pkg.delivery}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-light text-white mb-4">{pkg.price}</div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6 border-b border-white/10 pb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 text-xs text-neutral-300 font-mono mb-8">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-neutral-400 font-light mb-6">
                    <strong className="text-neutral-300 block mb-1">Ideal pentru:</strong>
                    {pkg.ideal}
                  </div>
                  <Link
                    href={`/contact?pachet=${pkg.id}`}
                    className={`block w-full text-center rounded-full py-3.5 text-xs font-mono uppercase tracking-widest transition-all ${
                      pkg.highlight
                        ? "bg-white text-black font-bold hover:bg-neutral-200 shadow-md"
                        : "border border-white/20 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    Alege Pachetul →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Platforme Web & E-Commerce & B2B */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="max-w-5xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">02 / SISTEME COMPLETE & CONSTRUCȚIE</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Platforme Web, Magazine & Arhitectură B2B
            </h2>
            <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">
              Arhitecturi Next.js de mare viteză, magazine online la cheie și soluții enterprise proiectate pentru reziliență și conversie.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {webPackages.map((pkg, idx) => (
            <Reveal key={pkg.id} delay={idx * 100}>
              <div
                className={`relative h-full rounded-3xl p-8 md:p-10 flex flex-col justify-between border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-neutral-900 to-[#121316] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)] scale-100 lg:scale-[1.02]"
                    : "bg-neutral-900/30 border-white/10"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-black shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    {pkg.delivery}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-light text-white mb-4">{pkg.price}</div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6 border-b border-white/10 pb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 text-xs text-neutral-300 font-mono mb-8">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <span className="text-neutral-400 mt-0.5">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-neutral-400 font-light mb-6">
                    <strong className="text-neutral-300 block mb-1">Ideal pentru:</strong>
                    {pkg.ideal}
                  </div>
                  <Link
                    href={`/contact?pachet=${pkg.id}`}
                    className={`block w-full text-center rounded-full py-3.5 text-xs font-mono uppercase tracking-widest transition-all ${
                      pkg.highlight
                        ? "bg-white text-black font-bold hover:bg-neutral-200 shadow-md"
                        : "border border-white/20 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    Configurează Proiectul →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Întrebări Frecvente */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-5xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Claritate Operațională</div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Întrebări frecvente despre colaborare.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <Reveal key={faq.q}>
              <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-8">
                <h3 className="text-lg font-medium text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}
