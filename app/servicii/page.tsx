import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pkg, VAT_NOTE } from "@/lib/packages";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/servicii", languages: { ro: "/servicii", en: "/en/services", "x-default": "/servicii" } },
  title: "Servicii — Reverb Digital",
  description:
    "Site-uri și magazine online la preț fix, clipuri zilnice făcute cu AI pentru rețelele sociale și ajutor ca afacerea ta să fie găsită și recomandată de asistenți AI precum ChatGPT.",
};

const mainServices = [
  {
    id: "01",
    tag: "SITE-URI ȘI MAGAZINE",
    price: `de la ${pkg("site-start").price}`,
    title: "Site-uri și Magazine Online",
    tagline: "Făcute să se încarce repede și să vândă.",
    text: "Construim de la zero site-uri de prezentare și magazine online. Paginile se încarcă în mai puțin de 1,2 secunde, clientul plătește cu cardul în câțiva pași, factura se emite singură, iar AWB-ul pentru curier se face imediat ce intră comanda.",
    deliverables: [
      "Pagini care se încarcă în mai puțin de 1,2 secunde",
      "Un panou din care adaugi singur produse și schimbi prețuri",
      "Comandă într-un singur pas, ca omul să nu renunțe pe drum",
      "Facturi automate (FGO sau SmartBill) și AWB pentru curieri",
      "Merge bine pe orice telefon și tabletă",
    ],
    href: "/contact?pachet=site-start",
  },
  {
    id: "02",
    tag: "REȚELE SOCIALE",
    price: `de la ${pkg("social-growth").price}`,
    title: "Clipuri Zilnice pentru Rețelele Sociale",
    tagline: "Clipuri noi cu produsele tale în fiecare zi, făcute cu AI.",
    text: "O casă de producție clasică e scumpă și lentă. Noi facem zilnic 1 până la 3 clipuri scurte pentru TikTok, Instagram Reels, YouTube Shorts și Facebook, cu AI: produse și utilaje în acțiune, scenarii de vânzare și subtitrări pe ecran.",
    deliverables: [
      "30 până la 90 de clipuri scurte pe lună",
      "Postări cu imagini și carusele de produs pentru fiecare rețea",
      "Voce făcută cu AI, care sună natural, și montaj",
      "Fiecare clip trimite omul spre magazin sau spre pagina de contact",
      "Tu nu filmezi nimic",
    ],
    href: "/contact?pachet=daily-impact",
    featured: true,
  },
  {
    id: "03",
    tag: "CĂUTAREA CU AI",
    // Serviciul GEO nu e pachet în registru: prețul lui se scrie aici.
    price: "de la €588 / lună",
    title: "Găsit de Asistenții AI",
    tagline: "Ca ChatGPT, Perplexity, Claude și Gemini să te poată recomanda.",
    text: "Tot mai mulți cumpărători întreabă un asistent AI în loc să caute cuvinte pe Google. Scriem datele firmei, produsele și prețurile într-o formă pe care acești asistenți o citesc corect, ca să îți înțeleagă oferta și să o poată recomanda.",
    deliverables: [
      "Firma, produsele și prețurile scrise astfel încât asistenții AI să le citească corect",
      "O listă de prețuri clară și publică pentru pachetele tale",
      "Pagini care răspund la întrebările puse de cumpărători în ChatGPT și Perplexity",
      "Marca ta descrisă la fel peste tot pe internet",
      "Urmărim cum te pomenesc asistenții AI",
    ],
    href: "/contact?pachet=geo-search",
  },
  {
    id: "04",
    tag: "FIRME MARI",
    price: pkg("infrastructura-enterprise").price,
    title: "Proiecte Mari și Sisteme pentru Firme",
    tagline: "Pentru companii cu cerințe complexe, împreună cu partenerul nostru din Londra.",
    text: "Pentru companii mari și proiecte complicate lucrăm împreună cu Zylaris Group din Londra. Facem portaluri pentru clienți și parteneri, automatizăm munca repetitivă din firmă, punem securitate la nivelul băncilor și asistenți AI care lucrează în interiorul firmei.",
    deliverables: [
      "Servere dedicate, care cresc odată cu firma",
      "Portaluri sigure pentru comenzi și contracte între firme",
      "Analiza muncii din firmă și asistenți AI pentru echipa ta",
      "Întreținere permanentă, cu timp de răspuns garantat prin contract",
      "Securitate administrată împreună cu partenerul nostru din Londra",
    ],
    href: "/contact?pachet=infrastructura-enterprise",
  },
];

export default function ServiciiPage() {
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
              <span>Servicii • Prețuri fixe</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Ce facem pentru tine.</Linie><br />
              <span className="text-neutral-400 font-light"><Linie>La preț fix, cu termen clar.</Linie></span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 font-light leading-relaxed">
              Îți facem site-ul sau magazinul online, îți facem clipuri zilnice pentru rețelele sociale și te ajutăm să fii găsit și recomandat de asistenții AI. {VAT_NOTE}
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
                      <Linie>{srv.title}</Linie>
                    </h2>
                    <p className="text-sm font-mono text-neutral-400 mb-6 leading-relaxed">
                      {srv.tagline}
                    </p>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-center text-[11px] font-mono uppercase tracking-wider text-black hover:bg-neutral-200 transition-all font-bold"
                    >
                      Cere acest serviciu • {srv.price} →
                    </Link>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                      {srv.text}
                    </p>
                    
                    <div className="border-t border-white/10 pt-6">
                      <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
                        Ce primești:
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
            <Linie>Hai să vedem ce ți se potrivește.</Linie>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Ne uităm gratuit la site-ul tău și la paginile tale de pe rețelele sociale și îți spunem ce ar merita făcut întâi și cât costă.
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
