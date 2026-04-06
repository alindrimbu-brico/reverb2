import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Clear digital services for SMBs: online presence, local clients, digital stores, ongoing promotion and AI Creative Sprint. Fixed prices, structured delivery.",
};

const services = [
  {
    id: "01",
    title: "Online Presence",
    tagline: "A website that supports sales, not just image.",
    text: "Fast implementation, conversion-oriented structure and Google integration for businesses that want real growth.",
    price: "€990",
    delivery: "7–14 days",
    includes: [
      "Website 3–7 pages, mobile-first",
      "Contact form + WhatsApp + Maps",
      "Basic SEO + Google Business setup",
      "Conversion-oriented structure",
      "Fixed price, no hidden costs",
      "Complete implementation, not just design",
    ],
    ideal: "SMBs wanting a solid digital foundation: service companies, construction, clinics, consulting.",
    href: "/en/contact",
  },
  {
    id: "02",
    title: "Local Clients",
    tagline: "A system that brings local inquiries, consistently.",
    text: "Local SEO + Google Ads + call tracking. No useless traffic. Only relevant clients.",
    price: "€1,790",
    delivery: "Initial setup (30 days)",
    extra: "Monthly management: €490 / month (+ ads budget)",
    includes: [
      "Conversion-optimised landing page",
      "Local SEO (structure + optimisation)",
      "Google Ads + local Meta Ads setup",
      "Call & form tracking",
      "Google Business optimisation",
      "Clear monthly report",
    ],
    ideal: "Local service companies: construction, clinics, auto service, installers — anyone needing constant calls and inquiries.",
    href: "/en/contact",
    recommended: true,
  },
  {
    id: "03",
    title: "Digital Store",
    tagline: "An online store built to sell, not just look good.",
    text: "We choose the right platform for your business model and build a complete system: products, payments, delivery, conversion.",
    price: "from €2,490",
    delivery: "14–30 days",
    includes: [
      "eCommerce platform setup suited to the project",
      "Category structure + demo products",
      "Conversion-optimised checkout",
      "Payments & delivery configured",
      "Essential tracking (sales, add-to-cart, checkout)",
      "Complete implementation, not just design",
    ],
    ideal: "Retail, manufacturers, growing brands and B2B businesses that want to sell online seriously.",
    href: "/en/online-store",
  },
  {
    id: "04",
    title: "Ongoing Promotion",
    tagline: "Controlled monthly growth. No campaign chaos.",
    text: "Monthly management and optimisation for SEO + Ads + conversion. Focus on inquiries and sales, not reach.",
    price: "from €390/month",
    delivery: "Ongoing, monthly report",
    includes: [
      "Campaign optimisation (Google/Meta) or SEO",
      "Message & landing testing",
      "Conversion tracking & measurement",
      "Clear report (what worked / what we change)",
      "We work on real objectives",
      "No hidden costs",
    ],
    ideal: "Companies wanting predictable results: local services, online stores, B2B with leads.",
    href: "/en/contact",
  },
  {
    id: "05",
    title: "AI Creative Sprint",
    tagline: "Positioning and visual direction, delivered in 7 days.",
    text: "Powered by AI, guided by humans. Visual concepts, moodboard, campaign ideas and content direction — fast and actionable.",
    price: "€790",
    delivery: "7 days",
    includes: [
      "Fast positioning + visual direction",
      "Visual concepts + brand moodboard",
      "10 campaign ideas (ads) + message angles",
      "Social content direction (simple, actionable)",
    ],
    ideal: "Brands needing direction before a launch or relaunch.",
    href: "/en/contact",
  },
];

