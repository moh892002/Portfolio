import { type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
  animation?: "fade-in-up" | "fade-in" | "scale-in";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        animation: isInView
          ? `${animation} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
