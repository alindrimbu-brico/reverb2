import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reverb — Infrastructură Digitală pentru IMM-uri",
  description:
    "Reverb construiește infrastructură digitală pentru IMM-uri: site-uri, magazine online și sisteme de marketing în care omul și AI-ul lucrează împreună. Claritate, structură, rezultate.",
};

/* ── Reverb Stack — 3 niveluri ── */
const stack = [
  {
    level: "Nivel 1 — Atrage clienți",
    subtitle: "Vizibilitate care generează cerere",
    services: [
      {
        title: "Creare site",
        text: "Infrastructura ta de vizibilitate. Site-uri clare, rapide și construite pentru conversie.",
        href: "/servicii",
      },
      {
        title: "SEO & Landing Pages",
        text: "Arhitectură de conținut care aduce clienți, nu doar trafic.",
        href: "/servicii",
      },
    ],
  },
  {
    level: "Nivel 2 — Gestionează operațiunile",
    subtitle: "Transformă activitatea în sistem",
    services: [
      {
        title: "Magazine online complete",
        text: "Sistemul tău de vânzare. Arhitectură de categorie, checkout curat, logică comercială.",
        href: "/magazine-online",
      },
      {
        title: "Marketing digital",
        text: "Cereri constante, nu campanii haotice. Ads, email, funnel-uri integrate.",
        href: "/servicii",
      },
    ],
  },
  {
    level: "Nivel 3 — Crește stabil",
    subtitle: "Infrastructură tehnică pentru scală",
    services: [
      {
        title: "Branding & AI",
        text: "Poziționare care scalează. Identitate autentică, amplificată inteligent.",
        href: "/servicii",
      },
      {
        title: "Consultanță continuă",
        text: "Parteneriat real, nu relație de proiect. Optimizare, mentenanță, creștere.",
        href: "/servicii",
      },
    ],
  },
];

const trajectory = [
  { label: "Haos", desc: "Lipsa de structură, decizii reactive" },
  { label: "Structură", desc: "Obiective clare, plan definit" },
  { label: "Sisteme", desc: "Procese funcționale, automatizări" },
  { label: "Scală", desc: "Creștere stabilă și predictibilă" },
];

