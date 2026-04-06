# MEMORY.md — Reverb.ro Project Brain

> Citește acest fișier la **începutul fiecărei sesiuni** de lucru pe proiect.
> Ultima actualizare: 2026-04-06

---

## 🌐 ECOSISTEMUL COMPLET — Viziunea OpenCloud

```
┌─────────────────────────────────────────────────────────┐
│                    ALIN DRAGOȘ                          │
│                  (fondator + operator)                  │
└──────────────────┬──────────────────┬───────────────────┘
                   │                  │
        ┌──────────▼──────┐    ┌──────▼──────────┐
        │  REVERB.RO      │    │  BRICOLANDO.RO  │
        │  (Agenție)      │    │  (E-commerce)   │
        │  - Web design   │    │  - Dropshipping │
        │  - Marketing    │    │  - DIY/Bricolaj │
        │  - AI Humans    │    │  - Automatizare │
        └──────────┬──────┘    └──────┬──────────┘
                   │                  │
        ┌──────────▼──────────────────▼──────────┐
        │              BOX.COM                    │
        │     „Creierul Central / OpenCloud"      │
        │  - Single Source of Truth               │
        │  - Box AI (Gemini powered)              │
        │  - Metadata + workflows + approvals     │
        └──────────┬──────────────────┬───────────┘
                   │                  │
        ┌──────────▼──────┐    ┌──────▼──────────┐
        │  NEVRONIX.AI    │    │  GOOGLE CLOUD   │
        │  AI Digital     │    │  Vertex AI +    │
        │  Humans         │    │  Gemini 2.5 Pro │
        └─────────────────┘    └─────────────────┘
```

---

## 🎯 REVERB.RO — Agenția

Fondator: **Alin Dragoș** · Site: **https://www.reverb.ro**
Deployment: **Vercel** (auto-deploy la `git push origin master`)
GitHub: `https://github.com/alindrimbu-brico/reverb2.git`

**Tagline**: Claritate & Structură
**Poziționare**: Infrastructură corporativă. Interfață umană. Fără jargon.
**Servicii**: Web design, magazine online, marketing digital, AI Digital Human (Nevronix)

---

## 🏪 BRICOLANDO.RO — Primul client oficial al Reverb

**Bricolando.ro** = e-commerce DIY/bricolaj, dropshipping, operat de Alin.
Este **clientul PILOT** al agenției Reverb — vitrina vie a capacităților.

### Servicii Reverb active pentru Bricolando
1. **Site e-commerce** — construit și gestionat de Reverb
2. **Marketing digital** — campanii, SEO, conținut social
3. **Automatizare operațională**:
   - Heartbeat comenzi (verificare la fiecare 2h)
   - Price monitoring — comparare prețuri furnizori
   - Auto-invoicing
   - **Golden Rules**: ajustările de preț cer confirmarea lui Alin
4. **AI Digital Human** (în curs) — avatar Nevronix pentru asistență produse
5. **Box.com integration** — stocare centralizată documente + cataloage + media

### Stack tehnic Bricolando
- Email: bricolando.ro@gmail.com
- Automatizare: Python scripts cu heartbeat 2h
- Price monitor: SKILL.md în `.openclaw/workspace/skills/bricolando-price-monitor/`

---

## 📦 BOX.COM — Creierul Central (OpenCloud)

### Ce face Box în ecosistemul nostru

Box este **Single Source of Truth** — toate activele digitale din Bricolando + Reverb + Live-Reverb trec prin Box.

**Structura de foldere propusă în Box:**
```
📁 OpenCloud/
├── 📁 Bricolando/
│   ├── 📁 Cataloage-Produse/      ← PDF-uri furnizori, CSV-uri stocuri
│   ├── 📁 Media-Produse/          ← Imagini, video-uri produse
│   ├── 📁 Marketing/              ← Materiale campanii, texte SEO
│   ├── 📁 Contracte/              ← Box Sign pentru furnizori
│   └── 📁 Rapoarte/               ← Rapoarte preț, comenzi, performanță
├── 📁 Reverb/
│   ├── 📁 Clienti/                ← Dosare per client
│   ├── 📁 Showcase/               ← Demo-uri finalizate
│   └── 📁 Templates/              ← Șabloane contracte, prezentări
└── 📁 Live-Reverb/
    ├── 📁 Footage-Brut/           ← Video-uri raw
    ├── 📁 Scripturi/              ← Scripturi aprobate
    └── 📁 Output-Final/           ← Conținut gata de publicat
```

