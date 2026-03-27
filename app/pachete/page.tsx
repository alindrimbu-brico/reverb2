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
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Prețuri</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Prețuri fixe.<br />Fără surprize.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Fiecare pachet are un preț clar, un set fix de livrabile și un termen definit. Știi de la început ce primești și cât plătești.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One-time Packages */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pachete one-time</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Proiecte cu livrare definită
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              Plătești o dată, primești un sistem funcțional. Fără abonament obligatoriu.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-[28px] border p-8 shadow-[0_10px_40px_rgba(29,39,49,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(29,39,49,0.10)] ${
                  pkg.highlight
                    ? "border-[#1d2731] bg-[#1d2731] text-white"
                    : "border-[#1d2731]/8 bg-white/70"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-[#31584f] px-4 py-1 text-xs font-semibold text-white">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div className={`text-xs uppercase tracking-[0.25em] ${pkg.highlight ? "text-white/50" : "text-[#1d2731]/45"}`}>
                    {pkg.delivery}
                  </div>
                  <h3 className={`mt-2 text-2xl font-medium ${pkg.highlight ? "text-white" : "text-[#1d2731]"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mt-2 text-sm leading-6 ${pkg.highlight ? "text-white/70" : "text-[#1d2731]/65"}`}>
                    {pkg.tagline}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-medium tracking-[-0.03em] ${pkg.highlight ? "text-white" : "text-[#1d2731]"}`}>
                    {pkg.price}
                  </span>
                  {pkg.priceExtra && (
                    <p className={`mt-1 text-sm ${pkg.highlight ? "text-white/60" : "text-[#1d2731]/50"}`}>
                      {pkg.priceExtra}
                    </p>
                  )}
                </div>

                <p className={`mb-6 text-sm leading-7 ${pkg.highlight ? "text-white/75" : "text-[#1d2731]/65"}`}>
                  {pkg.description}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${pkg.highlight ? "bg-[#31584f]" : "bg-[#31584f]"}`} />
                      <span className={pkg.highlight ? "text-white/80" : "text-[#1d2731]/70"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={`mb-6 rounded-2xl px-4 py-3 text-sm ${pkg.highlight ? "bg-white/10" : "bg-[#f5f1ea]"}`}>
                  <span className={`font-medium ${pkg.highlight ? "text-white/60" : "text-[#1d2731]/50"}`}>Ideal pentru: </span>
                  <span className={pkg.highlight ? "text-white/80" : "text-[#1d2731]/70"}>{pkg.ideal}</span>
                </div>

                <Link
                  href={pkg.href}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-md ${
                    pkg.highlight
                      ? "bg-white text-[#1d2731]"
                      : "bg-[#1d2731] text-white"
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
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Promovare Continuă</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Administrare lunară
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Gestionăm campaniile tale lunar — optimizare, raportare, ajustări. Bugetul de ads se plătește separat.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {monthlyTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div
                  className={`relative flex h-full flex-col rounded-[28px] border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(29,39,49,0.10)] ${
                    tier.recommended
                      ? "border-[#1d2731] bg-[#1d2731] text-white shadow-[0_10px_40px_rgba(29,39,49,0.15)]"
                      : "border-[#1d2731]/8 bg-white/70 shadow-[0_10px_40px_rgba(29,39,49,0.05)]"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-[#31584f] px-4 py-1 text-xs font-semibold text-white">
                      Recomandat
                    </div>
                  )}
                  <h3 className={`text-xl font-medium ${tier.recommended ? "text-white" : "text-[#1d2731]"}`}>
                    {tier.name}
                  </h3>
                  <p className={`mt-1 text-sm ${tier.recommended ? "text-white/60" : "text-[#1d2731]/50"}`}>
                    {tier.desc}
                  </p>
                  <div className={`my-6 text-3xl font-medium tracking-[-0.03em] ${tier.recommended ? "text-white" : "text-[#1d2731]"}`}>
                    {tier.price}
                  </div>
                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31584f]" />
                        <span className={tier.recommended ? "text-white/80" : "text-[#1d2731]/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-md ${
                      tier.recommended ? "bg-white text-[#1d2731]" : "bg-[#1d2731] text-white"
                    }`}
                  >
                    Alege {tier.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <p className="mt-8 text-center text-sm text-[#1d2731]/50">
              + buget ads separat (Google / Meta). Contractul minim: 3 luni.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pentru cine */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Potrivire</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Pentru cine sunt aceste pachete?
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
              <div className="text-sm font-semibold text-[#1d2731] mb-5">✔ Este potrivit pentru:</div>
              <ul className="space-y-3">
                {forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#1d2731]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31584f]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-8">
              <div className="text-sm font-semibold text-[#1d2731] mb-5">✖ Nu este potrivit pentru:</div>
              <ul className="space-y-3">
                {notFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#1d2731]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/25" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How payment works */}
      <section className="border-y border-[#1d2731]/8 bg-[#1d2731] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12 text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">Transparență</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Cum funcționează plata
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
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
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                  <div className="mb-4 text-4xl font-medium tracking-[-0.04em] text-white/20">{item.step}</div>
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Întrebări frecvente</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Înainte să trimiți mesajul
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-7 shadow-[0_10px_40px_rgba(29,39,49,0.05)]">
                <h3 className="text-base font-semibold text-[#1d2731]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-[#1d2731]/65">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Alege pachetul potrivit pentru afacerea ta.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Discuție inițială de 20–30 minute. Fără obligații. Stabilim obiectivul și vedem dacă suntem potriviți.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:shrink-0">
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
          </div>
        </section>
      </Reveal>
    </div>
  );
}
