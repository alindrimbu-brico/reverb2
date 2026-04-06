import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SYS.CONCRETE | Architecture Showcase",
};

export default function ArchitectureShowcaseEN() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-[#111111] overflow-hidden selection:bg-[#7A7A7A] selection:text-white">
         
      <style>{`
        @keyframes scaleIn { from { transform: scale(1.1); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes revealLine { from { width: 0; } to { width: 100%; } }
      `}</style>
      
      {/* Heavy Concrete Architecture Framework */}
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-12 relative z-10 bg-transparent border-t border-b border-[#111111]/20">
        
        {/* Absolute strict grid lines */}
        <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-[#111111]/10 z-0"></div>
        <div className="hidden md:block absolute left-2/4 top-0 bottom-0 w-px bg-[#111111]/10 z-0"></div>
        <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-[#111111]/10 z-0"></div>

        {/* Sidebar Nav */}
        <div className="md:col-span-3 lg:col-span-2 border-r border-[#111111]/20 p-8 flex flex-col justify-between mix-blend-multiply bg-[#EAEAEA]">
           <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-16">
                 Studio<br/>Format.
              </div>
              <ul className="space-y-6 text-sm font-semibold tracking-tight">
                 <li><a href="#" className="flex items-center gap-4 hover:opacity-50 transition"><span className="w-4 h-px bg-black"></span> Projects</a></li>
                 <li><a href="#" className="flex items-center gap-4 opacity-50 hover:opacity-100 transition"><span className="w-0 hover:w-4 transition-all h-px bg-black"></span> Manifesto</a></li>
                 <li><a href="#" className="flex items-center gap-4 opacity-50 hover:opacity-100 transition"><span className="w-0 hover:w-4 transition-all h-px bg-black"></span> About Us</a></li>
              </ul>
           </div>
           
           <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#111111]/50 space-y-2">
              <div>Bucharest, RO</div>
              <div>contact@studio-format.ro</div>
              <Link href="/en/showcase" className="block mt-4 pt-4 border-t border-[#111111]/20 text-[#111111] hover:underline">
                 ← Showcase Matrix
              </Link>
           </div>
        </div>

        {/* Hero Section */}
        <div className="md:col-span-9 lg:col-span-10 flex flex-col pt-16 md:pt-0">
           
           <div className="p-8 md:p-12 lg:p-20 relative z-10 border-b border-[#111111]/20 h-auto md:h-2/5 flex flex-col justify-end">
             <div className="overflow-hidden">
               <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-medium leading-[0.8] tracking-[-0.05em] uppercase animate-[scaleIn_1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                  Form Follows<br/>
                  <span className="text-[#111111]/40">Matter.</span>
               </h1>
             </div>
           </div>

           {/* Photography block with precise grid measurements */}
           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 relative z-10 bg-[#EAEAEA]">
              <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#111111]/20">
                 <div>
                    <div className="h-px bg-[#111111] mb-8 origin-left animate-[revealLine_1s_cubic-bezier(0.77,0,0.175,1)_forwards]"></div>
                    <h3 className="text-2xl font-semibold mb-4 tracking-[-0.02em]">An Ode to Raw Concrete</h3>
                    <p className="text-[#111111]/70 leading-relaxed font-sans max-w-sm">
                       Architecture must outlive trends. We explore clean spatiality, eliminating useless decorations. Only light, proportions, and cobblestone.
                    </p>
                 </div>
                 <div className="mt-12 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                    <span>Project: House A-01</span>
                    <span>Year: 2024</span>
                 </div>
              </div>

              {/* Huge Image representation using CSS raw shapes or an actual placeholder image */}
              <div className="relative overflow-hidden w-full min-h-[40vh] bg-[#C5C5C5] group flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                 {/* Decorative brutalist visual element */}
                 <div className="relative w-3/4 h-3/4 border border-[#111111]/10 flex flex-col p-4 bg-white/5 backdrop-blur-[2px]">
                   <div className="w-16 h-16 bg-[#111111]/20 mt-auto ml-auto rounded-tl-full transition-transform duration-1000 group-hover:scale-150"></div>
                 </div>
                 
                 <div className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#111111]/60 rotate-90 origin-right whitespace-nowrap z-20">
                    <span className="w-12 h-px inline-block bg-[#111111]/30 align-middle mr-2"></span>
                    Img_Ref: 44.4268° N, 26.1025° E
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
