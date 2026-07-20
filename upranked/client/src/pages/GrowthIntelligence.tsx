import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Briefcase, Code2, Globe, Target, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Growth Intelligence — Dubai & GCC Business Growth Services',
      description:
        "upranked.io's Growth Intelligence division delivers business consultation, custom tools, tailored websites, and market positioning strategy for high-value businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York.",
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'City', name: 'Kuwait City' },
        { '@type': 'City', name: 'Manama' },
        { '@type': 'City', name: 'London' },
        { '@type': 'City', name: 'New York' },
      ],
      url: 'https://upranked.io/growth-intelligence',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Growth Intelligence Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Consultation Dubai & GCC' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Growth Tools GCC' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Dubai & GCC' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Strategy Dubai & GCC' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Growth Intelligence at upranked.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Growth Intelligence is upranked.io's suite of four strategic services that go beyond SEO: Business Consultation (1-on-1 strategy with Sam), Custom Growth Tools (purpose-built software and dashboards), Tailored Website (SEO-ready bilingual sites), and Business Strategy (market positioning and competitive architecture). Each service is available for businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York.",
          },
        },
        {
          '@type': 'Question',
          name: 'How is Growth Intelligence different from a regular digital marketing agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three differences: (1) Founder-led — Sam personally leads every engagement, not account managers; (2) Intelligence-driven — every recommendation is backed by GCC-specific market data and competitive analysis, not generic frameworks; (3) Integrated — Growth Intelligence services work together with SEO through the APEX Framework™, creating compounding growth across all channels.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get a business consultation near me in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. upranked.io offers in-person business consultation sessions in Dubai and remote sessions for clients in Riyadh, Kuwait City, Manama, London, and New York. All consultations are led directly by Sam — the founder — not delegated to a junior consultant.',
          },
        },
        {
          '@type': 'Question',
          name: 'What custom tools does upranked.io build for GCC businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'upranked.io builds purpose-built growth tools including: SEO dashboards with GCC keyword tracking, competitor monitoring and alert systems, bilingual keyword research platforms (EN/AR), lead scoring and pipeline trackers, content brief generators, and GCC market intelligence aggregators. Tools are built to your specific competitive situation, not off-the-shelf.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build websites for businesses in London and New York as well as the GCC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. While our primary expertise is in GCC-optimized, bilingual EN/AR websites for Dubai, Riyadh, Kuwait, and Bahrain, upranked.io builds conversion-optimized websites for clients in London and New York as well. All sites include SEO architecture, Core Web Vitals optimization, and lead capture systems built from day one.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Growth Intelligence services be combined with SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes — and this is the highest-leverage configuration. Clients who combine Business Consultation, a Custom Website, Business Strategy, and ongoing SEO through the APEX Framework™ get a fully integrated growth system rather than disconnected tactics. Each service compounds the others. Book a free call to design the right combination for your business in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.",
          },
        },
      ],
    },
    {
      '@type': 'Person',
      name: 'Sam',
      jobTitle: 'Founder & GCC SEO Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io' },
      url: 'https://upranked.io/about',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Growth Intelligence', item: 'https://upranked.io/growth-intelligence' },
      ],
    },
  ],
};

const tocItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'consultation', label: 'Business Consultation' },
  { id: 'tools', label: 'Custom Growth Tools' },
  { id: 'website', label: 'Tailored Website' },
  { id: 'strategy', label: 'Business Strategy' },
  { id: 'why-growth-intelligence', label: 'Why Growth Intelligence' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'faqs', label: 'FAQs' },
];