const monthlyPackages = [
  {
    name: "Start",
    price: "€390 / month",
    desc: "For simple local businesses.",
    features: [
      "1 main channel (Google or Meta)",
      "Weekly optimisation",
      "Monthly report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "€590 / month",
    desc: "Recommended for consistent inquiries.",
    features: [
      "Google + Meta (or SEO + Ads)",
      "Message & landing testing",
      "Conversion tracking",
      "Monthly report + plan",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    price: "€790 / month",
    desc: "For eCommerce / B2B with volume.",
    features: [
      "2–3 channels + conversion optimisation",
      "Advanced weekly iteration",
      "Extended reporting",
      "Priority support",
    ],
  },
];

const faq = [
  {
    q: "How do I choose the right service?",
    a: "We schedule a 20–30 minute discussion. We clarify the objective and tell you exactly what makes sense for your business.",
  },
  {
    q: "How long does a typical project take?",
    a: "Between 7 and 30 days, depending on the package. A presentation website: 7–14 days. An online store: 14–30 days. Marketing: ongoing.",
  },
  {
    q: "Are there any hidden costs?",
    a: "No. Prices are fixed for standard packages. Any extra functionality is discussed separately, before confirmation.",
  },
  {
    q: "Is the ads budget included?",
    a: "No. The ads budget (Google/Meta) is paid separately, directly to the platforms. We manage and optimise the campaigns.",
  },
  {
    q: "How do you use AI in projects?",
    a: "Humans think. AI executes. Reverb delivers. We use AI for research, efficiency and execution speed. Strategic direction remains human.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. You can continue with Ongoing Promotion for monthly optimisation, or keep just the delivered system.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,170,0.15),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Services</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Clear services. Structured delivery.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Choose the right package and know exactly what follows. Fixed prices, real timelines, complete implementation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="space-y-12 tab-blur-group">
          {services.map((s, idx) => (
            <Reveal key={s.id} delay={idx * 60}>
              <div className="relative group rounded-[32px] overflow-hidden">
                <div
                  className={`absolute inset-0 tab-blur-item rounded-[32px] border ${
                    s.recommended
                      ? "border-[#1d2731]/20 bg-white/90 shadow-[0_10px_40px_rgba(29,39,49,0.08)]"
                      : idx % 2 === 0 ? "border-[#1d2731]/8 bg-white/80" : "border-[#1d2731]/8 bg-[#faf7f2]"
                  }`}
                  style={{ animation: `float-${idx % 3 === 0 ? 'a' : idx % 3 === 1 ? 'b' : 'c'} ${7 + (idx % 3)}s ease-in-out infinite` }}
                />
                <div
                  className="relative z-10 p-8 md:p-10 transition-all duration-500"
                  style={{ animation: `float-text-${idx % 3 === 0 ? 'a' : idx % 3 === 1 ? 'b' : 'c'} ${7 + (idx % 3)}s ease-in-out infinite` }}
                >
                  <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/40">Service {s.id}</div>
                        {s.recommended && (
                          <span className="rounded-full bg-[#1d2731] px-3 py-1 text-xs font-medium text-white">Recommended</span>
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
                        <span className="font-medium text-[#1d2731]">Ideal for: </span>{s.ideal}
                      </div>
                      <Link
                        href={s.href}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1d2731] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        {s.id === "03" ? "See full details" : "Request a quote"} →
                      </Link>
                      <div className="mt-3 text-xs text-[#1d2731]/35">Terms: 50% upfront / 50% on delivery.</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1d2731]">What&apos;s included</div>
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Monthly packages for Ongoing Promotion */}
      <section className="border-y border-[#1d2731]/8 bg-white/45">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Ongoing Promotion — Monthly packages</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Monthly growth, no surprises.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Ads budget NOT included. It stays in the client&apos;s account (Google/Meta).
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 tab-blur-group">
            {monthlyPackages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 80}>
                <div className="relative h-full group rounded-[28px]">
                  <div
                    className={`absolute inset-0 rounded-[28px] border tab-blur-item transition-shadow ${
                      pkg.recommended
                        ? "border-[#1d2731] bg-[#1d2731] shadow-[0_20px_60px_rgba(29,39,49,0.15)] group-hover:shadow-[0_30px_70px_rgba(29,39,49,0.25)]"
                        : "border-[#1d2731]/8 bg-white/80 group-hover:border-[#1d2731]/20"
                    }`}
                    style={{ animation: `float-${i % 2 === 0 ? 'a' : 'b'} ${6 + i}s ease-in-out infinite` }}
                  />
                  <div
                    className={`relative z-10 p-8 h-full flex flex-col transition-all duration-500 ${pkg.recommended ? "text-white" : "text-[#1d2731]"}`}
                    style={{ animation: `float-text-${i % 2 === 0 ? 'a' : 'b'} ${6 + i}s ease-in-out infinite` }}
                  >
                    {pkg.recommended && (
                      <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-[#1d2731]">
                        Recommended
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
                      href="/en/contact"
                      className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${
                        pkg.recommended
                          ? "bg-white text-[#1d2731] hover:shadow-lg"
                          : "bg-[#1d2731] text-white hover:shadow-lg"
                      }`}
                    >
                      {pkg.recommended ? "Choose Growth" : "Schedule a discussion"}
                    </Link>
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
                    style={{ animation: `float-c ${8 + (i%2)}s ease-in-out infinite` }}
                  />
                  <div
                    className="relative z-10 p-6 md:p-8 transition-all duration-500"
                    style={{ animation: `float-text-c ${8 + (i%2)}s ease-in-out infinite` }}
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

      {/* CTA */}
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                  Not sure where to start? Let&apos;s figure it out together.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  A 20–30 minute discussion is enough to understand your situation and propose what makes sense. No pitch. No pressure.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <Link
                  href="/en/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Schedule a discussion
                </Link>
                <Link
                  href="/en/online-store"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Explore Digital Store
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
