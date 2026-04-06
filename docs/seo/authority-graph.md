# AJ Digital Authority Graph

Date: April 4, 2026

## Purpose

This document defines the topical authority graph for AJ Digital across:
- blog pillars
- cluster articles
- service pages
- local pages
- case studies

The goal is to improve:
- ranking strength
- crawl clarity
- internal linking density
- AEO extraction likelihood
- conversion routing into `/apply`

## Core Topic Clusters

### 1. Podcast Production

- Pillar page:
  - `/blog/podcast-production-guide`
- Supporting cluster articles:
  - `/blog/podcast-production-cost`
  - `/blog/podcast-production-agency`
  - `/blog/how-to-launch-podcast-business`
  - `/blog/ai-automation-podcast-production`
- Supporting service pages:
  - `/services/podcast-production`
- Supporting local pages:
  - `/podcast-production-miami`
- Supporting proof pages:
  - `/case-studies`
  - `/case-studies/podcast-authority-system`

### 2. Content Systems / Repurposing

- Pillar page:
  - `/blog/content-repurposing-guide`
- Supporting cluster articles:
  - `/blog/content-repurposing-system`
  - `/blog/ai-automation-podcast-production`
  - `/blog/ai-tools-for-content-creation`
- Supporting service pages:
  - `/services/content-systems`
- Supporting local pages:
  - `/content-systems-miami`
- Supporting proof pages:
  - `/case-studies`
  - `/case-studies/podcast-authority-system`

### 3. AI Content Automation

- Pillar page:
  - `/blog/ai-content-automation-guide`
- Supporting cluster articles:
  - `/blog/ai-tools-for-content-creation`
  - `/blog/ai-automation-podcast-production`
  - `/blog/ai-consulting-small-business`
- Supporting service pages:
  - `/services/ai-consulting`
  - `/services/content-systems`
- Supporting local pages:
  - `/ai-consulting-miami`
  - `/content-systems-miami`
- Supporting proof pages:
  - `/case-studies`
  - `/case-studies/podcast-authority-system`

## Visual Graph

```text
Podcast Production Guide
  -> Podcast Production Cost
  -> Podcast Production Agency
  -> How to Launch Podcast Business
  -> AI Automation Podcast Production
  -> Podcast Production Service
  -> Podcast Production Miami
  -> Case Study
  -> Apply

Content Repurposing Guide
  -> Content Repurposing System
  -> AI Automation Podcast Production
  -> AI Tools for Content Creation
  -> Content Systems Service
  -> Content Systems Miami
  -> Case Study
  -> Apply

AI Content Automation Guide
  -> AI Tools for Content Creation
  -> AI Automation Podcast Production
  -> AI Consulting Small Business
  -> AI Consulting Service
  -> Content Systems Service
  -> AI Consulting Miami
  -> Content Systems Miami
  -> Case Study
  -> Apply
```

## Current Cluster-to-Commercial Graph

```text
Podcast Production Cluster
  Podcast Production Cost
    -> Podcast Production Guide
    -> Podcast Production Agency
    -> Podcast Production Service
    -> Apply
  Podcast Production Agency
    -> Podcast Production Guide
    -> Podcast Production Cost
    -> Podcast Production Service
    -> Apply
  How to Launch Podcast Business
    -> Podcast Production Guide
    -> Podcast Production Cost
    -> Podcast Production Service
    -> Apply
  AI Automation Podcast Production
    -> Podcast Production Guide
    -> AI Content Automation Guide
    -> Content Repurposing Guide
    -> Podcast Production Service
    -> AI Consulting Service
    -> Content Systems Service
    -> Case Study
    -> Apply

Content Systems Cluster
  Content Repurposing System
    -> Content Repurposing Guide
    -> Content Systems Service
    -> AI Content Automation Guide
    -> Apply
  AI Automation Podcast Production
    -> Content Repurposing Guide
    -> Content Systems Service
    -> Case Study
    -> Apply
  AI Tools for Content Creation
    -> Content Repurposing Guide
    -> AI Consulting Service
    -> Apply

AI Automation Cluster
  AI Tools for Content Creation
    -> AI Consulting Service
    -> Content Repurposing Guide
    -> Podcast Production Guide
    -> Apply
  AI Automation Podcast Production
    -> AI Content Automation Guide
    -> AI Consulting Small Business
    -> AI Consulting Service
    -> Podcast Production Service
    -> Content Systems Service
    -> Case Study
    -> Apply
  AI Consulting Small Business
    -> AI Content Automation Guide
    -> AI Tools for Content Creation
    -> AI Automation Podcast Production
    -> AI Consulting Service
    -> AI Consulting Miami
    -> Content Systems Service
    -> Case Study
    -> Apply
```

## Internal Linking Rules

### Pillar Must Link To

- all directly relevant cluster articles
- relevant service pages
- relevant local pages
- at least one case study
- `/apply`

### Cluster Must Link To

- parent pillar
- at least 2 sibling clusters
- at least 1 service page
- `/apply`

### Service Must Link To

- related pillar pages
- related cluster pages
- case studies
- local page if one exists
- `/apply`

### Local Must Link To

