# Vercel Deployment Root Fix

## Goal

Make Vercel detect and build the real Next.js application instead of evaluating the repository root placeholder package.

## Context

The Vercel build log shows the install command running inside `nextjs-app`, but framework detection still checks the repository root. The root `package.json` is currently empty, so Vercel reports:

`No Next.js version detected. Make sure your package.json has "next" in either "dependencies" or "devDependencies".`

This directly affects:

- FR-001: Repository architecture cleanup and canonical app root
- FR-002: Vercel serverless deployment compatibility
- FR-006: Verification and deployment checks

## Components

### Client

No client UI behavior changes.

### Server

No API or serverless route behavior changes.

### Deployment Config

- Root `package.json` should proxy install/build/dev/start/lint scripts to `nextjs-app`.
- Root `package.json` should expose the Next.js dependency so Vercel framework detection succeeds from the repository root.
- Root `vercel.json` should use root-level package scripts rather than shelling into `nextjs-app` manually.
- `nextjs-app` remains the canonical application source directory.

## Data Flow

No application data flow changes.

## Database Schema

No database schema changes.

## Verification Plan

- Run `npm run build` from the repository root.
- Confirm Vercel can detect Next.js from the root package manifest.
- Keep the existing `nextjs-app` build flow intact.

## Implementation Notes

- Prefer a minimal configuration patch over moving files.
- Avoid changing lockfiles unless the package manager requires it during verification.
