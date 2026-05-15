# Security

This document describes the security posture, controls, and operational
expectations for `weareajdigital.com`. It is the canonical reference for
disclosure, dependency cadence, runtime headers, and platform secret
scoping.

---

## 1. Reporting a vulnerability

If you believe you have found a security issue in this repository or in
the production site, please report it privately.

- **Contact:** `dev@audiojones.com`
- **Subject prefix:** `[security] weareajdigital.com — <short summary>`
- **Acknowledgement target:** within 3 business days
- **Resolution target:**
  - Critical: 7 calendar days
  - High: 30 calendar days
  - Moderate / low: next scheduled dependency window

Please do not file public GitHub issues for unpatched vulnerabilities.
Once a fix has shipped, a redacted summary may be added to the release
notes.

---

## 2. Dependency update cadence

We split dependency hygiene into three loops:

| Loop          | Frequency                       | Scope                                                           |
| ------------- | ------------------------------- | --------------------------------------------------------------- |
| `npm audit`   | every CI run + weekly scheduled | report-only on the `Security Audit` GitHub Action               |
| Patch bumps   | as needed, conservative         | direct deps within the same major (e.g. `next` 14.2.x)          |
| Major bumps   | planned, with a dedicated PR    | breaking-change upgrades (Next 14 → 15, Sanity 3 → 5, etc.)     |

Operational rules:

- **Stay inside the same major** unless an advisory only resolves with a
  major bump.
- After every dependency change, run `npm run lint && npm run typecheck
  && npm run build` locally and let CI re-verify before merging.
- Document any vulnerabilities knowingly left in place (with rationale)
  in the PR description and link the GHSA advisory.

### Known accepted findings

The audit table below describes the current accepted residual risk after
the most recent dependency hardening pass. Items remain accepted because
the only available fix is a major-version bump that would require a
broader migration.

| Package                  | Severity | Surface                  | Why deferred                                                                                  |
| ------------------------ | -------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| `next` (post-14.2.35)    | high     | runtime + CLI            | Remaining advisories are fixed in Next 15.5.x. Next 14 → 15 is a major migration.             |
| `eslint-config-next`     | high     | **dev-only** linter      | Fix requires Next 15+/16 ESLint preset. No runtime exposure.                                  |
| `@sanity/ui` chain       | moderate | Sanity Studio (separate) | `prismjs`/`refractor`/`react-refractor` ships inside Studio, not the public site bundle.      |
| `esbuild` (dev)          | moderate | **dev-only** bundler     | Issue only affects the local dev server origin; production uses Next’s compiled output.       |

The `prismjs / refractor / react-refractor` chain is reachable only
through `@sanity/ui` inside the Sanity Studio dependency tree. The
public Next.js app does not import the Studio, so the vulnerable code
is not shipped to site visitors. The chain will be fully removed when
we adopt `next-sanity@12+` together with `sanity@5+`.

---

## 3. CI security workflow

Two GitHub Actions back the security loop:

- `.github/workflows/security-audit.yml` runs `npm audit
  --audit-level=high` on every pull request, every push to `main`, and
  on a weekly Monday cron (12:00 UTC). It is intentionally
  `continue-on-error: true` so pre-existing transitive findings do not
  block unrelated PRs. Triage and upgrades happen in dedicated PRs
  (this document).
- `.github/workflows/ci.yml` runs `npm ci`, `npm run lint`, `npm run
  typecheck`, and `npm run build` on every PR and `main` push. A build
  failure blocks merge.

Both workflows pin Node.js 20 and use `cache: npm`.

---

## 4. Secret scanning

`.github/workflows/secret-scan.yml` runs `gitleaks` on every push and
pull request with a repo-specific allowlist at
`.github/gitleaks.toml`.

- Local `.env*` files are git-ignored (`.gitignore`) and never shipped.
- `.env.example` is the canonical contract for required environment
  variables. It contains placeholder values only.
- Any accidental commit of a real secret must be treated as a
  compromise: rotate the credential at the provider (Supabase, Resend,
  Sanity) and then rewrite git history.

---

## 5. Runtime security headers

Implemented in `next.config.mjs` via `headers()` and applied to every
route (`source: "/:path*"`). Sent on both the static HTML and on the
API routes.

| Header                       | Value (summary)                                                  |
| ---------------------------- | ---------------------------------------------------------------- |
| `Content-Security-Policy`    | See CSP table below                                              |
| `X-Frame-Options`            | `DENY` — site cannot be iframed                                  |
| `X-Content-Type-Options`     | `nosniff`                                                        |
| `Referrer-Policy`            | `strict-origin-when-cross-origin`                                |
| `Permissions-Policy`         | Disables camera, microphone, geolocation, payment, USB, sensors  |
| `Strict-Transport-Security`  | `max-age=63072000; includeSubDomains; preload`                   |

### CSP directives and exceptions

