# upranked.io Development TODO
*Last updated: 2026-07-06*

---

## Design System & Core Infrastructure
- [x] Configure Tailwind CSS with custom design tokens (navy #0A0F1E, gold #C9A84C, white text)
- [x] Set up Google Fonts (Inter for Latin, Cairo for Arabic)
- [x] Create global styling and CSS variables in index.css
- [x] Implement Framer Motion animation library and scroll-triggered animations
- [x] Set up theme context with dark mode support
- [x] Create reusable component library (Button, Card, Section, CTA variants)

## Navigation & Layout
- [x] Build responsive top navigation bar with logo, service dropdown, About, Blog, Contact links
- [x] Implement language toggle (EN/AR) in top nav
- [x] Add persistent "Book a Call" CTA button in gold in top nav
- [x] Create mobile hamburger menu with smooth drawer animation
- [x] Build floating WhatsApp/contact button for GCC market (WhatsApp CTAs fixed site-wide Jul 6)
- [x] Ensure fully mobile-responsive design across all breakpoints
- [ ] Implement sticky CTA bar on mobile

## Hero Landing Page
- [x] Create full-viewport asymmetric hero layout with dark navy background
- [x] Implement animated headline with Framer Motion
- [x] Add trust-building subheadline below headline
- [x] Create high-contrast CTA button: "Book Your Free Strategy Call with Sam Hamouda"
- [x] Ensure everything above the fold without scroll
- [x] Add subtle background texture or gradient for premium feel
- [x] Implement scroll-down indicator or smooth scroll animation

## Services Section
- [x] Build horizontal card grid with hover-lift effect
- [x] Add gold border-glow on card hover
- [x] Create service cards for all five services (Medical SEO, Industrial SEO, Growth Intelligence, Tailored Tools, Tailored Website)
- [x] Link each card to dedicated service detail page
- [x] Add service icons or visual elements to each card

## Service Detail Pages
- [x] Medical SEO detail page (/industries/medical-seo)
- [x] Industrial SEO detail page (/industries/industrial-seo)
- [x] AEO/GEO detail page (/seo/aeo)
- [x] Local SEO detail page (/seo/local-seo)
- [x] Tailored Tools page (pricing: FREE)
- [x] Tailored Website page (pricing: FREE)
- [x] Related Reading cards added to key service pages → blog cluster posts (9 cards total, Jul 6)
- [ ] Growth Intelligence dedicated page
- [ ] Industrial SEO full benefit list + inline CTA

## Market Pages
- [x] GCC Markets overview (/markets/gcc)
- [x] Dubai market page (/markets/gcc/uae/dubai)
- [x] Riyadh market page (/markets/gcc/ksa/riyadh)
- [x] Kuwait market page (/markets/gcc/kuwait)
- [x] Bahrain market page (/markets/gcc/bahrain)
- [x] London market page (/markets/uk/london)
- [x] New York market page (/markets/usa/new-york)
- [x] Germany market page (/markets/eu/germany)
- [x] France market page (/markets/eu/france)

## Blog / Insights Hub
- [x] Blog landing page with featured articles, sorted by date
- [x] 22 blog posts total (4 hardcoded Apr, 18 in new-posts.json)
- [x] Internal linking strategy: Related Reading cards on service/market pages → blog posts
- [x] Article metadata (author, date, reading time, category tags)
- [x] DOMPurify sanitisation on all blog HTML output (XSS protection)
- [x] React 18 hydration fix: lazy useState for new-posts.json posts
- [x] Em-dash encoding fixed across all posts (U+FFFD corruption resolved)
- [x] 60 prerender routes — all posts + service/market pages statically pre-rendered

**Blog posts live (Jul 6 GSC-driven additions):**
- arabic-seo-agency-dubai-uae (cluster hub — 529 impr at pos 46.4)
- choose-arabic-seo-agency-dubai
- arabic-seo-services-dubai-guide
- dubai-clinic-seo-page-9
- riyadh-seo-vision-2030
- aeo-geo-bahrain-dubai-gcc-ai-search (pos 1.4 for Bahrain AEO)
- middle-east-seo-strategy
- healthcare-seo-uae-2026
- dubai-seo-guide-2026, riyadh-seo-guide-2026, kuwait-seo-guide-2026, bahrain-seo-guide-2026
- seo-uae-2026-what-works, medical-seo-dubai-clinics, bilingual-seo-arabic-english
- geo-targeting-seo-dubai, on-page-seo-dubai-rankings, schema-markup-gcc-rich-results
- apex-framework-explained, off-page-seo-link-building-dubai
- why-gcc-businesses-invisible-google, industrial-b2b-seo-gcc-procurement

**Next blog opportunities (from GSC Jul 6):**
- [ ] UAE cluster: 970 impressions, 6 clicks — needs more cluster posts
- [ ] FAQ entry for "aeo optimization bahrain" (pos 1.4, 43 impr, 0 clicks — AI Overview capturing)

## Contact Page
- [x] Contact page with inquiry form (/contact)
- [x] Form validation (react-hook-form + zod)
- [x] Netlify honeypot anti-spam (data-netlify-honeypot="bot-field")
- [x] Automatic owner notification on form submission (tRPC notifyOwner)
- [ ] Embedded map or location details for GCC offices

## Static Pages
- [x] Privacy Policy page (/privacy)
- [x] Terms of Service page (/terms)
- [x] 404 error page

## SEO & Schema Markup
- [x] Meta tags (title, description, canonical) on all pages
- [x] Open Graph and Twitter Card meta tags on blog posts
- [x] Sitemap generation (scripts/generate-sitemap.mjs)
- [x] Content Security Policy header (netlify.toml)
- [x] X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- [ ] Organization schema (JSON-LD)
- [ ] LocalBusiness schema for GCC locations
- [ ] Service schema for all five services
- [ ] FAQPage schema (already has FAQ content; needs JSON-LD wrapper)
- [ ] Person schema for Sam Hamouda

## Analytics & Tracking
- [x] Microsoft Clarity tracking (clarity.microsoft.com — check for session recordings)
- [x] CSP hash for Clarity inline script (sha256 in netlify.toml)
- [x] Google Search Console verified and connected
- [ ] GSC: submit 4 new blog URLs added Jul 6 for indexing
- [ ] Set up Core Web Vitals monitoring dashboard

## Security (Enterprise Hardening — Jul 6)
- [x] DOMPurify on dangerouslySetInnerHTML in BlogPost.tsx
- [x] Netlify honeypot on contact form
- [x] Content Security Policy (netlify.toml)
- [x] JWT_SECRET fail-fast validation on startup (no empty-string fallback)
- [x] Path traversal protection on storage proxy (/manus-storage/*)
- [x] Authentication required on storage proxy route
- [x] Helmet.js security headers on Express server
- [x] CORS allowlist (origin-restricted to upranked.io + localhost)
- [x] Rate limiting: 200 req/15min general, 20 req/15min auth endpoints
- [x] Body parser scoped: 1MB tRPC, 10MB elsewhere (was 50MB everywhere)
- [x] OAuth open redirect protection (state param hostname allowlist)
- [x] npm dep patches: axios ^1.16.0, drizzle-orm ^0.45.2, form-data override >=4.0.6
- [x] SECURITY_AUDIT.md — full findings doc with CVSS scores and roadmap
- [ ] **ACTION REQUIRED: Set JWT_SECRET in Netlify env vars** (server won't start without it)
- [ ] **ACTION REQUIRED: Set VITE_SUPABASE_ANON_KEY in Netlify env vars**
- [ ] **ACTION REQUIRED: Enable Supabase RLS on all tables**
- [ ] Remove hardcoded Supabase key fallback from client/src/lib/supabase.ts:4
- [ ] Fix sameSite cookie: use "lax" on HTTP, "none" on HTTPS (server/_core/cookies.ts)
- [ ] Add audit logging middleware on auth routes (M-02)
- [ ] Add .max() limits to all tRPC string inputs (M-03)
- [ ] Sanitise LLM error messages before returning to client (M-05)

## Performance & Optimization
- [x] Playwright pre-render for all 60 routes → Netlify serves static HTML
- [x] Vite build with code splitting
- [ ] Image optimization (sharp installed but not wired to image pipeline)
- [ ] Lazy loading for images and components
- [ ] Test Core Web Vitals (LCP, FID, CLS)

## Bilingual Support (Arabic/English)
- [x] Language toggle in top navigation (UI component present)
- [ ] Arabic translations for all pages and content
- [ ] RTL layout for Arabic (flex direction, padding, text alignment)
- [ ] hreflang tags for proper regional targeting

## GEO (Generative Engine Optimization)
- [x] GEO-optimized blog posts (aeo-geo-bahrain-dubai-gcc-ai-search)
- [x] FAQ sections optimized for AI-search citation on key posts
- [ ] Organization schema to reinforce brand entity signals
- [ ] AI search visibility monitoring

## Deployment & Launch
- [x] Custom domain upranked.io
- [x] SSL/TLS (Netlify managed)
- [x] Microsoft Clarity analytics
- [x] Google Search Console
- [x] Netlify deploy pipeline (pre-built dist/public, no server-side build)
- [ ] Set up monitoring/alerting for uptime
- [ ] Monthly npm audit check (current: 0 Critical, 0 High CVEs)
