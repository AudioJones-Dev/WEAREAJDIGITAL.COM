# PR #6 Post-Merge Scope Audit

**Audit date:** 2026-05-15
**Audit branch:** `claude/post-merge-scope-audit-pr6-Ml3Ot`
**Final `main` SHA audited:** `c0ff21181d4000c114bf2eb2865821bf7fc42abd`

## Trigger

A post-merge report flagged that `main` after PR #6 appeared to contain
more than PR #6's stated scope (CI / typecheck / security workflows).
Specifically: broad docs cleanup, archive moves, `package-lock.json`
changes, and a one-line edit to `src/app/api/diagnostic/route.ts`.

This audit verifies whether that perceived "extra scope" is genuine
contamination of the PR #6 squash commit, or whether it came from a
separate, earlier merge that the diff window happened to span.

## Method

1. Inspected the actual PR #6 squash commit (`c0ff211`) via
   `git show --stat` and `git show --name-status`.
2. Inspected the immediately preceding commit on `main` (`2fa2875`)
   to see what landed before PR #6.
3. Cross-referenced commits against open/closed PRs in
   `AudioJones-Dev/weareajdigital.com` (PR #1–#6).
4. Verified that the diagnostic route edit on disk matches the known
   one-line Date → ISO string fix.
5. Ran `npm run lint`, `npm run typecheck`, and `npm run build` against
   `c0ff211`.

## `main` history (most recent first)

| SHA       | Subject                                                | Origin        |
|-----------|--------------------------------------------------------|---------------|
| `c0ff211` | chore: add ci typecheck and security workflows         | **PR #6 squash** |
| `2fa2875` | chore: clean repo docs and remove stale project artifacts | **PR #3 squash** (also carries PR #5's diagnostic fix) |
| `17e2aff` | feat: add typed Supabase client with generated schema types | pre-PR #3 |
| `16aed44` | chore: trigger redeploy with updated env vars          | pre-PR #3 |
| ...       | ...                                                    | ...           |

## PR #6 squash commit (`c0ff211`) — actual contents

`git show --name-status c0ff21181d4000c114bf2eb2865821bf7fc42abd`:

```
A  .github/PULL_REQUEST_TEMPLATE.md
A  .github/gitleaks.toml
A  .github/workflows/ci.yml
A  .github/workflows/secret-scan.yml
A  .github/workflows/security-audit.yml
M  docs/AGENT_INSTRUCTIONS.md
M  package.json
```

7 files, +162 lines, 0 deletions. **Every file is within PR #6's
declared scope.** There is no docs cleanup, no archive move, no
`package-lock.json` change, and no `src/app/api/diagnostic/route.ts`
edit in this commit.

## Where the "extra" changes actually came from

The preceding commit `2fa2875` ("chore: clean repo docs and remove
stale project artifacts") is the squash of PR #3, merged ~2 hours
before PR #6. Its diffstat (42 files, +147 / -1456) accounts for
**every** "unexpected" file flagged in the post-merge report:

- Broad docs cleanup → `docs/00-overview/*`, `docs/04-seo/*`,
  `docs/05-local/*`, `docs/06-conversion/*`, `docs/07-systems/*`,
  `docs/pages/...` deletions — all explicitly listed in PR #3's
  description.
- Archive moves → `docs/operations/* → docs/archive/*` renames — all
  in PR #3.
- `package-lock.json` → 98-line diff from the `package.json` rename
  (`ajdigital.app` → `weareajdigital.com`) and a missed
  `@supabase/supabase-js` lockfile entry — explicitly called out in
  PR #3's second sub-commit.
- `src/app/api/diagnostic/route.ts` (1 line) → the
  `new Date(...).toISOString()` fix from PR #5; PR #3's third
  sub-commit ("fix: resolve diagnostic route date typing") pulled
  it in so PR #3 could pass `npm run build` (PR #3 itself noted
  the typecheck failure as a blocker).

The post-merge report's "extra scope" is therefore a **diff-window
artifact**: anything that compared a base older than `17e2aff` against
`c0ff211` would unavoidably include PR #3's squash as well. **PR #6's
squash itself is clean and on-scope.**

## Changed-file categorization

### Expected PR #6 scope (commit `c0ff211`)

| File                                  | Change |
|---------------------------------------|--------|
| `.github/PULL_REQUEST_TEMPLATE.md`    | added  |
| `.github/gitleaks.toml`               | added  |
| `.github/workflows/ci.yml`            | added  |
| `.github/workflows/secret-scan.yml`   | added  |
| `.github/workflows/security-audit.yml`| added  |
| `docs/AGENT_INSTRUCTIONS.md`          | modified (mention typecheck + CI) |
| `package.json`                        | modified (`typecheck` script) |

### Carried-over PR #3 scope (commit `2fa2875`)

40 docs/repo-hygiene files: rewrite of `docs/AGENT_INSTRUCTIONS.md`,
deletion of stale numbered doc trees, `docs/operations → docs/archive`
moves, removal of duplicate service/apply/homepage drafts, removal of
`schema/README.md` (and the `schema/` dir), Appendix-A merges into
`docs/02-services/{ai-consulting,content-systems}.md`, and the
`package.json` `name` rename plus the corresponding
`package-lock.json` regeneration. All match PR #3's description
exactly.

### Build-fix scope (commit `2fa2875`, sub-commit 3)

- `src/app/api/diagnostic/route.ts` (1 line):
  `new Date(payload.tracking.submittedAt)` →
  `new Date(payload.tracking.submittedAt).toISOString()`.
  Verified at line 65 of the file on `c0ff211`. This is identical to
  PR #5's standalone fix.

### Unexpected / needs review

**None.** Every change between PR #3's base (`17e2aff`) and the current
`main` head (`c0ff211`) is accounted for by PR #3's or PR #6's declared
scope.

## PR #3 status

PR #3 (`claude/repo-hygiene-audit-XVplt`) is **closed** with a
populated `merged_at` (`2026-05-15T21:51:05Z`); its squash commit
`2fa2875` is in `main`'s first-parent history. PR #3 is therefore
**already effectively merged into `main` by squash**, and the
GitHub UI may simply not reflect that cleanly (the API returned
`merged: false` while `merged_at` is set — a known squash-merge
inconsistency). No action needed beyond confirming the closed/merged
state in the GitHub UI.

## PR #5 status (incidental finding)

PR #5 (`claude/fix-diagnostic-route-date-typing`) is **still open as a
draft**, but the single-line change it proposes is already on `main`
via PR #3's squash. PR #5 is **superseded** and should be closed
without merge.

## Validation results (on `c0ff211`)

- `npm run lint` → **pass** (no ESLint warnings or errors)
- `npm run typecheck` → **pass** (`tsc --noEmit` clean)
- `npm run build` → **pass** (compiled successfully, 51/51 static
  pages generated)

## Contamination verdict

**No harmful contamination.** PR #6's squash commit is exactly the
declared scope. The "extra" diff seen post-merge is fully explained by
the PR #3 squash that landed immediately before it. Both squashes are
internally on-scope and validated.

## Revert decision

**No revert needed.** Nothing on `main` is out of scope for the PR
that introduced it.

## Recommended next actions

1. **Close PR #5** as superseded — the diagnostic Date.toISOString()
   fix it contains is already on `main` via `2fa2875`.
2. **Confirm PR #3 is shown as merged in the GitHub UI**; if it still
   reads "closed, not merged", leave a note on the PR pointing at
   `2fa2875` as the squash commit so the history is unambiguous.
3. **Review PR #4** (`claude/docs-foundation-bootstrap-XFtT8`) on its
   own merits — it is unrelated to this contamination question and
   still open as a draft.
4. **No code changes** to `main` are required by this audit.
