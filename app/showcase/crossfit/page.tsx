import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.SWEAT | CrossFit Showcase",
};

export default function GymShowcase() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans overflow-hidden selection:bg-[#EA580C] selection:text-white">
      
      {/* Giant Background Type */}
      <div className="fixed -left-10 top-20 text-[20vw] font-black italic tracking-tighter text-white/[0.02] leading-none pointer-events-none whitespace-nowrap">
         DO THE WORK
      </div>

      <header className="relative z-10 p-6 lg:p-10 flex justify-between items-center border-b-[8px] border-[#EA580C]">
         <div className="text-3xl font-black italic tracking-tighter uppercase">IRON<span className="text-[#EA580C]">CLUB.</span></div>
         <a href="/showcase" className="uppercase font-bold text-[10px] tracking-widest hover:text-[#EA580C] transition">
            ← Matrix Return
         </a>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
         
         <div className="flex flex-col justify-center">
            
            <h1 className="text-6xl md:text-[100px] font-black italic uppercase leading-[0.8] tracking-tighter mb-8 transform -skew-x-6">
               <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>DUREREA</span><br/>
               E SLĂBICIUNEA<br/>
               CARE <span className="text-[#EA580C] underline decoration-[#EA580C]/30 decoration-8 underline-offset-[-4px]">PLEACĂ.</span>
            </h1>
            
            <p className="text-lg text-gray-400 font-bold max-w-sm mb-12 uppercase italic pt-4 border-t border-gray-800 border-dashed">
               Lăudăm doar rezultatele. Brutal. Fără compromisuri. Sala funcțională unde nu găsești oglinzi, ci fier.
            </p>

            <button className="self-start text-black bg-[#EA580C] font-black text-2xl uppercase italic px-12 py-5 transform -skew-x-12 hover:bg-white hover:translate-x-2 transition-all">
               <div className="transform skew-x-12">Începe Antrenamentul</div>
            </button>
         </div>

         {/* Right side schedule UI */}
         <div className="border border-white/10 bg-white/5 p-8 flex flex-col justify-between">
            <div>
               <div className="font-bold text-[#EA580C] mb-8 font-mono text-sm tracking-widest uppercase flex justify-between items-center">
                  <span>WOD Schedule</span>
                  <span className="w-2 h-2 bg-[#EA580C] animate-pulse"></span>
               </div>

               <div className="space-y-4 font-mono font-bold uppercase text-sm">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="opacity-50">06:00 AM</span>
                     <span className="text-white">Strength & Cond.</span>
                     <span className="text-[#EA580C]">FULL</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="opacity-50">12:00 PM</span>
                     <span className="text-white">Olympic Lifting</span>
                     <span className="text-green-500">2 LOCURI</span>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                     <span className="opacity-50">18:00 PM</span>
                     <span className="text-white">MetCon</span>
                     <span className="text-green-500">OPEN</span>
                  </div>
               </div>
            </div>
            
            <div className="mt-12 text-[#EA580C] text-[100px] font-black italic tracking-tighter leading-none opacity-20 transform -skew-x-12 relative -bottom-10 right-0 text-right">
               04
            </div>
         </div>

      </main>
    </div>
  );
}