### Capacitățile Box AI (powered by Gemini)
- `ai_qa_single_file` — întreabă AI despre un document specific
- `ai_qa_multi_file` — analiză cross-document
- `ai_qa_hub` — întreabă întreaga bază de cunoștințe Box
- `search_files_metadata` — căutare după metadata custom
- Box AI Extract — extrage date structurate din documente nestructurate

### Automatizări Box Relay planificate
1. **Trigger produs nou Bricolando** → Box AI generează descriere SEO + strategie social
2. **Video nou în Live-Reverb/Footage-Brut** → Gemini analizează, extrage highlights
3. **Aprobări materiale** → Box Relay trimite la Alin pentru aprobare, fără email

### Integrare cu Google Cloud / Vertex AI
- Box are integrare nativă cu Google Cloud
- Foldere Box conectate la Gemini 2.5 Pro prin Vertex AI
- Use case: Gemini "vizionează" clipuri din Live-Reverb și extrage 5-6 momente cheie/zi pentru postări Bricolando

### Securitate Box (Shield + Governance)
- Documente confidențiale (chei API, date Nano Baryana 2) protejate cu Shield
- Accese granulare: echipa Live-Reverb vede doar media, nu datele de business
- Detectare automată date sensibile + blocare partajare necorespunzătoare

---

## 🎬 LIVE-REVERB.RO — Producție Media

Live-Reverb este entitatea de **producție video/live streaming** din ecosistem.

**Rol**: Creează conținut video pentru Bricolando și clienții Reverb.

**Flux de lucru cu Box:**
1. Echipa filmează → upload footage brut în `Box/Live-Reverb/Footage-Brut/`
2. Box AI + Gemini analizează și extrage momentele bune
3. Materialele aprobate merg în `Box/Live-Reverb/Output-Final/`
4. Reverb publică pe canalele Bricolando

---

## ⚡ NANO BARYANA 2 — Procesul de Optimizare Conținut

**Nano Baryana 2** este procesul/tehnologia proprietară de optimizare a activelor digitale înainte de publicare.

**Integrare cu Box Custom Metadata:**
- Fiecare activ digital primit un tag metadata: `NB2-Status: pending | processing | approved`
- Sistemul OpenCloud (Box API) interoghează doar activele cu `NB2-Status: approved`
- Înainte de orice postare pe social media sau publicare pe Bricolando, activul trebuie să fi trecut prin procesul NB2

**Tag-uri metadata NB2 propuse:**
```json
{
  "NB2-Status": "approved",
  "NB2-Version": "2.4",
  "NB2-Date": "2026-04-06",
  "NB2-Type": "image | video | document | product",
  "Platform-Ready": ["instagram", "tiktok", "bricolando", "reverb"]
}
```

---

## 🤖 NEVRONIX.AI — Infrastructura AI Digital Human

Platformă de AI Digital Humans — Reverb o revinde ca serviciu propriu.

**Tehnologii**: ElevenLabs TTS, RAG Knowledge Builder, OpenAI GPT-4, 140+ limbi
**Integrare Box**: Knowledge base-ul avatarului se antrenează pe documente din Box
  → Catalog produse Bricolando (PDF din Box) → Avatarul știe toate produsele

### Planuri Nevronix (costul nostru)
| Plan | Preț/lună | Minute | DH |
|------|-----------|--------|----|
| Mini | €20 | 100 | 1 |
| Basic | €139 | 1.500 | 2 |
| Start | €440 | 5.500 | 6 |
| Pro | €1.240 | 15.500 | ∞ |

