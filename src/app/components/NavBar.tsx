import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function NavBar() {
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
          aria-label="Scroll to top"
        >
          MB<span className="text-primary">.</span>
        </span>
        <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
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
                aria-current={active === id ? "true" : undefined}
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
