import Robot from "@/components/Robot";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "#080b10" }}
    >
      <div className="mb-8">
        <Robot />
      </div>

      <p className="font-mono text-[var(--color-accent)] text-sm tracking-widest mb-3">
        404 / not-found
      </p>

      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Lost in the void
      </h1>

      <p className="text-[var(--color-muted)] font-mono text-sm max-w-sm mb-10 leading-relaxed">
        Even the robot can&apos;t find what you&apos;re looking for. This page doesn&apos;t exist.
      </p>

      <a
        href="/"
        className="px-6 py-3 font-mono text-sm tracking-wider uppercase border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-200"
        style={{ boxShadow: "0 0 12px rgba(0,229,255,0.2)" }}
      >
        Back Home
      </a>
    </main>
  );
}
