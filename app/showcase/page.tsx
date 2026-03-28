import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry Showcase — Reverb.ro",
  description: "Portofoliu aplicat de prezențe digitale. 15 Verticale Absolute, executate cu precizie structurală.",
};

const showcases = [
  { id: "artisan-cafe", name: "Artisan Café", vibe: "Cassette Futurism", color: "#D64933", description: "Minimalism tehnic și date termice extrase vizual pentru loturile de cafea.", href: "/showcase/artisan-cafe" },
  { id: "medical-center", name: "Medical Clinic", vibe: "Bio-Interface", color: "#0057FF", description: "Rigoare absolută. Sterilitate albă dublată de ticker live pentru starea sălilor.", href: "/showcase/medical-center" },
  { id: "legal-firm", name: "Legal Firm", vibe: "Legal Logic Brutal", color: "#8B2520", description: "Titluri masive tăiate orizontal de linii infinite. Autoritatea legii redată digital.", href: "/showcase/legal-firm" },
  { id: "architecture", name: "Architecture Studio", vibe: "Monolithic Grid", color: "#7A7A7A", description: "Gri de piatră brută expusă și arhitectură web ghidată de proporția 1.618.", href: "/showcase/architecture" },
  { id: "cyber-sec", name: "Cyber Security B2B", vibe: "Terminal Logic", color: "#00FF41", description: "Interfață de linie de comandă cu scanlines agresive și verde neon tech.", href: "/showcase/cyber-sec" },
  { id: "real-estate", name: "Real Estate Luxury", vibe: "Obsidian & Gold", color: "#C9A444", description: "Eleganță supremă, detalii aurii pe fundal adânc și accent imens pe fotografie.", href: "/showcase/real-estate" },
  { id: "fashion-boutique", name: "Fashion Editorial", vibe: "High Contrast Vogue", color: "#FFFFFF", description: "Estetica alb-negru. Tipografie serifată, asimetrie elegantă și minimalism extrem.", href: "/showcase/fashion-boutique" },
  { id: "fintech", name: "FinTech Startup", vibe: "Glassmorphism & Data", color: "#8B5CF6", description: "Date financiare care se schimbă aleator via text rumble, iluminări bio-violet.", href: "/showcase/fintech" },
  { id: "auto-service", name: "Auto Dealership", vibe: "Carbon & Racing Yellow", color: "#FBBF24", description: "Elemente grafice precum turometre vectoriale și forme unghiulare decise.", href: "/showcase/auto-service" },
  { id: "fine-dining", name: "Fine Dining", vibe: "Burgundy Mute Canvas", color: "#831843", description: "Meniu funcțional abstractizat, atmosfere rafinate cu texturi puriste.", href: "/showcase/fine-dining" },
  { id: "crossfit", name: "Gym & CrossFit", vibe: "Safety Orange & Sweat", color: "#EA580C", description: "Italic brutal. Cuvinte masive asimetrice și un vibe pur industrial de sală.", href: "/showcase/crossfit" },
  { id: "lens-portfolio", name: "Photo/Video Studio", vibe: "Film Strip Limits", color: "#C0C0C0", description: "Margini marcate ca frame-urile peliculei de 35mm, focalizat total pe cursor.", href: "/showcase/lens-portfolio" },
  { id: "event-music", name: "Festival Promoters", vibe: "Kinetic Blob Marquee", color: "#EC4899", description: "Liquid shapes combinat cu benzi uriașe infinite de artiști.", href: "/showcase/event-music" },
  { id: "logistics-hub", name: "Logistics & Cargo", vibe: "Terminal Gate Cobalt", color: "#1D4ED8", description: "Tabele dense simulând plecări din aeroport. Grid rigid pentru logistica de top.", href: "/showcase/logistics-hub" },
  { id: "ai-future", name: "AI Tech Core", vibe: "Holographic Orbital", color: "#06B6D4", description: "Platforme software vectoriale. 3D CSS de finețe reprezentând noduri activate.", href: "/showcase/ai-future" },
];

export default function ShowcaseIndex() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Intro */}
      <section className="px-6 py-20 lg:px-10 lg:py-32 border-b border-white/10 relative" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        backgroundPosition: 'center top'
      }}>
        <div className="mx-auto max-w-7xl">
          <Link href="/templates" className="inline-flex items-center text-xs font-mono text-white/40 hover:text-white transition mb-12 border border-white/10 rounded-full px-4 py-1.5 bg-white/5">
            ← Înapoi la direcții de bază
          </Link>
          <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">SYS.SHOWCASE_MATRIX_V2</div>
          <h1 className="text-5xl font-medium leading-[1.0] tracking-[-0.03em] md:text-7xl">
            15 Verticale<br />
            <span className="text-white/40">Absolute.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60 font-sans">
            Am depășit stadiul de "teme predefinite". 15 interfețe front-end unice, cu identități tăioase dictate de psihologia fiecărei nișe — de la rigiditatea medicală până la neonul digital.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((s) => (
          <Link href={s.href} key={s.id} className="group relative border border-white/10 bg-white/[0.02] p-8 lg:p-10 transition hover:bg-white/5 flex flex-col h-full overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-0 bg-white opacity-40 transition-all duration-500 group-hover:w-full z-10" style={{ backgroundColor: s.color }} />
            
            <div className="mb-8 z-20">
              <span className="inline-block px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#050505]" style={{ backgroundColor: s.color }}>
                {s.vibe}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight mb-4 z-20">{s.name}</h2>
            <p className="text-sm leading-6 text-white/50 mb-12 flex-grow z-20">{s.description}</p>
            
            <div className="flex items-center justify-between font-mono text-[10px] uppercase text-white/30 border-t border-white/10 pt-6 mt-auto z-20">
              <span>EXPLORE({s.id})</span>
              <span className="text-white transition group-hover:text-[currentColor] text-sm" style={{ color: s.color }}>→</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
