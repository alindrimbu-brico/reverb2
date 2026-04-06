"use client";

import { useEffect, useState } from "react";

export default function PageEnter({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Double rAF ensures paint has occurred before triggering animation
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setReady(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        opacity: ready ? 1 : 0,
        transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}
