// Portofoliul Reverb Digital. O singură listă, folosită de pagina de pornire (secțiunea #proiecte),
// de portofoliu (/portofoliu, /en/portfolio) și de Pachete (cele trei poze).
//
// Regula textelor (11 nov 2026): fiecare afirmație are o sursă — pagina proiectului sau notele lui.
// Fără cifre de trafic, fără tehnologii presupuse din numele domeniului.
//
// Stările (Alin, 14 nov 2026): doar două — „În administrare” și „Proiect în desfășurare”. Nu se folosesc
// „demo”, „concept”, „producție live”, „în lucru”. Starea unui proiect se schimbă ÎNTR-UN SINGUR LOC: lista
// IN_PROGRESS de mai jos (aceeași pentru română și engleză). Cifra de pe prima pagină se recalculează singură.
// Un proiect stă fie aici, fie în galeria de concepte (app/showcase/page.tsx), niciodată în amândouă.
export type ProjectState = "managed" | "in_progress";

export type LiveProject = {
  name: string;
  /** Felul proiectului, în unul-două cuvinte (rândul din portofoliu). */
  kind?: string;
  category: string;
  tech: string;
  /** Firma de găzduire („Hostinger”, „Vercel”), nu adresa. */
  host: string;
  desc: string;
  href: string;
  state: ProjectState;
  /** Eticheta stării, în limba listei (din STATUS_LABEL). */
  status: string;
  badge: string;
};

type Entry = Omit<LiveProject, "state" | "status">;
type Lang = "ro" | "en";

/** Proiectele aflate în desfășurare. Când unul e gata, iese de aici și devine „În administrare”. */
const IN_PROGRESS = new Set<string>([
  "DON Barbershop",
  "The Digital Greenhouse",
  "Oglinda",
  "Flooare.ro",
  "Artisan Café",
  "Arhitectura Vie a Numerelor",
]);

export const STATUS_LABEL: Record<Lang, Record<ProjectState, string>> = {
  ro: { managed: "În administrare", in_progress: "Proiect în desfășurare" },
  en: { managed: "Managed", in_progress: "Project in progress" },
};

const withState = (lang: Lang, list: Entry[]): LiveProject[] =>
  list.map((p) => {
    const state: ProjectState = IN_PROGRESS.has(p.name) ? "in_progress" : "managed";
    return { ...p, state, status: STATUS_LABEL[lang][state] };
  });

/** Câte proiecte sunt în administrare. Cifra de pe prima pagină se ia de aici, nu se scrie de mână. */
export function inProduction(list: LiveProject[]): number {
  return list.filter((p) => p.state === "managed").length;
}