const services = [
  {
    id: 'consultation',
    icon: Briefcase,
    label: 'Business Consultation',
    tag: 'Expert Consultation',
    href: '/growth-intelligence/consultation',
    headline: 'Strategic Clarity in 90 Minutes — Applied to Your GCC Business',
    description:
      "Private, founder-led consulting sessions with Sam for businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York. Whether you're entering the GCC market, stuck on a growth ceiling, or need to sharpen your positioning — this is where the real strategic work happens.",
    bullets: [
      '90-day APEX growth roadmap with clear milestones',
      'Competitor positioning analysis for your GCC or global market',
      'Channel strategy recommendation for your specific sector',
      'Honest assessment — not what you want to hear, what you need to hear',
      'Ongoing strategic guidance if you choose to continue',
    ],
    markets: 'Dubai UAE · Riyadh KSA · Kuwait City · Manama Bahrain · London UK · New York USA',
  },
  {
    id: 'tools',
    icon: Code2,
    label: 'Custom Growth Tools',
    tag: 'Purpose-Built Growth Software',
    href: '/growth-intelligence/tools',
    headline: 'Proprietary Intelligence Tools That Give Your Business an Unfair Advantage',
    description:
      "Purpose-built intelligence platforms, dashboards, and automation tools designed for your specific growth challenges in Dubai, the GCC, London, or New York. No off-the-shelf limitations — custom software that gives your team capabilities your competitors don't have access to.",
    bullets: [
      'Custom SEO rank tracking dashboards with GCC market data',
      'Automated competitor monitoring and alert systems',
      'Bilingual keyword research tools (EN + Arabic)',
      'Lead scoring and pipeline intelligence trackers',
      'GCC market intelligence aggregators and data platforms',
    ],
    markets: 'Dubai UAE · Riyadh KSA · Kuwait City · Manama Bahrain · London UK · New York USA',
  },
  {
    id: 'website',
    icon: Globe,
    label: 'Tailored Website',
    tag: 'Conversion-Optimised Web',
    href: '/growth-intelligence/websites',
    headline: 'Custom Website Dubai — SEO-Ready, Bilingual, Built to Convert',
    description:
      'Premium, conversion-optimized websites built specifically for your business in the GCC and global markets. SEO architecture from day one, bilingual EN/AR by default, Core Web Vitals optimized, and designed to turn Dubai, Riyadh, Kuwait, and Bahrain visitors into qualified leads.',
    bullets: [
      'SEO architecture built in from day one — not retrofitted',
      'Bilingual EN/AR with full RTL layout support',
      'Core Web Vitals optimization (LCP, CLS, FID)',
      'Conversion-first design — every page built to generate leads',
      'Structured data and @graph JSON-LD schema included',
    ],
    markets: 'Dubai UAE · Riyadh KSA · Kuwait City · Manama Bahrain · London UK · New York USA',
  },
  {
    id: 'strategy',
    icon: Target,
    label: 'Business Strategy',
    tag: 'Market Positioning & Growth',
    href: '/growth-intelligence/strategy',
    headline: 'Business Strategy Dubai — Market Positioning for GCC & Global Companies',
    description:
      'Strategic market positioning and growth architecture for businesses competing in Dubai, Riyadh, Kuwait, Bahrain, London, and New York. We define your competitive advantage, build your positioning, and map the exact path to premium market leadership in your sector.',
    bullets: [
      'Market positioning and competitive gap analysis',
      'Brand messaging framework for GCC and global decision-makers',
      '30/60/90-day milestone roadmap with accountability',
      'APEX Framework™ applied to your full business strategy',
      'Quarterly strategy reviews as you scale across markets',
    ],
    markets: 'Dubai UAE · Riyadh KSA · Kuwait City · Manama Bahrain · London UK · New York USA',
  },
];

const differentiators = [
  {
    title: 'Founder-Led on Every Engagement',
    description: "Every Growth Intelligence engagement is led personally by Sam — not delegated to a junior account manager or subcontracted to a freelancer. You get founder-level intelligence at every stage.",
  },
  {
    title: 'GCC-First, Globally Capable',
    description: "Our core expertise is the GCC — Dubai, Riyadh, Kuwait, Bahrain. But we also serve London and New York as priority global expansion markets. We don't serve markets we don't understand deeply.",
  },
  {
    title: 'Intelligence-Driven, Not Template-Driven',
    description: 'Every recommendation is backed by real market data, competitive analysis, and GCC-specific intelligence — not recycled frameworks from a generic digital marketing playbook.',
  },
  {
    title: 'Strategy + Execution Accountability',
    description: "Strategy without execution is just a document. We stay engaged through implementation — not just the initial delivery. Growth Intelligence means we're invested in outcomes, not outputs.",
  },
];

