import type { Metadata } from "next";
import Link from "next/link";
import { GITHUB_SHOWCASE_PATHS } from "@/lib/githubShowcases";

export const metadata: Metadata = {
  alternates: { canonical: "/en/showcase", languages: { ro: "/showcase", en: "/en/showcase", "x-default": "/showcase" } },
  title: "Industry Showcase — Reverb.ro",
  description: "Applied portfolio of digital environments. 52 Absolute Verticals, executed with structural precision.",
};

const showcases = [
  { id: "surya", name: "Surya Group", vibe: "Brutalism Desyres", color: "#111111", description: "Robust webflow design, based on massive typography and sharp B2B boundaries.", href: "/en/showcase/surya" },
  { id: "florarte", name: "Florarte Textile", vibe: "Pastel Sage & Rose", color: "#4E6E59", description: "B2C floral atelier focused on mature textile aesthetics and sheer presence clarity.", href: "/en/showcase/florarte" },
  { id: "xiaolong", name: "Xiaolong Packaging", vibe: "Industrial B2B", color: "#208b53", description: "Mature corporate B2B design for a global Asian manufacturer, featuring a dynamic markup module.", href: "/en/showcase/xiaolong" },
  { id: "artisan-cafe", name: "Artisan Café", vibe: "Cassette Futurism", color: "#D64933", description: "Technical minimalism and visually extracted thermal data for coffee batches.", href: "/en/showcase/artisan-cafe" },
  { id: "don-barbershop", name: "DON Barbershop & Coffee", vibe: "Gentleman's Evening", color: "#B08D57", description: "A complete site for a barbershop with a coffee bar in Mera, Romania: evening atmosphere, presentation film, services and bookings.", href: "https://don-barbershop.pages.dev/" },
  { id: "medical-center", name: "Medical Clinic", vibe: "Bio-Interface", color: "#0057FF", description: "Absolute rigor. White sterility paired with a live ticker for operating room status.", href: "/en/showcase/medical-center" },
  { id: "legal-firm", name: "Legal Firm", vibe: "Legal Logic Brutal", color: "#8B2520", description: "Massive headings cut horizontally by infinite lines. The authority of law rendered digitally.", href: "/en/showcase/legal-firm" },
  { id: "architecture", name: "Architecture Studio", vibe: "Monolithic Grid", color: "#7A7A7A", description: "Exposed rough stone gray and web architecture guided by the 1.618 golden ratio.", href: "/en/showcase/architecture" },
  { id: "cyber-sec", name: "Cyber Security B2B", vibe: "Terminal Logic", color: "#00FF41", description: "Command-line interface with aggressive scanlines and neon tech green.", href: "/en/showcase/cyber-sec" },
  { id: "real-estate", name: "Real Estate Luxury", vibe: "Obsidian & Gold", color: "#C9A444", description: "Supreme elegance, golden details on a deep background with massive focus on photography.", href: "/en/showcase/real-estate" },
  { id: "fashion-boutique", name: "Fashion Editorial", vibe: "High Contrast Vogue", color: "#FFFFFF", description: "Black and white aesthetics. Serif typography, elegant asymmetry, and extreme minimalism.", href: "/en/showcase/fashion-boutique" },
  { id: "fintech", name: "FinTech Startup", vibe: "Glassmorphism & Data", color: "#8B5CF6", description: "Financial data live streams via text rumble, bio-violet illuminations.", href: "/en/showcase/fintech" },
  { id: "auto-service", name: "Auto Dealership", vibe: "Carbon & Racing Yellow", color: "#FBBF24", description: "Graphic elements like vector tachometers and decisive angular shapes.", href: "/en/showcase/auto-service" },
  { id: "fine-dining", name: "Fine Dining", vibe: "Burgundy Mute Canvas", color: "#831843", description: "Abstracted functional menus, refined atmospheres with purist textures.", href: "/en/showcase/fine-dining" },
  { id: "crossfit", name: "Gym & CrossFit", vibe: "Safety Orange & Sweat", color: "#EA580C", description: "Brutal typography, massive asymmetric words and an industrial athletic vibe.", href: "/en/showcase/crossfit" },
  { id: "lens-portfolio", name: "Photo/Video Studio", vibe: "Film Strip Limits", color: "#C0C0C0", description: "Borders marked like 35mm film frames, fully focused on the visual craft.", href: "/en/showcase/lens-portfolio" },
  { id: "event-music", name: "Festival Promoters", vibe: "Kinetic Blob Marquee", color: "#EC4899", description: "Fluid kinetic shapes combined with infinite marquees of artists.", href: "/en/showcase/event-music" },
  { id: "logistics-hub", name: "Logistics & Cargo", vibe: "Terminal Gate Cobalt", color: "#1D4ED8", description: "Dense tables simulating airport departures. Rigid grid for top-tier logistics.", href: "/en/showcase/logistics-hub" },
  { id: "ai-future", name: "AI Tech Core", vibe: "Holographic Orbital", color: "#06B6D4", description: "Vector software platforms with 3D CSS nodes for next-generation intelligence.", href: "/en/showcase/ai-future" },
  { id: "aura", name: "AURA Retreat", vibe: "Ethereal Glass", color: "#c09054", description: "Therapeutic digital environment with mindfulness interfaces anchored in cognitive ease.", href: "/aura/index.html" },
  { id: "noapte", name: "Night Creativity", vibe: "Nocturnal Sacred", color: "#1e3a8a", description: "Midnight-Blue platform dedicated to chronotypes, sleep architecture, and nocturnal focus.", href: "/noapte/index.html" },
  { id: "spiritual-app", name: "Spiritual Intelligence", vibe: "Cognitive Reprogramming", color: "#9333ea", description: "Interactive web app for dissolving self-sabotage based on cognitive clarity.", href: "/showcase/spiritual-blog" },
  { id: "metanoia", name: "Metanoia Studio", vibe: "Ethereal Sacred", color: "#D4AF37", description: "Clarity in architecture. Elimination of visual noise and pure interactive flip cards.", href: "/showcase/metanoia" },
  { id: "reverb-ecosystem", name: "Reverb Master System", vibe: "Canvas Scrollytelling", color: "#111111", description: "Asymmetric scroll-driven interface unifying digital stores into an autonomous ecosystem.", href: "/showcase/reverb-hybrid" },
  { id: "bricolando", name: "Bricolando DIY", vibe: "Industrial Construction", color: "#E34A27", description: "Robust industrial eCommerce infrastructure engineered for wholesale hardware catalogs.", href: "/showcase/bricolando" },
  { id: "kalki", name: "Kalki Fashion", vibe: "High-End Vogue", color: "#F0F0F0", description: "Luxury visual platform with negative space and editorial asymmetric parallax.", href: "/showcase/kalki" },
  { id: "virtus", name: "Virtus Protocol", vibe: "Primal Masculine", color: "#8A1C14", description: "Extreme contrast brutalist design, high-density typography, and focus on discipline.", href: "/showcase/virtus" },
  { id: "canapuff", name: "Canapuff Premium", vibe: "Neon Glassmorphism", color: "#E2FF00", description: "Modern eCommerce layout, gradient backdrop, infinite marquee, and saturated aesthetics.", href: "/showcase/canapuff" },
  { id: "jim-curtis", name: "Jim Curtis Neuroscience", vibe: "Cognitive Reprogramming", color: "#06B6D4", description: "Digital experience focused on neuroscience, somatic healing, and clinical indigo clarity.", href: "/showcase/jim-curtis" },
  { id: "clarity-architecture", name: "Clarity Architecture", vibe: "Sacred Infographic", color: "#C9A444", description: "A visual architectural treatise on technical infrastructure and sacred proportions.", href: "/clarity-architecture" },
  { id: "soare", name: "Soare & Izvoare", vibe: "Ethereal Solaris", color: "#D97706", description: "Radiant, warm interface designed for businesses focused on clarity and organic elevation.", href: "/showcase/soare" },
  { id: "cuprum-medical", name: "Cuprum Clinic", vibe: "Medical Copper", color: "#C47022", description: "Revolutionary clinical design built around steel and cut with natural antimicrobial copper.", href: "/showcase/cuprum-medical" },
  { id: "origini", name: "Origini & Measure", vibe: "Ancestral Minimalism", color: "#A0402C", description: "A visual manifesto dedicated to folk arts, tradition, and earthly balance on hemp and wood.", href: "/showcase/origini" },
  { id: "inhale-exhale", name: "Inhale Exhale", vibe: "Rhythmic Flow", color: "#2E4F4F", description: "Meditative digital experience with rhythmic breathing animations and pure typography.", href: "/showcase/inhale-exhale" },
  { id: "vespa-urban", name: "Veloce Mobility", vibe: "Dolce Vita Efficiency", color: "#E0F2EC", description: "Streamlined minimalism, aerodynamic curves, and pastel mint palette for urban startups.", href: "/showcase/vespa-urban" },
  { id: "the-anchor", name: "The Anchor", vibe: "Ethereal Brutalism", color: "#8A1C14", description: "Philosophical visual essay on steadfast groundedness amidst systemic volatility.", href: "/showcase/the-anchor" },
  { id: "ai-first-framework", name: "AI-First Framework", vibe: "Operating System Logic", color: "#6366f1", description: "Presentation for the AI-First framework: AI as the core operating system of the enterprise.", href: "/ai-first-framework/ai-first/" },
  { id: "silva-method", name: "The Silva Method", vibe: "Alpha State Science", color: "#7C3AED", description: "Scientific and psychological exploration of the Alpha state and subconscious focus.", href: "/silva-method/" },
  { id: "spatiul-deschis", name: "Open Space", vibe: "Conscious Intimacy", color: "#BE185D", description: "Digital publication on emotional grounding, clarity in communication, and mutual safety.", href: "/spatiul-deschis/" },
  { id: "elumia", name: "Elumia", vibe: "Guide to the Unseen Plane", color: "#A78BFA", description: "Interactive bilingual guide to inner faculties, mind navigation, and cognitive stillness.", href: "/elumia/" },
  { id: "flooare-ro-site", name: "Flooare.ro", vibe: "Harmony of the Spheres", color: "#0EA5E9", description: "Portal of archetypes and harmonic resonance. Sacred geometry and acoustic purity.", href: "/flooare-ro-site/" },
  { id: "flooare-portal", name: "Flooare Portal", vibe: "Archetype Portal", color: "#14B8A6", description: "Extended Flooare portal: archetypes, structural sound frequencies, and interactive paths.", href: "https://www.flooare.ro/" },
  { id: "armonia", name: "ARMONIA", vibe: "Letters & Practices", color: "#B45309", description: "Twenty-one short letters with practical stoic exercises and grounding aphorisms.", href: "https://yourfinestform.com/" },
  { id: "immortallight", name: "The Immortal Light", vibe: "Sacred Teaching", color: "#EAB308", description: "Distilled universal teachings across civilizations: eight chapters and seven core pillars.", href: "https://immortallight.app/" },
  { id: "oracol", name: "The Five Circles Oracle", vibe: "52-Card Wisdom Oracle", color: "#DC2626", description: "A 52-card wisdom oracle interface for intuitive decision-making and clarity.", href: "https://pentora.app/" },
  { id: "roluri-familia-alcoolicului", name: "When Someone Drinks", vibe: "Recovery Map", color: "#0F766E", description: "Clinical recovery framework, twelve-step recovery maps, and active support infrastructure.", href: "https://candcinevabea.life/" },
  { id: "fish-io", name: "Abyss.io Game Engine", vibe: "Cyber-Ocean Collision", color: "#00E5FF", description: "HTML5 Canvas 60FPS engine in React: collision detection, AI boids, and instant monetization.", href: "/showcase/fish-io" },
  { id: "neuro-recovery", name: "NeuroLumina", vibe: "Dark to Light Recovery", color: "#10B981", description: "Scroll-telling platform exploring addiction biology, dopamine recalibration, and homeostasis.", href: "/en/showcase/neuro-recovery" },
  { id: "acasa-showcase", name: "Acasă Showcase", vibe: "Premium Glassmorphism", color: "#6c5ce7", description: "Digital showcase for innovative product architectures and AI startup ecosystems.", href: "/acasa-showcase/index.html" },
  { id: "guru-store", name: "Guru Store", vibe: "E-Commerce Fluid", color: "#f59e0b", description: "High-speed interactive product catalog with fluid motions and rapid 1-click checkout.", href: "/guru-store/index.html" },
  { id: "spiritual-site", name: "Spiritual Reading", vibe: "Ethereal Text", color: "#8b5cf6", description: "Minimalist editorial reading interface containing over 140 structured essays.", href: "/spiritual-site/index.html" },
  { id: "humanoid-reality-2026", name: "Humanoid Reality 2026", vibe: "Deep Space Cyberpunk", color: "#00E5FF", description: "Market analysis and architectural review of the $750B humanoid robotics ecosystem.", href: "/humanoid-reality-2026" }
];

