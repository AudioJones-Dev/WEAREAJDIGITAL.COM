You are a senior Next.js content systems engineer working inside an existing AJ Digital website project.

Project root:
C:\dev\we-are-aj-digital-web

Your task is to import and normalize the first 3 saved blog article drafts so they work with the current AJ Digital blog route/data structure.

Existing draft files:
- C:\dev\we-are-aj-digital-web\content\blog\01-podcast-production-cost.md
- C:\dev\we-are-aj-digital-web\content\blog\02-ai-tools-for-entrepreneurs.md
- C:\dev\we-are-aj-digital-web\content\blog\03-content-repurposing-system.md

You must inspect the current blog implementation first, including:
- app/blog/page.tsx
- app/blog/[slug]/page.tsx
- app/blog/category/[category]/page.tsx
- lib/blog/blog-types.ts
- lib/blog/blog-data.ts
- lib/blog/blog-utils.ts
- any blog renderer or content block components
- any docs in /docs/03-blog relevant to the current structure

Relevant docs likely include:
- C:\dev\we-are-aj-digital-web\docs\03-blog\blog-page-ui.spec.md
- C:\dev\we-are-aj-digital-web\docs\03-blog\article-template.md
- C:\dev\we-are-aj-digital-web\docs\03-blog\blog-content-data.prompt.md

Read the implementation and types first, then import the 3 markdown drafts cleanly.

---

# OBJECTIVE

Normalize the three saved markdown drafts into the current blog data structure so they:

1. render correctly in the blog UI
2. use the existing typed blog model
3. preserve article structure and meaning
4. support FAQ rendering
5. support internal linking
6. use canonical, consistent slugs

This is not just copying text into a file.
This is content ingestion and normalization.

---

# REQUIRED OUTCOME

After this task:

- the 3 articles must exist in the active blog data source used by the UI
- they must appear on `/blog`
- they must render on `/blog/[slug]`
- they must use valid categories
- FAQ content must be structured
- links must be corrected to match the current route system

---

# FIRST TASK: INSPECT CURRENT BLOG DATA MODEL

Before changing content, inspect:
- the exact `BlogPost` type
- the exact content block shapes
- how article pages render data
- how FAQ items are consumed
- how related posts are resolved
- how featured posts are selected

Do not assume the shape.
Use the actual project structure.

---

# CONTENT SOURCES TO IMPORT

Import these three drafts:

## 1.
C:\dev\we-are-aj-digital-web\content\blog\01-podcast-production-cost.md

## 2.
C:\dev\we-are-aj-digital-web\content\blog\02-ai-tools-for-entrepreneurs.md

## 3.
C:\dev\we-are-aj-digital-web\content\blog\03-content-repurposing-system.md

---

# SLUG NORMALIZATION RULES

Use these canonical slugs:

1. `podcast-production-cost`
2. `ai-tools-for-entrepreneurs`
3. `content-repurposing-system`

Do not keep numeric filename prefixes in the active slug.

These numeric prefixes can remain in raw source filenames if needed, but the rendered blog routes must use the canonical slugs above.

---

# CATEGORY MAPPING

Use these categories:

- `podcast-production-cost` → `podcast-production`
- `ai-tools-for-entrepreneurs` → `ai-consulting`
- `content-repurposing-system` → `content-systems`

Do not invent new categories.

---

# IMPORT STRATEGY OPTIONS

Choose the approach that best fits the existing implementation.

## Option A — Existing typed data array
If the current blog UI uses `lib/blog/blog-data.ts`, convert the markdown drafts into fully typed `BlogPost` objects and add them there.

## Option B — Existing MDX/markdown ingestion
If the current system already supports MDX/markdown ingestion, convert the files into the expected frontmatter/content format and wire them properly.

## Rule:
Use the project’s existing active pattern.
Do not introduce a second competing content system.

---

# REQUIRED NORMALIZATION TASKS

## 1. Extract and normalize metadata
For each article, create or map:
- title
- slug
- category
- excerpt
- seoTitle
- metaDescription
- publishedAt
- updatedAt
- readTime
- authorName
- authorRole
- featuredImage
- ogImage
- tags
- relatedSlugs
- serviceCtaTarget
- applyCtaEnabled
- featured (only if appropriate)

Use values from the draft content where possible.
If metadata is missing, infer it carefully from the article content.

---

## 2. Convert article body into active content block structure
If the current system uses structured blocks, convert the markdown into the project’s actual content block format.

Typical blocks may include:
- heading2
- heading3
- paragraph
- answerBlock
- list
- table
- cta