| Directive       | Allowed sources                                                                                                              | Reason                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `default-src`   | `'self'`                                                                                                                     | Tight default                                                                                       |
| `script-src`    | `'self' 'unsafe-inline' 'unsafe-eval' googletagmanager.com google-analytics.com`                                             | Next.js inline hydration script; GA4 (`next/script` GA4 snippet)                                    |
| `style-src`     | `'self' 'unsafe-inline' fonts.googleapis.com`                                                                                | Tailwind utility classes do not need it, but `next/font` and CSS-in-JS emit inline styles          |
| `img-src`       | `'self' data: blob: cdn.sanity.io google-analytics.com googletagmanager.com`                                                 | Sanity-served imagery; analytics pixels; inline data URIs                                          |
| `font-src`      | `'self' data: fonts.gstatic.com`                                                                                             | `next/font` (Inter) emits self-hosted, but allow `fonts.gstatic.com` as defensive fallback         |
| `connect-src`   | `'self' *.supabase.co api.resend.com google-analytics.com *.analytics.google.com *.googletagmanager.com *.sanity.io`         | Lead-capture writes (Supabase, Resend), GA4 beacons, Sanity image/CDN fetches                       |
| `frame-src`     | `'self' calendly.com *.calendly.com`                                                                                         | Calendly scheduler iframe on `/apply/success`                                                       |
| `frame-ancestors` | `'none'`                                                                                                                   | Defense-in-depth with `X-Frame-Options: DENY`                                                       |
| `object-src`    | `'none'`                                                                                                                     | No plugins                                                                                          |
| `form-action`   | `'self'`                                                                                                                     | Lead forms post only to our own API                                                                 |
| `base-uri`      | `'self'`                                                                                                                     | Prevents `<base>` injection                                                                         |
| `worker-src`    | `'self' blob:`                                                                                                               | Next.js bundle workers                                                                              |
| `upgrade-insecure-requests` |                                                                                                                  | Upgrade legacy http subresources                                                                    |

#### Why `'unsafe-inline'` / `'unsafe-eval'` remain

Next.js 14 App Router still emits inline bootstrap scripts that the
runtime evaluates on the client. Switching to a nonce-based CSP
requires `Strict-Transport-Security`-style coordination across every
`<Script>` usage and is planned as part of the Next 14 → 15 migration
described above.

#### What is NOT covered

- The Sanity Studio is not served from this Next.js app. If it is
  added later (e.g. `/studio`), the CSP must be widened (or scoped via
  middleware) before that route is exposed.
- Production deploys run on Vercel; Vercel adds its own
  `X-Vercel-*` headers. Our headers compose on top of these.

---

## 6. Rate limiting

Public lead-capture API routes are protected by `src/lib/rate-limit.ts`,
a per-process in-memory IP bucket:

- `/api/apply` → 5 requests / 60s / IP
- `/api/diagnostic` → 5 requests / 60s / IP

Implementation properties:

- **Scope:** per Vercel serverless instance. On a cold or scaled-out
  invocation, a fresh bucket starts. This is intentional: the limiter
  is a backstop against casual scripted abuse, not a sophisticated WAF.
- **Identity:** sourced from `x-forwarded-for` (Vercel populates this
  with the visitor IP), falling back to `x-real-ip` /
  `cf-connecting-ip` / `"unknown"`.
- **Behaviour on overflow:** HTTP 429 with a `Retry-After` header in
  seconds.

If sustained abuse becomes a problem, the recommended next step is
Upstash Ratelimit (Redis) keyed on `clientIp(request)` — the existing
`rateLimit()` call sites can be swapped to an async variant without
restructuring the routes. We do not currently use external paid
infrastructure for rate limiting.

---

## 7. Supabase posture

- The runtime uses the **service-role** key from
  `SUPABASE_SERVICE_ROLE_KEY` on the server only (`src/lib/supabase.ts`).
  This key bypasses Row Level Security, so it must never be exposed to
  the client bundle and must never be referenced from a `NEXT_PUBLIC_*`
  variable.
- Schema is tracked in `supabase/` and typed in
  `src/types/supabase.ts`.
- **RLS expectation:** every table the public site can reach must have
  RLS enabled. The two tables the site writes to today
  (`apply_submissions`, `diagnostic_submissions`) should have:
  - `INSERT` allowed only for the `service_role`
  - `SELECT` / `UPDATE` / `DELETE` denied to `anon` and `authenticated`
- The anon key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`) is currently shipped
  but unused at runtime; if it remains unused, prefer removing it from
  the bundle. If it is wired up later, all reachable tables must have
  enforced RLS first.

---

## 8. Resend key scoping

- `RESEND_API_KEY` is a server-only secret loaded in `src/lib/email.ts`.
  It is never referenced as `NEXT_PUBLIC_*`.
- The key should be scoped at Resend to **sending only** from the
  `EMAIL_FROM` domain. Do not use an account-wide full-access key.
- Recipients are constrained to `APPLY_NOTIFICATION_EMAIL`. The route
  handlers do not forward the visitor's email into the `to:` field.
- If the production key is rotated, redeploy the Vercel project so the
  new value is loaded into the running functions.

---

## 9. Operational checklist (per release)

- [ ] `npm audit` reviewed; new high/critical advisories triaged
- [ ] `npm run lint && npm run typecheck && npm run build` green locally
- [ ] CI green on the PR (`ci.yml` + `security-audit.yml` + `secret-scan.yml`)
- [ ] No new `NEXT_PUBLIC_*` env containing secrets
- [ ] No new third-party origin requested by the page (otherwise update
      the CSP and document the exception in §5)
