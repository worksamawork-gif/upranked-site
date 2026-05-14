/*
 * PAGE: /industries/business
 * PRIMARY KW: business SEO Dubai (Vol: ~1,300/mo GCC | KD: 38)
 * SECONDARY KW: SEO agency Dubai UAE, SEO for companies GCC, B2B SEO Dubai, SME SEO UAE
 * LSI: commercial intent SEO, revenue SEO, organic lead generation Dubai, Google ranking Dubai
 * NEAR ME VARIANTS: SEO agency near me Dubai, SEO company near me UAE, business SEO near me GCC, SEO consultant near me Dubai
 * META TITLE (58 chars): Business SEO Dubai & UAE | SEO Agency | upranked.io
 * META DESC (158 chars): Revenue-focused business SEO for companies in Dubai & UAE. Commercial intent strategy, bilingual EN/AR, APEX Framework™. Book your free strategy call.
 * INTERNAL LINKS TO: /contact, /methodology, /about, /industries, /growth-intelligence/consultation, /blog/seo-uae-2026-what-works
 * INTERNAL LINKS FROM: Home, /industries hub, /growth-intelligence, /about, /blog posts
 * SCHEMA: @graph → Service + FAQPage + Person + BreadcrumbList
 * IMAGES: /images/business/business-seo-dubai-hero.webp, seo-agency-uae-results.webp, commercial-keywords-gcc.webp,
 *         apex-business-seo-process.webp, sam-hamouda-business-seo-expert.webp, business-seo-gcc-service-areas.webp
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  CheckCircle, ArrowRight, ChevronDown, TrendingUp,
  Target, BarChart3, Globe, Users, Shield, Star,
  Building2, MapPin, Phone, Mail, Zap, Award, Search
} from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

/* ─── FAQ accordion ─── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-dark-gray hover:bg-navy/60 transition-colors duration-200"
      >
        <span className="font-semibold text-white pr-4 text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 py-5 text-text-secondary leading-relaxed text-sm md:text-base bg-navy/30 border-t border-border">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Data ─── */
const faqs = [
  {
    q: 'What is business SEO and how does it differ from general SEO?',
    a: 'Business SEO is a revenue-focused search strategy that targets commercial-intent keywords — the queries that decision-makers type when they are actively looking to hire or purchase. Unlike generic SEO that chases traffic volume, business SEO in Dubai and the UAE prioritises keywords like "SEO agency Dubai", "digital marketing company UAE", or "B2B marketing consultant GCC" that signal buying intent. Every tactic is tied to pipeline value, not vanity metrics.',
  },
  {
    q: 'How long does it take to see results from business SEO in Dubai?',
    a: 'Technical and on-page improvements go live in weeks 1–6. Keyword rankings typically improve in months 2–4 for lower-competition terms, and months 4–7 for competitive Dubai and GCC terms. Consistent inbound leads from organic search typically begin by month 5–6. Competitive terms like "SEO agency Dubai" can take 8–12 months depending on current domain authority. The APEX Framework™ is designed to generate early quick wins while building long-term compounding authority.',
  },
  {
    q: 'Do you offer bilingual SEO in English and Arabic for Dubai businesses?',
    a: 'Yes. Every business SEO engagement includes bilingual strategy — independent Arabic keyword research, native-quality Arabic content, hreflang implementation, and RTL technical configuration. Arabic search in the UAE and Saudi Arabia is a separate channel with distinct buyer behaviours. Businesses that skip Arabic SEO leave 35–50% of GCC search volume untouched. upranked.io builds both channels simultaneously.',
  },
  {
    q: 'What types of companies benefit most from business SEO in the GCC?',
    a: 'Any company where the sales cycle involves online research before a decision. This includes: professional services (law firms, accounting, HR consultancies), B2B technology companies, financial services firms, logistics and supply chain providers, real estate developers and agencies, education and training providers, and e-commerce businesses in the UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain. If your clients search Google before calling, business SEO is your highest ROI acquisition channel.',
  },
  {
    q: 'How do you measure the ROI of business SEO?',
    a: 'upranked.io tracks organic revenue, not just rankings. We configure Google Search Console, GA4, and CRM attribution to map organic sessions → leads → closed deals. Monthly reporting covers: keyword ranking movements, organic traffic volume and quality, lead-to-close rates from organic, cost-per-lead versus paid channels, and estimated revenue influenced by SEO. This makes business SEO comparable to any other sales investment — with a full audit trail.',
  },
  {
    q: 'Can I find an SEO agency near me in Dubai for business SEO?',
    a: 'upranked.io serves businesses across Dubai — DIFC, Downtown Dubai, Business Bay, JLT, Dubai Internet City, Dubai Media City, and all major commercial zones — as well as Abu Dhabi, Sharjah, Riyadh, Jeddah, Doha, Kuwait City, and Manama. Whether you are searching for an "SEO agency near me" in Dubai or a remote-first GCC growth partner, upranked.io delivers the same premium, GCC-specific strategy. Book a free APEX Diagnostic call to get started.',
  },
];

