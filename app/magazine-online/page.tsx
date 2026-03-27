import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Magazine Online Complete",
  description:
    "Construim magazine online premium, funcționale și pregătite să vândă pe termen lung. Arhitectură de vânzare, design premium, copy comercial și suport la lansare.",
};

const included = [
  {
    category: "Strategie & Arhitectură",
    items: [
      "Audit de ofertă și structură de categorie",
      "Arhitectură de vânzare personalizată",
      "Strategie de poziționare în nișă",
      "Definirea buyer persona și a mesajelor cheie",
    ],
  },
  {
    category: "Design & Experiență",
    items: [
      "Design premium și responsive",
      "Pagina principală (Home) orientată spre conversie",
      "Pagini de categorie și filtrare",
      "Template pagină de produs optimizat pentru vânzare",
      "Pagini: Despre, Contact, Politici",
    ],
  },
  {
    category: "Conversie & Marketing",
    items: [
      "Flow de conversie și CTA-uri strategice",
      "Mesaje de brand și copy comercial de bază",
      "Checkout simplificat și optimizat",
      "Integrare email marketing (bază)",
      "Setare pixel și instrumente de analiză",
    ],
  },
  {
    category: "Lansare & Suport",
    items: [
      "Testare completă înainte de lansare",
      "Suport tehnic la lansare",
      "Ghid de administrare a magazinului",
      "Sesiune de predare și Q&A",
      "Recomandări de optimizare post-lansare",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Strategie & direcție",
    text: "Definim modelul de business, oferta și direcția brandului. Înțelegem ce vinzi, cui vinzi și ce te diferențiază de concurență. Fără această etapă, orice design e decorativ.",
    duration: "Săpt. 1–2",
  },
  {
    num: "02",
    title: "Arhitectură & design",
    text: "Construim structura magazinului și experiența de cumpărare. Design wireframe, prototip vizual, pagini cheie. Totul validat cu tine înainte de implementare.",
    duration: "Săpt. 2–5",
  },
  {
    num: "03",
    title: "Implementare & copy",
    text: "Setăm mesajele, paginile și funnel-urile de conversie. Implementăm designul, scriem copy-ul comercial, integrăm instrumentele de marketing.",
    duration: "Săpt. 5–8",
  },
  {
    num: "04",
    title: "Lansare & optimizare",
    text: "Lansăm, măsurăm și optimizăm continuu cu disciplină. Testăm tot, lansăm când e gata, nu când e termenul, și rămânem alături după lansare.",
    duration: "Săpt. 8–10 +",
  },
];

const benefits = [
  "Coerență în ofertă și în experiența de cumpărare",
  "Poziționare mai matură și mai coerentă a brandului",
  "Bază solidă pentru ads, email și conținut",
  "Flux de vânzare mai curat și mai ușor de optimizat",
  "Un magazin care inspiră încredere, nu confuzie",
  "Fundație pentru creștere pe termen lung",
];

const testimonials = [
  {
    name: "Slot testimonial 01",
    role: "Antreprenor e-commerce",
    text: "Reverb ne-a pus ordine în ofertă, în mesaj și în procesul de vânzare. În sfârșit, site-ul nostru spune exact ce facem și pentru cine.",
  },
  {
    name: "Slot testimonial 02",
    role: "Fondator brand online",
    text: "Au folosit AI inteligent, fără să piardă vocea umană a brandului. Rezultatul a fost mai precis, mai rapid și mai stabil.",
  },
  {
    name: "Slot testimonial 03",
    role: "CEO startup",
    text: "Nu au venit cu magie ieftină. Au venit cu structură, calm și execuție. Exact ce lipsește în prea multe agenții.",
  },
];

export default function MagazineOnlinePage() {
  return (
    <div className="bg-[#f5f1ea] text-[#1d2731]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#1d2731]/8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,86,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(49,88,79,0.08),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Pagina produs</div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-4 text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-6xl lg:text-[72px]">
                  Magazin online complet
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lg leading-8 text-[#1d2731]/70 md:text-xl">
                  Magazinul tău nu trebuie doar să arate bine. Trebuie să explice, să inspire încredere și să transforme traficul în comenzi. Asta construim.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center rounded-full bg-[#1d2731] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Cere o ofertă pentru magazinul tău
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#1d2731]/15 bg-white/75 px-7 py-4 text-sm font-medium text-[#1d2731] transition hover:bg-white"
                  >
                    Programează un call
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="rounded-[30px] border border-[#1d2731]/8 bg-[#1d2731] p-8 text-white shadow-[0_20px_70px_rgba(29,39,49,0.14)]">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">Promisiune principală</div>
                <div className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                  Îți construim un magazin online premium, funcțional și pregătit să vândă pe termen lung.
                </div>
                <div className="mt-8 space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 text-[15px] leading-6 text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Proces</div>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                Cum construim un magazin care vinde.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#1d2731]/65">
                Fiecare etapă are un scop precis. Nu există pași de umplutură. Fie contribuie la rezultat, fie nu sunt acolo.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white/70 p-7 shadow-[0_10px_40px_rgba(29,39,49,0.05)]">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-4xl font-medium tracking-[-0.04em] text-[#1d2731]/15">{s.num}</div>
                    <div className="rounded-full border border-[#1d2731]/10 px-3 py-1 text-xs text-[#1d2731]/45">{s.duration}</div>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-[#1d2731]">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#1d2731]/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="border-y border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Ce este inclus</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  Nimic lipsă. Nimic în plus față de ce ai nevoie.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {included.map((cat, i) => (
                <Reveal key={cat.category} delay={i * 70}>
                  <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#faf7f2] p-7">
                    <h3 className="text-base font-semibold text-[#1d2731]">{cat.category}</h3>
                    <ul className="mt-5 space-y-3">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[14px] leading-6 text-[#1d2731]/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/35" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees + CTAs */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-[#eef1f0] p-8 lg:col-span-1">
                <h3 className="text-xl font-medium text-[#1d2731]">Garanții și mod de lucru</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#1d2731]/72">
                  Fără promisiuni umflate. Lucrăm transparent, în etape definite, cu feedback real și logică de business. Nu livrăm doar „ce e frumos". Livrăm ceea ce are sens comercial.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Etape structurate cu livrabile definite",
                    "Feedback la fiecare etapă majoră",
                    "Revizii incluse în procesul standard",
                    "Comunicare directă, fără intermediari",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-6 text-[#1d2731]/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d2731]/35" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-[28px] border border-[#1d2731]/8 bg-[#f0ecf4] p-8 lg:col-span-1">
                <h3 className="text-xl font-medium text-[#1d2731]">CTA-uri — alege cum vrei să pornim</h3>
                <div className="mt-6 flex flex-col gap-4">
                  {[
                    { label: "Hai să ne sincronizăm", primary: true },
                    { label: "Vreau un magazin pe măsura mea", primary: false },
                    { label: "Pornește magazinul tău complet", primary: false },
                    { label: "Cere o ofertă detaliată", primary: false },
                  ].map(({ label, primary }) => (
                    <Link
                      key={label}
                      href="/contact"
                      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${
                        primary
                          ? "bg-[#1d2731] text-white hover:shadow-lg"
                          : "border border-[#1d2731]/12 bg-white text-[#1d2731]"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-[28px] bg-[#1d2731] p-8 text-white md:col-span-2 lg:col-span-1">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">Ideal pentru</div>
                <p className="mt-4 text-base leading-7 text-white/80">
                  Antreprenori care lansează sau relansează un magazin online și vor o bază solidă: estetic, rapid și orientat spre vânzare.
                </p>
                <div className="mt-6 space-y-2 text-sm text-white/60">
                  {[
                    "Lansezi primul tău magazin online",
                    "Vrei să relansezi un magazin haotic",
                    "Ai trafic, dar conversia e slabă",
                    "Vrei un sistem stabil, nu doar un site",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-1 w-4 rounded-full bg-white/25" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-[#1d2731]/8 bg-white/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal>
              <div className="mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-[#1d2731]/45">Testimoniale</div>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                  Ce spun clienții când treaba este făcută bine.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <div className="card-hover rounded-[28px] border border-[#1d2731]/8 bg-white p-8 shadow-[0_10px_40px_rgba(29,39,49,0.04)]">
                    <p className="text-[16px] leading-8 text-[#1d2731]/74">"{t.text}"</p>
                    <div className="mt-6">
                      <div className="text-sm font-medium text-[#1d2731]">{t.name}</div>
                      <div className="text-xs text-[#1d2731]/45">{t.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <Reveal>
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="rounded-[36px] bg-[#1d2731] p-8 text-white md:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                  Gata să construim un magazin care chiar vinde?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/70">
                  Hai să vorbim 30 de minute. Îți spunem exact ce avem nevoie de la tine, cum arată procesul și ce rezultate poți aștepta în mod realist.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1d2731] transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Cere o ofertă pentru magazinul tău
                  </Link>
                  <Link
                    href="/servicii"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    Vezi toate serviciile
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
}
