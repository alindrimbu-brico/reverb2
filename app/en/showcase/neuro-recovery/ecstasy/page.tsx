"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function EcstasyPage() {
  return (
    <>
      <ArticleLayout themeName="joy" accentColor="#ffffff">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Ecstasy (Divine): The Neurotheology of Transcendence & The Absolute Dissolution of Ego
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-neutral-100 pl-6">
          A frontier investigation into mystical unification. How neuroscience analyzes parietal lobe deactivation, high-amplitude gamma waves, and the dissolving of boundaries between Self and Universe.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/ecstasy.jpg" 
          themeColor="#ffffff" 
          title="Ecstasy (Divine): Mystical Union & Transient Hypofrontality" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Neurotheology: Parietal Deactivation and Spatio-Temporal Loss
        </h2>
        <p>
          The pioneer of neurotheology, <strong>Dr. Andrew Newberg</strong>, scanned the brains of Tibetan Buddhist meditators and Franciscan nuns during states of deep mystical ecstasy. His fundamental discovery concerns the **orientation association area in the superior parietal lobe**.
        </p>
        <p>
          This region is responsible for creating the physical distinction between "self" and "what is outside of self" and orienting us in space and time. During absolute ecstasy, activity in this area **decreases almost completely**. Because the brain no longer receives sensory data of delimitation, it loses its ability to define the boundaries of the ego. The subject experiences a complete dissolution of individual identity and an infinite, timeless union with the All.
        </p>

        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl my-8">
          <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2">Transient Hypofrontality and Endogenous DMT</h4>
          <p className="text-sm text-neutral-300 mb-0">
            States of ecstasy also involve **transient hypofrontality** (the temporary shutdown of executive networks in the prefrontal cortex) associated with massive discharges of endogenous tryptamines (such as DMT or related molecules). This mechanism suspends the inner critic, opening the gates of a multidimensional perception unregulated by the pragmatic filters of survival.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. The Oceanic Feeling and Maslow's Peak Experiences
        </h2>
        <p>
          Romain Rolland and, subsequently, Sigmund Freud described this state as the **"oceanic feeling"**—the sensation of an indissoluble bond and absolute belonging to the entire universe.
        </p>
        <p>
          Abraham Maslow called these experiences **"peak experiences"**, moments of pure transcendence in which the individual feels integrated, complete, devoid of fears and selfish desires, experiencing a form of love and unconditional acceptance of Existence. Maslow placed them at the absolute top of the pyramid of human needs, as the ultimate goal of our psychological evolution.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Spiritual Dimension: Samadhi, Satori, and Absolute Non-Duality
        </h2>
        <p>
          In the yoga tradition of Patanjali, the supreme state is called **Asamprajnata Samadhi**—complete absorption in pure consciousness, beyond any form of mental activity. In Zen, **Satori** represents the flashing enlightenment where the illusion of separation completely collapses.
        </p>
        <p>
          The philosophy of Advaita Vedanta (non-dual) states that the separation between the observer and the observed is a simple cognitive illusion (*Maya*). Mystical ecstasy is the collapse of this illusion: there is no longer a "self experiencing ecstasy", but there is only Ecstasy, the Infinite, Unconditioned Consciousness. It is the return of the water drop to the cosmic ocean.
        </p>

        <div className="border-l-4 border-neutral-100/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            "When the ego disappears, it does not leave an empty void, but reveals the Infinite Fullness. Ecstasy is the sweet death of the illusion that you were ever separated from the Source."
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
