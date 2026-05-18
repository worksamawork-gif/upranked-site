# Prompt: Write / Rebuild an SEO Service Page

Use when creating or improving service pages, industry pages, or market pages.

---

## Master Prompt

```
You are writing a service page for upranked.io, a premium GCC SEO agency.

BRAND CONTEXT:
- Founder: Sama Alaa (Founder & Chief Growth Strategist)
- Methodology: APEX Framework™ (Audit → Position → Execute → Expand)
- Primary CTA: Book a Free APEX Diagnostic (/contact/)
- Email: uprankedio@gmail.com
- Voice: Authoritative, surgical, GCC-native. No generic agency language.

PAGE DETAILS:
- Page: [PAGE NAME — e.g. Medical SEO Dubai]
- URL: [/industries/medical-seo]
- Primary keyword: [e.g. medical SEO Dubai]
- Secondary keywords: [e.g. healthcare SEO UAE, clinic SEO Dubai]
- Target audience: [e.g. clinic owners, hospital marketing managers in UAE]
- Market: [GCC city/country]

OUTPUT: React TSX component following this structure:

1. HERO SECTION
   - Accent label badge (text-xs uppercase tracking-widest text-accent)
   - H1 with primary keyword + market
   - 2-3 sentence value proposition
   - Contact meta row (MapPin, Phone, Mail icons)
   - Hero SVG image (right column, use /heroes/[XX-name].svg)

2. FEATURES / SERVICES SECTION
   - H2: "[Service] for [Market]"
   - Grid of 6-9 feature cards (CheckCircle icon + title + 2-sentence description)
   - Each feature must be specific to the target industry/market

3. APEX FRAMEWORK SECTION (optional but recommended)
   - Show how the 4 phases apply specifically to this service/market

4. FAQ SECTION
   - H2: "[Service] FAQs — [Market]"
   - 5-8 questions a real prospect would ask
   - Answers: direct, specific, no hedging
   - Include FAQ schema markup (JSON-LD)

5. AUTHOR BIO CARD
   - Photo: /images/sam-hamouda-seo-consultant-dubai.webp (w-28 h-44)
   - "Written & Overseen By" label
   - Sama Alaa, title, bio paragraph
   - Contact meta links

6. CLOSING CTA SECTION
   - Heading: compelling conversion headline
   - Body: what the APEX Diagnostic includes
   - Button: "Book Your Free APEX Diagnostic" → /contact/

7. SCHEMA: ServiceSchema + FAQPage schema via usePageMeta()

STYLE RULES:
- Use existing Tailwind classes: card-premium, btn-primary, container-premium, section-padding
- Alternate section backgrounds: bg-navy and bg-dark-gray
- Framer Motion animations on all major elements (initial opacity:0 y:20, animate to 1/0)
- No em dashes in copy. No "leverage" as a verb. No "full-service".
- All text references to contact use uprankedio@gmail.com
```

---

## Market Page Variation

```
Write a geo-targeted market page for upranked.io.

Market: [CITY, COUNTRY — e.g. Dubai, UAE]
URL: [/markets/gcc/uae/dubai]
Primary keyword: [SEO agency Dubai]
Target: Business owners in [city] seeking premium SEO

Structure:
1. Hero: H1 with city + keyword, market-specific value prop
2. Why [city] needs GCC-native SEO (market insight section)
3. Services offered in [city] (link to service pages)
4. Local market stats / context
5. Author bio (Sama Alaa operating in this market)
6. FAQ specific to [city] market
7. CTA: APEX Diagnostic

Include LocalBusiness schema with addressLocality: [city], addressCountry: [country code].
```
