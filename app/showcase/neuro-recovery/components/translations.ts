export interface PageStrings {
  title: string;
  subtitle: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
  listTitle?: string;
  list?: string[];
  quote?: string;
  quoteAuthor?: string;
  exploreBtn?: string;
  backBtn?: string;
}

export type Locale = "ro" | "en" | "es" | "pt" | "ru" | "zh";

export const locales: Locale[] = ["ro", "en", "es", "pt", "ru", "zh"];

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.includes("/en/")) return "en";
  if (pathname.includes("/es/")) return "es";
  if (pathname.includes("/pt/")) return "pt";
  if (pathname.includes("/ru/")) return "ru";
  if (pathname.includes("/zh/")) return "zh";
  return "ro";
}

// Map path to localized prefix
export function localizePath(href: string, locale: Locale): string {
  if (locale === "ro") return href;
  // If href is /showcase/neuro-recovery/...
  const clean = href.replace("/showcase/neuro-recovery", "");
  return `/${locale}/showcase/neuro-recovery${clean}`;
}

export const translationStrings: Record<string, Record<Locale, PageStrings>> = {
  pleasure: {
    ro: {
      title: "Plăcerea (Corpul) — Poarta Senzorială și Sacralitatea Materiei",
      subtitle: "Dimensiunea somatică: neurobiologia recompensei în intersecție cu marile școli de gândire despre corp.",
      p1: "Primul nivel al conștiinței este cel mai dens și mai direct: corpul fizic. Plăcerea nu este o eroare a naturii, ci o poartă senzorială concepută pentru a asigura adaptarea și supraviețuirea speciei. La nivel biologic, ea este orchestrată de neurotransmițători ca dopamina (în faza de anticipare) și opioizii endogeni (în faza de consum).",
      p2: "Din punct de vedere psihologic și filosofic, percepția plăcerii diferă profund. În timp ce hedonismul clasic propune maximizarea plăcerilor fizice, marile tradiții spirituale și școlile de psihosomatică modernă văd corpul ca pe un templu al conștiinței. Corpul nu minte niciodată; el stochează traumele neprocesate (așa cum arată Dr. Bessel van der Kolk) dar conține și cheia eliberării prin prezență somatică.",
      p3: "Când dopamina este deturnată de substanțe artificiale, receptorii celulari se retrag (downregulation), instalând toleranța și anhedonia. Recuperarea la acest nivel începe cu re-sensibilizarea corpului: hrană vie, mișcare conștientă, atingere sigură și restabilirea ritmurilor naturale circadiene.",
      quote: "„Corpul ține scorul. Dacă mintea nu vrea sau nu poate să își amintească, țesuturile corpului o vor face.”",
      quoteAuthor: "Dr. Bessel van der Kolk"
    },
    en: {
      title: "Pleasure (The Body) — The Sensory Gate and Sacredness of Matter",
      subtitle: "The somatic dimension: the neurobiology of reward intersecting with great philosophical schools of the body.",
      p1: "The first level of consciousness is the most dense and direct: the physical body. Pleasure is not a design flaw of nature, but a sensory gateway engineered to ensure adaptation and survival of the species. Biologically, it is orchestrated by neurotransmitters like dopamine (anticipation phase) and endogenous opioids (consumption phase).",
      p2: "Philosophically and psychologically, the perception of pleasure varies. While classic hedonism proposes maximizing physical pleasures, spiritual traditions and modern psychosomatic schools view the body as a temple of consciousness. The body never lies; it stores unprocessed trauma (as Dr. Bessel van der Kolk shows) but also contains the key to liberation through somatic presence.",
      p3: "When dopamine is hijacked by synthetic substances, cellular receptors undergo downregulation, leading to tolerance and anhedonia. Recovery at this level starts with re-sensitizing the body: living food, conscious movement, safe touch, and restoring natural circadian rhythms.",
      quote: "“The body keeps the score. If the mind cannot or will not remember, the tissues of the body will.”",
      quoteAuthor: "Dr. Bessel van der Kolk"
    },
    es: {
      title: "El Placer (El Cuerpo) — La Puerta Sensorial y la Sacralidad de la Materia",
      subtitle: "La dimensión somática: la neurobiología de la recompensa en la intersección con las grandes escuelas del cuerpo.",
      p1: "El primer nivel de conciencia es el más denso y directo: el cuerpo físico. El placer no es un error de la naturaleza, sino una puerta sensorial diseñada para asegurar la adaptación y supervivencia de la especie. A nivel biológico, está orquestado por neurotransmisores como la dopamina (fase de anticipación) y los opioides endógenos (fase de consumo).",
      p2: "Filosófica y psicológicamente, la percepción del placer varía profundamente. Mientras el hedonismo clásico propone maximizar los placeres físicos, las tradiciones espirituales y la psicosomática moderna ven el cuerpo como un templo de la conciencia. El cuerpo nunca miente; almacena traumas no procesados (como demuestra el Dr. Bessel van der Kolk) pero también contiene la llave de la liberación a través de la presencia somática.",
      p3: "Cuando la dopamina es secuestrada por sustancias artificiales, los receptores celulares se retiran (regulación a la baja), instalando la tolerancia y la anhedonia. La recuperación a este nivel comienza con la re-sensibilización del cuerpo: alimentación viva, movimiento consciente, contacto seguro y la restauración de los ritmos circadianos naturales.",
      quote: "“El cuerpo lleva la cuenta. Si la mente no puede o no quiere recordar, los tejidos corporales lo harán.”",
      quoteAuthor: "Dr. Bessel van der Kolk"
    },
    pt: {
      title: "O Prazer (O Corpo) — O Portal Sensorial e a Sacralidade da Matéria",
      subtitle: "A dimensão somática: a neurobiologia da recompensa na interseção com as grandes escolas de pensamento do corpo.",
      p1: "O primeiro nível de consciência é o mais denso e direto: o corpo físico. O prazer não é um erro da natureza, mas um portal sensorial projetado para garantir a adaptação e a sobrevivência da espécie. Biologicamente, é orquestrado por neurotransmissores como a dopamina (fase de antecipação) e opioides endógenos (fase de consumo).",
      p2: "Filosófica e psicologicamente, a percepção do prazer varia. Enquanto o hedonismo clássico propõe maximizar os prazeres físicos, as tradições espirituais e as escolas modernas de psicossomática veem o corpo como um templo da consciência. O corpo nunca mente; ele armazena traumas não processados (como demonstra o Dr. Bessel van der Kolk), mas também contém a chave para a libertação por meio da presença somática.",
      p3: "Quando a dopamina é sequestrada por substâncias sintéticas, os receptores celulares sofrem regulação negativa, levando à tolerância e à anedonia. A recuperação a este nível começa com a re-sensibilização do corpo: alimentação viva, movimento consciente, toque seguro e restauração dos ritmos circadianos naturais.",
      quote: "“O corpo guarda o registro. Se a mente não puder ou não quiser lembrar, os tecidos do corpo lembrarão.”",
      quoteAuthor: "Dr. Bessel van der Kolk"
    },
    ru: {
      title: "Удовольствие (Тело) — Сенсорные Врата и Сакральность Материи",
      subtitle: "Соматическое измерение: нейробиология вознаграждения на стыке с великими учениями о теле.",
      p1: "Первый уровень сознания — самый плотный и прямой: физическое тело. Удовольствие — это не ошибка природы, а сенсорный портал, созданный для обеспечения адаптации и выживания вида. На биологическом уровне оно регулируется такими нейромедиаторами, как дофамин (фаза предвкушения) и эндогенные опиоиды (фаза потребления).",
      p2: "С философской и психологической точек зрения восприятие удовольствия различается. В то время как классический гедонизм предлагает максимизацию физических удовольствий, духовные традиции и современная психосоматика видят в теле храм сознания. Тело никогда не лжет; оно хранит непроработанные травмы (как показывает доктор Бессел ван дер Колк), но также содержит ключ к освобождению через соматическое присутствие.",
      p3: "Когда дофамин перехватывается искусственными веществами, клеточные рецепторы отступают (даунрегуляция), вызывая толерантность и ангедонию. Восстановление на этом уровне начинается с восстановления чувствительности тела: живое питание, осознанное движение, безопасные прикосновения и возвращение к естественным циркадным ритмам.",
      quote: "«Тело помнит все. Если разум не хочет или не может помнить, это сделают ткани тела».",
      quoteAuthor: "Д-р Бессел ван дер Колк"
    },
    zh: {
      title: "愉悦（身体）——感官之门与物质的神圣性",
      subtitle: "躯体维度：奖励的神经生物学与伟大的身体哲学思想的交汇。",
      p1: "意识的第一个层面是最稠密、最直接的：肉体。愉悦不是自然设计的缺陷，而是一个确保物种适应和生存的感官之门。在生物学层面，它由多巴胺（预期阶段）和内源性阿片类物质（消耗阶段）等神经递质来协调。",
      p2: "从哲学和心理学角度看，对愉悦的感知截然不同。经典享乐主义主张身体感官体验最大化，而精神传统和现代心身学派则将身体视为意识的殿堂。身体从不说谎；它储存着未处理的创伤（正如Bessel van der Kolk博士所证明），但也包含了通过躯体连结获得解放的钥匙。",
      p3: "当多巴胺被人工物质劫持时，细胞受体退缩（下调），导致耐受和快感缺失。这一层面的恢复始于身体的重新敏化：充满活力的食物、有意识的运动、安全的触摸，并恢复自然的昼夜节律。",
      quote: "“身体会记住一切。如果大脑不能或不愿意记住，身体的组织会。”",
      quoteAuthor: "Bessel van der Kolk 博士"
    }
  },
  happiness: {
    ro: {
      title: "Fericirea (Mintea) — Arhitectura Sensului și Coerența Cognitivă",
      subtitle: "Al doilea nivel al conștiinței: neurobiologia serotoninei în echilibru cu reziliența mentală și filozofia sensului.",
      p1: "Fericirea este o stare a minții caracterizată prin satisfacție pe termen lung, echilibru emoțional și coerență cognitivă. Spre deosebire de plăcere (care este tranzitorie și intensă), fericirea este stabilă și profundă, fiind asociată la nivel neurochimic cu niveluri optime de serotonină și gaba-aminobutirat (GABA).",
      p2: "Psihologul Viktor Frankl a demonstrat că fericirea nu poate fi urmărită direct; ea trebuie să apară ca o consecință a unui sens trăit. Când viața noastră are o direcție și un scop (conceptul japonez Ikigai), cortexul prefrontal exercită un control inhibitor sănătos asupra amigdalei, reducând nivelul de cortizol și anxietate.",
      p3: "Dependențele psihologice și ruminația mentală blochează creierul în circuite rigide de gândire. Recablarea minții implică exersarea recunoștinței, meditația de mindfulness, restructurarea cognitivă și cultivarea unor relații bazate pe valori împărtășite.",
      quote: "„Cine are un de ce pentru care să trăiască poate suporta aproape orice cum.”",
      quoteAuthor: "Viktor Frankl"
    },
    en: {
      title: "Happiness (The Mind) — The Architecture of Meaning and Cognitive Coherence",
      subtitle: "The second level of consciousness: serotonin neurobiology balanced with mental resilience and the philosophy of meaning.",
      p1: "Happiness is a state of mind characterized by long-term satisfaction, emotional balance, and cognitive coherence. Unlike pleasure (which is transient and intense), happiness is stable and deep, biologically associated with optimal levels of serotonin and GABA.",
      p2: "Psychologist Viktor Frankl demonstrated that happiness cannot be pursued directly; it must ensue as a consequence of living a meaningful life. When our life has direction and purpose (the Japanese concept of Ikigai), the prefrontal cortex exerts healthy inhibitory control over the amygdala, reducing cortisol and anxiety.",
      p3: "Psychological addictions and mental rumination lock the brain into rigid thought patterns. Rewiring the mind involves practicing gratitude, mindfulness meditation, cognitive restructuring, and cultivating relationships based on shared values.",
      quote: "“He who has a why to live for can bear almost any how.”",
      quoteAuthor: "Viktor Frankl"
    },
    es: {
      title: "La Felicidad (La Mente) — La Arquitectura del Sentido y la Coherencia Cognitiva",
      subtitle: "El segundo nivel de conciencia: la neurobiología de la serotonina en equilibrio con la resiliencia mental y la filosofía del sentido.",
      p1: "La felicidad es un estado mental caracterizado por la satisfacción a largo plazo, el equilibrio emocional y la coherencia cognitiva. A diferencia del placer (que es transitorio e intenso), la felicidad es estable y profunda, estando asociada a nivel neuroquímico con niveles óptimos de serotonina y GABA.",
      p2: "El psicólogo Viktor Frankl demostró que la felicidad no puede perseguirse directamente; debe surgir como consecuencia de vivir una vida con sentido. Cuando nuestra vida tiene una dirección y un propósito (el concepto japonés Ikigai), la corteza prefrontal ejerce un control inhibidor saludable sobre la amígdala, reduciendo el cortisol y la ansiedad.",
      p3: "Las adicciones psicológicas y la rumiación mental bloquean el cerebro en circuitos rígidos de pensamiento. Reconfigurar la mente implica practicar la gratitud, la meditación mindfulness, la reestructuración cognitiva y cultivar relaciones basadas en valores compartidos.",
      quote: "“El que tiene un porqué para vivir puede soportar casi cualquier cómo.”",
      quoteAuthor: "Viktor Frankl"
    },
    pt: {
      title: "A Felicidade (A Mente) — A Arquitetura do Sentido e a Coerência Cognitiva",
      subtitle: "O segundo nível de consciência: a neurobiologia da serotonina em equilíbrio com a resiliência mental e a filosofia do sentido.",
      p1: "A felicidade é um estado mental caracterizado por satisfação a longo prazo, equilíbrio emocional e coerência cognitiva. Ao contrário do prazer (que é transitório e intenso), a felicidade é estável e profunda, estando associada no nível neuroquímico a níveis ideais de serotonina e GABA.",
      p2: "O psicólogo Viktor Frankl demonstrou que a felicidade não pode ser buscada diretamente; ela deve surgir como consequência de viver uma vida com sentido. Quando a nossa vida tem direção e propósito (o conceito japonês Ikigai), o córtex pré-frontal exerce um controle inibitório saudável sobre a amígdala, reduzindo o cortisol e a ansiedade.",
      p3: "As adicções psicológicas e a ruminação mental bloqueiam o cérebro em circuitos rígidos de pensamento. A reconfiguração da mente envolve a prática da gratidão, a meditação de mindfulness, a reestruturação cognitiva e o cultivo de relacionamentos baseados em valores compartilhados.",
      quote: "“Aquele que tem um porquê para viver pode suportar quase qualquer como.”",
      quoteAuthor: "Viktor Frankl"
    },
    ru: {
      title: "Счастье (Разум) — Архитектура Смысла и Когнитивная Когерентность",
      subtitle: "Второй уровень сознания: нейробиология серотонина в балансе с ментальной устойчивостью и философией смысла.",
      p1: "Счастье — это состояние ума, характеризующееся долгосрочной удовлетворенностью, эмоциональным балансом и когнитивной согласованностью. В отличие от удовольствия (которое преходяще и интенсивно), счастье стабильно и глубоко, ассоциируясь на нейрохимическом уровне с оптимальным уровнем серотонина и ГАМК.",
      p2: "Психолог Виктор Франкл доказал, что к счастью нельзя стремиться напрямую; оно должно следовать как побочный эффект осмысленной жизни. Когда у нашей жизни есть направление и цель (японская концепция Икигай), префронтальная кора осуществляет здоровый тормозной контроль над миндалевидным телом, снижая уровень кортизола и тревоги.",
      p3: "Психологические зависимости и ментальная мысленная жвачка запирают мозг в жестких когнитивных схемах. Перенастройка разума включает в себя практику благодарности, медитацию осознанности, когнитивную реструктуризацию и развитие отношений, основанных на общих ценностях.",
      quote: "«Тот, у кого есть зачем жить, может вынести почти любое как».",
      quoteAuthor: "Виктор Франкл"
    },
    zh: {
      title: "幸福（心智）——意义构建与认知连贯性",
      subtitle: "意识的第二层面：血清素神经生物学与心理韧性及意义哲学的平衡。",
      p1: "幸福是一种心智状态，以长期的满足感、情绪平衡和认知连贯性为特征。与转瞬即逝且强烈的愉悦不同，幸福是稳定而深沉的，在神经化学层面与血清素和GABA的理想水平相关。",
      p2: "心理学家维克多·弗兰克尔证明，幸福无法被直接追求；它必须作为过有意义生活的副产品而出现。当我们的生活有方向和目标（日本的Ikigai概念）时，前额叶皮层对杏仁核行使健康的抑制控制，降低皮质醇和焦虑。",
      p3: "心理成瘾和精神反刍会将大脑锁定在僵化的思维模式中。重塑心智包括练习感恩、正念冥想、认知重构以及培养基于共同价值观的人际关系。",
      quote: "“知道为什么而活的人，便能生存。”",
      quoteAuthor: "维克多·弗兰克尔"
    }
  },
  "joy-soul": {
    ro: {
      title: "Bucuria (Sufletul) — Rezonanța Inimii și Conexiunea Parasimpatică",
      subtitle: "Al treilea nivel al conștiinței: eliberarea de ocitocină în sinergie cu starea de siguranță relatională și pacea profundă.",
      p1: "Bucuria este o vibrație mai înaltă decât fericirea mentală, fiind legată de suflet și de capacitatea de deschidere necondiționată. La nivel neurobiologic, ea se manifestă prin coerență cardiacă crescută și activarea puternică a ramurii ventrale a nervului vag (sistemul parasimpatic de calmare și conectare socială).",
      p2: "Bucuria se naște din sentimentul de comuniune, compasiune și conexiune autentică cu ceilalți și cu creația. Ocitocina, sintetizată în hipotalamus, joacă rolul central, facilitând atașamentul securizant, generozitatea și diminuând răspunsul la frică indus de amigdală.",
      p3: "Când suntem în starea de bucurie, corpul intră într-un mod de regenerare profundă: sistemul imunitar este stimulat, procesele inflamatorii sunt reduse, iar neuroplasticitatea este facilitată prin secreția de BDNF. Ne deschidem către intuiție și creativitate spirituală.",
      quote: "„Bucuria este cea mai simplă formă de recunoștință a sufletului în fața misterului vieții.”",
      quoteAuthor: "Albert Schweitzer"
    },
    en: {
      title: "Joy (The Soul) — Heart Resonance and Parasympathetic Connection",
      subtitle: "The third level of consciousness: oxytocin release in synergy with relational safety and deep peace.",
      p1: "Joy is a higher vibration than mental happiness, linked to the soul and the capacity for unconditional openness. Neurobiologically, it manifests through high heart rate variability (HRV) coherence and strong activation of the ventral vagus nerve (the social engagement system).",
      p2: "Joy arises from communion, compassion, and authentic connection with others and creation. Oxytocin, synthesized in the hypothalamus, plays the central role, facilitating secure attachment, generosity, and tempering amygdala-induced fear responses.",
      p3: "When we are in a state of joy, the body enters a deep regenerative mode: the immune system is boosted, inflammatory processes are reduced, and neuroplasticity is enhanced through BDNF secretion. We open up to intuition and spiritual creativity.",
      quote: "“Joy is the simplest form of gratitude the soul offers to the mystery of life.”",
      quoteAuthor: "Albert Schweitzer"
    },
    es: {
      title: "La Alegría (El Alma) — Resonancia del Corazón y Conexión Parasimpática",
      subtitle: "El tercer nivel de conciencia: liberación de oxitocina en sinergia con la seguridad relacional y la paz profunda.",
      p1: "La alegría es una vibración más alta que la felicidad mental, vinculada al alma y a la capacidad de apertura incondicional. Neurobiológicamente, se manifiesta a través de una alta coherencia de la variabilidad cardíaca y una fuerte activación del nervio vago ventral (sistema parasimpático de calma y conexión social).",
      p2: "La alegría nace del sentimiento de comunión, compasión y conexión auténtica con los demás y con la creación. La oxitocina, sintetizada en el hipotálamo, juega el papel central, facilitando el apego seguro, la generosidad y disminuyendo la respuesta de miedo inducida por la amígdala.",
      p3: "Cuando estamos en estado de alegría, el cuerpo entra en un modo de regeneración profunda: se estimula el sistema inmunológico, se reducen los procesos inflamatorios y se facilita la neuroplasticidad mediante la secreción de BDNF. Nos abrimos a la intuición y a la creatividad espiritual.",
      quote: "“La alegría es la forma más simple de gratitud que el alma ofrece ante el misterio de la vida.”",
      quoteAuthor: "Albert Schweitzer"
    },
    pt: {
      title: "A Alegria (A Alma) — Ressonância do Coração e Conexão Parassimpática",
      subtitle: "O terceiro nível de consciência: liberação de ocitocina em sinergia com a segurança relacional e a paz profunda.",
      p1: "A alegria é uma vibração mais elevada do que a felicidade mental, ligada à alma e à capacidade de abertura incondicional. Neurobiologicamente, manifesta-se através de alta coerência cardíaca e forte ativação da ramificação ventral do nervo vago (sistema parassimpático de calma e conexão social).",
      p2: "A alegria nasce do sentimento de comunhão, compaixão e conexão autêntica com os outros e com a criação. A ocitocina, sintetizada no hipotálamo, desempenha o papel central, facilitando o apego seguro, a generosidade e diminuindo a resposta de medo induzida pela amígdala.",
      p3: "Quando estamos em estado de alegria, o corpo entra em modo de regeneração profunda: o sistema imunológico é estimulado, os processos inflamatórios são reduzidos e a neuroplasticidade é facilitada pela secreção de BDNF. Abrimo-nos à intuição e à criatividade espiritual.",
      quote: "“A alegria é a forma mais simples de gratidão que a alma oferece diante do mistério da vida.”",
      quoteAuthor: "Albert Schweitzer"
    },
    ru: {
      title: "Радость (Душа) — Резонанс Сердца и Парасимпатическая Связь",
      subtitle: "Третий уровень сознания: высвобождение окситоцина в синергии с реляционной безопасностью и глубоким покоем.",
      p1: "Радость — это более высокая вибрация, чем ментальное счастье, связанная с душой и способностью к безусловному раскрытию. На нейробиологическом уровне она проявляется в высокой когерентности вариабельности сердечного ритма (ВСР) и сильной активации вентрального блуждающего нерва.",
      p2: "Радость рождается из чувства единения, сострадания и подлинной связи с другими и творением. Окситоцин, синтезируемый в гипоталамусе, играет центральную роль, способствуя безопасной привязанности, щедрости и снижая реакцию страха, вызванную миндалевидным телом.",
      p3: "Когда мы находимся в состоянии радости, организм переходит в режим глубокой регенерации: стимулируется иммунная система, уменьшаются воспалительные процессы, а нейропластичность облегчается благодаря секреции BDNF. Мы открываемся интуиции и духовному творчеству.",
      quote: "«Радость — это самая простая форма благодарности души перед лицом тайны жизни».",
      quoteAuthor: "Альберт Швейцер"
    },
    zh: {
      title: "喜悦（灵魂）——心之共振与副交感神经连接",
      subtitle: "意识的第三层面：催产素的释放与人际安全感及深度宁静的协同作用。",
      p1: "喜悦是一种比心理幸福更高层次的振动，与灵魂以及无条件开放的能力相关。在神经生物学层面，它表现为极高的心率变异性（HRV）相干性以及腹侧迷走神经（社交参与系统）的强烈激活。",
      p2: "喜悦源于与他人和万物的共融、同情及真诚的联系。在下丘脑合成的催产素起着核心作用，它促进安全的依恋、慷慨，并缓和由杏仁核引发的恐惧反应。",
      p3: "当我们处于喜悦状态时，身体会进入深度再生模式：免疫系统得到增强，炎症过程减少，BDNF的神经可塑性得到促进。我们对直觉和灵性创造力敞开心扉。",
      quote: "“喜悦是灵魂对生命奥秘最简单的感恩形式。”",
      quoteAuthor: "阿尔伯特·史怀哲"
    }
  },
  ecstasy: {
    ro: {
      title: "Extazul (Divinul) — Unirea Mistică și Transcendența Sinelui",
      subtitle: "Al patrulea nivel al conștiinței: dizolvarea rețelei neuronale implicite (DMN) și saltul în conștiința cosmică.",
      p1: "Extazul este starea supremă de transcendență în care granițele ego-ului se dizolvă complet. Neuroștiința modernă arată că în timpul stărilor mistice profunde sau al meditației transcendentale, activitatea în Default Mode Network (DMN) — rețeaua care generează simțul sinelui separat — scade dramatic.",
      p2: "Această dezactivare permite creierului să experimenteze o unitate absolută cu tot ce există, un fenomen descris în tradițiile orientale ca Samadhi sau în misticismul occidental ca Unio Mystica. Este starea non-duală a minții unde dualitatea observator-observat dispare, lăsând loc unei prezențe pure, radiante.",
      p3: "Din punct de vedere neurochimic, extazul implică o sinergie unică de endorfine, dopamină, serotonină și dimetiltriptamină endogenă (DMT). Această furtună neurochimică sacră lasă o amprentă permanentă de pace, compasiune și lipsă de teamă în structurile creierului.",
      quote: "„Extazul este ieșirea din sinele separat și intrarea în unitatea infinită a conștiinței divine.”",
      quoteAuthor: "Plotin"
    },
    en: {
      title: "Ecstasy (The Divine) — Mystical Union and Self-Transcendence",
      subtitle: "The fourth level of consciousness: dissolution of the Default Mode Network (DMN) and the leap into cosmic consciousness.",
      p1: "Ecstasy is the ultimate state of transcendence where the boundaries of the ego completely dissolve. Modern neuroscience shows that during deep mystical states or transcendental meditation, activity in the Default Mode Network (DMN)—which generates the sense of a separate self—decreases dramatically.",
      p2: "This deactivation allows the brain to experience absolute oneness with all that exists, a phenomenon described in Eastern traditions as Samadhi or in Western mysticism as Unio Mystica. It is the non-dual state of mind where the observer-observed duality vanishes, leaving pure, radiant presence.",
      p3: "Neurochemically, ecstasy involves a unique synergy of endorphins, dopamine, serotonin, and endogenous DMT. This sacred neurochemical storm leaves a permanent imprint of peace, compassion, and fearlessness in the brain's structures.",
      quote: "“Ecstasy is the departure from the separate self and the entry into the infinite unity of divine consciousness.”",
      quoteAuthor: "Plotinus"
    },
    es: {
      title: "El Éxtasis (Lo Divino) — Unión Mística y Trascendencia del Ser",
      subtitle: "El cuarto nivel de conciencia: disolución de la Red Neuronal por Defecto (DMN) y el salto a la conciencia cósmica.",
      p1: "El éxtasis es el estado supremo de trascendencia donde los límites del ego se disuelven por completo. La neurociencia moderna muestra que durante estados místicos profundos o meditación trascendental, la actividad en la Red Neuronal por Defecto (DMN) —que genera el sentido del yo separado— disminuye drásticamente.",
      p2: "Esta desactivación permite al cerebro experimentar la unidad absoluta con todo lo que existe, un fenómeno descrito en las tradiciones orientales como Samadhi o en el misticismo occidental como Unio Mystica. Es el estado no-dual de la mente donde la dualidad observador-observado desaparece, dejando una presencia pura y radiante.",
      p3: "Neuroquímicamente, el éxtasis implica una sinergia única de endorfinas, dopamina, serotonina y DMT endógena. Esta tormenta neuroquímica sagrada deja una huella permanente de paz, compasión y audacia en las estructuras del cerebro.",
      quote: "“El éxtasis es la salida del yo separado y la entrada en la unidad infinita de la conciencia divina.”",
      quoteAuthor: "Plotino"
    },
    pt: {
      title: "O Êxtase (O Divino) — União Mística e Transcendência do Ser",
      subtitle: "O quarto nível de consciência: dissolução da Rede Neuronal por Defeito (DMN) e o salto na consciência cósmica.",
      p1: "O êxtase é o estado supremo de transcendência onde as fronteiras do ego se dissolvem completamente. A neurociência moderna mostra que durante estados místicos profundos ou meditação transcendental, a atividade na Rede Neuronal por Defeito (DMN) — que gera a sensação de um eu separado — diminui drasticamente.",
      p2: "Esta desativação permite ao cérebro experimentar a unidade absoluta com tudo o que existe, um fenômeno descrito nas tradições orientais como Samadhi ou no misticismo ocidental como Unio Mystica. É o estado não-dual da mente onde a dualidade observador-observado desaparece, deixando uma presença pura e radiante.",
      p3: "Do ponto de vista neuroquímico, o êxtase envolve uma sinergia única de endorfinas, dopamina, serotonina e dimetiltriptamina endógena (DMT). Esta tempestade neuroquímica sagrada deixa uma marca permanente de paz, compaixão e destemor nas estruturas cerebrais.",
      quote: "“O êxtase é a saída do eu separado e a entrada na unidade infinita da consciência divina.”",
      quoteAuthor: "Plotino"
    },
    ru: {
      title: "Экстаз (Божественное) — Мистический Союз и Трансцендентность Я",
      subtitle: "Четвертый уровень сознания: растворение дефолт-системы мозга (DMN) и прыжок в космическое сознание.",
      p1: "Экстаз — это высшее состояние трансцендентности, в котором границы эго полностью растворяются. Современная нейробиология показывает, что во время глубоких мистических состояний или трансцендентальной медитации активность в дефолт-системе мозга (DMN), генерирующей ощущение отдельного «я», резко снижается.",
      p2: "Эта деактивация позволяет мозгу пережить абсолютное единство со всем сущим — феномен, описываемый в восточных традициях как Самадхи, а в западном мистицизме как Unio Mystica. Это недвойственное состояние ума, в котором исчезает дуальность «наблюдатель-наблюдаемое», оставляя чистое, сияющее присутствие.",
      p3: "С нейрохимической точки зрения экстаз включает в себя уникальную синергию эндорфинов, дофамина, серотонина и эндогенного ДМТ. Эта священная нейрохимическая буря оставляет неизгладимый след покоя, сострадания и бесстрашия в структурах мозга.",
      quote: "«Экстаз — это выход из отдельного я и вход в бесконечное единство божественного сознания».",
      quoteAuthor: "Плотин"
    },
    zh: {
      title: "狂喜（神性）——神秘的合一与自我超越",
      subtitle: "意识的第四层面：默认模式网络（DMN）的消解与向宇宙意识的飞跃。",
      p1: "狂喜是超越的终极状态，自我的边界在其中彻底消融。现代神经科学表明，在深度的神秘状态或超觉冥想期间，产生独立自我感的默认模式网络（DMN）活动急剧下降。",
      p2: "这种失活使大脑体验到与万物绝对的合一，东方传统称之为三摩地，西方神秘主义称之为神秘合一。这是一种非二元的心智状态，观察者与被观察者的二元性消失了，留下的只有纯净、光辉的存在。",
      p3: "在神经化学层面，狂喜涉及内啡肽、多巴胺、血清素和内源性DMT的独特协同作用。这场神圣的神经化学风暴在大脑结构中留下了和平、同情和无畏的永久印记。",
      quote: "“狂喜是离开分离的自我，进入神圣意识的无限统一。”",
      quoteAuthor: "普罗提诺"
    }
  },
  "epigenetics-gabor-mate": {
    ro: {
      title: "Epigenetica și Moștenirea Răului — Dr. Gabor Maté",
      subtitle: "Epigenetica trage trăgaciul: cum traumele generaționale și mediul ne activează vulnerabilitățile moleculare.",
      p1: "Epigenetica reprezintă studiul modificărilor activității genelor care nu implică schimbări ale secvenței de ADN. La nivelul neurobiologiei adicției, genetica dictează „încărcarea armei”, dar epigenetica și mediul trag trăgaciul. Traumele generațiilor trecute, suferința maternă prenatală și abuzurile timpurii modifică expresia genelor receptorilor de glucocorticoizi, alterând permanent răspunsul la stres.",
      p2: "Dr. Gabor Maté subliniază că dependența este întotdeauna un răspuns la suferință. Ea nu este o alegere liberă sau o boală cerebrală izolată, ci o încercare adaptativă de a face față unei dureri nespuse. Atunci când mediul de dezvoltare timpurie este lipsit de siguranță emotională, semnele epigenetice blochează sistemul nervos în stări cronice de hiper-vigilență, făcând substanța psihoactivă un refugiu chimic irezistibil.",
      quote: "„Nu întreba de ce dependența, întreabă de ce durerea.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    en: {
      title: "Epigenetics and the Inheritance of Pain — Dr. Gabor Maté",
      subtitle: "Epigenetics pulls the trigger: how generational trauma and environment activate our molecular vulnerabilities.",
      p1: "Epigenetics is the study of changes in gene activity that do not involve alterations to the underlying DNA sequence. In the neurobiology of addiction, genetics dictates the 'loading of the gun', but epigenetics and the environment pull the trigger. Generational trauma, prenatal maternal distress, and early childhood abuse modify the expression of glucocorticoid receptor genes, permanently altering the stress response.",
      p2: "Dr. Gabor Maté emphasizes that addiction is always a response to suffering. It is not a free choice or a brain disease in a vacuum, but an adaptive attempt to cope with unspoken pain. When the early development environment lacks emotional safety, epigenetic marks lock the nervous system into chronic hyper-vigilance, making the psychoactive substance an irresistible chemical refuge.",
      quote: "“Don't ask why the addiction, ask why the pain.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    es: {
      title: "La Epigenética y la Herencia del Dolor — Dr. Gabor Maté",
      subtitle: "La epigenética aprieta el gatillo: cómo el trauma generacional y el entorno activan nuestras vulnerabilidades moleculares.",
      p1: "La epigenética es el estudio de los cambios en la actividad genética que no implican alteraciones en la secuencia de ADN subyacente. En la neurobiología de la adicción, la genética dicta la 'carga del arma', pero la epigenética y el entorno aprietan el gatillo. El trauma generacional, el estrés materno prenatal y el abuso infantil temprano modifican la expresión de los genes de los receptores de glucocorticoides, alterando permanentemente la respuesta al estrés.",
      p2: "El Dr. Gabor Maté enfatiza que la adicción es siempre una respuesta al sufrimiento. No es una libre elección o una enfermedad cerebral aislada, sino un intento adaptativo de hacer frente a un dolor no expresado. Cuando el entorno de desarrollo temprano carece de seguridad emocional, las marcas epigenéticas bloquean el sistema nervioso en estados de hipervigilancia crónica, convirtiendo la sustancia psicoactiva en un refugio químico irresistible.",
      quote: "“No preguntes por qué la adicción, sino por qué el dolor.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    pt: {
      title: "A Epigenética e a Herdabilidade da Dor — Dr. Gabor Maté",
      subtitle: "A epigenética puxa o gatilho: como os traumas geracionais e o ambiente ativam as nossas vulnerabilidades moleculares.",
      p1: "A epigenética é o estudo das alterações na atividade genética que não envolvem mudanças na sequência do ADN. Na neurobiologia da adicção, a genética dita a 'carga da arma', mas a epigenética e o ambiente puxam o gatilho. Traumas geracionais, sofrimento materno pré-natal e abusos na infância modificam a expressão dos genes dos recetores de glucocorticoides, alterando permanentemente a resposta ao stress.",
      p2: "O Dr. Gabor Maté sublinha que a adicção é sempre uma resposta ao sofrimento. Não é uma escolha livre ou uma doença cerebral isolada, mas uma tentativa adaptativa de lidar com uma dor não revelada. Quando o ambiente de desenvolvimento inicial carece de segurança emocional, as marcas epigenéticas bloqueiam o sistema nervoso em estados crónicos de hipervigilância, tornando a substância psicoativa um refúgio químico irresistível.",
      quote: "“Não pergunte por que a adicção, pergunte por que a dor.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    ru: {
      title: "Эпигенетика и Наследование Боли — Д-р Габор Матэ",
      subtitle: "Эпигенетика спускает курок: как межпоколенческая травма и среда активируют наши молекулярные уязвимости.",
      p1: "Эпигенетика — это изучение изменений активности генов, не связанных с изменениями в последовательности ДНК. В нейробиологии зависимости генетика диктует «зарядку оружия», но эпигенетика и окружающая среда спускают курок. Межпоколенческие травмы, пренатальный материнский стресс и жестокое обращение в детстве изменяют экспрессию генов рецепторов глюкокортикоидов, навсегда меняя реакцию на стресс.",
      p2: "Доктор Габор Матэ подчеркивает, что зависимость — это всегда ответ на страдание. Это не свободный выбор или изолированная болезнь мозга, а адаптивная попытка справиться с невысказанной болью. Когда ранней среде развития не хватает эмоциональной безопасности, эпигенетические метки запирают нервную систему в состояниях хронической гипербдительности, делая психоактивное вещество непреодолимым химическим прибежищем.",
      quote: "«Не спрашивайте, почему зависимость, спросите, почему боль».",
      quoteAuthor: "Д-р Габор Матэ"
    },
    zh: {
      title: "表观遗传学与痛苦的传承 —— Gabor Maté 博士",
      subtitle: "表观遗传学扣动扳机：代际创伤和环境如何激活我们的分子脆弱性。",
      p1: "表观遗传学是研究不涉及潜在DNA序列改变的基因活动变化的学科。在成瘾的神经生物学中，遗传学决定了“子弹上膛”，而表观遗传学和环境扣动了扳机。代际创伤、产前母亲的痛苦以及童年早期的虐待改变了糖皮质激素受体基因的表达，永久性地改变了压力反应。",
      p2: "Gabor Maté 博士强调，成瘾始终是对痛苦的回应。它不是自由的选择或孤立的大脑疾病，而是一种适应性的尝试，以应对无法言说的痛苦。当早期发育环境缺乏情感安全感时，表观遗传标记会将神经系统锁定在慢性高度警觉状态，使精神活性物质成为不可抗拒的化学避难所。",
      quote: "“不要问为什么成瘾，要问为什么痛苦。”",
      quoteAuthor: "Gabor Maté 博士"
    }
  },
  "collective-trauma-hpa": {
    ro: {
      title: "Trauma Colectivă și Axa HPA — Când Alarma Nu Se Oprește",
      subtitle: "Stresul cronic sistemic dereglează axa Hipotalamo-Hipofizo-Suprarenală, forțând creierul în mod permanent de supraviețuire.",
      p1: "Axa HPA (Hipotalamo-Hipofizo-Suprarenală) reprezintă sistemul central de control al răspunsului la stres din corpul uman. Când percepem un pericol, hipotalamusul eliberează CRH, glanda hipofiză secretă ACTH, iar glandele suprarenale eliberează cortizol și adrenalină, pregătind organismul pentru luptă sau fugă. Într-un sistem sănătos, cortizolul exercită un feedback negativ, oprind alarma odată ce pericolul a trecut.",
      p2: "În caz de traumă colectivă, excluziune socială sau stres cronic sistemic, semnalele de pericol nu se opresc niciodată. Axa HPA suferă o dereglare profundă: receptorii de cortizol devin rezistenți, ducând la inflamație cronică, epuizare și alterarea funcțiilor executive din cortexul prefrontal. Creierul rămâne blocat într-un mod permanent de supraviețuire, unde frica și izolarea sunt stările de bază, iar o substanță amortizoare devine singura cale de eliberare temporară.",
      quote: "„Trauma nu este ceea ce ți se întâmplă ție, ci ceea ce se întâmplă în interiorul tău ca urmare a ceea ce ți s-a întâmplat.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    en: {
      title: "Collective Trauma and the HPA Axis — When the Alarm Never Stops",
      subtitle: "Systemic chronic stress deranges the Hypothalamic-Pituitary-Adrenal axis, forcing the brain into permanent survival mode.",
      p1: "The HPA (Hypothalamic-Pituitary-Adrenal) axis is the central control system for the stress response in the human body. When danger is perceived, the hypothalamus releases CRH, the pituitary gland secretes ACTH, and the adrenal glands release cortisol and adrenaline, preparing the organism for fight or flight. In a healthy system, cortisol exerts negative feedback, turning off the alarm once danger has passed.",
      p2: "Under collective trauma, social exclusion, or systemic chronic stress, danger signals never stop. The HPA axis undergoes deep dysregulation: cortisol receptors become resistant, leading to chronic inflammation, exhaustion, and impaired executive functions in the prefrontal cortex. The brain remains locked in permanent survival mode, where fear and isolation are baseline states, and a numbing substance becomes the only path to temporary relief.",
      quote: "“Trauma is not what happens to you, it is what happens inside you as a result of what happened to you.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    es: {
      title: "El Trauma Colectivo y el Eje HPA — Cuando la Alarma Nunca Para",
      subtitle: "El estrés crónico sistémico desregula el eje Hipotálamos-Hipófisis-Adrenal, forzando al cerebro al modo de supervivencia permanente.",
      p1: "El eje HPA (Hipotálamos-Hipófisis-Adrenal) representa el sistema de control central de la respuesta al estrés en el cuerpo humano. Cuando se percibe peligro, el hipotálamo libera CRH, la glándula pituitaria secreta ACTH y las glándulas suprarrenales liberan cortisol y adrenalina, preparando al organismo para luchar o huir. En un sistema saludable, el cortisol ejerce una retroalimentación negativa, apagando la alarma una vez que ha pasado el peligro.",
      p2: "En caso de trauma colectivo, exclusión social o estrés crónico sistémico, las señales de peligro nunca cesan. El eje HPA sufre una desregulación profunda: los receptores de cortisol se vuelven resistentes, lo que provoca inflamación crónica, agotamiento y alteración de las funciones ejecutivas en la corteza prefrontal. El cerebro permanece bloqueado en un modo de supervivencia permanente, donde el miedo y el aislamiento son los estados de base, y una sustancia amortiguadora se convierte en la única forma de alivio temporal.",
      quote: "“El trauma no es lo que te sucede a ti, sino lo que sucede dentro de ti como resultado de lo que te sucedió.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    pt: {
      title: "O Trauma Coletivo e o Eixo HPA — Quando o Alarme Nunca Pára",
      subtitle: "O stress crónico sistémico desregula o eixo Hipotálamo-Pituitária-Adrenal, forçando o cérebro ao modo de sobrevivência permanente.",
      p1: "O eixo HPA (Hipotálamo-Pituitária-Adrenal) representa o sistema de controlo central da resposta ao stress no corpo humano. Quando o perigo é percebido, o hipotálamo liberta CRH, a glândula pituitária secreta ACTH e as glândulas suprarrenais libertam cortisol e adrenalina, preparando o organismo para lutar ou fugir. Num sistema saudável, o cortisol exerce retroalimentação negativa, desligando o alarme quando o perigo passa.",
      p2: "Em caso de trauma coletivo, exclusão social ou stress crónico sistémico, os sinais de perigo nunca param. O eixo HPA sofre uma desregulação profunda: os recetores de cortisol tornam-se resistentes, levando a inflamação crónica, exaustão e alteração das funções executivas no córtex pré-frontal. O cérebro permanece bloqueado num modo de sobrevivência permanente, onde o medo e o isolamento são estados de base, e uma substância anestesiante torna-se a única via de alívio temporário.",
      quote: "“O trauma não é o que te acontece, é o que acontece dentro de ti como resultado do que te aconteceu.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    ru: {
      title: "Коллективная Травма и Ось HPA — Когда Тревога Не Прекращается",
      subtitle: "Системный хронический стресс нарушает работу гипоталамо-гипофизарно-надпочечниковой оси, переводя мозг в режим выживания.",
      p1: "Ось HPA (Гипоталамо-Гипофизарно-Надпочечниковая) — это центральная система контроля стрессовых реакций в организме человека. При восприятии опасности гипоталамус выделяет CRH, гипофиз секретирует ACTH, а надпочечники выделяют кортизол и адреналин, подготавливая организм к борьбе или бегству. В здоровой системе кортизол осуществляет отрицательную обратную связь, выключая тревогу после того, как опасность миновала.",
      p2: "При коллективной травме, социальной изоляции или системном хроническом стрессе сигналы опасности не прекращаются. Ось HPA претерпевает глубокую дисрегуляцию: рецепторы кортизола становятся устойчивыми, что приводит к хроническому воспалению, истощению и нарушению исполнительных функций префронтальной коры. Мозг остается заблокированным в режиме постоянного выживания, где страх и изоляция являются базовыми состояниями, а заглушающее вещество становится единственным путем к временному облегчению.",
      quote: "«Травма — это не то, что происходит с вами, а то, что происходит внутри вас в результате того, что с вами произошло».",
      quoteAuthor: "Д-р Габор Матэ"
    },
    zh: {
      title: "集体创伤与HPA轴——当警报永不停歇",
      subtitle: "系统性慢性压力扰乱了下丘脑-垂体-肾上腺轴，迫使大脑进入永久的生存模式。",
      p1: "HPA（下丘脑-垂体-肾上腺）轴是人体中枢对压力反应的控制系统。当我们感知到危险时，下丘脑释放CRH，垂体分泌ACTH，肾上腺释放皮质醇和肾上腺素，使机体做好战斗或逃跑的准备。在一个健康的系统中，皮质醇发挥负反馈作用，一旦危险过去就关闭警报。",
      p2: "在经历集体创伤、社会排斥或系统性慢性压力时，危险信号永远不会停止。HPA轴经历了严重的失调：皮质醇受体产生抗性，导致慢性炎症、疲惫以及前额叶皮层的执行功能受损。大脑陷入永久的生存模式中，恐惧和孤立成为基本状态，而麻木感官的物质成了暂时解脱的唯一途径。",
      quote: "“创伤不是发生在你身上的事，而是由于发生在你身上的事，在你内在所发生的变化。”",
      quoteAuthor: "Gabor Maté 博士"
    }
  },
  "human-connection": {
    ro: {
      title: "Conexiunea Umană — Antidotul Neurobiologic al Dependenței",
      subtitle: "„Opusul dependenței nu este simpla abstinență. Este conexiunea umană.” — Johann Hari",
      p1: "Dependența nu este o problemă de moralitate sau o simplă defecțiune chimică a creierului; ea este, la rădăcină, o încercare disperată de a rezolva o suferință umană fundamentală: durerea deconectării și a traumei. Dr. Gabor Maté afirmă că întrebarea corectă nu este „De ce dependența?”, ci „De ce durerea?”.",
      p2: "În anii 1970, psihologul Bruce Alexander a contestat experimentele clasice de dependență, construind „Rat Park”: un spațiu vast, plin de hrană, jucări și, cel mai important, alți șobolani cu care să interacționeze. Rezultatul a fost uluitor: deși aveau acces liber la aceeași apă cu morfină, șobolanii din Rat Park au ignorat-o aproape în totalitate. Concluzia este clară: mediul și conexiunea socială dictează vulnerabilitatea la adicție.",
      p3: "Din punct de vedere neurobiologic, ocitocina (hormonul atașamentului) calmează amigdala hiper-reactivă din stările de traumă și adicție. Ea modulează eliberarea de dopamină în nucleul accumbens, temperând poftele. De asemenea, interacțiunea socială caldă eliberează natural endorfine. Vindecarea necesită refacerea arhitecturii relaționale: de la om la om, de la inimă la inimă.",
      quote: "„A fi văzut, auzit și acceptat de o altă ființă umană este cel mai puternic tranchilizant biologic disponibil speciei noastre.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    en: {
      title: "Human Connection — The Neurobiological Antidote to Addiction",
      subtitle: "“The opposite of addiction is not sobriety. It is human connection.” — Johann Hari",
      p1: "Addiction is not a moral failure or a simple chemical malfunction of the brain; at its core, it is a desperate attempt to solve a fundamental human suffering: the pain of disconnection and trauma. Dr. Gabor Maté asserts that the right question is not 'Why the addiction?', but 'Why the pain?'.",
      p2: "In the 1970s, psychologist Bruce Alexander challenged classical addiction experiments by building 'Rat Park': a spacious area filled with food, toys, and, crucially, other rats to interact with. The result was astonishing: although they had free access to the same morphine water, the rats in Rat Park ignored it almost entirely. The conclusion is clear: environment and social connection dictate vulnerability to addiction.",
      p3: "Neurobiologically, oxytocin (the attachment hormone) calms the hyper-reactive amygdala in trauma and addiction states. It modulates dopamine release in the nucleus accumbens, tempering cravings. Furthermore, warm social interaction naturally releases endorphins. Healing requires restoring the relational architecture: from human to human, from heart to heart.",
      quote: "“Being seen, heard, and accepted by another human being is the most powerful biological tranquilizer available to our species.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    es: {
      title: "La Conexión Humana — El Antídoto Neurobiológico de la Adicción",
      subtitle: "“Lo opuesto a la adicción no es la sobriedad. Es la conexión humana.” — Johann Hari",
      p1: "La adicción no es un problema de moralidad o un simple malfuncionamiento químico del cerebro; en su raíz, es un intento desesperado por resolver un sufrimiento humano fundamental: el dolor de la desconexión y el trauma. El Dr. Gabor Maté afirma que la pregunta correcta no es '¿Por qué la adicción?', sino '¿Por qué el dolor?'.",
      p2: "En la década de 1970, el psicólogo Bruce Alexander desafió los experimentos clásicos de adicción construyendo 'Rat Park': un espacio amplio, lleno de comida, juguetes y, lo más importante, otros ratas con los que interactuar. El resultado fue asombroso: aunque tenían libre acceso al mismo agua con morfina, las ratas de Rat Park la ignoraron casi por completo. La conclusión es clara: el entorno y la conexión social dictan la vulnerabilidad a la adicción.",
      p3: "Neurobiológicamente, la oxitocina (la hormona del apego) calma la amígdala hiperreactiva en estados de trauma y adicción. Modula la liberación de dopamina en el núcleo accumbens, atenuando los antojos. Además, la interacción social cálida libera endorfinas de forma natural. La curación requiere restaurar la arquitectura relacional: de persona a persona, de corazón a corazón.",
      quote: "“Ser visto, escuchado y aceptado por otro ser humano es el tranquilizante biológico más poderoso disponible para nuestra especie.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    pt: {
      title: "A Conexão Humana — O Antídoto Neurobiológico da Adição",
      subtitle: "“O oposto da adição não é a sobriedade. É a conexão humana.” — Johann Hari",
      p1: "A adição não é um problema de moralidade ou um simples mau funcionamento químico do cérebro; na sua raiz, é uma tentativa desesperada de resolver um sofrimento humano fundamental: a dor da desconexão e do trauma. O Dr. Gabor Maté afirma que a pergunta correta não é 'Por que a adição?', mas 'Por que a dor?'.",
      p2: "Na década de 1970, o psicólogo Bruce Alexander desafiou os testes clássicos de adicção construindo o 'Rat Park': um espaço amplo, cheio de comida, brinquedos e, mais importante, outros ratos com quem interagir. O resultado foi espantoso: embora tivessem livre acesso à mesma água com morfina, os ratos no Rat Park ignoraram-na quase por completo. A conclusão é clara: o ambiente e a conexão social ditam a vulnerabilidade à adicção.",
      p3: "Do ponto de vista neurobiológico, a ocitocina (a hormona do apego) acalma a amígdala hiper-reativa nos estados de trauma e adicção. Modula a libertação de dopamina no núcleo accumbens, temperando os desejos. Além disso, a interação social calorosa liberta endorfinas naturalmente. A cura requer a restauração da arquitetura relacional: de pessoa para pessoa, de coração para coração.",
      quote: "“Ser visto, ouvido e aceite por outro ser humano é o tranquilizante biológico mais poderoso disponível para a nossa espécie.”",
      quoteAuthor: "Dr. Gabor Maté"
    },
    ru: {
      title: "Человеческая Связь — Нейробиологическое Противоядие от Зависимости",
      subtitle: "«Противоположностью зависимости является не трезвость. Это человеческая связь». — Иоганн Хари",
      p1: "Зависимость — это не проблема морали или простого химического сбоя в мозгу; в своей основе это отчаянная попытка разрешить фундаментальное человеческое страдание: боль разобщенности и травмы. Доктор Габор Матэ утверждает, что правильный вопрос не в том, «Почему зависимость?», а в том, «Почему боль?».",
      p2: "В 1970-х годах психолог Брюс Александер оспорил классические эксперименты с зависимостью, построив « Крысиный парк» (Rat Park): просторную зону, наполненную едой, игрушками и, самое главное, другими крысами для общения. Результат был поразительным: хотя у них был свободный доступ к той же воде с морфином, крысы в «Крысином парке» почти полностью игнорировали ее. Вывод ясен: окружающая среда и социальные связи определяют уязвимость к зависимости.",
      p3: "С нейробиологической точки зрения окситоцин (гормон привязанности) успокаивает гиперактивную миндалину в состояниях травмы и зависимости. Он модулирует высвобождение дофамина в прилежащем ядре, притупляя тягу. Кроме того, теплое социальное взаимодействие естественным образом высвобождает эндорфины. Исцеление требует восстановления реляционной архитектуры: от человека к человеку, от сердца к сердцу.",
      quote: "«Быть увиденным, услышанным и принятым другим человеческим существом — это самый мощный биологический транквилизатор, доступный нашему виду».",
      quoteAuthor: "Д-р Габор Матэ"
    },
    zh: {
      title: "人际连接——成瘾的神经生物学解药",
      subtitle: "“成瘾的反面不是清醒。它是人际连接。”——Johann Hari",
      p1: "成瘾不是道德败坏或大脑单纯的化学故障；在核心层面，它是解决基本人类苦难（断连和创伤之痛）的一种绝望尝试。Gabor Maté博士断言，正确的问题不是“为什么成瘾？”，而是“为什么痛苦？”。",
      p2: "在20世纪70年代，心理学家Bruce Alexander通过建立“老鼠乐园”来挑战经典的成瘾实验：一个宽敞的区域，充满了食物、玩具，最重要的是，还有其他可以互动的老鼠。结果令人震惊：尽管它们可以自由获得同样的吗啡水，但老鼠乐园里的老鼠几乎完全忽略了它。结论很明确：环境和社交联系决定了对成瘾的脆弱性。",
      p3: "在神经生物学层面，催产素（依恋激素）能平静创伤和成瘾状态下过度反应的杏仁核。它调节伏隔核中的多巴胺释放，从而抑制渴望。此外，温暖的社交互动会自然释放内啡肽。治愈需要重建关系架构：从人到人，从心到心。",
      quote: "“被另一个人看到、听到并接受，是我们这个物种所能获得的最强大的生物镇静剂。”",
      quoteAuthor: "Gabor Maté 博士"
    }
  },
  "medical-shield": {
    ro: {
      title: "Scutul Medical — Echilibrarea Biologică de Urgență",
      subtitle: "Faza 1: Utilizarea Naltrexonei și Suboxonei pentru reducerea zgomotului chimic din creier.",
      p1: "În faza inițială a recuperării din dependențele severe, creierul este dominat de o furtună de pofte chimice intense și simptome fizice dureroase de sevraj. Cortexul prefrontal, responsabil de deciziile raționale și autocontrol, este practic deconectat, lăsând persoana la mila instinctelor de supraviețuire din creierul reptilian.",
      p2: "Medicina modernă folosește un „scut biologic” protector pentru a restabili un spațiu minim de decizie rațională. Substanțe precum Naltrexona (un antagonist al receptorilor opioizi care blochează complet starea de euforie artificială) și Suboxona (o combinație de buprenorfină și naloxonă care reduce simptomele acute de sevraj) stabilizează neurochimia blocată, oferind cortexului prefrontal oportunitatea de a se reangaja în viața conștientă fără presiunea continuă a cravingului.",
      quote: "„Stabilizarea biologică nu este vindecarea în sine, ci crearea spațiului în care vindecarea psihologică și spirituală devine posibilă.”",
      quoteAuthor: "Neuro-Medicină Modernă"
    },
    en: {
      title: "The Medical Shield — Emergency Biological Stabilization",
      subtitle: "Phase 1: Utilizing Naltrexone and Suboxone to reduce chemical noise in the brain.",
      p1: "In the initial phase of recovery from severe addictions, the brain is dominated by a storm of intense chemical cravings and painful physical withdrawal symptoms. The prefrontal cortex, responsible for rational decisions and self-control, is virtually offline, leaving the person at the mercy of survival instincts in the emotional brain.",
      p2: "Modern medicine uses a protective 'biological shield' to restore a minimal window for rational choice. Substances like Naltrexone (an opioid receptor antagonist that completely blocks the synthetic high) and Suboxone (a combination of buprenorphine and naloxone that alleviates acute withdrawal) stabilize the disrupted neurochemistry, giving the prefrontal cortex the space to re-engage in conscious life without the constant pressure of cravings.",
      quote: "“Biological stabilization is not the cure itself, but the creation of the space where psychological and spiritual healing becomes possible.”",
      quoteAuthor: "Modern Neuro-Medicine"
    },
    es: {
      title: "El Escudo Médico — Estabilización Biológica de Emergencia",
      subtitle: "Fase 1: Uso de Naltrexona y Suboxona para reducir el ruido químico en el cerebro.",
      p1: "En la fase inicial de la recuperación de adicciones graves, el cerebro está dominado por una tormenta de antojos químicos intensos y dolorosos síntomas de abstinencia física. La corteza prefrontal, responsable de las decisiones racionales y el autocontrol, está prácticamente desconectada, dejando a la persona a merced de los instintos de supervivencia en el cerebro emocional.",
      p2: "La medicina moderna utiliza un 'escudo biológico' protector para restaurar una ventana mínima de elección racional. Sustancias como la Naltrexona (un antagonista de los receptores opioides que bloquea por completo la euforia sintética) y la Suboxona (una combinación de buprenorfina y naloxona que alivia la abstinencia aguda) estabilizan la neuroquímica alterada, dando a la corteza prefrontal el espacio para volver a participar en la vida consciente sin la presión constante de los antojos.",
      quote: "“La estabilización biológica no es la cura en sí misma, sino la creación del espacio donde la curación psicológica y espiritual se vuelve posible.”",
      quoteAuthor: "Neuro-Medicina Moderna"
    },
    pt: {
      title: "O Escudo Médico — Estabilização Biológica de Emergência",
      subtitle: "Fase 1: Utilização de Naltrexona e Suboxona para reduzir o ruído químico no cérebro.",
      p1: "Na fase inicial da recuperação de adicções graves, o cérebro é dominado por uma tempestade de desejos químicos intensos e sintomas físicos dolorosos de privação. O córtex pré-frontal, responsável pelas decisões racionais e pelo autocontrolo, está praticamente desligado, deixando a pessoa à mercê dos instintos de sobrevivência no cérebro emocional.",
      p2: "A medicina moderna utiliza um 'escudo biológico' protetor para restaurar uma janela mínima de escolha racional. Substâncias como a Naltrexona (um antagonista dos recetores opioides que bloqueia completamente a euforia sintética) e a Suboxona (uma combinação de buprenorfina e naloxona que alivia a privação aguda) estabilizam a neuroquímica perturbada, dando ao córtex pré-frontal o espaço para voltar a envolver-se na vida consciente sem a pressão constante dos desejos.",
      quote: "“A estabilização biológica não é a cura em si, mas a criação do espaço onde a cura psicológica e espiritual se torna possível.”",
      quoteAuthor: "Neuro-Medicina Moderna"
    },
    ru: {
      title: "Медицинский Щит — Экстренная Биологическая Стабилизация",
      subtitle: "Фаза 1: Использование Налтрексона и Субоксона для снижения химического шума в мозге.",
      p1: "В начальной фазе восстановления от тяжелых зависимостей в мозге доминирует буря интенсивной химической тяги и болезненных физических симптомов абстиненции. Префронтальная кора, отвечающая за рациональные решения и самоконтроль, практически отключена, оставляя человека во власти инстинктов выживания в эмоциональном мозге.",
      p2: "Современная медицина использует защитный «биологический щит» для восстановления минимального пространства для рационального выбора. Такие вещества, как Налтрексон (антагонист опиоидных рецепторов, полностью блокирующий искусственную эйфорию) и Субоксон (комбинация бупренорфина и налоксона, облегчающая острый синдром отмены), стабилизируют нарушенную нейрохимию, давая префронтальной коре возможность вернуться к осознанной жизни без постоянного давления тяги.",
      quote: "«Биологическая стабилизация — это не само исцеление, а создание пространства, в котором становится возможным психологическое и духовное исцеление».",
      quoteAuthor: "Современная Нейромедицина"
    },
    zh: {
      title: "医疗屏障——紧急的生物学稳定",
      subtitle: "第一阶段：使用纳曲酮（Naltrexone）和赛宝松（Suboxone）来减少大脑中的化学噪音。",
      p1: "在从严重成瘾中恢复的初始阶段，大脑被强烈的化学物质渴望和痛苦的身体戒断症状的风暴所主导。负责理性决策和自我控制的前额叶皮层实际上处于离线状态，让人受制于情绪大脑中的生存本能。",
      p2: "现代医学使用一种保护性的“生物学屏障”来恢复理性选择的最小窗口。纳曲酮（一种阿片受体拮抗剂，能完全阻断合成快感）和赛宝松（丁丙诺啡和纳洛酮的组合，可缓解急性戒断症状）等物质能稳定紊乱的神经化学，为前额叶皮层提供空间，使其能够在没有渴望持续压力的情况下重新参与意识生活。",
      quote: "“生物学稳定并不是治愈本身，而是创造了使心理和精神愈合成为可能的发展空间。”",
      quoteAuthor: "现代神经医学"
    }
  },
  neuroplasticity: {
    ro: {
      title: "Neuroplasticitatea — Recablarea Conștientă a Creierului",
      subtitle: "Faza 2: Cum prezența conștientă și obiceiurile noi modifică legăturile sinaptice.",
      p1: "Neuroplasticitatea reprezintă capacitatea creierului de a se reorganiza structural și funcțional prin formarea de noi conexiuni neuronale de-a lungul vieții. Creierul nu este un computer rigid; el seamănă mai degrabă cu o masă de argilă ce este modelată de experiențele, atenția și ritualurile noastre zilnice.",
      p2: "În procesul de recuperare, neuroplasticitatea este motorul schimbării. De fiecare dată când alegem un comportament nou, sănătos (cum ar fi meditația, exercițiul fizic sau respirația conștientă) în detrimentul comportamentului adictiv compulsiv, vechile căi neuronale ale adicției slăbesc prin neutilizare (pruning sinaptic), iar noile rețele se întăresc prin repetiție. Acest proces este facilitat biochimic de eliberarea BDNF (factorul neurotrofic derivat din creier) în timpul antrenamentului fizic și mental.",
      quote: "„Neuronii care se descarcă împreună se conectează împreună. Schimbă-ți atenția și îți vei schimba creierul.”",
      quoteAuthor: "Dr. Donald Hebb"
    },
    en: {
      title: "Neuroplasticity — Conscious Rewiring of the Brain",
      subtitle: "Phase 2: How conscious presence and new habits modify synaptic connections.",
      p1: "Neuroplasticity is the brain's ability to reorganize itself structurally and functionally by forming new neural connections throughout life. The brain is not a rigid computer; it is more like a clay mass shaped by our daily experiences, focus, and rituals.",
      p2: "In the recovery process, neuroplasticity is the engine of change. Every time we choose a new, healthy behavior (like meditation, exercise, or conscious breathing) over compulsive addictive behavior, the old neural pathways of addiction weaken through disuse (synaptic pruning), while new networks strengthen through repetition. This process is biochemically supported by BDNF release during physical and mental training.",
      quote: "“Neurons that fire together wire together. Change your focus, and you will change your brain.”",
      quoteAuthor: "Dr. Donald Hebb"
    },
    es: {
      title: "La Neuroplasticidad — Reconfiguración Consciente del Cerebro",
      subtitle: "Fase 2: Cómo la presencia consciente y los nuevos hábitos modifican las conexiones sinápticas.",
      p1: "La neuroplasticidad es la capacidad del cerebro para reorganizarse estructural y funcionalmente formando nuevas conexiones neuronales a lo largo de la vida. El cerebro no es una computadora rígida; es más como una masa de arcilla moldeada por nuestras experiencias diarias, enfoque y rituales.",
      p2: "En el proceso de recuperación, la neuroplasticidad es el motor del cambio. Cada vez que elegimos un comportamiento nuevo y saludable (como la meditación, el ejercicio o la respiración consciente) en lugar de un comportamiento adictivo compulsivo, las viejas vías neuronales de la adicción se debilitan por desuso (poda sináptica), mientras que las nuevas redes se fortalecen mediante la repetición. Este proceso es apoyado bioquímicamente por la liberación de BDNF durante el entrenamiento físico y mental.",
      quote: "“Las neuronas que se encienden juntas, se conectan juntas. Cambia tu enfoque y cambiarás tu cerebro.”",
      quoteAuthor: "Dr. Donald Hebb"
    },
    pt: {
      title: "A Neuroplasticidade — Reconfiguração Consciente do Cérebro",
      subtitle: "Fase 2: Como a presença consciente e os novos hábitos modificam as conexões sinápticas.",
      p1: "A neuroplasticidade é a capacidade do cérebro de se reorganizar estrutural e funcionalmente, formando novas conexões neuronais ao longo da vida. O cérebro não é um computador rígido; é mais como uma massa de argila moldada pelas nossas experiências, foco e rituais diários.",
      p2: "No processo de recuperação, a neuroplasticidade é o motor da mudança. Cada vez que escolhemos um comportamento novo e saudável (como meditação, exercício físico ou respiração consciente) em vez do comportamento aditivo compulsivo, os antigos caminhos neuronais da adicção enfraquecem por desuso (poda sináptica), enquanto as novas redes se fortalecem através da repetição. Este processo é facilitado bioquimicamente pela libertação de BDNF durante o treino físico e mental.",
      quote: "“Neurónios que disparam juntos, conectam-se juntos. Mude o seu foco, e mudará o seu cérebro.”",
      quoteAuthor: "Dr. Donald Hebb"
    },
    ru: {
      title: "Нейропластичность — Осознанная Перенастройка Мозга",
      subtitle: "Фаза 2: Как осознанное присутствие и новые привычки изменяют синаптические связи.",
      p1: "Нейропластичность — это способность мозга перестраивать свою структуру и функции, создавая новые нейронные связи на протяжении всей жизни. Мозг — это не жесткий компьютер; он больше похож на глину, формируемую нашим ежедневным опытом, вниманием и ритуалами.",
      p2: "В процессе восстановления нейропластичность является двигателем изменений. Каждый раз, когда мы выбираем новое, здоровое поведение (медитация, физические упражнения или осознанное дыхание) вместо компульсивного зависимого поведения, старые нейронные пути зависимости ослабевают из-за неиспользования (синаптический прунинг), а новые сети укрепляются за счет повторения. Этот процесс биохимически поддерживается высвобождением BDNF во время физических и умственных тренировок.",
      quote: "«Нейроны, которые разряжаются вместе, связываются вместе. Измените фокус внимания, и вы измените свой мозг».",
      quoteAuthor: "Д-р Дональд Хебб"
    },
    zh: {
      title: "神经可塑性——大脑的有意识重塑",
      subtitle: "第二阶段：意识的存在和新习惯如何改变突触连接。",
      p1: "神经可塑性是大脑通过在整个生命过程中形成新的神经连接，在结构和功能上重组自身的能力。大脑不是一台僵硬的计算机；它更像是一块由我们的日常经历、专注和仪式塑造的粘土。",
      p2: "在恢复过程中，神经可塑性是改变的引擎。每次我们选择一种新的、健康的行为（如冥想、锻炼或有意识的呼吸）而不是强迫性的成瘾行为时，旧的成瘾神经通路就会因废用而减弱（突触修剪），而新网络则通过重复而增强。在身心训练期间，BDNF的释放为这一过程提供了生物化学支持。",
      quote: "“一起激发的神经元会连接在一起。改变你的焦点，你就会改变你的大脑。”",
      quoteAuthor: "Donald Hebb 博士"
    }
  },
  roots: {
    ro: {
      title: "Rădăcinile Neurobiologice ale Adicției",
      subtitle: "Înțelegerea profundă a modului în care stresul prenatal, traumele timpurii și epigenetica ne modifică creierul.",
      p1: "Nimic nu se naște în vid. Adicția nu este o alegere rațională greșită, ci un răspuns adaptativ la durere și deconectare. La acest nivel structural, explorăm modul în care primele etape ale vieții și moștenirea genetică pun bazele sensibilității la substanțe.",
      p2: "Traumele generațiilor trecute, suferința prenatală și abuzurile timpurii modifică expresia genelor receptorilor de glucocorticoizi, alterând permanent răspunsul la stres. Când alarma de stres nu se oprește niciodată, o substanță care o poate reduce devine irezistibilă.",
      quote: "„Durerea nu este inamicul. Ea este doar mesagerul care ne spune că ceva necesită atenție și vindecare.”"
    },
    en: {
      title: "The Neurobiological Roots of Addiction",
      subtitle: "Understanding how prenatal stress, early trauma, and epigenetics alter the human brain.",
      p1: "Nothing is born in a vacuum. Addiction is not a rational mistake, but an adaptive response to pain and disconnection. At this structural level, we explore how early life stages and genetic inheritance lay the foundation for substance vulnerability.",
      p2: "Generational trauma, prenatal distress, and early abuse modify the expression of glucocorticoid receptor genes, permanently altering the stress response. When the stress alarm never stops, a substance that can quiet it becomes irresistible.",
      quote: "“Pain is not the enemy. It is simply the messenger telling us that something needs attention and healing.”"
    },
    es: {
      title: "Las Raíces Neurobiológicas de la Adicción",
      subtitle: "Comprender cómo el estrés prenatal, el trauma temprano y la epigenética alteran el cerebro humano.",
      p1: "Nada nace en el vacío. La adicción no es un error racional, sino una respuesta adaptativa al dolor y la desconexión. En este nivel estructural, exploramos cómo las primeras etapas de la vida y la herencia genética sientan las bases de la vulnerabilidad a las sustancias.",
      p2: "El trauma generacional, el estrés prenatal y el abuso temprano modifican la expresión de los genes de los receptores de glucocorticoides, alterando permanentemente la respuesta al estrés. Cuando la alarma de estrés nunca cesa, una sustancia que pueda acallarla se vuelve irresistible.",
      quote: "“El dolor no es el enemigo. Es simplemente el mensajero que nos dice que algo necesita atención y curación.”"
    },
    pt: {
      title: "As Raízes Neurobiológicas da Adicção",
      subtitle: "Compreender como o stress pré-natal, o trauma precoce e a epigenética alteram o cérebro humano.",
      p1: "Nada nasce no vazio. A adicção não é um erro racional, mas sim uma resposta adaptativa à dor e à desconexão. A este nível estrutural, exploramos como as primeiras fases da vida e a herança genética lançam as bases para a vulnerabilidade às substâncias.",
      p2: "Traumas geracionais, sofrimento pré-natal e abusos na infância modificam a expressão dos genes dos recetores de glucocorticoides, alterando permanentemente a resposta ao stress. Quando o alarme de stress nunca pára, uma substância que o acalme torna-se irresistível.",
      quote: "“A dor não é o inimigo. É simplesmente o mensageiro a dizer-nos que algo precisa de atenção e cura.”"
    },
    ru: {
      title: "Нейробиологические Корни Зависимости",
      subtitle: "Понимание того, как пренатальный стресс, ранняя травма и эпигенетика изменяют человеческий мозг.",
      p1: "Ничто не рождается в вакууме. Зависимость — это не рациональная ошибка, а адаптивный ответ на боль и разобщенность. На этом структурном уровне мы исследуем, как ранние этапы жизни и генетическое наследие закладывают основу для уязвимости перед веществами.",
      p2: "Межпоколенческие травмы, пренатальный стресс и раннее насилие изменяют экспрессию генов рецепторов глюкокортикоидов, навсегда меняя реакцию на стресс. Когда тревога никогда не прекращается, вещество, способное ее заглушить, становится непреодолимым.",
      quote: "«Боль — не враг. Это просто вестник, говорящий нам о том, что что-то требует внимания и исцеления»."
    },
    zh: {
      title: "成瘾的神经生物学根源",
      subtitle: "了解产前压力、早期创伤和表观遗传学如何改变人类大脑。",
      p1: "没有什么是凭空产生的。成瘾不是一个理性的错误，而是对痛苦和断连的一种适应性反应。在这个结构层面，我们将探讨生命早期阶段和遗传继承如何为物质脆弱性奠定基础。",
      p2: "代际创伤、产前痛苦和早期虐待改变了糖皮质激素受体基因的表达，永久性地改变了压力反应。当压力警报永远不会停止时，一种能让它平息的物质就变得不可抗拒。",
      quote: "“痛苦不是敌人。它只是一个信使，告诉我们有些东西需要关注和疗愈。”"
    }
  },
  homeostasis: {
    ro: {
      title: "Homeostazia Dinamică — Creierul în Căutarea Echilibrului",
      subtitle: "Echilibrul fragil între excitație și inhibiție, stres și autoreglare.",
      p1: "Homeostazia este capacitatea creierului și a corpului de a menține un mediu intern stabil în ciuda fluctuațiilor externe. În sistemul nervos, acest lucru se traduce prin echilibrul neurochimic fin între semnalele excitatorii (glutamat) și cele inhibitorii (GABA).",
      p2: "Adicția perturbă masiv acest echilibru, forțând creierul să funcționeze în stări de allostazie. Simulatorul din această secțiune îți arată în timp real cum se modifică undele cerebrale și ritmul cardiac între starea de repaus și suprastimulare.",
      quote: "„Sănătatea nu este absența stresului, ci capacitatea dinamică de a reveni la echilibru.”"
    },
    en: {
      title: "Dynamic Homeostasis — The Brain Seeking Balance",
      subtitle: "The fragile balance between excitation and inhibition, stress and self-regulation.",
      p1: "Homeostasis is the ability of the brain and body to maintain a stable internal environment despite external fluctuations. In the nervous system, this translates to the fine neurochemical balance between excitatory (glutamate) and inhibitory (GABA) signals.",
      p2: "Addiction heavily disrupts this balance, forcing the brain to operate in states of allostasis. The simulator in this section shows you in real-time how brainwaves and heart rate variability change between rest and hyper-stimulation.",
      quote: "“Health is not the absence of stress, but the dynamic capacity to return to balance.”"
    },
    es: {
      title: "Homeostasis Dinámica — El Cerebro en Busca de Equilibrio",
      subtitle: "El frágil equilibrio entre excitación e inhibición, estrés y autorregulación.",
      p1: "La homeostasis es la capacidad del cerebro y del cuerpo para mantener un ambiente interno estable a pesar de las fluctuaciones externas. En el sistema nervioso, esto se traduce en el fino equilibrio neuroquímico entre las señales excitatorias (glutamato) e inhibitorias (GABA).",
      p2: "La adicción altera profundamente este equilibrio, forzando al cerebro a operar en estados de alostasis. El simulador de esta sección te muestra en tiempo real cómo cambian las ondas cerebrales y la variabilidad del ritmo cardíaco entre el reposo y la hiperestimulación.",
      quote: "“La salud no es la ausencia de estrés, sino la capacidad dinámica de volver al equilibrio.”"
    },
    pt: {
      title: "Homeostase Dinâmica — O Cérebro em Busca de Equilíbrio",
      subtitle: "O equilíbrio frágil entre excitação e inibição, stress e autorregulação.",
      p1: "A homeostase é a capacidade do cérebro e do corpo de manter um ambiente interno estável, apesar das flutuações externas. No sistema nervoso, isso traduz-se no equilíbrio neuroquímico fino entre os sinais excitatórios (glutamato) e inibitórios (GABA).",
      p2: "A adicção perturba fortemente este equilíbrio, forçando o cérebro a operar em estados de alostase. O simulador nesta secção mostra-te em tempo real como as ondas cerebrais e a variabilidade do ritmo cardíaco mudam entre o repouso e a hiper-estimulação.",
      quote: "“A saúde não é a ausência de stress, mas sim a capacidade dinâmica de voltar ao equilíbrio.”"
    },
    ru: {
      title: "Динамический Гомеостаз — Мозг в Поиске Равновесия",
      subtitle: "Хрупкий баланс между возбуждением и торможением, стрессом и саморегуляцией.",
      p1: "Гомеостаз — это способность мозга и тела поддерживать стабильную внутреннюю среду, несмотря на внешние колебания. В нервной системе это выражается в тонком нейрохимическом балансе между возбуждающими (глутамат) и тормозными (ГАМК) сигналами.",
      p2: "Зависимость сильно нарушает этот баланс, заставляя мозг работать в состоянии аллостаза. Симулятор в этом разделе показывает в реальном времени, как меняются мозговые волны и вариабельность сердечного ритма между покоем и гиперстимуляцией.",
      quote: "«Здоровье — это не отсутствие стресса, а динамическая способность возвращаться к равновесию»."
    },
    zh: {
      title: "动态稳态——寻找平衡的大脑",
      subtitle: "兴奋与抑制、压力与自我调节之间的脆弱平衡。",
      p1: "稳态是大脑和身体在外部波动的情况下维持稳定的内部环境的能力。在神经系统中，这转化为兴奋性（谷氨酸）和抑制性（GABA）信号之间的精细神经化学平衡。",
      p2: "成瘾严重破坏了这种平衡，迫使大脑在稳态应激（allostasis）状态下运作。本节中的模拟器将向你实时展示脑电波和心率变异性在休息和过度刺激之间如何变化。",
      quote: "“健康不是没有压力，而是恢复平衡的动态能力。”"
    }
  },
  recovery: {
    ro: {
      title: "Axa Conștiinței — Calea de Întoarcere",
      subtitle: "Cum evoluăm din stările compulsive spre prezență pură și libertate.",
      p1: "Vindecarea nu este un eveniment punctual, ci o călătorie de-a lungul axei conștiinței. Pe măsură ce ne restabilim echilibrul biologic, trecem de la reacții automate conduse de frică la decizii conștiente conduse de cortexul prefrontal.",
      p2: "Această secțiune prezintă algoritmii neurobiologici ai recuperării: utilizarea terapiei medicale în fazele acute, urmată de recablarea sinaptică conștientă prin practici de mindfulness și conectare comunitară de lungă durată.",
      quote: "„Adevărata libertate nu înseamnă să faci tot ce vrei, ci să fii stăpân pe propriul sistem nervos.”"
    },
    en: {
      title: "The Axis of Consciousness — The Way Back",
      subtitle: "How we evolve from compulsive states toward pure presence and freedom.",
      p1: "Healing is not a one-time event, but a journey along the axis of consciousness. As we restore biological balance, we transition from automatic fear-driven reactions to conscious decisions led by the prefrontal cortex.",
      p2: "This section presents the neurobiological algorithms of recovery: utilizing medical therapy in acute phases, followed by conscious synaptic rewiring through mindfulness practices and long-term community connection.",
      quote: "“True freedom is not doing whatever you want, but being the master of your own nervous system.”"
    },
    es: {
      title: "El Eje de la Conciencia — El Camino de Regreso",
      subtitle: "Cómo evolucionamos desde estados compulsivos hacia la pura presencia y la libertad.",
      p1: "La curación no es un evento único, sino un viaje a lo largo del eje de la conciencia. A medida que restauramos el equilibrio biológico, hacemos la transición de reacciones automáticas impulsadas por el miedo a decisiones conscientes dirigidas por la corteza prefrontal.",
      p2: "Esta sección presenta los algoritmos neurobiológicos de la recuperación: la utilización de terapia médica en fases agudas, seguida de la reconfiguración sináptica consciente mediante prácticas de mindfulness y la conexión comunitaria a largo plazo.",
      quote: "“La verdadera libertad no es hacer lo que quieras, sino ser el dueño de tu propio sistema nervioso.”"
    },
    pt: {
      title: "O Eixo da Consciência — O Caminho de Volta",
      subtitle: "Como evoluímos de estados compulsivos para a pura presença e liberdade.",
      p1: "A cura não é um evento único, mas sim uma viagem ao longo do eixo da consciência. À medida que restauramos o equilíbrio biológico, transitamos de reações automáticas impulsionadas pelo medo para decisões conscientes lideradas pelo córtex pré-frontal.",
      p2: "A secção apresenta os algoritmos neurobiológicos da recuperação: a utilização da terapia médica em fases agudas, seguida da reconfiguração sináptica consciente através de práticas de mindfulness e de ligação comunitária a prazo.",
      quote: "“A verdadeira liberdade não é fazer o que se quer, mas sim ser senhor do seu próprio sistema nervoso.”"
    },
    ru: {
      title: "Ось Сознания — Путь Назад",
      subtitle: "Как мы эволюционируем от компульсивных состояний к чистому присутствию и свободе.",
      p1: "Исцеление — это не разовое событие, а путешествие по оси сознания. Восстанавливая биологический баланс, мы переходим от автоматических реакций, продиктованных страхом, к осознанным решениям под руководством префронтальной коры.",
      p2: "В этом разделе представлены нейробиологические алгоритмы выздоровления: использование медикаментозной терапии в острых фазах с последующей осознанной перенастройкой синапсов с помощью практик осознанности и долгосрочных связей в сообществе.",
      quote: "«Истинная свобода — это не делать все, что хочешь, а быть хозяином собственной нервной системы»."
    },
    zh: {
      title: "意识之轴——回归之路",
      subtitle: "我们如何从强迫状态演变为纯粹的存在和自由。",
      p1: "愈合不是一次性的事件，而是一次沿着意识之轴的旅程。随着我们恢复生物学平衡，我们从恐惧驱动的自动反应过渡到由前额叶皮层主导的有意识的决定。",
      p2: "本节介绍了恢复的神经生物学算法：在急性期利用医疗干预，随后通过正念练习和长期的社区联系进行有意识的突触重塑。",
      quote: "“真正的自由不是做你想做的事，而是做你自己的神经系统的主人。”"
    }
  },
  alcohol: {
    ro: {
      title: "Alcoolul — Refugiul Chimic al Deconectării",
      subtitle: "Cum alterează etanolul receptori GABA și glutamat, generând dependență fizică severă.",
      p1: "Alcoolul acționează ca un deprimant al sistemului nervos central, crescând activitatea receptorilor inhibitori GABA și blocând receptorii excitatori de glutamat (NMDA). Acest lucru induce starea inițială de relaxare și anestezie a durerii somatice.",
      p2: "Cu toate acestea, utilizarea cronică obligă creierul să se adapteze: reduce numărul de receptori GABA și sporește receptorii de glutamat pentru a contracara sedarea. Când consumul se oprește, apare o hiper-excitație glutamatergică severă care poate declanșa convulsii sau delirium tremens. Recuperarea necesită asistență medicală de urgență.",
      quote: "„Alcoolul spală temporar frica, dar lasă în urmă un creier epuizat și hiper-excitat.”"
    },
    en: {
      title: "Alcohol — The Chemical Refuge of Disconnection",
      subtitle: "How ethanol alters GABA and glutamate receptors, generating severe physical dependence.",
      p1: "Alcohol acts as a central nervous system depressant, increasing the activity of inhibitory GABA receptors and blocking excitatory glutamate (NMDA) receptors. This induces the initial state of relaxation and somatic pain numbing.",
      p2: "However, chronic use forces the brain to adapt: it reduces GABA receptors and increases glutamate receptors to counteract the sedation. When consumption stops, severe glutamatergic hyper-excitation occurs, which can trigger seizures or delirium tremens. Recovery requires urgent medical assistance.",
      quote: "“Alcohol temporarily washes away fear, but leaves behind an exhausted and hyper-excited brain.”"
    },
    es: {
      title: "El Alcohol — El Refugio Químico de la Desconexión",
      subtitle: "Cómo el etanol altera los receptores de GABA y glutamato, generando una grave dependencia física.",
      p1: "El alcohol actúa como un depresor del sistema nervioso central, aumentando la actividad de los receptores inhibidores de GABA y bloqueando los receptores excitadores de glutamato (NMDA). Esto induce el estado inicial de relajación y adormecimiento del dolor somático.",
      p2: "Sin embargo, el uso crónico obliga al cerebro a adaptarse: reduce los receptores de GABA y aumenta los de glutamato para contrarrestar la sedación. Cuando el consumo cesa, se produce una hiper-excitación glutamatérgica severa, que puede desencadenar convulsiones o delirium tremens. La recuperación requiere asistencia médica urgente.",
      quote: "“El alcohol borra temporalmente el miedo, pero deja atrás un cerebro agotado e hiperexcitado.”"
    },
    pt: {
      title: "O Álcool — O Refúgio Químico da Desconexão",
      subtitle: "Como o etanol altera os recetores de GABA e glutamato, gerando dependência física grave.",
      p1: "O álcool atua como um depressor do sistema nervoso central, aumentando a atividade dos recetores inibidores de GABA e bloqueando os recetores excitatórios de glutamato (NMDA). Isto induz o estado inicial de relaxamento e anestesia da dor somática.",
      p2: "No entanto, o uso crónico obriga o cérebro a adaptar-se: reduz os recetores de GABA e aumenta os de glutamato para contrariar a sedação. Quando o consumo pára, ocorre uma hiperexcitação glutamatérgica grave, que pode desencadear convulsões ou delirium tremens. A recuperação requer assistência médica urgente.",
      quote: "“O álcool afasta temporariamente o medo, mas deixa para trás um cérebro exausto e hiperexcitado.”"
    },
    ru: {
      title: "Алкоголь — Химическое Убежище Отчуждения",
      subtitle: "Как этанол изменяет рецепторы ГАМК и глутамата, вызывая тяжелую физическую зависимость.",
      p1: "Алкоголь действует как депрессант центральной нервной системы, усиливая активность тормозных ГАМК-рецепторов и блокируя возбуждающие глутаматные (NMDA) рецепторы. Это вызывает первоначальное состояние расслабления и соматического обезболивания.",
      p2: "Однако хроническое употребление заставляет мозг адаптироваться: он снижает количество ГАМК-рецепторов и увеличивает количество глутаматных рецепторов, чтобы противостоять торможению. При прекращении употребления возникает тяжелое глутаматергическое гипервозбуждение, способное вызвать судороги или delirium tremens. Восстановление требует срочной медицинской помощи.",
      quote: "«Алкоголь временно смывает страх, но оставляет после себя истощенный и перевозбужденный мозг»."
    },
    zh: {
      title: "酒精——断连的化学避难所",
      subtitle: "乙醇如何改变GABA和谷氨酸受体，产生严重的身体依赖。",
      p1: "酒精作为中枢神经系统抑制剂，增加抑制性GABA受体的活动，并阻断兴奋性谷氨酸（NMDA）受体。这诱发了放松和躯体疼痛麻木的初始状态。",
      p2: "然而，长期使用迫使大脑适应：它减少GABA受体并增加谷氨酸受体以对抗镇静作用。当停止饮酒时，会发生严重的谷氨酸能过度兴奋，这可能引发癫痫或震颤谵妄。恢复需要紧急的医疗援助。",
      quote: "“酒精暂时洗去了恐惧，但留下了一个精疲力竭、过度兴奋的大脑。”"
    }
  },
  cannabis: {
    ro: {
      title: "Canabisul — Amortizarea Artificială a Axei Stresului",
      subtitle: "Impactul THC asupra receptorilor CB1 și hipocampului, afectând memoria și reglarea emoțională.",
      p1: "Tetrahidrocanabinolul (THC) se leagă de receptorii canabinoizi endogeni CB1 din creier, localizați intens în hipocamp, amigdală și cortexul prefrontal. Acesta blokează temporar semnalele de stres și creează o stare de calm artificial.",
      p2: "Consumul zilnic prelungit duce la epuizarea receptorilor CB1 și blocarea producției de anandamidă (molecula fericirii interne). Acest lucru produce apatie severă, degradarea memoriei pe termen scurt și dificultăți mari în reglarea autonomă a emoțiilor.",
      quote: "„Canabisul oferă o iluzie de pace, reducând însă capacitatea creierului de a se auto-regla natural.”"
    },
    en: {
      title: "Cannabis — Artificial Numbing of the Stress Axis",
      subtitle: "The impact of THC on CB1 receptors and the hippocampus, affecting memory and emotional regulation.",
      p1: "Tetrahydrocannabinol (THC) binds to endogenous cannabinoid CB1 receptors in the brain, densely located in the hippocampus, amygdala, and prefrontal cortex. It temporarily blocks stress signals and creates an artificial state of calm.",
      p2: "Prolonged daily use leads to downregulation of CB1 receptors and halts the production of anandamide (the internal bliss molecule). This produces severe apathy, short-term memory impairment, and major difficulties in self-regulating emotions.",
      quote: "“Cannabis offers an illusion of peace, while reducing the brain's capacity to self-regulate naturally.”"
    },
    es: {
      title: "El Cannabis — El Adormecimiento Artificial del Eje del Estrés",
      subtitle: "El impacto del THC en los receptores CB1 y el hipocampo, afectando la memoria y la regulación emocional.",
      p1: "El tetrahidrocannabinol (THC) se une a los receptores cannabinoides CB1 endógenos en el cerebro, ubicados densamente en el hipocampo, la amígdala y la corteza prefrontal. Bloquea temporalmente las señales de estrés y crea un estado de calma artificial.",
      p2: "El uso diario prolongado conduce a la regulación a la baja de los receptores CB1 e interrumpe la producción de anandamida (la molécula de la felicidad interna). Esto produce apatía severa, deterioro de la memoria a corto plazo y grandes dificultades para autorregular las emociones.",
      quote: "“El cannabis ofrece una ilusión de paz, mientras reduce la capacidad del cerebro para autorregularse de forma natural.”"
    },
    pt: {
      title: "A Cannabis — O Anestesiamento Artificial do Eixo do Stress",
      subtitle: "O impacto do THC nos recetores CB1 e no hipocampo, afetando a memória e a regulação emocional.",
      p1: "O tetrahidrocanabinol (THC) liga-se aos recetores canabinoides endógenos CB1 no cérebro, localizados densamente no hipocampo, amígdala e córtex pré-frontal. Bloqueia temporariamente os sinais de stress e cria um estado de calma artificial.",
      p2: "O uso diário prolongado leva à regulação negativa dos recetores CB1 e interrompe a produção de anandamida (a molécula da felicidade interna). Isto produz apatia grave, deterioração da memória a curto prazo e grandes dificuldades na autorregulação das emoções.",
      quote: "“A cannabis oferece uma ilusão de paz, enquanto reduz a capacidade do cérebro de se autorregular naturalmente.”"
    },
    ru: {
      title: "Каннабис — Искусственное Заглушение Оси Стресса",
      subtitle: "Влияние ТГК на рецепторы CB1 и гиппокамп, влияющее на память и эмоциональную регуляцию.",
      p1: "Тетрагидроканнабинол (ТГК) связывается с эндогенными каннабиноидными рецепторами CB1 в мозге, которые в высокой концентрации находятся в гиппокампе, миндалевидном теле и префронтальной коре. Он временно блокирует сигналы стресса и создает искусственное состояние покоя.",
      p2: "Длительное ежедневное употребление ведет к истощению рецепторов CB1 и прекращению выработки анандамида (внутренней молекулы блаженства). Это вызывает тяжелую апатию, ухудшение кратковременной памяти и большие трудности в самостоятельной регуляции эмоций.",
      quote: "«Каннабис дает иллюзию покоя, снижая способность мозга к естественной саморегуляции»."
    },
    zh: {
      title: "大麻——压力轴的虚假麻木",
      subtitle: "THC对CB1受体和海马体的影响，损害记忆和情绪调节。",
      p1: "四氢大麻酚（THC）与大脑中的内源性大麻素CB1受体结合，这些受体密集分布在海马体、杏仁核和前额叶皮层。它暂时阻断了压力信号，创造了一种人为的平静状态。",
      p2: "长期每天使用会导致CB1受体下调，并阻止花生四烯酸乙醇胺（anandamide，内部的极乐分子）的产生。这会产生严重的冷漠、短期记忆障碍和在自我调节情绪方面的重大困难。",
      quote: "“大麻提供了一种和平的幻觉，同时降低了大脑自然自我调节的能力。”"
    }
  },
  stimulants: {
    ro: {
      title: "Stimulentele — Epuizarea Rezervelor de Dopamină",
      subtitle: "Cum suprastimulează Cocaina și Amfetaminele sistemul mezolimbic, ducând la prăbușire emoțională.",
      p1: "Stimulentele blochează recaptarea dopaminei și a noradrenalinei în fanta sinaptică, menținând creierul într-o stare de alertă, focalizare extremă și euforie artificială intensă. Sistemul de recompensă este supraîncărcat în mod patologic.",
      p2: "Acest abuz forțează creierul să consume rapid rezervele naturale de dopamină și să își retragă receptorii dopaminergici. Când efectul dispare, utilizatorul intră într-o prăbușire emoțională severă (crash), marcată de depresie profundă, paranoia și epuizare fizică totală. Recuperarea necesită repaus extins și restaurarea receptorilor.",
      quote: "„Stimulentele împrumută energie din viitor, lăsând prezentul într-un faliment neurochimic total.”"
    },
    en: {
      title: "Stimulants — Depletion of Dopamine Reserves",
      subtitle: "How Cocaine and Amphetamines overstimulate the mesolimbic system, leading to emotional collapse.",
      p1: "Stimulants block the reuptake of dopamine and norepinephrine in the synaptic cleft, locking the brain in a state of alert, extreme focus, and intense artificial euphoria. The reward system is pathologically overloaded.",
      p2: "This abuse forces the brain to rapidly consume its natural dopamine reserves and downregulate dopamine receptors. When the drug wears off, the user enters a severe emotional crash, marked by deep depression, paranoia, and complete physical exhaustion. Recovery requires extensive rest and receptor restoration.",
      quote: "“Stimulants borrow energy from the future, leaving the present in total neurochemical bankruptcy.”"
    },
    es: {
      title: "Los Estimulantes — El Agotamiento de las Reservas de Dopamina",
      subtitle: "Cómo la Cocaína y las Anfetaminas sobreestimulan el sistema mesolímbico, provocando un colapso emocional.",
      p1: "Los estimulantes bloquean la recaptación de dopamina y norepinefrina en la hendidura sináptica, manteniendo al cerebro en un estado de alerta, enfoque extremo e intensa euforia artificial. El sistema de recompensa se sobrecarga patológicamente.",
      p2: "Este abuso obliga al cerebro a consumir rápidamente las reservas de dopamina natural y a regular a la baja los receptores dopaminérgicos. Cuando el efecto desaparece, el usuario entra en un colapso emocional grave (crash), marcado por depresión profunda, paranoia y agotamiento físico total. La recuperación requiere un descanso prolongado y restauración de los receptores.",
      quote: "“Los estimulantes toman prestada energía del futuro, dejando el presente en una quiebra neuroquímica total.”"
    },
    pt: {
      title: "Os Estimulantes — A Depleção das Reservas de Dopamina",
      subtitle: "Como a Cocaína e as Anfetaminas sobreestimulam o sistema mesolímbico, levando ao colapso emocional.",
      p1: "Os estimulantes bloqueiam a recaptação de dopamina e noradrenalina na fenda sináptica, mantendo o cérebro num estado de alerta, foco extremo e euforia artificial intensa. O sistema de recompensa é patologicamente sobrecarregado.",
      p2: "Este abuso obriga o cérebro a consumir rapidamente as reservas de dopamina natural e a reduzir os recetores dopaminérgicos. Quando o efeito desaparece, o utilizador entra num colapso emocional grave (crash), marcado por depressão profunda, paranoia e exaustão física total. A recuperação requer repouso prolongado e restauração dos recetores.",
      quote: "“Os estimulantes pedem energia emprestada ao futuro, deixando o presente numa falência neuroquímica total.”"
    },
    ru: {
      title: "Стимуляторы — Истощение Запасов Дофамина",
      subtitle: "Как кокаин и амфетамины гиперстимулируют мезолимбическую систему, приводя к эмоциональному коллапсу.",
      p1: "Стимуляторы блокируют обратный захват дофамина и норадреналина в синаптической щели, удерживая мозг в состоянии боевой готовности, экстремальной концентрации и сильной искусственной эйфории. Система вознаграждения патологически перегружена.",
      p2: "Это злоупотребление заставляет мозг быстро расходовать естественные запасы дофамина и снижать чувствительность дофаминовых рецепторов. Когда действие препарата проходит, пользователь испытывает тяжелый эмоциональный срыв (краш), характеризующийся глубокой депрессией, паранойей и полным физическим истощением. Восстановление требует длительного отдыха и восстановления рецепторов.",
      quote: "«Стимуляторы берут энергию взаймы у будущего, оставляя настоящее в полном нейрохимическом банкротстве»."
    },
    zh: {
      title: "兴奋剂——多巴胺储备的耗竭",
      subtitle: "可卡因和安非他命如何过度刺激中脑边缘系统，导致情绪崩溃。",
      p1: "兴奋剂阻断突触间隙中多巴胺和去甲肾上腺素的再摄取，将大脑锁定在警觉、极端专注和强烈的人工快感状态。奖励系统病理性超载。",
      p2: "这种滥用迫使大脑快速消耗其天然的多巴胺储备，并下调多巴胺受体。当药物效果消退时，使用者会陷入严重的情绪崩溃（崩溃期），其特征是深度抑郁、偏执和彻底的身体衰竭。恢复需要充分的休息和受体的修复。",
      quote: "“兴奋剂从未来借用能量，让现在陷入彻底的神经化学破产。”"
    }
  },
  "brain-balance": {
    ro: {
        title: "Creierul în Căutarea Echilibrului — Alchimia Neuro-Spirituală a Punctului Zero",
        subtitle: "O perspectivă profundă, integratoare între neuroștiința allostaziei și mistica echilibrului interior — transmutarea tensiunii în prezență pură.",
        p1: "Căutarea echilibrului nu este doar o ecuație homeostatică mecanică, ci o adevărată căutare a sacrului din interiorul nostru. Din punct de vedere neuroștiințific, creierul încearcă constant să stabilizeze fluctuațiile dintre sistemul simpatic (luptă sau fugi) și cel parasimpatic (repaus și digestie). Însă, privită prin prisma spirituală, această căutare reprezintă dorința sufletului de a se întoarce în Punctul Zero — starea de liniște pură, neafectată de furtunile exterioare, pe care marii maeștri o numesc starea de Unitate sau Non-Dualitate.",
        p2: "Când suntem prinși în capcana adicției sau a stresului cronic, axa noastră neurală devine rigidă. Creierul stabilește un nou setpoint allostatic disforic, trăind sub asediul constant al adrenalinei și cortizolului. Pentru a restabili echilibrul autentic, nu este suficientă simpla abstinență chimică; avem nevoie de o renaștere spirituală a prezenței. Practici precum Wu Wei (acțiunea fără efort) sau meditația profundă acționează ca un balsam biologic: ele liniștesc Rețeaua Neuronală Default (DMN), dizolvând granițele ego-ului și permițând creierului să își recupereze calitatea de templu curat al conștiinței.",
        p3: "Prin reducerea zgomotului sinaptic și stimularea tonusului vagal, transformăm biologia supraviețuirii în biologia transcendenței. În acest spațiu al liniștii, neurotransmițători precum oxitocina, serotonina și endorfinele nu mai sunt vârfuri artificiale de plăcere egoistă, ci devin curgerea naturală a bucuriei de a exista. Creierul devine astfel o antenă perfect acordată la ritmurile universale, demonstrând că adevărata vindecare este o alchimie sacră care unește materia cu spiritul.",
        quote: "„Echilibrul nu este o destinație statică, ci dansul dinamic al conștiinței în jurul propriei sale axe divine.”",
        quoteAuthor: "Perspectivă Spirituală Guru"
      },
      en: {
        title: "The Brain in Search of Balance — The Neuro-Spiritual Alchemy of the Zero Point",
        subtitle: "A profound, integrating perspective between the neuroscience of allostasis and the mysticism of inner balance — transmuting tension into pure presence.",
        p1: "The search for balance is not merely a mechanical homeostatic equation, but a true quest for the sacred within us. Neuroscientifically, the brain constantly attempts to stabilize fluctuations between the sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) systems. However, viewed spiritually, this quest represents the soul's desire to return to the Zero Point — the state of absolute stillness, unaffected by external storms, which great masters call the state of Unity or Non-Duality.",
        p2: "When trapped in addiction or chronic stress, our neural axis becomes rigid. The brain establishes a new dysphoric allostatic setpoint, living under the constant siege of adrenaline and cortisol. To restore authentic balance, simple chemical abstinence is not enough; we need a spiritual rebirth of presence. Practices like Wu Wei (actionless action) or deep meditation act as a biological balm: they quiet the Default Mode Network (DMN), dissolving ego boundaries and allowing the brain to reclaim its status as a clean temple of consciousness.",
        p3: "By reducing synaptic noise and stimulating vagal tone, we transform the biology of survival into the biology of transcendence. In this space of stillness, neurotransmitters like oxytocin, serotonin, and endorphins are no longer artificial spikes of selfish pleasure, but become the natural flow of the joy of existence. The brain thus becomes an antenna perfectly tuned to universal rhythms, demonstrating that true healing is a sacred alchemy that unites matter with spirit.",
        quote: "“Balance is not a static destination, but the dynamic dance of consciousness around its own divine axis.”",
        quoteAuthor: "Spiritual Guru Perspective"
      },
      es: {
        title: "El Cerebro en Busca del Equilibrio — La Alquimia Neuro-Espiritual del Punto Cero",
        subtitle: "Una perspectiva profunda e integradora entre la neurociencia de la alostasis y la mística del equilibrio interior — transmutando la tensión en presencia pura.",
        p1: "La búsqueda del equilibrio no es una mera ecuación homeostática mecánica, sino una verdadera búsqueda de lo sagrado dentro de nosotros. Neurocientíficamente, el cerebro intenta constantemente estabilizar las fluctuaciones entre el sistema simpático y el parasimpático. Sin embargo, visto espiritualmente, esta búsqueda representa el deseo del alma de regresar al Punto Cero: el estado de quietud absoluta, inafectado por tormentas externas, que los grandes maestros llaman el estado de Unidad o No-Dualidad.",
        p2: "Al quedar atrapado en la adicción o el estrés crónico, nuestro eje neural se vuelve rígido. El cerebro establece un nuevo punto de ajuste alostático disfórico. Para restaurar el equilibrio auténtico, la simple abstinencia química no es suficiente; necesitamos un renacimiento espiritual de la presencia. Prácticas como el Wu Wei (acción sin esfuerzo) o la meditación profunda calman la Red Neuronal por Defecto (DMN), disolviendo las fronteras del ego y permitiendo que el cerebro recupere su estatus como un templo limpio de la conciencia.",
        p3: "Al reducir el ruido sináptico y el tono vagal, transformamos la biología de la supervivencia en la biología de la trascendencia. En este espacio de quietud, los neurotransmisores se convierten en el flujo natural del gozo de existir. El cerebro se convierte así en una antena perfectamente sintonizada con los ritmos universales, demostrando que la verdadera curación es una alquimia sagrada que une la materia con el espíritu.",
        quote: "“El equilibrio no es un destino estático, sino la danza dinámica de la conciencia alrededor de su propio eje divino.”",
        quoteAuthor: "Perspectiva del Gurú Espiritual"
      },
      pt: {
        title: "O Cérebro em Busca do Equilíbrio — A Alquimia Neuro-Espiritual do Ponto Zero",
        subtitle: "Uma perspectiva profunda e integradora entre a neurociência da alostase e a mística do equilíbrio interior — transmutando a tensão em presença pura.",
        p1: "A busca pelo equilíbrio não é apenas uma equação homeostática mecânica, mas uma verdadeira busca pelo sagrado dentro de nós. Neurocientificamente, o cérebro tenta constantemente estabilizar as flutuações entre o sistema simpático e o parassimpático. No entanto, visto espiritualmente, esta busca representa o desejo da alma de retornar ao Ponto Zero — o estado de quietude absoluta, não afetado por tempestades externas, que os grandes mestres chamam de estado de Unidade ou Não-Dualidade.",
        p2: "Quando preso na adicção ou no estresse crônico, nosso eixo neural torna-se rígido. O cérebro estabelece um novo ponto de ajuste alostático disfórico. Para restaurar o equilíbrio autêntico, a simples abstinência química não é suficiente; precisamos de um renascimento espiritual da presença. Práticas como o Wu Wei (ação sem espaço ou esforço) ou a meditação profunda acalmam a Rede Neuronal por Defeito (DMN), dissolvendo as fronteiras do ego.",
        p3: "Ao reduzir o ruído sináptico e estimular o tom vagal, transformamos a biologia da sobrevivência na biologia da transcendência. Nesse espaço de quietude, os neurotransmisores tornam-se o fluxo natural da alegria de existir. O cérebro torna-se assim uma antena perfeitamente sintonizada com os ritmos universais, demonstrando que a verdadeira cura é uma alquimia sagrada que une a matéria com o espírito.",
        quote: "“O equilíbrio não é um destino estático, mas a dança dinâmica da consciência em torno do seu próprio eixo divino.”",
        quoteAuthor: "Perspetiva do Guru Espiritual"
      },
      ru: {
        title: "Мозг в поисках равновесия — Нейро-духовная алхимия Нулевой Точки",
        subtitle: "Глубокая интегрирующая перспектива на стыке нейробиологии аллостаза и мистики внутреннего баланса — трансмутация напряжения в чистое присутствие.",
        p1: "Поиск баланса — это не просто механическое гомеостатическое уравнение, а истинный поиск священного внутри нас. С нейробиологической точки зрения мозг постоянно пытается стабилизировать колебания между симпатической и парасимпатической системами. Однако с духовной точки зрения этот поиск представляет собой стремление души вернуться в Нулевую Точку — состояние абсолютного покоя, не затроного внешними бурями, которое великие учителя называют состоянием Единства или Недвойственности.",
        p2: "Попадая в ловушку зависимости или хронического стресса, наша нейронная ось становится жесткой. Мозг устанавливает новую дисфорическую аллостатическую заданную точку. Чтобы восстановить подлинное равновесие, простой химической абстиненции недостаточно; нам нужно духовное возрождение присутствия. Такие практики, как У-вэй (деяние через недеяние) или глубокая медитация, успокаивают дефолт-систему мозга (DMN), растворяя границы эго.",
        p3: "Снижая синаптический шум и стимулируя тонус блуждающего нерва, мы трансформируем биологию выживания в биологию трансцендентности. В этом пространстве тишины нейромедиаторы становятся естественным потоком радости существования. Таким образом, мозг превращается в антенну, идеально настроенную на универсальные ритмы, доказывая, что истинное исцеление — это священная алхимия, объединяющая материю и дух.",
        quote: "«Равновесие — это не статичная точка назначения, а динамический танец сознания вокруг своей божественной оси».",
        quoteAuthor: "Духовный взгляд Гуру"
      },
      zh: {
        title: "寻找平衡的大脑 —— 零点的神经精神炼金术",
        subtitle: "稳态应激神经科学与内在平衡的非二元智慧之间的深层整合视角 —— 将张力转化为纯粹的存在。",
        p1: "寻找平衡不仅是一个机械的稳态方程式，更是对我们内心神圣事物的真实探索。从神经科学的角度来看，大脑不断试图稳定交感神经（战斗或逃跑）系统和副交感神经（休息和消化）系统之间的波动。然而，从精神层面来看，这种探索代表了灵魂回归零点的渴望——一个不受外界风暴影响的绝对宁静状态，伟大的大师们称之为合一或非二元状态。",
        p2: "当陷入成瘾或慢性压力时，我们的神经轴变得僵硬。大脑建立了一个新的不愉快的稳态应激设定点。为了恢复真正的平衡，单纯的化学戒断是远远不够的；我们需要存在的精神觉醒。像“无为”（顺应自然）或深度冥想这样的练习起到了生物学温和剂的作用：它们安静了默认模式网络（DMN），消解了自我的边界，使大脑重新夺回其作为意识纯洁殿堂的地位。",
        p3: "通过减少突触噪音和刺激迷走神经张力，我们将生存生物学转化为超越生物学。在这个宁静的空间里，催产素、血清素和内啡肽等神经递质不再是自私享乐的人工高峰，而是变成了存在之喜悦的自然流淌。大脑因此成为一个与宇宙节奏完美共鸣的感线，证明真正的治愈是连接物质与精神的神圣炼金术。",
        quote: "“平衡不是一个静态的终点，而是意识围绕其自身神圣轴线的动态舞蹈。”",
        quoteAuthor: "灵性导师视角"
      }
    }
  };

