import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-8">
        <span className="font-mono text-7xl font-light tracking-tight text-[#1d2731]/15 sm:text-9xl">
          404
        </span>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-[#1d2731] sm:text-4xl">
        Pagina nu există
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1d2731]/60">
        Resursa pe care o cauți nu a fost găsită. Poate a fost mutată sau
        link-ul este incorect.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="rounded-full border border-[#1d2731] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d2731] transition-all duration-300 hover:bg-[#1d2731]/5 hover:-translate-y-0.5"
        >
          Înapoi acasă
        </Link>
      </div>
    </section>
  )
}
