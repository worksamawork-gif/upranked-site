# CURRENT PROJECT STATE — upranked.io

> Last updated: 2026-07-06

---

## Site Status: LIVE at https://upranked.io

Hosted on Netlify. Source + pre-rendered dist committed to GitHub.
Deployment: push to GitHub repo `worksamawork-gif/upranked-site` → Netlify auto-deploys.

**Repo structure note:** App source lives under `upranked/` (this folder), not
at the git repo root. Repo root has a `netlify.toml` with `base = "upranked"`
so Netlify finds `package.json`, `pnpm-lock.yaml`, and `dist/public` correctly.
Netlify's build command is a no-op (`echo 'serving pre-built dist'`) — it
never runs `vite build` itself, it only serves the `dist/public` folder
exactly as committed. Always run `npm run build:seo` locally before committing.

**CRITICAL — correct remote:** `git remote -v` must show
`https://github.com/worksamawork-gif/upranked-site.git`. A previous session
accidentally pointed origin at a different repo (`Upranked.io.git`) and 4
commits' worth of blog fixes were pushed there instead — Netlify never saw
them and the live site stayed stale for a full session before this was caught
and corrected (2026-06-16).

---

## What Is Complete ✅

### Infrastructure
- [x] Full React + TypeScript + Vite build pipeline
- [x] Tailwind CSS v4 with custom design tokens (navy/gold/white)
- [x] Framer Motion animations (scroll-triggered, fade-in, stagger)
- [x] Animated hero visual on Home page (SVG line chart + count-up stats, see Home.tsx `HeroVisual`)
- [x] Playwright prerender (60 pages, full static HTML for bots)
- [x] Auto sitemap generation
- [x] GitHub Actions auto-rebuild on blog publish
- [x] Netlify Forms → uprankedio@gmail.com (contact form live)
- [x] WhatsApp floating button (all pages)
- [x] Navigation + Footer with all social links
- [x] `usePageMeta` hook (canonical, OG, Twitter, JSON-LD per page)
- [x] robots.txt, sitemap.xml, site.webmanifest

### Pages Live (60 pre-rendered)
| Section | Pages |
|---------|-------|
| Core | Home, About, Methodology, Contact, FAQ |
| SEO Hub | /seo (hub), /seo-industries |
| SEO by Type | On-Page, Off-Page, Technical, Local, Bilingual, Schema, Analytics, Content Architecture, Geo, AEO |
| Industry SEO | Medical SEO, Industrial SEO, Business SEO |
| Growth Intelligence | Hub, Consultation, Tools, Websites, Strategy |
| Markets GCC | GCC hub, Dubai, Riyadh, Kuwait, Bahrain |
| Markets Global | London, New York, Germany, France |
| Blog | Blog index + 22 posts |
| Legal | Privacy, Terms |

### Blog Posts Live (22)
Hardcoded in `blogPosts.ts` (4):
1. SEO in the UAE in 2026: What Actually Works
2. Industrial B2B SEO for GCC Procurement
3. Why GCC Businesses Are Invisible on Google
4. The APEX Framework Explained

In `new-posts.json` (18, newest first in listing):
5. Choose Arabic SEO Agency Dubai (2026-07-06) — GSC: "arabic seo agency" cluster (294 impr)
6. Arabic SEO Services Dubai Guide (2026-07-05) — GSC: "arabic seo services dubai" (100 impr)
7. Dubai Clinic SEO Page 9 (2026-07-04) — GSC: "medical seo agency dubai" cluster, E-E-A-T focus
8. Riyadh SEO Vision 2030 (2026-07-03) — GSC: "riyadh seo" (30 impr, pos 22.4), Vision 2030 angle
9. Bahrain SEO Guide 2026 (2026-06-27) — completes GCC country guide set
10. Off-Page SEO & Link Building Dubai (2026-06-27) — fills last SEO topic gap
11. On-Page SEO in Dubai: 12 Ranking Factors (2026-06-23) — GSC: "increase web rankings dubai"
12. Schema Markup for GCC Businesses (2026-06-23) — supports /seo/schema/ page 1
13. Middle East SEO Strategy (2026-06-23) — GSC: "middle east seo"
14. GEO Targeting SEO in Dubai (2026-06-16)
15. Bilingual SEO: Arabic + English (2026-06-16)
16. Medical SEO for Dubai Clinics (2026-06-16)
17. Dubai SEO Guide 2026 (2026-06-08)
18. Healthcare SEO UAE 2026 (2026-06-08)
19. Kuwait SEO Guide 2026 (2026-06-08)
20. AEO/GEO Bahrain Dubai GCC AI Search (2026-06-03)
21. Riyadh SEO Guide 2026 (2026-06-03)
22. Arabic SEO Agency Dubai UAE (2026-06-03)

