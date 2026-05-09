/**
 * SEO REFERENCE BLOCK (Internal)
 * URL: /industries/industrial
 * Primary KW: industrial SEO UAE (commercial, high intent)
 * Secondary KWs: B2B SEO Dubai, manufacturing SEO UAE, industrial SEO agency GCC, SEO for manufacturers UAE,
 *   construction company SEO Dubai, oil gas SEO UAE, logistics SEO GCC, B2B digital marketing UAE,
 *   procurement SEO UAE, industrial content marketing, bilingual B2B SEO, Arabic industrial SEO,
 *   industrial SEO agency near me Dubai, supplier SEO GCC, Jebel Ali SEO, KIZAD SEO
 * Page Type: Sub-page (service)
 * Search Intent: Commercial
 * Location Targets: Dubai (40+), UAE, Abu Dhabi, Sharjah, Jebel Ali, KIZAD, Riyadh, Kuwait City, Doha, GCC
 * Near Me: 4+ uses
 * NAP: 3 placements (Hero + Service Areas + CTA)
 * Word Count Target: 2,500–3,500
 * TO-links: /industries, /methodology, /contact, /about, /faq, /blog/industrial-b2b-seo-gcc-procurement,
 *   /industries/medical, /industries/business, /growth-intelligence/consultation, /blog/seo-uae-2026-what-works
 * FROM-links: /industries, /home services section, /blog/industrial-b2b-seo-gcc-procurement
 */

import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { CheckCircle, ArrowRight, MapPin, Phone, Mail, ChevronDown, BarChart2 } from 'lucide-react';
import { useState } from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

const benefits = [
  { title: 'Rank for High-Value B2B Procurement Keywords', desc: 'We target the specific, technical queries that procurement managers, engineers, and operations teams type when sourcing industrial suppliers in Dubai, Abu Dhabi, and across the GCC.' },
  { title: 'Technical Content Written for Your Buyers', desc: 'Content that speaks the language of RFQs, specifications, and compliance standards — not generic marketing copy. Written for engineers and procurement decision-makers who are ready to buy.' },
  { title: 'Long-Tail Industrial Keyword Domination', desc: 'Product-specific, certification-specific, and application-specific keywords: "API 5L pipe supplier Dubai", "ISO 9001 MEP contractor Abu Dhabi" — low volume, extremely high purchase intent.' },
  { title: 'Google Business Profile & Industrial Zone Visibility', desc: 'Local SEO across Dubai Industrial City, Jebel Ali Free Zone, KIZAD, KEZAD, King Abdullah Economic City, and major GCC industrial free zones — exactly where your procurement audience searches.' },
  { title: 'Bilingual SEO — English + Arabic for B2B', desc: 'Arabic-language procurement searches across the GCC are severely underserved. We capture Arabic-speaking procurement teams in Saudi Aramco supplier networks, Emirati government procurement, and Gulf industrial operations.' },
  { title: 'LinkedIn + Organic Search Synergy', desc: 'Coordinated strategy across Google search and LinkedIn — the two primary channels where GCC B2B procurement decisions are influenced. We align both for maximum pipeline impact.' },
  { title: 'Technical SEO for Product Catalogues', desc: 'Structured data, faceted navigation, and specification page optimisation for companies with large product catalogues — ensuring every product is discoverable in relevant procurement searches.' },
  { title: 'Competitor Gap Analysis', desc: 'Identify exactly which procurement keywords your competitors rank for that you don\'t — and the specific content investments needed to displace them in UAE, Saudi Arabia, and Kuwait industrial search.' },
  { title: 'GCC Industrial Directory Dominance', desc: 'Systematic presence across UAE Free Zone directories, Kompass Gulf, TradeArabia, and sector-specific GCC industrial databases — the off-Google citation network that reinforces your authority.' },
  { title: 'Lead Attribution & Pipeline Reporting', desc: 'Reporting tied to RFQ submissions, sales inquiry volume, and pipeline influenced by organic search — not traffic metrics that don\'t connect to your commercial outcomes.' },
];

