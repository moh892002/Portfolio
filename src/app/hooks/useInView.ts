import { useRef, useState, useEffect } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  // Use a ref to stabilize the options object across renders
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mergedOptions = {
      rootMargin: "-80px 0px",
      threshold: 0.1,
      ...optionsRef.current,
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el); // only animate once
        }
      },
      mergedOptions,
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []); // empty deps — options are accessed via stable ref

  return { ref, isInView };
}
