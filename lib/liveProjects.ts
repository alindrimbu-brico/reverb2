// Proiectele realizate de Reverb, aflate online. O singură listă, folosită de pagina de pornire
// (secțiunea #proiecte) și de portofoliu (/portofoliu, /en/portfolio).
//
// Regula textelor (11 nov 2026): fiecare afirmație are o sursă — pagina live a proiectului sau
// notele proiectului. Fără cifre de trafic, fără tehnologii presupuse din numele domeniului.
// `journey` (de unde a pornit) se completează doar unde originea e scrisă undeva; altfel lipsește.
export type LiveProject = {
  name: string;
  category: string;
  tech: string;
  host: string;
  desc: string;
  href: string;
  status: string;
  badge: string;
  /** De unde a pornit și ce s-a construit. */
  journey?: string;
  /** Ce există și funcționează azi. */
  result?: string;
};

export const liveProjectsRo: LiveProject[] = [
  {
    name: "Bricolando.ro",
    category: "Magazin online de scule și utilaje",
    tech: "WooCommerce + module proprii",
    host: "Hostinger",
    desc: "Magazin online de scule și utilaje, cu prețuri urmărite automat față de concurență, facturare automată și comenzi duse singure până la curier.",
    journey: "A pornit ca magazin de scule; peste el am construit module proprii pentru prețuri, comenzi, facturi și curieri.",
    result: "Vinde cu plată cu cardul, ramburs, ordin de plată sau rate și are o aplicație care se instalează dintr-un buton.",
    href: "https://bricolando.ro",
    status: "PRODUCȚIE LIVE",
    badge: "eCommerce"
  },
  {
    name: "RaftPlin.ro",
    category: "Magazin online pentru casă și cadouri",
    tech: "WooCommerce + temă proprie",
    host: "Hostinger",
    desc: "Al doilea magazin din familie: lucruri utile pentru casă, grădină și copii, cu un ghid care te ajută să alegi un cadou.",
    journey: "Hotărât pe 28 octombrie 2026 ca al doilea magazin, a fost deschis pe 3 noiembrie, cu temă proprie.",
    result: "Are 12 raioane, ghid de cadouri, card cadou și plată cu cardul, ramburs sau rate.",
    href: "https://raftplin.ro",
    status: "PRODUCȚIE LIVE",
    badge: "eCommerce"
  },
  {
    name: "Kalki.work",
    category: "Software pentru magazine și birou",
    tech: "Pagini statice + funcții Cloudflare",
    host: "Cloudflare Pages",
    desc: "Casa uneltelor noastre software: Argot, căutarea pentru magazine online, și Kalki Voice, dictarea vocală.",
    journey: "A pornit de la două unelte făcute întâi pentru noi: dictarea vocală Kalki Voice și căutarea Argot.",
    result: "Site-ul e live din 21 octombrie 2026, în română și engleză; Argot se poate descărca și cumpăra, Kalki Voice urmează.",
    href: "https://kalki.work",
    status: "PRODUCȚIE LIVE",
    badge: "Software AI"
  },
  {
    name: "Kalki.nexus",
    category: "Cultură și spiritualitate",
    tech: "Site editorial, română și engleză",
    host: "Cloudflare",
    desc: "Un loc de cultură și spiritualitate, în negru și auriu, gândit fără reclame și fără grabă.",
    journey: "A fost gândit ca un loc liniștit pentru cărți și muzică, cu flacăra ca semn.",
    result: "Live din 21 octombrie 2026: cinci cărți, zece piese muzicale și un cronometru de liniște.",
    href: "https://kalki.nexus",
    status: "PRODUCȚIE LIVE",
    badge: "Platformă"
  },
  {
    name: "Numerarium.app",
    category: "Aplicație de numerologie",
    tech: "JavaScript simplu, motor propriu de calcul",
    host: "Cloudflare",
    desc: "Calculator de numerologie cu motor propriu și texte pe înțelesul tuturor.",
    journey: "A pornit ca un calculator de numerologie; în toamna lui 2026 a primit texte pe înțelesul tuturor și plată online.",
    result: "Dă gratuit o analiză de bază, iar cu plată raportul complet și compatibilitatea, în română și engleză; se instalează pe telefon.",
    href: "https://numerarium.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Bythefire.app",
    category: "Ghid pentru clipele grele",
    tech: "HTML, CSS și JavaScript simple",
    host: "Cloudflare",
    desc: "„Lângă foc”: un ghid cu texte originale pentru clipele grele, cu întrebări și câte o practică scurtă.",
    journey: "A pornit în septembrie 2026 ca „Lângă foc”, scris în română și engleză.",
    result: "Are 36 de momente cu text, întrebări și o practică scurtă; ghidul e gratuit.",
    href: "https://bythefire.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Elumia.app",
    category: "Ghid interactiv",
    tech: "Aplicație web",
    host: "Cloudflare",
    desc: "Ghid interactiv despre energia vitală și planul nevăzut.",
    result: "Are un joc de 21 de întrebări și exerciții scurte pentru fiecare zi.",
    href: "https://elumia.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Immortallight.app",
    category: "Site de carte",
    tech: "Site de prezentare, engleză și română",
    host: "GitHub Pages",
    desc: "Site-ul cărții „Lumina Nemuritoare”: 55 de parabole din tradițiile lumii.",
    journey: "A pornit de la cartea „Lumina Nemuritoare” a lui Alin Dragoș, dusă pe un site și într-o aplicație de telefon.",
    result: "Prezintă cartea în engleză și română și ediția pentru profesori: 55 de parabole din 13 tradiții.",
    href: "https://immortallight.app",
    status: "PRODUCȚIE LIVE",
    badge: "Platformă"
  },
  {
    name: "Pentora.app",
    category: "Oracol de 52 de cărți",
    tech: "O singură pagină web",
    host: "GitHub Pages",
    desc: "„Oracolul celor Cinci Cercuri”: 52 de cărți de înțelepciune, de tras una câte una.",
    journey: "A pornit ca un set de 52 de cărți de înțelepciune, apoi a fost împachetat și ca aplicație pentru Android.",
    result: "Poți trage o carte sau trei, primești cartea zilei și poți răsfoi toate cele 52.",
    href: "https://pentora.app",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "YourFinestForm.com",
    category: "Site de carte",
    tech: "Vite + React, română și engleză",
    host: "GitHub Pages",
    desc: "Site-ul cărții „Armonia”: 21 de scrisori scurte, fiecare cu o practică și un aforism.",
    journey: "A pornit de la cartea „Armonia” a lui Alin Dragoș.",
    result: "E un site în română și engleză, cu pagină pentru fiecare scrisoare și „practica zilei”.",
    href: "https://yourfinestform.com",
    status: "PRODUCȚIE LIVE",
    badge: "Platformă"
  },
  {
    name: "Salariuldupataxe.ro",
    category: "Calculator de salariu",
    tech: "Calculator web",
    host: "Vercel",
    desc: "Scrii salariul brut și vezi pe loc pensia, sănătatea, impozitul și salariul net pentru 2026.",
    result: "Calculează pe loc, orientativ: fără deduceri personale și fără scutirile pe domenii.",
    href: "https://salariuldupataxe.ro",
    status: "PRODUCȚIE LIVE",
    badge: "Utilitar"
  },
  {
    name: "Arhitecturazilei.ro",
    category: "Rutină zilnică",
    tech: "Aplicație web",
    host: "GitHub Pages",
    desc: "O rutină zilnică împărțită în cinci ferestre, fundamentată pe neuroștiință.",
    result: "Are respirație ghidată, jurnal, calculator de somn și test de cronotip.",
    href: "https://arhitecturazilei.ro",
    status: "PRODUCȚIE LIVE",
    badge: "Aplicație"
  },
  {
    name: "Candcinevabea.life",
    category: "Ghid de sprijin",
    tech: "Ghid web, română și engleză",
    host: "GitHub Pages",
    desc: "Ghid despre rolurile din familia în care cineva bea, scris cu un ton cald.",
    result: "Are un chestionar și resurse de ajutor, în română și engleză.",
    href: "https://candcinevabea.life",
    status: "PRODUCȚIE LIVE",
    badge: "Platformă"
  },
  {
    name: "Millo.asia",
    category: "Jocuri pentru copii",
    tech: "Pagini statice în 9 limbi",
    host: "Hostinger",
    desc: "Casa jocurilor pentru copii: fiecare joc are adresa lui, iar site-ul e în 9 limbi.",
    journey: "Pe 25 octombrie 2026 a devenit casa jocurilor pentru copii; primul joc a fost „Peștișorul de Aur”.",
    result: "„Peștișorul de Aur” se poate juca gratuit, iar alte două jocuri sunt anunțate.",
    href: "https://millo.asia",
    status: "PRODUCȚIE LIVE",
    badge: "Platformă"
  },
  {
    name: "DON Barbershop",
    category: "Site-concept pentru frizerie",
    tech: "Film derulat odată cu pagina",
    host: "Cloudflare Pages",
    desc: "Site pentru o frizerie cu cafenea: atmosferă de seară și un film care înaintează odată cu derularea paginii.",
    journey: "A pornit în septembrie 2026 ca site pentru frizeria-cafenea pe care un prieten voia s-o deschidă la Mera, în Vrancea.",
    result: "E un site-concept în română și engleză; frizeria nu este încă deschisă.",
    href: "https://don-barbershop.pages.dev",
    status: "DEMO LIVE",
    badge: "Showcase"
  },
];

