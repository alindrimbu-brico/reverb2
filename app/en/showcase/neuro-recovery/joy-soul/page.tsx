"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function JoySoulPage() {
  return (
    <>
      <ArticleLayout themeName="recovery" accentColor="#fbbf24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Joy (Soul): Heart Coherence & Spiritual Independence
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-amber-500 pl-6">
          Exploring the state of absolute quietness. How the parasympathetic nervous system, oxytocin, and gamma brain waves collaborate with Jungian individuation and Spinoza's philosophy to reveal inner joy.
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/joy-soul.jpg" 
          themeColor="#fbbf24" 
          title="Joy (Soul): Cardiac Synchronization & Coherent Gamma Waves" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. Biology of Deep Connection: The Vagus Nerve and Heart Coherence
        </h2>
        <p>
          Soulful joy is not a highly excited enthusiasm, but a state of radiant peace. Physiologically, it is governed by the activation of the **parasympathetic nervous system** via the **vagus nerve**. The latter acts as a communication bridge between the brain and visceral organs, especially the heart.
        </p>
        <p>
          Research on heart coherence shows that states of deep gratitude, compassion, and altruistic love align the heart rate in a regular, sine-wave-like pattern. This coherence triggers the release of **oxytocin** and **endogenous endorphins**, stabilizing the brain in **alpha and theta brain waves**, associated with deep silence, creative insight, and the reduction of the ego.
        </p>

        <div className="bg-neutral-900/50 border border-amber-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2">Gamma Waves and Global Brain Synchronization</h4>
          <p className="text-sm text-neutral-300 mb-0">
            During moments of profound revelation or meditation focused on universal compassion (like Metta), electroencephalograms record bursts of **gamma waves (above 40 Hz)**. This indicates global neural synchronization, where different cortical areas process information in a perfectly coherent symphony.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Jungian Individuation and Spinoza: Joy as the Expansion of Being
        </h2>
        <p>
          The philosopher Baruch Spinoza defined joy (*Laetitia*) as the transition of man from a lesser perfection to a greater one—an increase in our power to be and to act. It is not a reaction to an external reward, but the very inner expansion of being.
        </p>
        <p>
          In analytical psychology, Carl Jung described the process of **Individuation** as the integration of the shadow and the union of the conscious with the unconscious under the umbrella of the Self. The joy of the soul is the state of absolute alignment with this deep Self. It occurs when we stop fighting our own history and accept our destiny in perfect harmony.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. The Spiritual Dimension: The Silence of the Heart in the Mystical Tradition
        </h2>
        <p>
          Mysticism, whether Christian (Hesychasm), Sufi (Sufism), or Hindu (Advaita), speaks of the "silence of the mind" as the entrance to the temple of the heart.
        </p>
        <p>
          Joy at the level of the soul is marked by a deep sense of peace and independence from the external. You no longer need the world to be a certain way for you to be well. The spring of joy gushes from within, from the simple realization of existing and being conscious.
        </p>

        <div className="border-l-4 border-amber-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            "Soulful joy is not sought on foreign roads. It is born when you cease running from yourself and become a faithful friend to your own silence."
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
