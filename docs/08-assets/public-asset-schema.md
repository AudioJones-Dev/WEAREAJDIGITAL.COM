# Public Asset Schema

## Purpose
Define the canonical structure and naming standard for every file inside `public/` so static assets stay predictable, sortable, and easy to reference in code.

## Canonical Folder Schema

```text
public/
  apple-touch-icon.png
  favicon.ico
  favicon.svg
  grid.svg
  icon-16.png
  icon-32.png
  icon-192.png
  icon-512.png
  logo.png
  logo.svg
  logo-dark.png
  logo-dark.svg
  logo-white.png
  logo-white.svg
  logo-mark.png
  manifest.json
  og-default.png
  og-blog.png
  og-content-systems.png
  og-podcast-production.png
  twitter-card.png
  images/
    home/
      hero-podcast-studio.webp
      pillar-podcast-production.webp
      pillar-content-repurposing.webp
      pillar-marketing-operations.webp
      persona-founder.webp
      persona-consultant.webp
      persona-creator.webp
      persona-local-business.webp
      service-podcast-production.webp
      service-content-repurposing.webp
      service-marketing-operations.webp
      locations-south-florida-team.webp
      cta-strategy-session.webp
      workflow-system-diagram.webp
```

## Naming Rules

- Use lowercase kebab-case only.
- Keep shared brand and metadata assets at the `public/` root.
- Keep page-specific photography and content imagery under `public/images/<page-or-section>/`.
- Use stable prefixes so files group together alphabetically.
- Prefer `.webp` for photography and raster content images.
- Prefer `.svg` for vector logos, icons, and simple decorative graphics.
- Keep `.png` for favicons, PWA icons, and OG images where the current pipeline already expects PNG.

## Canonical Prefixes

- `logo-*`: brand logo variants
- `icon-*`: PWA or favicon bitmap sizes
- `og-*`: open graph and social preview images
- `pillar-*`: homepage pillar cards
- `persona-*`: homepage audience/persona cards
- `service-*`: homepage service cards
- `hero-*`: homepage hero imagery
- `cta-*`: CTA section imagery
- `locations-*`: location proof or regional imagery
- `workflow-*`: diagrams and system visuals

## Current State Review

- The current folder structure is fundamentally sound.
- Root assets are already grouped by function.
- `public/images/home` already uses a useful prefix-based scheme.
- The main gap is consistency with the written naming standard: the current repo mostly uses `.jpg` for homepage imagery, while the documented standard prefers `.webp`.
- A few names are structurally fine but can be made more explicit.

## Rename Plan

### Already In Spec

These are already acceptable and do not need renaming unless you want a full standardization pass:

- `public/apple-touch-icon.png`
- `public/favicon.ico`
- `public/favicon.svg`
- `public/grid.svg`
- `public/icon-16.png`
- `public/icon-32.png`
- `public/icon-192.png`
- `public/icon-512.png`
- `public/logo.png`
- `public/logo.svg`
- `public/logo-dark.png`
- `public/logo-dark.svg`
- `public/logo-white.png`
- `public/logo-white.svg`
- `public/logo-mark.png`
- `public/manifest.json`
- `public/og-default.png`
- `public/og-blog.png`
- `public/twitter-card.png`

### Out Of Spec Or Worth Renaming

| Current file | Proposed file | Why |
| --- | --- | --- |
| `public/og-content.png` | `public/og-content-systems.png` | Makes the content service/share asset explicit. |
| `public/og-podcast.png` | `public/og-podcast-production.png` | Aligns OG naming with the actual service label. |
| `public/images/home/cta-strategy-session.jpg` | `public/images/home/cta-strategy-session.webp` | Format should match preferred WebP standard. |
| `public/images/home/hero-podcast-studio.jpg` | `public/images/home/hero-podcast-studio.webp` | Format should match preferred WebP standard. |
| `public/images/home/locations-map-or-team.jpg` | `public/images/home/locations-south-florida-team.webp` | Current name is ambiguous and uses a decision placeholder. |
| `public/images/home/persona-consultant.jpg` | `public/images/home/persona-consultant.webp` | Format should match preferred WebP standard. |
| `public/images/home/persona-creator.jpg` | `public/images/home/persona-creator.webp` | Format should match preferred WebP standard. |
| `public/images/home/persona-founder.jpg` | `public/images/home/persona-founder.webp` | Format should match preferred WebP standard. |
| `public/images/home/persona-local-business.jpg` | `public/images/home/persona-local-business.webp` | Format should match preferred WebP standard. |
| `public/images/home/pillar-content-repurposing.jpg` | `public/images/home/pillar-content-repurposing.webp` | Format should match preferred WebP standard. |
| `public/images/home/pillar-marketing-ops.jpg` | `public/images/home/pillar-marketing-operations.webp` | Expands abbreviation and matches preferred WebP standard. |
| `public/images/home/pillar-podcast-production.jpg` | `public/images/home/pillar-podcast-production.webp` | Format should match preferred WebP standard. |
| `public/images/home/service-content-repurposing.jpg` | `public/images/home/service-content-repurposing.webp` | Format should match preferred WebP standard. |
| `public/images/home/service-marketing-ops.jpg` | `public/images/home/service-marketing-operations.webp` | Expands abbreviation and matches preferred WebP standard. |
| `public/images/home/service-podcast-production.jpg` | `public/images/home/service-podcast-production.webp` | Format should match preferred WebP standard. |
| `public/images/home/system-diagram.jpg` | `public/images/home/workflow-system-diagram.webp` | Adds a stronger asset-family prefix and matches preferred WebP standard. |

## Code Paths That Would Need Updating After Rename

If you execute the rename plan, update the following references:

- `src/data/home.ts`
- `src/components/home/hero.tsx`
- `src/components/home/cta.tsx`
- `src/components/home/locations.tsx`
- `src/components/home/how-it-works.tsx`

If you rename the OG assets, also update:

- `src/app/layout.tsx`

## Recommended Rollout Order

1. Convert homepage raster images from `.jpg` to `.webp`.
2. Rename the ambiguous or abbreviated files.
3. Update code references.
4. Smoke-test homepage rendering and metadata previews.

## Practical Rule

If a new file enters `public/`, its name should answer two questions immediately:

1. What asset family is this?
2. What page, subject, or variant is it for?

If the filename does not answer both, it is probably too vague.
