"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function PleasurePage() {
  return (
    <>
      <ArticleLayout themeName="alcohol" accentColor="#ef4444">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Pleasure (Body): The Somatic Gateway & Sacrality of Matter
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-red-500 pl-6">
          An elite scientific, psychological, and spiritual investigation into the first level of consciousness: the somatic dimension. How the neurobiology of reward intersects with classical somatic philosophy.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/pleasure.jpg" 
          themeColor="#ef4444" 
          title="Pleasure (Body): Somatic Vibration & The Biological Temple" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Neurobiology of Receptors and the Mesolimbic Dopamine Pathway
        </h2>
        <p>
          At a biological level, pleasure is the brain's survival currency. The mesolimbic dopamine pathway, originating in the <strong>ventral tegmental area (VTA)</strong> and projecting to the <strong>nucleus accumbens</strong>, represents the evolutionary engine of desire. This circuit does not produce the state of "consumed pleasure" itself, but rather the anticipation and pursuit (motivation).
        </p>
        <p>
          The actual sensory experience is processed through the **somatosensory cortex** and the **insula**, the brain region responsible for interoception (perception of the body's internal state). When we stimulate the body, peripheral receptors send electrical signals along the spinal cord to the thalamus, which distributes them to the cortex to create a conscious map of sensation.
        </p>

        <div className="bg-neutral-900/50 border border-red-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-red-400 font-mono text-xs uppercase tracking-widest mb-2">Clinical Insight</h4>
          <p className="text-sm text-neutral-300 mb-0">
            In active addiction, this circuit is overloaded by artificial stimuli, leading to a loss of interoceptive sensitivity. The body ceases to be a fine guide of reality and becomes a numbed receiver screaming for an overdose.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. The Philosophy of Hedonism and the Charvaka Trap
        </h2>
        <p>
          Ancient philosophy extensively explored this level. From the Cyrenaic hedonism of Aristippus (who argued that immediate physical pleasure is the highest good) to the Indian **Charvaka** school (Lokayata), materialism reduced existence to the senses.
        </p>
        <p>
          However, the trap of pure hedonism is hedonic adaptation: the brain rapidly restores homeostasis through downregulation, making the same pleasure yield less and less satisfaction. The philosopher Epicurus understood this paradox, suggesting that true pleasure lies not in the accumulation of intense sensations, but in the absence of physical pain (<em>aponia</em>) and mental disturbance (<em>ataraxia</em>).
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Spiritual Dimension: The Body as an Altar (Tantra and Embodiment)
        </h2>
        <p>
          Unlike ascetic movements that demonize the body, non-dual spiritual traditions (such as Kashmiri Shaiva Tantra) view the body as the holiest instrument of Divine Consciousness. The body is not a prison of the soul, but **the spearhead of the spirit** in the physical world.
        </p>
        <p>
          Healing begins by returning to the body (embodiment). When we treat the body not as a consumer object, but as a sacred space of presence, every simple sensation—breath, the taste of water, the touch of the earth—becomes a form of prayer and neurobiological alignment.
        </p>

        <div className="border-l-4 border-red-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            "The senses are not the enemies of the spirit, but its gates to the world. Only when the mind sleeps does pleasure become slavery; when the mind is awake, the senses are a continuous blessing."
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
