import type { Config } from "tailwindcss";

/**
 * Audio Jones — Brand Guidelines 2.0 (V2) Tailwind theme.
 *
 * This is the Tailwind v3 equivalent of the `@theme inline { ... }` block
 * that lives in the canonical v4 source (docs/design/globals.reference.css).
 * Every token NAME below maps to the matching CSS custom property defined in
 * src/app/globals.css, so utilities like `bg-signal-yellow`, `text-text-muted`,
 * `border-border-strong`, and the legacy `bg-aj-orange` all resolve to the V2
 * palette without touching call sites.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Legacy passthrough (kept) ────────────────────────────────────
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ── V2 canonical color names (preferred for new code) ────────────
        "signal-yellow":  "var(--signal-yellow)",
        "signal-soft":    "var(--signal-soft)",
        "bg-base":        "var(--bg-base)",
        "surface-1":      "var(--surface-1)",
        "surface-2":      "var(--surface-2)",
        "border-subtle":  "var(--border-subtle)",
        "border-strong":  "var(--border-strong)",
        "text-primary":   "var(--text-primary)",
        "text-muted":     "var(--text-muted)",
        "accent-blue":    "var(--accent-blue)",
        "accent-red":     "var(--accent-red)",
        "accent-amber":   "var(--accent-amber)",
        "accent-green":   "var(--accent-green)",

        // ── Surface ramp (dark default) ──────────────────────────────────
        "bg-0": "var(--bg-0)",
        "bg-1": "var(--bg-1)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        "bg-4": "var(--bg-4)",

        // ── Light-split tokens ───────────────────────────────────────────
        "bg-light-0": "var(--bg-light-0)",
        "bg-light-1": "var(--bg-light-1)",
        "bg-light-2": "var(--bg-light-2)",
        "paper":        "var(--paper)",
        "surface":      "var(--surface)",
        "surface-soft": "var(--surface-soft)",
        "ink":          "var(--ink)",
        "ink-muted":    "var(--ink-muted)",

        // ── Text ramp ────────────────────────────────────────────────────
        "fg-0": "var(--fg-0)",
        "fg-1": "var(--fg-1)",
        "fg-2": "var(--fg-2)",
        "fg-3": "var(--fg-3)",
        "fg-light-0": "var(--fg-light-0)",
        "fg-light-1": "var(--fg-light-1)",
        "fg-light-2": "var(--fg-light-2)",

        // ── Semantic aliases ─────────────────────────────────────────────
        "signal": "var(--signal)",
        "system": "var(--system)",
        "metric": "var(--metric)",

        // ── Brand identity aliases ───────────────────────────────────────
        "orange-primary": "var(--orange-primary)",
        "blue-system":    "var(--blue-system)",
        "dark-primary":   "var(--dark-primary)",
        "dark-secondary": "var(--dark-secondary)",

        // ── Legacy color aliases — retargeted to V2 signal yellow ────────
        "aj-orange":      "var(--aj-orange)",
        "aj-orange-soft": "var(--aj-orange-soft)",
        "aj-blue":        "var(--aj-blue)",
        "aj-blue-bright": "var(--aj-blue-bright)",
        "aj-gold":        "var(--aj-gold)",
      },

      borderRadius: {
        sm:     "6px",    // --r-sm
        md:     "10px",   // --r-md
        lg:     "16px",   // --r-lg
        card:   "20px",   // --r-card
        "2xl":  "20px",   // --r-card (alias)
        panel:  "24px",   // --r-panel
        full:   "9999px", // pills / chips
      },

      fontFamily: {
        headline: "var(--font-headline)",
        accent:   "var(--font-accent)",
        body:     "var(--font-body)",
        mono:     "var(--font-mono)",
        sans:     "var(--font-body)",
      },

      backgroundImage: {
        "moment-gradient":    "linear-gradient(137.5deg, var(--signal-yellow), var(--accent-blue))",
      },

      boxShadow: {
        "ambient":       "0px 24px 48px rgba(0,0,0,0.4)",
        "glow-signal":   "var(--shadow-glow-signal)",
        "glow-blue":     "var(--shadow-glow-blue)",
      },
    },
  },
  plugins: [],
};

export default config;
