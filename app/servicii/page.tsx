import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Servicii digitale clare pentru IMM-uri: prezență online, clienți locali, magazine digitale, promovare continuă și AI Creative Sprint. Prețuri fixe, livrare structurată.",
};

const services = [
  {
    id: "01",
    title: "Prezență Online",
    tagline: "Un website care susține vânzările, nu doar imaginea.",
    text: "Implementare rapidă, structură orientată pe conversie și integrare Google pentru firme care vor creștere reală.",
    price: "€990",
    delivery: "7–14 zile",
    includes: [
      "Website 3–7 pagini, mobil-first",
      "Formular contact + WhatsApp + Maps",
      "SEO de bază + setare Google Business",
      "Structură orientată pe conversie",
      "Preț fix, fără costuri ascunse",
      "Implementare completă, nu doar design",
    ],
    ideal: "IMM-uri care vor o fundație digitală corectă: firme de servicii, construcții, clinici, consultanță.",
    href: "/contact",
  },
  {
    id: "02",
    title: "Clienți Locali",
    tagline: "Un sistem care aduce cereri locale, constant.",
    text: "SEO local + Google Ads + tracking apeluri. Fără trafic inutil. Doar clienți relevanți.",
    price: "€1.790",
    delivery: "Setup inițial (30 zile)",
    extra: "Administrare lunară: €490 / lună (+ buget ads)",
    includes: [
      "Landing pagină optimizat pentru conversie",
      "SEO local (structură + optimizare)",
      "Setup Google Ads + Meta Ads local",
      "Tracking apeluri & formulare",
      "Optimizare Google Business",
      "Raport lunar clar",
    ],
    ideal: "Firme locale de servicii: construcții, clinici, service auto, instalatori — oricine are nevoie de apeluri și cereri constante.",
    href: "/contact",
    recommended: true,
  },
  {
    id: "03",
    title: "Magazin Digital",
    tagline: "Un magazin online construit pentru vânzare, nu doar pentru design.",
    text: "Alegem platforma potrivită pentru modelul tău de business și construim un sistem complet: produse, plăți, livrare, conversie.",
    price: "de la €2.490",
    delivery: "14–30 zile",
    includes: [
      "Setup platformă eCommerce potrivită proiectului",
      "Structură categorii + produse demo",
      "Checkout optimizat pentru conversie",
      "Plăți & livrare configurate",
      "Tracking esențial (vânzări, add-to-cart, checkout)",
      "Implementare completă, nu doar design",
    ],
    ideal: "Retail, producători, branduri în creștere și business-uri B2B care vor să vândă online serios.",
    href: "/magazine-online",
  },
  {
    id: "04",
    title: "Promovare Continuă",
    tagline: "Creștere lunară, controlată. Fără haos în campanii.",
    text: 'Administrare și optimizare lunară pentru SEO + Ads + conversie. Focus pe cereri și vânzări, nu pe „reach".',
    price: "de la €390/lună",
    delivery: "Ongoing, raport lunar",
    includes: [
      "Optimizare campanii (Google/Meta) sau SEO",
      "Testare mesaje & landing",
      "Tracking & măsurare conversii",
      "Raport clar (ce a mers / ce schimbăm)",
      "Lucrăm pe obiective reale",
      "Fără costuri ascunse",
    ],
    ideal: "Firme care vor rezultate predictibile: servicii locale, magazine online, B2B cu lead-uri.",
    href: "/contact",
  },
  {
    id: "05",
    title: "AI Creative Sprint",
    tagline: "Poziționare și direcție vizuală, livrate în 7 zile.",
    text: "Powered by AI, ghidat de om. Concepte vizuale, moodboard, idei de campanii și direcție de conținut — rapid și aplicabil.",
    price: "€790",
    delivery: "7 zile",
    includes: [
      "Poziționare rapidă + direcție vizuală",
      "Concepte vizuale + moodboard brand",
      "10 idei campanii (ads) + unghiuri mesaj",
      "Direcție conținut social (simplu, aplicabil)",
    ],
    ideal: "Branduri care au nevoie de direcție înainte de lansare sau relansare.",
    href: "/contact",
  },
];

