import Link from "next/link";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reverb x Nevronix — The Future of Private AI",
  description: "Arhitectură hibridă de inteligență artificială on-premise.",
};

export default function NevronixPartnership() {
  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden font-sans selection:bg-[#ccff00] selection:text-[#050505]">
      
      {/* ── Background: Deep Black + Cyber Lime Radial Gradient ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.06)_0%,transparent_60%)] opacity-80" />
        {/* Subtle grid pattern over the very dark background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#ccff00 1px, transparent 1px), linear-gradient(90deg, #ccff00 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32 min-h-screen flex flex-col justify-center">
        
        {/* Nav Helper */}
        <Reveal>
          <Link href="/" className="inline-flex items-center text-xs font-mono text-white/40 hover:text-[#ccff00] transition-colors mb-20 border border-white/10 hover:border-[#ccff00]/40 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm">
            ← Înapoi la Reverb.ro
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Copywriting & Intro (Left Side) */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            <Reveal delay={100}>
              <div className="flex items-center gap-4">
                <span className="text-[#ccff00] text-[10px] uppercase font-mono tracking-[0.3em] font-bold border border-[#ccff00]/30 px-3 py-1 rounded-sm bg-[#ccff00]/10">
                  Strategic Partnership
                </span>
                <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
                  Sys.Uplink_Activated
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">
                Dețineți<br />
                <span className="text-[#ccff00]">Inteligența.</span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
                Parteneriatul <strong className="font-semibold text-white">Reverb x Nevronix</strong> aduce viitorul AI-ului privat în România. 
                Nu mai închiriați inteligența de la giganții tech. Dețineți-o local.
              </p>
            </Reveal>

            {/* Performance Monitor (Animated) */}
            <Reveal delay={400}>
              <div className="mt-8 flex items-center gap-6 border border-white/10 bg-white/5 p-5 rounded-lg backdrop-blur-md">
                <div className="flex items-end gap-[3px] h-8">
                  <div className="w-1.5 bg-[#ccff00] rounded-sm nevronix-bar h-full"></div>
                  <div className="w-1.5 bg-[#ccff00] rounded-sm nevronix-bar h-full"></div>
                  <div className="w-1.5 bg-[#ccff00] rounded-sm nevronix-bar h-full"></div>
                  <div className="w-1.5 bg-[#ccff00] rounded-sm nevronix-bar h-full"></div>
                  <div className="w-1.5 bg-[#ccff00] rounded-sm nevronix-bar h-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">Nevronix Hardware</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ccff00] mt-0.5 shadow-[#ccff00] drop-shadow-md">
                    Real-time Uptime: 99.99%
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Central GPU Vector/Wireframe (Right Side) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <Reveal delay={500}>
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                {/* Pulsing BackGlow */}
                <div className="absolute inset-0 bg-[#ccff00]/5 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                
                {/* SVG Isometric Wireframe Server interconnected with Reverb Logo */}
                <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  <defs>
                    <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ccff00" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ccff00" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="reverbFlow" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Lines of code / data flow representing connection */}
                  <path d="M 80 120 Q 150 50 320 180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <path d="M 80 120 Q 150 50 320 180" fill="none" stroke="#ffffff" strokeWidth="2" className="flow-line" />
                  
                  <path d="M 120 280 Q 250 350 340 220" fill="none" stroke="rgba(204,255,0,0.1)" strokeWidth="1" />
                  <path d="M 120 280 Q 250 350 340 220" fill="none" stroke="#ccff00" strokeWidth="2" style={{ animationDelay: '1.5s' }} className="flow-line" />

                  {/* GPU Server Wireframe Outline */}
                  <g transform="translate(180, 160)">
                    {/* Top Layer */}
                    <polygon points="0,-40 80,-10 0,20 -80,-10" fill="rgba(204,255,0,0.03)" stroke="url(#neonGlow)" strokeWidth="1.5" />
                    {/* Middle Layer */}
                    <polygon points="0,0 80,30 0,60 -80,30" fill="rgba(204,255,0,0.02)" stroke="url(#neonGlow)" strokeWidth="1.5" />
                    <line x1="-80" y1="-10" x2="-80" y2="30" stroke="url(#neonGlow)" strokeWidth="1" opacity="0.5" />
                    <line x1="80" y1="-10" x2="80" y2="30" stroke="url(#neonGlow)" strokeWidth="1" opacity="0.5" />
                    <line x1="0" y1="20" x2="0" y2="60" stroke="#ccff00" strokeWidth="1.5" />
                    {/* Bottom Layer */}
                    <polygon points="0,40 80,70 0,100 -80,70" fill="rgba(204,255,0,0.01)" stroke="url(#neonGlow)" strokeWidth="1.5" />
                    <line x1="-80" y1="30" x2="-80" y2="70" stroke="url(#neonGlow)" strokeWidth="1" opacity="0.3" />
                    <line x1="80" y1="30" x2="80" y2="70" stroke="url(#neonGlow)" strokeWidth="1" opacity="0.3" />
                    <line x1="0" y1="60" x2="0" y2="100" stroke="#ccff00" strokeWidth="1.5" />
                    
                    {/* Small pulsing logic nodes inside the server */}
                    <circle cx="20" cy="10" r="2" fill="#ccff00" className="animate-ping" style={{ animationDuration: '3s' }} />
                    <circle cx="-30" cy="25" r="2" fill="#ccff00" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                    <circle cx="40" cy="50" r="2" fill="#ccff00" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                  </g>

                  {/* Reverb Receiver Node (Left top) */}
                  <g transform="translate(80, 120)">
                    <circle cx="0" cy="0" r="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <circle cx="0" cy="0" r="20" fill="rgba(255,255,255,0.1)" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="0" y="4" fontFamily="monospace" fontSize="9" fill="#ffffff" textAnchor="middle" opacity="0.8" letterSpacing="1">RVB</text>
                  </g>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── 3-Grid Technical Cards ── */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 block">
          <Reveal delay={600}>
            <div className="group h-full border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#ccff00]/30 hover:bg-[#ccff00]/5">
              <div className="mb-6 flex justify-between items-start">
                <span className="text-[#ccff00] font-mono text-[10px] uppercase tracking-widest border border-[#ccff00]/20 px-2 py-1 bg-[#ccff00]/10">01</span>
                <span className="text-white/20 font-mono text-xs group-hover:text-[#ccff00]/40 transition-colors">SYS.BASE</span>
              </div>
              <h3 className="text-white font-medium text-xl mb-3 tracking-wide">HARDWARE</h3>
              <p className="text-[#ccff00]/90 font-mono text-[11px] uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                GPU Clusters &amp; Edge Computing
              </p>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Arhitectură de procesare brută asigurată de hub-urile Nevronix. Performanță izolata și viteză critică pentru sarcinile avansate de inteligență artificială, fără limitări de API.
              </p>
            </div>
          </Reveal>

          <Reveal delay={700}>
            <div className="group h-full border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#ccff00]/30 hover:bg-[#ccff00]/5">
              <div className="mb-6 flex justify-between items-start">
                <span className="text-white font-mono text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 bg-white/10 group-hover:border-[#ccff00]/30 group-hover:text-[#ccff00] transition-colors">02</span>
                <span className="text-white/20 font-mono text-xs group-hover:text-[#ccff00]/40 transition-colors">SYS.LOGIC</span>
              </div>
              <h3 className="text-white font-medium text-xl mb-3 tracking-wide">INTELLIGENCE</h3>
              <p className="text-white/70 font-mono text-[11px] uppercase tracking-widest mb-6 border-b border-white/5 pb-4 group-hover:text-[#ccff00]/90 transition-colors">
                LLM-uri Private &amp; Fine-tuning
              </p>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Modulele lingvistice Reverb se aliază la nucleul tehnic Nevronix. Creăm creiere digitale antrenate pe corpusul intern al companiei tale, complet deconectate de la rețelele terțe.
              </p>
            </div>
          </Reveal>

          <Reveal delay={800}>
            <div className="group h-full border border-[#ccff00]/30 bg-[#ccff00]/5 p-8 backdrop-blur-sm transition-all duration-500 shadow-[0_0_30px_rgba(204,255,0,0.05)] hover:shadow-[0_0_50px_rgba(204,255,0,0.1)] hover:bg-[#ccff00]/10">
              <div className="mb-6 flex justify-between items-start">
                <span className="text-[#ccff00] font-mono text-[10px] uppercase tracking-widest border border-[#ccff00]/50 px-2 py-1 bg-[#ccff00]/20 font-bold">03</span>
                <span className="text-[#ccff00]/40 font-mono text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse"></span>
                  SECURE
                </span>
              </div>
              <h3 className="text-white font-medium text-xl mb-3 tracking-wide">SECURITY</h3>
              <p className="text-[#ccff00] font-mono text-[11px] uppercase tracking-widest mb-6 border-b border-[#ccff00]/20 pb-4 font-bold shadow-sm">
                100% On-Premise. No Data Leaks.
              </p>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Singura modalitate prin care datele companiei rămân proprietate exclusivă. Zero telemetry. Garanția absolută că deciziile strategice construite de algoritm nu vor alimenta giganții Big Tech.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
