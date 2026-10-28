@AGENTS.md

Salut Claude, eu sunt Antigravity. Pentru o coordonare perfectă pe proiectele lui Alin, te rog să citești mereu la pornire fișierul `AI_SYNC.md` din rădăcina proiectului. Acolo îți voi lăsa eu și Revi notele tehnice și stadiul proiectului. Spor la strategii!

---

# Abyss.io în reverb.ro: ghid de lucru

Alin (proprietarul) nu este programator. Toate explicațiile către el se dau în română, simplu, iar munca tehnică o face Claude.

## Ce este jocul

**Abyss.io** (cod intern `fish-io`, „V4.0 Global Leaderboard Edition") este un joc în browser de tip „mănâncă și crești" (ca Agar.io): controlezi un pește cu mouse-ul, mănânci puncte verzi și inamici mai mici, fugi de cei mai mari. Ecrane: meniu cu 4 culori (skin), joc, „YOU DIED" (cu buton de demo „Buy Titan Respawn"), „DOMINARE" (victorie), clasament.

**Nu este un proiect separat.** Este o pagină din site-ul reverb.ro, în secțiunea Showcase: `https://reverb.ro/showcase/fish-io`. Repository-ul `abyss.io` nu există; tot codul e în `reverb2`.

APK-ul `fish_io_game-v1_0_0.apk` din Google Drive (aprilie 2026) are alt nume și în acest repository nu există nimic legat de Android (fără Capacitor, fără folder `android`). Nu s-a verificat că este același joc.

## Tehnologie

- Joc: HTML5 Canvas 2D, desenat dintr-un singur fișier React, `app/showcase/fish-io/page.tsx` (783 de linii). Sunet generat cu Web Audio (oscilatoare, fără fișiere audio).
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
| `public/abyss-assets/` | imaginile jocului: 6 poze pentru jucător (`gaina, pisica, caine, delfin, rechin, trex`) și 150 de poze pentru inamici în `enemies/enemy_1.jpg ... enemy_150.jpg` (~6 MB) |
| `scripts/download_enemies.js` / `.py` | scripturile care au descărcat pozele inamicilor |
| `app/showcase/page.tsx` | cardul „Abyss.io (Game Engine)" din lista Showcase |
| `lib/routes.ts` | lista paginilor pentru sitemap (conține `fish-io`) |

Restul repository-ului (marketing, blog, alte showcase-uri, NeuroLumina etc.) este site-ul reverb.ro. Detalii în `README.md`, `MEMORY.md` și `AI_SYNC.md`.

## Constante importante ale jocului (în `page.tsx`)

`WORLD_SIZE 3000`, `INITIAL_RADIUS 20`, `SPEED_FACTOR 4`, `ENEMY_COUNT 30`, `FOOD_COUNT 400`. Victoria: masa jucătorului depășește suma razelor inamicilor rămași (neverificată în practică).

## Probleme cunoscute (constatate la rulare, nerezolvate)

1. **Pare prea greu la început:** inamicii apar la întâmplare, chiar și lângă jucător. În teste automate cu un robot simplu (care nu ocolește inamicii), jucătorul a murit în 0-9 secunde în 13 din 15 încercări, o dată în 0,2 s chiar stând pe loc. Un om care ocolește ar rezista mai mult; trebuie testat cu oameni.
2. **Antetul site-ului acoperă jocul:** capsula albă din antet stă peste butonul „Back to Matrix" și peste „Google Login".
3. **Dreptunghi alb sub „Play Now":** animația butonului nu este tăiată și se vede mereu sub buton.
4. **Nu merge pe telefon:** jocul citește doar mișcarea mouse-ului, nu atingerea ecranului.
5. Clasamentul și „Google Login" sunt simulate; „Buy Titan Respawn" nu face nicio plată reală.
6. În cod apare o adresă de e-mail personală (login simulat, `handleGoogleLogin`).
7. Bucla jocului este recreată la fiecare schimbare de scor (`useEffect` cu `[gameState, score]`), ceea ce risipește performanță.

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
