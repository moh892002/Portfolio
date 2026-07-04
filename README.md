# Portfolio Website — Mohammed Bader

A modern, single-page portfolio website built with **React**, **TypeScript**, and **Vite**. Designed to showcase projects, skills, and experience for a backend/full-stack software developer role.

The original design was created in Figma and converted to code.

## Tech Stack

| Layer             | Technology                                       |
| ----------------- | ------------------------------------------------ |
| Framework         | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool        | [Vite 6](https://vite.dev)                       |
| Styling           | [Tailwind CSS 4](https://tailwindcss.com)         |
| Animation         | [tw-animate-css](https://github.com/tw-in-js/tw-animate-css) |
| Icons             | [Lucide React](https://lucide.dev)                |

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (or pnpm / yarn)

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) by default.

### Build for production

```bash
npm run build
```

Output is in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main application component (all sections)
│   ├── port.png             # Profile photo
│   ├── data/
│   │   └── portfolio.ts     # Portfolio data (projects, skills, experience, contact)
│   ├── hooks/
│   │   ├── useScrollSpy.ts  # IntersectionObserver-based active section tracking
│   │   ├── useParallax.ts   # Scroll-driven parallax transformation
│   │   └── useInView.ts     # Element visibility detection with one-shot animation
│   └── components/
│       ├── NavBar.tsx       # Sticky navigation with scroll spy
│       ├── Hero.tsx         # Hero section with parallax and profile photo
│       ├── WorkSection.tsx  # Featured + regular project listings
│       ├── AboutSection.tsx # Bio, stats, and experience timeline
│       ├── SkillsSection.tsx# Grouped skill badges
│       ├── ContactSection.tsx# Contact links with icons
│       ├── Footer.tsx       # Copyright and branding
│       └── AnimatedSection.tsx# Scroll-triggered animation wrapper
├── main.tsx                 # React entry point
└── styles/
    ├── index.css            # Entry point composing all styles
    ├── tailwind.css         # Tailwind CSS v4 setup with source scanning
    ├── fonts.css            # Font-face declarations
    └── theme.css            # CSS custom properties (theme tokens)
```

## Features

- **Responsive layout** — adapts from mobile to large desktop screens
- **Smooth scroll navigation** — nav bar with active section highlighting via `IntersectionObserver`
- **Hero section** — name, role, photo, tagline, social links, and CTA
- **Work section** — featured projects (grid) and additional projects (list) with hover effects
- **About section** — bio, stats summary, and experience timeline
- **Skills section** — grouped skill badges (Backend, Frontend, Databases & Tools)
- **Contact section** — email, GitHub, LinkedIn links with animated icons
- **Footer** — copyright and branding

## Contact

- **Email:** [mohammedbader445@gmail.com](mailto:mohammedbader445@gmail.com)
- **GitHub:** [github.com/moh892002](https://github.com/moh892002)
- **LinkedIn:** [linkedin.com/in/mohammed-bader-3b32a0394](https://www.linkedin.com/in/mohammed-bader-3b32a0394)

---

Built with care.
