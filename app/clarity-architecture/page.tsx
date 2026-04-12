import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arhitectura Clarității | Sacru & Digital | Reverb",
  description: "De la Filosofia Reverb la Designul Sacru Metanoia. Claritatea este VERB - o forță activă de transformare.",
};

export default function MegaClarityPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden selection:bg-amber-500 selection:text-black">
      {/* Cosmic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-amber-950/30 to-black"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-96 bg-amber-500/5 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-700/10 blur-[150px] rounded-full"></div>
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-40 pb-32 px-6 lg:px-20 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="mb-8 inline-block border border-amber-500/40 rounded-full px-8 py-3 bg-amber-500/10 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold">Structură Sacralizată</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-7xl lg:text-9xl font-light tracking-[-0.03em] leading-tight mb-6">
            Arhitectura <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Clarității
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-xl lg:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-8">
            De la Spațiul Sacru la Execuție Digitală
            <br/>
            <span className="text-amber-300/80">Claritatea este un VERB - forță activă de transformare</span>
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="#philosophy" className="px-8 py-3 border border-amber-500/50 hover:bg-amber-500/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] rounded-lg transition-all duration-300 text-sm uppercase tracking-widest font-bold">
              Filozofie
            </Link>
            <Link href="#architecture" className="px-8 py-3 bg-amber-600 hover:bg-amber-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] rounded-lg transition-all duration-300 text-sm uppercase tracking-widest font-bold text-black">
              Arhitectură
            </Link>
            <Link href="#structure" className="px-8 py-3 border border-amber-500/50 hover:bg-amber-500/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] rounded-lg transition-all duration-300 text-sm uppercase tracking-widest font-bold">
              Structură
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ========== PHILOSOPHY SECTION ========== */}
      <section id="philosophy" className="relative py-40 px-6 lg:px-20 max-w-7xl mx-auto border-t border-amber-500/10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-5xl lg:text-6xl font-light mb-4">🧘‍♀️</div>
            <h2 className="text-5xl font-light tracking-tight text-amber-400 mb-4">Filosofia Clarității</h2>
            <p className="text-white/50 uppercase tracking-widest text-xs">REVERB.RO — Verbul Clarității Active</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Auditul Distilare */}
          <Reveal delay={100}>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur hover:border-amber-500/40 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.2)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full border-2 border-amber-500/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-light text-amber-300 mb-4">Auditrul Distilării</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Reducerea oricărui mesaj la esența lui. Claritatea nu vine din abundență, ci din selectivitate conștientă.
              </p>
              <div className="mt-6 pt-6 border-t border-amber-500/10 text-amber-400/80 text-sm font-light italic">
                Pure essence remains.
              </div>
            </div>
          </Reveal>

          {/* Decizii Binare */}
          <Reveal delay={150}>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur hover:border-amber-500/40 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.2)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full border-2 border-amber-500/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-light text-amber-300 mb-4">Decizii Binare</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Simplificare radicală: YES vs NO. Strategiile care funcționează nu se negociază cu interpretarea.
              </p>
              <div className="mt-6 pt-6 border-t border-amber-500/10 text-amber-400/80 text-sm font-light italic">
                No shades of grey.
              </div>
            </div>
          </Reveal>

          {/* Claritatea ca Forță */}
          <Reveal delay={200}>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur hover:border-amber-500/40 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.2)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full border-2 border-amber-500/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-light text-amber-300 mb-4">Forță Activă</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Claritatea nu este pasivă. Ea este acțiune directă. Forțează realitatea să se alinieze cu intenție.
              </p>
              <div className="mt-6 pt-6 border-t border-amber-500/10 text-amber-400/80 text-sm font-light italic">
                Verb, not noun.
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3 Piloni */}
        <Reveal>
          <div className="bg-gradient-to-r from-amber-950/40 to-transparent border border-amber-500/20 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-light text-amber-400 mb-8">Cei 3 Piloni</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "DISTILARE", emoji: "🧪", desc: "Reduction" },
                { name: "FOCALIZARE", emoji: "🎯", desc: "Alignment" },
                { name: "EXECUȚIE", emoji: "⚡", desc: "Execution" }
              ].map((pillar, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl mb-3">{pillar.emoji}</div>
                  <div className="text-2xl text-amber-300 font-light">{pillar.name}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-2">{pillar.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ========== SACRED DESIGN SECTION ========== */}
      <section id="architecture" className="relative py-40 px-6 lg:px-20 max-w-7xl mx-auto border-t border-amber-500/10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-5xl lg:text-6xl font-light mb-4">🏛️</div>
            <h2 className="text-5xl font-light tracking-tight text-amber-400 mb-4">Designul Spațiului Sacru</h2>
            <p className="text-white/50 uppercase tracking-widest text-xs">METANOIA — Transformarea prin Design</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Negative Space */}
          <Reveal>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur">
              <h3 className="text-2xl font-light text-amber-300 mb-4">Spațiu Negativ</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Utilizează gol-ul cu scop. Fiecare void este ceremonial. Designul respiră, nu umple.
              </p>
              <div className="bg-white/5 border border-amber-500/10 rounded-lg p-6">
                <p className="text-sm text-amber-400/80 italic font-light">
                  "Less is clarity revealed."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Color Palette */}
          <Reveal delay={100}>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur">
              <h3 className="text-2xl font-light text-amber-300 mb-6">Paleta Cromatică</h3>
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[
                  { name: "Bone White", hex: "#F5F1E8", text: "Light" },
                  { name: "Rock Grey", hex: "#6B7280", text: "Base" },
                  { name: "Etheric", hex: "#D4A574", text: "Accent" },
                  { name: "Sand Gold", hex: "#CAA23B", text: "Focus" }
                ].map((color, i) => (
                  <div key={i} className="text-center">
                    <div 
                      className="w-full aspect-square rounded-lg border border-white/10 mb-2"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="text-xs font-light text-white/60">{color.text}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50 font-light italic">Manifestarea Vizuală Heavy vs. Sand Gold</p>
            </div>
          </Reveal>
        </div>

        {/* Simbolistica */}
        <Reveal>
          <div className="border border-amber-500/20 rounded-2xl p-12 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur">
            <h3 className="text-3xl font-light text-amber-400 mb-8 text-center">Simbolistica & Tipografie</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { symbol: "✦", label: "DISTILARE", desc: "Focus & Clarity" },
                { symbol: "●", label: "CICLU", desc: "Renewal & Infinity" },
                { symbol: "◯", label: "POTENȚIAL", desc: "Void & Possibility" }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-white/5 rounded-lg border border-amber-500/10">
                  <div className="text-4xl text-amber-400 mb-3">{item.symbol}</div>
                  <h4 className="text-amber-300 font-light mb-2">{item.label}</h4>
                  <p className="text-xs text-white/50 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ========== STUDY STRUCTURE SECTION ========== */}
      <section id="structure" className="relative py-40 px-6 lg:px-20 max-w-7xl mx-auto border-t border-amber-500/10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-5xl lg:text-6xl font-light mb-4">📚</div>
            <h2 className="text-5xl font-light tracking-tight text-amber-400 mb-4">Structura Studiului</h2>
            <p className="text-white/50 uppercase tracking-widest text-xs">Flashcards & Pachete — Anatomy of Deep Learning</p>
          </div>
        </Reveal>

        {/* 4-Step Structure */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {[
            { num: "1", label: "TITLU", desc: "Intenție", icon: "🎯" },
            { num: "2", label: "CONCEPT", desc: "Model Mental", icon: "💡" },
            { num: "3", label: "EXPLICAȚIE", desc: "Profundă", icon: "📖" },
            { num: "4", label: "EXERCIȚIU", desc: "Practic", icon: "⚙️" }
          ].map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="border border-amber-500/20 rounded-2xl p-8 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur text-center hover:border-amber-500/40 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.2)] transition-all duration-300 group">
                <div className="text-4xl font-light text-amber-400 mb-3 transform group-hover:scale-110 transition-transform duration-300">{step.num}</div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">{step.label}</h3>
                <p className="text-xs text-white/60 font-light">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Organizare */}
        <Reveal>
          <div className="bg-gradient-to-br from-amber-950/40 to-transparent border border-amber-500/20 rounded-2xl p-12">
            <h3 className="text-2xl font-light text-amber-300 mb-8">Organizare în Pachete</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-amber-400 font-light uppercase text-sm tracking-wide">Categorii Principale</h4>
                <ul className="text-white/70 font-light space-y-2 text-sm">
                  <li>✓ Psihologie</li>
                  <li>✓ Filozofie</li>
                  <li>✓ Educational</li>
                  <li>✓ Inspirațional</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-amber-400 font-light uppercase text-sm tracking-wide">Progresie</h4>
                <ul className="text-white/70 font-light space-y-2 text-sm">
                  <li>✓ Teorie (Meta)</li>
                  <li>✓ Practică (Apply)</li>
                  <li>✓ Înțelepciune (Integrate)</li>
                  <li>✓ Stăpânire (Master)</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ========== TECHNICAL WORKFLOW ========== */}
      <section className="relative py-40 px-6 lg:px-20 max-w-7xl mx-auto border-t border-amber-500/10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-5xl lg:text-6xl font-light mb-4">⚡</div>
            <h2 className="text-5xl font-light tracking-tight text-amber-400 mb-4">Calea către Lansare</h2>
            <p className="text-white/50 uppercase tracking-widest text-xs">GitHub & Vercel — Automated Deployment</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Level 1: Foundation */}
          <Reveal>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur">
              <h3 className="text-xl font-light text-amber-300 mb-6 flex items-center gap-3">
                <span className="text-2xl">🏗️</span> Fundamentul
              </h3>
              <ul className="space-y-3 text-white/70 font-light text-sm">
                <li>✓ React/Next.js</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Responsive</li>
                <li>✓ Semantic HTML</li>
                <li>✓ Performance</li>
              </ul>
            </div>
          </Reveal>

          {/* Level 2: Git Workflow */}
          <Reveal delay={100}>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur">
              <h3 className="text-xl font-light text-amber-300 mb-6 flex items-center gap-3">
                <span className="text-2xl">📜</span> Git Workflow
              </h3>
              <ul className="space-y-3 text-white/70 font-light text-sm">
                <li>✓ Branches</li>
                <li>✓ Commits Semantic</li>
                <li>✓ Pull Requests</li>
                <li>✓ Code Review</li>
                <li>✓ Merge Master</li>
              </ul>
            </div>
          </Reveal>

          {/* Level 3: Deployment */}
          <Reveal delay={200}>
            <div className="border border-amber-500/20 rounded-2xl p-10 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur">
              <h3 className="text-xl font-light text-amber-300 mb-6 flex items-center gap-3">
                <span className="text-2xl">🚀</span> Vercel Deploy
              </h3>
              <ul className="space-y-3 text-white/70 font-light text-sm">
                <li>✓ Auto-Deploy</li>
                <li>✓ DNS Pointing</li>
                <li>✓ SSL Certs</li>
                <li>✓ CDN Global</li>
                <li>✓ Monitoring</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-40 px-6 lg:px-20 max-w-7xl mx-auto text-center border-t border-amber-500/10">
        <Reveal>
          <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
            Claritatea este <span className="text-amber-400">deja aici</span>
          </h2>
          <p className="text-lg text-white/60 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Arhitectura ta digitală este reflexie a clarității tale interioare. 
            <br/>Construiește cu intenție. Lansează cu putere. Evoluează cu conștință.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-14 py-6 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-full text-black font-bold uppercase text-xs tracking-widest transition-all hover:shadow-[0_0_40px_rgba(217,119,6,0.5)] hover:-translate-y-1"
          >
            Inițiază Transformarea
          </Link>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 lg:px-20 border-t border-amber-500/10 text-center">
        <p className="text-white/40 font-light text-sm uppercase tracking-widest">
          Arhitectura Clarității © 2026 | De la Spațiul Sacru la Execuție Digitală
        </p>
      </footer>
    </div>
  );
}