export default function ShowcaseIndexEN() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .showcase-wrapper {
          --bg-color: #070809;
          --text-primary: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.7);
          --text-muted: rgba(255, 255, 255, 0.45);
          --text-faint: rgba(255, 255, 255, 0.35);
          --border-color: rgba(255, 255, 255, 0.1);
          --card-bg: rgba(255, 255, 255, 0.02);
          --card-hover-bg: rgba(255, 255, 255, 0.05);
          background-color: var(--bg-color);
          color: var(--text-primary);
          transition: background-color 0.4s ease, color 0.4s ease;
        }
        .showcase-wrapper:has(.showcase-card:hover) {
          --border-color: rgba(255, 255, 255, 0.2);
        }

        /* ── LIGHT THEME CALIBRATION (WCAG AAA HIGHEST CONTRAST) ── */
        html.light .showcase-wrapper {
          --bg-color: #FAF8F5;
          --text-primary: #111215;
          --text-secondary: #344054;
          --text-muted: #475467;
          --text-faint: #667085;
          --border-color: rgba(29, 39, 49, 0.15);
          --card-bg: #FFFFFF;
          --card-hover-bg: #F8F6F1;
          color: #111215;
        }
        html.light .showcase-wrapper:has(.showcase-card:hover) {
          --border-color: rgba(29, 39, 49, 0.25);
        }
        html.light .showcase-card {
          box-shadow: 0 4px 20px -2px rgba(29, 39, 49, 0.06);
          border-color: rgba(29, 39, 49, 0.14) !important;
          background-color: #FFFFFF !important;
        }
        html.light .showcase-card:hover {
          box-shadow: 0 16px 36px -4px rgba(29, 39, 49, 0.12);
          border-color: rgba(29, 39, 49, 0.28) !important;
        }
      `}} />
    <div className="showcase-wrapper min-h-screen font-sans">
      {/* Intro */}
      <section className="px-6 py-20 lg:px-10 lg:py-32 border-b transition-colors duration-500 relative" style={{
        borderColor: 'var(--border-color)',
        backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        backgroundPosition: 'center top'
      }}>
        <div className="mx-auto max-w-7xl relative z-10 transition-colors duration-500">
          <Link href="/en" className="inline-flex items-center text-xs font-mono transition-all duration-300 mb-12 border rounded-full px-4 py-1.5 shadow-sm" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
            ← Back to System Core
          </Link>
          <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.4em] transition-colors duration-500 font-semibold" style={{ color: "var(--text-faint)" }}>
            [ CLARITY IN STRUCTURE • 52 ABSOLUTE VERTICALS ]
          </div>
          <h1 className="text-5xl font-medium leading-[1.0] tracking-[-0.03em] md:text-7xl transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
            52 Absolute<br />
            <span style={{ color: 'var(--text-muted)' }} className="transition-colors duration-500">Verticals.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 font-sans transition-colors duration-500 font-normal" style={{ color: 'var(--text-secondary)' }}>
            We moved past the "predefined themes" stage. 52 unique front-end interfaces, with sharp identities dictated by the psychology of each niche — from medical rigidity, to raw B2B industrial architecture.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((s) => {
          const isExternal = /^https?:\/\//.test(s.href) || GITHUB_SHOWCASE_PATHS.some((p) => s.href.startsWith(`/${p}/`));
          const linkProps = isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
          return (
          <Link href={s.href} key={s.id} {...linkProps} className="showcase-card group relative border transition-all duration-300 p-8 lg:p-10 flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
            
            <div className="mb-8 z-20">
              <span className="inline-block px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-white shadow-md rounded-full font-bold" style={{ backgroundColor: s.color }}>
                {s.vibe}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight mb-4 z-20 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
              {s.name}
            </h2>
            <p className="text-sm leading-6 mb-12 flex-grow z-20 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
              {s.description}
            </p>
            
            <div className="flex items-center justify-between font-mono text-[10px] uppercase border-t pt-6 mt-auto z-20 transition-colors duration-300 font-medium" style={{ color: 'var(--text-faint)', borderColor: 'var(--border-color)' }}>
              <span>EXPLORE({s.id})</span>
              <span className="transition-all duration-300 group-hover:translate-x-1 text-sm font-sans font-bold" style={{ color: s.color }}>→</span>
            </div>
          </Link>
          );
        })}
      </section>
    </div>
    </>
  );
}
