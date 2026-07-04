import { useEffect, useState } from "react";

interface ParallaxOptions {
  /**
   * How many pixels to shift per scroll pixel.
   * 0 = static, 0.03 = subtle, 0.08 = noticeable, 0.15 = dramatic.
   * Default 0.05.
   */
  speed?: number;
}

export function useParallax({ speed = 0.05 }: ParallaxOptions = {}) {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTranslateY(0);
      return;
    }

    let rafId: number;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        setTranslateY(window.scrollY * speed);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return {
    style: {
      transform: `translateY(${translateY.toFixed(1)}px)`,
      willChange: "transform",
    } as React.CSSProperties,
  };
}