const serviceAreas = [
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', note: 'HQ Market — Business Bay, DIFC, Downtown Dubai', primary: true },
  { city: 'Riyadh', country: 'KSA', flag: '🇸🇦', note: 'King Fahd Rd, Olaya, North Riyadh corridors', primary: true },
  { city: 'Kuwait City', country: 'Kuwait', flag: '🇰🇼', note: 'Salmiya, Hawalli, Sharq financial district', primary: true },
  { city: 'Manama', country: 'Bahrain', flag: '🇧🇭', note: 'Diplomatic Area, Seef District, Amwaj Islands', primary: true },
  { city: 'London', country: 'UK', flag: '🇬🇧', note: 'City of London, Canary Wharf, West End', primary: true },
  { city: 'New York', country: 'USA', flag: '🇺🇸', note: 'Manhattan, Brooklyn, Tri-State Area', primary: true },
];

const faqs = [
  {
    q: 'What is Growth Intelligence at upranked.io?',
    a: "Growth Intelligence is upranked.io's suite of four strategic services that go beyond SEO: Business Consultation (1-on-1 strategy with Sam), Custom Growth Tools (purpose-built software and dashboards), Tailored Website (SEO-ready bilingual sites), and Business Strategy (market positioning and competitive architecture). Each service is available for businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York.",
  },
  {
    q: 'How is Growth Intelligence different from a regular digital marketing agency?',
    a: 'Three differences: (1) Founder-led — Sam personally leads every engagement, not account managers; (2) Intelligence-driven — every recommendation is backed by GCC-specific market data and competitive analysis, not generic frameworks; (3) Integrated — Growth Intelligence services work together with SEO through the APEX Framework™, creating compounding growth across all channels.',
  },
  {
    q: 'Can I get a business consultation near me in Dubai?',
    a: 'Yes. upranked.io offers in-person business consultation sessions in Dubai and remote sessions for clients in Riyadh, Kuwait City, Manama, London, and New York. All consultations are led directly by Sam — the founder — not delegated to a junior consultant.',
  },
  {
    q: 'What custom tools does upranked.io build for GCC businesses?',
    a: 'upranked.io builds purpose-built growth tools including: SEO dashboards with GCC keyword tracking, competitor monitoring and alert systems, bilingual keyword research platforms (EN/AR), lead scoring and pipeline trackers, content brief generators, and GCC market intelligence aggregators. Tools are built to your specific competitive situation, not off-the-shelf.',
  },
  {
    q: 'Do you build websites for businesses in London and New York as well as the GCC?',
    a: 'Yes. While our primary expertise is in GCC-optimized, bilingual EN/AR websites for Dubai, Riyadh, Kuwait, and Bahrain, upranked.io builds conversion-optimized websites for clients in London and New York as well. All sites include SEO architecture, Core Web Vitals optimization, and lead capture systems built from day one.',
  },
  {
    q: 'Can Growth Intelligence services be combined with SEO?',
    a: "Yes — and this is the highest-leverage configuration. Clients who combine Business Consultation, a Custom Website, Business Strategy, and ongoing SEO through the APEX Framework™ get a fully integrated growth system rather than disconnected tactics. Each service compounds the others. Book a free call to design the right combination for your business.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-dark-gray hover:bg-navy/50 transition-colors group"
      >
        <span className="font-semibold text-white pr-4 group-hover:text-accent transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-2 bg-dark-gray border-t border-border">
              <p className="text-text-secondary leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GrowthIntelligence() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({});

  usePageMeta({
    title: 'Growth Intelligence Dubai GCC',
    description:
      "upranked.io's Growth Intelligence services: Business Consultation, Custom Tools, Tailored Website & Business Strategy for Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London UK & New York USA. Led by Sam.",
    schema,
    schemaId: 'growth-intelligence-schema',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { sectionRefs.current[e.target.id] = e; });
        const visible = Object.values(sectionRefs.current)
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    tocItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Hero + NAP #1 */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-sm text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
                <span className="mx-2 text-border">/</span>
                <span className="text-accent">Growth Intelligence</span>
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Growth Intelligence</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Growth Intelligence — Dubai &amp; GCC <span className="gradient-text">Business Growth Services</span> by Sam
                </h1>
                <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                  Four strategic services beyond SEO — business consultation, custom growth tools, tailored websites, and market positioning strategy. Built for high-value businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York that want to outthink and outgrow their competition.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Business Consultation', 'Custom Tools', 'Tailored Website', 'Business Strategy', 'APEX Framework™', 'Founder-Led'].map(tag => (
                    <span key={tag} className="text-xs bg-dark-gray border border-border rounded-full px-3 py-1.5 text-text-secondary">{tag}</span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/contact/">
                    <a className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                      Book a Discovery Call <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                  <Link href="/methodology/">
                    <a className="btn-secondary text-lg px-8 py-4">Our APEX Framework™</a>
                  </Link>
                </div>

                {/* NAP #1 */}
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/20-all-growth-services.svg"
                  alt="Growth Intelligence services overview — SEO, business consultation, tailored tools and website design driving organic revenue for GCC businesses at upranked.io Dubai"
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

      {/* Trust bar */}
      <section className="bg-dark-gray py-6 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-text-secondary">
            {['Founder-Led by Sam', 'GCC-First, Globally Capable', 'Dubai · London · New York', 'APEX Framework™', 'Strategy + Execution'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sticky TOC */}
      <div className="px-4 md:px-6 lg:px-8 py-12">
        <div className="container-premium grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <p className="text-xs text-text-secondary uppercase tracking-widest mb-4 font-semibold">On This Page</p>
              <nav className="space-y-1">
                {tocItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm py-1.5 px-3 rounded-lg transition-colors ${
                      activeSection === item.id ? 'text-accent bg-accent/10 font-semibold' : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* NAP #2 */}
              <div className="mt-8 p-4 bg-dark-gray border border-border rounded-xl text-xs text-text-secondary space-y-2">
                <p className="text-white font-semibold text-sm mb-2">upranked.io</p>
                <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-accent flex-shrink-0" /> Dubai, UAE — GCC &amp; Global</p>
                <a href="/contact/" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="w-3 h-3 text-accent flex-shrink-0" /> Contact Us</a>
                <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3 h-3 text-accent flex-shrink-0" /> uprankedio@gmail.com</a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-20">

            {/* Introduction — featured snippet definition box */}
            <section id="introduction">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-6 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Definition</p>
                  <p className="text-white font-semibold text-lg mb-2">What is Growth Intelligence?</p>
                  <p className="text-text-secondary leading-relaxed">
                    <strong className="text-white">Growth Intelligence</strong> is upranked.io's framework for strategic business growth beyond SEO — combining{' '}
                    <strong className="text-accent">Business Consultation, Custom Tools, Tailored Website, and Business Strategy</strong> into a single, integrated growth system. Unlike a typical digital marketing agency that sells isolated services, Growth Intelligence works as a compounding stack: each service amplifies the others through the APEX Framework™. Available for high-value businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York.
                  </p>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Most businesses in the GCC reach a growth ceiling not because they lack SEO or marketing tactics — but because strategy, tooling, digital presence, and market positioning are all misaligned. Growth Intelligence addresses all four levers simultaneously. A business in Dubai competing in healthcare, industrial B2B, or professional services can't afford to optimize one channel while leaving the others broken. upranked.io's Growth Intelligence suite was built to close that gap — and to do it with founder-level attention on every engagement across Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
                </p>

                {/* Service overview grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-dark-gray border border-border rounded-xl p-4 text-center hover:border-accent/40 transition-colors"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-5 h-5 text-black" />
                        </div>
                        <p className="text-white font-semibold text-sm">{s.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </section>

            {/* Service sections */}
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <section key={service.id} id={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <span className="text-xs text-accent font-semibold tracking-widest uppercase">{service.tag}</span>
                        <h2 className="text-3xl font-bold text-white">{service.label}</h2>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-accent mb-4">{service.headline}</h3>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.bullets.map(b => (
                        <div key={b} className="flex items-start gap-3 p-3 bg-dark-gray border border-border rounded-lg hover:border-accent/30 transition-colors">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-dark-gray border border-accent/20 rounded-xl mb-6">
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">Markets Served</p>
                        <p className="text-white text-sm font-medium">{service.markets}</p>
                      </div>
                    </div>

                    <Link href={service.href}>
                      <a className="btn-primary inline-flex items-center gap-2 px-6 py-3">
                        Full {service.label} details <ArrowRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </motion.div>
                </section>
              );
            })}

            {/* Why Growth Intelligence */}
            <section id="why-growth-intelligence">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-4">Why Growth Intelligence — Not Just Agency Services?</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Four principles that separate upranked.io's Growth Intelligence from what a standard digital marketing agency provides — validated across Dubai, Riyadh, Kuwait City, Manama, London, and New York.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {differentiators.map((d, i) => (
                    <motion.div
                      key={d.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-dark-gray border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"
                    >
                      <div className="w-1 h-8 bg-gradient-to-b from-accent to-yellow-500 rounded-full mb-4" />
                      <h3 className="text-lg font-bold text-accent mb-3">{d.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{d.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* E-E-A-T bio */}
                <div className="bg-dark-gray border border-accent/30 rounded-2xl p-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-5">Who Leads Growth Intelligence — E-E-A-T</p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img src="/favicon.svg" alt="Sam — Founder upranked.io, GCC Growth Strategist" width={80} height={80} loading="lazy" className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-accent/30" decoding="async" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Sam</h3>
                      <p className="text-accent text-sm font-medium mb-4">Founder, upranked.io — GCC Growth Strategist &amp; Creator of the APEX Framework™</p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        Sam leads every Growth Intelligence engagement personally. The four services — Business Consultation, Custom Tools, Tailored Website, and Business Strategy — are not isolated products sold by different teams. They are integrated levers in a single growth system, applied by Sam directly across Dubai, Riyadh, Kuwait City, Manama, London, and New York. There are no account managers, no handoffs, and no junior consultants involved in your strategy.
                      </p>
                      <Link href="/about/"><a className="text-accent text-sm font-semibold hover:underline">Full credentials &amp; profile →</a></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Service Areas */}
            <section id="service-areas">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">Growth Intelligence Service Areas — GCC, UK &amp; USA</h2>
                <p className="text-text-secondary mb-8">
                  Find a Growth Intelligence expert near you in Dubai, Riyadh, Kuwait City, Manama, London, or New York. All four services available across all six priority markets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceAreas.map(area => (
                    <motion.div
                      key={area.city}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`border rounded-xl p-4 hover:border-accent/50 transition-colors ${area.primary ? 'border-accent/30 bg-navy/60' : 'border-border bg-dark-gray'}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{area.flag}</span>
                        {area.primary && <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">Priority</span>}
                      </div>
                      <h3 className="font-bold text-white">{area.city}, {area.country}</h3>
                      <p className="text-text-secondary text-xs mt-1">{area.note}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-text-secondary text-sm mt-4">
                  Also serving: Abu Dhabi, Sharjah, Jeddah, Makkah, Dammam, Muscat, Doha, Birmingham, Manchester, Chicago, Los Angeles, Miami.
                </p>
              </motion.div>
            </section>

            {/* FAQs */}
            <section id="faqs">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">Growth Intelligence — Frequently Asked Questions</h2>
                <p className="text-text-secondary mb-8">
                  Common questions about Growth Intelligence services for businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
                </p>
                <div className="space-y-3">
                  {faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
                </div>
              </motion.div>
            </section>
          </main>
        </div>
      </div>

      {/* CTA + NAP #3 */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Add <span className="text-accent">Intelligence</span> to Your Growth?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free discovery call with Sam. We will identify which Growth Intelligence service will have the biggest immediate impact on your business in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link href="/contact/">
                <a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                  Book a Free Discovery Call <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a href="/contact/" className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-2">
                Contact Us
              </a>
            </div>
            {/* NAP #3 */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
