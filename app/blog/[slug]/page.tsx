import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";
import PageBackdrop from "@/components/PageBackdrop";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

const categoryColors: Record<string, string> = {
  "E-commerce": "border border-white/10 bg-white/5 text-neutral-300",
  AI: "border border-white/10 bg-white/5 text-neutral-300",
  Marketing: "border border-white/10 bg-white/5 text-neutral-300",
  Business: "bg-white/5 text-neutral-300",
};

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageEnter>
      <div className="text-white">
        <PageBackdrop />
        {/* Hero */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-4xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-24">
            <Reveal>
              <div className="flex items-center gap-3">
                <Link
                  href="/blog"
                  className="text-xs text-neutral-400 transition hover:text-white"
                >
                  ← Blog
                </Link>
                <span className="text-neutral-500">•</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    categoryColors[post.category] ?? "bg-white/5 text-neutral-400"
                  }`}
                >
                  {post.category}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl lg:text-[56px]">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-5 flex items-center gap-4 text-sm text-neutral-400">
                <time>
                  {new Date(post.date).toLocaleDateString("ro-RO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime} citire</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-6 py-14 lg:px-10 lg:py-20">
          <Reveal>
            <p className="text-xl leading-9 text-neutral-300 font-medium">{post.excerpt}</p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <Reveal key={i} delay={i * 40}>
                {section.heading && (
                  <h2 className="mt-10 text-2xl font-medium tracking-[-0.02em] text-white">
                    {section.heading}
                  </h2>
                )}
                <p className="mt-3 text-[17px] leading-8 text-neutral-300">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA inline */}
        <Reveal>
          <section className="mx-auto max-w-4xl px-6 pb-4 lg:px-10">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8">
              <h3 className="text-xl font-medium">Vrei să aplicăm asta pentru business-ul tău?</h3>
              <p className="mt-2 text-[15px] leading-7 text-neutral-400">
                30 de minute de call sunt suficiente ca să clarificăm ce se poate face concret.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Programează un call →
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Other articles */}
        {others.length > 0 && (
          <section className="mx-auto max-w-4xl px-6 py-14 lg:px-10 lg:py-20">
            <Reveal>
              <div className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
                Mai citește
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-[24px] border border-white/10 bg-neutral-900/40 p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,39,49,0.08)]"
                  >
                    <span className={`self-start rounded-full px-3 py-1 text-xs font-medium ${categoryColors[p.category] ?? "bg-white/5 text-neutral-400"}`}>
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-base font-medium leading-snug tracking-[-0.01em]">{p.title}</h3>
                    <span className="mt-4 text-xs text-neutral-400 transition group-hover:text-neutral-300">Citește →</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageEnter>
  );
}
