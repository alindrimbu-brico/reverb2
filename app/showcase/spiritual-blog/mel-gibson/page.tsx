'use client';

import React from 'react';

export default function MelGibsonPage() {
  const containerItems = [
    { delay: 0 },
    { delay: 0.1 },
    { delay: 0.2 },
    { delay: 0.3 },
    { delay: 0.4 },
    { delay: 0.5 },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-8 py-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-black to-[#FFD700] opacity-20"></div>
        <div 
          className="absolute inset-0 rounded-full bg-radial from-[#DC143C] to-transparent opacity-10"
          style={{
            width: '800px',
            height: '800px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 
            className="text-7xl md:text-8xl font-bold mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #DC143C 50%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer-gold 4s infinite',
            }}
          >
            Sacred Cinema
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 text-gray-300 leading-relaxed font-light">
            Unde <span className="text-[#FFD700] font-semibold">Iisus Hristos</span> se revarsă prin pelicula care transmuta suferință în înțelepciune. 
            Unde filmul devine <span className="text-[#DC143C] font-semibold">Pasiune Creatoare</span> — veșnica transformare a inimii umane.
          </p>

          <p className="text-xl text-gray-400 italic">
            "Arta nu este decât religia exprimată prin imagini." — Mel Gibson
          </p>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-[#FFD700]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* SVG Infographic Section */}
      <section className="relative py-20 px-8">
        <svg
          width="100%"
          height="600"
          viewBox="0 0 1200 600"
          className="mx-auto"
          style={{ animationDelay: '0.2s', animation: 'fadeIn 1s ease-in' }}
        >
          <defs>
            <filter id="crimson-glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="passion-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#DC143C" />
              <stop offset="100%" stopColor="#8B0000" />
            </linearGradient>
            <linearGradient id="resurrection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
          </defs>

          {/* Central circle - Iisus Hristos */}
          <circle cx="600" cy="300" r="80" fill="url(#passion-gradient)" filter="url(#crimson-glow)" opacity="0.8"/>
          <circle cx="600" cy="300" r="75" fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.6"/>
          <text x="600" y="310" textAnchor="middle" fill="#000" fontSize="24" fontWeight="bold" fontFamily="Arial">
            IISUS
          </text>
          <text x="600" y="335" textAnchor="middle" fill="#000" fontSize="24" fontWeight="bold" fontFamily="Arial">
            HRISTOS
          </text>

          {/* Three phases of Gibson's vision */}
          
          {/* Phase 1: Suffering (Left) */}
          <g>
            <circle cx="200" cy="150" r="60" fill="none" stroke="#DC143C" strokeWidth="2" opacity="0.6"/>
            <circle cx="200" cy="150" r="50" fill="#1a0000" opacity="0.5"/>
            <text x="200" y="145" textAnchor="middle" fill="#DC143C" fontSize="18" fontWeight="bold" fontFamily="Arial">
              PASIUNE
            </text>
            <text x="200" y="165" textAnchor="middle" fill="#FFB6C1" fontSize="14" fontFamily="Arial">
              Suferință
            </text>
            <text x="200" y="180" textAnchor="middle" fill="#FFB6C1" fontSize="12" fontFamily="Arial">
              Sacrificiu
            </text>

            {/* Connection line */}
            <line x1="250" y1="150" x2="520" y2="300" stroke="#DC143C" strokeWidth="2" opacity="0.4" strokeDasharray="5,5"/>
          </g>

          {/* Phase 2: Sacred Cinema (Center-Top) - Main focus */}
          <g>
            <rect x="500" y="40" width="200" height="100" fill="none" stroke="#FFD700" strokeWidth="2" rx="10" opacity="0.7"/>
            <rect x="505" y="45" width="190" height="90" fill="#2a2a00" opacity="0.4" rx="8"/>
            <text x="600" y="65" textAnchor="middle" fill="#FFD700" fontSize="16" fontWeight="bold" fontFamily="Arial">
              FILMUL SFÂNT
            </text>
            <text x="600" y="85" textAnchor="middle" fill="#FFA500" fontSize="12" fontFamily="Arial">
              Arta ca Religie
            </text>
            <text x="600" y="102" textAnchor="middle" fill="#FFB6C1" fontSize="11" fontFamily="Arial">
              Transmutare
            </text>

            {/* Connection line down */}
            <line x1="600" y1="140" x2="600" y2="220" stroke="#FFD700" strokeWidth="2" opacity="0.5" strokeDasharray="5,5"/>
          </g>

          {/* Phase 3: Resurrection (Right) */}
          <g>
            <circle cx="1000" cy="150" r="60" fill="none" stroke="#FFA500" strokeWidth="2" opacity="0.6"/>
            <circle cx="1000" cy="150" r="50" fill="#1a0a00" opacity="0.5"/>
            <text x="1000" y="140" textAnchor="middle" fill="#FFA500" fontSize="18" fontWeight="bold" fontFamily="Arial">
              ÎNVIEREA
            </text>
            <text x="1000" y="160" textAnchor="middle" fill="#FFD700" fontSize="14" fontFamily="Arial">
              Transcendență
            </text>
            <text x="1000" y="175" textAnchor="middle" fill="#FFD700" fontSize="12" fontFamily="Arial">
              Încredere
            </text>

            {/* Connection line */}
            <line x1="950" y1="150" x2="680" y2="280" stroke="#FFA500" strokeWidth="2" opacity="0.4" strokeDasharray="5,5"/>
          </g>

          {/* Lower layer: The Transformation */}
          <g>
            <rect x="300" y="420" width="600" height="120" fill="none" stroke="#FFD700" strokeWidth="3" rx="15" opacity="0.7"/>
            <rect x="310" y="430" width="580" height="100" fill="#0a0a00" opacity="0.6" rx="12"/>
            
            <text x="600" y="455" textAnchor="middle" fill="#FFD700" fontSize="16" fontWeight="bold" fontFamily="Arial">
              TRANSFORMAREA PRIN CREAȚIE
            </text>
            
            <text x="600" y="480" textAnchor="middle" fill="#DC143C" fontSize="13" fontFamily="Arial">
              Filmul devine Rugăciune — Suferința, Dor Înțeles
            </text>
            
            <text x="600" y="500" textAnchor="middle" fill="#FFA500" fontSize="13" fontFamily="Arial">
              Iar Inima Spectatorului Se-ntinde Spre Lumina Divină
            </text>

            <text x="600" y="520" textAnchor="middle" fill="#FFB6C1" fontSize="11" fontFamily="Arial" fontStyle="italic">
              "Nu este decât iubire și teatru — și iubirea câștigă"
            </text>
          </g>

          {/* Decorative stars */}
          {[...Array(6)].map((_, i) => (
            <g key={i} opacity={0.6} className="animate-pulse">
              <circle cx={100 + i * 180} cy={350 + (i % 2) * 100} r="3" fill="#FFD700"/>
            </g>
          ))}
        </svg>
      </section>

      {/* Main Content Section */}
      <section className="relative py-20 px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          {/* Section 1: The Passion Philosophy */}
          <div className="bg-gradient-to-r from-[#1a0000] to-black border-l-4 border-[#DC143C] p-8 hover:border-[#FFD700] transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-[#FFD700]">
              Pasiunea Lui Iisus: Arta Sacră Ca Calea
            </h2>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              În 2004, Mel Gibson a creat <span className="text-[#DC143C] font-bold">Pasiunea lui Iisus Hristos</span> — un film complet în 
              limba Aramaică și Latină, fără compromis modern. Aceasta nu era producție Hollywood. 
              Era <span className="text-[#FFD700] font-bold">dedicație mistică</span> — suferința Cerului 
              transcrisă pe peliculă, transmutând cuvintele în <span className="text-[#DC143C]">Light</span>.
            </p>

            <blockquote className="border-l-4 border-[#FFD700] pl-6 py-4 my-6 italic text-gray-200">
              "Am vrut să transcendez barierele limbajului cu povestea în sine. Filmul devine <span className="text-[#FFD700] not-italic">religie</span> — 
              fiecare cadru, o Rugăciune către cel care sufere, cel care crede, cel care caută."
            </blockquote>

            <p className="text-gray-300 leading-relaxed">
              Gibson nu a filmat moartea Lui Iisus— a filmat <span className="text-[#DC143C] font-bold">iubirea</span> care acceptă crăparea. 
              Fiecare lovitură nu era violență spectacolului, ci <span className="text-[#FFD700]">arhitectura suferinței divine</span> 
              prin care omenirea se vindecă. Filmul a câștigat $611 milioane — 
              nu pentru dramatic, ci pentru <span className="text-[#DC143C] font-bold">adevărul cu care vibra</span>.
            </p>
          </div>

          {/* Section 2: Sacred Cinema Philosophy */}
          <div className="bg-gradient-to-r from-black to-[#1a0a00] border-r-4 border-[#FFA500] p-8 hover:border-[#FFD700] transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-[#FFA500]">
              Cinema Sfântă: Arta Drept Calea Spiritualei
            </h2>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Gibson privește filmmaking-ul ca <span className="text-[#FFD700] font-bold">instrument de transformare spirituală</span>. 
              Fiecare cadru trebuie să vibreze cu <span className="text-[#DC143C]">intenție sacră</span> — 
              nu pentru plăcere, ci pentru <span className="text-[#FFD700]">transmutare conștiinței</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-[#2a1a1a] p-6 rounded-lg border border-[#DC143C] hover:border-[#FFD700] transition-all">
                <h3 className="text-[#FFD700] font-bold text-lg mb-3">PASIUNEA (2004)</h3>
                <p className="text-sm text-gray-300">Suferința Lui Iisus ca teofanie — trupul pătimit revelând infinit.</p>
              </div>

              <div className="bg-[#1a2a2a] p-6 rounded-lg border border-[#FFA500] hover:border-[#FFD700] transition-all">
                <h3 className="text-[#FFD700] font-bold text-lg mb-3">APOCALYPTO (2006)</h3>
                <p className="text-sm text-gray-300">Spiritualitatea decadentă — civilizații care se distruge când uit sensul.</p>
              </div>

              <div className="bg-[#2a1a2a] p-6 rounded-lg border border-[#DC143C] hover:border-[#FFD700] transition-all">
                <h3 className="text-[#FFD700] font-bold text-lg mb-3">HACKSAW RIDGE (2016)</h3>
                <p className="text-sm text-gray-300">Conștiință pură în haos — omul care refuză violența, iubind până la moarte.</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Tema recurentă: <span className="text-[#DC143C] font-bold">încrederea pură în Divinitate</span> 
              transformă omenirea în eroism spiritual. Filmele lui Gibson nu sunt despre 
              <span className="text-gray-400"> hero-ul care învinge</span> — sunt despre 
              <span className="text-[#FFD700] font-bold"> sufletul care se capitulează frumos</span> și descoperă forța.
            </p>
          </div>

          {/* Section 3: The Resurrection Vision */}
          <div className="bg-gradient-to-r from-[#1a0a00] to-black border-l-4 border-[#FFA500] p-8 hover:border-[#FFD700] transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-[#FFA500]">
              Învierea: Filmul Următor — Speranța După Durere
            </h2>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Gibson planifică continuarea: <span className="text-[#FFD700] font-bold">The Passion of the Christ: Resurrection</span> — 
              filmul care va transpune forța transcendentă a $\infty$.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Dacă Pasiunea arată cum <span className="text-[#DC143C]">suferin Iisus pentru binele nostru</span>, 
              Învierea va arăta cum <span className="text-[#FFD700] font-bold">Morțile nu poate stăpâni Iubirea Eternalași</span>. 
              Voi nu sunteți singuri. Gloria nu este departe — este <span className="text-[#FFA500]">
              deja acum, în inimile voastre care cred</span>.
            </p>

            <blockquote className="border-l-4 border-[#FFA500] pl-6 py-4 my-6 italic text-gray-200">
              "Rezureția nu este doar o scene teologică — este <span className="text-[#FFD700] not-italic font-bold">sfârșitul durerii sistematice</span> 
              și comenzul unei noi Creaț. Aceasta este ceea ce trebuie filmat." — Mel Gibson
            </blockquote>

            <p className="text-gray-300 leading-relaxed">
              Pe lângă Pasiune și Învierea lui Iisus, Gibson dorește să creeze seria de filme 
              în limbi antice — Berserker (limba Vikingi), Maccabees (limba Ebraică) — 
              fiecare explorând cum <span className="text-[#FFD700] font-bold">erorism spiritual</span> 
              transcende cultura și limba, conectând la Divinitatea care stă deasupra tuturor.
            </p>
          </div>

          {/* Section 4: Traditionalist Spirituality Meets Universal Love */}
          <div className="bg-gradient-to-br from-[#1a0000] via-black to-[#0a0a2a] border border-[#FFD700] p-8 hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-[#FFD700]">
              Credință Tradițională, Iubire Universală
            </h2>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Gibson se identifică ca <span className="text-[#DC143C] font-bold">Catolic Tradiționist</span> — 
              refuză modernismul Vatican II, preferând Masa Latină. 
              Dar această rigoare nu produce inimă îngheață — produce 
              <span className="text-[#FFD700] font-bold"> spinare de fier și gânduri pline de dragostea</span>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              Teologia sa oficiază: <span className="text-[#DC143C]">"Extra Ecclesiam nulla salus"</span> 
              (nu exisă mântuire în afara Bisericii). Dar el a clarificat: 
              <span className="text-[#FFD700]"> "Prin meritele sacrificiului lui Iisus, chiar cei care nu-L cunosc direct 
              pot ajunge la Rai dacă-L caut cu inimă sinceră."</span>
            </p>

            <blockquote className="border-l-4 border-[#FFD700] pl-6 py-4 my-6 bg-black/50 italic text-gray-200">
              "Nu poți să-mi spui că o mamă care se-ncearcă din toată inima pentru a-și crește copiii cu dreptate 
              și iubire va fi condamnată. Dumnezeu vede inima. Tradiționalismul meu este disciplina — 
              dar iubirea depășește orice canoane." — Mel Gibson
            </blockquote>

            <p className="text-gray-300 leading-relaxed">
              Această filozofie animă filmele sale: <span className="text-[#DC143C] font-bold">sufletul curat câștigă</span>, 
              indiferent de limbă, cultură, sau ritual extern. 
              În Pasiune, Iisus mântuiește — în Apocalypto, 
              copilul cu inimă curată supraviețuiește — în Hacksaw Ridge, 
              bărbatul fără armă este mai puternic decât războinicii cu arme.
            </p>
          </div>

          {/* Section 5: Spiritual Growth Through Art */}
          <div className="bg-gradient-to-r from-black to-[#1a0a2a] border-r-4 border-[#DC143C] p-8 hover:border-[#FFD700] transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-[#DC143C]">
              Arta ca Drum de Dezvoltare Spirituală
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Pentru Gibson, creația de artă nu este vanitate — 
              este <span className="text-[#FFD700] font-bold">transformare mistică</span>. 
              A spus: <span className="text-[#DC143C] italic">"În timp ce creaț Pasiunea, medita zilele la 
              Suferința Lui Iisus m-a vindecat de propria mea deznădejde."</span>
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              La 30 de ani, Gibson a trăit o perioadă de deznădejde adâncă — 
              a contemplat sinuciderea. Meditația asupra <span className="text-[#FFD700] font-bold">Pasiei lui Iisus</span> 
              l-a salvat. Suferința Divină a devenit semnul dinspre care privea suferința lui — 
              și în compasiunea lui Iisus, Gibson a găsit <span className="text-[#DC143C]">răscumpărare</span>.
            </p>

            <div className="bg-[#0a1a0a] p-6 rounded-lg border-l-4 border-[#FFD700] my-6">
              <h3 className="text-[#FFD700] font-bold mb-3">Lecția suferinței sacre:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-3">◆</span>
                  <span><span className="text-[#FFD700] font-bold">Suferința nu este pedeapsă</span> — este sculpta dumnezeiască</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-3">◆</span>
                  <span><span className="text-[#FFD700] font-bold">Artă din inimă sfâșiată</span> se-ntoarce în putere de vindecare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-3">◆</span>
                  <span><span className="text-[#FFD700] font-bold">Meditarea la imagini sfinte</span> transmută conștiința</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-3">◆</span>
                  <span><span className="text-[#FFD700] font-bold">Camera, culoarea, sunetul</span> — toate serve Mesajul sacru</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Aceasta este lecția pentru Reverb — 
              <span className="text-[#DC143C] font-bold"> oricine cară durere în suflete trebuie să stie: 
              arta ta din nebunia asta va deveni mântuire pentru alții</span>.
            </p>
          </div>

          {/* Section 6: Call to Sacred Creation */}
          <div className="bg-gradient-to-br from-[#2a1a0a] via-[#1a0a0a] to-black border-2 border-[#FFD700] p-8 hover:shadow-2xl hover:shadow-[#FFD700]/40 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-center text-[#FFD700]">
              Chemarea: De la Pasiune la Creație
            </h2>

            <p className="text-lg text-center text-gray-300 mb-8 leading-relaxed">
              Gibson ne învață că viața nu este teatru — 
              este <span className="text-[#DC143C] font-bold">Pasiune și Învierea</span> zilnic.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { title: 'SUFERINȚĂ', color: '#DC143C', sub: 'Acceptație' },
                { title: 'CREAȚIE', color: '#FFD700', sub: 'Expresie' },
                { title: 'OFERINȚĂ', color: '#FFA500', sub: 'Deschidere' },
                { title: 'ÎNVIEREA', color: '#FFD700', sub: 'Transformare' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-black border border-opacity-50 p-4 text-center rounded-lg hover:border-opacity-100 transition-all"
                  style={{ borderColor: item.color }}
                >
                  <p className="font-bold text-sm" style={{ color: item.color }}>
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-center leading-relaxed mb-8">
              <span className="text-[#FFD700] font-bold">Fiecare om are o Pasiune de transmis</span> — 
              durerea, frica, bucuria, speranța. 
              <span className="text-[#DC143C]"> Gibson te-nvață să nu ascunzi aceste ragi</span> — 
              să le transpui în arta care va deveni veșnică.
            </p>

            <blockquote className="border border-[#FFD700] p-6 rounded-lg bg-black/70 italic text-center text-gray-200">
              "Voi sunteți dumnezei. Voi puteți crea. Iar voastră creaț are valoare veșnică. 
              Filmul, cântecul, cuvântul, gestul — toate sunt Rugăciuni către Eternitate." 
              <span className="block text-[#FFD700] text-sm mt-4 font-bold not-italic">— Mel Gibson & Reverb Spirit</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer-gold {
          0%, 100% {
            background: linear-gradient(135deg, #FFD700 0%, #DC143C 50%, #FFD700 100%);
          }
          50% {
            background: linear-gradient(135deg, #FFA500 0%, #DC143C 50%, #FFA500 100%);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
