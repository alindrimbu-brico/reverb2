import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";

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
  };
}

const categoryColors: Record<string, string> = {
  "E-commerce": "bg-[#eef1f0] text-[#31584f]",
  AI: "bg-[#f0ecf4] text-[#6d5c87]",
  Marketing: "bg-[#edf0f5] text-[#4a5d7c]",
  Business: "bg-[#faf7f2] text-[#8a6f3a]",
};

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageEnter>
      <div className="bg-[#f5f1ea] text-[#1d2731]">
        {/* Hero */}
        <section className="border-b border-[#1d2731]/8">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
            <Reveal>
              <div className="flex items-center gap-3">
                <Link
                  href="/blog"
                  className="text-xs text-[#1d2731]/50 transition hover:text-[#1d2731]"
                >
                  ← Blog
                </Link>
                <span className="text-[#1d2731]/25">•</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    categoryColors[post.category] ?? "bg-[#faf7f2] text-[#1d2731]/60"
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
              <div className="mt-5 flex items-center gap-4 text-sm text-[#1d2731]/50">
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
            <p className="text-xl leading-9 text-[#1d2731]/75 font-medium">{post.excerpt}</p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <Reveal key={i} delay={i * 40}>
                {section.heading && (
                  <h2 className="mt-10 text-2xl font-medium tracking-[-0.02em] text-[#1d2731]">
                    {section.heading}
                  </h2>
                )}
                <p className="mt-3 text-[17px] leading-8 text-[#1d2731]/72">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA inline */}
        <Reveal>
          <section className="mx-auto max-w-4xl px-6 pb-4 lg:px-10">
            <div className="rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-8">
              <h3 className="text-xl font-medium">Vrei să aplicăm asta pentru business-ul tău?</h3>
              <p className="mt-2 text-[15px] leading-7 text-[#1d2731]/65">
                30 de minute de call sunt suficiente ca să clarificăm ce se poate face concret.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1d2731] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
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
              <div className="mb-8 text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">
                Mai citește
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-[24px] border border-[#1d2731]/8 bg-white/70 p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,39,49,0.08)]"
                  >
                    <span className={`self-start rounded-full px-3 py-1 text-xs font-medium ${categoryColors[p.category] ?? "bg-[#faf7f2] text-[#1d2731]/60"}`}>
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-base font-medium leading-snug tracking-[-0.01em]">{p.title}</h3>
                    <span className="mt-4 text-xs text-[#1d2731]/45 transition group-hover:text-[#1d2731]/70">Citește →</span>
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
