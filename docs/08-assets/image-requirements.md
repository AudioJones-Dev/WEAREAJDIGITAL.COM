# Image Requirements

## Purpose
Standardize image dimensions, formats, and optimization techniques across the site to guarantee performance and visual fidelity.

## Images Per Section
- **Homepage Hero:** WebP format, Max 200KB, Aspect ratio 16:9 or custom defined by layout.
- **Service Pages:** Supporting visuals and layout assets, max 150KB each.
- **Blog Thumbnails:** 1200x630px standard sizing.

## Open Graph (OG) Images
- Standardized dimensions: 1200x630px.
- Must include dynamic or static title overlay.
- Keep central ~600x300px safe for crucial details.

## Formatting & Optimization
- Prefer `.webp` across the board.
- Next.js built-in `<Image />` component used for auto-optimization and lazy-loading.
- SVGs preferred for icons and simple illustrations.

## Naming Conventions
- Must be descriptive using keywords.
- Use lowercase kebab-case only.
- Prefer asset-family prefixes so filenames sort cleanly and remain predictable in `public/`.
- **Canonical pattern:** `asset-family-subject-modifier.ext`
- **Examples:** `logo-dark.svg`, `og-default.png`, `pillar-podcast-production.webp`, `persona-local-business.webp`
- Use a location suffix only when the image is actually location-specific, such as `service-ai-consulting-miami.webp`.
- **Avoid:** Generic names like `image1.jpg`, `hero-final-v2.jpg`, or `ScreenShot_2024.png`.
