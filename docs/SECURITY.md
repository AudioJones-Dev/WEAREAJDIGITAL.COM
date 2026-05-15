# Security

Baseline security posture for `weareajdigital.com`.

## Secrets

- **Source of truth:** `.env.example` lists every variable the app
  reads. Real values live in `.env.local` (gitignored) and in Vercel
  project settings.
- **Never commit `.env.local`.** It is in `.gitignore`. If you suspect a
  secret has been committed, rotate it immediately and tell the team.
- **`NEXT_PUBLIC_*`** variables are bundled into the client. Treat them
  as public. Anything sensitive must **not** carry the prefix.
- **Server-only secrets** in current use:
  - `SUPABASE_SERVICE_ROLE_KEY` — full-access Supabase key. Server-only.
  - `SUPABASE_DB_URL` — direct Postgres URL for migrations/scripts.
  - `RESEND_API_KEY`
  - `SANITY_API_READ_TOKEN`

## Env validation

Server boot validates env via `src/lib/env.ts`. Missing required vars
fail fast rather than silently producing broken behavior. When adding a
new env var:

1. Add to `.env.example` with a comment.
2. Add to `src/lib/env.ts`.
3. Add to Vercel (preview + production).

## Supabase

- Use the anon key on the client and the service-role key only on the
  server (route handlers, server actions).
- Lead-capture tables should have **Row Level Security** enabled with
  policies appropriate to the writer (anon insert, service-role read).
  Audit current policies against the tables in `supabase/`.
- Migrations live under `supabase/`. Apply via Supabase CLI.

## Forms / route handlers

- All form payloads validated with Zod before any DB write or email
  send. Do not trust client-side validation.
- Rate-limit / abuse-protect submission endpoints (Apply, diagnostic,
  contact). _(Open work — see ROADMAP.md.)_

## Headers

Security headers are configured at the app/middleware level. Include:

- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (minimal set)
- A reasonable `Content-Security-Policy` (audit before tightening
  further; analytics, Sanity CDN, and Calendly need allowances).

If you add a new third-party script or iframe, update CSP in the same
PR.

## Dependencies

- Keep `next`, `@supabase/supabase-js`, `next-sanity`, `resend`, and
  `zod` reasonably current. Note breaking changes in
  `docs/CHANGELOG.md`.
- Lockfile: `package-lock.json` is the active lockfile (npm). A
  `pnpm-lock.yaml` exists but is not used for install in CI/Vercel —
  consolidating to a single package manager is a future cleanup item.

## Reporting a vulnerability

Email the maintainer privately. Do not open a public issue with
exploit details.

## Outstanding security TODO

- Rate limiting on submission endpoints.
- Formal CSP review (currently configured but not formally audited).
- CI secret-scan workflow (planned — see ROADMAP.md).
- Decide on a single package manager (npm vs pnpm) and remove the
  unused lockfile.
