'use client';

import Link from "next/link";

export default function Relationships() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .animate-slide-down { animation: slideDown 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />

      <div className="min-h-screen bg-gradient-to-b from-[#1a0f2e] via-[#2a1a3a] to-[#0f0a1a]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 70%, rgba(132, 204, 22, 0.1) 0%, transparent 50%)`
      }}>
        {/* Header */}
        <section className="sticky top-0 z-50 backdrop-blur-sm border-b border-emerald-500/10 bg-[#0f0a1a]/80">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <Link href="/showcase/spiritual-blog" className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition">
              ← Înapoi la Spiritual Intelligence
            </Link>
            <div className="text-xs font-mono text-emerald-400/60">ARTICOL DEDICAT</div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-green-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-emerald-400/70 animate-slide-down">Relații & Conexiuni</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-8 animate-slide-down" style={{animationDelay: '0.1s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300">
                Inteligența Relațiilor
              </span>
            </h1>
            <p className="text-2xl text-emerald-200 leading-relaxed max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Prietenia, iubirea și conexiunea. Cum construim relații care ne ridică mutual la nivel superior.
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <span className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-semibold">13 min read</span>
              <span className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-semibold">🤝 Conexiuni</span>
              <span className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-semibold">💚 Profunzime</span>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 border-t border-emerald-500/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <svg viewBox="0 0 400 300" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.4))' }}>
                <defs>
                  <linearGradient id="relGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="relGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#05b6d4" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="relGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Three circles - Venn diagram */}
                <circle cx="120" cy="150" r="60" fill="url(#relGrad1)" stroke="#22c55e" strokeWidth="2" opacity="0.8" />
                <circle cx="280" cy="150" r="60" fill="url(#relGrad2)" stroke="#06b6d4" strokeWidth="2" opacity="0.8" />
                <circle cx="200" cy="80" r="60" fill="url(#relGrad3)" stroke="#ec4899" strokeWidth="2" opacity="0.8" />
                
                {/* Labels on circles */}
                <text x="85" y="155" fontSize="14" fill="#22c55e" textAnchor="middle" fontWeight="bold">PRIETENIE</text>
                <text x="315" y="155" fontSize="14" fill="#06b6d4" textAnchor="middle" fontWeight="bold">ÎNCREDERE</text>
                <text x="200" y="50" fontSize="14" fill="#ec4899" textAnchor="middle" fontWeight="bold">INTIMITATE</text>
                
                {/* Intersection zones labels */}
                <text x="160" y="190" fontSize="11" fill="#10b981" textAnchor="middle" fontWeight="bold">PASIUNE</text>
                <text x="240" y="190" fontSize="11" fill="#06b6d4" textAnchor="middle" fontWeight="bold">VALIDARE</text>
                <text x="200" y="125" fontSize="11" fill="#a855f7" textAnchor="middle" fontWeight="bold">DRAGOSTE</text>
                
                {/* Center - full overlap */}
                <circle cx="200" cy="140" r="35" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="5,3" opacity="0.9" />
                <text x="200" y="150" fontSize="13" fill="#fbbf24" textAnchor="middle" fontWeight="bold">ALIANȚĂ</text>
              </svg>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-emerald-200">Geometria Conexiunilor</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Relațiile îmbunătățite nu sunt doar "dragoste". Sunt intersecții complexe de prietenie, încredere și intimitate. Când toate trei puncte se suprapun, apare alianța — conexiunea care durează.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-300">Cele 3 Dimensiuni</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3"><span className="text-emerald-400">→</span><span className="text-gray-300"><span className="font-semibold">Prietenie:</span> Plăcere, humor, ușurință</span></li>
                  <li className="flex gap-3"><span className="text-cyan-400">→</span><span className="text-gray-300"><span className="font-semibold">Încredere:</span> Vulnerabilitate, sprijin, stabilitate</span></li>
                  <li className="flex gap-3"><span className="text-pink-400">→</span><span className="text-gray-300"><span className="font-semibold">Intimitate:</span> Deschizie, pasiune, sensibilitate</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 space-y-16 border-t border-emerald-500/10">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-emerald-300">Relațiile care Cresc</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Relațiile sunt oglinzi. În oglinzi ne vedem pe noi înșine. Dacă relația ta te-ntinde pe tine doar la spargere, e un semn pe care nu-l poti ignora. Dacă relația te-ntinde și te durează ușor — e o creștere.
              </p>
              <p>
                Alesele relații sunt cu oameni care:
              </p>
              <ul className="space-y-3 pl-6 border-l-2 border-emerald-500/40">
                <li className="flex gap-3"><span className="text-emerald-400">✓</span><span>Te-ndeamnă să fii mai tu însuți, nu mai puțin</span></li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span><span>Acceptă ceea ce nu-și place la tine și rămân</span></li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span><span>Te ajută să vezi mai clar, nu mai confuz</span></li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span><span>Vorbesc cu sinceritate și asculta pe bune</span></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-cyan-500/60 pl-8 py-6 bg-cyan-500/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-cyan-300">Singurătatea vs. Solitudine</h2>
            <p className="text-gray-300 leading-relaxed">
              Singurătatea e stare pasageră. Solitudinea e alegere. Multe persoane intense și creative au nevoie de solitudine pentru a se reîncărca — asta nu-i disfuncție, e design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Dar singurătatea cronică — senzația de deconexiune chiar lângă oameni — asta e semn că relațiile tale nu sunt aliniate cu adevărul tău.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-emerald-300">Cum să Construiești Relație Profundă</h2>
            <div className="grid gap-6">
              {[
                { stage: 'AUTENTICITATE', desc: 'Porți-ți masca jos primera. La cine îi pasă ce crede lumea? Doar celor care te acceptă pe tine complet.' },
                { stage: 'VULNERABILITATE', desc: 'Zice "îmi este frică", "mă doare", "nu știu". Weaknessul o construiește relații — strengthul le întreține.' },
                { stage: 'CURIOZITATE', desc: 'Ascultă fără a plănui răspunsul. Pune întrebări care-ți ignoră răspunsul. Conectorii cu adevar.' },
                { stage: 'CONSITENȚĂ', desc: 'Prezență recurentă. Relațiile nu se construiesc în intensitate — în frecvență și constanță.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition group">
                  <h3 className="text-lg font-bold text-emerald-300 mb-2">{item.stage}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center border-t border-emerald-500/10">
          <h2 className="text-4xl font-bold text-white mb-6">Descoperă mai mult</h2>
          <p className="text-xl text-gray-400 mb-10">Alte dimensiuni ale inteligenței spirituale</p>
          <Link href="/showcase/spiritual-blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
            ← Înapoi la colecție
          </Link>
        </section>
      </div>
    </>
  );
}
