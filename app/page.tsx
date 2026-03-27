import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reverb — Human Digital Marketing AI",
  description:
    "Execuție digitală pentru IMM-uri. Construim prezență online care inspiră încredere și generează cereri. Website + structură + AI. Fără jargon. Fără haos.",
};

/* ── Services preview ── */
const services = [
  {
    title: "Prezență Online",
    desc: "Un site corect, care inspiră încredere.",
    text: "Website modern, structură orientată pe conversie și integrare instrumente esențiale.",
    href: "/servicii",
  },
  {
    title: "Clienți Locali",
    desc: "Telefonul să sune. Cereri constante.",
    text: "SEO local + Ads + tracking apeluri și formulare. Focus pe rezultate reale.",
    href: "/servicii",
  },
  {
    title: "Magazin Digital",
    desc: "Vânzări online, structură de conversie.",
    text: "Magazin optimizat, categorii clare și integrare plăți & livrare.",
    href: "/magazine-online",
  },
  {
    title: "Promovare Continuă",
    desc: "Creștere constantă, nu campanii haotice.",
    text: "Ads, optimizare și raportare lunară. Fără improvizații.",
    href: "/servicii",
  },
  {
    title: "AI Creative Sprint",
    desc: "Vizualuri și direcție, livrate rapid.",
    text: "Poziționare + direcție vizuală + concepte campanii. Powered by AI, ghidat de om.",
    href: "/servicii",
  },
];

/* ── Pricing ── */
const packages = [
  {
    name: "Prezență Online",
    label: "Fundația digitală",
    price: "€990",
    delivery: "Livrare: 7–14 zile",
    features: [
      "Website 3–7 pagini, mobil-first",
      "Formular contact + WhatsApp + Maps",
      "SEO de bază + setare Google Business",
      "Structură orientată pe conversie",
    ],
    cta: "Solicită ofertă",
    href: "/contact",
    recommended: false,
  },
  {
    name: "Clienți Locali",
    label: "Recomandat",
    price: "€1.790",
    delivery: "Setup inițial (30 zile)",
    features: [
      "Landing pagină + SEO local",
      "Setup Google Ads + Meta Ads local",
      "Tracking apeluri & formulare",
      "Optimizare Google Business",
    ],
    extra: "Administrare lunară: €490 / lună (+ buget ads)",
    cta: "Programează discuție",
    href: "/contact",
    recommended: true,
  },
  {
    name: "AI Creative Sprint",
    label: "7 zile",
    price: "€790",
    delivery: "Livrare: 7 zile",
    features: [
      "Poziționare rapidă + direcție vizuală",
      "Concepte vizuale + moodboard brand",
      "10 idei campanii (ads) + unghiuri mesaj",
      "Direcție conținut social",
    ],
    cta: "Solicită ofertă",
    href: "/contact",
    recommended: false,
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    text: "Am trecut de la un site vechi la un sistem care generează constant cereri. Totul a fost structurat și organizat.",
    name: "Andrei M.",
    role: "Administrator – firmă construcții",
  },
  {
    text: "Nu am vrut trafic, am vrut programări. În 2 luni am văzut diferența.",
    name: "Dr. Cristina P.",
    role: "Clinică locală",
  },
  {
    text: "Pentru prima dată am înțeles exact ce plătesc și ce primesc.",
    name: "Mihai D.",
    role: "Magazin online",
  },
  {
    text: "Structura a făcut diferența. Nu am mai simțit că experimentăm.",
    name: "Elena R.",
    role: "Consultant B2B",
  },
];

