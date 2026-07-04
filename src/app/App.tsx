import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import portfolio from "./port.png";

const NAV_LINKS = ["Work", "About", "Skills", "Contact"];

const PROJECTS = [
  {
    id: "01",
    title: "WorkFlow Pro",
    category: "Full-Stack Application",
    description:
      "A unified enterprise management system built for Small and Medium-sized Enterprises (SMEs). It combines task management, employee lifecycle tracking, financial analytics, and AI-powered communication tools into a single ecosystem.",
    tags: ["Laravel", "React", "AI Integration"],
    year: "2024",
    link: "#",
    featured: true,
  },
  {
    id: "02",
    title: "Blogo",
    category: "CMS Platform",
    description:
      "A modern CMS platform featuring a public-facing website and a secure, authenticated admin dashboard. Supports dynamic post publishing, content taxonomy (categories/tags), static page management, and built-in visitor messaging mechanisms.",
    tags: ["Laravel", "PostgreSQL", "Tailwind"],
    year: "2024",
    link: "#",
    featured: true,
  },
  {
    id: "03",
    title: "ShopWave — E-Commerce",
    category: "Frontend",
    description:
      "A fully functional single-page e-commerce storefront built entirely with pure web technologies. Optimized for zero-dependency execution with no build steps or frameworks—pure client-side logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    link: "#",
    featured: false,
  },
];

const SKILLS = [
  { group: "Backend", items: ["PHP (Laravel)", "Java (Spring Boot)"] },
  {
    group: "Frontend",
    items: ["JavaScript", "React.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    group: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "Docker", "Git"],
  },
];

const EXPERIENCE = [
  {
    role: "Backend Developer Trainee",
    company: "codeTech Company",
    period: "2024 — 2025",
    detail:
      "Developed robust backend solutions and API endpoints using Laravel.",
  },
  {
    role: "Software Engineering Fellow",
    company: "Taqat Company (Codemap Engineering Bootcamp)",
    period: "2023 — 2024",
    detail:
      "Collaborated on modern software design patterns, agile workflows, and full-stack architecture.",
  },
  {
    role: "Laravel Bootcamp Alumnus",
    company: "Summer Intensive",
    period: "2023",
    detail:
      "Deep-dive into advanced MVC concepts, database optimization, and authentication systems.",
  },
];

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(["work", "about", "skills", "contact"]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <span
          className="font-mono text-sm tracking-widest text-foreground uppercase cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MB<span className="text-primary">.</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.toLowerCase();
            return (
              <button
                key={link}
                onClick={() => scrollTo(id)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  active === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link}
              </button>
            );
          })}
        </div>
        <a
          href="mailto:mohammedbader445@gmail.com"
          className="font-mono text-xs tracking-widest uppercase bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
        <div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6">
                Software Developer — Backend & Full-Stack
              </p>
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
            <div className="image">
              <img src={portfolio} alt="portfolio image" className="" />
            </div>
          </div>
          <p
            className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            B.Sc. in Computer Science specializing in Software Development.
            Building scalable backend solutions and modern web applications with
            Laravel, React, and PostgreSQL.
          </p>
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-primary/90 transition-colors"
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
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-bader-3b32a0394"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mohammedbader445@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end gap-1 text-right pb-2">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Based in
          </span>
          <span className="font-mono text-sm text-foreground">Palestine</span>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mt-3">
            Phone
          </span>
          <span className="font-mono text-sm text-foreground">
            +970592377942
          </span>
        </div>
      </div>
      <div className="mt-20 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <ChevronDown
          size={14}
          className="text-muted-foreground animate-bounce"
        />
        <div className="h-px flex-1 bg-border" />
      </div>
    </section>
  );
}

function WorkSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
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

      {/* Featured projects — large */}
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

      {/* Smaller projects — list */}
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
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-border"
    >
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

      {/* Experience timeline */}
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
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-border"
    >
      <div className="flex items-baseline justify-between mb-16">
        <h2
          className="text-[clamp(2rem,5vw,4rem)] font-light"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {SKILLS.map((group) => (
          <div key={group.group} className="bg-background p-8">
            <p className="font-mono text-xs tracking-widest text-primary uppercase mb-6">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-foreground border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors cursor-default"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-border"
    >
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
            {[
              {
                icon: Mail,
                label: "mohammedbader445@gmail.com",
                href: "mailto:mohammedbader445@gmail.com",
              },
              {
                icon: Github,
                label: "github.com/moh892002",
                href: "https://github.com/moh892002",
              },
              {
                icon: Linkedin,
                label: "linkedin.com/in/mohammed-bader-3b32a0394",
                href: "https://www.linkedin.com/in/mohammed-bader-3b32a0394",
              },
            ].map(({ icon: Icon, label, href }) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 max-w-6xl mx-auto flex items-center justify-between">
      <span className="font-mono text-xs text-muted-foreground">
        © 2025 Mohammed Bader
      </span>
      <span className="font-mono text-xs text-muted-foreground">
        Built with care.
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <NavBar />
      <Hero />
      <WorkSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <div className="max-w-6xl mx-auto">
        <Footer />
      </div>
    </div>
  );
}
