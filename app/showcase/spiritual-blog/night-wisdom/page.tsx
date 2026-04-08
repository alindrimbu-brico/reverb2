'use client';

import Link from "next/link";

export default function NightWisdom() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 10px rgba(251, 191, 36, 0.3); } 50% { box-shadow: 0 0 25px rgba(251, 191, 36, 0.6); } }
        .animate-slide-down { animation: slideDown 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
      `}} />

      <div className="min-h-screen bg-gradient-to-b from-[#0a0005] via-[#15050a] to-[#05000a]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)`
      }}>
        {/* Header */}
        <section className="sticky top-0 z-50 backdrop-blur-sm border-b border-yellow-600/10 bg-[#05000a]/80">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <Link href="/showcase/spiritual-blog" className="flex items-center gap-2 text-yellow-600 hover:text-yellow-500 transition">
              ← Înapoi la Spiritual Intelligence
            </Link>
            <div className="text-xs font-mono text-yellow-700/60">ARTICOL DEDICAT</div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-700/40 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-800/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-yellow-600/70 animate-slide-down">Tradiții Spirituale</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-8 animate-slide-down" style={{animationDelay: '0.1s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-amber-600">
                Înțelepciunea Nocturnă
              </span>
            </h1>
            <p className="text-2xl text-yellow-200 leading-relaxed max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Ce au descoperit miile de ani tradiții despre noaptă, viziuni și conexiunea cu Sacrul.
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <span className="px-4 py-2 rounded-full bg-yellow-600/20 border border-yellow-600/40 text-yellow-400 text-sm font-semibold">17 min read</span>
              <span className="px-4 py-2 rounded-full bg-yellow-600/20 border border-yellow-600/40 text-yellow-400 text-sm font-semibold">🕯️ Spiritual</span>
              <span className="px-4 py-2 rounded-full bg-yellow-600/20 border border-yellow-600/40 text-yellow-400 text-sm font-semibold">📖 Tradiție</span>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 border-t border-yellow-600/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <svg viewBox="0 0 400 450" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.4))' }}>
                <defs>
                  <linearGradient id="nightWisdomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#d97706" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#78350f" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                
                {/* Central candle */}
                <rect x="185" y="200" width="30" height="80" fill="#f59e0b" opacity="0.8" rx="3" />
                <polygon points="200,190 185,200 215,200" fill="#fbbf24" opacity="0.9" />
                
                {/* Flame */}
                <path d="M 200 185 Q 195 170 200 155 Q 205 170 200 185" fill="#fbbf24" opacity="0.9" />
                <path d="M 200 180 Q 197 168 200 158 Q 203 168 200 180" fill="#fff" opacity="0.6" />
                
                {/* Books/Wisdom layers */}
                <rect x="100" y="280" width="200" height="20" fill="url(#nightWisdomGrad)" stroke="#d97706" strokeWidth="1.5" rx="2" />
                <text x="200" y="295" fontSize="10" fill="#fbbf24" textAnchor="middle" fontWeight="bold">TORAH • QUR'AN • VEDAS • BIBLIE</text>
                
                {/* Prayer symbols around */}
                {/* Star of David */}
                <g opacity="0.6">
                  <polygon points="120,100 130,120 110,120" fill="#fbbf24" />
                  <polygon points="120,100 110,80 130,80" fill="#fbbf24" />
                </g>
                
                {/* Crescent Moon */}
                <circle cx="280" cy="100" r="15" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
                <circle cx="288" cy="100" r="15" fill="#05000a" opacity="0.8" />
                
                {/* Cross */}
                <g opacity="0.6">
                  <line x1="200" y1="330" x2="200" y2="370" stroke="#fbbf24" strokeWidth="2" />
                  <line x1="180" y1="345" x2="220" y2="345" stroke="#fbbf24" strokeWidth="2" />
                </g>
                
                {/* Om symbol */}
                <circle cx="120" cy="350" r="12" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
                
                {/* Connection lines to wisdom center */}
                <line x1="120" y1="110" x2="190" y2="160" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
                <line x1="280" y1="110" x2="210" y2="160" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-yellow-100">Noaptea Sagacă</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  În fiecare religie majoră, noaptea era momentul de conexiune directă cu Sacrul. Nu din întâmplare — din înțelegere profundă a faptului că noaptea calmă dezlănțuie deschidere spirituală.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-orange-300">Tradiții Universale</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span className="text-yellow-600">✡</span><span className="text-gray-300"><span className="font-semibold">Iudaism:</span> Tehilim (psalmi) recitați în noapte profundă pentru conexiune cu Dumnezeu</span></li>
                  <li className="flex gap-3"><span className="text-yellow-600">☪</span><span className="text-gray-300"><span className="font-semibold">Islam:</span> Tahajjud (rugăciune nocturnă) considerată cea mai sacră</span></li>
                  <li className="flex gap-3"><span className="text-yellow-600">✝</span><span className="text-gray-300"><span className="font-semibold">Creștinism:</span> Vigilii nocturne și contemplație la lumina lumanărilor</span></li>
                  <li className="flex gap-3"><span className="text-yellow-600">☬</span><span className="text-gray-300"><span className="font-semibold">Hinduism:</span> Brahma Muhurta (2-6 AM) — ora când Brahma creează</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 space-y-16 border-t border-yellow-600/10">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-400">Rugăciunea Nocturnă: Dincolo de Religie</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Indiferent de credință, rugăciunea nocturnă a fost universală. Nu pentru că Divinul "dormea" ziua — pentru că mintea omenească în noapte profundă accesează un strat mai adânc de conștiință.
              </p>
              <p>
                <span className="font-bold text-yellow-500">Muhammad</span> s-a retras în Grota Hira în nopți solemne. <span className="font-bold text-yellow-500">Moșe</span> a primit Tabelele pe Muntele Sinai după o noapte de meditație. <span className="font-bold text-yellow-500">Buddha</span> a atins iluminarea după nopți în meditație profundă.
              </p>
              <p>
                Semnele nu-s aleatoare. O noapte liniștea, cu mintea curată de zgomotul zilei, deschide poarta la inteligență transcendentă.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-amber-600/60 pl-8 py-6 bg-amber-600/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-amber-400">Astrologie și Momentul Sacru</h2>
            <p className="text-gray-300 leading-relaxed">
              Astrologia nu-i doar horoscop. E știință antică a momentelor potente. Anumite nopți — Luna Plină, eclipsele, aliniamentele planetare — au energie amplificată. Tradiții cunosc asta.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nopțile cu Luna Plină, în particular, au fost mereu considerate "ușile deschise" — unde intenția ta se-nmulțește. Nu magie — biologie. Luna afectează maree, emoții, ciclourile noastre. Știința confirmă.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-400">Practicile Nocturne Universale</h2>
            <div className="grid gap-6">
              {[
                { practice: '🕯️ ILUMINARE', detail: 'O lumânare sau lampă cu ulei — simbol al luminii spirituale în întuneric. Focusul vizual ușurează meditația.' },
                { practice: '📿 REPETARE', detail: 'Mantre, rosarii, psalmi — repetarea ritmică ancorează mintea și deschide ușa intuiției.' },
                { practice: '🙏 POSTURA', detail: 'Genunchi, prostrare, corect — corpul fizic afectează starea spirituală. Fizicitatea rituală e importantă.' },
                { practice: '⏱️ TIMING', detail: 'Pentru musulmani: după miezul nopții. Pentru iudei: după miezul nopții. Tradiții convergesc pe 2-4 AM — vârful energetic nocturn.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg border border-yellow-600/20 bg-yellow-600/5 hover:bg-yellow-600/10 transition group">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">{item.practice}</h3>
                  <p className="text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-400">Invitația către Tine</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed bg-yellow-600/5 p-8 rounded-lg border border-yellow-600/20">
              <p>
                O noapte, la 2 AM, stinge luminile. Ține o lumânare. Adu în minte o întrebare profundă — pe care ți-o pui cu sinceritate. Nu gândesc. Pur ascultă.
              </p>
              <p>
                Ceea ce-ți vine — fie imagini, cuvinte, senzații — aceasta e răspunsul tău din adâncul subconștientului. Tradiții o numesc "vocea Divinului". Știința o numește "Default Mode Network". Numele nu contează.
              </p>
              <p className="font-bold text-yellow-300">
                Important e că răspunsul vine — întotdeauna vine. În noaptea profundă, când ego-ul doarme și sufletul se-nclintă.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center border-t border-yellow-600/10">
          <h2 className="text-4xl font-bold text-white mb-6">Completează călătoria spirituală</h2>
          <p className="text-xl text-gray-400 mb-10">Integrează înțelepciunea tradițiilor în viața ta zilnică</p>
          <Link href="/showcase/spiritual-blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-700 to-amber-700 hover:from-yellow-800 hover:to-amber-800 text-white font-semibold rounded-lg transition transform hover:scale-105">
            ← Înapoi la colecție
          </Link>
        </section>
      </div>
    </>
  );
}
