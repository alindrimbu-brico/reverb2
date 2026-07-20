"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function PlăcerePage() {
  return (
    <>
      <ArticleLayout themeName="alcohol" accentColor="#ef4444">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Plăcerea (Corpul): Poarta Senzorială și Sacralitatea Materiei
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-red-500 pl-6">
          O investigație științifică, psihologică și spirituală de elită asupra primului nivel al conștiinței: dimensiunea somatică. Cum neurobiologia recompensei se intersectează cu marile școli de gândire despre corp.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/pleasure.jpg" 
          themeColor="#ef4444" 
          title="Plăcerea (Corpul): Vibrația Somatică și Templul Biologic" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Neurobiologia Receptorilor și Calea Dopaminergică Mezolimbică
        </h2>
        <p>
          La nivel biologic, plăcerea este moneda de supraviețuire a creierului. Calea dopaminergică mezolimbică, plecând din <strong>aria tegmentală ventrală (VTA)</strong> și proiectându-se în <strong>nucleus accumbens</strong>, reprezintă motorul evolutiv al dorinței. Acest circuit nu produce neapărat starea de „plăcere consumată”, ci pe cea de anticipare și căutare (motivația).
        </p>
        <p>
          Experiența senzorială reală este procesată prin **cortexul somatosenzorial** și **insulă**, zona din creier responsabilă de interocepție (percepția stării interne a corpului). Când stimulăm corpul, receptorii periferici trimit semnale electrice de-a lungul măduvei spinării către talamus, care le distribuie cortexului pentru a crea harta conștientă a senzației.
        </p>

        <div className="bg-neutral-900/50 border border-red-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-2">Perspectivă Clinică</h4>
          <p className="text-sm text-neutral-300 mb-0">
            În dependența activă, acest circuit este suprasolicitat de stimuli artificiali, ducând la pierderea sensibilității interoceptive. Corpul încetează să mai fie un ghid fin al realității și devine un receptor amorțit ce strigă după supradoză.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Filosofia Hedonismului și Capcana Charvaka
        </h2>
        <p>
          Filozofia antică a explorat pe larg acest nivel. De la hedonismul cirenaic al lui Aristip (care susținea că plăcerea fizică imediată este binele suprem) până la școala indiană **Charvaka** (Lokayata), materialismul a redus existența la simțuri.
        </p>
        <p>
          Însă capcana hedonismului pur este adaptarea hedonică: creierul restabilește rapid homeostazia prin downregulation, făcând ca aceeași plăcere să aducă din ce în ce mai puțină satisfacție. Filozoful Epicur a înțeles acest paradox, sugerând că adevărata plăcere nu constă în acumularea de senzații intense, ci în absența suferinței fizice (<em>aponia</em>) și a tulburării mentale (<em>ataraxia</em>).
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Dimensiunea Spirituală: Corpul ca Altar (Tantra și Întruparea)
        </h2>
        <p>
          Spre deosebire de curentele ascetice care demonizează corpul, tradițiile spirituale non-duale (precum Tantra Shaivistă din Kashmir) privesc corpul ca pe cel mai sfânt instrument al Conștiinței Divine. Corpul nu este o închisoare a sufletului, ci **vârful de lance al spiritului** în lumea fizică.
        </p>
        <p>
          Vindecarea începe prin reîntoarcerea în corp (întrupare / embodiment). Când tratăm corpul nu ca pe un obiect de consum, ci ca pe un spațiu sacru de prezență, fiecare sensation simplă—respirația, gustul apei, atingerea pământului—devine o formă de rugăciune și aliniere neurobiologică.
        </p>

        <div className="border-l-4 border-red-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            „Simțurile nu sunt dușmanii spiritului, ci porțile sale către lume. Doar când mintea adoarme, plăcerea devine sclavie; când mintea este trează, simțurile sunt o binecuvântare continuă.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
