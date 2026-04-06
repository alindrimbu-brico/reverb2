import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Extraction Lab | Specialty Coffee — Showcase Reverb",
  description: "Showcase Reverb: identitate digitală completă pentru o cafenea specialty. Site cu meniu, rezervări și story de brand.",
};

const menu = [
  {
    category: "Espresso",
    items: [
      { name: "Ristretto", desc: "Extracție scurtă, intensitate maximă, corp dens", price: "12" },
      { name: "Lungo Natural", desc: "Extracted slow. Note de cireșe negre și cacao", price: "14" },
      { name: "Cortado", desc: "Espresso dublu temperat cu lapte micro-spumat 1:1", price: "16" },
    ],
  },
  {
    category: "Filter",
    items: [
      { name: "V60 Single Origin", desc: "Rotație lunară. Ethiopia Yirgacheffe — floral, citric", price: "18" },
      { name: "Chemex Batch", desc: "Pour-over lent. Colombia Huila — caramel, piersică", price: "17" },
      { name: "Aeropress Express", desc: "Presiune controlată. Bright și curat. Disponibil iced", price: "15" },
    ],
  },
  {
    category: "Signature",
    items: [
      { name: "Ember Tonic", desc: "Espresso, fever-tree tonic, coajă portocală, gheață", price: "22" },
      { name: "Black Honey", desc: "Cold brew 18h, miere raw, lămâie arsă, sare roz", price: "24" },
      { name: "Milk & Smoke", desc: "Lapte fumizat la rece, espresso, sirop de lemn dulce", price: "26" },
    ],
  },
];

const values = [
  { num: "01", title: "Origine trasabilă", body: "Fiecare sac de cafea vine cu coordonatele GPS ale fermei, numele fermierului și data recoltei. Nu există cafea anonimă aici." },
  { num: "02", title: "Prăjire la 48h", body: "Prăjim în micro-loturi de 5kg, la 48 de ore înainte de servire. Nu există stoc. Există doar prospețime." },
  { num: "03", title: "Extracție calibrată", body: "Fiecare baristand trece prin 60 de ore de training înainte de a atinge espressorul. Precizia nu e opțională." },
  { num: "04", title: "Spațiu, nu café", body: "Am proiectat locul pentru conversații lungi și muncă profundă. 14 prize, WiFi dedicat, zgomot de fond calibrat la 65dB." },
];

const events = [
  { date: "12 APR", title: "Cupping Session: Kenya vs. Ethiopia", spots: "8 locuri rămase" },
  { date: "19 APR", title: "Brewing Masterclass — V60 Fundamentals", spots: "12 locuri rămase" },
  { date: "26 APR", title: "Latte Art Open: Comunitate & Cafea", spots: "Deschis publicului" },
  { date: "03 MAI", title: "Origin Story: Guatemala Q Grader Live", spots: "6 locuri rămase" },
];

