import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'On-Page SEO Dubai & GCC',
      description: 'On-page SEO optimization for Dubai, Riyadh, Kuwait, Bahrain, London and New York businesses — content, keywords, metadata, and page structure by upranked.io.',
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      url: 'https://upranked.io/seo/on-page',
      areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is on-page SEO?', acceptedAnswer: { '@type': 'Answer', text: 'On-page SEO is the practice of optimizing individual web pages — including title tags, meta descriptions, H1/H2 headings, content, internal links, and image alt text — to rank higher in search engines. In Dubai and across the GCC, on-page SEO must also account for bilingual EN/AR content and local search intent.' } },
        { '@type': 'Question', name: 'How does on-page SEO work for bilingual Arabic-English websites in the GCC?', acceptedAnswer: { '@type': 'Answer', text: 'Bilingual on-page SEO in the GCC requires separate keyword research for Arabic and English queries, hreflang tags to signal language targeting to Google, RTL-compatible page structures, and Arabic content written by native SEO copywriters — not machine translations. upranked.io handles all of this as standard in every GCC on-page engagement.' } },
        { '@type': 'Question', name: 'How long does on-page SEO take to show results in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'On-page SEO improvements typically produce measurable ranking changes within 4–8 weeks in Dubai and GCC markets. The timeline depends on domain authority, competitor strength, and the number of pages optimized. Commercial-intent pages optimized correctly can see ranking improvements in as few as 2–3 weeks.' } },
        { '@type': 'Question', name: 'Does upranked.io offer on-page SEO near me in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io is Dubai-based and offers on-page SEO for businesses across the GCC — including Dubai, Abu Dhabi, Riyadh, Kuwait City, and Manama — as well as London and New York. All on-page work is led by Sam Hamouda using the APEX Framework.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://upranked.io/industries' },
        { '@type': 'ListItem', position: 3, name: 'On-Page SEO', item: 'https://upranked.io/seo/on-page' },
      ],
    },
    { '@type': 'Person', name: 'Sam Hamouda', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Title Tag & Meta Optimization', desc: 'Commercial-intent title tags and meta descriptions crafted for GCC search behavior — capturing clicks in Dubai, Riyadh, and Kuwait.' },
  { title: 'H1/H2/H3 Hierarchy', desc: 'Semantic heading structure aligned to how GCC buyers search — English and Arabic query patterns mapped to each page level.' },
  { title: 'Keyword Density & Placement', desc: 'Primary and secondary keyword placement in the first 152 characters, section headers, and natural body content without over-optimization.' },
  { title: 'Internal Linking Architecture', desc: 'Topic cluster linking that passes authority between pages and guides buyers through your conversion funnel — from awareness to contact.' },
  { title: 'Image Alt Text & Schema', desc: 'Image optimization with descriptive alt text and structured data markup (@graph JSON-LD) for rich results in Google search.' },
  { title: 'Bilingual EN/AR On-Page', desc: 'Full Arabic on-page optimization — native keyword research, RTL structure, hreflang tags — not translated English copy.' },
];

