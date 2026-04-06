---
title: "Apply Submission System"
description: "Documentation for the backend submission architecture powering the AJ Digital client acquisition funnel."
date: 2024-04-04
---

# Apply Submission System

The `/apply` funnel is the primary lead acquisition engine for AJ Digital. This document outlines the backend ingestion layer responsible for receiving, validating, and alerting the business of new inbound qualifiers.

## 1. System Architecture

- **Frontend Client (`/src/app/apply/ApplyForm.tsx`)**: The UI component responsible for capturing lead context. Submits a JSON POST request to `/api/apply`.
- **Validation Engine (`/src/lib/apply-schema.ts`)**: Enforces strict Data Type matching via Zod. If the exact keys and data limits are not met, the request bounces before ever hitting external services.
- **API Endpoint (`/src/app/api/apply/route.ts`)**: The Next.js Edge-compatible route handler. Routes validated requests into the notification layer.
- **Notification Abstraction (`/src/lib/email.ts`)**: The email sending layer powered by `resend`. Triggers targeted business alerts natively, ensuring leads don't die unread in a database.

## 2. Environment Considerations

For the backend to send physical emails, ensure `.env.local` or the production environment has configured:

```env
RESEND_API_KEY=re_123456789...
APPLY_NOTIFICATION_EMAIL=dev@audiojones.com
EMAIL_FROM="Acquisitions <onboarding@resend.dev>"
```

*Note: In local development, if `RESEND_API_KEY` is not present, the `email.ts` wrapper falls back gracefully to `console.log()` to simulate email delivery without crashing the testing flow.*

## 3. Extending the Pipeline

Because of how the API route is laid out, the system acts as a standard pipeline where additional nodes can be inserted before redirection:

1. Validate input (Done)
2. **[FUTURE] Sync lead to Airtable/CRM**
3. **[FUTURE] POST payload to `n8n` webhook for automation**
4. Send notification email (Done)
5. Inform client of success state, triggering UI redirect (Done)

## 4. Next Steps

- Integrate the native booking module inside `/apply/success` to capture the call on the same active-session.
- Instrument analytics tracking to measure funnel completion rate vs abandons.
