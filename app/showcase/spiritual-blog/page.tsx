'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

// -------------------------------------------------------------
// DATA ARLECHIN - Baza Filosofică Brianna Wiest
// -------------------------------------------------------------
const articles = [
  { id: "subconscious-shift", title: "101 Eseuri: Decodarea Subconștientului", category: "Brianna Wiest Paradigm", excerpt: "Schimbă-ți modul de a gândi înlocuind convingerile limitative cu adevăruri raționale. Tu ești sursa propriei vindecări.", color: "#9333ea", readTime: "12 min", icon: "🧠", fullContent: "Adevărata schimbare nu vine din repetarea mecanică a unor afirmații, ci din a permite creierului tău să recunoască adevărul rațional că tu ești în siguranță acum. Modul în care te-ai auto-sabotat nu a fost o eroare de sistem, ci un mecanism strălucit al subconștientului tău pentru a te menține în viață în medii toxice. Acum, ești la control." },
  { id: "sabotage", title: "Anatomia Auto-Sabotajului", category: "Dezvoltare Psihologică", excerpt: "Cum reflexele tale cele mai distructive sunt de fapt eforturi mascate ale subconștientului de a te proteja.", color: "#ec4899", readTime: "9 min", icon: "🛡️", fullContent: "Auto-sabotajul apare pur și simplu când ai un conflict între nevoile tale conștiente (ex: 'vreau succes') și rănile tale subconștiente (ex: 'succesul aduce așteptări care mă pot distruge'). Ceea ce numești sabotaj este doar mintea ta refuzând să accepte o fericire pentru care nu se simte capabilă să facă față consecințelor." },
  { id: "familiar-pain", title: "Durerea Familiară vs. Fericirea Necunoscută", category: "Analiză Profundă", excerpt: "De ce creierul alege repetarea durerii cu care este obişnuit în loc să riște disconfortul fericirii.", color: "#06b6d4", readTime: "15 min", icon: "⚖️", fullContent: "Sistemul tău limbic nu diferențiază între durere 'bună' și durere 'rea'. El caută predictibilitate. Dacă ai trăit în haos emoțional toată viața, bucuria neașteptată va declanșa anxietate pentru că mintea ta va aștepta dezastrul următor. Vindecarea presupune să reînveți capacitatea celulară de a tolera fericirea fără să intri în teroare." },
  { id: "happiness-discipline", title: "Fericirea nu e Accident, e Disciplină", category: "Mindset Rutinar", excerpt: "Starea de bine constantă necesită efort zilnic intenționat. Cum să decuplezi bucuria de la stimulii externi.", color: "#f59e0b", readTime: "11 min", icon: "🌞", fullContent: "Am romantizat идеa că fericirea se întâmplă magic. În realitate, a rămâne funcțional și pozitiv într-un univers entropic este un exercițiu violent de mușchi mental. Fericirea este neuro-plasticitate aplicată zi de zi. Alegi intenționat la ce stimuli te expui până când nervul tău vagal decide că devine un obicei natural." },
  { id: "letting-go", title: "Arta de a Da Drumul", category: "Vindecare Emoțională", excerpt: "Nu poți vindeca ceva ce nu ești dispus să simți complet. Secretul eliberării bagajelor emoționale reziduale.", color: "#10b981", readTime: "10 min", icon: "🌊", fullContent: "A 'da drumul' nu înseamnă să te prefaci că nu ești rănit. Înseamnă a permite sistemului tău nervos să proceseze cantitatea chimică a furiei sau durerii respective fără să blochezi valul prin negare. Durează doar 90 de secunde pentru ca o substanță chimică emoțională să se ardă complet. Stai cu ea. Las-o să treacă." },
  { id: "purpose", title: "Scopul tău nu este o Carieră", category: "Sens Existențial", excerpt: "Găsirea a ceea ce ești menit să faci nu are legătură strict cu job-ul tău, ci cu recablarea sinapselor pentru esența pură.", color: "#8b5cf6", readTime: "14 min", icon: "✨", fullContent: "Societatea a ambalat și vândut ideea de 'scop suprem' legându-l de productivitatea financiară. E o capcană masivă de ego. Scopul tău suprem ar putea fi să ai o viață mediocră și liniștită într-o grădină, trăind intens prezentul, sau ar putea fi o corporație giga-tech. Sensul tău este simplul fapt de A FI complet asumat, nu neapărat ceea ce oferi forței de muncă." },
];

