# Deploy Checklist — upranked.io

Run through this before every push to main.

---

## Pre-Deploy

- [ ] All source file edits saved
- [ ] No TypeScript errors: `npx tsc --noEmit` (2 pre-existing errors in Admin/storageProxy are OK)
- [ ] No broken imports or missing component references

## Build

```bash
npm run build:seo
```

- [ ] Vite build completes without errors
- [ ] All 42 pages pre-rendered (check console output — should say "42 pages pre-rendered — done")
- [ ] No Playwright timeout errors

## Cleanup

```bash
rm -rf dist/public/__manus__
```

- [ ] `__manus__` folder removed from dist/public

## Verify Locally (optional but recommended)

Spot check a few of the pre-rendered HTML files:
```bash
grep -l "uprankedio@gmail.com" dist/public/contact/index.html
grep -l "APEX Framework" dist/public/about/index.html
```

## Commit

```bash
git add dist/public
git add [changed source files — be specific, not -A]
git status  # review what's staged
git commit -m "[type]: [description]"
git push origin main
```

Commit message types:
- `feat:` — new page or feature
- `fix:` — bug fix
- `content:` — new blog post or content update
- `style:` — visual/design change
- `chore:` — build, dependency, config

## Post-Deploy

- [ ] Wait ~60 seconds
- [ ] Check https://upranked.io (hard refresh)
- [ ] Check the specific page you changed
- [ ] Check https://app.netlify.com — deploy should show as "Published"
- [ ] No new 404s in browser DevTools → Network tab

---

## Rollback (if needed)

```bash
git revert HEAD
git push origin main
```

Or revert in GitHub UI: go to the commit → "Revert" button.
