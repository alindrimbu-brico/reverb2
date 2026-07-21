export interface QuoteType {
  text: string;
  author: string;
}

export interface DiagnosticDetail {
  stateName: string;
  explanation: string;
  graphType: string;
  graphExplanation: string;
  advice: string;
}

export type Locale = "ro" | "en" | "es" | "pt" | "ru" | "zh";

export const homeostasisQuotes: Record<Locale, QuoteType[]> = {
  ro: [
    { text: "Trauma nu este ceea ce ți se întâmplă ție. Trauma este ceea ce se întâmplă în interiorul tău ca rezultat a ceea ce ți s-a întâmplat.", author: "Dr. Gabor Maté" },
    { text: "Corpul tău ține un scor pe care mintea încearcă să-l ignore. Perturbarea cronică a homeostaziei duce la boală fizică și spirituală.", author: "Dr. Gabor Maté" },
    { text: "Dacă nu poți spune NU, corpul tău o va face pentru tine sub formă de simptom biologic.", author: "Dr. Gabor Maté" },
    { text: "Trauma determină o redirecționare fundamentală a sistemului nervos pentru supraviețuire, sacrificând pacea homeostaziei.", author: "Dr. Bessel van der Kolk" },
    { text: "Homeostazia este starea de armonie biologică. Suprastimularea înseamnă că creierul tranzacționează sănătatea viitoare pentru supraviețuirea din prezent.", author: "Dr. Andrew Huberman" }
  ],
  en: [
    { text: "Trauma is not what happens to you. Trauma is what happens inside you as a result of what happened to you.", author: "Dr. Gabor Maté" },
    { text: "Your body keeps a score that your mind tries to ignore. Chronic disruption of homeostasis leads to physical and spiritual illness.", author: "Dr. Gabor Maté" },
    { text: "If you cannot say NO, your body will do it for you in the form of a biological symptom.", author: "Dr. Gabor Maté" },
    { text: "Trauma causes a fundamental redirection of the nervous system for survival, sacrificing the peace of homeostasis.", author: "Dr. Bessel van der Kolk" },
    { text: "Homeostasis is the state of biological harmony. Overstimulation means the brain is trading future health for present survival.", author: "Dr. Andrew Huberman" }
  ],
  es: [
    { text: "El trauma no es lo que te sucede. El trauma es lo que sucede dentro de ti como resultado de lo que te sucedió.", author: "Dr. Gabor Maté" },
    { text: "Tu cuerpo lleva una cuenta que tu mente intenta ignorar. La alteración crónica de la homeostasis conduce a la enfermedad física y espiritual.", author: "Dr. Gabor Maté" },
    { text: "Si no puedes decir NO, tu cuerpo lo hará por ti en forma de síntoma biológico.", author: "Dr. Gabor Maté" },
    { text: "El trauma causa una redirección fundamental del sistema nervioso para la supervivencia, sacrificando la paz de la homeostasis.", author: "Dr. Bessel van der Kolk" },
    { text: "La homeostasis es el estado de armonía biológica. La sobreestimulación significa que el cerebro intercambia salud futura por supervivencia presente.", author: "Dr. Andrew Huberman" }
  ],
  pt: [
    { text: "O trauma não é o que lhe acontece. O trauma é o que acontece dentro de si como resultado do que lhe aconteceu.", author: "Dr. Gabor Maté" },
    { text: "O seu corpo guarda um registo que a sua mente tenta ignorar. A rutura crónica da homeostase leva a doenças físicas e espirituais.", author: "Dr. Gabor Maté" },
    { text: "Se não consegue dizer NÃO, o seu corpo fá-lo-á por si sob a forma de um sintoma biológico.", author: "Dr. Gabor Maté" },
    { text: "O trauma causa um redirecionamento fundamental do sistema nervoso para a sobrevivência, sacrificando a paz da homeostase.", author: "Dr. Bessel van der Kolk" },
    { text: "A homeostase é o estado de harmonia biológica. A sobreestimulação significa que o cérebro está a trocar a saúde futura pela sobrevivência presente.", author: "Dr. Andrew Huberman" }
  ],
  ru: [
    { text: "Травма — это не то, что происходит с вами. Травма — это то, что происходит внутри вас в результате того, что с вами произошло.", author: "Д-р Габор Матэ" },
    { text: "Ваше тело ведет счет, который ваш разум пытается игнорировать. Хроническое нарушение гомеостаза ведет к физическим и духовным болезням.", author: "Д-р Габор Матэ" },
    { text: "Если вы не можете сказать «НЕТ», ваше тело сделает это за вас в виде биологического симптома.", author: "Д-р Габор Матэ" },
    { text: "Травма вызывает фундаментальную перенастройку нервной системы на выживание, жертвуя покоем гомеостаза.", author: "Д-р Бессел ван дер Колк" },
    { text: "Гомеостаз — это состояние биологической гармонии. Гиперстимуляция означает, что мозг обменивает будущее здоровье на выживание в настоящем.", author: "Д-р Эндрю Хуберман" }
  ],
  zh: [
    { text: "创伤不是发生在你身上的事情。创伤是由于发生在你身上的事情而在你内部发生的事情。", author: "Gabor Maté 博士" },
    { text: "你的身体在记录着分数，而你的大脑却试图忽略它。慢性稳态失衡会导致生理和精神疾病。", author: "Gabor Maté 博士" },
    { text: "如果你不能说“不”，你的身体会以生物学症状的形式替你说出来。", author: "Gabor Maté 博士" },
    { text: "创伤导致神经系统为了生存而进行根本性的重定向，牺牲了稳态的平静。", author: "Bessel van der Kolk 博士" },
    { text: "稳态是生物学和谐的状态。过度刺激意味着大脑正在拿未来的健康来交易现在的生存。", author: "Andrew Huberman 博士" }
  ]
};

