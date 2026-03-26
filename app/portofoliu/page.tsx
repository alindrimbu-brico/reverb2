import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";

export const metadata: Metadata = {
  title: "Portofoliu",
  description:
    "Studii de caz reale: magazine online relansate, branduri repoziționate, sisteme de marketing integrate. Dovada că lucrurile funcționează.",
};

const categoryColors: Record<string, string> = {
  "Magazine Online": "bg-[#eef1f0] text-[#31584f]",
  "Branding & Marketing": "bg-[#f0ecf4] text-[#6d5c87]",
  "Marketing Digital": "bg-[#edf0f5] text-[#4a5d7c]",
};

export default function PortofoliuPage() {
  return (
    <PageEnter>
      <div className="bg-[#f5f1ea] text-[#1d2731]">
        {/* Hero */}
        <section className="border-b border-[#1d2731]/8">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Portofoliu</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
                Rezultate reale. Nu vorbe lucioase.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#1d2731]/65">
                Fiecare studiu de caz documentează o problemă reală, intervenția noastră și impactul măsurabil. Fără exagerări și fără date inventate.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case studies */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="space-y-6">
            {caseStudies.map((cs, idx) => (
              <Reveal key={cs.slug} delay={idx * 80}>
                <div
                  className={`rounded-[32px] border border-[#1d2731]/8 p-8 md:p-10 ${
                    idx % 2 === 0 ? "bg-white/70" : "bg-[#faf7f2]"
                  }`}
                >
                  <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            categoryColors[cs.category] ?? "bg-white text-[#1d2731]/60"
                          }`}
                        >
                          {cs.category}
                        </span>
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#1d2731]/10 bg-white/60 px-3 py-1 text-xs text-[#1d2731]/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="mt-5 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                        {cs.title}
                      </h2>

                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-[0.25em] text-[#1d2731]/40">
                          Provocarea
                        </div>
                        <p className="mt-2 text-[15px] leading-7 text-[#1d2731]/70">{cs.challenge}</p>
                      </div>

                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-[0.25em] text-[#1d2731]/40">
                          Intervenția
                        </div>
                        <ul className="mt-3 space-y-2">
                          {cs.approach.map((step) => (
                            <li
                              key={step}
                              className="flex items-start gap-3 text-[14px] leading-6 text-[#1d2731]/70"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/35" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="rounded-[24px] bg-[#1d2731] p-6 text-white">
                        <div className="text-xs uppercase tracking-[0.25em] text-white/45">
                          Rezultate
                        </div>
                        <ul className="mt-4 space-y-3">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-3 text-[15px] leading-6 text-white/80">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {cs.quote && (
                        <div className="rounded-[24px] border border-[#1d2731]/8 bg-white/60 p-6">
                          <p className="text-[15px] leading-7 text-[#1d2731]/72 italic">
                            "{cs.quote.text}"
                          </p>
                          <div className="mt-4">
                            <div className="text-sm font-medium text-[#1d2731]">{cs.quote.author}</div>
                            <div className="text-xs text-[#1d2731]/45">{cs.quote.role}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
            <Reveal>
              <div className="grid gap-8 text-center sm:grid-cols-3">
                {[
                  { value: "3.2×", label: "Creștere medie conversie după restructurare" },
                  { value: "44%", label: "Reducere cost per lead calificat" },
                  { value: "90 zile", label: "Timp mediu până la primele rezultate măsurabile" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-[#1d2731]/8 bg-white p-8">
                    <div className="text-4xl font-medium tracking-[-0.04em] text-[#1d2731]">{stat.value}</div>
                    <div className="mt-3 text-sm leading-6 text-[#1d2731]/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
                  Vrei același nivel de claritate și pentru business-ul tău?
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  Nu promitem rezultate identice — fiecare business e diferit. Dar promitem onestitate, structură și execuție disciplinată.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Hai să vorbim despre proiectul tău
                  </Link>
                  <Link
                    href="/servicii"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    Vezi toate serviciile
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </PageEnter>
  );
}
