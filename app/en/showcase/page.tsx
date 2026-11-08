import type { Metadata } from "next";
import Link from "next/link";
import { GITHUB_SHOWCASE_PATHS } from "@/lib/githubShowcases";
import { Grid, Sparkles, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/en/showcase", languages: { ro: "/showcase", en: "/en/showcase", "x-default": "/showcase" } },
  title: "Industry Matrix & Showcase — Reverb Digital",
  description: "Applied portfolio of digital systems. 21 Absolute Verticals and live production architectures engineered with structural precision.",
};

const showcases = [
  { id: "vespa-urban", name: "Veloce Mobility", vibe: "Dolce Vita Efficiency", color: "#10B981", description: "Curved aerodynamic minimalism and interactive floating badge mechanics. Concept engineered for electric urban micro-mobility.", href: "/en/showcase/vespa-urban", category: "Mobility & Tech" },
  { id: "jim-curtis", name: "Jim Curtis Neuroscience", vibe: "Cognitive Reprogramming", color: "#06B6D4", description: "Immersive digital architecture focused on neuroscience, somatic healing, and Hypno-Coaching℠. Clinical-indigo aesthetics.", href: "/en/showcase/jim-curtis", category: "Health & Psychology" },
  { id: "surya", name: "Surya Group", vibe: "Brutalism Desyres", color: "#C9A444", description: "Robust webflow-style architecture engineered on monumental typography and sharp B2B borders for Surya holding.", href: "/en/showcase/surya", category: "B2B & Corporate" },
  { id: "xiaolong", name: "Xiaolong Packaging", vibe: "Industrial B2B", color: "#208b53", description: "Mature B2B corporate interface for a global Asian packaging manufacturer with interactive +25% markup calculator.", href: "/en/showcase/xiaolong", category: "B2B & Corporate" },
  { id: "florarte", name: "Florarte Textile", vibe: "Pastel Sage & Rose", color: "#4E6E59", description: "B2C floral and textile atelier focused on mature design ease and streamlined commerce presence.", href: "/en/showcase/florarte", category: "Retail & Artisan" },
  { id: "artisan-cafe", name: "Artisan Café", vibe: "Cassette Futurism", color: "#D64933", description: "Technical minimalism and visual thermal extraction metrics for specialty coffee micro-lots.", href: "/en/showcase/artisan-cafe", category: "Retail & Artisan" },
  { id: "medical-center", name: "Medical Clinic", vibe: "Bio-Interface", color: "#0057FF", description: "Absolute clinical precision. Clean sterile blueprint with live status tickers for medical treatment suites.", href: "/en/showcase/medical-center", category: "Health & Psychology" },
  { id: "legal-firm", name: "Legal Firm", vibe: "Legal Logic Brutal", color: "#8B2520", description: "Massive titles sliced by infinite borders. Digital authority and statutory courtroom weight.", href: "/en/showcase/legal-firm", category: "B2B & Corporate" },
  { id: "architecture", name: "Architecture Studio", vibe: "Monolithic Grid", color: "#7A7A7A", description: "Exposed raw stone grayscale and architectural layout strictly governed by the 1.618 golden ratio.", href: "/en/showcase/architecture", category: "Design & Spatial" },
  { id: "cyber-sec", name: "Cyber Security B2B", vibe: "Terminal Logic", color: "#00FF41", description: "Command-line interface with aggressive scanlines and high-contrast terminal greens for cybersecurity defense.", href: "/en/showcase/cyber-sec", category: "Technology & AI" },
  { id: "real-estate", name: "Real Estate Luxury", vibe: "Obsidian & Gold", color: "#C9A444", description: "Supreme luxury, gold accents against deep obsidian canvas with monumental focus on high-yield properties.", href: "/en/showcase/real-estate", category: "Design & Spatial" },
  { id: "fashion-boutique", name: "Fashion Editorial", vibe: "High Contrast Vogue", color: "#FFFFFF", description: "High-contrast monochrome aesthetics. Serif typography, asymmetric cadence, and extreme editorial minimalism.", href: "/en/showcase/fashion-boutique", category: "Design & Spatial" },
  { id: "fintech", name: "FinTech Startup", vibe: "Glassmorphism & Data", color: "#8B5CF6", description: "Real-time streaming ledger simulated via random text rumble and bio-violet luminescent glass cards.", href: "/en/showcase/fintech", category: "Technology & AI" },
  { id: "auto-service", name: "Auto Dealership", vibe: "Carbon & Racing Yellow", color: "#FBBF24", description: "Vector tachometers and bold geometric speed lines tailored for high-performance automotive distribution.", href: "/en/showcase/auto-service", category: "Mobility & Tech" },
  { id: "fine-dining", name: "Fine Dining", vibe: "Burgundy Mute Canvas", color: "#831843", description: "Functional abstract tasting menus, atmospheric lighting, and purist textures for high-end gastronomy.", href: "/en/showcase/fine-dining", category: "Retail & Artisan" },
  { id: "crossfit", name: "Gym & CrossFit", vibe: "Safety Orange & Sweat", color: "#EA580C", description: "Brutal italics, massive asymmetric lettering, and raw industrial gym atmosphere.", href: "/en/showcase/crossfit", category: "Health & Psychology" },
  { id: "lens-portfolio", name: "Photo/Video Studio", vibe: "Film Strip Limits", color: "#C0C0C0", description: "35mm analog film perforation borders, cursor-centered focal depth, and cinematic full-bleed media.", href: "/en/showcase/lens-portfolio", category: "Design & Spatial" },
  { id: "event-music", name: "Festival Promoters", vibe: "Kinetic Blob Marquee", color: "#EC4899", description: "Liquid vector blobs merged with monumental kinetic artist marquees and integrated ticketing.", href: "/en/showcase/event-music", category: "Mobility & Tech" },
  { id: "logistics-hub", name: "Logistics & Cargo", vibe: "Terminal Gate Cobalt", color: "#1D4ED8", description: "Dense flight & cargo departure matrices with rigid grid governance for international transport hubs.", href: "/en/showcase/logistics-hub", category: "B2B & Corporate" },
  { id: "ai-future", name: "AI Tech Core", vibe: "Holographic Orbital", color: "#06B6D4", description: "Vector AI system platform with 3D CSS representations of activated neural network clusters.", href: "/en/showcase/ai-future", category: "Technology & AI" },
  { id: "neuro-recovery", name: "NeuroLumina", vibe: "Dark to Light Recovery", color: "#10B981", description: "Interactive scroll-telling clinical platform exploring addiction recovery through neuroscience.", href: "/en/showcase/neuro-recovery", category: "Health & Psychology" }
];

export default function ShowcaseIndexEn() {
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
            <span>Systems Directory & Industry Prototypes</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
            21 Absolute Verticals. <br />
            <span className="text-neutral-400 font-light">Applied structural web engineering.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            We have moved past generic templates. Bespoke front-end architectures engineered around the cognitive psychology of each vertical — from clinical sterile rigor to high-speed urban mobility and corporate B2B governance.
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
                  Launch <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
          Need a custom architectural vertical for your sector?
        </h2>
        <p className="text-xs md:text-sm text-neutral-400 mb-8 max-w-md mx-auto font-light leading-relaxed">
          We engineer turnkey platforms with verified sub-1.2s load speeds and direct generative AI search optimization.
        </p>
        <Link
          href="/en/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-md"
        >
          <span>Discuss Your Architecture</span>
          <ArrowRight size={14} />
        </Link>
      </section>

    </div>
  );
}
