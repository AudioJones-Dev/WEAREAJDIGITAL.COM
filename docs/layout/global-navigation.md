# Global Navigation Architecture (`SiteHeader` & `MobileNav`)

**Location:** `src/components/site-header.tsx` & `src/components/mobile-nav.tsx`
**Config Data:** `src/components/nav-config.ts`

## 1. Top-Level Nav Architecture
The global navigation routes users through 4 main expansion pillars, alongside direct paths to the conversion flow.
* **Services**: The commercial offerings (Podcast Production, AI Consulting, Content Systems).
* **Results**: Deep linking into the Case Studies index and featured hero case studies.
* **Resources**: Navigating top-of-funnel users toward massive in-depth pillar blog guides for AEO harvesting.
* **Local**: Bridging the national brand to hyper-local South Florida delivery nodes.

*All structural hierarchy data is centrally managed in `nav-config.ts` to prevent DOM duplication.*

## 2. Dropdown Structure (Desktop)
* Uses controlled React state (`isOpen`, `openDropdown`) mounted strictly via standard DOM event-listing handling for "click-outside" logic (via `dropdownRef`).
* Focus states natively mapped utilizing `focus-visible` Tailwind classes to hit WCAG UI standards.
* The visual UX employs dark-themed glassmorphism (`bg-black/80 backdrop-blur-lg`) avoiding stark contrast breaks during scroll.

## 3. Mobile Behavior
* Driven by a distinct `MobileNav` component utilizing full screen slide-over capabilities.
* Fixes `body` scrolling when engaged using native `document.body.style.overflow = "hidden"`.
* Employs large 48px+ tap-target expansions natively separating parent nodes and child nodes, rather than cramming UI into tiny accordion brackets.
* Anchor locked CTA (`/apply`) remains sticky at the bottom of the drawer view, maintaining constant conversion pressure regardless of vertical scroll depth within the drawer menu.

## 4. CTA Rules & Future Expansion
* The Primary CTA (`Apply for a Strategy Session`) sits distinctly on the far right on desktop in high-visibility Blue.
* It must definitively drop directly onto `/apply`.
* **Expansion Rule**: To add a new local region or service, DO NOT touch the view components. Simply modify the array within `nav-config.ts` and the UI will programmatically build the necessary dropdowns and drawer nodes uniformly.
