'use client';

import Link from "next/link";

export default function HappinessScience() {
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

      <div className="min-h-screen bg-gradient-to-b from-[#1a0a0a] via-[#2a1a1a] to-[#0f0a0a]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`
      }}>
        {/* Header */}
        <section className="sticky top-0 z-50 backdrop-blur-sm border-b border-orange-500/10 bg-[#0f0a0a]/80">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <Link href="/showcase/spiritual-blog" className="flex items-center gap-2 text-orange-300 hover:text-orange-200 transition">
              ← Înapoi la Spiritual Intelligence
            </Link>
            <div className="text-xs font-mono text-orange-400/60">ARTICOL DEDICAT</div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-orange-400/70 animate-slide-down">Psihologie Pozitivă</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-8 animate-slide-down" style={{animationDelay: '0.1s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300">
                Știința Fericirii
              </span>
            </h1>
            <p className="text-2xl text-orange-200 leading-relaxed max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Fericirea nu este destinație — este skill care se poate antrena. Cum construim o viață cu sens și plenitudine.
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-semibold">15 min read</span>
              <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-semibold">🌈 Fericire</span>
              <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-semibold">💫 Sens</span>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 border-t border-orange-500/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <svg viewBox="0 0 400 400" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(251, 146, 60, 0.4))' }}>
                <defs>
                  <linearGradient id="happyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Pyramid - Hierarchy of wellbeing */}
                {/* Base - Plaisir */}
                <polygon points="50,340 350,340 300,280 100,280" fill="#fb923c" opacity="0.6" stroke="#f97316" strokeWidth="2" />
                <text x="200" y="315" fontSize="14" fill="#fff" textAnchor="middle" fontWeight="bold">PLĂCERE</text>
                
                {/* Level 2 - Engagement */}
                <polygon points="100,280 300,280 250,240 150,240" fill="#fb923c" opacity="0.7" stroke="#f97316" strokeWidth="2" />
                <text x="200" y="265" fontSize="13" fill="#fff" textAnchor="middle" fontWeight="bold">ANGAJARE</text>
                
                {/* Level 3 - Relationship */}
                <polygon points="150,240 250,240 225,205 175,205" fill="#fb923c" opacity="0.8" stroke="#f97316" strokeWidth="2" />
                <text x="200" y="225" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">RELAȚII</text>
                
                {/* Level 4 - Accomplishment */}
                <polygon points="175,205 225,205 200,170 200,170" fill="#fbbf24" opacity="0.9" stroke="#fbbf24" strokeWidth="2" />
                <text x="200" y="190" fontSize="11" fill="#000" textAnchor="middle" fontWeight="bold">REALIZARE</text>
                
                {/* Top - Meaning */}
                <circle cx="200" cy="140" r="20" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2.5" />
                <text x="200" y="148" fontSize="11" fill="#000" textAnchor="middle" fontWeight="bold">SENS</text>
                
                {/* Arrows showing connection */}
                <path d="M 200 120 L 200 100" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.5" />
                
                {/* Side labels */}
                <text x="40" y="185" fontSize="10" fill="#fb923c" fontStyle="italic">EFEMERÀ</text>
                <text x="350" y="185" fontSize="10" fill="#fbbf24" fontStyle="italic">DURABILĂ</text>
              </svg>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-orange-200">Piramida Fericirii Adevărate</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Psihologul Martin Seligman a descoperit că fericirea are cinci niveluri. Majoritatea oamenilor se-nclintă pe primele două — plăcere și distracție — și cred că aceasta e tot.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-amber-300">Cinci Pietre de Temelie</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3"><span className="text-orange-400">→</span><span className="text-gray-300"><span className="font-semibold">Plăcere:</span> Senzații bune (mâncare, sex, confort)</span></li>
                  <li className="flex gap-3"><span className="text-orange-400">→</span><span className="text-gray-300"><span className="font-semibold">Angajare:</span> "Flow" — pierderea timpului în lucru semnificativ</span></li>
                  <li className="flex gap-3"><span className="text-orange-400">→</span><span className="text-gray-300"><span className="font-semibold">Relații:</span> Comunitate, dragoste, ca apăsător</span></li>
                  <li className="flex gap-3"><span className="text-amber-400">→</span><span className="text-gray-300"><span className="font-semibold">Realizare:</span> Obiective, stăpânire, progres</span></li>
                  <li className="flex gap-3"><span className="text-amber-400">→</span><span className="text-gray-300"><span className="font-semibold">Sens:</span> Contribuție la ceva mai mare decât tine</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 space-y-16 border-t border-orange-500/10">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-orange-300">De ce Plăcerea Singură e Trist</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Studiile au arătat că oameni care se-ncentrează doar pe plăcere (distracție, droguri, mâncare, sex) dezvoltă o toleranță progresivă. Au nevoie de din ce în ce mai mult pentru a simți același lucru. Și apoi — depresie cronică.
              </p>
              <p>
                De ce? Pentru că oamenii nu sunt animale. Noi avem nevoie de sens. Noi avem nevoie de creștere. Noi avem nevoie să știm că ne trăiesc viața pe ceva care contează.
              </p>
              <p>
                <span className="font-bold text-orange-400">Fericirea adevărată</span> vine din muncă grea pe ceva care e mai mare decât ego-ul tău.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-amber-500/60 pl-8 py-6 bg-amber-500/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-amber-300">Ikigai: Arta de a găsi Sensul</h2>
            <p className="text-gray-300 leading-relaxed">
              Conceptul japonez de "ikigai" este intersecția a patru elemente: ceea ce iubești, ceea ce ești bun, ceea ce lumea are nevoie, și ceea ce poți fi plătit. Găsirea aceluia — aceasta e fericirea adevărată.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nu trebuie să fie perfectă. Trebuie doar să existe trecere între ele. Un sens de direcție care te rezonează.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-orange-300">Antrenamentul Fericirii Zilnice</h2>
            <div className="grid gap-6">
              {[
                { practice: 'GRATITUDINE', detail: 'Fiecare dimineață, trei lucruri pentru care ești recunoscător — măcar un mic lucru. Retrainează-ți creierul spre recunoaștere.' },
                { practice: 'MUNCĂ INTENȚIONATĂ', detail: 'Petrecea-ți o oră zilnic pe ceva cu adevărat important. Lucrul care te face în flow. Asta e oxigenul fericirii.' },
                { practice: 'CONEXIUNE REALĂ', detail: 'O conversație zilnică cu cineva fără telefon. O privire în ochi. O ascultare pe bune. Intimitatea construiește fericire.' },
                { practice: 'CONTRIBUȚIE MICĂ', detail: 'Ajuta pe cineva zilnic — măcar o mică gest. Sensul aduc fericire dacă cunosc că asta meritaba.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 transition group">
                  <h3 className="text-lg font-bold text-orange-300 mb-2">{item.practice}</h3>
                  <p className="text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center border-t border-orange-500/10">
          <h2 className="text-4xl font-bold text-white mb-6">Continuă descoperirea</h2>
          <p className="text-xl text-gray-400 mb-10">Alte perspective asupra vieții cu sens</p>
          <Link href="/showcase/spiritual-blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
            ← Înapoi la colecție
          </Link>
        </section>
      </div>
    </>
  );
}
