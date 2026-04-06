# Analytics Dashboard

Date: April 4, 2026

## 1. Core Metrics

The purpose of this dashboard is to turn raw GA4 event data into operating decisions.

The system should be reviewed in layers, not as a flat list of numbers.

### Traffic Layer

These metrics answer: Are the right people reaching the site?

Track:
- sessions
- page views
- users
- top landing pages
- top traffic sources

Interpretation:
- Rising sessions with weak downstream conversion usually means traffic quality, page intent match, or CTA strength needs work.
- Strong page views on authority pages but weak conversion movement usually means the content is educating without pushing hard enough.
- Strong local page traffic with weak apply behavior may indicate intent mismatch or weak commercial framing.

### Engagement Layer

These metrics answer: Are users showing intent?

Track:
- `cta_click`
- click rate by CTA location
- click rate by page
- scroll depth when added later

Interpretation:
- High page traffic with low CTA clicks means the page is being consumed but not converting interest into action.
- Strong CTA click rate from mid-content CTAs usually means the content is aligned with buyer intent.
- If sticky CTA clicks outperform mid-content CTAs heavily, users may need more persistent prompting or pages may be too long before the first clear action.

### Funnel Layer

These metrics answer: Are qualified users entering and completing the application funnel?

Track:
- `apply_start`
- `apply_step`
- `apply_submit`
- step-to-step completion rate

Interpretation:
- High `cta_click` with low `apply_start` means users are interested in action but the apply page may still feel heavier than expected.
- High `apply_start` with sharp drop-off between steps means friction or confusion exists inside the form.
- Strong `apply_submit` rate means the form is aligned with user expectations and friction is reasonable.

### Booking Layer

These metrics answer: Are submitted applicants moving into the booking layer?

Track:
- `schedule_view`
- `schedule_click`
- eventual booked-session count when connected

Interpretation:
- High `apply_submit` with low `schedule_view` suggests redirect or success-page engagement issues.
- High `schedule_view` with low `schedule_click` may indicate the embedded scheduler is working, or it may indicate users are stalling on the page if bookings are not happening.
- High fallback `schedule_click` may indicate the embed experience needs improvement.

## 2. Funnel Model

The funnel should be interpreted as a sequence, not as isolated events.

```text
Visitor
→ CTA Click
→ Apply Start
→ Apply Submit
→ Scheduler View
→ Booking
```

This means:
- traffic alone is not success
- page engagement alone is not success
- CTA click alone is not success
- the system only works fully when attention moves into booking

## 3. What Good Looks Like

This section defines the signals of a healthy system.

### Healthy Traffic

- sessions are growing on pillars, services, local pages, and case studies
- traffic is not concentrated on low-intent pages only
- authority pages feed commercial pages and `/apply`

### Healthy Intent

- visitors click CTAs from content pages, not only from the homepage
- case study pages generate meaningful CTA activity
- service pages generate stronger CTA intent than purely informational pages

### Healthy Funnel

- users who reach `/apply` are starting the form
- most users who start the form are reaching late steps
- the drop-off between steps is not concentrated in one stage

### Healthy Booking Layer

- users who submit are reaching the success page
- users are interacting with the scheduling layer
- fallback usage stays low unless the embed has a problem

## 4. What to Watch Closely

These are the highest-value diagnostic comparisons.

### By Page Type

Compare:
- homepage
- pillar pages
- cluster pages
- service pages
- local pages
- case studies

Questions to ask:
- Which page types produce the highest CTA click rate?
- Which pages produce the most `apply_start` events?
- Which content assets produce the best downstream conversion, not just traffic?

### By CTA Location

Compare:
- hero
- mid-content
- sticky
- footer
- header

Questions to ask:
- Which CTA location is driving action most efficiently?
- Are users needing repeated prompts before acting?
- Are some CTA locations being ignored entirely?

### By Funnel Step

Compare:
- start rate
- progression by step
- submit rate

Questions to ask:
- Where is the largest drop-off?
- Is the issue early hesitation or late abandonment?
- Does step friction align with question complexity or perceived effort?

## 5. Decision Rules

Use these rules to interpret the data and decide what to do next.

### Scenario A: Traffic Up, CTA Clicks Low

Meaning:
- content is being discovered
- conversion prompts are too weak or too late

Likely action:
- strengthen in-line CTA placement
- improve transition from insight to action
- tighten trust and urgency language

### Scenario B: CTA Clicks High, Apply Start Low

Meaning:
- users are interested
- the apply page may still feel too heavy, unclear, or low-trust

Likely action:
- simplify hero messaging on `/apply`
- tighten the framing around effort and fit
- increase trust reinforcement at the top of the apply page

### Scenario C: Apply Start High, Drop-Off Mid-Form

Meaning:
- users are entering the funnel
- one or more form steps are causing friction

Likely action:
- identify the exact step with the steepest loss
- shorten or simplify that step
- improve microcopy and expectation framing

### Scenario D: Apply Submit High, Booking Weak

Meaning:
- the funnel is capturing leads
- the booking handoff is underperforming

Likely action:
- improve success page clarity
- improve scheduler visibility and trust
- check embed performance and fallback usage

### Scenario E: Case Study Engagement High, Conversion Low

Meaning:
- proof is being consumed
- proof is not yet pushing users forward strongly enough

Likely action:
- move CTAs closer to results
- tighten proof-to-offer transitions
- strengthen metric emphasis and next-step framing

## 6. Priority Dashboard Views

The dashboard should be reviewed through these views first.

### Weekly View

Use for:
- top-level performance check
- traffic and conversion trend monitoring

Watch:
- sessions
- CTA clicks
- apply starts
- apply submits
- schedule views

### Page Performance View

Use for:
- identifying strongest and weakest pages

Watch:
- page views by route
- CTA clicks by route
- `apply_start` assisted by route

### Funnel View

Use for:
- identifying form friction

Watch:
- `apply_start`
- `apply_step`
- `apply_submit`
- submit-to-scheduler rate

### Booking View

Use for:
- success-page and scheduler diagnostics

Watch:
- `schedule_view`
- `schedule_click`
- booked session count once available

## 7. Actions the Team Should Take

The dashboard is useful only if it drives action.

Recommended workflow:

1. Review traffic and CTA click distribution weekly.
2. Identify the strongest and weakest conversion pages.
3. Review apply funnel drop-off by step.
4. Review booking-layer engagement.
5. Choose one optimization at a time:
   - CTA placement
   - CTA copy
   - trust language
   - form friction
   - success-page booking clarity
6. Re-measure after changes.

## 8. Future Expansion

The current analytics system supports the first practical interpretation layer.

Recommended future additions:
- booked-session event tracking
- scroll-depth measurement
- source-to-conversion attribution
- page-assisted conversion reporting
- A/B testing for CTA copy and placement
- lead-quality tagging inside CRM or pipeline systems

The current objective is simple:

Use the site data to understand where attention turns into intent, where intent turns into application, and where application turns into booked conversations.