/* ── Promovare Continuă packages ── */
const monthlyPackages = [
  {
    name: "Start",
    price: "€390 / lună",
    desc: "Pentru business-uri locale simple.",
    features: [
      "1 canal principal (Google sau Meta)",
      "Optimizare săptămânală",
      "Raport lunar",
      "Suport email",
    ],
  },
  {
    name: "Growth",
    price: "€590 / lună",
    desc: "Recomandat pentru cereri constante.",
    features: [
      "Google + Meta (sau SEO + Ads)",
      "Testare mesaje & landing",
      "Tracking conversii",
      "Raport lunar + plan",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    price: "€790 / lună",
    desc: "Pentru eCommerce / B2B cu volum.",
    features: [
      "2–3 canale + optimizare conversie",
      "Iterație săptămânală avansată",
      "Raportare extinsă",
      "Suport prioritar",
    ],
  },
];

const faq = [
  {
    q: "Cum aleg ce serviciu mi se potrivește?",
    a: "Programăm o discuție de 20–30 minute. Clarificăm obiectivul și îți spunem exact ce are sens pentru business-ul tău.",
  },
  {
    q: "Cât durează un proiect tipic?",
    a: "Între 7 și 30 zile, în funcție de pachet. Un site de prezentare: 7–14 zile. Un magazin online: 14–30 zile. Marketing: ongoing.",
  },
  {
    q: "Există costuri ascunse?",
    a: "Nu. Prețurile sunt fixe pentru pachetele standard. Orice funcționalitate extra este discutată separat, înainte de confirmare.",
  },
  {
    q: "Bugetul de reclame este inclus?",
    a: "Nu. Bugetul de reclame (Google/Meta) este separat și rămâne în contul tău. Noi administrăm și optimizăm.",
  },
  {
    q: "Cum folosiți AI în proiecte?",
    a: "Omul gândește. AI-ul execută. Reverb livrează. Folosim AI pentru cercetare, eficiență și viteză de execuție. Direcția strategică rămâne umană.",
  },
  {
    q: "Oferiți și suport după lansare?",
    a: "Da. Poți continua cu Promovare Continuă pentru optimizare lunară sau rămâi doar cu sistemul livrat.",
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
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Servicii</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Servicii clare. Livrare structurată.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Alegi pachetul potrivit și știi exact ce urmează. Prețuri fixe, termene reale, implementare completă.
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
                className={`rounded-[32px] border p-8 transition-shadow hover:shadow-[0_20px_60px_rgba(29,39,49,0.07)] md:p-10 ${
                  s.recommended
                    ? "border-[#1d2731]/20 bg-white/80 shadow-[0_10px_40px_rgba(29,39,49,0.08)]"
                    : idx % 2 === 0 ? "border-[#1d2731]/8 bg-white/70" : "border-[#1d2731]/8 bg-[#faf7f2]"
                }`}
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/40">Serviciu {s.id}</div>
                      {s.recommended && (
                        <span className="rounded-full bg-[#1d2731] px-3 py-1 text-xs font-medium text-white">Recomandat</span>
                      )}
                    </div>
                    <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">{s.title}</h2>
                    <p className="mt-2 text-base font-medium text-[#1d2731]/60">{s.tagline}</p>
                    <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{s.text}</p>

                    <div className="mt-6 flex items-baseline gap-4">
                      <span className="text-3xl font-medium tracking-[-0.03em] text-[#1d2731]">{s.price}</span>
                      <span className="text-sm text-[#1d2731]/45">{s.delivery}</span>
                    </div>
                    {s.extra && (
                      <div className="mt-2 text-sm text-[#1d2731]/55">{s.extra}</div>
                    )}

                    <div className="mt-4 rounded-2xl border border-[#1d2731]/8 bg-white/60 px-5 py-3 text-sm text-[#1d2731]/60">
                      <span className="font-medium text-[#1d2731]">Ideal pentru: </span>{s.ideal}
                    </div>
                    <Link
                      href={s.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1d2731] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {s.id === "03" ? "Vezi detalii complete" : "Solicită ofertă"} →
                    </Link>
                    <div className="mt-3 text-xs text-[#1d2731]/35">Termeni: 50% avans / 50% la livrare.</div>
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

      {/* Monthly packages for Promovare Continuă */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Promovare Continuă — Pachete lunare</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Creștere lunară, fără surprize.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Bugetul de reclame NU este inclus. Rămâne în contul clientului (Google/Meta).
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {monthlyPackages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 80}>
                <div
                  className={`rounded-[28px] border p-8 ${
                    pkg.recommended
                      ? "border-[#1d2731] bg-[#1d2731] text-white shadow-[0_20px_60px_rgba(29,39,49,0.15)]"
                      : "border-[#1d2731]/8 bg-white/70"
                  }`}
                >
                  {pkg.recommended && (
                    <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-[#1d2731]">
                      Recomandat
                    </div>
                  )}
                  <div className={`text-sm font-medium ${pkg.recommended ? "text-white/60" : "text-[#1d2731]/50"}`}>
                    {pkg.name}
                  </div>
                  <div className={`mt-2 text-3xl font-medium tracking-[-0.03em] ${pkg.recommended ? "text-white" : "text-[#1d2731]"}`}>
                    {pkg.price}
                  </div>
                  <div className={`mt-2 text-sm ${pkg.recommended ? "text-white/55" : "text-[#1d2731]/45"}`}>
                    {pkg.desc}
                  </div>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-[15px] leading-6 ${pkg.recommended ? "text-white/80" : "text-[#1d2731]/70"}`}>
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${pkg.recommended ? "bg-white/50" : "bg-[#1d2731]/35"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${
                      pkg.recommended
                        ? "bg-white text-[#1d2731] hover:shadow-lg"
                        : "bg-[#1d2731] text-white hover:shadow-lg"
                    }`}
                  >
                    {pkg.recommended ? "Alege Growth" : "Programează discuție"}
                  </Link>
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
                  Nu știi de unde să începi? Hai să stabilim împreună.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  O discuție de 20–30 minute e suficientă ca să înțelegem situația ta și să-ți propunem ce are sens. Fără pitch. Fără presiune.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Programează o discuție
                </Link>
                <Link
                  href="/magazine-online"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Descoperă Magazin Digital
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
