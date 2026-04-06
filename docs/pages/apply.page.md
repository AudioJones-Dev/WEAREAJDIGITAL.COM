# Apply Funnel Page Logic (`/apply`)

**Target:** Qualification Funnel
**Goal:** Filter unqualified prospects and structure data capture for sales/strategy calls.

---

# Architecture
The apply funnel is built on Next.js App Router using a hybrid strategy:
1. **Server Component (`page.tsx`)**: Wraps the layout, manages E-E-A-T trust signals (the Who Is This For matrix), and injects `WebPage`, `BreadcrumbList`, and `Organization` JSON-LD schemas.
2. **Client Component (`ApplyForm.tsx`)**: Manages the 7-step multi-form UI, validation locking, state progression, and scrolling UX. It isolates rendering state so SEO metadata is unaffected.
3. **Success Node (`success/page.tsx`)**: The exit node routing for after successful form validation. Explicitly tagged with `noindex` robots instructions to prevent Google crawling the thank-you page. 

---

# Multi-Step Qualification Steps (Data Model)
The form natively creates a state object mapping the exact 7 requested variables:

1. **Identity**: `fullName`, `email`, `phone`, `company`, `website`
2. **Context**: `roleType`, `hasPodcast`
3. **Service Interest**: `servicesInterested` (Multi-select array)
4. **Goals**: `primaryGoal` (Textarea)
5. **Budget**: `monthlyBudget` ($500-$5000+)
6. **Timeline**: `timeline`
7. **Logistics**: `location`, `deliveryMode`

## Validation Protocol
* `fullName`, `email`, and `company` are strictly validated on Step 1.
* All dropdown/radio selections globally trigger validations prior to allowing `Next Step` progression.
* On Step 7, submitting delays briefly (fake API load) before pushing `router.push('/apply/success')`. When back-end infra is attached (n8n/Airtable/Mailchimp), connection hooks inject seamlessly in the `handleSubmit` block.

---

# UX Features
* Progress bar naturally spans across the top of the modal.
* Fast, native form transitions scaling via `animate-in` Tailwind classes.
* Mobile-first rendering with stacked radio/checkbox blocks instead of wide tables.
