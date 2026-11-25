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
        <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-neutral-500">
          Eroare
        </span>
      </div>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Pagina nu s-a încărcat
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
        E o problemă la noi, nu la tine. Încearcă din nou peste câteva secunde.
      </p>
      {error.digest && (
        <p className="mt-2 font-mono text-[13px] text-neutral-500">
          ref: {error.digest}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => unstable_retry()}
          className="rounded-full border border-white/30 px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white/5"
        >
          Încearcă din nou
        </button>
        <a
          href="/"
          className="rounded-full border border-white/15 px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-neutral-400 transition-all duration-300 hover:border-white/30 hover:text-white"
        >
          Prima pagină
        </a>
      </div>
    </section>
  )
}
