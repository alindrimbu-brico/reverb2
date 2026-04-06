import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.BIO_INTERFACE | Medical Center Showcase",
};

export default function MedicalCenterShowcase() {
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
                  <h3 className="font-mono text-xs font-bold text-[#0A0A0B] uppercase tracking-widest mb-3">Rezultate Imediate</h3>
                  <p className="text-[15px] text-[#0A0A0B]/60 leading-relaxed font-sans">
                     Sistemul digital Bio-Interface transmite imagistica către medicii primari în timp real. Timp de diagnostic redus cu 40%.
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
                     <span className="text-white/60">Aparat RMN 3T</span>
                     <span className="text-white">STANDBY</span>
                  </div>
               </div>
            </div>
            
            <div className="mt-10 opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.7s_forwards]">
               <a href="/showcase" className="inline-block text-xs font-mono text-[#0057FF] hover:text-[#0A0A0B] transition">← Showcase Matrix</a>
            </div>
          </div>

          {/* Panel 2 (White Sterility & Wireframe effect) */}
          <div className="col-span-12 lg:col-span-4 border-l border-[#0057FF]/10 bg-white relative p-8 flex flex-col justify-center items-center overflow-hidden">
             
             {/* Abstract Wireframe Sphere pure CSS */}
             <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12" style={{ perspective: '1000px' }}>
                <div className="absolute inset-0 w-full h-full animate-[wireframe-spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                   {Array.from({length: 6}).map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-full border border-[#0057FF]/20" style={{ transform: `rotateY(${i * 30}deg)` }}></div>
                   ))}
                   {Array.from({length: 6}).map((_, i) => (
                      <div key={i} className="absolute inset-0 rounded-full border border-[#0057FF]/20" style={{ transform: `rotateX(${i * 30}deg)` }}></div>
                   ))}
                </div>
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#0057FF] to-[#60A5FA] rounded-full blur-xl opacity-50"></div>
             </div>
             
             <div className="text-center w-full z-10 bg-white/80 p-6 backdrop-blur-sm border border-[#0057FF]/10 rounded-2xl">
                <div className="font-mono text-[10px] text-[#0057FF] mb-2 font-bold tracking-[0.2em] uppercase">Setează o examinare</div>
                <div className="text-2xl font-medium tracking-tight mb-6">Programări RMN</div>
                <button className="w-full bg-[#0057FF] hover:bg-[#0040DD] text-white py-4 font-mono text-[11px] font-bold uppercase tracking-widest transition rounded-lg shadow-[0_10px_20px_rgba(0,87,255,0.2)]">
                  Inițializare Acces
                </button>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
