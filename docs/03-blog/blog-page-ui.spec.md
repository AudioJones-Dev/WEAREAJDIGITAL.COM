# AJ Digital — Blog UI Specification
## Routes:
- /blog
- /blog/[slug]
- /blog/category/[category]

## Purpose:
Define the complete UI system for the AJ Digital blog so it functions as:
1. an SEO acquisition engine
2. an AEO citation engine
3. a conversion layer into service pages and /apply

This is not a generic blog UI.

This is a structured authority and lead-generation interface.

---

# 0. UI OBJECTIVE

The blog UI must do five things well:

1. Make content easy to scan and trust
2. Reinforce AJ Digital authority on every page
3. Support SEO and AEO structure cleanly
4. Drive users deeper into service pages
5. Push qualified readers toward `/apply`

The visual system should feel:
- premium
- modern
- highly legible
- structured
- conversion-aware

---

# 1. DESIGN PRINCIPLES

## Core Principles
- Content-first layout
- Minimal visual clutter
- Strong hierarchy
- High contrast readability
- Clear CTA repetition
- Clean mobile experience
- Fast loading and image discipline

## Tone of Design
- Premium black / dark neutral base
- Warm authority accent (amber/gold)
- Sharp spacing and typography
- Strong editorial feel with service-business polish

---

# 2. GLOBAL BLOG DESIGN TOKENS

## Recommended Color Tokens

```css
:root {
  --bg: #0a0a0a;
  --surface: #141414;
  --surface-muted: #1d1d1d;
  --card: #161616;
  --border: #2a2a2a;
  --text-primary: #f5f5f5;
  --text-secondary: #b0b0b0;
  --accent: #f59e0b;
  --accent-hover: #fbbf24;
  --success: #10b981;
  --warning: #f59e0b;
}
```

## Typography

* Headlines: Space Grotesk or equivalent geometric headline font
* Body: Manrope / Inter / clean sans-serif
* Tight headline tracking
* Comfortable body line-height for long reading

## Spacing

* 8pt system minimum
* Large breathing room around article elements
* Max reading width: 720–760px for article body
* Wider shell for hero/cards/sidebar layouts

---

# 3. ROUTE 1 — BLOG INDEX PAGE

## Route:

`/blog`

## Purpose:

Act as the blog hub for all published authority content.

## Primary Goal:

Help users quickly discover high-value articles by topic, intent, and recency.

---

# 4. BLOG INDEX LAYOUT

## Section Order

1. Sticky blog-aware site header
2. Blog hero
3. Featured article
4. Category filter bar
5. Latest articles grid
6. Topic cluster strip
7. CTA banner
8. Footer

---

# 5. BLOG INDEX — HEADER

Use the main site header.

## Nav Items

* Services
* Industries
* Case Studies
* Resources / Blog
* About
* Contact

## Right-side CTA

* Apply for Strategy Session → `/apply`

Behavior:

* Transparent or subtle on top
* Solid on scroll
* Sticky

---

# 6. BLOG INDEX — HERO

## H1:

Insights on Podcasting, AI, Content Systems, and Authority Building

## Subheadline:

Practical strategies, frameworks, and systems to help entrepreneurs and brands grow authority, scale content, and turn attention into business results.

## Optional Elements:

* Search field
* Category pills
* “Start here” links to cornerstone posts

## Layout:

Two-column desktop

* Left: copy
* Right: visual card or featured topic stack

Mobile:
Single column

---

# 7. BLOG INDEX — FEATURED ARTICLE BLOCK

## Purpose:

Push the highest-value strategic article first.

## Layout:

Large horizontal feature card

### Left:

* Category tag
* Headline
* Meta line
* 2–3 sentence summary
* Read More CTA

### Right:

* Featured image / OG image style visual

## Suggested Content:

Use a commercial-intent or flagship authority article.

Examples:

* Podcast Production Cost
* AI Tools for Entrepreneurs
* Content Repurposing System

---

# 8. BLOG INDEX — CATEGORY FILTER BAR

## Categories:

* Podcast Production
* AI Consulting
* Content Systems
* Authority Building

## UI:

Horizontal pill filters

### States:

* default
* hover
* active

## Behavior:

* Filter article cards client-side or route to category pages
* Preserve active visual state clearly

---

# 9. BLOG INDEX — ARTICLE GRID

## Layout:

Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column

## Card Structure:

* Thumbnail / image
* Category tag
* Title
* Short excerpt
* Read time
* Date
* CTA text: Read Article →

## Card Behavior:

* Entire card clickable
* Subtle hover lift
* Border accent on hover
* Keep height consistent across rows

---

