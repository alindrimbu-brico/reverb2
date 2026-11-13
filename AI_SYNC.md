# Jurnal de Sincronizare AI (Echipa Alin Dragoș)
Aici notăm progresul pentru a ne coordona perfect.

## Echipa:
- **Claude (Co-work Cluj):** Strategie, Arhitectură, SEO, Coordonare.
- **Antigravity (Gemini):** Development, Design, Viteză de execuție.
- **Revi (OpenClaw):** Execuție Marketing, Scraping, Automatizări.

---

### [Claude] - 13 nov 2026 - Selectorul de limbă (24 de limbi, traducere în browser)

Cererea lui Alin: un selector „la fel” ca pe aurencomputers.com (detectează țara, afișează site-ul în limba omului, 24 de limbi). I s-au dat trei căi; a ales copia fidelă („A acum”). Plan, cele două revizii, deciziile și verificările: `docs/designs/selector_limba_2026-11-13/` (`design_v1_decizii.md` câștigă).

**Cum merge.** Româna e sursa; engleza rămâne scrisă de mână pe `/en`. Celelalte 22 de limbi sunt dicționare (`public/i18n/<cod>.json`, text românesc → traducere) aplicate în browser peste pagina românească. Nu există adrese pe limbă și nici `hreflang` pentru ele: Google vede doar româna și engleza, ca până acum.
- `lib/i18n/locales.ts`: lista de limbi, harta țară → limbă, tiparul de roboți. Scoaterea unei limbi = rândul ei șters de aici.
- `lib/i18n/scope.ts`: unde lucrează motorul. `full` = `/`, `/servicii`, `/pachete`, `/portofoliu`, `/despre`, `/contact`, `/magazine-online`, `/showcase`; `chrome` (doar bara, subsolul, banda de cookie-uri, plus un rând „pagina există doar în română și engleză”) = restul paginilor românești; `off` = `/en…`, machetele, Studio. Tot aici sunt perechile română ↔ engleză (`toEn`, `toRo`); bara nu mai are tabelele ei.
- `lib/i18n/inline.ts`: scriptul scurt pe care `Header` îl scrie în HTML. Hotărăște limba înaintea React-ului și ascunde conținutul cel mult 2 secunde, cât vine dicționarul (atributul `data-rv-i18n` pe `<html>`; își scoate singur marcajul).
- `lib/i18n/store.ts` + `translator.ts`: starea și motorul care rescrie nodurile de text, patru atribute și titlul filei. `lib/i18n/useT.ts`: legătura cu React. `components/i18n/`: butonul din bară, panoul, rândul de sub bară.
- Țara vine din `middleware.ts`, în antetul `Server-Timing` (`rvcc`), citit de browser din datele de navigare. **Niciun cookie.** Roboții nu o primesc.

**Reguli de limbă.** Alegerea din panou se ține în `localStorage["reverb_locale"]`. „Română” și „English” nu mută pe nimeni automat; o limbă din dicționar se aplică singură pe paginile românești. La prima vizită: țara → limba, dar nimic automat dacă browserul are româna printre limbi sau țara e RO / MD; țară în afara hărții → engleză (salt la perechea `/en`, o dată pe sesiune, cu `?…` și `#…` păstrate). `?tara=DE` în adresă = probă: pagina se poartă ca pentru un vizitator din Germania.

**Ce NU faceți:**
1. Nu puneți limba într-un cookie și nu chemați un serviciu de geolocalizare: țara vine din antet.
2. Nu traduceți textele cu React pe paginile românești (un al doilea `isEn`): textul rămâne românesc în cod, motorul îl traduce. Excepție: zonele cu `data-no-translate` (panoul de limbi, rândul de sub bară), care se traduc singure cu `useTr`.
3. Titlurile cu liniuțe: `<Linie>` își ia traducerea prin `useLineText`; motorul nu intră în `[data-rl]`. Nu scrieți text tradus direct în `<Linie>`.
4. Text nou care nu trebuie tradus (nume, cod): `data-no-translate` pe element.
5. Nu atingeți `public/i18n/*.json` și `lib/i18n/generated.ts` de mână. O traducere greșită se corectează în `lib/i18n/corectii.json` (`{"de": {"textul românesc": "traducerea"}}`), apoi `py -3 -X utf8 scripts/i18n_construieste.py`.

