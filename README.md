# reverb.ro

Site-ul agenției Reverb (KALKI DRIM MAGAZIN S.R.L., Focșani): web design, magazine online, marketing digital. Din octombrie 2026, tot sub numele Reverb Digital, și editura cărților Kalki Nexus.

- **Tehnologie:** Next.js 16 (App Router), React 19, Tailwind 4, TypeScript.
- **Găzduire:** Vercel, auto-deploy din ramura `master` (proiectul `reverb` ține domeniile reverb.ro și www.reverb.ro).
- **Adresa publică:** `https://reverb.ro` (fără www), definită o singură dată în `lib/seo.ts`.

## Lucru local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producție
npm run start      # pornește build-ul
node scripts/check-seo.mjs http://localhost:3000   # verifică sitemapul, canonicalele și noindex-urile
```

Variabile de mediu (în Vercel, nu în repo): SMTP-ul formularului de contact și, opțional, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (codul din Google Search Console).

## Structura

| Cale | Ce conține |
|---|---|
| `app/` | paginile: marketing RO (`/despre`, `/servicii`...) și EN (`/en/...`), blog, showcase-uri (`/showcase/*`, `/en/showcase/*`), NeuroLumina în 6 limbi (`/showcase/neuro-recovery`, `/en`, `/es`, `/pt`, `/ru`, `/zh`), „Realitatea Umanoidă 2026”, templates, convertor |
| `components/` | antet, subsol, animații, componente comune |
| `lib/seo.ts` | adresa site-ului și `pageMeta()` (canonical, hreflang, noindex) |
| `lib/routes.ts` | registrul paginilor publice: sursa sitemapului și a verificării SEO |
| `lib/posts.ts` | articolele de blog |
| `lib/githubShowcases.ts` | showcase-urile servite prin proxy din GitHub Pages |
| `public/` | fișiere statice, inclusiv showcase-uri HTML întregi (mari) și `og.jpg` (imaginea de partajare) |
| `scripts/check-seo.mjs` | verificare după build: fiecare pagină din `app/` e în sitemap sau noindex, fiecare adresă din sitemap are canonicalul ei |

## Reguli SEO ale proiectului

- Fiecare pagină are **canonicalul ei**. Paginile server îl pun în `metadata.alternates`; paginile `"use client"` îl pun într-un `layout.tsx` în același dosar (prin `pageMeta`). Nu se pune canonical în `app/layout.tsx`.
- O pagină nouă se adaugă și în `lib/routes.ts` (sau în `NOINDEX`), altfel `scripts/check-seo.mjs` o raportează.
- Fără em-dash în textele vizibile de pe site.
