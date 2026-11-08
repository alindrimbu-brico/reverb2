import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Servicii — Reverb Digital",
  description:
    "Arhitectură digitală completă: platforme web de mare viteză, conținut video zilnic AI, optimizare pentru căutare generativă (GEO) și infrastructură enterprise.",
};

const mainServices = [
  {
    id: "01",
    tag: "FUNDAȚIE TEHNICĂ",
    price: "de la €1.500",
    title: "Platforme Web & Magazine Online",
    tagline: "Arhitectură de mare viteză construită direct pentru conversie.",
    text: "Dezvoltăm de la zero website-uri de prezentare și magazine online robuste pe Next.js și WooCommerce. Timp de încărcare garantat sub 1.2 secunde, flux de checkout optimizat cognitiv, integrări de plăți securizate cu cardul, facturare automată și emitere instantanee de AWB-uri curieri.",
    deliverables: [
      "Arhitectură Next.js / Edge Runtime cu viteză sub 1.2s",
      "Opțiune Panou Control Enterprise cu Payload CMS",
      "Proces de vânzare fără fricțiune (checkout 1-step)",
      "Facturare automată (FGO / SmartBill) + AWB curieri",
      "Optimizare completă pentru dispozitive mobile",
    ],
    href: "/contact?pachet=site-magazin",
  },
  {
    id: "02",
    tag: "SCALARE SOCIAL MEDIA",
    price: "de la €390 / lună",
    title: "Motorul Video Social Media AI",
    tagline: "Volum zilnic de conținut video generat cu inteligență artificială.",
    text: "Eliminăm bariera costurilor caselor de producție clasice. Producem zilnic 1 până la 3 clipuri video de înaltă fidelitate pentru TikTok, Instagram Reels, YouTube Shorts și Facebook folosind tehnologiile Google Imagen & Veo. Demonstrații de produse și utilaje în acțiune, scenarii de vânzare și subtitrări dinamice.",
    deliverables: [
      "30 până la 90 de clipuri video scurte / lună",
      "Postări grafice și caruseluri de produs adaptate fiecărei rețele",
      "Voiceover sintetic ultra-realist și montaj dinamic",
      "Direcționare directă a traficului către magazin sau contact",
      "Fără timp pierdut cu filmări manuale de către client",
    ],
    href: "/contact?pachet=daily-impact",
    featured: true,
  },
  {
    id: "03",
    tag: "NOUA CĂUTARE ONLINE",
    price: "de la €690 / lună",
    title: "Optimizare Pentru Agenți AI (GEO)",
    tagline: "Fii prima recomandare în ChatGPT, Perplexity, Claude și Gemini.",
    text: "În 2026, clienții nu mai caută doar cuvinte cheie pe Google, ci adresează întrebări directe asistenților AI. Structurăm semantic întregul tău site prin date JSON-LD avansate, index de prețuri transparent și entități de autoritate, astfel încât LLM-urile să recomande afacerea ta ca sursă de încredere.",
    deliverables: [
      "AI-Readable Answer Stack (date structurate semantic)",
      "Indexare transparentă și clară a pachetelor de prețuri",
      "Generative Engine Optimization (GEO) pentru Perplexity și ChatGPT",
      "Validare entitate de brand și autoritate digitală",
      "Monitorizare a citărilor în răspunsurile generate de AI",
    ],
    href: "/contact?pachet=geo-search",
  },
  {
    id: "04",
    tag: "ENTERPRISE & SCALABILITATE",
    price: "Enterprise / SLA",
    title: "Infrastructură Digitală & Sisteme B2B",
    tagline: "Arhitectură scalabilă și consultanță internațională.",
    text: "Pentru companii mari și proiecte cu cerințe complexe, colaborăm direct cu Zylaris Group London. Proiectăm portaluri dedicate pentru clienți și parteneri B2B, automatizări de procese operaționale interne, securitate de nivel bancar și integrarea agenților autonomi AI.",
    deliverables: [
      "Arhitectură cloud scalabilă dedicată",
      "Portaluri securizate pentru fluxuri comenzi & contracte B2B",
      "Audit operațional și implementare agenți AI interni",
      "Mentenanță proactivă 24/7 și SLA garantat",
      "Guvernanță și securitate gestionată internațional",
    ],
    href: "/contact?pachet=enterprise",
  },
];

export default function ServiciiPage() {
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
              <span>Capabilități Digitale & Arhitectură</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              Sisteme inginerești.<br />
              <span className="text-neutral-400 font-light">Rezultate măsurabile.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              De la fundația tehnică de mare viteză a magazinului tău online, până la motoare de conținut video zilnic și optimizare pentru căutare generativă (GEO). Fără improvizații.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lista de Servicii Detaliate */}
      <section className="relative z-10 py-24 px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
        <div className="space-y-12">
          {mainServices.map((srv, idx) => (
            <Reveal key={srv.id} delay={idx * 80}>
              <div className={`rounded-3xl border p-8 md:p-12 lg:p-14 transition-all duration-300 ${
                srv.featured 
                  ? "bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.05)]" 
                  : "bg-neutral-900/30 border-white/10"
              }`}>
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  
                  <div className="lg:col-span-5">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500 mb-4">
                      <span>/ {srv.id}</span>
                      <span>•</span>
                      <span className="text-neutral-300 uppercase tracking-wider">{srv.tag}</span>
                      <span className="ml-auto inline-block rounded-full bg-white/10 px-3 py-0.5 text-[10px] text-white font-bold border border-white/20">
                        {srv.price}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                      {srv.title}
                    </h2>
                    <p className="text-sm font-mono text-neutral-400 mb-6 leading-relaxed">
                      {srv.tagline}
                    </p>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-all font-bold"
                    >
                      Alege Serviciul ({srv.price}) →
                    </Link>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                      {srv.text}
                    </p>
                    
                    <div className="border-t border-white/10 pt-6">
                      <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
                        Livrabile & Standarde Tehnice:
                      </div>
                      <div className="grid sm:grid-cols-1 gap-3">
                        {srv.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="relative z-10 py-24 px-6 text-center max-w-4xl mx-auto">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-4">Pasul Următor</div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            Construiește pe o fundație solidă.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Oferim audit inițial gratuit pentru a evalua infrastructura ta digitală și compatibilitatea cu căutarea AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-black hover:bg-neutral-200 transition-all font-bold"
            >
              Contactează Reverb Digital →
            </Link>
            <Link
              href="/pachete"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:bg-white/5 transition-all"
            >
              Vezi Toate Pachetele
            </Link>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