**Când schimbați un text românesc de pe paginile `full`** (sau un preț: numerele sunt șabloane, un preț schimbat nu strică nimic), textul nou apare în română pe versiunile traduse până rulați, pe o construcție pornită local (`next build && next start -p 3417`):
1. `py -3 -X utf8 scripts/i18n_extrage.py http://localhost:3417 --bucati <dosar> --doar-noi` → `lib/i18n/sursa.json` și fișierele cu textele noi;
2. traducerea lor în fiecare limbă (`<dosar>/out/<cod>_1.json`, `{"număr": "traducere"}`; instrucțiunile date traducătorilor sunt în `docs/designs/selector_limba_2026-11-13/INSTRUCTIUNI_traducere.md`);
3. `py -3 -X utf8 scripts/i18n_construieste.py <dosar>/out` → dicționarele și `generated.ts`;
4. `py -3 -X utf8 scripts/i18n_acoperire.py http://localhost:3417 de,fr,el` după o nouă construcție: ținta e 0 texte netraduse.

**Liniuțele pe limbi.** 11 limbi le au (da, de, es, et, fi, fr, ga, it, nl, pt, sv); 11 nu (bg, cs, el, hr, hu, lt, lv, mt, pl, sk, sl): au litere în afara atlasului, iar o limbă cu un singur titlu fără linie rămâne toată fără, ca paginile să nu iasă amestecate (`LINES_OFF` din `generated.ts`, calculat de script). Atlasul a primit `æ Æ œ Œ Ø ¿ ¡` (`scripts/linia_atlas.py`). Bulgara și greaca se afișează cu fontul sistemului (Geist nu are chirilice și grecești).

**Limite știute.** Traducerile sunt automate, necitite de un vorbitor nativ. Propozițiile rupte de un link se traduc pe bucăți. Blogul, pagina legală, Humanoid și convertorul rămân în română (doar bara și subsolul se traduc). Formularul trimis dintr-o limbă din dicționar ajunge la noi cu `[DE]` în subiect; confirmarea către om pleacă în engleză.

**Verificări** (`docs/designs/selector_limba_2026-11-13/verificari/i18n_comportament.py <baza> chromium|webkit`, 36 de probe; `scripts/i18n_acoperire.py`; `scripts/check-seo.mjs` verifică și că fiecare dicționar se servește și că un robot nu primește țara). `taiat.py`, `butoane.py` și `linia_check3.py` primesc limba prin `RV_LIMBA=de`.

### [Claude] - 12 nov 2026 - Studio → Muzică → „Creează”: rețeta de sunet (felia 1 a motorului de creație)
Cererea lui Alin: selector de stiluri cu gradație 1–100, reglaje în cuvinte („mai mult bas, adaugă viori”), apoi album, foileton, poezie recitată, trimitere și publicare automată. Planul, cele 3 rapoarte de revizie și verificările: `docs/designs/motor_creatie_2026-11-12/` (`design_v2_decizii.md` câștigă). Se construiește în felii verticale; aceasta e prima.
1. **Stilul care pleacă la Suno îl scrie codul, nu modelul:** `lib/musicReteta.ts` (paleta + `compileazaStil`). Suno nu primește procente: cursorul alege una din patru trepte față de stilul de bază (abia simțit / o idee / clar / la egal), iar treapta e cuvântul trimis. Nu schimbați pragurile fără să rulați `node --test scripts/test_music_reteta.mjs`.
2. `op: compune` primește opțional `reteta` și `public`. Cu rețetă, modelul întoarce în `stil` doar propoziția de atmosferă; ruta compilează stilul final și „Exclude”. Fără rețetă, drumul vechi e neschimbat.
3. Ecranul e `app/studio/CreeazaPanou.tsx` (în `MuzicaTab.tsx`, subfila „1. Creează”). Ținte de atingere ≥ 44 px, text ≥ 14 px pe controale; ciorna se ține minte cu `lib/useStored.ts`. Verificarea: `docs/designs/motor_creatie_2026-11-12/verificari/creeaza_check.py` (Chromium + WebKit, 390 / 768 / 1280, ambele teme).
4. **Nu adăugați în panou forme sau butoane care nu merg cap-coadă** (Poezie recitată, Album, Foileton, „Trimite în Suno”, „Publică singur”): vin pe rând, fiecare cu felia ei, după probele scrise în plan.

### [Claude] - 13 nov 2026 - Forma butoanelor, ridicarea lor și „linia care merge” (etapa 3)

