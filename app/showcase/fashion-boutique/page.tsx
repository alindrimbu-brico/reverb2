import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SYS.EDITORIAL | Fashion Boutique Showcase",
};

export default function FashionBoutiqueShowcase() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* Ultra Minimal Header */}
      <header className="flex justify-between items-center p-8 lg:p-12 absolute w-full top-0 z-50 mix-blend-difference text-white">
         <div className="font-serif text-2xl tracking-tighter italic font-light">
            VØID
         </div>
         <div className="flex gap-6 font-sans text-xs uppercase font-medium tracking-widest">
            <span className="hover:line-through transition cursor-pointer">Colecția</span>
            <span className="hover:line-through transition cursor-pointer">Atelier</span>
            <Link href="/showcase" className="hover:line-through transition cursor-pointer opacity-50">Matrix</Link>
         </div>
      </header>

      {/* Hero Grid layout overlapping */}
      <main className="min-h-screen grid grid-cols-1 md:grid-cols-12 relative">
         
         {/* Huge Typography block */}
         <div className="md:col-span-5 flex flex-col justify-end p-8 lg:p-16 relative z-20 pb-24 md:pb-16 bg-white">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 mb-12 transform -rotate-90 origin-left absolute left-12 top-1/2">
               S/S Collection — Vol. 04
            </div>
            
            <h1 className="font-serif text-[14vw] md:text-[8vw] leading-[0.8] tracking-[-0.07em] font-light">
               Avant<br/>
               <span className="italic">-Garde</span>
            </h1>
            
            <p className="font-sans text-sm leading-[1.8] max-w-sm mt-12 lowercase text-black/70">
               designul extrem nu cere permisiune. materiale organice întâlnesc tăieturi asimetrice brutale, formând o siluetă atemporală într-o lume saturată.
            </p>

            <button className="self-start mt-12 border-b border-black pb-1 uppercase font-bold text-[10px] tracking-[0.2em] hover:opacity-50 transition">
               Discover Lookbook
            </button>
         </div>

         {/* Asymmetric Image Block */}
         <div className="md:col-span-7 relative bg-[#F5F5F5] overflow-hidden flex items-end justify-end pt-32 p-8 md:p-16">
            <div className="w-full max-w-lg aspect-[3/4] bg-black/5 relative grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out">
               <img src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=1200" 
                    alt="Editorial Fashion" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
               <div className="absolute -left-12 bottom-12 font-serif text-[10vw] md:text-[6vw] italic text-white mix-blend-difference pointer-events-none">
                  [04]
               </div>
            </div>
         </div>

      </main>

    </div>
  );
}
