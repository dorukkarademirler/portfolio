import { meta, skills } from "@/data/portfolio";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background guitar image */}
      <div
        className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/guitarpic.webp"
          alt=""
          className="h-[85%] max-h-[560px] object-contain opacity-[0.18]"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>01. About</SectionLabel>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <FadeIn delay={100}>
            <div className="flex items-start gap-5">
              {/* Circular profile photo */}
              <div className="relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/guitarpic.webp"
                  alt=""
                  aria-hidden
                  className="absolute pointer-events-none select-none"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "contain",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0.25,
                    mixBlendMode: "screen",
                  }}
                />
                <div
                  className="relative w-32 h-32 rounded-full overflow-hidden"
                  style={{
                    border: "2px solid var(--color-accent)",
                    boxShadow: "0 0 20px rgba(0,229,255,0.35), inset 0 0 10px rgba(0,229,255,0.05)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/selfpicture.jpeg"
                    alt="Doruk Karademirler"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio text */}
              <div className="space-y-4 text-[var(--color-text)] leading-relaxed">
                <p>
                  Hey, I&apos;m Doruk, a Computer Science student at the University
                  of Toronto (Specialist + Economics Minor) with a 3.50 GPA, based
                  in {meta.location}.
                </p>
                <p>
                  I have 5 years of experience in computer-aided design and
                  building problem-solving algorithms. My work spans compiler
                  toolchains at Qualcomm, full-stack web development, and
                  data-driven research in economics and machine learning.
                </p>
                <p>
                  I care about getting things right. I pay close attention to
                  detail, hold myself to deadlines, and take pride in being
                  disciplined and reliable on any team I&apos;m part of.
                </p>
                <p>
                  Outside of code, I play guitar and post covers on{" "}
                  <a
                    href={meta.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    TikTok
                  </a>
                  . I also played basketball at a professional level and still
                  train regularly at the gym.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <p className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-4">
                Tech I work with
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 font-mono text-sm text-[var(--color-text)]"
                  >
                    <span className="text-[var(--color-accent)] text-xs">&#9658;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-mono text-[var(--color-accent)] text-sm tracking-widest uppercase">
        {children}
      </h2>
      <div className="flex-1 h-px bg-[var(--color-border)]" />
    </div>
  );
}