const REFRAMES = [
  "Paradigm Shift: Aceasta nu este o slăbiciune a ta. Este doar un tipar protectiv din trecut care acum îți stă în cale. Poți alege să nu îl mai folosești.",
  "Decuplare Subconștientă: Creierul tău te minte că necunoscutul e periculos. Nu confunda anxietatea de o schimbare pozitivă cu frica reală.",
  "Recablare Neuroplastică: Ceea ce numești blocaj e doar incapacitatea de a tolera cantitatea masivă de disconfort necesară pentru dezvoltarea ta. Suportă senzația.",
  "Axioma Vindecării: Nu poți repara cu aceeași minte cu care ai stricat. Ceea ce introduci în acest câmp a fost dizolvat acum. Alege un gând funcțional."
];

export default function SpiritualAppMaximal() {
  const [therapyInput, setTherapyInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [therapyResult, setTherapyResult] = useState("");
  const [activeArticle, setActiveArticle] = useState<any>(null);

  // -------------------------------------------------------------
  // DISSOLVE ENGINE: Handler pentru distrugerea durerii/anxietății
  // -------------------------------------------------------------
  const handleDissolve = () => {
    if(!therapyInput.trim()) return;
    setIsProcessing(true);
    setTherapyResult("");
    
    // Simulating deep neural network API / Subconscious breakdown (3 seconds)
    setTimeout(() => {
      // Pick a random profound Truth Reframe
      const randomReframe = REFRAMES[Math.floor(Math.random() * REFRAMES.length)];
      setTherapyInput(""); // Dissolve the text visually
      setTherapyResult(randomReframe);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* MAXIMAL COMPLEXITY CSS ANIMATIONS */
        body { margin: 0; background: #05050A; color: white; overflow-x: hidden; }
        
        /* 1. Breathing Background (4-7-8 Technique) 
           Inhale: 4s (Grow), Hold: 7s (Stable), Exhale: 8s (Shrink). Total 19s */
        @keyframes therapeutic-breathing {
          0% { transform: scale(0.8); opacity: 0.1; filter: blur(50px); }
          21% { transform: scale(1.5); opacity: 0.35; filter: blur(30px); } /* Inhale (4s/19s) */
          58% { transform: scale(1.48); opacity: 0.4; filter: blur(30px); } /* Hold (7s/19s) */
          100% { transform: scale(0.8); opacity: 0.1; filter: blur(50px); } /* Exhale (8s/19s) */
        }
        .breathing-orb {
          animation: therapeutic-breathing 19s ease-in-out infinite;
          background: radial-gradient(circle at center, #9333ea, #ec4899 70%, transparent 100%);
        }

        /* 2. Dissolve Text Effect */
        @keyframes text-dissolve {
          0% { opacity: 1; filter: blur(0); letter-spacing: normal; transform: translateY(0); }
          50% { opacity: 0.5; filter: blur(8px); letter-spacing: 15px; transform: translateY(-20px) scale(1.1); color: #ec4899; }
          100% { opacity: 0; filter: blur(20px); letter-spacing: 30px; transform: translateY(-50px) scale(1.5); }
        }
        .is-dissolving {
          animation: text-dissolve 2.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          color: rgba(255,255,255,0.7);
        }

        /* 3. Reframe Text Reveal */
        @keyframes text-reveal-glow {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px) brightness(4); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0) brightness(1); }
        }
        .reframe-reveal-active {
          animation: text-reveal-glow 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* 4. Immersive Modal Blur Overlay */
        .modal-overlay {
          backdrop-filter: blur(20px) saturate(150%);
          background: rgba(5, 5, 10, 0.85);
        }

        /* Standard Smooth Appearances */
        @keyframes slideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        .slideUp { animation: slideUp 0.8s ease forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; } .delay-2 { animation-delay: 0.2s; } 
        .delay-3 { animation-delay: 0.3s; } .delay-4 { animation-delay: 0.4s; }

        /* Neuro-cards */
        .neuro-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(147, 51, 234, 0.15);
          box-shadow: inset 0 0 20px rgba(147, 51, 234, 0.05);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .neuro-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(236, 72, 153, 0.4);
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 30px rgba(236, 72, 153, 0.1);
        }
      `}} />
      
      <div className="min-h-screen relative font-sans">
        {/* THERAPEUTIC SYSTEM BACKGROUND (4-7-8 Breathing Alpha State Generator) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] breathing-orb rounded-full mix-blend-screen opacity-0"></div>
          <div className="absolute top-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        {/* ========================================================
            HERO SECTION - Paradigm Entry
        ======================================================== */}
        <section className="relative z-10 px-6 py-24 lg:px-10 lg:py-40 max-w-6xl mx-auto flex flex-col justify-center min-h-[80vh]">
          <Link href="/showcase" className="w-fit inline-flex items-center text-xs font-mono mb-12 border rounded-full px-4 py-1.5 text-purple-300 border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all slideUp">← Exit Simulation</Link>
          <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.5em] text-pink-500 slideUp delay-1">Software Terapeutic V2.0</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-pink-500 slideUp delay-2">
            Decodarea<br/>Subconștientului.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed slideUp delay-3">
            O aplicație de reprogramare cognitivă bazată pe arhitectura psihologică a cărții <strong className="text-purple-300 font-medium whitespace-nowrap">"101 Eseuri"</strong> de Brianna Wiest. Durerea familiară moare aici.
          </p>
          <div className="flex gap-4 slideUp delay-4">
            <a href="#dissolve-engine" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-none hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Inițiază Recablarea
            </a>
          </div>
        </section>

        {/* ========================================================
            DISSOLVE ENGINE - THE THERAPY INTERACTIVE FORM
        ======================================================== */}
        <section id="dissolve-engine" className="relative z-10 max-w-5xl mx-auto px-6 py-32 border-y border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="text-center mb-16 slideUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Motorul de Decuplare (Dissolve Engine)</h2>
            <p className="text-gray-500">Introdu o convingere dureroasă sau un "auto-sabotaj" care te ține pururi captiv în limitare zilnică.</p>
          </div>

          <div className="bg-gray-900/50 p-8 md:p-12 border border-gray-800 rounded-[2rem] shadow-2xl relative overflow-hidden">
            {!therapyResult && (
              <div className="relative z-10">
                <textarea 
                  value={therapyInput}
                  onChange={(e) => setTherapyInput(e.target.value)}
                  placeholder="EX: Nu cred că merit succesul; am o rezistență masivă la disciplină..."
                  className={`w-full bg-transparent border-b-2 border-purple-900/50 text-2xl md:text-3xl text-white font-light focus:outline-none focus:border-pink-500 transition-colors resize-none py-4 placeholder-gray-700 min-h-[150px] ${isProcessing ? 'is-dissolving pointer-events-none' : ''}`}
                />
                
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={handleDissolve}
                    disabled={isProcessing || !therapyInput.trim()}
                    className={`px-8 py-4 text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-500 ${isProcessing || !therapyInput.trim() ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:scale-105'}`}
                  >
                    {isProcessing ? 'SE DIZOLVĂ...' : 'DECUPEAZĂ PARADIGMA'}
                  </button>
                </div>
              </div>
            )}
            
            {/* The Output Reframe */}
            {therapyResult && (
              <div className="min-h-[200px] flex items-center justify-center relative z-10 reframe-reveal-active">
                <div className="text-center">
                  <div className="text-xs font-mono text-pink-500 mb-6 tracking-[0.3em]">-- REZOLUTIE PSIHOLOGICA CALCULATA --</div>
                  <h3 className="text-3xl md:text-4xl text-white font-serif italic font-light leading-snug mb-10 border-l-4 border-pink-500 pl-6 text-left shadow-pink">
                    "{therapyResult}"
                  </h3>
                  <button 
                    onClick={() => { setTherapyResult(""); setTherapyInput(""); }}
                    className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4 transition uppercase tracking-widest text-xs"
                  >
                    Incarcă Altman Tipar Mental
                  </button>
                </div>
              </div>
            )}

            {/* Glowing borders around machine */}
            <div className="absolute inset-0 border-2 border-white/5 pointer-events-none rounded-[2rem] mix-blend-overlay"></div>
          </div>
        </section>

        {/* ========================================================
            ARTICLES/ESSAYS GRID
        ======================================================== */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 slideUp">
            <div>
              <div className="text-pink-500 text-xs font-mono tracking-widest mb-3">LECTURI CLINICE</div>
              <h2 className="text-5xl font-bold">101 Eseuri Filosofice</h2>
            </div>
            <p className="text-gray-500 max-w-[300px] mt-6 md:mt-0 text-sm">Biblioteca principală de restructurare cognitivă. Click pentru imersiune terapeutică completă.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, idx) => (
              <div 
                key={a.id} 
                onClick={() => setActiveArticle(a)}
                className={`neuro-card rounded-2xl p-8 cursor-pointer relative overflow-hidden group slideUp`} 
                style={{animationDelay: `${(idx % 6) * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 p-6 text-4xl opacity-50 group-hover:opacity-100 group-hover:scale-125 transition duration-500 transform origin-top-right">{a.icon}</div>
                <div className="text-[10px] font-mono tracking-widest mb-6" style={{color: a.color}}>{a.category}</div>
                <h3 className="text-2xl font-bold text-white mb-4 pr-8 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text transition" style={{backgroundImage: `linear-gradient(to right, white, ${a.color})`}}>{a.title}</h3>
                <p className="text-gray-400 text-sm font-light mb-8 line-clamp-3 leading-relaxed">{a.excerpt}</p>
                
                <div className="flex justify-between items-center text-xs border-t border-white/10 pt-4 mt-auto">
                  <span className="text-gray-600 font-mono">{a.readTime}</span>
                  <span className="text-white font-medium bg-white/5 px-4 py-1.5 rounded-full group-hover:bg-pink-500 transition">Încarcă Matricea</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            IMMERSIVE ARTICLE MODAL (State Based)
        ======================================================== */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 modal-overlay opacity-100 animate-fade-in text-left font-sans">
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
            
            <div className="relative bg-[#0a0a0f] border border-white/10 w-full max-w-4xl h-full md:h-[80vh] rounded-[2rem] shadow-2xl p-8 md:p-16 flex flex-col overflow-y-auto animate-slide-up transform translate-y-0">
              
              <button 
                onClick={() => setActiveArticle(null)}
                className="sticky top-0 ml-auto w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-pink-500 text-white rounded-full transition-colors z-20 backdrop-blur-md"
              >
                ✕
              </button>

              <div className="max-w-2xl mx-auto w-full pb-20 relative z-10 pt-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{activeArticle.icon}</span>
                  <div>
                    <div className="text-xs font-mono tracking-widest uppercase mb-1" style={{color: activeArticle.color}}>
                      {activeArticle.category} • {activeArticle.readTime}
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">
                  {activeArticle.title}
                </h1>
                
                <div className="h-px w-24 bg-gradient-to-r from-pink-500 to-transparent mb-12"></div>
                
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed">
                  <p className="text-2xl text-gray-200 mb-8 border-l-4 pl-6 italic" style={{borderColor: activeArticle.color}}>
                    {activeArticle.excerpt}
                  </p>
                  
                  <p className="text-lg">
                    {activeArticle.fullContent}
                  </p>
                  
                  <div className="mt-16 p-8 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-sm font-mono text-pink-400 mb-4 tracking-widest uppercase">EXERCIȚIU DE INTEGRARE (JURNAL)</h4>
                    <p className="text-base text-gray-400 mb-6">Dacă această rezistență sau tipar s-ar dizolva complet până mâine dimineață, la ce durere familiară ar trebui să renunți și ce fericire grea ar trebui să accepți în schimb?</p>
                    <textarea 
                      placeholder="Scrie reflectarea aici (datele nu sunt salvate nicăieri)..." 
                      className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white placeholder-gray-700 min-h-[100px] focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <section className="relative z-10 border-t border-white/5 px-6 py-12 text-center">
          <p className="text-gray-500 text-xs font-mono uppercase tracking-[0.2em] mb-4">Arhitectură de Prezență Digitală. Sistem Reverb.</p>
          <div className="inline-block w-1 h-1 bg-pink-500 rounded-full animate-pulse-glow"></div>
        </section>
      </div>
    </>
  );
}
