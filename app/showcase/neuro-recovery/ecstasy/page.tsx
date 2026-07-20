"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function ExtazPage() {
  return (
    <>
      <ArticleLayout themeName="joy" accentColor="#ffffff">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Extazul (Divinul): Neuroteologia Transcendenței și Dizolvarea Absolută a Egoului
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-neutral-100 pl-6">
          O investigație de frontieră asupra unificării mistice. Cum neuroștiința analizează stingerea lobului parietal, undele gamma de mare amplitudine și dizolvarea granițelor dintre Sine și Univers.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/ecstasy.jpg" 
          themeColor="#ffffff" 
          title="Extazul (Divinul): Unirea Mistică și Hipofrontalitatea Tranzitorie" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Neuroteologia: Deactivarea Parietală și Pierderea Spațio-Temporală
        </h2>
        <p>
          Pionierul neuroteologiei, <strong>Dr. Andrew Newberg</strong>, a scanat creierul călugărilor budiști și al maicilor franciscane în timpul stărilor de extaz mistic profund. Descoperirea sa fundamentală vizează **zona de orientare asociativă din lobul parietal superior**.
        </p>
        <p>
          Această regiune are rolul de a crea distincția fizică dintre „eu” și „ceea ce este în afara mea” și de a ne orienta în spațiu și timp. În timpul extazului absolut, activitatea din această zonă **scade aproape complet**. Deoarece creierul nu mai primește date senzoriale de delimitare, el își pierde capacitatea de a defini granițele eului. Subiectul experimentează o dizolvare completă a identității individuale și o unire infinită, atemporală, cu Totul.
        </p>

        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl my-8">
          <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2">Hipofrontalitatea Tranzitorie și DMT Endogen</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Stările de extaz implică și o **hipofrontalitate tranzitorie** (oprirea temporară a rețelelor executive din cortexul prefrontal) asociată cu descărcări masive de tryptamine endogene (cum ar fi DMT sau molecule înrudite). Acest mecanism suspendă criticul interior, deschizând porțile unei percepții multidimensionale neregulate de filtrele pragmatice de supraviețuire.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Sentimentul Oceanic și Experiențele de Vârf ale lui Maslow
        </h2>
        <p>
          Romain Rolland și, ulterior, Sigmund Freud au descris această stare ca fiind **„sentimentul oceanic”**—senzația unei legături indisolubile și a unei apartenențe absolute la întregul univers. 
        </p>
        <p>
          Abraham Maslow a numit aceste trăiri **„experiențe de vârf” (peak experiences)**, momente de transcendență pură în care individul se simte integrat, complet, lipsit de frici și dorințe egoiste, experimentând o formă de iubire și acceptare necondiționată a Existenței. Maslow le plasa în vârful absolut al piramidei nevoilor umane, ca fiind scopul ultim al evoluției noastre psihologice.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Dimensiunea Spirituală: Samadhi, Satori și Non-Dualitatea Absolută
        </h2>
        <p>
          În tradiția yoga a lui Patanjali, starea supremă se numește **Asamprajnata Samadhi**—absorbția completă în conștiința pură, dincolo de orice formă de activitate mentală. In Zen, **Satori** reprezintă iluminarea fulgerătoare în care iluzia separării se prăbușește complet.
        </p>
        <p>
          Filozofia Advaita Vedanta (non-duala) afirmă că separarea dintre observator și observat este o simplă iluzie cognitivă (*Maya*). Extazul mistic este prăbușirea acestei iluzii: nu mai există un „eu care experimentează extazul”, ci există doar Extazul, Infinitul, Conștiința Necondiționată. Este întoarcerea acasă a picăturii de apă în oceanul cosmic.
        </p>

        <div className="border-l-4 border-neutral-100/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            „Când ego-ul dispare, nu rămâne un vid pustiu, ci se dezvăluie Plenitudinea Infinită. Extazul este moartea dulce a iluziei că ai fost vreodată separat de Sursă.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
