# Case Study UI Specification

**Path Definition:**
* Index: `/case-studies/`
* Detail: `/case-studies/[slug]/`

## 1. Index Page (`/case-studies/`)

**H1:** Case Studies
**Subhead:** Real outcomes built for founders, creators, and local businesses using our Podcast and AI Content Systems.

**Layout & Components:**
* **Grid Layout**: Responsive grid (1 column mobile, 2/3 columns desktop) showcasing all case studies.
* **Filtering System**: Sticky or top-level filter bar by system type:
  * All
  * Podcast Production
  * AI Systems
  * Content Systems
* **Case Study Card Component**:
  * **Image/Thumbnail**: Visual proof (chart, studio shot, or clean graphic).
  * **Client Type Badge**: e.g., "B2B SaaS" or "Miami Real Estate".
  * **Title**: Outcome-focused title.
  * **Result Highlight**: Brightly colored badge or bold text with the primary metric (e.g., "+315% Inbound Leads").

## 2. Single Page (`/case-studies/[slug]`)

**Layout & Components:**
* **Hero Summary**:
  * Above-the-fold fast facts. 
  * Layout: Title on the left, "At a Glance" stat box on the right.
* **Results Highlight Box**:
  * Prominent UI callout separating the "Before" metrics from the "After" metrics.
* **Structured Sections**:
  * Clean typography using the `@tailwindcss/typography` prose plugin.
  * Very short paragraphs. Heavy use of lists and bolding for scannability.
* **CTA Block (Top & Bottom)**:
  * Persistent call-to-action to `/apply`.
  * Top CTA: Discreet button near the hero box.
  * Bottom CTA: Large, high-contrast block at the conclusion.
