# Design System Reference (vendored)

This directory holds the **canonical Audio Jones V2 design system** ("Brand Guidelines 2.0"),
the single shared visual identity for **AJ Digital LLC** (company) and **Audio Jones** (personal brand).

## Files

| File | What it is | Edit? |
|---|---|---|
| [`../DESIGN.md`](../DESIGN.md) | Canonical design doc — palette, typography, component rules, a11y, do/don't | ✅ This repo's source of truth |
| `globals.reference.css` | The shipped V2 `globals.css` (in **Tailwind v4** form: `@theme inline`) — reference for the port | ❌ Read-only snapshot |
| `layout.reference.tsx` | Reference for Syne / DM Sans / DM Mono `next/font` registration | ❌ Read-only snapshot |

## Provenance

Vendored verbatim from `audiojones-clean` (`docs/design/DESIGN.md`, `src/app/globals.css`,
`src/app/layout.tsx`) on **2026-06-03** so this repo owns its design system independently —
no cross-repo runtime dependency.

## Important: Tailwind version gap

The reference (`globals.reference.css`) is **Tailwind v4** (CSS-first `@theme inline`).
This repo is **Tailwind v3.4** (JS `tailwind.config.ts`). The port translates:
`:root` vars + all `.t-*`/`.aj-*` classes copy as-is; the `@theme inline` block becomes
`theme.extend` in `tailwind.config.ts`; `@import "tailwindcss"` becomes `@tailwind` directives.
See `.claude/workflows/port-v2-design-system.js`.

## Sync

These are a point-in-time copy. If `audiojones-clean` updates its design system, re-vendor these
files. Long-term, consider extracting a shared workspace package both repos consume (P3 backlog).
