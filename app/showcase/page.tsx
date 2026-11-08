import type { Metadata } from "next";
import Link from "next/link";
import { GITHUB_SHOWCASE_PATHS } from "@/lib/githubShowcases";
import { Grid, Sparkles, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/showcase", languages: { ro: "/showcase", en: "/en/showcase", "x-default": "/showcase" } },
  title: "Matrice Industriala & Showcase — Reverb Digital",
  description: "Portofoliu aplicat de prezențe digitale. 21 Verticale Absolute și sisteme reale de producție, executate cu precizie structurală.",
};

const showcases = [
  { id: "vespa-urban", name: "Veloce Mobility", vibe: "Dolce Vita Efficiency", color: "#10B981", description: "Minimalism rotunjit, curbe aerodinamice și mecanică de card flotant (micro-badge bounce). Un concept dedicat mobilității urbane electrice.", href: "/showcase/vespa-urban", category: "Mobilitate & Tehnologie" },
  { id: "jim-curtis", name: "Jim Curtis Neuroscience", vibe: "Cognitive Reprogramming", color: "#06B6D4", description: "O experiență digitală profundă axată pe neuroștiință, vindecare somatică și Hypno-Coaching℠. Estetică clinical-indigo.", href: "/showcase/jim-curtis", category: "Sănătate & Psihologie" },
  { id: "surya", name: "Surya Group", vibe: "Brutalism Desyres", color: "#C9A444", description: "Design webflow robust, bazat pe typography imens și delimitări tăioase B2B pentru holdingul Surya.", href: "/showcase/surya", category: "B2B & Corporativ" },
  { id: "xiaolong", name: "Xiaolong Packaging", vibe: "Industrial B2B", color: "#208b53", description: "Design corporativ matur B2B pentru un producător asiatic global, cu modul dinamic de markup +25%.", href: "/showcase/xiaolong", category: "B2B & Corporativ" },
  { id: "florarte", name: "Florarte Textile", vibe: "Pastel Sage & Rose", color: "#4E6E59", description: "Atelier floral B2C axat pe estetica textilă matură și claritatea prezenței e-commerce.", href: "/showcase/florarte", category: "Retail & Artizanat" },
  { id: "artisan-cafe", name: "Artisan Café", vibe: "Cassette Futurism", color: "#D64933", description: "Minimalism tehnic și date termice extrase vizual pentru loturile de cafea de specialitate.", href: "/showcase/artisan-cafe", category: "Retail & Artizanat" },
  { id: "don-barbershop", name: "DON Barbershop & Coffee", vibe: "Gentleman's Evening", color: "#B08D57", description: "Site complet pentru o frizerie cu cafenea din Mera, Vrancea: atmosferă de seară, film de prezentare, servicii și rezervări.", href: "https://don-barbershop.pages.dev/", category: "Servicii Locale" },
  { id: "medical-center", name: "Medical Clinic", vibe: "Bio-Interface", color: "#0057FF", description: "Rigoare clinică absolută. Sterilitate albastră dublată de ticker live pentru starea sălilor de tratament.", href: "/showcase/medical-center", category: "Sănătate & Psihologie" },
  { id: "legal-firm", name: "Legal Firm", vibe: "Legal Logic Brutal", color: "#8B2520", description: "Titluri masive tăiate orizontal de linii infinite. Autoritatea legii redată digital.", href: "/showcase/legal-firm", category: "B2B & Corporativ" },
  { id: "architecture", name: "Architecture Studio", vibe: "Monolithic Grid", color: "#7A7A7A", description: "Gri de piatră brută expusă și arhitectură web ghidată de proporția de aur 1.618.", href: "/showcase/architecture", category: "Design & Arhitectură" },
  { id: "cyber-sec", name: "Cyber Security B2B", vibe: "Terminal Logic", color: "#00FF41", description: "Interfață de linie de comandă cu scanlines agresive și verde neon tech pentru securitate cibernetică.", href: "/showcase/cyber-sec", category: "Tehnologie & AI" },
  { id: "real-estate", name: "Real Estate Luxury", vibe: "Obsidian & Gold", color: "#C9A444", description: "Eleganță supremă, detalii aurii pe fundal adânc și accent imens pe fotografie imobiliară.", href: "/showcase/real-estate", category: "Design & Arhitectură" },
  { id: "fashion-boutique", name: "Fashion Editorial", vibe: "High Contrast Vogue", color: "#FFFFFF", description: "Estetica alb-negru. Tipografie serifată, asimetrie elegantă și minimalism editorial extrem.", href: "/showcase/fashion-boutique", category: "Design & Arhitectură" },
  { id: "fintech", name: "FinTech Startup", vibe: "Glassmorphism & Data", color: "#8B5CF6", description: "Date financiare în timp real via text rumble, iluminări bio-violet și securitate tranzacțională.", href: "/showcase/fintech", category: "Tehnologie & AI" },
  { id: "auto-service", name: "Auto Dealership", vibe: "Carbon & Racing Yellow", color: "#FBBF24", description: "Elemente grafice precum turometre vectoriale și forme unghiulare decise pentru dealership auto.", href: "/showcase/auto-service", category: "Mobilitate & Tehnologie" },
  { id: "fine-dining", name: "Fine Dining", vibe: "Burgundy Mute Canvas", color: "#831843", description: "Meniu funcțional abstractizat, atmosfere rafinate cu texturi puriste pentru restaurante de top.", href: "/showcase/fine-dining", category: "Retail & Artizanat" },
  { id: "crossfit", name: "Gym & CrossFit", vibe: "Safety Orange & Sweat", color: "#EA580C", description: "Italic brutal. Cuvinte masive asimetrice și un vibe pur industrial de sală de performanță.", href: "/showcase/crossfit", category: "Sănătate & Psihologie" },
  { id: "lens-portfolio", name: "Photo/Video Studio", vibe: "Film Strip Limits", color: "#C0C0C0", description: "Margini marcate ca frame-urile peliculei de 35mm, focalizat total pe expunerea media.", href: "/showcase/lens-portfolio", category: "Design & Arhitectură" },
  { id: "event-music", name: "Festival Promoters", vibe: "Kinetic Blob Marquee", color: "#EC4899", description: "Liquid shapes combinat cu benzi uriașe infinite de artiști și bilete integrate.", href: "/showcase/event-music", category: "Mobilitate & Tehnologie" },
  { id: "logistics-hub", name: "Logistics & Cargo", vibe: "Terminal Gate Cobalt", color: "#1D4ED8", description: "Tabele dense simulând plecări din aeroport. Grid rigid pentru logistica de top.", href: "/showcase/logistics-hub", category: "B2B & Corporativ" },
  { id: "ai-future", name: "AI Tech Core", vibe: "Holographic Orbital", color: "#06B6D4", description: "Platforme software vectoriale. 3D CSS de finețe reprezentând noduri activate de rețea neuronală.", href: "/showcase/ai-future", category: "Tehnologie & AI" },
  { id: "neuro-recovery", name: "NeuroLumina", vibe: "Dark to Light Recovery", color: "#10B981", description: "Platformă interactivă de tip scroll-telling. O explorare empatică bazată pe neuroștiință a adicției.", href: "/showcase/neuro-recovery", category: "Sănătate & Psihologie" },
  { id: "fish-io", name: "Abyss.io (Game Engine)", vibe: "Cyber-Ocean Collision", color: "#00E5FF", description: "Joc HTML5 Canvas 60FPS integrat în React. Detecție de coliziuni (eat & grow) și AI Boids inamici.", href: "/showcase/fish-io", category: "Tehnologie & AI" },
  { id: "humanoid-reality-2026", name: "Realitatea Umanoidă 2026", vibe: "Deep Space Cyberpunk", color: "#00E5FF", description: "Website premium de prezentare despre revoluția robotică, modele VLA și era post-umanoide.", href: "/humanoid-reality-2026", category: "Tehnologie & AI" }
];

