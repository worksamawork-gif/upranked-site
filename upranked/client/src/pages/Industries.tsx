import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Stethoscope, Factory, TrendingUp, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Industry-Specific SEO — Medical, Industrial & Business',
      description:
        'upranked.io delivers industry-specific SEO strategies for medical, industrial, and business sectors across Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK, and New York USA.',
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'City', name: 'Kuwait City' },
        { '@type': 'City', name: 'Manama' },
        { '@type': 'City', name: 'London' },
        { '@type': 'City', name: 'New York' },
      ],
      url: 'https://upranked.io/industries',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SEO Services by Industry',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical SEO Dubai & GCC' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial SEO Dubai & GCC' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business SEO Dubai & GCC' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does industry-specific SEO matter in Dubai and the GCC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Dubai and across the GCC, industries like healthcare, industrial B2B, and professional services each have distinct buyer journeys, trust signals, and search behaviors. A generic SEO strategy misses the sector-specific keywords, E-E-A-T requirements, and content authority that Google rewards in these verticals. Industry-specific SEO — built around your sector — consistently outperforms generic approaches in Dubai, Riyadh, Kuwait, and Bahrain.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is medical SEO and how is it different in the GCC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Medical SEO in the GCC applies Google\'s E-E-A-T framework (Experience, Expertise, Authority, Trust) to healthcare websites — clinics, hospitals, and specialist practices in Dubai, Abu Dhabi, Riyadh, and Manama. It requires medically accurate bilingual content, structured data for healthcare providers, and technical architecture that signals credibility to both Google and prospective patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries does upranked.io specialize in for GCC SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'upranked.io specializes in three verticals: (1) Medical SEO — hospitals, clinics, specialist practices; (2) Industrial SEO — manufacturing, construction, oil & gas, logistics; (3) Business SEO — professional services, consultancies, financial services, real estate. All three require deep sector knowledge and are served across Dubai, Riyadh, Kuwait City, Manama, London, and New York.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I find an industry SEO expert near me in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. upranked.io is Dubai-based with deep GCC market expertise across all three SEO verticals. Sam Hamouda personally leads all industry-specific SEO engagements for clients in Dubai, Riyadh, Kuwait City, and Manama. London and New York clients are served remotely.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does upranked.io offer bilingual Arabic-English SEO for all industries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — bilingual EN/AR SEO is standard across all three industry verticals. Arabic keyword research, RTL-compatible content architecture, and hreflang implementation are included in every Medical, Industrial, and Business SEO engagement for the GCC market.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you serve businesses in London and New York as well as the GCC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. While the GCC (Dubai, Riyadh, Kuwait, Bahrain) is our primary focus, upranked.io serves clients in London UK and New York USA as priority global expansion markets. Industry-specific SEO expertise — medical, industrial, and business — transfers directly to these markets with locally adapted strategies.',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      name: 'Sam Hamouda',
      jobTitle: 'Founder & GCC SEO Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io' },
      url: 'https://upranked.io/about',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://upranked.io/industries' },
      ],
    },
  ],
};

const tocItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'medical-seo', label: 'Medical SEO' },
  { id: 'industrial-seo', label: 'Industrial SEO' },
  { id: 'business-seo', label: 'Business SEO' },
  { id: 'why-industry-matters', label: 'Why Industry Matters' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'faqs', label: 'FAQs' },
];