Cererile lui Alin după proba din 12 nov. Plan, cele două revizii și verificările: `docs/designs/linia_care_merge_2026-11-12/` (`design_v3_decizii.md` câștigă).

**1. Pastile cu colț.** Pe site-ul agenției nimic cu text nu mai e capsulă: etichetele și butoanele au colț, latură dreaptă, colț, ca chenarul casetelor.
- În cod scrieți în continuare `rounded-full` (de clasă țin butoanele magnetice și corecțiile temei deschise). Raza o înlocuiește regula „Pastile cu colț” din `app/globals.css`: etichetă 6 px, buton mic 9 px, buton mare 12 px, după clasa `py-*` de bază; `--pill-k` le înmulțește pe toate. **Nu scrieți altă rază pe butoane și etichete.**
- Cercurile (puncte, butoane rotunde cu `h-*` / `w-*`, fără `px-*` / `py-*`) rămân cercuri.
- Rămân capsule doar machetele (sub `data-keep-pills`). **Bara de sus are și ea colț** (Alin, 13 nov seara: „nu rămâne capsulă”): clasa `pill-bar` îi dă 16 px; comutatoarele (limbă, lățimea previzualizării) își scriu raza cu `style="--pill-r: …"` = raza butoanelor din ele + spațiul dintre ele. Nu readuceți capsula.
- **Machetele** (`/showcase/<x>` în orice limbă, `/xiaolong`, `/clarity-architecture`) sunt ferite prin `components/DemoScope.tsx`, pus în `layout.tsx` al dosarelor `showcase`. O machetă nouă în afara `/showcase/` primește un `layout.tsx` cu `<DemoScope fixed>`.

**2. Butoanele se ridică.** La trecerea cursorului, butoanele (`<a>` / `<button>` cu `rounded-full` din `<main>`, `.mech-magnetic`, `.mech-btn`) cresc la 1,045 și capătă o umbră: regula „Butoanele se ridică” din `globals.css`, doar CSS (`scale`, care se adună cu tragerea magnetică din `lib/motion/magnetic.ts`). **Nu puneți `hover:scale-*` sau altă mărire pe butoane.** Nu se aplică pe machete, în bara de sus și în comutatoare (`data-no-lift`) și în Studio (`.studio-light-root`); pe ecrane tactile și la „mișcare redusă” nu există.

**3. Linia care merge: doar pe textele mari, niciodată pe contururi.** Alin a respins liniuțele de pe contururile cardurilor („strident, de joacă, neprofesionist”); `BorderRun` a fost șters. Nu le readuceți.
- **Unde:** titlul paginii, titlurile de secțiune și titlurile casetelor cu text fix (cel mult 4 pe rând), plus numele pachetelor, cu clasa de mărime de bază `text-xl` sau mai mare. **Nu:** grilele și listele făcute din date (cardurile de proiecte, conceptele, articolele, rândurile din portofoliu), întrebările frecvente, bara, subsolul, Studio, raportul Humanoid, machetele.
- **Cum se pune:** `<Linie>Text</Linie>` (`components/RunningLine.tsx`). Conținutul e strict un șir; un titlu pe două rânduri = două `<Linie>` cu `<br />` între ele. Nu are nevoie de nicio listă de texte: literele vin din atlasul grosimii (`lib/outlineRun/w300.ts` … `w600.ts`), iar pozițiile se calculează (avans, kerning, spațiere, ligaturi).
- **Totul sau nimic pe rând:** linia apare doar dacă fiecare cuvânt are în pagină lățimea calculată. Rămâne text simplu, fără eroare: alt font (mono), text tradus automat, italic, majuscule din CSS, grosime fără atlas. În `next dev` motivul apare în consolă.
- **Culoarea:** banda e „cerneala” temei (`text-white`). Pe text gri are grosimea din rețeta aprobată (0,028 em); pe text alb e cu 25 % mai groasă (componenta alege singură). **Alin a ales albul pe 13 nov** (proba 1); verdele a fost scos din cod.
- **Prima pagină:** rândul gri al titlului mare e pe `OutlineRun` + `lib/outlineRun/heroRo.ts` / `heroEn.ts` (Alin: „perfect”, nu se atinge; dacă îi schimbați textul, grosimea sau spațierea, rulați `scripts/linia_litere.py`). Rândul alb al titlului mare nu are liniuțe pe `/`.
- **Când se schimbă fontul site-ului** (alt fișier Geist): `node scripts/check-seo.mjs <adresa>` dă „fontul Geist s-a schimbat”. Atunci: `npx next build`, apoi `py -3 -X utf8 scripts/linia_atlas.py .next/static` (se verifică singur față de HarfBuzz) și comiteți `lib/outlineRun/`.
- **Proba s-a încheiat** (13 nov noaptea): `/proba-linii`, modul `proba` din `app/HomeClient.tsx` și intrările din `lib/routes.ts` / `scripts/check-seo.mjs` au fost șterse. Colțul: „e bine așa”; culoarea: alb.
- **Mișcare redusă:** benzile nu se afișează deloc. În afara ecranului se opresc.
- **Verificări** (dosar local, `verificari/`): `linia_check3.py` (fiecare rând primește contururi, geometria pe eșantion, Chromium + WebKit, ambele teme), `pastile_check.py` (nicio capsulă rămasă pe paginile agenției, machetele identice cu cele de dinainte, ridicarea), `linia_perf.py`.
- **De știut la lucru:** `next dev` a servit CSS vechi după ce `globals.css` a fost scris de un script; dacă un stil nou nu apare, opriți serverul, ștergeți `.next/dev` și reporniți.

