# Automation Architecture

## Purpose
High-level overview of all integrated systems and how they communicate across the business stack.

## Front-End Layer
- Next.js application handling rendering and data collection.
- Custom forms linked to API routes.

## Middleware / Automation Layer
- Hosted n8n instance acting as the central nervous system.
- Secure storage of required API keys and OAuth tokens.

## Database & Storage Layer
- Central CRM.
- Marketing automation communication tool.
- Media asset storage (e.g., Cloudinary, Vercel Blob).
