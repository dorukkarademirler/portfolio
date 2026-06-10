export default function Map() {
  // University of Toronto, St. George Campus (43.6629, -79.3957)
  const src =
    "https://www.openstreetmap.org/export/embed.html" +
    "?bbox=-79.403%2C43.659%2C-79.389%2C43.667" +
    "&layer=mapnik" +
    "&marker=43.6629%2C-79.3957";

  return (
    <div className="relative w-full rounded-sm overflow-hidden border border-[var(--color-border)] group">
      {/* Dark overlay for theme consistency */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 70%, rgba(8,11,16,0.6) 100%)",
        }}
      />

      {/* Address badge */}
      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-[#080b10]/90 border border-[var(--color-border)] px-3 py-1.5 rounded-sm">
        <span className="text-[var(--color-accent)] text-xs">◈</span>
        <span className="font-mono text-xs text-[var(--color-text)]">
          University of Toronto, Toronto, ON
        </span>
      </div>

      <iframe
        src={src}
        width="100%"
        height="320"
        style={{
          border: 0,
          display: "block",
          filter: "invert(93%) hue-rotate(180deg) saturate(0.6) brightness(0.85)",
        }}
        loading="lazy"
        title="Location: University of Toronto"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
