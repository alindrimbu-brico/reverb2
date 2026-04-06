import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real case studies: relaunched online stores, repositioned brands, integrated marketing systems. Proof that things work.",
};

const caseStudies = [
  {
    slug: "ecommerce-relaunched",
    title: "E-commerce relaunched with structure and clear messaging",
    category: "Online Stores",
    tags: ["WooCommerce", "Branding", "Conversion", "Commercial copy"],
    challenge:
      "A furniture and décor online store with existing traffic but poor conversions (0.4%). The messaging was vague, categories were confusing, and product pages were overloaded with technical info but no clear benefits. Checkout abandonment was at 68%.",
    approach: [
      "Full audit: analytics, heatmaps, real usage sessions with 5 clients",
      "Category restructure based on purchase intent, not product type",
      "Full commercial copy rewrite — titles, product descriptions, About page",
      "Product page redesign focusing on benefits, contextual images and visible reviews",
      "Checkout simplification: from 6 steps to 3, removing mandatory account creation",
      "Post-purchase email setup + abandoned cart reactivation campaign",
    ],
    results: [
      "Conversion rate: from 0.4% to 1.8% in the first 60 days",
      "Checkout abandonment: from 68% to 41%",
      "Average order value +23%",
      "Bounce rate on product page down 35%",
    ],
    quote: {
      text: "Reverb brought order to our offer, our messaging and our sales process. Finally, our website clearly says what we do and for whom.",
      author: "Client testimonial slot 01",
      role: "Founder, online décor store",
    },
  },
  {
    slug: "brand-repositioned",
    title: "Brand repositioned with AI support and coherent funnels",
    category: "Branding & Marketing",
    tags: ["Branding", "AI", "Meta Ads", "Email marketing"],
    challenge:
      "A B2B consulting company with good services but a generic digital presentation. Messages were identical to all competitors, the website didn't differentiate, and ad campaigns brought low-quality leads.",
    approach: [
      "Strategy session: identifying real differentiators through interviews with current clients",
      "Repositioning: from 'business consulting' to a specific niche with a unique message",
      "Brand guide creation: voice, tone, key messages, what to say and never say",
      "Full website rewrite with the new message — home, services, about, case studies",
      "Meta Ads campaigns with creatives aligned to the new brand — testing 8 variants",
      "Onboarding email sequence for new leads (5 emails, 3 weeks)",
    ],
    results: [
      "Cost per qualified lead down 44%",
      "Lead qualification rate: from 18% to 52%",
      "3 new contracts in the first 45 days after relaunch",
      "Email sequence open rate: 68% (vs. 22% previously)",
    ],
    quote: {
      text: "They used AI intelligently, without losing the human voice of the brand. The result was clearer, faster and more stable.",
      author: "Client testimonial slot 02",
      role: "CEO, B2B consulting company",
    },
  },
  {
    slug: "integrated-marketing-system",
    title: "Integrated marketing system for a SaaS product",
    category: "Digital Marketing",
    tags: ["SaaS", "Content", "SEO", "Automations", "Retention"],
    challenge:
      "A SaaS product with high churn (8% monthly) and stagnant organic growth. The internal team was producing content without strategy, without a calendar and with no connection to the acquisition funnel. No onboarding or retention sequence existed.",
    approach: [
      "Audit: identifying customer journey stages where churn was highest",
      "Content strategy creation based on search intent and funnel stages",
      "Monthly editorial calendar with 12 articles/month + channel distribution",
      "Onboarding sequence (7 emails, 14 days): key feature activation",
      "Reactivation campaign for inactive users: 3 emails + personalised offer",
      "Monthly reporting dashboard: organic traffic, activation rate, churn, MRR",
    ],
    results: [
      "Monthly churn: from 8% to 4.2% in 90 days",
      "Organic traffic: +180% in 6 months",
      "Activation rate (users activating ≥3 features in the first week): from 31% to 67%",
      "MRR growth: +34% in the first 6 months of partnership",
    ],
    quote: {
      text: "They didn't come with cheap magic. They came with structure, calm and execution. Exactly what the previous agency lacked.",
      author: "Client testimonial slot 03",
      role: "Co-founder, SaaS product",
    },
  },
];

const categoryColors: Record<string, string> = {
  "Online Stores": "bg-[#eef1f0] text-[#31584f]",
  "Branding & Marketing": "bg-[#f0ecf4] text-[#6d5c87]",
  "Digital Marketing": "bg-[#edf0f5] text-[#4a5d7c]",
};

export default function PortfolioPage() {
  return (
    <PageEnter>
      <div className="bg-[#f5f1ea] text-[#1d2731]">
        {/* Hero */}
        <section className="border-b border-[#1d2731]/8">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Portfolio</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
                Real results. Not polished words.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#1d2731]/65">
                Each case study documents a real problem, our intervention and the measurable impact. No exaggerations and no invented data.
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
                          The Challenge
                        </div>
                        <p className="mt-2 text-[15px] leading-7 text-[#1d2731]/70">{cs.challenge}</p>
                      </div>

                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-[0.25em] text-[#1d2731]/40">
                          The Intervention
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
                          Results
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
                            &ldquo;{cs.quote.text}&rdquo;
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
                  { value: "3.2×", label: "Average conversion growth after restructuring" },
                  { value: "44%", label: "Reduction in cost per qualified lead" },
                  { value: "90 days", label: "Average time to first measurable results" },
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
                  Want the same level of precision for your business?
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  We don&apos;t promise identical results — every business is different. But we promise honesty, structure and disciplined execution.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/en/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Let&apos;s talk about your project
                  </Link>
                  <Link
                    href="/en/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    See all services
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