export const liveProjectsRo: LiveProject[] = withState("ro", [
  {
    name: "Bricolando.ro",
    kind: "Magazin online",
    category: "Magazin online de scule și utilaje",
    tech: "WooCommerce + module proprii",
    host: "Hostinger",
    desc: "Magazin online de scule și utilaje, cu prețuri urmărite automat față de concurență, facturare automată și comenzi duse singure până la curier.",
    href: "https://bricolando.ro",
    badge: "eCommerce"
  },
  {
    name: "RaftPlin.ro",
    kind: "Magazin online",
    category: "Magazin online pentru casă și cadouri",
    tech: "WooCommerce + temă proprie",
    host: "Hostinger",
    desc: "Magazin online pentru casă, grădină și copii, cu ghid de cadouri și card cadou.",
    href: "https://raftplin.ro",
    badge: "eCommerce"
  },
  {
    name: "Kalki.work",
    kind: "Software",
    category: "Software pentru magazine și birou",
    tech: "Pagini statice + funcții Cloudflare",
    host: "Cloudflare Pages",
    desc: "Software: Argot, căutare pentru magazine online, și Kalki Voice, dictare vocală.",
    href: "https://kalki.work",
    badge: "Software AI"
  },
  {
    name: "Kalki.nexus",
    kind: "Site editorial",
    category: "Cultură și spiritualitate",
    tech: "Site editorial, română și engleză",
    host: "Cloudflare",
    desc: "Un loc de cultură și spiritualitate, în negru și auriu, gândit fără reclame și fără grabă.",
    href: "https://kalki.nexus",
    badge: "Platformă"
  },
  {
    name: "Numerarium.app",
    kind: "Aplicație",
    category: "Aplicație de numerologie",
    tech: "JavaScript simplu, motor propriu de calcul",
    host: "Cloudflare",
    desc: "Calculator de numerologie cu motor propriu și texte pe înțelesul tuturor.",
    href: "https://numerarium.app",
    badge: "Aplicație"
  },
  {
    name: "Bythefire.app",
    kind: "Ghid",
    category: "Ghid pentru clipele grele",
    tech: "HTML, CSS și JavaScript simple",
    host: "Cloudflare",
    desc: "„Lângă foc”: un ghid cu texte originale pentru clipele grele, cu întrebări și câte o practică scurtă.",
    href: "https://bythefire.app",
    badge: "Aplicație"
  },
  {
    name: "Elumia.app",
    kind: "Ghid interactiv",
    category: "Ghid interactiv",
    tech: "Aplicație web",
    host: "Cloudflare",
    desc: "Ghid interactiv despre energia vitală și planul nevăzut.",
    href: "https://elumia.app",
    badge: "Aplicație"
  },
  {
    name: "Immortallight.app",
    kind: "Site de carte",
    category: "Site de carte",
    tech: "Site de prezentare, engleză și română",
    host: "GitHub Pages",
    desc: "Site-ul cărții „Lumina Nemuritoare”: 55 de parabole din tradițiile lumii.",
    href: "https://immortallight.app",
    badge: "Platformă"
  },
  {
    name: "Pentora.app",
    kind: "Aplicație",
    category: "Oracol de 52 de cărți",
    tech: "O singură pagină web",
    host: "GitHub Pages",
    desc: "„Oracolul celor Cinci Cercuri”: 52 de cărți de înțelepciune, de tras una câte una.",
    href: "https://pentora.app",
    badge: "Aplicație"
  },
  {
    name: "YourFinestForm.com",
    kind: "Site de carte",
    category: "Site de carte",
    tech: "Vite + React, română și engleză",
    host: "GitHub Pages",
    desc: "Site-ul cărții „Armonia”: 21 de scrisori scurte, fiecare cu o practică și un aforism.",
    href: "https://yourfinestform.com",
    badge: "Platformă"
  },
  {
    name: "Salariuldupataxe.ro",
    kind: "Calculator",
    category: "Calculator de salariu",
    tech: "Calculator web",
    host: "Vercel",
    desc: "Scrii salariul brut și vezi pe loc pensia, sănătatea, impozitul și salariul net pentru 2026.",
    href: "https://salariuldupataxe.ro",
    badge: "Utilitar"
  },
  {
    name: "Arhitecturazilei.ro",
    kind: "Aplicație",
    category: "Rutină zilnică",
    tech: "Aplicație web",
    host: "GitHub Pages",
    desc: "O rutină zilnică împărțită în cinci ferestre, fundamentată pe neuroștiință.",
    href: "https://arhitecturazilei.ro",
    badge: "Aplicație"
  },
  {
    name: "Candcinevabea.life",
    kind: "Ghid",
    category: "Ghid de sprijin",
    tech: "Ghid web, română și engleză",
    host: "GitHub Pages",
    desc: "Ghid despre rolurile din familia în care cineva bea, scris cu un ton cald.",
    href: "https://candcinevabea.life",
    badge: "Platformă"
  },
  {
    name: "Millo.asia",
    kind: "Jocuri",
    category: "Jocuri pentru copii",
    tech: "Pagini statice în 9 limbi",
    host: "Hostinger",
    desc: "Casa jocurilor pentru copii: fiecare joc are adresa lui, iar site-ul e în 9 limbi.",
    href: "https://millo.asia",
    badge: "Platformă"
  },
  {
    name: "DON Barbershop",
    kind: "Site",
    category: "Site pentru frizerie",
    tech: "Film derulat odată cu pagina",
    host: "Cloudflare Pages",
    desc: "Site pentru o frizerie cu cafenea: atmosferă de seară și un film care înaintează odată cu derularea paginii.",
    href: "https://don-barbershop.pages.dev",
    badge: "Platformă"
  },
  {
    // Sursa textelor: pagina și codul proiectului (13 nov 2026).
    name: "The Digital Greenhouse",
    kind: "Site",
    category: "Site de studio digital",
    tech: "Cursor propriu și animații la derulare",
    host: "Vercel",
    desc: "Site minimalist, cu teme botanice: mult aer între secțiuni și un cursor rotund care inversează culorile de sub el.",
    href: "https://the-digital-greenhouse.vercel.app/",
    badge: "Platformă"
  },
  {
    // Sursa: public/aura (titlul paginii, fișierele). Domeniul oglinda.eu nu răspunde încă (lipsesc două înregistrări DNS);
    // când răspunde, `href` devine https://oglinda.eu și numele „Oglinda.eu” (scripts/check-seo.mjs avertizează).
    name: "Oglinda",
    kind: "Aplicație web",
    category: "Aplicație web de reflecție",
    tech: "HTML, CSS și JavaScript simple",
    host: "Vercel",
    desc: "„Refugiu interior”: aplicație web de reflecție și conștientizare.",
    href: "https://reverb.ro/aura/index.html",
    badge: "Aplicație"
  },
  {
    // Sursa: titlul paginii flooare.ro (14 nov 2026).
    name: "Flooare.ro",
    kind: "Portal",
    category: "Portalul Arhetipurilor",
    tech: "Aplicație web",
    host: "GitHub Pages",
    desc: "Portalul Arhetipurilor și Armonia Sferelor: arhetipuri, sunet și geometrie sacră.",
    href: "https://www.flooare.ro/",
    badge: "Platformă"
  },
  {
    // Sursa: pagina artisan-cafe.vercel.app (14 nov 2026).
    name: "Artisan Café",
    kind: "Site",
    category: "Site pentru cafenea",
    tech: "Site de prezentare în engleză",
    host: "Vercel",
    desc: "Site de prezentare pentru o cafenea, în engleză.",
    href: "https://artisan-cafe.vercel.app/",
    badge: "Platformă"
  },
  {
    // Sursa: descrierea paginii arhitectura-numerelor.vercel.app (14 nov 2026).
    name: "Arhitectura Vie a Numerelor",
    kind: "Aplicație",
    category: "Lectură numerologică",
    tech: "Aplicație web",
    host: "Vercel",
    desc: "Lectură numerologică după manualul cu același nume: pitagoric, caldeean, cabalistic și vedic.",
    href: "https://arhitectura-numerelor.vercel.app/",
    badge: "Aplicație"
  },
]);

