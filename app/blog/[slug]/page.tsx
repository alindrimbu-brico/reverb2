import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Reverb Digital`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

const categoryPills: Record<string, string> = {
  "E-commerce": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  AI: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Marketing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Business: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageEnter>
      <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
        
        {/* Architectural Background Grid */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Article Header */}
        <article className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Înapoi la Blog</span>
                </Link>
                <span className="text-neutral-700">•</span>
                <span className={`rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider border ${categoryPills[post.category] ?? "bg-white/10 text-neutral-300 border-white/10"}`}>
                  {post.category}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight mb-8">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex items-center gap-6 font-mono text-xs text-neutral-500 border-t border-b border-white/10 py-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <time>
                    {new Date(post.date).toLocaleDateString("ro-RO", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{post.readTime} lectură</span>
                </div>
              </div>
            </Reveal>
          </div>
        </article>

        {/* Article Content Body */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <Reveal>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-300 font-light mb-12 border-l-2 border-white/30 pl-6 italic">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="space-y-10 text-neutral-300 text-sm md:text-base leading-relaxed font-light">
            {post.sections.map((sec, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div>
                  {sec.heading && (
                    <h2 className="text-xl md:text-2xl font-medium text-white tracking-tight mt-10 mb-4">
                      {sec.heading}
                    </h2>
                  )}
                  <p className="leading-relaxed text-neutral-300 font-light">
                    {sec.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA inline */}
        <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/60 to-neutral-950 p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-2">
                Vrei să aplicăm această arhitectură pentru magazinul tău?
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                Livrăm magazine rapide, conținut video automatizat zilnic și optimizare pentru căutare AI (GEO).
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>Programează o discuție tehnică</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Other articles */}
        {others.length > 0 && (
          <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 lg:px-10 border-t border-white/10 pt-16">
            <Reveal>
              <div className="mb-8 text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
                Alte Articole din Serie
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block rounded-3xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/30 hover:bg-neutral-900/60 transition-all"
                  >
                    <span className={`inline-block rounded-full px-3 py-1 text-[9px] font-mono uppercase tracking-wider border mb-4 ${categoryPills[p.category] ?? "bg-white/10 text-neutral-300 border-white/10"}`}>
                      {p.category}
                    </span>
                    <h3 className="text-base font-medium text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400 group-hover:text-white flex items-center gap-1 mt-4">
                      Citește Articolul <ArrowRight size={10} />
                    </span>
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
