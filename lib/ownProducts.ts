/**
 * Software propriu (secțiunea „Software propriu.” de pe prima pagină, RO și EN). Alin, 15 nov 2026: aplicațiile noastre
 * nu erau evidențiate.
 *
 * Regula (ca în lib/liveProjects.ts): fiecare afirmație are o sursă, scrisă lângă ea. Când o afirmație nu mai e adevărată
 * (produsul nu se mai vinde, un modul iese dintr-un magazin), se schimbă sau se scoate aici, nu pe pagină.
 * Numele (Argot, Kalki Voice, Kalki Work) nu se traduc: titlurile au data-no-translate pe pagină.
 */
export type OwnProduct = {
  /** Numele, netradus. */
  name: string;
  /** Eticheta mono de deasupra titlului. */
  label: { ro: string; en: string };
  desc: { ro: string; en: string };
  /** Rândul mic de sub descriere (unde rulează), dacă are. */
  where?: { ro: string; en: string };
  href?: string;
  /** Titlul e un nume propriu (nu se traduce). */
  isName: boolean;
};

export const OWN_PRODUCTS: OwnProduct[] = [
  {
    // Sursa: kalki.work (content/continut.mjs: „Argot, căutare inteligentă pentru WooCommerce”; „Argot găsește produsul
    // chiar când clientul scrie «pickamer», pe cataloage de zeci de mii de produse”). Citit 15 nov 2026.
    name: "Argot",
    label: { ro: "/ Căutare", en: "/ Search" },
    desc: {
      ro: "Căutare pentru magazine WooCommerce. Găsește produsul și când clientul scrie „pickamer”.",
      en: "Search for WooCommerce stores. Finds the product even when the customer types “jackhammer” for a demolition hammer.",
    },
    href: "https://kalki.work",
    isName: true,
  },
  {
    // Sursa: C:\Users\alind\kalki.work\README.md (Kalki Voice 1.2: Ctrl + Win → vorbești → textul apare la cursor), kalki.work.
    name: "Kalki Voice",
    label: { ro: "/ Dictare", en: "/ Dictation" },
    desc: {
      ro: "Dictare vocală în Windows: vorbești, textul apare la cursor.",
      en: "Voice dictation for Windows: you speak, the text appears at the cursor.",
    },
    href: "https://kalki.work",
    isName: true,
  },
  {
    // Sursa: auditul Bricolando / Raft Plin din 15 nov 2026 (wp plugin list pe ambele): bricolando-newsletter 1.11.0 și
    // raftplin-newsletter 1.2.0 active; panoul 1.17.5 pe ambele; facturare FGO și AWB (DPD, Dragon Star, FedEx) pe ambele.
    name: "Module pentru magazine",
    label: { ro: "/ WooCommerce", en: "/ WooCommerce" },
    desc: {
      ro: "Newsletter, panou de comenzi instalabil, facturi și AWB automate.",
      en: "Newsletter, installable order dashboard, automatic invoices and shipping labels.",
    },
    where: { ro: "Rulează în Bricolando.ro și RaftPlin.ro.", en: "Running on Bricolando.ro and RaftPlin.ro." },
    isName: false,
  },
];

/** Numele cardului de module, pe engleză (titlul e tradus, nu e nume propriu). */
export const MODULES_TITLE_EN = "Store modules";

/** Lucrările arătate în „Portofoliu.” pe prima pagină (6 alese; restul pe /portofoliu). Bricolando, RaftPlin și Kalki.nexus
 *  sunt deja cu poză sub primul ecran, Kalki.work e în „Software propriu.”, deci nu se repetă aici.
 *  Ordinea: întâi site-urile de firmă (doi cititori fără context, 15 nov 2026: „vreau să văd site-uri făcute pentru firme
 *  ca a mea”, nu calculatoare și aplicații), apoi uneltele și aplicațiile. */
export const HOME_PORTFOLIO = [
  "DON Barbershop",
  "Artisan Café",
  "The Digital Greenhouse",
  "Salariuldupataxe.ro",
  "Millo.asia",
  "Numerarium.app",
];
