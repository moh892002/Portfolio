import AnimatedSection from "./AnimatedSection";
import { EXPERIENCE } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-border"
    >
      <AnimatedSection animation="fade-in-up">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-start">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
            About
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.95]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Backend
            <br />
            <em className="not-italic text-primary">Developer</em>
            <br />
            Focused.
          </h2>
        </div>
        <div
          className="space-y-6 pt-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p className="text-foreground leading-relaxed">
            B.Sc. in Computer Science with specialization in Software
            Development. Passionate about building robust backend systems and
            full-stack applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I design and build backend systems that power real business
            operations — not just tutorials.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My core focus is writing code that is clean, scalable, and easy for
            other developers to step into — because a system that only makes
            sense to its original author isn't finished.
          </p>
          <div className="pt-4 grid grid-cols-3 gap-6">
            {[
              ["3+", "Projects"],
              ["Laravel", "Primary"],
              ["Full-Stack", "Skills"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  className="text-3xl font-light text-primary"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {num}
                </div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </AnimatedSection>

      {/* Experience timeline */}
      <AnimatedSection animation="fade-in-up" delay={100}>
      <div className="mt-20">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">
          Experience
        </p>
        <div className="space-y-px bg-border">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.company}
              className="bg-background px-0 py-6 grid md:grid-cols-[1fr_1fr_1fr] gap-4 items-start group"
            >
              <div>
                <p
                  className="text-foreground font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exp.role}
                </p>
                <p className="text-primary font-mono text-xs mt-1">
                  {exp.company}
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.detail}
              </p>
              <p className="font-mono text-xs text-muted-foreground md:text-right">
                {exp.period}
              </p>
            </div>
          ))}
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
}
