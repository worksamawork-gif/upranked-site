/*
 * PAGE: /growth-intelligence/tools
 * PRIMARY KW: custom SEO tools Dubai / growth intelligence tools GCC (Vol: ~320/mo | KD: 22)
 * SECONDARY KW: custom marketing dashboard GCC, SEO dashboard Dubai, growth intelligence platform UAE
 * META TITLE (58 chars): Custom Growth Tools Dubai & GCC | upranked.io
 * META DESC (158 chars): Proprietary SEO dashboards, competitor trackers & growth intelligence platforms built for GCC businesses. Purpose-built by upranked.io. Book a free discovery call.
 * SCHEMA: @graph → Service + FAQPage + Person + BreadcrumbList
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  CheckCircle, ArrowRight, ChevronDown, Code2, BarChart3, Zap,
  Globe, Shield, Target, MapPin, Phone, Mail, Star
} from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} viewport={{ once: true }} className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-center justify-between px-6 py-5 text-left bg-dark-gray hover:bg-navy/60 transition-colors duration-200">
        <span className="font-semibold text-white pr-4 text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 py-5 text-text-secondary leading-relaxed text-sm bg-navy/30 border-t border-border">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const faqs = [
  { q: 'What kind of custom growth tools does upranked.io build?', a: 'upranked.io builds purpose-built growth intelligence tools for businesses in Dubai, the GCC, London, and New York. Common tools include: custom SEO rank tracking dashboards tied to your commercial keywords, automated competitor monitoring and alert systems, pipeline intelligence platforms that connect organic traffic to CRM data, bilingual keyword opportunity finders for EN/AR GCC markets, content performance analytics platforms, and GCC market intelligence aggregators. Every tool is built around your specific intelligence gap — not a generic SaaS template.' },
  { q: 'Do I need a technical team to use the tools upranked.io builds?', a: 'No. Tools are designed with your team\'s capability in mind. Clean interfaces, automated workflows, scheduled reports delivered to your inbox, and clear output that non-technical users can act on immediately. Training is included in every tool delivery. The goal is intelligence at your fingertips — not a platform that requires an engineer to operate.' },
  { q: 'How long does it take to build a custom growth tool?', a: 'Typically 2–8 weeks from scoping to delivery, depending on complexity. Simple dashboards and automated trackers: 2–3 weeks. Integrated intelligence platforms connecting multiple data sources: 5–8 weeks. A scoping call with Sama Alaa gives you a precise timeline based on your specific requirements before any commitment.' },
  { q: 'Can the tools integrate with our existing platforms?', a: 'Yes. Standard integrations include Google Analytics 4, Google Search Console, Google Ads, CRM platforms (HubSpot, Salesforce, Zoho), spreadsheets, databases, and most marketing platforms via APIs. For GCC-specific requirements like Arabic language data processing or local directory integrations, we build custom connectors.' },
  { q: 'Are growth tools suitable for businesses in Dubai and the GCC?', a: 'Tools built by upranked.io are specifically designed for GCC market dynamics — bilingual EN/AR data, UAE and KSA search engine patterns, free zone and emirate-level geographic segmentation, and GCC-specific competitor tracking. Whether you\'re tracking commercial keywords in Dubai, procurement searches in Riyadh, or market entry intelligence for Kuwait and Bahrain, the tools are configured for your exact market.' },
  { q: 'How do I get started with a custom growth tool?', a: 'Book a free discovery call via the Contact page, our contact page, or email Sam@upranked.io. Describe the intelligence gap you have — the data you wish you had, the process that wastes time, or the insight that would change your decisions. Sama Alaa will assess your requirements and outline what can be built, in what timeframe, and at what investment level.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://upranked.io/growth-intelligence/tools#service',
      name: 'Custom Growth Tools Dubai & GCC — upranked.io',
      serviceType: 'Custom Growth Intelligence Tools',
      description: 'Proprietary SEO dashboards, competitor tracking systems, and growth intelligence platforms built for businesses in Dubai, the GCC, London, and New York.',
      provider: { '@type': 'Organization', '@id': 'https://upranked.io/#organization', name: 'upranked.io', url: 'https://upranked.io' },
      areaServed: ['Dubai', 'Riyadh', 'Kuwait', 'Bahrain', 'London', 'New York'],
      url: 'https://upranked.io/growth-intelligence/tools',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://upranked.io/growth-intelligence/tools#faq',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'Person',
      '@id': 'https://upranked.io/about#person',
      name: 'Sama Alaa',
      jobTitle: 'Founder & Chief Growth Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io' },
      url: 'https://upranked.io/about',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://upranked.io/growth-intelligence/tools#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Growth Intelligence', item: 'https://upranked.io/growth-intelligence' },
        { '@type': 'ListItem', position: 3, name: 'Tailored Tools', item: 'https://upranked.io/growth-intelligence/tools' },
      ],
    },
  ],
};

const toolExamples = [
  { icon: BarChart3, title: 'SEO Rank Tracking Dashboards', desc: 'Commercial keyword rankings tracked daily across Dubai, Riyadh, Kuwait, and London — with competitor position overlays and trend alerts.' },
  { icon: Target, title: 'Competitor Intelligence Systems', desc: 'Automated monitoring of competitor rankings, content output, backlink growth, and GBP activity — with weekly digest reports.' },
  { icon: Zap, title: 'Organic Pipeline Trackers', desc: 'Connect Google Search Console and GA4 to your CRM to track every organic session from keyword to closed deal — with full revenue attribution.' },
  { icon: Globe, title: 'Bilingual Keyword Finders', desc: 'EN/AR keyword opportunity platforms that surface commercial-intent search gaps in your GCC market before competitors find them.' },
  { icon: Code2, title: 'Content Performance Analytics', desc: 'Page-level content tracking that identifies which articles, service pages, and landing pages generate the most qualified leads — not just sessions.' },
  { icon: Shield, title: 'GCC Market Intelligence Aggregators', desc: 'Custom platforms that pull and surface search trend data, SERP volatility signals, and emerging opportunities across your target GCC cities.' },
];

const steps = [
  { n: '01', title: 'Problem Discovery', desc: 'Sama Alaa maps the intelligence gap — the data you don\'t have, the process that costs time, or the insight that would change your decisions.' },
  { n: '02', title: 'Tool Architecture', desc: 'Data sources, automation logic, output format, and workflow integration designed before a single line of code is written.' },
  { n: '03', title: 'Build & Integrate', desc: 'The tool is built and integrated with your existing platforms — GA4, GSC, CRM, or custom data sources. No generic SaaS compromise.' },
  { n: '04', title: 'Training & Iteration', desc: 'Full team training on delivery, plus a 30-day iteration cycle to refine the tool based on real usage before handoff is complete.' },
];

export default function TailoredTools() {
  usePageMeta({
    title: 'Custom Growth Tools Dubai & GCC | upranked.io',
    description: 'Proprietary SEO dashboards, competitor trackers & growth intelligence platforms built for GCC businesses. Purpose-built by upranked.io. Book a free discovery call.',
    schemaId: 'tools-schema',
    schema,
  });

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* HERO + NAP #1 */}
      <section className="relative pt-32 pb-20 px-4 texture-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-70 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span>/</span>
                <Link href="/growth-intelligence/"><a className="hover:text-accent transition-colors">Growth Intelligence</a></Link><span>/</span>
                <span className="text-accent">Tailored Tools</span>
              </nav>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block text-accent font-semibold tracking-widest text-xs uppercase bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">Growth Intelligence · Tools</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Custom Growth Tools —{' '}<span className="gradient-text">Built for Your Business</span>{' '}in Dubai &amp; the GCC
                </h1>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Proprietary SEO dashboards, competitor tracking systems, and growth intelligence platforms purpose-built for your specific challenge. No off-the-shelf SaaS limits — tools that give your team an unfair data advantage in the GCC.
                </p>
                <address className="not-italic flex flex-col sm:flex-row gap-4 text-sm text-text-secondary mb-8">
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY</span>
                </address>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact/"><a className="btn-primary inline-flex items-center gap-2 text-base px-7 py-3.5">Discuss Your Tool Idea <ArrowRight className="w-5 h-5" /></a></Link>
                  <Link href="/about/"><a className="btn-secondary inline-flex items-center gap-2 text-base px-7 py-3.5">Meet Sama Alaa</a></Link>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-start pt-4 lg:pt-16">
              <img
                src="/images/sam-hamouda-seo-consultant-dubai.webp"
                alt="Sama Alaa — growth intelligence tool builder in Dubai creating custom SEO dashboards and competitor tracking systems for GCC businesses at upranked.io"
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

      {/* TRUST BAR */}
      <section className="bg-dark-gray py-5 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs text-text-secondary">
            {['Purpose-Built Intelligence', 'GCC Market Data', 'Bilingual EN/AR', 'API Integrations', 'Team Training Included'].map(t => (
              <div key={t} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOL EXAMPLES */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Examples of <span className="text-accent">Tools We Build</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Every tool is architected around the specific intelligence gap your GCC or global business faces. These are common starting points — your challenge drives the design.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {toolExamples.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="card-premium group hover:border-accent/50 transition-colors">
                <t.icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2 text-sm">{t.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We <span className="text-accent">Build Your Tool</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">From problem discovery to a working intelligence platform your team uses daily — four clear steps.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="card-premium relative">
                <div className="text-6xl font-black text-border absolute -top-2 -right-2 leading-none select-none">{s.n}</div>
                <h3 className="text-lg font-bold text-accent mb-3 mt-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Growth Tools — <span className="text-accent">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}</div>
        </div>
      </section>

      {/* BOOKING CTA + NAP */}
      <section className="section-padding bg-gradient-to-br from-navy via-dark-gray to-navy">
        <div className="container-premium max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Star className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Growth Problem That Needs a <span className="text-accent">Custom Tool</span>?</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">Book a free discovery call with Sama Alaa. Describe the intelligence gap you face — we'll tell you exactly what can be built, in what timeframe, at what investment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact/"><a className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">Book Free Discovery Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact/" className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4">Contact Us</a>
            </div>
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary">
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors justify-center"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <span className="hidden sm:block text-border">|</span>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors justify-center"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2 justify-center"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY</span>
            </address>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
