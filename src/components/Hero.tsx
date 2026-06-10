import { meta } from "@/data/portfolio";
import Robot from "./Robot";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Radial glow blob */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full fade-up">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">

          {/* Text side */}
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[var(--color-accent)] text-sm tracking-widest mb-4">
              &gt; Hello, world.
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-3">
              I&apos;m{" "}
              <span
                style={{ textShadow: "0 0 30px rgba(0,229,255,0.4)" }}
                className="text-[var(--color-accent)]"
              >
                Doruk
              </span>
              <span className="cursor-blink text-[var(--color-accent)]">_</span>
            </h1>

            <h2 className="text-lg sm:text-xl text-[var(--color-muted)] font-mono mb-2">
              {meta.title}
            </h2>
            <p className="font-mono text-xs text-[var(--color-muted)] tracking-wider mb-6">
              {meta.location}
            </p>

            <p className="text-[var(--color-text)] text-base max-w-xl mb-10 leading-relaxed">
              {meta.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 font-mono text-sm tracking-wider uppercase border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-200"
                style={{ boxShadow: "0 0 12px rgba(0,229,255,0.2)" }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 font-mono text-sm tracking-wider uppercase border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download="Doruk_Karademirler_Resume.pdf"
                className="px-6 py-3 font-mono text-sm tracking-wider uppercase border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200 flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Robot */}
          <div className="flex justify-center md:justify-end md:pt-4 md:-translate-x-8">
            <Robot />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs tracking-widest text-[var(--color-muted)]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
      </div>
    </section>
  );
}
