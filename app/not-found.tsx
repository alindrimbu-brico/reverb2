import Link from 'next/link'

// Butoanele: primul plin, celelalte cu contur (aceleași clase ca butoanele de pe /despre).
const BTN_PLIN =
  'inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-center text-[13px] leading-snug text-balance font-mono font-bold uppercase tracking-wider text-black transition hover:bg-neutral-200'
const BTN_CONTUR =
  'inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-[13px] leading-snug text-balance font-mono uppercase tracking-wider text-neutral-200 transition hover:bg-white hover:text-black'

export default function NotFound() {
  return (
    // Pe telefon cele trei butoane stau unul sub altul: umplutura de sus ține „404” sub bara fixă.
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:py-0">
      {/* Înălțime fixă (= mărimea literei): altfel rândul își schimba înălțimea când se încărca fontul mono și, pagina fiind
          centrată pe verticală, tot conținutul sărea câțiva pixeli. */}
      <div className="mb-8 h-[4.5rem] sm:h-[8rem]">
        <span className="block font-mono text-7xl leading-none font-light tracking-tight text-neutral-500 sm:text-9xl sm:leading-none">
          404
        </span>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Pagina asta nu mai e aici.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
        Poate a fost mutată sau adresa are o greșeală.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <Link href="/" className={BTN_PLIN}>
          Prima pagină
        </Link>
        <Link href="/pachete" className={BTN_CONTUR}>
          Pachete și prețuri
        </Link>
        <Link
          href="/contact"
          className={BTN_CONTUR}
          data-umami-event="contact-click"
          data-umami-event-loc="404"
        >
          Contact
        </Link>
      </div>
    </section>
  )
}