const sectors = [
  {
    id: 'medical-seo',
    icon: Stethoscope,
    label: 'Medical SEO',
    tag: 'Healthcare & Clinics',
    href: '/industries/medical-seo',
    headline: 'Rank #1 for Patient Searches Across Dubai & the GCC',
    description:
      'Specialized SEO for hospitals, clinics, specialist practices, and healthcare providers in Dubai, Abu Dhabi, Riyadh, Kuwait City, Manama, and London. We connect patients to your services — built around Google E-E-A-T requirements for YMYL healthcare content.',
    bullets: [
      'E-E-A-T-compliant healthcare content strategy',
      'Google Business Profile optimization for GCC clinics',
      'Bilingual EN/AR medical content & Arabic keyword research',
      'Local SEO across Dubai, Abu Dhabi, Riyadh, Manama, London',
      'Schema markup for medical providers (MedicalOrganization, Physician)',
      'Competitor displacement in high-value procedure searches',
    ],
    stat: { value: '6–9 mo', label: 'to dominant rankings' },
    markets: 'Dubai UAE · Riyadh KSA · Kuwait City · Manama Bahrain · London UK',
  },
  {
    id: 'industrial-seo',
    icon: Factory,
    label: 'Industrial SEO',
    tag: 'B2B & Manufacturing',
    href: '/industries/industrial-seo',
    headline: 'Dominate B2B Search for Industrial & Manufacturing in the GCC',
    description:
      'Built for manufacturers, construction firms, oil & gas suppliers, logistics companies, and industrial service providers in Dubai, Sharjah, Riyadh, Jeddah, Kuwait, and New York. We make your business findable when procurement managers and engineers are searching.',
    bullets: [
      'Technical content for engineers, buyers & procurement teams',
      'Long-tail industrial keyword domination (low volume, high intent)',
      'GCC supplier directory and sourcing platform visibility',
      'B2B authority building through technical content and backlinks',
      'Arabic-language procurement keyword targeting',
      'LinkedIn + organic synergy for B2B pipeline generation',
    ],
    stat: { value: '3–5 mo', label: 'to first qualified leads' },
    markets: 'Dubai UAE · Riyadh KSA · Kuwait City · Manama Bahrain · New York USA',
  },
  {
    id: 'business-seo',
    icon: TrendingUp,
    label: 'Business SEO',
    tag: 'Professional Services',
    href: '/industries/business-seo',
    headline: 'Revenue-Focused SEO for GCC & Global Businesses',
    description:
      'For professional services, consultancies, financial services, real estate, and any B2B company in Dubai, Riyadh, Kuwait, Bahrain, London, or New York where clients research online before making high-value decisions.',
    bullets: [
      'Commercial intent keyword strategy targeting buyer-stage queries',
      'Competitor displacement tactics in premium GCC markets',
      'Full-funnel content architecture (awareness → decision)',
      'Local SEO across Dubai Business Bay, DIFC, Riyadh King Fahd Rd',
      'Revenue attribution — reporting linked to leads and pipeline',
      'Bilingual EN/AR strategy for dual-language GCC buyers',
    ],
    stat: { value: '40+', label: 'location mentions per page' },
    markets: 'Dubai UAE · Riyadh KSA · Kuwait City · Manama Bahrain · London UK · New York USA',
  },
];

const commonBenefits = [
  'APEX Framework™ — proprietary 4-phase SEO methodology',
  'GCC-first intelligence: UAE, KSA, Kuwait, Bahrain — plus London & New York',
  'Bilingual SEO — English + Arabic with full RTL support',
  'Founder-led by Sam Hamouda on every engagement',
  'Reporting tied to leads and revenue, not vanity metrics',
  'Featured snippet optimization and @graph JSON-LD schema',
];

const comparisonRows = [
  ['Keyword strategy', 'Sector-specific buyer intent', 'Generic volume-based'],
  ['Content', 'Industry-accurate, E-E-A-T optimized', 'Templated, shallow'],
  ['Trust signals', 'Sector authority + credentials', 'Generic backlinks'],
  ['Bilingual', 'EN + Arabic, industry terminology', 'Translated, non-native'],
  ['Schema markup', 'Industry-specific (MedicalOrg, etc.)', 'Basic or none'],
  ['Reporting', 'Leads, revenue, pipeline', 'Rankings only'],
];

