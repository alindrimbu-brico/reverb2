const fs = require('fs');
const path = require('path');
const appPath = path.join('c:/Users/alind/Projects/reverb/app');

const pages = [
  {
    path: 'roots',
    theme: 'chaos',
    color: '#581c87',
    roTitle: 'Rădăcinile Dependenței: Epigenetica, Trauma și Umbra Suferinței Tăcute',
    roBody: `
<p>Dependența este rareori despre substanța în sine. Nu este un eșec moral, o lipsă de voință sau o simplă căutare a plăcerii. În nucleul ei absolut, dependența este o încercare profundă și disperată de a rezolva o problemă — problema durerii. Este un ecou al suferinței tăcute, un răspuns biologic și psihologic la o lume interioară care se simte insuportabilă.</p>

<h3>Casa cu Fundația Fisurată</h3>
<p>Imaginați-vă că construiți o casă frumoasă pe o fundație fracturată și instabilă. Indiferent cât de mult ați picta pereții sau ați aranja mobila, casa va da mereu senzația că se scufundă încet. Trauma acționează exact ca o fundație stricată. Când experimentăm durere emoțională profundă, stres cronic sau neglijare, mai ales în primii ani de viață, arhitectura internă a creierului nostru se schimbă fundamental. Simțim un cutremur continuu, de intensitate joasă, de anxietate sau goliciune, iar substanțele oferă pur și simplu o evadare temporară din acest freamăt.</p>

<h3>Neurobiologia Umbrei</h3>
<p>Când privim creierul cuiva care se luptă cu dependența, privim adesea un sistem nervos blocat în modul de supraviețuire. Sistemul de răspuns la stres al creierului — axa HPA (axa Hipotalamo-Hipofizo-Suprarenală) — este ca o alarmă de incendiu. Într-un creier sănătos, alarma sună când există pericol și se oprește când pericolul trece. Pentru cei care poartă cu ei traume, alarma nu se oprește niciodată complet. Corpul lor este inundat de cortizol, hormonul stresului, lăsându-i într-o stare constantă de „luptă sau fugi”.</p>

<p>În timp, acest stres cronic deteriorează chiar circuitele cerebrale responsabile de reglarea emoțiilor. Cortexul prefrontal, directorul logic al creierului nostru, se deconectează, în timp ce amigdala, centrul nostru primar al fricii, preia controlul. În această stare de epuizare, orice substanță chimică care acționează ca un „buton de oprire” a sunetului pentru alarma de incendiu devine intens dorită.</p>

<h3>Epigenetica: Semnele de Carte de pe ADN-ul Nostru</h3>
<p>Poate cea mai profundă descoperire a neurobiologiei moderne este <em>epigenetica</em>. Genele noastre sunt ca o bibliotecă vastă de cărți, dar mediul nostru dictează care cărți sunt deschise și citite. Trauma lasă „semne de carte” moleculare pe ADN-ul nostru. Ea poate schimba efectiv modul în care genele noastre se exprimă, alterând receptorii de dopamină (sistemul nostru de recompensă) și răspunsul la stres cu care ne naștem. Acest lucru înseamnă că umbra suferinței tăcute poate fi transmisă la propriu de-a lungul generațiilor. O persoană ar putea moșteni un sistem nervos care este deja unic de sensibil la durere și profund înfometat de ușurare.</p>

<p>Înțelegerea rădăcinilor dependenței înseamnă schimbarea întrebării pe care o punem. În loc să întrebăm „De ce dependența?”, trebuie să întrebăm „De ce durerea?”. Doar prin luminarea umbrei, vindecarea traumei fundamentale și recablarea sistemului nervos prin compasiune și siguranță, poate începe adevărata recuperare.</p>
`,
    enTitle: 'The Roots of Addiction: Epigenetics, Trauma, and the Shadow of Silent Suffering',
    enBody: `
<p>Addiction is rarely about the substance itself. It is not a moral failing, a lack of willpower, or a simple pursuit of pleasure. At its absolute core, addiction is a profound, desperate attempt to solve a problem—the problem of pain. It is an echo of silent suffering, a biological and psychological response to an internal world that feels unbearable.</p>

<h3>The House with a Broken Foundation</h3>
<p>Imagine building a beautiful house on a fractured, unstable foundation. No matter how much you paint the walls or arrange the furniture, the house will always feel like it is slowly sinking. Trauma acts exactly like a broken foundation. When we experience deep emotional pain, chronic stress, or neglect, especially in early life, our brain's internal architecture fundamentally changes. We feel a continuous, low-level earthquake of anxiety or emptiness, and substances simply offer a temporary escape from the tremor.</p>

<h3>The Neurobiology of the Shadow</h3>
<p>When we look at the brain of someone struggling with addiction, we are often looking at a nervous system stuck in survival mode. The brain's stress response system—the HPA axis (Hypothalamic-Pituitary-Adrenal axis)—is like a fire alarm. In a healthy brain, the alarm sounds when there is danger and turns off when the danger passes. For individuals carrying trauma, the alarm never fully turns off. Their body is flooded with cortisol, the stress hormone, leaving them in a constant state of "fight or flight."</p>

<p>Over time, this chronic stress damages the very brain circuits responsible for regulating emotions. The prefrontal cortex, the logical CEO of our brain, goes offline, while the amygdala, our primal fear center, takes over. In this state of exhaustion, any chemical that acts as a "mute button" for the fire alarm becomes intensely desirable.</p>

<h3>Epigenetics: The Bookmarks on our DNA</h3>
<p>Perhaps the most profound discovery in modern neurobiology is <em>epigenetics</em>. Our genes are like a vast library of books, but our environment dictates which books get opened and read. Trauma leaves molecular "bookmarks" on our DNA. It can actually change the way our genes express themselves, altering the dopamine receptors (our reward system) and the stress response we are born with. This means that the shadow of silent suffering can literally be passed down through generations. A person might inherit a nervous system that is already uniquely sensitive to pain and deeply hungry for relief.</p>

<p>Understanding the roots of addiction means changing the question we ask. Instead of asking, "Why the addiction?" we must ask, "Why the pain?" Only by shining a light on the shadow, healing the foundational trauma, and rewiring the nervous system through compassion and safety, can true recovery begin.</p>
`
  },
  {
    path: 'homeostasis',
    theme: 'withdrawal',
    color: '#1d4ed8',
    roTitle: 'Registrul Creierului: Homeostazia și Legea Compensației',
    roBody: `
<p>Creierul uman este contabilul suprem. Ține o evidență meticuloasă a fiecărei tranzacții emoționale și chimice, străduindu-se constant să atingă o stare de echilibru perfect, cunoscută sub numele de <em>homeostazie</em>. Atunci când introducem în sistem vârfuri artificiale, puternice, de plăcere, departamentul de contabilitate al creierului intervine pentru a echilibra registrul. Aceasta este legea inflexibilă a compensației neurobiologice.</p>

<h3>Pendulul Plăcerii și al Durerii</h3>
<p>Imaginați-vă un pendul greu în stare de repaus — acesta este creierul vostru în echilibru. Când folosiți o substanță care creează dependență, împingeți cu forță pendulul sus, în tărâmul plăcerii intense. Dar legile fizicii, la fel ca legile biologiei, dictează că pendulul nu poate rămâne acolo. Gravitația îl trage înapoi, iar inerția îl face să oscileze la fel de departe în direcția opusă — în tărâmul durerii, anxietății și depresiei.</p>

<p>În neurobiologie, acest lucru este cunoscut sub numele de <strong>Teoria Procesului Oponent</strong>. Atunci când creierul experimentează o senzație intensă artificială (Procesul A), declanșează imediat un contra-răspuns biologic pentru a coborî sistemul (Procesul B). La început, Procesul A este puternic, iar Procesul B este slab. Dar, în timp, creierul învață. El anticipează creșterea nenaturală și întărește Procesul B. În cele din urmă, euforia dispare complet, iar consumatorul ajunge să ia substanța doar pentru a opri Procesul B — consumând doar pentru a se simți „normal”, doar pentru a potoli oscilația chinuitoare a pendulului.</p>

<h3>Nivelul de Bază al Dopaminei: Un Cont Bancar Falimentat</h3>
<p>Dopamina este adesea înțeleasă greșit ca fiind substanța chimică a „plăcerii”, dar ea este de fapt molecula <em>motivației și a dorinței</em>. Este combustibilul care ne determină să căutăm recompensele vieții, cum ar fi o îmbrățișare caldă, o masă bună sau o conversație plină de sens.</p>

<p>Când o substanță inundă creierul cu un tsunami de dopamină, creierul se protejează scăzând volumul. El reduce numărul de receptori activi de dopamină (în special receptorii D2). Imaginați-vă că ieșiți dintr-un cinematograf întunecat direct în soarele orbitor al amiezii — ochii vi se strâng imediat pentru a bloca lumina copleșitoare. Creierul face exact același lucru cu dopamina.</p>

<p>Deoarece nivelul de bază a fost redus drastic, bucuriile de zi cu zi nu mai sunt înregistrate. Culoarea este ștearsă din lume. Un apus de soare frumos, râsul unui prieten, un hobby preferat — niciunul dintre acestea nu produce suficientă dopamină pentru a fi simțit de receptorii proaspăt amorțiți.</p>

<p>Înțelegerea legii compensației ne readuce cu picioarele pe pământ, dar ne și împuternicește. Ne amintește că fiecare vârf artificial de plăcere este un împrumut luat cu dobânzi astronomice, plătit cu fericirea de mâine. Dar dedicarea creierului pentru echilibru este și mecanismul salvării. Prin abstinență și timp, creierul își redeschide încet receptorii de dopamină. Pendulul se stabilizează. Registrul contabil se echilibrează. Bucuriile simple, autentice ale vieții pot fi din nou simțite profund.</p>
`,
    enTitle: "The Brain's Ledger: Homeostasis and the Law of Compensation",
    enBody: `
<p>The human brain is the ultimate accountant. It keeps meticulous track of every emotional and chemical transaction, constantly striving for a state of perfect balance known as <em>homeostasis</em>. When we introduce powerful, artificial spikes of pleasure into the system, the brain's accounting department steps in to balance the ledger. This is the unyielding law of neurobiological compensation.</p>

<h3>The Pendulum of Pleasure and Pain</h3>
<p>Imagine a heavy pendulum at rest—this is your brain in equilibrium. When you use an addictive substance, you forcefully push the pendulum high into the realm of intense pleasure. But the laws of physics, much like the laws of biology, dictate that the pendulum cannot stay there. Gravity pulls it back, and momentum swings it equally far in the opposite direction—into the realm of pain, anxiety, and depression.</p>

<p>In neurobiology, this is known as the <strong>Opponent-Process Theory</strong>. When the brain experiences an intense artificial high (Process A), it immediately triggers a biological counter-response to bring the system down (Process B). At first, Process A is strong and Process B is weak. But over time, the brain learns. It anticipates the unnatural high and strengthens Process B. Eventually, the euphoria disappears entirely, and the user is left taking the substance merely to stop Process B—using just to feel "normal," just to quiet the agonizing swing of the pendulum.</p>

<h3>The Dopamine Baseline: A Bankrupt Account</h3>
<p>Dopamine is often misunderstood as the "pleasure" chemical, but it is actually the molecule of <em>motivation and desire</em>. It is the fuel that drives us to seek out life's rewards, like a warm hug, a good meal, or a meaningful conversation.</p>

<p>When a substance floods the brain with a tsunami of dopamine, the brain protects itself by turning down the volume. It reduces the number of active dopamine receptors (specifically D2 receptors). Imagine walking out of a dark movie theater into the blinding midday sun—your eyes immediately squint and constrict to block out the overwhelming light. The brain does the exact same thing to dopamine.</p>

<p>Because the baseline has been drastically lowered, everyday joys no longer register. The color is drained from the world. A beautiful sunset, a friend's laughter, a favorite hobby—none of these produce enough dopamine to be felt by the newly numbed receptors.</p>

<p>Understanding the law of compensation is both sobering and empowering. It reminds us that every artificial high is a loan taken with astronomical interest rates, paid back with tomorrow's happiness. But the brain's dedication to balance is also the mechanism of salvation. Through abstinence and time, the brain slowly reopens its dopamine receptors. The pendulum settles. The accounting ledger balances. The simple, authentic joys of life become deeply felt once again.</p>
`
  },
  {
    path: 'substances/alcohol',
    theme: 'alcohol',
    color: '#1e3a8a',
    roTitle: 'Alcoolul: Barosul Chimic și Dizolvarea Egoului',
    roBody: `
<p>Dintre toate substanțele pe care oamenii le-au folosit pentru a-și altera conștiința, alcoolul este cea mai veche și mai larg acceptată. Dar, din punct de vedere biologic, alcoolul nu este un bisturiu; este un baros chimic. În timp ce alte substanțe vizează receptori foarte specifici din creier cu precizie de laser, alcoolul pur și simplu inundă sistemul, lovind puternic multiple rețele simultan pentru a-și atinge efectul.</p>

<h3>Pedala de Frână și Pedala de Accelerație a Creierului</h3>
<p>Pentru a înțelege alcoolul, trebuie să înțelegeți doi neurotransmițători cheie: GABA și Glutamatul. Gândiți-vă la GABA ca la pedala de frână a creierului, care încetinește lucrurile și promovează relaxarea. Glutamatul este pedala de accelerație, responsabilă pentru excitație și activitatea cerebrală rapidă.</p>

<p>Când beți alcool, acesta apasă puternic pe pedala de frână GABA și, simultan, taie firul pedalei de accelerație a Glutamatului. Rezultatul este o decelerare profundă, artificială, a sistemului nervos central. În același timp, alcoolul declanșează eliberarea de endorfine — analgezicele naturale ale creierului. Această combinație creează o fortăreață puternică, temporară, împotriva durerii emoționale și fizice.</p>

<h3>Dizolvarea Artificială a Egoului</h3>
<p>Din punct de vedere filosofic, atracția alcoolului constă în capacitatea sa de a dizolva egoul. Egoul este simțul nostru de sine, criticul nostru interior, vocea care se îngrijorează de modul în care suntem percepuți. Pe măsură ce alcoolul oprește cortexul prefrontal — zona creierului responsabilă pentru gândirea complexă și auto-monitorizare — criticul interior adoarme.</p>

<p>Pentru un scurt și strălucitor moment, zidurile anxietății se prăbușesc. Ne simțim profund conectați, despovărați și liberi. Dar aceasta este o libertate împrumutată. Este obținută nu prin transcenderea egoului prin evoluție personală, ci prin paralizarea chimică a funcțiilor superioare ale creierului.</p>

<h3>Prețul pe Termen Lung: Costul Structural</h3>
<p>Folosirea unui baros pentru a dărâma un zid de anxietate funcționează, dar dacă îl balansați suficient de des, începeți să deteriorați integritatea structurală a casei. În timp, creierul ripostează împotriva suprimării alcoolului prin eliminarea receptorilor GABA și construirea mai multor receptorori de Glutamat. Acest lucru lasă consumatorul cronic într-o stare de hiperexcitabilitate și anxietate intensă atunci când este treaz.</p>

<p>Mai mult, abuzul de alcool pe termen lung duce la „miopie temporală” — o micșorare literală a lobilor frontali care face aproape imposibilă anticiparea consecințelor viitoare, prinzând persoana în prezentul imediat. Prețul pentru dizolvarea temporară a egoului este erodarea treptată a sinelui. Adevărata pace nu vine din paralizarea minții, ci din vindecarea ei.</p>
`,
    enTitle: 'Alcohol: The Chemical Sledgehammer and the Dissolution of Ego',
    enBody: `
<p>Of all the substances humans have used to alter their consciousness, alcohol is the oldest and most widely accepted. But biologically speaking, alcohol is not a scalpel; it is a chemical sledgehammer. While other substances target very specific receptors in the brain with laser precision, alcohol simply floods the system, bludgeoning multiple networks at once to achieve its effect.</p>

<h3>The Brain's Brake Pedal and the Gas Pedal</h3>
<p>To understand alcohol, you must understand two key neurotransmitters: GABA and Glutamate. Think of GABA as the brain's brake pedal, slowing things down and promoting relaxation. Glutamate is the gas pedal, responsible for excitement and fast brain activity.</p>

<p>When you drink alcohol, it heavily pushes down on the GABA brake pedal and simultaneously cuts the wire to the Glutamate gas pedal. The result is a profound, artificial deceleration of the central nervous system. At the same time, alcohol triggers the release of endorphins—the brain's natural painkillers. This combination creates a powerful, temporary fortress against emotional and physical pain.</p>

<h3>The Artificial Dissolution of Ego</h3>
<p>Philosophically, alcohol's appeal lies in its ability to dissolve the ego. The ego is our sense of self, our inner critic, the voice that worries about how we are perceived. As alcohol shuts down the prefrontal cortex—the area of the brain responsible for complex thought and self-monitoring—the inner critic falls asleep.</p>

<p>For a brief, shining moment, the walls of anxiety come tumbling down. We feel deeply connected, unburdened, and free. But this is a borrowed freedom. It is achieved not by transcending the ego through growth, but by chemically paralyzing the higher functions of the brain.</p>

<h3>The Long-Term Price: The Structural Toll</h3>
<p>Using a sledgehammer to knock down a wall of anxiety works, but if you swing it often enough, you start to damage the structural integrity of the house. Over time, the brain fights back against alcohol's suppression by removing GABA receptors and building more Glutamate receptors. This leaves the chronic drinker in a state of hyperexcitability and intense anxiety when sober.</p>

<p>Furthermore, long-term alcohol abuse leads to "temporal myopia"—a literal shrinking of the frontal lobes that makes it nearly impossible to see future consequences, trapping the person in the immediate present. The price for temporarily dissolving the ego is the gradual erosion of the self. True peace comes not from paralyzing the mind, but from healing it.</p>
`
  },
  {
    path: 'substances/cannabis',
    theme: 'cannabis',
    color: '#059669',
    roTitle: 'Canabisul: Vopseaua Curcubeu și Iluzia Profunzimii',
    roBody: `
<p>Canabisul este adesea privit printr-o lentilă a inocenței. Este planta blândă, un filtru moale aplicat peste realitate, care face ca muzica să sune mai bine, mâncarea să aibă un gust mai bogat, iar conversațiile să pară infinit de profunde. Dacă alcoolul este un baros, canabisul este o cutie de vopsea curcubeu strălucitoare aruncată pe pânza banală a vieții de zi cu zi. Dar, pentru a înțelege adevăratul său impact, trebuie să privim modul în care această vopsea alterează busola internă a creierului.</p>

<h3>Deturnarea Rețelei de Saliență</h3>
<p>Creierul uman produce propria versiune naturală de canabis, o moleculă delicată numită <em>anandamidă</em> (botezată după cuvântul sanscrit pentru „beatitudine”). Anandamida se leagă de receptorii CB1 pentru a ajuta la reglarea dispoziției, a memoriei și a apetitului. Ea evidențiază blând lucrurile din mediul nostru care sunt importante pentru supraviețuire și bunăstare.</p>

<p>Când o persoană consumă THC (compusul activ din canabis), acesta inundă acești receptori CB1 cu o forță incredibilă. El deturnează practic „rețeaua de saliență” a creierului — sistemul care decide ce este important și ce nu. Dintr-o dată, o simplă felie de pizza, un gând aleatoriu sau un perete gol devin cele mai fascinante și profunde lucruri din univers. Canabisul aplică în mod artificial sentimentul de „sens” asupra oricărui lucru pe care îl atinge.</p>

<h3>Filosofia Vopselei Curcubeu</h3>
<p>Capcana filosofică a canabisului constă în această fascinație nemeritată. Într-o stare de luciditate, trebuie să ne angajăm în activități pline de sens, uneori dificile — cum ar fi crearea de artă, construirea de relații sau explorarea naturii — pentru a simți un sentiment de minunare profundă. Canabisul oferă o scurtătură. Îți permite să stai pe o canapea și să simți exact același sentiment de minunare fără a depune niciun efort real.</p>

<p>Îți pictezi realitatea cu culori frumoase, dar de fapt nu construiești nimic nou. De ce să urci pe un munte când să te uiți la un ecran de televizor se simte la fel de maiestuos? Acest lucru creează o iluzie subtilă, dar periculoasă: sentimentul că trăiești o viață profundă și bogată, în timp ce, de fapt, rămâi complet stagnant.</p>

<h3>Sindromul Amotivațional și Lumea Gri</h3>
<p>Creierul, căutând mereu echilibrul, răspunde la această hiper-stimulare constantă prin reducerea (eliminarea) receptorilor CB1. În timp, vopseaua curcubeu se usucă. Acest lucru duce la ceea ce neurobiologii numesc <em>Sindrom Amotivațional</em> — o tocire profundă a dopaminei și o pierdere a motivației naturale.</p>

<p>Când consumatorul cronic de canabis este treaz, lumea nu mai pare normală; pare imposibil de gri și plictisitoare. Deoarece receptorii necesari pentru a simți minunarea naturală au fost epuizați, individul își pierde interesul pentru obiectivele, hobby-urile și pasiunile sale. El este forțat să se întoarcă la substanță nu pentru a atinge o stare de euforie, ci pur și simplu pentru a readuce culoarea într-o lume care s-a estompat în alb-negru. Adevărata vitalitate a vieții provine din participarea activă, nu din observația chimică.</p>
`,
    enTitle: 'Cannabis: The Rainbow Paint and the Illusion of Depth',
    enBody: `
<p>Cannabis is often viewed through a lens of innocence. It is the gentle herb, a soft filter over reality that makes music sound better, food taste richer, and conversations feel endlessly profound. If alcohol is a sledgehammer, cannabis is a can of glowing rainbow paint splashed across the mundane canvas of everyday life. But to understand its true impact, we must look at how this paint alters the brain's internal compass.</p>

<h3>Hijacking the Salience Network</h3>
<p>The human brain produces its own natural version of cannabis, a delicate molecule called <em>anandamide</em> (named after the Sanskrit word for "bliss"). Anandamide binds to CB1 receptors to help regulate mood, memory, and appetite. It gently highlights things in our environment that are important for survival and well-being.</p>

<p>When a person consumes THC (the active compound in cannabis), it floods these CB1 receptors with incredible force. It essentially hijacks the brain's "salience network"—the system that decides what is important and what is not. Suddenly, a basic slice of pizza, a random thought, or a blank wall becomes the most fascinating, profound thing in the universe. Cannabis artificially applies the feeling of "meaning" to everything it touches.</p>

<h3>The Philosophy of the Rainbow Paint</h3>
<p>The philosophical trap of cannabis lies in this unearned fascination. In a sober state, we must engage in meaningful, sometimes difficult activities—like creating art, building relationships, or exploring nature—to feel a sense of profound wonder. Cannabis offers a shortcut. It allows you to sit on a couch and feel the exact same sense of wonder without doing any of the actual work.</p>

<p>You are painting your reality with beautiful colors, but you are not actually building anything new. Why climb a mountain when staring at a television screen feels just as majestic? This creates a subtle but dangerous illusion: the feeling of living a deep, rich life while actually remaining entirely stagnant.</p>

<h3>Amotivational Syndrome and the Grey World</h3>
<p>The brain, always seeking balance, responds to this constant hyper-stimulation by down-regulating (removing) CB1 receptors. Over time, the rainbow paint runs dry. This leads to what neurobiologists call <em>Amotivational Syndrome</em>—a profound blunting of dopamine and a loss of natural drive.</p>

<p>When the heavy cannabis user is sober, the world no longer looks normal; it looks impossibly grey and boring. Because the receptors required to feel natural wonder have been depleted, the individual loses interest in their goals, hobbies, and passions. They are forced to return to the substance not to reach a high, but simply to put the color back into a world that has faded to black and white. True vibrancy in life comes from active participation, not chemical observation.</p>
`
  },
  {
    path: 'substances/stimulants',
    theme: 'stimulants',
    color: '#0284c7', 
    roTitle: 'Stimulentele: Raza Laser și Iluzia Divinității',
    roBody: `
<p>Dacă alcoolul este un baros, iar canabisul o cutie de vopsea curcubeu, stimulentele precum cocaina, amfetaminele și MDMA sunt lasere orbitoare. Ele preiau toată energia naturală, motivația și bucuria creierului și le concentrează într-un singur punct arzător de intensitate. Dar această lumină strălucitoare arde incredibil de fierbinte și lasă în urmă un peisaj pârjolit.</p>

<h3>Furtuna de Dopamină și Epuizarea Serotoninei</h3>
<p>În mod normal, neurotransmițătorii precum dopamina (motivația) și serotonina (bunăstarea) sunt eliberați în picături atent măsurate. Stimulentele rup barajul. Cocaina blochează sistemul de reciclare al creierului, făcând ca dopamina să se acumuleze și să se amplifice în sinapse. MDMA (Ecstasy) merge un pas mai departe, forțând creierul să-și descarce întreaga rezervă de serotonină dintr-odată.</p>

<p>Rezultatul este o furtună neurobiologică. Consumatorul simte un val copleșitor de încredere, energie și iubire. Cu toate acestea, creierul nu este conceput să facă față acestui voltaj. Eliberarea masivă a acestor substanțe chimice creează un stres oxidativ sever — practic, ruginind și deteriorând axonii fragili ai neuronilor serotoninergici.</p>

<h3>Filosofia Urgenței False</h3>
<p>Din punct de vedere filosofic, stimulentele creează iluzia divinității. Ele injectează consumatorului un profund sentiment de „Urgență Falsă”. Dintr-o dată, fiecare gând pare o sclipire de geniu, fiecare conversație pare un eveniment istoric, iar fiecare acțiune pare de o importanță critică.</p>

<p>Dar această claritate este arogantă și goală. Este un truc al neurochimiei. Consumatorul simte că se mișcă cu viteza luminii, dar, în realitate, el patinează în gol, arzând cantități imense de combustibil fără a avansa de fapt.</p>

<h3>Arderea Casei pentru a te Încălzi</h3>
<p>Prețul biologic al laserului este o epuizare catastrofală. Deoarece rezervele de dopamină și serotonină ale creierului au fost complet secătuite, zilele care urmează consumului de stimulente sunt adesea caracterizate de o depresie profundă, zdrobitoare. Lumea pare lipsită de sens.</p>

<p>Folosirea stimulentelor este ca și cum ți-ai da foc la casă pentru a te încălzi o singură noapte. Da, focul este luminos și căldura este intensă, dar când vine dimineața, rămâi stând în cenușa propriei tale minți. Vindecarea necesită abstinență pe termen lung pentru a permite acestor rețele neuronale delicate să-și refacă încet rezervele epuizate.</p>
`,
    enTitle: 'Stimulants: The Laser Beam and the Illusion of Godhood',
    enBody: `
<p>If alcohol is a sledgehammer and cannabis is a can of rainbow paint, stimulants like cocaine, amphetamines, and MDMA are blinding lasers. They take all of the brain's natural energy, motivation, and joy, and focus it into a single, searing point of intensity. But this brilliant light burns incredibly hot, and it leaves behind a scorched landscape.</p>

<h3>The Dopamine Storm and Serotonin Depletion</h3>
<p>Normally, neurotransmitters like dopamine (motivation) and serotonin (well-being) are released in carefully measured drops. Stimulants break the dam. Cocaine blocks the brain's recycling system, causing dopamine to pool and amplify in the synapses. MDMA (Ecstasy) goes a step further, forcing the brain to dump its entire reserve of serotonin all at once.</p>

<p>The result is a neurobiological storm. The user feels an overwhelming surge of confidence, energy, and love. However, the brain is not designed to handle this voltage. The massive release of these chemicals creates severe oxidative stress—literally rusting and damaging the fragile axons of serotonergic neurons.</p>

<h3>The Philosophy of False Urgency</h3>
<p>Philosophically, stimulants create the illusion of godhood. They inject the user with a profound sense of "False Urgency." Suddenly, every thought feels like a stroke of genius, every conversation feels like a historic event, and every action feels critically important.</p>

<p>But this clarity is arrogant and hollow. It is a trick of the neurochemistry. The user feels like they are moving at the speed of light, but in reality, they are spinning their wheels, burning immense amounts of fuel without actually moving forward.</p>

<h3>Burning the House to Keep Warm</h3>
<p>The biological price of the laser is catastrophic depletion. Because the brain's reserves of dopamine and serotonin have been completely drained, the days following stimulant use are often characterized by profound, crushing depression. The world feels devoid of meaning.</p>

<p>Using stimulants is like burning down your own house to keep warm for a single night. Yes, the fire is bright and the heat is intense, but when the morning comes, you are left standing in the ashes of your own mind. Healing requires long-term abstinence to allow these delicate neural networks to slowly rebuild their depleted reserves.</p>
`
  },
  {
    path: 'recovery',
    theme: 'recovery',
    color: '#059669',
    roTitle: 'Algoritmul Recuperării: Neuroplasticitatea și Puterea Conexiunii',
    roBody: `
<p>Recuperarea din dependență este adesea romantizată ca o trezire spirituală bruscă, dar, în realitate, este un algoritm biologic și psihologic. Este un proces constant, repetitiv și profund curajos de recablare a unui sistem nervos deteriorat. Creierul, în mod minunat, nu este sculptat în piatră; este complet maleabil.</p>

<h3>Neuroplasticitatea: Recablarea Mașinăriei</h3>
<p>Regula fundamentală a neuroștiinței este: <em>Neuronii care se activează împreună, se conectează împreună</em>. În timpul dependenței active, căile asociate cu căutarea și consumul substanței devin autostrăzi masive, de mare viteză în creier. Între timp, căile pentru bucuria naturală, reglarea emoțională și controlul impulsurilor se ofilesc ca niște drumuri de pământ neasfaltate.</p>

<p>Recuperarea este procesul de inversare a acestui trafic. Acest lucru se numește <em>neuroplasticitate</em>. De fiecare dată când o persoană simte o poftă și alege să nu consume, ea înfometează efectiv autostrada dependenței de trafic și toarnă asfalt proaspăt pe calea autocontrolului. Faimoasa mantră „O zi la rând” nu este doar un slogan atrăgător; este exact intervalul de timp neurobiologic necesar pentru a reconstrui teaca de mielină în jurul neuronilor sănătoși.</p>

<h3>Conexiunea ca Antidot</h3>
<p>Jurnalistul Johann Hari a observat profund: „Opusul dependenței nu este abstinența; este conexiunea”. Dependența prosperă în izolare și secret. Îi spune individului că este stricat, de neiubit și complet singur.</p>

<p>Biologic, conexiunea umană eliberează oxitocină, un hormon puternic care reduce direct reacțiile de frică din amigdală și calmează sistemul nervos. Când suntem profund văzuți, auziți și acceptați de alții, creierul nostru primește semnalul suprem de siguranță. Alarma internă de incendiu a traumei se oprește în sfârșit.</p>

<h3>Plantarea unei Păduri</h3>
<p>Recuperarea este ca plantarea unei păduri. Nu poți forța un copac să crească peste noapte pur și simplu țipând la el. Dar dacă oferi algoritmul corect — dacă uzi solul în fiecare zi, te asiguri că primește lumina soarelui și îl protejezi de dăunători — pădurea se va întoarce inevitabil. Creierul se va vindeca. Receptorii vor crește la loc. Tot ce este nevoie este curajul de a menține direcția, o zi la rând, susținut de puterea comunității.</p>
`,
    enTitle: 'The Recovery Algorithm: Neuroplasticity and the Power of Connection',
    enBody: `
<p>Recovery from addiction is often romanticized as a sudden spiritual awakening, but in reality, it is a biological and psychological algorithm. It is a steady, repetitive, and deeply courageous process of rewiring a damaged nervous system. The brain, wonderfully, is not set in stone; it is entirely malleable.</p>

<h3>Neuroplasticity: Rewiring the Machinery</h3>
<p>The foundational rule of neuroscience is: <em>Neurons that fire together, wire together</em>. During active addiction, the pathways associated with seeking and consuming the substance become massive, high-speed highways in the brain. Meanwhile, the pathways for natural joy, emotional regulation, and impulse control wither away like unpaved dirt roads.</p>

<p>Recovery is the process of reversing this traffic. This is called <em>neuroplasticity</em>. Every time a person feels a craving and chooses not to use, they are literally starving the addiction highway of traffic and laying down new asphalt on the path of self-control. The famous mantra "One day at a time" is not just a catchy slogan; it is the exact neurobiological timeframe required to rebuild the myelin sheath around healthy neurons.</p>

<h3>Connection as the Antidote</h3>
<p>Journalist Johann Hari profoundly noted, "The opposite of addiction is not sobriety; it is connection." Addiction thrives in isolation and secrecy. It tells the individual that they are broken, unlovable, and completely alone.</p>

<p>Biologically, human connection releases oxytocin, a powerful hormone that directly reduces the fear responses in the amygdala and calms the nervous system. When we are deeply seen, heard, and accepted by others, our brain receives the ultimate safety signal. The internal fire alarm of trauma finally turns off.</p>

<h3>Planting a Forest</h3>
<p>Recovery is like planting a forest. You cannot force a tree to grow overnight simply by screaming at it. But if you provide the right algorithm—if you water the soil every single day, ensure it gets sunlight, and protect it from pests—the forest will inevitably return. The brain will heal. The receptors will regrow. All it takes is the courage to stay the course, one day at a time, supported by the strength of the community.</p>
`
  },
  {
    path: 'joy',
    theme: 'joy',
    color: '#d97706',
    roTitle: 'Explozia de Bucurie: Rezonanța, Prezența și Arta de a Prospera',
    roBody: `
<p>Scopul suprem al călătoriei neurobiologice de ieșire din dependență nu este doar de a supraviețui fără substanță. Simpla supraviețuire este o bătălie epuizantă a voinței. Adevărata destinație este explozia de bucurie autentică — o stare în care creierul este atât de profund aliniat cu momentul prezent, încât evadările chimice devin complet irelevante.</p>

<h3>Reducerea la Tăcere a Zgomotului de Fond: Rețeaua Modului Implicit (DMN)</h3>
<p>Într-un creier neliniștit, dependent sau traumatizat, un sistem numit Rețeaua Modului Implicit (Default Mode Network - DMN) este extrem de hiperactiv. Aceasta este partea creierului responsabilă de călătoria în timp: rumegarea trecutului dureros sau obsesia pentru viitorul terifiant. Este vocea unui zgomot de fond intern constant.</p>

<p>Pe măsură ce creierul se vindecă prin recuperare, conexiune și prezență conștientă, DMN începe să se liniștească. În același timp, sistemul nervos parasimpatic (starea de „odihnă și digestie”) devine mai puternic, crescând tonusul vagal. Pentru prima dată după ani de zile, creierului i se permite pur și simplu să <em>fie</em>. Acest lucru creează o stare de sincronizare în oscilațiile neuronale ale creierului. Când zgomotul de fond se disipează, auzi în sfârșit muzica.</p>

<h3>Bunăstarea Eudaimonică vs. Banda de Alergare Hedonică</h3>
<p>Substanțele oferă plăcere <em>hedonică</em> — vârfuri trecătoare de gratificare egoistă care cer mereu mai mult. Dar explozia de bucurie din recuperare se bazează pe bunăstarea <em>eudaimonică</em>. Aceasta este împlinirea profundă, susținută, care provine din sens, scop și auto-actualizare.</p>

<p>Când receptorii tăi de dopamină s-au resetat complet, magia obișnuitului revine. Realizezi că adevărata bucurie nu strigă; ea șoptește. Se găsește în căldura unei cafele de dimineață, în râsul unei persoane dragi, în aerul rece al unei plimbări de iarnă sau în satisfacția profundă de a ajuta pe altcineva.</p>

<h3>Rezonanța cu Viața</h3>
<p>A prospera înseamnă a rezona cu viața însăși. Este conștientizarea faptului că spectrul emoțiilor umane — atât durerea, cât și extazul — este un privilegiu de a fi experimentat pe deplin treaz. Nu mai fugi de umbră și nici nu mai urmărești cu disperare o lumină sintetică. Stai ferm în realitate, complet prezent, fiind martorul exploziei de bucurie care are loc atunci când un suflet uman este, în sfârșit, liber.</p>
`,
    enTitle: 'The Explosion of Joy: Resonance, Presence, and the Art of Thriving',
    enBody: `
<p>The ultimate goal of the neurobiological journey out of addiction is not merely to survive without the substance. Mere survival is an exhausting battle of willpower. The true destination is the explosion of authentic joy—a state where the brain is so deeply aligned with the present moment that chemical escapes become entirely irrelevant.</p>

<h3>Silencing the Static: The Default Mode Network</h3>
<p>In a restless, addicted, or traumatized brain, a system called the Default Mode Network (DMN) is highly overactive. This is the part of the brain responsible for time-traveling: ruminating on the painful past or obsessing over the terrifying future. It is the voice of constant internal static.</p>

<p>As the brain heals through recovery, connection, and mindfulness, the DMN begins to quiet down. At the same time, the parasympathetic nervous system (the "rest and digest" state) grows stronger, increasing vagal tone. For the first time in years, the brain is allowed to simply <em>be</em>. This creates a state of synchronization in the brain's neural oscillations. When the static clears, you finally hear the music.</p>

<h3>Eudaimonic Well-being vs. The Hedonic Treadmill</h3>
<p>Substances offer <em>hedonic</em> pleasure—fleeting spikes of selfish gratification that always require more. But the explosion of joy in recovery is based on <em>eudaimonic</em> well-being. This is the profound, sustained fulfillment that comes from meaning, purpose, and self-actualization.</p>

<p>When your dopamine receptors have fully reset, the magic of the ordinary returns. You realize that true joy does not shout; it whispers. It is found in the warmth of a morning coffee, the laughter of a loved one, the cold air of a winter walk, or the profound satisfaction of helping someone else.</p>

<h3>Resonance with Life</h3>
<p>To thrive is to resonate with life itself. It is the realization that the spectrum of human emotion—both the grief and the ecstasy—is a privilege to experience fully awake. You are no longer running from the shadow, nor are you desperately chasing a synthetic light. You are standing firmly in reality, entirely present, witnessing the explosion of joy that happens when a human soul is finally free.</p>
`
  }
];

