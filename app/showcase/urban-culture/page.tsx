import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DRIP.OS | Urban Culture & Streetwear — Showcase Reverb",
  description: "Showcase Reverb: brand de streetwear cu identitate digitală puternică. Drop system, colecții, manifesto și comunitate.",
};

const currentDrop = [
  { code: "UC-001", name: "Heavyweight Tee — Coal", size: "XS–3XL", price: "249", status: "DISPONIBIL", color: "#1a1a1a" },
  { code: "UC-002", name: "Cargo Ripstop — Olive", size: "S–XXL", price: "449", status: "ULTIMELE 3", color: "#4a5240" },
  { code: "UC-003", name: "Oversized Coach — Bone", size: "M–XXL", price: "599", status: "DISPONIBIL", color: "#d4cec4" },
  { code: "UC-004", name: "Bucket Hat — Black Logo", size: "ONE SIZE", price: "189", status: "SOLD OUT", color: "#111111" },
  { code: "UC-005", name: "Crewneck — Ash Grey", size: "S–3XL", price: "379", status: "DISPONIBIL", color: "#9a9a9a" },
  { code: "UC-006", name: "Track Pant — Charcoal", size: "XS–XXL", price: "319", status: "ULTIMELE 2", color: "#333333" },
];

const archive = [
  { season: "SS24", name: "\"Sistem\"", pieces: 12, desc: "Structuri urbane. Uniforma orașului modern." },
  { season: "AW23", name: "\"Ruine\"", pieces: 9, desc: "Ce rămâne după haos. Texturi brute, paleta dezintegrată." },
  { season: "SS23", name: "\"Frecvență\"", pieces: 14, desc: "Semnale. Zgomot de fond transformat în estetică." },
  { season: "AW22", name: "\"Zero\"", pieces: 8, desc: "Primul drop. Minimalismul ca manifest fondator." },
];

const community = [
  { handle: "@vlad.crb", city: "Cluj", piece: "Cargo Ripstop AW23" },
  { handle: "@maria.str", city: "București", piece: "Crewneck SS24" },
  { handle: "@dan.fcs", city: "Focșani", piece: "Heavyweight Tee SS24" },
  { handle: "@ioana.bv", city: "Brașov", piece: "Coach Jacket AW23" },
  { handle: "@alex.tm", city: "Timișoara", piece: "Track Pant SS24" },
  { handle: "@radu.ct", city: "Constanța", piece: "Bucket Hat AW23" },
];

