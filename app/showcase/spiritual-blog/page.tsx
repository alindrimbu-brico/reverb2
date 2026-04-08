'use client';

import Link from "next/link";

const articles = [
  { id: "hipnagogic-state", title: "Starea Hipnagogică", category: "Neurobiologie Spirituală", excerpt: "Punctul dulce al creativității. Tranziția magică dintre veghe și somn unde se nasc ideile geniurii.", color: "#9333ea", readTime: "12 min", icon: "🌙✨", href: "/showcase/spiritual-blog/hipnagogic-state" },
  { id: "emotional-intelligence", title: "Inteligența Emoțională", category: "Dezvoltare Personală", excerpt: "Arta de a te înțelege și a înțelege pe alții. Fundamentul adevăratei relații cu tine și cu lumea.", color: "#ec4899", readTime: "14 min", icon: "❤️🌟", href: "/showcase/spiritual-blog/emotional-intelligence" },
  { id: "relationships", title: "Inteligența Relațiilor", category: "Relații & Conexiuni", excerpt: "Prietenia, iubirea și conexiunea. Cum construim relații care ne ridică mutual la nivel superior.", color: "#06b6d4", readTime: "13 min", icon: "🤝✨", href: "/showcase/spiritual-blog/relationships" },
  { id: "night-genius", title: "Geniul Nocturn", category: "Cronobiologie", excerpt: "O noapte lungă pentru cei aleși. Cum unii oameni se-nfloare în întuneric când alții sunt legați de lumină.", color: "#3b82f6", readTime: "16 min", icon: "🦉🧠", href: "/showcase/spiritual-blog/night-genius" },
  { id: "happiness-science", title: "Știința Fericirii", category: "Psihologie Pozitivă", excerpt: "Fericirea nu este destinație — este skill care se poate antrena. Cum construim o viață cu sens și plenitudine.", color: "#f59e0b", readTime: "15 min", icon: "🌈💫", href: "/showcase/spiritual-blog/happiness-science" },
  { id: "night-wisdom", title: "Înțelepciunea Nocturnă", category: "Tradiții Spirituale", excerpt: "Ce au descoperit miile de ani tradiții despre noaptă, viziuni și conexiunea cu Sacrul.", color: "#fbbf24", readTime: "17 min", icon: "🕯️📖", href: "/showcase/spiritual-blog/night-wisdom" },
];

const SubconsciousInfographic = () => <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))' }}><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#9333ea" stopOpacity="0.1" /><stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" /></linearGradient></defs><rect width="320" height="240" fill="url(#grad1)" rx="12" /><circle cx="160" cy="100" r="50" fill="none" stroke="#9333ea" strokeWidth="2" opacity="0.6" /><circle cx="80" cy="60" r="25" fill="#fbbf24" opacity="0.7" /><line x1="80" y1="25" x2="80" y2="10" stroke="#fbbf24" strokeWidth="2" /><circle cx="240" cy="60" r="20" fill="#c084fc" opacity="0.7" /><circle cx="245" cy="55" r="20" fill="#0f0a1a" /><circle cx="160" cy="50" r="3" fill="#06b6d4" opacity="0.8" /><text x="80" y="180" fontSize="12" fill="#fbbf24" textAnchor="middle" fontWeight="bold">CONȘTIENT</text><text x="240" y="180" fontSize="12" fill="#c084fc" textAnchor="middle" fontWeight="bold">SUBCONȘTIENT</text><text x="160" y="160" fontSize="11" fill="#06b6d4" textAnchor="middle" fontStyle="italic">95% AUTOPILOT</text></svg>;