export const homeostasisDiagnostics: Record<Locale, ((activeBalance: number, heightA: number, heightB: number) => DiagnosticDetail)> = {
  ro: (activeBalance, heightA, heightB) => {
    if (activeBalance < 0.2) {
      return {
        stateName: "Stare Zen / Dominanță Parasimpatică (Vagotonie)",
        explanation: "Reprezintă activarea profundă a ramurii ventrale mielinizate a nervului vag (Calea Ventro-Vagală), conducând la eliberarea masivă de acetilcolină la nivelul nodului sinoatrial pentru încetinirea controlată a ritmului cardiac. Axa HPA este complet amortizată, permițând refacerea depozitelor de glicogen hepatic, resintetizarea ATP-ului intracelular și normalizarea baseline-ului de tirozin-hidroxilază. Creierul intră în unde Delta și Theta profunde, stări bio-electrice ce facilitează drenajul limfatic cerebral (sistemul glimfatic) și consolidarea memoriei imunologice.",
        graphType: "Graficul de Variabilitate a Ritmului Cardiac (HRV Spectrum)",
        graphExplanation: "O analiză spectrală de tip Fast Fourier Transform (FFT) a oscilațiilor dintre bătăile succesive (intervale R-R), demonstrând o dominanță masivă a puterii în banda de înaltă frecvență (HF: 0.15 - 0.4 Hz), indicatorul matematic direct al tonusului vagal cardiac.",
        advice: "• Respirație de tip 'Physiological Sigh': Efectuați două inspirații rapide pe nas (a doua fiind scurtă și forțată pentru re-expandarea alveolelor), urmate de o expirație lungă, lentă și pasivă pe gură. Repetați de 5 ori.\n• Meditație Transcendentă și Samadhi: Cultivați tăcerea introspectivă absolută, orientând atenția spre pauza naturală din apneea post-expirație.\n• Acțiune (Avertisment): Evitați disocierea emoțională sau letargia. Reactivați-vă prin mișcări somatice conștiente."
      };
    } else if (activeBalance < 0.48) {
      return {
        stateName: "Homeostazie Dinamică (Axa de Liniște Alfa)",
        explanation: "Acesta este standardul de aur al echilibrului allostatic de zi cu zi. Axa hipotalamo-pituitaro-suprarenală (HPA) funcționează într-o buclă perfectă de feedback negativ, menținând secreția de cortisol și ACTH în limite ideale de sănătate. Fuzionarea tonusului simpatic cu cel parasimpatic permite celulelor imunitare să funcționeze optim, suprimând citokinele pro-inflamatorii. Dopamina este eliberată în mod tonic (stabil și constant) din aria tegmentală ventrală (VTA) către nucleul accumbens, prevenind fenomenul de down-regulation al receptorilor D2 și menținând motivația curată, lipsită de pulsiuni adictive.",
        graphType: "Curba de Încărcare Allostatică Zero",
        graphExplanation: "Graficul demonstrează un echilibru energetic perfect (steady-state allostatic), unde energia absorbită din mediu este egală cu energia consumată pentru adaptare, eliminând acumularea uzurii celulare.",
        advice: "• Teoria Afectivă Gabor Maté: Cultivați capacitatea de a recunoaște și exprima emoțiile reprimate (mânia sănăsească). Învățați să spuneți un 'NU' autentic.\n• Sincronizare Circadiană: Expuneți-vă ochii la lumina solară directă în primele 30 de minute de la trezire.\n• Grounding: Practicați contactul direct cu pământul și consolidați legăturile cu o comunitate sigură emoțional (Sangha)."
      };
    } else if (activeBalance >= 0.48 && activeBalance <= 0.52) {
      return {
        stateName: "Punctul Zero (Bifurcația și Co-Activarea Autonomă)",
        explanation: "O stare de echilibru dinamic pur, caracterizată prin co-activarea simultană și simetrică a ramurilor simpatice și parasimpatice. În această axă, amigdala se află într-o stare de vigilență calmă, sub controlul direct și stabil al cortexului prefrontal medial (mPFC). Sistemul cardiovascular prezintă un pattern sinusoidal perfect (coerență cardiacă maximă). Toate resursele bioenergetice sunt pre-mobilizate, organismul fiind pregătit neurofiziologic să se adapteze instantaneu la o acțiune rapidă (simpatică) sau la o relaxare completă (parasimpatică), fără a acumula stres rezidual.",
        graphType: "Diagrama Spațiului de Faze al Atractorilor Autonomi",
        graphExplanation: "Harta de fază indică un atractor punctiform stabil (zero-bias attractor). Este ecuația matematică a adaptabilității maxime, unde variația de stare nu consumă din resursele metabolice de bază.",
        advice: "• Respirație Coerentă: Respirați într-un ritm de 5 secunde pe inspirație și 5 secunde pe expirație.\n• Wu Wei (Acțiune fără Efort): Adoptați starea mentală taoistă a non-atașamentului. Acționați din flux, ghidat de prezență pură.\n• Echilibru Somatic: Faceți pauze scurte de conștientizare corporală pe parcursul zilei."
      };
    } else if (activeBalance > 0.52 && activeBalance < 0.8) {
      return {
        stateName: "Activare Simpatică (Alertă Focalizată / Beta Drive)",
        explanation: "Sistemul nervos simpatic mobilizează resursele energetice prin activarea axei simpato-adreno-medulare (SAM). Locus coeruleus își mărește rata de descărcare, inundând cortexul cu noradrenalină pentru a asigura o viziune focalizată. Glicogenul din ficat este transformat în glucoză circulantă pentru a hrăni mușchii și creierul. Frecvența cardiacă urcă prin stimularea receptorilor beta-1 adrenergici. Dopamina trece de la eliberarea tonică la cea fazică (vârfuri de excitare), generând dorință intensă, productivitate ridicată și focalizare pe recompensă exterioară.",
        graphType: "Curba Răspunsului Acut la Stres și Deplasarea Fazică a Dopaminei",
        graphExplanation: "Harta arată tranziția de la baseline-ul stabil de dopamină la oscilații de frecvență înaltă, reprezentând energia de urmărire a obiectivelor și mobilizarea dinamică a rezervelor de ATP.",
        advice: "• Delimitare Allostatică: Limitați perioadele de efort simpatic la reprize de maximum 90 de minute. Urmați fiecare repriză de cel puțin 10 minute de de-focalizare vizuală.\n• Grounding Somatic: Identificați în spațiu 5 lucruri pe care le vedeți, 4 pe care le puteți atinge, 3 pe care le auziți, 2 pe care le mirosiți și 1 pe care îl gustați.\n• Transmutare Conștientă: Canalizați impulsul adrenergic către creație și muncă focalizată."
      };
    } else {
      return {
        stateName: "Exhaustie HPA & Alertă Toxică (Suprastimulare Cronică)",
        explanation: "Starea de degradare allostatică severă. Receptorii de glucocorticoizi din hipocamp și cortexul prefrontal sunt down-regulați din cauza expunerii prelungite la cortisol, perturbând bucla de oprire a stresului. Amigdala devine hiper-activă și hipertrofiată, interpretând orice stimul ca pe o amenințare. Glutamatul se acumulează în exces în sinapse, declanșând neurotoxicitate și atrofie dendritică. Receptorii de dopamină D2 sunt drastic reduși ca număr, instalând anhedonia de bază (imposibilitatea de a simți plăcere naturală), ceea ce împinge organismul spre consum compulsiv.",
        graphType: "Curba de Supraîncărcare Allostatică și Degradare Sinaptică",
        graphExplanation: "Graficul de saturație arată depășirea limitei de rupere biologică. Nivelul cronic de cortisol a distrus capacitatea de adaptare (allostazie), provocând un colaps în feedback-ul neuro-endocrin.",
        advice: "• Resetare Senzorială Urgentă: Blocați complet stimulii vizuali și auditivi digitali (modul avion, deprivare senzorială în cameră întunecată).\n• Somatic Experiencing: Permiteți corpului să tremure în mod natural pentru a descărca energia de supraviețuire blocată în mușchi.\n• Surrender: Practicați abandonul total al nevoii de control. Acceptați vulnerabilitatea și limitele corpului fizic."
      };
    }
  },
  en: (activeBalance, heightA, heightB) => {
    if (activeBalance < 0.2) {
      return {
        stateName: "Zen State / Parasympathetic Dominance (Vagotonia)",
        explanation: "Represents deep activation of the myelinated ventral branch of the vagus nerve (Ventral Vagal Pathway), leading to a massive release of acetylcholine at the sinoatrial node for controlled heart rate slowing. The HPA axis is completely dampened, allowing recovery of hepatic glycogen, intracellular ATP synthesis, and normalization of tyrosine hydroxylase baseline. The brain enters deep Delta and Theta waves, bio-electric states facilitating cerebral lymphatic drainage (glymphatic system) and consolidation of immunological memory.",
        graphType: "Heart Rate Variability Chart (HRV Spectrum)",
        graphExplanation: "A Fast Fourier Transform (FFT) spectral analysis of oscillations between successive heartbeats (R-R intervals), showing a massive dominance of power in the high-frequency band (HF: 0.15 - 0.4 Hz), the direct mathematical indicator of cardiac vagal tone.",
        advice: "• 'Physiological Sigh' Breathing: Perform two quick inhalations through the nose (the second being short and forced to re-expand pulmonary alveoli), followed by a long, slow, passive exhalation through the mouth. Repeat 5 times.\n• Transcendental Meditation and Samadhi: Cultivate absolute introspective silence, directing attention to the natural pause during post-expiration apnea.\n• Clinical Caution (Warning): Avoid sliding from the active ventral vagal state into dorsal vagal dominance (freeze state, emotional dissociation, chronic lethargy). Gently reactivate through somatic movements or short cold exposure."
      };
    } else if (activeBalance < 0.48) {
      return {
        stateName: "Dynamic Homeostasis (Alpha Calm Axis)",
        explanation: "This is the gold standard of daily allostatic balance. The hypothalamic-pituitary-adrenal (HPA) axis functions in a perfect negative feedback loop, keeping cortisol and ACTH secretion within ideal health limits. Merging sympathetic and parasympathetic tones allows immune cells to function optimally, suppressing pro-inflammatory cytokines. Dopamine is released tonically (stable and constant) from the ventral tegmental area (VTA) to the nucleus accumbens, preventing down-regulation of D2 receptors and maintaining clean motivation free from addictive cravings.",
        graphType: "Zero Allostatic Load Curve",
        graphExplanation: "The graph demonstrates a perfect energy balance (steady-state allostasis), where energy absorbed from the environment equals the energy consumed for adaptation, eliminating the accumulation of cellular wear and tear.",
        advice: "• Gabor Maté Affective Theory: Cultivate the ability to recognize and express repressed emotions (healthy anger). Learn to say an authentic 'NO' to those around you so that your body does not have to say 'NO' in the form of autoimmune disease or chronic fatigue.\n• Circadian Synchronization: Expose your eyes to direct sunlight within the first 30 minutes of waking to generate the natural morning cortisol pulse.\n• Grounding and Co-Regulation: Practice direct physical contact with the earth and strengthen connections with an emotionally safe community (Sangha), essential for automatic co-regulation via mirror neurons."
      };
    } else if (activeBalance >= 0.48 && activeBalance <= 0.52) {
      return {
        stateName: "Zero Point (Bifurcation and Autonomous Co-Activation)",
        explanation: "A state of pure dynamic balance, characterized by simultaneous and symmetric co-activation of sympathetic and parasympathetic branches. In this axis, the amygdala is in a state of calm alertness, under the direct and stable control of the medial prefrontal cortex (mPFC). The cardiovascular system presents a perfect sinusoidal pattern (maximum cardiac coherence). All bioenergetic resources are pre-mobilized, the organism being neurophysiologically prepared to adapt instantly to rapid action (sympathetic) or complete relaxation (parasympathetic) without accumulating residual stress.",
        graphType: "Phase Space Diagram of Autonomous Attractors",
        graphExplanation: "The phase map indicates a stable point attractor (zero-bias attractor). It is the mathematical equation of maximum adaptability, where state variation does not consume baseline metabolic resources.",
        advice: "• Resonance Frequency Breathing: Breathe at a rate of 5 seconds on inhalation and 5 seconds on exhalation (approximately 6 breaths per minute). This rhythm activates the natural pulmonary resonator and stabilizes blood pressure.\n• Wu Wei (Effortless Action): Adopt the Taoist mental state of non-attachment. Act from flow, guided by pure presence, not anxious fears or egoic ambitions.\n• Somatic Balance: Take short body awareness breaks throughout the day to realign your center of gravity and calm the activity of the anterior cingulate cortex."
      };
    } else if (activeBalance > 0.52 && activeBalance < 0.8) {
      return {
        stateName: "Sympathetic Activation (Focused Alertness / Beta Drive)",
        explanation: "The sympathetic nervous system mobilizes energy resources by activating the sympatho-adreno-medullary (SAM) axis. The locus coeruleus increases its firing rate, flooding the cortex with norepinephrine to ensure focused vision (selective attention on target). Glycogen in the liver is converted to circulating glucose to feed muscles and the brain. Heart rate rises through stimulation of beta-1 adrenergic receptors. Dopamine shifts from tonic to phasic release (peaks of excitement), generating intense desire, high productivity, and focus on external rewards.",
        graphType: "Acute Stress Response Curve & Phasic Dopamine Shift",
        graphExplanation: "The map shows the transition from a stable baseline of dopamine to high-frequency oscillations, representing goal-seeking energy and dynamic mobilization of ATP reserves.",
        advice: "• Allostatic Delimitation: Limit periods of sympathetic effort to maximum 90-minute bouts (ultradian cycles). Follow each bout with at least 10 minutes of visual de-focusing (looking into the distance, walking without screens).\n• Quick Somatic Grounding (5-4-3-2-1 Technique): Identify in your space 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste to anchor the brain in reality.\n• Conscious Transmutation (Karma Yoga): Channel the adrenergic impulse towards creation and focused work, without letting pressure degenerate into irritability or performance anxiety."
      };
    } else {
      return {
        stateName: "HPA Exhaustion & Toxic Alert (Chronic Overstimulation)",
        explanation: "A state of severe allostatic overload. Glucocorticoid receptors in the hippocampus and prefrontal cortex are down-regulated due to prolonged exposure to cortisol, disrupting the stress shut-off loop. The amygdala becomes hyperactive and hypertrophied, interpreting any stimulus as a threat. Excess glutamate accumulates in synapses, triggering neurotoxicity and dendritic atrophy. Dopamine D2 receptors are drastically reduced in number, installing baseline anhedonia (inability to feel natural pleasure), which drives the body towards compulsive consumption.",
        graphType: "Allostatic Overload and Synaptic Degradation Curve",
        graphExplanation: "The saturation graph shows the breach of biological limits. The chronic level of cortisol has destroyed the capacity for adaptation (allostasis), causing a collapse in neuro-endocrine feedback.",
        advice: "• Urgent Sensory Reset: Block all digital visual and auditory stimuli (airplane mode, sensory deprivation in a dark room). Supplement under clinical guidance with adaptogens (Ashwagandha KSM-66, Magnesium L-Threonate).\n• Somatic Experiencing (Dr. Peter Levine Therapy): Allow the body to shake naturally to discharge survival energy trapped in muscles.\n• Radical Spiritual Surrender: Practice total surrender of the need for control. Accept the vulnerability and limits of the physical body as the sacred temple of consciousness."
      };
    }
  },
  es: (activeBalance, heightA, heightB) => {
    if (activeBalance < 0.2) {
      return {
        stateName: "Estado Zen / Dominancia Parasimpática (Vagotonía)",
        explanation: "Representa la activación profunda de la rama ventral mielinizada del nervio vago (Vía Vagal Ventral), lo que conduce a una liberación masiva de acetilcolina en el nodo sinoauricular para ralentizar de forma controlada el ritmo cardíaco. El eje HPA está completamente atenuado, lo que permite la recuperación del glucógeno hepático, la síntesis de ATP intracelular y la normalización de la tirosina hidroxilasa basal. El cerebro entra en ondas Delta y Theta profundas, estados bioeléctricos que facilitan el drenaje linfático cerebral (sistema glinfático) y la consolidación de la memoria inmunológica.",
        graphType: "Gráfico de variabilidad del ritmo cardíaco (espectro HRV)",
        graphExplanation: "Un análisis espectral de transformada rápida de Fourier (FFT) de las oscilaciones entre latidos cardíacos sucesivos (intervalos R-R), que muestra una dominancia masiva de potencia en la banda de alta frecuencia (HF: 0,15 - 0,4 Hz), el indicador matemático directo del tono vagal cardíaco.",
        advice: "• Respiración de 'Suspiro Fisiológico': Realice dos inhalaciones rápidas por la nariz (la segunda corta y forzada para reexpandir los alvéolos pulmonares), seguidas de una exhalación larga, lenta y pasiva por la boca. Repita 5 veces.\n• Meditación Trascendental y Samadhi: Cultive el silencio introspectivo absoluto, dirigiendo la atención a la pausa natural durante la apnea post-espiración.\n• Precaución clínica (Advertencia): Evite deslizarse del estado vagal ventral activo a la dominancia vagal dorsal. Reactivar suavemente a través de movimientos somáticos o una breve exposición al frío."
      };
    } else if (activeBalance < 0.48) {
      return {
        stateName: "Homeostasis Dinámica (Eje Alfa de Calma)",
        explanation: "Este es el estándar de oro del equilibrio alostático diario. El eje hipotálamo-hipófisis-adrenal (HPA) funciona en un ciclo perfecto de retroalimentación negativa, manteniendo la secreción de cortisol y ACTH dentro de límites de salud ideales. La fusión de los tonos simpático y parasimpático permite que las células inmunitarias funcionen de manera óptima, suprimiendo las citocinas proinflamatorias. La dopamina se libera de forma tónica (estable y constante) desde el área tegmental ventral (VTA) al núcleo accumbens, previniendo la regulación a la baja de los receptores D2 y manteniendo una motivación limpia y libre de antojos adictivos.",
        graphType: "Curva de Carga Alostática Cero",
        graphExplanation: "El gráfico demuestra un equilibrio energético perfecto (alostasis en estado estacionario), donde la energía absorbida del entorno es igual a la energía consumida para la adaptación, eliminando la acumulación de desgaste celular.",
        advice: "• Teoría Afectiva Gabor Maté: Cultive la capacidad de reconocer y expresar las emociones reprimidas (ira sana). Aprenda a decir un 'NO' auténtico para que su cuerpo no tenga que decir 'NO'.\n• Sincronización Circadiana: Exponga sus ojos a la luz solar directa dentro de los primeros 30 minutos al despertar.\n• Conexión a tierra y corregulación: Practique el contacto físico directo con la tierra y fortalezca las conexiones con una comunidad emocionalmente segura (Sangha)."
      };
    } else if (activeBalance >= 0.48 && activeBalance <= 0.52) {
      return {
        stateName: "Punto Cero (Bifurcación y Coactivación Autónoma)",
        explanation: "Un estado de puro equilibrio dinámico, caracterizado por la coactivación simultánea y simétrica de las ramas simpática y parasimpática. En este eje, la amígdala se encuentra en un estado de alerta tranquila, bajo el control directo y estable de la corteza prefrontal medial (mPFC). El sistema cardiovascular presenta un patrón sinusoidal perfecto (máxima coherencia cardíaca). Todos los recursos bioenergéticos están premovilizados, estando el organismo neurofisiológicamente preparado para adaptarse instantáneamente a una acción rápida (simpática) o a una relajación completa (parasimpática) sin acumular estrés residual.",
        graphType: "Diagrama del espacio de fase de los atractores autónomos",
        graphExplanation: "El mapa de fases indica un atractor de punto estable (atractor de sesgo cero). Es la ecuación matemática de máxima adaptabilidad, donde la variación de estado no consume recursos metabólicos basales.",
        advice: "• Respiración de Frecuencia de Resonancia: Respire a un ritmo de 5 segundos de inhalación y 5 segundos de exhalación. Este ritmo activa el resonador pulmonar natural.\n• Wu Wei (Acción sin esfuerzo): Adopte el estado mental taoísta del desapego. Actúe desde el flujo, guiado por la pura presencia.\n• Equilibrio somático: Realice breves pausas de conciencia corporal a lo largo del día."
      };
    } else if (activeBalance > 0.52 && activeBalance < 0.8) {
      return {
        stateName: "Activación Simpática (Alerta Focalizada / Beta Drive)",
        explanation: "El sistema nervioso simpático moviliza recursos energéticos activando el eje simpático-adrenal-medular (SAM). El locus coeruleus aumenta su tasa de disparo, inundando la corteza con norepinefrina para asegurar una visión enfocada. El glucógeno en el hígado se convierte en glucosa circulante para alimentar los músculos y el cerebro. El ritmo cardíaco aumenta a través de la estimulación de los receptores adrenérgicos beta-1. La dopamina cambia de liberación tónica a fásica (picos de excitación), generando un deseo intenso, alta productividad y enfoque en recompensas externas.",
        graphType: "Curva de respuesta al estrés agudo y cambio de dopamina fásica",
        graphExplanation: "El mapa muestra la transición de una línea base de dopamina estable a oscilaciones de alta frecuencia, que representan la energía de búsqueda de objetivos.",
        advice: "• Delimitación Alostática: Limite los períodos de esfuerzo simpático a episodios máximos de 90 minutos. Siga cada episodio con al menos 10 minutos de desenfoque visual.\n• Conexión Somática Rápida: Identifique en su espacio 5 cosas que ve, 4 que puede tocar, 3 que oye, 2 que huele y 1 que prueba.\n• Transmutación consciente: Canalice el impulso adrenérgico hacia la creación y el trabajo enfocado."
      };
    } else {
      return {
        stateName: "Agotamiento HPA y Alerta Tóxica (Sobreestimulación Crónica)",
        explanation: "Un estado de sobrecarga alostática grave. Los receptores de glucocorticoides en el hipocampo y la corteza prefrontal se regulan a la baja debido a la exposición prolongada al cortisol, lo que altera el ciclo de apagado del estrés. La amígdala se vuelve hiperactiva e hipertrofiada, interpretando cualquier estímulo como una amenaza. El exceso de glutamato se acumula en las sinapsis, desencadenando neurotoxicidad y atrofia dendrítica. Los receptores de dopamina D2 se reducen drásticamente en número, instalando anhedonia basal (incapacidad para sentir placer natural).",
        graphType: "Curva de sobrecarga alostática y degradación sináptica",
        graphExplanation: "El gráfico de saturación muestra la ruptura de los límites biológicos. El nivel crónico de cortisol ha destruido la capacidad de adaptación (alostasis).",
        advice: "• Restablecimiento sensorial urgente: Bloquee todos los estímulos visuales y auditivos digitales. Suplemente bajo guía clínica con adaptógenos.\n• Experiencia Somática: Permita que el cuerpo tiemble de forma de descargar la energía de supervivencia atrapada en los músculos.\n• Entrega espiritual radical: Practique la entrega total de la necesidad de control."
      };
    }
  },
  pt: (activeBalance, heightA, heightB) => {
    if (activeBalance < 0.2) {
      return {
        stateName: "Estado Zen / Dominância Parassimpática (Vagotonia)",
        explanation: "Representa a ativação profunda do ramo ventral mielinizado do nervo vago (Via Vagal Ventral), levando a uma libertação massiva de acetilcolina no nó sinoauricular para abrandar o ritmo cardíaco de forma controlada. O eixo HPA está completamente atenuado, permitindo a recuperação do glicogénio hepático, a síntese de ATP intracelular e a normalização da tirosina hidroxilase basal. O cérebro entra em ondas Delta e Theta profundas, estados bioelétricos que facilitam a drenagem linfática cerebral (sistema glinfático) e a consolidação da memória imunológica.",
        graphType: "Gráfico de Variabilidade do Ritmo Cardíaco (Espetro HRV)",
        graphExplanation: "Uma análise espetral de transformada rápida de Fourier (FFT) das oscilações entre batimentos cardíacos sucessivos (intervalos R-R), mostrando uma dominância massiva de potência na banda de alta frequência (HF: 0,15 - 0,4 Hz), o indicador matemático direto do tom vagal cardíaco.",
        advice: "• Respiração de 'Suspiro Fisiológico': Realize duas inalações rápidas pelo nariz (a segunda curta e forçada para reexpandir os alvéolos pulmonares), seguidas de uma exalação longa, lenta e passiva pela boca. Repita 5 vezes.\n• Meditação Transcendental e Samadhi: Cultive o silêncio introspectivo absoluto, direcionando a atenção para a pausa natural durante a apneia pós-expiração.\n• Cuidado Clínico (Aviso): Evite deslizar do estado vagal ventral ativo para a dominância vagal dorsal. Reative suavemente através de movimentos somáticos ou de uma curta exposição ao frio."
      };
    } else if (activeBalance < 0.48) {
      return {
        stateName: "Homeostase Dinâmica (Eixo Alfa de Calma)",
        explanation: "Este é o padrão de ouro do equilíbrio alostático diário. O eixo hipotálamo-hipófise-adrenal (HPA) funciona num ciclo perfeito de retroalimentação negativa, mantendo a secreção de cortisol e ACTH dentro de limites de saúde ideais. A fusão dos tons simpático e parassimpático permite que as células imunitárias funcionem de forma ideal, suprimindo as citocinas pró-inflamatórias. A dopamina é libertada de forma tónica (estável e constante) da área tegmentar ventral (VTA) para o núcleo accumbens, prevenindo a regulação negativa dos receptores D2 e mantendo uma motivação limpa, livre de desejos aditivos.",
        graphType: "Curva de Carga Alostática Zero",
        graphExplanation: "O gráfico demonstra um equilíbrio energético perfeito (alostase em estado estacionário), onde a energia absorvida do ambiente é igual à energia consumida para a adaptação, eliminando a acumulação de desgaste celular.",
        advice: "• Teoria Afetiva Gabor Maté: Cultive a capacidade de reconhecer e expressar as emoções reprimidas (raiva saudável). Aprenda a dizer um 'NÃO' autêntico para que o seu corpo não tenha de dizer 'NÃO'.\n• Sincronização Circadiana: Exponha os seus olhos à luz solar direta dentro dos primeiros 30 minutos após acordar.\n• Conexão à Terra e Co-Regulação: Pratique o contacto físico direto com a terra e fortaleça as ligações com uma comunidade emocionalmente segura (Sangha)."
      };
    } else if (activeBalance >= 0.48 && activeBalance <= 0.52) {
      return {
        stateName: "Ponto Zero (Bifurcação e Co-Ativação Autónoma)",
        explanation: "Um estado de puro equilíbrio dinâmico, caracterizado pela co-ativação simultânea e simétrica dos ramos simpático e parassimpático. Neste eixo, a amígdala encontra-se num estado de alerta calmo, sob o controlo direto e estável do córtex pré-frontal medial (mPFC). O sistema cardiovascular apresenta um padrão sinusoidal perfeito (máxima coerência cardíaca). Todos os recursos bioenergéticos estão pré-mobilizados, estando o organismo neurofisiologicamente preparado para se adaptar instantaneamente a uma ação rápida (simpática) ou a um relaxamento completo (parassimpático) sem acumular stress residual.",
        graphType: "Diagrama do espaço de fase dos atractores autónomos",
        graphExplanation: "O mapa de fases indica um atractor de ponto estável (attractor de desvio zero). É a equação matemática de máxima adaptabilidade, onde a variação de estado não consome recursos metabólicos basais.",
        advice: "• Respiração de Frequência de Ressonância: Respire a um ritmo de 5 segundos de inalação e 5 segundos de exalação. Este ritmo ativa o ressonador pulmonar natural.\n• Wu Wei (Ação sem Esforço): Adote o estado mental taoista do desapego. Actue a partir do fluxo, guiado pela pura presença.\n• Equilíbrio Somático: Faça breves pausas de consciência corporal ao longo do dia."
      };
    } else if (activeBalance > 0.52 && activeBalance < 0.8) {
      return {
        stateName: "Ativação Simpática (Alerta Focalizado / Beta Drive)",
        explanation: "O sistema nervoso simpático mobiliza recursos energéticos ativando o eixo simpático-adrenal-medular (SAM). O locus coeruleus aumenta a sua taxa de disparo, inundando o córtex com norepinefrina para assegurar uma visão focada. O glicogénio no fígado é convertido em glicose circulante para alimentar os músculos e o cérebro. O ritmo cardíaco aumenta através da estimulação dos receptores adrenérgicos beta-1. A dopamina muda de libertação tónica para fásica (picos de excitação), gerando um desejo intenso, elevada produtividade e foco em recompensas externas.",
        graphType: "Curva de resposta ao stress agudo e desvio fásico de dopamina",
        graphExplanation: "O mapa mostra a transição de uma linha base estável de dopamina a oscilações de alta frequência, que representam a energia de busca de objetivos.",
        advice: "• Delimitação Alostática: Limite os períodos de esforço simpático a episódios máximos de 90 minutos. Siga cada episódio com pelo menos 10 minutos de desenfoque visual.\n• Conexão Somática Rápida: Identifique no seu espaço 5 coisas que vê, 4 que pode tocar, 3 que ouve, 2 que cheira e 1 que saboreia.\n• Transmutação Consciente: Canalize o impulso adrenérgico para a criação e o trabalho focado."
      };
    } else {
      return {
        stateName: "Esgotamento HPA e Alerta Tóxico (Sobreestimulação Crónica)",
        explanation: "Um estado de sobrecarga alostática grave. Os receptores de glucocorticoides no hipocampo e no córtex pré-frontal são regulados negativamente devido à exposição prolongada ao cortisol, o que perturba o ciclo de encerramento do stress. A amígdala torna-se hiperativa e hipertrofiada, interpretando qualquer estímulo como uma ameaça. O excesso de glutamato acumula-se nas sinapses, desencadeando neurotoxicidade e atrofia dendrítica. Os receptores de dopamina D2 são drasticamente reduzidos em número, instalando anhedonia basal (incapacidade de sentir prazer natural).",
        graphType: "Curva de sobrecarga alostática e degradação sináptica",
        graphExplanation: "O gráfico de saturação mostra a rutura dos limites biológicos. O nível crónico de cortisol destruiu a capacidade de adaptação (alostase).",
        advice: "• Restabelecimento sensorial urgente: Bloqueie todos os estímulos visuais e auditivos digitais. Suplemente sob orientação clínica com adaptogénios.\n• Somatic Experiencing: Permita que o corpo trema de forma natural para descarregar a energia de sobrevivência presa nos músculos.\n• Entrega Espiritual Radical: Pratique a entrega total da necessidade de controlo."
      };
    }
  },
  ru: (activeBalance, heightA, heightB) => {
    if (activeBalance < 0.2) {
      return {
        stateName: "Дзен-состояние / Парасимпатическое доминирование (Ваготония)",
        explanation: "Представляет собой глубокую активацию миелинизированной вентральной ветви блуждающего нерва, ведущую к мощному высвобождению ацетилхолина для контролируемого замедления сердечного ритма. Ось HPA полностью заторможена, что позволяет восстановить запасы гликогена в печени, синтезировать внутриклеточный АТФ и нормализовать базовый уровень тирозингидроксилазы. Мозг переходит в состояние глубоких дельта- и тета-волн, которые облегчают лимфатический дренаж мозга (глимфатическая система) и укрепляют иммунную память.",
        graphType: "График вариабельности сердечного ритма (HRV-спектр)",
        graphExplanation: "Спектральный анализ колебаний между последовательными ударами сердца (интервалы R-R) методом быстрого преобразования Фурье (БПФ), демонстрирующий преобладание мощности в полосе высоких частот (HF: 0,15 - 0,4 Гц), прямой математический показатель кардиовагального тонуса.",
        advice: "• Дыхание «Физиологический вздох»: Сделайте два быстрых вдоха через нос (второй короткий и форсированный для повторного расширения легочных альвеол), затем длинный, медленный выдох через рот. Повторите 5 раз.\n• Трансцендентальная медитация и Самадхи: Развивайте абсолютное интроспективное молчание, направляя внимание на естественную паузу во время апноэ после выдоха.\n• Клиническое предупреждение: Избегайте сползания из активного вентрального вагального состояния в дорсальное вагальное доминирование. Мягко активируйте себя с помощью соматических движений."
      };
    } else if (activeBalance < 0.48) {
      return {
        stateName: "Динамический гомеостаз (Альфа-ось спокойствия)",
        explanation: "Это золотой стандарт ежедневного аллостатического баланса. Гипоталамо-гипофизарно-надпочечниковая (HPA) ось работает в идеальной петле отрицательной обратной связи, сохраняя секрецию кортизола и АКТГ в идеальных пределах. Слияние симпатического и парасимпатического тонусов позволяет иммунным клеткам функционировать оптимально, подавляя провоспалительные цитокины. Дофамин выделяется тонически (стабильно и постоянно) из вентральной области покрышки (VTA) в прилежащее ядро, предотвращая даунрегуляцию D2-рецепторов и поддерживая чистую мотивацию, лишенную компульсивной тяги.",
        graphType: "Нулевая кривая аллостатической нагрузки",
        graphExplanation: "График демонстрирует идеальный энергетический баланс (установившееся аллостатическое состояние), при котором энергия, поглощаемая из окружающей среды, равна энергии, затрачиваемой на адаптацию, исключая накопление клеточного износа.",
        advice: "• Аффективная теория Габора Матэ: Развивайте способность распознавать и выражать подавленные эмоции (здоровый гнев). Научитесь говорить искреннее «НЕТ» окружающим, чтобы вашему телу не пришлось говорить «НЕТ».\n• Циркадная синхронизация: Подставляйте глаза прямому солнечному свету в первые 30 минут после пробуждения.\n• Заземление и сорегуляция: Практируйте прямой физический контакт с землей и укрепляйте связи с эмоционально безопасным сообществом (Сангха)."
      };
    } else if (activeBalance >= 0.48 && activeBalance <= 0.52) {
      return {
        stateName: "Нулевая точка (Бифуркация и автономная соактивация)",
        explanation: "Состояние чистого динамического баланса, характеризующееся одновременной и симметричной соактивацией симпатического и парасимпатического отделов. На этой оси миндалевидное тело находится в состоянии спокойного бодрствования под прямым и стабильным контлолем медиальной префронтальной коры (mPFC). Сердечно-сосудистая система представляет собой идеальный синусоидальный паттерн (максимальная когерентность сердца). Все биоэнергетические ресурсы предварительно мобилизованы, организм нейрофизиологически готов мгновенно адаптироваться к быстрому действию (симпатическому) или полному расслаблению (парасимпатическому) без накопления остаточного стресса.",
        graphType: "Диаграмма фазового пространства автономных аттракторов",
        graphExplanation: "Фазовая карта указывает на стабильный точечный аттрактор (zero-bias attractor). Это математическое уравнение максимальной адаптивности, при которой изменение состояния не расходует базовые метаболические ресурсы.",
        advice: "• Резонансное дыхание: Дышите в ритме: 5 секунд на вдох и 5 секунд на выдох. Этот ритм активирует естественный легочный резонатор.\n• У-вэй (Деяние без усилий): Примите даосское ментальное состояние непривязанности. Действуйте из потока, руководствуясь чистым присутствием.\n• Соматический баланс: Делайте короткие перерывы на осознание тела в течение дня."
      };
    } else if (activeBalance > 0.52 && activeBalance < 0.8) {
      return {
        stateName: "Симпатическая активация (Сфокусированная бдительность / Beta Drive)",
        explanation: "Симпатическая нервная система мобилизует энергетические ресурсы путем активации симпато-адреналово-медуллярной (SAM) оси. Голубое пятно увеличивает частоту импульсов, наводняя кору норадреналином для обеспечения сфокусированного видения. Гликоген в печени преобразуется в циркулирующую глюкозу для питания мышц и мозга. Частота сердечных сокращений увеличивается за счет стимуляции бета-1-адренорецепторов. Выброс дофамина переходит от тонического к фазовому (пики возбуждения), порождая сильное желание, высокую продуктивность и концентрацию на внешнем вознаграждении.",
        graphType: "Кривая острой реакции на стресс и фазовый сдвиг дофамина",
        graphExplanation: "Карта показывает переход от стабильного базового уровня дофамина к высокочастотным колебаниям, представляющим энергию преследования целей.",
        advice: "• Аллостатическое разграничение: Ограничивайте периоды симпатического напряжения максимум 90 минутами. Сопровождайте каждый сеанс как минимум 10 минутами дефокусировки зрения.\n• Быстрое соматическое заземление: Найдите в пространстве вокруг себя 5 вещей, которые вы видите, 4, которые можете потрогать, 3, которые слышите, 2, которые чувствуете носом, и 1, которую можете попробовать на вкус.\n• Осознанная трансмутация: Направляйте адреналиновый импульс на творчество и целенаправленную работу."
      };
    } else {
      return {
        stateName: "Истощение оси HPA и токсическая тревога (Хроническая гиперстимуляция)",
        explanation: "Состояние тяжелой аллостатической перегрузки. Рецепторы глюкокортикоидов в гиппокампе и префронтальной коре теряют чувствительность из-за длительного воздействия кортизола, нарушая обратную связь отключения стресса. Миндалевидное тело становится гиперактивным и гипертрофированным, интерпретируя любой стимул как угрозу. Избыток глутамата накапливается в синапсах, запуская нейротоксичность и атрофию дендритов. Дофаминовые D2-рецепторы резко сокращаются в количестве, вызывая базовую ангедонию (неспособность чувствовать естественное удовольствие).",
        graphType: "Кривая аллостатической перегрузки и синаптической деградации",
        graphExplanation: "График насыщения показывает выход за пределы биологической прочности. Хронический уровень кортизола разрушил способность к адаптации (аллостаз).",
        advice: "• Экстренная сенсорная перезагрузка: Полностью заблокируйте цифровые зрительные и слуховые раздражители. Принимайте под наблюдением врача мощные адаптогены.\n• Соматическое переживание: Позвольте телу дрожать естественным образом, чтобы разрядить энергию выживания, заблокированную в мышцах.\n• Радикальная духовная сдача: Практикуйте полный отказ от потребности контролировать."
      };
    }
  },
  zh: (activeBalance, heightA, heightB) => {
    if (activeBalance < 0.2) {
      return {
        stateName: "禅宗状态 / 副交感神经主导 (迷走神经兴奋)",
        explanation: "代表迷走神经有髓鞘腹侧支（腹侧迷走神经通路）的深层激活，导致窦房结大量释放乙酰胆碱，从而受控地减慢心率。HPA轴被完全缓冲，允许重建肝糖原储备、重新合成细胞内ATP并使酪氨酸羟化酶基线正常化。大脑进入深度的Delta和Theta波，这两种生物电状态促进脑淋巴引流（胶质淋巴系统）并巩固免疫记忆。",
        graphType: "心率变异性图表 (HRV Spectrum)",
        graphExplanation: "对连续心跳（R-R间期）之间的波动进行快速傅里叶变换（FFT）光谱分析，显示高频带（HF: 0.15 - 0.4 Hz）功率的巨大优势，这是心脏迷走神经张力的直接数学指标。",
        advice: "• “生理性叹息”呼吸法：用鼻子快速吸气两次（第二次是短而强制的，以重新扩张肺泡），然后用嘴呼气，长而缓慢且被动。重复5次。\n• 超觉静坐与三摩地：培养绝对的反省宁静，将注意力引向呼气后自然出现的暂停。\n• 行动（警告）：避免情绪解体或冷漠。通过有意识的身体运动重新激活自己。"
      };
    } else if (activeBalance < 0.48) {
      return {
        stateName: "动态稳态 (阿尔法平静轴)",
        explanation: "这是日常稳态平衡的金标准。下丘脑-垂体-肾上腺（HPA）轴运行在完美的负反馈回路中，维持皮质醇和ACTH的分泌在理想的健康范围内。交感神经张力与副交感神经张力的融合使免疫细胞发挥最佳功能，抑制促炎细胞因子。多巴胺以强直（稳定和恒定）方式从腹侧被盖区（VTA）释放到核糖核酸区，防止D2受体的下调并保持纯粹的动力，没有成瘾性冲动。",
        graphType: "稳态应激负荷零曲线",
        graphExplanation: "图表显示完美的能量平衡（稳态应激稳态），其中从环境中吸收的能量等于适应所消耗的能量，消除了细胞磨损的积累。",
        advice: "• Gabor Maté 情感理论：培养识别和表达被压抑情绪的能力（健康的愤怒）。学会说出真正的“不”。\n• 昼夜节律同步：醒来后的前30分钟内将眼睛直接暴露在阳光下。\n• 接地：练习与大地的直接接触，并加强与情绪安全社区（僧团）的联系。"
      };
    } else if (activeBalance >= 0.48 && activeBalance <= 0.52) {
      return {
        stateName: "零点 (自主分叉与共激活)",
        explanation: "一种纯粹的动态平衡状态，其特征是交感和副交感分支同时且对称地激活。在这一轴线上，杏仁核处于平静的警觉状态，处于内侧前额叶皮层（mPFC）的直接和稳定控制之下。心血管系统呈现完美的正弦图案（最大心率相干性）。所有生物能量资源都已预先动员，机体在神经生理上做好了准备，以瞬间适应快速行动（交感）或完全放松（副交感），而不会积累残留压力。",
        graphType: "自主吸引子相位空间图",
        graphExplanation: "相位图指示一个稳定的点吸引子（零偏置吸引子）。这是最大适应性的数学方程，其中状态变化不消耗基本代谢资源。",
        advice: "• 相干呼吸：以吸气5秒、呼气5秒的节奏呼吸。\n• 无为（顺应自然）：采取道家无执的精神状态。顺应流淌，由纯粹的存在引导而行动。\n• 躯体平衡：在一天中进行简短的身体觉察暂停。"
      };
    } else if (activeBalance > 0.52 && activeBalance < 0.8) {
      return {
        stateName: "交感激活 (专注警觉 / 贝塔驱动)",
        explanation: "交感神经系统通过激活交感-肾上腺-髓质（SAM）轴来动员能量资源。蓝斑增加其放电率，向皮层输送去甲肾上腺素以确保专注的视野。肝脏中的糖原转化为循环葡萄糖以滋养肌肉和大脑。心率通过刺激β-1肾上腺素受体而上升。多巴胺从强直释放转为相位释放（兴奋峰），产生强烈的愿望、高生产力以及对外部奖励的关注。",
        graphType: "急性应激反应曲线与多巴胺相位偏移",
        graphExplanation: "该图显示了从多巴胺稳定基线到高频波动的过渡，代表追求目标的能量和ATP储备的动态动员。",
        advice: "• 稳态应激界定：限制交感付出的时期，每节最多90分钟。每节之后进行至少10分钟的视觉去焦。\n• 躯体接地：在空间中识别出5个你看得到的东西，4个你可以触摸到的东西，3个你听得到的东西，2个你闻得到的东西，以及1个你尝得到的东西。\n• 有意识的转化：将去甲肾上腺素的冲动引导到创作和专注的工作中。"
      };
    } else {
      return {
        stateName: "HPA 耗竭与毒性警觉 (慢性过度刺激)",
        explanation: "严重稳态应激退化的状态。由于长期暴露于皮质醇中，海马体和前额叶皮层中的糖皮质激素受体下调，破坏了压力关闭回路。杏仁核变得过度活跃和肥大，将任何刺激都解释为威胁。谷氨酸在突触中过量积累，触发神经毒性和树突萎缩。多巴胺D2受体在数量上急剧减少，产生基础快感缺失（无法感受自然愉悦），这驱使机体走向强迫性消费。",
        graphType: "稳态应激超载与突触退化曲线",
        graphExplanation: "饱和度图显示超出了生物断裂极限。皮质醇的慢性水平破坏了适应能力（稳态应激），导致神经内分泌反馈崩溃。",
        advice: "• 紧急感官重置：完全屏蔽数码视觉和听觉刺激（飞行模式，黑暗房间中的感官剥夺）。\n• 躯体体验：允许身体自然颤抖，以释放锁定在肌肉中的生存能量。\n• 臣服：练习完全放弃对控制的需求。接受肉体的脆弱和局限。"
      };
    }
  }
};

