export const NAV_LINKS = ["Work", "About", "Skills", "Contact"];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
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

export interface SkillGroup {
  group: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
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

export interface Experience {
  role: string;
  company: string;
  period: string;
  detail: string;
}

export const EXPERIENCE: Experience[] = [
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

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
}

// Icon names map to lucide-react icon component names
export const CONTACT_LINKS = [
  {
    icon: "Mail",
    label: "mohammedbader445@gmail.com",
    href: "mailto:mohammedbader445@gmail.com",
  },
  {
    icon: "Github",
    label: "github.com/moh892002",
    href: "https://github.com/moh892002",
  },
  {
    icon: "Linkedin",
    label: "linkedin.com/in/mohammed-bader-3b32a0394",
    href: "https://www.linkedin.com/in/mohammed-bader-3b32a0394",
  },
];
