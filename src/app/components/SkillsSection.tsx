import AnimatedSection from "./AnimatedSection";
import { SKILLS } from "../data/portfolio";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-border"
    >
      <AnimatedSection animation="fade-in-up">
        <div className="flex items-baseline justify-between mb-16">
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-light"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Skills
          </h2>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up" delay={100}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {SKILLS.map((group, gi) => (
          <div key={group.group} className="bg-background p-8">
            <p className="font-mono text-xs tracking-widest text-primary uppercase mb-6">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <AnimatedSection
                  key={item}
                  animation="scale-in"
                  delay={200 + gi * 100 + ii * 80}
                >
                <span
                  className="text-sm text-foreground border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors cursor-default"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item}
                </span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
      </AnimatedSection>
    </section>
  );
}
