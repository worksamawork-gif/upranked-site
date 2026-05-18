# Prompt: Write a Blog Post for upranked.io

Use this prompt with any AI when generating blog content. Fill in [BRACKETS] before using.

---

## Master Prompt

```
You are writing a blog post for upranked.io, a premium GCC SEO agency founded by Sama Alaa.

BRAND VOICE:
- Authoritative, surgical, GCC-native
- Speaks like a senior strategist who operates inside the GCC market
- Never generic, never Western-agency-speak
- Uses specific city names (Dubai, Riyadh, Kuwait City, Manama) not vague "MENA"
- No em dashes. No "data-driven". No "full-service". No "leverage" as a verb.
- Short sentences. No filler. Every sentence earns its place.

POST DETAILS:
- Title: [FULL TITLE]
- Primary keyword: [TARGET KEYWORD]
- Target market: [GCC market — e.g. Dubai UAE / Riyadh KSA / Kuwait]
- Target industry: [medical / industrial / business / general]
- Word count: [800–2000]
- Category: [SEO Strategy / Medical SEO / Industrial SEO / Methodology]

OUTPUT FORMAT (JSON for new-posts.json):
{
  "slug": "[url-slug-lowercase-hyphens]",
  "title": "[Full title]",
  "metaTitle": "[Under 60 chars] | upranked.io",
  "metaDescription": "[Under 160 chars, includes primary keyword]",
  "publishedAt": "[YYYY-MM-DD]",
  "readTime": [estimated minutes],
  "category": "[category]",
  "excerpt": "[1-2 sentence blog card description]",
  "keyIntelligence": "[2-3 sentence sharpest insight from the article]",
  "content": [
    { "type": "p", "text": "Opening paragraph — specific, hooks the GCC business owner." },
    { "type": "h2", "text": "Section 1 Heading" },
    ...
  ],
  "cta": {
    "heading": "Ready to Apply This to Your Business?",
    "body": "Book a free 30-minute APEX Diagnostic with Sama Alaa and get a clear, actionable plan for your GCC market.",
    "href": "/contact/",
    "label": "Book Your Free APEX Diagnostic"
  },
  "relatedSlugs": ["seo-uae-2026-what-works", "apex-framework-explained"]
}

CONTENT RULES:
1. The keyIntelligence must be the most contrarian or specific insight — not a summary
2. At least one blockquote with a compelling stat or claim
3. At least one section naming the specific GCC market by city
4. The APEX Framework should be mentioned at least once where relevant
5. No generic SEO advice that any agency blog would write
6. All content must be specific to GCC market conditions

Write the complete JSON output ready to paste into new-posts.json.
```

---

## Quick Variation: Short-Form Insight Post (400-600 words)

```
Write a short insight post for upranked.io's blog. The topic is [TOPIC].
Target market: [MARKET]. Primary keyword: [KEYWORD].

Voice: Sama Alaa speaking directly to a GCC business owner. Specific, confident, no filler.

Include:
- One sharp opening claim
- 3-4 substantive paragraphs
- One blockquote with a specific stat or insight
- CTA to book APEX Diagnostic

Output as JSON for new-posts.json (same structure as the full post format above).
```
