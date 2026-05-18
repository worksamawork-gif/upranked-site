# Content Publishing Workflow — upranked.io

## Two Ways to Publish Blog Posts

### Method A: JSON (Simplest — no TypeScript)

1. Open `client/src/data/new-posts.json`
2. Copy the structure from `client/src/data/NEW_POST_TEMPLATE.ts`
3. Add your post object to the `[]` array (standard JSON, no TypeScript syntax)
4. Run `npm run build:seo`
5. Commit `dist/public` and push → Netlify deploys

**Best for**: Quick posts, non-technical contributors

### Method B: TypeScript (blogPosts.ts)

1. Open `client/src/data/blogPosts.ts`
2. Add a new object to the `blogPosts` array (after the last post, before the closing `]`)
3. Follow the `BlogPost` interface (slug, title, metaTitle, metaDescription, publishedAt, readTime, category, excerpt, keyIntelligence, content, cta, relatedSlugs)
4. Run `npm run build:seo`
5. Commit and push

**Best for**: Posts with complex formatting, code blocks, or when building directly

### Method C: Supabase CMS (Future — not active yet)

Blog posts published to Supabase `blog_posts` table with `status: 'published'` trigger a GitHub Actions rebuild via webhook. The prerender script fetches Supabase slugs and pre-renders those routes too.

**Status**: Infrastructure exists, not actively used. Admin panel at `/admin` wires to this.

---

## Blog Post Structure

```typescript
{
  slug: 'url-slug-here',                    // URL: /blog/url-slug-here
  title: 'Full Article Title',
  metaTitle: 'SEO Title Under 60 Chars | upranked.io',
  metaDescription: 'Description under 160 chars with target keyword.',
  publishedAt: 'YYYY-MM-DD',
  readTime: 6,                              // minutes
  category: 'SEO Strategy',                // or 'Medical SEO', 'Industrial SEO', 'Methodology'
  excerpt: 'Short description for listing card (1-2 sentences).',
  keyIntelligence: '2-3 sentence summary shown at top of article.',
  content: [
    { type: 'p', text: 'Paragraph text.' },
    { type: 'h2', text: 'Section heading' },
    { type: 'h3', text: 'Sub-section heading' },
    { type: 'ul', items: ['Bullet 1', 'Bullet 2'] },
    { type: 'ol', items: ['Step 1', 'Step 2'] },
    { type: 'blockquote', text: 'Highlighted quote or stat.' },
  ],
  cta: {
    heading: 'CTA Heading',
    body: 'CTA body text with Sama Alaa mention.',
    href: '/contact/',
    label: 'Book Your Free APEX Diagnostic',
  },
  relatedSlugs: ['slug-1', 'slug-2'],       // Up to 3 existing post slugs
}
```

---

## Content Categories

| Category | Use for |
|---------|---------|
| `'SEO Strategy'` | General GCC SEO, APEX Framework, industry trends |
| `'Medical SEO'` | Healthcare, clinics, dental, medical centres |
| `'Industrial SEO'` | B2B, manufacturing, supply chain, procurement |
| `'Methodology'` | APEX Framework deep-dives, process explanations |

---

## SEO Requirements for New Blog Posts

Every blog post must have:
- [ ] Primary keyword in `metaTitle`, `metaDescription`, and first `h2`
- [ ] `keyIntelligence` with the most contrarian/specific insight
- [ ] At least one GCC market named specifically (Dubai, Riyadh, Kuwait, etc.)
- [ ] `relatedSlugs` linking to 2-3 existing posts
- [ ] CTA pointing to `/contact/` with APEX Diagnostic framing
- [ ] Read time set accurately (avg 200 words/min)
- [ ] `publishedAt` date set to publication date

---

## Adding a New Page (Not a Blog Post)

1. Create `client/src/pages/[PageName].tsx` (copy nearest similar page as template)
2. Import and add route in `client/src/App.tsx`
3. Add URL to `ROUTES` array in `scripts/prerender.mjs`
4. Add URL to sitemap generator in `scripts/generate-sitemap.mjs` if needed
5. Add footer/nav link if appropriate
6. Run `npm run build:seo`, commit dist, push
