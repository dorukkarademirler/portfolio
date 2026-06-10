import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080b10",
        surface:    "#0f1318",
        border:     "#1a2030",
        accent:     "#00e5ff",
        "accent-dim": "#00b8cc",
        text:       "#cdd6e8",
        muted:      "#4a5568",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
