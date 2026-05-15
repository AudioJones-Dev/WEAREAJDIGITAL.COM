# Product Requirements (PRD)

> Foundation document. This captures the product as it currently exists.
> Detailed page- and feature-level specs live under `docs/pages/` and
> `docs/0X-*/` and are being consolidated into this document over time.

## Product

**WE ARE AJ DIGITAL** is a Miami-based applied-AI consultancy. The website
serves three jobs:

1. **Position the firm** in applied AI, content systems, and podcast
   production for service businesses.
2. **Capture qualified leads** via the Apply flow and the diagnostic
   submission flow.
3. **Publish authority content** (services pages, local/SEO pages,
   blog/articles) that drives organic discovery.

## Audiences

- Service-business operators in the Miami / South Florida market
- Founders and operators evaluating AI consulting
- Buyers of content systems / podcast production services

## Primary user journeys

1. **Discovery → Apply** — visitor lands on a service or local page,
   converts via `/apply`. Submission stored in Supabase, notification
   emailed via Resend.
2. **Diagnostic** — visitor completes a self-assessment. Result is
   delivered (email or webhook per `DIAGNOSTIC_WEBHOOK_URL`).
3. **Content** — visitor reads a blog post, case study, or service page
   and converts via embedded CTAs.

## Surfaces (current routes)

Sourced from `src/app/`:

- `/` — homepage
- `/about`
- `/services` and child service pages
- `/applied-intelligence`, `/ai-consulting-miami`,
  `/content-systems-miami`, `/podcast-production-miami`
- `/blog`
- `/case-studies`
- `/apply`
- `/contact`
- `/api/*` — route handlers (apply, diagnostic, etc.)
- `/sitemap.xml`, `/robots.txt`

## Functional requirements

- **Lead capture (Apply):** validated via Zod, persisted to Supabase,
  email notification via Resend to `APPLY_NOTIFICATION_EMAIL`.
- **Diagnostic:** scored client- and/or server-side; result delivered by
  email, or POSTed to `DIAGNOSTIC_WEBHOOK_URL` if set.
- **Content publishing:** Sanity for structured content; markdown under
  `content/blog/` for legacy/long-form posts.
- **SEO:** generated `sitemap.xml`, `robots.txt`, canonical URLs, OG/
  Twitter metadata per route.
- **Analytics:** GA via `NEXT_PUBLIC_GA_ID`; gated by
  `NEXT_PUBLIC_ENABLE_ANALYTICS`.

## Non-functional requirements

- Server-rendered, fast first paint, Core Web Vitals green.
- Accessible — WCAG AA target.
- No client-side secrets. Server-only env vars never reach the bundle.
- All forms validated server-side (Zod) regardless of client validation.

## Out of scope (today)

- Customer-facing authenticated app
- Payment / billing
- Native mobile

## Open questions / TODO for next PRD pass

- Consolidate `docs/pages/*.md` and `docs/01-pages/*.md` into per-route
  spec files referenced from this PRD.
- Define explicit conversion-rate targets per surface (currently
  scattered across `docs/06-conversion/` and
  `docs/operations/conversion-optimization-*.md`).
- Define content cadence + ownership (currently in `docs/03-blog/` and
  `docs/operations/content-population-priority-system.md`).
