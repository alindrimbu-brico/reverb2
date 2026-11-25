"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Scroll-reveal component.
 * Server-renders fully visible (no inline style).
 * On the client, hides the element via DOM manipulation, then
 * reveals it when it enters the viewport via IntersectionObserver.
 * If JS fails to hydrate, content stays visible — progressive enhancement.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ce e deja pe ecran la încărcare rămâne cum e: blocul fusese vopsit, iar ascunderea lui după hidratare se vedea ca o
    // clipire (30–180 ms) pe primul ecran. Intră lin doar blocurile de sub ecran. La „mișcare redusă” nu se ascunde nimic.
    // Starea de la capăt e aceeași ca după o intrare (opacitate 1, transformare neutră), ca blocul să se deseneze la fel
    // oriunde ar fi fost la încărcare; diferă doar că nu mai trece prin „ascuns”.
    const rect = el.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (onScreen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      return;
    }

    // Hide element (only on client after hydration)
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