export default function ArtisanCafe() {
  return (
    <div className="bg-[#0E0A08] text-[#F2EDE6] font-sans antialiased overflow-x-hidden">

      {/* Announcement bar */}
      <div className="bg-[#D64933] text-[#0E0A08] text-center py-2 px-4 text-[11px] font-bold tracking-[0.2em] uppercase">
        Single Origin din Etiopia · Prăjit Marți · Disponibil Joi —{" "}
        <span className="underline cursor-pointer">Comandă acum →</span>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E0A08]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#D64933] flex items-center justify-center">
              <span className="text-[10px] font-black text-[#0E0A08]">EL</span>
            </div>
            <div>
              <div className="text-sm font-bold tracking-widest uppercase text-white">Extraction Lab</div>
              <div className="text-[9px] text-white/40 tracking-[0.2em] uppercase">Specialty Coffee · Brașov</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {["Meniu", "Story", "Metode", "Evenimente"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.15em] text-white/50 hover:text-[#D64933] transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <a href="#rezervare"
            className="bg-[#D64933] text-[#0E0A08] px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#bf3d28] transition-colors rounded-sm">
            Rezervă masă
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-[92vh] flex flex-col justify-end px-6 lg:px-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a] via-[#0E0A08] to-[#0E0A08]" />
        <div className="absolute top-16 right-10 hidden lg:flex flex-col items-end gap-1">
          <div className="border border-[#D64933]/40 rounded-full px-4 py-1.5 text-[10px] text-[#D64933] uppercase tracking-widest">
            ✦ Specialty Score 92+
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="mb-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D64933] font-bold">
              — Cafea cu sens. Spațiu cu intenție.
            </span>
          </div>
          <h1 className="text-[clamp(52px,10vw,140px)] font-black leading-[0.88] tracking-[-0.03em] uppercase mb-10">
            Cafeaua <br />
            <span className="text-[#D64933]">nu</span> se bea. <br />
            Se studiază.
          </h1>
          <div className="flex flex-wrap gap-6 items-center">
            <a href="#meniu"
              className="inline-flex items-center gap-3 bg-[#D64933] text-[#0E0A08] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#bf3d28] transition-colors rounded-sm">
              Explorează meniul <span>→</span>
            </a>
            <a href="#story"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest text-[11px] hover:border-[#D64933] hover:text-[#D64933] transition-colors rounded-sm">
              Povestea noastră
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-0 border-t border-white/10 pt-8 max-w-xl">
            {[["92+", "SCA Score"], ["18h", "Cold Brew"], ["1:14.5", "Ratio Golden"]].map(([val, label]) => (
              <div key={label} className="border-r border-white/10 last:border-r-0 pr-6 mr-6 last:mr-0 last:pr-0">
                <div className="text-3xl font-black text-[#D64933]">{val}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENIU */}
      <section id="meniu" className="py-28 px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] text-[#D64933] uppercase tracking-[0.3em] mb-3">— Ce servim</p>
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-tight">Meniu.</h2>
            </div>
            <p className="max-w-xs text-white/50 text-sm leading-relaxed">
              Meniu sezonier. Originea boabelor se schimbă cu fiecare recoltă bună. Urmărește-ne pentru update-uri live.
            </p>
          </div>
          <div className="space-y-0">
            {menu.map((section, si) => (
              <div key={si} className="border-t border-white/10">
                <div className="grid grid-cols-12 py-4">
                  <div className="col-span-12 lg:col-span-2 py-4">
                    <span className="text-[10px] text-[#D64933] uppercase tracking-[0.25em] font-bold">
                      {String(si + 1).padStart(2, "0")} — {section.category}
                    </span>
                  </div>
                  <div className="col-span-12 lg:col-span-10 grid lg:grid-cols-3 gap-0">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="group border-l border-white/10 px-6 py-6 hover:bg-white/5 transition-colors cursor-pointer">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg group-hover:text-[#D64933] transition-colors">{item.name}</h3>
                          <span className="text-[#D64933] font-black text-sm ml-4">{item.price} lei</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-28 px-6 lg:px-10 bg-[#D64933]/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <p className="text-[11px] text-[#D64933] uppercase tracking-[0.3em] mb-4">— Origini</p>
              <h2 className="text-5xl font-black uppercase tracking-tight leading-tight mb-8">
                Am deschis<br />pentru că<br />ne plăcea<br />cafeaua rea.
              </h2>
            </div>
            <div className="space-y-6 text-white/60 text-base leading-relaxed">
              <p>Extraction Lab a apărut din frustrare. Am băut ani de zile cafea mediocră servită cu zâmbet larg — și ne-am săturat. Nu de cafea. De compromis.</p>
              <p>Am petrecut 18 luni în ferme din Etiopia, Colombia și Guatemala. Am studiat cu Q Graders certificați SCA. Am prăjit sute de teste înainte de primul sac public.</p>
              <p>Acum servim exact ce am căutat: cafea cu trasabilitate completă, prăjită corect, extrasă cu precizie. Fără scuze, fără compromisuri, fără decoruri inutile.</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-bold text-white">— Andrei & Mara, fondatori</p>
                <p className="text-xs text-white/40 mt-1">Q Graders certificați SCA · Brașov, 2021</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border-t border-white/10">
            {values.map((v, i) => (
              <div key={i} className="border-r border-white/10 last:border-r-0 p-8 group hover:bg-[#D64933]/5 transition-colors">
                <div className="text-[#D64933]/40 font-black text-5xl mb-6 group-hover:text-[#D64933]/60 transition-colors">{v.num}</div>
                <h3 className="font-black text-lg uppercase tracking-wide mb-4 text-white">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODE */}
      <section id="metode" className="py-28 px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[11px] text-[#D64933] uppercase tracking-[0.3em] mb-3">— Cum preparăm</p>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight">Metodele.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { method: "Espresso", temp: "93°C", pressure: "9 bar", time: "27–32s", desc: "Baza oricărei băuturi cu lapte. La noi, espressorul e calibrat zilnic cu o balanță de precizie 0.1g." },
              { method: "Pour Over", temp: "91°C", pressure: "Gravitație", time: "3:30–4:00", desc: "Filtrare lentă cu gâscă de 2L. Controlăm fluxul la 4g/s. Scoate tot ce e mai bun din single origin." },
              { method: "Cold Brew", temp: "4°C", pressure: "0 bar", time: "18 ore", desc: "Imersie la rece timp de 18 ore. Extracție fără acid. Servit diluat 1:1 sau ca bază pentru signature." },
            ].map((m) => (
              <div key={m.method} className="border border-white/10 p-8 hover:border-[#D64933]/50 transition-colors group">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-3xl opacity-20 group-hover:opacity-50 transition-opacity">◎</span>
                  <div className="text-right">
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">Timp total</div>
                    <div className="text-[#D64933] font-black">{m.time}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">{m.method}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{m.desc}</p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-white/30 mb-1">Temperatură</div>
                    <div className="text-sm font-bold text-white">{m.temp}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-white/30 mb-1">Presiune</div>
                    <div className="text-sm font-bold text-white">{m.pressure}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENIMENTE */}
      <section id="evenimente" className="py-28 px-6 lg:px-10 bg-[#D64933] text-[#0E0A08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] mb-3 opacity-60">— Calendar</p>
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-tight">Ce se<br />întâmplă.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed opacity-70">
              Sesiuni de cupping, masterclassuri de brewing și seri de comunitate. Locurile se epuizează în ore.
            </p>
          </div>
          <div className="space-y-0">
            {events.map((ev, i) => (
              <div key={i} className="grid grid-cols-12 items-center py-6 border-t border-[#0E0A08]/20 group cursor-pointer hover:bg-[#0E0A08]/10 transition-colors px-4 -mx-4 rounded-sm">
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-black text-sm opacity-60">{ev.date}</span>
                </div>
                <div className="col-span-7 lg:col-span-9">
                  <h3 className="font-bold text-lg lg:text-2xl group-hover:underline">{ev.title}</h3>
                </div>
                <div className="col-span-3 lg:col-span-2 text-right">
                  <span className="text-xs font-bold opacity-70">{ev.spots}</span>
                </div>
              </div>
            ))}
            <div className="border-t border-[#0E0A08]/20" />
          </div>
          <div className="mt-12">
            <button className="border-2 border-[#0E0A08] text-[#0E0A08] px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-[#0E0A08] hover:text-[#D64933] transition-colors rounded-sm">
              Înscrie-te la next event →
            </button>
          </div>
        </div>
      </section>

      {/* REZERVARE */}
      <section id="rezervare" className="py-28 px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-[11px] text-[#D64933] uppercase tracking-[0.3em] mb-4">— Vino la noi</p>
              <h2 className="text-5xl font-black uppercase tracking-tight mb-10">Rezervă<br />o masă.</h2>
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Adresă</div>
                  <div className="font-bold">Strada Mureșenilor 24, Brașov</div>
                  <div className="text-sm text-white/50">Centrul Vechi · la 2 min de Piața Sfatului</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Program</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Luni–Vineri</div><div className="text-[#D64933] font-bold">07:30 – 20:00</div>
                    <div>Sâmbătă</div><div className="text-[#D64933] font-bold">08:00 – 21:00</div>
                    <div>Duminică</div><div className="text-[#D64933] font-bold">09:00 – 18:00</div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Contact</div>
                  <div className="font-bold">contact@extractionlab.ro</div>
                  <div className="text-sm text-white/50">+40 268 000 111</div>
                </div>
              </div>
            </div>
            <div className="border border-white/10 p-8 lg:p-12">
              <h3 className="text-xl font-black uppercase mb-8">Rezervare rapidă</h3>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Nume</label>
                    <input className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#D64933] focus:outline-none transition-colors rounded-sm" placeholder="Andrei Ionescu" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Telefon</label>
                    <input className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#D64933] focus:outline-none transition-colors rounded-sm" placeholder="07XX XXX XXX" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Data</label>
                    <input type="date" className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white/60 focus:border-[#D64933] focus:outline-none transition-colors rounded-sm" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Persoane</label>
                    <select className="w-full bg-[#0E0A08] border border-white/20 px-4 py-3 text-sm text-white/60 focus:border-[#D64933] focus:outline-none transition-colors rounded-sm">
                      <option>1 persoană</option>
                      <option>2 persoane</option>
                      <option>3 persoane</option>
                      <option>4 persoane</option>
                      <option>5 persoane</option>
                      <option>6+ persoane</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Mesaj (opțional)</label>
                  <textarea rows={3} className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#D64933] focus:outline-none transition-colors resize-none rounded-sm" placeholder="Preferințe, ocazii speciale..." />
                </div>
                <button className="w-full bg-[#D64933] text-[#0E0A08] py-4 font-black uppercase tracking-widest text-sm hover:bg-[#bf3d28] transition-colors rounded-sm">
                  Trimite rezervarea
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <div className="text-sm font-black uppercase tracking-widest text-white mb-1">Extraction Lab</div>
            <div className="text-xs text-white/30">Specialty Coffee · Brașov · Est. 2021</div>
          </div>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-[#D64933] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#D64933] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#D64933] transition-colors">Newsletter</a>
          </div>
          <div className="text-[10px] text-white/20">
            Site realizat de <Link href="/" className="text-[#D64933] hover:underline">Reverb.ro</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