export default function UrbanCulture() {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans antialiased overflow-x-hidden">

      {/* Ticker tape */}
      <div className="bg-[#E2FF00] text-[#0A0A0A] py-1.5 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] animate-[marquee_20s_linear_infinite]">
          {Array(6).fill(null).map((_, i) => (
            <span key={i}>DROP SS24 LIVE · 6 PIESE NOI · LIVRARE GRATUITĂ PESTE 300 LEI · STOCK LIMITAT · URBAN CULTURE ·&nbsp;</span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#E2FF00] animate-[blink_1s_infinite]" />
            <span className="font-black text-base tracking-[0.15em] uppercase">DRIP.OS</span>
            <span className="text-white/20 text-xs ml-1">v2.4</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {[["Drop curent", "#drop"], ["Archive", "#archive"], ["Manifesto", "#manifesto"], ["Comunitate", "#comunitate"]].map(([label, href]) => (
              <a key={label} href={href}
                className="text-[11px] uppercase tracking-[0.15em] text-white/40 hover:text-[#E2FF00] transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              Cart (0)
            </button>
            <a href="#drop"
              className="bg-[#E2FF00] text-[#0A0A0A] px-5 py-2.5 text-[11px] font-black uppercase tracking-widest hover:bg-[#ccff00] transition-colors">
              Shop Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[95vh] grid lg:grid-cols-12 overflow-hidden">

        {/* Left panel */}
        <div className="lg:col-span-7 flex flex-col justify-end p-8 lg:p-16 pb-16 relative border-r border-white/10">
          <div className="absolute top-8 left-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
            [ SS24 · Drop #04 · 6 piese ]
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 border border-[#E2FF00]/30 px-3 py-1.5 rounded-sm mb-4">
              <span className="w-1.5 h-1.5 bg-[#E2FF00] rounded-full animate-[blink_0.8s_infinite]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2FF00]">Drop activ · Stock limitat</span>
            </div>
          </div>

          <h1 className="text-[clamp(64px,12vw,160px)] font-black leading-[0.82] tracking-[-0.04em] uppercase mb-10">
            Cultură.<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #E2FF00" }}>Fără</span><br />
            Filtru.
          </h1>

          <div className="flex flex-wrap gap-4">
            <a href="#drop"
              className="bg-[#E2FF00] text-[#0A0A0A] px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-[#ccff00] transition-colors">
              Explorează drop-ul →
            </a>
            <a href="#manifesto"
              className="border border-white/20 text-white px-8 py-4 font-black uppercase tracking-widest text-[11px] hover:border-[#E2FF00] hover:text-[#E2FF00] transition-colors">
              Manifesto
            </a>
          </div>
        </div>

        {/* Right panel — stats */}
        <div className="lg:col-span-5 flex flex-col border-t lg:border-t-0 border-white/10">
          <div className="flex-1 border-b border-white/10 p-8 flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Piese în drop curent</div>
            <div className="text-8xl font-black text-[#E2FF00]">06</div>
            <div className="text-white/40 text-sm mt-2">Ediție limitată · Fără restoc</div>
          </div>
          <div className="flex flex-row lg:flex-col flex-1">
            <div className="flex-1 border-r lg:border-r-0 border-b border-white/10 p-8 flex flex-col justify-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">Drops active</div>
              <div className="text-4xl font-black">4</div>
              <div className="text-white/40 text-xs mt-1">Sezoane arhivate</div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">Comunitate</div>
              <div className="text-4xl font-black">2.4K+</div>
              <div className="text-white/40 text-xs mt-1">Membri activi</div>
            </div>
          </div>
        </div>
      </section>

      {/* DROP CURENT */}
      <section id="drop" className="py-20 px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] text-[#E2FF00] uppercase tracking-[0.3em] mb-3">— Drop SS24 · Activ acum</p>
              <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tight">Colecția curentă.</h2>
            </div>
            <div className="flex items-center gap-3 border border-white/10 px-4 py-2 rounded-sm">
              <span className="w-2 h-2 bg-[#E2FF00] rounded-full animate-[blink_0.8s_infinite]" />
              <span className="text-[11px] uppercase tracking-widest text-white/60">Stoc actualizat în timp real</span>
            </div>
          </div>

          {/* Product grid */}
          <div className="space-y-0">
            {currentDrop.map((item, i) => (
              <div key={i}
                className={`grid grid-cols-12 items-center py-6 border-t border-white/10 group cursor-pointer hover:bg-white/3 transition-all px-4 -mx-4 ${item.status === "SOLD OUT" ? "opacity-40" : ""}`}>
                {/* Color swatch */}
                <div className="col-span-1 hidden lg:block">
                  <div className="w-8 h-8 rounded-sm border border-white/20" style={{ backgroundColor: item.color }} />
                </div>
                {/* Code */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-[10px] text-white/30">{item.code}</span>
                </div>
                {/* Name */}
                <div className="col-span-6 lg:col-span-5">
                  <h3 className="font-bold text-lg group-hover:text-[#E2FF00] transition-colors">{item.name}</h3>
                  <p className="text-white/30 text-xs">{item.size}</p>
                </div>
                {/* Status */}
                <div className="col-span-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    item.status === "SOLD OUT" ? "text-white/20" :
                    item.status.includes("ULTIMELE") ? "text-[#E2FF00]" : "text-white/50"
                  }`}>
                    {item.status}
                  </span>
                </div>
                {/* Price + CTA */}
                <div className="col-span-2 lg:col-span-3 flex items-center justify-end gap-4">
                  <span className="font-black text-lg">{item.price} lei</span>
                  {item.status !== "SOLD OUT" && (
                    <button className="hidden lg:block bg-[#E2FF00] text-[#0A0A0A] px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#ccff00] transition-colors opacity-0 group-hover:opacity-100">
                      Adaugă
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <div className="mt-8 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <p className="text-white/30 text-xs">* Stocul nu se reface. Fiecare piesă e finită.</p>
            <div className="flex gap-4">
              <button className="border border-white/20 text-white/50 px-6 py-2.5 text-[11px] uppercase tracking-widest hover:border-[#E2FF00] hover:text-[#E2FF00] transition-colors font-bold">
                Filtrează
              </button>
              <button className="bg-white text-[#0A0A0A] px-6 py-2.5 text-[11px] uppercase tracking-widest font-black hover:bg-[#E2FF00] transition-colors">
                Vezi tot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="py-28 px-6 lg:px-10 bg-[#E2FF00] text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] mb-4 opacity-50">— De ce existăm</p>
              <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.85]">
                Mani<br />festo.
              </h2>
            </div>
            <div className="space-y-8 text-[#0A0A0A]/70 text-base leading-relaxed lg:pt-20">
              <p className="text-xl font-bold text-[#0A0A0A]">
                Nu vindem haine. Vindem poziție.
              </p>
              <p>
                DRIP.OS s-a născut din convingerea că streetwear-ul românesc nu are nevoie de validare externă.
                Nu căutăm să fim versiunea locală a unui brand occidental. Suntem noi.
              </p>
              <p>
                Fiecare piesă e gândită cu intenție. Materialele sunt selectate manual. Producția e locală.
                Stocul e limitat nu din strategie de marketing — ci pentru că nu credem în fabricarea în masă.
              </p>
              <p>
                Purtăm ce producem. Propunem ce credem. Nu ne scuzăm pentru că suntem reali.
              </p>
              <div className="pt-6 border-t-2 border-[#0A0A0A]/20">
                <p className="font-black text-[#0A0A0A]">— Echipa DRIP.OS · Focșani / București · 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section id="archive" className="py-28 px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] text-[#E2FF00] uppercase tracking-[0.3em] mb-3">— Colecții anterioare</p>
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tight">Archive.</h2>
          </div>

          <div className="space-y-0">
            {archive.map((item, i) => (
              <div key={i}
                className="grid grid-cols-12 items-center py-8 border-t border-white/10 group cursor-pointer hover:bg-white/3 transition-colors px-4 -mx-4">
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-xs text-white/30">{item.season}</span>
                </div>
                <div className="col-span-8 lg:col-span-7">
                  <h3 className="text-2xl lg:text-4xl font-black uppercase group-hover:text-[#E2FF00] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-sm mt-2 lg:mt-0 lg:inline lg:ml-4">{item.desc}</p>
                </div>
                <div className="col-span-2 lg:col-span-2 text-right lg:text-center">
                  <span className="text-white/20 text-sm">{item.pieces} piese</span>
                </div>
                <div className="hidden lg:flex col-span-2 justify-end">
                  <span className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-[#E2FF00] transition-colors">
                    Sold Out →
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* COMUNITATE */}
      <section id="comunitate" className="py-28 px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] text-[#E2FF00] uppercase tracking-[0.3em] mb-3">— Cei care poartă</p>
              <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tight">Comunitate.</h2>
            </div>
            <p className="max-w-xs text-white/50 text-sm leading-relaxed">
              Nu avem influenceri plătiți. Avem oameni reali care aleg să poarte ce facem noi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
            {community.map((member, i) => (
              <div key={i}
                className={`p-8 hover:bg-[#E2FF00]/5 transition-colors group cursor-pointer
                  ${i % 3 !== 2 ? "lg:border-r" : ""} border-white/10
                  ${i < 3 ? "border-b" : ""} border-white/10`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#E2FF00]/20 transition-colors" />
                  <span className="text-[10px] text-white/20 font-mono">{member.city}</span>
                </div>
                <div className="font-bold text-lg group-hover:text-[#E2FF00] transition-colors mb-1">{member.handle}</div>
                <div className="text-white/40 text-sm">{member.piece}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between border border-dashed border-white/20 p-6 rounded-sm">
            <div>
              <p className="font-bold text-white">Faci parte din comunitate?</p>
              <p className="text-white/40 text-sm mt-1">Tag-uiește @dripos.ro pe Instagram sau trimite-ne poza direct.</p>
            </div>
            <button className="border border-[#E2FF00] text-[#E2FF00] px-6 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#E2FF00] hover:text-[#0A0A0A] transition-colors whitespace-nowrap">
              Submit foto →
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / EARLY ACCESS */}
      <section className="py-28 px-6 lg:px-10 bg-white text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-4 opacity-40">— Fii primul</p>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-[-0.03em] mb-6">
            Early access<br />la next drop.
          </h2>
          <p className="text-lg text-[#0A0A0A]/60 mb-10 max-w-md mx-auto">
            Abonații primesc linkul cu 24h înainte de lansarea publică. Stocul dispare în ore.
          </p>
          <div className="flex flex-col lg:flex-row gap-0 max-w-lg mx-auto">
            <input
              className="flex-1 border-2 border-[#0A0A0A] px-6 py-4 text-sm bg-transparent focus:outline-none placeholder-[#0A0A0A]/30"
              placeholder="email@tău.ro"
            />
            <button className="bg-[#0A0A0A] text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-[#E2FF00] hover:text-[#0A0A0A] transition-colors">
              Vreau acces →
            </button>
          </div>
          <p className="text-[10px] text-[#0A0A0A]/30 mt-4 uppercase tracking-widest">
            Fără spam. Dezabonare oricând.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6 lg:px-10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/10 pb-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E2FF00]" />
              <span className="font-black text-lg tracking-[0.15em] uppercase">DRIP.OS</span>
            </div>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest text-white/30">
              <a href="#drop" className="hover:text-[#E2FF00] transition-colors">Drop curent</a>
              <a href="#archive" className="hover:text-[#E2FF00] transition-colors">Archive</a>
              <a href="#manifesto" className="hover:text-[#E2FF00] transition-colors">Manifesto</a>
              <a href="#" className="hover:text-[#E2FF00] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#E2FF00] transition-colors">TikTok</a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <p className="text-[10px] text-white/20">© 2024 DRIP.OS · Toate drepturile rezervate</p>
            <div className="flex gap-6 text-[10px] text-white/20">
              <a href="#" className="hover:text-white transition-colors">Termeni</a>
              <a href="#" className="hover:text-white transition-colors">Retur</a>
              <a href="#" className="hover:text-white transition-colors">GDPR</a>
            </div>
            <p className="text-[10px] text-white/20">
              Site de <Link href="/" className="text-[#E2FF00] hover:underline">Reverb.ro</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
