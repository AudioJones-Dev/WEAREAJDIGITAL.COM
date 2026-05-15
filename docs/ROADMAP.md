# Roadmap

A living list of what's done, what's in flight, and what's next. Detailed
historical reports live under `docs/operations/`. Use this file as the
top-of-funnel view; promote items into PRD.md / DESIGN.md when they
become committed work.

## Now (in flight)

- **Docs foundation bootstrap** _(this PR)._ Install AGENTS.md,
  CLAUDE.md, README.md, and the canonical `docs/*.md` files. No code or
  doc-tree changes yet.

## Next (committed, not started)

- **CI + typecheck + secret-scan workflow.** Add a `typecheck` script
  and a GitHub Actions workflow that runs `lint`, `typecheck`, `build`,
  and a basic secret scan on every PR. Currently there is no CI.
- **Pre-commit hooks.** Lint-staged + a secret-scan hook before commit.
- **Test scaffolding.** Add a minimal test runner (Vitest or Jest +
  Playwright for e2e on the Apply / diagnostic flows). No tests today.

## Soon (planned)

- **Docs consolidation pass.** Reconcile `docs/0X-*/`, `docs/pages/`,
  and `docs/operations/` against the new top-level docs. Retire
  `docs/AGENT_INSTRUCTIONS.md` in favor of `AGENTS.md`. Move per-page
  specs into a single `docs/pages/` tree referenced from PRD.md.
- **Per-route page specs.** One file per route under `docs/pages/`, each
  with: purpose, audience, CTAs, content sources, analytics events.
- **Conversion + analytics doc.** Pull the various conversion and
  analytics reports under `docs/operations/` into one canonical
  `docs/ANALYTICS.md`.

## Later

- Authenticated client area (out of current PRD scope).
- Programmatic local-SEO page generation hooked into Sanity.
- A11y audit pass against WCAG AA.

## Recently shipped

See `docs/CHANGELOG.md` for the running log. Recent highlights from
`git log`:

- Typed Supabase client with generated schema types.
- Production-grade env validation and `.gitignore` hardening.
- Supabase lead capture for Apply + diagnostic submissions.
- Website health pass: canonical URLs, sitemap, lead capture, security
  headers (PR #2).
