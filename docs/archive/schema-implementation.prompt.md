You are a senior Next.js engineer with strong technical SEO experience.

Your task is to implement structured data (JSON-LD schema) across the AJ Digital website inside this project:

Project root:
C:\dev\we-are-aj-digital-web

You must inspect the current project first, including:
- app routes
- service pages
- blog routes
- shared layout files
- existing metadata patterns
- docs folder specs

Relevant documentation likely includes:
- C:\dev\we-are-aj-digital-web\docs\04-seo\schema.md
- C:\dev\we-are-aj-digital-web\docs\02-services\podcast-production.md
- C:\dev\we-are-aj-digital-web\docs\02-services\ai-consulting.md
- C:\dev\we-are-aj-digital-web\docs\02-services\content-systems.md
- C:\dev\we-are-aj-digital-web\docs\02-services\authority-building.md
- C:\dev\we-are-aj-digital-web\docs\03-blog\article-template.md
- C:\dev\we-are-aj-digital-web\docs\03-blog\blog-page-ui.spec.md

Read the schema-related docs first, then implement faithfully.

---

# OBJECTIVE

Add clean, reusable JSON-LD schema support for AJ Digital pages.

The implementation must support:

1. global organization/entity signals
2. service page schema
3. blog article schema
4. FAQ schema
5. breadcrumb schema
6. website schema

Do this in a reusable way, not with hardcoded JSON copied randomly into page files.

---

# REQUIRED SCHEMA TYPES

Implement support for these schema types:

## Sitewide
- Organization
- WebSite

## Service pages
- Service
- FAQPage
- BreadcrumbList

## Blog article pages
- Article
- FAQPage
- BreadcrumbList

## About page / future author pages
- Person (prepare support if practical)

You do not need to force every schema type onto every page.
Only attach schema where it is contextually correct.

---

# BUSINESS CONTEXT TO REFLECT

Brand:
AJ Digital

Site:
https://weareajdigital.com

Founder / author:
Audio Jones

Author role:
Podcast Producer & AI Consultant

Primary business areas:
- Podcast Production
- AI Consulting
- Content Systems
- Authority Building

Primary CTA path:
- /apply

Use existing docs and project conventions where possible.
Do not invent fake facts or unsupported claims.
If exact business data is missing, centralize placeholders clearly and safely.

---

# IMPLEMENTATION STRATEGY

