"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function HumanConnectionPage() {
  return (
    <>
      <ArticleLayout themeName="recovery" accentColor="#f43f5e">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Conexiunea Umană — Antidotul Neurobiologic al Dependenței
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-rose-500 pl-6">
          „Opusul dependenței nu este simpla abstinență. Este conexiunea umană.” — Johann Hari
        </p>

        <div className="space-y-12">
          {/* Main interactive player with connection theme */}
          <InteractiveVideoPlayer 
            imageSrc="/images/human-connection.jpg" 
            themeColor="#f43f5e" 
            title="Conexiunea Umană"
          />

          {/* Section 1: The Philosophy and Psychology */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              Perspectiva Psihologică și Filosofică
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Dependența nu este o problemă de moralitate sau o simplă defecțiune chimică a creierului; ea este, la rădăcină, o încercare disperată de a rezolva o suferință umană fundamentală: <strong>durerea deconectării și a traumei</strong>. Dr. Gabor Maté afirmă că întrebarea corectă nu este „De ce dependența?”, ci „De ce durerea?”.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Oamenii sunt creaturi simbolice. Ne găsim sensul în poveștile pe care le împărtășim, în ritualurile pe care le păstrăm și în triburile din care facem parte. Când aceste arhitecturi simbolice se prăbușesc din cauza izolării tehnologice sau a traumelor de atașament timpurii, individul rămâne vulnerabil. Substanța devine un substitut sintetic, predictibil, dar distructiv, pentru conexiunea reală care lipsește.
            </p>
          </div>

          {/* Section 2: Bruce Alexander and the Rat Park Experiment */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              Experimentul „Rat Park” — Revelația Socială
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              În anii 1970, psihologul Bruce Alexander a contestat experimentele clasice de dependență, unde șobolanii izolați în cuști goale alegeau apa cu heroină până la supradoză. El a construit <strong>„Rat Park”</strong>: un spațiu vast, plin de hrană, jucării și, cel mai important, alți șobolani cu care să interacționeze și să se împerecheze.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Rezultatul a fost uluitor: deși aveau acces liber la aceeași apă cu morfină, șobolanii din Rat Park au ignorat-o aproape în totalitate, preferând apa simplă. Chiar și cei care fuseseră anterior forțați să devină dependenți în izolare s-au auto-detoxificat odată integrați în comunitate. Concluzia este clară: <strong>mediul și conexiunea socială dictează vulnerabilitatea la adicție</strong>.
            </p>
          </div>

          {/* Section 3: The Neuroscience of Attachment (Oxytocin vs Dopamine) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              Neurobiologia Conexiunii: Ocitocină și Opioizi Endogeni
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Din punct de vedere neurobiologic, conexiunea umană autentică acționează ca un scut chimic protector:
            </p>
            <ul className="space-y-3 text-xs text-neutral-400 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">1. Ocitocina (Hormonul Atașamentului):</span>
                <span>Produsă în hipotalamus, calmează amigdala hiper-reactivă din stările de traumă și adicție. Ea modulează eliberarea de dopamină în nucleul accumbens, temperând direct poftele (cravings) și reducând efectul de întărire al drogurilor artificiale.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">2. Opioizii Endogeni (Beta-Endorfinele):</span>
                <span>Interacțiunea socială caldă, îmbrățișările și validarea emoțională eliberează natural endorfine. Dependența de opiacee externe (precum heroina) este, din punct de vedere biologic, o încercare de a re-crea chimia atașamentului matern și a siguranței tribale în absența acestora.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">3. Co-Regularea Sistemului Nervos:</span>
                <span>Prin intermediul neuronilor-oglindă, prezența unui alt sistem nervos calm și sigur ajută la co-regularea automată a sistemului nostru autonom, readucând organismul în homeostazie fără efort.</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Clinical and Spiritual Path */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              Calea spre Vindecare: De la Izolare la Comunitate
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Abstinența fizică este doar eliminarea chimicalelor; adevărata vindecare necesită restabilirea **arhitecturii relaționale**. Aceasta implică:
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light italic border-l border-rose-500/30 pl-4">
              „A fi văzut, auzit și acceptat de o altă ființă umană este cel mai puternic tranchilizant biologic disponibil speciei noastre.”
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Integrarea într-o comunitate conștientă (Sangha), terapia de atașament somatic și repararea legăturilor interpersonale prin vulnerabilitate radicală sunt pașii fundamentali pentru recablarea creierului. Vindecarea se produce de la om la om, de la inimă la inimă, înlocuind izolarea tehnologică cu căldura organică a tribului.
            </p>
          </div>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
