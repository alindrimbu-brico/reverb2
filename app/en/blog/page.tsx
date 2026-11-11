import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";
import PageBackdrop from "@/components/PageBackdrop";

export const metadata: Metadata = {
  alternates: { canonical: "/en/blog", languages: { ro: "/blog", en: "/en/blog", "x-default": "/blog" } },
  title: "Blog",
  description:
    "Articles on e-commerce, digital marketing, branding and AI applied in business. No jargon. Real perspectives.",
};

const categoryColors: Record<string, string> = {
  "E-commerce": "border border-white/10 bg-white/5 text-neutral-300",
  AI: "border border-white/10 bg-white/5 text-neutral-300",
  Marketing: "border border-white/10 bg-white/5 text-neutral-300",
  Business: "bg-white/5 text-neutral-300",
};

export default function BlogPageEN() {
  return (
    <PageEnter>
      <div className="text-white">
        <PageBackdrop />
        {/* Hero */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-24">
            <Reveal>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">Blog</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
                Real perspectives on digital, marketing and AI.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-400">
                Articles without jargon. Without empty trends. Only what matters concretely for entrepreneurs building seriously.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Posts */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-neutral-900/40 p-8 shadow-[0_8px_32px_rgba(29,39,49,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,39,49,0.09)]"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        categoryColors[post.category] ?? "bg-white/5 text-neutral-400"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500">{post.readTime} read</span>
                  </div>

                  <h2 className="text-xl font-medium leading-snug tracking-[-0.02em] text-white transition group-hover:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-7 text-neutral-400">{post.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <time className="text-xs text-neutral-500">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-xs font-medium text-neutral-400 transition group-hover:text-white">
                      Read →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 text-white md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.02em]">
                    Want to apply this for your business?
                  </h2>
                  <p className="mt-2 text-base text-neutral-400">
                    Let&apos;s have a call. We discuss concretely what can be done.
                  </p>
                </div>
                <Link
                  href="/en/contact"
                  className="shrink-0 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Schedule a call →
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </PageEnter>
  );
}
