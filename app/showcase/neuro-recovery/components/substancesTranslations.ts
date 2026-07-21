export type Locale = "ro" | "en" | "es" | "pt" | "ru" | "zh";

export interface SubstanceData {
  id: string;
  title: string;
  subtitle: string;
  mechanism: string;
  price: string;
}

export const localizedSubstances: Record<Locale, SubstanceData[]> = {
  ro: [
    {
      id: "alcohol",
      title: "Alcoolul",
      subtitle: "Barosul",
      mechanism: "Funcționează ca un baros chimic. Amplifică sistemul GABA (care ne sedează și oprește gândurile) și stimulează eliberarea de endorfine.",
      price: "Pe termen lung, distruge arhitectura creierului, atrofiază ficatul și, prin transformarea în acetaldehidă, crește masiv riscul de cancer."
    },
    {
      id: "cannabis",
      title: "Canabisul",
      subtitle: "Vopseaua Curcubeică",
      mechanism: "Inundă receptorii CB1, amplificând masiv orice stimul. Culorile sunt mai vii, sunetele mai profunde—totul e vopsit în curcubeu.",
      price: "Pentru a se apăra de hiper-stimulare, creierul își retrage receptorii (downregulation). Rezultatul? Sindromul amotivațional, o viață cenușie fără chef în lipsa plantei."
    },
    {
      id: "stimulants",
      title: "Stimulentele",
      subtitle: "Laserul",
      mechanism: "Cocaina, amfetaminele și MDMA acționează ca un laser: concentrează energia blocând sistemul de curățare a dopaminei și serotoninei.",
      price: "Epuizarea totală a rezervelor. MDMA poate distruge fizic axonii serotoninergici, ceea ce poate cauza depresie clinică și defecte de memorie."
    }
  ],
  en: [
    {
      id: "alcohol",
      title: "Alcohol",
      subtitle: "The Sledgehammer",
      mechanism: "Acts as a chemical sledgehammer. Boosts the GABA system (sedating us and stopping thoughts) and triggers endorphin release.",
      price: "Long-term, it destroys brain architecture, shrinks the liver, and, by converting to acetaldehyde, massively increases cancer risk."
    },
    {
      id: "cannabis",
      title: "Cannabis",
      subtitle: "The Rainbow Paint",
      mechanism: "Floods CB1 receptors, massively amplifying any stimulus. Colors are brighter, sounds deeper—everything is painted in rainbow.",
      price: "To guard against overstimulation, the brain retreats its receptors (downregulation). Result? Amotivational syndrome, a gray life."
    },
    {
      id: "stimulants",
      title: "Stimulants",
      subtitle: "The Laser",
      mechanism: "Cocaine, amphetamines, and MDMA act like a laser: concentrating energy by blocking the dopamine and serotonin cleanup system.",
      price: "Total depletion of reserves. MDMA can physically damage serotonergic axons, potentially causing clinical depression and memory issues."
    }
  ],
  es: [
    {
      id: "alcohol",
      title: "El Alcohol",
      subtitle: "El Mazo",
      mechanism: "Actúa como un mazo químico. Potencia el sistema GABA (sedándonos y apagando pensamientos) y activa la liberación de endorfinas.",
      price: "A largo plazo, destruye la arquitectura cerebral, atrofia el hígado y, al convertirse en acetaldehído, eleva el riesgo de cáncer."
    },
    {
      id: "cannabis",
      title: "El Cannabis",
      subtitle: "La Pintura Arcoíris",
      mechanism: "Inunda los receptores CB1, amplificando masivamente cualquier estímulo. Los colores son más vivos y los sonidos más profundos.",
      price: "Para defenderse de la sobreestimulación, el cerebro retira sus receptores. ¿El resultado? Síndrome amotivacional, una vida gris."
    },
    {
      id: "stimulants",
      title: "Los Estimulantes",
      subtitle: "El Láser",
      mechanism: "La cocaína, las anfetaminas y el MDMA actúan como un láser: concentran la energía bloqueando la recaptación de dopamina y serotonina.",
      price: "Agotamiento total de las reservas. El MDMA puede dañar físicamente los axones serotoninérgicos, provocando depresión crónica."
    }
  ],
  pt: [
    {
      id: "alcohol",
      title: "O Álcool",
      subtitle: "A Marreta",
      mechanism: "Atua como uma marreta química. Amplifica o sistema GABA (sedando-nos e parando os pensamentos) e estimula a libertação de endorfinas.",
      price: "A longo prazo, destrói a arquitetura cerebral, atrofia o fígado e, ao converter-se em acetaldeído, aumenta o risco de cancro."
    },
    {
      id: "cannabis",
      title: "A Cannabis",
      subtitle: "A Tinta Arco-Íris",
      mechanism: "Inunda os recetores CB1, amplificando massivamente qualquer estímulo. Cores mais vivas, sons mais profundos, tudo colorido.",
      price: "Para se defender da sobreestimulação, o cérebro retira os seus recetores. O resultado? Síndrome amotivacional, uma vida cinzenta."
    },
    {
      id: "stimulants",
      title: "Os Estimulantes",
      subtitle: "O Laser",
      mechanism: "Cocaína, anfetaminas e MDMA atuam como um laser: concentram energia bloqueando a recaptação de dopamina e serotonina.",
      price: "Esgotamento total de reservas. O MDMA pode danificar fisicamente os axónios serotoninérgicos, causando depressão clínica."
    }
  ],
  ru: [
    {
      id: "alcohol",
      title: "Алкоголь",
      subtitle: "Кувалда",
      mechanism: "Действует как химическая кувалда. Усиливает систему ГАМК (успокаивая нас и отключая мысли) и стимулирует выброс эндорфинов.",
      price: "В долгосрочной перспективе разрушает структуру мозга, атрофирует печень и, превращаясь в ацетальдегид, повышает риск рака."
    },
    {
      id: "cannabis",
      title: "Каннабис",
      subtitle: "Радужная краска",
      mechanism: "Затапливает рецепторы CB1, многократно усиливая любые раздражители. Цвета кажутся ярче, звуки глубже.",
      price: "Для защиты от гиперстимуляции мозг сокращает рецепторы. Результат? Амотивационный синдром, серая жизнь без интереса к чему-либо."
    },
    {
      id: "stimulants",
      title: "Стимуляторы",
      subtitle: "Лазер",
      mechanism: "Кокаин, амфетамины и МДМА действуют как лазер: концентрируют энергию, блокируя систему обратного захвата дофамина и серотонина.",
      price: "Полное истощение запасов. МДМА может физически разрушать серотониновые аксоны, вызывая клиническую депрессию и ухудшение памяти."
    }
  ],
  zh: [
    {
      id: "alcohol",
      title: "酒精",
      subtitle: "大铁锤",
      mechanism: "作为化学铁锤起作用。增强GABA系统（镇静我们并停止思绪）并触发内啡肽释放。",
      price: "长期来看，它会破坏大脑结构，使肝脏萎缩，并通过转化为乙醛，极大地增加癌症风险。"
    },
    {
      id: "cannabis",
      title: "大麻",
      subtitle: "彩虹油漆",
      mechanism: "淹没CB1受体，极大地放大任何刺激。颜色更鲜艳，声音更深沉——一切都被漆成了彩虹色。",
      price: "为了防止过度刺激，大脑缩减其受体（下调）。结果呢？无动机综合征，没有大麻就没有活力、一片灰色的人生。"
    },
    {
      id: "stimulants",
      title: "兴奋剂",
      subtitle: "激光",
      mechanism: "可卡因、安非他命和MDMA起着激光般的作用：通过阻断多巴胺和血清素的清除系统来集中能量。",
      price: "储备的彻底耗竭。MDMA可能会物理损伤血清素能轴突，潜在地导致临床抑郁和记忆障碍。"
    }
  ]
};

