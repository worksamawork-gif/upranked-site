/*
 * PAGE: /about
 * PRIMARY KW: Sam SEO expert GCC (Vol: ~200/mo branded | KD: 12)
 * SECONDARY KW: GCC SEO expert Dubai, SEO strategist UAE, upranked.io founder, APEX Framework SEO
 * LSI: E-E-A-T SEO expert, bilingual SEO GCC, GCC growth strategist, SEO consultant Dubai
 * NEAR ME VARIANTS: SEO expert near me Dubai, SEO consultant near me GCC, SEO strategist near me UAE
 * META TITLE (60 chars): Sam | GCC SEO Expert & Growth Strategist | upranked.io
 * META DESC (150 chars): Meet Sam, GCC SEO expert & founder of upranked.io. Creator of APEX Framework™. 20+ GCC clients across UAE, Saudi Arabia, Kuwait & Qatar.
 * INTERNAL LINKS TO: /contact, /methodology, /industries, /growth-intelligence, /blog
 * INTERNAL LINKS FROM: All service pages (bio box), Home hero, Footer, Blog author
 * SCHEMA: @graph → Person + Organization + FAQPage + BreadcrumbList
 * IMAGES: /images/team/sam-hamouda-gcc-seo-expert.webp, sam-hamouda-upranked-founder.webp,
 *         apex-framework-methodology.webp, gcc-seo-strategy-dubai.webp
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  ArrowRight, CheckCircle, ChevronDown, Target, BarChart2, Zap, Shield,
  Globe, Users, Star, Award, TrendingUp, BookOpen, MapPin, Phone, Mail,
  LinkedinIcon, TwitterIcon, Facebook, Instagram
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
    q: 'Who is Sam and what makes him a GCC SEO expert?',
    a: 'Sam is the founder and Chief Growth Strategist at upranked.io — a premium Growth Intelligence Lab serving high-value businesses across the GCC. Sam specialises exclusively in the UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain markets, bringing deep understanding of GCC search behaviour, Arabic SEO dynamics, and the commercial requirements of trust-sensitive industries like healthcare and industrial B2B. He created the APEX Framework™ — upranked.io\'s proprietary 4-phase SEO methodology — from 20+ direct GCC client engagements.',
  },
  {
    q: 'What industries does Sam specialise in?',
    a: 'Sam\'s three core specialisations are Medical SEO (clinics, hospitals, specialist practices across Dubai, Abu Dhabi, and Riyadh), Industrial B2B SEO (manufacturers, suppliers, and trading companies across UAE free zones and Saudi industrial cities), and Business SEO (professional services, financial firms, and B2B companies across the GCC). These sectors require depth of expertise — not just traffic tactics — because buyers are sophisticated, purchase decisions are high-value, and Google\'s E-E-A-T signals heavily influence rankings.',
  },
  {
    q: 'What is the APEX Framework™ created by Sam?',
    a: 'The APEX Framework™ is upranked.io\'s proprietary 4-phase SEO and growth methodology: Audit (forensic review of site health, keyword gaps, and competitor landscape), Position (strategic keyword architecture and content positioning for GCC commercial intent), Execute (on-page optimisation, schema markup, bilingual content, and authority building), and Expand (scaling rankings, targeting new GCC cities and markets, and compounding ROI month over month). The framework was developed specifically for high-value GCC businesses — not adapted from a Western playbook.',
  },
  {
    q: 'Does Sam offer bilingual English and Arabic SEO?',
    a: 'Yes. Bilingual SEO is a core pillar of every upranked.io engagement. Sam conducts independent Arabic keyword research — not translated English keywords — produces or reviews native-quality Arabic content, implements hreflang tagging, and configures RTL technical requirements. Arabic search in the UAE and Saudi Arabia represents a distinct and often underserved channel. Businesses that skip Arabic SEO leave 35–50% of GCC search volume and a large Arabic-speaking buyer segment untouched.',
  },
  {
    q: 'Can I find an SEO expert near me in Dubai — is Sam based in Dubai?',
    a: 'Yes. upranked.io is based in Dubai, UAE, and serves clients across the GCC — Dubai, Abu Dhabi, Sharjah, Ajman, Riyadh, Jeddah, NEOM, Doha, Kuwait City, and Manama. If you\'re searching for an SEO expert near me in Dubai, an SEO consultant near me in the UAE, or a GCC growth strategist, you can reach Sam directly via our contact page or email uprankedio@gmail.com. All strategy calls are available remotely and in person across the region.',
  },
  {
    q: 'How does Sam differ from a typical SEO agency in Dubai?',
    a: 'Three distinctions: (1) Founder-led delivery — Sam is personally involved in every engagement, not handed off to a junior account manager after the sales call. (2) GCC-first, globally capable — upranked.io is built on deep GCC market intelligence (UAE, KSA, Kuwait, Qatar, Bahrain) and also serves expansion markets in London and New York, applying the same rigorous methodology wherever your clients search. (3) Revenue-first reporting — every engagement is measured in leads, pipeline, and revenue attributed to organic search, not just rankings and sessions.',
  },
];

const tocItems = [
  { id: 'about-Sam', label: 'About Sam' },
  { id: 'expertise', label: 'Areas of Expertise' },
  { id: 'apex', label: 'The APEX Framework™' },
  { id: 'philosophy', label: 'GCC Philosophy' },
  { id: 'why-upranked', label: 'Why upranked.io' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'faq', label: 'FAQ' },
];

const expertise = [
  { icon: Target, title: 'Medical SEO', desc: 'Clinics, hospitals, specialist practices, and medical groups across Dubai Healthcare City, Abu Dhabi, Riyadh, and across the GCC private healthcare market.' },
  { icon: BarChart2, title: 'Industrial B2B SEO', desc: 'Manufacturers, suppliers, traders, and industrial service providers in UAE free zones, Saudi industrial cities, and procurement-led GCC markets.' },
  { icon: TrendingUp, title: 'Business SEO', desc: 'Professional services, financial firms, consultancies, and B2B companies targeting commercial-intent buyers across Dubai, Abu Dhabi, Riyadh, Doha, and beyond.' },
  { icon: Globe, title: 'Bilingual EN/AR SEO', desc: 'Independent Arabic keyword research, native-quality content strategy, hreflang, RTL configuration — Arabic SEO as a full parallel channel, not an afterthought.' },
  { icon: Zap, title: 'Market Positioning', desc: 'Competitive displacement strategies that identify exactly where your GCC competitors are vulnerable and build a systematic plan to take their positions.' },
  { icon: BookOpen, title: 'GCC Growth Strategy', desc: 'Beyond SEO — full growth intelligence covering market entry, channel mix, content positioning, and revenue attribution across the GCC\'s most commercially valuable markets.' },
];

const apexPhases = [
  {
    letter: 'A', phase: 'Audit',
    desc: 'A forensic review of your digital presence, keyword gaps, competitor rankings, technical health, and GCC market opportunity — before a single recommendation is made.',
    items: ['Core Web Vitals & technical audit', 'Commercial keyword gap analysis', 'Competitor ranking benchmark', 'E-E-A-T content assessment', 'Bilingual SEO readiness review'],
  },
  {
    letter: 'P', phase: 'Position',
    desc: 'We design your keyword architecture and content positioning to own the commercial search queries your GCC buyers use at the moment of decision.',
    items: ['Revenue keyword map by buyer stage', 'GCC city and free zone targeting', 'Arabic keyword strategy', 'Content gap matrix vs competitors', 'Site architecture redesign'],
  },
  {
    letter: 'E', phase: 'Execute',
    desc: 'Prioritised, high-leverage execution across technical SEO, content, schema, and authority — done in the right sequence for maximum compounding effect.',
    items: ['On-page optimisation & schema markup', 'Bilingual content production', 'GBP & local citation optimisation', 'Editorial link acquisition (GCC press)', 'Conversion page CRO'],
  },
  {
    letter: 'X', phase: 'Expand',
    desc: 'Scale what works. Systematically expand organic reach across new GCC cities, target new commercial keywords, and compound month-over-month ROI.',
    items: ['New keyword clusters monthly', 'Additional GCC city/market targeting', 'Content refresh & ranking defence', 'Revenue attribution reporting', 'Quarterly strategy reviews'],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://upranked.io/about#person',
      name: 'Sam',
      jobTitle: 'Founder & Chief Growth Strategist',
      description: 'Sam is a GCC SEO expert and founder of upranked.io — a premium Growth Intelligence Lab serving high-value businesses across the UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain. Creator of the APEX Framework™.',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://upranked.io/#organization',
        name: 'upranked.io',
        url: 'https://upranked.io',
      },
      url: 'https://upranked.io/about',
      sameAs: ['https://www.linkedin.com/company/upranked-io/'],
      knowsAbout: [
        'Medical SEO', 'Industrial B2B SEO', 'Business SEO', 'GCC SEO Strategy',
        'Bilingual EN/AR SEO', 'APEX Framework', 'GCC Market Positioning', 'Commercial Intent SEO',
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://upranked.io/#organization',
      name: 'upranked.io',
      url: 'https://upranked.io',
      description: 'Premium Growth Intelligence Lab — sector-specific SEO and growth strategy built for high-value businesses in the GCC.',
      telephone: '+201121664778',
      email: 'uprankedio@gmail.com',
      founder: { '@type': 'Person', '@id': 'https://upranked.io/about#person' },
      foundingLocation: { '@type': 'Place', name: 'Dubai, UAE' },
      areaServed: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Bahrain' },
      ],
      availableLanguage: [{ '@type': 'Language', name: 'English' }, { '@type': 'Language', name: 'Arabic' }],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://upranked.io/about#faq',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://upranked.io/about#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'About Sam', item: 'https://upranked.io/about' },
      ],
    },
  ],
};

/* ─── Page ─── */
export default function About() {
  const [activeSection, setActiveSection] = useState('');

  usePageMeta({
    title: 'Sam — Founder-Led SEO Agency Dubai & GCC | upranked.io',
    description: 'Meet Sam, founder of upranked.io. Specialist in Medical, Industrial & Business SEO for the GCC. Founder-led on every engagement — APEX Framework™. Dubai-based, GCC-wide.',
    schemaId: 'about-schema',
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

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-4 texture-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-70 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-secondary mb-8">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
                <span>/</span>
                <span className="text-accent">About</span>
              </nav>

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block text-accent font-semibold tracking-widest text-xs uppercase bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
                  SEO Agency · Dubai, UAE · GCC
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  <span className="gradient-text">upranked.io</span> —{' '}
                  SEO Agency for the GCC
                </h1>

                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  upranked.io is a premium SEO Agency built for high-value businesses across the GCC and globally. We specialise in Medical SEO, Industrial B2B SEO, Business SEO, and Growth Intelligence — all delivered on the proprietary APEX Framework™.
                </p>

                <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                  Founded by <span className="text-white font-semibold">Sam</span> — with 20+ GCC client engagements across Dubai, Riyadh, Kuwait City, Manama, London, and New York.
                </p>

                {/* NAP #1 */}
                <address className="not-italic flex flex-col sm:flex-row gap-4 text-sm text-text-secondary mb-8">
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Phone className="w-4 h-4 text-accent" /> Contact Us
                  </a>
                  <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · New York
                  </span>
                </address>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact/">
                    <a className="btn-primary inline-flex items-center gap-2 text-base px-7 py-3.5">
                      Work With Us <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                  <Link href="/methodology/">
                    <a className="btn-secondary inline-flex items-center gap-2 text-base px-7 py-3.5">
                      Our APEX Framework™
                    </a>
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/04-global-reach.svg"
                  alt="Global reach map showing upranked.io SEO coverage across GCC markets — Dubai, Riyadh, Kuwait, Bahrain, London, New York"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="py-10 bg-dark-gray border-b border-border">
        <div className="container-premium max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">On This Page</p>
          <nav aria-label="Table of contents">
            <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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

      {/* ── ABOUT Sam — E-E-A-T Hub ── */}
      <section id="about-Sam" className="section-padding bg-navy">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-dark-gray via-navy to-dark-gray border border-accent/30 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
                <div className="w-28 h-28 rounded-full border-2 border-accent/40 flex items-center justify-center mx-auto mb-5 overflow-hidden">
                  <img
                    src="/favicon.svg"
                    alt="Sam — Founder of upranked.io, GCC SEO Expert Dubai"
                    width={112} height={112}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = 'none';
                      t.parentElement!.classList.add('bg-accent/20');
                      const span = document.createElement('span');
                      span.className = 'text-accent font-black text-4xl';
                      span.textContent = 'SA';
                      t.parentElement!.appendChild(span);
                    }}
                  />
                </div>
                <h3 className="text-white font-black text-2xl mb-1">Sam</h3>
                <p className="text-accent text-sm font-semibold mb-1">Founder & Chief Growth Strategist</p>
                <p className="text-text-secondary text-xs mb-6">upranked.io — Dubai, UAE · GCC · London · New York</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: '20+', l: 'GCC clients' },
                    { n: '6', l: 'Priority markets' },
                    { n: 'APEX™', l: 'Proprietary framework' },
                    { n: 'EN/AR', l: 'Bilingual SEO' },
                  ].map(s => (
                    <div key={s.l} className="bg-navy/60 border border-border rounded-lg px-3 py-2">
                      <div className="text-accent font-black text-sm">{s.n}</div>
                      <div className="text-text-secondary text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 mt-5">
                  <a href="https://www.linkedin.com/company/upranked-io/" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy/60 hover:bg-navy rounded-lg transition-colors" aria-label="LinkedIn">
                    <LinkedinIcon className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://www.instagram.com/upranked.io/" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy/60 hover:bg-navy rounded-lg transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://x.com/Upranked7" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy/60 hover:bg-navy rounded-lg transition-colors" aria-label="X / Twitter">
                    <TwitterIcon className="w-4 h-4 text-accent" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61589100073844" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy/60 hover:bg-navy rounded-lg transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4 text-accent" />
                  </a>
                </div>
                <Link href="/contact/">
                  <a className="btn-primary inline-flex items-center gap-2 mt-4 text-sm px-6 py-2.5">
                    Work With Sam <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full max-w-md aspect-square rounded-2xl border-2 border-accent/30 -z-10" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">The Founder</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet <span className="text-accent">Sam</span>, Founder of upranked.io
              </h2>

              <div className="space-y-4 text-text-secondary leading-relaxed text-sm mb-6">
                <p>
                  Sam is the founder and Chief Growth Strategist at upranked.io — the GCC's premium Growth Intelligence Lab, built exclusively for high-value businesses in Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Kuwait City, and Manama. With 20+ direct client engagements across the UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain, Sam brings sector-specific GCC market knowledge that no generic global agency can replicate.
                </p>
                <p>
                  Sam's three core specialisations — Medical SEO, Industrial B2B SEO, and Business SEO — share one common characteristic: they are high-trust, high-stakes sectors where buyers conduct rigorous online research before committing. This is where Sam's expertise in E-E-A-T (Experience, Expertise, Authority, Trust) content strategy, bilingual EN/AR SEO, and commercial intent optimisation creates the most measurable business impact.
                </p>
                <p>
                  As the creator of the APEX Framework™ — upranked.io's proprietary Audit → Position → Execute → Expand methodology — Sam designed a system that treats search engine optimisation as a revenue function, not a marketing cost. Every engagement is measured in leads generated, pipeline created, and contracts closed — tracked against organic search with full attribution.
                </p>
                <p>
                  Sam maintains direct involvement in every client engagement. When you work with upranked.io, you work with the founder — not handed to a junior team after the first call. This model is deliberate: GCC markets are complex, Arabic-speaking buyers have distinct search patterns, and sector expertise matters enormously in healthcare, industrial, and professional services SEO.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-2.5">
                {[
                  '20+ GCC client engagements across 5 countries',
                  'Creator of the APEX Framework™ — proprietary 4-phase SEO methodology',
                  'Medical, Industrial, and Business SEO specialist',
                  'Bilingual strategy — independent English and Arabic SEO',
                  'E-E-A-T content architecture for trust-sensitive GCC industries',
                  'Based in Dubai, UAE — serving UAE, KSA, Kuwait, Qatar, Bahrain',
                  'Direct founder involvement on every client engagement',
                ].map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm">{c}</span>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-6 mb-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">Certifications &amp; Education</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { credential: 'MBA', issuer: 'American University in Cairo (AUC)' },
                    { credential: 'Business Development Diploma', issuer: 'IAO' },
                    { credential: 'Generative AI Mastermind', issuer: 'Outskill' },
                    { credential: 'Digital Transformation Certificate', issuer: 'ASU' },
                    { credential: 'Marketing', issuer: 'American University in Cairo (AUC)' },
                    { credential: 'SEO Diploma', issuer: 'Coursera' },
                  ].map(cert => (
                    <div key={cert.credential} className="flex items-start gap-3 bg-navy/60 border border-border rounded-lg px-4 py-3">
                      <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-xs font-semibold">{cert.credential}</p>
                        <p className="text-text-secondary text-xs mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/upranked-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent text-sm hover:underline"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn Profile
                </a>
                <span className="text-border">|</span>
                <a href="/contact/" className="text-accent text-sm hover:underline">
                  Contact Us →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AREAS OF EXPERTISE ── */}
      <section id="expertise" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-accent">upranked.io</span> Specialises In
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We don't work with every industry. Three sectors — Medical, Industrial B2B, and Business — where GCC search intent is highest, stakes are greatest, and our depth of expertise delivers the most measurable impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="card-premium group hover:border-accent/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/seo-industries/">
              <a className="btn-primary inline-flex items-center gap-2">View SEO Services <ArrowRight className="w-4 h-4" /></a>
            </Link>
            <Link href="/growth-intelligence/">
              <a className="btn-secondary inline-flex items-center gap-2">Growth Intelligence Services</a>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { n: '20+', l: 'GCC clients served', sub: 'Dubai, Riyadh, Kuwait, Bahrain' },
              { n: '280%', l: 'Avg organic lead increase', sub: 'at 12 months' },
              { n: '6', l: 'Priority markets', sub: 'UAE · KSA · Kuwait · Bahrain · UK · USA' },
              { n: '#1', l: 'Rankings achieved', sub: 'for primary commercial terms' },
            ].map(s => (
              <div key={s.l} className="bg-dark-gray border border-border rounded-xl p-4 text-center hover:border-accent/40 transition-colors">
                <div className="text-2xl font-black text-accent mb-1">{s.n}</div>
                <div className="text-white font-semibold text-xs mb-1">{s.l}</div>
                <div className="text-text-secondary text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APEX FRAMEWORK ── */}
      <section id="apex" className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-accent">APEX Framework™</span> — Sam's Proprietary Methodology
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Created by Sam from 20+ GCC client engagements. A structured, commercially-driven 4-phase system built for the UAE, Saudi Arabia, and GCC markets — not adapted from a Western template.
            </p>
          </motion.div>

          {/* Definition box — featured snippet target */}
          <div className="border-l-4 border-accent bg-dark-gray/80 rounded-r-xl p-6 mb-10 max-w-3xl mx-auto">
            <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-2">What Is the APEX Framework™?</p>
            <p className="text-text-secondary leading-relaxed text-sm">
              The APEX Framework™ is a proprietary 4-phase SEO and growth methodology developed by Sam at upranked.io. It stands for <strong className="text-white">Audit</strong> (forensic digital health and keyword opportunity review), <strong className="text-white">Position</strong> (revenue-intent keyword architecture and competitive gap analysis), <strong className="text-white">Execute</strong> (on-page, technical, content, and authority implementation), and <strong className="text-white">Expand</strong> (scaling rankings, new markets, and compounding organic ROI). The framework applies to all upranked.io service lines — Medical SEO, Industrial SEO, Business SEO, and Growth Intelligence consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {apexPhases.map((phase, i) => (
              <motion.div
                key={phase.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="card-premium"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-xl">{phase.letter}</span>
                  </div>
                  <div>
                    <p className="text-accent text-xs font-semibold uppercase tracking-widest">Phase {i + 1}</p>
                    <h3 className="text-lg font-bold text-white">{phase.phase}</h3>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{phase.desc}</p>
                <ul className="space-y-1.5">
                  {phase.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* APEX connector */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-dark-gray border border-accent/30 rounded-full">
              {['A', 'P', 'E', 'X'].map((l, i) => (
                <>
                  <span key={l} className="text-accent font-black text-2xl tracking-widest">{l}</span>
                  {i < 3 && <div className="w-8 h-px bg-accent/40" />}
                </>
              ))}
            </div>
            <p className="text-text-secondary text-sm mt-4">Applied across all upranked.io engagements — SEO, strategy, tools, and websites</p>
            <Link href="/methodology/">
              <a className="inline-flex items-center gap-2 text-accent text-sm mt-3 hover:underline">
                Full APEX Methodology Deep-Dive <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </motion.div>

          <div className="mt-10 bg-dark-gray border border-border rounded-xl p-6">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6 text-center">APEX Framework™ — Measurable Outcomes at Each Phase</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { phase: 'A', name: 'Audit', result: 'Full keyword gap map & competitor intelligence delivered in week 2' },
                { phase: 'P', name: 'Position', result: 'Revenue-intent keyword architecture approved before any content is written' },
                { phase: 'E', name: 'Execute', result: 'On-page, technical, bilingual, schema — all shipped in the right sequence' },
                { phase: 'X', name: 'Expand', result: 'New markets, new keywords, compounding organic ROI month over month' },
              ].map((p, i) => (
                <div key={p.phase} className="relative bg-navy/60 border border-border rounded-xl p-4 hover:border-accent/40 transition-colors">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-3">
                    <span className="text-black font-black text-lg">{p.phase}</span>
                  </div>
                  <div className="text-white font-bold text-sm mb-2">{p.name}</div>
                  <div className="text-text-secondary text-xs leading-relaxed">{p.result}</div>
                  {i < 3 && <div className="hidden md:block absolute -right-2 top-8 w-4 h-0.5 bg-accent/40 z-10" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GCC PHILOSOPHY ── */}
      <section id="philosophy" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sam's <span className="text-accent">GCC SEO Philosophy</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'GCC Search Is Not Western Search',
                  body: "The GCC's digital search environment is shaped by factors that most global agencies ignore: a bilingual Arabic-English buyer base, a unique free zone and emirate-level search geography, high mobile-first usage, and E-E-A-T signals weighted heavily in trust-sensitive industries. A strategy built for London or New York will underperform in Dubai. upranked.io was built from the GCC up.",
                },
                {
                  title: 'Revenue Is the Only Metric That Matters',
                  body: 'Sam measures every engagement against one output: business revenue attributed to organic search. Not domain authority scores, not session counts, not ranking position screenshots. If the organic channel isn\'t generating qualified leads and closing pipeline, the strategy is wrong — regardless of what the rankings show.',
                },
                {
                  title: 'Sector Depth Over Portfolio Width',
                  body: 'upranked.io serves three verticals — Medical, Industrial, and Business — because deep sector knowledge creates better SEO outcomes. Healthcare buyers and procurement managers search differently, use different terminology, and have different trust signals than consumer buyers. Generalist agencies miss these nuances. Sam does not.',
                },
                {
                  title: 'Arabic SEO Is Not Translated English SEO',
                  body: 'Arabic-speaking buyers in the UAE and Saudi Arabia search with different query structures, cultural intent signals, and keyword patterns than English speakers. Native-quality Arabic keyword research and content — not machine-translated English copy — is the only approach that works. This is why every upranked.io engagement includes independent bilingual SEO strategy.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-premium"
                >
                  <h3 className="text-lg font-bold text-accent mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY UPRANKED.IO ── */}
      <section id="why-upranked" className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-accent">upranked.io</span>? — The Three Distinctions
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Not for every business. Built for GCC companies where the stakes are high, buyers are sophisticated, and first-page rankings translate directly into revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: Globe,
                title: 'GCC-First, Globally Capable',
                desc: 'upranked.io is GCC-first — built on deep UAE, KSA, Kuwait, and Bahrain market intelligence. We also serve businesses expanding to London and New York, applying the same rigorous, revenue-first methodology to every market.',
              },
              {
                icon: Users,
                title: 'Founder-Led Delivery',
                desc: 'Sam is personally involved in every engagement from kickoff to monthly review. No junior handoffs, no account management black boxes — direct accountability from the founder.',
              },
              {
                icon: Award,
                title: 'Revenue Attribution',
                desc: 'Every engagement tracks leads, pipeline, and revenue from organic search — not just rankings. SEO treated as a revenue investment with a measurable, auditable return.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="card-premium text-center group hover:border-accent/50 transition-colors"
              >
                <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            {[
              { value: '20+', label: 'GCC businesses served' },
              { value: '5', label: 'Countries: UAE, KSA, Kuwait, Qatar, Bahrain' },
              { value: '3', label: 'Specialisations: Medical, Industrial, Business' },
              { value: '1', label: 'Framework: APEX™ — built for the GCC' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-dark-gray border border-border"
              >
                <div className="text-3xl font-black text-accent mb-2">{s.value}</div>
                <div className="text-xs text-text-secondary leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS + NAP #2 ── */}
      <section id="service-areas" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Where Sam Works — <span className="text-accent">GCC, UK &amp; USA</span>
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Searching for an SEO expert near me in Dubai, London, or New York? upranked.io serves the GCC's priority markets and has global reach in London and New York for businesses targeting international expansion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { flag: '🇦🇪', city: 'Dubai, UAE', detail: 'DIFC, Downtown, Business Bay, JLT, Dubai Internet City, Dubai Healthcare City — Primary GCC hub', primary: true },
                { flag: '🇸🇦', city: 'Riyadh, KSA', detail: 'KAFD, Olaya, Diriyah Gate — Fastest-growing GCC market, Vision 2030 epicentre', primary: true },
                { flag: '🇰🇼', city: 'Kuwait City, Kuwait', detail: 'Salmiya, Hawally, Sharq financial district, Dasman, Al Rai' },
                { flag: '🇧🇭', city: 'Manama, Bahrain', detail: 'Bahrain Financial Harbour, Seef District, Diplomatic Area, Amwaj Islands' },
                { flag: '🇬🇧', city: 'London, UK', detail: 'City of London, Canary Wharf, Mayfair, Soho, Shoreditch — Global expansion market', primary: true },
                { flag: '🇺🇸', city: 'New York, USA', detail: 'Manhattan, Midtown, Financial District, Brooklyn — Global expansion market', primary: true },
                { flag: '🇦🇪', city: 'Abu Dhabi & Sharjah, UAE', detail: 'ADGM, Al Reem Island, Khalidiyah · Sharjah Media City (Shams), SAIF Zone, Ajman Free Zone' },
                { flag: '🇸🇦', city: 'Jeddah & NEOM, KSA', detail: 'Jeddah Corniche, Al Hamra · NEOM mega-project zone, Dammam' },
                { flag: '🇶🇦', city: 'Doha, Qatar', detail: 'West Bay, Lusail City, Qatar Science & Technology Park, Msheireb Downtown' },
              ].map(area => (
                <div key={area.city} className={`border rounded-xl p-4 hover:border-accent/40 transition-colors ${area.primary ? 'border-accent/30 bg-navy/60' : 'border-border bg-navy/30'}`}>
                  <h3 className="font-bold text-white mb-1.5 flex items-center gap-2 text-sm">
                    <span>{area.flag}</span>
                    <MapPin className="w-3.5 h-3.5 text-accent" /> {area.city}
                    {area.primary && <span className="ml-auto text-xs text-accent border border-accent/30 rounded px-1.5 py-0.5 flex-shrink-0">Priority</span>}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{area.detail}</p>
                </div>
              ))}
            </div>

            {/* NAP #2 */}
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary border border-border rounded-xl p-5 bg-navy/40">
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" /> Contact Us (WhatsApp)
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE — Serving all GCC
              </span>
            </address>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Sam — <span className="text-accent">FAQ</span>
            </h2>
            <p className="text-text-secondary">Common questions about Sam's background, expertise, and the APEX Framework™.</p>
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
              Ready to Work Directly with <span className="text-accent">Sam</span>?
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Book a free 30-minute APEX Diagnostic call. Bring your biggest growth challenge — leave with a GCC-specific strategy, competitor gap analysis, and a prioritised roadmap built for your market and sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact/">
                <a className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
                  Book Free Strategy Call <ArrowRight className="w-5 h-5" />
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
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors justify-center">
                <Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com
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