const faqs = [
  { q: 'What is on-page SEO?', a: 'On-page SEO is the practice of optimizing individual web pages — including title tags, meta descriptions, H1/H2 headings, content, internal links, and image alt text — to rank higher in search engines. In Dubai and across the GCC, on-page SEO must also account for bilingual EN/AR content and local search intent.' },
  { q: 'How does on-page SEO work for bilingual Arabic-English websites in the GCC?', a: 'Bilingual on-page SEO in the GCC requires separate keyword research for Arabic and English queries, hreflang tags to signal language targeting to Google, RTL-compatible page structures, and Arabic content written by native SEO copywriters — not machine translations. upranked.io handles all of this as standard in every GCC on-page engagement.' },
  { q: 'How long does on-page SEO take to show results in Dubai?', a: 'On-page SEO improvements typically produce measurable ranking changes within 4–8 weeks in Dubai and GCC markets. Commercial-intent pages optimized correctly can see ranking improvements in as few as 2–3 weeks depending on domain authority and competition.' },
  { q: 'Does upranked.io offer on-page SEO near me in Dubai?', a: 'Yes. upranked.io is Dubai-based and offers on-page SEO for businesses across the GCC — including Dubai, Abu Dhabi, Riyadh, Kuwait City, and Manama — as well as London and New York. All on-page work is led by Sam Hamouda using the APEX Framework.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left bg-dark-gray hover:bg-navy/50 transition-colors group">
        <span className="font-semibold text-white pr-4 group-hover:text-accent transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-5 pb-5 pt-2 bg-dark-gray border-t border-border"><p className="text-text-secondary leading-relaxed">{a}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function OnPageSEO() {
  usePageMeta({
    title: 'On-Page SEO Dubai & GCC — Content, Keywords & Page Optimization',
    description: 'On-page SEO services for Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London & New York. Bilingual EN/AR optimization, title tags, schema markup — APEX Framework by Sam Hamouda.',
    schema,
    schemaId: 'on-page-seo-schema',
  });

  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
                <span className="mx-2 text-border">/</span>
                <Link href="/seo"><a className="hover:text-accent transition-colors">SEO</a></Link>
                <span className="mx-2 text-border">/</span>
                <span className="text-accent">On-Page SEO</span>
              </nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">On-Page SEO</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  On-Page SEO Dubai &amp; GCC — <span className="gradient-text">Content, Keywords &amp; Page Optimization</span>
                </h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">
                  Every page on your website is either working for you or against you. upranked.io's on-page SEO service optimizes each page for the exact commercial-intent queries your buyers in Dubai, Riyadh, Kuwait, Bahrain, London, and New York are using to find businesses like yours.
                </p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">On-page SEO</strong> is the optimization of content, HTML structure, and metadata within individual web pages to improve their ranking in search engines — covering title tags, H1/H2 headings, keyword placement, internal links, image alt text, and structured data. In the GCC, on-page SEO must be applied bilingually across English and Arabic versions of every page.</p>
                </div>
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                  <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-start pt-4 lg:pt-16">
              <img
                src="/images/sam-hamouda-seo-consultant-dubai.webp"
                alt="Sam Hamouda — on-page SEO consultant in Dubai optimizing title tags, keywords and content for GCC businesses at upranked.io"
                width={480}
                height={640}
                loading="eager"
                decoding="async"
                className="rounded-2xl border border-border object-cover object-top w-full max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What On-Page SEO Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <CheckCircle className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">On-Page SEO FAQs — Dubai &amp; GCC</h2>
          <div className="space-y-3">
            {faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-seo-consultant-dubai.webp"
              alt="Sam Hamouda — Founder and GCC SEO Strategist at upranked.io, Dubai UAE"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Written &amp; Overseen By</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam Hamouda</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam Hamouda is a GCC SEO strategist with deep expertise across UAE, KSA, Kuwait, and Bahrain markets. The APEX Framework — upranked.io's structured SEO methodology — was developed from hands-on experience ranking competitive GCC sectors including financial services, healthcare, industrial, and professional B2B.</p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Markets Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { flag: '🇦🇪', city: 'Dubai, UAE', href: '/markets/gcc/uae/dubai' },
              { flag: '🇸🇦', city: 'Riyadh, KSA', href: '/markets/gcc/ksa/riyadh' },
              { flag: '🇰🇼', city: 'Kuwait City', href: '/markets/gcc/kuwait' },
              { flag: '🇧🇭', city: 'Manama, Bahrain', href: '/markets/gcc/bahrain' },
              { flag: '🇬🇧', city: 'London, UK', href: '/markets/uk/london' },
              { flag: '🇺🇸', city: 'New York, USA', href: '/markets/usa/new-york' },
            ].map(m => (
              <Link key={m.city} href={m.href}><a className="bg-navy border border-border rounded-xl p-4 flex items-center gap-3 hover:border-accent/40 transition-colors"><span className="text-2xl">{m.flag}</span><span className="text-white font-medium text-sm">{m.city}</span></a></Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Get Your Pages <span className="text-accent">Optimized</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic and see which pages are costing you traffic in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/contact"><a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2">Book Free Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact" className="btn-secondary text-lg px-10 py-5">Contact Us</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
              <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