export const liveProjectsEn: LiveProject[] = [
  {
    name: "Bricolando.ro",
    category: "Online store for tools and equipment",
    tech: "WooCommerce + our own modules",
    host: "Hostinger",
    desc: "Online store for tools and equipment, with prices tracked automatically against competitors, automatic invoicing and orders carried through to the courier.",
    journey: "It started as a tool store; on top of it we built our own modules for prices, orders, invoices and couriers.",
    result: "It sells by card, cash on delivery, bank transfer or instalments and has an app that installs from one button.",
    href: "https://bricolando.ro",
    status: "LIVE PRODUCTION",
    badge: "eCommerce"
  },
  {
    name: "RaftPlin.ro",
    category: "Online store for home and gifts",
    tech: "WooCommerce + our own theme",
    host: "Hostinger",
    desc: "The second store in the family: useful things for home, garden and children, with a guide that helps you choose a gift.",
    journey: "Decided on 28 October 2026 as the second store, it opened on 3 November with its own theme.",
    result: "It has 12 departments, a gift guide, gift cards and payment by card, cash on delivery or instalments.",
    href: "https://raftplin.ro",
    status: "LIVE PRODUCTION",
    badge: "eCommerce"
  },
  {
    name: "Kalki.work",
    category: "Software for stores and the office",
    tech: "Static pages + Cloudflare functions",
    host: "Cloudflare Pages",
    desc: "Home of our software tools: Argot, search for online stores, and Kalki Voice, voice dictation.",
    journey: "It started from two tools we first built for ourselves: Kalki Voice dictation and Argot search.",
    result: "The site has been live since 21 October 2026, in Romanian and English; Argot can be downloaded and bought, Kalki Voice is next.",
    href: "https://kalki.work",
    status: "LIVE PRODUCTION",
    badge: "AI Software"
  },
  {
    name: "Kalki.nexus",
    category: "Culture and spirituality",
    tech: "Editorial site, Romanian and English",
    host: "Cloudflare",
    desc: "A place for culture and spirituality, in black and gold, built without ads and without hurry.",
    journey: "It was conceived as a quiet place for books and music, with the flame as its sign.",
    result: "Live since 21 October 2026: five books, ten pieces of music and a silence timer.",
    href: "https://kalki.nexus",
    status: "LIVE PRODUCTION",
    badge: "Publishing"
  },
  {
    name: "Numerarium.app",
    category: "Numerology application",
    tech: "Plain JavaScript, our own calculation engine",
    host: "Cloudflare",
    desc: "Numerology calculator with its own engine and texts anyone can understand.",
    journey: "It started as a numerology calculator; in autumn 2026 it received plain-language texts and online payment.",
    result: "It gives a basic reading for free and, paid, the full report and compatibility, in Romanian and English; it installs on the phone.",
    href: "https://numerarium.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Bythefire.app",
    category: "A guide for hard moments",
    tech: "Plain HTML, CSS and JavaScript",
    host: "Cloudflare",
    desc: "“By the Fire”: a guide with original texts for hard moments, with questions and a short practice for each.",
    journey: "It started in September 2026, written in Romanian and English.",
    result: "It has 36 moments with text, questions and a short practice; the guide is free.",
    href: "https://bythefire.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Elumia.app",
    category: "Interactive guide",
    tech: "Web application",
    host: "Cloudflare",
    desc: "Interactive guide about vital energy and the unseen plane.",
    result: "It has a game of 21 questions and short exercises for every day.",
    href: "https://elumia.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Immortallight.app",
    category: "Book site",
    tech: "Presentation site, English and Romanian",
    host: "GitHub Pages",
    desc: "The site of the book “The Immortal Light”: 55 parables from the traditions of the world.",
    journey: "It started from the book “The Immortal Light” by Alin Dragoș, taken to a site and a phone app.",
    result: "It presents the book in English and Romanian and the Teacher's Edition: 55 parables from 13 traditions.",
    href: "https://immortallight.app",
    status: "LIVE PRODUCTION",
    badge: "Publishing"
  },
  {
    name: "Pentora.app",
    category: "A 52-card oracle",
    tech: "A single web page",
    host: "GitHub Pages",
    desc: "“The Oracle of the Five Circles”: 52 wisdom cards, drawn one at a time.",
    journey: "It started as a set of 52 wisdom cards, then was also packaged as an Android app.",
    result: "You can draw one card or three, get the card of the day and browse all 52.",
    href: "https://pentora.app",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "YourFinestForm.com",
    category: "Book site",
    tech: "Vite + React, Romanian and English",
    host: "GitHub Pages",
    desc: "The site of the book “Armonia”: 21 short letters, each with a practice and an aphorism.",
    journey: "It started from the book “Armonia” by Alin Dragoș.",
    result: "It is a site in Romanian and English, with a page for each letter and a “practice of the day”.",
    href: "https://yourfinestform.com",
    status: "LIVE PRODUCTION",
    badge: "Publishing"
  },
  {
    name: "Salariuldupataxe.ro",
    category: "Salary calculator",
    tech: "Web calculator",
    host: "Vercel",
    desc: "Type the gross salary and see at once the pension, health, tax and net salary for 2026 in Romania.",
    result: "It calculates on the spot, as an estimate: without personal deductions and sector exemptions.",
    href: "https://salariuldupataxe.ro",
    status: "LIVE PRODUCTION",
    badge: "Utility"
  },
  {
    name: "Arhitecturazilei.ro",
    category: "Daily routine",
    tech: "Web application",
    host: "GitHub Pages",
    desc: "A daily routine split into five windows, grounded in neuroscience.",
    result: "It has guided breathing, a journal, a sleep calculator and a chronotype test.",
    href: "https://arhitecturazilei.ro",
    status: "LIVE PRODUCTION",
    badge: "Application"
  },
  {
    name: "Candcinevabea.life",
    category: "Support guide",
    tech: "Web guide, Romanian and English",
    host: "GitHub Pages",
    desc: "A guide about the roles in a family where someone drinks, written in a warm tone.",
    result: "It has a questionnaire and help resources, in Romanian and English.",
    href: "https://candcinevabea.life",
    status: "LIVE PRODUCTION",
    badge: "Portal"
  },
  {
    name: "Millo.asia",
    category: "Games for children",
    tech: "Static pages in 9 languages",
    host: "Hostinger",
    desc: "The home of our children's games: each game has its own address, and the site is in 9 languages.",
    journey: "On 25 October 2026 it became the home of the children's games; the first game was “The Golden Fish”.",
    result: "“The Golden Fish” can be played for free, and two more games are announced.",
    href: "https://millo.asia",
    status: "LIVE PRODUCTION",
    badge: "Portal"
  },
  {
    name: "DON Barbershop",
    category: "Concept site for a barbershop",
    tech: "A film that advances as you scroll",
    host: "Cloudflare Pages",
    desc: "A site for a barbershop with a coffee bar: evening atmosphere and a film that advances as the page scrolls.",
    journey: "It started in September 2026 as the site for a barbershop-café a friend wanted to open in Mera, Vrancea.",
    result: "It is a concept site in Romanian and English; the barbershop is not open yet.",
    href: "https://don-barbershop.pages.dev",
    status: "LIVE DEMO",
    badge: "Showcase"
  },
];
