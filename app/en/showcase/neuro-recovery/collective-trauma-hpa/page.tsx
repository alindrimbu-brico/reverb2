"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function CollectiveTraumaHpaPage() {
  return (
    <>
      <ArticleLayout themeName="withdrawal" accentColor="#ef4444">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Collective Trauma & The HPA Axis: The Physiology of Total Alert
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-red-500 pl-6">
          A deep scientific, psychological, and spiritual analysis of how systemic stress and social alienation lock the neuroendocrine axis in survival mode.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/collective-trauma.jpg" 
          themeColor="#ef4444" 
          title="Collective Trauma & The HPA Axis: Cortisol Response & Stress System" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. The HPA Axis: The Neuroendocrine Stress Response System
        </h2>
        <p>
          When the brain perceives a threat, the **hypothalamus** releases CRH (corticotropin-releasing hormone), stimulating the **pituitary gland** to secrete ACTH. This hormonal signal travels to the **adrenal glands**, triggering a massive release of **cortisol**, adrenaline, and noradrenaline. This is the **HPA Axis** (Hypothalamic-Pituitary-Adrenal) circuit, the body's primary fight-or-flight alarm system.
        </p>
        <p>
          Under chronic stress, the negative feedback loop of the HPA axis fails. The hippocampus (responsible for turning off the alarm) undergoes atrophy due to the neurotoxicity of elevated cortisol. The result is a state of high **allostatic load** — severe biological wear and tear where the nervous system remains locked in a perpetual state of total alert, leading to anxiety, adrenal exhaustion, and an increased craving for sedative substances (such as opiates or alcohol) to numb the system.
        </p>

        <div className="bg-neutral-900/50 border border-red-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-2">Neurobiological Impact</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Constant hyperexcitability of the amygdala blocks prefrontal cortex function. Decisions made in this state no longer belong to free reason; they are automated survival reactions, promoting impulsivity and relapse in addiction.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Collective Trauma and Systemic Alienation
        </h2>
        <p>
          Trauma is not just an individual phenomenon; it has a deeply **collective** dimension. Systematic social neglect, community fragmentation, extreme economic pressure, and structural hopelessness act as invisible but constant stressors.
        </p>
        <p>
          Psychologist Carl Jung spoke of the **collective unconscious** and how society's unresolved traumas seep into our individual minds. When genuine human connection is replaced by aggressive competition and alienation (as described by philosopher Karl Marx), our nervous system perceives isolation as a severe existential threat. A collectively traumatized society inevitably produces individuals with deeply dysregulated HPA axes.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Spiritual Dimension: Finding Quiet in the Center of the Systemic Storm
        </h2>
        <p>
          From a spiritual standpoint, restoring the HPA axis requires stepping out of the illusion of separation. As long as we see ourselves as isolated islands fighting an hostile environment, the stress system will remain activated.
        </p>
        <p>
          Spiritual healing means reconnecting with the breath and cultivating mindfulness. Through meditative practices and restoring a sense of belonging to a supportive community (the Buddhist concept of *Sangha*), we send clear signals of biological safety to the amygdala. We learn to step down from high alert, transforming the body from a field of neuroendocrine warfare into a temple of profound silence.
        </p>

        <div className="border-l-4 border-red-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            "When you cannot change the external noise of the world, the only way is to find the inner silence from which true peace of the body is born."
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
