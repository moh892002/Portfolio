import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import portfolio from "../port.jpg";
import AnimatedSection from "./AnimatedSection";
import { useParallax } from "../hooks/useParallax";

export default function Hero() {
  const bgDecor = useParallax({ speed: 0.08 });
  const subtitle = useParallax({ speed: 0.05 });
  const heading = useParallax({ speed: 0.03 });
  const photo = useParallax({ speed: 0.06 });
  const description = useParallax({ speed: 0.05 });
  const cta = useParallax({ speed: 0.03 });
  const sidebar = useParallax({ speed: 0.05 });

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 md:px-10 max-w-6xl mx-auto overflow-hidden">
      {/* Decorative background elements for parallax depth — moves slowest */}
      <div
        style={bgDecor.style}
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
      >
        <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full border border-border/20" />
        <div className="absolute top-[30%] left-[5%] w-40 h-40 rounded-full border border-border/10" />
        <div className="absolute bottom-[20%] right-[20%] w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute top-[10%] left-[20%] text-primary/10 text-[12rem] font-light select-none"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          MB
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end relative z-10">
        <div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <AnimatedSection animation="fade-in" delay={400}>
              <div style={heading.style}>
                <h1
                  className="text-[clamp(3.5rem,10vw,9rem)] font-light leading-[0.92] tracking-tight"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  Mohammed
                  <br />
                  <em className="not-italic text-primary">Bader</em>
                  <br />—
                </h1>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={600} className="image">
              <div style={photo.style}>
                <img
                  src={portfolio}
                  alt="Portrait of Mohammed Bader, software developer"
                  className=""
                />
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection animation="fade-in" delay={200} className="">
            <div style={subtitle.style}>
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6">
                Software Developer — Backend & Full-Stack
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={700}>
            <div style={description.style}>
              <p
                className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                B.Sc. in Computer Science specializing in Software Development.
                Building scalable backend solutions and modern web applications
                with Laravel, React, and PostgreSQL.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={800}>
            <div style={cta.style}>
              <div className="flex items-center gap-6 mt-10">
                <button
                  onClick={() =>
                    document
                      .getElementById("work")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-primary/90 transition-colors"
                  aria-label="View work section"
                >
                  View Work
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/moh892002"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammed-bader-3b32a0394"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:mohammedbader445@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Send email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection animation="fade-in" delay={900}>
          <div style={sidebar.style}>
            <div className="hidden md:flex flex-col items-end gap-1 text-right pb-2">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Based in
              </span>
              <span className="font-mono text-sm text-foreground">
                Palestine
              </span>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mt-3">
                Phone
              </span>
              <span className="font-mono text-sm text-foreground">
                +970592377942
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection animation="fade-in" delay={1000}>
        <div className="mt-20 flex items-center gap-4 relative z-10">
          <div className="h-px flex-1 bg-border" />
          <ChevronDown
            size={14}
            className="text-muted-foreground animate-bounce"
          />
          <div className="h-px flex-1 bg-border" />
        </div>
      </AnimatedSection>
    </section>
  );
}
