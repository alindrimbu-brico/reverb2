import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.CARGO | Logistics Hub Showcase",
};

export default function LogisticsHubShowcase() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-[#E2E8F0] font-mono selection:bg-[#1D4ED8] selection:text-white pb-20">
      
      {/* Deep grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{
         backgroundImage: 'linear-gradient(rgba(29, 78, 216, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 78, 216, 0.2) 1px, transparent 1px)',
         backgroundSize: '40px 40px'
      }}></div>

      <header className="relative z-10 flex justify-between items-center p-6 border-b border-[#1D4ED8]/30 bg-[#0A0D14]/80 backdrop-blur-md">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#1D4ED8] text-white flex items-center justify-center font-bold text-xl rounded-sm">
               L
            </div>
            <div>
               <div className="font-bold text-sm tracking-widest uppercase">LOG.NET</div>
               <div className="text-[10px] text-[#1D4ED8] tracking-widest mt-0.5">GLOBAL FREIGHT SYSTEMS</div>
            </div>
         </div>
         <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-white transition">Track & Trace</a>
            <a href="#" className="hover:text-white transition">Fleet Status</a>
            <a href="/showcase" className="text-[#1D4ED8] hover:text-white transition">Matrix Return</a>
         </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
         
         <div className="mb-12 border-l-4 border-[#1D4ED8] pl-6 text-white/80">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">
               Monitorizare<br/>Flotă în Timp Real.
            </h1>
            <p className="text-sm font-sans max-w-xl leading-relaxed">
               Lanțul logistic funcționează exact ca un cod bine scris: eficiență, previzibilitate, rigoare. Vizualizați terminalele globale cu 0 latență.
            </p>
         </div>

         {/* Airport-style Departures Table */}
         <div className="bg-[#05080F] border border-[#1D4ED8]/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(29,78,216,0.1)]">
            
            <div className="grid grid-cols-12 bg-[#1D4ED8]/10 text-[#1D4ED8] text-[9px] uppercase tracking-widest font-bold border-b border-[#1D4ED8]/20 p-4">
               <div className="col-span-2">Vessel / Flight</div>
               <div className="col-span-3">Destination</div>
               <div className="col-span-2">ETD</div>
               <div className="col-span-3">Cargo Type</div>
               <div className="col-span-2 text-right">Status</div>
            </div>

            <div className="divide-y divide-[#1D4ED8]/10">
               {[
                  { v: "MSC-089A", d: "SHANGHAI_CHN", t: "14:30 EST", c: "Elec. Components", s: "ON_TIME", color: "text-green-500" },
                  { v: "FX-7722", d: "FRANKFURT_DEU", t: "16:45 EST", c: "Medical Equip.", s: "DEPARTED", color: "text-blue-500" },
                  { v: "CMA-V22", d: "ROTTERDAM_NLD", t: "18:00 EST", c: "Raw Materials", s: "DELAYED", color: "text-[#EF4444]" },
                  { v: "LH-Cargo", d: "DUBAI_UAE", t: "20:15 EST", c: "Luxury Goods", s: "LOADING", color: "text-[#F59E0B]" },
                  { v: "MSC-089B", d: "SINGAPORE_SGP", t: "23:00 EST", c: "Elec. Components", s: "SCHEDULED", color: "text-white/50" },
               ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 p-4 text-[11px] items-center hover:bg-white/5 transition border-l-2 border-transparent hover:border-[#1D4ED8]">
                     <div className="col-span-2 font-bold text-white">{row.v}</div>
                     <div className="col-span-3 text-white/70">{row.d}</div>
                     <div className="col-span-2">{row.t}</div>
                     <div className="col-span-3 text-white/50">{row.c}</div>
                     <div className={`col-span-2 text-right font-bold ${row.color}`}>{row.s}</div>
                  </div>
               ))}
            </div>

            <div className="p-4 bg-black/40 border-t border-[#1D4ED8]/20 flex justify-between items-center text-[10px] text-white/40">
               <div>LAST_UPDATE: {new Date().toISOString().split('T')[1].slice(0,8)}</div>
               <button className="border border-[#1D4ED8]/30 px-6 py-2 hover:bg-[#1D4ED8]/20 hover:text-white transition rounded-sm text-[#1D4ED8] font-bold">
                  REFRESH TICKET
               </button>
            </div>
         </div>

      </main>
    </div>
  );
}
