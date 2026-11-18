// Pagina de confidențialitate (RO: app/confidentialitate, EN: app/en/privacy). Alin, 18 nov 2026: „da la pagina de
// confidențialitate”. Textul descrie ce face codul AZI: formularul (app/api/contact: e-mail prin Hostinger, fără bază de
// date), Umami (components/CookieConsent.tsx), chatul AI din paginile demonstrative (app/api/ai → Perplexity), memoria
// browserului (tema, limba). Dacă se schimbă vreuna (bază de date, alt program de măsurare, cookie-uri), se schimbă și aici.
import Reveal from "@/components/Reveal";
import PageBackdrop from "@/components/PageBackdrop";
import { company } from "@/lib/company";

type Section = { title: string; body: (string | string[])[] };
type Content = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: Section[];
  contactTitle: string;
  contactText: string;
  contactCta: string;
  contactHref: string;
};

const ro: Content = {
  eyebrow: "Date personale",
  title: "Confidențialitate.",
  intro:
    "Ce date strânge reverb.ro, de ce, cât le păstrăm și cum ne ceri să le ștergem. Pe scurt: doar ce ne scrii tu și statistici anonime de vizite, fără cookie-uri.",
  updated: "Ultima actualizare: 18 noiembrie 2026",
  sections: [
    {
      title: "Cine răspunde de date",
      body: [
        `Reverb Digital este marca firmei ${company.legalName}, CUI ${company.cui}, ${company.regCom}, cu sediul în Str. Măgura 57 F, ${company.city}, jud. ${company.county}, 620157. Pentru orice întrebare despre datele tale: ${company.email} sau ${company.phoneDisplay}.`,
      ],
    },
    {
      title: "Ce date strângem și de ce",
      body: [
        [
          "Formularul de contact: numele, adresa de e-mail, firma (dacă o scrii), serviciul ales, mesajul și limba paginii. Ajung ca e-mail în căsuța noastră; nu le punem într-o bază de date. Le folosim ca să-ți răspundem și să-ți facem o ofertă, la cererea ta, înaintea unui eventual contract (GDPR, art. 6 alin. (1) lit. b). Numele, e-mailul, serviciul și mesajul sunt necesare ca să-ți putem răspunde; fără ele formularul nu pleacă. După trimitere primești un e-mail de confirmare.",
          "Statistici de vizite, cu Umami: pagina citită, pagina de pe care ai venit, țara și orașul aproximativ, limba, tipul de dispozitiv, dimensiunea ecranului, browserul și sistemul de operare. Umami nu pune cookie-uri și nu ne spune cine ești. Ne ajută să știm ce pagini sunt utile (interes legitim, art. 6 alin. (1) lit. f).",
          "Jurnalele serverului: la fiecare vizită, serverul care găzduiește site-ul notează automat adresa IP, ora și pagina cerută, ca site-ul să funcționeze și să fie apărat de atacuri (interes legitim). Din adresa IP aflăm și țara, ca să-ți arătăm pagina în limba potrivită; țara nu o păstrăm.",
          "Asistentul AI din paginile demonstrative (secțiunea Showcase): ce scrii în acel chat este trimis la Perplexity AI ca să primești un răspuns. Nu scrie acolo date personale.",
          "Alte site-uri deschise din pagină: când deschizi o lucrare din portofoliu, site-ul acela se încarcă în fereastra noastră, iar paginile demonstrative pot încărca imagini și clipuri de pe alte servere (de exemplu Unsplash sau YouTube). Acele servicii au propriile reguli de confidențialitate.",
          "WhatsApp: dacă ne scrii pe WhatsApp, mesajul trece prin serviciul WhatsApp (Meta), după regulile lor.",
        ],
      ],
    },
    {
      title: "Cookie-uri și memoria browserului",
      body: [
        "Paginile publice ale site-ului nu folosesc cookie-uri. În memoria browserului păstrăm doar ce e nevoie ca site-ul să meargă cum l-ai ales: tema (luminoasă sau întunecată), limba, dacă ai instalat site-ul ca aplicație, câteva semne tehnice ale selectorului de limbă și o copie a paginilor, ca să se încarce repede. Toate rămân pe dispozitivul tău și le poți șterge oricând din setările browserului. Unele pagini demonstrative își păstrează la fel propriile setări.",
      ],
    },
    {
      title: "Cine mai vede datele",
      body: [
        [
          "Vercel Inc. (SUA): găzduiește site-ul.",
          "Hostinger: găzduiește căsuța noastră de e-mail, în Uniunea Europeană.",
          "Umami Software, Inc.: statisticile anonime de vizite.",
          "Perplexity AI, Inc. (SUA): doar mesajele din chatul paginilor demonstrative.",
        ],
        "Când datele ajung în afara Uniunii Europene, transferul se face pe baza Cadrului UE–SUA privind protecția datelor sau a clauzelor contractuale standard aprobate de Comisia Europeană. Nu vindem date și nu le folosim pentru reclame.",
      ],
    },
    {
      title: "Cât le păstrăm",
      body: [
        [
          "Mesajele din formular: cât durează discuția. Dacă nu ajungem să lucrăm împreună, le ștergem în cel mult 2 ani de la ultimul mesaj.",
          "Dacă devii client: contractul, corespondența legată de el și facturile, cât cere legea contabilității.",
          "Statisticile de vizite: cel mult 6 luni.",
          "Jurnalele serverului: perioada scurtă stabilită de furnizorul de găzduire.",
        ],
      ],
    },
    {
      title: "Drepturile tale",
      body: [
        `Poți cere oricând să vezi ce date avem despre tine, să le corectăm, să le ștergem, să le restrângem folosirea sau să ți le dăm într-un format pe care îl poți duce în altă parte. Te poți opune și statisticilor de vizite și jurnalelor serverului. Scrie-ne la ${company.email}; răspundem în cel mult o lună. Nu luăm decizii automate despre tine și nu îți facem profil.`,
        "Dacă crezi că nu am respectat legea, poți face plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), dataprotection.ro, sau la autoritatea din țara ta.",
      ],
    },
    {
      title: "Schimbări",
      body: [
        "Când schimbăm felul în care folosim datele, actualizăm această pagină și data de mai sus.",
      ],
    },
  ],
  contactTitle: "O întrebare despre datele tale?",
  contactText: `Scrie-ne la ${company.email}.`,
  contactCta: "Scrie-ne",
  contactHref: `mailto:${company.email}`,
};

