"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe, ChevronRight, TrendingDown, Users, Zap } from "lucide-react";

type Lang = "ro" | "en";

const content = {
  ro: {
    nav: "Realitatea Umanoidă 2026",
    chapterNum: "04",
    chapterLabel: "CAPITOLUL",
    category: "Democratizare",
    subtitle: "Robotică accesibilă pentru toți. Unitree și Noetix coboară bariera de intrare sub $5,000.",
    badge: "ACCESIBILITATE GLOBALĂ",
    unitreeG1: {
      title: "Unitree G1",
      company: "Unitree Robotics",
      tagline: "Primul humanoidal funcțional sub $20.000 — acum la $16.000",
      specs: [
        { label: "Preț", value: "$16,000", detail: "Cel mai mic preț pentru un humanoidal cu 43 DoF în 2026" },
        { label: "Grade de libertate", value: "43 DoF", detail: "Corp complet articulat, inclusiv degete cu senzori" },
        { label: "Viteza de mers", value: "2.0 m/s", detail: "Cea mai rapidă viteză dintr-un robot la acest preț" },
        { label: "Greutate", value: "35 kg", detail: "Cel mai ușor humanoidal din clasa sa" },
        { label: "API", value: "Python open", detail: "SDK complet, ROS2, comunitate activă de 15.000+ developeri" },
        { label: "Baterie", value: "2 ore", detail: "Reîncărcare completă în 60 min. Target 2027: 4 ore" },
      ],
      sections: [
        {
          heading: "Strategia Unitree — Volume over margin",
          body: "Unitree Robotics a adoptat o strategie radical diferită față de toți competitorii occidentali: volum maxim la marjă minimă. Fabricat în Shenzhen cu componente integrate vertical și linii de producție complet automatizate, G1 beneficiază de un cost de producție de sub $8,000 — permițând o marjă rezonabilă la $16,000. Competitorii occidentali au costuri de producție de 3–5x mai mari pentru specificații similare. Aceasta creează un avantaj structural imposibil de eliminat pe termen scurt fără relocalizare masivă a producției.",
        },
        {
          heading: "43 DoF la $16K — Specificații fără compromis la preț de buget",
          body: "Ce este surprinzător la G1 nu este că este ieftin, ci că este ieftin ȘI capabil. Cu 43 grade de libertate, G1 are mai multă articulație decât Figure 03 ($150,000) și mai rapidă locomotie decât Tesla Optimus Gen 3 ($30,000+). Degetele senzorizate permit manipularea de obiecte fine — nu la nivelul Phoenix, dar suficient pentru 80% din sarcinile industriale repetitive. Pentru companii mici și medii care nu pot justifica bugetele enterprise, G1 este o intrare în lumea roboticii umanoid.",
        },
        {
          heading: "Ecosistemul open-source — Comunitatea ca moat",
          body: "Python API deschis și compatibilitatea cu ROS2 au creat organic o comunitate de 15.000+ developeri care contribuie cu aplicații, training scripts și integrări de sisteme. Aceasta înseamnă că G1 nu este un robot izolat — este o platformă cu sute de aplicații pre-construite pentru retail, educație, cercetare, hospitality și logistică ușoară. Fiecare developer care construiește pe G1 adaugă valoare ecosistemului fără cost pentru Unitree. Este modelul Android al roboticii.",
        },
      ],
      status: "Disponibil imediat, livrare globală",
      delivery: "2–4 săptămâni de la comandă",
    },
    unitreeR1: {
      title: "Unitree R1",
      company: "Unitree Robotics",
      tagline: "Roboțica pe roți pentru spații interioare — $4,900",
      specs: [
        { label: "Preț", value: "$4,900", detail: "Cel mai accesibil robot service funcțional în 2026" },
        { label: "Design", value: "Pe roți", detail: "Stabilitate maximă. Zero risc de cădere în medii ocupate de oameni" },
        { label: "Brațe", value: "2x 6DoF", detail: "Acoperire completă pentru sarcini de service la ghișeu" },
        { label: "Ecran", value: "10\" touchscreen", detail: "Interacțiune directă cu clienții. Voce + display" },
        { label: "Viteza", value: "1.5 m/s", detail: "Deplasare autonomă cu LIDAR + viziune stereo" },
        { label: "Autonomie", value: "8 ore", detail: "Pentru program complet de lucru fără reîncărcare" },
      ],
      sections: [
        {
          heading: "Cazul de utilizare perfect — Retail și Hospitality",
          body: "R1 nu încearcă să fie un umanoidal antropomorf — și aceasta este decizia corectă pentru spațiile interioare comerciale. Design-ul pe roți elimină riscul de cădere în medii cu clienți, simplifică navigația în spații înguste și permite autonomie de 8 ore pentru un program complet de lucru. Brațele cu 6 DoF pot servi la ghișeu, prezenta produse, oferi informatii, procesa returnuri simple. La $4,900, ROI-ul față de un angajat part-time se atinge în mai puțin de 12 luni.",
        },
        {
          heading: "Piața adresabilă uriașă — 50+ milioane de locuri de muncă service",
          body: "R1 vizează direct categoria de muncă service de față cu clientul — casieri, recepționiști, ghizi în muzee, personal informare în aeroporturi, personal de livrare internă în spitale și hoteluri. Aceasta este o piață globală de 50+ milioane de angajați cu salariul minim în țările cu costuri ridicate. La $4,900 per unitate cu o durată de viață de 5+ ani, R1 este prima soluție cu care managerul unui lanț de retail poate justifica economic înlocuirea parțială.",
        },
      ],
      status: "Disponibil imediat",
      delivery: "Livrare 1–2 săptămâni",
    },
    noetix: {
      title: "Noetix Bumi",
      company: "Noetix Robotics",
      tagline: "Primul humanoidal sub $2,000 — educație și uz casnic",
      specs: [
        { label: "Preț", value: "$1,400", detail: "Sub prețul unui smartphone flagship 2026" },
        { label: "Înălțime", value: "90 cm", detail: "Dimensionat pentru interacțiunea cu copii și spații rezidențiale" },
        { label: "DoF", value: "22 DoF", detail: "Corp complet articulat la această dimensiune" },
        { label: "AI", value: "Edge AI", detail: "Procesare locală — nu necesită cloud sau abonament" },
        { label: "Autonomie", value: "3 ore", detail: "Reîncărcare completă în 45 min" },
        { label: "Piață", value: "B2C + Edu", detail: "Vânzare directă consumatori și instituții educaționale" },
      ],
      sections: [
        {
          heading: "Democratizarea completă — Robotica în gospodărie",
          body: "Noetix Bumi este primul semn că robotica umanoidal devine un bun de consum. La $1,400 — mai puțin decât un televizor mid-range — Bumi poate fi achiziționat de familii, școli și biblioteci. Cazurile de utilizare vizate includ: companion educațional pentru copii (matematică, limbi, programare), asistent pentru persoane vârstnice (memento medicamente, conexiune video, mobilitate limitată), platformă de coding pentru hobbyiști și studenți. Edge AI local înseamnă zero costuri de abonament — prețul de achiziție este prețul total.",
        },
        {
          heading: "Impactul educațional — Generația robotics natives",
          body: "Cel mai semnificativ impact pe termen lung al Noetix Bumi nu este în gospodărie, ci în educație. Instituțiile care integrează Bumi ca platformă de programare în curriculumul K–12 creează prima generație de elevi care înțeleg robotica nu ca teorie abstractă, ci ca practică hands-on. API-ul Python deschis și biblioteca de exerciții educaționale permit profesorilor să predea fizică, matematică, algoritmi și AI folosind un robot real. Aceasta transformă pedagogia STEM fundamental.",
        },
      ],
      status: "Pre-comandă deschisă — Livrare Q3 2026",
      delivery: "Disponibil pentru instituții educaționale din iulie 2026",
    },
    impact: {
      title: "Impactul Democratizării asupra Pieței",
      body1: "Democratizarea prețurilor roboticii umanoid în 2026 creează o piramidă a adopției fără precedent. La vârful piramidei: enterprise players cu bugete de $100,000+ per unitate (Figure, Sanctuary, Atlas). La mijloc: SMB-uri și mediu industrial cu $15,000–50,000 (Optimus, Apollo). La baza piramidei — unde se află masa critică a adopției globale: $1,400–5,000 (Unitree G1, R1, Noetix Bumi).",
      body2: "Implicația pentru piața globală: fiecare reducere de preț cu 50% dublează potențialul pool de cumpărători. La $20,000, robotul humanoidal este accesibil pentru companii cu 50+ angajați. La $5,000, este accesibil pentru companii cu 10+ angajați. La $1,400, este accesibil pentru consumatorul individual. Această stratificare înseamnă că piața totală adresabilă se extinde de 100x în decursul deceniului.",
      body3: "Riscul geopolitic al democratizării: robotica chinezească ieftină (Unitree, Noetix) capturează baza piramidei — segmentul cu cel mai mare volum. Companiile occidentale care nu pot competiția pe preț trebuie să se concentreze pe nișele premium (cogniție avansată, medii extreme, reglementare strictă). Aceasta reproduce dinamica semiconductorilor și a panourilor solare, unde China a câștigat volumul dar Occidentul a păstrat designul și IP-ul.",
    },
    metrics: {
      title: "Comparație Prețuri și Capabilități",
      headers: ["Robot", "Preț 2026", "DoF", "Autonomie", "Piață țintă"],
      rows: [
        ["Figure 03", "~$150,000", "16 DoF mâini", "8 ore", "Enterprise AI"],
        ["Tesla Optimus G3", "< $20,000", "28 DoF total", "6–8 ore", "Manufacturing"],
        ["Unitree G1", "$16,000", "43 DoF", "2 ore", "SMB + Cercetare"],
        ["Unitree R1", "$4,900", "6 DoF/braț", "8 ore", "Retail + Service"],
        ["Noetix Bumi", "$1,400", "22 DoF", "3 ore", "Edu + Residential"],
      ],
    },
    cards: [
      { label: "$1,400", accent: "#FFE600", title: "Cel mai ieftin humanoidal", detail: "Noetix Bumi. Sub prețul unui smartphone flagship. Prima dată în istorie că robotica umanoidal devine bun de consum." },
      { label: "15K+", accent: "#00E5FF", title: "Developeri Unitree G1", detail: "Comunitate open-source activă. Mii de aplicații pre-construite pentru retail, educație, cercetare și servicii." },
      { label: "100x", accent: "#FFE600", title: "Piață adresabilă 2026–2035", detail: "Fiecare reducere de 50% a prețului dublează numărul cumpărătorilor potențiali. La $1,400, piața devine consum de masă." },
    ],
    cta: { label: "ÎNAPOI LA OVERVIEW", text: "Explorează toți liderii pieței" },
  },
  en: {
    nav: "Humanoid Reality 2026",
    chapterNum: "04",
    chapterLabel: "CHAPTER",
    category: "Democratization",
    subtitle: "Robotics accessible to everyone. Unitree and Noetix lower the entry barrier below $5,000.",
    badge: "GLOBAL ACCESSIBILITY",
    unitreeG1: {
      title: "Unitree G1",
      company: "Unitree Robotics",
      tagline: "The first functional humanoid under $20,000 — now at $16,000",
      specs: [
        { label: "Price", value: "$16,000", detail: "Lowest price for a 43-DoF humanoid in 2026" },
        { label: "Degrees of freedom", value: "43 DoF", detail: "Fully articulated body, including fingers with sensors" },
        { label: "Walking speed", value: "2.0 m/s", detail: "Fastest walking speed of any robot at this price point" },
        { label: "Weight", value: "35 kg", detail: "Lightest humanoid in its class" },
        { label: "API", value: "Python open", detail: "Full SDK, ROS2, active community of 15,000+ developers" },
        { label: "Battery", value: "2 hours", detail: "Full recharge in 60 min. 2027 target: 4 hours" },
      ],
      sections: [
        {
          heading: "The Unitree strategy — Volume over margin",
          body: "Unitree Robotics has adopted a radically different strategy from all Western competitors: maximum volume at minimum margin. Manufactured in Shenzhen with vertically integrated components and fully automated production lines, G1 benefits from a production cost of under $8,000 — allowing a reasonable margin at $16,000. Western competitors have production costs 3–5x higher for similar specs. This creates a structural advantage that cannot be eliminated in the short term without massive production relocation.",
        },
        {
          heading: "43 DoF at $16K — Uncompromised specs at budget price",
          body: "What's surprising about G1 is not that it's cheap, but that it's cheap AND capable. With 43 degrees of freedom, G1 has more articulation than Figure 03 ($150,000) and faster locomotion than Tesla Optimus Gen 3 ($30,000+). Sensorized fingers allow manipulation of fine objects — not at Phoenix level, but sufficient for 80% of repetitive industrial tasks. For small and medium companies that can't justify enterprise budgets, G1 is an entry point into the world of humanoid robotics.",
        },
        {
          heading: "The open-source ecosystem — Community as moat",
          body: "The open Python API and ROS2 compatibility have organically created a community of 15,000+ developers contributing applications, training scripts and system integrations. This means G1 is not an isolated robot — it's a platform with hundreds of pre-built applications for retail, education, research, hospitality and light logistics. Every developer that builds on G1 adds value to the ecosystem at no cost to Unitree. It's the Android model of robotics.",
        },
      ],
      status: "Available immediately, global delivery",
      delivery: "2–4 weeks from order",
    },
    unitreeR1: {
      title: "Unitree R1",
      company: "Unitree Robotics",
      tagline: "Wheeled robotics for indoor spaces — $4,900",
      specs: [
        { label: "Price", value: "$4,900", detail: "Most accessible functional service robot in 2026" },
        { label: "Design", value: "Wheeled", detail: "Maximum stability. Zero fall risk in human-occupied environments" },
        { label: "Arms", value: "2x 6DoF", detail: "Full coverage for service tasks at counters" },
        { label: "Screen", value: "10\" touchscreen", detail: "Direct customer interaction. Voice + display" },
        { label: "Speed", value: "1.5 m/s", detail: "Autonomous movement with LIDAR + stereo vision" },
        { label: "Battery life", value: "8 hours", detail: "Full work shift without recharging" },
      ],
      sections: [
        {
          heading: "The perfect use case — Retail and Hospitality",
          body: "R1 doesn't try to be an anthropomorphic humanoid — and this is the right decision for commercial indoor spaces. The wheeled design eliminates fall risk in customer environments, simplifies navigation in narrow spaces and allows 8-hour battery life for a full work shift. The 6-DoF arms can serve at counters, present products, provide information, process simple returns. At $4,900, ROI vs. a part-time employee is achieved in under 12 months.",
        },
        {
          heading: "Huge addressable market — 50+ million service jobs",
          body: "R1 directly targets the customer-facing service work category — cashiers, receptionists, museum guides, airport information staff, internal delivery staff in hospitals and hotels. This is a global market of 50+ million minimum-wage employees in high-cost countries. At $4,900 per unit with a 5+ year lifespan, R1 is the first solution where a retail chain manager can economically justify partial replacement.",
        },
      ],
      status: "Available immediately",
      delivery: "Delivery in 1–2 weeks",
    },
    noetix: {
      title: "Noetix Bumi",
      company: "Noetix Robotics",
      tagline: "The first humanoid under $2,000 — education and home use",
      specs: [
        { label: "Price", value: "$1,400", detail: "Below the price of a 2026 flagship smartphone" },
        { label: "Height", value: "90 cm", detail: "Sized for interaction with children and residential spaces" },
        { label: "DoF", value: "22 DoF", detail: "Fully articulated body at this size" },
        { label: "AI", value: "Edge AI", detail: "Local processing — no cloud or subscription required" },
        { label: "Battery life", value: "3 hours", detail: "Full recharge in 45 min" },
        { label: "Market", value: "B2C + Edu", detail: "Direct sales to consumers and educational institutions" },
      ],
      sections: [
        {
          heading: "Complete democratization — Robotics in the household",
          body: "Noetix Bumi is the first sign that humanoid robotics is becoming a consumer good. At $1,400 — less than a mid-range TV — Bumi can be purchased by families, schools and libraries. Targeted use cases include: educational companion for children (math, languages, coding), assistant for elderly people (medication reminders, video connection, limited mobility), coding platform for hobbyists and students. Local Edge AI means zero subscription costs — the purchase price is the total price.",
        },
        {
          heading: "Educational impact — The robotics natives generation",
          body: "The most significant long-term impact of Noetix Bumi is not in the household, but in education. Institutions that integrate Bumi as a coding platform in K–12 curriculum create the first generation of students who understand robotics not as abstract theory, but as hands-on practice. The open Python API and library of educational exercises allow teachers to teach physics, math, algorithms and AI using a real robot. This fundamentally transforms STEM pedagogy.",
        },
      ],
      status: "Pre-order open — Q3 2026 delivery",
      delivery: "Available for educational institutions from July 2026",
    },
    impact: {
      title: "The Impact of Democratization on the Market",
      body1: "The democratization of humanoid robotics pricing in 2026 creates an unprecedented adoption pyramid. At the top: enterprise players with budgets of $100,000+ per unit (Figure, Sanctuary, Atlas). In the middle: SMBs and industrial medium with $15,000–50,000 (Optimus, Apollo). At the base — where the critical mass of global adoption lies: $1,400–5,000 (Unitree G1, R1, Noetix Bumi).",
      body2: "The global market implication: every 50% price reduction doubles the potential buyer pool. At $20,000, the humanoid robot is accessible for companies with 50+ employees. At $5,000, it's accessible for companies with 10+ employees. At $1,400, it's accessible for individual consumers. This stratification means the total addressable market expands 100x over the decade.",
      body3: "The geopolitical risk of democratization: cheap Chinese robotics (Unitree, Noetix) capture the base of the pyramid — the highest-volume segment. Western companies that can't compete on price must focus on premium niches (advanced cognition, extreme environments, strict regulation). This replicates the semiconductor and solar panel dynamic, where China won on volume but the West retained design and IP.",
    },
    metrics: {
      title: "Price and Capability Comparison",
      headers: ["Robot", "2026 Price", "DoF", "Battery life", "Target market"],
      rows: [
        ["Figure 03", "~$150,000", "16 DoF hands", "8 hours", "Enterprise AI"],
        ["Tesla Optimus G3", "< $20,000", "28 DoF total", "6–8 hours", "Manufacturing"],
        ["Unitree G1", "$16,000", "43 DoF", "2 hours", "SMB + Research"],
        ["Unitree R1", "$4,900", "6 DoF/arm", "8 hours", "Retail + Service"],
        ["Noetix Bumi", "$1,400", "22 DoF", "3 hours", "Edu + Residential"],
      ],
    },
    cards: [
      { label: "$1,400", accent: "#FFE600", title: "The cheapest humanoid", detail: "Noetix Bumi. Below the price of a flagship smartphone. The first time in history that humanoid robotics becomes a consumer good." },
      { label: "15K+", accent: "#00E5FF", title: "Unitree G1 developers", detail: "Active open-source community. Thousands of pre-built applications for retail, education, research and services." },
      { label: "100x", accent: "#FFE600", title: "Addressable market 2026–2035", detail: "Every 50% price reduction doubles the number of potential buyers. At $1,400, the market becomes mass consumption." },
    ],
    cta: { label: "BACK TO OVERVIEW", text: "Explore all market leaders" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function DemocratizationPage() {
  const [lang, setLang] = useState<Lang>("ro");
  const tx = content[lang];

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/6 bg-[#080810]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/humanoid-reality-2026" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
            <ArrowLeft size={14} />
            <span className="text-[10px] uppercase tracking-widest hidden sm:inline">{tx.nav}</span>
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">{tx.chapterLabel} {tx.chapterNum}</span>
          <button
            onClick={() => setLang((l) => (l === "ro" ? "en" : "ro"))}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-full px-3 py-1.5 hover:border-[#FFE600]/40 hover:text-[#FFE600] transition-all duration-200"
          >
            <span className={lang === "ro" ? "text-[#FFE600]" : "text-white/40"}>RO</span>
            <span className="text-white/20">/</span>
            <span className={lang === "en" ? "text-[#FFE600]" : "text-white/40"}>EN</span>
          </button>
        </div>
      </nav>

      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,230,0,0.06)_0%,transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE600]/30 to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 border border-[#FFE600]/20 rounded-full px-4 py-1.5 bg-[#FFE600]/5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFE600]/70 font-semibold">{tx.badge}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="text-[100px] md:text-[160px] font-black leading-none tracking-tighter text-white/[0.04] select-none mb-[-20px]">{tx.chapterNum}</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white via-white to-[#FFE600]/60 bg-clip-text text-transparent">{tx.category}</h1>
            <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">{tx.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Unitree G1 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/25 flex items-center justify-center">
                <Globe size={16} className="text-[#FFE600]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE600]/60">Unitree Robotics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tx.unitreeG1.title}</h2>
            <p className="text-white/40 text-base mb-10">{tx.unitreeG1.tagline}</p>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {tx.unitreeG1.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#FFE600]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#FFE600] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            {tx.unitreeG1.sections.map((s, i) => (
              <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-white/6 bg-[#0a0a14] p-7 hover:border-white/10 transition-colors duration-300">
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#FFE600]" />{s.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs border border-[#FFE600]/25 rounded-full px-4 py-2 bg-[#FFE600]/8 text-[#FFE600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />{tx.unitreeG1.status}
            </span>
            <span className="inline-flex items-center gap-2 text-xs border border-white/10 rounded-full px-4 py-2 text-white/50">{tx.unitreeG1.delivery}</span>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent mx-6" />

      {/* Unitree R1 */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center">
                <Users size={16} className="text-[#00E5FF]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF]/60">Unitree Robotics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tx.unitreeR1.title}</h2>
            <p className="text-white/40 text-base mb-10">{tx.unitreeR1.tagline}</p>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {tx.unitreeR1.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#00E5FF]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#00E5FF] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            {tx.unitreeR1.sections.map((s, i) => (
              <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-white/6 bg-[#0e0e1a] p-7 hover:border-white/10 transition-colors duration-300">
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#00E5FF]" />{s.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Noetix Bumi */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/25 flex items-center justify-center">
                <Zap size={16} className="text-[#FFE600]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE600]/60">Noetix Robotics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{tx.noetix.title}</h2>
            <p className="text-white/40 text-base mb-10">{tx.noetix.tagline}</p>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {tx.noetix.specs.map((spec, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-[#0e0e1a] p-4 hover:border-[#FFE600]/20 transition-colors duration-200">
                <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{spec.label}</div>
                <div className="text-[#FFE600] font-bold text-xl mb-1">{spec.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{spec.detail}</div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            {tx.noetix.sections.map((s, i) => (
              <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-white/6 bg-[#0a0a14] p-7 hover:border-white/10 transition-colors duration-300">
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <ChevronRight size={16} className="text-[#FFE600]" />{s.heading}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs border border-[#FFE600]/25 rounded-full px-4 py-2 bg-[#FFE600]/8 text-[#FFE600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-pulse" />{tx.noetix.status}
            </span>
            <span className="inline-flex items-center gap-2 text-xs border border-white/10 rounded-full px-4 py-2 text-white/50">{tx.noetix.delivery}</span>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Market Impact */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center">
                <TrendingDown size={16} className="text-[#00E5FF]" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.impact.title}</h2>
          </motion.div>
          <div className="space-y-5">
            {[tx.impact.body1, tx.impact.body2, tx.impact.body3].map((para, i) => (
              <motion.p key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                className="text-white/50 text-sm md:text-base leading-relaxed border-l-2 border-[#FFE600]/20 pl-5">
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#FFE600]/15 to-transparent mx-6" />

      {/* Metrics Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tx.metrics.title}</h2>
          </motion.div>
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/6 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/6 bg-white/[0.02]">
                    {tx.metrics.headers.map((h, i) => (
                      <th key={i} className="text-left px-5 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tx.metrics.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/4 hover:bg-white/[0.015] transition-colors duration-150">
                      <td className="px-5 py-3.5 text-white font-semibold text-sm">{row[0]}</td>
                      <td className="px-5 py-3.5 text-[#FFE600] text-sm font-bold">{row[1]}</td>
                      <td className="px-5 py-3.5 text-white/60 text-sm">{row[2]}</td>
                      <td className="px-5 py-3.5 text-white/60 text-sm">{row[3]}</td>
                      <td className="px-5 py-3.5 text-white/50 text-sm">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-6" />

      {/* Summary Cards */}
      <section className="py-20 px-6 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {tx.cards.map((card, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="relative group rounded-2xl border bg-[#0e0e1a] p-8 overflow-hidden"
                style={{ borderColor: `${card.accent}20` }}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[50px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ background: `${card.accent}15` }} />
                <div className="relative z-10 text-4xl font-black mb-3" style={{ color: card.accent }}>{card.label}</div>
                <h3 className="relative z-10 text-white font-semibold text-lg mb-3">{card.title}</h3>
                <p className="relative z-10 text-white/40 text-sm leading-relaxed">{card.detail}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accent}60, transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4">{tx.cta.label}</div>
            <Link href="/humanoid-reality-2026"
              className="inline-flex items-center gap-3 border border-[#FFE600]/25 rounded-full px-8 py-4 text-[#FFE600] text-sm font-semibold hover:bg-[#FFE600]/8 hover:border-[#FFE600]/50 transition-all duration-300 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              {tx.cta.text}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
