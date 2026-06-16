import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Search, Globe, BarChart2, Link2, Code2, Map, Languages, FileText, Target } from 'lucide-react';
import { Link } from 'wouter';
import { usePageMeta } from '@/hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'SEO Services Dubai & GCC — All SEO Types',
      description: 'Complete SEO services for businesses in Dubai, the GCC, London, and New York. On-page, off-page, technical, local, bilingual, schema, analytics, content architecture, and geo-targeted SEO by upranked.io.',
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      url: 'https://upranked.io/seo',
      areaServed: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'SEO Types', item: 'https://upranked.io/seo' },
      ],
    },
  ],
};

const seoTypes = [
  {
    icon: Search,
    label: 'On-Page SEO',
    href: '/seo/on-page',
    desc: 'Title tags, meta descriptions, keyword mapping, internal linking, and content optimisation for every page on your site.',
    tags: ['Content', 'Keywords', 'Metadata'],
  },
  {
    icon: Link2,
    label: 'Off-Page SEO',
    href: '/seo/off-page',
    desc: 'Authority building through GCC-relevant backlinks, digital PR, and link acquisition strategies designed for your market.',
    tags: ['Link Building', 'Authority', 'PR'],
  },
  {
    icon: Code2,
    label: 'Technical SEO',
    href: '/seo/technical',
    desc: 'Site architecture, Core Web Vitals, crawlability, indexation, mobile performance, and bilingual RTL technical setup.',
    tags: ['Core Web Vitals', 'Architecture', 'Speed'],
  },
  {
    icon: Map,
    label: 'Local SEO',
    href: '/seo/local',
    desc: 'Google Business Profile optimisation, near-me search domination, and local citation building across Dubai, Riyadh, Kuwait, and Bahrain.',
    tags: ['Google Maps', 'Near-Me', 'GBP'],
  },
  {
    icon: Languages,
    label: 'Bilingual SEO',
    href: '/seo/bilingual',
    desc: 'Native Arabic keyword research, RTL technical architecture, hreflang implementation, and bilingual EN/AR content strategy.',
    tags: ['Arabic', 'hreflang', 'RTL'],
  },
  {
    icon: FileText,
    label: 'Schema Markup',
    href: '/seo/schema',
    desc: '@graph JSON-LD structured data implementation for rich results — FAQ, LocalBusiness, MedicalOrganization, Product, and more.',
    tags: ['JSON-LD', 'Rich Results', 'Structured Data'],
  },
  {
    icon: BarChart2,
    label: 'SEO Analytics',
    href: '/seo/analytics',
    desc: 'GCC rank tracking, GSC integration, revenue attribution, and custom dashboards that connect organic traffic to pipeline.',
    tags: ['Rank Tracking', 'GSC', 'Attribution'],
  },
  {
    icon: Globe,
    label: 'Content Architecture',
    href: '/seo/content-architecture',
    desc: 'Topic clusters, content silos, and bilingual content strategies that build topical authority across your entire domain.',
    tags: ['Topic Clusters', 'Silos', 'Authority'],
  },
  {
    icon: Target,
    label: 'Geo-Targeted SEO',
    href: '/seo/geo',
    desc: 'Multi-market and international SEO for businesses operating across the GCC, UK, USA, and EU — hreflang, ccTLD strategy, and local signals.',
    tags: ['International', 'Multi-Market', 'hreflang'],
  },
];

