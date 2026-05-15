You are a senior Next.js engineer working inside an existing AJ Digital website project.

Project root:
C:\dev\we-are-aj-digital-web

Your task is to implement the AJ Digital apply flow logic so qualified leads are redirected to Calendly after submission.

Calendly URL:
https://calendly.com/audiojones-ajdigital/30min

You must inspect the existing project first, especially:
- the /apply route implementation
- any existing form components
- any constants/config files
- any docs related to the apply page

Relevant docs likely include:
C:\dev\we-are-aj-digital-web\docs\01-pages\apply-page.md
and any related funnel or conversion docs already created.

---

# OBJECTIVE

Implement a typed, maintainable qualification and redirect flow for `/apply`.

The system must:

1. collect form values from the apply page
2. evaluate whether the lead is qualified
3. redirect qualified leads to Calendly
4. show a lower-friction fallback state for non-qualified leads
5. keep the logic centralized and reusable

This is not just a form submit.
This is a lead qualification gateway.

---

# REQUIRED BEHAVIOR

## Qualified leads
If the lead meets the qualification logic, redirect them to:

https://calendly.com/audiojones-ajdigital/30min

## Non-qualified leads
Do NOT redirect them to Calendly.

Instead:
- keep them on-page or route to a soft success state
- show a helpful message
- provide next steps
- link to:
  - /contact
  - /blog

---

# QUALIFICATION LOGIC

Implement starter qualification rules using these fields:

## Budget
Qualified if budget is one of:
- $1,500-$3,000
- $3,000-$5,000
- $5,000+

## Timeline
Qualified if timeline is one of:
- ASAP
- Within 30 days
- Within 60 days

## Decision maker status
Qualified if decision maker is one of:
- Yes
- Partially

## Qualification rule
A lead is qualified if:
- budget qualifies
- timeline qualifies
- decision maker qualifies

Implement this in a reusable helper function.

---

# IMPLEMENTATION PLAN

## 1. Inspect existing apply page implementation
Check whether these already exist:
- app/apply/page.tsx
- components/forms or apply form components
- server actions / route handlers
- constants/config files

If they do exist, extend them cleanly.
If they do not exist, create a minimal clean implementation.

---

## 2. Create centralized constants
Add a shared constants/config location if one does not already exist.

Suggested:
- lib/config/site.ts
or
- lib/constants/links.ts

Required constant:

```ts
export const CALENDLY_STRATEGY_SESSION_URL =
  "https://calendly.com/audiojones-ajdigital/30min";
```

Optional helpful constants:

```ts
export const CONTACT_PATH = "/contact";
export const BLOG_PATH = "/blog";
export const APPLY_PATH = "/apply";
```

---

## 3. Create typed form value definitions

Create or extend a shared type for apply form values.

Suggested shape:

```ts
export type ApplyFormValues = {
  fullName: string;
  email: string;
  phone?: string;
  companyName: string;
  websiteUrl?: string;
  primaryServiceInterest: string;
  secondaryServiceInterests?: string[];
  businessType: string;
  mainGoal: string;
  problemSummary: string;
  existingContentEngine: string;
  region: string;
  city: string;
  deliveryMode: string;
  engagementType: string;
  budgetRange: string;
  timeline: string;
  decisionMakerStatus: string;
  additionalNotes?: string;
};
```

Use existing names if the project already has them, but keep typing strict.

---

## 4. Create reusable qualification helper

Suggested file:

- lib/apply/qualification.ts

Implement:

```ts
export type QualificationResult = {
  qualified: boolean;
  reasons: string[];
};

export function evaluateApplyQualification(
  values: ApplyFormValues
): QualificationResult
```

Behavior:

- return `qualified: true` only if all 3 rules pass
- include human-readable reasons in the result
- keep logic easy to adjust later

Example reasons:

- "Budget qualifies"
- "Timeline qualifies"
- "Decision authority qualifies"
- or
- "Budget below current qualification threshold"

---

## 5. Integrate into the form submission flow

After the apply form submits successfully:

### If qualified:

- optionally show a short success state like:
  - "You look like a strong fit. Redirecting you to booking..."
- redirect to the Calendly URL

### If not qualified:

- do not redirect
- show a message like:

Headline:
Thanks - we got your application

Body:
You may be earlier in the process or not quite at the right stage for a strategy session yet. Start with our blog or contact us directly and we’ll point you in the right direction.

Buttons:

- Explore the Blog -> /blog
- Contact Us -> /contact

---

# UX REQUIREMENTS

## Required UX behavior

- Disable submit button while submitting
- Prevent duplicate submissions
- Show clear success/fallback state
- Keep the page feeling premium and clean
- Do not abruptly fail silently

## Optional enhancement

If helpful, add a 1-2 second delay before redirect so the user sees confirmation.

Example:

- submit
- success state
- redirect to Calendly

---

# FILE ORGANIZATION

Use or create clean files like these:

- app/apply/page.tsx
- components/apply/ApplyForm.tsx
- components/apply/ApplySuccessState.tsx
- lib/apply/qualification.ts
- lib/config/site.ts

You may adapt to existing project conventions, but do not scatter logic randomly.

---

# IF THE APPLY PAGE DOES NOT EXIST YET

Create a minimal clean implementation that includes:

- a typed apply form
- required fields for budget/timeline/decision maker
- submit handling
- qualification evaluation
- Calendly redirect behavior
- fallback state for non-qualified leads

It does not need to be the final polished design, but it must be functional and aligned to the AJ Digital apply funnel.

---

# CODE QUALITY RULES

- TypeScript throughout
- no `any`
- no duplicated qualification logic
- no hardcoded URLs in multiple places
- no giant monolithic page component if avoidable
- use clean component props
- add short comments only where useful

---

# OUTPUT

Do the work directly in the repo.

Then provide a concise final summary including:

1. files created
2. files modified
3. where the qualification logic lives
4. where the Calendly constant lives
5. how the redirect works
6. any assumptions or blockers

---

# FINAL STANDARD

The implementation succeeds when:

- serious buyers get routed straight to booking
- lower-fit leads do not clog the calendar
- the code is clean and easy to evolve later
- Calendly is integrated as the booking endpoint without UX clutter

Start by inspecting the existing apply page and related files first, then implement the flow.