const EmotionalHealingInfographic = () => <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))' }}><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" /><stop offset="100%" stopColor="#f43f5e" stopOpacity="0.1" /></linearGradient></defs><rect width="320" height="240" fill="url(#grad2)" rx="12" /><polygon points="160,30 60,180 260,180" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.6" /><line x1="85" y1="135" x2="235" y2="135" stroke="#ec4899" strokeWidth="1.5" opacity="0.4" /><path d="M 160 80 Q 150 70 145 75 Q 140 70 135 75 Q 130 80 130 85 Q 130 100 145 110 Q 160 122 160 122 Q 160 122 175 110 Q 190 100 190 85 Q 190 80 185 75 Q 180 70 175 75 Q 170 70 160 80 Z" fill="#ec4899" opacity="0.8" /><text x="160" y="200" fontSize="12" fill="#ec4899" textAnchor="middle" fontWeight="bold">PROCESAREA DURERII</text></svg>;

const ParadigmShiftInfographic = () => <svg viewBox="0 0 320 240" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' }}><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" /></linearGradient></defs><rect width="320" height="240" fill="url(#grad3)" rx="12" /><circle cx="160" cy="110" r="70" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" /><circle cx="160" cy="45" r="3" fill="#8b5cf6" /><path d="M 95 110 A 70 70 0 0 1 225 110" fill="none" stroke="#6366f1" strokeWidth="4" opacity="0.8" strokeLinecap="round" /><circle cx="160" cy="50" r="15" fill="#fef3c7" opacity="0.9" /><circle cx="168" cy="45" r="15" fill="#0f0a1a" /><text x="160" y="200" fontSize="12" fill="#8b5cf6" textAnchor="middle" fontWeight="bold">SCHIMBAREA PARADIGMEI</text></svg>;