const benefits = [
  { icon: Target, title: 'Commercial-Intent Keywords', desc: 'We map every keyword by buyer stage — awareness, consideration, decision — and build content that converts at each stage of the GCC business buying cycle.' },
  { icon: TrendingUp, title: 'Revenue Attribution', desc: 'Monthly reporting links organic rankings to leads, proposals sent, and closed contracts. You always know the exact return on your SEO investment.' },
  { icon: Globe, title: 'Bilingual EN/AR Strategy', desc: 'Independent Arabic keyword research and native content creation for the GCC market. Arabic SEO runs as a full parallel channel — not an afterthought.' },
  { icon: Search, title: 'Competitor Displacement', desc: 'We identify exactly which Dubai and UAE competitors occupy your target keywords and build a displacement strategy to systematically move you above them.' },
  { icon: Building2, title: 'Google Business Profile', desc: 'Full GBP optimisation for service-area businesses across Dubai, Abu Dhabi, and the UAE. Appear in the Local Pack for "near me" and district-specific searches.' },
  { icon: BarChart3, title: 'Technical SEO Audit', desc: 'Core Web Vitals, crawl architecture, internal linking, schema markup, and indexation reviewed and fixed before content work begins.' },
  { icon: Users, title: 'Thought Leadership Content', desc: 'High-authority content that positions your business as the category leader in the GCC. Builds E-E-A-T signals Google rewards with first-page rankings.' },
  { icon: Shield, title: 'Authority Link Building', desc: 'Editorial placements and digital PR in GCC business publications, UAE news outlets, and sector-specific directories that move domain authority fast.' },
  { icon: Zap, title: 'Landing Page Optimisation', desc: 'Service pages and conversion funnels rebuilt for commercial keywords — so when visitors arrive from search, they convert to leads at the highest possible rate.' },
  { icon: Award, title: 'APEX Framework™', desc: 'Our proprietary 4-phase methodology — Audit → Position → Execute → Expand — built from 20+ GCC business engagements and continuously refined for GCC search dynamics.' },
];