/* ── FAQ ── */
const faq = [
  {
    q: "Cât durează implementarea?",
    a: "În funcție de pachet, între 7 și 30 zile. Stabilim termenul exact de la început.",
  },
  {
    q: "Există costuri ascunse?",
    a: "Nu. Prețurile sunt fixe pentru pachetele standard. Orice funcționalitate extra este discutată separat.",
  },
  {
    q: "Ce se întâmplă după lansare?",
    a: "Dacă alegi Promovare Continuă, administrăm și optimizăm lunar. Dacă nu, sistemul rămâne funcțional.",
  },
  {
    q: "Cum folosiți AI în proiecte?",
    a: "Omul gândește. AI-ul execută. Reverb livrează. Folosim AI pentru cercetare, eficiență și viteză de execuție. Direcția strategică rămâne umană.",
  },
  {
    q: "De ce nu sunteți cea mai ieftină opțiune?",
    a: "Pentru că livrăm structură, implementare și raportare reală. Nu vindem doar un site, ci un sistem funcțional.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,170,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(118,86,143,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.10),transparent_28%)]" />
        <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full border border-white/40 opacity-60 blur-[2px]" />
        <div className="absolute right-[-5%] top-36 h-80 w-80 rounded-full border border-[#6d5c87]/20 opacity-70" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
          <Reveal>
            <div className="mb-6 inline-flex items-center rounded-full border border-[#1d2731]/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#1d2731]/70 shadow-sm backdrop-blur">
              Human Digital Marketing AI
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] text-[#1d2731] md:text-7xl lg:text-[88px]">
              Execuție digitală pentru IMM-uri
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/72 md:text-xl">
              Construim prezență online care inspiră încredere și generează cereri. Website modern + structură + integrare instrumente. Omul gândește, AI-ul execută, Reverb livrează. Fără jargon. Fără haos.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-[#1d2731] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Solicită ofertă
                <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/servicii"
                className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/15 bg-white/75 px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:border-[#1d2731]/30 hover:bg-white"
              >
                Vezi serviciile
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 text-sm text-[#1d2731]/50">
              Termeni: 50% avans / 50% la livrare · Prețuri afișate · Proces clar
            </div>
          </Reveal>

          {/* Quick deliverables */}
          <Reveal delay={400}>
            <div className="mt-12 rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-[0_10px_40px_rgba(29,39,49,0.06)] backdrop-blur-sm max-w-2xl">
              <div className="text-sm font-semibold text-[#1d2731] mb-4">Ce primești în 7–14 zile</div>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Website 3–7 pagini, mobil-first",
                  "Formular + WhatsApp + Maps",
                  "SEO de bază + Google Business",
                  "Structură orientată pe conversie",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm leading-6 text-[#1d2731]/65">
                    <span className="mt-1.5 text-[#1d2731]/40">✔</span>
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1d2731]/70 transition hover:text-[#1d2731]"
              >
                Programează discuție →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Servicii</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Servicii clare. Livrare structurată.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Alegi pachetul potrivit și știi exact ce urmează.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <Link
                  href={service.href}
                  className="group block rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,39,49,0.08)]"
                >
                  <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#1d2731] to-transparent opacity-40 transition-all group-hover:w-24" />
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#1d2731]">{service.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[#1d2731]/50">{service.desc}</p>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/68">{service.text}</p>
                  <div className="mt-6 text-xs font-medium text-[#1d2731]/40 transition group-hover:text-[#1d2731]/70">
                    Detalii →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Prețuri</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Prețuri fixe. Livrare structurată.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              Pachete clare pentru IMM-uri care vor rezultate, nu discuții interminabile.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 80}>
              <div
                className={`relative rounded-[28px] border p-8 ${
                  pkg.recommended
                    ? "border-[#1d2731] bg-[#1d2731] text-white shadow-[0_20px_60px_rgba(29,39,49,0.15)]"
                    : "border-[#1d2731]/8 bg-white/70"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-8 rounded-full bg-white px-4 py-1 text-xs font-medium text-[#1d2731]">
                    Recomandat
                  </div>
                )}
                <div className={`text-sm font-medium ${pkg.recommended ? "text-white/60" : "text-[#1d2731]/50"}`}>
                  {pkg.name}
                </div>
                <div className={`mt-3 text-4xl font-medium tracking-[-0.04em] ${pkg.recommended ? "text-white" : "text-[#1d2731]"}`}>
                  {pkg.price}
                </div>
                <div className={`mt-2 text-sm ${pkg.recommended ? "text-white/55" : "text-[#1d2731]/45"}`}>
                  {pkg.delivery}
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[15px] leading-6 ${pkg.recommended ? "text-white/80" : "text-[#1d2731]/70"}`}>
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${pkg.recommended ? "bg-white/50" : "bg-[#1d2731]/35"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {pkg.extra && (
                  <div className={`mt-4 rounded-2xl p-3 text-sm ${pkg.recommended ? "bg-white/10 text-white/70" : "bg-[#faf7f2] text-[#1d2731]/60"}`}>
                    {pkg.extra}
                  </div>
                )}

                <Link
                  href={pkg.href}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 ${
                    pkg.recommended
                      ? "bg-white text-[#1d2731] hover:shadow-lg"
                      : "bg-[#1d2731] text-white hover:shadow-lg"
                  }`}
                >
                  {pkg.cta}
                </Link>

                <div className={`mt-4 text-center text-xs ${pkg.recommended ? "text-white/40" : "text-[#1d2731]/35"}`}>
                  Termeni: 50% avans / 50% la livrare.
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 text-center text-sm text-[#1d2731]/50">
            Notă: Prețurile sunt fixe pentru pachetele standard. Cerințe speciale (multilingual, integrare CRM, funcții custom) → ofertă separată.
          </p>
        </Reveal>
      </section>

      {/* Process — 4 steps */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Cum lucrăm</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Proces clar. Fără improvizații.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Fiecare proiect urmează o structură simplă, astfel încât știi exact ce urmează.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { step: "01", title: "Discuție & Obiectiv", text: "Clarificăm ce vrei să obții: apeluri, leaduri sau vânzări." },
              { step: "02", title: "Structură & Implementare", text: "Construim sistemul pe baza obiectivului stabilit." },
              { step: "03", title: "Lansare & Configurare", text: "Activăm, testăm și verificăm conversiile." },
              { step: "04", title: "Optimizare & Ajustare", text: "Monitorizăm și ajustăm pentru performanță stabilă." },
            ].map((a, i) => (
              <Reveal key={a.step} delay={i * 80}>
                <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-7">
                  <div className="mb-6 text-4xl font-medium tracking-[-0.04em] text-[#1d2731]/20">{a.step}</div>
                  <h3 className="text-xl font-medium text-[#1d2731]">{a.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/70">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-center text-sm text-[#1d2731]/50">
              Durată medie implementare: 7–30 zile, în funcție de pachet și complexitate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pentru cine este Reverb */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pentru cine</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Pentru cine este Reverb
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              Lucrăm cu firme care vor structură, rezultate și creștere stabilă.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
              <div className="text-sm font-semibold text-[#1d2731] mb-5">✔ Este potrivit pentru:</div>
              <ul className="space-y-3">
                {[
                  "IMM-uri locale care vor mai multe cereri și apeluri",
                  "Firme tradiționale care intră în digital",
                  "Businessuri care au buget real și vor rezultate",
                  "Antreprenori care caută structură, nu experimente",
                ].map((item) => (
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
                {[
                  "Start-up fără buget definit",
                  "Antreprenori care schimbă direcția constant",
                  'Clienți care caută „cel mai ieftin preț"',
                  "Proiecte fără obiectiv concret",
                ].map((item) => (
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

      {/* Testimonials */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Testimoniale</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Ce spun clienții noștri
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Colaborări bazate pe structură și rezultate.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white p-7 shadow-[0_10px_40px_rgba(29,39,49,0.04)]">
                  <p className="text-[15px] leading-7 text-[#1d2731]/74">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-5">
                    <div className="text-sm font-medium text-[#1d2731]">{t.name}</div>
                    <div className="text-xs text-[#1d2731]/45">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* De ce Reverb */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">De ce Reverb</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Nu concurăm pe preț. Concurăm pe structură și rezultate.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: "Prețuri fixe & transparente", text: "Știi de la început cât plătești și ce primești." },
            { title: "Proces clar în 4 pași", text: "Fără improvizații. Fără schimbări haotice." },
            { title: "Focus pe rezultate", text: "Nu trafic. Nu vizualizări. Ci cereri și vânzări." },
            { title: "Implementare, nu doar strategie", text: "Construim și configurăm. Nu livrăm doar prezentări." },
            { title: "Raportare clară", text: "Vezi exact ce funcționează și ce ajustăm." },
            { title: "Human + AI", text: "Omul dă direcția, AI-ul accelerează execuția, Reverb livrează." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-7 shadow-[0_10px_40px_rgba(29,39,49,0.05)]">
                <h3 className="text-lg font-medium text-[#1d2731]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/70">{item.text}</p>
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
                Întrebări frecvente
              </h2>
              <p className="mt-4 text-base leading-7 text-[#1d2731]/65">
                Răspunsuri clare la întrebările pe care le primim cel mai des.
              </p>
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
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">Hai să vorbim</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  Dacă vrei un sistem care generează clienți, nu doar un site, hai să discutăm.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  Stabilim obiectivul, structura și termenul de implementare din prima discuție.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Programează o discuție
                </Link>
                <Link
                  href="/servicii"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Vezi pachetele
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
