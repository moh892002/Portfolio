import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 max-w-6xl mx-auto flex items-center justify-between">
      <AnimatedSection animation="fade-in" delay={100}>
        <span className="font-mono text-xs text-muted-foreground">
          © 2025 Mohammed Bader
        </span>
      </AnimatedSection>
      <AnimatedSection animation="fade-in" delay={200}>
        <span className="font-mono text-xs text-muted-foreground">
          Built with care.
        </span>
      </AnimatedSection>
    </footer>
  );
}
