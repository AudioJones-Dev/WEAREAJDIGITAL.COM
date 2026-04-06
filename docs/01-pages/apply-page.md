# AJ Digital — Apply Page Specification
## URL: /apply
## Purpose: Qualify inbound leads, route serious buyers into a strategy call, and filter out low-fit inquiries before they hit the calendar.

---

# 0. PAGE OBJECTIVE

The `/apply` page is the primary conversion gate for AJ Digital.

It must:
1. Pre-qualify leads before booking
2. Capture service interest, budget, timeline, and delivery mode
3. Route qualified users to scheduling
4. Route lower-intent users to lighter-touch follow-up
5. Feed future CRM and automation workflows cleanly

This page is not a generic contact page.

This page is a qualification funnel.

---

# 1. PRIMARY GOAL

Convert high-intent visitors into booked strategy calls for:
- Podcast Production
- AI Consulting
- Content Systems
- Authority Building

Secondary goals:
- Capture region data for local/service-area routing
- Capture delivery preference (in-studio, on-site, remote)
- Build a clean lead database for n8n and CRM handoff

---

# 2. PAGE SEO META

<title>Apply to Work With AJ Digital | Strategy Call Intake</title>

<meta name="description" content="Apply to work with AJ Digital for podcast production, AI consulting, and content systems. Tell us about your goals, budget, and timeline, then book your strategy call.">

Canonical URL:
https://weareajdigital.com/apply

Robots:
index,follow

---

# 3. PAGE POSITIONING

## H1:
Apply to Work With AJ Digital

## Subheadline:
Tell us what you need, where you’re located, and what you’re building. If it’s a fit, you’ll be directed to book your strategy call.

## Trust Microcopy:
- Built for serious operators
- No fluff, no hard pitch
- Clear next steps after submission

## Optional Support Copy:
We work best with founders, coaches, consultants, creators, churches, and service businesses that want systems — not random content.

---

# 4. PAGE STRUCTURE

The page should follow this order:

1. Hero / Qualification intro
2. Who this is for / not for
3. Multi-step application form
4. What happens next
5. FAQ
6. Secondary contact route

---

# 5. HERO SECTION

## H1:
Apply to Work With AJ Digital

## Body Copy:
If you want podcast production, AI consulting, content systems, or authority-building support, start here. This short application helps us understand your goals, readiness, and fit before we send you to scheduling.

## CTA:
Primary button: Start My Application

## Supporting Note:
Average completion time: 2–4 minutes

---

# 6. FIT FILTER SECTION

## H2:
Who this is for

### Good Fit:
- Founders building authority through content
- Coaches and consultants who need a real content system
- Businesses ready to invest in visibility and infrastructure
- Churches and mission-driven leaders expanding digital reach
- Personal brands who want consistency, repurposing, and growth

### Not a Fit:
- Hobby podcasts with no business objective
- One-off requests with no strategic goal
- DIY-only shoppers looking for the cheapest option
- Brands unwilling to publish consistently
- Leads without a realistic timeline or decision intent

## AEO Answer Block:
AJ Digital is best for businesses and experts who want podcast production, AI consulting, or content systems tied to real outcomes like authority, audience growth, and client acquisition. It is not designed for hobby creators or low-commitment buyers looking for isolated deliverables without strategy.

---

# 7. FORM ARCHITECTURE

Use a multi-step form.

Recommended total steps: 5

Recommended completion time: under 4 minutes

---

# 8. STEP-BY-STEP FORM LOGIC

## STEP 1 — IDENTITY

### Step Title:
Tell us who you are

### Fields:
- Full Name (required)
- Email Address (required)
- Phone Number (optional, but recommended)
- Company / Brand Name (required)
- Website URL (optional)
- Instagram / LinkedIn / YouTube / Podcast URL (optional)

### Notes:
Accept multiple profile URLs in one textarea if needed.

---

## STEP 2 — WHAT YOU NEED

### Step Title:
What are you looking for?

### Fields:
- Primary Service Interest (required, single select)
  - Podcast Production
  - AI Consulting
  - Content Systems
  - Authority Building
  - Not sure yet

- Secondary Service Interests (optional, multi-select)
  - Podcast Editing
  - Show Notes / SEO
  - Content Repurposing
  - Automation / n8n
  - Local SEO / Visibility
  - Personal Brand Strategy
  - Distribution / Publishing
  - Team Workflow / Ops

