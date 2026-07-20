"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function BucurieSufletPage() {
  return (
    <>
      <ArticleLayout themeName="recovery" accentColor="#fbbf24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Bucuria (Sufletul): Coerența Inimii și Independența Spirituală
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-amber-500 pl-6">
          Explorarea stării de liniște absolută. Cum sistemul nervos parasimpatic, oxitocina și undele cerebrale gamma colaborează cu individuația jungiană și filozofia lui Spinoza pentru a revela bucuria lăuntrică.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/joy-soul.jpg" 
          themeColor="#fbbf24" 
          title="Bucuria (Sufletul): Sincronizarea Cardiacă și Unde Gamma Coerente" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Biologia Conexiunii Profunde: Nervul Vag și Coerența Cardiacă
        </h2>
        <p>
          Bucuria sufletească nu este o agitație plină de entuziasm, ci o stare de pace radiantă. Din punct de vedere fiziologic, ea este guvernată de activarea **sistemului nervos parasimpatic** prin intermediul **nervului vag**. Acesta din urmă acționează ca o punte de comunicare între creier și organele viscerale, în special inima.
        </p>
        <p>
          Cercetările asupra coerenței cardiace arată că stările de recunoștință profundă, compasiune și iubire altruistă aliniază ritmul cardiac într-un model regulat, de tip undă sinusoidală. Această coerență activează eliberarea de **oxitocină** și **endorfine endogene**, stabilizând creierul în **unde cerebrale alfa și theta**, asociate cu liniștea profundă, insight-ul creativ și diminuarea ego-ului.
        </p>

        <div className="bg-neutral-900/50 border border-amber-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2">Unde Gamma și Sincronizarea Creierului</h4>
          <p className="text-sm text-neutral-300 mb-0">
            În timpul momentelor de revelație profundă sau meditație axată pe compasiune universală (precum Metta), electroencefalogramele înregistrează explozii de **unde gamma (peste 40 Hz)**. Aceasta indică o sincronizare neuronală globală, în care diferite arii corticale procesează informația într-o simfonie perfect coerentă.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Individuația Jungiană și Spinoza: Bucuria ca Extindere a Ființei
        </h2>
        <p>
          Filozoful Baruch Spinoza definea bucuria (*Laetitia*) ca fiind trecerea omului de la o perfecțiune mai mică la una mai mare—o creștere a puterii noastre de a fi și de a acționa. Nu este o reacție la un premiu exterior, ci însăși expansiunea lăuntrică a ființei.
        </p>
        <p>
          În psihologia analitică, Carl Jung descria procesul de **Individuație** ca fiind integrarea umbrei și unirea conștientului cu inconștientul sub umbrela Sinelui (Self). Bucuria sufletului este starea de aliniere absolută cu acest Sine profund. Ea apare când nu ne mai luptăm cu propria noastră istorie și ne acceptăm destinul într-o armonie perfectă.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Dimensiunea Spirituală: Tăcerea Inimii în Tradiția Mistică
        </h2>
        <p>
          Misticismul, fie el creștin (isihasmul), sufit (sufismul) sau hindus (advaita), vorbește despre „tăcerea minții” ca despre poarta de intrare în templul inimii. 
        </p>
        <p>
          Bucuria la nivelul sufletului este marcată de un sentiment profund de pace și independență față de extern. Nu mai ai nevoie ca lumea să fie într-un anumit fel pentru ca tu să fii bine. Izvorul de bucurie țâșnește din interior, din simpla realizare a faptului de a exista și de a fi conștient.
        </p>

        <div className="border-l-4 border-amber-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            „Bucuria sufletească nu se caută pe drumuri străine. Ea se naște când încetezi să mai fugi de tine și devii un prieten fidel al propriei tale tăceri.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
