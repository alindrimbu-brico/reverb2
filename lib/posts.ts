export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  sections: Array<{ heading?: string; body: string }>;
};

export const posts: Post[] = [
  {
    slug: "ce-inseamna-un-magazin-online-bine-construit",
    title: "Ce înseamnă un magazin online bine construit",
    date: "2026-03-10",
    category: "E-commerce",
    readTime: "6 min",
    excerpt:
      "Majoritatea magazinelor online arată bine, dar nu vând bine. Diferența nu e în design — e în arhitectură, în logica de business și în claritatea mesajului.",
    sections: [
      {
        body: "Majoritatea magazinelor online sunt construite invers. Se începe cu designul, se alege o temă premium, se adaugă produsele și... se lansează. Apoi vine întrebarea: de ce nu vinde?",
      },
      {
        heading: "Problema e de arhitectură, nu de trafic",
        body: "Un magazin care nu vinde nu are neapărat nevoie de mai mult trafic. Are nevoie de claritate. Vizitatorii nu înțeleg ce vinzi, pentru cine este, de ce să te aleagă pe tine și nu pe concurență. Nicio campanie de ads nu poate compensa un mesaj neclar.",
      },
      {
        heading: "Structura de categorie contează mai mult decât culoarea butoanelor",
        body: "Când un client intră pe site-ul tău, el parcurge un traseu mental: înțeleg ce e aici? Găsesc ce caut? Am motive să cumpăr acum? Dacă structura categoriilor e haotică sau produsele sunt greu de filtrat, pierzi clientul înainte să ajungă la checkout.",
      },
      {
        heading: "Pagina de produs e cel mai important real estate de pe site-ul tău",
        body: "Titlu clar. Beneficii, nu doar specificații. Imagini care arată produsul în context. Recenzii reale. Un CTA simplu și vizibil. Fiecare element care lipsește e o micro-barieră în calea conversiei. Cumulat, aceste micro-bariere devin motive reale de abandon.",
      },
      {
        heading: "Checkout-ul e unde mor cele mai multe vânzări",
        body: "Câmpuri prea multe. Obligativitatea creării unui cont. Surprize la livrare. Lipsa metodelor de plată preferate. Fiecare pas inutil din checkout e o scuză pentru client să amâne sau să renunțe. Un checkout bun e invizibil — se termină înainte să pară dificil.",
      },
      {
        heading: "Concluzie",
        body: "Un magazin online bine construit nu e o chestiune de buget mare sau de platformă fancy. E o chestiune de gândire clară: ce vând, cui vând, cum ajunge clientul de la descoperire la comandă. Când structura e corectă, conversia devine predictibilă, nu accidentală.",
      },
    ],
  },
  {
    slug: "ai-in-marketing-amplificator-nu-inlocuitor",
    title: "AI în marketing: amplificator, nu înlocuitor",
    date: "2026-02-28",
    category: "AI",
    readTime: "5 min",
    excerpt:
      "Există două moduri greșite de a folosi AI în marketing: să-l ignori complet sau să-l lași să facă totul. Calea corectă e undeva la mijloc — și schimbă complet ce poți livra.",
    sections: [
      {
        body: "AI-ul a intrat în marketing cu zgomot mare. Promisiunile sunt generoase: conținut la scară, campanii automatizate, personalizare infinită. Realitatea e mai nuanțată.",
      },
      {
        heading: "Ce face AI bine (și ce nu face)",
        body: "AI-ul e excelent la volum, viteză și iterație. Poate genera 10 variante de titlu în 30 de secunde, poate rezuma o pagină de landing, poate sugera structuri de email. Dar nu știe nimic despre brandul tău, despre tonul real al comunicării sau despre ce anume rezonează cu clientul tău specific. Fără context, produce generic.",
      },
      {
        heading: "Directia strategică rămâne umană",
        body: "Cel mai comun eșec cu AI în marketing: dai un prompt vag și publici output-ul fără editare. Rezultatul e conținut care sună a toată lumea și a nimeni. AI-ul nu știe de ce business-ul tău există, ce problemă rezolvă cu adevărat sau ce emoție vrei să evoce. Astea vin din tine.",
      },
      {
        heading: "Workflow-ul care funcționează",
        body: "Gândești strategia. Definești mesajele cheie. Stabilești tonul. Descrii contextul complet. Abia atunci AI-ul devine util — ca un asistent care execută rapid ceea ce tu ai gândit deja clar. El scurtează producția, nu gândirea.",
      },
      {
        heading: "Unde AI schimbă jocul real",
        body: "Testare rapidă A/B pe copy. Research de concurență și piață. Primele drafturi de articole și emailuri. Optimizare de titluri și meta-descrieri. Transcriere și sinteză de interviuri cu clienți. În toate aceste zone, AI-ul reduce fricțiunea fără a diminua calitatea, dacă e supervizat corect.",
      },
      {
        heading: "Concluzie",
        body: "Marketingul bun rămâne o chestiune de înțelegere umană profundă — a pieței, a clientului, a brandului. AI-ul face acea înțelegere mai eficient aplicabilă. Nu înlocuiește judecata. O amplifică.",
      },
    ],
  },
  {
    slug: "de-ce-esueaza-campaniile-de-ads",
    title: "De ce eșuează campaniile de ads (și ce poți face altfel)",
    date: "2026-02-14",
    category: "Marketing",
    readTime: "7 min",
    excerpt:
      "Majoritatea bugetelor de ads merg în găuri negre nu pentru că platforma e proastă, ci pentru că fundamentele lipsesc. Iată un diagnostic onest.",
    sections: [
      {
        body: "Săptămânal auzim același scenariu: am dat bani pe ads, nu a mers, poate ads-urile nu funcționează pentru mine. Rareori ads-urile sunt problema. Aproape întotdeauna, problema e ce se întâmplă înainte și după click.",
      },
      {
        heading: "Eroarea #1: Trimiți trafic pe o pagină care nu convinge",
        body: "Ads-ul aduce oameni. Pagina îi convinge (sau nu). Dacă pagina de destinație nu are un mesaj clar, un beneficiu evident și un CTA logic, banii sunt irosiți indiferent cât de bun e creativeul. Înainte să optimizezi campania, optimizează pagina.",
      },
      {
        heading: "Eroarea #2: Targetezi prea larg sau prea strâns",
        body: "Un target prea larg cheltuie bugetul pe oameni care nu au nicio relevanță. Un target prea strâns limitează algoritmul de la a găsi pattern-urile bune. Echilibrul optim depinde de industrie, produs și buget — și necesită testare disciplinată, nu intuiție.",
      },
      {
        heading: "Eroarea #3: Nu ai definit clar ce înseamnă succes",
        body: "Fără un KPI clar (cost per lead, ROAS, cost per achiziție), optimizezi în gol. Fiecare campanie trebuie să aibă un singur obiectiv primar măsurabil. Altfel ajungi să raportezi metrici de vanitate — reach, impresii, CPM — care nu spun nimic despre bani.",
      },
      {
        heading: "Eroarea #4: Oprești campaniile prea devreme",
        body: "Algoritmii de ads au nevoie de date pentru a optimiza. O campanie nouă are nevoie de cel puțin 50-100 de conversii înainte ca sistemul să înceapă să funcționeze eficient. Dacă oprești sau modifici totul după 3 zile, resetezi constant procesul de învățare.",
      },
      {
        heading: "Ce funcționează de fapt",
        body: "Ads-urile funcționează când există o ofertă clară, o pagină care convinge, un tracking corect și răbdarea de a lăsa campania să se optimizeze. Nimic spectaculos — dar puțini aplică toate aceste condiții simultan.",
      },
    ],
  },
  {
    slug: "conversia-nu-e-un-accident-cum-structurezi-un-funnel",
    title: "Conversia nu e un accident: cum structurezi un funnel care vinde",
    date: "2026-01-30",
    category: "Business",
    readTime: "6 min",
    excerpt:
      "Un funnel nu e un termen de jargon — e pur și simplu traseul pe care îl parcurge un vizitator până devine client. Diferența dintre un business care scalează și unul care stagnează e, de obicei, cât de bine e gândit acest traseu.",
    sections: [
      {
        body: "Există o percepție că un funnel de vânzare e ceva complicat, rezervat business-urilor mari cu echipe de marketing dedicate. În realitate, orice business care vinde ceva are un funnel — fie gândit, fie accidental.",
      },
      {
        heading: "Etapa 1: Awareness — te găsesc?",
        body: "Înainte să cumpere, oamenii trebuie să știe că exiști. Ads, SEO, rețele sociale, referrals — toate sunt canale de awareness. Greșeala comună e să investești masiv în awareness fără să ai nimic bun la care să trimiți traficul.",
      },
      {
        heading: "Etapa 2: Considerare — înțeleg ce oferi?",
        body: "Odată ajuns pe site, vizitatorul decide rapid dacă merită să rămână. Titlul, subtitlul, prima imagine și primul paragraf fac această decizie în 3-5 secunde. Claritatea mesajului în această etapă valorează mai mult decât orice funcționalitate fancy.",
      },
      {
        heading: "Etapa 3: Decizie — am motive să cumpăr acum?",
        body: "Beneficii clare, dovezi sociale (recenzii, testimoniale, studii de caz), garanții care reduc riscul perceput și un CTA care face pasul următor evident. Dacă una dintre acestea lipsește, ratezi conversii care altfel ar fi been câștigate.",
      },
      {
        heading: "Etapa 4: Retenție — revine și recomandă?",
        body: "Achiziția nu e finalul. Un client mulțumit care cumpără din nou costă de 5-7 ori mai puțin decât un client nou. Email marketing post-achiziție, programe de loialitate și comunicare proactivă sunt investiții cu ROI evident — și totuși, ignorate de majoritatea business-urilor.",
      },
      {
        heading: "Cum începi concret",
        body: "Desenează traseul real al clientului tău. Unde te găsește? Ce vede primul? Ce îl face să ezite? Ce l-ar face să revină? Răspunsul la aceste întrebări e harta funnel-ului tău. Optimizezi câte un pas la un moment dat, măsori impactul și treci mai departe.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
