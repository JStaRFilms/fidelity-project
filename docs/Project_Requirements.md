# Project Requirements Document

## Project Overview

**Name:** Prudence / Fidelity Project Salvage
**Mission:** Convert the current mixed static HTML + Express + partial Next.js codebase into a clean Vercel-deployable Next.js application with serverless backend endpoints and PWA install support.
**Tech Stack:** Next.js App Router, TypeScript, React, Tailwind/CSS, Vercel Serverless Functions via `app/api`, optional MongoDB-compatible serverless data layer, PWA manifest/service worker.

## Functional Requirements

| FR ID | Description | User Story | Status |
| :--- | :--- | :--- | :--- |
| FR-001 | Repository architecture cleanup and canonical app root | As a maintainer, I want one clearly documented deployable Next.js app root, so that Vercel builds the real application instead of a wrapper or placeholder. | MUS |
| FR-002 | Vercel serverless deployment compatibility | As a maintainer, I want the backend behavior converted from a long-running Express server to serverless-compatible Next.js route handlers, so that the app deploys successfully on Vercel. | MUS |
| FR-003 | Preserve and stabilize the existing public-facing Fidelity-style UI | As a user, I want the existing pages and navigation to remain usable after cleanup, so that the salvage does not discard prior work. | MUS |
| FR-004 | Authentication/account API salvage plan | As a user, I want login and account-related flows to either work safely or be clearly disabled, so that the app does not present broken financial actions. | MUS |
| FR-005 | PWA installability for Chrome mobile | As Anna, I want to open the app in Chrome on my phone and install it from the browser, so that it behaves like a lightweight app. | MUS |
| FR-006 | Verification and deployment checks | As a maintainer, I want repeatable local checks for type-check, lint, build, and PWA assets, so that deployments are predictable. | MUS |
| FR-007 | Full legacy HTML-to-Next route migration | As a maintainer, I want the remaining static HTML pages migrated into typed App Router pages, so that the app has consistent routing and maintainability. | Future |
| FR-008 | Production-grade backend persistence and financial assistant integration | As a user, I want authenticated account data and AI assistant features backed by production-safe services, so that dynamic app features are useful and secure. | Future |
| FR-009 | UX/accessibility polish and mobile app-like refinement | As a mobile user, I want the installed PWA to feel responsive, accessible, and polished, so that it is comfortable to use on a phone. | Future |
