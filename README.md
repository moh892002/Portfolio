# Portfolio Website — Mohammed Bader

A modern, single-page portfolio website built with **React**, **TypeScript**, and **Vite**. Designed to showcase projects, skills, and experience for a backend/full-stack software developer role.

The original design was created in Figma and converted to code.

## Tech Stack

| Layer             | Technology                                       |
| ----------------- | ------------------------------------------------ |
| Framework         | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool        | [Vite 6](https://vite.dev)                       |
| Styling           | [Tailwind CSS 4](https://tailwindcss.com)         |
| UI Components     | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com/) primitives |
| Icons             | [Lucide React](https://lucide.dev) + [MUI Icons](https://mui.com/material-ui/material-icons/) |
| Animation         | [Motion](https://motion.dev) (Framer Motion)      |
| Charts            | [Recharts](https://recharts.org)                  |
| Misc              | react-router, react-hook-form, sonner, vaul, react-day-picker, cmdk, recharts, canvas-confetti, embla-carousel, next-themes |

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** (or npm / yarn)

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Opens at [http://localhost:5173](http://localhost:5173) by default.

### Build for production

```bash
pnpm build
```

Output is in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main application component (all sections)
│   ├── port.png             # Profile photo
│   └── components/
│       ├── figma/
│       │   └── ImageWithFallback.tsx
│       └── ui/              # shadcn/ui generated components
│           ├── button.tsx, card.tsx, dialog.tsx, ...
│           └── ...
├── main.tsx                 # React entry point
└── styles/
    ├── index.css
    ├── tailwind.css
    ├── fonts.css
    ├── theme.css
    └── globals.css
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
