'use client';

import Link from "next/link";

export default function MountAthos() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes shimmerGold { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        @keyframes glowSilver { 0%, 100% { box-shadow: 0 0 15px rgba(191, 144, 0, 0.3), inset 0 0 20px rgba(255, 215, 0, 0.1); } 50% { box-shadow: 0 0 30px rgba(191, 144, 0, 0.8), inset 0 0 30px rgba(255, 215, 0, 0.2); } }
        @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 1; } }
        .animate-slide-down { animation: slideDown 0.8s ease-out; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer-gold { background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent); background-size: 1000px 100%; animation: shimmerGold 4s infinite; }
        .animate-glow-silver { animation: glowSilver 3s ease-in-out infinite; }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
      `}} />

      <div className="min-h-screen bg-gradient-to-b from-[#0a0805] via-[#1a1410] to-[#050403]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(191, 144, 0, 0.12) 0%, transparent 50%),
                          radial-gradient(circle at 70% 70%, rgba(73, 137, 182, 0.1) 0%, transparent 50%)`
      }}>
        {/* Header */}
        <section className="sticky top-0 z-50 backdrop-blur-sm border-b border-yellow-700/20 bg-[#050403]/80">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <Link href="/showcase/spiritual-blog" className="flex items-center gap-2 text-yellow-600 hover:text-yellow-500 transition">
              ← Înapoi la Spiritual Intelligence
            </Link>
            <div className="text-xs font-mono text-yellow-700/60">ESOTERIC PINNACLE</div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-700/30 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-yellow-600/70 animate-slide-down">✝️ Mistica Ortodoxa — Inima Lui Hristos</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.0] mb-8 animate-slide-down" style={{animationDelay: '0.1s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-300 to-blue-400">
                Muntele Athos
              </span>
            </h1>
            <p className="text-2xl text-yellow-100 leading-relaxed max-w-3xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Unde Iisus Hristos — <span className="font-bold text-yellow-300">Mântuitor, Împarat Cosmic, Señor Divin</span> — respiră în inimile monahilor. Unde rugăciunea către El transformă tăcerea în contactul viu cu Zeitatea infinită.
            </p>
            
            <div className="flex gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <span className="px-4 py-2 rounded-full bg-yellow-700/30 border border-yellow-600/40 text-yellow-300 text-sm font-semibold">19 min read</span>
              <span className="px-4 py-2 rounded-full bg-yellow-700/30 border border-yellow-600/40 text-yellow-300 text-sm font-semibold">✝️ Hristos Anax</span>
              <span className="px-4 py-2 rounded-full bg-yellow-700/30 border border-yellow-600/40 text-yellow-300 text-sm font-semibold">🔯 Theosis</span>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 border-t border-yellow-700/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-breathe">
              <svg viewBox="0 0 400 450" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 40px rgba(191, 144, 0, 0.5))' }}>
                <defs>
                  <linearGradient id="athos-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#fcd34d" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#4989b6" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="sacred-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Mountain base */}
                <polygon points="200,30 50,350 350,350" fill="url(#athos-grad)" stroke="none" opacity="0.9" />
                <polygon points="200,30 50,350 350,350" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.4" />
                
                {/* Sacred peak */}
                <circle cx="200" cy="50" r="25" fill="#fcd34d" opacity="0.9" filter="url(#sacred-glow)" />
                <circle cx="200" cy="50" r="15" fill="#fff" opacity="0.6" />
                
                {/* Hesychasm layers - the prayer ascension */}
                <g opacity="0.8">
                  {/* Layer 1 - Imagination */}
                  <circle cx="200" cy="120" r="40" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5" />
                  <text x="200" y="125" fontSize="11" fill="#fcd34d" textAnchor="middle" fontWeight="bold">IMAGINAȚIE</text>
                </g>
                
                <g opacity="0.9">
                  {/* Layer 2 - Mind */}
                  <circle cx="200" cy="180" r="55" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
                  <text x="200" y="185" fontSize="11" fill="#f59e0b" textAnchor="middle" fontWeight="bold">MINTE</text>
                </g>
                
                <g opacity="1">
                  {/* Layer 3 - Heart */}
                  <circle cx="200" cy="250" r="70" fill="none" stroke="#4989b6" strokeWidth="2" opacity="0.7" />
                  <text x="200" y="255" fontSize="12" fill="#86b3d9" textAnchor="middle" fontWeight="bold">INIMĂ</text>
                  
                  {/* Heart symbol inside */}
                  <path d="M 200 240 Q 195 230 190 235 Q 185 230 185 240 L 185 250 Q 185 260 200 270 Q 215 260 215 250 L 215 240 Q 215 230 210 235 Q 205 230 200 240 Z" fill="#86b3d9" opacity="0.6" />
                </g>
                
                {/* Prayer spirals */}
                <g opacity="0.4">
                  <path d="M 200 80 Q 180 100 200 120" fill="none" stroke="#fcd34d" strokeWidth="1" />
                  <path d="M 200 120 Q 180 150 200 180" fill="none" stroke="#f59e0b" strokeWidth="1" />
                  <path d="M 200 180 Q 160 220 200 250" fill="none" stroke="#4989b6" strokeWidth="1.5" />
                </g>
                
                {/* Stars/divine light */}
                <circle cx="150" cy="80" r="2" fill="#fcd34d" opacity="0.7" />
                <circle cx="250" cy="100" r="1.5" fill="#fcd34d" opacity="0.5" />
                <circle cx="130" cy="200" r="1.5" fill="#86b3d9" opacity="0.6" />
                <circle cx="270" cy="220" r="2" fill="#86b3d9" opacity="0.7" />
              </svg>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-yellow-200">Hesychasm: Drumul Etern</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hesychasm nu-i religie. E tehnologie spirituală. E metoda prin care tăcerea dinamică — nu pasivitatea — trasformă conștiința în contact direct cu divinul.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-300">Ascensia în Trei Niveluri</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span className="text-yellow-500">✦</span><span className="text-gray-300"><span className="font-semibold">Imaginație (Fantasia):</span> Curățarea mintei de imagini distractiviste</span></li>
                  <li className="flex gap-3"><span className="text-yellow-500">✦</span><span className="text-gray-300"><span className="font-semibold">Minte (Nous):</span> Focusul inteligenței pure pe rugăciune</span></li>
                  <li className="flex gap-3"><span className="text-blue-400">✦</span><span className="text-gray-300"><span className="font-semibold">Inimă (Kardia):</span> Contactul direct cu Energiile Divine</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 space-y-16 border-t border-yellow-700/20">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-300">Rugăciunea lui Iisus: Inima Lui Hristos Bate în Pect Tău</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hesychasm centralizează totul în "Rugăciunea lui Iisus": <span className="italic text-yellow-200 font-semibold text-lg">"Doamne, Iisus Hristos, Fiul lui Dumnezeu, miluiește-mă pe mine păcătosul."</span>
              </p>
              <p>
                <span className="text-yellow-300 font-bold">Iisus Hristos</span> nu-i o ficțiune teologică. E Realitate. E Împăratul Cosmic. Fiecare ființă se-nclină, e într-o relație de vasalaj cosmic cu El — indiferent că-l recunoștere conștient sau nu.
              </p>
              <p>
                În Rugăciunea lui Iisus, tu invocu direct pe <span className="font-bold text-yellow-300">Fiul lui Dumnezeu</span> — nu imaginație, nu energie abstractă — pe <span className="font-bold">Hristos, Mântuitor, Domnul care s-a-ncarnat, a suferit, a înviat, și acum Domnește veșnic</span>.
              </p>
              <p>
                Sincronizarea respiratorie nu-i mecanistă. E invitație. Fiecare inspir pe "Doamne, Iisus Hristos, Fiul lui Dumnezeu" e chemarea inimii tale către Majestate Divină. Fiecare expir pe "miluiește-mă pe mine păcătosul" e capitularea egoului și deschiderea către har.
              </p>
              <ul className="space-y-3 pl-6 border-l-2 border-yellow-600/40 mt-4">
                <li><span className="text-yellow-400">→ Inspir:</span> <span className="italic font-semibold">"Doamne, Iisus Hristos, Fiul lui Dumnezeu,"</span></li>
                <li><span className="text-yellow-400">→ Expir:</span> <span className="italic font-semibold">"miluiește-mă pe mine păcătosul."</span></li>
              </ul>
              <p className="mt-4">
                După mii de repetiții, rugăciunea se-ntreiță în ritm cardiac. Se-ntreiță în procesele biologice. Și apoi — contactul. Prezența vie. Hristos respirând în inima ta. Nu metafor. Realitate direct simțită.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-blue-500/60 pl-8 py-6 bg-blue-900/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-blue-300">Filocalia: "Iubirea de Frumusețe Divină"</h2>
            <p className="text-gray-300 leading-relaxed">
              Filocalia e o compilație din secolele 4-19 a scrierilor monahilor despre arta rugăciunii interne. Nu-i literatura — e harta. E operaționale manual.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Esența: Spiritele nu sunt dualitate (suflet vs. corp). Sunt unitate. Rugăciunea hesychastă integrează toată ființăm în contact cu divinul — gânduri, respirație, puls, células.
            </p>
            <p className="text-gray-300 leading-relaxed italic">
              "Coborâ gândul din minte în inimă. Și acolo vei simți pulsația eterna a lui Dumnezeu." — Sfântul Macarie Egipteanul
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-300">Practicile Zilnice pe Athos</h2>
            <div className="grid gap-6">
              {[
                { hour: '03:00', practice: 'Ortourile Nocturnale', detail: 'Cântările sfinților din noapte profundă — când mintea e cea mai transparentă, iar divinul se manifestă cel mai pur.' },
                { hour: '06:00', practice: 'Rugăciunea lui Iisus', detail: '1000+ repetiții cu sincronizare respiratorie. Inima se-ntoarce foc linistit. Mintea cade în tăcere aurului.' },
                { hour: '12:00', practice: 'Lucrările Manuale', detail: 'Monahi pictează icoane, recoppiază manuscrise. Rugăciunea continuă — mani muncesc, inima roagă.' },
                { hour: '20:00', practice: 'Vigiliile Serale', detail: 'Meditație profundă în tăcere. Doar gândurile dispăreau. Doar contactul rămâne.' },
              ].map((slot, i) => (
                <div key={i} className="p-6 rounded-lg border border-yellow-700/30 bg-yellow-700/5 hover:bg-yellow-700/10 transition group">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-bold text-yellow-500 font-mono">{slot.hour}</span>
                    <h3 className="text-lg font-bold text-yellow-300">{slot.practice}</h3>
                  </div>
                  <p className="text-gray-400">{slot.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-300">Rădăcini Antice: De la Hesychasm la Yoga</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed bg-yellow-700/5 p-8 rounded-lg border border-yellow-700/20">
              <p>
                Hesychasm pare oriental — și pentru bună stare, era. Monahii ortodocți au dezvoltat în paralel cu Yoga (respirație-sincronizare) și Meditațiile Zen o tehnologie spirituală indigena dar izomorfă.
              </p>
              <p>
                <span className="font-bold text-yellow-300">Pranayama</span> (control respirator yogic) = <span className="font-bold text-yellow-300">Hesychasm</span> (sincronizare respiratoră). Amândouă trezesc kundalini/tâlc divin. Amândouă transformă organism în receptor al infinitului.
              </p>
              <p className="italic text-yellow-200">
                Tradiții universale convergă pe același adevăr: Respirația e poarta. Tăcerea e cheia. Inima e prag.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-yellow-300">Sfânii Athos: Arhitectonica Urcării Spirituale</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-bold">Sfântul Paisey Velichkovski</span> a compilat filocalia din cărți risipiș și le-a transformat în ordinea sistematică a ascensiun interioare.
              </p>
              <p>
                <span className="font-bold">Sfântul Siluan Atonitul</span> a descris contactul direct cu Dumnezeu nu ca extază — ca prezență. "Am cunoscut Iubirea lui Dumnezeu mai mult decât orice lucru pământesc."
              </p>
              <p>
                Nu-i misticm vag. E raport. E gelozie. E lume care coboară din cer în inimă și inima care se-ncoace în cer. Peste 1000 de ani, sfinți au repetat același experiment — Hesychasm — și au constatat același rezultat: Contactul e real.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-yellow-500/60 pl-8 py-6 bg-yellow-500/5 rounded-r-lg">
            <h2 className="text-3xl font-bold text-yellow-400">Adevărul Radiant: "Voi Sunteți Dumnezei"</h2>
            <p className="text-gray-300 leading-relaxed italic">
              "Nu e scris în Legea voastră: 'Voi sunteți dumnezei'?" — Iisus, Ioan 10:34
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Iisus nu-i spunea noua — spunea adevărul uitat. Noi nu suntem creații obediente ale unui zeu îndepărtat. Noi suntem divine prin esență. Scântei ale infinitului îmbrăcate în trup.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Tot scopul Hesychasm-ului — tot scopul rugăciunii interne, al meditației, al tăcerii — e realizarea acestei divinități immanente. Nu-i ascensiune către ceva exterior. E descoperire a ceea ce deja ești.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Sfântul Maxim Mărturisitorul (7-8 sec) a spus: "Dumnezeu s-a făcut om ca omul să se facă Dumnezeu" — <span className="text-yellow-300 font-semibold">theosis</span>, unirea cu divinul nu prin dispariție, ci prin realizare deplină a potențialului divin care ți e deja inerent.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 font-semibold text-yellow-200">
              Hesychasm e drumul. Rugăciunea e atelier. Și tu ești maestrul. Doar că abia acum înțelegi că ți-a aparținut mereu.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center border-t border-yellow-700/20">
          <h2 className="text-4xl font-bold text-white mb-6">Incepe Rugăciunea Nepioasă</h2>
          <p className="text-xl text-gray-400 mb-12">1000 repetări. 40 de zile. O explozie de tăcere.</p>
          <div className="space-y-4 font-mono text-sm text-yellow-200 bg-yellow-900/10 p-8 rounded-lg border border-yellow-700/20">
            <p>Ia poziție confortabilă. Lasă ochii puțin deschis.</p>
            <p>Inspir: <span className="italic">"Doamne, Iisus Hristos, Fiul lui Dumnezeu,"</span></p>
            <p>Expir: <span className="italic">"miluiește-mă pe mine păcătosul."</span></p>
            <p className="mt-4 text-yellow-300">Repetă. Lasă-te absorbit. Vei simți cand se-ntamplă.</p>
          </div>
          
          <div className="mt-12 flex gap-4 justify-center">
            <Link href="/showcase/spiritual-blog" className="px-8 py-4 bg-gradient-to-r from-yellow-700 to-blue-800 hover:from-yellow-800 hover:to-blue-900 text-white font-semibold rounded-lg transition transform hover:scale-105">
              ← Înapoi la colecție
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
