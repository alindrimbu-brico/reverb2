import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.EXTRACTION_LAB | Artisan Cafe Showcase",
};

export default function ArtisanCafeShowcaseEN() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D64933] selection:text-[#050505]" 
         style={{
           backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
           backgroundSize: '4rem 4rem',
         }}>
         
      <style>{`
        @keyframes pulse-ping { 0% { opacity: 1; box-shadow: 0 0 0 0 #D64933; } 50% { opacity: 0.2; } 100% { opacity: 1; box-shadow: 0 0 0 6px transparent; } }
        @keyframes scan-vertical { 0% { transform: translateY(-10px); opacity: 0; } 5% { opacity: 1; } 90% { transform: translateY(100vh); opacity: 0.8; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes text-reveal { to { opacity: 1; transform: translateY(0); } }
      `}</style>
      
      <div className="relative overflow-hidden before:absolute before:inset-0 before:h-[2px] before:w-full before:bg-[#D64933] before:shadow-[0_0_12px_#D64933] before:animate-[scan-vertical_1.5s_cubic-bezier(0.86,0,0.07,1)_forwards] before:z-50 before:pointer-events-none">
        
        {/* Header Telemetry */}
        <header className="sticky top-0 z-40 h-16 grid grid-cols-12 border-b border-white/15 bg-[#050505] backdrop-blur-md">
          <div className="col-span-12 md:col-span-3 lg:col-span-2 border-r border-white/15 px-6 flex items-center">
            <span className="w-1.5 h-1.5 bg-[#D64933] mr-2 animate-[pulse-ping_2s_infinite]"></span>
            <span className="font-mono text-xs font-bold text-white/80">SYS.EX_LAB</span>
          </div>
          <div className="hidden md:flex md:col-span-5 lg:col-span-6 border-r border-white/15 px-6 items-center gap-8">
            {['Product Index', 'Roasting Metrics', 'Analytics'].map(link => (
              <a key={link} href="#" className="relative font-mono text-[10px] md:text-xs text-white/50 hover:text-white transition group pb-0.5 uppercase tracking-wider">
                {link}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#D64933] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="col-span-12 hidden md:flex md:col-span-4 lg:col-span-4 px-6 items-center justify-between">
            <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">v. 4.09.2-PROD</span>
            <button className="border border-white/30 px-4 py-2 font-mono text-[10px] font-bold tracking-wider hover:bg-white hover:text-black transition uppercase">
              Initialize_Order
            </button>
          </div>
        </header>

        {/* Main Interface Layout */}
        <main className="grid grid-cols-12 border-b border-white/15 min-h-[calc(100vh-64px)]">
          {/* Panel 1 (Rotated Meta) */}
          <div className="hidden lg:flex lg:col-span-2 border-r border-white/15 relative bg-white/[0.01]">
             <div className="absolute left-8 bottom-20 -rotate-90 origin-bottom-left whitespace-nowrap">
               <span className="font-mono text-[11px] tracking-[0.2em] text-[#D64933]">EXPECTATION_MET_LOG: 100% // YIRGACHEFFE_PROFILE</span>
             </div>
          </div>

          {/* Panel 2 (Scientific Feed) */}
          <div className="col-span-12 lg:col-span-6 p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-6 flex items-center text-[#D64933] font-mono text-[11px] uppercase tracking-[0.15em] opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.2s_forwards]">
              {">"} DATA_STREAM.ACTIVE // THERMAL_INITIALIZATION
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[0.9] tracking-[-0.04em] uppercase opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.4s_forwards]">
              Caffeine as<br />Exact<br /><span className="text-[#D64933]">Science.</span>
            </h1>
            
            <p className="mt-10 max-w-md text-base md:text-lg text-white/50 leading-relaxed font-sans opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.5s_forwards]">
              We leave nothing to chance. You take control through perfectly architected thermodynamic protocols — extracting the maximum chemical potential of each batch. The web interface works for conversion.
            </p>
            
            {/* System Logs Data Table */}
            <div className="mt-16 w-full border-t border-white/15 pt-2 opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.6s_forwards]">
              <div className="grid grid-cols-4 px-2 py-4 mb-2">
                <div className="col-span-2 font-mono text-[9px] text-white/40 uppercase tracking-[0.1em]">Origin_Beans</div>
                <div className="font-mono text-[9px] text-white/40 uppercase tracking-[0.1em]">Optimal_Temp</div>
                <div className="font-mono text-[9px] text-white/40 uppercase tracking-[0.1em] text-right">Status</div>
              </div>
              
              {[
                { o: "ETHIOPIA YIRGACHEFFE [LOT.01]", t: "93.4 °C", s: "READY", active: true },
                { o: "COLOMBIA HUILA [LOT.02]", t: "91.8 °C", s: "CALIBRATION", active: false },
                { o: "KENYA AA GRAND [LOT.03]", t: "94.2 °C", s: "WAITING", active: false }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 px-2 py-5 border-b border-white/10 items-center">
                   <div className="col-span-2 font-mono text-xs text-white/80">{row.o}</div>
                   <div className="font-mono text-xs text-white/60">{row.t}</div>
                   <div className={`font-mono text-xs font-bold text-right ${row.active ? 'text-[#D64933]' : 'text-white/25'}`}>{row.s}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 opacity-0 translate-y-2 animate-[text-reveal_0.8s_ease-out_0.7s_forwards]">
               <a href="/en/showcase" className="inline-block text-xs font-mono text-white/30 hover:text-white transition">← Return to Showcase Matrix</a>
            </div>
          </div>

          {/* Panel 3: Orange Industrial Brutalist Block */}
          <div className="col-span-12 lg:col-span-4 border-l border-white/15 bg-[#D64933] text-[#050505] p-8 lg:p-16 relative flex flex-col justify-between overflow-hidden">
             {/* Architectural Blueprint lines */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-black/10 z-0"></div>
             <div className="absolute left-1/2 top-[-50vh] w-px h-[200vh] bg-black/10 z-0"></div>

             <div className="relative z-10">
               <div className="font-mono text-[11px] font-bold mb-1 opacity-70">Build_Identifier:</div>
               <div className="font-mono text-2xl lg:text-3xl font-bold tracking-tight">EXTR-4.09.2</div>
             </div>

             <div className="relative z-10 font-sans text-[clamp(10rem,16vw,18rem)] font-bold leading-[0.75] tracking-tighter text-right opacity-95 indent-0 transform translate-x-4">
               EX
             </div>

             <div className="relative z-10 flex flex-col gap-6 w-full">
               <div className="border border-black/15 p-4 rounded-sm bg-black/[0.02]">
                  <div className="font-mono text-[10px] font-bold mb-2">SYSTEM DATA [LIVE]</div>
                  <ul className="font-mono text-[9px] leading-relaxed opacity-60 space-y-1">
                    <li className="flex justify-between"><span>Replication_Seed</span><span>0.982</span></li>
                    <li className="flex justify-between"><span>Validation_Cycle</span><span>PASS</span></li>
                    <li className="flex justify-between"><span>Thermal_Coverage</span><span>100%</span></li>
                  </ul>
               </div>
               
               <button className="w-full border-2 border-transparent bg-[#050505] px-4 py-4 font-mono text-[11px] font-bold text-white hover:bg-transparent hover:border-[#050505] hover:text-[#050505] transition uppercase tracking-widest shadow-lg">
                 Run_Diagnostics 
               </button>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
