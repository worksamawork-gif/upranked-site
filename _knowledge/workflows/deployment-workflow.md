# Deployment Workflow — upranked.io

## Architecture Overview

Netlify serves **pre-rendered static HTML** from `dist/public/`. It does NOT run the build — it only reads committed files from GitHub. This means `dist/public/` must be committed to git after every change.

```
Developer → Edit source files
         → npm run build:seo  (Vite + sitemap + Playwright prerender)
         → git add dist/public
         → git commit + git push
         → Netlify auto-deploys from GitHub
```

---

## Step-by-Step Deployment

### 1. Make your changes
Edit files in `client/src/`, `client/index.html`, or `scripts/`.

### 2. Build
```bash
cd upranked
npm run build:seo
```

What this does in order:
1. `vite build` — bundles React app to `dist/public/assets/`
2. `node scripts/generate-sitemap.mjs` — writes `dist/public/sitemap.xml`
3. `node scripts/prerender.mjs` — Playwright visits all 42 routes, writes full HTML
4. `esbuild server/_core/index.ts` — bundles server to `dist/index.js`

Build time: ~60–90 seconds (Playwright prerender is the slow part)

### 3. Remove build artifacts
```bash
rm -rf dist/public/__manus__
```
(Playwright creates this folder. It's gitignored but must be manually removed before commit.)

### 4. Commit and push
```bash
git add dist/public
git add [any changed source files]
git commit -m "descriptive message"
git push origin main
```

### 5. Netlify deploys automatically
Netlify detects the push and deploys within 30–60 seconds. Check https://app.netlify.com to confirm.

---

## What NOT to Do

- Do NOT push source code only without building — the live site won't update
- Do NOT use `[skip ci]` in commit messages — Netlify honors it and skips deploy
- Do NOT `git add -A` blindly — check for any sensitive files first
- Do NOT commit `dist/public/__manus__/` — gitignored but Playwright recreates it each build

---

## Auto-Rebuild (GitHub Actions)

File: `.github/workflows/rebuild.yml`

Triggers:
- `repository_dispatch` type `blog-published` (Supabase webhook when blog post published)
- Manual trigger via GitHub → Actions → "Run workflow"

When triggered, it:
1. Checks out repo
2. Installs dependencies (pnpm)
3. Installs Playwright chromium
4. Runs `pnpm run build:seo`
5. Commits and pushes updated `dist/public` with message `chore: auto-rebuild dist [skip actions]`

Note: Uses `[skip actions]` (not `[skip ci]`) to avoid Netlify skipping the deploy.

---

## Environment Variables

| Variable | Used By | Value |
|----------|---------|-------|
| `SUPABASE_KEY` | prerender.mjs | Supabase publishable key (in script) |
| `NODE_ENV` | dev server | `development` or `production` |

No `.env` file needed for production builds — Supabase key is hardcoded as publishable key in prerender.mjs.

---

## Netlify Configuration

- Build command: NONE (Netlify does not build — it only deploys)
- Publish directory: (root, because dist/public is committed)
- `_redirects` file: `client/public/_redirects` (SPA fallback: `/* /index.html 200`)
- Forms: "contact" form auto-detected from prerendered HTML
- Email notifications: uprankedio@gmail.com (configured in Netlify dashboard → Forms)
