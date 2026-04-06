import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry Showcase — Reverb.ro",
  description: "Applied portfolio of digital environments. 18 Absolute Verticals, executed with structural precision.",
};

const showcases = [
  { id: "surya", name: "Surya Group", vibe: "Brutalism Desyres", color: "#111111", description: "Robust webflow design, based on massive typography and sharp B2B boundaries.", href: "/en/showcase/surya" },
  { id: "florarte", name: "Florarte Textile", vibe: "Pastel Sage & Rose", color: "#4E6E59", description: "B2C floral atelier focused on mature textile aesthetics and sheer presence clarity.", href: "/en/showcase/florarte" },
  { id: "xiaolong", name: "Xiaolong Packaging", vibe: "Industrial B2B", color: "#208b53", description: "Mature corporate B2B design for a global Asian manufacturer, featuring a +25% dynamic markup module.", href: "/en/showcase/xiaolong" },
  { id: "artisan-cafe", name: "Artisan Café", vibe: "Cassette Futurism", color: "#D64933", description: "Technical minimalism and visually extracted thermal data for coffee batches.", href: "/en/showcase/artisan-cafe" },
  { id: "medical-center", name: "Medical Clinic", vibe: "Bio-Interface", color: "#0057FF", description: "Absolute rigor. White sterility paired with a live ticker for operating room status.", href: "/en/showcase/medical-center" },
  { id: "legal-firm", name: "Legal Firm", vibe: "Legal Logic Brutal", color: "#8B2520", description: "Massive headings cut horizontally by infinite lines. The authority of law rendered digitally.", href: "/en/showcase/legal-firm" },
  { id: "architecture", name: "Architecture Studio", vibe: "Monolithic Grid", color: "#7A7A7A", description: "Exposed rough stone gray and web architecture guided by the 1.618 golden ratio.", href: "/en/showcase/architecture" },
  { id: "cyber-sec", name: "Cyber Security B2B", vibe: "Terminal Logic", color: "#00FF41", description: "Command-line interface with aggressive scanlines and neon tech green.", href: "/en/showcase/cyber-sec" },
  { id: "real-estate", name: "Real Estate Luxury", vibe: "Obsidian & Gold", color: "#C9A444", description: "Supreme elegance, golden details on a deep background with massive focus on photography.", href: "/en/showcase/real-estate" },
  { id: "fashion-boutique", name: "Fashion Editorial", vibe: "High Contrast Vogue", color: "#FFFFFF", description: "Black and white aesthetics. Serif typography, elegant asymmetry, and extreme minimalism.", href: "/en/showcase/fashion-boutique" },
  { id: "fintech", name: "FinTech Startup", vibe: "Glassmorphism & Data", color: "#8B5CF6", description: "Financial data glitching randomly via text rumble, bio-violet illuminations.", href: "/en/showcase/fintech" },
  { id: "auto-service", name: "Auto Dealership", vibe: "Carbon & Racing Yellow", color: "#FBBF24", description: "Graphic elements like vector tachometers and decisive angular shapes.", href: "/en/showcase/auto-service" },
  { id: "fine-dining", name: "Fine Dining", vibe: "Burgundy Mute Canvas", color: "#831843", description: "Abstracted functional menus, refined atmospheres with purist textures.", href: "/en/showcase/fine-dining" },
  { id: "crossfit", name: "Gym & CrossFit", vibe: "Safety Orange & Sweat", color: "#EA580C", description: "Brutal italics. Massive asymmetric words and a pure industrial gym vibe.", href: "/en/showcase/crossfit" },
  { id: "lens-portfolio", name: "Photo/Video Studio", vibe: "Film Strip Limits", color: "#C0C0C0", description: "Borders marked like 35mm film frames, fully focused on the cursor.", href: "/en/showcase/lens-portfolio" },
  { id: "event-music", name: "Festival Promoters", vibe: "Kinetic Blob Marquee", color: "#EC4899", description: "Liquid shapes combined with massive infinite bands of artists.", href: "/en/showcase/event-music" },
  { id: "logistics-hub", name: "Logistics & Cargo", vibe: "Terminal Gate Cobalt", color: "#1D4ED8", description: "Dense tables simulating airport departures. Rigid grid for top-tier logistics.", href: "/en/showcase/logistics-hub" },
  { id: "ai-future", name: "AI Tech Core", vibe: "Holographic Orbital", color: "#06B6D4", description: "Vector software platforms. Fine CSS 3D representing activated neural nodes.", href: "/en/showcase/ai-future" },
];

