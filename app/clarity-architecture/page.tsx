import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Arhitectura Clarității | De la Spațiul Sacru la Execuție Digitală",
  description: "O călătorie prin filozofia clarității, designul spațiului sacru, și transformarea digitală.",
};

export default function ClarityArchitecturePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden selection:bg-amber-500 selection:text-black">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-700/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-20 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="mb-8 inline-block border border-amber-500/30 rounded-full px-6 py-2 bg-amber-500/5 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Strategie Digitală Sacralizată</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-6xl lg:text-8xl font-light tracking-[-0.02em] leading-tight mb-8">
            Arhitectura <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Clarității</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg lg:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            De la Spațiul Sacru la Execuție Digitală
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 w-1 h-24 bg-gradient-to-b from-amber-500/50 to-transparent mx-auto"></div>
        </Reveal>
      </section>

      {/* Main Grid Section */}
      <section className="relative py-32 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Philosophy */}
          <Reveal>
            <div className="border border-amber-500/20 rounded-2xl p-12 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur-sm hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 text-lg">🧘</span>
                </div>
                <div>
                  <h2 className="text-3xl font-light tracking-tight text-amber-400">Filosofia Clarității</h2>
                  <p className="text-xs uppercase tracking-widest text-white/50 mt-2">REVERB.RO</p>
                </div>
              </div>

              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <div>
                  <h3 className="text-amber-300 font-medium mb-2 text-sm uppercase tracking-wider">Auditrul de Distilare</h3>
                  <p>Reducerea oricărui mesaj la esența lui. Claritatea nu vine din abunden­ță, ci din selectiv­itate conștientă.</p>
                </div>
                <div>
                  <h3 className="text-amber-300 font-medium mb-2 text-sm uppercase tracking-wider">Decizii Binare și Strategii</h3>
                  <p>Simplificare radicală: albul vs negrul. Strategiile care funcționează sunt acelea care nu se negociază cu interpretarea.</p>
                </div>
                <div>
                  <h3 className="text-amber-300 font-medium mb-2 text-sm uppercase tracking-wider">Claritatea ca Forță Activă</h3>
                  <p>Nu este pasivitate. Claritatea este o acțiune directă. Ea forțează realitatea să se alinieze cu intenție.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Sacred Space Design */}
          <Reveal delay={100}>
            <div className="border border-amber-500/20 rounded-2xl p-12 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur-sm hover:border-amber-500/40 transition-all">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 text-lg">✨</span>
                </div>
                <div>
                  <h2 className="text-3xl font-light tracking-tight text-amber-400">Designul Spațiului Sacru</h2>
                  <p className="text-xs uppercase tracking-widest text-white/50 mt-2">METANOIA</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-amber-300 font-medium mb-3 text-sm uppercase tracking-wider">Paleta Cromatică Eterică</h3>
                  <div className="flex gap-3 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-white/90 border border-white/20 flex items-center justify-center">
                      <span className="text-xs text-black font-bold text-center">Bone<br/>White</span>
                    </div>
                    <div className="w-16 h-16 rounded-lg bg-gray-600 border border-gray-500/30"></div>
                    <div className="w-16 h-16 rounded-lg bg-amber-600 border border-amber-500/30"></div>
                    <div className="w-16 h-16 rounded-lg bg-amber-500 border border-amber-400/30"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-amber-300 font-medium mb-2 text-sm uppercase tracking-wider">Arhitectura Spațiului Negativ</h3>
                  <p className="text-white/70 font-light">Designul nu este despre a umple. Este despre a crea respira­ție. Fiecare void este cu scop.</p>
                </div>
                <div>
                  <h3 className="text-amber-300 font-medium mb-2 text-sm uppercase tracking-wider">Simbolistica și Navigare Lentă</h3>
                  <p className="text-white/70 font-light">Tranzițiile ceremoniale între secțiuni. Utilizatorul parcurge, nu "clicuiește".</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Study Structure */}
        <Reveal delay={200}>
          <div className="border border-amber-500/20 rounded-2xl p-12 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur-sm mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 text-lg">📚</span>
              </div>
              <div>
                <h2 className="text-3xl font-light tracking-tight text-amber-400">Structura Studiului</h2>
                <p className="text-xs uppercase tracking-widest text-white/50 mt-2">FLASHCARDS & PACHETE DE STUDIU</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { num: "1", label: "TITLU", desc: "Fixarea intenției" },
                { num: "2", label: "CONCEPT", desc: "Modelul mental" },
                { num: "3", label: "EXPLICAȚIE", desc: "Contextualizare profundă" },
                { num: "4", label: "EXERCIȚIU PRACTIC", desc: "Aplicare concretă" },
              ].map((step, i) => (
                <div key={i} className="bg-white/5 border border-amber-500/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all">
                  <div className="text-4xl font-light text-amber-400 mb-2">{step.num}</div>
                  <h3 className="text-sm uppercase font-bold tracking-widest text-amber-300 mb-1">{step.label}</h3>
                  <p className="text-xs text-white/50 font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Launch Path */}
        <Reveal delay={300}>
          <div className="border border-amber-500/20 rounded-2xl p-12 bg-gradient-to-br from-amber-950/20 to-transparent backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 text-lg">🚀</span>
              </div>
              <div>
                <h2 className="text-3xl font-light tracking-tight text-amber-400">Calea către Lansare</h2>
                <p className="text-xs uppercase tracking-widest text-white/50 mt-2">GITHUB & VERCEL</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-amber-300 font-medium mb-4 text-sm uppercase tracking-wider">1. Pregătire Web</h3>
                <ul className="space-y-2 text-white/60 font-light text-sm">
                  <li>✓ Redactarea conținutului</li>
                  <li>✓ Designul responsiv</li>
                  <li>✓ Optimizare SEO</li>
                  <li>✓ Testing și QA</li>
                </ul>
              </div>

              <div>
                <h3 className="text-amber-300 font-medium mb-4 text-sm uppercase tracking-wider">2. Workflow Git</h3>
                <ul className="space-y-2 text-white/60 font-light text-sm">
                  <li>✓ git init & branches</li>
                  <li>✓ Commit semăntic</li>
                  <li>✓ Pull requests</li>
                  <li>✓ Code review</li>
                </ul>
              </div>

              <div>
                <h3 className="text-amber-300 font-medium mb-4 text-sm uppercase tracking-wider">3. Vercel Deploy</h3>
                <ul className="space-y-2 text-white/60 font-light text-sm">
                  <li>✓ Auto-deploy pe commit</li>
                  <li>✓ DNS pointing</li>
                  <li>✓ SSL certificates</li>
                  <li>✓ Live monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-20 max-w-7xl mx-auto text-center border-t border-amber-500/10">
        <Reveal>
          <h2 className="text-5xl font-light tracking-tight mb-8">
            Claritatea este <span className="text-amber-400">deja aici</span>
          </h2>
          <p className="text-lg text-white/60 font-light mb-12 max-w-2xl mx-auto">
            Arhitectura ta digitală este o reflexie a clarității tale interioare. Construiește cu intenție. Lansează cu puteri.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-full text-black font-bold uppercase text-xs tracking-widest transition-all hover:shadow-[0_0_30px_rgba(217,119,6,0.4)]"
          >
            Inițiază Proiectul
          </a>
        </Reveal>
      </section>
    </div>
  );
}
