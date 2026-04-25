# Task: Genesis foundation: audit salvage goals and create project docs
**Task ID:** genesis-foundation
**Stage:** genesis
**Status:** completed
**Role:** orchestrator
**Preferred Agent:** orchestrator
**Conversation ID:** orchestrator-genesis-foundation
**Workflow:** vibe-genesis
## Context
Parent session: orch-20260425-213303

Task title: Genesis foundation: audit salvage goals and create project docs
## Objective
Establish requirements, issues, coding rules, and verification scaffolding for salvaging the project into a Vercel-deployable serverless PWA.
## Scope
- Inspect existing repo architecture and deployment files
- Create docs/Project_Requirements.md with MUS and Future features
- Create one docs/issues/FR-XXX.md per requirement
- Add coding guidelines and verification script
## Checklist
- [x] Inspect repository
- [x] Define requirements
- [x] Create docs and issues
- [x] Create verify script
## Definition of Done
- Genesis docs exist
- Requirements map 1:1 to issue files
- Next-stage recommendation is clear
## Expected Artifacts
- docs/Project_Requirements.md
- docs/Coding_Guidelines.md
- docs/issues/FR-XXX.md
- scripts/vibe-verify.py
## Dependencies
- None specified.
## Review Checkpoint
Review before implementation handoff or final completion.
## Instructions
- complete the task within scope
- use the listed workflow and skills when they are provided
- report blockers clearly
- if review sends this back, continue using the same conversation id when possible
- summarize what changed and what remains
## Notes
Created Genesis PRD, coding guidelines, issue files FR-001 through FR-009, builder prompt, and verification script. Verification script now targets nextjs-app and handles Windows UTF-8 output. Quick verification currently fails due existing Next.js .next stale route type references and lint issues; these are Build-stage cleanup items.