# n8n Workflows

## Purpose
Documents the automated workflows handling data routing, lead notification, and CRM entry.

## Lead Capture Workflow
- **Trigger:** Webhook from `/apply` form submission.
- **Action 1:** Data formatting and enrichment.
- **Action 2:** Add to CRM (e.g., Notion, HubSpot).
- **Action 3:** Send Slack notification to team.
- **Action 4:** Trigger welcome email sequence based on qualification score.

## Content Publishing Workflow
- **Trigger:** New blog post published (via RSS or Webhook).
- **Action:** Auto-share to core social channels via buffer/native APIs.

## System Monitoring
- Error handling strategies for failed webhook executions.
- Fallback webhooks and redundancy.
