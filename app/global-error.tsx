'use client'

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html lang="ro">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f1ea',
          color: '#1d2731',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p
            style={{
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              opacity: 0.4,
              marginBottom: '2rem',
            }}
          >
            Eroare critică
          </p>
          <h1
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Ceva nu a mers bine
          </h1>
          <p
            style={{
              marginTop: '1rem',
              fontSize: '14px',
              opacity: 0.6,
              maxWidth: '24rem',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}
          >
            Am întâmpinat o eroare neașteptată la nivel de aplicație. Vă
            rugăm să reîncercați.
          </p>
          <button
            onClick={() => unstable_retry()}
            style={{
              marginTop: '2rem',
              padding: '0.625rem 1.5rem',
              border: '1px solid #1d2731',
              borderRadius: '9999px',
              background: 'transparent',
              color: '#1d2731',
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              cursor: 'pointer',
            }}
          >
            Încearcă din nou
          </button>
        </div>
      </body>
    </html>
  )
}