export default function SpiritualBlogShowcase() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } } 
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        
        @keyframes fadeIn { 
          from { opacity: 0; } 
          to { opacity: 1; } 
        }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        
        @keyframes glow { 
          0%, 100% { box-shadow: 0 0 10px rgba(147, 51, 234, 0.3); } 
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.8); } 
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(147, 51, 234, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(147, 51, 234, 1)); }
        }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate { animation: rotate-slow 20s linear infinite; }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}} />
      <div className="min-h-screen bg-gradient-to-b from-[#0f0a1a] via-[#1a1330] to-[#0f0a1a]" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),radial-gradient(circle at 80% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),radial-gradient(circle at 50% 90%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)` }}>
        {/* Hero */}
        <section className="relative px-6 py-24 lg:px-10 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse animate-rotate"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <Link href="/showcase" className="inline-flex items-center text-xs font-mono mb-12 border rounded-full px-4 py-1.5 text-purple-300 border-purple-500/30 hover:border-purple-500/60 transition-all animate-slide-up">← Înapoi</Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 animate-slide-up stagger-1">Inteligență Spirituală<br/><span className="text-3xl md:text-5xl opacity-80">& Reprogramare</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8 animate-slide-up stagger-2">Arhitectură digitală construită integral pe fundamentele psihologice din <i>101 Eseuri Care Îți Vor Schimba Modul de a Gândi</i>. Decodarea subconștientului tău.</p>
            <div className="flex gap-4 animate-slide-up stagger-3"><button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition transform hover:scale-110 active:scale-95">Începe Terapia</button><button className="px-8 py-3 border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-500/10 transition">Vezi Articolele</button></div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-4 gap-8">
          {[{ icon: '🧭', title: 'Subconștient', desc: 'Înțelege de ce opui rezistență.' }, { icon: '🛡️', title: 'Auto-sabotajul', desc: 'Mecanism ascuns de protecție.' }, { icon: '⚖️', title: 'Rutina Banală', desc: 'Adevăratul loc de joacă al minții.' }, { icon: '🧠', title: 'Paradigma', desc: 'Re-cablare neuronală activă.' }].map((f, i) => (
            <div key={i} className={`p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 group hover:bg-purple-500/10 transition animate-bounce-in stagger-${i+1}`} style={{animationDelay: `${i * 0.1}s`}}><div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition duration-300 transform">{f.icon}</div><h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition">{f.title}</h3><p className="text-sm text-gray-400 group-hover:text-gray-300 transition">{f.desc}</p></div>
          ))}
        </section>

        {/* Infographics */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-16 text-center animate-slide-up">Mecanica Minții Tale</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[{ graphic: <SubconsciousInfographic />, title: '🧠 Rădăcina Invizibilă', desc: 'Programarea subconștientă preluată în copilărie dictează 95% din deciziile tale de adult (autopilot).', delay: 0 }, { graphic: <EmotionalHealingInfographic />, title: '❤️ Procesarea Durerii', desc: 'Trauma și rezistența: Nu ignori stările grele, ci înveți să le decodifici și să le traversezi complet.', delay: 1 }, { graphic: <ParadigmShiftInfographic />, title: '🔄 Schimbarea Paradigmei', desc: 'Suferința este utilă doar până te face să te schimbi. După aceea devine abuz, iar recablarea devine necesară.', delay: 2 }].map((item, i) => (
              <div key={i} className={`space-y-6 hover:scale-105 transition duration-500 animate-slide-up stagger-${i+1}`} style={{animationDelay: `${i * 0.2}s`}}>
                <div className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 transition duration-300 group"><div className="group-hover:animate-pulse-glow transition">{item.graphic}</div></div>
                <div><h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-pink-300 transition animate-fade-in" style={{animationDelay: `${i * 0.3}s`}}>{item.title}</h3><p className="text-gray-400 group-hover:text-gray-300 transition">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-12 animate-slide-up">Colecția de Articole</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, idx) => (
              <Link key={a.id} href={a.href} className={`group p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition transform hover:-translate-y-3 cursor-pointer animate-bounce-in stagger-${(idx % 6) + 1}`} style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white animate-shimmer" style={{ backgroundColor: a.color }}>{a.category}</span>
                  <span className="text-2xl animate-float group-hover:animate-bounce" style={{animationDelay: `${idx * 0.1}s`}}>{a.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text transition duration-300" style={{backgroundImage: `linear-gradient(to right, ${a.color}, #ec4899)`}}>{a.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 group-hover:text-gray-300 transition">{a.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-500 border-t border-gray-800/50 pt-4 group-hover:border-gray-700/80 transition"><span className="font-mono group-hover:text-gray-400 transition">{a.readTime}</span><span style={{ color: a.color }} className="group-hover:translate-x-2 group-hover:text-lg transition duration-300">→</span></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-12">Piloni de Conținut Terapeutic</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{ icon: '🧠', title: 'Reprogramare Activă', desc: 'Cum să transformi biasurile cognitive distructive.' }, { icon: '❤️', title: 'Inteligență Emoțională', desc: 'Acceptarea sentimentelor negative ca hartă spre vindecare.' }, { icon: '✨', title: 'Scop vs Muncă', desc: 'Detașarea obsesiilor externe de identitatea ta pură.' }, { icon: '🌙', title: 'Rutina Banală', desc: 'Singurul spațiu real unde se construiesc imperii interioare.' }].map((p, i) => (
              <div key={i} className="p-8 rounded-xl border border-purple-500/20 bg-purple-500/5 group hover:bg-purple-500/10 transition"><h3 className="text-2xl font-bold text-purple-300 mb-4 group-hover:text-purple-200">{p.icon} {p.title}</h3><p className="text-gray-400">{p.desc}</p></div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center border-t border-purple-500/10">
          <h2 className="text-5xl font-bold text-white mb-6">Incepe să gândești altfel</h2>
          <p className="text-xl text-gray-400 mb-10">Primești fragmente zilnice extrase și traduse vizual din "101 Eseuri Care Îți Vor Schimba Modul de a Gândi".</p>
          <div className="flex gap-4 max-w-md mx-auto"><input type="email" placeholder="Email..." className="flex-1 px-6 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" /><button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transform hover:scale-105 transition">Aplică Principiile</button></div>
        </section>

        {/* Footer */}
        <section className="border-t border-gray-800/50 px-6 py-12 text-center text-gray-500 text-sm"><p>© 2024 Reverb.ro // Brianna Wiest Paradigm Shift 🌙✨</p></section>
      </div>
    </>
  );
}
