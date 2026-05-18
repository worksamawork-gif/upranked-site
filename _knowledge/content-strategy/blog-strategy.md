# Blog Strategy — upranked.io

## Purpose of the Blog

The blog serves three functions ranked by importance:
1. **E-E-A-T signal** — Sama Alaa demonstrating real GCC market expertise
2. **Topical authority** — covering the full keyword cluster around GCC SEO
3. **Lead generation** — every post ends with APEX Diagnostic CTA

Not a content farm. Not generic SEO advice. Every post must say something specific that only someone operating inside the GCC market would know.

---

## Published Posts (6)

| Slug | Category | Status |
|------|---------|--------|
| seo-uae-2026-what-works | SEO Strategy | Live |
| medical-seo-dubai-clinics | Medical SEO | Live |
| industrial-b2b-seo-gcc-procurement | Industrial SEO | Live |
| why-gcc-businesses-invisible-google | SEO Strategy | Live |
| bilingual-seo-arabic-english | SEO Strategy | Live |
| apex-framework-explained | Methodology | Live |

---

## Content Pipeline (Priority Order)

### Tier 1 — Highest commercial intent (write next)
| Topic | Target keyword | Category |
|-------|---------------|---------|
| Local SEO for Dubai businesses in 2026 | local SEO Dubai | SEO Strategy |
| Medical SEO for dental clinics in the UAE | dental SEO Dubai | Medical SEO |
| How to rank on Google Maps in Dubai | Google Maps ranking Dubai | SEO Strategy |
| Schema markup for GCC businesses (complete guide) | schema markup GCC | Methodology |
| Technical SEO audit for UAE websites | technical SEO audit Dubai | SEO Strategy |

### Tier 2 — Market-specific authority
| Topic | Target keyword | Category |
|-------|---------------|---------|
| SEO in Saudi Arabia: Riyadh market guide 2026 | SEO Riyadh Saudi Arabia | SEO Strategy |
| Kuwait City SEO: what works for B2B | SEO Kuwait City | Industrial SEO |
| Bahrain business SEO guide | SEO Bahrain Manama | SEO Strategy |
| Off-page SEO strategies for GCC businesses | off-page SEO GCC | SEO Strategy |
| Content architecture for GCC service businesses | content strategy GCC | Methodology |

### Tier 3 — Long-tail informational
| Topic | Target keyword | Category |
|-------|---------------|---------|
| APEX Framework case study: medical clinic Dubai | APEX Framework results | Methodology |
| How to choose an SEO agency in Dubai | choose SEO agency Dubai | SEO Strategy |
| Arabic SEO: the complete guide for GCC businesses | Arabic SEO | SEO Strategy |
| GEO: optimising for ChatGPT and Perplexity in GCC | GEO optimisation | SEO Strategy |
| Industrial supplier SEO: B2B procurement in GCC | industrial supplier SEO GCC | Industrial SEO |

---

## Post Quality Standards

Every post must:
- Be authored by Sama Alaa (name in bio card)
- Name at least one specific GCC market (city, not just country)
- Include a `keyIntelligence` block with the sharpest, most specific insight
- End with APEX Diagnostic CTA
- Link to 2-3 related posts
- Minimum 800 words, recommended 1200-2000
- Include at least one blockquote with a specific stat or contrarian point
- Be added to `new-posts.json` with all required fields

---

## Publishing Frequency Target

2 posts per month minimum.
Priority: Tier 1 first, then fill gaps in Tier 2.

---

## Supabase CMS (Future Workflow)

When Supabase blog CMS is activated:
1. Draft posts in `/admin` panel
2. Publish → triggers `blog-published` webhook
3. GitHub Actions runs `build:seo`
4. Pre-renders new `/blog/[slug]` route
5. Commits and pushes → Netlify deploys

This removes the need to touch code for new posts.
