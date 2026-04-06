You are a senior Next.js engineer and UI systems builder.

Your task is to implement the AJ Digital blog UI system inside this existing project:

Project root:
C:\dev\we-are-aj-digital-web

You must build the blog frontend based on the existing specification document:

C:\dev\we-are-aj-digital-web\docs\03-blog\blog-page-ui.spec.md

You should also align implementation with the service/business context already established in the docs folder.

---

# OBJECTIVE

Build a production-ready blog UI system for AJ Digital using:

- Next.js App Router
- TypeScript
- reusable components
- clean content-first layouts
- responsive design
- SEO-aware structure

The implementation must support these routes:

- /blog
- /blog/[slug]
- /blog/category/[category]

This blog is not generic. It must function as:

1. an SEO acquisition engine
2. an AEO citation-friendly content system
3. a conversion layer into service pages and /apply

---

# IMPORTANT IMPLEMENTATION RULES

## 1. Read the spec first
Before creating files, read:

C:\dev\we-are-aj-digital-web\docs\03-blog\blog-page-ui.spec.md

Then implement the UI faithfully.

## 2. Do not invent a different architecture
Follow the route structure, components, layouts, and data model defined in the spec.

## 3. Use clean reusable components
Do not create one giant page file with everything embedded.

## 4. Use TypeScript
All components and page files must be typed.

## 5. Use modern responsive layouts
The desktop, tablet, and mobile behavior must match the spec.

## 6. Prioritize readability and maintainability
This project should be easy to extend later with MDX, CMS, or Sanity.

## 7. Do not build backend CMS logic yet
Use mocked local data or a simple local TypeScript data source.

## 8. No placeholder lorem ipsum
Use realistic AJ Digital-aligned sample content for the mock posts.

---

# TARGET ROUTE STRUCTURE

Implement these routes:

- app/blog/page.tsx
- app/blog/[slug]/page.tsx
- app/blog/category/[category]/page.tsx

If helpful, also create:

- app/blog/loading.tsx
- app/blog/[slug]/loading.tsx
- app/blog/category/[category]/loading.tsx

---

# TARGET COMPONENT STRUCTURE

Create a reusable blog component directory like this:

components/blog/
- BlogHero.tsx
- BlogCategoryPills.tsx
- FeaturedPostCard.tsx
- BlogPostCard.tsx
- TopicClusterStrip.tsx
- BlogCTASection.tsx
- Breadcrumbs.tsx
- ArticleHero.tsx
- AuthorTrustBlock.tsx
- TableOfContents.tsx
- AEOAnswerBlock.tsx
- InlineCTA.tsx
- FAQSection.tsx
- RelatedPosts.tsx
- CategoryHero.tsx

You may add small helper components if needed, but keep the structure disciplined.

---

# DATA LAYER

Create a simple local mock content source.

Suggested location:

lib/blog/
- blog-data.ts
- blog-types.ts
- blog-utils.ts

## Required Type Shape

Use a typed interface similar to:

```ts
type BlogPost = {
  title: string
  slug: string
  category: 'podcast-production' | 'ai-consulting' | 'content-systems' | 'authority-building'
  excerpt: string
  seoTitle: string
  metaDescription: string
  publishedAt: string
  updatedAt: string
  readTime: string
  authorName: string
  authorRole: string
  featuredImage: string
  ogImage: string
  tags: string[]
  faqItems: { question: string; answer: string }[]
  relatedSlugs: string[]
  serviceCtaTarget: string
  applyCtaEnabled: boolean
  content: {
    type: 'paragraph' | 'heading2' | 'heading3' | 'answerBlock' | 'list' | 'table' | 'cta'
    value?: string
    items?: string[]
    table?: {
      headers: string[]
      rows: string[][]
    }
  }[]
}
```

Populate at least 8 mock posts.

Use realistic AJ Digital topics such as:

* podcast-production-cost
* ai-tools-for-entrepreneurs
* content-repurposing-system
* how-to-build-authority-online
* podcast-roi-for-business
* chatgpt-for-business-owners
* podcast-production-agency
* ai-consulting-for-small-business

