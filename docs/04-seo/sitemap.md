# Sitemap Generation

## Purpose
Outlines how the XML sitemap is generated and maintained.

## Technical Approach
- Next.js `sitemap.ts` or `next-sitemap` plugin.
- Inclusion of all static routes.
- Dynamic mapping of all CMS entries (blogs, local pages).

## Priority & Change Frequencies
- Homepage: 1.0 (Daily)
- Service Pages: 0.9 (Weekly)
- Blog Posts: 0.7 (Monthly)
- Local Pages: 0.8 (Monthly)

## Exclusions
- `/apply/success`
- Any gated or internal utility pages.
