import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reverb — Human Digital Marketing AI",
  description:
    "Construim afaceri digitale clare, stabile și pe sufletul tău. Site-uri, magazine online și sisteme de marketing în care omul și AI-ul lucrează împreună.",
};

const services = [
  {
    title: "Creare site",
    text: "Site-uri clare, rapide și construite pentru conversie, nu pentru a impresiona doar designerii.",
    href: "/servicii",
  },
  {
    title: "Magazine online complete",
    text: "Arhitectură de vânzare, structură de categorie, checkout curat și logică de business sănătoasă.",
    href: "/magazine-online",
  },
  {
    title: "Marketing digital",
    text: "Ads, email, content și funnel-uri care lucrează împreună, nu campanii aruncate în aer și uitate.",
    href: "/servicii",
  },
  {
    title: "Branding & AI",
    text: "Poziționare, mesaje și sisteme în care AI amplifică munca umană, fără să-i ia sufletul.",
    href: "/servicii",
  },
  {
    title: "Consultanță continuă",
    text: "Optimizare, mentenanță și parteneriat real pentru business-uri care vor stabilitate, nu artificii.",
    href: "/servicii",
  },
];

const headlines = [
  "Marketing digital uman, amplificat de AI.",
  "Construim afaceri digitale clare, stabile și pe sufletul tău.",
  "Mai puțin haos. Mai multă claritate, conversie și sens.",
  "Nu doar lansăm site-uri. Construim sisteme care vând.",
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
                  claritate digitală • uman + AI • creștere stabilă
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] text-[#1d2731] md:text-7xl lg:text-[88px]">
                  Construim afaceri digitale clare, stabile și pe sufletul tău.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/72 md:text-xl">
                  Reverb creează site-uri, magazine online și sisteme de marketing digital în care tehnologia și AI-ul lucrează în favoarea omului. Fără jargon inutil. Fără haos frumos ambalat. Cu structură, sens și rezultate.
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
                    href="/magazine-online"
                    className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/15 bg-white/75 px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:border-[#1d2731]/30 hover:bg-white"
                  >
                    Vezi magazinul online complet
                  </Link>
                </div>
              </Reveal>

              <div className="mt-12 grid max-w-2xl gap-5 sm:grid-cols-3">
                {[
                  ["Uman + AI", "Folosim AI ca amplificator, nu ca mască."],
                  ["Funnel-uri clare", "Structură comercială gândită pe termen lung."],
                  ["Parteneriat real", "Rămânem în joc și după lansare."],
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

            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -left-5 top-8 hidden h-[88%] w-px bg-gradient-to-b from-transparent via-[#7c8caa]/40 to-transparent lg:block" />
                <div className="rounded-[32px] border border-white/70 bg-white/65 p-6 shadow-[0_20px_80px_rgba(29,39,49,0.08)] backdrop-blur md:p-8">
                  <div className="mb-6 flex items-center justify-between border-b border-[#1d2731]/8 pb-5">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-[#1d2731]/50">Headline set</div>
                      <div className="mt-2 text-lg font-medium text-[#1d2731]">Mesajele care definesc Reverb</div>
                    </div>
                    <div className="rounded-full border border-[#1d2731]/10 px-3 py-1 text-xs text-[#1d2731]/55">V1</div>
                  </div>

                  <div className="space-y-4">
                    {headlines.map((line, index) => (
                      <div
                        key={line}
                        className="rounded-2xl border border-[#1d2731]/8 bg-[#faf7f2] p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[#1d2731]/40">0{index + 1}</div>
                        <div className="text-base leading-7 text-[#1d2731]/80">{line}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[28px] bg-[#1d2731] p-6 text-white">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/55">Manifest</div>
                    <p className="mt-4 text-base leading-7 text-white/88">
                      Reverb există pentru antreprenorii care vor o afacere digitală construită cu claritate, stabilitate și adevăr. Credem într-o relație sănătoasă între om și AI: omul dă direcția, sensul și discernământul, iar AI-ul amplifică viteza, claritatea și execuția.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services preview */}
        <section className="border-y border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Servicii</div>
                  <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                    Tot ce trebuie pentru un ecosistem digital sănătos.
                  </h2>
                </div>
                <Link
                  href="/servicii"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full border border-[#1d2731]/15 bg-white px-5 py-2.5 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5"
                >
                  Toate serviciile →
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 70}>
                  <Link
                    href={service.href}
                    className="group block rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,39,49,0.08)]"
                  >
                    <div className="mb-10 h-px w-16 bg-gradient-to-r from-[#1d2731] to-transparent opacity-40 transition-all group-hover:w-24" />
                    <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#1d2731]">{service.title}</h3>
                    <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/68">{service.text}</p>
                    <div className="mt-6 text-xs font-medium text-[#1d2731]/40 transition group-hover:text-[#1d2731]/70">
                      Află mai mult →
                    </div>
                  </Link>
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
                  Suntem împăcați cu AI-ul. Tocmai de aceea îl folosim bine.
                </h2>
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
                  title: "Afacere pe sufletul tău",
                  text: "Nu împingem șabloane universale. Construim un sistem care să se potrivească felului tău de a munci, de a vinde și de a crește.",
                },
                {
                  title: "Parteneriat pe termen lung",
                  text: "Nu dispărem după lansare. Optimizăm, ajustăm și luăm decizii împreună, pe baza realității.",
                },
                {
                  title: "Claritate digitală",
                  text: "Punem ordine în ofertă, pagini, trafic, mesaje și funnel-uri. Când totul devine clar, conversia nu mai e un accident.",
                },
                {
                  title: "AI ca amplificator",
                  text: "Folosim AI ca să scurtăm haosul, nu gândirea. Direcția strategică rămâne umană.",
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

        {/* CTA */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
            <div className="rounded-[36px] border border-[#1d2731]/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(237,239,242,0.75))] p-8 shadow-[0_20px_80px_rgba(29,39,49,0.08)] md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Hai să vorbim</div>
                  <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                    Dacă vrei claritate, structură și un partener lucid, vorbește cu noi.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1d2731]/68">
                    Reverb nu este despre volum de promisiuni. Este despre direcție corectă, execuție bună și creștere sănătoasă.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#1d2731] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Hai să ne sincronizăm
                  </Link>
                  <Link
                    href="/magazine-online"
                    className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/12 bg-white px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5"
                  >
                    Cere o ofertă pentru magazin
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
}
