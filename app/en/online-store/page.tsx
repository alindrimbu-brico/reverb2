import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Digital Store",
  description:
    "We build online stores for selling, not just for design. Right platform, conversion structure, payments & delivery configured. From €2,490.",
};

const included = [
  {
    category: "Structure & experience",
    items: [
      "Category / filter architecture",
      "Clear product pages (benefits + trust)",
      "Simple search & navigation",
      "Mobile-first optimisation",
    ],
  },
  {
    category: "Checkout & conversion",
    items: [
      "Simplified checkout (no friction)",
      "Clear messaging (delivery, returns, warranty)",
      "Trust badges",
      "Speed optimisation",
    ],
  },
  {
    category: "Payments, delivery, operations",
    items: [
      "Payment integration (depending on platform)",
      "Delivery / couriers setup",
      "Transactional emails (confirmations)",
      "Admin guide / handover",
    ],
  },
  {
    category: "Tracking & measurement",
    items: [
      "Essential events (view, add-to-cart, checkout, purchase)",
      "Simple reporting (what sells, what doesn't)",
      "Basic campaign setup",
      "Foundation for Ongoing Promotion",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Clarification",
    text: "Catalogue, delivery, payments, objective. We understand what you sell, who you sell to and how you deliver.",
    duration: "Week 1",
  },
  {
    num: "02",
    title: "Architecture",
    text: "Platform + category structure + flows. Everything validated with you before implementation.",
    duration: "Week 1–2",
  },
  {
    num: "03",
    title: "Implementation",
    text: "Design, configurations, checkout testing. Payments, delivery, tracking — everything functional.",
    duration: "Week 2–4",
  },
  {
    num: "04",
    title: "Launch",
    text: "Handover + tracking setup + growth plan. Recommended: Ongoing Promotion after launch.",
    duration: "Week 4+",
  },
];

const platforms = ["WooCommerce", "Shopify", "Magento", "PrestaShop", "OpenCart", "CS-Cart", "Custom"];

const faq = [
  {
    q: "Which platform will you build my store on?",
    a: "We choose the right platform based on catalogue, budget, administration and scaling. We work multi-platform.",
  },
  {
    q: "Does the price include payments and delivery?",
    a: "It includes configuring payment methods and delivery. Fees charged by processors or couriers are not included.",
  },
  {
    q: "How many products does the package include?",
    a: "The package includes demo products and catalogue structuring. Mass import or complete migration is offered separately.",
  },
  {
    q: "Can I start without promotion campaigns?",
    a: "Yes, but for consistent sales we recommend Ongoing Promotion after launch: conversion optimisation, campaigns and reporting.",
  },
  {
    q: "How does payment work?",
    a: "Standard: 50% upfront and 50% at delivery. For complex projects, phased payments can be arranged.",
  },
];

export default function OnlineStorePage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Digital Store</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-6xl lg:text-[72px]">
                An online store built to sell.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                We choose the right platform for your business model and build a complete system: products, payments, delivery, conversion.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/en/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-[#1d2731] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Schedule a discussion
                  <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="#price"
                  className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/15 bg-white/75 px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:bg-white"
                >
                  See pricing
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-6 text-sm text-[#1d2731]/50">
                Terms: 50% upfront / 50% on delivery · Delivery 14–30 days · Transparent pricing
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="rounded-[30px] border border-[#1d2731]/8 bg-white/70 p-8 shadow-[0_20px_70px_rgba(29,39,49,0.08)]">
              <div className="text-sm font-semibold text-[#1d2731] mb-5">What you get in the standard version</div>
              <ul className="space-y-3">
                {[
                  "eCommerce platform setup suited to the project",
                  "Category structure + demo products",
                  "Conversion-optimised checkout",
                  "Payments & delivery configured",
                  "Essential tracking (sales, add-to-cart, checkout)",
                  "Clear process, no improvisation",
                  "Complete implementation, not just design",
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

      {/* Who it&apos;s for */}
      <section className="border-b border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Who it&apos;s for</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                For companies that want to sell online seriously.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3 tab-blur-group">
            {[
              { title: "Retail & manufacturers", text: "Structured catalogue, fast checkout, simple processes." },
              { title: "Growing brands", text: "You have offline or social sales, you want a solid online foundation." },
              { title: "B2B businesses", text: "Structured requests / orders, clear configurations and flows." },
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

      {/* Right platform */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Multi-platform</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              The right platform, not the trending one.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              We don&apos;t force a technology. We choose based on catalogue, budget, administration and scaling.
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

      {/* What we build */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">What we build</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                A complete online store with conversion structure.
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

      {/* Pricing */}
      <section id="price" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Transparent pricing</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              The starting point is clear.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
              <div className="text-sm font-medium text-[#1d2731]/50">Standard package</div>
              <div className="mt-2 text-sm font-semibold text-[#1d2731]">Digital Store</div>
              <div className="mt-4 text-4xl font-medium tracking-[-0.04em] text-[#1d2731]">from €2,490</div>
              <div className="mt-2 text-sm text-[#1d2731]/45">Delivery: 14–30 days</div>
              <ul className="mt-6 space-y-3">
                {[
                  "eCommerce platform setup",
                  "Category structure + demo products",
                  "Optimised checkout",
                  "Payments & delivery configured",
                  "Essential tracking",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] leading-6 text-[#1d2731]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/35" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/en/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1d2731] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Request a quote
              </Link>
              <div className="mt-3 text-center text-xs text-[#1d2731]/35">Terms: 50% upfront / 50% on delivery.</div>
              <div className="mt-2 text-center text-xs text-[#1d2731]/45">
                Note: ERP/CRM integration, product import, multi-warehouse, custom features → separate quote.
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[28px] bg-[#1d2731] p-8 text-white">
              <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-[#1d2731]">
                Recommended option
              </div>
              <div className="text-lg font-medium">Launch + First 30 days + Ongoing Promotion</div>
              <p className="mt-4 text-base leading-7 text-white/75">
                So the store starts selling, not just existing.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Conversion optimisation",
                  "Campaign setup + iteration",
                  "Clear monthly report",
                  "Structure & messaging adjustments",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] leading-6 text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/en/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Schedule a discussion
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
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Process</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Clear 4-step process.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Structured, predictable, delivery-oriented.
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
                Frequently asked questions
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
                Want an online store that can be scaled and optimised?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Tell us what you sell and how you deliver. We&apos;ll recommend the right platform and launch steps.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/en/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Schedule a discussion
                </Link>
                <Link
                  href="/en/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  See all services
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/40">Initial discussion 20–30 minutes · No obligations</p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
