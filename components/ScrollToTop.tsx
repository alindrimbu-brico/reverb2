"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900/90 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-neutral-800 focus:outline-none dark:bg-white/90 dark:text-black dark:hover:bg-neutral-200"
      aria-label="Scroll to Top"
    >
      <ArrowUp className="h-6 w-6" strokeWidth={1.5} />
    </button>
  );
}
