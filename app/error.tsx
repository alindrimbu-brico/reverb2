'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#1d2731]/40">
          Eroare de sistem
        </span>
      </div>
      <h1 className="text-4xl font-semibold tracking-tight text-[#1d2731] sm:text-5xl">
        Ceva nu a mers bine
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1d2731]/60">
        Am întâmpinat o eroare neașteptată. Încercați din nou sau reveniți
        la pagina principală.
      </p>
      {error.digest && (
        <p className="mt-2 font-mono text-[10px] text-[#1d2731]/30">
          ref: {error.digest}
        </p>
      )}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => unstable_retry()}
          className="rounded-full border border-[#1d2731] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d2731] transition-all duration-300 hover:bg-[#1d2731]/5 hover:-translate-y-0.5"
        >
          Încearcă din nou
        </button>
        <a
          href="/"
          className="rounded-full border border-[#1d2731]/20 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d2731]/60 transition-all duration-300 hover:border-[#1d2731]/40 hover:text-[#1d2731] hover:-translate-y-0.5"
        >
          Acasă
        </a>
      </div>
    </section>
  )
}