# 10. BLOG INDEX — ARTICLE CARD SPEC

## Required Fields

* featured_image
* category
* title
* excerpt
* published_date
* read_time
* slug

## Card Example Layout

```text
┌─────────────────────────────┐
│ [Image]                     │
│ Podcast Production          │
│ How Much Does Podcast       │
│ Production Cost in 2026?    │
│ Transparent pricing guide   │
│ for business owners...      │
│ 6 min read · Apr 2026       │
│ Read Article →              │
└─────────────────────────────┘
```

---

# 11. BLOG INDEX — TOPIC CLUSTER STRIP

## Purpose:

Guide visitors deeper into topical authority hubs.

## Layout:

4 horizontal cards or linked blocks

### Example Blocks:

* Start a Business Podcast
* Use AI in Your Business
* Build a Content System
* Grow Your Personal Brand

Each block links to:

* category page
* relevant service page
* cornerstone article

---

# 12. BLOG INDEX — CTA BANNER

## H2:

Need help building this in your business?

## Copy:

Reading about podcast systems, AI, and content strategy is useful. Building them correctly is what creates results.

## CTA:

Book My Free Strategy Session → `/apply`

## Secondary Link:

View Services → `/services`

---

# 13. ROUTE 2 — SINGLE ARTICLE PAGE

## Route:

`/blog/[slug]`

## Purpose:

Deliver long-form content in a format optimized for:

* SEO
* AEO
* readability
* internal linking
* conversion

---

# 14. SINGLE ARTICLE LAYOUT

## Section Order

1. Header
2. Breadcrumbs
3. Article hero/header
4. Author / metadata row
5. Main content shell
6. Sticky table of contents
7. Inline CTA blocks
8. FAQ block
9. Related articles
10. Final CTA
11. Footer

---

# 15. ARTICLE PAGE — BREADCRUMBS

## Structure:

Home / Blog / Category / Article Title

## Behavior:

* Visible near top
* Small and subtle
* Supports Breadcrumb schema

Example:
Home / Blog / Podcast Production / How Much Podcast Production Costs

---

# 16. ARTICLE PAGE — HERO / HEADER

## Required Elements

* Category tag
* H1
* Subtitle / deck
* Published date
* Updated date
* Read time
* Author

## H1 Style

* Large
* Tight line-height
* Max 2–3 lines desktop
* Strong visual hierarchy

## Subtitle

One short paragraph summarizing the article value.

---

# 17. AUTHOR / TRUST BLOCK

## Purpose:

Reinforce expertise and E-E-A-T

## Layout:

Horizontal author card under hero

### Include:

* Headshot
* Audio Jones
* Title: Podcast Producer & AI Consultant
* Brand: Founder, AJ Digital
* Published / updated dates

## Optional:

Short “Why trust this article?” sentence

---

# 18. ARTICLE CONTENT SHELL

## Desktop Layout:

3-column shell

* Left: sticky TOC
* Center: article body
* Right: optional sidebar CTA / related links

Alternative simplified version:

* Center body only
* Floating/sticky TOC on left only for large screens

## Mobile Layout:

Single-column
TOC collapses into jump menu or accordion

---

# 19. ARTICLE BODY WIDTH

## Max Width:

720px to 760px

## Why:

Improves readability and reduces fatigue on long content

---

# 20. STICKY TABLE OF CONTENTS

## Desktop:

Sticky left column

## Title:

On This Page

## Auto-generated Links:

Based on H2s and optionally H3s

## Behavior:

* Highlight active section on scroll
* Smooth anchor scrolling
* Hide on small screens

## Mobile:

Collapse into dropdown / accordion:

* “Jump to Section”

---

# 21. ARTICLE BODY TYPOGRAPHY RULES

## H1

* 48–64px desktop
* 34–40px mobile

## H2

* 28–36px desktop
* Question-based
* Strong top margin

## H3

* 22–28px desktop

## Body

* 18px desktop
* 16–17px mobile
* line-height 1.65–1.8

## Paragraph Width

Do not exceed reading width
Avoid dense blocks

---

# 22. ARTICLE BODY ELEMENTS

Support these content blocks cleanly:

* standard paragraphs
* AEO answer blocks
* bullet lists
* numbered frameworks
* comparison tables
* callout boxes
* stat blocks
* inline CTA panels
* FAQ accordion or structured FAQ list
* quote blocks

Each must have a reusable component.

---

# 23. AEO ANSWER BLOCK COMPONENT

## Purpose:

Make answer-first passages stand out and become easily extractable

## UI:

* subtle surface contrast
* small label: “Quick Answer”
* slightly stronger border/accent edge