export const homeostasisUI: Record<Locale, Record<string, string>> = {
  ro: {
    interactiveGuideBadge: "Ghidul Interactiv de Echilibru Simpatic/Parasimpatic",
    brainSeekingBalanceTitle: "Creierul în Căutarea Echilibrului",
    interactiveSubtitle: "Explorați axa neurală mișcând mouse-ul. Faceți click pe simulator pentru a bloca și investiga în detaliu o stare specifică.",
    nervousSystemState: "Starea Sistemului Nervos",
    synapticCoherence: "Coerență Sinaptică",
    clickToUnlock: "CLICK PENTRU DEBLOCARE",
    clickToDiagnose: "CLICK PENTRU DIAGNOSTICARE",
    extractTruthBtn: "Extrage Adevărul Neurologic",
    projectionBadge: "Proiecție Guru",
    resetMapBtn: "Resetează Harta",
    neuroAnalysis: "Analiză Neuro-Fiziologică",
    keyIndicators: "Indicatori Cheie",
    processADopamine: "Proces A (Dopamină)",
    processBStress: "Proces B (Stres)",
    healingGuide: "Ghidul de Vindecare (Recomandare)",
    fullDocumentationBtn: "Documentație Completă Homeostazie"
  },
  en: {
    interactiveGuideBadge: "Interactive Sympathetic/Parasympathetic Balance Guide",
    brainSeekingBalanceTitle: "The Brain Seeking Balance",
    interactiveSubtitle: "Explore the neural axis by moving your mouse. Click on the simulator to lock and investigate a specific state in detail.",
    nervousSystemState: "Nervous System State",
    synapticCoherence: "Synaptic Coherence",
    clickToUnlock: "CLICK TO UNLOCK",
    clickToDiagnose: "CLICK TO DIAGNOSE",
    extractTruthBtn: "Extract Neurological Truth",
    projectionBadge: "Guru Projection",
    resetMapBtn: "Reset Map",
    neuroAnalysis: "Neuro-Physiological Analysis",
    keyIndicators: "Key Indicators",
    processADopamine: "Process A (Dopamine)",
    processBStress: "Process B (Stress)",
    healingGuide: "Healing Guide (Recommendation)",
    fullDocumentationBtn: "Complete Homeostasis Documentation"
  },
  es: {
    interactiveGuideBadge: "Guía Interactiva de Equilibrio Simpático/Parasimpático",
    brainSeekingBalanceTitle: "El Cerebro en Busca de Equilibrio",
    interactiveSubtitle: "Explore el eje neural moviendo el mouse. Haga clic en el simulador para bloquear e investigar un estado específico.",
    nervousSystemState: "Estado del Sistema Nervioso",
    synapticCoherence: "Coherencia Sináptica",
    clickToUnlock: "CLICK PARA DESBLOQUEAR",
    clickToDiagnose: "CLICK PARA DIAGNOSTICAR",
    extractTruthBtn: "Extraer la Verdad Neurológica",
    projectionBadge: "Proyección Guru",
    resetMapBtn: "Restablecer Mapa",
    neuroAnalysis: "Análisis Neurofisiológico",
    keyIndicators: "Indicadores Clave",
    processADopamine: "Proceso A (Dopamina)",
    processBStress: "Proceso B (Estrés)",
    healingGuide: "Guía de Curación (Recomendación)",
    fullDocumentationBtn: "Documentación Completa sobre Homeostasis"
  },
  pt: {
    interactiveGuideBadge: "Guia Interativo de Equilíbrio Simpático/Parassimpático",
    brainSeekingBalanceTitle: "O Cérebro em Busca de Equilíbrio",
    interactiveSubtitle: "Explore o eixo neural movendo o rato. Clique no simulador para bloquear e investigar um estado específico.",
    nervousSystemState: "Estado do Sistema Nervoso",
    synapticCoherence: "Coerência Sináptica",
    clickToUnlock: "CLIQUE PARA DESBLOQUEAR",
    clickToDiagnose: "CLIQUE PARA DIAGNOSTICAR",
    extractTruthBtn: "Extraer la Verdad Neurológica",
    projectionBadge: "Projeção Guru",
    resetMapBtn: "Repor Mapa",
    neuroAnalysis: "Análise Neurofisiológica",
    keyIndicators: "Indicadores-Chave",
    processADopamine: "Processo A (Dopamina)",
    processBStress: "Processo B (Stress)",
    healingGuide: "Guia de Cura (Recomendação)",
    fullDocumentationBtn: "Documentação Completă da Homeostase"
  },
  ru: {
    interactiveGuideBadge: "Интерактивное руководство по симпатическому/парасимпатическому балансу",
    brainSeekingBalanceTitle: "Мозг в поисках равновесия",
    interactiveSubtitle: "Исследуйте нейронную ось, перемещая мышь. Нажмите на симулятор, чтобы заблокировать и изучить состояние подробнее.",
    nervousSystemState: "Состояние нервной системы",
    synapticCoherence: "Синаптическая когерентность",
    clickToUnlock: "НАЖМИТЕ ДЛЯ РАЗБЛОКИРОВКИ",
    clickToDiagnose: "НАЖМИТЕ ДЛЯ ДИАГНОСТИКИ",
    extractTruthBtn: "Извлечь нейробиологическую истину",
    projectionBadge: "Проекция Гуру",
    resetMapBtn: "Сбросить карту",
    neuroAnalysis: "Нейрофизиологический анализ",
    keyIndicators: "Ключевые показатели",
    processADopamine: "Процесс А (Дофамин)",
    processBStress: "Процесс Б (Стресс)",
    healingGuide: "Руководство по исцелению (Рекомендация)",
    fullDocumentationBtn: "Полная документация по гомеостазу"
  },
  zh: {
    interactiveGuideBadge: "自主神经系统平衡交互指南",
    brainSeekingBalanceTitle: "寻求平衡的大脑",
    interactiveSubtitle: "移动鼠标探索神经轴。点击模拟器以锁定并详细研究特定状态。",
    nervousSystemState: "神经系统状态",
    synapticCoherence: "突触相干性",
    clickToUnlock: "点击以解锁",
    clickToDiagnose: "点击以诊断",
    extractTruthBtn: "提取神经生物学真相",
    projectionBadge: "灵性导师投影",
    resetMapBtn: "重置地图",
    neuroAnalysis: "神经生理学分析",
    keyIndicators: "关键指标",
    processADopamine: "过程 A (多巴胺)",
    processBStress: "过程 B (压力)",
    healingGuide: "治愈指南 (推荐)",
    fullDocumentationBtn: "稳态完全文档"
  }
};

