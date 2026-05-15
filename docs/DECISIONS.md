# Decisions

A lightweight ADR log. Append new entries to the top. Each entry: date,
short title, decision, why, alternatives considered (optional),
follow-ups (optional).

---

## 2026-05-15 — Install foundational repo guidance docs

**Decision.** Add top-level `AGENTS.md`, `CLAUDE.md`, `README.md` and a
canonical `docs/` set (`PRD.md`, `ROADMAP.md`, `DESIGN.md`,
`SECURITY.md`, `DEPLOYMENT.md`, `DECISIONS.md`, `CHANGELOG.md`) without
modifying any application code or existing docs.

**Why.** The repository was missing a single, current source of truth
for stack, layout, and operating rules. The legacy
`docs/AGENT_INSTRUCTIONS.md` referenced Prisma (not in the active
stack) and was incomplete. The `docs/` tree has overlapping canonical
and legacy material, and a full reorg is too risky to do in the same
pass as the foundation install.

**Scope.** Docs only. No `src/**` changes. No deletes. No reorganization
of `docs/0X-*/`, `docs/pages/`, or `docs/operations/`.

**Follow-ups.**
- Add CI + `typecheck` script + secret-scan workflow.
- Doc consolidation pass to retire `docs/AGENT_INSTRUCTIONS.md` and
  reconcile `docs/0X-*/` material into the canonical set.

---

## Pre-bootstrap (recorded for context, not full ADRs)

These predate this log; they are summarized from `git log` and existing
code so future work has the context.

- **Next.js 14 App Router + TypeScript + Tailwind** chosen as the base
  stack.
- **Sanity** chosen as the CMS (project `1k82n5rq`).
- **Supabase** chosen for lead capture; typed client with generated
  schema types is in use (`src/lib/supabase.ts`, `src/types/`).
- **Resend** chosen for transactional email.
- **Zod** used as the single source of validation schemas for inbound
  payloads.
- **Markdown blog under `content/blog/`** retained alongside Sanity for
  legacy/long-form posts. New long-form content should default to
  Sanity going forward.
- **`package-lock.json` is the active lockfile.** A `pnpm-lock.yaml`
  also exists; consolidating to a single package manager is a future
  cleanup item.
- **Prisma is _not_ in use.** Older docs reference it; treat that as
  stale. AGENTS.md is authoritative.
- **Firebase is _not_ in use.**

---

## Template for new entries

```
## YYYY-MM-DD — Short title

**Decision.** What we decided, in one or two sentences.

**Why.** The forcing function. What problem this solves.

**Alternatives considered.** (optional) What we looked at and rejected.

**Follow-ups.** (optional) Linked tasks / TODOs.
```
