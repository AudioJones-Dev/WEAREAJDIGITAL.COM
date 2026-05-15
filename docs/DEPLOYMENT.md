# Deployment

## Hosting

- **Platform:** Vercel.
- **Production URL:** `https://www.weareajdigital.com`
- **Framework preset:** Next.js (auto-detected).
- **Branch model:**
  - `main` → production deployment.
  - Every other branch / PR → preview deployment.

## Build

Vercel runs:

```bash
npm install
npm run build
```

`npm run build` (`next build`) is the only required build step. There
is no separate typecheck or test step yet (see `docs/ROADMAP.md`).

## Environment variables

`.env.example` is the source of truth for what variables exist.
For each environment, configure them in the Vercel project settings:

- **Production:** all required vars set, real keys.
- **Preview:** all required vars set, may point at staging Supabase /
  Sanity dataset.
- **Development:** copied to `.env.local` locally.

When you add a new variable:

1. Add it to `.env.example` with a comment.
2. Wire it into `src/lib/env.ts`.
3. Add it in Vercel for **preview** _and_ **production** before
   merging the PR that depends on it.

### Required variables (today)

Sourced from `.env.example`:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
  `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_DB_URL`
- `RESEND_API_KEY`, `APPLY_NOTIFICATION_EMAIL`, `EMAIL_FROM`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
  `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN`

### Optional

- `DIAGNOSTIC_WEBHOOK_URL`
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_ENABLE_ANALYTICS`
- `NEXT_PUBLIC_CALENDLY_URL`

## Sanity

- Studio runs locally via `npm run sanity:dev`.
- Studio can be built with `npm run sanity:build`.
- Hosted Studio (if any) is configured in `sanity.config.ts` /
  `sanity.cli.ts`.
- Schema lives in `schema/` and is loaded by `sanity.config.ts`.

## Supabase

- Project ID: see `.env.example` comment block.
- SQL / migrations live under `supabase/`.
- Apply migrations via the Supabase CLI against the appropriate
  project before deploying code that depends on them.

## Release checklist

Before merging to `main`:

1. `npm run lint` — clean.
2. `npm run build` — clean.
3. PR description summarizes user-visible changes.
4. New env vars present in Vercel for **production** _and_ **preview**.
5. New decisions added to `docs/DECISIONS.md`.
6. Notable changes added to `docs/CHANGELOG.md`.

After merge: confirm production deploy succeeded in Vercel and smoke
test the changed surface in production.

## Rollback

- Vercel: redeploy the previous successful production build from the
  Deployments tab.
- Supabase migrations: roll forward with a corrective migration; do
  not edit historical migration files.
- Sanity content: use document history in Studio.
