# Content Population Priority System

**Strategic Objective:** Move AJ Digital from structurally complete immediately into "Launch Ready" status without burning engineering time on low-impact peripheral pages. **No empty pages should be visible to a user hitting the front door.**

---

## 1. Ranked Priority Matrix

### TIER 1 — Launch-Critical
*Pages that must be fully populated before soft launch to prevent immediate user drop-off.*

*   **`/services/*` (Podcast, AI, Content Systems)**
    *   **Why:** These are the primary commercial endpoints. If a user clicks these from the global header and sees a placeholder, trust hits zero.
    *   **Missing:** Exact tactical copy, final pricing/structural tables, direct media embeds, explicit internal links to `/apply`.
*   **Local SEO Grid (`/*-miami`)**
    *   **Why:** These feed directly off the footer and are crucial for Day 1 local map pack linkage. They must be live.
    *   **Missing:** Geo-modified H1/H2s, specific local FAQs, Google Business Profile Map embed logic.
*   **`/app/apply` (Backend Integration)**
    *   **Why:** A form UI is useless if it goes nowhere. 
    *   **Missing:** The webhook/CRM connection in `ApplyForm.tsx` must be hard-wired, and the calendar embed must be dropped into `/apply/success`.

### TIER 2 — Revenue-Critical
*Pages that materially improve conversion and trust.*

*   **`/case-studies/podcast-authority-system`**
    *   **Why:** This is the flagship trust asset linked globally. 
    *   **Missing:** Real before/after data points, client quotes, exact asset output numbers.
*   **`/blog/podcast-production-cost/`**
    *   **Why:** A bottom-of-funnel objection handler. Sales calls will fail if the prospect experiences sticker shock.
    *   **Missing:** Full article build out framing AJ Digital vs. cheap editors vs. massive agencies.

### TIER 3 — Authority Expansion
*Pages that deepen SEO/AEO authority but will not kill a Phase 1 launch if absent.*

*   **`/blog/` (Index Page)**
    *   **Why:** Needed to house pillars, but we have no pillars yet.
    *   **Missing:** Data-driven grid UI similar to Case Studies.
*   **Blog Pillars (Podcast Guide, Repurposing Guide, AI Guide)**
    *   **Why:** Massive AEO net. 
    *   **Missing:** 3,000+ words of structured, markdown-heavy, schema-injected copy.

### TIER 4 — Future / Nice-to-Have
*Pages that can wait without hurting launch readiness.*

*   **Secondary Blog Clusters (`/ai-tools-for-content-creation`, etc.)**
    *   **Why:** Granular keyword plays. Build these organically post-launch to continually feed the Pillars.

---

## 2. Recommended Build Order

### Phase 1 — Launch Readiness
1. **Route:** `ApplyForm.tsx` & `/apply/success`
   * **Action:** Connect form state to CRM webhook. Embed calendar.
   * **Reason:** Ensures lead capture mechanisms are 100% active.
2. **Route:** `/services/*`
   * **Action:** Populate final sales wireframes.
   * **Reason:** Plugs the hole under the primary navigation logic.

### Phase 2 — Conversion Reinforcement
3. **Route:** `/*-miami` (Local Pages)
   * **Action:** Finalize local variables and inject schema.
   * **Reason:** Secures the local acquisition pipeline.
4. **Route:** `/case-studies/podcast-authority-system`
   * **Action:** Load final asset proof and text.
   * **Reason:** Seals the trust gap.

### Phase 3 — Authority Expansion
5. **Route:** `/blog/`
   * **Action:** Build the Index UI structure.
   * **Reason:** Prepares the housing for inbound top-of-funnel nets.
6. **Route:** `/blog/podcast-production-cost/`
   * **Action:** Build and launch.
   * **Reason:** Strongest conversion-assist asset.
7. **Route:** Core Blog Pillars (x3)
   * **Action:** Write, format, schema-inject, and publish.
   * **Reason:** AEO capture.

### Phase 4 — Scale / Automation
8. **Route:** Minor Blog Clusters
   * **Action:** Batch content generation.
   * **Reason:** Scale traffic.

---

## 3. Content Gap Definitions

If a page moves out of "Missing/Structural" into "Done", it MUST achieve the following:

**For a Service Page, “done” means:**
- [ ] Hero complete with exact value prop.
- [ ] Comparison table constructed.
- [ ] FAQ populated and `FAQPage` schema injected.
- [ ] Internal links to `/apply` and `/case-studies` functional.
- [ ] No placeholder text visible.

**For a Local Page, “done” means:**
- [ ] `LocalBusiness` JSON-LD schema injected.
- [ ] Heavy geo-modifiers (Miami-Dade, Broward) in H-tags.
- [ ] Service area references mapped out textually.
- [ ] Linked dynamically into the global footer.

**For a Blog Article, “done” means:**
- [ ] Output complies strictly with `docs/03-blog/article-template.md`.
- [ ] Metadata explicitly crafted.
- [ ] `Article` schema injected.
- [ ] Internal links to Service/Local pages verified.

---

## 4. The Next 10 Builds

1. **Asset:** `/apply` Form Webhook
   * **Action:** Connect React state to an active endpoint.
   * **Why now:** Ensures we don't lose leads.
2. **Asset:** `/apply/success` Calendar
   * **Action:** Drop in a live scheduling widget.
   * **Why now:** Completes the funnel loop.
3. **Asset:** `/services/podcast-production`
   * **Action:** Write final page copy.
   * **Why now:** Highest priority commercial offering.
4. **Asset:** `/services/content-systems`
   * **Action:** Write final page copy.
   * **Why now:** Second most profitable offering.
5. **Asset:** `/services/ai-consulting`
   * **Action:** Write final page copy.
   * **Why now:** Closes out the core dropdown UI.
6. **Asset:** `/podcast-production-miami`
   * **Action:** Lock in local SEO text.
   * **Why now:** Maps directly to our primary service.
7. **Asset:** `/content-systems-miami`
   * **Action:** Lock in local SEO text.
   * **Why now:** Supports local capture.
8. **Asset:** `/ai-consulting-miami`
   * **Action:** Lock in local SEO text.
   * **Why now:** Seals the footer linking structure.
9. **Asset:** `/blog/page.tsx`
   * **Action:** Structure the dynamic Index grid.
   * **Why now:** Prep for heavy content scale.
10. **Asset:** `/blog/podcast-production-cost`
    * **Action:** Build out the first core MoFu article.
    * **Why now:** Solves high-friction sales arguments pre-call.
