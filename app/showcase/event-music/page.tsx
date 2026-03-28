import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SYS.FESTIVAL | Event Promo Showcase",
};

export default function EventPromoShowcase() {
  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans overflow-hidden selection:bg-[#EC4899] selection:text-white">
      
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes blob-spin { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(1.1); } 100% { transform: rotate(360deg) scale(1); } }
      `}</style>
      
      {/* Liquid Magenta Blob Background */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40 mix-blend-screen filter blur-[100px]">
         <div className="w-[60vw] h-[60vw] bg-gradient-to-tr from-[#EC4899] via-[#8B5CF6] to-[#3B82F6] rounded-full animate-[blob-spin_20s_infinite_linear]"></div>
      </div>

      <header className="relative z-20 p-6 md:p-10 flex justify-between items-center mix-blend-difference">
         <div className="text-2xl font-black italic tracking-tighter uppercase leading-none">
            ECHO<br/>SYSTEM
         </div>
         <div className="flex gap-4">
            <button className="bg-white text-black font-black uppercase text-xs px-6 py-2.5 rounded-full hover:scale-105 transition-transform">
               Buy Tickets
            </button>
         </div>
      </header>

      {/* Kinetic Typography Marquee */}
      <div className="relative z-10 min-h-[70vh] flex flex-col justify-center transform -rotate-6 scale-110">
         
         <div className="flex whitespace-nowrap overflow-hidden py-4 border-y border-white/10 bg-black/50 backdrop-blur-sm">
            <div className="flex animate-[marquee_20s_linear_infinite]">
               {[...Array(6)].map((_, i) => (
                  <div key={i} className="text-[12vw] font-black italic uppercase tracking-tighter text-transparent mr-10" style={{ WebkitTextStroke: '2px white' }}>
                     FEEL THE PULSE. <span className="text-[#EC4899] mix-blend-screen" style={{ WebkitTextStroke: '0px' }}>LIVE EVENT_</span>
                  </div>
               ))}
            </div>
         </div>

         <div className="flex whitespace-nowrap overflow-hidden py-4 bg-[#EC4899]/80 backdrop-blur-sm">
            <div className="flex animate-[marquee_25s_linear_infinite_reverse]">
               {[...Array(6)].map((_, i) => (
                  <div key={i} className="text-[16vw] font-black indent-0 leading-[0.8] uppercase tracking-tighter text-black mr-12">
                     BUCHAREST 2024
                  </div>
               ))}
            </div>
         </div>

         <div className="flex whitespace-nowrap overflow-hidden py-4 border-b border-white/10 bg-black/50 backdrop-blur-sm">
            <div className="flex animate-[marquee_15s_linear_infinite]">
               {[...Array(10)].map((_, i) => (
                  <div key={i} className="text-[5vw] font-mono font-bold uppercase tracking-widest text-white/50 mr-12">
                     LineUp: <span className="text-white">HEADLINER 01</span> // <span className="text-white">ARTIST 02</span> // <span className="text-white">DJ SET 03</span> //
                  </div>
               ))}
            </div>
         </div>
         
      </div>

      <div className="relative z-20 flex justify-center pb-20 mt-12">
         <Link href="/showcase" className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] border border-white/20 rounded-full px-6 py-3 bg-white/5 hover:bg-white hover:text-black transition backdrop-blur-md">
            [ Return to Matrix ]
         </Link>
      </div>

    </div>
  );
}