const en: Content = {
  eyebrow: "Personal data",
  title: "Privacy.",
  intro:
    "What data reverb.ro collects, why, how long we keep it and how to ask us to delete it. In short: only what you write to us and anonymous visit statistics, with no cookies.",
  updated: "Last updated: 18 November 2026",
  sections: [
    {
      title: "Who is responsible for your data",
      body: [
        `Reverb Digital is a brand of ${company.legalName}, VAT ${company.cui}, ${company.regCom}, registered at Str. Măgura 57 F, ${company.city}, ${company.county} county, 620157, Romania. For any question about your data: ${company.email} or ${company.phoneIntl}.`,
      ],
    },
    {
      title: "What we collect and why",
      body: [
        [
          "Contact form: your name, e-mail address, company (if you enter one), the service you chose, your message and the page language. They reach us as an e-mail; we do not store them in a database. We use them to reply and to send you an offer, at your request, before a possible contract (GDPR, Art. 6(1)(b)). Name, e-mail, service and message are needed for us to reply; without them the form is not sent. You receive a confirmation e-mail after sending.",
          "Visit statistics, with Umami: the page viewed, the page you came from, approximate country and city, language, device type, screen size, browser and operating system. Umami sets no cookies and does not tell us who you are. It helps us know which pages are useful (legitimate interest, Art. 6(1)(f)).",
          "Server logs: on every visit, the server hosting the site automatically records the IP address, the time and the page requested, to keep the site running and protect it from attacks (legitimate interest). From the IP address we also read the country, to show the page in the right language; we do not keep it.",
          "The AI assistant on the demo pages (Showcase section): what you type in that chat is sent to Perplexity AI to get an answer. Do not enter personal data there.",
          "Other sites opened inside the page: when you open a portfolio project, that site loads inside our window, and the demo pages may load images and videos from other servers (for example Unsplash or YouTube). Those services have their own privacy rules.",
          "WhatsApp: if you write to us on WhatsApp, the message goes through WhatsApp (Meta), under their terms.",
        ],
      ],
    },
    {
      title: "Cookies and browser storage",
      body: [
        "The public pages of this site use no cookies. In your browser's storage we keep only what the site needs to work the way you chose: theme (light or dark), language, whether you installed the site as an app, a few technical flags of the language selector and a copy of the pages so they load quickly. All of it stays on your device and you can clear them at any time in your browser settings. Some demo pages keep their own settings the same way.",
      ],
    },
    {
      title: "Who else sees the data",
      body: [
        [
          "Vercel Inc. (USA): hosts the site.",
          "Hostinger: hosts our mailbox, in the European Union.",
          "Umami Software, Inc.: the anonymous visit statistics.",
          "Perplexity AI, Inc. (USA): only the messages typed in the demo-page chat.",
        ],
        "When data leaves the European Union, the transfer relies on the EU–US Data Privacy Framework or on the standard contractual clauses approved by the European Commission. We do not sell data and do not use it for advertising.",
      ],
    },
    {
      title: "How long we keep it",
      body: [
        [
          "Contact form messages: for as long as the conversation lasts. If we do not end up working together, we delete them within 2 years of the last message.",
          "If you become a client: the contract, the related correspondence and the invoices, for as long as accounting law requires.",
          "Visit statistics: up to 6 months.",
          "Server logs: the short period set by the hosting provider.",
        ],
      ],
    },
    {
      title: "Your rights",
      body: [
        `You can ask at any time to see the data we hold about you, to correct it, delete it, restrict its use or receive it in a portable format. You can also object to the visit statistics and the server logs. Write to ${company.email}; we reply within one month. We make no automated decisions about you and do not profile you.`,
        "If you believe we have broken the law, you can complain to the Romanian data protection authority (ANSPDCP), dataprotection.ro, or to the authority in your country.",
      ],
    },
    {
      title: "Changes",
      body: ["When we change how we use data, we update this page and the date above."],
    },
  ],
  contactTitle: "A question about your data?",
  contactText: `Write to us at ${company.email}.`,
  contactCta: "Write to us",
  contactHref: `mailto:${company.email}`,
};

export default function PrivacyContent({ lang }: { lang: "ro" | "en" }) {
  const c = lang === "en" ? en : ro;
  return (
    <div className="text-white min-h-screen">
      <PageBackdrop />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">{c.eyebrow}</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[80px]">
              {c.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">{c.intro}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">{c.updated}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="space-y-14">
          {c.sections.map((s) => (
            <Reveal key={s.title}>
              <div>
                <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">{s.title}</h2>
                <div className="mt-5 space-y-4">
                  {s.body.map((b, i) =>
                    Array.isArray(b) ? (
                      <ul key={i} className="list-disc space-y-3 pl-5 text-neutral-300 leading-7 marker:text-neutral-500">
                        {b.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i} className="text-neutral-300 leading-7">
                        {b}
                      </p>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">{c.contactTitle}</h2>
            <p className="mb-8 text-neutral-300">{c.contactText}</p>
            <a
              href={c.contactHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {c.contactCta}
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
