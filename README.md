# weareajdigital.com

Marketing site and lead-capture surface for **WE ARE AJ DIGITAL**.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity](https://www.sanity.io/) — CMS
- [Supabase](https://supabase.com/) — database / lead capture
- [Resend](https://resend.com/) — transactional email
- [Vercel](https://vercel.com/) — hosting

## Quick start

```bash
# 1. install deps
npm install

# 2. configure env
cp .env.example .env.local
# fill in Supabase, Sanity, Resend, etc.

# 3. run dev server
npm run dev
```

App runs at `http://localhost:3000`.

## Scripts

| Command              | What it does                          |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Start Next.js dev server              |
| `npm run build`      | Production build (also type-checks)   |
| `npm run start`      | Run the production build              |
| `npm run lint`       | ESLint via `next lint`                |
| `npm run sanity:dev` | Start the Sanity Studio locally       |
| `npm run sanity:build` | Build Sanity Studio                 |

There is **no** `test`, `typecheck`, or CI workflow yet. Adding them is
the next foundation milestone — see [docs/ROADMAP.md](./docs/ROADMAP.md).

## Validation before pushing

```bash
npm run lint
npm run build
```

Both must pass.

## For AI agents

If you are an AI assistant working in this repo, start with:

- [AGENTS.md](./AGENTS.md) — operating contract
- [CLAUDE.md](./CLAUDE.md) — Claude-specific guidance

## Documentation

- [docs/PRD.md](./docs/PRD.md) — product requirements
- [docs/DESIGN.md](./docs/DESIGN.md) — architecture
- [docs/ROADMAP.md](./docs/ROADMAP.md) — what's next
- [docs/SECURITY.md](./docs/SECURITY.md) — secrets, headers, RLS
- [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) — Vercel + envs
- [docs/DECISIONS.md](./docs/DECISIONS.md) — ADR log
- [docs/CHANGELOG.md](./docs/CHANGELOG.md) — notable changes

The `docs/` tree also contains historical material under `docs/0X-*/`,
`docs/pages/`, and `docs/operations/` that is being consolidated. See
[docs/DESIGN.md](./docs/DESIGN.md) for the current map.

## License

Proprietary — © WE ARE AJ DIGITAL. All rights reserved.
