import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Fixed prices, no surprises. Choose the right package for your business — from online presence to digital store or ongoing promotion.",
};

const packages = [
  {
    id: "online-presence",
    name: "Online Presence",
    tagline: "A website that supports sales, not just image.",
    price: "€990",
    delivery: "7–14 days",
    description:
      "Fast implementation, conversion-oriented structure and Google integration for businesses that want a solid digital foundation.",
    includes: [
      "Website 3–7 pages, mobile-first",
      "Contact form + WhatsApp + Maps",
      "Basic SEO + Google Business setup",
      "Conversion-oriented structure",
      "Fixed price, no hidden costs",
      "Complete implementation, not just design",
    ],
    ideal: "Service SMBs, construction, clinics, consulting firms that want a correct and fast digital presence.",
    href: "/en/contact",
    highlight: false,
  },
  {
    id: "local-clients",
    name: "Local Clients",
    tagline: "A system that brings local inquiries, consistently.",
    price: "€1,790",
    priceExtra: "Monthly management: €490/month (+ separate ads budget)",
    delivery: "Initial setup: 30 days",
    description:
      "Local SEO + Google Ads + Meta Ads + call tracking. No useless traffic. Only relevant clients, from your area.",
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
    highlight: true,
    badge: "Recommended",
  },
  {
    id: "digital-store",
    name: "Digital Store",
    tagline: "An online store built to sell, not just look good.",
    price: "from €2,490",
    delivery: "14–30 days",
    description:
      "Right eCommerce platform setup, category structure, optimised checkout and complete payment & delivery integration.",
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
    highlight: false,
  },
  {
    id: "ai-creative-sprint",
    name: "AI Creative Sprint",
    tagline: "Positioning and visual direction, delivered in 7 days.",
    price: "€790",
    delivery: "7 days",
    description:
      "Powered by AI, guided by humans. Visual concepts, moodboard, campaign ideas and content direction — fast and actionable.",
    includes: [
      "Fast positioning + visual direction",
      "Visual concepts + brand moodboard",
      "10 campaign ideas (ads) + message angles",
      "Social content direction (simple, actionable)",
    ],
    ideal: "Brands needing direction before a launch or relaunch.",
    href: "/en/contact",
    highlight: false,
  },
];

