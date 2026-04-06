import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.NOIR | Fine Dining Showcase",
};

export default function FineDiningShowcaseEN() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C181A] font-serif selection:bg-[#2C181A] selection:text-[#FDFBF7]">
      
      {/* Texture wrapper */}
      <div className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply" style={{
         backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")'
      }}></div>

      <div className="max-w-6xl mx-auto px-8 lg:px-16 flex flex-col min-h-screen relative z-10 border-l border-r border-[#2C181A]/10">
         
         <header className="py-12 flex justify-between items-center bg-[#FDFBF7]">
            <div className="text-2xl tracking-widest uppercase">E L O Q U E</div>
            <nav className="font-sans text-[9px] uppercase tracking-[0.3em] font-medium hidden md:flex gap-10">
               <a href="#" className="hover:opacity-50 transition">The Menu</a>
               <a href="#" className="hover:opacity-50 transition">The Cellar</a>
               <a href="/en/showcase" className="border-b border-[#2C181A] pb-0.5">Matrix Return</a>
            </nav>
         </header>

         <main className="flex-1 flex flex-col xl:flex-row pb-20 items-center justify-between gap-16">
            
            <div className="xl:w-1/2 flex flex-col justify-center">
               <div className="font-sans text-[10px] uppercase tracking-[0.2em] mb-8 text-[#2C181A]/60">Est. 2024 / Bucharest</div>
               
               <h1 className="text-[4rem] lg:text-[6rem] leading-[0.9] tracking-[-0.02em] font-light mb-10">
                  Taste<br/>Reduced to<br/>Essence.
               </h1>
               
               <p className="font-sans text-sm leading-relaxed max-w-sm text-[#2C181A]/80 mb-12 font-light">
                  Ingredients treated with absolute respect. Fire, time, and the absence of compromise. An evening experience composed like a sonata where silence dictates the rhythm.
               </p>

               <button className="self-start px-8 py-4 bg-[#2C181A] text-[#FDFBF7] font-sans text-xs uppercase tracking-widest hover:bg-[#4C282A] transition">
                  Book A Table
               </button>
            </div>

            <div className="xl:w-1/2 w-full mt-10 xl:mt-0 relative aspect-[4/5] bg-[#EBE7E0] overflow-hidden flex items-center justify-center group">
               {/* Abstract conceptual visual for food */}
               <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#2C181A] to-[#6A3940] blur-[2px] shadow-2xl transition-transform duration-[3s] group-hover:scale-105"></div>
               <div className="absolute inset-0 border-[1px] border-[#2C181A]/10 m-6 pointer-events-none"></div>
               
               <div className="absolute bottom-8 right-8 text-right font-sans text-[9px] uppercase tracking-[0.2em] text-[#2C181A]/50">
                  Concept: The Dark Cherry<br/>
                  Course: 04 / 08
               </div>
            </div>

         </main>

      </div>
    </div>
  );
}
