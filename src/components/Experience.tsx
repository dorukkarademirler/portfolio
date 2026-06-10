import { experience } from "@/data/portfolio";
import { SectionLabel } from "./About";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6" style={{ background: "linear-gradient(to bottom, #0f1318, #080b10 96px, #080b10 calc(100% - 96px), #0f1318)" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel>04. Experience</SectionLabel>
        </FadeIn>

        <ol className="mt-12 space-y-8">
          {experience.map((job, i) => (
            <FadeIn key={i} delay={i * 100}>
              <li className="card-glow rounded-sm bg-[var(--color-surface)] p-6">
                {/* Header row */}
                <div className="flex items-start gap-4">
                  {/* Company logo badge */}
                  <div
                    className="shrink-0 w-12 h-12 rounded flex items-center justify-center text-xs font-bold tracking-wide leading-tight text-center"
                    style={{ backgroundColor: job.logo.bg, color: job.logo.fg }}
                  >
                    {job.logo.label}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="text-white font-semibold text-base leading-snug">
                        {job.role}
                      </h3>
                      <span className="text-[var(--color-accent)] font-mono text-sm">
                        @ {job.company}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 mt-0.5">
                      <span className="text-[var(--color-muted)] font-mono text-xs">
                        {job.period}
                      </span>
                      <span className="text-[var(--color-muted)] font-mono text-xs">
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2 pl-16">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[var(--color-text)] text-sm leading-relaxed"
                    >
                      <span className="text-[var(--color-accent)] mt-1 text-xs shrink-0">
                        &#9658;
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
