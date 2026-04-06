# MEMORY.md — Reverb.ro Project Brain

> Citește acest fișier la începutul fiecărei sesiuni de lucru pe proiect.
> Actualizat: 2026-04-06

---

## 🎯 Ce este reverb.ro

Agenție digitală românească fondată de Alin Dragoș. Site live la **https://www.reverb.ro**.
Deployment: **Vercel** (auto-deploy din GitHub la fiecare `git push origin master`).
Repository GitHub: proiect privat al lui Alin.

**Tagline**: Claritate & Structură
**Poziționare**: Infrastructură corporativă. Interfață umană. Fără jargon.
**Ton**: precizie tehnică + empatie umană, zero buzzwords, limbaj direct.

---

## 🛠 Stack tehnic

- **Next.js 16.2.1** — App Router (nu Pages Router). ATENȚIE: are breaking changes față de Next.js 13-14.
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** — util classes standard, fără config personalizat
- **Nodemailer** — pentru contact form (SMTP Hostinger)
- **Vercel** — hosting și CI/CD

### Structura critică

```
app/
  page.tsx             — Homepage
  layout.tsx           — Root layout cu Header + Footer
  servicii/            — Pagina servicii
  ai-humans/           — Pagina AI Digital Human (Nevronix)
  nevronix/            — Pagina parteneriat Nevronix
  contact/             — Formular contact
  despre/              — Despre agenție
  showcase/            — Portofoliu
  pachete/             — Prețuri pachete
  portofoliu/          — Portofoliu extins
  checkout/            — Checkout ("use client"!)
  portal/              — Portal client ("use client"!)
  blog/                — Blog
  legal/               — Termeni și condiții
  magazine-online/     — Landing page magazine online
  templates/           — Template showcase
  xiaolong/            — Pagina specială
  en/                  — Versiunea engleză (oglindă)
  api/contact/         — API route pentru trimitere email

components/
  Header.tsx           — Navigație
  Footer.tsx           — Footer cu branding
  Reveal.tsx           — Animație fade-in la scroll (folosit peste tot)
  Logo.tsx             — Logo component
  PageEnter.tsx        — Animație intrare pagină
  ScrollProgress.tsx   — Bara de progres scroll
```

---

## 🎨 Design System

### Culori principale

| Rol | Valoare |
|-----|---------|
| Background dark | `#1a0533` (violet închis) |
| Accent violet | `#8b5cf6` |
| Accent roz | `#ec4899` |
| Background light (homepage) | `#f5efe8` (bej/crem) |
| Text pe dark | `white` / `white/60` / `white/40` |
| Text pe light | `#1a0533` / dark slate |

### Convențiile de stil

- Carduri dark: `bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md`
- Glow button: `bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] rounded-full`
- Heading large: `font-light tracking-[-0.03em]`
- Badge: `border border-white/10 rounded-full px-5 py-1.5 bg-white/5 text-[11px] uppercase tracking-[0.25em]`
- Glow decorativ: `bg-[#8b5cf6]/20 blur-[120px] rounded-full pointer-events-none`
- Toate animațiile de scroll: `<Reveal delay={număr}>` din `@/components/Reveal`

### Pagini cu design deschis (light)
Homepage și câteva landing-uri folosesc background bej `#f5efe8` cu text dark.

### Pagini cu design închis (dark)
`/ai-humans`, `/nevronix` și altele folosesc `bg-[#1a0533]` sau `bg-[#050505]`.

---

## 🚨 Reguli critice — NU uita

### 1. Client Components
Orice pagină care are event handlers (`onClick`, `onSubmit`, `onChange` etc.) **TREBUIE** să aibă `"use client"` ca primă linie.
Paginile cu `"use client"` **NU POT** exporta `metadata` — trebuie eliminat.

```tsx
// ✅ Corect pentru pagini cu interactivitate
"use client";
// NO: export const metadata = ...

// ✅ Corect pentru pagini statice
import type { Metadata } from "next";
export const metadata: Metadata = { ... };
// NO: event handlers direct în component
```

Pagini care au deja `"use client"`: `checkout/page.tsx`, `portal/page.tsx`

### 2. Git push
Din VM Linux **nu se poate face push** (nu există credențiale GitHub).
Alin face întotdeauna `git push origin master` din **Windows Terminal** în `C:\Users\alind\Projects\reverb`.

### 3. Environment Variables
Secretele sunt în Vercel Dashboard → Settings → Environment Variables.
Local nu există `.env.local` (nu e nevoie pentru dev, dar e nevoie pentru prod).

Variabile active:
- `REVERB_EMAIL_USER` = `reverb@reverb.ro`
- `REVERB_EMAIL_PASS` = parola Hostinger pentru reverb@reverb.ro

---

## 📧 Contact Form

Implementat în `app/api/contact/route.ts` cu Nodemailer.
- SMTP: `smtp.hostinger.com` port `465` (SSL)
- Trimite email la `reverb@reverb.ro`
- `replyTo` setat la emailul celui care completează formularul

---

## 🤖 Parteneriat Nevronix.ai

Reverb revinde servicii AI Digital Human bazate pe platforma **Nevronix** (nevronix.ai).

### Ce este Nevronix
- Avatare AI / Digital Humans cu TTS ElevenLabs
- RAG Knowledge Builder (antrenare pe documente/URL-uri)
- 140+ limbi, integrare WordPress, hosted în cloud
- Pricing Nevronix: Mini €20/lună, Basic €139, Start €440, Pro €1240

### Cum vinde Reverb
Reverb NU menționează "Nevronix" direct ca brand — avatarele sunt vândute ca serviciu propriu "AI Digital Human".
Structura de prețuri Reverb:
- **Starter** €290/lună (bazat pe Nevronix Basic)
- **Growth** €590/lună (bazat pe Nevronix Start) — **recomandat**
- **Enterprise** la cerere (bazat pe Nevronix Pro)

### Pagini Nevronix pe site
- `/nevronix` — pagina de parteneriat (design cyber-lime pe negru `#050505`)
- `/ai-humans` — pagina de vânzare pentru clienți (design violet-roz pe `#1a0533`)

---

## 📋 Starea curentă a proiectului (2026-04-06)

### ✅ Făcut
- Site live pe vercel.ro cu domeniu custom reverb.ro
- DNS configurat: A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`
- Contact form funcțional cu Nodemailer + Hostinger SMTP
- Pagina `/ai-humans` creată și integrată în homepage + servicii
- Pagina `/nevronix` cu design parteneriat
- Versiunea engleză `/en/` parțial implementată

### 🔲 Pending / De făcut
- [ ] **URGENT**: Alin să facă `git push origin master` pentru a deploya `/ai-humans`
- [ ] Verificat funcționarea contact form pe live (trimis email test)
- [ ] Completat versiunea engleză `/en/` (toate paginile oglindă)
- [ ] Adăugat proiecte reale în `/portofoliu` și `/showcase`
- [ ] SEO: meta descriptions personalizate per pagină
- [ ] Blog: articole reale (acum e probabil placeholder)
- [ ] Testimoniale reale de la clienți

---

## 💡 Cum funcționează Revy pe acest proiect

1. Citești MEMORY.md (acest fișier) la fiecare sesiune nouă
2. Verifici întotdeauna `app/` structura înainte de a crea fișiere noi
3. Respecti design system-ul — nu inventezi culori/stiluri noi fără motiv
4. Dacă o pagină are event handlers → `"use client"` + elimini `metadata`
5. Commit-ezi cu mesaje clare în română sau engleză
6. **NU faci push** — Alin face push din Windows Terminal

---

*Menținut de Claude (Cowork) + Revy (Antigravity)*
