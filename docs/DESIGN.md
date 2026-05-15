# Design / Architecture

How the app is put together. Pair this with [PRD.md](./PRD.md) (what it
does) and [DECISIONS.md](./DECISIONS.md) (why).

## High-level

```
Browser ──► Vercel (Next.js 14, App Router, RSC)
              │
              ├──► Sanity (CMS reads via next-sanity, ISR)
              ├──► Supabase (lead writes, typed client)
              └──► Resend (transactional email)
```

- **Rendering:** Server Components by default; Client Components only
  where hooks or browser APIs are required.
- **Data fetching:** Sanity content fetched server-side via
  `src/lib/sanity.client.ts` and queries in `src/lib/sanity.queries.ts`.
- **Lead writes:** API route handlers under `src/app/api/*` validate
  with Zod, persist via Supabase, notify via Resend.
- **Env:** validated centrally in `src/lib/env.ts`. `.env.example` is
  the source of truth for which variables exist.

## Source layout

```
src/
  app/                 Next.js App Router routes + layouts
    api/               Route handlers (apply, diagnostic, ...)
    blog/              Blog index + post routes
    services/          Service pages
    case-studies/      Case study pages
    apply/             Apply flow
    contact/           Contact
    sitemap.ts         Generated sitemap
    robots.ts          Generated robots
    layout.tsx         Root layout
    page.tsx           Homepage
  components/          Reusable UI
  lib/                 Clients + business logic
    sanity.client.ts   Sanity HTTP client
    sanity.queries.ts  GROQ queries
    supabase.ts        Supabase client (typed)
    email.ts           Resend wrapper
    env.ts             Env validation
    analytics.ts       GA helpers
    apply-schema.ts    Zod schema for Apply
    apply-qualification.ts
    assessment.ts      Diagnostic scoring
    blog-posts.ts      Markdown blog loader
    site.ts            Site constants (URL, name, social)
    standalone-routes.ts
    utils.ts           Misc utilities
  types/               Shared TS types (incl. generated Supabase types)
  data/                Static data fixtures
  content/             (in-source content helpers)

content/blog/          Markdown blog posts (legacy/long-form)
sanity/                Sanity studio code
schema/                Sanity schema definitions
sanity.config.ts       Sanity studio config
sanity.cli.ts          Sanity CLI config
supabase/              Supabase SQL / migrations
public/                Static assets
```

## Boundaries / conventions

- **No client-side secrets.** Anything not prefixed `NEXT_PUBLIC_` is
  server-only and must not be referenced from a Client Component.
- **One Sanity client.** Always import from `src/lib/sanity.client.ts`.
- **One Supabase client.** Always import from `src/lib/supabase.ts`.
- **All form payloads validated server-side** via Zod in `src/lib/`,
  not inside the route handler.
- **Markdown blog posts** under `content/blog/` are read at build time
  by `src/lib/blog-posts.ts`. New long-form content should ideally land
  in Sanity going forward.

## Current state of `docs/`

`docs/` is mid-consolidation. Current contents:

- **Canonical (new, this PR):** `PRD.md`, `ROADMAP.md`, `DESIGN.md`,
  `SECURITY.md`, `DEPLOYMENT.md`, `DECISIONS.md`, `CHANGELOG.md`.
- **Substantive active material — keep, do not reorganize yet:**
  `docs/pages/` (page-level specs incl. `apply.page.md`, `homepage.md`,
  and `local/` + `services/` subtrees) and `docs/operations/`
  (analytics, deployment, conversion-optimization, scheduler handoff,
  apply submission, route status audit, etc.).
- **Mixed canonical + legacy — needs a consolidation pass:**
  `docs/00-overview/`, `docs/01-pages/`, `docs/02-services/`,
  `docs/03-blog/`, `docs/04-seo/`, `docs/05-local/`,
  `docs/06-conversion/`, `docs/07-systems/`, `docs/08-assets/`, plus
  `docs/articles/`, `docs/case-studies/`, `docs/layout/`, `docs/local/`,
  `docs/seo/`.
- **Legacy agent guide:** `docs/AGENT_INSTRUCTIONS.md` — superseded by
  the top-level `AGENTS.md`. Will be retired in the consolidation pass.

The consolidation pass is **not** part of this bootstrap PR. See
[ROADMAP.md](./ROADMAP.md).

## Data flows

### Apply submission

1. User submits form on `/apply`.
2. Route handler under `src/app/api/` parses + Zod-validates against
   `src/lib/apply-schema.ts`.
3. `src/lib/apply-qualification.ts` scores the application.
4. Row inserted into Supabase via `src/lib/supabase.ts`.
5. Notification email sent via `src/lib/email.ts` (Resend) to
   `APPLY_NOTIFICATION_EMAIL`.

### Diagnostic submission

1. User completes the diagnostic.
2. `src/lib/assessment.ts` produces a result.
3. Result is delivered by email (Resend) **or** POSTed to
   `DIAGNOSTIC_WEBHOOK_URL` if set.

### Content read

- Sanity-managed content: server-fetched via `next-sanity` with ISR.
- Markdown content: read at build time from `content/blog/`.
