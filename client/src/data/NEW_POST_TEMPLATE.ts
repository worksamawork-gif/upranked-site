/**
 * HOW TO ADD A NEW BLOG POST
 * ─────────────────────────────────────────────────────────────────
 * 1. Copy everything inside the object below
 * 2. Open  client/src/data/blogPosts.ts
 * 3. Add a comma after the last post in the blogPosts array
 * 4. Paste and fill in your content
 * 5. Run  npm run build  then deploy the new  dist/public  folder
 * ─────────────────────────────────────────────────────────────────
 *
 * CONTENT BLOCKS  (the  content  array accepts these types):
 *   { type: 'p',          text: 'A paragraph of body text.' }
 *   { type: 'h2',         text: 'Main section heading' }
 *   { type: 'h3',         text: 'Sub-section heading' }
 *   { type: 'blockquote', text: 'A highlighted quote or stat.' }
 *   { type: 'ul',  items: ['Bullet one', 'Bullet two'] }
 *   { type: 'ol',  items: ['Step one',   'Step two'  ] }
 *
 * CATEGORIES  (pick one exactly as written):
 *   'SEO Strategy'   |   'Medical SEO'   |   'Industrial SEO'   |   'Methodology'
 */

// ─── TEMPLATE — copy from here ───────────────────────────────────

{
  // URL slug — lowercase, hyphens only, no spaces   e.g.  'how-to-rank-in-riyadh'
  slug: 'your-post-slug-here',

  // Page headline (shown at top of the article)
  title: 'Your Full Blog Post Title Here',

  // Browser tab title — keep under 60 characters
  metaTitle: 'Your Post Title | upranked.io',

  // Google search description — keep under 160 characters
  metaDescription: 'A clear, keyword-rich description of what this article covers and why it matters to GCC businesses.',

  // Publication date  YYYY-MM-DD
  publishedAt: '2026-04-25',

  // Estimated reading time in minutes
  readTime: 6,

  // Choose ONE category from the list above
  category: 'SEO Strategy',

  // One or two sentence summary shown on the blog listing card
  excerpt: 'A short, compelling intro that makes readers want to click.',

  // 2–3 sentence "Key Intelligence" summary shown at top of article
  keyIntelligence: 'The three most important takeaways from this article summarised in 2–3 sentences.',

  // Article body — add as many blocks as you need in order
  content: [
    { type: 'p',  text: 'Opening paragraph that sets the scene and hooks the reader.' },
    { type: 'h2', text: 'First Main Section' },
    { type: 'p',  text: 'Body text for this section.' },
    { type: 'ul', items: ['Key point one', 'Key point two', 'Key point three'] },
    { type: 'h2', text: 'Second Main Section' },
    { type: 'p',  text: 'More body text.' },
    { type: 'h3', text: 'A Sub-Section If Needed' },
    { type: 'p',  text: 'Detail under the sub-section.' },
    { type: 'blockquote', text: 'A powerful quote or statistic to highlight.' },
    { type: 'p',  text: 'Closing paragraph with a clear takeaway.' },
  ],

  // Call-to-action shown at the bottom of the article
  cta: {
    heading: 'Ready to Apply This to Your Business?',
    body: 'Book a free 30-minute APEX Diagnostic with Sama Alaa and get a clear, actionable plan for your GCC market.',
    href: '/contact/',
    label: 'Book Your Free APEX Diagnostic',
  },

  // Slugs of up to 3 related posts to show at the bottom  (use existing slugs)
  relatedSlugs: ['seo-uae-2026-what-works', 'apex-framework-explained'],
},

// ─── END OF TEMPLATE ─────────────────────────────────────────────
