import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Infrastructură digitală pe 3 niveluri: atrage clienți, gestionează operațiunile, crește stabil. Site-uri, magazine online, marketing, branding și consultanță continuă.",
};

const services = [
  {
    id: "01",
    level: "Nivel 1 — Atrage clienți",
    levelContext: "Infrastructura ta de vizibilitate",
    title: "Creare site",
    tagline: "Un site care lucrează pentru tine, nu pentru portofoliul nostru.",
    text: "Site-uri clare, rapide și construite pentru conversie, nu pentru a impresiona doar designerii. Fiecare pagină are un scop, fiecare element are un rol. Construim site-uri care explică clar, inspiră încredere și transformă vizitatorii în clienți.",
    includes: [
      "Design premium, clar și responsive",
      "Pagini esențiale: Home, Servicii, Despre, Contact",
      "Arhitectură SEO de bază",
      "Copy comercial de bază inclus",
      "Viteză optimizată și Core Web Vitals",
      "Integrare formulare și instrumente de analiză",
      "Suport la lansare",
    ],
    ideal: "Antreprenori, freelanceri, companii de servicii care vor prezență digitală clară și profesionistă.",
    href: "/contact",
  },
  {
    id: "02",
    level: "Nivel 2 — Gestionează operațiunile",
    levelContext: "Sistemul tău de vânzare",
    title: "Magazine online complete",
    tagline: "Nu doar un magazin. Un sistem de vânzare construit pe logică comercială.",
    text: "Arhitectură de vânzare, structură de categorie, checkout curat și logică de business sănătoasă. Construim magazine online care nu doar arată bine, ci și vând. De la structura categoriilor la pagina de produs, fiecare decizie are o logică comercială în spate.",
    includes: [
      "Structură și arhitectură pentru magazine online",
      "Design premium și responsive",
      "Pagini: Home, Shop, Produs, Despre, Contact",
      "Flow de conversie și CTA-uri optimizate",
      "Mesaje de brand și copy comercial de bază",
      "Integrare instrumente esențiale de marketing",
      "Suport la lansare și recomandări post-lansare",
    ],
    ideal: "Antreprenori care lansează sau relansează un magazin online și vor o bază solidă.",
    href: "/magazine-online",
  },
  {
    id: "03",
    level: "Nivel 2 — Gestionează operațiunile",
    levelContext: "Cereri constante, nu campanii haotice",
    title: "Marketing digital",
    tagline: "Campanii care fac parte dintr-un sistem, nu acțiuni izolate.",
    text: "Ads, email, content și funnel-uri care lucrează împreună, nu campanii aruncate în aer și uitate. Construim strategii de marketing care se potrivesc cu business-ul tău real, nu cu tendințele din newslettere. Fiecare canal are un rol clar în ecosistemul tău digital.",
    includes: [
      "Strategie de marketing personalizată",
      "Campanii Meta Ads și Google Ads",
      "Email marketing și automatizări",
      "Content strategy și calendar editorial",
      "Funnel-uri de conversie",
      "Raportare clară și optimizare continuă",
      "Integrare cu site-ul și magazinul existent",
    ],
    ideal: "Business-uri cu prezență digitală existentă care vor să crească traficul, lead-urile sau vânzările.",
    href: "/contact",
  },
  {
    id: "04",
    level: "Nivel 3 — Crește stabil",
    levelContext: "Poziționare care scalează",
    title: "Branding & AI",
    tagline: "Poziționare autentică, amplificată inteligent.",
    text: "Poziționare, mesaje și sisteme în care AI amplifică munca umană, fără să-i ia sufletul. Construim identități de brand care spun ceva real despre tine, nu identități generice produse la scară industrială. AI-ul accelerează procesul, dar vocea brandului rămâne a ta.",
    includes: [
      "Strategie de poziționare și diferențiere",
      "Mesaje de brand: tagline, manifesto, about",
      "Identitate vizuală: logo, paletă, tipografie",
      "Ghid de brand (brand guidelines)",
      "Copy de brand pentru toate paginile esențiale",
      "Sistem de conținut AI-assisted pentru echipa ta",
      "Consultanță de implementare",
    ],
    ideal: "Antreprenori care vor să-și clarifice sau să-și redescopere brandul înainte de o relansare sau creștere.",
    href: "/contact",
  },
  {
    id: "05",
    level: "Nivel 3 — Crește stabil",
    levelContext: "Parteneriat real, nu relație de proiect",
    title: "Consultanță continuă",
    tagline: "Un partener lucid care rămâne în joc cu tine.",
    text: "Optimizare, mentenanță și parteneriat real pentru business-uri care vor stabilitate, nu artificii. Nu suntem o echipă care livrează și dispare. Rămânem alături, monitorizăm, ajustăm și luăm decizii împreună, pe baza datelor reale și a evoluției business-ului tău.",
    includes: [
      "Audit lunar de performanță digitală",
      "Optimizare continuă site, magazin sau campanii",
      "Suport tehnic și mentenanță",
      "Consultanță strategică (call lunar inclus)",
      "Prioritizare acțiuni de creștere",
      "Rapoarte clare și interpretate",
      "Acces la echipa Reverb pentru întrebări punctuale",
    ],
    ideal: "Business-uri care au deja o prezență digitală și vor un partener pe termen lung, nu un furnizor de servicii.",
    href: "/contact",
  },
];

