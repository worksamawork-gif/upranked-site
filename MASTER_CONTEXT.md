# MASTER CONTEXT — upranked.io

> Single source of truth for any AI agent, collaborator, or future session.
> Last updated: 2026-05-18

---

## The Business

**upranked.io** is a premium SEO and Growth Intelligence agency built exclusively for high-value businesses operating in the GCC (Gulf Cooperation Council) region and global expansion markets.

- **Tagline**: Premium Growth Intelligence Lab
- **Slogan**: Growth Intelligence for High-Value Businesses
- **Philosophy**: Sector-specific SEO and growth strategy built for the GCC — not borrowed from a Western playbook
- **Website**: https://upranked.io
- **Booking URL**: /contact (Free APEX Diagnostic)

---

## The Founder

**Sama Alaa** — Founder & Chief Growth Strategist, upranked.io

- Creator of the **APEX Framework™** (Audit → Position → Execute → Expand)
- Specialises in: Medical SEO, Industrial B2B SEO, Business SEO, Market Positioning, GCC Growth Strategy
- 20+ GCC businesses served
- Based: Dubai, UAE
- Serves: UAE, Saudi Arabia, Kuwait, Bahrain, London, New York, Germany, France

**Contact & Social**
- Email: uprankedio@gmail.com
- WhatsApp: +20 112 166 4778 (wa.me/201121664778)
- Phone: +20103 917 3978
- LinkedIn: linkedin.com/company/upranked-io/
- X / Twitter: x.com/Upranked7
- Instagram: instagram.com/upranked.io/
- Facebook: facebook.com/profile.php?id=61589100073844

**Missing data (needs to be filled in)**
- Physical address for NAP consistency
- Full credentials / certifications
- Years of experience
- 3 confirmed client reviews with names and quotes

---

## The APEX Framework™

The proprietary SEO methodology — the core differentiator and IP of the business.

| Phase | Name | What it does |
|-------|------|-------------|
| A | **Audit** | Deep audit of current SEO position, competitor gap analysis, technical health |
| P | **Position** | Keyword targeting, content architecture, topical authority map |
| E | **Execute** | On-page optimisation, content production, technical fixes, bilingual setup |
| X | **Expand** | Off-page authority building, GEO optimisation, market expansion |

---

## Services Architecture

### Pillar 1: SEO Services
| Service | URL | Primary Market |
|---------|-----|----------------|
| Medical SEO | /industries/medical-seo | Clinics, hospitals, healthcare providers |
| Industrial SEO | /industries/industrial-seo | B2B manufacturers, suppliers, industrial |
| Business SEO | /industries/business-seo | Professional services, SMEs |

### Pillar 2: SEO by Type (Cluster Pages)
| Type | URL |
|------|-----|
| On-Page SEO | /seo/on-page |
| Off-Page SEO | /seo/off-page |
| Technical SEO | /seo/technical |
| Local SEO | /seo/local |
| Bilingual SEO | /seo/bilingual |
| Schema Markup | /seo/schema |
| SEO Analytics | /seo/analytics |
| Content Architecture | /seo/content-architecture |
| Geo-Targeted SEO | /seo/geo |

### Pillar 3: Growth Intelligence
| Service | URL |
|---------|-----|
| Business Consultation | /growth-intelligence/consultation |
| Tailored Tools | /growth-intelligence/tools |
| Tailored Website | /growth-intelligence/websites |
| Business Strategy | /growth-intelligence/strategy |

---

## Markets

### GCC Priority (core)
- Dubai, UAE → /markets/gcc/uae/dubai
- Riyadh, Saudi Arabia → /markets/gcc/ksa/riyadh
- Kuwait City, Kuwait → /markets/gcc/kuwait
- Manama, Bahrain → /markets/gcc/bahrain

### Global Expansion
- London, UK → /markets/uk/london
- New York, USA → /markets/usa/new-york
- Germany → /markets/eu/germany
- France → /markets/eu/france

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Vite 7 |
| Styling | Tailwind CSS v4 + custom tokens |
| Animation | Framer Motion |
| Routing | wouter |
| UI Components | Radix UI + shadcn/ui |
| Icons | lucide-react |
| Backend | Express + tRPC |
| ORM | Drizzle (MySQL) |
| Database | MySQL (auth/users) + Supabase (blog CMS) |
| Pre-rendering | Playwright (headless Chromium) |
| Hosting | Netlify (static) |
| Source | GitHub (worksamawork-gif/upranked-site) |
| Forms | Netlify Forms → uprankedio@gmail.com |

---

## Design Tokens

```
Background:   #0A0F1E  (navy)
Accent:       #C9A84C  (gold)
Dark surface: #0F1629  (dark-gray)
Border:       ~rgba(201,168,76,0.15)
Text primary: #FFFFFF
Text muted:   ~rgba(255,255,255,0.6)
Font Latin:   Inter (400, 500, 600, 700, 800)
Font Arabic:  Cairo (400, 500, 600, 700, 800)
```

---

## Primary Conversion Action

**Book a Free APEX Diagnostic** — a free 30-minute strategy call with Sama Alaa.
Every page on the site has at least one CTA pointing to `/contact/`.
The WhatsApp button floats on all pages (+20 112 166 4778).

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `client/src/App.tsx` | All routes |
| `client/src/data/blogPosts.ts` | Static blog posts |
| `client/src/data/new-posts.json` | JSON blog post additions (no TypeScript required) |
| `client/src/data/NEW_POST_TEMPLATE.ts` | Copy-paste blog post template |
| `client/src/hooks/usePageMeta.ts` | Dynamic meta/canonical/OG/schema per page |
| `client/src/components/Navigation.tsx` | Global nav |
| `client/src/components/Footer.tsx` | Global footer |
| `client/src/components/WhatsAppButton.tsx` | Floating WhatsApp CTA |
| `scripts/prerender.mjs` | Playwright static pre-render (42 pages) |
| `scripts/generate-sitemap.mjs` | Auto sitemap |
| `.github/workflows/rebuild.yml` | Auto-rebuild on blog publish |
| `SEO_PHASE0_BRAND_LOCK.md` | Original brand lock / SEO strategy doc |
| `_knowledge/` | This knowledge base |

---

## → Next Steps

See `CURRENT_PROJECT_STATE.md` for what's done and what's pending.
See `PROJECT_MAP.md` for the full URL/file map.
See `_knowledge/content-strategy/blog-strategy.md` for the content roadmap.
