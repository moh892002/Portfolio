import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/portfolio";
import AnimatedSection from "./AnimatedSection";

export default function WorkSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      <AnimatedSection animation="fade-in-up">
        <div className="flex items-baseline justify-between mb-16">
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-light"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Selected Work
          </h2>
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            {PROJECTS.length} projects
          </span>
        </div>
      </AnimatedSection>

      {/* Featured projects — large */}
      <AnimatedSection animation="fade-in-up" delay={100}>
      <div className="grid md:grid-cols-2 gap-px bg-border mb-px">
        {PROJECTS.filter((p) => p.featured).map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="group relative bg-background p-8 md:p-10 flex flex-col justify-between min-h-72 hover:bg-card transition-colors duration-200"
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                {project.id} / {project.year}
              </span>
              <ExternalLink
                size={14}
                className={`transition-opacity duration-200 ${hovered === project.id ? "opacity-100 text-primary" : "opacity-0"}`}
              />
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">
                {project.category}
              </p>
              <h3
                className="text-3xl font-light mb-4 group-hover:text-primary transition-colors"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest uppercase border border-border px-2 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      </AnimatedSection>

      {/* Smaller projects — list */}
      <AnimatedSection animation="fade-in-up" delay={200}>
      <div className="bg-border grid grid-cols-1 gap-px">
        {PROJECTS.filter((p) => !p.featured).map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="group bg-background px-8 md:px-10 py-6 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center hover:bg-card transition-colors duration-200"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {project.id}
            </span>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span
                className="text-xl font-light group-hover:text-primary transition-colors"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {project.title}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted-foreground hidden md:block">
                {project.year}
              </span>
              <ArrowUpRight
                size={14}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
          </a>
        ))}
      </div>
      </AnimatedSection>
    </section>
  );
}
