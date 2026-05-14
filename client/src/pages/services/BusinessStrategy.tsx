/*
 * PAGE: /growth-intelligence/strategy
 * PRIMARY KW: business strategy Dubai (Vol: ~1,200/mo | KD: 38)
 * SECONDARY KW: market entry strategy GCC, market positioning Dubai UAE, business growth consultant GCC
 * NEAR ME: business strategy consultant near me Dubai, growth consultant near me GCC
 * META TITLE (60 chars): Business Strategy Dubai & GCC | Market Entry | upranked.io
 * META DESC (157 chars): Market positioning & growth strategy for companies in Dubai & the GCC. APEX Framework™ applied. Market entry, competitor displacement, 90-day roadmaps. Book a call.
 * SCHEMA: @graph → Service + FAQPage + Person + BreadcrumbList
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  CheckCircle, ArrowRight, ChevronDown, Target, BarChart3, TrendingUp,
  Globe, Shield, Zap, MapPin, Phone, Mail, Star, Award
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
  { q: 'What is business strategy and market positioning for GCC companies?', a: 'Business strategy at upranked.io means defining the exact competitive position your company should hold in the Dubai, GCC, or global market — and building the digital and commercial roadmap to achieve it. Market positioning defines how your target buyers perceive you relative to alternatives. In the GCC\'s competitive business environment, clear positioning commands premium pricing, attracts higher-quality clients, and creates sustainable competitive moats. The APEX Framework™ (Audit → Position → Execute → Expand) structures every strategy engagement.' },
  { q: 'How is business strategy different from business consultation?', a: 'Business consultation at upranked.io addresses a specific immediate challenge in a focused session — a keyword strategy question, a competitor displacement problem, or a channel investment decision. Business strategy is a longer engagement focused on the foundational layer: your competitive positioning, market differentiation, go-to-market channel architecture, and the 90-180 day roadmap to execute it. Consultation is tactical; strategy is foundational. Some clients start with consultation and evolve to a full strategy engagement.' },
  { q: 'Do you work with companies entering the GCC from London or New York?', a: 'Yes — GCC market entry strategy is one of upranked.io\'s core specialisations. Companies expanding from London or New York into Dubai, Riyadh, Kuwait, or Bahrain need to understand: GCC buyer search behaviour and commercial intent patterns, Arabic SEO requirements and the bilingual channel split, UAE free zone and emirate-level positioning, local competitor landscape analysis, and the go-to-market channel mix that works in their specific GCC city. Sama Alaa leads every market entry engagement personally.' },
  { q: 'What does a 90-day growth roadmap include?', a: 'A 90-day growth roadmap from upranked.io includes: current position audit (keyword rankings, competitor gaps, technical health), market positioning statement and differentiation framework, prioritised channel investment plan (organic SEO, bilingual content, GBP optimisation, paid channel integration), content and authority building schedule, quick-win list for months 1–2, and a 30/60/90 milestone tracker with KPIs. The roadmap is designed to be executed by your team or in partnership with upranked.io\'s SEO retainer.' },
  { q: 'How long does a business strategy engagement last?', a: 'Typically 3–6 months for a full strategy build, implementation guidance, and quarterly review. Some clients engage for a one-time market entry strategy (4–6 weeks) and then continue with an SEO retainer to execute the digital growth components. Others continue as ongoing quarterly strategy partners as their business scales across the GCC, London, or New York. The right format depends on your team\'s execution capacity and how much ongoing strategic guidance you need.' },
  { q: 'How do I start a business strategy engagement?', a: 'Book a free 30-minute APEX Diagnostic via the Contact page, our contact page, or email uprankedio@gmail.com. Sama Alaa reviews your current position, identifies your primary positioning challenge, and outlines the strategy engagement format that fits your situation — with no commitment required for the intro call.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://upranked.io/growth-intelligence/strategy#service',
      name: 'Business Strategy Dubai & GCC — Market Entry & Positioning',
      serviceType: 'Business Strategy & Market Positioning',
      description: 'Market positioning and growth strategy for companies in Dubai, GCC, London, and New York. APEX Framework™ applied to competitive positioning, market entry, and growth roadmaps.',
      provider: { '@type': 'Organization', '@id': 'https://upranked.io/#organization', name: 'upranked.io', url: 'https://upranked.io' },
      areaServed: ['Dubai', 'Riyadh', 'Kuwait', 'Bahrain', 'London', 'New York'],
      url: 'https://upranked.io/growth-intelligence/strategy',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://upranked.io/growth-intelligence/strategy#faq',
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
      '@id': 'https://upranked.io/growth-intelligence/strategy#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Growth Intelligence', item: 'https://upranked.io/growth-intelligence' },
        { '@type': 'ListItem', position: 3, name: 'Business Strategy', item: 'https://upranked.io/growth-intelligence/strategy' },
      ],
    },
  ],
};

const deliverables = [
  { icon: Target, title: 'Market Positioning Statement', desc: 'A clear, differentiated positioning for your GCC or global market — what you are, who you serve, and why buyers should choose you over any alternative.' },
  { icon: BarChart3, title: 'Competitor Gap Analysis', desc: 'A full landscape review of your competitors\' digital presence, keyword rankings, content positioning, and weaknesses — with a displacement strategy to take their position.' },
  { icon: TrendingUp, title: '90-Day Growth Roadmap', desc: 'A prioritised, executable 90-day plan with specific milestones, channel investments, quick wins, and KPIs tied to leads and revenue.' },
  { icon: Globe, title: 'GCC Market Entry Strategy', desc: 'For companies expanding from London, New York, or internationally into Dubai, Riyadh, Kuwait, or Bahrain — a full go-to-market playbook.' },
  { icon: Shield, title: 'Channel Investment Prioritisation', desc: 'Where to invest for maximum ROI in your GCC or global market — organic SEO, bilingual EN/AR content, paid search, GBP, or a combination.' },
  { icon: Award, title: 'Execution Accountability', desc: 'Ongoing quarterly strategy reviews and WhatsApp support as you execute — strategy is only valuable when it leaves the document.' },
];

const steps = [
  { n: '01', title: 'Market Intelligence', desc: 'Deep research into your market, competitors, and buyer behaviour in Dubai, Riyadh, Kuwait, Bahrain, London, or New York — before any recommendations are made.' },
  { n: '02', title: 'Positioning Workshop', desc: 'A focused working session with Sama Alaa to define your competitive advantage, messaging framework, and the exact market position to own.' },
  { n: '03', title: 'Strategy Architecture', desc: 'A clear, prioritised growth strategy with channel investments, content roadmap, and 30/60/90-day milestone plan — built for your team to execute.' },
  { n: '04', title: 'Execution Support', desc: 'Ongoing accountability, quarterly reviews, and strategic guidance as you execute across your GCC and global markets.' },
];

export default function BusinessStrategy() {
  usePageMeta({
    title: 'Business Strategy Dubai & GCC | Market Entry | upranked.io',
    description: 'Market positioning & growth strategy for companies in Dubai & the GCC. APEX Framework™ applied. Market entry, competitor displacement, 90-day roadmaps. Book a call.',
    schemaId: 'strategy-schema',
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
                <span className="text-accent">Business Strategy</span>
              </nav>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block text-accent font-semibold tracking-widest text-xs uppercase bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">Growth Intelligence · Strategy</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Business Strategy Dubai —{' '}<span className="gradient-text">Market Positioning &amp; Growth</span>{' '}for GCC Companies
                </h1>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Strategic market positioning and growth architecture for companies in Dubai, the GCC, London, and New York. We define where you stand, where you should stand, and build the APEX Framework™ roadmap to get you there.
                </p>
                <address className="not-italic flex flex-col sm:flex-row gap-4 text-sm text-text-secondary mb-8">
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY</span>
                </address>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact/"><a className="btn-primary inline-flex items-center gap-2 text-base px-7 py-3.5">Book a Strategy Session <ArrowRight className="w-5 h-5" /></a></Link>
                  <Link href="/about/"><a className="btn-secondary inline-flex items-center gap-2 text-base px-7 py-3.5">Meet Sama Alaa</a></Link>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/24-business-strategy.svg"
                  alt="Business strategy and market positioning roadmap for GCC companies — growth planning, competitive intelligence, revenue targets by upranked.io Dubai"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-dark-gray py-5 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs text-text-secondary">
            {['GCC Market Intelligence', 'Competitor Displacement', 'Growth Roadmaps', 'APEX Framework™', 'Market Entry Strategy'].map(t => (
              <div key={t} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is <span className="text-accent">Business Strategy</span> at upranked.io?</h2>
            <div className="border-l-4 border-accent bg-dark-gray/80 rounded-r-xl p-6 mb-8">
              <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-2">Definition</p>
              <p className="text-text-secondary leading-relaxed"><strong className="text-white">Business strategy at upranked.io</strong> means defining the exact competitive position your company should own in the Dubai, GCC, London, or New York market — and building the APEX Framework™ roadmap to achieve it. This covers: market positioning (what you are, who you serve, why buyers choose you), competitive gap analysis (where competitors are weak and how to displace them), go-to-market channel architecture (organic SEO, bilingual EN/AR content, paid search, GBP), and a 90-day execution roadmap with specific milestones and KPIs tied to leads and revenue.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dark-gray border border-border rounded-xl p-5">
                <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide text-accent">Best Suited For</h3>
                <ul className="space-y-2">
                  {['Companies entering the GCC from London or NY', 'Businesses losing ground to competitors in Dubai', 'Brands repositioning after a market shift', 'Companies scaling from 1 GCC city to multiple', 'B2B firms building a long-term organic growth engine', 'Professional services firms defining their niche'].map(i => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-dark-gray border border-border rounded-xl p-5">
                <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide text-accent">Markets Covered</h3>
                <ul className="space-y-2">
                  {[
                    { flag: '🇦🇪', m: 'Dubai, UAE — Primary hub' },
                    { flag: '🇸🇦', m: 'Riyadh, KSA — Vision 2030 growth market' },
                    { flag: '🇰🇼', m: 'Kuwait City, Kuwait' },
                    { flag: '🇧🇭', m: 'Manama, Bahrain' },
                    { flag: '🇬🇧', m: 'London, UK — Global expansion' },
                    { flag: '🇺🇸', m: 'New York, USA — Global expansion' },
                  ].map(item => (
                    <li key={item.m} className="flex items-center gap-2 text-xs text-text-secondary"><span>{item.flag}</span><MapPin className="w-3 h-3 text-accent" />{item.m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in <span className="text-accent">Business Strategy</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">A complete strategic framework from market analysis to an executable growth roadmap — built for your GCC or global market.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {deliverables.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="card-premium group hover:border-accent/50 transition-colors">
                <d.icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2 text-sm">{d.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build Your <span className="text-accent">Growth Strategy</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">From market intelligence to executable roadmap — four phases, no vague deliverables.</p>
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
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Strategy Dubai — <span className="text-accent">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}</div>
        </div>
      </section>

      {/* BOOKING CTA + NAP */}
      <section className="section-padding bg-gradient-to-br from-navy via-dark-gray to-navy">
        <div className="container-premium max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Star className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build a <span className="text-accent">Winning Position</span> in Dubai &amp; the GCC?</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">Book a free APEX Diagnostic with Sama Alaa. We assess your current positioning and identify your highest-leverage growth opportunities in Dubai, Riyadh, London, or New York.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact/"><a className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">Book Free Strategy Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact/" className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4">Contact Us</a>
            </div>
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary">
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors justify-center"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <span className="hidden sm:block text-border">|</span>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors justify-center"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2 justify-center"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY</span>
            </address>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