export const getPhysiologicalStateTranslated = (locale: Locale, activeBalance: number) => {
  if (activeBalance < 0.2) {
    return {
      text: {
        ro: "Parasimpatic Profund (Repaus Meditativ)",
        en: "Deep Parasympathetic (Meditative Rest)",
        es: "Parasimpático Profundo (Reposo Meditativo)",
        pt: "Parassimpático Profundo (Repouso Meditativo)",
        ru: "Глубокая парасимпатика (Медитативный покой)",
        zh: "深层副交感神经 (冥想休憩)"
      }[locale],
      color: "text-blue-400",
      wave: {
        ro: "Unde Delta / Theta (0.5 - 7 Hz)",
        en: "Delta / Theta Waves (0.5 - 7 Hz)",
        es: "Ondas Delta / Theta (0.5 - 7 Hz)",
        pt: "Ondas Delta / Theta (0.5 - 7 Hz)",
        ru: "Дельта- / Тета-волны (0.5 - 7 Гц)",
        zh: "Delta / Theta 波 (0.5 - 7 Hz)"
      }[locale]
    };
  }
  if (activeBalance < 0.48) {
    return {
      text: {
        ro: "Homeostazie Dinamică (Alfa Calm)",
        en: "Dynamic Homeostasis (Alpha Calm)",
        es: "Homeostasis Dinámica (Calma Alfa)",
        pt: "Homeostase Dinâmica (Calma Alfa)",
        ru: "Динамический гомеостаз (Альфа-покой)",
        zh: "动态稳态 (Alpha 平静)"
      }[locale],
      color: "text-emerald-400",
      wave: {
        ro: "Unde Alfa (8 - 12 Hz) - Echilibru",
        en: "Alpha Waves (8 - 12 Hz) - Balance",
        es: "Ondas Alfa (8 - 12 Hz) - Equilibrio",
        pt: "Ondas Alfa (8 - 12 Hz) - Equilíbrio",
        ru: "Альфа-волны (8 - 12 Гц) - Равновесие",
        zh: "Alpha 波 (8 - 12 Hz) - 平衡"
      }[locale]
    };
  }
  if (activeBalance >= 0.48 && activeBalance <= 0.52) {
    return {
      text: {
        ro: "Punctul de Echilibru (Axa Zero)",
        en: "Balance Point (Zero Axis)",
        es: "Punto de Equilibrio (Eje Cero)",
        pt: "Ponto de Equilíbrio (Eixo Zero)",
        ru: "Точка равновесия (Нулевая ось)",
        zh: "平衡点 (零轴)"
      }[locale],
      color: "text-white",
      wave: {
        ro: "Unde Mu / SMR (12 - 15 Hz) - Focus calm",
        en: "Mu / SMR Waves (12 - 15 Hz) - Calm focus",
        es: "Ondas Mu / SMR (12 - 15 Hz) - Enfoque tranquilo",
        pt: "Ondas Mu / SMR (12 - 15 Hz) - Foco calmo",
        ru: "Мю- / SMR-волны (12 - 15 Гц) - Спокойный фокус",
        zh: "Mu / SMR 波 (12 - 15 Hz) - 平静专注"
      }[locale]
    };
  }
  if (activeBalance < 0.8) {
    return {
      text: {
        ro: "Activare Simpatică (Alertă / Focus)",
        en: "Sympathetic Activation (Alert / Focus)",
        es: "Activación Simpática (Alerta / Enfoque)",
        pt: "Ativação Simpática (Alerta / Foco)",
        ru: "Симпатическая активация (Бдительность / Фокус)",
        zh: "交感神经激活 (警觉 / 专注)"
      }[locale],
      color: "text-orange-400",
      wave: {
        ro: "Unde Beta (15 - 30 Hz) - Excitare",
        en: "Beta Waves (15 - 30 Hz) - Excitement",
        es: "Ondas Beta (15 - 30 Hz) - Excitación",
        pt: "Ondas Beta (15 - 30 Hz) - Excitação",
        ru: "Бета-волны (15 - 30 Гц) - Возбуждение",
        zh: "Beta 波 (15 - 30 Hz) - 兴奋"
      }[locale]
    };
  }
  return {
    text: {
      ro: "Suprastimulare și Toxicitate (Cortisol/Adrenalină)",
      en: "Overstimulation & Toxicity (Cortisol/Adrenaline)",
      es: "Sobreestimulación y Toxicidad (Cortisol/Adrenalina)",
      pt: "Sobreestimulação e Toxicidade (Cortisol/Adrenalina)",
      ru: "Гиперстимуляция и токсичность (Кортизол/Адреналин)",
      zh: "过度刺激与毒性 (皮质醇/肾上腺素)"
    }[locale],
    color: "text-red-500 animate-pulse",
    wave: {
      ro: "Unde Gamma / High Beta (30 - 100 Hz)",
      en: "Gamma / High Beta Waves (30 - 100 Hz)",
      es: "Ondas Gamma / High Beta (30 - 100 Hz)",
      pt: "Ondas Gamma / High Beta (30 - 100 Hz)",
      ru: "Гамма- / Высокие бета-волны (30 - 100 Гц)",
      zh: "Gamma / High Beta 波 (30 - 100 Hz)"
    }[locale]
  };
};
