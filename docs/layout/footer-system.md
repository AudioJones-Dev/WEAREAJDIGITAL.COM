# Footer System Architecture (`SiteFooter`)

**Location:** `src/components/site-footer.tsx`

## 1. Top-Level Footer Architecture
The site footer acts as a massive anchor for internal linkage and PageRank circulation throughout the authority ecosystem. It fundamentally grounds bottom-of-page users and reroutes them backward upwards into the conversion matrix.

It operates on a strictly partitioned **5-Column Design Structure**:
* **Brand Column**: Immediately roots the positioning statements (`"Podcast, AI, and content systems for authority-driven businesses."`) and injects a heavy ghost-button variation of the Application Funnel.
* **Services**: Maps the 3 pure-commercial vertical offerings. 
* **Resources**: Drives traffic into the high-conversion overarching blog guides (Podcast Guide, Content Repurposing Guide).
* **Local Delivery**: Hard-codes links terminating in Miami-centric map pack targeting landing pages, reinforcing local SEO weight on every single page load.
* **Company/Legal**: Standard boilerplate trust requirements (About, Contact, Privacy, Terms).

## 2. Persistent Internal Linking Logic
We actively inject `Next/Link` references for *all* core architectural hubs here because standard Google crawlers afford extreme, persistent value to URLs repeated within structural global navigation parameters. 
* Do not spam the footer with individual minor blog posts. 
* Only place categorical entry points (e.g. Pillar Guides, Specific high-weight Local Pages) inside these links. 

## 3. Future Expansion Constraints
If additional branches (e.g., "Austin Local Delivery") or new Services ("Newsletter Management") are created:
1. They must slot hierarchically within an existing 5-column layout. Adding a 6th or 7th column risks overflowing container limits on standard laptop resolutions. 
2. If columns grow too deep vertically (more than 8 links per column), deploy a top-level hub `page.tsx` directly above them rather than dumping all minor pages sequentially to maintain clean visual aesthetic hierarchies.
3. Keep the visual contrast exceptionally low (e.g. `text-neutral-400` with `hover:text-blue-400`) to prevent drawing focus away from primary content zones throughout the actual page `<main>` body above block.
