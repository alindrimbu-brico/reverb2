import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry Showcase — Reverb.ro",
  description: "Portofoliu aplicat de prezențe digitale. 21 Verticale Absolute, executate cu precizie structurală.",
};

const showcases = [
  { id: "surya", name: "Surya Group", vibe: "Brutalism Desyres", color: "#111111", description: "Design webflow robust, bazat pe typography imens și delimitări tăioase B2B.", href: "/showcase/surya" },
  { id: "florarte", name: "Florarte Textile", vibe: "Pastel Sage & Rose", color: "#4E6E59", description: "Atelier floral B2C axat pe estetica textila matura și claritatea prezenței.", href: "/showcase/florarte" },
  { id: "xiaolong", name: "Xiaolong Packaging", vibe: "Industrial B2B", color: "#208b53", description: "Design corporativ matur B2B pentru un producător asiatic global, cu modul dinamic de markup +25%.", href: "/showcase/xiaolong" },
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
  { id: "aura", name: "AURA Retreat", vibe: "Ethereal Glass", color: "#c09054", description: "Aplicație digitală terapeutică (SPA). Meniuri de conștientizare și design fluid ancorat în cognitive ease.", href: "/aura/index.html" },
  { id: "noapte", name: "Creativ Noaptea", vibe: "Nocturnal Sacred", color: "#1e3a8a", description: "Platformă curată Midnight-Blue dedicată analizei „bufnițelor de noapte”. Arhitectura somnului, cronotipuri și tradiții antice.", href: "/noapte/index.html" },
  { id: "spiritual-app", name: "Inteligență Spirituală (APP)", vibe: "Cognitive Reprogramming", color: "#9333ea", description: "Aplicație web complexă (React State). Motor interactiv pentru dizolvarea auto-sabotajului pe baza psihologiei Brianna Wiest.", href: "/showcase/spiritual-blog" },
  { id: "metanoia", name: "Metanoia Studio", vibe: "Ethereal Sacred", color: "#D4AF37", description: "Arhitectura Clarității. Eliminarea zgomotului vizual și metoda flip cards aplicată pentru conținut filozofic profund.", href: "/showcase/metanoia" },
  { id: "reverb-ecosystem", name: "Reverb Master System", vibe: "Canvas Scrollytelling", color: "#111111", description: "O interfață complet asimetrică și scroll-driven, integrând magazinele Bricolando și Kalki într-un ecosistem uman+AI.", href: "/showcase/reverb-hybrid" },
  { id: "bricolando", name: "Bricolando DIY", vibe: "Industrial Construction", color: "#E34A27", description: "Infrastructură digitală B2B robustă, dedicată mediului industrial și fluxului en-gros de mii de produse utilitare.", href: "/showcase/bricolando" },
  { id: "kalki", name: "Kalki Fashion", vibe: "High-End Vogue", color: "#F0F0F0", description: "Platformă luxury dominată de imagini. Spațiu negativ generos și paralaxă asimetrică specifică designului editorial.", href: "/showcase/kalki" },
  { id: "virtus", name: "Virtus Protocol", vibe: "Primal Masculine", color: "#8A1C14", description: "Forță absolută. Design brutalist dominat de contrast extrem, typography all-caps masiv și focus pe spiritul masculin: disciplină, corp, frăție.", href: "/showcase/virtus" },
  { id: "canapuff", name: "Canapuff Premium", vibe: "Neon Glassmorphism", color: "#E2FF00", description: "Replică 1:1 a brandului Canapuff CBD. Layout gradient asimetric e-commerce, marquee infinit și experiență de modă ultra-saturată.", href: "/showcase/canapuff" },
  { id: "jim-curtis", name: "Jim Curtis Neuroscience", vibe: "Cognitive Reprogramming", color: "#06B6D4", description: "O experiență digitală profundă axată pe neuroștiință, vindecare somatică și Hypno-Coaching℠. Estetică clinical-indigo.", href: "/showcase/jim-curtis" },
  { id: "clarity-architecture", name: "Arhitectura Clarității", vibe: "Sacred Infographic", color: "#C9A444", description: "Un tratat vizual. De la infrastructură tehnică (GitHub/Vercel) și structuri educaționale flashcard, până la estetica spațiului sacru.", href: "/clarity-architecture" },
  { id: "soare", name: "Soare & Izvoare", vibe: "Ethereal Solaris", color: "#D97706", description: "„Până sus în soare, la marile izboare”. Interfață luminoasă, radiind căldură, creată pentru afaceri axate pe claritate, ascensiune și organicitate premium.", href: "/showcase/soare" },
  { id: "cuprum-medical", name: "Cuprum Clinic", vibe: "Medical Copper", color: "#C47022", description: "Design clinic revoluționar construit în jurul oțelului și tăiat cu patina cuprului, reflectând moștenirea proprietăților sale antimicrobiene naturale.", href: "/showcase/cuprum-medical" },
  { id: "origini", name: "Origini & Măsură", vibe: "Ancestral Minimalism", color: "#A0402C", description: "Un manifesto vizual dedicat artelor populare, tradiției și bunului simț pământesc. Echilibru nealterat pe un fundal pur de cânepă și lemn.", href: "/showcase/origini" },
  { id: "inhale-exhale", name: "Inhale Exhale", vibe: "Rhythmic Flow", color: "#2E4F4F", description: "O experiență digitală meditativă care respiră. Echilibrul perfect între absorbția de date și expresia creativă prin design pulsatil.", href: "/showcase/inhale-exhale" },
  { id: "vespa-urban", name: "Veloce Mobility", vibe: "Dolce Vita Efficiency", color: "#E0F2EC", description: "Minimalism rotunjit, curbe aerodinamice și nuanțe de pastel mint. Un concept Vespa-vibe dedicat startup-urilor de mobilitate urbană.", href: "/showcase/vespa-urban" },
  { id: "the-anchor", name: "The Anchor", vibe: "Ethereal Brutalism", color: "#8A1C14", description: "Eseu filosofic vizual despre masculinitatea matură și susținerea partenerului în haos. Estetică întunecată și typography tensionat.", href: "/showcase/the-anchor" },
  { id: "ai-first-framework", name: "AI-First Framework", vibe: "Operating System Logic", color: "#6366f1", description: "Blog-prezentare premium pentru framework-ul de transformare AI-First. Tipografie tehnică, gradient indigo-cyan și narative pe 5 capitole despre AI ca sistem de operare al companiei.", href: "https://alindrimbu-brico.github.io/ai-first-framework/" }
];

