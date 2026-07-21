"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function BrainBalancePage() {
  return (
    <>
      <ArticleLayout themeName="recovery" accentColor="#3b82f6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Creierul în Căutarea Echilibrului — Alchimia Neuro-Spirituală a Punctului Zero
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-blue-500 pl-6">
          O perspectivă profundă, integratoare între neuroștiința allostaziei și mistica echilibrului interior — transmutarea tensiunii în prezență pură.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/homeostasis-simulation.jpg" 
          themeColor="#3b82f6" 
          title="Creierul în Căutarea Echilibrului: Alchimia Punctului Zero" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Neuroștiința Oscilațiilor: Între Alertă Simpatică și Liniște Parasimpatică
        </h2>
        <p>
          Căutarea echilibrului nu este doar o ecuație homeostatică mecanică, ci o adevărată căutare a sacrului din interiorul nostru. Din punct de vedere neuroștiințific, creierul încearcă constant să stabilizeze fluctuațiile dintre sistemul simpatic (luptă sau fugi) și cel parasimpatic (repaus și digestie). Când trăim în stări de alertă cronică sau suntem prinși în capcana adicției, axa noastră neurală devine rigidă, pierzându-și capacitatea de adaptabilitate dinamică.
        </p>
        <p>
          Pentru a supraviețui suprastimulării, creierul stabilește un nou setpoint allostatic disforic — o stare de stres fiziologic cronic și epuizare a sistemului de recompensă. Pragul natural este dat peste cap, iar receptorii de dopamină sunt reduși (downregulation), împingându-ne spre un consum compulsiv din cauza întăririi negative.
        </p>

        <div className="bg-neutral-900/50 border border-blue-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">Perspectivă Neuro-Fiziologică</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Receptorii adrenergici și glucocorticoizi bombardați de stres devin rezistenți. Din punct de vedere medical, restabilirea echilibrului allostatic cere timp, liniște sinaptică și re-sensibilizare.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Întâlnirea în Punctul Zero: Bifurcația Autonomă și Liniștea non-duală
        </h2>
        <p>
          Privită prin prisma spirituală, această căutare reprezintă dorința profundă a sufletului de a se întoarce în Punctul Zero — starea de liniște pură, neafectată de furtunile exterioare, pe care marii maeștri o numesc starea de Unitate sau Non-Dualitate.
        </p>
        <p>
          Aceasta este bifurcația și co-activarea autonomă în care ramurile simpatice și parasimpatice fuzionează într-o coerență sinaptică maximă. În această axă zero, amigdala se află într-o stare de vigilență calmă, sub controlul direct și stabil al cortexului prefrontal. Acesta este echivalentul neurobiologic al stării de <em>Wu Wei</em> (acțiunea fără efort) din filozofia taoistă sau al stării de <em>Samadhi</em> din yoga.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Alchimia Vindecării: Transmutarea Tensiunii în Transcendență
        </h2>
        <p>
          Prin exersarea conștientă a prezenței, meditație profundă și respirație ritmică, noi liniștim Rețeaua Neuronală Default (DMN) — zona responsabilă de ego și ruminație mentală. Pe măsură ce granițele ego-ului se dizolvă, creierul își recuperează calitatea de templu curat al conștiinței.
        </p>
        <p>
          În acest spațiu al liniștii, neurotransmițători precum oxitocina, serotonina și endorfinele nu mai sunt vârfuri artificiale de plăcere egoistă, ci devin curgerea naturală a bucuriei de a exista. Creierul devine astfel o antenă perfect acordată la ritmurile universale, demonstrând că adevărata vindecare este o alchimie sacră care unește materia cu spiritul.
        </p>

        <div className="border-l-4 border-blue-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            „Echilibrul nu este o destinație statică, ci dansul dinamic al conștiinței în jurul propriei sale axe divine.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
