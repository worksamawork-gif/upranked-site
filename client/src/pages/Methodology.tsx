import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'APEX Framework™ SEO Methodology',
      description:
        'The APEX Framework™ is upranked.io\'s proprietary 4-phase SEO methodology — Audit, Position, Execute, Expand — engineered by Sama Alaa for high-value businesses in Dubai, the GCC, London, and New York.',
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'City', name: 'Kuwait City' },
        { '@type': 'City', name: 'Manama' },
        { '@type': 'City', name: 'London' },
        { '@type': 'City', name: 'New York' },
      ],
      url: 'https://upranked.io/methodology',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the APEX Framework™ and how does it differ from standard SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The APEX Framework™ is a proprietary 4-phase SEO methodology: Audit → Position → Execute → Expand. Unlike generic SEO checklists, APEX is sequenced to produce compounding returns — each phase builds the foundation for the next, and strategy always precedes execution. It was developed specifically for complex, trust-sensitive industries in the GCC.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the APEX Framework take to show results in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Dubai and GCC clients see meaningful ranking improvements within 3–5 months. Compounding revenue-level results typically manifest at months 6–9 as the Expand phase deepens authority and widens keyword coverage across UAE, KSA, Kuwait, and Bahrain.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the APEX Framework relevant for businesses outside the GCC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — while the APEX Framework was designed with GCC market dynamics in mind, the methodology applies globally. upranked.io serves clients in London (UK) and New York (USA) alongside its core GCC markets: Dubai, Riyadh, Kuwait City, and Manama.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I find an SEO methodology expert near me in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. upranked.io is a Dubai-based and GCC-focused SEO agency. Sama Alaa applies the APEX Framework directly with clients across UAE, Saudi Arabia, Kuwait, and Bahrain. Remote and in-person engagements are both available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the APEX Framework work for bilingual Arabic-English websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Bilingual SEO strategy is built into the Execute phase — including Arabic keyword research, RTL technical architecture, and hreflang implementation. The GCC market demands bilingual coverage, and APEX delivers it natively.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Sama Alaa\'s SEO methodology different from other agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three differences: (1) GCC-first market intelligence built into every phase, (2) positioning-before-execution sequencing that most agencies skip, and (3) founder-executed delivery — Sama applies APEX personally on every engagement, not delegated to junior staff.',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      name: 'Sama Alaa',
      jobTitle: 'Founder & GCC SEO Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io' },
      url: 'https://upranked.io/about',
      knowsAbout: ['SEO Strategy', 'APEX Framework', 'GCC Digital Marketing', 'Business Positioning', 'Bilingual SEO'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Methodology', item: 'https://upranked.io/methodology' },
      ],
    },
  ],
};

const tocItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'how-it-works', label: 'How APEX Works' },
  { id: 'phase-audit', label: 'Phase 1: Audit' },
  { id: 'phase-position', label: 'Phase 2: Position' },
  { id: 'phase-execute', label: 'Phase 3: Execute' },
  { id: 'phase-expand', label: 'Phase 4: Expand' },
  { id: 'why-apex', label: 'Why APEX Works' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'faqs', label: 'FAQs' },
];

const phases = [
  {
    id: 'phase-audit',
    letter: 'A',
    name: 'Audit',
    tagline: 'See everything. Miss nothing.',
    description:
      'Every engagement begins with a forensic audit — not a surface-level checklist. We analyze your technical infrastructure, content authority, competitor positioning, keyword opportunity landscape, and conversion architecture. We enter every engagement knowing exactly where the leverage points are.',
    deliverables: [
      'Full technical SEO audit (crawl errors, Core Web Vitals, schema, indexability)',
      'Competitor gap analysis across your GCC market segment',
      'Keyword opportunity matrix (commercial intent prioritized)',
      'Content authority assessment against E-E-A-T signals',
      'Conversion bottleneck identification',
    ],
  },
  {
    id: 'phase-position',
    letter: 'P',
    name: 'Position',
    tagline: 'Define your unfair advantage.',
    description:
      "Most agencies skip positioning entirely and go straight to tactics. We don't. Positioning defines how your ideal clients perceive you versus alternatives — and in the GCC's competitive high-value markets, the right positioning is worth more than any tactical campaign. We define your angle, your messaging, and your competitive moat.",
    deliverables: [
      'Competitive positioning statement and differentiation framework',
      'Ideal client profile and search intent mapping',
      'Messaging hierarchy for each service and audience segment',
      'Content architecture strategy aligned to buying journey stages',
      '90-day strategic roadmap with prioritized execution plan',
    ],
  },
  {
    id: 'phase-execute',
    letter: 'E',
    name: 'Execute',
    tagline: 'High-leverage actions in the right order.',
    description:
      "Execution without strategy is noise. Strategy without execution is worthless. We implement in a precise sequence — technical foundations first, then authority signals, then content at scale — so every action compounds on the last. Nothing is done for optics. Everything is done for measurable progress.",
    deliverables: [
      'Technical SEO fixes implemented and verified',
      'On-page optimization across priority pages',
      'Bilingual content creation (EN + Arabic) targeting commercial queries',
      'Authority link building from GCC-relevant publications',
      'Schema markup and structured data implementation',
    ],
  },
  {
    id: 'phase-expand',
    letter: 'X',
    name: 'Expand',
    tagline: 'Scale what works. Compound your position.',
    description:
      'The APEX Framework is designed to compound. Once the foundation is built and early wins are captured, we systematically expand your organic reach — into new keyword clusters, new city markets across Dubai, Riyadh, London, and New York, and new audience segments — while deepening your authority in core areas.',
    deliverables: [
      'Topic cluster expansion into adjacent high-value search areas',
      'Geographic expansion to new GCC city and global markets',
      'Performance analysis and strategy refinement based on data',
      'Ongoing content production to defend and deepen authority',
      'Monthly reporting tied to leads, revenue, and ROI — not just rankings',
    ],
  },
];