const process = [
  {
    step: 'A', label: 'Audit',
    title: 'APEX Industrial Audit',
    desc: 'Deep analysis of your digital footprint against GCC industrial search: technical health, competitor ranking analysis across procurement keywords, bilingual keyword landscape mapping, and current local visibility in UAE and GCC industrial free zones.',
    deliverables: ['Full technical + crawl audit', 'Competitor procurement keyword gap map', 'Industrial keyword landscape (EN + AR)', 'Free zone and directory visibility report'],
  },
  {
    step: 'P', label: 'Position',
    title: 'Buyer Journey Mapping',
    desc: 'We map the full procurement decision journey — from awareness searches to RFQ submission — and build a content architecture that places you at every stage of the B2B industrial buying cycle across Dubai, the UAE, and the wider GCC.',
    deliverables: ['Procurement intent funnel map', 'Content architecture: product + service + industry pages', 'Competitor displacement priority list', 'Bilingual positioning brief (EN + AR)'],
  },
  {
    step: 'E', label: 'Execute',
    title: 'Authority & Technical Content',
    desc: 'Technical product and service pages, industry vertical content, case study development, structured data markup for product catalogues, Google Business Profile optimisation for industrial zones, and strategic backlinks from GCC trade publications.',
    deliverables: ['Product/service specification pages (EN + AR)', 'Schema: LocalBusiness + Product + FAQPage', 'GBP optimisation for industrial free zones', 'Trade publication and directory backlinks'],
  },
  {
    step: 'X', label: 'Expand',
    title: 'Lead Attribution',
    desc: 'Monthly reporting tied to B2B commercial outcomes: RFQ volume from organic, sales inquiry attribution, cost-per-qualified-lead from search vs. paid, and a quarterly expansion map for adjacent product categories and new GCC markets.',
    deliverables: ['Monthly RFQ attribution dashboard', 'Ranking movement: procurement keywords', 'Cost-per-lead: organic vs. paid comparison', 'Quarterly GCC market expansion brief'],
  },
];

const stats = [
  { value: '250%', label: 'Average B2B organic traffic growth for GCC industrial clients' },
  { value: '4–7mo', label: 'Average time to top 3 for procurement keywords in UAE' },
  { value: '6.2x', label: 'Average pipeline ROI for industrial SEO at 12 months' },
  { value: '7+', label: 'Industrial sectors served across UAE, Saudi Arabia & Kuwait' },
];

const faqs = [
  {
    q: 'Does industrial SEO work for B2B companies in the UAE and GCC?',
    a: 'Absolutely. GCC procurement managers — in oil & gas, construction, manufacturing, and logistics — search Google for vendors, suppliers, and technical solutions before initiating any RFQ process. Being invisible on Google means your competitors are being shortlisted for tenders you never knew existed. Industrial SEO in the UAE targets the specific procurement queries that represent real purchase intent, not generic traffic.',
  },
  {
    q: 'What makes industrial SEO different from standard B2B SEO?',
    a: 'Industrial buyers use highly specific, technical search queries — product codes, certification standards, application requirements, and geographic combinations. These keywords have relatively low search volumes but represent procurement decisions worth hundreds of thousands of dirhams. Standard B2B SEO targets broader commercial terms; industrial SEO requires deep product knowledge, technical content capability, and an understanding of how GCC procurement teams actually search.',
  },
  {
    q: 'How long before we see industrial leads from SEO in the UAE?',
    a: 'For long-tail product and service keywords, initial ranking movement typically appears within 3–4 months. Meaningful lead flow from organic begins at months 5–7 for most UAE industrial clients. B2B sales cycles are longer, but the quality and deal size of organic leads significantly outperforms paid traffic — and the investment compounds over time unlike PPC which stops the moment you pause spend.',
  },
  {
    q: 'Do you create Arabic industrial content for GCC procurement teams?',
    a: 'Yes. We conduct independent Arabic keyword research for industrial procurement searches — which differ significantly from English equivalents — and create technically accurate Arabic content written or reviewed by native Arabic speakers with industrial domain knowledge. Arabic procurement search in Saudi Arabia, Kuwait, and UAE government entities is substantially underserved by most industrial SEO agencies.',
  },
  {
    q: 'Can you optimise for industrial free zones — Jebel Ali, KIZAD, KEZAD, KAEC?',
    a: 'Yes — this is a specific component of our industrial SEO strategy for UAE and GCC-based manufacturers and suppliers. We optimise Google Business Profiles for free zone addresses, build citations across zone-specific directories, and create location-based content that targets procurement teams searching for suppliers within specific industrial free zones in Dubai and Abu Dhabi.',
  },
  {
    q: 'What is an industrial SEO agency near me in Dubai, and how do I choose one?',
    a: 'An industrial SEO agency near me in Dubai should have demonstrated experience with technical B2B content, knowledge of UAE industrial free zone structures, bilingual EN/AR capability for GCC procurement audiences, and reporting tied to pipeline metrics rather than traffic. Ask for specific examples of industrial sector clients, RFQ attribution reporting, and evidence of ranking for product-specific procurement keywords — not just broad industry terms.',
  },
];