export const substanceUI = {
  sectionTitle: {
    ro: "Spectrul Deturnării Neurochimice",
    en: "The Spectrum of Neurochemical Hijacking",
    es: "El Espectro del Secuestro Neuroquímico",
    pt: "O Espectro do Sequestro Neuroquímico",
    ru: "Спектр нейрохимического перехвата",
    zh: "神经化学劫持的光谱"
  },
  sectionSubtitle: {
    ro: "Cum interacționează substanțele cu rețeaua noastră neuronală și prețul tăcut pe care îl cere fiecare.",
    en: "How substances interact with our neural network and the silent price each one demands.",
    es: "Cómo interactúan las sustancias con nuestra red neuronal y el precio silencioso que cada una exige.",
    pt: "Como as substâncias interagem com a nossa rede neuronal e o preço silencioso que cada uma exige.",
    ru: "Как вещества взаимодействуют с нашей нейронной сетью и какую немую цену требует каждое из них.",
    zh: "物质如何与我们的神经网络互动，以及每种物质所要求的无声代价。"
  },
  audioMode: {
    ro: "Modul Audio",
    en: "Audio Mode",
    es: "Modo de Audio",
    pt: "Modo de Áudio",
    ru: "Аудиорежим",
    zh: "音频模式"
  },
  visualMode: {
    ro: "Modul Vizual",
    en: "Visual Mode",
    es: "Modo Visual",
    pt: "Modo Visual",
    ru: "Визуальный режим",
    zh: "视觉模式"
  },
  learnMore: {
    ro: "Află mai multe",
    en: "Learn More",
    es: "Saber más",
    pt: "Saber mais",
    ru: "Узнать больше",
    zh: "了解更多"
  },
  howItWorks: {
    ro: "Cum acționează",
    en: "How it works",
    es: "Cómo actúa",
    pt: "Como atua",
    ru: "Как действует",
    zh: "工作原理"
  },
  thePrice: {
    ro: "Prețul",
    en: "The Price",
    es: "El Precio",
    pt: "O Preço",
    ru: "Цена",
    zh: "代价"
  }
};
