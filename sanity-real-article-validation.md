# Sanity Real Article Validation

Date: April 4, 2026

## Goal

Validate one real AJ Digital article end to end through the isolated Sanity proof-of-concept without touching the live production blog system.

## Validation Article

- Title: `How Much Does Podcast Production Cost in 2026? A Transparent Guide for Business Owners`
- Slug: `podcast-production-cost`
- Category: `podcast-production`

## Required Fields

Create one Sanity `article` document with at least:

- `title`
- `slug`
- `category`
- `excerpt`
- `seoTitle`
- `metaDescription`
- `publishedAt`
- `updatedAt`
- `tags`
- `faqItems`
- `body`

## Test Flow

1. Set the Sanity environment variables in `.env.local`.
2. Run `npm run sanity:dev`.
3. Create and publish the `article` document with slug `podcast-production-cost`.
4. Run `npm run dev`.
5. Open `/sanity-test/podcast-production-cost`.

## Success Criteria

The proof is successful if:

- the article is fetched by slug from Sanity
- the slug route renders title, excerpt, dates, tags, FAQ items, and body
- the live `/blog/podcast-production-cost` route remains unchanged
- the content model feels sufficient for a future staged migration

## Comparison Reference

Use the current manual article as the structural reference:

- `/blog/podcast-production-cost`

The Sanity test does not need to match the full production design. It only needs to prove authoring, fetch, slug routing, and render viability.
