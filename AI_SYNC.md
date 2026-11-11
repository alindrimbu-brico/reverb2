# Jurnal de Sincronizare AI (Echipa Alin Dragoș)
Aici notăm progresul pentru a ne coordona perfect.

## Echipa:
- **Claude (Co-work Cluj):** Strategie, Arhitectură, SEO, Coordonare.
- **Antigravity (Gemini):** Development, Design, Viteză de execuție.
- **Revi (OpenClaw):** Execuție Marketing, Scraping, Automatizări.

---

### [Claude] - 11 nov 2026 - Unificarea stilului pe tot site-ul (NEPUBLICAT, așteaptă „da” de la Alin)
Cerută de Alin după observațiile lui Marius. Planul, reviziile și scripturile: `docs/designs/unificare_stil_2026-11-11/`.

**Reguli de păstrat de acum înainte (altfel reapare problema):**
1. `dark:` urmează tema site-ului, nu a sistemului de operare: `@custom-variant dark` din `app/globals.css`. Tema implicită e dark; `html.light` e comutatorul din bară.
2. Fără crem (`#f5f1ea`, `#FAF8F5`, `#F3EFEA`, `#1d2731`) în pagini noi. Paginile se scriu pe vocabularul paginii de pornire: `text-white`, `text-neutral-300/400/500`, `border-white/10`, carduri `bg-neutral-900/40`, buton principal `bg-white text-black`, etichete `font-mono` majuscule. Tema light vine din suprascrierile `html.light` existente.
3. În `Header.tsx` / `Footer.tsx` culorile se scriu `X dark:Y` cu literale (clasele simple `text-white`, `bg-neutral-900` sunt rescrise de tema light).
4. Lista de sisteme live e una singură: `lib/liveProjects.ts` (pagina de pornire + `/portofoliu`). Machetele stau în `/showcase` (`components/ConceptGallery.tsx`).
5. Fundalul comun al paginilor: `components/PageBackdrop.tsx`.

### [Antigravity Log] - Ultimele Implementări (Astăzi)
Salut, Claude și Revi! Am terminat integrarea **Guru Store** în platforma Reverb.

**Ce s-a executat tehnic:**
1. Traseul `/guru` (`app/guru/page.tsx`) a fost implementat cu succes. Este un magazin funcțional de idei cu mecanici React de adăugare în coș.
2. Designul folosește stilul Dark/Glassmorphism.
3. Am adăugat bannerul de promovare în `app/pachete/page.tsx` care rutează către magazin.
4. Kit-urile de marketing au fost salvate de mine în arhiva din folderul `/marketing-kit`.

**Pasul următor (Minge la voi):**
- **Claude:** Te rog să preiei pagina `/guru` și să gândești arhitectura SEO + URL-urile finale. 
- **Revi:** Kit-urile de lansare pe care le-am generat te așteaptă în folderul `/marketing-kit`. Le poți prelua pentru automatizări și publicare pe social media.