const serviceAreas = [
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', note: 'HQ Market — Business Bay, DIFC, Healthcare City', primary: true },
  { city: 'Riyadh', country: 'KSA', flag: '🇸🇦', note: 'King Fahd Rd, Olaya, North Riyadh', primary: true },
  { city: 'Kuwait City', country: 'Kuwait', flag: '🇰🇼', note: 'Salmiya, Hawalli, Sharq district', primary: true },
  { city: 'Manama', country: 'Bahrain', flag: '🇧🇭', note: 'Diplomatic Area, Seef District', primary: true },
  { city: 'London', country: 'UK', flag: '🇬🇧', note: 'Harley Street, City of London, Canary Wharf', primary: true },
  { city: 'New York', country: 'USA', flag: '🇺🇸', note: 'Manhattan, Brooklyn, Tri-State Area', primary: true },
];

const faqs = [
  {
    q: 'Why does industry-specific SEO matter in Dubai and the GCC?',
    a: "In Dubai and across the GCC, industries like healthcare, industrial B2B, and professional services each have distinct buyer journeys, trust signals, and search behaviors. A generic SEO strategy misses the sector-specific keywords, E-E-A-T requirements, and content authority that Google rewards in these verticals. Industry-specific SEO — built around your sector — consistently outperforms generic approaches in Dubai, Riyadh, Kuwait, and Bahrain.",
  },
  {
    q: 'What is medical SEO and how is it different in the GCC?',
    a: "Medical SEO in the GCC applies Google's E-E-A-T framework to healthcare websites — clinics, hospitals, and specialist practices in Dubai, Abu Dhabi, Riyadh, and Manama. It requires medically accurate bilingual content, structured data for healthcare providers, and technical architecture that signals credibility to both Google and prospective patients.",
  },
  {
    q: 'What industries does upranked.io specialize in for GCC SEO?',
    a: 'upranked.io specializes in three verticals: (1) Medical SEO — hospitals, clinics, specialist practices; (2) Industrial SEO — manufacturing, construction, oil & gas, logistics; (3) Business SEO — professional services, consultancies, financial services, real estate. All three are served across Dubai, Riyadh, Kuwait City, Manama, London, and New York.',
  },
  {
    q: 'Can I find an industry SEO expert near me in Dubai?',
    a: 'Yes. upranked.io is Dubai-based with deep GCC market expertise across all three SEO verticals. Sam Hamouda personally leads all industry-specific SEO engagements for clients in Dubai, Riyadh, Kuwait City, and Manama. London and New York clients are served remotely.',
  },
  {
    q: 'Does upranked.io offer bilingual Arabic-English SEO for all industries?',
    a: 'Yes — bilingual EN/AR SEO is standard across all three industry verticals. Arabic keyword research, RTL-compatible content architecture, and hreflang implementation are included in every Medical, Industrial, and Business SEO engagement for the GCC market.',
  },
  {
    q: 'Do you serve businesses in London and New York as well as the GCC?',
    a: 'Yes. While the GCC (Dubai, Riyadh, Kuwait, Bahrain) is our primary focus, upranked.io serves clients in London UK and New York USA as priority global expansion markets. Industry-specific SEO expertise — medical, industrial, and business — transfers directly to these markets with locally adapted strategies.',
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

export default function Industries() {
  const [activeSection, setActiveSection] = useState('introduction');
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({});

  usePageMeta({
    title: 'Industry SEO Dubai & GCC — Medical, Industrial & Business SEO',
    description:
      'Industry-specific SEO for medical, industrial, and business sectors in Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK, and New York USA. APEX Framework™ by Sam Hamouda.',
    schema,
    schemaId: 'industries-schema',
    canonical: 'https://upranked.io/seo-industries',
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
              <Link href="/seo"><a className="hover:text-accent transition-colors">SEO Types</a></Link>
              <span className="mx-2 text-border">/</span>
              <span className="text-accent">SEO by Industry</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">SEO · By Industry</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Industry-Specific SEO — Medical, Industrial &amp; Business SEO in <span className="gradient-text">Dubai &amp; the GCC</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl leading-relaxed">
                Generic SEO agencies treat every industry the same. We don't. upranked.io builds sector-specific strategies for medical, industrial, and business clients across Dubai, Riyadh, Kuwait City, Manama, London, and New York — because each industry has its own buyer behavior, trust signals, and keyword landscape.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Medical SEO', 'Industrial SEO', 'Business SEO', 'Bilingual EN/AR', 'APEX Framework™', 'Founder-Led'].map(tag => (
                  <span key={tag} className="text-xs bg-dark-gray border border-border rounded-full px-3 py-1.5 text-text-secondary">{tag}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact">
                  <a className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                    Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="/methodology">
                  <a className="btn-secondary text-lg px-8 py-4">Our APEX Framework™</a>
                </Link>
              </div>

              {/* NAP #1 */}
              <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
                <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
              </div>
            </motion.div>
            </div>{/* end left col */}

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-border">
                <img
                  src="/images/sam-hamouda-seo-consultant-dubai.webp"
                  alt="Sam Hamouda — industry SEO specialist in Dubai delivering Medical, Industrial and Business SEO across the GCC"
                  width={560}
                  height={600}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Sam Hamouda</p>
                  <p className="text-accent text-sm">Founder · Chief Growth Strategist</p>
                  <p className="text-text-secondary text-xs mt-1">Dubai, UAE · GCC · London · New York</p>
                </div>
              </div>
            </motion.div>

          </div>{/* end grid */}
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-dark-gray py-6 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-text-secondary">
            {['Medical · Industrial · Business', 'Dubai & GCC Experts', 'London & New York', 'Bilingual EN/AR', 'APEX Framework™', 'Founder-Led'].map(t => (
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
                <a href="/contact" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="w-3 h-3 text-accent flex-shrink-0" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3 h-3 text-accent flex-shrink-0" /> Sam@upranked.io</a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-20">

            {/* Introduction — definition box */}
            <section id="introduction">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-6 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Definition</p>
                  <p className="text-white font-semibold text-lg mb-2">What is industry-specific SEO?</p>
                  <p className="text-text-secondary leading-relaxed">
                    <strong className="text-white">Industry-specific SEO</strong> is a search engine optimisation strategy built around the unique buyer behavior, search terminology, trust signals, and competitive dynamics of a specific business sector. In the GCC — where medical, industrial, and professional services buyers conduct detailed online research before committing — a strategy tailored to your industry produces dramatically better results than a generic approach. upranked.io applies the <strong className="text-accent">APEX Framework™</strong> to each sector separately, with dedicated keyword research, content strategy, and E-E-A-T architecture for medical, industrial, and business clients across Dubai, Riyadh, Kuwait City, Manama, London, and New York.
                  </p>
                </div>

                {/* Comparison table */}
                <div className="overflow-x-auto rounded-xl border border-border mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-dark-gray border-b border-border">
                        <th className="px-4 py-3 text-left text-text-secondary font-medium">Aspect</th>
                        <th className="px-4 py-3 text-left text-accent font-semibold">Industry-Specific SEO</th>
                        <th className="px-4 py-3 text-left text-text-secondary font-medium">Generic SEO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-navy">
                      {comparisonRows.map(([aspect, specific, generic]) => (
                        <tr key={aspect} className="hover:bg-dark-gray/50 transition-colors">
                          <td className="px-4 py-3 text-text-secondary font-medium">{aspect}</td>
                          <td className="px-4 py-3 text-white"><CheckCircle className="w-4 h-4 text-accent inline mr-2" />{specific}</td>
                          <td className="px-4 py-3 text-text-secondary">{generic}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-text-secondary leading-relaxed">
                  The GCC market rewards depth. Healthcare SEO in Dubai requires understanding HAAD/DHA licensing, Arabic patient search behavior, and healthcare-specific E-E-A-T signals. Industrial SEO in Riyadh requires knowing how procurement managers search for suppliers, the terminology used in tender documents, and the trust signals that convert B2B industrial buyers. Business SEO in Kuwait or Bahrain requires understanding local business culture, English-Arabic code-switching in search, and the decision-making hierarchy of high-value service buyers. upranked.io has built this sector depth so you don't have to explain your industry to your SEO agency.
                </p>
              </motion.div>
            </section>

            {/* Sector sections */}
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <section key={sector.id} id={sector.id}>
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
                        <span className="text-xs text-accent font-semibold tracking-widest uppercase">{sector.tag}</span>
                        <h2 className="text-3xl font-bold text-white">{sector.label}</h2>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-accent mb-4">{sector.headline}</h3>
                    <p className="text-text-secondary leading-relaxed mb-6">{sector.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {sector.bullets.map(b => (
                        <div key={b} className="flex items-start gap-3 p-3 bg-dark-gray border border-border rounded-lg hover:border-accent/30 transition-colors">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-dark-gray border border-accent/20 rounded-xl mb-6">
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">Serves</p>
                        <p className="text-white text-sm font-medium">{sector.markets}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-accent">{sector.stat.value}</div>
                        <div className="text-text-secondary text-xs">{sector.stat.label}</div>
                      </div>
                    </div>

                    <Link href={sector.href}>
                      <a className="btn-primary inline-flex items-center gap-2 px-6 py-3">
                        Full {sector.label} details <ArrowRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </motion.div>
                </section>
              );
            })}

            {/* Why industry matters */}
            <section id="why-industry-matters">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-4">What Every Industry Engagement Includes</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Regardless of sector, every upranked.io industry SEO engagement is built on the same non-negotiable foundation — the APEX Framework™ applied by Sam Hamouda across Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {commonBenefits.map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-dark-gray border border-border rounded-xl hover:border-accent/40 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{b}</span>
                    </motion.div>
                  ))}
                </div>

                {/* E-E-A-T bio */}
                <div className="bg-dark-gray border border-accent/30 rounded-2xl p-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-5">Industry SEO Expertise — E-E-A-T</p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img src="/images/sam-hamouda-seo-consultant-dubai.webp" alt="Sam Hamouda — Founder upranked.io, Industry SEO Expert GCC" width={80} height={80} loading="lazy" className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-accent/30" decoding="async" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Sam Hamouda</h3>
                      <p className="text-accent text-sm font-medium mb-4">Founder, upranked.io — GCC SEO Strategist &amp; Creator of the APEX Framework™</p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        Sam Hamouda built upranked.io around a specific hypothesis: sector knowledge is the biggest SEO advantage a GCC business can have. After working across healthcare, industrial B2B, and professional services in Dubai, Riyadh, Kuwait City, Manama, London, and New York, Sam developed deep playbooks for each vertical — keyword landscapes, content architectures, and trust-building frameworks specific to each industry. Every industry SEO engagement is led personally by Sam, ensuring that sector depth is applied at every stage.
                      </p>
                      <Link href="/about"><a className="text-accent text-sm font-semibold hover:underline">Full credentials →</a></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Service Areas */}
            <section id="service-areas">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">Industry SEO Service Areas — GCC, UK &amp; USA</h2>
                <p className="text-text-secondary mb-8">
                  Find an industry SEO expert near you in Dubai, Riyadh, Kuwait City, Manama, London, or New York. Sector-specific strategies for all six priority markets.
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
                <h2 className="text-3xl font-bold text-white mb-2">Industry SEO — Frequently Asked Questions</h2>
                <p className="text-text-secondary mb-8">
                  Common questions about industry-specific SEO for medical, industrial, and business sectors across Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
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
              Not Sure Which SEO Industry Package <span className="text-accent">Fits Your Business</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 30-minute APEX Diagnostic with Sam Hamouda. We will assess your sector, your market in Dubai, Riyadh, Kuwait, Bahrain, London, or New York — and tell you exactly where to focus first.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link href="/contact">
                <a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                  Book a Free APEX Diagnostic <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a href="/contact" className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-2">
                Contact Us
              </a>
            </div>
            {/* NAP #3 */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
              <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
