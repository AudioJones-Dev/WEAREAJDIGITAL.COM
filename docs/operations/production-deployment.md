# Production Deployment

This repo is linked to the Vercel project `we-are-aj-digital-web`.

## Required Production Environment

Set these in Vercel for Production:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION
SANITY_API_READ_TOKEN
RESEND_API_KEY
APPLY_NOTIFICATION_EMAIL
EMAIL_FROM
```

Optional diagnostic webhook:

```text
DIAGNOSTIC_WEBHOOK_URL
```

`/api/diagnostic` delivers to `DIAGNOSTIC_WEBHOOK_URL` when configured. If no webhook is configured, it falls back to the Resend email notification path. In production, diagnostic capture fails if neither webhook nor Resend delivery is available.

## Deploy

Repair or refresh Vercel auth first:

```powershell
vercel login
vercel whoami
```

Then deploy the current main branch:

```powershell
git checkout main
git pull --ff-only origin main
npm run lint
npm run build
vercel deploy --prod
```

## Verify

After deployment, verify these routes:

```text
https://weareajdigital.com/applied-intelligence
https://weareajdigital.com/applied-intelligence/diagnostic
https://weareajdigital.com/applied-intelligence/results/hot
https://weareajdigital.com/applied-intelligence/results/warm
https://weareajdigital.com/applied-intelligence/results/cold
```

Submit a diagnostic test lead and confirm one of these capture paths:

- webhook receives the diagnostic payload when `DIAGNOSTIC_WEBHOOK_URL` is set
- notification inbox receives the diagnostic email when using the Resend fallback

## Current Known Deployment Blocker

The local Vercel CLI was repaired to `52.0.0`, but the configured token/account was not valid for the linked Vercel team. Production deploy requires a valid Vercel login or token with access to the linked project/team.
