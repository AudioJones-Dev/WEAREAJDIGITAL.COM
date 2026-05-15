# Changelog

Notable changes to the repo. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/). Newest first.

## [Unreleased]

### Added
- Foundational repo guidance docs: top-level `AGENTS.md`, `CLAUDE.md`,
  `README.md`, and canonical `docs/PRD.md`, `docs/ROADMAP.md`,
  `docs/DESIGN.md`, `docs/SECURITY.md`, `docs/DEPLOYMENT.md`,
  `docs/DECISIONS.md`, `docs/CHANGELOG.md`. No code or existing-doc
  changes.

## Pre-bootstrap (from git history)

Summarized from `git log`. This is not exhaustive; it provides recent
context.

### Added
- Typed Supabase client with generated schema types
  (`src/lib/supabase.ts`, `src/types/`).
- Supabase lead capture for `/apply` and diagnostic submissions.
- Production-grade env validation (`src/lib/env.ts`) and `.gitignore`
  hardening.

### Fixed
- Website health pass (PR #2): canonical URLs, sitemap, lead capture,
  security headers.

### Ops
- Production redeploy with updated environment variables.
