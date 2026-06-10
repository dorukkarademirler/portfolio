import { education } from "@/data/portfolio";
import { SectionLabel } from "./About";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="py-28 px-6" style={{ background: "linear-gradient(to bottom, #080b10, #0f1318 96px)" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionLabel>02. Education</SectionLabel>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {education.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-glow rounded-sm p-6 bg-[#080b10]">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.school}</h3>
                    <p className="text-[var(--color-accent)] font-mono text-sm mt-0.5">
                      {item.degree}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-[var(--color-muted)]">{item.period}</p>
                    <p className="font-mono text-xs text-[var(--color-muted)] mt-0.5">{item.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[var(--color-text)] text-sm leading-relaxed"
                    >
                      <span className="text-[var(--color-accent)] mt-1 text-xs shrink-0">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
