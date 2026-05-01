# upranked.io Development TODO

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
- [ ] Implement sticky CTA bar on mobile
- [ ] Build floating WhatsApp/contact button for GCC market
- [x] Ensure fully mobile-responsive design across all breakpoints

## Hero Landing Page
- [x] Create full-viewport asymmetric hero layout with dark navy background
- [x] Implement animated headline: "upranked.io – Premium Growth Intelligence Lab" (Framer Motion fade-in, stagger)
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

## Service Detail Pages (5 pages)
- [ ] Medical SEO detail page with full description, benefits list, inline CTA
- [ ] Industrial SEO detail page with full description, benefits list, inline CTA
- [ ] Growth Intelligence detail page with full description, benefits list, inline CTA
- [ ] Tailored Tools detail page with full description, benefits list, inline CTA
- [ ] Tailored Website detail page with full description, benefits list, inline CTA

## About Page
- [ ] Create split layout: Sam Hamouda's photo on one side
- [ ] Add narrative bio and certifications on other side
- [ ] Implement APEX Framework™ visual breakdown (timeline or process diagram)
- [ ] Add trust signals and authority indicators
- [ ] Include social proof or credentials section

## Blog / Insights Hub (Hub & Spoke Model)
- [ ] Create blog landing page with featured articles
- [ ] Build pillar page: Medical SEO Insights with comprehensive content
- [ ] Build pillar page: Industrial SEO Insights with comprehensive content
- [ ] Build pillar page: Growth Intelligence Insights with comprehensive content
- [ ] Create topic cluster articles supporting each pillar (minimum 3-5 per pillar)
- [ ] Implement internal linking strategy between pillar and cluster articles
- [ ] Add article metadata (author, date, reading time, category tags)
- [ ] Create blog archive/category filtering

## Case Studies & Testimonials
- [ ] Create case studies section with detailed client success stories
- [ ] Build individual case study pages with metrics, challenges, solutions, results
- [ ] Add testimonials section with client quotes and photos
- [ ] Include case studies from UAE, Kuwait, and Bahrain markets
- [ ] Create carousel or grid layout for testimonials
- [ ] Add video testimonial support (optional enhancement)

## Contact & Booking Page
- [ ] Create contact page with inquiry form
- [ ] Build booking form for 1-on-1 consultation with Sam Hamouda
- [ ] Implement form validation and error handling
- [ ] Set up automatic owner notification on form submission
- [ ] Add contact information (email, phone, office locations)
- [ ] Include embedded map or location details for GCC offices
- [ ] Create success message after form submission

## FAQ Section
- [ ] Create FAQ page with common GCC client questions
- [ ] Optimize FAQ content for conversational AI and GEO search results
- [ ] Implement accordion or expandable FAQ layout
- [ ] Include structured FAQ schema markup
- [ ] Cover topics: pricing, process, timeline, industry expertise, etc.

## Bilingual Support (Arabic/English)
- [ ] Implement language toggle in top navigation
- [ ] Create Arabic translations for all pages and content
- [ ] Implement RTL layout for Arabic (flex direction, padding, text alignment)
- [ ] Configure hreflang tags for proper regional targeting
- [ ] Ensure proper Arabic font rendering (Cairo font)
- [ ] Test RTL layout across all pages and components
- [ ] Add language preference persistence (localStorage)

## SEO & Schema Markup
- [ ] Implement Organization schema (JSON-LD)
- [ ] Implement LocalBusiness schema (JSON-LD) for GCC locations
- [ ] Implement Service schema for all five services (JSON-LD)
- [ ] Implement FAQPage schema (JSON-LD)
- [ ] Implement Person schema for Sam Hamouda (JSON-LD)
- [ ] Create sitemap.xml with all pages and priority levels
- [ ] Create robots.txt with proper crawl directives
- [ ] Implement meta tags (title, description, canonical) on all pages
- [ ] Add Open Graph and Twitter Card meta tags
- [ ] Configure Core Web Vitals optimization (image optimization, lazy loading, code splitting)

## GEO (Generative Engine Optimization)
- [ ] Optimize structured data for AI model consumption (ChatGPT, Gemini, Perplexity)
- [ ] Write conversational content optimized for AI assistant queries
- [ ] Implement brand mention expansion strategy across content
- [ ] Create AI search visibility monitoring setup
- [ ] Optimize content for natural language and direct answers

## Additional Pages & Features
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Implement 404 error page with navigation
- [ ] Add breadcrumb navigation for better UX
- [ ] Create newsletter signup section (optional)
- [ ] Add social media links in footer

## Performance & Optimization
- [ ] Optimize images for web (compression, responsive sizes)
- [ ] Implement lazy loading for images and components
- [ ] Minify and bundle CSS/JS efficiently
- [ ] Test Core Web Vitals (LCP, FID, CLS)
- [ ] Implement caching strategies
- [ ] Test page load speed across devices

## Testing & QA
- [ ] Test all forms and CTAs for functionality
- [ ] Verify bilingual content and RTL layout
- [ ] Test mobile responsiveness across devices
- [ ] Verify schema markup with Google Rich Results Test
- [ ] Test accessibility (WCAG 2.1 AA compliance)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Test on GCC-region networks if possible

## Deployment & Launch
- [ ] Set up custom domain (upranked.io)
- [ ] Configure SSL/TLS certificate
- [ ] Set up analytics and tracking
- [ ] Create monitoring and alerting
- [ ] Prepare launch checklist and go-live plan
- [ ] Set up backup and disaster recovery
