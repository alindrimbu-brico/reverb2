import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { packages, monthlyTiers } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Pachete & Prețuri",
  description:
    "Prețuri fixe, fără surprize. Alege pachetul potrivit pentru afacerea ta — de la prezență online la magazin digital sau promovare continuă.",
};

const faqs = [
  {
    q: "Cât durează un proiect?",
    a: "Depinde de pachet: 7–14 zile pentru Prezență Online, 30 zile pentru Clienți Locali, 14–30 zile pentru Magazin Digital și 7 zile pentru AI Creative Sprint.",
  },
  {
    q: "Cum funcționează plata?",
    a: "50% avans la începerea proiectului, 50% la predare. Fără costuri ascunse față de oferta agreată.",
  },
  {
    q: "Includ pachetele și hosting / domeniu?",
    a: "Costurile de hosting și domeniu sunt separate și le plătești direct la furnizor. Te ajutăm cu selectarea și configurarea lor.",
  },
  {
    q: "Pot schimba pachetul după start?",
    a: "Da, dar upgradarea se face la începutul unui ciclu nou. Downgrade-ul nu este posibil după ce munca a început.",
  },
  {
    q: "Bugetul de ads este inclus?",
    a: "Nu. Bugetul de ads (Google, Meta) se plătește separat, direct platformelor. Noi gestionăm campaniile, tu controlezi bugetul.",
  },
  {
    q: "Lucrați cu orice tip de business?",
    a: "Selectăm proiectele. Lucrăm cu IMM-uri care au obiectiv concret, buget real și vor rezultate măsurabile — nu experimente.",
  },
];

const notFor = [
  "Start-up fără buget definit",
  "Antreprenori care schimbă direcția constant",
  'Clienți care caută „cel mai ieftin preț"',
  "Proiecte fără obiectiv concret",
];

const forWhom = [
  "IMM-uri locale care vor mai multe cereri și apeluri",
  "Firme tradiționale care intră în digital",
  "Businessuri care au buget real și vor rezultate",
  "Antreprenori care caută structură, nu experimente",
];