Use the actual live type shape in the repo.

### Important:
- Preserve the article’s answer-first structure
- Preserve tables as actual table blocks where supported
- Preserve CTA blocks as structured CTA entries where supported

---

## 3. Extract FAQ items
FAQ sections in each article must become structured FAQ data if the active model supports it.

Use the article’s existing FAQ questions and answers.
Do not discard them into raw body text if the UI already expects structured FAQ rendering.

---

## 4. Fix internal links
Inspect all internal links in the imported content and normalize them to the real route structure.

### Required targets must be valid:
- `/apply`
- `/services/podcast-production/`
- `/services/ai-consulting/`
- `/services/content-systems/`

### Blog links must point only to actual or intended canonical slugs.

Example:
If the article references:
- `/blog/what-does-a-podcast-production-agency-do`

Then:
- preserve it only if that slug is the current canonical slug pattern
- otherwise update it to the correct canonical slug used by the data model

Do not leave broken internal routes behind.

---

## 5. Related post mapping
Set `relatedSlugs` intentionally.

Suggested starter mapping:

### podcast-production-cost
- what-does-a-podcast-production-agency-do
- how-to-start-a-podcast-for-business
- podcast-roi-for-business

### ai-tools-for-entrepreneurs
- chatgpt-for-business-owners
- ai-consulting-for-small-business
- content-repurposing-system

### content-repurposing-system
- podcast-content-repurposing
- podcast-production-cost
- how-to-build-authority-online

If some related posts do not yet exist in the active dataset, either:
- preserve them as future targets if the UI handles missing relateds safely
- or temporarily replace with existing valid posts

Prefer not to break related-post rendering.

---

# IMAGE PATH RULES

Use internal image paths consistent with the existing blog data pattern.

Recommended canonical paths:
- `/images/blog/podcast-production-cost-thumb.jpg`
- `/images/blog/podcast-production-cost-og.jpg`
- `/images/blog/ai-tools-for-entrepreneurs-thumb.jpg`
- `/images/blog/ai-tools-for-entrepreneurs-og.jpg`
- `/images/blog/content-repurposing-system-thumb.jpg`
- `/images/blog/content-repurposing-system-og.jpg`

If the current system already has a naming convention, match it.

---

# FEATURED POST RULE

If the current dataset supports `featured`, mark only one of these as featured unless multiple featured posts are already part of the design.

Recommended featured choice:
- `podcast-production-cost`

If the blog index already expects multiple featured posts, follow that existing pattern.

---

# PRESERVE BUSINESS POSITIONING

The content should remain AJ Digital-aligned:
- strategic
- systems-oriented
- premium
- practical
- direct

Do not rewrite into generic blog fluff.
Do not heavily re-author the articles unless needed to fit the renderer.

This is a normalization task, not a copy rewrite task.

---

# FILES TO UPDATE

At minimum, expect to update one or more of:

- lib/blog/blog-data.ts
- lib/blog/blog-utils.ts
- lib/blog/blog-types.ts
- content/blog/*.md (only if needed for source cleanup)
- any supporting parser/transform files if the project uses them

Use the actual content pipeline the app already depends on.

---

# VALIDATION TASKS

After import, verify:

1. `/blog` shows the imported posts
2. each slug route works
3. category pages include the correct articles
4. FAQ content renders properly
5. links are not broken
6. no type errors are introduced
7. related posts do not break the page
8. metadata remains coherent

If helpful, update related helpers so sort order and featured logic still work correctly.

---

# CODE QUALITY RULES

- Use TypeScript strictly
- No `any`
- No duplicated content systems
- No silent route mismatches
- No numeric-prefixed slugs in live routing
- Keep imports clean
- Keep data readable and well organized

---

# OPTIONAL GOOD IMPROVEMENT

If the current project would benefit from separating:
- raw content source
- normalized app content objects

You may add a clean intermediate normalization utility, but only if it improves the existing architecture and does not overcomplicate the setup.

Do not overengineer.

---

# OUTPUT

Do the work directly in the repo.

Then provide a concise final summary including:
1. files created
2. files modified
3. how the articles were imported
4. canonical slugs used
5. internal link fixes made
6. FAQ handling method
7. any assumptions or future-content placeholders used
8. suggested next step

---

# FINAL STANDARD

This task succeeds when:
- the first 3 real articles are live in the actual blog data system
- routing is clean and canonical
- the article UI renders them properly
- internal links are consistent
- FAQ content is structured and ready for schema later

Start by inspecting the current blog implementation and type model first, then import and normalize the three article drafts.
