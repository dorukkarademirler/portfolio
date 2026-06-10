import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-6 text-center font-mono text-xs text-[var(--color-muted)] border-t border-[var(--color-border)]">
        Built with Next.js &amp; Tailwind &middot; {new Date().getFullYear()}
      </footer>
    </>
  );
}
