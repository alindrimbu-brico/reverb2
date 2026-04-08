'use client';

import Link from "next/link";

const articles = [
  { id: "hipnagogic-state", title: "Starea Hipnagogică: Punctul Dulce al Creativității", category: "Neurobiologie Spirituală", excerpt: "Cum starea liminală dintre veghe și somn devine instrument pentru inovație. Edison, Tesla, Dalí.", color: "#9333ea", readTime: "12 min", icon: "🌙✨" },
  { id: "emotional-intelligence", title: "Inteligența Emoțională: Arta de a Oferi Fericire", category: "Dezvoltare Personală", excerpt: "Cum să cultivi o prezență care transformă relațiile. Practici zilnice pentru stabilitate.", color: "#ec4899", readTime: "9 min", icon: "❤️🌟" },
  { id: "relationships", title: "Spiritualitatea Relațiilor: Prietenia ca Cale Inițiatică", category: "Relații & Conexiuni", excerpt: "Dezgheț emoțional și intimitate autentică. Transformă relațiile în creștere spirituală.", color: "#06b6d4", readTime: "15 min", icon: "🤝✨" },
  { id: "night-genius", title: "Geniul Nocturn: Arhitectura Creierului Bufniței", category: "Cronobiologie", excerpt: "De ce suntem mai creativi noaptea? Sincronizează productivitatea cu ritmurile naturale.", color: "#f59e0b", readTime: "11 min", icon: "🦉🧠" },
  { id: "happiness-science", title: "Știința Fericirii: Dincolo de Plăcere Efemeră", category: "Psihologie Pozitivă", excerpt: "Cum construiești fericire profundă și durabilă. Distincția dintre plăcere și mulțumire.", color: "#10b981", readTime: "10 min", icon: "🌈💫" },
  { id: "night-wisdom", title: "Miezul Nopții: Locus Clasic al Revelatiei", category: "Tradiții Spirituale", excerpt: "De la Tora la Coran. Noaptea ca timp sacru pentru conexiune divină și iluminare.", color: "#8b5cf6", readTime: "14 min", icon: "🕯️📖" },
];

const HypnagogicInfographic = () => <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))' }}><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#9333ea" stopOpacity="0.1" /><stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" /></linearGradient></defs><rect width="320" height="240" fill="url(#grad1)" rx="12" /><circle cx="160" cy="100" r="50" fill="none" stroke="#9333ea" strokeWidth="2" opacity="0.6" /><circle cx="80" cy="60" r="25" fill="#fbbf24" opacity="0.7" /><line x1="80" y1="25" x2="80" y2="10" stroke="#fbbf24" strokeWidth="2" /><circle cx="240" cy="60" r="20" fill="#c084fc" opacity="0.7" /><circle cx="245" cy="55" r="20" fill="#0f0a1a" /><circle cx="160" cy="50" r="3" fill="#06b6d4" opacity="0.8" /><text x="80" y="180" fontSize="12" fill="#fbbf24" textAnchor="middle" fontWeight="bold">VEGHE</text><text x="240" y="180" fontSize="12" fill="#c084fc" textAnchor="middle" fontWeight="bold">SOMN</text><text x="160" y="160" fontSize="11" fill="#06b6d4" textAnchor="middle" fontStyle="italic">HIPNAGOGIA</text></svg>;

const EmotionalLevelsInfographic = () => <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))' }}><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" /><stop offset="100%" stopColor="#f43f5e" stopOpacity="0.1" /></linearGradient></defs><rect width="320" height="240" fill="url(#grad2)" rx="12" /><polygon points="160,30 60,180 260,180" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.6" /><line x1="85" y1="135" x2="235" y2="135" stroke="#ec4899" strokeWidth="1.5" opacity="0.4" /><path d="M 160 80 Q 150 70 145 75 Q 140 70 135 75 Q 130 80 130 85 Q 130 100 145 110 Q 160 122 160 122 Q 160 122 175 110 Q 190 100 190 85 Q 190 80 185 75 Q 180 70 175 75 Q 170 70 160 80 Z" fill="#ec4899" opacity="0.8" /><text x="160" y="200" fontSize="12" fill="#ec4899" textAnchor="middle" fontWeight="bold">CONȘTIINȚĂ EMOȚIONALĂ</text></svg>;

