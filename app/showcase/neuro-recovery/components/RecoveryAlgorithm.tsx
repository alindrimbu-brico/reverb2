"use client";

import { motion } from "framer-motion";
import { ShieldPlus, Brain, Users, HeartHandshake } from "lucide-react";
import { setTheme } from "./AudioEngine";

export default function RecoveryAlgorithm() {
  return (
    <motion.section 
      onViewportEnter={() => setTheme("recovery")}
      onMouseEnter={() => setTheme("recovery")}
      viewport={{ margin: "-50% 0px -50% 0px" }}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 z-10 transition-colors duration-1000"
    >
      <div className="max-w-4xl mx-auto w-full space-y-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 items-center mb-4">
            <div className="inline-flex items-center justify-center space-x-2 text-neutral-500 bg-white/50 px-4 py-2 rounded-full border border-neutral-200">
              <HeartHandshake className="w-5 h-5 text-rose-500" />
              <span className="uppercase tracking-widest text-xs font-mono font-semibold">Algoritmul Recuperării</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
            Drumul Înapoi spre Lumină
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
          
          {/* Step 1: Medical */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <ShieldPlus className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="font-bold text-neutral-900 text-xl mb-2">1. Scutul Medical</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Recuperarea începe adesea cu sprijin fizic. Tratamentele de substituție (cum ar fi Naltrexona, care blochează receptorii opioizi la alcoolici, sau Suboxona) sunt scuturi vitale în prima fază. Reduc "zgomotul" chimic asurzitor pentru a permite minții să lupte.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Mental */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-purple-100 text-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Brain className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="font-bold text-neutral-900 text-xl mb-2">2. Neuroplasticitatea</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Fără jurăminte pe viață. Jurămintele încălcate nasc vinovăție, iar vinovăția alimentează recăderea. Metoda este <strong>„O zi pe rând”</strong>. Creierul se vindecă doar prin acțiune, antrenând zilnic <em>„mușchiul alegerii”</em>—capacitatea conștientă de a sta față în față cu impulsul și de a nu da curs acțiunii.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Conclusion / Social */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-10 md:p-16 rounded-3xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 text-center shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Users size={200} />
          </div>
          <HeartHandshake className="w-12 h-12 text-rose-500 mx-auto mb-6" />
          <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            Opusul dependenței nu este simpla abstinență. <br/>
            <span className="text-rose-600">Este conexiunea umană.</span>
          </h3>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Mai mult decât atât, tema esențială a existenței noastre este că <strong>oamenii trăiesc în simboluri</strong>. Ne găsim sensul în poveștile pe care ni le spunem, în ritualurile pe care le păstrăm și în triburile din care facem parte. Dependența prosperă exact atunci când aceste structuri simbolice se prăbușesc. Când rămânem dezgoliți într-un vid de sens și o singurătate tehnologizată, căutăm artificial acea fărâmă de alinare. Calea spre vindecare este refacerea arhitecturii simbolice: de la om la om, de la inimă la inimă.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}
