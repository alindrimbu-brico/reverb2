"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function CollectiveTraumaHpaPage() {
  return (
    <>
      <ArticleLayout themeName="withdrawal" accentColor="#ef4444">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Trauma Colectivă și Axa HPA: Fiziologia Alertei Totale
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-red-500 pl-6">
          O analiză științifică, psihologică și spirituală profundă asupra modului în care stresul sistemic și alienarea socială blochează axa neuroendocrină în modul de supraviețuire.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/collective-trauma.jpg" 
          themeColor="#ef4444" 
          title="Trauma Colectivă & Axa HPA: Răspunsul la Cortisol și Sistemul Stresului" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Axa HPA: Sistemul Neuroendocrin al Stresului
        </h2>
        <p>
          Când creierul percepe o amenințare, **hipotalamusul** eliberează CRH (hormonul de eliberare a corticotropinei), stimulând **glanda hipofiză** să secrete ACTH. Acest semnal hormonal ajunge la **glandele suprarenale**, declanșând eliberarea masivă de **cortisol**, adrenalină și noradrenalină. Acesta este circuitul **axei HPA** (Hipotalamo-Hipofizo-Suprarenală), sistemul de alarmă de luptă sau fugi (fight-or-flight).
        </p>
        <p>
          Sub stres cronic, feedback-ul negativ al axei HPA se defectează. Hipocampul (responsabil de oprirea alarmei) suferă atrofie din cauza neurotoxicității cortisolului ridicat. Rezultatul este o stare de **allostatic load** — o uzură biologică severă în care sistemul nervos rămâne blocat într-o alertă totală perpetuă, ducând la anxietate, epuizare suprarenală și un apetit crescut pentru substanțe cu efect sedativ (cum ar fi opiaceele sau alcoolul).
        </p>

        <div className="bg-neutral-900/50 border border-red-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-2">Impact Neurobiologic</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Hiper-excitabilitatea constantă a amigdalei blochează funcția cortexului prefrontal. Deciziile luate în această stare nu mai aparțin rațiunii libere, ci sunt reacții automate de supraviețuire, favorizând impulsivitatea și recidiva în dependențe.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Trauma Colectivă și Alienarea Sistemică
        </h2>
        <p>
          Trauma nu este doar un fenomen individual; ea are o dimensiune profund **colectivă**. Neglijarea socială sistematică, fragmentarea comunităților, presiunea economică extremă și lipsa de speranță structurală acționează ca factori de stres invizibili, dar permanenți.
        </p>
        <p>
          Psihologul Carl Jung vorbea despre **inconștientul colectiv** și cum traumele nesoluționate ale societății se infiltrează în mințile noastre individuale. Atunci când conexiunea inter-umană reală este înlocuită de competitivitate agresivă și alienare (cum descria și filoful Karl Marx), sistemul nostru nervos percepe izolatea ca pe o amenințare existențială gravă. O societate traumatizată colectiv va produce în mod inevitabil indivizi cu axe HPA profund deregulate.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Dimensiunea Spirituală: Găsirea Liniștii în Centrul Furtunii Colective
        </h2>
        <p>
          Din punct de vedere spiritual, restaurarea axei HPA necesită ieșirea din iluzia separării. Cât timp ne considerăm insule izolate care luptă împotriva unui mediu ostil, sistemul de stres va rămâne activat.
        </p>
        <p>
          Vindecarea spirituală înseamnă reconectarea cu respirația și cultivarea prezenței conștiente (mindfulness). Prin practici meditative și restabilirea sentimentului de apartenență la o comunitate caldă (conceptul budist de *Sangha*), îi transmitem amigdalei semnale clare de siguranță biologică. Învățăm să coborâm din starea de alertă, transformând corpul dintr-un câmp de luptă neuroendocrină într-un templu al liniștii profunde.
        </p>

        <div className="border-l-4 border-red-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            „Când nu poți schimba zgomotul exterior al lumii, singura cale este să găsești tăcerea interioară din care se naște adevărata pace a corpului.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