const faq = [
  {
    q: "Cum aleg ce serviciu mi se potrivește?",
    a: "Cel mai bun mod e un call de 30 de minute. Îți punem câteva întrebări despre business, obiective și situația actuală, și îți propunem ce are sens real.",
  },
  {
    q: "Ce înseamnă infrastructură digitală?",
    a: "Înseamnă că nu livrăm componente izolate (un site, o campanie), ci sisteme conectate care funcționează împreună: vizibilitate, vânzare, creștere — toate pe 3 niveluri integrate.",
  },
  {
    q: "Cât durează un proiect tipic?",
    a: "Depinde de nivel și de complexitate. Un site de prezentare: 3–5 săptămâni. Un magazin online complet: 6–10 săptămâni. Marketing: ongoing, cu primele rezultate vizibile după 60–90 de zile.",
  },
  {
    q: "Oferiți și suport după lansare?",
    a: "Da. Consultanța continuă și optimizarea fac parte din filosofia noastră. Nu dispărem după lansare — rămânem în joc cu tine.",
  },
  {
    q: "Cum folosiți AI în proiecte?",
    a: "Omul gândește. AI-ul execută. Reverb livrează. Folosim AI pentru cercetare, claritate și viteză de execuție. Direcția strategică și vocea brandului rămân umane.",
  },
];

export default function ServiciiPage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#1d2731]/8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,170,0.15),transparent_35%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">The Reverb Stack</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
                Infrastructură digitală pe 3 niveluri.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                Fiecare serviciu face parte dintr-un ecosistem mai mare. Nu livrăm componente izolate — livrăm sisteme care se conectează, se completează și generează rezultate.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-6">
            {services.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 60}>
                <div
                  className={`rounded-[32px] border border-[#1d2731]/8 p-8 transition-shadow hover:shadow-[0_20px_60px_rgba(29,39,49,0.07)] md:p-10 ${
                    idx % 2 === 0 ? "bg-white/70" : "bg-[#faf7f2]"
                  }`}
                >
                  <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/40">Serviciu {s.id}</div>
                        <div className="rounded-full border border-[#1d2731]/10 bg-white/60 px-3 py-1 text-xs text-[#1d2731]/55">
                          {s.level}
                        </div>
                      </div>
                      <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">{s.title}</h2>
                      <p className="mt-2 text-sm font-medium text-[#1d2731]/50">{s.levelContext}</p>
                      <p className="mt-3 text-base font-medium text-[#1d2731]/60">{s.tagline}</p>
                      <p className="mt-5 text-[15px] leading-7 text-[#1d2731]/70">{s.text}</p>
                      <div className="mt-4 rounded-2xl border border-[#1d2731]/8 bg-white/60 px-5 py-3 text-sm text-[#1d2731]/60">
                        <span className="font-medium text-[#1d2731]">Ideal pentru: </span>{s.ideal}
                      </div>
                      <Link
                        href={s.href}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1d2731] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        {s.id === "02" ? "Vezi detalii complete" : "Cere o ofertă"} →
                      </Link>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1d2731]">Ce este inclus</div>
                      <ul className="mt-4 space-y-3">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#1d2731]/70">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">FAQ</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  Întrebări bune. Răspunsuri limpezi.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 space-y-4">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 60}>
                  <div className="card-hover rounded-[24px] border border-[#1d2731]/8 bg-white p-6 md:p-8">
                    <div className="text-lg font-medium text-[#1d2731]">{item.q}</div>
                    <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/68">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                    Nu știi la ce nivel ești? Hai să clarificăm împreună.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/70">
                    Un call de 30 de minute e suficient ca să înțelegem unde ești și ce infrastructură ai nevoie. Fără pitch. Fără presiune. Claritate din primul minut.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:items-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Programează un call gratuit
                  </Link>
                  <Link
                    href="/magazine-online"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    Descoperă magazinul online complet
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
}
