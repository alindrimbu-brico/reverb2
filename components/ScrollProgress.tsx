/**
 * Scroll-progress bar — thin 2px line fixed at top of viewport.
 *
 * Uses a raw inline <script> to bypass React hydration issues in Next.js 16.
 * The script runs immediately in the browser, attaches a scroll listener,
 * and updates the bar's transform directly via DOM.
 *
 * Progressive enhancement: if JS doesn't run, bar stays invisible (scaleX(0)).
 */
export default function ScrollProgress() {
  return (
    <>
      <div
        id="scroll-progress"
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 60,
          height: "2px",
          width: "100%",
          transformOrigin: "left",
          background: "rgba(29, 39, 49, 0.35)",
          transform: "scaleX(0)",
          transition: "transform 0.15s linear",
          pointerEvents: "none",
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var b=document.getElementById("scroll-progress");if(!b)return;function u(){var h=document.documentElement.scrollHeight-window.innerHeight;b.style.transform="scaleX("+(h>0?window.scrollY/h:0)+")"}window.addEventListener("scroll",u,{passive:true});u()})();`,
        }}
      />
    </>
  );
}
