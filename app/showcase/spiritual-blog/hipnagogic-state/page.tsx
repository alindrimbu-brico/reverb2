'use client';

import Link from "next/link";

export default function HipnagogicState() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-border { 0%, 100% { border-color: rgba(147, 51, 234, 0.3); } 50% { border-color: rgba(147, 51, 234, 0.8); } }
        .animate-slide-down { animation: slideDown 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-border { animation: pulse-border 3s ease-in-out infinite; }
      `}} />

      <div className="min-h-screen bg-gradient-to-b from-[#0f0a1a] via-[#1a0f2e] to-[#0f0a1a]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
      }}>
        {/* Header */}
        <section className="sticky top-0 z-50 backdrop-blur-sm border-b border-purple-500/10 bg-[#0f0a1a]/80">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <Link href="/showcase/spiritual-blog" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition">
              ← Înapoi la Spiritual Intelligence
            </Link>
            <div className="text-xs font-mono text-purple-400/60">ARTICOL DEDICAT</div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-purple-400/70 animate-slide-down">Neurobiologie Spirituală</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-8 animate-slide-down" style={{animationDelay: '0.1s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300">
                Starea Hipnagogică
              </span>
            </h1>
            <p className="text-2xl text-purple-200 leading-relaxed max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Punctul dulce al creativității. Tranziția magică dintre veghe și somn unde se nasc ideile geniurii.
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm font-semibold">12 min read</span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm font-semibold">🧠 Neurobiologie</span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm font-semibold">🌙 Creativitate</span>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 border-t border-purple-500/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <svg viewBox="0 0 400 300" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.4))' }}>
                <defs>
                  <linearGradient id="vegheGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="somnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Brain center */}
                <circle cx="200" cy="150" r="70" fill="url(#vegheGrad)" stroke="#9333ea" strokeWidth="3" opacity="0.8" />
                
                {/* Awake side - Sun */}
                <circle cx="80" cy="80" r="35" fill="#fbbf24" opacity="0.8" />
                <line x1="80" y1="35" x2="80" y2="10" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                <line x1="80" y1="270" x2="80" y2="295" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="80" x2="10" y2="80" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                <line x1="125" y1="80" x2="150" y2="80" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                
                {/* Sleep side - Moon */}
                <circle cx="320" cy="80" r="30" fill="#a855f7" opacity="0.9" />
                <circle cx="330" cy="70" r="30" fill="#0f0a1a" />
                <circle cx="310" cy="85" r="3" fill="#06b6d4" />
                <circle cx="325" cy="75" r="2" fill="#06b6d4" />
                
                {/* Transition stars */}
                <circle cx="200" cy="100" r="4" fill="#06b6d4" opacity="0.9" />
                <circle cx="220" cy="90" r="3" fill="#06b6d4" opacity="0.7" />
                <circle cx="180" cy="85" r="2.5" fill="#06b6d4" opacity="0.6" />
                <circle cx="200" cy="70" r="2" fill="#06b6d4" opacity="0.5" />
                
                {/* Labels */}
                <text x="80" y="260" fontSize="18" fill="#fbbf24" textAnchor="middle" fontWeight="bold">VEGHE</text>
                <text x="320" y="260" fontSize="18" fill="#a855f7" textAnchor="middle" fontWeight="bold">SOMN</text>
                <text x="200" y="45" fontSize="16" fill="#06b6d4" textAnchor="middle" fontWeight="bold" fontStyle="italic">HIPNAGOGIA ✨</text>
              </svg>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-purple-200">Pragul Magic</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Starea hipnagogică este pragul conștienței între veghe și somn. Aceasta nu este pur somn, nici pur veghe — este o stare liminală unde controlul rațional se relaxează și creierul intră într-o modalitate de explorare liberă.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-indigo-300">De ce e importantă?</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3"><span className="text-purple-400">→</span><span className="text-gray-300">Accesul la probleme rezolvate în subconștient</span></li>
                  <li className="flex gap-3"><span className="text-purple-400">→</span><span className="text-gray-300">Conexiuni neobișnuite între concepte</span></li>
                  <li className="flex gap-3"><span className="text-purple-400">→</span><span className="text-gray-300">Inovație și creativitate exponențială</span></li>
                  <li className="flex gap-3"><span className="text-purple-400">→</span><span className="text-gray-300">Incubație de solucții geniale</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 space-y-16 border-t border-purple-500/10">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-purple-300">Geniurile Nocturnale</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-bold text-purple-400">Thomas Edison</span> a construit o cameră dedicată pentru a captura starea hipnagogică. Ținea o bilă de oțel deasupra unei tigăi metalice. Când adormea și starea hipnagogică se adâncea, mâinile se relaxau și bila cădea în tigaie, trezindu-l. În acel moment, avea acces la ideile care pluteau în zona liminală.
              </p>
              <p>
                <span className="font-bold text-purple-400">Nikola Tesla</span> practica o versiune similară, intrând deliberat în stări de contemplație care bordau somnul. Multe dintre inovațiile sale au venit din aceste momente — vizualizări complete ale dispozitivelor sale în starea hipnagogică.
              </p>
              <p>
                <span className="font-bold text-purple-400">Salvador Dalí</span> a numit această metodă "somnul cu cheia." Se culca cu o cheie în mână, ținând-o deasupra unei farfurii. La cădere, sunetul și impactul o trezeau — iar el captura orice viziuni hipnagogice le avea în starea aceea.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-indigo-500/60 pl-8 py-6 bg-indigo-500/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-indigo-300">Autosimbolismul</h2>
            <p className="text-gray-300 leading-relaxed">
              După cum a descris <span className="font-bold">Herbert Silberer</span>, în starea hipnagogică mintea practică "autosimbolismul" — transformarea gândurilor abstracte în imagini concrete și metaforice.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Exemplul clasic: chimistul <span className="font-bold">August Kekulé</span> a vizualizat structura inelară a benzenului sub forma unui șarpe ce își mușcă coada. Această viziune hipnagogică a revoluționat chimia organică.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-purple-300">Cum să Captezi Hipnagogia</h2>
            <div className="grid gap-6">
              {[
                { num: '1', title: 'Recunoaștere', desc: 'Observă semnele: imaginile fragmentare, senzația de cădere, zvonete distorsionate.' },
                { num: '2', title: 'Ancorare', desc: 'Menține o problemă în minte pe care dori să o rezolvi înainte de a adormit.' },
                { num: '3', title: 'Non-interferență', desc: 'Lasă creierul să vagabondeze natural — nu forța. Captarea vine din relaxare.' },
                { num: '4', title: 'Notare', desc: 'Ține un jurnal lângă pat. Ideile hipnagogice se evaporă rapid după trezire.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-lg border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition group">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600/40 group-hover:bg-purple-600/60 transition flex-shrink-0">
                    <span className="text-xl font-bold text-purple-300">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-300 mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center border-t border-purple-500/10">
          <h2 className="text-4xl font-bold text-white mb-6">Dorești să explorezi mai departe?</h2>
          <p className="text-xl text-gray-400 mb-10">Alte articole din seria Spiritual Intelligence</p>
          <Link href="/showcase/spiritual-blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
            ← Înapoi la colecție
          </Link>
        </section>
      </div>
    </>
  );
}
