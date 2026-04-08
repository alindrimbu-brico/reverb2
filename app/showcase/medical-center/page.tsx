"use client";

import { useState } from "react";
import ShowcaseAIAgent from "@/components/ShowcaseAIAgent";

export default function MedicalCenterShowcase() {
  const [symptom, setSymptom] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [triageResult, setTriageResult] = useState<{ priority: string, doctor: string, recommended_action: string } | null>(null);

  const handleTriage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptom) return;
    setIsProcessing(true);
    setTriageResult(null);

    setTimeout(() => {
      let result = { priority: "SCAZUT", doctor: "Consultație Generală", recommended_action: "Programare Medicină de Familie" };
      
      const lowerSymptom = symptom.toLowerCase();
      if (lowerSymptom.includes("durere") && lowerSymptom.includes("cap")) {
        result = { priority: "MODERAT", doctor: "Dr. M. Andrei — Neuro.", recommended_action: "Programare Consultație Neurologie și eventual RM Cranian" };
      } else if (lowerSymptom.includes("inima") || lowerSymptom.includes("piept") || lowerSymptom.includes("stang")) {
        result = { priority: "CRITIC", doctor: "Camera de Gardă Cardio", recommended_action: "Prezentare imediată la Urgențe Cardio" };
      } else if (lowerSymptom.includes("picior") || lowerSymptom.includes("mana") || lowerSymptom.includes("fractura")) {
        result = { priority: "MODERAT", doctor: "Ortopedie Triage", recommended_action: "Radiografie de urgență." };
      }

      setTriageResult(result);
      setIsProcessing(false);
    }, 2500);
  }

  return (
    <div className="min-h-screen bg-white text-[#0A0A0B] selection:bg-[#0057FF] selection:text-white"
         style={{
           backgroundImage: 'linear-gradient(rgba(0,87,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,87,255,0.04) 1px, transparent 1px)',
           backgroundSize: '4rem 4rem',
         }}>
         
      <style>{`
        @keyframes scan-white { 0% { transform: translateY(-10px); opacity: 0; } 5% { opacity: 1; } 90% { transform: translateY(100vh); opacity: 0.1; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes text-reveal { to { opacity: 1; transform: translateY(0); } }
        @keyframes wireframe-spin { from { transform: rotateY(0deg) rotateX(20deg); } to { transform: rotateY(360deg) rotateX(20deg); } }
      `}</style>

      {/* Universal Showcase AI Agent */}
      <ShowcaseAIAgent industryContext="medical" />

      <div className="relative overflow-hidden before:absolute before:inset-0 before:h-[2px] before:w-full before:bg-[#0057FF] before:shadow-[0_0_15px_#0057FF] before:animate-[scan-white_1.5s_cubic-bezier(0.86,0,0.07,1)_forwards] before:z-50 before:pointer-events-none">
        
        {/* Header Telemetry */}
        <header className="sticky top-0 z-40 h-16 grid grid-cols-12 border-b border-[#0057FF]/10 bg-white/70 backdrop-blur-xl">
          <div className="col-span-12 md:col-span-4 lg:col-span-3 border-r border-[#0057FF]/10 px-6 flex items-center bg-white">
            <span className="w-1.5 h-1.5 bg-[#0057FF] mr-2"></span>
            <span className="font-mono text-xs font-bold text-[#0A0A0B] uppercase tracking-widest">SYS.BIO_INTERFACE</span>
          </div>
          <div className="hidden md:flex md:col-span-5 lg:col-span-6 border-r border-[#0057FF]/10 px-6 items-center gap-8">
            {['Corp Medical', 'Expertiză', 'Cazuri Clinice'].map(link => (
              <a key={link} href="#" className="font-mono text-[10px] text-[#0A0A0B]/50 hover:text-[#0057FF] tracking-widest uppercase transition">
                {link}
              </a>
            ))}
          </div>
          <div className="col-span-12 hidden md:flex md:col-span-3 lg:col-span-3 items-center justify-end px-6 bg-[#0057FF] text-white">
             <span className="font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                Urgență 24/7
             </span>
          </div>
        </header>

        {/* Main Interface Layout */}
        <main className="grid grid-cols-12 min-h-[calc(100vh-64px)]">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 p-8 lg:p-20 flex flex-col justify-center bg-white/40">
            <div className="mb-6 flex items-center font-mono text-[11px] text-[#0057FF] uppercase tracking-[0.2em] opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.2s_forwards]">
              {">"} DIAGNOSTIC_RMN_CORE_INITIALIZED
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-medium leading-[0.95] tracking-[-0.04em] opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.4s_forwards] mb-12">
              Precizie clinică.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#60A5FA]">Eroare zero.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#0057FF]/10 pt-10 opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.5s_forwards]">
               <div>
                  <h3 className="font-mono text-xs font-bold text-[#0A0A0B] uppercase tracking-widest mb-3">Tehnologie High-End</h3>
                  <p className="text-[15px] text-[#0A0A0B]/60 leading-relaxed font-sans">
                     Nu ne bazăm doar pe experiență clinică, ci pe analiza datelor medicale folosind echipamente RMN și CT de ultimă generație. Protocol standardizat.
                  </p>
               </div>
               <div>
                  <h3 className="font-mono text-xs font-bold text-[#0A0A0B] uppercase tracking-widest mb-3">Triage Inteligent AI</h3>
                  <p className="text-[15px] text-[#0A0A0B]/60 leading-relaxed font-sans">
                     Sistemul Nevronix Triage pre-evaluează pacientul înainte de prezentarea la recepție. Prioritare obiectivă.
                  </p>
               </div>
            </div>

            {/* Live Ticker Area */}
            <div className="mt-16 bg-[#0A0A0B] text-white p-6 rounded-2xl opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.6s_forwards] border border-[#0057FF]/30 shadow-2xl">
               <div className="font-mono text-[10px] uppercase tracking-widest mb-4 flex justify-between items-center text-[#0057FF]">
                  <span>Live_Status</span>
                  <span>Sistem Activ</span>
               </div>
               <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                     <span className="text-white/60">Dr. M. Andrei — Neuro.</span>
                     <span className="text-[#00ffcc]">DISPONIBIL_ÎN_20_MIN</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                     <span className="text-white/60">Sala Operații [A4]</span>
                     <span className="text-[#0057FF]">ACTIVĂ</span>
                  </div>
                  <div className="flex justify-between items-center pb-1">
                     <span className="text-white/60">Sistem AI Nevronix</span>
                     <span className="text-white">ONLINE</span>
                  </div>
               </div>
            </div>
            
            <div className="mt-10 opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.7s_forwards]">
               <a href="/showcase" className="inline-block text-xs font-mono text-[#0057FF] hover:text-[#0A0A0B] transition">← Showcase Matrix</a>
            </div>
          </div>

          {/* Panel 2 (AI Triage Simulator) */}
          <div className="col-span-12 lg:col-span-4 border-l border-[#0057FF]/10 bg-white relative p-8 flex flex-col justify-center items-center overflow-hidden">
             
             {/* Abstract Wireframe Sphere pure CSS */}
             <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 mb-12 opacity-50 pointer-events-none" style={{ perspective: '1000px' }}>
                <div className="absolute inset-0 w-full h-full animate-[wireframe-spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                   {Array.from({length: 6}).map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-full border border-[#0057FF]/20" style={{ transform: `rotateY(${i * 30}deg)` }}></div>
                   ))}
                   {Array.from({length: 6}).map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-full border border-[#0057FF]/20" style={{ transform: `rotateX(${i * 30}deg)` }}></div>
                   ))}
                </div>
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#0057FF] to-[#60A5FA] rounded-full blur-xl opacity-30"></div>
             </div>
             
             <div className="w-full z-10 bg-white/90 p-8 backdrop-blur-md border border-[#0057FF]/10 rounded-2xl shadow-xl mt-32 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0A0A0B] text-white px-4 py-1 rounded-full shadow-lg">
                   <div className="w-1 h-1 bg-[#0057FF] rounded-full animate-pulse"></div>
                   <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase">AI Triage Module</span>
                </div>
                
                <h3 className="text-xl font-medium tracking-tight mb-4 text-[#0A0A0B] text-center mt-2">Ce simptome aveți?</h3>
                <p className="text-xs text-center text-[#0A0A0B]/50 mb-6">Un asistent AI evaluează gradul de urgență și pre-alocă medicul corespunzător.</p>

                <form onSubmit={handleTriage} className="flex flex-col gap-4">
                  <textarea 
                    value={symptom}
                    onChange={e => setSymptom(e.target.value)}
                    placeholder="Ex: Mă doare capul foarte tare de 3 zile..."
                    className="w-full h-24 p-3 bg-[#f5f5f7] border border-[#0057FF]/20 rounded-lg outline-none focus:border-[#0057FF]/60 text-sm font-sans resize-none disabled:opacity-50"
                    disabled={isProcessing}
                  />
                  <button type="submit" disabled={isProcessing || !symptom} className="w-full bg-[#0057FF] hover:bg-[#0040DD] disabled:bg-[#0057FF]/50 text-white py-3 font-mono text-[11px] font-bold uppercase tracking-widest transition rounded-lg flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(0,87,255,0.2)]">
                    {isProcessing ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Asteptati analiza...
                      </>
                    ) : 'Rulează Evaluarea'}
                  </button>
                </form>

                {triageResult && (
                  <div className="mt-6 p-4 bg-[#f1f5f9] border border-[#0057FF]/20 rounded-lg animate-[fadeIn_0.5s_ease-out]">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-[#0A0A0B]/60 font-mono uppercase tracking-widest">Prioritate:</span>
                        <span className={`text-xs font-bold font-mono tracking-widest uppercase ${triageResult.priority === 'CRITIC' ? 'text-red-600' : triageResult.priority === 'MODERAT' ? 'text-amber-500' : 'text-green-600'}`}>
                           [{triageResult.priority}]
                        </span>
                     </div>
                     <div className="space-y-2">
                        <div>
                          <span className="text-[10px] text-[#0A0A0B]/50 font-mono uppercase tracking-widest">Alocare medic:</span>
                          <p className="text-sm font-medium">{triageResult.doctor}</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#0A0A0B]/50 font-mono uppercase tracking-widest">Acțiune sistem:</span>
                          <p className="text-sm font-medium text-[#0057FF]">{triageResult.recommended_action}</p>
                        </div>
                     </div>
                  </div>
                )}
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
