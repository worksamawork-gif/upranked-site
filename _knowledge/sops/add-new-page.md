# SOP: Add a New Page

Use this when adding any new route to the site (service page, market page, landing page, etc.).

---

## Step 1: Create the Page Component

Copy the nearest similar page as a starting point:
- Service page → copy `client/src/pages/services/BusinessSEO.tsx`
- Market page → copy `client/src/pages/markets/gcc/uae/DubaiMarket.tsx`
- SEO cluster page → copy `client/src/pages/seo/LocalSEO.tsx`
- Hub page → copy `client/src/pages/GrowthIntelligence.tsx`

Save as: `client/src/pages/[folder]/[PageName].tsx`

### Required elements in every page
1. `usePageMeta()` hook at the top of the component with `title`, `description`, and `schema`
2. Hero section with SVG illustration or hero image
3. At least one section with the primary service/topic content
4. Author bio card (for SEO credibility — copy from any service page, ~line 110)
5. FAQ section with `FAQPage` schema (copy from any service page)
6. CTA section pointing to `/contact/`

### usePageMeta pattern
```tsx
usePageMeta({
  title: 'Page Title Here',                         // appended with "| upranked.io"
  description: 'Meta description under 160 chars.',
  schema: { /* your JSON-LD */ },
  schemaId: 'unique-page-schema-id',
});
```

---

## Step 2: Add the Route

Open `client/src/App.tsx`:
```tsx
import NewPage from './pages/[folder]/NewPage';
// ...
<Route path="/your/url/path" component={NewPage} />
```

---

## Step 3: Add to Prerender List

Open `scripts/prerender.mjs`, add to the `ROUTES` array:
```js
'/your/url/path',
```

---

## Step 4: Add to Sitemap (if public SEO page)

Open `scripts/generate-sitemap.mjs`, add the URL to the routes list with appropriate priority:
```js
{ url: '/your/url/path', priority: '0.8' },
```

---

## Step 5: Add Navigation / Footer Links (if needed)

- **Nav dropdown**: `client/src/components/Navigation.tsx`
- **Footer column**: `client/src/components/Footer.tsx`

---

## Step 6: Choose a Hero SVG

Available hero SVGs in `client/public/heroes/`:
| File | Use for |
|------|---------|
| 01-growth-chart.svg | Home / general growth |
| 02-apex-framework.svg | Methodology / About |
| 03-serp-positions.svg | SEO rankings / local SEO |
| 04-global-reach.svg | International / market expansion |
| 05-revenue-bars.svg | Revenue / business results |
| 06-keyword-constellation.svg | Keyword research / content |
| 07-slogan-hero.svg | Brand / generic |
| 08-magnifier-audit.svg | Technical SEO / audit |
| 09–24 | Assigned to specific pages (see PROJECT_MAP.md) |

If all 24 are assigned, use 01–08 for new pages or request a new SVG.

### Hero image markup pattern
```tsx
<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center">
  <div className="w-full max-w-[800px]">
    <img src="/heroes/XX-name.svg" alt="Descriptive alt text" width={800} height={600}
      loading="eager" decoding="async" className="w-full h-auto rounded-2xl" />
  </div>
</motion.div>
```

---

## Step 7: Build and Deploy

```bash
npm run build:seo
rm -rf dist/public/__manus__
git add dist/public client/src/App.tsx client/src/pages/[new-file].tsx scripts/prerender.mjs
git commit -m "feat: add [page name] page"
git push origin main
```
