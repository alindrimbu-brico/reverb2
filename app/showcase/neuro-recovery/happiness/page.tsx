"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function FericirePage() {
  return (
    <>
      <ArticleLayout themeName="stimulants" accentColor="#f97316">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Fericirea (Mintea): Echilibrul Cognitiv și Arta Prezenței Mentale
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-orange-500 pl-6">
          O analiză profundă a fericirii ca proces de evaluare mentală. Cum circuitele serotoninergice și cortexul prefrontal colaborează cu Stoicismul și Budismul pentru a genera stabilitatea psihică.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/happiness.jpg" 
          themeColor="#f97316" 
          title="Fericirea (Mintea): Coerența Lobului Frontal și Controlul Stoic" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Neurobiologia Serotoninei și Sinergia Prefrontal-Amigdaliană
        </h2>
        <p>
          Spre deosebire de dopamină, care ne împinge spre acțiune și achiziție, <strong>serotonina (5-HT)</strong> este molecula mulțumirii, a statusului și a stabilității emoționale. Ea modulează circuitele din **cortexul prefrontal** care controlează și temperează impulsurile primare venite din **amigdală** (centrul fricii și al stresului).
        </p>
        <p>
          Fericirea mentală se traduce neurologic printr-o conexiune puternică, stabilă, între lobul frontal (rațiune) și sistemul limbic (emoții). Când această conexiune este optimă, creierul poate realiza o re-evaluare cognitivă (cognitive reappraisal), traducând evenimentele externe prin lentile constructive, nu prin reacții defensive de panică sau furie.
        </p>

        <div className="bg-neutral-900/50 border border-orange-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-2">Știința Stării de Flow</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Conceptul de „Flow” descris de Mihaly Csikszentmihalyi reprezintă alinierea mentală perfectă: atenția este complet absorbită de sarcină, simțul timpului dispare, iar activitatea cortexului prefrontal lateral (criticul interior) scade semnificativ, eliberând mintea de sub tensiunea auto-evaluării constante.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Stoicismul și Distincția Controlului
        </h2>
        <p>
          În plan filozofic, Stoicii (precum Epictet și Seneca) au definit fericirea mentală prin *dihotomia controlului*: nu lucrurile în sine ne tulbură, ci judecățile pe care le facem asupra lor. 
        </p>
        <p>
          Aceasta este exact baza Terapiei Cognitiv-Comportamentale (CBT) moderne. Fericirea minții nu provine din controlul circumstanțelor externe, ci din stăpânirea propriilor interpretări. Mintea încetează să mai fie o frunză purtată de vânt și devine observatorul tăcut al propriilor procese coginitive.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Perspectiva Zen: Mintea ca Oglindă a Iluziei (Samsara)
        </h2>
        <p>
          Budismul și Zen-ul ne învață că mintea neantrenată este ca o „maimuță nebună” (monkey mind) care sare constant între regrete din trecut și scenarii din viitor. Această ruminație cronică corespunde activității excesive a **Rețelei Modului Implicit (DMN)**.
        </p>
        <p>
          Fericirea de la nivelul minții se instalează când învățăm să privim gândurile ca pe niște nori trecători pe cerul conștiinței, nu ca pe însăși realitatea. Prin meditație, calmăm DMN, creând o minte clară ca o oglindă care reflectă lumea fără a fi pătată de dorințe sau atașamente oarbe.
        </p>

        <div className="border-l-4 border-orange-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            „Pacea nu înseamnă o viață lipsită de furtuni, ci liniștea din centrul uraganului mental. Mintea este un servitor excelent, dar un stăpân teribil.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
