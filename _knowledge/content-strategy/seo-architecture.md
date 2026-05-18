# SEO Architecture — upranked.io

## Model: Hub & Spoke with Topical Clusters

```
Home (/)
└── Pillar: /seo (hub)
        ├── /seo/on-page
        ├── /seo/off-page
        ├── /seo/technical
        ├── /seo/local
        ├── /seo/bilingual
        ├── /seo/schema
        ├── /seo/analytics
        ├── /seo/content-architecture
        └── /seo/geo

└── Pillar: /seo-industries (hub)
        ├── /industries/medical-seo
        ├── /industries/industrial-seo
        └── /industries/business-seo

└── Pillar: /growth-intelligence (hub)
        ├── /growth-intelligence/consultation
        ├── /growth-intelligence/tools
        ├── /growth-intelligence/websites
        └── /growth-intelligence/strategy

└── Geo Pillar: /markets/gcc (hub)
        ├── /markets/gcc/uae/dubai
        ├── /markets/gcc/ksa/riyadh
        ├── /markets/gcc/kuwait
        └── /markets/gcc/bahrain

└── Blog Cluster: /blog
        ├── SEO Strategy posts
        ├── Medical SEO posts
        ├── Industrial SEO posts
        └── Methodology posts
```

---

## Primary Keyword Targets by Page

| Page | Primary Keyword | Intent |
|------|----------------|--------|
| / | upranked.io premium SEO GCC | Brand |
| /about | Sama Alaa SEO consultant Dubai | E-E-A-T |
| /methodology | APEX Framework SEO methodology | Brand |
| /seo | SEO agency GCC Dubai | Commercial |
| /seo/on-page | on-page SEO GCC | Commercial |
| /seo/off-page | off-page SEO Dubai | Commercial |
| /seo/technical | technical SEO Dubai UAE | Commercial |
| /seo/local | local SEO Dubai GCC | Commercial |
| /seo/bilingual | bilingual SEO Arabic English GCC | Commercial |
| /seo/schema | schema markup SEO GCC | Commercial |
| /seo/analytics | SEO analytics reporting GCC | Commercial |
| /seo/content-architecture | content architecture SEO | Commercial |
| /seo/geo | geo-targeted SEO GCC | Commercial |
| /seo-industries | industry SEO GCC | Commercial |
| /industries/medical-seo | medical SEO Dubai UAE clinics | High commercial |
| /industries/industrial-seo | industrial B2B SEO GCC | High commercial |
| /industries/business-seo | business SEO Dubai GCC | High commercial |
| /growth-intelligence | growth intelligence services GCC | Commercial |
| /markets/gcc/uae/dubai | SEO agency Dubai UAE | Geo commercial |
| /markets/gcc/ksa/riyadh | SEO agency Riyadh Saudi Arabia | Geo commercial |
| /blog/* | informational / long-tail | Informational |

---

## Schema Markup by Page Type

| Page Type | Schema Used |
|-----------|------------|
| Home | Organization + LocalBusiness |
| About | Person (Sama Alaa) + Organization |
| Service pages | Service + FAQPage + BreadcrumbList |
| Blog posts | Article + FAQPage (if FAQs included) |
| Contact | ContactPage + FAQPage |
| FAQ | FAQPage |
| Market pages | LocalBusiness + Service + FAQPage |

---

## Prerender Configuration

42 routes are pre-rendered by Playwright at build time.
Googlebot, AI crawlers (GPTBot, Claude-Web, PerplexityBot) receive full HTML.
No JavaScript required for indexing.

Each pre-rendered HTML file includes:
- Full page content
- Canonical URL
- Meta title + description
- OG / Twitter card tags
- JSON-LD schema

---

## Bilingual SEO (Planned)

**Status**: Not implemented. Infrastructure ready (Cairo font loaded, RTL CSS partially scoped).

When implemented:
- hreflang tags: `<link rel="alternate" hreflang="ar" href="https://upranked.io/ar/..." />`
- Arabic URL structure: `/ar/[page]` or separate subdomain `ar.upranked.io`
- Native Arabic content (not machine-translated)
- RTL layout via `dir="rtl"` on Arabic sections

Priority Arabic targets:
- وكالة سيو دبي (SEO agency Dubai in Arabic)
- تحسين محركات البحث الإمارات (SEO improvement UAE)
- سيو طبي دبي (medical SEO Dubai)

---

## Content Gap Analysis

Currently missing high-value content:
1. **Case studies** — real client results with named businesses (or anonymised metrics)
2. **Arabic content** — massive opportunity, near-zero competition currently
3. **Comparison pages** — "upranked.io vs [generic agency]" (commercial intent)
4. **GCC market reports** — linkbait, topical authority signals
5. **Pricing page** — converts high-intent visitors
6. **Video content** — Remotion pipeline planned for SEO explainer shorts