export const uiStrings = {
  headerBadge: {
    ro: "Rădăcinile Neurobiologice",
    en: "Neurobiological Roots",
    es: "Las Raíces Neurobiológicas",
    pt: "As Raízes Neurobiológicas",
    ru: "Нейробиологические Корни",
    zh: "神经生物学根源"
  },
  headerTitle: {
    ro: "Umbra Proiectată a Suferinței Mute.",
    en: "The Projected Shadow of Silent Pain.",
    es: "La Sombra Proyectada del Dolor Silencioso.",
    pt: "A Sombra Projetada da Dor Silenciosa.",
    ru: "Проецируемая Тень Молчаливой Боли.",
    zh: "沉默痛苦的投射阴影。"
  },
  headerSubtitle: {
    ro: "Dependența nu este o slăbiciune morală, o alegere greșită sau o simplă lipsă de voință. În paradigma neuroștiinței moderne, este o boală profundă a conectivității—o tulburare a emoțiilor și a comportamentului.",
    en: "Addiction is not a moral failure, a bad choice, or a simple lack of willpower. In the modern neuroscience paradigm, it is a profound disorder of connectivity—a disturbance of emotions and behavior.",
    es: "La adicción no es una debilidad moral, una mala elección o una simple falta de voluntad. En el paradigma de la neurociencia moderna, es un trastorno profundo de la conectividad: un trastorno de las emociones y el comportamiento.",
    pt: "A adicção não é uma fraqueza moral, uma má escolha ou uma simples falta de vontade. No paradigma da neurociência moderna, é um distúrbio profundo da conectividade — um distúrbio das emoções e do comportamento.",
    ru: "Зависимость — это не моральная слабость, неправильный выбор или простое отсутствие силы воли. В парадигме современной нейробиологии это глубокое нарушение связей — расстройство эмоций и поведения.",
    zh: "成瘾不是道德败坏、错误的选择，或单纯缺乏意志力。在现代神经科学的范式中，它是连接性的深度紊乱——一种情绪和行为的失调。"
  },
  headerSubtitle2: {
    ro: "Este o încercare disperată a creierului de a supraviețui, de a regla un sistem nervos copleșit și de a rezolva problema durerii fundamentale, înrădăcinate adesea în traumele timpurii.",
    en: "It is a desperate attempt by the brain to survive, to regulate an overwhelmed nervous system, and to solve the problem of core pain, often rooted in early trauma.",
    es: "Es un intento desesperado del cerebro por sobrevivir, regular un sistema nervioso abrumado y resolver el problema del dolor fundamental, a menudo arraigado en el trauma temprano.",
    pt: "É uma tentativa desesperada do cérebro de sobreviver, de regular um sistema nervoso sobrecarregado e de resolver o problema da dor fundamental, muitas vezes enraizada num trauma precoce.",
    ru: "Это отчаянная потытка мозга выжить, отрегулировать перегруженную нервную систему и решить проблему глубокой боли, часто коренящейся в ранней травме.",
    zh: "这是大脑为了生存、调节不堪重负的神经系统以及解决通常源于早期创伤的核心痛苦问题而做出的绝望尝试。"
  },
  exploreBtn: {
    ro: "Explorează Cercetarea",
    en: "Explore Research",
    es: "Explorar la Investigación",
    pt: "Explorar a Investigação",
    ru: "Исследовать Науку",
    zh: "探索研究"
  },
  backToEcosystem: {
    ro: "Înapoi la Ecosistem",
    en: "Back to Ecosystem",
    es: "Volver al Ecosistema",
    pt: "Voltar ao Ecossistema",
    ru: "Назад к Экосистеме",
    zh: "返回生态系统"
  },
  enterPortal: {
    ro: "Intră Portalul",
    en: "Enter Portal",
    es: "Entrar al Portal",
    pt: "Entrar no Portal",
    ru: "Войти в Портал",
    zh: "进入门户"
  },
  systemState: {
    ro: "STARE SISTEM:",
    en: "SYSTEM STATE:",
    es: "ESTADO DEL SISTEMA:",
    pt: "ESTADO DO SISTEMA:",
    ru: "СОСТОЯНИЕ СИСТЕМЫ:",
    zh: "系统状态："
  },
  activeCoherence: {
    ro: "COERENȚĂ ACTIVĂ",
    en: "ACTIVE COHERENCE",
    es: "COHERENCIA ACTIVA",
    pt: "COERÊNCIA ATIVA",
    ru: "АКТИВНАЯ КОГЕРЕНТНОСТЬ",
    zh: "活跃的相干性"
  }
};

