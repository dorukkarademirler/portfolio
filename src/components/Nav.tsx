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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

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

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("scroll", close, { once: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [menuOpen]);

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
          scrolled || menuOpen
            ? "bg-[#080b10]/95 backdrop-blur border-b border-[#1a2030]"
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

          {/* Desktop links */}
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

          {/* Mobile hamburger button */}
          <button
            className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px bg-[var(--color-accent)] transition-all duration-200"
              style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}}
            />
            <span
              className="block w-5 h-px bg-[var(--color-accent)] transition-all duration-200"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-5 h-px bg-[var(--color-accent)] transition-all duration-200"
              style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}}
            />
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-[#1a2030] bg-[#080b10]/95 backdrop-blur">
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ label, href, id }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 font-mono text-sm tracking-widest uppercase transition-colors duration-200 border-b border-[#1a2030] last:border-0 ${
                      active === id
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-muted)]"
                    }`}
                  >
                    {active === id && <span className="mr-2">▸</span>}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