**Rule:** never add a slug to both files — check `blogPosts.ts` before adding
to `new-posts.json`, or `getPostBySlug` returns the wrong (first-match) post.

### Visual Assets
- [x] 24 branded hero SVGs (01-24) — all pages covered
- [x] Founder portrait: `/images/sam-hamouda-seo-consultant-dubai.webp`
- [x] Brand illustrations: business, medical, industrial, team image folders

### Technical Health
- [x] 0 broken favicon 404s (removed dead ico/png references)
- [x] 0 broken internal links
- [x] All WhatsApp CTAs corrected to wa.me/201039173978 (fixed self-referential /contact/ links in Contact, Home, About pages)
- [x] APEX Diagnostic pricing consistent: FREE across TailoredWebsite.tsx and Pricing.tsx (fixed $650 inconsistency 2026-07-06)
- [x] "Related Reading" internal link cards added: BilingualSEO → arabic-seo-agency blog, MedicalSEO → 2 healthcare posts, OffPageSEO → arabic-seo-agency blog, SchemaSEO → schema-markup post
- [x] Email uprankedio@gmail.com in all contact points
- [x] LinkedIn URL: linkedin.com/company/upranked-io/ (corrected everywhere)
- [x] Social links in Footer + About page
- [x] __manus__ build artifacts gitignored
- [x] TypeScript: 0 compile errors in source (2 pre-existing in server/admin, non-blocking)

---

## What Is Incomplete / Pending ⚠️

### Missing Brand Data (User to provide)
- [ ] Physical address for NAP consistency (needed for local SEO)
- [ ] Full credentials / certifications for Sama Alaa
- [ ] Years of experience
- [ ] 3 confirmed client reviews with names and quotes
- [ ] Expert bio paragraph (for About page + schema)

### Pages Marked "NEEDS REBUILD" in SEO_PHASE0_BRAND_LOCK.md
These pages exist but were flagged for deeper content rebuild:
- [ ] /industries/medical-seo (highest priority — most commercial intent)
- [ ] /industries/industrial-seo
- [ ] /industries/business-seo
- [ ] /growth-intelligence/consultation
- [ ] /growth-intelligence/tools
- [ ] /growth-intelligence/websites
- [ ] /growth-intelligence/strategy

### Bilingual / Arabic
- [ ] Arabic content not implemented (EN only currently)
- [ ] RTL layout not implemented
- [ ] hreflang tags not set
- [ ] Language toggle in nav is visual only (no function)

### Blog CMS (Supabase)
- [ ] Supabase blog_posts table exists but is empty
- [ ] Admin panel at /admin exists but not fully wired to Supabase publish flow
- [ ] Supabase webhook → GitHub Actions auto-rebuild not tested end-to-end

### Case Studies & Social Proof
- [ ] No case studies section or pages
- [ ] No testimonials/reviews on site
- [ ] No video testimonials

### Analytics & Tracking
- [ ] No Google Analytics / GA4 set up
- [ ] No Google Search Console verified
- [ ] No conversion tracking

### Performance
- [ ] Core Web Vitals not formally measured
- [ ] Image optimization (WebP, responsive sizes) partially done
- [ ] No lazy loading for below-fold images on long pages

### Remotion Video Pipeline
- [ ] remotion-best-practices skill installed
- [ ] No Remotion project created yet
- [ ] Potential: SEO explainer videos, market intro reels, APEX Framework animation

---

## Deployment Reminder

Every code change requires (run from `upranked/` unless noted):
```bash
npm run build:seo                  # Vite build + sitemap + Playwright prerender + esbuild
cd ..                              # back to repo root
git add upranked/client/src/data/ upranked/scripts/ upranked/dist/public/
git commit -m "..."
git push origin main               # must be worksamawork-gif/upranked-site — Netlify auto-deploys
```

Never push source-only. Netlify serves `dist/public` exactly as committed —
it does NOT run `vite build` itself (build command is a no-op echo). Always
run `npm run build:seo` locally first so source and dist stay in sync.

**Batch, don't drip:** make all changes for a session, build once, commit
once, push once at the end. Every push triggers a Netlify build and burns
build minutes — multiple pushes per session have paused the account before.

---

## Session Log — 2026-06-16

1. **Fixed duplicate blog posts**: `bilingual-seo-arabic-english` and
   `medical-seo-dubai-clinics` existed both hardcoded in `blogPosts.ts`
   (old April content) and in `new-posts.json` (new June content) —
   `getPostBySlug` was returning the stale April version. Removed the old
   hardcoded entries.
2. **Added new blog post**: `geo-targeting-seo-dubai`, targeting the GSC
   content gap "geo targeting seo service dubai" (18 impressions, position
   47.9, zero clicks). Reordered `new-posts.json` so it appears first and
   becomes the blog's Featured Article.