### Conditional Logic:
If user selects "Not sure yet", show:
- Briefly describe what you’re trying to solve (required)

---

## STEP 3 — BUSINESS READINESS

### Step Title:
What are you building?

### Fields:
- What best describes you? (required)
  - Founder / CEO
  - Coach / Consultant
  - Creator / Personal Brand
  - Church / Ministry Leader
  - Agency / Team
  - Local Service Business
  - Other

- Main Goal (required, single select)
  - Build authority
  - Generate leads
  - Launch a podcast
  - Systemize content
  - Improve production quality
  - Automate operations
  - Grow locally
  - Other

- What is the core problem right now? (required, long text)

- Do you already have a podcast or content engine live? (required)
  - Yes, active
  - Yes, but inconsistent
  - No, starting from scratch

---

## STEP 4 — LOCATION + DELIVERY MODE

### Step Title:
Where are you located and how do you want to work?

### Fields:
- Region (required)
  - Miami-Dade
  - Broward
  - Palm Beach
  - Fort Myers / Lee County
  - Elsewhere in Florida
  - Outside Florida

- Preferred Delivery Mode (required)
  - In-studio
  - On-site at my location
  - Remote
  - Not sure yet

- City / Metro Area (required)
- Are you interested in recurring support or a one-time engagement? (required)
  - Ongoing monthly support
  - One-time build / setup
  - Not sure yet

### Routing Note:
This field set supports future local routing and service-area logic.

---

## STEP 5 — BUDGET + TIMELINE

### Step Title:
Budget and timeline

### Fields:
- Monthly Budget Range (required)
  - Under $500
  - $500–$1,500
  - $1,500–$3,000
  - $3,000–$5,000
  - $5,000+
  - Prefer not to say

- Project Timeline (required)
  - ASAP
  - Within 30 days
  - Within 60 days
  - Within 90 days
  - Just researching

- Are you the decision maker? (required)
  - Yes
  - No
  - Partially

- Anything else we should know? (optional, long text)

---

# 9. FINAL STEP / SUBMISSION STATE

## Button:
Submit My Application

## Submission Confirmation Headline:
Application received

## Confirmation Copy:
Thanks — your application is in. If it looks like a fit, you’ll be directed to the next step immediately or hear from AJ Digital with the right next action.

---

# 10. POST-SUBMISSION ROUTING

This is critical.

## Route A — High Intent / Qualified
If:
- Budget >= $1,500 OR
- Service = Podcast Production / Content Systems / AI Consulting
- Timeline = ASAP / 30 days / 60 days
- Decision maker = Yes or Partially

Then:
- Redirect to scheduling page
- Show headline:
  - You look like a strong fit — book your strategy call
- CTA:
  - Book My Strategy Session
- Scheduling options:
  - Calendly
  - Cal.com
  - Google Calendar booking page

## Route B — Medium Intent
If:
- Budget low but timeline real
- Good fit but uncertain scope

Then:
- Show:
  - We’ll review your application and send the best next step by email
- Trigger internal review

## Route C — Low Intent / Low Fit
If:
- "Just researching"
- Very low budget
- Non-fit use case

Then:
- Route to a lighter path:
  - Contact page
  - Newsletter / resource
  - Free guide
- Suggested message:
  - You may be earlier in the process. Start with our resources, then come back when you’re ready to build.

---

# 11. EMAIL HANDLING

On submit, send:

## Internal Notification Email
To:
- leads@weareajdigital.com

Subject:
New AJ Digital Application — [Full Name] — [Primary Service Interest]

Include:
- All form fields
- Timestamp
- Qualification summary
- Suggested lead score
- Direct link to CRM record later

## User Confirmation Email
Subject:
We got your AJ Digital application

Body should include:
- Confirmation received
- What happens next
- Booking link if qualified
- Support email if needed

---

# 12. DATA MODEL / FIELD NAMES

Use stable field names for future automation.

```json
{
  "full_name": "",
  "email": "",
  "phone": "",
  "company_name": "",
  "website_url": "",
  "profile_urls": [],
  "primary_service_interest": "",
  "secondary_service_interests": [],
  "problem_summary": "",
  "business_type": "",
  "main_goal": "",
  "has_existing_content_engine": "",
  "region": "",
  "city": "",
  "delivery_mode": "",
  "engagement_type": "",
  "budget_range": "",
  "timeline": "",
  "decision_maker_status": "",
  "additional_notes": "",
  "submitted_at": ""
}
```

