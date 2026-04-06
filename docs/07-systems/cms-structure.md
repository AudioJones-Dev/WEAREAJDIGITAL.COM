# CMS Structure

## Purpose
Outlines the architecture of Content Management Systems powering the dynamic elements of the site.

## Content Types
- **Blog Posts:** Title, Slug, Body, Excerpt, Cover Image, Category, Author, Publish Date.
- **Case Studies:** Title, Client Logo, Problem, Solution, Results, Metric Highlights.
- **Services:** Name, Icon, Description, Core Deliverables list.

## Data Fetching Strategy
- Static Site Generation (SSG) with App Router (`fetch` caching).
- Incremental Static Regeneration (ISR) configuration.

## Editors & Permissions
- Access control list for content editors vs. administrators.
- Draft vs. Published states workflows.
