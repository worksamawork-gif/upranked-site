# Build Pipeline — upranked.io

## Overview

```
npm run build:seo
    │
    ├── 1. vite build
    │       Bundles React app (esbuild transpile, Rollup output)
    │       Output: dist/public/assets/index-[hash].js + .css
    │       ~21 seconds
    │
    ├── 2. node scripts/generate-sitemap.mjs
    │       Writes dist/public/sitemap.xml
    │       Includes all 42 static routes + Supabase published blog slugs
    │       ~1 second
    │
    ├── 3. node scripts/prerender.mjs
    │       Starts local Express server on port 4173
    │       Playwright (headless Chromium) visits all 42 routes
    │       Writes full HTML to dist/public/[route]/index.html
    │       ~40-60 seconds (network-bound by Supabase fetch)
    │
    └── 4. esbuild server/_core/index.ts
            Bundles server for Node.js production
            Output: dist/index.js
            ~1 second
```

---

## Prerender Route List (42 pages)

Defined in `scripts/prerender.mjs` → `ROUTES` array.

Core (5): `/`, `/about`, `/methodology`, `/contact`, `/faq`
Blog (7): `/blog` + 6 post slugs
SEO hub+cluster (10): `/seo` + 9 type pages
Industry SEO (4): `/seo-industries` + 3 industry pages
Growth Intelligence (5): `/growth-intelligence` + 4 sub-pages
Markets (9): `/markets/gcc` + 4 GCC cities + London + NYC + Germany + France
Legal (2): `/privacy`, `/terms`

Supabase blog routes: fetched dynamically at build time (currently 0 live posts)

---

## GitHub Actions Auto-Rebuild

File: `.github/workflows/rebuild.yml`

**Trigger**: `repository_dispatch` event type `blog-published`

To trigger manually:
```bash
# Via GitHub CLI
gh workflow run rebuild.yml

# Via curl (Supabase webhook format)
curl -X POST https://api.github.com/repos/worksamawork-gif/upranked-site/dispatches \
  -H "Authorization: token YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"event_type": "blog-published"}'
```

**What it runs**:
1. Checkout repo (ubuntu-latest)
2. Install Node 24 + pnpm
3. `pnpm install --frozen-lockfile`
4. `npx playwright install chromium --with-deps`
5. `pnpm run build:seo`
6. `git add dist/public` + commit + push

Commit message: `chore: auto-rebuild dist [skip actions]`
The `[skip actions]` tag prevents the rebuild from triggering itself in a loop.

---

## Local Development

```bash
npm run dev     # Express server + Vite HMR (localhost:5000)
```

Dev server uses `tsx watch` for hot-reload on server changes.
Client HMR via Vite plugin.
No pre-rendering in dev — serves SPA directly.

---

## Key Config Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build config, plugins, aliases |
| `tsconfig.json` | TypeScript config (NEW_POST_TEMPLATE excluded) |
| `tailwind.config` | Inline in vite.config.ts (Tailwind v4 style) |
| `drizzle.config.ts` | Database migration config |
| `vitest.config.ts` | Test runner config |
| `components.json` | shadcn/ui config (base color, path aliases) |
