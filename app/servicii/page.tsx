import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pkg, VAT_NOTE } from "@/lib/packages";
import { Linie } from "@/components/RunningLine";

export const metadata: Metadata = {
  alternates: { canonical: "/servicii", languages: { ro: "/servicii", en: "/en/services", "x-default": "/servicii" } },
  title: "Servicii — Reverb Digital",
  description:
    "Site-uri și magazine online cu preț stabilit de la început, clipuri zilnice făcute cu AI pentru rețelele sociale și ajutor ca afacerea ta să fie găsită și recomandată de asistenți AI precum ChatGPT.",
};

type Service = {
  id: string;
  tag: string;
  price: string;
  title: string;
  deliverables: string[];
  href: string;
  featured?: boolean;
  /** Textul butonului, când „Cere acest serviciu • preț” nu se potrivește. */
  cta?: string;
};

const mainServices: Service[] = [
  {
    id: "01",
    tag: "SITE-URI ȘI MAGAZINE",
    price: `de la ${pkg("site-start").price}`,
    title: "Site-uri și Magazine Online",
    deliverables: [
      // Prețul și termenul vin din registru (lib/packages.ts): cititorii nu știau care preț e al site-ului și care al magazinului.
      `Site: ${pkg("site-start").price}, în ${pkg("site-start").delivery}`,
      `Magazin online: ${pkg("magazin-start").price}, în ${pkg("magazin-start").delivery}`,
      "Pagini care se încarcă în mai puțin de 1,2 secunde",
      "Un panou din care adaugi singur produse și schimbi prețuri",
      "Comandă într-un singur pas, ca omul să nu renunțe pe drum",
      "Plată cu cardul, în câțiva pași",
      "Facturi automate (FGO sau SmartBill) și AWB pentru curieri",
      "Merge bine pe orice telefon și tabletă",
    ],
    href: "/contact?pachet=site-start",
  },
  {
    // Abonamentul pentru firme care au deja site: lista vine din registru, ca prețul și ce intră să nu se despartă.
    id: "02",
    tag: "FIRME LOCALE",
    price: pkg("vizibil-local").price,
    title: "Site-ul și Fișa de pe Google, Ținute la Zi",
    deliverables: pkg("vizibil-local").includes,
    href: "/contact?pachet=vizibil-local",
  },
  {
    // Card separat, cu un singur buton (regula „doar date” a cardurilor): verificarea nu e pachet în registru.
    id: "03",
    tag: "VERIFICARE GRATUITĂ",
    price: "Gratuit",
    title: "Verificarea Gratuită a Site-ului",
    deliverables: [
      "Citim până la 25 de pagini din site-ul tău",
      "Îți scriem pe e-mail, pe înțeles, ce e de reparat, cu exemple pe care le poți deschide",
      "Ce verificăm: linkuri care duc la pagini șterse, butonul de telefon, cum apare fiecare pagină în Google",
      "Primești verificarea în cel mult 2 zile lucrătoare",
      "Nu te obligă la nimic: lista o poate repara și cine ți-a făcut site-ul",
    ],
    href: "/contact?pachet=verificare-site",
    cta: "Cere verificarea • Gratuit →",
  },
  {
    id: "04",
    tag: "REȚELE SOCIALE",
    price: `de la ${pkg("social-growth").price}`,
    title: "Clipuri Zilnice pentru Rețelele Sociale",
    deliverables: [
      "30 până la 90 de clipuri scurte pe lună",
      "TikTok, Instagram Reels, YouTube Shorts, Facebook",
      "Postări cu imagini și carusele de produs pentru fiecare rețea",
      "Voce făcută cu AI, care sună natural, și montaj",
      "Fiecare clip trimite omul spre magazin sau spre pagina de contact",
      "Tu nu filmezi nimic",
    ],
    href: "/contact?pachet=social-growth",
    featured: true,
  },
  {
    id: "05",
    tag: "CĂUTAREA CU AI",
    // Serviciul GEO nu e pachet în registru: prețul lui se scrie aici.
    price: "de la €588 / lună",
    title: "Găsit de Asistenții AI",
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
    id: "06",
    tag: "FIRME MARI",
    price: pkg("infrastructura-enterprise").price,
    title: "Proiecte Mari și Sisteme pentru Firme",
    deliverables: [
      "Servere dedicate, care cresc odată cu firma",
      "Portaluri sigure pentru comenzi și contracte între firme",
      "Analiza muncii din firmă și asistenți AI pentru echipa ta",
      "Întreținere permanentă, cu timp de răspuns garantat prin contract",
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
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight">
              <Linie>Servicii.</Linie><br />
              <span className="text-neutral-400 font-light"><Linie>Prețuri clare.</Linie></span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-xs font-mono text-neutral-400">{VAT_NOTE}</p>
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
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                      <Linie>{srv.title}</Linie>
                    </h2>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-center text-[11px] font-mono uppercase tracking-wider text-black hover:bg-neutral-200 transition-all font-bold"
                    >
                      {srv.cta ?? `Cere acest serviciu • ${srv.price} →`}
                    </Link>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
                        Ce primești:
                      </div>
                      <div className="grid sm:grid-cols-1 gap-3">
                        {srv.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
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
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            <Linie>Hai să vorbim.</Linie>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            <span>Prima evaluare e gratuită.</span> <span>Răspuns în cel mult 24 de ore lucrătoare.</span>
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
