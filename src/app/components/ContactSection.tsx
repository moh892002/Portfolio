import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { CONTACT_LINKS } from "../data/portfolio";
import AnimatedSection from "./AnimatedSection";

const ICON_MAP = { Mail, Github, Linkedin } as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-border"
    >
      <AnimatedSection animation="fade-in-up">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
            Get in touch
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,6rem)] font-light leading-[0.92]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Let's build
            <br />
            something
            <br />
            <em className="not-italic text-primary">real.</em>
          </h2>
        </div>
        <div className="space-y-8 pt-2">
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Open to backend developer roles and full-stack opportunities. Let's
            discuss building scalable web applications and modern software
            solutions.
          </p>
          <div className="space-y-3">
            {CONTACT_LINKS.map(({ icon, label, href }) => {
              const Icon = ICON_MAP[icon as keyof typeof ICON_MAP];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 py-4 border-b border-border hover:border-primary transition-colors"
                >
                  <Icon
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="ml-auto text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
}
