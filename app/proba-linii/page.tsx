import type { Metadata } from "next";
import { packages, VAT_LABEL } from "@/lib/packages";

// PAGINĂ DE PROBĂ (12 nov 2026): „linia care merge” pe litere, pe conturul cardurilor și pe liniile tabelelor.
// Nu e legată din niciun meniu și nu se indexează. Se șterge după ce Alin alege varianta.
export const metadata: Metadata = {
  title: "Probă linii — Reverb Digital",
  robots: { index: false, follow: false },
};

const CSS = `
.pl-w{white-space:nowrap}
.pl-s{display:inline-block;width:1px;height:1px;margin-right:-1px;overflow:visible;vertical-align:baseline;position:relative;z-index:1;pointer-events:none;-webkit-user-select:none;user-select:none}
.pl-s text{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}
.pl-h{stroke-width:1px;stroke-opacity:.38}
.pl-t{stroke-width:2px;stroke-dasharray:.5em 6.5em;animation:pl-litere 6s linear infinite}
@keyframes pl-litere{to{stroke-dashoffset:-7em}}
.pl-beam{position:absolute;inset:-.5px;width:calc(100% + 1px);height:calc(100% + 1px);overflow:visible;pointer-events:none}
.pl-beam rect{fill:none;stroke:currentColor;stroke-width:2px;stroke-linecap:round;stroke-dasharray:7 93;animation:pl-contur 7s linear infinite}
@keyframes pl-contur{to{stroke-dashoffset:-100}}
.pl-line{display:block;position:relative;height:3px;overflow:hidden}
.pl-line::before{content:"";position:absolute;left:0;right:0;top:1px;height:1px;background:currentColor;opacity:.14}
.pl-flow{position:absolute;inset:0;animation:pl-linie 5s linear infinite}
.pl-flow>span{position:absolute;right:0;top:0;height:3px;width:40px;border-radius:2px;background:currentColor}
@keyframes pl-linie{from{transform:translateX(-100%)}to{transform:translateX(44px)}}
@media (prefers-reduced-motion:reduce){.pl-t,.pl-beam,.pl-flow{display:none}}
`;

/** Textul rămâne text obișnuit; peste fiecare cuvânt stă același cuvânt desenat doar ca linie care aleargă pe contur. */
function Litere({ text, banda, contur = false }: { text: string; banda: string; contur?: boolean }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          {i > 0 ? " " : null}
          <span className="pl-w">
            <svg className={`pl-s ${banda}`} width="1" height="1" aria-hidden="true" focusable="false">
              {contur ? <text className="pl-h" x="0" y="1">{w}</text> : null}
              <text className="pl-t" x="0" y="1">{w}</text>
            </svg>
            <span className={contur ? "text-transparent" : undefined}>{w}</span>
          </span>
        </span>
      ))}
    </>
  );
}

function Contur({ raza }: { raza: number }) {
  return (
    <svg className="pl-beam text-white" aria-hidden="true" focusable="false">
      <rect x="0" y="0" width="100%" height="100%" rx={raza} pathLength={100} />
    </svg>
  );
}

function Eticheta({ nr, titlu, nota }: { nr: number; titlu: string; nota: string }) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-white font-semibold">Proba {nr}</span>
        <span className="text-neutral-500">•</span>
        <span>{titlu}</span>
      </div>
      <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">{nota}</p>
    </div>
  );
}

const H1 = "text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium tracking-[-0.04em] leading-[1.04] text-white break-words";
const SECTIUNE = "relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-20 border-b border-white/10";

export default function ProbaLiniiPage() {
  const randuri = packages.filter((p) => p.category === "web");
  const [normal, evidentiat] = [randuri[0], randuri[2]];

  return (
    <div className="bg-[#070809] text-neutral-100 min-h-screen font-sans antialiased">
      <style>{CSS}</style>

      <section className={`${SECTIUNE} pt-32 md:pt-40`}>
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-3">Pagină de probă</div>
        <p className="max-w-2xl text-base text-neutral-300 font-light leading-relaxed">
          Aceeași linie care merge, în cinci locuri. Pe site sunt acum proba 3 (titlul primei pagini) și proba 4 (cardul
          recomandat din Pachete). Celelalte sunt aici doar ca să le vezi: spune numărul dacă vrei altă variantă.
        </p>
      </section>

      <section className={SECTIUNE}>
        <Eticheta nr={1} titlu="Litere pline, lumină verde" nota="Titlul rămâne alb, cum e acum. O linie verde aleargă pe conturul fiecărei litere." />
        <div className={H1}>
          <Litere text="Infrastructură digitală." banda="text-emerald-400" />
          <br />
          <span className="text-neutral-400 font-light">
            <Litere text="Sisteme care produc valoare." banda="text-emerald-400" />
          </span>
        </div>
      </section>

      <section className={SECTIUNE}>
        <Eticheta nr={2} titlu="Litere goale, bandă albă" nota="Literele devin doar contur subțire, iar pe contur merge o bandă mai groasă. Cel mai aproape de Auren." />
        <div className={H1}>
          <Litere text="Infrastructură digitală." banda="text-white" contur />
          <br />
          <span className="font-light">
            <Litere text="Sisteme care produc valoare." banda="text-white" contur />
          </span>
        </div>
      </section>

      <section className={SECTIUNE}>
        <Eticheta nr={3} titlu="Doar rândul al doilea" nota="Primul rând stă nemișcat și se citește curat. Linia merge numai pe rândul gri." />
        <div className={H1}>
          Infrastructură digitală.
          <br />
          <span className="text-neutral-400 font-light">
            <Litere text="Sisteme care produc valoare." banda="text-white" />
          </span>
        </div>
      </section>

      <section className={SECTIUNE}>
        <Eticheta nr={4} titlu="Conturul cardului" nota="Cardul din stânga e cum e acum. La cel din dreapta, o bandă merge pe tot conturul: așa s-ar scoate în evidență pachetul recomandat." />
        <div className="grid gap-8 md:grid-cols-2">
          {[normal, evidentiat].map((pkg, i) => (
            <div key={pkg.id} className={`relative rounded-3xl border p-8 ${i === 1 ? "border-white/30 bg-neutral-900/30" : "border-white/10 bg-neutral-900/30"}`}>
              {i === 1 ? <Contur raza={23.5} /> : null}
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">{pkg.delivery}</div>
              <div className="text-2xl font-medium text-white mb-2">{pkg.name}</div>
              <div className="text-4xl font-light text-white">
                {pkg.price} <span className="text-sm font-mono text-neutral-300">{VAT_LABEL}</span>
              </div>
              <p className="mt-4 text-xs text-neutral-400 font-light leading-relaxed">{pkg.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={SECTIUNE}>
        <Eticheta nr={5} titlu="Tabel: contur și linii" nota="O bandă pe conturul tabelului și câte una pe fiecare linie dintre rânduri, pornite pe rând, ca pe Auren." />
        <div className="relative rounded-2xl border border-white/10 bg-neutral-900/30 px-6 py-2 md:px-8">
          <Contur raza={15.5} />
          {randuri.map((pkg, i) => (
            <div key={pkg.id}>
              {i > 0 ? (
                <span className="pl-line text-white" aria-hidden="true">
                  <span className="pl-flow" style={{ animationDelay: `${-0.9 * i}s` }}>
                    <span />
                  </span>
                </span>
              ) : null}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                <div className="text-base font-medium text-white">{pkg.name}</div>
                <div className="flex items-baseline gap-6 font-mono text-xs text-neutral-400">
                  <span>{pkg.delivery}</span>
                  <span className="text-sm text-white">
                    {pkg.price} {VAT_LABEL}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
