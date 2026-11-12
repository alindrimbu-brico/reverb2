# Jurnal de Sincronizare AI (Echipa Alin Dragoș)
Aici notăm progresul pentru a ne coordona perfect.

## Echipa:
- **Claude (Co-work Cluj):** Strategie, Arhitectură, SEO, Coordonare.
- **Antigravity (Gemini):** Development, Design, Viteză de execuție.
- **Revi (OpenClaw):** Execuție Marketing, Scraping, Automatizări.

---

### [Claude] - 12 nov 2026 - Raportul „Realitatea Umanoidă 2026”: un singur stil și trusa de piese mecanice
Cererea lui Alin: „într-un stil unic peste tot… multe elemente mecanice… la apropierea mouse-ului, singure, când se deschide pagina, când se închide, când se dă scroll”. Plan, revizii, verificări: `docs/designs/humanoid_mecanic_2026-11-12/` (`design_v2_decizii.md` câștigă).
1. **Pagina și cele patru capitole stau într-un singur cadru**: `app/humanoid-reality-2026/layout.tsx` → `components/humanoid/HumanoidFrame.tsx` (limba RO / EN ținută minte, arborele motor, diafragma, șublerul). Paleta veche (cyan / galben) a dispărut; totul e pe vocabularul site-ului și merge în tema light. Nu readuceți culori scrise direct: `text-white`, `text-neutral-*`, `border-white/10`, iar în stiluri inline `var(--ink)` / `color-mix(in srgb, var(--ink) P%, transparent)`.
2. **Trusa e în `components/mech/`** și se poate folosi pe orice pagină pusă într-un `<MechProvider>`: `GearTrain` (roți care angrenează corect), `RobotArm`, `Caliper`, `Shutter`, `Bolts`, `Conveyor`, `CrankSlider`, `MechLink`. O singură viteză (`omega`, din `MechProvider`: mers în gol + viteza derulării) mișcă tot; fiecare mecanism își integrează unghiul cu `useTrainAngle`. Nu animați o piesă separat de arbore: dinții nu mai angrenează.
3. Desenele sunt SVG cu `stroke="currentColor"` pe `<svg class="text-white">`; fiecare roată e un `<svg>` propriu, rotit ca element HTML. Coordonatele calculate cu sinus se rotunjesc (`round2`), altfel React dă eroare de hidratare.
4. **Diafragma** e deschisă implicit din CSS (`.mech-iris` în `globals.css`); se deschide la prima intrare, clipește între paginile raportului și se închide la plecare doar prin `MechLink` (`onNavigate` al lui `<Link>`). Nu puneți ascultători de clic pe document pentru asta.
5. Mișcarea redusă cerută în sistem și întrerupătorul „Mecanică” opresc tot (`omega = 0`). Valorile ținute minte se citesc cu `lib/useStored.ts`, nu cu `setState` într-un efect.
6. Formularul „Descarcă Raportul — 48 de pagini” a fost scos: fișierul nu a existat niciodată. Ruta `/api/humanoid-subscribe` și șabloanele ei de e-mail au fost șterse. Cifrele din raport nu au surse verificate; pagina o spune („estimări editoriale”). Nu puneți instrumente (cadrane, numărători) pe ele.
7. Verificări înainte de publicare: `verificari/mech_check.py` (pe `next build` + `next start`), `light_check.py`, `culori.py` (poarta: zero resturi din paleta veche), plus `butoane.py` și `taiat.py` pe cele cinci pagini.

### [Claude] - 12 nov 2026 - Reverb Studio e instrument de lucru, nu machetă (commituri 42de6db … 20c6a2b)
Alin: „mașina mea de lucru… instrument de creație și de publicare automată… nu butoane la mișto”. Auditul a găsit 9 secțiuni cu texte fixe prezentate ca rezultate; au fost scoase.
1. **O filă sau un buton intră în Studio doar când face cap-coadă ce scrie pe el.** Fără `setTimeout` care mimează lucrul, fără cifre, stări sau „Programat / Postat / Validat” scrise în cod, fără nume de modele ca decor.
2. Studio stă pe **`https://studio.reverb.ro/studio`** (gazdă proprie; `reverb.ro/studio` redirecționează, `/api/studio/*` răspunde doar acolo și pe localhost). Regulile sunt în `middleware.ts`, blocul „Reverb Studio pe gazda lui”; nu-l scoateți.
3. Tot ce face Studio trece prin `/api/studio/muzica` (comenzi semnate către laptop, pentru postări și muzică). `/api/studio` e retrasă (410); nu adăugați acțiuni acolo.
4. Depozitul GitHub e PUBLIC: scripturile de laptop și `docs/` sunt în `.git/info/exclude`; nu faceți `git add -A`.
5. Planul și rapoartele sunt pe laptop, în `docs/designs/studio_instrument_2026-11-12/` (`design_v2_decizii.md` câștigă).

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