export default function HomePage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,170,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(118,86,143,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.10),transparent_28%)]" />
          <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full border border-white/40 opacity-60 blur-[2px]" />
          <div className="absolute right-[-5%] top-36 h-80 w-80 rounded-full border border-[#6d5c87]/20 opacity-70" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-28 lg:pt-16">
            <div>
              <Reveal>
                <div className="mb-6 inline-flex items-center rounded-full border border-[#1d2731]/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#1d2731]/70 shadow-sm backdrop-blur">
                  Infrastructură Digitală pentru IMM-uri
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] text-[#1d2731] md:text-7xl lg:text-[88px]">
                  Construim infrastructură digitală, nu doar site-uri.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/72 md:text-xl">
                  Site-uri, magazine și sisteme de marketing în care AI-ul amplifică omul — nu îl înlocuiește. De la haos digital la structură care scalează.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center rounded-full bg-[#1d2731] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Programează un call
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="/servicii"
                    className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/15 bg-white/75 px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:border-[#1d2731]/30 hover:bg-white"
                  >
                    Vezi infrastructura completă
                  </Link>
                </div>
              </Reveal>

              <div className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-3">
                {[
                  ["Omul gândește", "Direcția strategică rămâne umană. AI-ul amplifică execuția."],
                  ["Sisteme, nu campanii", "Infrastructură digitală pe termen lung, nu acțiuni izolate."],
                  ["Parteneriat real", "Nu dispărem după lansare. Rămânem în joc cu tine."],
                ].map(([title, text], i) => (
                  <Reveal key={title} delay={320 + i * 80}>
                    <div className="card-hover rounded-3xl border border-white/60 bg-white/55 p-5 shadow-[0_10px_40px_rgba(29,39,49,0.06)] backdrop-blur-sm">
                      <div className="text-sm font-semibold text-[#1d2731]">{title}</div>
                      <div className="mt-2 text-sm leading-6 text-[#1d2731]/65">{text}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Trajectory card */}
            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -left-5 top-8 hidden h-[88%] w-px bg-gradient-to-b from-transparent via-[#7c8caa]/40 to-transparent lg:block" />
                <div className="rounded-[32px] border border-white/70 bg-white/65 p-6 shadow-[0_20px_80px_rgba(29,39,49,0.08)] backdrop-blur md:p-8">
                  <div className="mb-6 flex items-center justify-between border-b border-[#1d2731]/8 pb-5">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-[#1d2731]/50">Traiectoria clientului</div>
                      <div className="mt-2 text-lg font-medium text-[#1d2731]">De la haos la scală</div>
                    </div>
                    <div className="rounded-full border border-[#1d2731]/10 px-3 py-1 text-xs text-[#1d2731]/55">4 etape</div>
                  </div>

                  <div className="space-y-4">
                    {trajectory.map((step, index) => (
                      <div
                        key={step.label}
                        className="rounded-2xl border border-[#1d2731]/8 bg-[#faf7f2] p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <div className="text-xs uppercase tracking-[0.25em] text-[#1d2731]/40">0{index + 1}</div>
                          <div className="h-px flex-1 bg-[#1d2731]/10" />
                        </div>
                        <div className="text-base font-medium text-[#1d2731]">{step.label}</div>
                        <div className="mt-1 text-sm leading-6 text-[#1d2731]/60">{step.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[28px] bg-[#1d2731] p-6 text-white">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/55">Filosofie</div>
                    <p className="mt-4 text-base leading-7 text-white/88">
                      Reverb nu construiește site-uri. Reverb construiește infrastructură digitală — sisteme funcționale în care omul și AI-ul lucrează împreună pentru a genera claritate, cereri și creștere stabilă.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Reverb Stack — Services by level */}
        <section className="border-y border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">The Reverb Stack</div>
                  <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                    Infrastructură digitală pe 3 niveluri.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                    Fiecare componentă se conectează într-un tot coerent. Nu livrăm pagini — livrăm sisteme.
                  </p>
                </div>
                <Link
                  href="/servicii"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full border border-[#1d2731]/15 bg-white px-5 py-2.5 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5"
                >
                  Toate serviciile →
                </Link>
              </div>
            </Reveal>

            <div className="space-y-8">
              {stack.map((tier, ti) => (
                <Reveal key={tier.level} delay={ti * 100}>
                  <div className="rounded-[32px] border border-[#1d2731]/8 bg-[#faf7f2] p-7 md:p-9">
                    <div className="mb-6">
                      <div className="text-xs uppercase tracking-[0.28em] text-[#1d2731]/45">{tier.level}</div>
                      <div className="mt-1 text-sm text-[#1d2731]/60">{tier.subtitle}</div>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      {tier.services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="group block rounded-[24px] border border-[#1d2731]/8 bg-white/80 p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,39,49,0.08)]"
                        >
                          <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#1d2731] to-transparent opacity-40 transition-all group-hover:w-24" />
                          <h3 className="text-xl font-medium tracking-[-0.02em] text-[#1d2731]">{service.title}</h3>
                          <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/68">{service.text}</p>
                          <div className="mt-5 text-xs font-medium text-[#1d2731]/40 transition group-hover:text-[#1d2731]/70">
                            Află mai mult →
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About snippet */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Despre noi</div>
                <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                  Vocea locală a unui ecosistem global.
                </h2>
                <p className="mt-5 text-base leading-7 text-[#1d2731]/65">
                  Reverb este divizia de execuție locală a unui ecosistem digital mai amplu. Construim infrastructură digitală pentru IMM-uri și antreprenori care vor structură și rezultate reale.
                </p>
                <Link
                  href="/despre"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#1d2731]/15 bg-white px-5 py-2.5 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5"
                >
                  Cine suntem →
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Infrastructură, nu prezență",
                  text: "Nu livrăm pagini — livrăm sisteme. Fiecare componentă se conectează într-un tot coerent care generează rezultate.",
                },
                {
                  title: "Structură înainte de execuție",
                  text: "Niciun proiect nu pornește fără obiectiv clar și parametri definiți. Discuție → Confirmare → Implementare → Livrare.",
                },
                {
                  title: "Omul dă direcția. AI-ul amplifică.",
                  text: "Nu renunțăm la gândire în favoarea automatizării. AI-ul scurtează haosul — nu înlocuiește discernământul uman.",
                },
                {
                  title: "De la haos la scală",
                  text: "Traiectoria fiecărui client: Haos → Structură → Sisteme → Scală. Reverb intervine la oricare etapă.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-7 shadow-[0_10px_40px_rgba(29,39,49,0.05)]">
                    <h3 className="text-lg font-medium text-[#1d2731]">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/70">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process — 4 steps */}
        <section className="border-y border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Cum lucrăm</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  Procesul în 4 pași. Predictibil și transparent.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                  Știi de la început ce plătești și ce primești. Fără improvizații.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { step: "01", title: "Discuție & Obiectiv", text: "Clarificăm ce vrei să obții. Înțelegem business-ul, publicul și direcția." },
                { step: "02", title: "Structură & Plan", text: "Proiectăm infrastructura potrivită. Arhitectură, mesaje, parametri." },
                { step: "03", title: "Implementare & Lansare", text: "Construim, configurăm, testăm. Design, cod, copy — totul cu disciplină." },
                { step: "04", title: "Optimizare & Creștere", text: "Monitorizăm și ajustăm continuu. Un sistem sănătos crește cu fiecare lună." },
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
                    Gata de infrastructură digitală care funcționează?
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                    Stabilim obiectivul, structura și termenul de implementare din prima discuție. Fără improvizații. Claritate, structură, execuție disciplinată.
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:items-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Programează un call gratuit
                  </Link>
                  <Link
                    href="/servicii"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    Vezi toate serviciile
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
}
