# PROJECT MAP — upranked.io

> Every URL, file, and system mapped. Use this to navigate without getting lost.

---

## URL → File Map

### Core Pages
| URL | Source File | Hero SVG |
|-----|------------|---------|
| / | pages/Home.tsx | 01-growth-chart.svg |
| /about | pages/About.tsx | 02-apex-framework.svg |
| /methodology | pages/Methodology.tsx | 02-apex-framework.svg |
| /contact | pages/Contact.tsx | — (form page) |
| /faq | pages/FAQ.tsx | — |
| /admin | pages/Admin.tsx | — (protected) |

### SEO Hub & Cluster
| URL | Source File | Hero SVG |
|-----|------------|---------|
| /seo | pages/SEOHub.tsx | 03-serp-positions.svg |
| /seo/on-page | pages/seo/OnPageSEO.tsx | 09-onpage-seo.svg |
| /seo/off-page | pages/seo/OffPageSEO.tsx | 10-offpage-seo.svg |
| /seo/technical | pages/seo/TechnicalSEO.tsx | 08-magnifier-audit.svg |
| /seo/local | pages/seo/LocalSEO.tsx | 03-serp-positions.svg |
| /seo/bilingual | pages/seo/BilingualSEO.tsx | 11-bilingual-seo.svg |
| /seo/schema | pages/seo/SchemaSEO.tsx | 12-schema-markup.svg |
| /seo/analytics | pages/seo/SEOAnalytics.tsx | 13-seo-analytics.svg |
| /seo/content-architecture | pages/seo/ContentArchitecture.tsx | 14-content-architecture.svg |
| /seo/geo | pages/seo/GeoSEO.tsx | 15-geo-targeted-seo.svg |

### Industry SEO
| URL | Source File | Hero SVG |
|-----|------------|---------|
| /seo-industries | pages/Industries.tsx | 16-all-industries.svg |
| /industries/medical-seo | pages/services/MedicalSEO.tsx | 17-medical-seo.svg |
| /industries/industrial-seo | pages/services/IndustrialSEO.tsx | 18-industrial-seo.svg |
| /industries/business-seo | pages/services/BusinessSEO.tsx | 19-business-seo.svg |

### Growth Intelligence
| URL | Source File | Hero SVG |
|-----|------------|---------|
| /growth-intelligence | pages/GrowthIntelligence.tsx | 20-all-growth-services.svg |
| /growth-intelligence/consultation | pages/services/BusinessConsultation.tsx | 21-business-consultation.svg |
| /growth-intelligence/tools | pages/services/TailoredTools.tsx | 22-tailored-tools.svg |
| /growth-intelligence/websites | pages/services/TailoredWebsite.tsx | 23-tailored-website.svg |
| /growth-intelligence/strategy | pages/services/BusinessStrategy.tsx | 24-business-strategy.svg |

### Markets
| URL | Source File |
|-----|------------|
| /markets/gcc | pages/markets/gcc/GCCMarkets.tsx |
| /markets/gcc/uae/dubai | pages/markets/gcc/uae/DubaiMarket.tsx |
| /markets/gcc/ksa/riyadh | pages/markets/gcc/ksa/RiyadhMarket.tsx |
| /markets/gcc/kuwait | pages/markets/gcc/kuwait/KuwaitMarket.tsx |
| /markets/gcc/bahrain | pages/markets/gcc/bahrain/BahrainMarket.tsx |
| /markets/uk/london | pages/markets/uk/LondonMarket.tsx |
| /markets/usa/new-york | pages/markets/usa/NewYorkMarket.tsx |
| /markets/eu/germany | pages/markets/eu/GermanyMarket.tsx |
| /markets/eu/france | pages/markets/eu/FranceMarket.tsx |

### Blog
| URL | Source |
|-----|--------|
| /blog | pages/Blog.tsx |
| /blog/:slug | pages/BlogPost.tsx (renders from blogPosts.ts + Supabase) |
| /blog/seo-uae-2026-what-works | static in blogPosts.ts |
| /blog/medical-seo-dubai-clinics | static in blogPosts.ts |
| /blog/industrial-b2b-seo-gcc-procurement | static in blogPosts.ts |
| /blog/why-gcc-businesses-invisible-google | static in blogPosts.ts |
| /blog/bilingual-seo-arabic-english | static in blogPosts.ts |
| /blog/apex-framework-explained | static in blogPosts.ts |

### Legal
| URL | Source File |
|-----|------------|
| /privacy | pages/Privacy.tsx |
| /terms | pages/Terms.tsx |

---

## File System Map

