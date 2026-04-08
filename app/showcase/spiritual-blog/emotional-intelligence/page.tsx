'use client';

import Link from "next/link";

export default function EmotionalIntelligence() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-border { 0%, 100% { border-color: rgba(236, 72, 153, 0.3); } 50% { border-color: rgba(236, 72, 153, 0.8); } }
        .animate-slide-down { animation: slideDown 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-border { animation: pulse-border 3s ease-in-out infinite; }
      `}} />

      <div className="min-h-screen bg-gradient-to-b from-[#1a0f2e] via-[#2a1a3a] to-[#0f0a1a]" style={{
        backgroundImage: `radial-gradient(circle at 30% 40%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`
      }}>
        {/* Header */}
        <section className="sticky top-0 z-50 backdrop-blur-sm border-b border-pink-500/10 bg-[#0f0a1a]/80">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <Link href="/showcase/spiritual-blog" className="flex items-center gap-2 text-pink-300 hover:text-pink-200 transition">
              ← Înapoi la Spiritual Intelligence
            </Link>
            <div className="text-xs font-mono text-pink-400/60">ARTICOL DEDICAT</div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-rose-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-pink-400/70 animate-slide-down">Dezvoltare Personală</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-8 animate-slide-down" style={{animationDelay: '0.1s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-red-300">
                Inteligența Emoțională
              </span>
            </h1>
            <p className="text-2xl text-pink-200 leading-relaxed max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Arta de a te înțelege și a înțelege pe alții. Fundamentul adevăratei relații cu tine și cu lumea.
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <span className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-sm font-semibold">14 min read</span>
              <span className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-sm font-semibold">❤️ Psihologie</span>
              <span className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-sm font-semibold">🔥 Transformare</span>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 border-t border-pink-500/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <svg viewBox="0 0 400 500" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.4))' }}>
                <defs>
                  <linearGradient id="pyramidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Base - Self-awareness */}
                <polygon points="50,420 350,420 300,340 100,340" fill="url(#pyramidGrad)" stroke="#ec4899" strokeWidth="2" opacity="0.9" />
                <text x="200" y="385" fontSize="16" fill="#ec4899" textAnchor="middle" fontWeight="bold">AUTOCONȘTIINȚĂ</text>
                
                {/* Level 2 - Self-regulation */}
                <polygon points="100,340 300,340 250,280 150,280" fill="url(#pyramidGrad)" stroke="#f43f5e" strokeWidth="2" opacity="0.8" />
                <text x="200" y="315" fontSize="14" fill="#f43f5e" textAnchor="middle" fontWeight="bold">AUTOCONTROL</text>
                
                {/* Level 3 - Motivation */}
                <polygon points="150,280 250,280 200,230 200,230" fill="url(#pyramidGrad)" stroke="#fb7185" strokeWidth="2" opacity="0.7" />
                <text x="200" y="260" fontSize="12" fill="#fb7185" textAnchor="middle" fontWeight="bold">MOTIVAȚIE</text>
                
                {/* Center Heart */}
                <circle cx="200" cy="380" r="25" fill="#ec4899" opacity="0.6" />
                <path d="M 200 370 Q 210 360 215 370 Q 215 380 200 390 Q 185 380 185 370 Q 190 360 200 370" fill="#ff69b4" opacity="0.8" />
                
                {/* Top skills */}
                <circle cx="140" cy="120" r="30" fill="#06b6d4" opacity="0.7" />
                <text x="140" y="130" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">EMPATIE</text>
                
                <circle cx="260" cy="120" r="30" fill="#06b6d4" opacity="0.7" />
                <text x="260" y="130" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">SOCIALĂ</text>
                
                {/* Connection lines */}
                <line x1="170" y1="280" x2="140" y2="150" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
                <line x1="230" y1="280" x2="260" y2="150" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
              </svg>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-pink-200">Piramida Emoțiilor</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Inteligența emoțională nu este despre a nu simți — este despre a simți cu conștiință. Este construită pe cinci coloane fundamentale care se susțin una pe alta.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-rose-300">Cele 5 Piloni</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3"><span className="text-pink-400">→</span><span className="text-gray-300"><span className="font-semibold">Autoconștiință:</span> Recunoașterea propriilor emoții în timp real</span></li>
                  <li className="flex gap-3"><span className="text-pink-400">→</span><span className="text-gray-300"><span className="font-semibold">Autocontrol:</span> Gestionarea emoțiilor intense fără a fi declanșat</span></li>
                  <li className="flex gap-3"><span className="text-pink-400">→</span><span className="text-gray-300"><span className="font-semibold">Motivație:</span> Direcționarea energiei spre scopuri profunde</span></li>
                  <li className="flex gap-3"><span className="text-pink-400">→</span><span className="text-gray-300"><span className="font-semibold">Empatie:</span> Înțelegerea și rezonanța cu emoțiile altora</span></li>
                  <li className="flex gap-3"><span className="text-pink-400">→</span><span className="text-gray-300"><span className="font-semibold">Abilități sociale:</span> Navigarea cu dexteritate prin relații</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 space-y-16 border-t border-pink-500/10">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-pink-300">De ce Contează IE mai Mult decât IQ</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Daniel Goleman a demonstrat că o persoană cu un IQ modest dar cu IE evidențiată reușește mai repede și mai durabil decât geniu cu emoții dezordonat. De ce? Pentru că oamenii cu IE înaltă:
              </p>
              <ul className="space-y-3 pl-6 border-l-2 border-pink-500/40">
                <li className="flex gap-3"><span className="text-pink-400">✓</span><span>Construiesc relații care susțin și multiplică efortul</span></li>
                <li className="flex gap-3"><span className="text-pink-400">✓</span><span>Navighează conflictul fără a-și deteriora legăturile</span></li>
                <li className="flex gap-3"><span className="text-pink-400">✓</span><span>Rămân rezilienți în fața adversității</span></li>
                <li className="flex gap-3"><span className="text-pink-400">✓</span><span>Inspiră și motivează pe alții prin autenticitate</span></li>
                <li className="flex gap-3"><span className="text-pink-400">✓</span><span>Acționează din aliniament interior, nu din frică</span></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-rose-500/60 pl-8 py-6 bg-rose-500/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-rose-300">Capcana Emoțiilor Neadmise</h2>
            <p className="text-gray-300 leading-relaxed">
              Cel mai mare sabotaj emoțional vine din negare. Când refuzi să admiti o emoție — teamă, mânie, rușine — aceasta nu dispare. Se transformă în comportament sabotaj, limite autoimpuse și relații deteriorate.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Admitere nu înseamnă capitulare. Înseamnă recunoaștere curajoasă. De abia după admitere poți da direcție emoției, în loc să te lași pe spate de ea.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-pink-300">Exerciții Zilnice de IE</h2>
            <div className="grid gap-6">
              {[
                { title: '📓 Jurnalul Emoțional', desc: 'Fiecare seară, notează 3 emoții pe care le-ai simțit și de ce au apărut. Recunoașterea zilnică construiește auto-conștiință.' },
                { title: '🧘 Meditația Empatiei', desc: 'Imaginează-ți o persoană cu care ai conflict. Ascultă gândurile ei din perspectiva sa. Compasiune nu e acord — e înțelegere.' },
                { title: '💬 Dialogul Sincer', desc: 'Exprimă observații fără acuzații: "M-am simțit neglijat când..." în loc de "Tu nu..." Responsabilitate vs. culpabilitate.' },
                { title: '🌙 Respira Înainte de Reacție', desc: 'Între stimulus și răspuns, există spațiu. Respirația de 10 secunde dezactivează amigdala și reactivează prefrontalul.' },
              ].map((ex, i) => (
                <div key={i} className="p-6 rounded-lg border border-pink-500/20 bg-pink-500/5 hover:bg-pink-500/10 transition group">
                  <h3 className="text-lg font-bold text-pink-300 mb-2">{ex.title}</h3>
                  <p className="text-gray-400">{ex.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center border-t border-pink-500/10">
          <h2 className="text-4xl font-bold text-white mb-6">Continuă explorarea</h2>
          <p className="text-xl text-gray-400 mb-10">Descoperă alte aspecte ale inteligenței spirituale</p>
          <Link href="/showcase/spiritual-blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
            ← Înapoi la colecție
          </Link>
        </section>
      </div>
    </>
  );
}