const monthlyTiers = [
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

const faqs = [
  {
    q: "How long does a project take?",
    a: "Depends on the package: 7–14 days for Online Presence, 30 days for Local Clients, 14–30 days for Digital Store and 7 days for AI Creative Sprint.",
  },
  {
    q: "How does payment work?",
    a: "50% upfront at the start of the project, 50% at delivery. No hidden costs beyond the agreed quote.",
  },
  {
    q: "Do packages include hosting / domain?",
    a: "Hosting and domain costs are separate and you pay them directly to the provider. We help with selection and configuration.",
  },
  {
    q: "Can I change the package after starting?",
    a: "Yes, but upgrading happens at the beginning of a new cycle. Downgrading is not possible once work has started.",
  },
  {
    q: "Is the ads budget included?",
    a: "No. The ads budget (Google, Meta) is paid separately, directly to the platforms. We manage the campaigns, you control the budget.",
  },
  {
    q: "Do you work with any type of business?",
    a: "We select our projects. We work with SMBs that have a concrete objective, a real budget and want measurable results — not experiments.",
  },
];

const notFor = [
  "Startups without a defined budget",
  "Entrepreneurs who constantly change direction",
  'Clients looking for "the cheapest price"',
  "Projects without a concrete objective",
];

const forWhom = [
  "Local SMBs wanting more inquiries and calls",
  "Traditional businesses entering the digital space",
  "Businesses with a real budget and results-driven mindset",
  "Entrepreneurs seeking structure, not experiments",
];

export default function PackagesPage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1d2731]/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pricing</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              Fixed prices.<br />No surprises.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#1d2731]/70 md:text-xl">
              Every package has a clear price, a fixed set of deliverables and a defined timeline. You know from the start what you get and how much you pay.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One-time Packages */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">One-time packages</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Projects with defined delivery
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
              Pay once, receive a functional system. No mandatory subscription.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 tab-blur-group">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80}>
              <div className="relative group rounded-[28px] h-full">
                <div
                  className={`absolute inset-0 tab-blur-item rounded-[28px] border shadow-[0_10px_40px_rgba(29,39,49,0.05)] transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(29,39,49,0.10)] ${
                    pkg.highlight
                      ? "border-[#1d2731] bg-[#1d2731] text-white"
                      : "border-[#1d2731]/8 bg-white/70"
                  }`}
                  style={{ animation: `float-${i % 2 === 0 ? 'a' : 'b'} ${7 + i}s ease-in-out infinite` }}
                />
                <div
                  className={`relative z-10 flex h-full flex-col p-8 transition-all duration-500 ${pkg.highlight ? "text-white" : "text-[#1d2731]"}`}
                  style={{ animation: `float-text-${i % 2 === 0 ? 'a' : 'b'} ${7 + i}s ease-in-out infinite` }}
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
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31584f]" />
                        <span className={pkg.highlight ? "text-white/80" : "text-[#1d2731]/70"}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mb-6 rounded-2xl px-4 py-3 text-sm ${pkg.highlight ? "bg-white/10" : "bg-[#f5f1ea]"}`}>
                    <span className={`font-medium ${pkg.highlight ? "text-white/60" : "text-[#1d2731]/50"}`}>Ideal for: </span>
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
                    Discuss this package
                  </Link>
                </div>
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
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Ongoing Promotion</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Monthly management
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                We manage your campaigns monthly — optimisation, reporting, adjustments. Ads budget paid separately.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 tab-blur-group">
            {monthlyTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div className="relative group rounded-[28px] h-full">
                  <div
                    className={`absolute inset-0 tab-blur-item rounded-[28px] border transition-all duration-300 ${
                      tier.recommended
                        ? "border-[#1d2731] bg-[#1d2731] shadow-[0_10px_40px_rgba(29,39,49,0.15)] group-hover:shadow-[0_20px_60px_rgba(29,39,49,0.10)]"
                        : "border-[#1d2731]/8 bg-white/70 shadow-[0_10px_40px_rgba(29,39,49,0.05)] group-hover:shadow-[0_20px_60px_rgba(29,39,49,0.10)]"
                    }`}
                    style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  />
                  <div
                    className={`relative z-10 flex h-full flex-col p-8 transition-all duration-500 ${tier.recommended ? "text-white" : "text-[#1d2731]"}`}
                    style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-[#31584f] px-4 py-1 text-xs font-semibold text-white">
                        Recommended
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
                      href="/en/contact"
                      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-md ${
                        tier.recommended ? "bg-white text-[#1d2731]" : "bg-[#1d2731] text-white"
                      }`}
                    >
                      Choose {tier.name}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <p className="mt-8 text-center text-sm text-[#1d2731]/50">
              + separate ads budget (Google / Meta). Minimum contract: 3 months.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who it&apos;s for */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Fit</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Who are these packages for?
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
              <div className="text-sm font-semibold text-[#1d2731] mb-5">✔ A good fit if:</div>
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
              <div className="text-sm font-semibold text-[#1d2731] mb-5">✖ Not a good fit if:</div>
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
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">Transparency</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                How payment works
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 tab-blur-group">
            {[
              {
                step: "01",
                title: "50% upfront",
                text: "At contract signing and before work begins. Covers strategy, structure and initial implementation.",
              },
              {
                step: "02",
                title: "Implementation",
                text: "We work according to the agreed plan. Regular progress updates. No surprises at the end.",
              },
              {
                step: "03",
                title: "50% on delivery",
                text: "You pay the rest only when the project is ready and functional. Full handover with complete access.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="relative group rounded-[28px] h-full">
                  <div
                    className="absolute inset-0 tab-blur-item rounded-[28px] border border-white/10 bg-white/5"
                    style={{ animation: `float-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  />
                  <div
                    className="relative z-10 p-7 transition-all duration-500 h-full flex flex-col"
                    style={{ animation: `float-text-${i % 3 === 0 ? 'a' : i % 3 === 1 ? 'b' : 'c'} ${7 + (i % 3)}s ease-in-out infinite` }}
                  >
                    <div className="mb-4 text-4xl font-medium tracking-[-0.04em] text-white/20">{item.step}</div>
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                  </div>
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
            <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Frequently asked questions</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Before you send a message
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 tab-blur-group">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="relative group rounded-[28px] h-full">
                <div
                  className="absolute inset-0 tab-blur-item rounded-[28px] border border-[#1d2731]/8 bg-white/70 shadow-[0_10px_40px_rgba(29,39,49,0.05)]"
                  style={{ animation: `float-${i % 2 === 0 ? 'a' : 'b'} ${7 + i}s ease-in-out infinite` }}
                />
                <div
                  className="relative z-10 p-7 transition-all duration-500 h-full flex flex-col"
                  style={{ animation: `float-text-${i % 2 === 0 ? 'a' : 'b'} ${7 + i}s ease-in-out infinite` }}
                >
                  <h3 className="text-base font-semibold text-[#1d2731]">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#1d2731]/65">{faq.a}</p>
                </div>
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
                Choose the right package for your business.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                Initial discussion of 20–30 minutes. No obligations. We establish the objective and see if we&apos;re a good fit.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:shrink-0">
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
          </div>
        </section>
      </Reveal>
    </div>
  );
}