export default function PachetePage() {
  return (
    <div className="bg-[#030303] text-neutral-200 min-h-screen font-sans selection:bg-purple-900/50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,180,0.15),transparent_50%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">Prețuri / Structură</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.1] tracking-tight md:text-7xl lg:text-[80px] text-white">
              Prețuri fixe.<br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500">Fără surprize.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 font-light md:text-xl">
              Fiecare pachet are un preț clar, un set fix de livrabile și un termen definit. Știi de la început ce primești și cât plătești.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Guru Store Promo */}
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900/30 border border-amber-500/20 p-10 md:p-14 mb-8 backdrop-blur-sm group hover:border-amber-500/40 transition-colors duration-700">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none group-hover:bg-[radial-gradient(circle,rgba(245,166,35,0.12)_0%,transparent_70%)] transition-colors duration-700" />
            <div className="relative z-10 md:flex md:items-center md:justify-between md:gap-12">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-amber-400">
                  Noutate Exclusivă
                </div>
                <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
                  GURU. <span className="text-amber-400">Magazin de Idei.</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral-400 font-light">
                  Am transformat consultanța premium într-un magazin digital. Descoperă hint-uri educaționale și strategii scalabile care răspund exact nevoilor tale. Plătești pentru claritate.
                </p>
              </div>
              <div className="mt-8 shrink-0 md:mt-0">
                <Link
                  href="/guru"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 px-8 py-4 text-sm font-semibold tracking-wide text-amber-400 transition hover:bg-amber-500 hover:text-black hover:shadow-[0_0_30px_rgba(245,166,35,0.4)]"
                >
                  Descoperă Lumina →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* One-time Packages */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">Pachete one-time</div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
              Proiecte cu livrare definită
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 font-light">
              Plătești o dată, primești un sistem funcțional. Fără abonament obligatoriu.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80}>
              <div className={`relative flex flex-col h-full rounded-[2rem] p-10 border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-neutral-900 to-[#030303] border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.1)] hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]"
                    : "bg-neutral-900/30 border-neutral-800/50 hover:border-neutral-700/80 hover:bg-neutral-900/50"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-10 inline-flex items-center rounded-full bg-purple-500/20 border border-purple-500/30 px-4 py-1 text-xs font-mono tracking-widest text-purple-300 backdrop-blur-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    {pkg.delivery}
                  </div>
                  <h3 className="text-3xl font-medium text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="mb-8 pb-8 border-b border-neutral-800">
                  <span className="text-5xl font-light tracking-tight text-white">
                    {pkg.price}
                  </span>
                  {pkg.priceExtra && (
                    <p className="mt-3 text-sm text-neutral-500">
                      {pkg.priceExtra}
                    </p>
                  )}
                </div>

                <p className="mb-8 text-sm leading-relaxed text-neutral-300 font-light">
                  {pkg.description}
                </p>

                <ul className="mb-10 flex-1 space-y-4">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-sm font-light text-neutral-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-10 rounded-2xl bg-neutral-900/50 border border-neutral-800 p-5 text-sm font-light">
                  <span className="font-medium text-neutral-500 uppercase tracking-wider text-xs block mb-1">Ideal pentru: </span>
                  <span className="text-neutral-300">{pkg.ideal}</span>
                </div>

                <Link
                  href={pkg.href}
                  className={`inline-flex items-center justify-center w-full rounded-full px-6 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/20"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Discută acest pachet
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Monthly Tiers */}
      <section className="border-y border-neutral-800/50 bg-neutral-900/20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="mb-16">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">Promovare Continuă</div>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
                Administrare lunară
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 font-light">
                Gestionăm campaniile tale lunar — optimizare, raportare, ajustări. Bugetul de ads se plătește separat.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {monthlyTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div className={`relative flex flex-col h-full rounded-[2rem] p-10 border transition-all duration-500 hover:-translate-y-1 ${
                    tier.recommended
                      ? "bg-gradient-to-b from-neutral-900 to-[#030303] border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:border-emerald-500/60"
                      : "bg-neutral-900/30 border-neutral-800/50 hover:border-neutral-700/80"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-10 inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-1 text-xs font-mono tracking-widest text-emerald-300 backdrop-blur-md">
                      Recomandat
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light mb-8">
                    {tier.desc}
                  </p>
                  
                  <div className="text-4xl font-light tracking-tight text-white mb-10 pb-8 border-b border-neutral-800">
                    {tier.price}
                  </div>
                  
                  <ul className="mb-10 flex-1 space-y-4">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-4 text-sm font-light text-neutral-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center w-full rounded-full px-6 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                      tier.recommended 
                        ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20" 
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    Alege {tier.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <p className="mt-12 text-center text-sm text-neutral-500 font-mono tracking-wide">
              + buget ads separat (Google / Meta). Contractul minim: 3 luni.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pentru cine */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">Potrivire</div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
              Pentru cine sunt aceste pachete?
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-neutral-800/50 bg-neutral-900/30 p-10 h-full hover:border-emerald-500/30 transition-colors duration-500">
              <div className="text-sm font-mono tracking-widest uppercase text-emerald-400 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400">✓</span> 
                Este potrivit pentru:
              </div>
              <ul className="space-y-5">
                {forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base font-light text-neutral-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-neutral-800/50 bg-neutral-900/10 p-10 h-full hover:border-rose-500/30 transition-colors duration-500">
              <div className="text-sm font-mono tracking-widest uppercase text-rose-400 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/20 text-rose-400">✕</span> 
                Nu este potrivit pentru:
              </div>
              <ul className="space-y-5">
                {notFor.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base font-light text-neutral-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How payment works */}
      <section className="border-y border-neutral-800/50 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="mb-16 text-center">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Transparență</div>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
                Cum funcționează plata
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "50% avans",
                text: "La semnarea contractului și înainte de a începe lucrul. Acoperă strategia, structura și implementarea inițială.",
              },
              {
                step: "02",
                title: "Implementare",
                text: "Lucrăm conform planului agreat. Actualizări regulate de progres. Fără surprize la final.",
              },
              {
                step: "03",
                title: "50% la predare",
                text: "Plătești restul doar când proiectul este gata și funcțional. Predare completă cu acces total.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="relative p-10 h-full border-l border-neutral-800 hover:border-purple-500/50 transition-colors duration-500">
                  <div className="mb-6 text-5xl font-light text-neutral-800">{item.step}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-neutral-400">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">Întrebări frecvente</div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl text-white">
              Înainte să trimiți mesajul
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="border-b border-neutral-800/50 pb-8 h-full">
                <h3 className="text-lg font-medium text-white mb-4">{faq.q}</h3>
                <p className="text-sm font-light leading-relaxed text-neutral-400">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-neutral-900/20 border border-purple-500/20 p-10 md:p-16 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight md:text-5xl text-white">
                Alege pachetul potrivit.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-neutral-400">
                Discuție inițială de 20–30 minute. Fără obligații. Stabilim obiectivul și vedem dacă suntem potriviți.
              </p>
            </div>
            <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-black transition-all hover:bg-neutral-200 hover:scale-105"
              >
                Programează discuția
              </Link>
              <Link
                href="/servicii"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-white/10"
              >
                Vezi serviciile
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