### Prețuri Reverb către client
| Pachet | Preț | Bazat pe |
|--------|------|----------|
| AI Starter | €290/lună | Basic |
| AI Growth | €590/lună | Start |
| AI Enterprise | cerere | Pro |
+ Setup fee: €500–1.500

**IMPORTANT**: Reverb NU menționează "Nevronix" la client. Serviciul = "AI Digital Human by Reverb".

---

## 🛠 STACK TEHNIC REVERB.RO

- **Next.js 16.2.1** App Router — CITEȘTI docs din `node_modules/next/dist/docs/`
- **React 19**, **TypeScript**, **Tailwind CSS 4**
- **Nodemailer** — SMTP Hostinger pentru contact form
- **Vercel** — CI/CD auto

### Structura app/
```
page.tsx, layout.tsx, globals.css
servicii/, ai-humans/, nevronix/
contact/, despre/, showcase/
  artisan-cafe/     ← Extraction Lab (café specialty) ✅ complet
  urban-culture/    ← DRIP.OS (streetwear) ✅ complet
  [alte showcase-uri]
pachete/, portofoliu/, checkout/ (client!), portal/ (client!)
blog/, legal/, magazine-online/, templates/, xiaolong/
en/ (versiune engleză), api/contact/

components/
  Header, Footer, Reveal, Logo, PageEnter, ScrollProgress
```

---

## 🎨 DESIGN SYSTEM REVERB

| Rol | Culoare |
|-----|---------|
| Background dark | `#1a0533` |
| Background negru | `#050505` |
| Accent violet | `#8b5cf6` |
| Accent roz | `#ec4899` |
| Accent café | `#D64933` |
| Accent streetwear | `#E2FF00` |
| Accent cyber | `#ccff00` |
| Background light | `#f5efe8` |

```
Carduri dark:  bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md
Butoane glow:  bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] rounded-full
Heading:       font-light tracking-[-0.03em]
Animații:      <Reveal delay={ms}> din @/components/Reveal
```

---

## 🚨 REGULI CRITICE

1. **"use client"** pe orice pagină cu event handlers → elimini `export const metadata`
2. **NU `overflow-hidden`** pe wrapper-ul principal de pagină (blochează Reveal/IntersectionObserver)
3. **Git push**: DOAR din Windows Terminal (`git push origin master --force`)
4. **Env vars**: în Vercel Dashboard (`REVERB_EMAIL_USER`, `REVERB_EMAIL_PASS`)
5. **Next.js 16**: citești docs înainte de cod nou

---

## 📋 STATUS (2026-04-06)

### ✅ Livrat
- reverb.ro live cu DNS + Vercel
- Contact form funcțional
- /ai-humans, /nevronix, /showcase complet
- Showcase: artisan-cafe + urban-culture (complete)
- MEMORY.md + REVY_PROMPT.md
- Arhitectura OpenCloud documentată

### 🔲 De făcut
- [ ] **Box.com**: Conectare MCP + creare structură foldere
- [ ] **Box + Gemini**: Integrare Vertex AI pentru analiza video Live-Reverb
- [ ] **Box Metadata NB2**: Configurare câmpuri custom pentru Nano Baryana 2
- [ ] **Bricolando showcase**: Pagină case study pe reverb.ro
- [ ] **Avatar Nevronix pe Bricolando**: Primul deployment real AI Digital Human
- [ ] **/ai-humans**: Verificat scroll după fix overflow-hidden
- [ ] **Versiunea /en/** completă
- [ ] **Blog**: Articole reale SEO

---

## 💡 INSTRUCȚIUNI REVY

```
LA FIECARE SESIUNE:
1. Citești MEMORY.md complet
2. Verifici app/ înainte de fișiere noi
3. Design system — nu inventezi culori noi
4. event handlers → "use client" → elimini metadata
5. NU overflow-hidden pe wrapper de pagină
6. NU git push — Alin face din Windows Terminal --force
```

---

*Menținut de Claude (Cowork) + Revy (Antigravity) · bricolando.ro@gmail.com · 2026-04-06*