const apexPhases = [
  {
    step: 'A', phase: 'Audit',
    title: 'Full Business SEO Audit',
    deliverables: ['Technical health assessment (Core Web Vitals, crawl errors, indexation)', 'Commercial keyword gap vs top 5 Dubai/GCC competitors', 'Current revenue keyword rankings and traffic value', 'Content quality audit — E-E-A-T signals, topical authority gaps', 'Backlink profile review and toxic link identification'],
  },
  {
    step: 'P', phase: 'Position',
    title: 'Revenue Keyword Architecture',
    deliverables: ['Commercial intent keyword map by buyer stage and location', 'Content gap matrix vs competitors ranking for your target terms', 'Site architecture redesign for SEO silo efficiency', 'Arabic keyword research and bilingual content plan', 'Conversion page priority list with CRO recommendations'],
  },
  {
    step: 'E', phase: 'Execute',
    title: 'On-Page & Authority Build',
    deliverables: ['H1–H6 optimisation and meta tag rewrite across all key pages', 'Schema markup (Service, Organisation, LocalBusiness, FAQ, Person)', 'GBP optimisation and local citation consistency across UAE directories', 'Targeted content production — English + Arabic service pages and blogs', 'Editorial link acquisition from GCC business and sector publications'],
  },
  {
    step: 'X', phase: 'Expand',
    title: 'Scale & Compound Growth',
    deliverables: ['New commercial keywords added monthly as authority grows', 'Additional GCC city/country targeting (Riyadh, Doha, Kuwait City)', 'Content refresh cycle to maintain and improve rankings', 'Revenue attribution reporting — organic leads, pipeline, closed deals', 'Quarterly strategy reviews and re-prioritisation based on ROI data'],
  },
];

const comparisonRows = [
  { factor: 'Keyword strategy', business: 'Commercial intent — buyer-stage mapped', generic: 'Volume-first — any traffic' },
  { factor: 'Content approach', business: 'Thought leadership + conversion copy', generic: 'Blog posts for traffic only' },
  { factor: 'Reporting metric', business: 'Leads, pipeline, revenue', generic: 'Rankings and sessions' },
  { factor: 'GCC localisation', business: 'EN + AR, UAE free zone + city targeting', generic: 'English only, generic location' },
  { factor: 'Schema markup', business: 'Service + Person + FAQ + Local schema', generic: 'Basic or none' },
  { factor: 'Competitive analysis', business: 'Monthly displacement tracking', generic: 'One-time audit' },
  { factor: 'Authority building', business: 'GCC editorial placements', generic: 'Generic directories' },
];

const stats = [
  { value: '280%', label: 'Average organic lead increase at 12 months' },
  { value: '5mo', label: 'Average time to page 1 for target keywords' },
  { value: '6.1x', label: 'Average 12-month ROI versus paid search' },
  { value: '20+', label: 'GCC businesses served across 5 countries' },
];

const tocItems = [
  { id: 'what-is', label: 'What Is Business SEO?' },
  { id: 'how-buyers-search', label: 'How Dubai Buyers Search' },
  { id: 'benefits', label: 'What You Get' },
  { id: 'apex', label: 'The APEX Process' },
  { id: 'results', label: 'Results & Stats' },
  { id: 'about-Sama', label: 'About Sama Alaa' },
  { id: 'why-upranked', label: 'Why upranked.io' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'faq', label: 'FAQ' },
];