export default function SEOHub() {
  usePageMeta({
    title: 'SEO Types — Complete SEO Services Dubai & GCC',
    description: 'All SEO service types for businesses in Dubai & the GCC. On-page, off-page, technical, local, bilingual, schema, analytics, content architecture & geo-targeted SEO by upranked.io.',
    schema,
    schemaId: 'seo-hub-schema',
    canonical: 'https://upranked.io/seo',
  });

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <nav className="text-sm text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
                <span className="mx-2 text-border">/</span>
                <span className="text-accent">SEO Types</span>
              </nav>

              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">SEO Services · All Types</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                SEO Types — <span className="gradient-text">Complete SEO Services</span> in Dubai &amp; the GCC
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl leading-relaxed">
                Nine specialist SEO disciplines, each applied to your specific market, sector, and search landscape. Every engagement with upranked.io draws from the full stack — not just one tactic.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['On-Page', 'Off-Page', 'Technical', 'Local', 'Bilingual EN/AR', 'Schema', 'Analytics', 'Content Architecture', 'Geo-Targeted'].map(tag => (
                  <span key={tag} className="text-xs bg-dark-gray border border-border rounded-full px-3 py-1.5 text-text-secondary">{tag}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact/">
                  <a className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                    Book Free APEX Diagnostic <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="/seo-industries/">
                  <a className="btn-secondary text-lg px-8 py-4">SEO by Industry</a>
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/06-keyword-constellation.svg"
                  alt="Keyword constellation map showing SEO service disciplines and search landscape for GCC businesses — upranked.io"
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

      {/* SEO Types Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container-premium">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-3">Nine Disciplines</span>
            <h2 className="text-4xl font-bold mb-4">Every SEO Type, Applied to Your Market</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Most agencies pick one or two tactics. The APEX Framework™ integrates all nine disciplines into a single compounding strategy built around your business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoTypes.map((type) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group bg-dark-gray border border-border rounded-2xl p-6 hover:border-accent/40 card-glow transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-white text-lg">{type.label}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{type.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {type.tags.map(tag => (
                      <span key={tag} className="text-xs bg-navy border border-border rounded-full px-2.5 py-1 text-text-secondary">{tag}</span>
                    ))}
                  </div>
                  <Link href={type.href}>
                    <a className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                      Explore {type.label} <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry SEO CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-dark-gray border-y border-border">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-3">By Industry</span>
              <h2 className="text-3xl font-bold mb-4">Need SEO Tailored to Your Industry?</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                SEO for a medical clinic in Dubai operates completely differently from SEO for an industrial B2B supplier or a professional services firm. We build sector-specific strategies for medical, industrial, and business clients.
              </p>
              <Link href="/seo-industries/">
                <a className="btn-primary inline-flex items-center gap-2">
                  View Industry SEO <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Medical SEO', href: '/industries/medical-seo', desc: 'For clinics, hospitals & healthcare providers' },
                { label: 'Industrial SEO', href: '/industries/industrial-seo', desc: 'For B2B, manufacturing & oil & gas' },
                { label: 'Business SEO', href: '/industries/business-seo', desc: 'For professional services & consultancies' },
              ].map(item => (
                <Link key={item.href} href={item.href}>
                  <a className="flex items-center justify-between bg-navy border border-border rounded-xl p-4 hover:border-accent/40 transition-colors group">
                    <div>
                      <p className="font-semibold text-white group-hover:text-accent transition-colors">{item.label}</p>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sam bio */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container-premium">
          <div className="bg-dark-gray border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/favicon.svg"
              alt="Sam — founder of upranked.io, SEO specialist in Dubai and the GCC"
              width={120}
              height={120}
              loading="lazy"
              decoding="async"
              className="w-24 h-24 rounded-full object-cover border-2 border-accent flex-shrink-0"
            />
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Founder-Led SEO</p>
              <h3 className="text-2xl font-bold mb-3">Every SEO type delivered personally by Sam</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                upranked.io is deliberately founder-led. Sam personally leads every engagement — no junior teams, no account managers. All nine SEO disciplines are applied through the APEX Framework™, built specifically for GCC market conditions.
              </p>
              <Link href="/about/">
                <a className="text-accent font-semibold hover:underline inline-flex items-center gap-1">About Sam <ArrowRight className="w-4 h-4" /></a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Markets grid */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-dark-gray border-t border-border">
        <div className="container-premium">
          <p className="text-center text-text-secondary text-sm uppercase tracking-widest font-semibold mb-6">Markets We Serve</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-3">
            {[
              { flag: '🇦🇪', city: 'Dubai, UAE', href: '/markets/gcc/uae/dubai' },
              { flag: '🇸🇦', city: 'Riyadh, KSA', href: '/markets/gcc/ksa/riyadh' },
              { flag: '🇰🇼', city: 'Kuwait City', href: '/markets/gcc/kuwait' },
              { flag: '🇧🇭', city: 'Bahrain', href: '/markets/gcc/bahrain' },
              { flag: '🇬🇧', city: 'London, UK', href: '/markets/uk/london' },
              { flag: '🇺🇸', city: 'New York', href: '/markets/usa/new-york' },
              { flag: '🇩🇪', city: 'Germany', href: '/markets/eu/germany' },
              { flag: '🇫🇷', city: 'France', href: '/markets/eu/france' },
              { flag: '🌍', city: 'All GCC', href: '/markets/gcc' },
            ].map(m => (
              <Link key={m.city} href={m.href}>
                <a className="bg-navy border border-border rounded-xl p-3 flex flex-col items-center gap-1 hover:border-accent/40 transition-colors text-center">
                  <span className="text-xl">{m.flag}</span>
                  <span className="text-white text-xs font-medium">{m.city}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
