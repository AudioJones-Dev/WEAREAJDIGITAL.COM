# AJ Digital — Blog & Authority Engine System
## Directory: /docs/03-blog/blog-system.md
## Goal: Build a scalable SEO + AEO content engine that drives traffic, authority, and inbound leads.

---

# 0. SYSTEM OVERVIEW

The AJ Digital blog is not a content hub.

It is an:

→ SEO engine  
→ AEO (AI citation) engine  
→ Lead generation system  

Every article must:
1. Answer a high-intent question
2. Rank on Google
3. Be cited by AI (ChatGPT, Perplexity, Google AI)
4. Drive traffic → service pages → /apply

---

# 1. URL STRUCTURE

## Core Structure:

/blog/
/blog/[slug]/
/blog/category/[category]

## Example:

/blog/podcast-production-cost/
/blog/ai-tools-for-entrepreneurs/
/blog/content-repurposing-system/

---

# 2. CATEGORY SYSTEM

Create 4 core categories:

/blog/category/podcast-production
/blog/category/ai-consulting
/blog/category/content-systems
/blog/category/authority-building

## Purpose:
- Align with service pillars
- Support internal linking
- Build topical authority

---

# 3. CONTENT ARCHITECTURE (PILLAR + CLUSTER)

## Pillars (High Authority Pages)

Each category must have 1 pillar article:

### Podcast:
- podcast production cost
- what is podcast production
- how to start a podcast

### AI:
- ai tools for entrepreneurs
- ai consulting for business
- chatgpt for business owners

### Content:
- content repurposing system
- ai content workflow
- podcast repurposing strategy

### Authority:
- how to build authority online
- personal brand strategy
- podcast for personal brand

---

## Clusters (Support Articles)

Each pillar gets 5–10 supporting articles.

Example:

Pillar:
→ podcast production cost

Clusters:
→ podcast editing pricing
→ freelance vs agency podcast production
→ cost breakdown per episode
→ podcast ROI for business

---

# 4. ARTICLE STRUCTURE (MANDATORY)

Every article MUST follow:

## Structure:

1. H1 (keyword-based)
2. Intro (answer-first)
3. Table of contents
4. H2 sections (question-based)
5. AEO answer blocks (40–75 words)
6. Supporting content
7. Table or list
8. FAQ section (6+ questions)
9. CTA
10. Internal links

## Rules:

- Every H2 = question
- Every section starts with answer
- Paragraphs ≤ 3 sentences
- Bullet lists must be self-contained

---

# 5. INTERNAL LINKING RULES

Every article MUST include:

1. Link to service page
2. Link to related article
3. Link to resource (optional)
4. Link to /apply

## Example:

"full-service podcast production" → /services/podcast-production/

"content automation system" → /services/content-systems/

"book a free strategy session" → /apply

---

# 6. AEO OPTIMIZATION (CRITICAL)

From AEO system:

Each section must:

- Answer directly
- Be self-contained
- Be quotable

## Example Format:

"Podcast production is the process of recording, editing, and distributing audio or video content. It includes..."

---

# 7. SCHEMA REQUIREMENTS

Each article must include:

- Article schema
- FAQ schema
- Breadcrumb schema

---

# 8. IMAGE SYSTEM

Each article must include:

- OG image (1200x630)
- 1–3 supporting images
- File naming:

/images/blog/[slug]-og.jpg

---

# 9. CTA STRATEGY

Each article must include:

## Inline CTA:
"Ready to build your podcast system? Book a free strategy session."

## End CTA:
Button → /apply

---

# 10. CONTENT PRODUCTION FLOW

## Workflow:

1. Keyword selected
2. Article spec created
3. Article generated (Claude)
4. Reviewed
5. Published
6. Indexed (Search Console)

---

# 11. FIRST 10 ARTICLES TO BUILD

## Priority List:

1. podcast production cost
2. what does a podcast production agency do
3. how to start a podcast for business
4. ai tools for entrepreneurs
5. chatgpt for business owners
6. content repurposing system
7. podcast content repurposing
8. how to build authority online
9. podcast ROI for business
10. ai automation for content creators

---

# 12. PERFORMANCE METRICS

Track:

- organic traffic
- keyword rankings
- time on page
- CTA clicks
- conversions to /apply

---

# 13. SUCCESS DEFINITION

The blog succeeds when:

1. Articles rank on Google
2. AI systems cite content
3. Visitors click into services
4. Leads convert via /apply

---

# 14. BUILD NOTES (NEXT.JS)

## Routes:

/app/blog/page.tsx
/app/blog/[slug]/page.tsx
/app/blog/category/[category]/page.tsx

## Components:

- BlogList
- BlogCard
- ArticleLayout
- TOC
- FAQSection
- CTASection

---

# 15. FINAL STANDARD

This is not a blog.

This is:

→ a search engine acquisition system  
→ an authority amplifier  
→ a lead pipeline  

Every article must justify its existence by driving traffic or conversions.
