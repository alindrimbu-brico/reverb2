import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SYS.LUXURY | Real Estate Showcase",
};

export default function RealEstateShowcase() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EFEFEF] font-sans selection:bg-[#C9A444] selection:text-[#0A0A0A] overflow-hidden">
      
      {/* Minimal Header */}
      <header className="absolute top-0 w-full z-50 flex justify-between items-center p-8 md:p-12">
        <div className="uppercase tracking-[0.3em] text-xs font-semibold text-[#C9A444]">
          AURELIA <span className="text-white/50">PROPERTIES</span>
        </div>
        <div className="text-[10px] uppercase font-mono tracking-widest opacity-60 hover:opacity-100 transition cursor-pointer">
          Menu //
        </div>
      </header>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen relative">
         
         {/* Left Side Content */}
         <div className="md:col-span-5 flex flex-col justify-end p-8 md:p-12 lg:p-20 relative z-20 mix-blend-difference mt-32 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-light tracking-[-0.04em] leading-[1.1] mb-8">
               Sanctuare<br/>
               <span className="italic font-serif text-[#C9A444]">Arhitecturale.</span>
            </h1>
            <p className="text-sm font-light leading-relaxed max-w-xs text-white/70 mb-12">
               Portofoliul nostru conține strict reședințe care redefinesc noțiunea de lux, integrate asimetric în peisajul organic.
            </p>
            <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-mono">
               <span className="border-b border-[#C9A444] pb-1 cursor-pointer">Explorează Lista</span>
               <Link href="/showcase" className="opacity-50 hover:opacity-100 transition pb-1 cursor-pointer border-b border-transparent hover:border-white">Inapoi Matrix</Link>
            </div>
         </div>

         {/* Right Side Image Parallax Area */}
         <div className="md:col-span-7 relative h-[60vh] md:h-screen">
            {/* The Huge Image */}
            <div className="absolute inset-0 bg-[#1A1A1A] m-8 md:my-12 md:mr-12 md:ml-0 overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center transition-transform duration-[20s] group-hover:scale-125 opacity-60"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
               
               {/* Property Badge */}
               <div className="absolute bottom-8 right-8 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 p-6 max-w-sm">
                  <div className="flex justify-between items-baseline mb-2">
                     <h3 className="text-xl font-light">Villa Veda</h3>
                     <span className="font-mono text-[#C9A444] text-sm">€4.2M</span>
                  </div>
                  <div className="flex justify-between gap-4 font-mono text-[10px] uppercase text-white/50 tracking-wider">
                     <span>5 BED // 6 BATH</span>
                     <span>MALLORCA, SP</span>
                  </div>
               </div>
            </div>
         </div>

      </div>

    </div>
  );
}