## Example Structure:

* Label
* 40–75 word answer paragraph

Use near the start of each major section if needed.

---

# 24. TABLE COMPONENT

## Purpose:

Support comparison-heavy SEO and AI-friendly formatting

## Requirements:

* horizontal scroll on mobile
* clear borders
* enough padding
* no cramped text

## Style:

* dark table surface
* subtle grid lines
* highlighted header row

---

# 25. INLINE CTA BLOCKS

## Use 1–2 per article

### Example Placement:

* after first third of article
* before FAQ or final section

## Style:

Mid-content promo panel with:

* short headline
* 1 sentence value proposition
* CTA button → `/apply`

### Example Copy:

Ready to build a podcast system instead of guessing through it?

[Book My Free Strategy Session]

---

# 26. FAQ BLOCK UI

## Layout Options:

Option A: accordion
Option B: open stacked Q&A

Recommendation:

* Use open stacked layout on article pages for readability and crawl clarity
* Use accordion only if page becomes too long

## Each FAQ item:

* H3 question
* short direct answer

---

# 27. RIGHT SIDEBAR (OPTIONAL BUT STRONG)

## Desktop Only

### Include:

* CTA card
* relevant service links
* related articles
* featured resource

## Sample CTA Card

Headline:
Need a real system behind your content?

Copy:
AJ Digital builds podcast, AI, and content systems for serious operators.

Button:
Apply to Work With Us

---

# 28. ARTICLE END — RELATED ARTICLES

## Section Title:

Related Articles

## Layout:

3 cards desktop
1 card mobile carousel or stacked layout

## Logic:

Show posts from:

* same category
* adjacent service cluster
* one commercial-intent article

---

# 29. ARTICLE END — FINAL CTA

## H2:

Ready to turn this into a real system?

## Copy:

If you want help building the strategy, workflow, and execution layer behind your podcast, AI, or content engine, apply to work with AJ Digital.

## Buttons:

* Book My Free Strategy Session → `/apply`
* View Services → `/services`

---

# 30. ROUTE 3 — CATEGORY PAGE

## Route:

`/blog/category/[category]`

## Purpose:

Serve as mini topical hubs for each authority cluster

Categories:

* podcast-production
* ai-consulting
* content-systems
* authority-building

---

# 31. CATEGORY PAGE LAYOUT

## Section Order:

1. Header
2. Category hero
3. Featured article
4. Article list/grid
5. Service CTA
6. Footer

## Hero Content:

### H1:

[Category Name] Insights

### Description:

Short topical description aligned to service pillar

Example:
Podcast Production insights on strategy, pricing, workflows, gear, and growth for business-focused shows.

---

# 32. SEARCH UX

## Recommendation:

Add search to blog index and optionally category pages

## Placeholder:

Search articles, frameworks, and guides

## Behavior:

Search by:

* title
* category
* excerpt
* keyword tags

---

# 33. EMPTY / NO RESULT STATE

If no results:

* clear empty message
* suggested categories
* CTA to featured articles

Example:
No articles matched that search. Try another keyword or explore one of our main topic areas.

---

# 34. COMPONENT LIBRARY

Create reusable blog UI components:

## Core Components

* BlogHero
* BlogCategoryPills
* FeaturedPostCard
* BlogPostCard
* TopicClusterStrip
* BlogCTASection
* Breadcrumbs
* ArticleHero
* AuthorTrustBlock
* TableOfContents
* AEOAnswerBlock
* ComparisonTable
* InlineCTA
* FAQSection
* RelatedPosts
* CategoryHero

---

# 35. RESPONSIVE RULES

## Desktop

* richer layouts
* sticky TOC
* optional right sidebar
* 3-column card grids

## Tablet

* 2-column grids
* simplified content shell
* TOC may collapse

## Mobile

* single-column everything
* no tiny sidebars
* big tap targets
* tables scroll horizontally
* TOC collapses to dropdown

---

# 36. ACCESSIBILITY RULES

## Must Support:

* semantic heading order
* keyboard navigation
* visible focus states
* sufficient color contrast
* descriptive alt text
* screen-reader-friendly TOC and breadcrumbs

---

# 37. PERFORMANCE RULES

## Must:

* lazy-load non-critical images
* optimize thumbnails and OG images
* avoid layout shift
* avoid oversized article hero images
* keep font loading efficient
* keep interactive JS minimal where possible

This is critical because blog pages must remain fast for SEO and UX.

---

# 38. SEO / AEO UI REQUIREMENTS

The UI must make the following obvious to crawlers and readers:

