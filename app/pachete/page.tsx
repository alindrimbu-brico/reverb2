import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhoWeAre from "@/components/WhoWeAre";
import WorkShots from "@/components/WorkShots";
import { Linie } from "@/components/RunningLine";
import { packages, priceLei, VAT_LABEL } from "@/lib/packages";
import { liveProjectsRo } from "@/lib/liveProjects";

// Trei lucrări reale arătate lângă prețuri; numele și adresele vin din lista unică de proiecte live.
const LUCRARI = ["Bricolando.ro", "RaftPlin.ro", "Kalki.nexus"];
const lucrari = LUCRARI.map((n) => liveProjectsRo.find((p) => p.name === n)).filter((p) => !!p);

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
    q: "Ce ajutor primesc după lansare?",
    a: "La orice site sau magazin făcut de noi ai 30 de zile de sprijin după lansare: ne scrii pe WhatsApp, ne suni sau ne vedem, online ori la biroul nostru din Focșani. Îți arătăm cum adaugi produse și texte, ce să urmărești în primele săptămâni și ce ai de făcut ca să ajungi la primele comenzi.",
  },
  {
    q: "Ce mai plătesc pe lângă prețul pachetului?",
    a: "TVA-ul, care se adaugă la prețurile afișate. La un site: domeniul (numele site-ului, câteva zeci de lei pe an), pe care îl cumperi pe firma ta; la Site Start găzduirea e inclusă în primul an, apoi o plătești anual (suma e scrisă în pachet) sau muți site-ul unde vrei. La un magazin: găzduirea, domeniul și comisioanele procesatorului de plăți și ale curierului, pe contractele tale. Îți spunem dinainte ce să alegi și cât costă fiecare, apoi le legăm noi de magazin.",
  },
  {
    q: "Ce înseamnă „pregătit pentru asistenții AI”?",
    a: "Tot mai mulți oameni întreabă ChatGPT, Gemini sau Perplexity în loc să caute pe Google. Scriem datele firmei, produsele și prețurile într-o formă pe care acești asistenți o pot citi corect, ca să îți înțeleagă oferta și să o poată recomanda.",
  },
  {
    q: "Pot să îmi administrez singur magazinul?",
    a: "Da. Primești un panou de administrare din care adaugi produse, schimbi prețuri și vezi comenzile. De obicei e WooCommerce; pentru magazinele care au nevoie de viteză mare construim un panou la comandă, cu editare direct pe pagină.",
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
              <span>[ CLARITATE FINANCIARĂ • PREȚURI FIXE ]</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Prețuri fixe.</Linie><br />
              <span className="text-neutral-400 font-light"><Linie>Fără costuri ascunse.</Linie></span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Fiecare pachet are o listă fixă cu ce primești și un termen ferm de predare. Ce construim poate fi găsit pe Google și de oamenii care întreabă ChatGPT.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-neutral-300 font-light leading-relaxed">
              Cauți clipuri pentru rețelele sociale?{" "}
              <a href="#video" className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white">Vezi pachetele video ↓</a>
            </p>
            <div className="mt-6">
              <WhoWeAre center />
            </div>
            <div className="mt-8 mx-auto flex max-w-xl items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-left text-xs leading-relaxed font-mono text-emerald-300">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>Fără contract obligatoriu pe 12 luni: testezi o lună, măsori rezultatele și decizi dacă dorești continuarea.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Platforme Web & E-Commerce & B2B */}
      <section id="web" className="scroll-mt-16 relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="max-w-5xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">01 / SITE-URI ȘI MAGAZINE</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              <Linie>Site-uri, Magazine Online și Proiecte Mari</Linie>
            </h2>
            <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed">
              Site-uri de prezentare și magazine online la preț fix: de la un început simplu, până la sisteme complete cu clipuri video și proiecte pentru companii mari.
            </p>
            <div className="mt-6">
              <WhoWeAre />
            </div>
            <p className="mt-6 text-sm text-neutral-300 font-light leading-relaxed">
              Înainte să alegi, vezi ce am construit. Câteva lucrări care sunt online acum:
            </p>
            <WorkShots items={lucrari} />
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link href="/portofoliu" className="rounded-full bg-white px-4 py-2 text-xs font-mono font-bold text-black transition hover:bg-neutral-200">Vezi toate lucrările →</Link>
              <Link href="/showcase" className="rounded-full border border-white/20 px-4 py-2 text-xs font-mono text-neutral-200 transition hover:bg-white hover:text-black">Galeria de concepte →</Link>
            </div>
            <p className="mt-6 text-sm text-neutral-400 font-light leading-relaxed">
              „Cere acest pachet” deschide un formular scurt. Îți răspundem în cel mult 24 de ore lucrătoare, fără nicio obligație.
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
                  <h3 className="text-2xl font-medium text-white mb-2"><Linie>{pkg.name}</Linie></h3>
                  <div className="text-4xl font-light text-white mb-1">{pkg.price} <span className="text-sm font-mono text-neutral-300">{VAT_LABEL}</span></div>
                  <div className="mb-4 text-xs text-neutral-400">{priceLei(pkg.price)}</div>
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
                    Cere acest pachet →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Promovare Video Social Media AI */}
      <section id="video" className="scroll-mt-16 relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="max-w-5xl mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">02 / CLIPURI PENTRU REȚELELE SOCIALE</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              <Linie>Pachete Social Media • Video Scurt și Imagini</Linie>
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
                  <h3 className="text-2xl font-medium text-white mb-2"><Linie>{pkg.name}</Linie></h3>
                  <div className="text-4xl font-light text-white mb-1">{pkg.price} <span className="text-sm font-mono text-neutral-300">{VAT_LABEL}</span></div>
                  <div className="mb-4 text-xs text-neutral-400">{priceLei(pkg.price)}</div>
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

      {/* Întrebări Frecvente */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-5xl mx-auto border-b border-white/10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Claritate Operațională</div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              <Linie>Întrebări frecvente despre colaborare.</Linie>
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