**3b. Titlurile paginilor englezești** `/en/packages`, `/en/services`, `/en/about` au din 13 nov seara stilul celor românești (Geist, fără majuscule din CSS, `font-light` / `font-medium`), ca să primească liniuțe (Alin: „fă și tot site-ul”). Nu readuceți `font-mono uppercase` pe titluri; etichetele mici de deasupra lor rămân mono.

**4. Portofoliu:** un proiect în lucru are `status: "ÎN LUCRU"` / `"IN PROGRESS"` în `lib/liveProjects.ts` (The Digital Greenhouse); portofoliul scrie „în lucru” pe rând, fereastra de previzualizare nu mai scrie „LIVE”, iar cifra „N Active” de pe prima pagină se numără cu `inProduction()` (nu se scrie de mână).

**5. Fundalul animat (`components/AmbientBeams.tsx`) era cauza pentru care site-ul mergea greu** (13 nov seara, măsurat prin eliminare: `verificari/greutate_cauza.py`). Umplea tot ecranul la rezoluție plină, de 60 de ori pe secundă: pe un telefon încetinit de 4 ori, 13–16 cadre pe secundă cu el și 60 fără el; liniuțele și estomparea contau puțin.
- Refăcut fără schimbare de aspect (comparat la pixel, `verificari/fundal_compara.py`): dungile și vigneta pe un canvas de trei ori mai mic pe fiecare latură, mărit din CSS; firele subțiri sunt cinci `span.ambient-hairline` mutate cu `transform` (stilul în `globals.css`, „Fundalul animat”); cel mult 30 de redesenări pe secundă.
- Măsurat vechi / nou, alternat (`verificari/greutate_vechi_nou.py`): telefon ×4: 15,9 → 57,6 cadre pe secundă; telefon la viteză normală: 840 → 105 ms de lucru pe secundă; laptop ×4: 12,7 → 45,4.
- **Nu ridicați rezoluția canvasului, nu scoateți limita de cadre și nu desenați din nou firele pe canvas fără să rulați măsurătoarea.** Un test care ascunde fundalul ascunde `canvas` și `.ambient-hairline`.
- Reparat pe drum: fundalul nu pornea când ajungeai de pe o machetă pe o pagină a agenției fără reîncărcare (efectul nu depindea de rută).

**6. Textele de pe Pachete, Servicii și Despre, în română și engleză, sunt scrise pe înțelesul unui om care nu lucrează în IT** (Alin, 13 nov: „rescrie textele englezești pe înțeles”, apoi „da” și pentru `/servicii` și `/despre`). Aceleași oferte, prețuri și promisiuni ca înainte; fără „arhitectură”, „enterprise”, „video engines”, „JSON-LD”, „GEO”, „SLA”. Se spune ce primește clientul. Nu readuceți jargonul. Cele două prime pagini (`/`, `/en`) au încă stilul vechi: nu le-a cerut.