3. **Discovered and fixed wrong git remote**: all of the above had been
   pushed to `Upranked.io.git` instead of `upranked-site` — Netlify never
   built any of it. Switched `origin` to the correct repo.
4. **Force-pushed corrected history to `upranked-site`**, then committed
   75 source files (Home.tsx animated hero, Pricing.tsx free diagnostic, all
   24 hero SVGs, every page component) that existed in the built
   `dist/public/` but had never actually been committed to source in any
   branch.
5. **Fixed Netlify build failure**: the force push changed the repo layout
   (app now under `upranked/` instead of repo root), breaking Netlify's
   build path (`ERR_PNPM_NO_IMPORTER_MANIFEST_FOUND`). Added a root-level
   `netlify.toml` with `base = "upranked"`.
6. Result: site rebuilt and redeployed from commit `be95743` with all 13
   blog posts correct, GEO post featured, and full source history restored.

---

## Session Log — 2026-06-23

1. **Fixed blog link rendering bug**: `BlogPost.tsx` regex in `String.split()`
   had nested capturing groups that duplicated link text and bare URLs in
   rendered output. Changed inner groups to non-capturing. Affects all blog
   posts with markdown `[text](url)` links in paragraphs.
2. **Security hardening — Supabase database**:
   - Created new admin login (`uprankedio@gmail.com`) replacing dead
     `sam@upranked.io`
   - Rewrote RLS policies on `blog_posts` and `storage.objects` to restrict
     all writes to the specific admin UUID — was "any authenticated user"
   - Deleted old dead user account
   - Removed public bucket listing policy (images still served via public URLs)
   - Pinned `update_updated_at` function search_path
3. **Added root `.gitignore`**: blocks `gsc/` credentials, `.claude/`,
   `.agents/`, design files, `.xlsx`, `.docx` from accidental commits.
   Updated `upranked/.gitignore` with same exclusions.
4. **Patched dependency vulnerabilities**: `fast-xml-parser` 5.2.5 → 5.7.1
   (critical XML entity bypass), `vitest` 2.1.9 → 4.1.9 (critical file
   read/execute). Both were transitive/dev-only, low practical risk.
5. **Pulled fresh GSC data** (May 21 → Jun 20): AEO Bahrain still #3,
   Arabic SEO cluster at 291 combined impressions (biggest opportunity),
   healthcare posts jumped from pos 85+ → 10.8, bilingual post at pos 4.7.
6. **Added 3 new blog posts from GSC gap analysis**:
   - `on-page-seo-dubai-rankings` — targets "increase web rankings dubai"
     (44 impr, pos 83)
   - `schema-markup-gcc-rich-results` — supports `/seo/schema/` (pos 8.9,
     page 1)
   - `middle-east-seo-strategy` — targets "middle east seo" (14 impr,
     pos 87)
7. **Saved security engineering guidelines** as permanent project memory —
   senior-engineer mindset, no planning files in prod, supply chain caution,
   OWASP top 10 awareness, validate inputs, audit deps.
8. **Second GSC pull** (May 28 → Jun 24): refreshed token via requests.
   AEO Bahrain Manama variant jumped pos 11.1 → 7.6, Arabic SEO agency
   dubai improved pos 34.5 → 30.5 (373 page impressions), Riyadh SEO
   improved pos 26 → 22.4. "increase web rankings dubai" grew to 61 impr.
9. **Added 2 more blog posts from second GSC pull**:
   - `bahrain-seo-guide-2026` — targets "seo services bahrain" (9 impr),
     completes GCC country guide set (Dubai/Riyadh/Kuwait/Bahrain)
   - `off-page-seo-link-building-dubai` — fills last major SEO topic gap,
     supports `/seo/off-page/` service page
10. **Added Microsoft Clarity** tracking code (`xblcii22xy`) to `index.html`.
11. **Deployed** commit `68c4205` — one build, one commit, one push.
    56 pages prerendered, 18 total blog posts live.

## Growth Trend (90-day GSC analysis, 2026-06-27)

| Period | Clicks | Impressions | CTR | Avg Pos |
|--------|--------|-------------|-----|---------|
| Mar 26 – Apr 24 | 9 | 35 | 25.7% | 3.8 |
| Apr 25 – May 24 | 16 | 62 | 25.8% | 31.8 |
| May 25 – Jun 24 | 24 | 1,191 | 2.0% | 53.6 |

Impressions 19x growth in 2 months. CTR dropped because Google now shows the
site for hundreds of new keywords at page 3-9 positions (normal at this stage).
Clicks growing steadily: 9 → 16 → 24. Homepage position slipped 4.0 → 7.4
(still page 1, monitor). Arabic SEO cluster (373 page impressions at pos 44)
is the single biggest opportunity — as it climbs to page 1-2, clicks will follow.
