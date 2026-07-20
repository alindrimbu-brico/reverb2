"use client";

import ArticleLayout from "../components/ArticleLayout";
import GlobalAudioToggle from "../components/GlobalAudioToggle";
import InteractiveVideoPlayer from "../components/InteractiveVideoPlayer";

export default function EpigeneticsGaborMatePage() {
  return (
    <>
      <ArticleLayout themeName="chaos" accentColor="#a855f7">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Epigenetics: The Molecular Bookmarks of Trauma & Dr. Gabor Maté's Wisdom
        </h1>
        <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12 border-l-4 border-purple-500 pl-6">
          An elite scientific, psychological, and spiritual analysis of how early-life experiences leave bookmarks on our DNA. "Don't ask why the addiction, ask why the pain."
        </p>

        {/* Video Simulation Section */}
        <InteractiveVideoPlayer 
          imageSrc="/images/epigenetics.jpg" 
          themeColor="#a855f7" 
          title="Epigenetics & Gabor Maté: Gene Expression & Somatic Healing" 
        />

        <hr className="border-neutral-800 my-12" />

        <h2 className="text-3xl font-bold text-white mb-6">
          1. The Science of Epigenetics: Molecular Bookmarks on DNA
        </h2>
        <p>
          Classical genetics teaches us that we are prisoners of our inherited DNA code. However, the revolution of **epigenetics** shows that our environment and emotional experiences control the expression of these genes. Through mechanisms like **DNA methylation** and **histone modification**, the body can turn specific genes on or off without altering the underlying code.
        </p>
        <p>
          Pioneering studies by Dr. Rachel Yehuda show that severe trauma (such as that of Holocaust survivors or war veterans) leaves epigenetic markers that are biologically transmitted to subsequent generations. Children inherit a stress-response system pre-calibrated for a hostile environment, manifested by altered cortisol levels and an increased vulnerability to anxiety and addiction.
        </p>

        <div className="bg-neutral-900/50 border border-purple-950/40 p-6 rounded-2xl my-8">
          <h4 className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-2">Molecular Mechanism</h4>
          <p className="text-sm text-neutral-300 mb-0">
            Methylation acts as a molecular "volume dial." When a gene responsible for hippocampal glucocorticoid receptors is heavily methylated due to early neglect, the brain loses its ability to efficiently shut down the stress cascade, keeping the individual locked in a toxic state of high alert.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">
          2. Dr. Gabor Maté's Paradigm: The Correct Question About Addiction
        </h2>
        <p>
          Dr. Gabor Maté, a world authority on addiction and trauma, proposes a radical paradigm shift: addiction is not a pre-determined genetic disease, nor is it a character defect. Addiction is a **desperate attempt to solve a problem** — the problem of unresolved emotional pain.
        </p>
        <p>
          Maté asserts: *“Don't ask why the addiction, ask why the pain.”* Addictions are somatic adaptation mechanisms created in childhood in response to disconnection or abuse. When the early environment does not provide safety, dopamine and endorphin circuits fail to develop optimally, leaving the brain starving for external chemical stimuli to experience a temporary sense of connection and peace.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">
          3. Spiritual Dimension: Breaking the Transgenerational Karmic Loop
        </h2>
        <p>
          From a spiritual perspective, the transgenerational transmission of trauma corresponds to the ancestral concept of **generational Karma** or family energetic imprints. The unintegrated suffering of our ancestors becomes the shadow we are called to integrate and transcend.
        </p>
        <p>
          Epigenetic healing is, at its core, a spiritual act of reclaiming free will (*akrasia*). By realizing that the pain we carry does not define our identity, but is merely an inherited biological reaction, we can break the chain of transmission. We assume the role of "terminal station" for family trauma, transforming inherited suffering into inner wisdom and compassion.
        </p>

        <div className="border-l-4 border-purple-500/30 pl-6 my-8">
          <p className="italic text-neutral-400">
            "Trauma is not what happens to you. Trauma is what happens inside you as a result of what happened to you. Healing is reconnecting with yourself."
          </p>
        </div>
      </ArticleLayout>
      <GlobalAudioToggle />
    </>
  );
}
