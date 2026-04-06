# Scheduler Handoff System

## Overview

`/apply/success` is the post-conversion booking handoff layer for AJ Digital.

Its job is to:
- receive qualified applicants after form submission
- immediately route them into booking
- reduce drop-off between form completion and scheduled conversation
- provide a graceful fallback if the scheduler cannot load

## Data Flow

1. User submits the apply form at `/apply`
2. `/api/apply` validates the payload and returns a redirect to `/apply/success`
3. `/apply/success` checks `NEXT_PUBLIC_CALENDLY_URL`
4. If the env var is available and valid, the booking embed is displayed
5. If the env var is missing, the page shows the fallback support state
6. If the embed is available but the user has trouble loading it, the fallback booking button is also available

## Env Vars

Required public variable:

- `NEXT_PUBLIC_CALENDLY_URL`

Example format:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle/strategy-session
```

Notes:
- this value must be a full valid URL
- the success page uses it for both the embed and the fallback booking button
- if the value is invalid or missing, the page falls back to support messaging

## Failure Handling

### Missing env
- the embed is not shown
- the page displays a scheduler-unavailable state
- the fallback component tells the user to email `dev@audiojones.com`

### Broken or blocked embed
- the fallback block remains visible below the embed
- if `NEXT_PUBLIC_CALENDLY_URL` exists, users can click `Open Booking Page`
- if the URL does not exist, support falls back to direct email scheduling

## Tracking Prep

The handoff layer includes tracking-ready data attributes for:
- scheduler section reached
- scheduler embed viewed
- fallback booking click

Current attributes:
- `data-track="scheduler-section"`
- `data-track="scheduler-embed-container"`
- `data-track="scheduler-fallback-cta"`

These can be wired into GA4, GTM, or another analytics layer without changing page copy.

## Local Testing Guidance

1. Add `NEXT_PUBLIC_CALENDLY_URL` to local environment configuration
2. Start the app locally
3. Submit the apply form and confirm redirect to `/apply/success`
4. Verify the scheduler renders inside the premium container
5. Test mobile layout and scroll behavior
6. Remove the env var temporarily and confirm the fallback support state appears
7. If the env var exists, confirm the fallback button opens the booking page

## Launch Checklist

- `NEXT_PUBLIC_CALENDLY_URL` is set in the deployment environment
- embed renders correctly on desktop
- embed renders correctly on mobile
- booking confirmation flow has been tested end to end
- fallback state has been tested with the env var removed
- fallback booking button opens the correct scheduler URL
