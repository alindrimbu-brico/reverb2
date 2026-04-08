"use client";

import { useState } from "react";
import Link from "next/link";
import ShowcaseAIAgent from "@/components/ShowcaseAIAgent";

export default function LegalFirmShowcase() {
  const [contractText, setContractText] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{ risk: string, flagged: string } | null>(null);

  const handleScan = () => {
    if(!contractText) return;
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      let risk = "SCĂZUT";
      let flagged = "Nu s-au detectat clauze disproporționate conform Codului Civil.";
      
      const lower = contractText.toLowerCase();
      if(lower.includes("reziliere") || lower.includes("unilateral") || lower.includes("penalitate")) {
         risk = "CRITIC";
         flagged = "Detectat: Clauză de reziliere unilaterală abuzivă. Risc major de litigiu comercial.";
      } else if (lower.includes("confidential") || lower.includes("nda")) {
         risk = "MEDIU";
         flagged = "Atenție: Clauza de confidențialitate nu definește limitarea în timp (perioada post-contract).";
      }

      setScanResult({ risk, flagged });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#121212] font-sans selection:bg-[#8B2520] selection:text-[#E5E5E5]">
      
      <ShowcaseAIAgent industryContext="legal" />

      <style>{`
        @keyframes line-cut { 0% { width: 0; } 100% { width: 100%; } }
        @keyframes text-reveal-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scan-laser { 0% { top: 0; opacity: 1; } 50% { opacity: 0.5; } 100% { top: 100%; opacity: 1; } }
      `}</style>

      {/* Heavy Brutalist Header */}
      <header className="fixed top-0 w-full z-40 bg-[#E5E5E5] border-b-2 border-[#121212] flex justify-between items-center px-6 lg:px-12 py-5">
         <div className="font-mono text-sm lg:text-base font-bold tracking-tight text-[#121212] flex items-center gap-3">
            [JURIDIC.SYS]
            <span className="bg-[#8B2520] text-[#E5E5E5] text-[9px] px-2 py-0.5 tracking-widest uppercase animate-pulse">Nevronix AI Active</span>
         </div>
         <nav className="hidden md:flex gap-10 font-bold uppercase text-xs tracking-[0.1em]">
            <a href="#" className="hover:text-[#8B2520] transition">Domenii de Practică</a>
            <a href="#" className="hover:text-[#8B2520] transition">AI Contract Review</a>
            <a href="#" className="hover:text-[#8B2520] transition">Avocați</a>
         </nav>
         <button className="bg-[#121212] text-[#E5E5E5] px-6 py-2.5 font-bold uppercase text-[10px] tracking-widest hover:bg-[#8B2520] transition">
            Consultanță
         </button>
      </header>

      {/* Main Layout */}
      <main className="pt-24 lg:pt-32 min-h-screen flex flex-col px-6 lg:px-12 pb-12">
         
         <div className="flex-1 flex flex-col justify-center relative min-h-[50vh]">
            {/* Infinite Horizontal Cut Line */}
            <div className="absolute top-[52%] left-[-10vw] w-[120vw] h-[3px] bg-[#8B2520] origin-left animate-[line-cut_1.2s_cubic-bezier(0.77,0,0.175,1)_forwards] z-0"></div>

            <div className="relative z-10 text-center mix-blend-difference pointer-events-none">
               <h1 className="text-[14vw] font-black leading-[0.8] tracking-tighter uppercase text-[#E5E5E5] opacity-0 animate-[text-reveal-up_0.8s_ease-out_0.2s_forwards]">
                  Adevăr prin<br/>Structură.
               </h1>
            </div>
         </div>

         {/* AI Contract Analyzer Module */}
         <div className="mt-12 mb-10 opacity-0 animate-[text-reveal-up_0.8s_ease-out_0.7s_forwards]">
            <div className="border-2 border-[#121212] p-8 md:p-12 bg-white relative overflow-hidden">
               
               <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-1/3">
                     <div className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] text-[#8B2520] mb-4">Nevronix Contract Analyzer</div>
                     <h3 className="text-3xl font-black tracking-tighter uppercase leading-none mb-6">Scanare<br/>Clauze.</h3>
                     <p className="text-sm font-medium text-[#121212]/70 leading-relaxed mb-6">
                        Sistemul nostru AI analizează contractele în câteva secunde, depistând vulerabilități legale și raportându-le automat avocaților parteneri. Reduce timpul de audit cu 95%.
                     </p>
                     
                     <div className="border-l-2 border-[#8B2520] pl-4 mt-8">
                        <div className="text-xs font-bold uppercase mb-1 text-[#121212]">Status Motor Nevronix</div>
                        <div className="text-[10px] font-mono blinking-text text-[#8B2520]">Așteaptă input lexical...</div>
                     </div>
                  </div>
                  
                  <div className="md:w-2/3 border-t-2 md:border-t-0 md:border-l-2 border-[#121212] pt-8 md:pt-0 md:pl-10 relative">
                     {isScanning && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                           <div className="w-full h-1 bg-[#8B2520] shadow-[0_0_15px_#8B2520] absolute animate-[scan-laser_1.5s_linear_infinite]"></div>
                        </div>
                     )}
                     
                     <textarea 
                        value={contractText}
                        onChange={e => setContractText(e.target.value)}
                        placeholder="Introduceți fragmentul de contract comercial aici... (Cuvinte cheie de test: penalitate, reziliere, unilateral)"
                        className="w-full h-32 p-4 bg-[#E5E5E5]/50 border-2 border-[#121212]/20 focus:border-[#121212] outline-none resize-none font-mono text-xs text-[#121212] mb-4 transition"
                     ></textarea>
                     
                     <button onClick={handleScan} disabled={isScanning} className="bg-[#121212] text-[#E5E5E5] px-8 py-3 font-bold uppercase text-[11px] tracking-widest hover:bg-[#8B2520] transition disabled:opacity-50 flex items-center justify-center gap-3 w-full md:w-auto">
                        {isScanning ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sincronizare AI...
                          </>
                        ) : 'Rulați Analizatorul Juridic'}
                     </button>

                     {scanResult && (
                        <div className="mt-6 border-l-4 border-[#8B2520] bg-white p-5 animate-[text-reveal-up_0.4s_ease-out]">
                           <div className="flex justify-between items-center mb-2">
                              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#121212]/50">Rezultat Evaluare</span>
                              <span className={`font-mono text-xs font-black uppercase tracking-widest ${scanResult.risk === 'CRITIC' ? 'text-[#8B2520]' : scanResult.risk === 'MEDIU' ? 'text-amber-600' : 'text-green-600'}`}>
                                 RISC {scanResult.risk}
                              </span>
                           </div>
                           <p className="font-bold text-sm text-[#121212]">{scanResult.flagged}</p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Data Modules */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 border-t-2 border-[#121212] pt-10 opacity-0 animate-[text-reveal-up_0.8s_ease-out_1s_forwards]">
            
            <div className="flex flex-col">
               <div className="font-mono text-[10px] text-[#121212]/50 uppercase tracking-[0.2em] mb-2 font-bold">Rată Succes Litigii</div>
               <div className="text-6xl font-black tracking-tighter text-[#8B2520]">98.7%</div>
               <p className="mt-5 text-[15px] font-medium leading-relaxed max-w-sm text-[#121212]/80">
                  Nu acceptăm cazuri pentru a testa teritoriul. Executăm logica legală cu forță brută și instrumente AI pentru a asigura dreptatea.
               </p>
            </div>

            <div className="flex flex-col md:border-l-2 border-[#121212]/20 md:pl-8">
               <div className="font-mono text-[10px] text-[#121212]/50 uppercase tracking-[0.2em] mb-2 font-bold">Dosare Analizate AI [2024]</div>
               <div className="text-6xl font-black tracking-tighter text-[#121212]">1024</div>
               <p className="mt-5 text-[15px] font-medium leading-relaxed max-w-sm text-[#121212]/80">
                  Arbitraj Comercial. Drept Corporativ. Fuziuni și Achiziții. Sute de mii de pagini procesate și verificate impecabil.
               </p>
            </div>

            <div className="flex flex-col items-start md:items-end justify-end md:text-right md:border-l-2 border-[#121212]/20 md:pl-8 mt-10 md:mt-0">
               <Link href="/showcase" className="border-b-2 border-[#121212] pb-1 font-bold text-sm uppercase tracking-widest hover:text-[#8B2520] hover:border-[#8B2520] transition">
                 ← Showcase Matrix
               </Link>
               <div className="mt-8 font-mono text-[10px] font-bold text-[#121212]/30 tracking-widest uppercase">
                  LEGAL.SYS // SECURE CONNECTION
               </div>
            </div>

         </div>

      </main>
    </div>
  );
}