export default function ShowcaseIndex() {
  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans selection:bg-neutral-700 selection:text-white antialiased">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Intro */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 mb-6 backdrop-blur-md">
            <Grid size={12} className="text-white" />
            <span>Catalog Sisteme & Prototipuri Industriale</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
            21 Verticale Absolute. <br />
            <span className="text-neutral-400 font-light">Arhitectură structurală aplicată.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            Am depășit stadiul de „teme predefinite”. Interfețe front-end distincte, cu identități tăioase dictate de psihologia fiecărei nișe — de la rigiditatea medicală la mobilitatea aerodinamică și fluxuri industriale B2B.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((s) => {
          const isExternal = /^https?:\/\//.test(s.href) || GITHUB_SHOWCASE_PATHS.some((p) => s.href.startsWith(`/${p}/`));
          const linkProps = isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
          return (
            <Link 
              href={s.href} 
              key={s.id} 
              {...linkProps} 
              className="group relative rounded-3xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/70 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="inline-block px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-black font-bold rounded-full shadow-sm"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.vibe}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    {s.category}
                  </span>
                </div>

                <h2 className="text-2xl font-light text-white tracking-tight mb-3 group-hover:text-emerald-300 transition-colors">
                  {s.name}
                </h2>
                
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] uppercase text-neutral-500">
                <span>SYS://{s.id.toUpperCase()}</span>
                <span className="flex items-center gap-1 text-neutral-300 group-hover:text-white group-hover:translate-x-1 transition-all">
                  Lansează <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
          Vrei o verticală personalizată pentru industria ta?
        </h2>
        <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-md mx-auto font-light leading-relaxed">
          Proiectăm platforme dedicate cu timp de încărcare sub 1.2 secunde și optimizare directă pentru conversie.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
        >
          <span>Discută Proiectul Tău</span>
          <ArrowRight size={14} />
        </Link>
      </section>

    </div>
  );
}