const serviceAreas = [
  { city: 'Dubai, UAE', zones: 'DIFC, Downtown, Business Bay, JLT, Dubai Internet City, DMC — Primary GCC hub', primary: true },
  { city: 'Riyadh, KSA', zones: 'KAFD, Olaya, Diriyah Gate — Fastest-growing GCC market', primary: true },
  { city: 'Kuwait City, Kuwait', zones: 'Salmiya, Hawally, Sharq financial district, Dasman, Al Rai' },
  { city: 'Manama, Bahrain', zones: 'Bahrain Financial Harbour, Seef District, Diplomatic Area, Amwaj Islands' },
  { city: 'London, UK', zones: 'City of London, Canary Wharf, Mayfair, Shoreditch, West End — Global expansion market', primary: true },
  { city: 'New York, USA', zones: 'Manhattan, Midtown, Financial District, Brooklyn, SoHo — Global expansion market', primary: true },
  { city: 'Abu Dhabi & Sharjah, UAE', zones: 'ADGM, Al Reem Island, Khalidiyah · Sharjah Media City (Shams), SAIF Zone, Ajman Free Zone' },
  { city: 'Jeddah & NEOM, KSA', zones: 'Jeddah Corniche, Prince Sultan Road, Al Hamra · NEOM mega-project zone' },
  { city: 'Doha, Qatar', zones: 'West Bay, Lusail City, Qatar Science & Technology Park, Msheireb Downtown' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://upranked.io/industries/business#service',
      name: 'Business SEO Dubai — Revenue-Focused SEO for GCC Companies',
      serviceType: 'Business SEO',
      description: 'Revenue-focused business SEO for companies in Dubai, UAE, and the GCC. Commercial intent keyword strategy, bilingual EN/AR content, APEX Framework™ methodology, and full pipeline attribution.',
      provider: {
        '@type': 'Organization',
        '@id': 'https://upranked.io/#organization',
        name: 'upranked.io',
        url: 'https://upranked.io',
        telephone: '+201121664778',
        email: 'Sam@upranked.io',
        logo: 'https://upranked.io/logo.png',
        address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
      },
      areaServed: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Bahrain' },
      ],
      availableLanguage: [{ '@type': 'Language', name: 'English' }, { '@type': 'Language', name: 'Arabic' }],
      url: 'https://upranked.io/industries/business',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        areaServed: 'GCC',
        url: 'https://upranked.io/contact',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://upranked.io/industries/business#faq',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'Person',
      '@id': 'https://upranked.io/about#person',
      name: 'Sama Alaa',
      jobTitle: 'Founder & Chief Growth Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      url: 'https://upranked.io/about',
      sameAs: ['https://www.linkedin.com/company/115836359/'],
      knowsAbout: ['Business SEO', 'GCC SEO Strategy', 'Commercial Intent SEO', 'Bilingual SEO', 'B2B Lead Generation'],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://upranked.io/industries/business#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://upranked.io/industries' },
        { '@type': 'ListItem', position: 3, name: 'Business SEO', item: 'https://upranked.io/industries/business' },
      ],
    },
  ],
};