export const liveProjectsEn: LiveProject[] = withState("en", [
  {
    name: "Bricolando.ro",
    kind: "Online store",
    category: "Online store for tools and equipment",
    tech: "WooCommerce + our own modules",
    host: "Hostinger",
    desc: "Online store for tools and equipment, with prices tracked automatically against competitors, automatic invoicing and orders carried through to the courier.",
    href: "https://bricolando.ro",
    badge: "eCommerce"
  },
  {
    name: "RaftPlin.ro",
    kind: "Online store",
    category: "Online store for home and gifts",
    tech: "WooCommerce + our own theme",
    host: "Hostinger",
    desc: "Online store for home, garden and children, with a gift guide and gift cards.",
    href: "https://raftplin.ro",
    badge: "eCommerce"
  },
  {
    name: "Kalki.work",
    kind: "Software",
    category: "Software for stores and the office",
    tech: "Static pages + Cloudflare functions",
    host: "Cloudflare Pages",
    desc: "Software: Argot, search for online stores, and Kalki Voice, voice dictation.",
    href: "https://kalki.work",
    badge: "AI Software"
  },
  {
    name: "Kalki.nexus",
    kind: "Editorial site",
    category: "Culture and spirituality",
    tech: "Editorial site, Romanian and English",
    host: "Cloudflare",
    desc: "A place for culture and spirituality, in black and gold, built without ads and without hurry.",
    href: "https://kalki.nexus",
    badge: "Publishing"
  },
  {
    name: "Numerarium.app",
    kind: "App",
    category: "Numerology application",
    tech: "Plain JavaScript, our own calculation engine",
    host: "Cloudflare",
    desc: "Numerology calculator with its own engine and texts anyone can understand.",
    href: "https://numerarium.app",
    badge: "Application"
  },
  {
    name: "Bythefire.app",
    kind: "Guide",
    category: "A guide for hard moments",
    tech: "Plain HTML, CSS and JavaScript",
    host: "Cloudflare",
    desc: "“By the Fire”: a guide with original texts for hard moments, with questions and a short practice for each.",
    href: "https://bythefire.app",
    badge: "Application"
  },
  {
    name: "Elumia.app",
    kind: "Interactive guide",
    category: "Interactive guide",
    tech: "Web application",
    host: "Cloudflare",
    desc: "Interactive guide about vital energy and the unseen plane.",
    href: "https://elumia.app",
    badge: "Application"
  },
  {
    name: "Immortallight.app",
    kind: "Book site",
    category: "Book site",
    tech: "Presentation site, English and Romanian",
    host: "GitHub Pages",
    desc: "The site of the book “The Immortal Light”: 55 parables from the traditions of the world.",
    href: "https://immortallight.app",
    badge: "Publishing"
  },
  {
    name: "Pentora.app",
    kind: "App",
    category: "A 52-card oracle",
    tech: "A single web page",
    host: "GitHub Pages",
    desc: "“The Oracle of the Five Circles”: 52 wisdom cards, drawn one at a time.",
    href: "https://pentora.app",
    badge: "Application"
  },
  {
    name: "YourFinestForm.com",
    kind: "Book site",
    category: "Book site",
    tech: "Vite + React, Romanian and English",
    host: "GitHub Pages",
    desc: "The site of the book “Armonia”: 21 short letters, each with a practice and an aphorism.",
    href: "https://yourfinestform.com",
    badge: "Publishing"
  },
  {
    name: "Salariuldupataxe.ro",
    kind: "Calculator",
    category: "Salary calculator",
    tech: "Web calculator",
    host: "Vercel",
    desc: "Type the gross salary and see at once the pension, health, tax and net salary for 2026 in Romania.",
    href: "https://salariuldupataxe.ro",
    badge: "Utility"
  },
  {
    name: "Arhitecturazilei.ro",
    kind: "App",
    category: "Daily routine",
    tech: "Web application",
    host: "GitHub Pages",
    desc: "A daily routine split into five windows, grounded in neuroscience.",
    href: "https://arhitecturazilei.ro",
    badge: "Application"
  },
  {
    name: "Candcinevabea.life",
    kind: "Guide",
    category: "Support guide",
    tech: "Web guide, Romanian and English",
    host: "GitHub Pages",
    desc: "A guide about the roles in a family where someone drinks, written in a warm tone.",
    href: "https://candcinevabea.life",
    badge: "Portal"
  },
  {
    name: "Millo.asia",
    kind: "Games",
    category: "Games for children",
    tech: "Static pages in 9 languages",
    host: "Hostinger",
    desc: "The home of children's games: each game has its own address, and the site is in 9 languages.",
    href: "https://millo.asia",
    badge: "Portal"
  },
  {
    name: "DON Barbershop",
    kind: "Website",
    category: "Website for a barbershop",
    tech: "A film that advances as you scroll",
    host: "Cloudflare Pages",
    desc: "A site for a barbershop with a coffee bar: evening atmosphere and a film that advances as the page scrolls.",
    href: "https://don-barbershop.pages.dev",
    badge: "Portal"
  },
  {
    name: "The Digital Greenhouse",
    kind: "Website",
    category: "Website for a digital studio",
    tech: "Custom cursor and scroll animations",
    host: "Vercel",
    desc: "A minimalist site with botanical themes: plenty of air between sections and a round cursor that inverts the colours beneath it.",
    href: "https://the-digital-greenhouse.vercel.app/",
    badge: "Portal"
  },
  {
    name: "Oglinda",
    kind: "Web app",
    category: "Web app for reflection",
    tech: "Plain HTML, CSS and JavaScript",
    host: "Vercel",
    desc: "“Inner refuge”: a web app for reflection and awareness, in Romanian.",
    href: "https://reverb.ro/aura/index.html",
    badge: "Application"
  },
  {
    name: "Flooare.ro",
    kind: "Portal",
    category: "The Archetype Portal",
    tech: "Web application",
    host: "GitHub Pages",
    desc: "The Archetype Portal and the Harmony of the Spheres: archetypes, sound and sacred geometry.",
    href: "https://www.flooare.ro/",
    badge: "Portal"
  },
  {
    name: "Artisan Café",
    kind: "Website",
    category: "Website for a café",
    tech: "Presentation site in English",
    host: "Vercel",
    desc: "A presentation site for a café, in English.",
    href: "https://artisan-cafe.vercel.app/",
    badge: "Portal"
  },
  {
    name: "Arhitectura Vie a Numerelor",
    kind: "App",
    category: "Numerology reading",
    tech: "Web application",
    host: "Vercel",
    desc: "A numerology reading based on the handbook of the same name: Pythagorean, Chaldean, Kabbalistic and Vedic. In Romanian.",
    href: "https://arhitectura-numerelor.vercel.app/",
    badge: "Application"
  },
]);
