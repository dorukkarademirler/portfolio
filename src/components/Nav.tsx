"use client";
import { useState, useEffect } from "react";
import { meta } from "@/data/portfolio";

const links = [
  { label: "About",      href: "#about",      id: "about" },
  { label: "Education",  href: "#education",  id: "education" },
  { label: "Projects",   href: "#projects",   id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact",    href: "#contact",    id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      // Active section
      const sectionIds = links.map((l) => l.id);
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 96) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 inset-x-0 z-[60] h-[2px] origin-left transition-none"
        style={{
          background: "var(--color-accent)",
          width: `${progress}%`,
          boxShadow: "0 0 8px rgba(0,229,255,0.6)",
        }}
      />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080b10]/90 backdrop-blur border-b border-[#1a2030]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="font-mono text-[var(--color-accent)] text-sm tracking-widest uppercase glow-hover"
          >
            {meta.name}<span className="cursor-blink ml-0.5">_</span>
          </a>

          <ul className="hidden sm:flex items-center gap-8">
            {links.map(({ label, href, id }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                    active === id
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                  }`}
                >
                  {label}
                  {active === id && (
                    <span className="block h-px bg-[var(--color-accent)] mt-0.5 opacity-70" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex sm:hidden items-center gap-4">
            {links.map(({ label, href, id }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`font-mono text-[10px] tracking-wider uppercase transition-colors ${
                    active === id
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