export default function ShowcaseIndexEN() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .showcase-wrapper {
          --bg-color: #050505;
          --text-primary: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.6);
          --text-muted: rgba(255, 255, 255, 0.4);
          --text-faint: rgba(255, 255, 255, 0.3);
          --border-color: rgba(255, 255, 255, 0.1);
          --card-bg: rgba(255, 255, 255, 0.02);
          --card-hover-bg: rgba(255, 255, 255, 0.05);
          background-color: var(--bg-color);
          color: var(--text-primary);
          transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .showcase-wrapper:has(.showcase-card:hover) {
          --bg-color: #EEF2EB;
          --text-primary: #1d2731;
          --text-secondary: rgba(29, 39, 49, 0.7);
          --text-muted: rgba(29, 39, 49, 0.5);
          --text-faint: rgba(29, 39, 49, 0.4);
          --border-color: rgba(29, 39, 49, 0.12);
          --card-bg: rgba(255, 255, 255, 0.5);
          --card-hover-bg: rgba(255, 255, 255, 0.9);
        }
      `}} />
    <div className="showcase-wrapper min-h-screen font-sans">
      {/* Intro */}
      <section className="px-6 py-20 lg:px-10 lg:py-32 border-b transition-colors duration-1000 relative" style={{
        borderColor: 'var(--border-color)',
        backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        backgroundPosition: 'center top'
      }}>
        <div className="mx-auto max-w-7xl relative z-10 transition-colors duration-1000">
          <Link href="/en" className="inline-flex items-center text-xs font-mono transition-all duration-1000 mb-12 border rounded-full px-4 py-1.5" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
            ← Back to System Core
          </Link>
          <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.4em] transition-colors duration-1000" style={{ color: 'var(--text-faint)' }}>SYS.SHOWCASE_MATRIX_V2</div>
          <h1 className="text-5xl font-medium leading-[1.0] tracking-[-0.03em] md:text-7xl transition-colors duration-1000">
            18 Absolute<br />
            <span style={{ color: 'var(--text-muted)' }} className="transition-colors duration-1000">Verticals.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 font-sans transition-colors duration-1000" style={{ color: 'var(--text-secondary)' }}>
            We moved past the "predefined themes" stage. 18 unique front-end interfaces, with sharp identities dictated by the psychology of each niche — from medical rigidity, to raw B2B industrial architecture.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((s) => (
          <Link href={s.href} key={s.id} className="showcase-card group relative border transition-all duration-1000 p-8 lg:p-10 flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
            
            <div className="mb-8 z-20">
              <span className="inline-block px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-white shadow-md rounded-full" style={{ backgroundColor: s.color }}>
                {s.vibe}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight mb-4 z-20 transition-colors duration-1000">{s.name}</h2>
            <p className="text-sm leading-6 mb-12 flex-grow z-20 transition-colors duration-1000" style={{ color: 'var(--text-secondary)' }}>{s.description}</p>
            
            <div className="flex items-center justify-between font-mono text-[10px] uppercase border-t pt-6 mt-auto z-20 transition-colors duration-1000" style={{ color: 'var(--text-faint)', borderColor: 'var(--border-color)' }}>
              <span>EXPLORE({s.id})</span>
              <span className="transition-all duration-500 group-hover:translate-x-1 text-sm font-sans" style={{ color: s.color }}>→</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
    </>
  );
}
