"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function HappinessPage() {
  return (
    <>
      <ArticleLayout themeName="stimulants" accentColor="#f97316">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Happiness (Mind): Cognitive Balance & The Art of Mental Presence
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-orange-500 pl-6">
          A deep analysis of happiness as a mental evaluation process. How serotonergic circuits and the prefrontal cortex collaborate with Stoicism and Buddhism to generate psychological stability.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/happiness.jpg" 
          themeColor="#f97316" 
          title="Happiness (Mind): Frontal Lobe Coherence & Stoic Control" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Neurobiology of Serotonin and Prefrontal-Amygdala Synergy
        </h2>
        <p>
          Unlike dopamine, which drives us toward action and acquisition, <strong>serotonin (5-HT)</strong> is the molecule of contentment, status, and emotional stability. It modulates the circuits in the **prefrontal cortex** that control and temper the primal impulses coming from the **amygdala** (the center of fear and stress).
        </p>
        <p>
          Mental happiness translates neurologically into a strong, stable connection between the frontal lobe (reason) and the limbic system (emotions). When this connection is optimal, the brain can perform cognitive reappraisal, translating external events through constructive lenses rather than defensive panic or anger reactions.
        </p>

        <div className="bg-neutral-900/50 border border-orange-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-2">The Science of Flow</h4>
          <p className="text-sm text-neutral-300 mb-0">
            The concept of "Flow" described by Mihaly Csikszentmihalyi represents perfect mental alignment: attention is completely absorbed by the task, the sense of time disappears, and the activity of the lateral prefrontal cortex (the inner critic) decreases significantly, freeing the mind from the tension of constant self-evaluation.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Stoicism and the Dichotomy of Control
        </h2>
        <p>
          In the philosophical arena, Stoics (such as Epictetus and Marcus Aurelius) defined mental happiness through the *dichotomy of control*: it is not things themselves that disturb us, but the judgments we make about them.
        </p>
        <p>
          This is exactly the foundation of modern Cognitive Behavioral Therapy (CBT). The happiness of the mind does not come from controlling external circumstances, but from mastering one's own interpretations. The mind ceases to be a leaf blown by the wind and becomes the silent observer of its own cognitive processes.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Zen Perspective: The Mind as a Mirror of Illusion (Samsara)
        </h2>
        <p>
          Buddhism and Zen teach us that the untrained mind is like a "monkey mind" constantly jumping between regrets from the past and scenarios from the future. This chronic rumination corresponds to the excessive activity of the **Default Mode Network (DMN)**.
        </p>
        <p>
          Happiness at the level of the mind is installed when we learn to view thoughts as passing clouds in the sky of consciousness, not as reality itself. Through meditation, we calm the DMN, creating a mind clear as a mirror that reflects the world without being stained by blind desires or attachments.
        </p>

        <div className="border-l-4 border-orange-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            "Peace does not mean a life free of storms, but the silence at the center of the mental hurricane. The mind is an excellent servant, but a terrible master."
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
