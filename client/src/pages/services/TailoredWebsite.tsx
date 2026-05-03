/*
 * PAGE: /growth-intelligence/websites
 * PRIMARY KW: custom website Dubai (Vol: ~1,600/mo | KD: 36)
 * SECONDARY KW: SEO website design Dubai GCC, website design company UAE, bilingual website GCC
 * NEAR ME: website design company near me Dubai, web developer near me UAE
 * META TITLE (58 chars): Custom Website Dubai & GCC | SEO-Ready | upranked.io
 * META DESC (158 chars): Premium custom websites for Dubai & GCC businesses. SEO-ready from day one, bilingual EN/AR, Core Web Vitals optimised. Built by upranked.io. Book a free call.
 * SCHEMA: @graph → Service + FAQPage + Person + BreadcrumbList
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  CheckCircle, ArrowRight, ChevronDown, Globe, Zap, BarChart3,
  Shield, Target, Code2, MapPin, Phone, Mail, Star
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
  { q: 'What types of websites does upranked.io build for Dubai and GCC businesses?', a: 'upranked.io builds custom websites for service businesses, professional practices, B2B companies, and e-commerce brands in Dubai, Abu Dhabi, Riyadh, Kuwait, Bahrain, London, and New York. Common project types include: specialist clinic and medical practice websites (Dubai Healthcare City, Harley Street London), B2B company websites for UAE free zone businesses, professional services firms across DIFC and Riyadh KAFD, and high-converting landing pages for commercial-intent GCC keywords.' },
  { q: 'Is the website built with SEO from day one?', a: 'Yes — SEO architecture is built into every site from the first planning session, not retrofitted after launch. This includes: clean URL structure, proper heading hierarchy (H1–H6), schema markup (@graph JSON-LD for Service, Organization, LocalBusiness, FAQ, and Person), XML sitemap, Core Web Vitals optimization, mobile-first development, internal linking silo architecture, and hreflang for bilingual EN/AR support. A site that launches SEO-ready compounds faster than one retrofitted later.' },
  { q: 'Do you include Arabic (RTL) support and bilingual content?', a: 'Yes. Full bilingual support — English and Arabic — is included as standard. This covers proper RTL layout for Arabic pages, Arabic font integration (Cairo), independent Arabic content (not machine-translated English), hreflang implementation for language targeting, and Arabic-specific SEO meta tags. Arabic search in the UAE and Saudi Arabia is a distinct channel — the website is built to serve both audiences independently, not just cosmetically translate English content.' },
  { q: 'How long does a custom website project take?', a: 'Typically 4–8 weeks from project kickoff to launch, depending on scope and content readiness. A focused landing page or single-service site: 3–4 weeks. A full multi-page company website with bilingual support: 6–8 weeks. We provide a clear project timeline at kickoff with milestone dates — no ambiguous delivery windows.' },
  { q: 'Can upranked.io build a website for a company in London or New York?', a: 'Yes. upranked.io builds websites for businesses in London, New York, Dubai, and the GCC. International clients expanding into Dubai or the GCC particularly benefit from our market-specific knowledge — we ensure the website architecture, content, and SEO strategy align with GCC buyer expectations, search behaviour, and competitive landscape from launch day. Remote project management is available for all markets.' },
  { q: 'What happens after the website launches?', a: 'A 30-day post-launch support window is included in every project: bug fixes, speed optimisations, Google Search Console submission and monitoring, and initial ranking progress checks. For ongoing SEO, clients typically continue with an upranked.io SEO retainer to compound the website\'s performance — turning the SEO-ready foundation into first-page rankings for commercial keywords in Dubai, Riyadh, London, or your target market.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://upranked.io/growth-intelligence/websites#service',
      name: 'Custom Website Dubai & GCC — SEO-Ready by upranked.io',
      serviceType: 'Custom Website Design & Development',
      description: 'Premium, SEO-ready custom websites for businesses in Dubai, GCC, London, and New York. Bilingual EN/AR, Core Web Vitals optimised, schema markup included.',
      provider: { '@type': 'Organization', '@id': 'https://upranked.io/#organization', name: 'upranked.io', url: 'https://upranked.io' },
      areaServed: ['Dubai', 'Riyadh', 'Kuwait', 'Bahrain', 'London', 'New York'],
      url: 'https://upranked.io/growth-intelligence/websites',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://upranked.io/growth-intelligence/websites#faq',
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
      '@id': 'https://upranked.io/growth-intelligence/websites#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Growth Intelligence', item: 'https://upranked.io/growth-intelligence' },
        { '@type': 'ListItem', position: 3, name: 'Tailored Website', item: 'https://upranked.io/growth-intelligence/websites' },
      ],
    },
  ],
};

const features = [
  { icon: Target, title: 'Conversion-First Design', desc: 'Every page element serves a conversion objective. Trust signals, CTA placement, and social proof positioned for GCC and global buyer expectations.' },
  { icon: Shield, title: 'SEO Architecture Built-In', desc: 'Heading structure, schema markup, URL architecture, internal linking silo, sitemap, and hreflang — built in from day one, not retrofitted.' },
  { icon: Globe, title: 'Bilingual EN/AR, Full RTL', desc: 'Independent Arabic content with RTL layout, Arabic font, hreflang, and Arabic-specific SEO meta tags. Not translated English — native Arabic strategy.' },
  { icon: Zap, title: 'Core Web Vitals Optimised', desc: 'LCP, CLS, INP — all optimised before launch. Fast load times, clean code, and lazy loading built in for Google\'s performance ranking signals.' },
  { icon: BarChart3, title: 'Analytics & Tracking Ready', desc: 'GA4, Google Search Console, and conversion tracking configured from launch day. Revenue attribution from day one — not an afterthought.' },
  { icon: Code2, title: 'Lead Capture & Booking Systems', desc: 'Integrated forms, WhatsApp CTAs, appointment booking systems, and CRM connections built into the site from the first development sprint.' },
];

const steps = [
  { n: '01', title: 'Discovery & Strategy', desc: 'Business goals, GCC target audience, competitor sites, and keyword opportunity reviewed before a single design decision is made.' },
  { n: '02', title: 'Design & Copy', desc: 'Premium visual design aligned to your brand with conversion copy written for GCC decision-makers. Every page designed to build trust and drive action.' },
  { n: '03', title: 'Build & Optimise', desc: 'Development with SEO baked in — schema markup, Core Web Vitals, bilingual RTL, sitemap, and full analytics configuration before launch.' },
  { n: '04', title: 'Launch & Support', desc: 'Smooth launch with GSC submission, 30-day post-launch monitoring, and a clear path to ongoing SEO retainer for compounding rankings.' },
];

export default function TailoredWebsite() {
  usePageMeta({
    title: 'Custom Website Dubai & GCC | SEO-Ready | upranked.io',
    description: 'Premium custom websites for Dubai & GCC businesses. SEO-ready from day one, bilingual EN/AR, Core Web Vitals optimised. Built by upranked.io. Book a free call.',
    schemaId: 'website-schema',
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
                <Link href="/growth-intelligence"><a className="hover:text-accent transition-colors">Growth Intelligence</a></Link><span>/</span>
                <span className="text-accent">Tailored Website</span>
              </nav>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block text-accent font-semibold tracking-widest text-xs uppercase bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">Growth Intelligence · Website</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Custom Website Dubai —{' '}<span className="gradient-text">SEO-Ready, Bilingual,</span>{' '}Built to Convert
                </h1>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Premium custom websites for businesses in Dubai, the GCC, London, and New York. SEO architecture built in from day one — not retrofitted. Bilingual EN/AR with full RTL support, Core Web Vitals optimised, and conversion-first from the first page.
                </p>
                <address className="not-italic flex flex-col sm:flex-row gap-4 text-sm text-text-secondary mb-8">
                  <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY</span>
                </address>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact"><a className="btn-primary inline-flex items-center gap-2 text-base px-7 py-3.5">Discuss Your Project <ArrowRight className="w-5 h-5" /></a></Link>
                  <Link href="/about"><a className="btn-secondary inline-flex items-center gap-2 text-base px-7 py-3.5">Our Approach</a></Link>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-start pt-4 lg:pt-16">
              <img
                src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
                alt="Sama Alaa — custom website designer and SEO strategist in Dubai building bilingual conversion-optimised sites for GCC businesses at upranked.io"
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
            {['SEO-Ready from Day One', 'Bilingual EN/AR RTL', 'Core Web Vitals Optimised', 'Conversion-First Design', 'GCC + London + NY'].map(t => (
              <div key={t} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in a <span className="text-accent">Tailored Website</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Every element built to serve your GCC or global market growth objectives — not a template dressed up as a custom site.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="card-premium group hover:border-accent/50 transition-colors">
                <f.icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2 text-sm">{f.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-accent">Website Build Process</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">From strategy to launch — four phases, clear milestones, no surprise delays.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Website Dubai — <span className="text-accent">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}</div>
        </div>
      </section>

      {/* BOOKING CTA + NAP */}
      <section className="section-padding bg-gradient-to-br from-navy via-dark-gray to-navy">
        <div className="container-premium max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Star className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Website That <span className="text-accent">Works as Hard as You Do</span>?</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">Book a free discovery call with Sama Alaa. Define your ideal website — how it looks, what it converts, and how it ranks in Dubai, Riyadh, London, or your target market.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact"><a className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">Book Free Discovery Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact" className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4">Contact Us</a>
            </div>
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary">
              <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors justify-center"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
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
