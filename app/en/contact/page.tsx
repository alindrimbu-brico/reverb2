import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import PageBackdrop from "@/components/PageBackdrop";
import { packages } from "@/lib/packages";
import { packagesEn, enPrice } from "@/lib/packagesEn";

export const metadata: Metadata = {
  alternates: { canonical: "/en/contact", languages: { ro: "/contact", en: "/en/contact", "x-default": "/contact" } },
  title: "Contact",
  description:
    "Schedule a 20–30 minute call. We'll define the goal, structure, and implementation timeline. No obligations.",
};

export default function ContactPageEN() {
  return (
    <div className="text-white">
      <PageBackdrop />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">Contact</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Let's talk about your business.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
              We'll define the goal, structure, and implementation timeline in our first call. No obligations. No pressure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: info */}
          <div className="space-y-8">
            <Reveal>
              <div className="card-hover rounded-3xl border border-white/10 bg-neutral-900/40 p-8">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Schedule a Call</h2>
                <p className="mt-4 text-[15px] leading-7 text-neutral-300">
                  20–30 minutes is enough for us to understand your situation and propose a concrete plan. If there's no good fit, we'll tell you directly.
                </p>
                <div className="mt-6 space-y-3 text-sm text-neutral-400">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-neutral-900/40 text-xs">1</span>
                    Fill out the form below
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-neutral-900/40 text-xs">2</span>
                    We'll confirm a slot within 24h
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-neutral-900/40 text-xs">3</span>
                    We talk, clarify, and propose
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 text-white">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">Available Packages</div>
                <div className="mt-5 space-y-4">
                  {packages.map((p) => (
                    <div key={p.id} className="flex items-start justify-between gap-4 text-sm">
                      <span className="min-w-0 text-neutral-300">{packagesEn[p.id].shortName}</span>
                      <span className="shrink-0 whitespace-nowrap font-medium text-neutral-300">{enPrice(p.id)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-xs text-neutral-500">Terms: 50% advance / 50% on delivery.</div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-hover rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="text-sm font-semibold text-white">What We Can Discuss</div>
                <ul className="mt-5 space-y-3">
                  {[
                    "New or redesigned website",
                    "Complete online store",
                    "Local clients — SEO + Ads",
                    "Monthly continuous promotion",
                    "Positioning and visual direction (AI Creative Sprint)",
                    "Any combination of the above",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-6 text-neutral-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
