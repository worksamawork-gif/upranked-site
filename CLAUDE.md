# Claude Instructions — upranked.io

## After Every Major Change

After completing any significant change (new page, design update, content change, technical fix, new feature, workflow change), automatically:

1. **Update `CURRENT_PROJECT_STATE.md`** — move completed items from pending to done, add new pending items if discovered
2. **Update `MASTER_CONTEXT.md`** — if contacts, services, tech stack, or business info changed
3. **Update `PROJECT_MAP.md`** — if routes, files, or external systems changed
4. **Update the relevant `_knowledge/` file** — whichever section covers what changed:
   - New workflow → `_knowledge/workflows/`
   - New SOP → `_knowledge/sops/`
   - Brand/design change → `_knowledge/brand/`
   - Content change → `_knowledge/content-strategy/`
   - Asset added → `_knowledge/assets/asset-registry.md`
   - Automation change → `_knowledge/automation/`
5. **Update Claude's persistent memory** (`C:\Users\Admin\.claude\projects\...\memory\`) if the change affects how future sessions should behave

Do this as part of the same commit when possible. If the change is code-only (no docs to update), skip this.

## Deployment Reminder

After every code change, run:
```bash
npm run build:seo
rm -rf dist/public/__manus__
git add dist/public [changed source files]
git commit -m "..."
git push origin main
```

Netlify does NOT auto-build from source. `dist/public` must be committed.

## Project Context

See `MASTER_CONTEXT.md` for full project context before starting any session.
See `CURRENT_PROJECT_STATE.md` for current status.
See `PROJECT_MAP.md` for file/URL map.
See `_knowledge/` for brand voice, workflows, SOPs, prompts, and design system.
