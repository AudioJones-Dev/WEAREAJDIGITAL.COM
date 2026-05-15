# AGENTS.md

Operating contract for AI agents (Claude, Codex, Cursor, etc.) working in this repo.

## Stack (authoritative)

- **Framework:** Next.js 14, App Router, TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity (project `1k82n5rq`, dataset `production`)
- **Database / auth / lead capture:** Supabase
- **Transactional email:** Resend
- **Hosting:** Vercel

Anything else mentioned in legacy docs (Prisma, Firebase, etc.) is **not** in
the active stack. Do not introduce it without explicit instruction.

## Repository layout (canonical)

- `src/app/` — App Router routes, layouts, route handlers (`api/`)
- `src/components/` — React components
- `src/lib/` — utilities, clients (`sanity.client.ts`, `supabase.ts`,
  `email.ts`, `env.ts`, `analytics.ts`, etc.)
- `src/types/` — shared TypeScript types
- `src/data/` — static data fixtures
- `sanity/`, `schema/`, `sanity.config.ts`, `sanity.cli.ts` — Sanity Studio + schema
- `supabase/` — Supabase SQL / migrations
- `content/blog/` — Markdown blog source (do not bulk-edit)
- `docs/` — see DECISIONS.md and DESIGN.md for current state

## Hard rules

1. **Server Components by default.** Add `'use client'` only when hooks or
   browser APIs are required.
2. **Tailwind first.** Custom CSS only when utilities are insufficient.
3. **Keep business logic in `src/lib/`.** Do not embed clients (Sanity,
   Supabase, Resend) inside components.
4. **Never commit secrets.** `.env.local` is gitignored. Public env vars use
   the `NEXT_PUBLIC_` prefix; everything else is server-only.
5. **Do not introduce new top-level directories** without updating
   DESIGN.md and DECISIONS.md in the same PR.
6. **Do not delete or reorganize `docs/`** as a side effect of unrelated work.
   The doc tree currently has overlapping canonical and legacy material; a
   dedicated consolidation pass is planned (see ROADMAP.md).

## Branching

- Feature work: `claude/<topic>-<slug>` or `feat/<slug>`
- Doc-only work: `claude/docs-<slug>` or `docs/<slug>`
- Default branch: `main`
- Never force-push `main`.

## Validation before pushing

There is currently **no** test script, **no** typecheck script, **no** CI
pipeline, and **no** pre-commit hook configuration. The available checks are:

```bash
npm run lint     # next lint
npm run build    # next build (also surfaces type errors)
```

Run both before opening a PR. If either fails, fix it before pushing.

Adding `typecheck`, CI, and a secret-scan workflow is the next planned
foundation step (see ROADMAP.md).

## What "done" looks like for a PR

- Scope matches the task description (no drive-by refactors).
- `npm run lint` and `npm run build` both pass locally.
- New env vars appear in `.env.example` with a comment.
- New decisions are recorded in `docs/DECISIONS.md`.
- User-visible changes are summarized in the PR body.