/* ─── Page ─── */
export default function BusinessSEO() {
  const [activeSection, setActiveSection] = useState('');

  usePageMeta({
    title: 'Business SEO Dubai & UAE | SEO Agency | upranked.io',
    description: 'Revenue-focused business SEO for companies in Dubai & UAE. Commercial intent strategy, bilingual EN/AR, APEX Framework™. Book your free strategy call.',
    schemaId: 'business-seo-schema',
    schema,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    tocItems.forEach(t => { const el = document.getElementById(t.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* ── HERO + NAP #1 ── */}
      <section className="relative pt-32 pb-20 px-4 texture-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-70 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
                <span>/</span>
                <Link href="/seo-industries/"><a className="hover:text-accent transition-colors">Industries</a></Link>
                <span>/</span>
                <span className="text-accent">Business SEO</span>
              </nav>

              <span className="inline-block text-accent font-semibold tracking-widest text-xs uppercase bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
                Business SEO Dubai &amp; UAE
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Business SEO Dubai —{' '}
                <span className="gradient-text">Revenue-Focused SEO</span>{' '}
                for GCC Companies
              </h1>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
                upranked.io delivers commercial-intent SEO for companies across Dubai and the GCC. We don't chase traffic — we target the exact queries your decision-maker buyers type, and we convert that visibility into qualified pipeline.
              </p>

              {/* NAP #1 */}
              <address className="not-italic flex flex-col sm:flex-row gap-4 text-sm text-text-secondary mb-8">
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> Contact Us
                </a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" /> Sam@upranked.io
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · Serving GCC
                </span>
              </address>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/">
                  <a className="btn-primary inline-flex items-center gap-2 text-base px-7 py-3.5">
                    Book Free APEX Diagnostic <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="/methodology/">
                  <a className="btn-secondary inline-flex items-center gap-2 text-base px-7 py-3.5">
                    See the APEX Framework™
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/03-serp-positions.svg"
                  alt="SERP positions chart showing business SEO rankings for GCC companies in Dubai, Riyadh, and Kuwait — upranked.io"
                  width={800} height={600}
                  loading="eager" decoding="async" fetchPriority="high"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-dark-gray py-6 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs text-text-secondary">
            {['Revenue-First SEO', 'GCC Business Specialists', 'Bilingual EN/AR', 'APEX Framework™', 'Commercial Intent Strategy', '20+ GCC Clients'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="py-10 bg-navy border-b border-border">
        <div className="container-premium max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">On This Page</p>
          <nav aria-label="Table of contents">
            <ol className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {tocItems.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center gap-2 text-sm py-1.5 px-3 rounded-lg transition-colors ${activeSection === item.id ? 'text-accent bg-accent/10' : 'text-text-secondary hover:text-accent hover:bg-navy/60'}`}
                  >
                    <span className="text-accent/60 font-mono text-xs w-4">{String(i + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* ── WHAT IS BUSINESS SEO — featured snippet target ── */}
      <section id="what-is" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is <span className="text-accent">Business SEO</span>?
            </h2>

            {/* Definition box — featured snippet target */}
            <div className="border-l-4 border-accent bg-navy/60 rounded-r-xl p-6 mb-8">
              <p className="font-semibold text-white mb-2 text-sm uppercase tracking-wide">Definition</p>
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-white">Business SEO</strong> is a revenue-focused search engine optimisation strategy designed for companies in Dubai, the UAE, and the broader GCC market. Unlike traffic-only SEO, business SEO targets commercial-intent keywords used by decision-makers at the consideration and decision stages of the buying cycle — queries like "SEO agency Dubai", "digital marketing consultant UAE", or "B2B marketing company GCC" that signal genuine purchase intent. Every activity is measured against leads generated, pipeline created, and revenue attributed to organic search.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-navy/50 border border-border rounded-xl p-5">
                <h3 className="font-bold text-accent mb-3 text-sm uppercase tracking-wide">Who It's For</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  {['Professional services (law, accounting, HR)', 'B2B technology and SaaS companies', 'Financial services and investment firms', 'Logistics and supply chain providers', 'Real estate developers and agencies', 'Education, training, and consulting firms', 'E-commerce brands targeting UAE and GCC', 'Any business where clients search before buying'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy/50 border border-border rounded-xl p-5">
                <h3 className="font-bold text-accent mb-3 text-sm uppercase tracking-wide">What It Delivers</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  {['First-page rankings for commercial keywords', 'Qualified inbound leads from organic search', 'Reduced cost-per-acquisition vs paid channels', 'Sustainable traffic that compounds over time', 'Brand authority signals in your GCC niche', 'Full revenue attribution from organic channel', 'Bilingual reach — English and Arabic buyers', 'Competitive displacement of ranking competitors'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { metric: '280%', label: 'Avg organic lead increase', sub: 'at 12 months' },
                { metric: '20+', label: 'GCC businesses ranked', sub: 'Dubai · Riyadh · Kuwait · Bahrain' },
                { metric: '#1', label: 'Rankings achieved', sub: 'for primary commercial terms' },
                { metric: '6', label: 'Priority markets', sub: 'UAE · KSA · Kuwait · Bahrain · UK · USA' },
              ].map(s => (
                <div key={s.metric} className="bg-dark-gray border border-border rounded-xl p-5 text-center hover:border-accent/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-accent mb-1">{s.metric}</div>
                  <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-text-secondary text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW DUBAI BUYERS SEARCH + COMPARISON TABLE ── */}
      <section id="how-buyers-search" className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Your Customers Search in <span className="text-accent">Dubai & the GCC</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              B2B buyers and corporate decision-makers in Dubai, Abu Dhabi, Riyadh, and Doha search for suppliers and service providers at every stage of their buying cycle. Business SEO ensures your company owns visibility at each stage — from early-stage research to the final vendor shortlist. If you're not ranking, a competitor is winning those contracts instead.
            </p>

            {/* Query category grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                {
                  stage: 'Awareness',
                  color: 'from-blue-900/40 to-navy',
                  queries: ['"B2B supplier Dubai"', '"industrial services UAE"', '"corporate solutions GCC"', '"professional services Dubai"'],
                },
                {
                  stage: 'Consideration',
                  color: 'from-purple-900/40 to-navy',
                  queries: ['"top business consultants Dubai"', '"B2B companies UAE"', '"enterprise solutions GCC"', '"corporate services comparison"'],
                },
                {
                  stage: 'Decision',
                  color: 'from-accent/20 to-navy',
                  queries: ['"request proposal Dubai"', '"book consultation UAE"', '"corporate pricing GCC"', '"enterprise contract Dubai"'],
                },
                {
                  stage: 'Arabic Search',
                  color: 'from-green-900/40 to-navy',
                  queries: ['"موردون B2B دبي"', '"خدمات شركات الإمارات"', '"حلول مؤسسية GCC"', '"استشارات أعمال دبي"'],
                },
              ].map(cat => (
                <div key={cat.stage} className={`bg-gradient-to-b ${cat.color} border border-border rounded-xl p-4`}>
                  <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-3">{cat.stage}</p>
                  <ul className="space-y-2">
                    {cat.queries.map(q => (
                      <li key={q} className="text-xs text-text-secondary font-mono bg-navy/40 rounded px-2 py-1">{q}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <h3 className="text-xl font-bold mb-4">Business SEO vs Generic Digital Marketing</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-dark-gray border-b border-border">
                    <th className="text-left px-4 py-3 text-text-secondary font-semibold">Factor</th>
                    <th className="text-left px-4 py-3 text-accent font-semibold">Business SEO (upranked.io)</th>
                    <th className="text-left px-4 py-3 text-text-secondary font-semibold">Generic Digital Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.factor} className={`border-b border-border ${i % 2 === 0 ? 'bg-navy/30' : 'bg-dark-gray/30'}`}>
                      <td className="px-4 py-3 text-text-secondary font-medium">{row.factor}</td>
                      <td className="px-4 py-3 text-white flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {row.business}
                      </td>
                      <td className="px-4 py-3 text-text-secondary">{row.generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 bg-dark-gray border border-border rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-border">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest">Why Choose upranked.io for Business SEO in the GCC</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {[
                  { stat: '3 verticals only', title: 'Sector Specialist', desc: 'Business, Medical, and Industrial SEO — no generalist spread across 40 industries. Depth beats breadth in GCC competition.' },
                  { stat: '6 priority markets', title: 'GCC-First Intelligence', desc: 'Built on UAE and Saudi Arabia market data, bilingual EN/AR keyword research, and GCC-specific ranking patterns. Not a Western playbook.' },
                  { stat: 'Zero handoffs', title: 'Founder-Led Delivery', desc: 'Sama Alaa is personally involved in every engagement. Revenue and qualified leads — not vanity rankings — are the primary metric.' },
                ].map(r => (
                  <div key={r.title} className="p-6 hover:bg-navy/30 transition-colors">
                    <div className="text-accent font-black text-xs uppercase tracking-widest mb-2">{r.stat}</div>
                    <h4 className="text-white font-bold text-base mb-2">{r.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS GRID ── */}
      <section id="benefits" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get with <span className="text-accent">Business SEO</span> from upranked.io
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every engagement covers 10 core pillars — from commercial keyword architecture to bilingual content, technical SEO, and full revenue attribution. GCC-specific, not borrowed from a Western playbook.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-navy border border-border rounded-xl p-5 hover:border-accent/50 transition-colors group"
              >
                <b.icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2 text-sm">{b.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="py-12 bg-gradient-to-r from-accent/10 via-navy to-accent/10 border-y border-accent/20">
        <div className="container-premium text-center">
          <p className="text-lg font-semibold text-white mb-2">Ready to turn organic search into your top revenue channel?</p>
          <p className="text-text-secondary text-sm mb-6">Book a free 30-minute APEX Diagnostic with Sama Alaa — no commitment, clear opportunity map.</p>
          <Link href="/contact/">
            <a className="btn-primary inline-flex items-center gap-2">
              Get Your Free Business SEO Audit <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>

      {/* ── APEX PROCESS ── */}
      <section id="apex" className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-accent">APEX Framework™</span> for Business SEO
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our proprietary 4-phase methodology turns search visibility into measurable business growth. Built from 20+ GCC engagements across Dubai, Abu Dhabi, Riyadh, Doha, and Kuwait City.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {apexPhases.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="card-premium relative"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <span className="text-black font-black text-xl">{phase.step}</span>
                </div>
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">{phase.phase}</p>
                <h3 className="text-lg font-bold text-white mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.deliverables.map(d => (
                    <li key={d} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-dark-gray border border-border rounded-xl p-6">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6 text-center">APEX Framework™ — Compounding Revenue Timeline</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { phase: 'A', name: 'Audit', months: 'Month 1–2', outcome: 'Full digital health review, keyword gap map, competitor intelligence report' },
                { phase: 'P', name: 'Position', months: 'Month 2–3', outcome: 'Revenue-intent keyword architecture, content brief system, technical roadmap' },
                { phase: 'E', name: 'Execute', months: 'Month 3–6', outcome: 'On-page, technical, bilingual content, schema markup, authority link building' },
                { phase: 'X', name: 'Expand', months: 'Month 6+', outcome: 'New markets, new keywords, compounding organic ROI month over month' },
              ].map((p, i) => (
                <div key={p.phase} className="relative bg-navy/60 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-3">
                    <span className="text-black font-black text-lg">{p.phase}</span>
                  </div>
                  <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">{p.months}</div>
                  <div className="text-white font-bold text-sm mb-2">{p.name}</div>
                  <div className="text-text-secondary text-xs leading-relaxed">{p.outcome}</div>
                  {i < 3 && <div className="hidden md:block absolute -right-2 top-8 w-4 h-0.5 bg-accent/40 z-10" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="results" className="section-padding-sm bg-dark-gray">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-navy border border-border"
              >
                <div className="text-4xl font-black text-accent mb-2">{s.value}</div>
                <div className="text-sm text-text-secondary leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-E-A-T BIO BOX ── */}
      <section id="about-Sama" className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-accent/30 rounded-2xl p-8 bg-dark-gray/60"
          >
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              Your Business SEO Strategist — E-E-A-T Verified
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="/images/sam-hamouda-seo-consultant-dubai.webp"
                alt="Sama Alaa — business SEO expert Dubai, founder of upranked.io GCC SEO agency"
                width={140} height={140}
                loading="lazy"
                className="rounded-xl border border-accent/20 flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 object-cover object-top"
              />
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Sama Alaa</h2>
                <p className="text-accent text-sm mb-4">Founder &amp; Chief Growth Strategist, upranked.io · Dubai, UAE</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Sama Alaa is a specialist business SEO strategist with 20+ GCC client engagements across professional services, B2B technology, financial services, and e-commerce in Dubai, Abu Dhabi, Riyadh, Doha, and Kuwait City. As the creator of the APEX Framework™ — upranked.io's proprietary Audit → Position → Execute → Expand methodology — Sama brings sector-specific GCC market knowledge that generic agencies built on Western playbooks cannot replicate.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Business SEO', 'Commercial Intent Strategy', 'GCC Market Positioning', 'Bilingual EN/AR SEO', 'B2B Lead Generation', 'Revenue Attribution'].map(tag => (
                    <span key={tag} className="text-xs bg-accent/10 border border-accent/20 text-accent rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/115836359/" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                    LinkedIn Profile →
                  </a>
                  <Link href="/about/">
                    <a className="text-accent text-sm hover:underline">Full Bio →</a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY UPRANKED.IO ── */}
      <section id="why-upranked" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-accent">upranked.io</span> for Business SEO in Dubai?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Six reasons GCC companies choose upranked.io over generic digital marketing agencies when the goal is revenue, not rankings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: 'GCC-Only Focus', body: 'We serve exclusively the GCC market — UAE, Saudi Arabia, Kuwait, Qatar, Bahrain. No generic Western-market templates that ignore GCC search behaviour, seasonality, and Arabic language dynamics.' },
              { icon: BarChart3, title: 'Revenue Reporting, Not Vanity Metrics', body: 'Every monthly report links organic activity to leads, proposals, and revenue. You can compare your SEO ROI against paid search or any other channel with full attribution transparency.' },
              { icon: Globe, title: 'True Bilingual SEO', body: 'Native Arabic keyword research, independent Arabic content strategy, and technical RTL configuration. Arabic SEO as a fully parallel channel — not translated English content repackaged.' },
              { icon: Shield, title: 'APEX Framework™ Methodology', body: 'A proprietary 4-phase framework built from 20+ GCC client engagements. Not a generic agency checklist — a structured, commercially focused system that adapts to GCC market conditions.' },
              { icon: Users, title: 'Direct Access to Sama Alaa', body: 'You work directly with the founder, not handed to a junior account manager. Sama owns every strategy, every review, every recommendation — full accountability from kickoff to results.' },
              { icon: Award, title: 'Sector-Specific Knowledge', body: 'Business SEO for Dubai and GCC is not one-size-fits-all. We bring deep knowledge of how buyers search in professional services, B2B tech, financial services, real estate, and logistics across the region.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="card-premium flex flex-col"
              >
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS + NAP #2 ── */}
      <section id="service-areas" className="section-padding bg-navy">
        <div className="container-premium max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Business SEO Services — <span className="text-accent">GCC, UK &amp; USA</span>
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              upranked.io delivers business SEO for companies across the GCC (Dubai, Riyadh, Kuwait, Bahrain) and globally in London and New York. Business SEO near me in Dubai, London, or New York — we're here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {serviceAreas.map(area => (
                <div key={area.city} className={`border rounded-xl p-4 hover:border-accent/50 transition-colors ${area.primary ? 'border-accent/30 bg-navy/60' : 'border-border bg-dark-gray'}`}>
                  <h3 className="font-bold text-white mb-1.5 flex items-center gap-2 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {area.city}
                    {area.primary && <span className="ml-auto text-xs text-accent border border-accent/30 rounded px-1.5 py-0.5 flex-shrink-0">Priority</span>}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{area.zones}</p>
                </div>
              ))}
            </div>

            {/* NAP #2 */}
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary border border-border rounded-xl p-5 bg-dark-gray/60">
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" /> Contact Us (WhatsApp)
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" /> Sam@upranked.io
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE — Serving all GCC
              </span>
            </address>

            <img
              src="/images/business/business-seo-gcc-service-areas.webp"
              alt="business SEO GCC service areas — SEO agency near me Dubai Abu Dhabi Riyadh Doha Kuwait"
              width={900} height={360}
              loading="lazy"
              className="w-full rounded-xl border border-border mt-8"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business SEO Dubai — <span className="text-accent">Frequently Asked Questions</span>
            </h2>
            <p className="text-text-secondary">Everything GCC businesses ask before investing in revenue-focused SEO.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA + NAP #3 ── */}
      <section className="section-padding bg-gradient-to-br from-navy via-dark-gray to-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent -z-10" />
        <div className="container-premium max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Star className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Business SEO Your <span className="text-accent">Top Revenue Channel</span>?
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Book a free 30-minute APEX Diagnostic call with Sama Alaa. Walk away with a clear picture of your Dubai and GCC search opportunity, a competitor gap analysis, and a prioritised roadmap — no commitment required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact/">
                <a className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
                  Book Free APEX Diagnostic <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a
                href="/contact/"
                className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4"
              >
                Contact Us
              </a>
            </div>

            {/* NAP #3 */}
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary">
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors justify-center">
                <Phone className="w-4 h-4 text-accent" /> Contact Us
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors justify-center">
                <Mail className="w-4 h-4 text-accent" /> Sam@upranked.io
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC-Wide
              </span>
            </address>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
