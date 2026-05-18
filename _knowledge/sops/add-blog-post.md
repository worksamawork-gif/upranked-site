# SOP: Add a New Blog Post

**Time required**: 5–10 minutes (writing not included)
**Skill level**: No coding required (Method A)

---

## Quick Method (JSON — no code)

### Step 1: Open the JSON file
`client/src/data/new-posts.json`

### Step 2: Add your post
The file is an array `[]`. Add a new object inside it. Copy this structure:

```json
{
  "slug": "your-post-slug-here",
  "title": "Your Full Blog Post Title Here",
  "metaTitle": "Your Post Title | upranked.io",
  "metaDescription": "A clear, keyword-rich description under 160 characters.",
  "publishedAt": "2026-05-18",
  "readTime": 6,
  "category": "SEO Strategy",
  "excerpt": "One or two sentences shown on the blog card.",
  "keyIntelligence": "2-3 sentence key takeaway shown at the top of the article.",
  "content": [
    { "type": "p", "text": "Opening paragraph." },
    { "type": "h2", "text": "First Section Heading" },
    { "type": "p", "text": "Body text." },
    { "type": "ul", "items": ["Point one", "Point two", "Point three"] },
    { "type": "blockquote", "text": "A powerful quote or stat." },
    { "type": "p", "text": "Closing paragraph." }
  ],
  "cta": {
    "heading": "Ready to Apply This to Your Business?",
    "body": "Book a free 30-minute APEX Diagnostic with Sama Alaa and get a clear, actionable plan for your GCC market.",
    "href": "/contact/",
    "label": "Book Your Free APEX Diagnostic"
  },
  "relatedSlugs": ["seo-uae-2026-what-works", "apex-framework-explained"]
}
```

### Step 3: Run the build
```bash
npm run build:seo
```

### Step 4: Remove build artifact
```bash
rm -rf dist/public/__manus__
```

### Step 5: Commit and push
```bash
git add dist/public client/src/data/new-posts.json
git commit -m "content: add blog post [post title]"
git push origin main
```

### Step 6: Verify
Check https://upranked.io/blog/your-post-slug-here after ~60 seconds.

---

## Available Content Block Types

| Type | Use | Required Fields |
|------|-----|----------------|
| `p` | Body paragraph | `text` |
| `h2` | Main section heading | `text` |
| `h3` | Sub-section heading | `text` |
| `ul` | Bullet list | `items` (array) |
| `ol` | Numbered list | `items` (array) |
| `blockquote` | Highlighted quote/stat | `text` |

## Available Categories

- `"SEO Strategy"` — GCC SEO trends, APEX Framework, general strategy
- `"Medical SEO"` — Healthcare, clinics, dental
- `"Industrial SEO"` — B2B, manufacturing, procurement
- `"Methodology"` — APEX Framework deep-dives

## Existing Post Slugs (for relatedSlugs)

- `seo-uae-2026-what-works`
- `medical-seo-dubai-clinics`
- `industrial-b2b-seo-gcc-procurement`
- `why-gcc-businesses-invisible-google`
- `bilingual-seo-arabic-english`
- `apex-framework-explained`
