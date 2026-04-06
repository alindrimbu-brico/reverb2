import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SYS.LENS | Photo Portfolio Showcase",
};

export default function LensPortfolioShowcaseEN() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-black font-sans selection:bg-black selection:text-[#E5E5E5] flex p-4 md:p-8">
      
      {/* 35mm Film border limits mimicking camera viewfinder */}
      <div className="flex-1 border-[1px] border-black/20 relative flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-white/50">
         
         {/* Viewfinder crosshairs */}
         <div className="absolute top-1/2 left-1/2 w-4 h-[1px] bg-black/40 -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute top-1/2 left-1/2 h-4 w-[1px] bg-black/40 -translate-x-1/2 -translate-y-1/2"></div>
         
         {/* Focus dots */}
         <div className="absolute top-12 left-12 w-1.5 h-1.5 border border-black rounded-full"></div>
         <div className="absolute top-12 right-12 w-1.5 h-1.5 border border-black rounded-full"></div>
         <div className="absolute bottom-12 left-12 w-1.5 h-1.5 border border-black rounded-full"></div>
         <div className="absolute bottom-12 right-12 w-1.5 h-1.5 border border-black rounded-full"></div>

         <header className="flex justify-between font-mono text-[9px] uppercase tracking-[0.3em] z-10">
            <div>FRAME 1 / 36</div>
            <div className="flex gap-4">
               <span>ISO 400</span>
               <span>f/1.4</span>
               <span>1/500s</span>
            </div>
         </header>

         <main className="flex-1 flex items-center justify-center relative z-0 py-12">
            <div className="relative w-full max-w-2xl aspect-[3/2] overflow-hidden group cursor-crosshair hover:scale-[1.02] transition-transform duration-[1s] ease-out shadow-2xl">
               <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2000" alt="Camera lens photography" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
         </main>

         <footer className="flex justify-between items-end font-mono text-[10px] uppercase tracking-widest z-10">
            <div className="flex flex-col gap-2">
               <h1 className="text-3xl font-serif italic lowercase tracking-tight">Focus. Capture. Time.</h1>
               <div className="opacity-50 max-w-sm mt-4 font-sans leading-relaxed lowercase">
                  digital portfolio for studios that understand a good photograph is a sequence cut from infinite reality.
               </div>
            </div>
            <a href="/en/showcase" className="border-b border-black pb-1 hover:opacity-50 transition hidden md:block">
               ← Return to Index
            </a>
         </footer>

      </div>
    </div>
  );
}
