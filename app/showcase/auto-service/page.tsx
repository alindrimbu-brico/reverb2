import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.APEX | Auto Service Showcase",
};

export default function AutoServiceShowcase() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#FBBF24] selection:text-[#111]">
      
      {/* Carbon fiber texture background */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{
         backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
         backgroundSize: '4px 4px'
      }}></div>

      <header className="relative z-10 w-full flex justify-between items-center p-6 border-b-4 border-[#FBBF24] bg-black">
         <div className="uppercase font-black text-2xl italic tracking-tighter flex items-center gap-2">
            APEX <span className="text-[#FBBF24]">MOTORSPORT</span>
         </div>
         <a href="/showcase" className="uppercase font-bold text-xs tracking-widest hover:text-[#FBBF24] transition">
            ← Return to Grid
         </a>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
         
         <div className="lg:col-span-7 flex flex-col justify-center py-20 lg:pr-12">
            <div className="inline-block bg-[#FBBF24] text-[#111] font-black italic uppercase px-4 py-1 text-xs tracking-widest mb-8 self-start transform -skew-x-12">
               Performanță Brută. Străzile Cer Mai Mult.
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
               TUNE.<br/>RACE.<br/>WIN.
            </h1>
            
            <p className="text-lg text-gray-400 font-medium max-w-md border-l-4 border-[#FBBF24] pl-6 mb-12">
               Nu facem mentenanță de rutină. Rescriem softuri, reconstruim motoare și transformăm ozelul rigid într-un instrument chirurgical pentru circuit.
            </p>

            <div className="flex gap-4">
               <button className="bg-[#FBBF24] text-black font-black uppercase italic px-8 py-4 tracking-widest hover:bg-white transition transform -skew-x-12 relative overflow-hidden group">
                  <span className="relative z-10 w-[200px]">Rezervă Stand</span>
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></div>
               </button>
            </div>
         </div>

         {/* Graphic Element - Tachometer / Gauge concept */}
         <div className="lg:col-span-5 relative flex flex-col justify-center items-center py-20 border-l border-gray-800 lg:pl-12">
            
            <div className="w-full max-w-md aspect-square rounded-full border-[12px] border-gray-900 border-t-[#FBBF24] relative flex items-center justify-center transform -rotate-45">
               <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-800 m-8"></div>
               
               <div className="rotate-45 text-center flex flex-col items-center">
                  <span className="text-6xl font-black italic tracking-tighter">8,500</span>
                  <span className="text-[#FBBF24] font-black uppercase text-xs tracking-widest mt-1">RPM LIMIT</span>
               </div>

               {/* Needle */}
               <div className="absolute top-1/2 left-1/2 w-[40%] h-1 bg-[#FBBF24] origin-left rotate-[160deg] shadow-[0_0_10px_#FBBF24]"></div>
            </div>

            <div className="absolute bottom-10 left-12 lg:left-24 font-mono text-[10px] text-gray-600 uppercase">
               Dyno_Status: <span className="text-green-500">ONLINE</span><br/>
               Current_Torque: 624 NM
            </div>

         </div>

      </div>
    </div>
  );
}
