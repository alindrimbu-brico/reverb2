"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function EpigeneticsGaborMatePage() {
  return (
    <>
      <ArticleLayout themeName="chaos" accentColor="#a855f7">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Epigenetica: Semnele Moleculare ale Traumei și Înțelepciunea Dr. Gabor Maté
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-purple-500 pl-6">
          O analiză științifică, psihologică și spirituală despre modul în care experiențele timpurii își lasă amprenta pe ADN-ul nostru. „Nu întreba de ce dependența, întreabă de ce durerea.”
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/epigenetics.jpg" 
          themeColor="#a855f7" 
          title="Epigenetica & Gabor Maté: Reactivarea Genei și Vindecarea Somatică" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Știința Epigeneticii: Semnele de Carte ale ADN-ului
        </h2>
        <p>
          Genetica clasică ne învață că suntem prizonierii codului nostru ADN moștenit. Cu toate acestea, revoluția **epigeneticii** ne arată că mediul și experiențele noastre emoționale controlează exprimarea acestor gene. Prin mecanisme precum **metilarea ADN-ului** și **modificarea histonelor**, corpul poate activa sau opri anumite gene fără a schimba codul de bază.
        </p>
        <p>
          Studiile de pionierat realizate de dr. Rachel Yehuda arată că traumele severe (precum cele ale supraviețuitorilor Holocaustului sau veteranilor de război) lasă amprente epigenetice care sunt transmise biologic generațiilor următoare. Copiii moștenesc un sistem de răspuns la stres pre-calibrat pentru un mediu periculos, manifestat prin niveluri modificate de cortisol și o susceptibilitate crescută la anxietate și dependență.
        </p>

        <div className="bg-neutral-900/50 border border-purple-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-2">Mecanism Molecular</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Metilarea acționează ca un „comutator de volum” molecular. Când o genă responsabilă de receptorii de glucocorticoizi din hipocamp este metilată intens din cauza neglijării timpurii, creierul își pierde capacitatea de a opri eficient cascada de stres, menținând individul într-o stare de alertă toxică.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Paradigma Dr. Gabor Maté: Întrebarea Corectă despre Dependență
        </h2>
        <p>
          Doctorul Gabor Maté, o autoritate mondială în domeniul adicției și traumei, propune o schimbare radicală de paradigmă: dependența nu este o boală genetică predeterminată și nici o slăbiciune de caracter. Dependența este o **încercare disperată de a rezolva o problemă** — problema durerii emoționale nerezolvate.
        </p>
        <p>
          Maté afirmă: *„Nu întreba de ce dependența, întreabă de ce durerea.”* Dependențele sunt mecanisme de adaptare somatice create în copilărie ca răspuns la deconectare sau abuz. Când mediul timpuriu nu oferă siguranță, circuitele dopaminergice și endorfinergice nu se dezvoltă optim, lăsând creierul flămând după stimuli chimici externi pentru a experimenta un sentiment temporar de conexiune și pace.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Dimensiunea Spirituală: Ruperea Lanțului Karmic al Traumei
        </h2>
        <p>
          Din punct de vedere spiritual, transmiterea transgenerațională a traumei corespunde conceptului ancestral de **Karma de neam** sau amprentă familială. Suferințele neintegrate ale părinților noștri devin umbrele pe care suntem chemați să le integrăm și să le transcendem.
        </p>
        <p>
          Vindecarea epigenetică este, în esență, un act spiritual de eliberare a liberului arbitru (*akrasia*). Conștientizând că durerea pe care o purtăm nu ne definește identitatea, ci este doar o reacție biologică moștenită, putem rupe lanțul de transmitere. Ne asumăm rolul de „capăt de linie” pentru trauma familială, transformând suferința moștenită în înțelepciune și compasiune lăuntrică.
        </p>

        <div className="border-l-4 border-purple-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            „Trauma nu este ceea ce ți se întâmplă ție. Trauma este ceea ce se întâmplă în interiorul tău ca rezultat a ceea ce ți s-a întâmplat. Vindecarea înseamnă reconectarea cu tine însuți.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