const serviceAreas = [
  { city: 'Dubai, UAE', detail: 'JAFZA, Dubai Industrial City, Al Quoz, DAFZA — Largest free zone industrial hub in the GCC', primary: true },
  { city: 'Riyadh, KSA', detail: '2nd Industrial City, KAFC, KAEC (King Abdullah Economic City), Jubail — Fast-growing Vision 2030 market', primary: true },
  { city: 'Kuwait City, Kuwait', detail: 'Shuwaikh Industrial, Shuaiba Industrial, Al Rai, Ahmadi industrial zones' },
  { city: 'Manama, Bahrain', detail: 'Bahrain International Investment Park, Hidd Industrial Area, Sitra Industrial, BLZ' },
  { city: 'London, UK', detail: 'City of London, Canary Wharf, industrial B2B clients across Greater London — Global expansion market', primary: true },
  { city: 'New York, USA', detail: 'Manhattan, New Jersey port district, Long Island industrial corridor — Global expansion market', primary: true },
  { city: 'Abu Dhabi & Sharjah, UAE', detail: 'KIZAD, KEZAD, ICAD, Mussafah · SAIF Zone, Hamriyah Free Zone, Sharjah Industrial Area · Ajman Free Zone' },
  { city: 'Jeddah & NEOM, KSA', detail: 'Jeddah Islamic Port area, Jeddah Industrial City · NEOM supply chain zone, Dammam Industrial Valley' },
  { city: 'Doha, Qatar', detail: 'Doha Industrial Area, Ras Laffan Industrial City, Mesaieed Industrial City, QSTP' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left bg-dark-gray hover:bg-navy/50 transition-colors group" aria-expanded={open}>
        <span className="font-semibold text-white pr-4 group-hover:text-accent transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-5 pb-5 pt-3 bg-dark-gray border-t border-border">
              <p className="text-text-secondary leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function IndustrialSEO() {
  usePageMeta({
    title: 'Industrial SEO UAE | B2B SEO Agency Dubai & GCC | upranked.io',
    description: 'Specialist industrial & B2B SEO agency for manufacturers, construction & oil & gas companies in UAE & GCC. Win procurement searches. Book a free strategy call.',
    schemaId: 'industrial-seo-schema',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://upranked.io/industries/industrial#service',
          serviceType: 'Industrial B2B SEO',
          name: 'Industrial SEO for GCC B2B Companies',
          description: 'Specialist SEO for manufacturing, construction, oil & gas, logistics, and industrial services companies across the UAE and GCC.',
          provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
          areaServed: ['AE', 'SA', 'KW', 'QA'],
          url: 'https://upranked.io/industries/industrial',
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://upranked.io/industries/industrial#faq',
          mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
        {
          '@type': 'Person',
          '@id': 'https://upranked.io/about#Sama',
          name: 'Sama Alaa',
          jobTitle: 'Founder & Chief Growth Strategist',
          worksFor: { '@type': 'Organization', name: 'upranked.io' },
          url: 'https://upranked.io/about',
          sameAs: ['https://www.linkedin.com/company/115836359/'],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
            { '@type': 'ListItem', position: 2, name: 'SEO by Industry', item: 'https://upranked.io/industries' },
            { '@type': 'ListItem', position: 3, name: 'Industrial SEO UAE', item: 'https://upranked.io/industries/industrial' },
          ],
        },
      ],
    },
  });

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">SEO · Industrial · B2B · UAE & GCC</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Industrial SEO UAE — <span className="gradient-text">Win the Procurement Search</span>
              </h1>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed max-w-xl">
                Specialist B2B SEO agency for manufacturers, construction firms, oil & gas suppliers, and industrial services companies across Dubai, Abu Dhabi, and the GCC. We make your business findable when procurement teams are searching — and invisible to them is invisible to your pipeline.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-text-secondary">
                {['Technical B2B Content', 'Procurement Keyword Targeting', 'Bilingual EN/AR', 'Industrial Free Zone SEO', 'Founder-Led by Sama Alaa'].map(t => (
                  <div key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /><span>{t}</span></div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact/"><a className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">Book a Free Strategy Call <ArrowRight className="w-5 h-5" /></a></Link>
                <Link href="/methodology/"><a className="btn-secondary text-lg px-8 py-4">View APEX Framework™</a></Link>
              </div>
              {/* NAP #1 */}
              <div className="flex flex-wrap gap-6 text-sm text-text-secondary border-t border-border pt-6">
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="block">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-dark-gray aspect-[4/3]">
                <img src="/images/sam-hamouda-best-seo-consultant-gcc.webp" alt="Sama Alaa — industrial and B2B SEO consultant in Dubai ranking manufacturers and suppliers across the GCC at upranked.io" width={600} height={450} loading="eager" decoding="async" className="w-full h-full object-cover object-top opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center bg-dark-gray/50">
                  <div className="text-center p-8">
                    <div className="text-6xl font-black text-accent mb-3">6.2x</div>
                    <div className="text-white font-semibold">Average pipeline ROI</div>
                    <div className="text-text-secondary text-sm mt-1">for GCC industrial clients at 12 months</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-dark-gray py-6 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-text-secondary">
            {['B2B SEO Specialists', 'Technical Industrial Content', 'Free Zone SEO', 'Bilingual EN/AR', 'APEX Framework™', 'Lead-Attributed Reporting'].map(t => (
              <div key={t} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="section-padding-sm bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="p-6 rounded-xl bg-dark-gray border border-border">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">On This Page</p>
            <ol className="space-y-2 text-sm">
              {[['#what-is', 'What is Industrial SEO?'], ['#why-different', 'How Industrial Buyers Search in the GCC'], ['#whats-included', 'What\'s Included'], ['#apex-process', 'The APEX Framework™ for Industrial B2B'], ['#results', 'Results & Statistics'], ['#expert-review', 'Expert Review — Sama Alaa'], ['#why-upranked', 'Why upranked.io?'], ['#service-areas', 'Industrial SEO Service Areas'], ['#faq', 'FAQ — Industrial SEO UAE']].map(([href, label]) => (
                <li key={href}><a href={href} className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent flex-shrink-0" />{label}</a></li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS INDUSTRIAL SEO ── */}
      <section id="what-is" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is <span className="text-accent">Industrial SEO</span>?</h2>
            <div className="p-6 rounded-xl bg-navy border-l-4 border-accent mb-8">
              <p className="text-white leading-relaxed">
                <strong>Industrial SEO</strong> is the practice of optimising a manufacturing, construction, oil & gas, logistics, or industrial services website to rank for the specific search queries that GCC procurement managers, engineers, and operations teams use when sourcing suppliers and vendors. Unlike consumer SEO, industrial SEO targets low-volume, high-intent keywords representing active procurement decisions — searches like "API 5L pipe supplier Dubai" or "ISO 9001 MEP contractor Abu Dhabi" that directly precede an RFQ.
              </p>
            </div>
            <p className="text-text-secondary leading-relaxed mb-5">In Dubai, Abu Dhabi, and across the GCC, B2B procurement increasingly begins with a Google search. Whether a procurement manager at a major developer is sourcing HVAC contractors in Jebel Ali or an oil & gas operations team is comparing industrial valve suppliers near me in Abu Dhabi, the companies that appear at the top of those results receive the first call.</p>
            <p className="text-text-secondary leading-relaxed mb-6">The challenge with industrial SEO in the UAE is specificity. Generic digital marketing agencies optimise for broad traffic — the industrial sector needs a different approach: technical content, product specification pages, certification-specific landing pages, and a deep understanding of how procurement search behaviour differs from consumer intent.</p>
            <img src="/images/industrial/industrial-seo-uae-procurement-search-process.webp" alt="Industrial SEO UAE — how procurement managers search for B2B suppliers in Dubai and GCC" width={800} height={400} loading="lazy" className="w-full rounded-xl border border-border my-6" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </motion.div>
        </div>
      </section>

      {/* ── HOW INDUSTRIAL BUYERS SEARCH ── */}
      <section id="why-different" className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How Industrial Buyers Actually Search in the <span className="text-accent">GCC</span></h2>
            <p className="text-text-secondary mb-8 leading-relaxed">Industrial procurement teams in Dubai, Riyadh, Kuwait City, and Doha search Google differently from any other buyer type. Understanding this is the foundation of effective industrial SEO in the UAE.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { type: 'Product-Specific', examples: ['"stainless steel tube fitting UAE"', '"explosion proof motor 3-phase Dubai"', '"HDPE pipe manufacturer GCC"'], icon: '🔩' },
                { type: 'Certification-Specific', examples: ['"ISO 14001 certified supplier Abu Dhabi"', '"ASME pressure vessel manufacturer UAE"', '"DED licensed industrial contractor Dubai"'], icon: '📋' },
                { type: 'Zone + Service', examples: ['"MEP subcontractor Jebel Ali"', '"warehousing KIZAD Abu Dhabi"', '"cold chain logistics near me Dubai"'], icon: '📍' },
                { type: 'Comparison + Evaluation', examples: ['"steel vs aluminium scaffolding GCC"', '"top industrial cleaning companies UAE"', '"best HVAC maintenance company Dubai 2026"'], icon: '⚖️' },
              ].map(c => (
                <div key={c.type} className="p-5 rounded-xl bg-dark-gray border border-border">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <h3 className="text-accent font-bold mb-3">{c.type} Queries</h3>
                  <ul className="space-y-1.5">
                    {c.examples.map(e => <li key={e} className="text-text-secondary text-sm font-mono bg-navy/50 px-3 py-1.5 rounded">{e}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            {/* Comparison table — featured snippet */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <caption className="text-left text-text-secondary text-xs mb-3">Industrial SEO vs. Generic B2B SEO — Key Differences</caption>
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left text-accent font-semibold">Factor</th>
                    <th className="py-3 px-4 text-left text-accent font-semibold">Generic B2B SEO</th>
                    <th className="py-3 px-4 text-left text-accent font-semibold">Industrial SEO (upranked.io)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Keyword Strategy', 'Broad commercial terms', 'Product codes, certifications, applications'],
                    ['Content Type', 'Blog posts, case studies', 'Spec pages, compliance guides, technical datasheets'],
                    ['Target Audience', 'Marketing/management', 'Procurement managers, engineers, QA teams'],
                    ['Location Focus', 'City-level targeting', 'Industrial zone-level (JAFZA, KIZAD, KAEC)'],
                    ['Schema Markup', 'Basic LocalBusiness', 'Product + Offer + Certification schemas'],
                    ['Language Strategy', 'English only', 'Bilingual EN/AR for GCC procurement teams'],
                    ['ROI Metric', 'Traffic & rankings', 'RFQ volume + pipeline attributed to organic'],
                  ].map(([factor, generic, industrial], i) => (
                    <tr key={factor} className={`border-b border-border ${i % 2 === 0 ? 'bg-dark-gray/30' : ''}`}>
                      <td className="py-3 px-4 text-white font-medium">{factor}</td>
                      <td className="py-3 px-4 text-text-secondary">{generic}</td>
                      <td className="py-3 px-4 text-accent font-medium">{industrial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section id="whats-included" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title mb-4">What's Included in <span className="text-accent">Industrial SEO</span></h2>
            <p className="section-subtitle">A complete B2B search strategy for industrial companies in the UAE & GCC</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.04 }} viewport={{ once: true }} className="flex items-start gap-3 p-4 rounded-xl bg-navy border border-border hover:border-accent/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div><p className="font-semibold text-white text-sm mb-1">{b.title}</p><p className="text-text-secondary text-xs leading-relaxed">{b.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA ── */}
      <section className="section-padding-sm bg-navy border-y border-border">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-xl mb-1">Is your industrial company invisible in GCC procurement searches?</p>
              <p className="text-text-secondary">Get a free APEX audit — see exactly which RFQ-ready searches you're missing.</p>
            </div>
            <Link href="/contact/"><a className="btn-primary px-8 py-3 whitespace-nowrap inline-flex items-center gap-2">Get Your Free Audit <ArrowRight className="w-4 h-4" /></a></Link>
          </div>
        </div>
      </section>

      {/* ── APEX PROCESS ── */}
      <section id="apex-process" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title mb-4">The <span className="text-accent">APEX Framework™</span> for Industrial B2B SEO</h2>
            <p className="section-subtitle">Industrial-grade SEO built on a proven 4-phase methodology for GCC B2B companies</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }} className="card-premium relative overflow-hidden">
                <div className="text-7xl font-black text-border absolute -top-2 -right-2 leading-none select-none opacity-40">{p.step}</div>
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3"><span className="text-accent font-black text-lg">{p.step}</span></div>
                <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">{p.label}</p>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-1.5">{p.deliverables.map(d => (<li key={d} className="flex items-start gap-2 text-xs text-text-secondary"><CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />{d}</li>))}</ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10"><Link href="/methodology/"><a className="btn-secondary px-8 py-3 inline-flex items-center gap-2">Explore the Full APEX Framework™ <ArrowRight className="w-4 h-4" /></a></Link></div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="results" className="section-padding-sm bg-navy">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 rounded-xl bg-dark-gray border border-border">
                <div className="text-4xl font-black text-accent mb-2">{s.value}</div>
                <div className="text-sm text-text-secondary leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-E-A-T EXPERT REVIEW ── */}
      <section id="expert-review" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="card-premium p-8 md:p-10">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-6">Expert Review & Strategy Verification</p>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img src="/images/sam-hamouda-best-seo-consultant-gcc.webp" alt="Sama Alaa — Founder of upranked.io" width={96} height={96} loading="lazy" className="w-24 h-24 rounded-full object-cover object-top border-2 border-accent/30" decoding="async" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">Sama Alaa</h3>
                  <span className="text-xs bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded-full font-semibold">Strategy Verified</span>
                </div>
                <p className="text-accent font-semibold text-sm mb-1">Founder, upranked.io · Creator of the APEX Framework™</p>
                <p className="text-text-secondary text-sm mb-4">GCC Growth Intelligence Specialist · Industrial B2B SEO Expert · Bilingual EN/AR Strategy</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Every industrial SEO strategy at upranked.io is personally designed and reviewed by Sama Alaa. Sama has built the APEX Framework™ specifically for the complex, long-cycle authority requirements of B2B industrial SEO in the GCC — where a single organic lead can represent a contract worth hundreds of thousands of dirhams. His founder-led approach means your industrial SEO strategy is never delegated to an account manager who doesn't understand procurement search behaviour in Dubai or the technical nuances of your product category.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-text-secondary"><BarChart2 className="w-4 h-4 text-accent" /><span>20+ GCC clients across 7 industrial sectors</span></div>
                  <div className="flex items-center gap-2 text-text-secondary"><CheckCircle className="w-4 h-4 text-accent" /><span>APEX Framework™ Creator</span></div>
                  <a href="https://www.linkedin.com/company/115836359/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">LinkedIn Profile →</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY UPRANKED ── */}
      <section id="why-upranked" className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Why Industrial Companies Choose <span className="text-accent">upranked.io</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Technical Domain Knowledge', desc: 'We understand the difference between API, ASME, ISO, and ASTM standards. Our content reflects actual industrial knowledge — not generic agency copy that procurement managers immediately dismiss.' },
                { title: 'APEX Framework™ — Built for B2B Cycles', desc: 'B2B industrial sales cycles are 6–18 months. The APEX Framework™ builds authority that compounds over that timeline, unlike PPC which disappears the moment you pause spend.' },
                { title: 'Free Zone SEO Specialists', desc: 'We understand Jebel Ali, KIZAD, KEZAD, KAEC, and other major GCC industrial free zones — the geographic structure of industrial search in the UAE that most agencies treat as a single city.' },
                { title: 'Arabic Procurement SEO', desc: 'Independent Arabic keyword research for industrial procurement queries — capturing Emirati, Saudi, and Kuwaiti procurement teams who search in Arabic across government and semi-government entities.' },
                { title: 'Pipeline ROI Reporting', desc: 'Monthly RFQ attribution — we connect your organic search investment directly to your sales pipeline, not traffic dashboards.' },
                { title: 'Founder-Led Every Engagement', desc: 'Sama Alaa leads every industrial SEO engagement personally. No bait-and-switch from senior pitch to junior delivery.' },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-dark-gray border border-border hover:border-accent/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div><h3 className="font-bold text-white mb-1">{item.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE AREAS + NAP #2 ── */}
      <section id="service-areas" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">Industrial SEO Service Areas — <span className="text-accent">GCC, UK &amp; USA</span></h2>
            <p className="text-text-secondary mb-8 leading-relaxed">upranked.io delivers industrial B2B SEO across the GCC industrial corridor (Dubai JAFZA, Riyadh, Kuwait, Bahrain) and global markets in London and New York. Searching for a B2B SEO agency near me in Dubai Industrial City, London, or New York? Our APEX Framework™ is built for industrial procurement search in every market.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {serviceAreas.map(area => (
                <div key={area.city} className={`p-4 rounded-xl border hover:border-accent/50 transition-colors ${area.primary ? 'bg-navy border-accent/30' : 'bg-navy/50 border-border'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <h3 className="font-bold text-white text-sm">{area.city}</h3>
                    {area.primary && <span className="ml-auto text-xs text-accent border border-accent/30 rounded px-1.5 py-0.5 flex-shrink-0">Priority</span>}
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">{area.detail}</p>
                </div>
              ))}
            </div>
            {/* NAP #2 */}
            <div className="p-6 rounded-xl bg-navy border border-accent/30 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div><p className="font-bold text-white text-lg mb-1">upranked.io</p><p className="text-text-secondary text-sm">Premium Growth Intelligence Lab · Industrial B2B SEO Specialists</p></div>
              <div className="flex flex-wrap gap-6 text-sm md:ml-auto">
                <a href="/contact/" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                <span className="flex items-center gap-2 text-text-secondary"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faq" className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="section-title mb-3">Industrial SEO <span className="text-accent">FAQ</span></h2>
            <p className="text-text-secondary">Common questions from UAE manufacturers, contractors & industrial companies</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={f.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}>
                <FAQItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center"><Link href="/blog/industrial-b2b-seo-gcc-procurement/"><a className="text-accent hover:underline text-sm">Read: Industrial B2B SEO — Full Guide →</a></Link></div>
        </div>
      </section>

      {/* ── BOOKING CTA + NAP #3 ── */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <div className="p-10 md:p-14 rounded-2xl bg-gradient-to-br from-navy to-dark-gray border border-accent/30 shadow-2xl shadow-accent/10">
              <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-4">Free APEX Diagnostic — No Obligation</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">Ready to Outrank Your <span className="text-accent">Industrial Competitors</span> in the GCC?</h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">Book a free 30-minute strategy call with Sama Alaa. We'll identify the exact procurement searches your target buyers are running in Dubai, Abu Dhabi, and across the GCC — and show you exactly what it takes to rank for them.</p>
              <Link href="/contact/"><a className="btn-primary text-xl px-12 py-6 inline-flex items-center gap-3 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">Book Your Free Strategy Call <ArrowRight className="w-6 h-6" /></a></Link>
              {/* NAP #3 */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-text-secondary border-t border-border pt-6">
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC Region</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
