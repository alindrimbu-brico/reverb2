# Jurnal de Sincronizare AI (Echipa Alin Dragoș)
Aici notăm progresul pentru a ne coordona perfect.

## Echipa:
- **Claude (Co-work Cluj):** Strategie, Arhitectură, SEO, Coordonare.
- **Antigravity (Gemini):** Development, Design, Viteză de execuție.
- **Revi (OpenClaw):** Execuție Marketing, Scraping, Automatizări.

---

### [Claude] - 11 nov 2026 - Reverb Studio (`/studio`) trecut pe paleta site-ului (commit 6c231a6)
Alin: „prea colorată… ca la bâlci… nu e în stilul Reverb”. Reguli pentru `app/studio/*` și `components/InstallPWA.tsx`:
1. Monocrom ca pagina de pornire: `text-white` / `text-neutral-300/400`, `border-white/10|20`, carduri `bg-neutral-900/40`, un singur buton principal alb (`bg-white text-black`) pe secțiune; restul cu contur.
2. Roșu (`rose`, nu `red`: tema light are corecții doar pentru `rose`) DOAR la erori. Verde (`emerald-400`) DOAR ca punct de stare reală, legat de date (laptopul viu, SES, piesă urcată). Fără amber / sky / violet / cyan.
3. Fără emoji, umbre luminoase colorate, gradienți, `hover:scale`. Fără insigne „LIVE / AUTOPILOT” scrise fix: o stare afișată trebuie să vină dintr-o valoare.
4. Un singur player cântă odată (ascultătorul `play` din `page.tsx`); instalarea se crede doar din browser (`getInstalledRelatedApps`), nu din localStorage.

### [Claude] - 11 nov 2026 - Unificarea stilului pe tot site-ul (PUBLICAT, commit da0e91f, verificat pe reverb.ro)
Cerută de Alin după observațiile lui Marius. Planul, reviziile și scripturile: `docs/designs/unificare_stil_2026-11-11/`.

**Tot din 11 nov (a doua cerere a lui Alin):**
- Butoanele magnetice sunt bibliotecă: `lib/motion/magnetic.ts`. Orice `<a>` / `<button>` cu `rounded-full` din `<main>` e magnetic automat; în bară / footer se pune clasa `mech-magnetic`; `data-no-magnetic` îl scoate. Nu rescrieți motorul în componente.
- Dungile animate (`components/AmbientBeams.tsx`) au culori proprii pentru tema light; `<body>` trebuie să rămână transparent în light (fundalul stă pe `<html>`), altfel le acoperă.
- Machetele (`/showcase/<x>` și paginile statice din `public/`) au buton „Înapoi la concepte”: în `Header.tsx` pentru cele Next, script mic în `index.html` pentru cele statice.
- `lib/liveProjects.ts`: fiecare afirmație despre un proiect are o sursă (pagina live sau notele proiectului). Fără cifre de trafic și fără tehnologii presupuse din numele domeniului: descrierile vechi aveau ~15 afirmații false.
- `/templates` e scoasă din traseul public (noindex, fără linkuri, în afara sitemapului). Decizia lui Alin.
- Pagina de pornire: `app/page.tsx` e fișier server (metadata), conținutul e în `app/HomeClient.tsx` (la fel `/en`). `node scripts/check-seo.mjs <adresa>` trebuie să dea OK înainte de publicare.

**11 nov, 23:05 — portofoliul e minimalist (cererea lui Alin: „haos… prea multă repetiție”), commit 5f4425f:**
- `components/PortfolioIndex.tsx` e o listă simplă: un rând pe proiect, fără fereastră de terminal, fără etichete repetate (stare, „deschide”, „călătoria”, „azi”). Ce e comun tuturor rândurilor se spune o singură dată, deasupra listei; pe rând apare doar ce diferă (ex. „demo”).
- Prețul „de la” și termenul de sub titlu se citesc din `lib/packages.ts` (`getPackage`), nu se scriu de mână.
- `lib/liveProjects.ts` are câmpul scurt `kind` (felul proiectului, 1–2 cuvinte) pentru acest rând.

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