---

# PAGE REQUIREMENTS

## /blog page

Build a blog index page with:

1. Blog hero
2. Featured article
3. Category pill filters
4. Article grid
5. Topic cluster strip
6. CTA banner

### Functional requirements:

* Category filtering should work
* Search input is optional but recommended
* Featured article should display the most strategic post
* Article cards should be consistent height and fully clickable

---

## /blog/[slug] page

Build a full article template page with:

1. Breadcrumbs
2. Article hero
3. Author trust block
4. Main article layout
5. Sticky table of contents on desktop
6. Article body renderer from typed content blocks
7. Inline CTA blocks
8. FAQ section
9. Related articles
10. Final CTA

### Functional requirements:

* TOC should reflect heading2 blocks
* Mobile should collapse TOC gracefully
* Table blocks must be horizontally scrollable on small screens
* Answer blocks should have a visually distinct treatment
* Related posts should pull from same category when possible

---

## /blog/category/[category] page

Build category index pages with:

1. Category hero
2. Featured article in that category
3. Article list/grid for the category
4. Service CTA pointing to associated service page

Category-to-service mapping:

* podcast-production → /services/podcast-production
* ai-consulting → /services/ai-consulting
* content-systems → /services/content-systems
* authority-building → /services/authority-building

---

# DESIGN / STYLING REQUIREMENTS

Use the brand direction from the spec.

## Design language:

* dark premium UI
* strong typography hierarchy
* gold/amber accent
* clean borders
* subtle hover effects
* strong spacing
* no visual clutter

## If Tailwind is already installed:

Use Tailwind.

## If Tailwind is not installed:

Use the project’s current styling system consistently.
Do not add a new framework unless already present.

---

# ACCESSIBILITY REQUIREMENTS

Support:

* semantic heading order
* keyboard accessible links/buttons
* visible focus states
* descriptive alt text
* good contrast
* properly labeled inputs if search is included

---

# SEO REQUIREMENTS

Each page should support metadata patterns cleanly.

At minimum:

* create sensible exported metadata objects for pages if project structure supports it
* article page metadata should use post title + description
* category pages should use category-specific metadata
* blog index should have its own metadata

Do not implement schema yet unless it is trivial, but structure the page so schema can be added later without refactor.

---

# IMPLEMENTATION DETAILS

## 1. Content renderer

Create a small article body renderer that loops through the typed content blocks and renders:

* heading2
* heading3
* paragraph
* answerBlock
* list
* table
* cta

## 2. Utility helpers

Create helpers for:

* getAllPosts()
* getPostBySlug(slug)
* getPostsByCategory(category)
* getRelatedPosts(slug)

## 3. 404 handling

If a slug or category is invalid, use proper Next.js notFound() behavior.

## 4. Clean imports

Use tidy import structure and avoid repetitive relative import chaos if aliases already exist.

---

# EXPECTED FILE OUTPUT

At minimum, create:

app/blog/page.tsx
app/blog/[slug]/page.tsx
app/blog/category/[category]/page.tsx

components/blog/...
lib/blog/blog-data.ts
lib/blog/blog-types.ts
lib/blog/blog-utils.ts

If needed:
app/blog/not-found.tsx
app/blog/[slug]/not-found.tsx
app/blog/category/[category]/not-found.tsx

---

# CODE QUALITY REQUIREMENTS

* TypeScript throughout
* Clean component props
* Reasonable comments where useful
* No dead code
* No giant monolith component
* No fake unfinished TODO sections
* No broken imports
* No any types unless absolutely necessary

---

# OUTPUT FORMAT

Do the work directly in the repo.

Then provide a concise final summary containing:

1. files created
2. files modified
3. any assumptions made
4. any missing dependencies or blockers
5. suggested next step

---

# FINAL STANDARD

The implementation succeeds when:

* the blog index feels like an authority hub
* the article page feels editorial, readable, and premium
* the category pages reinforce topical authority
* the UI clearly supports service conversion
* the codebase is clean enough to extend into MDX or CMS later

Start by reading the spec file first, then implement the system.