**12 nov — detalii fine (Alin, de pe tabletă: „textele din butoane aproape ies din cadru… verdele nu se vede pe light… grila lipsește pe light”), commit-uri 4ad2011 + b95e67b:**
- Grila de pătrate din fundal se desenează cu `currentColor`, nu cu `#ffffff` (altfel dispare în tema light); opacitatea: `opacity-[0.035] light:opacity-[0.075]`.
- Verdele temei light e unul singur: `#065F46` (text), cu fond și ramă din aceeași nuanță; dunga din mijloc din `AmbientBeams.tsx` folosește tot nuanța aceasta. Nu puneți `text-emerald-*` deschis fără să-l vedeți în light.
- Trei coloane de carduri cu butoane abia de la `lg` (1024 px), nu de la `md`: la 768 px butoanele-pastilă se rup pe două rânduri.
- O grilă de carduri are `grid-cols-1` explicit, iar textul cu `truncate` are `min-w-0`; altfel cardul iese din ecran pe telefon și e tăiat fără ca pagina să deruleze lateral.
- Înainte de publicare: `docs/designs/unificare_stil_2026-11-11/verificari/butoane.py` și `taiat.py` (pe toate paginile principale, 360–1366 px, Chromium și WebKit) trebuie să dea 0.
- Copiile `*.vercel.app` primesc `X-Robots-Tag: noindex` din `middleware.ts`.
- **Machetele nu se indexează (decizia lui Alin, 12 nov):** `/showcase/<x>` în toate limbile și dosarele statice din `public/` primesc `X-Robots-Tag: noindex, follow` din `middleware.ts` (`isMockupPath` din `lib/routes.ts`) și lipsesc din sitemap (189 → 41 de adrese). Rămân indexabile `/showcase/florarte` și `/showcase/surya`: florarte.ro și surya.ro redirecționează acolo. Nu le blocați în `robots.txt` (motoarele n-ar mai vedea antetul). O machetă nouă nu se adaugă în sitemap; `scripts/check-seo.mjs` verifică antetul. Neacoperite: cele 5 machete aduse prin proxy din GitHub Pages.
- **Cardul 03 de pe prima pagină (RO + EN) citește prețurile și termenele din `lib/packages.ts`** („Site sau Magazin Online”, de la prețul site-ului, cu ambele pachete pe rânduri; butonul duce la `/pachete#web`). Înainte numea un magazin și afișa prețul site-ului. Nu scrieți prețuri de mână pe prima pagină. Un termen ca „7–14 zile” se ține pe un rând cu caractere care nu se rup (` `, `⁠`), nu cu un `span` `whitespace-nowrap`: în WebKit acesta scoate rândul din card la lățimi de desktop. Commit 8ac2d9b.
- **Prețurile și termenele se schimbă numai în `lib/packages.ts`** (12 nov). Toate paginile agenției citesc de acolo: prima pagină, Pachete, Servicii, Contact, formularul, Magazine online, Portofoliu, în română și engleză. Textele englezești ale pachetelor sunt în `lib/packagesEn.ts`, fără preț (`enPrice(id)` îl ia din registru). Singura excepție scrisă de mână: serviciul GEO de pe Servicii, care nu e pachet. Nu scrieți „€” urmat de cifre în pagini.
- **Formularele de contact trimit prin `POST /api/contact`** (RO și EN). Înainte afișau „mesaj recepționat” după un `setTimeout`, fără să trimită nimic. „Succes” apare doar la răspuns 200; la eroare se arată adresa de e-mail. Opțiunile formularului românesc au ca valoare `id`-ul pachetului, deci `/contact?pachet=<id>` preselectează; valorile vechi se traduc prin `packageAliases`.
- **Prețurile sunt fără TVA** (decizia lui Alin, 12 nov). Eticheta și nota vin din registru: `VAT_LABEL` / `VAT_NOTE` (`lib/packages.ts`), `VAT_LABEL_EN` / `VAT_NOTE_EN` (`lib/packagesEn.ts`). Orice loc nou care afișează un preț primește eticheta lângă preț sau nota sub listă.
- **Textele pachetelor se scriu pe înțelesul unui om care nu lucrează în IT** (Alin: „nu înțeleg”): fără nume de tehnologii (Next.js, Payload, JSON-LD) și fără prescurtări (GEO, A/B, SLA) în `lib/packages.ts`, `lib/packagesEn.ts` și în întrebările de pe Pachete. Se spune ce primește clientul, nu cu ce e făcut.
- **Formularul englezesc are aceleași opțiuni ca cel românesc** (`serviceOptionsEn()`, valoarea = `id`-ul pachetului) și citește `?package=` sau `?pachet=`.
- **Scoase pe 12 nov:** `/macheta`, `/checkout` (+EN) și `/ai-humans` (+EN), cu redirecționări în `next.config.ts`. Aveau prețuri și servicii care nu mai există; `/checkout` era un formular de card fără plată în spate. Nu readuceți câmpuri de card pe site fără un procesator de plăți real.
- **Pe Pachete, lucrările reale stau lângă prețuri, ca butoane** (trei nume din `lib/liveProjects.ts` + „Vezi toate lucrările”), iar sub ele scrie ce urmează după „Cere acest pachet”. Cerute de trei revizori fără context la rând.
- **„Cine suntem” apare pe Pachete** (sus și la secțiunea de site-uri), prin `components/WhoWeAre.tsx`: firma, orașul, telefon, WhatsApp. E singura excepție de la regula „cine vinde, doar în footer” (decizia lui Alin, 12 nov). Datele sunt cele din `Footer.tsx`; se schimbă împreună.
- **Sprijin după lansare:** cele patru pachete de site și magazin includ 30 de zile de sprijin (WhatsApp, telefon, întâlniri online sau la birou, în Focșani). Rândul e în registru; nu promiteți altceva în pagini.
- **`/templates` (+EN, + `/templates/industrii`) scoasă pe 12 nov**, cu redirecționare spre `/showcase`. Cele 5 machete statice din `public/templates/` au fost șterse tot atunci.
- **E-mailurile se fac doar prin `lib/email`** (12 nov, cererea lui Alin: „în același stil al temei, exact la fel”). `layout.ts` e scheletul (fundal cu grilă, antet cu semnul, card, subsol; întoarce HTML + text), `templates.ts` ține șabloanele (cerere nouă, confirmare către client RO / EN, scrisoare), `theme.ts` culorile, `packageRows.ts` rândurile de pachet din registru. Nu scrieți HTML de e-mail într-o rută și nu adăugați culori: un e-mail nou = o funcție nouă în `templates.ts`. Tot textul venit din afară se escapează în schelet; linkurile trec prin `safeHref` (doar `https://`, `mailto:`, `tel:`).
- Previzualizare: `next dev`, apoi `/api/email-preview?t=cerere|confirmare|scrisoare&lang=ro|en` (`&caz=ostil`, `&text=1`). Ruta dă 404 în afara serverului de dezvoltare. Verificarea: `docs/designs/email_sabloane_2026-11-12/verificari/email_check.py`.
- **Fără gri în e-mailuri; culorile sunt exact tema închisă a site-ului** (12 nov, Alin: „Nu vreau gri nicăieri… prefer negru… exact tema site-ului”). `theme.ts` ține `--bg` #070809 și griurile neutre Tailwind (fără nuanțe albăstrui), fiecare cu calculul lângă ea; contrastul se verifică cu `verificari/contrast.py` (prag 4,5 : 1). **Outlook (noul Outlook pe Windows și aplicația de telefon / tabletă), în modul întunecat, revopsește culorile de fundal** (negrul ajungea gri #565657 / #4c4d4d, măsurat pe două capturi ale lui Alin), dar nu atinge textul deschis, chenarele și imaginile de fundal. De aceea fiecare suprafață își ține culoarea de trei ori (`surface()` și `veil()` din `layout.ts`): culoarea, o plăcuță PNG de aceeași culoare pe tabel și un `linear-gradient` pe celula din interior. **Regulile din `<style>` țintite pe Outlook (`[data-ogsb]`, `[data-ogab]`, clase `x_`) au fost încercate și nu au avut efect; nu le readuceți.** În Gmail straturile de imagine se scot (`u + .rv-body .rv-t`), pentru că Gmail pe iPhone inversează textul. **Butoanele nu au fond** (un fond alb e făcut gri de Outlook): principalul e contur alb, secundarul contur stins. Orice suprafață nouă cu fundal se face cu `surface()` + `veil()` și clasa `rv-t`. Simularea: `verificari/outlook_sim.py` (controlul ei trebuie să iasă gri). E simulare în Chromium, nu Outlook: confirmarea vine doar dintr-un e-mail real deschis în Outlook.
- Imaginile e-mailurilor (`public/email/logo-v1.png`, `grid-v1.png`, plăcuțele `bg-v1.png`, `card-v1.png`, `panel-v1.png`) nu se redenumesc și nu se șterg: e-mailurile deja trimise le cer de la aceeași adresă. O imagine nouă primește `-v2`; plăcuțele se fac cu `verificari/imagini_fundal.py` și au culoarea din `theme.ts` (culoare schimbată = plăcuță `-v2`).
- **Confirmarea către client e pornită** (12 nov, „da” de la Alin): variabila `CONTACT_CONFIRMATION=on` în Vercel, producție. Se oprește ștergând variabila și republicând. Formularele trimit `serviceId`, `lang` și câmpul-capcană `hp`; dacă `hp` e completat, ruta răspunde „ok” și nu trimite nimic.
- Datele firmei stau în `lib/company.ts` (`WhoWeAre.tsx` și e-mailurile citesc de acolo; `Footer.tsx` încă le scrie de mână).
- După ce ștergeți o rută, ștergeți și `.next/dev/types` înainte de `next build`: tipurile generate de serverul de dezvoltare țin minte ruta veche și build-ul cade cu „Type 'Route' does not satisfy the constraint 'LayoutRoutes'”.
- Starea de indexare și ce spun modelele AI: `docs/designs/seo_indexare_2026-11-12/constatari.md`.

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
