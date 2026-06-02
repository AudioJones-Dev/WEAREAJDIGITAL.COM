# CLAUDE.md

Guidance for Claude (and Claude Code) when operating in this repository.

This file is the Claude-specific entry point. For the general agent
contract that applies to all AI tools, see [AGENTS.md](./AGENTS.md).
For product context see [docs/PRD.md](./docs/PRD.md). For architecture
see [docs/DESIGN.md](./docs/DESIGN.md).

## Read order on session start

1. `AGENTS.md` — stack, layout, hard rules
2. `docs/PRD.md` — what this product is
3. `docs/DESIGN.md` — how it is built
4. `docs/ROADMAP.md` — what is in flight and what is next
5. `docs/DECISIONS.md` — why things are the way they are

## Operating rules specific to Claude

- **Match scope.** A bug fix is not a refactor. A doc change is not a
  reorg. Stay inside the task.
- **Prefer editing existing files** to creating new ones. Especially
  inside `docs/` — the tree is mid-consolidation.
- **Never modify `src/**` in a docs-only PR.** Never modify
  `content/blog/*.md` in a docs-only PR.
- **Validation before push:**
  ```bash
  npm run lint
  npm run build
  ```
  There is no test or typecheck script yet. Do not invent one in the
  middle of an unrelated change.
- **Secrets:** never read, log, or echo values from `.env.local`. Treat
  `.env.example` as the source of truth for what env vars exist.
- **Don't perpetuate stale facts.** Older docs reference Prisma and other
  tools that are not in the active stack. Use AGENTS.md as the source of
  truth, not legacy doc strings.

## Known doc-tree state (read before touching `docs/`)

- `docs/pages/` and `docs/operations/` contain **substantive active
  material** that the team relies on. Do not delete or restructure
  without an explicit task.
- `docs/0X-*` directories (`00-overview` through `08-assets`) contain a
  mix of canonical and legacy material. A consolidation pass is planned
  but not yet scheduled — see `docs/ROADMAP.md`.
- `docs/AGENT_INSTRUCTIONS.md` is the older agent guide. AGENTS.md
  supersedes it; AGENT_INSTRUCTIONS.md will be retired in the
  consolidation pass.

## When in doubt

Ask before:
- deleting any file under `docs/`
- moving any file under `docs/`
- changing any script in `package.json`
- adding a new top-level directory
- introducing a new dependency

Proceed without asking for:
- typo / wording fixes inside files you were already asked to touch
- adding entries to `docs/DECISIONS.md` and `docs/CHANGELOG.md` for work
  you completed in the same PR