function getDepthPrefix(pth) {
  const depth = pth.split('/').length;
  return depth === 1 ? '../' : '../../';
}

pages.forEach(p => {
  // RO Version
  const roDir = path.join(appPath, 'showcase/neuro-recovery', p.path);
  fs.mkdirSync(roDir, { recursive: true });
  
  const compPrefix = getDepthPrefix(p.path);

  const roContent = `import ArticleLayout from "${compPrefix}components/ArticleLayout";

export default function Page() {
  return (
    <ArticleLayout themeName="${p.theme}" accentColor="${p.color}">
      <h1>${p.roTitle}</h1>
      ${p.roBody}
    </ArticleLayout>
  );
}
`;
  fs.writeFileSync(path.join(roDir, 'page.tsx'), roContent);

  // EN Version
  const enDir = path.join(appPath, 'en/showcase/neuro-recovery', p.path);
  fs.mkdirSync(enDir, { recursive: true });

  const enContent = `import ArticleLayoutEN from "${compPrefix}components/ArticleLayout";

export default function Page() {
  return (
    <ArticleLayoutEN themeName="${p.theme}" accentColor="${p.color}">
      <h1>${p.enTitle}</h1>
      ${p.enBody}
    </ArticleLayoutEN>
  );
}
`;
  fs.writeFileSync(path.join(enDir, 'page.tsx'), enContent);
});

console.log('Successfully generated all pages!');
