import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Legacy tokens (keep for existing pages) ──────────────────────
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ── AJ Digital "Editorial Authority" design system ───────────────
        // Material Design-style surface hierarchy (dark cinematic palette)
        "surface-dim":               "#0b1326",
        "surface":                   "#0b1326",
        "surface-container-lowest":  "#060e20",
        "surface-container-low":     "#131b2e",
        "surface-container":         "#171f33",
        "surface-container-high":    "#222a3d",
        "surface-container-highest": "#2d3449",
        "surface-bright":            "#31394d",
        "surface-variant":           "#2d3449",

        // Primary (periwinkle blue)
        "primary":           "#adc6ff",
        "on-primary":        "#002e69",
        "primary-container": "#4c8eff",
        "primary-fixed":     "#d8e2ff",
        "primary-fixed-dim": "#adc6ff",

        // Secondary / accent (warm amber-gold)
        "secondary":           "#ffb95d",
        "on-secondary":        "#462a00",
        "secondary-container": "#d48800",
        "secondary-fixed":     "#ffddb7",
        "secondary-fixed-dim": "#ffb95d",

        // Tertiary
        "tertiary":           "#a7c8ff",
        "on-tertiary":        "#003061",
        "tertiary-container": "#5592e6",

        // On-surface text tones
        "on-surface":         "#dae2fd",
        "on-surface-variant": "#c1c6d6",
        "on-background":      "#dae2fd",

        // Borders / outlines
        "outline":         "#8b90a0",
        "outline-variant": "#414754",

        // Inverse / misc
        "inverse-primary":    "#005ac1",
        "inverse-on-surface": "#283044",
        "inverse-surface":    "#dae2fd",
        "surface-tint":       "#adc6ff",

        // Semantic
        "error":           "#ffb4ab",
        "error-container": "#93000a",
        "on-error":        "#690005",
      },

      borderRadius: {
        DEFAULT: "1rem",  // 16px — base
        md:  "1.5rem",    // 24px — inputs
        lg:  "2rem",      // 32px — buttons
        xl:  "3rem",      // 48px — large cards
        full: "9999px",   // chips / pills
      },

      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body:     ["Inter", "sans-serif"],
        label:    ["Inter", "sans-serif"],
        sans:     ["Inter", "sans-serif"],
      },

      backgroundImage: {
        "cinematic-gradient": "linear-gradient(135deg, #2b7ef8, #6aa5fb)",
        "moment-gradient":    "linear-gradient(137.5deg, #2b7ef8, #f8a62b)",
      },

      boxShadow: {
        "ambient":       "0px 24px 48px rgba(0,0,0,0.4)",
        "glow-primary":  "0 0 32px rgba(173,198,255,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
