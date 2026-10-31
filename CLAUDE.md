@AGENTS.md

Salut Claude, eu sunt Antigravity. Pentru o coordonare perfectă pe proiectele lui Alin, te rog să citești mereu la pornire fișierul `AI_SYNC.md` din rădăcina proiectului. Acolo îți voi lăsa eu și Revi notele tehnice și stadiul proiectului. Spor la strategii!

---

# Abyss.io în reverb.ro: ghid de lucru

Alin (proprietarul) nu este programator. Toate explicațiile către el se dau în română, simplu, iar munca tehnică o face Claude.

## Ce este jocul

**Abyss.io** (cod intern `fish-io`, „V4.0 Global Leaderboard Edition") este un joc în browser de tip „mănâncă și crești" (ca Agar.io): controlezi un pește cu mouse-ul, mănânci puncte verzi și inamici mai mici, fugi de cei mai mari. Ecrane: meniu cu 4 culori (skin), **niveluri** (alegere, introducere, rezultat cu stele, final) și **mod liber** (arena veche, fără sarcini), „YOU DIED" (în modul liber cu butonul de demo „Buy Titan Respawn", în niveluri cu „Încearcă din nou nivelul"), „DOMINARE" (victoria din modul liber), clasament.

**Nu este un proiect separat.** Este o pagină din site-ul reverb.ro, în secțiunea Showcase: `https://reverb.ro/showcase/fish-io`. Repository-ul `abyss.io` nu există; tot codul e în `reverb2`.

APK-ul `fish_io_game-v1_0_0.apk` din Google Drive (aprilie 2026) are alt nume și în acest repository nu există nimic legat de Android (fără Capacitor, fără folder `android`). Nu s-a verificat că este același joc.

## Tehnologie

- Joc: HTML5 Canvas 2D, motorul, desenul, sunetul și meniurile sunt în `app/showcase/fish-io/page.tsx` (~1050 de linii); nivelurile sunt în `levels.ts`, etichetele pozelor în `animals.ts`, ecranele de niveluri în `LevelUI.tsx`. Sunet generat cu Web Audio (oscilatoare, fără fișiere audio).
- Site: Next.js 16 (App Router), React 19, Tailwind 4, TypeScript, găzduit pe Vercel.
- Nu există server de joc și nu există bază de date. Clasamentul global este **simulat** (jucători inventați în cod, plus scorul jucătorului), iar „Google Login" este o simulare care „loghează" un utilizator fix. Istoricul meciurilor se salvează doar în browserul jucătorului (`localStorage`: `abyss_history`, `abyss_user`).

## Comenzi

```bash
npm ci                  # instalare (prima dată)
npm run dev             # rulare locală: http://localhost:3000/showcase/fish-io
npm run build           # compilare de producție (~35 s, merge fără erori)
npm run lint            # verificare cod
node scripts/check-seo.mjs http://localhost:3000   # după build + start: verifică SEO/sitemap
```

Nu există comandă pentru APK. Dacă se dorește o aplicație Android, trebuie făcută de la zero (de exemplu cu Capacitor), ca pas separat, aprobat de Alin. Semnarea aplicației și contul Google Play le face Alin, nu Claude.

## Structura (ce contează pentru joc)

| Cale | Ce este |
|---|---|
| `app/showcase/fish-io/page.tsx` | tot jocul: motor, desen, sunet, meniuri, clasament |
| `app/showcase/fish-io/layout.tsx` | titlul și descrierea paginii (SEO) |
| `app/showcase/fish-io/levels.ts` | nivelurile, tipurile de task-uri, așezarea animalelor, calculul stelelor (logică pură, fără desen) |
| `app/showcase/fish-io/animals.ts` | felul animalului pentru fiecare poză, razele pe fel, numele pe fel în română, iconițe |
| `app/showcase/fish-io/LevelUI.tsx` | panoul cu task-uri din joc, alegerea nivelului, introducerea, rezultatul și finalul |
| `public/abyss-assets/` | imaginile jocului: 6 poze pentru jucător (`gaina, pisica, caine, delfin, rechin, trex`) și 150 de poze pentru inamici în `enemies/enemy_1.jpg ... enemy_150.jpg` (~6 MB) |
| `scripts/download_enemies.js` / `.py` | scripturile care au descărcat pozele inamicilor |
| `app/showcase/page.tsx` | cardul „Abyss.io (Game Engine)" din lista Showcase |
| `lib/routes.ts` | lista paginilor pentru sitemap (conține `fish-io`) |

Restul repository-ului (marketing, blog, alte showcase-uri, NeuroLumina etc.) este site-ul reverb.ro. Detalii în `README.md`, `MEMORY.md` și `AI_SYNC.md`.

## Niveluri și task-uri

Fiecare nivel are o **sarcină principală** (obligatorie: „mănâncă N animale", de orice fel sau de un fel anume) și **două bonus**. Stele: 1 pentru principală + 1 pe fiecare bonus reușit (maxim 3). Tipuri de bonus: `avoid` (nu atinge și nu mânca un fel de animal: orice contact îl strică, chiar dacă animalul e mai mic), `time` (termină în N secunde), `nohit` (nicio atingere care te micșorează). Nivelul se termină imediat ce sarcina principală e gata. Dacă mori, nivelul se reia (progresul din nivel se pierde, scorul nu intră în clasamentul din modul liber).

| Nivel | Principală | Bonus 1 | Bonus 2 |
|---|---|---|---|
| 1 Primii pași | mănâncă 8 animale | în 120 s | fără nicio atingere |
| 2 Vânătoare de păsări | mănâncă 6 păsări | nu atinge niciun șarpe | în 90 s |
| 3 Veverițe și pisici | mănâncă 5 veverițe | nu atinge nicio pisică | în 80 s |

- Ce animale apar și câte: câmpul `spawn` din `levels.ts`. Raza fiecărui fel e în `KIND_RADIUS` (`animals.ts`); păsările și veverițele pot fi mâncate de la început, restul cer să crești.
- În joc: inel **verde** = țintă de mâncat (la nivelul „orice animal": ce poți mânca acum), inel **galben pulsând cu ✕** = interzis, **săgeată verde** spre cea mai apropiată țintă din afara ecranului.
- Stelele se păstrează doar în browser (`localStorage`: `abyss_levels`, o listă cu stelele fiecărui nivel). Nivelul N+1 se deblochează când nivelul N are cel puțin o stea.
- `PREY_SPEED_FACTOR` (0,7): în niveluri, animalele mai mici decât tine nu fug mai repede de 0,7 din viteza ta. Fără asta, prada mică (cu viteza maximă peste a jucătorului) nu putea fi prinsă: într-o simulare, un jucător care urmărește mereu ținta cea mai apropiată termina nivelul 1 în median 214 s (23% nu terminau în 5 minute); cu limita, ~49 s. Modul liber nu are limita.
- Timpii bonus (120, 90, 80 s) și numărul de animale din `spawn` au fost dublate după primul test cu un om (prea puțin timp, prea puține animale și dușmani). Simulările inițiale (jucător care urmărește ținta cea mai apropiată: nivelul 1 median ~49 s, 2 ~32 s, 3 ~26 s) nu mai sunt valabile pentru numărul nou de animale.
- Cum adaugi un nivel: o intrare nouă în `LEVELS` (`levels.ts`), nimic altceva. Dacă folosește un fel nou de animal, trebuie să existe în `animals.ts`.

## Constante importante ale jocului (în `page.tsx`)

`WORLD_SIZE 3000`, `INITIAL_RADIUS 20`, `SPEED_FACTOR 3.1` (era 4; scăzut cu ~22% la cererea lui Alin, jocul era prea rapid pe tabletă), `MIN_SPEED 0.8`, `ENEMY_COUNT 30`, `FOOD_COUNT 400`.

**Viteza nu depinde de ecran:** mișcarea se înmulțește cu `dt` (timpul real scurs, exprimat în „cadre de 60 Hz”, limitat la 3). Înainte se mișca „pixeli pe cadru”, deci pe un ecran de 120 Hz jocul mergea de 2 ori mai repede, iar în test, la ~500 de cadre/s, de până la ~8 ori mai repede. Acum: ~210-240 px/s (raza de start) la 60 Hz și ~205-211 px/s chiar și la 360-650 de cadre/s. Orice mișcare nouă trebuie înmulțită cu `dt`.

Atingerea unui inamic mai mare nu omoară pe loc: peștele se micșorează cu `HIT_SHRINK` (20%) din rază, este împins puțin înapoi, clipește și are `HIT_COOLDOWN_MS` (1,5 s) de protecție. Sub `MIN_RADIUS` (9) moare; de la raza de start (20) suportă 3 atingeri, a 4-a omoară (20 → 16 → 13 → 10 → moare). Mâncatul îl face să crească la loc. Victoria: masa jucătorului depășește suma razelor inamicilor rămași (neverificată în practică).

## Probleme cunoscute

Rezolvate (pe ramura `dezvoltare`):
- Antetul site-ului acoperea jocul: acum jocul e un strat pe tot ecranul (`fixed inset-0 z-[60]`, deasupra antetului `z-50`) și blochează derularea paginii din spate.
- Dreptunghiul alb sub „Play Now": butonul are acum `overflow-hidden`.
- Telefon: jocul folosește evenimente `pointer` (mouse și atingere), canvasul are `touch-none`. Testat cu atingere simulată: deget dreapta/stânga/jos mută lumea în direcția corectă, fără deget jucătorul stă pe loc.
- Start nesigur: inamicii nu mai apar la mai puțin de `SAFE_SPAWN_DISTANCE` (600) de jucător, iar jucătorul nu mai pleacă singur spre colțul din stânga sus înainte de prima mișcare.

Rămase:
1. **Sunt doar 3 niveluri** (planul: ~10, cu un șef la final). Finalul de acum e „ai terminat toate nivelurile disponibile".
2. **Pozele inamicilor: doar 100 sunt unice** (`enemy_101.jpg` ... `enemy_150.jpg` sunt copii ale pozelor 1-50) și sunt poze reale de animale de uscat, de pe Flickr (prin `loremflickr`, cu numele fotografului scris pe poză). **Licențele nu au fost verificate**: înainte de publicare largă sau monetizare, de verificat sau de înlocuit pozele. Etichetele pe fel din `animals.ts` au fost puse uitându-ne la poze și pot avea mici greșeli.
3. Mărimea animalelor în modul liber e încă aleatorie, independentă de poză (un șoarece poate ieși mare). În niveluri mărimea depinde de fel.
4. **Dificultatea nu e reglată de oameni:** după mecanismul cu atingeri (mai sus), un robot care merge intenționat spre inamici a murit în 6-12 secunde, cu 3-5 atingeri suportate. Valorile `HIT_SHRINK`, `MIN_RADIUS`, `HIT_COOLDOWN_MS`, `SAFE_SPAWN_DISTANCE` trebuie ajustate după ce joacă oameni.
5. Clasamentul și „Google Login" sunt simulate; „Buy Titan Respawn" nu face nicio plată reală.
6. În cod apare o adresă de e-mail personală (login simulat, `handleGoogleLogin`).
7. Bucla jocului este recreată la fiecare schimbare de scor (`useEffect` cu `[gameState, score]`), ceea ce risipește performanță.
8. Pe telefon nu s-a testat pe un aparat real, doar în browser cu atingere simulată. Pagina nu e gândită pentru ecran lat pe orizontală.
9. `npm run lint` raportează 2 erori și 3 avertismente vechi în `page.tsx` (setState în efect, dependențe lipsă); nu au legătură cu modificările de mai sus.

## Reguli de lucru

- Un singur lucru pe rând. După fiecare pas, Claude arată rezultatul și spune care e pasul următor.
- Lucrăm pe ramura `dezvoltare`. Ramura `master` rămâne intactă (se publică automat pe reverb.ro prin Vercel); nu se unește nimic în `master` fără acordul lui Alin.
- Înainte de fiecare modificare mare: commit.
- Claude spune cinstit ce nu merge sau ce nu poate face; nu inventează rezultate.
- Fără conturi, parole, date de plată sau chei în cod sau în chat. Dacă e nevoie de ele (Google Play, semnare, Stripe), Claude spune ce trebuie să facă Alin.
- „go" de la Alin = aprobă și continuă, fără explicații lungi.
- Înainte de a scrie cod Next.js, se respectă `AGENTS.md` (versiunea de Next.js este nouă; documentația e în `node_modules/next/dist/docs/`).
- Regulile SEO din `README.md` se aplică și aici: fără em-dash în textele vizibile, pagină nouă = adăugată în `lib/routes.ts`.
- Jocul se testează într-un browser real înainte de a spune că „merge".
