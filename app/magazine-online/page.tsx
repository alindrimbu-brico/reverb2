import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Magazin Digital",
  description:
    "Construim magazine online pentru vânzare, nu doar pentru design. Platformă potrivită, structură de conversie, plăți & livrare configurate. De la €2.490.",
};

const included = [
  {
    category: "Structură & experiență",
    items: [
      "Arhitectură categorii / filtre",
      "Pagini produs clare (beneficii + încredere)",
      "Search & navigație simplă",
      "Optimizare mobil-first",
    ],
  },
  {
    category: "Checkout & conversie",
    items: [
      "Checkout simplificat (fără fricțiune)",
      "Mesaje clare (livrare, retur, garanție)",
      "Badge-uri de încredere",
      "Optimizare pentru viteză",
    ],
  },
  {
    category: "Plăți, livrare, operațional",
    items: [
      "Integrare plăți (în funcție de platformă)",
      "Setare livrare / curieri",
      "Emailuri tranzacționale (confirmări)",
      "Ghid administrare / predare",
    ],
  },
  {
    category: "Tracking & măsurare",
    items: [
      "Evenimente esențiale (view, add-to-cart, checkout, purchase)",
      "Raportare simplă (ce vinde, ce nu)",
      "Setup de bază pentru campanii",
      "Fundament pentru Promovare Continuă",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Clarificare",
    text: "Catalog, livrare, plăți, obiectiv. Înțelegem ce vinzi, cui vinzi și cum livrezi.",
    duration: "Săpt. 1",
  },
  {
    num: "02",
    title: "Arhitectură",
    text: "Platformă + structură categorii + fluxuri. Totul validat cu tine înainte de implementare.",
    duration: "Săpt. 1–2",
  },
  {
    num: "03",
    title: "Implementare",
    text: "Design, configurări, testare checkout. Plăți, livrare, tracking — totul funcțional.",
    duration: "Săpt. 2–4",
  },
  {
    num: "04",
    title: "Lansare",
    text: "Predare + setări tracking + plan de creștere. Recomandat: Promovare Continuă după lansare.",
    duration: "Săpt. 4 +",
  },
];

const platforms = ["WooCommerce", "Shopify", "Magento", "PrestaShop", "OpenCart", "CS-Cart", "Custom"];

const faq = [
  {
    q: "Pe ce platformă îmi faceți magazinul?",
    a: "Alegem platforma potrivită în funcție de catalog, buget, administrare și scalare. Lucrăm multiplatformă.",
  },
  {
    q: "Prețul include plăți și livrare?",
    a: "Include configurarea metodelor de plată și livrare. Costurile percepute de procesatori sau curieri nu sunt incluse.",
  },
  {
    q: "Câte produse include pachetul?",
    a: "Pachetul include produse demo și structurarea catalogului. Importul masiv sau migrarea completă se oferă separat.",
  },
  {
    q: "Pot începe fără campanii de promovare?",
    a: "Da, dar pentru vânzări constante recomandăm Promovare Continuă după lansare: optimizare conversie, campanii și raportare.",
  },
  {
    q: "Cum se face plata?",
    a: "Standard: 50% avans și 50% la livrare. Pentru proiecte complexe se poate stabili etapizare.",
  },
];

export default function MagazineOnlinePage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Magazin Digital</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-6xl lg:text-[72px]">
                Un magazin online construit pentru vânzare.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                Alegem platforma potrivită pentru modelul tău de business și construim un sistem complet: produse, plăți, livrare, conversie.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-[#1d2731] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Programează o discuție
                  <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="#pret"
                  className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/15 bg-white/75 px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:bg-white"
                >
                  Vezi prețul
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-6 text-sm text-[#1d2731]/50">
                Termeni: 50% avans / 50% la livrare · Livrare 14–30 zile · Preț transparent
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="rounded-[30px] border border-[#1d2731]/8 bg-white/70 p-8 shadow-[0_20px_70px_rgba(29,39,49,0.08)]">
              <div className="text-sm font-semibold text-[#1d2731] mb-5">Ce primești în versiunea standard</div>
              <ul className="space-y-3">
                {[
                  "Setup platformă eCommerce potrivită proiectului",
                  "Structură categorii + produse demo",
                  "Checkout optimizat pentru conversie",
                  "Plăți & livrare configurate",
                  "Tracking esențial (vânzări, add-to-cart, checkout)",
                  "Proces clar, fără improvizații",
                  "Implementare completă, nu doar design",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#1d2731]/70">
                    <span className="mt-1.5 text-[#1d2731]/40">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pentru cine */}
      <section className="border-b border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pentru cine</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Pentru firme care vor să vândă online serios.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3 tab-blur-group">
            {[
              { title: "Retail & producători", text: "Catalog structurat, checkout rapid, procese simple." },
              { title: "Branduri în creștere", text: "Ai vânzări offline sau pe social, vrei o bază solidă online." },
              { title: "Business-uri B2B", text: "Cereri / comenzi structurate, configurări și fluxuri clare." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="relative group rounded-[28px]">
                  <div
                    className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2]"
                    style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  />
                  <div 
                    className="relative z-10 p-7 transition-all duration-500"
                    style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  >
                    <h3 className="text-lg font-medium text-[#1d2731]">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/70">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platforma potrivită */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Multiplatformă</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Platforma potrivită, nu platforma la modă.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              Nu forțăm o tehnologie. Alegem în funcție de catalog, buget, administrare și scalare.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p) => (
              <span key={p} className="rounded-full border border-[#1d2731]/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#1d2731]/70">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Ce construim concret */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Ce construim</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Un magazin online complet, cu structură de conversie.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 tab-blur-group">
            {included.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 70}>
                <div className="relative group rounded-[28px] h-full">
                  <div
                    className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2]"
                    style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  />
                  <div 
                    className="relative z-10 p-7 transition-all duration-500 h-full"
                    style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  >
                    <h3 className="text-base font-semibold text-[#1d2731]">{cat.category}</h3>
                    <ul className="mt-5 space-y-3">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[14px] leading-6 text-[#1d2731]/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/35" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preț */}
      <section id="pret" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Preț transparent</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Punctul de plecare este clar.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
              <div className="text-sm font-medium text-[#1d2731]/50">Pachet standard</div>
              <div className="mt-2 text-sm font-semibold text-[#1d2731]">Magazin Digital</div>
              <div className="mt-4 text-4xl font-medium tracking-[-0.04em] text-[#1d2731]">de la €2.490</div>
              <div className="mt-2 text-sm text-[#1d2731]/45">Livrare: 14–30 zile</div>
              <ul className="mt-6 space-y-3">
                {[
                  "Setup platformă eCommerce",
                  "Structură categorii + produse demo",
                  "Checkout optimizat",
                  "Plăți & livrare configurate",
                  "Tracking esențial",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] leading-6 text-[#1d2731]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/35" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1d2731] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Solicită ofertă
              </Link>
              <div className="mt-3 text-center text-xs text-[#1d2731]/35">Termeni: 50% avans / 50% la livrare.</div>
              <div className="mt-2 text-center text-xs text-[#1d2731]/45">
                Notă: integrare ERP/CRM, import produse, multi-warehouse, funcții custom → ofertă separată.
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[28px] bg-[#1d2731] p-8 text-white">
              <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-[#1d2731]">
                Opțiune recomandată
              </div>
              <div className="text-lg font-medium">Lansare + Primele 30 zile + Promovare Continuă</div>
              <p className="mt-4 text-base leading-7 text-white/75">
                Pentru ca magazinul să înceapă să vândă, nu doar să existe.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Optimizare conversie",
                  "Setup campanii + iterare",
                  "Raport lunar clar",
                  "Ajustări structură & mesaje",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] leading-6 text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Programează discuție
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Proces</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Proces clar în 4 pași.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Structurat, predictibil, orientat pe livrare.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 tab-blur-group">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="relative group rounded-[28px] h-full">
                  <div
                    className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2]"
                    style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  />
                  <div 
                    className="relative z-10 p-7 transition-all duration-500 h-full flex flex-col"
                    style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-4xl font-medium tracking-[-0.04em] text-[#1d2731]/15">{s.num}</div>
                      <div className="rounded-full border border-[#1d2731]/10 px-3 py-1 text-xs text-[#1d2731]/45">{s.duration}</div>
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-[#1d2731]">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/70">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/45">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">FAQ</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Întrebări frecvente
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 space-y-4 tab-blur-group">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <div className="relative group rounded-[24px]">
                  <div
                    className="absolute inset-0 tab-blur-item rounded-[24px] border border-[#1d2731]/8 bg-white"
                    style={{ animation: `float-c ${8 + (i % 2)}s ease-in-out infinite` }}
                  />
                  <div 
                    className="relative z-10 p-6 md:p-8 transition-all duration-500"
                    style={{ animation: `float-text-c ${8 + (i % 2)}s ease-in-out infinite` }}
                  >
                    <div className="text-lg font-medium text-[#1d2731]">{item.q}</div>
                    <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/68">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Vrei un magazin online care poate fi scalat și optimizat?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Spune-ne ce vinzi și cum livrezi. Îți recomandăm platforma potrivită și pașii de lansare.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Programează o discuție
                </Link>
                <Link
                  href="/servicii"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Vezi toate serviciile
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/40">Discuție inițială 20–30 minute · Fără obligații</p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
