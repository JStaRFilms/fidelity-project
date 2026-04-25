# Builder Prompt

You are salvaging an existing mixed-architecture financial-services web mockup into a Vercel-deployable, serverless Next.js PWA.

## Current Observations

- The repository contains a root static HTML app, a separate `backend/` Express app, and a `nextjs-app/` Next.js app.
- The screenshot shows the deployed site is a wrapper page that expects a local Next.js server and says: `Next.js server not found. Please start: cd nextjs-app && npm run dev`.
- Vercel cannot run a persistent Express server or a second local dev server inside a static deployment.
- The canonical deploy target should become `nextjs-app/`, with Vercel configured to build that directory.

## MUS Priority Order

1. Make `nextjs-app/` the single canonical deployable app root.
2. Convert required Express endpoints into `nextjs-app/app/api/**/route.ts` route handlers.
3. Remove runtime assumptions that another local server is running.
4. Preserve existing UI and routes where feasible.
5. Add PWA manifest, icons, installability metadata, and service worker strategy.
6. Run `python scripts/vibe-verify.py` before handoff.

## Special Considerations

- Do not laugh at or discard the existing work; salvage incrementally.
- Do not expose fake financial/account actions as real production features.
- If MongoDB is retained, use a serverless-safe connection helper and environment variables in Vercel.
- Prefer Server Components by default and small Client Components only where interactivity requires them.
- Keep the legacy root files available until parity is confirmed, but do not deploy the root wrapper as the production app.
