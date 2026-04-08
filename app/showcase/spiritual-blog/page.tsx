import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Spiritual Intelligence — Reverb.ro",
  description: "Blog educativ despre inteligență emoțională, spiritualitate practică, relații, fericire și awakening personal. Articole bazate pe cercetare și tradiții antice.",
};

const articles = [
  {
    id: "hipnagogic-state",
    title: "Starea Hipnagogică: Punctul Dulce al Creativității",
    category: "Neurobiologie Spirituală",
    excerpt: "Cum starea liminală dintre veghe și somn devine instrument pentru inovație. Cercetarea pe geniurii nocturnul: Edison, Tesla, Dalí.",
    color: "#9333ea",
    readTime: "12 min",
  },
  {
    id: "emotional-intelligence",
    title: "Inteligența Emoțională: Arta de a Oferi Fericire",
    category: "Dezvoltare Personală",
    excerpt: "Cum să cultivi o prezență care transformă relațiile. Practici zilnice pentru a deveni ancoră de stabilitate pentru cei din jur.",
    color: "#ec4899",
    readTime: "9 min",
  },
  {
    id: "relationships",
    title: "Spiritualitatea Relațiilor: Prietenia ca Cale Inițiatică",
    category: "Relații & Conexiuni",
    excerpt: "Dezgheț emoțional și intimitate autentică. Cum să transformi relațiile în surse de creștere spirituală și iluminare.",
    color: "#06b6d4",
    readTime: "15 min",
  },
  {
    id: "night-genius",
    title: "Geniul Nocturn: Arhitectura Creierului Bufniței",
    category: "Cronobiologie",
    excerpt: "De ce sunt mai creativi noaptea? Medicina antică vs. neuroștiință modernă. Cum să sincronizezi productivitatea cu ritmurile tale naturale.",
    color: "#f59e0b",
    readTime: "11 min",
  },
  {
    id: "happiness-science",
    title: "Știința Fericirii: Dincolo de Plăcere Efemeră",
    category: "Psihologie Pozitivă",
    excerpt: "Cum construiești fericire îndep profundă și durabilă. Distincția între plăcere și mulțumire autentică.",
    color: "#10b981",
    readTime: "10 min",
  },
  {
    id: "night-wisdom",
    title: "Miezul Nopții: Locus Clasic al Revelatiei",
    category: "Tradiții Spirituale",
    excerpt: "De la Tora la Coran, de la Vedele la creștinism. Noaptea ca timp sacru pentru conexiune divină și iluminare.",
    color: "#8b5cf6",
    readTime: "14 min",
  },
];

const features = [
  {
    title: "Cercetare Riguroasă",
    desc: "Fiecare articol se bazează pe studii academice, tradiții antice și practici verificate.",
    icon: "🔬"
  },
  {
    title: "Practicabilitate Zilnică",
    desc: "Nu teorie abstractă. Metode concrete pe care să le aplici azi, în viața ta reală.",
    icon: "✨"
  },
  {
    title: "Tradiții + Modernitate",
    desc: "Integrăm înțelepciunea antică cu neuroștiința contemporană pentru claritate maximă.",
    icon: "⚙️"
  },
  {
    title: "Comunitate Awakening",
    desc: "Spațiu sigur pentru a-ți explora creșterea spirituală alături de oameni de același glas.",
    icon: "🌙"
  },
];

export default function SpiritualBlogShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0a1a] via-[#1a1330] to-[#0f0a1a]">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:px-10 lg:py-40 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/showcase" className="inline-flex items-center text-xs font-mono mb-12 border rounded-full px-4 py-1.5 text-purple-300 border-purple-500/30 hover:border-purple-500/60 transition-all">
            ← Înapoi la showcase
          </Link>

          <div className="mb-6 text-[11px] font-mono uppercase tracking-[0.3em] text-purple-400/60">SPIRITUAL INTELLIGENCE</div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300">
            Inteligență Spirituală
          </h1>

          <p className="text-xl text-gray-300 leading-8 max-w-2xl mb-8">
            Un blog pentru cei care caută sens profund în relații, creativitate și spiritualitate practică. Articole bazate pe cercetare, tradiții antice și experiență de viață.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/30">
              Explorează Articolele
            </button>
            <button className="px-8 py-3 border border-purple-500/50 hover:border-purple-500 text-purple-300 font-medium rounded-lg transition-all hover:bg-purple-500/10">
              Abonează-te
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-all">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Articole Principale</h2>
          <p className="text-gray-400 text-lg">Citiri care transformă perspectiva și deschid noi orizonturi.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="group relative p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 overflow-hidden"
            >
              {/* Background accent */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: article.color }}
              ></div>

              <div className="relative z-10">
                <div className="mb-4">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white transition-all"
                    style={{ backgroundColor: article.color }}
                  >
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-mono">{article.readTime}</span>
                  <span className="group-hover:translate-x-1 transition-transform" style={{ color: article.color }}>
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Content Pillars */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Piloni de Conținut</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-300">🧠 Neurobiologie Spirituală</h3>
            <p className="text-gray-400">Cum funcționează creierul în stări creative și meditative. Hipnagogia, stări limizale, neuroplasticitate și iluminare.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-300">❤️ Relații & Intimitate</h3>
            <p className="text-gray-400">Prietenia ca inițiere spirituală. Intimitate autentică, dezgheț emoțional și cum să transformi legăturile în creștere.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cyan-300">✨ Inteligență Emoțională</h3>
            <p className="text-gray-400">Arta de a oferi fericire. Prezență emoțională, empatie structurală și cum să devii ancoră pentru cei din jur.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-300">🌙 Tradiții Antice</h3>
            <p className="text-gray-400">Noaptea în Tora, Islam, creștinism și hinduism. Revelatia divină și cum tradițiile recunosc miezul nopții ca sacru.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 lg:py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Gata să-ți transformi perspectiva?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Primește articole zilnice despre esența spirituală a creșterii personale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Email-ul tău"
            className="px-6 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-all"
          />
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/30">
            Abonează-te
          </button>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-gray-800/50 px-6 lg:px-10 py-12 text-center text-gray-500 text-sm">
        <p>© 2024 Reverb.ro // Spiritual Intelligence — Pentru cei care caută sens în profundime.</p>
      </section>
    </div>
  );
}
