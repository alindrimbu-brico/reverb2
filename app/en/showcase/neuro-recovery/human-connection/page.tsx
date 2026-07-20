"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function HumanConnectionPageEN() {
  return (
    <>
      <ArticleLayout themeName="recovery" accentColor="#f43f5e">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Human Connection — The Neurobiological Antidote to Addiction
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-rose-500 pl-6">
          “The opposite of addiction is not mere abstinence. It is human connection.” — Johann Hari
        </p>

        <div className="space-y-12">
          {/* Main interactive player with connection theme */}
          <InteractiveVideoPlayer 
            imageSrc="/images/human-connection.jpg" 
            themeColor="#f43f5e" 
            title="Human Connection"
          />

          {/* Section 1: The Philosophy and Psychology */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              Psychological and Philosophical Perspective
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Addiction is not a moral failure or a simple chemical malfunction of the brain; at its core, it is a desperate attempt to solve a fundamental human suffering: <strong>the pain of disconnection and trauma</strong>. Dr. Gabor Maté famously asserts that the right question is not “Why the addiction?”, but “Why the pain?”.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Humans are symbolic creatures. We find meaning in the stories we tell ourselves, the rituals we preserve, and the tribes we belong to. When these symbolic architectures collapse due to technological isolation or early attachment traumas, the individual is left exposed. The substance becomes a synthetic, predictable, but destructive substitute for the missing authentic connection.
            </p>
          </div>

          {/* Section 2: Bruce Alexander and the Rat Park Experiment */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              The “Rat Park” Experiment — A Social Revelation
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              In the 1970s, psychologist Bruce Alexander challenged classical addiction studies, where isolated rats in empty cages chose morphine-laced water until overdose. He built <strong>“Rat Park”</strong>: a vast space filled with food, toys, and, most importantly, other rats to interact and mate with.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              The result was astonishing: although they had free access to the same morphine water, the rats in Rat Park ignored it almost entirely, preferring plain water. Even those who had previously been forced to become addicted in isolation self-detoxified once integrated into the community. The conclusion is clear: <strong>environment and social connection dictate vulnerability to addiction</strong>.
            </p>
          </div>

          {/* Section 3: The Neuroscience of Attachment (Oxytocin vs Dopamine) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              The Neurobiology of Connection: Oxytocin and Endogenous Opioids
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Neurobiologically, authentic human connection acts as a protective chemical shield:
            </p>
            <ul className="space-y-3 text-xs text-neutral-400 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">1. Oxytocin (The Attachment Hormone):</span>
                <span>Produced in the hypothalamus, it calms the hyper-reactive amygdala in trauma and addiction states. It modulates dopamine release in the nucleus accumbens, directly tempering cravings and reducing the reinforcing effects of artificial drugs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">2. Endogenous Opioids (Beta-Endorphins):</span>
                <span>Warm social interaction, physical touch, and emotional validation naturally release endorphins. Opiate addiction (such as heroin) is, biologically speaking, an attempt to artificially replicate the chemistry of maternal attachment and tribal safety in their absence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">3. Autonomic Co-Regulation:</span>
                <span>Through mirror neurons, the presence of another calm, regulated, and safe nervous system automatically co-regulates our own autonomic system, restoring homeostasis effortlessly.</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Clinical and Spiritual Path */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight border-l-2 border-rose-500 pl-4 py-1">
              The Path to Healing: From Isolation to Community
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Physical abstinence is merely the removal of chemicals; true healing requires restoring the **relational architecture**. This involves:
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light italic border-l border-rose-500/30 pl-4">
              “Being seen, heard, and accepted by another human being is the most powerful biological tranquilizer available to our species.”
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Integration into a conscious community (Sangha), somatic attachment therapy, and repairing interpersonal bonds through radical vulnerability are the fundamental steps to rewiring the brain. Healing occurs from person to person, from heart to heart, replacing technological isolation with the organic warmth of the tribe.
            </p>
          </div>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
