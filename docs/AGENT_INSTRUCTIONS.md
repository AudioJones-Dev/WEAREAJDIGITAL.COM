# AI Agent Developer Instructions

Welcome to the `ajdigital.app` workspace. These instructions are provided to assist AI agents (Claude, Perplexity, Codex, etc.) in operating efficiently within our Next.js App Router codebase.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Architecture Guidelines
- **`src/app/`**: Contains the Next.js App Router files. Use layout files for persistent elements and page files for route components.
- **`src/components/`**: Place all reusable UI components here. Whenever possible, use functional components and Tailwind for styling.
- **`src/lib/`**: Use this for standard utility functions, API connectors, and shared logic.
- **`schema/`**: Refer to this directory for Prisma schemas, TypeScript interfaces, and other core data models.

## Development Rules
1. Always prefer Server Components by default. Include `'use client'` explicitly only when hooks (like `useState`, `useEffect`) or browser APIs are required.
2. Rely on Tailwind utility classes for UI modifications before attempting custom CSS.
3. Keep business logic decoupled from UI components by leveraging `src/lib/`.
