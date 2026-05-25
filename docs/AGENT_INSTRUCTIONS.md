# AI Agent Developer Instructions

Welcome to the `weareajdigital.com` workspace. These instructions help AI agents (Claude, Codex, Perplexity, etc.) operate efficiently in this codebase.

## Tech Stack

- **Framework:** Next.js (App Router) — version pinned in `package.json`
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity (configured in `sanity.config.ts`, schemas in `sanity/schemaTypes/`)
- **Data / Auth:** Supabase (client in `src/lib/supabase.ts`, migrations in `supabase/migrations/`, generated types in `src/types/supabase.ts`)
- **Email:** Resend (`src/lib/email.ts`)
- **Hosting:** Vercel (config in `vercel.json`)

This project does **not** use Prisma, Firebase, or Whop. If you see references to any of those, treat them as stale and flag them.

## Directory Map

- `src/app/` — Next.js App Router routes. Pages, layouts, route handlers (`api/`).
- `src/components/` — Reusable React components. Prefer functional + Tailwind.
- `src/lib/` — Shared utilities, API clients, schema validators (`apply-schema.ts`, `assessment.ts`, etc.).
- `src/data/` — Static content collections consumed by pages.
- `src/content/` — JSON config used by feature pages (e.g. Founder Intelligence Systems).
- `src/types/` — Shared TypeScript types, including generated Supabase types.
- `sanity/` — Sanity Studio config and schema types.
- `supabase/` — Local Supabase config and SQL migrations.
- `content/blog/` — Markdown source for blog articles (each has a matching route under `src/app/blog/`).
- `public/` — Static assets (icons, OG images, logos, persona photos).
- `docs/` — Specs, page briefs, operational runbooks. See `docs/archive/` for historical/completed material.

## Development Rules

1. Default to React Server Components. Add `'use client'` only when hooks or browser APIs require it.
2. Style with Tailwind utility classes before reaching for custom CSS.
3. Keep business logic in `src/lib/` so route components stay thin.
4. Never commit secrets. `.env.example` is the only env file in git; real values go in `.env.local`.
5. When adding a new blog route under `src/app/blog/<slug>/`, also add or update the matching entry in `content/blog/` and the canonical list in `src/lib/blog-posts.ts`.
6. When changing the Supabase schema, write a new SQL file in `supabase/migrations/` and regenerate `src/types/supabase.ts`.

## Useful Scripts

- `npm run dev` — start Next.js locally
- `npm run build` — production build
- `npm run lint` — ESLint via `next lint`
- `npm run typecheck` — TypeScript check (`tsc --noEmit`)
- `npm run sanity:dev` — run Sanity Studio locally

CI runs `lint`, `typecheck`, and `build` on every PR (see `.github/workflows/ci.yml`).
Secret scanning and a dependency audit also run on every PR.
