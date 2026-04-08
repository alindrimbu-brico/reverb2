'use client';

import Link from "next/link";

export default function NightGenius() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes rotate360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-slide-down { animation: slideDown 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-rotate { animation: rotate360 30s linear infinite; }
      `}} />

      <div className="min-h-screen bg-gradient-to-b from-[#0a0009] via-[#1a0a2e] to-[#05000a]" style={{
        backgroundImage: `radial-gradient(circle at 40% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
      }}>
        {/* Header */}
        <section className="sticky top-0 z-50 backdrop-blur-sm border-b border-indigo-500/10 bg-[#0a0009]/80">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <Link href="/showcase/spiritual-blog" className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition">
              ← Înapoi la Spiritual Intelligence
            </Link>
            <div className="text-xs font-mono text-indigo-400/60">ARTICOL DEDICAT</div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-700 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-700 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-indigo-400/70 animate-slide-down">Cronobiologie & Ritm Circadian</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-8 animate-slide-down" style={{animationDelay: '0.1s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300">
                Geniul Nocturn
              </span>
            </h1>
            <p className="text-2xl text-indigo-200 leading-relaxed max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              O noapte lungă pentru cei aleși. Cum unii oameni se-nfloare în întuneric când alții sunt legați de lumină.
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <span className="px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-semibold">16 min read</span>
              <span className="px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-semibold">🦉 Cronobiologie</span>
              <span className="px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-semibold">⏰ Biologie</span>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 border-t border-indigo-500/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <svg viewBox="0 0 400 400" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))' }}>
                <defs>
                  <linearGradient id="nightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                
                {/* Outer circle - 24 hours */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
                
                {/* Day arc (sun) */}
                <path d="M 200 20 A 180 180 0 0 1 380 200" fill="none" stroke="#fbbf24" strokeWidth="4" opacity="0.6" />
                
                {/* Night arc (moon/active) */}
                <path d="M 380 200 A 180 180 0 0 1 200 20" fill="none" stroke="#c084fc" strokeWidth="8" opacity="0.8" />
                
                {/* Center circle */}
                <circle cx="200" cy="200" r="40" fill="#06b6d4" opacity="0.4" stroke="#06b6d4" strokeWidth="2" />
                
                {/* Sun symbol */}
                <circle cx="200" cy="40" r="15" fill="#fbbf24" opacity="0.8" />
                <line x1="200" y1="10" x2="200" y2="0" stroke="#fbbf24" strokeWidth="2" />
                <line x1="230" y1="40" x2="240" y2="30" stroke="#fbbf24" strokeWidth="2" />
                
                {/* Moon symbol */}
                <circle cx="200" cy="360" r="12" fill="#a855f7" opacity="0.9" />
                <circle cx="207" cy="355" r="12" fill="#0a0009" />
                
                {/* Hour markers - night/creative hours */}
                <circle cx="200" cy="60" r="2" fill="#fbbf24" opacity="0.6" />
                <circle cx="200" cy="340" r="3.5" fill="#a855f7" opacity="0.9" />
                
                {/* Key times */}
                <text x="200" y="30" fontSize="12" fill="#fbbf24" textAnchor="middle" fontWeight="bold">06:00</text>
                <text x="200" y="390" fontSize="12" fill="#a855f7" textAnchor="middle" fontWeight="bold">22:00 - 04:00</text>
                
                {/* Peak creativity indicator */}
                <g opacity="0.7">
                  <circle cx="270" cy="320" r="4" fill="#06b6d4" />
                  <text x="285" y="325" fontSize="11" fill="#06b6d4">PEAK</text>
                </g>
              </svg>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-indigo-200">Ritmul Tău Biologic</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nu toți oamenii sunt programați la fel. Unii sunt lărci (dimineță cu vitalitate maximă), alții sunt bufnițe (noapte cu eficiență optimă). Aceasta nu este lene — este biologie.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-300">Cronotipi Fundamentali</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span className="text-indigo-400">◆</span><span className="text-gray-300"><span className="font-semibold">Lari (Morning types):</span> Maxim 6-10 AM, cu scădere după 14:00</span></li>
                  <li className="flex gap-3"><span className="text-blue-400">◆</span><span className="text-gray-300"><span className="font-semibold">Bufnițe (Evening types):</span> Scăzuți dimineață, pici după 20:00</span></li>
                  <li className="flex gap-3"><span className="text-cyan-400">◆</span><span className="text-gray-300"><span className="font-semibold">Intermediari:</span> Adaptabili, flexibili, dar mai puțin specialized</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 space-y-16 border-t border-indigo-500/10">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-indigo-300">Știința din Spatele Bufnițelor</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Genetica determină croniotipul tău. Sunt gene (PER2, CLOCK) care reglează perioada ritmului circadian. Unii oameni au o perioadă "naturală" mai lungă (~24.5h), ceea ce-i face să se concentreze mai bine târziu în noapte.
              </p>
              <p>
                <span className="font-bold text-indigo-400">Melatonina:</span> Gia bufnițeă, vârful de melatonă ajunge la 2-3 AM și rămâne ridicat până la 8 AM. Gia larcii, coboară după 6:30 AM. Aceasta explică de ce bufnița care se trezește la 6 AM cu forță experimentează o durere fiziologică reală.
              </p>
              <p>
                <span className="font-bold text-indigo-400">Dopamina și vigilență:</span> Bufnițele au vârfuri de dopamină mai mari la 22-24 PM decât la 6-8 AM. Asta nu-i lene — e focalizare biologică.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-cyan-500/60 pl-8 py-6 bg-cyan-500/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-cyan-300">De ce Societatea Iubitorilor de Dimineață Sabotează Bufnițele</h2>
            <p className="text-gray-300 leading-relaxed">
              Industrializarea a fixat orarul 9-5 pentru toate. Dar studenți bufnițe care sunt forțate să se trezească la 6 AM demonstrează consistență mai mică, performanță academică mai slabă și sănătate mentală mai deteriorată — nu pentru că-s mai puțin capabili, ci pentru că trăiesc împotriva fiziologiei lor.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Permiterea flexibilității cronobiologice nu e decadență — e optimizare științifică a performanței și bunăstării.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-indigo-300">Utilizează-ți Ritmul pentru Geniu</h2>
            <div className="grid gap-6">
              {[
                { phase: 'EARLY EVENING (18-21)', activity: 'Lucrul creativ ușor', detail: 'Energie în creștere, prefect pt desen, scritură, design — fără presiune maximă' },
                { phase: 'LATE NIGHT (21-00)', activity: 'PIKU MÁXIMO', detail: 'Aici apare geniul — probleme complexe, inovație, conexiuni profunde' },
                { phase: 'DEEP NIGHT (00-03)', activity: 'Lucru flow profund', detail: 'Concentrație totală, aproape somnambul în lucru, ideile curg natural' },
                { phase: 'DAWN (03-06)', activity: 'Consolidare', detail: 'Energia scade ușor, perfect pt corecturi, finalizări, reflexie' },
              ].map((slot, i) => (
                <div key={i} className="p-6 rounded-lg border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 transition group">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-indigo-300">{slot.phase}</h3>
                    <span className="text-sm font-semibold text-cyan-400">{slot.activity}</span>
                  </div>
                  <p className="text-gray-400">{slot.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-indigo-300">Practica: Aliniament cu Cronipul Tău</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-indigo-300">1. Observă-ți energiile pentru 2 săptămâni</span> — fără forță, lasă-ți corpul natural. Notează: când ești alert? când obosit? când doar zumzi?
              </p>
              <p>
                <span className="font-semibold text-indigo-300">2. Identifică-ți VÂRFUL creative</span> — ora de aur când genii tău vibra. Aceasta nu-i negociabilă — e când faci lucrul tău cel mai greu.
              </p>
              <p>
                <span className="font-semibold text-indigo-300">3. Protejează acest timp</span> — fă mesuri radicale. Nimic nu poate fi programat pe el. Telefon avion.
              </p>
              <p>
                <span className="font-semibold text-indigo-300">4. Odihnă după pice</span> — o 20-min siestă, 15-min de plimbare, ceva. Restabilul celul.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center border-t border-indigo-500/10">
          <h2 className="text-4xl font-bold text-white mb-6">Descoperă alți piloni ai inteligenței nocturnale</h2>
          <p className="text-xl text-gray-400 mb-10">Alte perspective asupra geniuluiCe se-nfloare în noapte</p>
          <Link href="/showcase/spiritual-blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
            ← Înapoi la colecție
          </Link>
        </section>
      </div>
    </>
  );
}
