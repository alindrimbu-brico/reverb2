"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function BrainBalancePageEN() {
  return (
    <>
      <ArticleLayout themeName="recovery" accentColor="#3b82f6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          The Brain in Search of Balance — The Neuro-Spiritual Alchemy of the Zero Point
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-blue-500 pl-6">
          A profound, integrating perspective between the neuroscience of allostasis and the mysticism of inner balance — transmuting tension into pure presence.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/homeostasis-simulation.jpg" 
          themeColor="#3b82f6" 
          title="The Brain in Search of Balance: Zero Point Alchemy" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. The Neuroscience of Oscillations: Between Sympathetic Alert and Parasympathetic Stillness
        </h2>
        <p>
          The search for balance is not merely a mechanical homeostatic equation, but a true quest for the sacred within us. From a neuroscientific perspective, the brain constantly attempts to stabilize the fluctuations between the sympathetic system (fight-or-flight) and the parasympathetic system (rest-and-digest). When we live in states of chronic alert or are trapped in addiction, our neural axis becomes rigid, losing its capacity for dynamic adaptability.
        </p>
        <p>
          To survive overstimulation, the brain establishes a new dysphoric allostatic setpoint — a state of chronic physiological stress and exhaustion of the reward system. The natural threshold is disrupted, and dopamine receptors are downregulated, driving us toward compulsive use due to negative reinforcement.
        </p>

        <div className="bg-neutral-900/50 border border-blue-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">Neurophysiological Insight</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Adrenergic and glucocorticoid receptors bombarded by stress become resistant. From a medical standpoint, restoring allostatic balance requires time, synaptic silence, and re-sensitization.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Meeting at the Zero Point: Autonomous Bifurcation and Non-Dual Stillness
        </h2>
        <p>
          Viewed spiritually, this quest represents the soul's deep desire to return to the Zero Point — the state of absolute stillness, unaffected by external storms, which great masters call the state of Unity or Non-Duality.
        </p>
        <p>
          This is the autonomous bifurcation and co-activation where sympathetic and parasympathetic branches merge into maximum synaptic coherence. In this zero axis, the amygdala resides in a state of calm alertness, under the direct and stable control of the prefrontal cortex. This is the neurobiological equivalent of the state of <em>Wu Wei</em> (actionless action) in Taoist philosophy or the state of <em>Samadhi</em> in yoga.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. The Alchemy of Healing: Transmuting Tension into Transcendence
        </h2>
        <p>
          Through the conscious practice of presence, deep meditation, and rhythmic breathing, we quiet the Default Mode Network (DMN) — the region responsible for ego and mental rumination. As the boundaries of the ego dissolve, the brain reclaims its status as a clean temple of consciousness.
        </p>
        <p>
          In this space of stillness, neurotransmitters like oxytocin, serotonin, and endorphins are no longer artificial spikes of selfish pleasure, but become the natural flow of the joy of existence. The brain thus becomes an antenna perfectly tuned to universal rhythms, demonstrating that true healing is a sacred alchemy that unites matter with spirit.
        </p>

        <div className="border-l-4 border-blue-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            “Balance is not a static destination, but the dynamic dance of consciousness around its own divine axis.”
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
