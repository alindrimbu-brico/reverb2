import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import Reveal from "@/components/Reveal";
import PageEnter from "@/components/PageEnter";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/blog", languages: { ro: "/blog", en: "/en/blog", "x-default": "/blog" } },
  title: "Blog & Cercetare AI — Reverb Digital",
  description:
    "Articole tehnice și strategice despre e-commerce, conținut video generativ, căutare AI (GEO) și scalare digitală. Fără clișee.",
};

const categoryPills: Record<string, string> = {
  "E-commerce": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  AI: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Marketing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Business: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function BlogPage() {
  return (
    <PageEnter>
      <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
        
        {/* Background Architectural Grid Pattern */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        {/* Hero */}
        <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
                <BookOpen size={12} className="text-white" />
                <span>Cercetare & Perspective Reale</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
                Perspective aplicate despre <br />
                <span className="text-neutral-400 font-light">E-Commerce, Sisteme & AI.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                Articole fără jargon de agenție. Doar ceea ce contează cu adevărat pentru fondatorii care construiesc infrastructuri durabile.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 border-b border-white/10">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/40 p-8 md:p-10 hover:border-white/30 hover:bg-neutral-900/60 transition-all duration-300 shadow-sm hover:shadow-2xl"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider border ${categoryPills[post.category] ?? "bg-white/10 text-neutral-300 border-white/10"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">{post.readTime} lectură</span>
                    </div>

                    <h2 className="text-2xl font-light text-white tracking-tight mb-4 group-hover:text-emerald-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs text-neutral-500">
                    <time>
                      {new Date(post.date).toLocaleDateString("ro-RO", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="flex items-center gap-1 text-neutral-300 group-hover:text-white group-hover:translate-x-1 transition-all">
                      Citește Articolul <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-10 md:p-14 backdrop-blur-md">
              <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
                Vrei să implementăm aceste sisteme în afacerea ta?
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 max-w-lg mx-auto font-light leading-relaxed mb-8">
                Stabilim o discuție tehnică directă. Fără propuneri generice, direct pe cifrele și nevoile tale.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>Inițiază Dialogul Tehnic</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </section>

      </div>
    </PageEnter>
  );
}