---

# 13. LEAD SCORING LOGIC

Use simple starter scoring.

## Score Inputs:

* Budget
* Timeline
* Service interest
* Decision authority
* Existing business presence

## Example Model:

* Budget $1,500–$3,000+: +3
* Timeline within 30 days: +2
* Decision maker yes: +2
* Podcast Production / AI Consulting / Content Systems: +2
* Existing site or audience presence: +1

### Score Bands:

* 0–2 = low intent
* 3–5 = medium intent
* 6–10 = high intent

This score should not be shown publicly.

---

# 14. UI / UX RULES

## Requirements:

* Single-column layout on mobile
* Progress indicator at top
* Save answers between steps if possible
* Clear back / next buttons
* Minimal friction
* Strong spacing and typography
* No massive wall of copy above the form

## Tone:

* Premium
* Direct
* Clear
* Strategic
* Not needy or overhyped

---

# 15. FAQ SECTION

## H2:

Questions before you apply?

### H3:

How long does the application take?

Answer:
The application usually takes 2 to 4 minutes. We only ask for the information needed to understand your goals, fit, timeline, and service needs before directing you to the right next step.

### H3:

Will I be able to book a call right away?

Answer:
Qualified applicants can be directed to scheduling immediately after submission. If your project needs review first, AJ Digital will follow up with the best next step by email.

### H3:

Do you work with clients outside South Florida?

Answer:
Yes. AJ Digital works locally across Miami-Dade, Broward, Palm Beach, and Fort Myers, and also supports remote clients in other markets when the fit is right.

### H3:

What if I’m not sure which service I need?

Answer:
That’s fine. You can choose “Not sure yet” in the form and describe the problem you’re trying to solve. The goal is to match you to the right solution, not force a pre-defined package.

### H3:

Is this the same as the contact page?

Answer:
No. The apply page is for qualified project inquiries. The contact page is for general questions, partnerships, media requests, or lighter-touch outreach.

### H3:

What happens after I submit?

Answer:
After submission, you’ll either be routed to book a strategy call immediately or receive a follow-up with the right next action based on your project fit, budget, and timeline.

---

# 16. SECONDARY CONTACT ROUTE

At the bottom of the page, include a smaller section:

## H2:

Not ready to apply?

## Copy:

If you have a general question, partnership inquiry, or media request, use the regular contact page instead.

## CTA:

Go to Contact Page → /contact

---

# 17. INTERNAL LINKING

This page should receive links from:

* Homepage hero CTA
* All service pages
* Case study pages
* Primary blog CTAs
* Final CTA blocks across the site

This page should link out to:

* /contact
* /services/podcast-production/
* /services/ai-consulting/
* /services/content-systems/
* /services/authority-building/

Optional support links:

* /resources/free-content-audit/
* /blog/podcast-production-cost/

---

# 18. SCHEMA RECOMMENDATIONS

Recommended:

1. Organization schema
2. FAQPage schema
3. BreadcrumbList schema

Do not force unsupported schema types.

---

# 19. ANALYTICS EVENTS

Track:

* apply_page_view
* apply_start
* apply_step_1_complete
* apply_step_2_complete
* apply_step_3_complete
* apply_step_4_complete
* apply_step_5_complete
* apply_submit
* apply_qualified_redirect
* apply_contact_route_click

---

# 20. N8N / CRM HANDOFF NOTES

Design this page so the form payload can later feed:

* n8n webhook
* Airtable
* HubSpot
* Pipedrive
* Google Sheets
* Gmail / Google Workspace notifications

Each submission should be automation-ready without field renaming.

---

# 21. BUILD NOTES FOR NEXT.JS

Recommended route:

* /app/apply/page.tsx

Recommended supporting components:

* ApplyHero
* FitFilterSection
* MultiStepApplicationForm
* ApplyFAQ
* SecondaryContactCTA

Recommended server actions / API:

* validate submission
* save payload
* send internal email
* send confirmation email
* return routing result

---

# 22. FINAL STANDARD

This page succeeds when it:

* filters low-fit leads
* captures clean sales intelligence
* books strategy calls from serious buyers
* supports local routing
* feeds future automation cleanly
* feels premium and simple