const differentiators = [
  {
    title: 'Built for Trust-Sensitive Industries',
    desc: "Healthcare, industrial, and B2B clients don't buy impulsively. The APEX Framework is designed around the longer trust-building cycles these industries require — not the quick-win playbook that works for e-commerce.",
  },
  {
    title: 'GCC Market Intelligence Baked In',
    desc: 'Every audit, every positioning decision, and every keyword strategy is informed by deep GCC market data — Arabic search behavior, local business culture, and regional competitive dynamics that generic agencies simply don\'t have.',
  },
  {
    title: 'Founder-Executed, Not Delegated',
    desc: 'Sama Alaa applies the APEX Framework personally on every engagement. The methodology doesn\'t get watered down through layers of account managers and junior analysts.',
  },
  {
    title: 'Compounding Returns by Design',
    desc: 'The APEX Framework is sequenced to generate compounding returns. Each phase builds the foundation for the next, so results don\'t plateau — they accelerate over months 3, 6, and 12.',
  },
];

const faqs = [
  {
    q: 'What is the APEX Framework™ and how does it differ from standard SEO?',
    a: 'The APEX Framework™ is a proprietary 4-phase SEO methodology: Audit → Position → Execute → Expand. Unlike generic SEO checklists, APEX is sequenced to produce compounding returns — each phase builds the foundation for the next, and strategy always precedes execution. It was developed specifically for complex, trust-sensitive industries in the GCC.',
  },
  {
    q: 'How long does the APEX Framework take to show results in Dubai?',
    a: 'Most Dubai and GCC clients see meaningful ranking improvements within 3–5 months. Compounding revenue-level results typically manifest at months 6–9 as the Expand phase deepens authority and widens keyword coverage across UAE, KSA, Kuwait, and Bahrain.',
  },
  {
    q: 'Is the APEX Framework relevant for businesses outside the GCC?',
    a: 'Yes — while the APEX Framework was designed with GCC market dynamics in mind, the methodology applies globally. upranked.io serves clients in London (UK) and New York (USA) alongside its core GCC markets: Dubai, Riyadh, Kuwait City, and Manama.',
  },
  {
    q: 'Can I find an SEO methodology expert near me in Dubai?',
    a: 'Yes. upranked.io is a Dubai-based and GCC-focused SEO agency. Sama Alaa applies the APEX Framework directly with clients across UAE, Saudi Arabia, Kuwait, and Bahrain. Remote and in-person engagements are both available.',
  },
  {
    q: 'Does the APEX Framework work for bilingual Arabic-English websites?',
    a: 'Absolutely. Bilingual SEO strategy is built into the Execute phase — including Arabic keyword research, RTL technical architecture, and hreflang implementation. The GCC market demands bilingual coverage, and APEX delivers it natively.',
  },
  {
    q: "What makes Sama Alaa's SEO methodology different from other agencies?",
    a: 'Three differences: (1) GCC-first market intelligence built into every phase, (2) positioning-before-execution sequencing that most agencies skip, and (3) founder-executed delivery — Sama applies APEX personally on every engagement, not delegated to junior staff.',
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

const comparisonRows = [
  ['Starting point', 'Deep forensic audit', 'Template checklist'],
  ['Strategy', 'Positioning-first, then execution', 'Tactics first, strategy maybe'],
  ['Market intelligence', 'GCC + bilingual built in', 'Generic, English-only'],
  ['Execution', 'Founder-led by Sama Alaa', 'Delegated to juniors'],
  ['Measurement', 'Revenue, leads, ROI', 'Rankings, traffic only'],
  ['Time horizon', 'Compounding 6–18 months', 'Short-term wins'],
  ['Bilingual', 'EN + Arabic, RTL-optimized', 'Rarely offered'],
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
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
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

export default function Methodology() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({});

  usePageMeta({
    title: 'APEX Framework SEO Methodology | Dubai & GCC',
    description:
      "The APEX Framework™ is upranked.io's proprietary SEO methodology: Audit → Position → Execute → Expand. Developed by Sama Alaa for GCC businesses in Dubai, Riyadh, Kuwait, Bahrain, London & New York.",
    schema,
    schemaId: 'methodology-schema',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          sectionRefs.current[e.target.id] = e;
        });
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
                <span className="text-accent">Methodology</span>
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Our Methodology</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  The <span className="gradient-text">APEX Framework™</span> — upranked.io's SEO Methodology for Dubai & GCC Growth
                </h1>
                <p className="text-xl text-text-secondary mb-8 max-w-3xl leading-relaxed">
                  A proprietary 4-phase growth methodology developed by Sama Alaa for high-value, trust-sensitive industries across Dubai, Riyadh, Kuwait City, Manama, London, and New York. Not a template — a system engineered for compounding returns.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-dark-gray border border-accent/30 rounded-xl px-5 py-3">
                    <span className="text-3xl font-black text-accent tracking-[0.3em]">APEX</span>
                    <span className="text-text-secondary text-sm">Audit · Position · Execute · Expand</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Dubai UAE', 'Riyadh KSA', 'Kuwait', 'Bahrain', 'London UK', 'New York USA'].map(m => (
                      <span key={m} className="text-xs bg-navy border border-border rounded-full px-3 py-1 text-text-secondary">{m}</span>
                    ))}
                  </div>
                </div>

                {/* NAP #1 */}
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/02-apex-framework.svg"
                  alt="APEX Framework methodology diagram — Audit, Position, Execute, Expand — upranked.io SEO system for GCC growth"
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
                      activeSection === item.id
                        ? 'text-accent bg-accent/10 font-semibold'
                        : 'text-text-secondary hover:text-white'
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
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3 h-3 text-accent flex-shrink-0" /> Sam@upranked.io</a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-20">

            {/* Introduction — Featured Snippet Definition Box */}
            <section id="introduction">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-6 mb-10">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Definition</p>
                  <p className="text-white font-semibold text-lg mb-3">What is the APEX Framework™?</p>
                  <p className="text-text-secondary leading-relaxed">
                    The <strong className="text-white">APEX Framework™</strong> is upranked.io's proprietary 4-phase SEO and growth methodology —{' '}
                    <strong className="text-accent">Audit → Position → Execute → Expand</strong> — engineered by Sama Alaa for complex, trust-sensitive businesses in the GCC and global markets. It is the only SEO methodology built specifically around the Arabic–English bilingual search landscape, long B2B and healthcare trust cycles, and GCC market competitive dynamics. APEX is not a checklist — it is a compounding growth system applied across Dubai, Riyadh, Kuwait City, Manama, London, and New York.
                  </p>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Most SEO agencies operate like mechanics — they fix what's broken and replace worn parts. The APEX Framework operates like an architect: it designs a system where every element reinforces the others, and every phase builds compounding value on what came before. For businesses in Dubai's crowded healthcare sector, Riyadh's competitive B2B landscape, or London's professional services market, this difference in approach translates directly into measurable revenue outcomes.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Since the APEX Framework was developed from the ground up for GCC market conditions — bilingual search behavior, trust-first buying culture, and relationship-driven B2B sales — it produces results that generic Western SEO templates simply cannot replicate in the Gulf or the Arab world.
                </p>
              </motion.div>
            </section>

            {/* How APEX Works — stats + comparison table */}
            <section id="how-it-works">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-4">How the APEX Framework Works</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  APEX is built around one core insight: in high-stakes industries, the sequence of actions matters more than the actions themselves. We don't fire tactics randomly — we build in a specific, proven order that ensures each phase multiplies the impact of the next. The result is compounding organic growth that accelerates over time rather than plateauing.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {[
                    { value: '4', label: 'Phases' },
                    { value: '90', label: 'Day Roadmap' },
                    { value: '6', label: 'Priority Markets' },
                    { value: '100%', label: 'Founder-Led' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-dark-gray border border-border rounded-xl p-5 text-center"
                    >
                      <div className="text-3xl font-black text-accent mb-1">{s.value}</div>
                      <div className="text-text-secondary text-sm">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-dark-gray border-b border-border">
                        <th className="px-4 py-3 text-left text-text-secondary font-medium">Aspect</th>
                        <th className="px-4 py-3 text-left text-accent font-semibold">APEX Framework™</th>
                        <th className="px-4 py-3 text-left text-text-secondary font-medium">Generic SEO Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-navy">
                      {comparisonRows.map(([aspect, apex, generic]) => (
                        <tr key={aspect} className="hover:bg-dark-gray/50 transition-colors">
                          <td className="px-4 py-3 text-text-secondary font-medium">{aspect}</td>
                          <td className="px-4 py-3 text-white">
                            <CheckCircle className="w-4 h-4 text-accent inline mr-2 flex-shrink-0" />
                            {apex}
                          </td>
                          <td className="px-4 py-3 text-text-secondary">{generic}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </section>

            {/* Phase breakdown — each phase has its own section for TOC */}
            {phases.map((phase, i) => (
              <section key={phase.letter} id={phase.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 md:p-8 bg-dark-gray border border-border rounded-2xl hover:border-accent/40 transition-colors"
                >
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-black text-3xl">{phase.letter}</span>
                    </div>
                    <div>
                      <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">Phase {i + 1}</div>
                      <div className="text-2xl font-bold text-white">{phase.name}</div>
                      <div className="text-accent text-sm font-medium mt-1">{phase.tagline}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-text-secondary leading-relaxed">{phase.description}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Deliverables</p>
                    <div className="space-y-2">
                      {phase.deliverables.map(d => (
                        <div key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </section>
            ))}

            {/* Why APEX Works */}
            <section id="why-apex">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-4">Why the APEX Framework™ Works</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Four principles that separate APEX from generic SEO approaches — each grounded in GCC market realities and validated across high-value sectors in Dubai, Riyadh, Kuwait City, Manama, London, and New York.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <p className="text-text-secondary text-sm leading-relaxed">{d.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* E-E-A-T Bio Box */}
            <section>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <div className="bg-dark-gray border border-accent/30 rounded-2xl p-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-5">About the Creator — E-E-A-T</p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/images/sam-hamouda-seo-consultant-dubai.webp" alt="Sama Alaa — Founder upranked.io, Creator of the APEX Framework™" width={80} height={80} loading="lazy" className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-accent/30" decoding="async" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Sama Alaa</h3>
                      <p className="text-accent text-sm font-medium mb-4">
                        Founder, upranked.io — GCC SEO Strategist &amp; Creator of the APEX Framework™
                      </p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        Sama Alaa developed the APEX Framework™ after observing a critical gap in the GCC market: agencies applied generic Western SEO templates to complex, trust-sensitive industries — and delivered predictably mediocre results. APEX was engineered from first principles for the GCC's unique search landscape: bilingual Arabic–English search behavior, relationship-first business culture, and competitive sectors where trust is the deciding factor. Sama personally applies the framework on every engagement across Dubai, Riyadh, Kuwait City, Manama, and global markets including London and New York.
                      </p>
                      <Link href="/about/">
                        <a className="text-accent text-sm font-semibold hover:underline">Full profile &amp; credentials →</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Service Areas */}
            <section id="service-areas">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">APEX Framework™ Service Areas — GCC, UK &amp; USA</h2>
                <p className="text-text-secondary mb-8">
                  Find an APEX Framework SEO expert near you in Dubai, Riyadh, Kuwait, Bahrain, London, or New York. Remote and in-person APEX engagements available across all priority markets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceAreas.map(area => (
                    <motion.div
                      key={area.city}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`border rounded-xl p-4 hover:border-accent/50 transition-colors ${
                        area.primary ? 'border-accent/30 bg-navy/60' : 'border-border bg-dark-gray'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{area.flag}</span>
                        {area.primary && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">Priority</span>
                        )}
                      </div>
                      <h3 className="font-bold text-white">{area.city}, {area.country}</h3>
                      <p className="text-text-secondary text-xs mt-1">{area.note}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-text-secondary text-sm mt-4">
                  Also serving clients in Abu Dhabi, Sharjah, Jeddah, Makkah, Dammam, Muscat, Doha, Birmingham, Manchester, Chicago, Los Angeles, and Miami.
                </p>
              </motion.div>
            </section>

            {/* FAQs */}
            <section id="faqs">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">APEX Framework™ — Frequently Asked Questions</h2>
                <p className="text-text-secondary mb-8">
                  Common questions about our SEO methodology, approach, and how the APEX Framework applies to GCC businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
                </p>
                <div className="space-y-3">
                  {faqs.map(faq => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
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
              See the <span className="text-accent">APEX Framework™</span> Applied to Your Business
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free APEX Diagnostic with Sama Alaa. We'll audit your current position and show you exactly what the framework would unlock — for businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link href="/contact/">
                <a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                  Book a Free APEX Diagnostic <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a
                href="/contact/"
                className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-2"
              >
                Contact Us
              </a>
            </div>
            {/* NAP #3 */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