* article hierarchy
* question-led sections
* FAQ clarity
* authorship
* updated dates
* category taxonomy
* internal linking
* CTA destination

Do not hide important structural content behind tabs.

Do not overuse accordions for core answers.

---

# 39. INTERNAL LINKING UI PATTERNS

## In Article Body:

Use contextual links naturally in paragraphs

## At End:

Show:

* related posts
* service CTA
* apply CTA

## On Category Pages:

Link to:

* category articles
* associated service page

Example:
Category `podcast-production` should push users toward `/services/podcast-production/`

---

# 40. IMAGE SYSTEM FOR BLOG UI

## Required Visual Types

* article OG image
* card thumbnail
* optional in-article support image
* category feature image

## Naming Convention

* /images/blog/[slug]-og.jpg
* /images/blog/[slug]-thumb.jpg
* /images/blog/[category]-feature.jpg

## Image Style

* dark premium brand aesthetic
* consistent overlays/branding
* not cheesy stock image energy
* strong contrast and readability

---

# 41. NEXT.JS ROUTE STRUCTURE

Recommended routes:

```text
/app/blog/page.tsx
/app/blog/[slug]/page.tsx
/app/blog/category/[category]/page.tsx
```

Recommended supporting directories:

```text
/components/blog/
  BlogHero.tsx
  BlogPostCard.tsx
  FeaturedPostCard.tsx
  BlogCategoryPills.tsx
  ArticleHero.tsx
  AuthorTrustBlock.tsx
  TableOfContents.tsx
  AEOAnswerBlock.tsx
  InlineCTA.tsx
  FAQSection.tsx
  RelatedPosts.tsx
  CategoryHero.tsx
```

---

# 42. DATA MODEL REQUIREMENTS

Each post should support:

```json
{
  "title": "",
  "slug": "",
  "category": "",
  "excerpt": "",
  "seo_title": "",
  "meta_description": "",
  "published_at": "",
  "updated_at": "",
  "read_time": "",
  "author_name": "Audio Jones",
  "author_role": "Podcast Producer & AI Consultant",
  "featured_image": "",
  "og_image": "",
  "faq_items": [],
  "related_posts": [],
  "service_cta_target": "",
  "apply_cta_enabled": true,
  "tags": []
}
```

---

# 43. BLOG INDEX WIREFRAME

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                      │
├──────────────────────────────────────────────────────────────┤
│ Blog Hero                                                   │
│ H1 + subheadline + search + category pills                 │
├──────────────────────────────────────────────────────────────┤
│ Featured Article                                            │
├──────────────────────────────────────────────────────────────┤
│ Category Filter Bar                                         │
├──────────────────────────────────────────────────────────────┤
│ Article Grid                                                │
│ [Card] [Card] [Card]                                       │
│ [Card] [Card] [Card]                                       │
├──────────────────────────────────────────────────────────────┤
│ Topic Cluster Strip                                         │
├──────────────────────────────────────────────────────────────┤
│ CTA Banner                                                  │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                      │
└──────────────────────────────────────────────────────────────┘
```

---

# 44. ARTICLE PAGE WIREFRAME

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                      │
├──────────────────────────────────────────────────────────────┤
│ Breadcrumbs                                                 │
├──────────────────────────────────────────────────────────────┤
│ Article Hero                                                │
│ Category / H1 / subtitle / meta                            │
├──────────────────────────────────────────────────────────────┤
│ Author Trust Block                                          │
├──────────────────────────────────────────────────────────────┤
│ TOC   |              Article Body              | CTA/Links  │
│       | H2 / answer blocks / tables / FAQ      |            │
│       | inline CTA                             |            │
├──────────────────────────────────────────────────────────────┤
│ Related Articles                                            │
├──────────────────────────────────────────────────────────────┤
│ Final CTA                                                   │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                      │
└──────────────────────────────────────────────────────────────┘
```

---

# 45. CATEGORY PAGE WIREFRAME

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                      │
├──────────────────────────────────────────────────────────────┤
│ Category Hero                                               │
├──────────────────────────────────────────────────────────────┤
│ Featured Article                                            │
├──────────────────────────────────────────────────────────────┤
│ Article Grid / List                                         │
├──────────────────────────────────────────────────────────────┤
│ Service CTA                                                 │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                      │
└──────────────────────────────────────────────────────────────┘
```

---

# 46. FINAL STANDARD

The blog UI succeeds when:

1. visitors can instantly scan and trust the content
2. articles feel authoritative and readable
3. internal navigation deepens session depth
4. service CTAs feel natural, not forced
5. the system supports both SEO ranking and AI citation extraction

This UI is not an afterthought.

It is part of the acquisition engine.
