# Analytics System

Date: April 4, 2026

## Overview

The AJ Digital analytics system uses GA4 to measure intent, funnel progression, and conversion behavior across the marketing site.

The implementation is designed to be:
- safe when analytics is not configured
- loaded once at the app level
- reusable across components
- focused on conversion-critical events instead of noisy tracking

The current setup measures:
- CTA intent
- apply funnel progression
- scheduler engagement
- high-value page views

## Events

### `cta_click`

Triggered when a primary apply CTA is clicked.

Parameters:
- `location`
  - examples: `hero`, `mid-content`, `sticky`, `footer`, `header`, `scheduler`
- `page`
- `label`

Primary label in the system:
- `Apply for a Strategy Session`

### `apply_start`

Triggered on the first meaningful interaction inside the apply form.

Parameters:
- `page`

### `apply_step`

Triggered when the user advances to the next step in the apply funnel.

Parameters:
- `page`
- `step`

### `apply_submit`

Triggered when the user submits the apply form.

Parameters:
- `page`
- `step`
- `services_count`

### `schedule_view`

Triggered when the success page booking layer is viewed.

Parameters:
- `page`
- `location`

### `schedule_click`

Triggered when the scheduler fallback button is clicked.

Parameters:
- `page`
- `location`

### Optional page-level events

Triggered automatically based on route type:

- `pillar_page_view`
- `cluster_page_view`
- `service_page_view`
- `case_study_view`

Parameters:
- `page`

## Env Setup

Required environment variable:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Notes:
- Do not hardcode the GA ID in the codebase.
- If `NEXT_PUBLIC_GA_ID` is missing, analytics does not load and no tracking calls are sent.
- This keeps the app production-safe across environments.

## Implementation Notes

Core files:
- `src/lib/analytics.ts`
- `src/components/analytics-provider.tsx`

Supporting integration points:
- `src/app/layout.tsx`
- `src/app/apply/ApplyForm.tsx`
- `src/components/inline-apply-cta.tsx`
- `src/components/sticky-apply-cta.tsx`
- `src/components/scheduler-fallback.tsx`

Implementation behavior:
- GA4 scripts load once through the global analytics provider
- route-aware page events are emitted from the provider
- CTA clicks are captured centrally for `/apply` CTA surfaces
- apply funnel events are emitted directly from the form logic
- scheduler fallback events are emitted directly from the scheduler component

## Testing

To verify tracking:

1. Set `NEXT_PUBLIC_GA_ID` locally.
2. Run the app and open the browser with GA DebugView enabled.
3. Click a primary apply CTA from:
   - hero
   - inline CTA block
   - sticky CTA
4. Start interacting with the apply form.
5. Progress through multiple steps.
6. Submit the form.
7. Load `/apply/success`.
8. Click the fallback scheduler button if the direct booking page is shown.

Expected outcomes:
- `cta_click` fires on apply CTA clicks
- `apply_start` fires once on first form interaction
- `apply_step` fires as steps advance
- `apply_submit` fires on submission
- `schedule_view` fires on success page view
- `schedule_click` fires on fallback scheduler click

## Future Expansion

Recommended next additions:
- funnel drop-off analysis by step
- booked-session conversion rate tracking
- CTA performance comparison by page and location
- deeper scheduler completion measurement
- A/B testing framework for CTA copy and placement

The current system is the measurement foundation. The next phase is turning these events into reporting and optimization decisions.