- parent service page
- parent pillar page
- at least 1 supporting cluster page
- case study where relevant
- `/apply`

### Case Study Must Link To

- all primary relevant services
- at least 1 related pillar
- `/apply`

## Link Gap Analysis

### Missing Pillar Reinforcement

- `/blog/podcast-production-guide` currently links to its core clusters and service page, but it does not appear to reinforce:
  - `/podcast-production-miami`
  - `/case-studies/podcast-authority-system`
  - `/blog/ai-automation-podcast-production`

### Weak Service -> Proof / Local Connections

- `/services/ai-consulting` appears to link to AI pillar and cluster content, but it does not currently reinforce:
  - `/ai-consulting-miami`
  - `/case-studies/podcast-authority-system`
  - `/blog/ai-automation-podcast-production`

- `/services/content-systems` appears to link to pillar and cluster content, but it does not currently reinforce:
  - `/content-systems-miami`
  - `/case-studies/podcast-authority-system`

### Weak Service -> Blog Depth in Podcast Production

- `/services/podcast-production` links to proof and some supporting content, but it should more clearly reinforce:
  - `/blog/podcast-production-guide`
  - `/blog/podcast-production-agency`
  - `/podcast-production-miami`

### Missing Blog -> Case Study Density

- several cluster articles route to `/apply`, but not all of them appear to reinforce the flagship proof layer consistently.
- the strongest case study should be reachable from every major pillar and every commercially relevant cluster.

### Missing Local -> Proof Consistency

- local pages generally route to service and blog content well, but proof-layer consistency should be checked and enforced across all three local routes.

## Priority Fixes

Top 10 internal linking fixes with the fastest SEO impact:

1. Add `/case-studies/podcast-authority-system` to `/blog/podcast-production-guide`.
2. Add `/podcast-production-miami` to `/blog/podcast-production-guide`.
3. Add `/blog/ai-automation-podcast-production` to `/blog/podcast-production-guide`.
4. Add `/ai-consulting-miami` to `/services/ai-consulting`.
5. Add `/case-studies/podcast-authority-system` to `/services/ai-consulting`.
6. Add `/blog/ai-automation-podcast-production` to `/services/ai-consulting`.
7. Add `/content-systems-miami` to `/services/content-systems`.
8. Add `/case-studies/podcast-authority-system` to `/services/content-systems`.
9. Add `/blog/podcast-production-guide` and `/podcast-production-miami` reinforcement to `/services/podcast-production`.
10. Audit every cluster article to ensure at least one proof-layer link and at least two sibling-cluster links are present.

## Anchor Text Strategy

Prefer descriptive anchors that reinforce the topic directly:

- `podcast production service`
- `podcast production cost`
- `podcast production agency`
- `how to launch a business podcast`
- `content repurposing guide`
- `content repurposing system`
- `content systems service`
- `content systems Miami`
- `AI content automation`
- `AI tools for content creation`
- `AI automation for podcast production`
- `AI consulting for small business`
- `AI consulting`
- `AI consulting Miami`
- `podcast authority system case study`
- `Apply for a Strategy Session`

Avoid:

- `click here`
- `learn more`
- `read this`
- `this page`
- `our services`
- other weak generic anchors without topic context

## AEO Optimization Rules

### Answer Structure

- each major section should open with a direct answer in the first paragraph
- definitions should be short, explicit, and extractable
- paragraphs should stay short, usually 1 to 3 sentences

### FAQ Structure

- FAQs should use natural-language question headings
- each answer should be 2 to 3 sentences
- answers should prioritize clarity over flourish
- each FAQ block should reinforce the parent topic and the commercial path

### List and Table Usage

- use tables for comparison, process, pricing, and workflow breakdowns
- use numbered lists for frameworks and process steps
- use flat bullet lists for use cases, mistakes, and outcomes
- every table or list should support extractability, not just visual variety

### Commercial Routing

- every authority page should route to at least one relevant service page
- every commercial page should route back to authority content
- proof pages should sit between authority and conversion wherever possible

## Future Expansion Map

### Next 5 Cluster Articles for Podcast Production

- Podcast Recording Setup for Business Shows
- Podcast Episode Workflow for Small Teams
- Remote Podcast Production for Founders
- Video Podcast Production for Brand Growth
- Podcast Distribution Strategy for B2B Brands

### Next 5 Cluster Articles for Content Systems / Repurposing

- How to Turn a Webinar Into 20 Content Assets
- Founder-Led Content System for Small Teams
- Content Distribution Workflow for Repurposed Assets
- Video to Blog Workflow for SEO Teams
- Content Operations System for Service Businesses

### Next 5 Cluster Articles for AI Content Automation

- AI Workflow Automation for Small Business Content Teams
- ChatGPT Workflows for Content Operations
- AI Knowledge Systems for Service Businesses
- AI Research Workflow for Content Strategy
- AI SOPs for Founder-Led Marketing Teams

### Next Potential New Pillar

- `AI Consulting Guide for Businesses`

Reason:
- it would strengthen the commercial bridge between AI content automation, AI consulting service intent, and local AI acquisition pages.
- it would also create a clearer parent node for small-business, workflow, and implementation-focused AI clusters.