export default function ShowcaseIndex() {
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
          --bg-color: #EEF2EB; /* Verde Salvie Pal */
          --text-primary: #1d2731;
          --text-secondary: rgba(29, 39, 49, 0.7);
          --text-muted: rgba(29, 39, 49, 0.5);
          --text-faint: rgba(29, 39, 49, 0.4);
          --border-color: rgba(29, 39, 49, 0.12);
          --card-bg: rgba(255, 255, 255, 0.5);
          --card-hover-bg: rgba(255, 255, 255, 0.9);
        }
      `}} />
    <div className="showcase-wrapper min-h-screen">
      {/* Intro */}
      <section className="px-6 py-20 lg:px-10 lg:py-32 border-b transition-colors duration-1000 relative" style={{
        borderColor: 'var(--border-color)',
        backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        backgroundPosition: 'center top'
      }}>
        <div className="mx-auto max-w-7xl relative z-10 transition-colors duration-1000">
          <Link href="/templates" className="inline-flex items-center text-xs font-mono transition-all duration-1000 mb-12 border rounded-full px-4 py-1.5" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
            ← Înapoi la direcții de bază
          </Link>
          <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.4em] transition-colors duration-1000" style={{ color: 'var(--text-faint)' }}>SYS.SHOWCASE_MATRIX_V2</div>
          <h1 className="text-5xl font-medium leading-[1.0] tracking-[-0.03em] md:text-7xl transition-colors duration-1000">
            21 Verticale<br />
            <span style={{ color: 'var(--text-muted)' }} className="transition-colors duration-1000">Absolute.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 font-sans transition-colors duration-1000" style={{ color: 'var(--text-secondary)' }}>
            Am depășit stadiul de "teme predefinite". 21 interfețe front-end unice, cu identități tăioase dictate de psihologia fiecărei nișe — de la rigiditatea medicală, până la arhitectura industrială B2B.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((s) => {
          const isExternal = /^https?:\/\//.test(s.href);
          const linkProps = isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
          return (
          <Link href={s.href} key={s.id} {...linkProps} className="showcase-card group relative border transition-all duration-1000 p-8 lg:p-10 flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}>
            
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
          );
        })}
      </section>
    </div>
    </>
  );
}