```
upranked/
├── client/
│   ├── index.html                    ← Global HTML shell (meta, OG, JSON-LD base)
│   ├── public/
│   │   ├── heroes/                   ← 24 branded SVG hero illustrations
│   │   ├── images/                   ← Founder portrait + category image folders
│   │   ├── favicon.svg               ← Favicon (SVG, covers all modern browsers)
│   │   ├── apple-touch-icon.png      ← iOS home screen icon
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── site.webmanifest          ← PWA manifest
│   │   ├── robots.txt
│   │   └── _redirects               ← Netlify SPA redirect rule
│   └── src/
│       ├── App.tsx                   ← Root app + ALL routes
│       ├── main.tsx                  ← React entry point
│       ├── components/
│       │   ├── Navigation.tsx        ← Global nav (logo, links, CTA)
│       │   ├── Footer.tsx            ← Global footer (all links, social, contact)
│       │   ├── WhatsAppButton.tsx    ← Floating WhatsApp CTA
│       │   ├── ErrorBoundary.tsx
│       │   └── ui/                   ← shadcn/ui component library (35+ components)
│       ├── data/
│       │   ├── blogPosts.ts          ← Static blog post data (TypeScript)
│       │   ├── new-posts.json        ← JSON blog additions (no TS required)
│       │   └── NEW_POST_TEMPLATE.ts  ← Copy-paste template for new posts
│       ├── hooks/
│       │   ├── usePageMeta.ts        ← Dynamic meta/canonical/schema per page
│       │   └── useMobile.tsx
│       ├── lib/
│       │   ├── supabase.ts           ← Supabase client (blog CMS)
│       │   └── trpc.ts
│       └── pages/
│           ├── Home.tsx
│           ├── About.tsx
│           ├── Methodology.tsx
│           ├── Contact.tsx           ← Netlify Form wired
│           ├── FAQ.tsx
│           ├── Blog.tsx
│           ├── BlogPost.tsx
│           ├── Admin.tsx             ← Internal content admin (/admin)
│           ├── SEOHub.tsx
│           ├── Industries.tsx
│           ├── GrowthIntelligence.tsx
│           ├── Privacy.tsx
│           ├── Terms.tsx
│           ├── NotFound.tsx
│           ├── seo/                  ← 9 SEO cluster pages
│           ├── services/             ← 7 service detail pages
│           └── markets/             ← 9 market pages (gcc, uk, usa, eu)
├── server/
│   ├── _core/                        ← Manus platform core (auth, tRPC, DB, LLM)
│   ├── db.ts
│   ├── routers.ts
│   └── storage.ts
├── shared/
│   ├── types.ts
│   └── const.ts
├── drizzle/
│   └── schema.ts                     ← DB schema (users table, MySQL)
├── scripts/
│   ├── prerender.mjs                 ← Playwright static pre-render (42 pages)
│   └── generate-sitemap.mjs         ← Auto sitemap generator
├── dist/
│   └── public/                       ← Pre-rendered static output (committed to git)
├── .github/
│   └── workflows/rebuild.yml        ← Auto-rebuild on Supabase blog publish
├── _knowledge/                       ← This knowledge base
├── MASTER_CONTEXT.md
├── CURRENT_PROJECT_STATE.md
├── PROJECT_MAP.md
├── PRODUCT.md                        ← impeccable design context
├── SEO_PHASE0_BRAND_LOCK.md          ← Original brand/SEO strategy doc
├── todo.md                           ← Legacy todo list
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## External Systems

| System | Purpose | Access |
|--------|---------|--------|
| Netlify | Static hosting + Forms | app.netlify.com |
| GitHub | Source + dist hosting | github.com/worksamawork-gif/upranked-site |
| Supabase | Blog CMS (blog_posts table) | supabase.co (project: xusvmvvosdvmixtqkiop) |
| Gmail | Contact form notifications | uprankedio@gmail.com |
| WhatsApp | Direct client contact | wa.me/201121664778 |

---

## Internal Link Architecture

```
Home (/)
├── → /about
├── → /methodology
├── → /contact
├── → /seo (hub)
│       ├── → /seo/on-page
│       ├── → /seo/off-page
│       ├── → /seo/technical
│       ├── → /seo/local
│       ├── → /seo/bilingual
│       ├── → /seo/schema
│       ├── → /seo/analytics
│       ├── → /seo/content-architecture
│       └── → /seo/geo
├── → /seo-industries (hub)
│       ├── → /industries/medical-seo
│       ├── → /industries/industrial-seo
│       └── → /industries/business-seo
├── → /growth-intelligence (hub)
│       ├── → /growth-intelligence/consultation
│       ├── → /growth-intelligence/tools
│       ├── → /growth-intelligence/websites
│       └── → /growth-intelligence/strategy
├── → /markets/gcc (hub)
│       ├── → /markets/gcc/uae/dubai
│       ├── → /markets/gcc/ksa/riyadh
│       ├── → /markets/gcc/kuwait
│       └── → /markets/gcc/bahrain
└── → /blog
        └── → /blog/:slug (6 posts)
```
