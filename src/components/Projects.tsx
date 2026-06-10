import { projects } from "@/data/portfolio";
import { SectionLabel } from "./About";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6" style={{ background: "linear-gradient(to bottom, #0f1318, #0f1318 calc(100% - 96px), #080b10)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>03. Projects</SectionLabel>
        </FadeIn>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  href,
  repo,
  date,
  current,
}: (typeof projects)[0]) {
  return (
    <div className="card-glow rounded-sm bg-[#080b10] p-6 flex flex-col gap-4 group h-full">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent)] opacity-40 text-2xl font-mono leading-none">
            &#9672;
          </span>
          {current && (
            <span className="font-mono text-[9px] tracking-widest uppercase text-black bg-[var(--color-accent)] px-2 py-0.5 rounded-sm">
              Active
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[var(--color-muted)]">{date}</span>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Repository"
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <GithubIcon />
            </a>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-[var(--color-muted)] text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] bg-[rgba(0,229,255,0.06)] px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
