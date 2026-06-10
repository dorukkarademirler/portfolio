"use client";
import { meta } from "@/data/portfolio";
import { SectionLabel } from "./About";
import Map from "./Map";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6" style={{ background: "linear-gradient(to bottom, #0f1318, #0f1318 calc(100% - 96px), #080b10)" }}>
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <SectionLabel>05. Contact</SectionLabel>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-10">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hi. My inbox is
              always open.
            </p>

            <a
              href={`mailto:${meta.email}`}
              className="inline-block px-8 py-4 font-mono text-sm tracking-widest uppercase border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-200"
              style={{ boxShadow: "0 0 20px rgba(0,229,255,0.15)" }}
            >
              Say Hello
            </a>

            <div className="mt-12 flex items-center justify-center gap-8">
              <SocialLink href={meta.github} label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href={meta.linkedin} label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
              <SocialLink href={meta.tiktok} label="TikTok">
                <TikTokIcon />
              </SocialLink>
              <SocialLink href={`mailto:${meta.email}`} label="Email">
                <MailIcon />
              </SocialLink>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-16 text-left">
            <p className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-4">
              Based in
            </p>
            <Map />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
      style={{ transition: "color 0.2s, filter 0.2s" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.filter =
          "drop-shadow(0 0 6px var(--color-accent))")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.filter = "none")
      }
    >
      {children}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.21 8.21 0 004.84 1.56V6.8a4.85 4.85 0 01-1.07-.11z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}