**6b. Pagina Pachete (RO + EN):** site-urile și magazinele sunt înaintea clipurilor (`#web`, apoi `#video`), iar cele trei lucrări apar cu poză prin `components/WorkShots.tsx` (poze 800 × 500 în `public/work/`). Cerut de cinci cititori fără context la rând („vreau să văd lucrări înainte să scriu cuiva”). Nu readuceți clipurile pe primul loc și nu înlocuiți pozele cu butoane-text.

**7. Subsolul e-mailurilor către clienți** (`lib/email/layout.ts`, `footerHtml`; Alin, 13 nov seara): „Reverb Digital”, fără adresă, apoi „Zylaris Group London” cu adresa (din `lib/company.ts`, `partner`), ca în subsolul site-ului; firma, CUI-ul și registrul rămân pe ultimul rând, mic (oferta e document comercial). Butoanele din e-mail au colț de 12 px, ca butoanele mari de pe site (nu mai sunt capsule).

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
- **Fără gri în e-mailuri; culorile sunt exact tema închisă a site-ului** (12 nov, Alin: „Nu vreau gri nicăieri… prefer negru… exact tema site-ului”). `theme.ts` ține `--bg` #070809 și griurile neutre Tailwind (fără nuanțe albăstrui), fiecare cu calculul lângă ea; contrastul se verifică cu `verificari/contrast.py` (prag 4,5 : 1). **Outlook (noul Outlook pe Windows și aplicația de telefon / tabletă), în modul întunecat, revopsește culorile de fundal** (negrul ajungea gri #565657 / #4c4d4d, măsurat pe două capturi ale lui Alin), dar nu atinge textul deschis, chenarele și imaginile de fundal. De aceea fiecare suprafață își ține culoarea de trei ori (`surface()` și `veil()` din `layout.ts`): culoarea, o plăcuță PNG de aceeași culoare pe tabel și un `linear-gradient` pe celula din interior. **Regulile din `<style>` țintite pe Outlook (`[data-ogsb]`, `[data-ogab]`, clase `x_`) au fost încercate și nu au avut efect; nu le readuceți.** În Gmail straturile de imagine se scot (`u + .rv-body .rv-t`), pentru că Gmail pe iPhone inversează textul. **Butonul principal e alb cu text închis, ca pe site**, și e construit după o probă cu 10 variante văzută de Alin în Outlook (doar una a ținut): celula e albă (culoare + plăcuța `white-v1.png`), iar legătura are text ALB pe plăcuța `black-v1.png` cu `mix-blend-mode:difference`. Outlook face alb orice text închis (`color`, `!important`, `<font>`, `-webkit-text-fill-color` au picat toate) și scoate `linear-gradient`; ține imaginile și amestecul. Nu puneți text închis pe buton și nu scoateți plăcuțele: butonul ar rămâne gol în Outlook. Unde amestecul lipsește iese o pastilă neagră cu contur alb; Gmail și Outlook-ul cu motor Word primesc forma simplă (regula `u + .rv-body .rv-bl`, comentariul `[if mso]`). Un comentariu condițional nu se pune în altul (îl închide pe primul și eticheta apare de două ori). Butonul secundar e contur stins, fără fond; varianta `accent` are text verde. **Font și verde (Alin: „nu peste tot… echilibrat, discret”):** mono (`theme.mono`, lista `font-mono` a site-ului) pe date — etichete, valorile din rânduri, numere, butoane, subsol; sans pe textul de citit. Verdele `theme.accent` (#00d492, `emerald-400`) doar ca text, în trei locuri: punctul din etichetă, butonul WhatsApp, WhatsApp în subsol. Nu-l puneți ca fundal și nu-l înmulțiți. Orice suprafață nouă cu fundal se face cu `surface()` + `veil()` și clasa `rv-t`. Simularea: `verificari/outlook_sim.py` (controlul ei trebuie să iasă gri). E simulare în Chromium, nu Outlook: confirmarea vine doar dintr-un e-mail real deschis în Outlook.
- Imaginile e-mailurilor (`public/email/logo-v1.png`, `grid-v1.png`, plăcuțele `bg-v1.png`, `card-v1.png`, `panel-v1.png`, `white-v1.png`, `black-v1.png`) nu se redenumesc și nu se șterg: e-mailurile deja trimise le cer de la aceeași adresă. O imagine nouă primește `-v2`; plăcuțele se fac cu `verificari/imagini_fundal.py` și au culoarea din `theme.ts` (culoare schimbată = plăcuță `-v2`).
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