const NightCircleInfographic = () => <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' }}><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" /></linearGradient></defs><rect width="320" height="240" fill="url(#grad3)" rx="12" /><circle cx="160" cy="110" r="70" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" /><circle cx="160" cy="45" r="3" fill="#8b5cf6" /><path d="M 95 110 A 70 70 0 0 1 225 110" fill="none" stroke="#6366f1" strokeWidth="4" opacity="0.8" strokeLinecap="round" /><circle cx="160" cy="50" r="15" fill="#fef3c7" opacity="0.9" /><circle cx="168" cy="45" r="15" fill="#0f0a1a" /><text x="160" y="200" fontSize="12" fill="#8b5cf6" textAnchor="middle" fontWeight="bold">MIEZUL NOPȚII</text></svg>;

export default function SpiritualBlogShowcase() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } } .animate-float { animation: float 6s ease-in-out infinite; }`}} />
      <div className="min-h-screen bg-gradient-to-b from-[#0f0a1a] via-[#1a1330] to-[#0f0a1a]" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),radial-gradient(circle at 80% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),radial-gradient(circle at 50% 90%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)` }}>
        {/* Hero */}
        <section className="relative px-6 py-24 lg:px-10 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <Link href="/showcase" className="inline-flex items-center text-xs font-mono mb-12 border rounded-full px-4 py-1.5 text-purple-300 border-purple-500/30 hover:border-purple-500/60 transition-all">← Înapoi</Link>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300">Inteligență Spirituală</h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">Un blog pentru cei care caută sens profund în relații, creativitate și spiritualitate practică.</p>
            <div className="flex gap-4"><button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition transform hover:scale-105">Explorează</button><button className="px-8 py-3 border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-500/10">Abonează-te</button></div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-4 gap-8">
          {[{ icon: '🔬', title: 'Cercetare', desc: 'Studii academice verificate.' }, { icon: '✨', title: 'Practicabilitate', desc: 'Metode concrete zilnice.' }, { icon: '⚙️', title: 'Integrare', desc: 'Știință + spiritualitate.' }, { icon: '🌙', title: 'Comunitate', desc: 'Spațiu de creștere.' }].map((f, i) => (
            <div key={i} className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 group hover:bg-purple-500/10 transition"><div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{f.icon}</div><h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3><p className="text-sm text-gray-400">{f.desc}</p></div>
          ))}
        </section>

        {/* Infographics */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Concepte Vizualizate Artistic</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[{ graphic: <HypnagogicInfographic />, title: '🌙 Hipnagogia', desc: 'Tranziția magică unde se nasc ideile geniurii.' }, { graphic: <EmotionalLevelsInfographic />, title: '❤️ Emoție', desc: 'De la autopercepție la transformare.' }, { graphic: <NightCircleInfographic />, title: '🕯️ Noaptea Sacră', desc: 'Tradițiile recunoscnoapte ca timp spiritual.' }].map((item, i) => (
              <div key={i} className="space-y-6 hover:scale-105 transition duration-300">
                <div className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">{item.graphic}</div>
                <div><h3 className="text-2xl font-bold text-purple-300 mb-3">{item.title}</h3><p className="text-gray-400">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-12">Articole Principale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article key={a.id} className="group p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition transform hover:-translate-y-2 cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: a.color }}>{a.category}</span>
                  <span className="text-2xl animate-float">{a.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">{a.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-500 border-t border-gray-800/50 pt-4"><span>{a.readTime}</span><span style={{ color: a.color }} className="group-hover:translate-x-1 transition">→</span></div>
              </article>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-12">Piloni de Conținut</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{ icon: '🧠', title: 'Neurobiologie', desc: 'Hipnagogia și stări meditative.' }, { icon: '❤️', title: 'Relații', desc: 'Inițiere spirituală prin prietenie.' }, { icon: '✨', title: 'Emoție', desc: 'Prezență care transformă.' }, { icon: '🌙', title: 'Tradiții', desc: 'Timpuri sacre de revelaţie.' }].map((p, i) => (
              <div key={i} className="p-8 rounded-xl border border-purple-500/20 bg-purple-500/5 group hover:bg-purple-500/10 transition"><h3 className="text-2xl font-bold text-purple-300 mb-4 group-hover:text-purple-200">{p.icon} {p.title}</h3><p className="text-gray-400">{p.desc}</p></div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-6">Transformă-ți perspectiva</h2>
          <p className="text-xl text-gray-400 mb-10">Primești articole zilnice despre esența spirituală a creșterii personale.</p>
          <div className="flex gap-4 max-w-md mx-auto"><input type="email" placeholder="Email..." className="flex-1 px-6 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" /><button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transform hover:scale-105 transition">Subscribe</button></div>
        </section>

        {/* Footer */}
        <section className="border-t border-gray-800/50 px-6 py-12 text-center text-gray-500 text-sm"><p>© 2024 Reverb.ro // Spiritual Intelligence 🌙✨</p></section>
      </div>
    </>
  );
}