## 1. Inspect the current structure
Look for:
- app/layout.tsx
- app/page.tsx
- app/services/*/page.tsx
- app/blog/[slug]/page.tsx
- app/about/page.tsx
- shared metadata utilities
- any existing SEO helpers

Use what is already there if solid.
Do not duplicate patterns unnecessarily.

---

## 2. Create a reusable schema utility layer
Create a centralized schema utility folder.

Suggested location:
- lib/seo/schema.ts
- lib/seo/schema-types.ts
- lib/seo/schema-utils.ts

Alternative equivalent structure is acceptable if the project already has conventions.

The goal is to centralize generation functions.

---

## 3. Create reusable schema builders

Implement reusable typed helpers such as:

```ts
buildOrganizationSchema()
buildWebsiteSchema()
buildServiceSchema(...)
buildFAQSchema(...)
buildArticleSchema(...)
buildBreadcrumbSchema(...)
buildPersonSchema(...)
```

Keep them typed and composable.

---

# CENTRAL SITE CONFIG

Create or extend a shared site config file.

Suggested location:

- lib/config/site.ts

Include centralized values like:

```ts
export const SITE_URL = "https://weareajdigital.com";
export const SITE_NAME = "AJ Digital";
export const BRAND_NAME = "AJ Digital";
export const AUTHOR_NAME = "Audio Jones";
export const AUTHOR_ROLE = "Podcast Producer & AI Consultant";
export const DEFAULT_OG_IMAGE = "/images/og/default-og.jpg";
export const APPLY_PATH = "/apply";
```

If there is already a config/constants file, extend it instead of creating duplicates.

---

# REQUIRED JSON-LD OUTPUT RULES

## Output method

Render schema through `<script type="application/ld+json">`.

Use safe JSON serialization.

Avoid inline duplicated blobs across many pages.

## Escaping / formatting

Use `JSON.stringify` cleanly.
Do not manually hand-format raw JSON strings unless there is a strong reason.

---

# PAGE-BY-PAGE REQUIREMENTS

## A. Root layout / sitewide schema

At the global layout level, add support for:

### Organization schema

Reflect:

- AJ Digital as the organization
- core services
- site URL
- founder if supported
- sameAs placeholders only if legitimate values already exist

### WebSite schema

Reflect:

- site name
- site URL
- search action only if search is actually implemented
  If search is not implemented, omit SearchAction for now.

Do not add fake or broken search URLs.

---

## B. Service pages

Implement schema on:

- /services/podcast-production/
- /services/ai-consulting/
- /services/content-systems/
- /services/authority-building/

Each service page should support:

1. Service schema
2. FAQPage schema if FAQ content exists
3. BreadcrumbList schema

### Service schema fields

Include:

- @type: Service
- name
- provider
- description
- areaServed when appropriate
- url
- serviceType

Do not invent pricing if the page does not state pricing clearly.

---

## C. Blog article pages

Implement schema on:

- /blog/[slug]

Each article page should support:

1. Article schema
2. FAQPage schema if FAQ items exist in the post data
3. BreadcrumbList schema

### Article schema fields

Include:

- headline
- description
- image
- url
- datePublished
- dateModified
- author
- publisher
- mainEntityOfPage
- keywords if available
- inLanguage

Use the existing blog data source if already implemented.

Do not create fake wordCount unless it is easy to derive accurately.
Omit unsupported fields instead of fabricating them.

---

## D. About page

If the about page exists and implementation is straightforward, add:

- Person schema for Audio Jones
- BreadcrumbList schema

If the about page does not yet exist, prepare the utility only and note it in the summary.

---

# FAQ SCHEMA REQUIREMENTS

Create a helper that transforms page or article FAQ items into valid FAQPage schema.

Input should support a clean typed structure like:

```ts
type FAQItem = {
  question: string;
  answer: string;
};
```

Use existing FAQ content if already present in blog data or service page structures.

Do not duplicate FAQ content in multiple sources unless necessary.
Prefer using existing page data where possible.

---

# BREADCRUMB SCHEMA REQUIREMENTS

Create reusable breadcrumb generation.

Suggested typed shape:

```ts
type BreadcrumbItem = {
  name: string;
  href: string;
};
```

Examples:

## Service page breadcrumb

Home → Services → Podcast Production

## Blog article breadcrumb

Home → Blog → Podcast Production → Article Title

## Category page breadcrumb

Home → Blog → AI Consulting

Only include real levels that exist in the route structure.

---

# REUSABLE COMPONENT SUPPORT

If helpful, create a reusable component such as:

- components/seo/JsonLd.tsx

Example purpose:
Accept one schema object or an array of schema objects and render them safely.

This is recommended if multiple pages need schema injection.

---

# TYPE SAFETY

Create useful schema-related types where reasonable.

Avoid `any`.

Suggested places:

- lib/seo/schema-types.ts

But do not overengineer a giant type system if it slows implementation.
Be practical.

---

# VALIDATION / QUALITY RULES

## Must do

- Keep schema generation centralized
- Keep page usage clean
- Use real project data where available
- Omit unsupported properties rather than inventing values

## Must avoid

- duplicated hardcoded schema blobs in every page
- fake ratings/reviews
- fake pricing
- fake sameAs social links
- fake geographic details not present in project data
- broken search action URLs

---

# FILES TO CREATE OR UPDATE

At minimum, expect to create or update files like:

- lib/config/site.ts
- lib/seo/schema.ts
- lib/seo/schema-types.ts
- components/seo/JsonLd.tsx
- app/layout.tsx
- app/services/podcast-production/page.tsx
- app/services/ai-consulting/page.tsx
- app/services/content-systems/page.tsx
- app/services/authority-building/page.tsx
- app/blog/[slug]/page.tsx

Adjust to existing project structure if needed.

---

# IMPLEMENTATION DETAIL EXAMPLES

## Example service schema helper signature

```ts
export function buildServiceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[] | string;
}) { ... }
```

## Example article schema helper signature

```ts
export function buildArticleSchema(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedAt: string;
  updatedAt: string;
  authorName: string;
  keywords?: string[];
}) { ... }
```

## Example breadcrumb helper signature

```ts
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) { ... }
```

---

# OUTPUT

Do the work directly in the repo.

Then provide a concise final summary including:

1. files created
2. files modified
3. which schema types were implemented
4. where global schema is rendered
5. where service/article schema is rendered
6. any placeholders or assumptions used
7. any pages not yet wired and why
8. suggested next step

---

# FINAL STANDARD

The implementation succeeds when:

- AJ Digital has clear sitewide entity schema
- service pages expose valid service + FAQ + breadcrumb schema
- blog articles expose valid article + FAQ + breadcrumb schema
- the code is reusable and maintainable
- unsupported data is omitted instead of fabricated

Start by inspecting the repo and schema-related docs first, then implement the system.
