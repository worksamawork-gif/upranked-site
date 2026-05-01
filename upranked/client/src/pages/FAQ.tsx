import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ChevronDown, ArrowRight, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const faqCategories = [
  {
    id: 'about-upranked',
    category: 'About upranked.io',
    faqs: [
      {
        q: 'What is upranked.io?',
        a: 'upranked.io is a premium Growth Intelligence Lab founded by Sam Hamouda, specializing in SEO, business strategy, and digital growth for high-value businesses across the GCC (Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain) and global markets including London UK and New York USA.',
      },
      {
        q: 'What makes upranked.io different from other digital marketing agencies?',
        a: 'Three things: GCC-first market intelligence, sector specialization (healthcare, industrial, B2B), and direct founder involvement on every engagement. We don\'t sell templated packages to 50 clients — we build bespoke APEX Framework™ strategies for businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York where strategy actually matters.',
      },
      {
        q: 'Who is Sam Hamouda?',
        a: 'Sam Hamouda is the founder of upranked.io and creator of the APEX Framework™. He personally leads all client strategy engagements with deep expertise in GCC market SEO, business positioning, and digital growth intelligence. Sam works directly with clients in Dubai, Riyadh, Kuwait City, Manama, London, and New York.',
      },
      {
        q: 'What is the APEX Framework™?',
        a: 'APEX is upranked.io\'s proprietary 4-phase growth methodology: Audit → Position → Execute → Expand. Developed specifically for complex, trust-sensitive industries in the GCC and global markets, it is designed to ensure every engagement delivers compounding returns — not just short-term ranking spikes.',
      },
      {
        q: 'Is upranked.io a GCC-only agency?',
        a: 'upranked.io is GCC-first, globally capable. Our core expertise and deepest market intelligence is in the Gulf — Dubai, Riyadh, Kuwait, and Bahrain. We also serve businesses in London (UK) and New York (USA) as priority global expansion markets. If you\'re targeting the GCC from abroad, or expanding from GCC to London or New York, we are the right partner.',
      },
      {
        q: 'What industries does upranked.io specialize in?',
        a: 'Healthcare and medical clinics, industrial B2B suppliers and manufacturers, professional services, and high-value commercial businesses. These are trust-sensitive, complex-purchase industries where the APEX Framework delivers its greatest advantage — in markets like Dubai, Riyadh, Kuwait, and Bahrain where relationships and authority signal credibility.',
      },
    ],
  },
  {
    id: 'seo-services',
    category: 'SEO Services',
    faqs: [
      {
        q: 'How long does SEO take to show results in the UAE and GCC?',
        a: 'Most clients in Dubai and across the GCC see meaningful ranking improvements within 3–5 months and significant traffic growth by month 6–9. High-value sectors like healthcare and industrial B2B take slightly longer due to the trust signals Google requires, but the leads generated are substantially higher quality and commercial value.',
      },
      {
        q: 'Does SEO work for Arabic-speaking audiences in the GCC?',
        a: 'Yes — and it\'s massively underserved. Most agencies don\'t properly optimize for Arabic search intent in Dubai, Riyadh, Kuwait, or Bahrain. We create bilingual EN/AR strategies that capture both English and Arabic searches across all GCC markets, dramatically widening your addressable audience.',
      },
      {
        q: 'What is medical SEO and why does it require a specialist?',
        a: 'Medical SEO applies Google\'s E-E-A-T (Experience, Expertise, Authority, Trust) principles to healthcare websites. It requires specific technical setup, medically credible content, and structured data that signals authority to both Google and prospective patients. Clinics in Dubai, Abu Dhabi, Riyadh, and Bahrain face particularly strict YMYL scrutiny from Google.',
      },
      {
        q: 'What is industrial SEO?',
        a: 'Industrial SEO targets the specific, technical search queries used by procurement managers, engineers, and operations teams in the GCC — keywords like "industrial pipe fittings supplier Dubai" or "HVAC maintenance contract Riyadh." These have low search volume but extremely high purchase intent and contract value.',
      },
      {
        q: 'How much does SEO cost in Dubai and the GCC?',
        a: 'Our engagements are customized based on your competitive landscape, goals, and scope. We don\'t publish pricing because a medical clinic in Dubai competing nationally requires a very different investment than a local B2B firm in Sharjah. Book a free strategy call and we\'ll give you an honest, transparent assessment.',
      },
      {
        q: 'Can I find a business SEO expert near me in Dubai?',
        a: 'Yes. upranked.io is Dubai-based and GCC-focused. Sam Hamouda is available for in-person strategy sessions in Dubai and remote engagements across all GCC markets — Riyadh, Kuwait City, and Manama. London and New York clients are served remotely.',
      },
    ],
  },
  {
    id: 'growth-intelligence',
    category: 'Growth Intelligence Services',
    faqs: [
      {
        q: 'What is a business consultation with Sam Hamouda?',
        a: 'A 1-on-1 strategic session where Sam applies the APEX Framework™ to your specific situation. You receive a full audit of your digital presence, competitor analysis, and a prioritized 90-day growth roadmap — delivered directly by the founder. Available for businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.',
      },
      {
        q: 'What are custom growth tools?',
        a: 'Purpose-built software and intelligence platforms designed for your specific business needs — SEO dashboards, competitor trackers, bilingual keyword tools, lead scoring systems, content brief generators, and any data-driven tool that gives your team a sustainable competitive edge in the GCC or global markets.',
      },
      {
        q: 'Do you build custom websites?',
        a: 'Yes. We build premium, conversion-optimized websites with SEO architecture built in from day one. All sites include bilingual EN/AR support with full RTL layout, Core Web Vitals optimization, structured data, and integrated lead capture systems — designed for businesses in Dubai, Riyadh, and across the GCC.',
      },
      {
        q: 'What is business strategy and market positioning?',
        a: 'A strategic engagement focused on defining your competitive advantage in the GCC market — how you are perceived versus alternatives, what messaging attracts premium clients, and which channels to invest in for maximum ROI in your sector. Applicable across Dubai, Riyadh, Kuwait City, Bahrain, London, and New York.',
      },
      {
        q: 'Can Growth Intelligence services be combined with SEO?',
        a: 'Yes — and this is often the highest-leverage configuration. Clients who combine Business Consultation, Custom Website, and ongoing SEO with the APEX Framework get a fully integrated growth system rather than disconnected tactics. Book a call to discuss the right combination for your business.',
      },
      {
        q: 'Do you offer business strategy consultations for companies entering the GCC from London or New York?',
        a: 'Yes. upranked.io specializes in helping international businesses — particularly from London and New York — understand and enter GCC markets including Dubai, Riyadh, Kuwait, and Bahrain. Our GCC market intelligence, bilingual search knowledge, and local business culture understanding make us a uniquely effective partner for this.',
      },
    ],
  },
  {
    id: 'markets',
    category: 'Markets & Locations',
    faqs: [
      {
        q: 'Which markets does upranked.io serve?',
        a: 'upranked.io serves six priority markets: Dubai (UAE), Riyadh (KSA), Kuwait City (Kuwait), Manama (Bahrain), London (UK), and New York (USA). Secondary markets include Abu Dhabi, Sharjah, Jeddah, Dammam, Muscat, Doha, Birmingham, Manchester, Chicago, and Los Angeles.',
      },
      {
        q: 'Why is Dubai a priority SEO market?',
        a: 'Dubai is the GCC\'s most competitive digital market — high search intent, high-value buyers, and an increasingly sophisticated SEO landscape. Ranking in Dubai requires a combination of technical excellence, bilingual content, and genuine authority signals. The APEX Framework was built specifically to compete and win in this environment.',
      },
      {
        q: 'Does upranked.io offer SEO services in Riyadh, Saudi Arabia?',
        a: 'Yes. Riyadh is a priority market for upranked.io, with deep Arabic keyword research and Saudi-specific competitor intelligence built into every APEX engagement. Vision 2030 has transformed the Saudi digital economy — companies that invest in SEO now are building durable positions in one of the world\'s fastest-growing markets.',
      },
      {
        q: 'Do you serve businesses in Kuwait and Bahrain?',
        a: 'Yes — Kuwait City and Manama are both priority markets for upranked.io. Both markets have significant GCC-level competition in healthcare, B2B, and professional services, and both benefit from the APEX Framework\'s combination of bilingual SEO, technical authority, and sector-specific positioning.',
      },
      {
        q: 'How do you help businesses in London and New York?',
        a: 'For London and New York clients, we apply the APEX Framework to your local competitive landscape while leveraging our GCC market intelligence for international expansion strategies. Whether you are a London professional services firm entering Dubai, or a New York company targeting GCC investors, upranked.io provides both the strategy and execution.',
      },
      {
        q: 'Can I work with upranked.io if my business is in multiple GCC countries?',
        a: 'Yes — multi-market GCC engagements are a core competency at upranked.io. We build unified SEO strategies that span UAE, KSA, Kuwait, and Bahrain simultaneously, with market-specific keyword targeting and content localization for each country and city.',
      },
    ],
  },
  {
    id: 'working-with-us',
    category: 'Working with upranked.io',
    faqs: [
      {
        q: 'How do I get started with upranked.io?',
        a: 'Book a free 30-minute strategy call via the contact page, WhatsApp (Contact Us), or email (Sam@upranked.io). No commitment required. Sam will review your current position and give you an honest assessment of the opportunity — and whether upranked.io is the right fit for your business.',
      },
      {
        q: 'What is the minimum engagement with upranked.io?',
        a: 'A single strategy consultation is available as a starting point with zero obligation. For ongoing SEO and growth engagements, we structure retainers around your specific goals — typically starting with a 90-day APEX Audit and Position phase. We don\'t have a fixed minimum spend, but we only take on engagements where we\'re confident we can deliver meaningful ROI.',
      },
      {
        q: 'Will I work directly with Sam or with a team?',
        a: 'Sam Hamouda leads every engagement — strategy, direction, and client communication always flows directly through the founder. For execution work (content, technical SEO, development), we have a specialist team. You will never be handed off to an account manager who wasn\'t in the original strategy conversation.',
      },
      {
        q: 'Do you sign NDAs and keep client information confidential?',
        a: 'Yes. Confidentiality is standard in all upranked.io engagements. We do not discuss client identities, strategies, or results without explicit permission. Given the competitive nature of the GCC market in sectors like healthcare, industrial, and B2B, client discretion is not optional — it\'s a baseline expectation.',
      },
      {
        q: 'How do you report on SEO performance?',
        a: 'Monthly reporting tied to leads, revenue, and ROI — not just rankings and traffic. We track what matters: qualified leads generated, keyword position movement on commercial-intent queries, and measurable business outcomes. Reports are delivered directly by Sam with a clear interpretation of what the data means for your growth strategy.',
      },
      {
        q: 'What happens if I\'m not seeing results?',
        a: 'Transparency is a core principle at upranked.io. If results are not meeting projections, Sam will tell you directly — including what is causing the lag and what adjustments are needed. We do not hide behind vanity metrics or ambiguous reports. Every engagement comes with clear success criteria agreed upfront.',
      },
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqCategories.flatMap(c =>
        c.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        }))
      ),
    },
    {
      '@type': 'Organization',
      name: 'upranked.io',
      url: 'https://upranked.io',
      description: 'Premium SEO agency and Growth Intelligence Lab serving Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK, and New York USA.',
      founder: { '@type': 'Person', name: 'Sam Hamouda' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+201121664778',
        email: 'Sam@upranked.io',
        contactType: 'customer service',
        areaServed: ['AE', 'SA', 'KW', 'BH', 'GB', 'US'],
      },
    },
    {
      '@type': 'Person',
      name: 'Sam Hamouda',
      jobTitle: 'Founder & GCC SEO Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io' },
      url: 'https://upranked.io/about',
      knowsAbout: ['SEO Strategy', 'GCC Digital Marketing', 'APEX Framework', 'Business Positioning', 'Bilingual SEO'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://upranked.io/faq' },
      ],
    },
  ],
};

const serviceAreas = [
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', note: 'HQ Market — Business Bay, DIFC, Downtown', primary: true },
  { city: 'Riyadh', country: 'KSA', flag: '🇸🇦', note: 'King Fahd Rd, Olaya, North Riyadh', primary: true },
  { city: 'Kuwait City', country: 'Kuwait', flag: '🇰🇼', note: 'Salmiya, Hawalli, Sharq district', primary: true },
  { city: 'Manama', country: 'Bahrain', flag: '🇧🇭', note: 'Diplomatic Area, Seef, Amwaj Islands', primary: true },
  { city: 'London', country: 'UK', flag: '🇬🇧', note: 'City of London, Canary Wharf, West End', primary: true },
  { city: 'New York', country: 'USA', flag: '🇺🇸', note: 'Manhattan, Brooklyn, Tri-State Area', primary: true },
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

export default function FAQ() {
  const [activeSection, setActiveSection] = useState('about-upranked');
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({});

  usePageMeta({
    title: 'SEO Agency FAQ — Dubai, GCC & Global Markets',
    description:
      'Answers to every common question about upranked.io\'s SEO services, APEX Framework™ methodology, and Growth Intelligence services for businesses in Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London UK, and New York USA.',
    schema,
    schemaId: 'faq-schema',
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
    faqCategories.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
    const extras = ['service-areas', 'bio-section'];
    extras.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const allTocItems = [
    ...faqCategories.map(c => ({ id: c.id, label: c.category })),
    { id: 'service-areas', label: 'Service Areas' },
  ];

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Hero + NAP #1 */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="max-w-4xl">
            <nav className="text-sm text-text-secondary mb-6">
              <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
              <span className="mx-2 text-border">/</span>
              <span className="text-accent">FAQ</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Frequently Asked Questions</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                SEO Agency FAQ — Dubai, GCC &amp; <span className="gradient-text">Global Markets</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl leading-relaxed">
                Everything you need to know about upranked.io, the APEX Framework™, our SEO and Growth Intelligence services, and how we work with businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York.
              </p>

              {/* Featured snippet definition box */}
              <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Quick Answer</p>
                <p className="text-white font-semibold mb-1">What does upranked.io do?</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  upranked.io is a premium SEO agency and Growth Intelligence Lab founded by Sam Hamouda. We apply the proprietary APEX Framework™ — Audit, Position, Execute, Expand — to help high-value businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York achieve compounding organic growth. We specialize in medical SEO, industrial SEO, business SEO, and Growth Intelligence services including business consultation, custom tools, websites, and market positioning.
                </p>
              </div>

              {/* Fast-jump category links */}
              <div className="flex flex-wrap gap-2">
                {faqCategories.map(cat => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="text-xs bg-dark-gray border border-border hover:border-accent/40 rounded-full px-4 py-1.5 text-text-secondary hover:text-accent transition-colors"
                  >
                    {cat.category}
                  </a>
                ))}
              </div>

              {/* NAP #1 */}
              <div className="flex flex-wrap gap-5 text-sm text-text-secondary mt-6">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
                <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
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
              <p className="text-xs text-text-secondary uppercase tracking-widest mb-4 font-semibold">Categories</p>
              <nav className="space-y-1">
                {allTocItems.map(item => (
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
                <a href="/contact" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="w-3 h-3 text-accent flex-shrink-0" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3 h-3 text-accent flex-shrink-0" /> Sam@upranked.io</a>
              </div>

              <div className="mt-4">
                <Link href="/contact">
                  <a className="btn-primary w-full text-sm py-3 inline-flex items-center justify-center gap-2">
                    Book Free Call <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>
          </aside>

          {/* FAQ Content */}
          <main className="lg:col-span-3 space-y-16">

            {/* FAQ Categories */}
            {faqCategories.map((cat, ci) => (
              <section key={cat.id} id={cat.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: ci * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-accent mb-2 pb-3 border-b border-border">{cat.category}</h2>
                  <p className="text-text-secondary text-sm mb-6">
                    {ci === 0 && 'Core questions about upranked.io, our approach, and what we stand for.'}
                    {ci === 1 && 'Everything about our SEO services across Dubai, Riyadh, Kuwait, Bahrain, London, and New York.'}
                    {ci === 2 && 'Details on business consultation, custom tools, website builds, and market positioning services.'}
                    {ci === 3 && 'Market-specific questions about our GCC, UK, and USA coverage.'}
                    {ci === 4 && 'Practical questions about engaging with upranked.io and how we work.'}
                  </p>
                  <div className="space-y-3">
                    {cat.faqs.map(faq => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </motion.div>
              </section>
            ))}

            {/* E-E-A-T Bio Box */}
            <section id="bio-section">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <div className="bg-dark-gray border border-accent/30 rounded-2xl p-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-5">About the Expert Answering These Questions</p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img src="/images/sam-hamouda-seo-consultant-dubai.webp" alt="Sam Hamouda — Founder upranked.io, GCC SEO Expert" width={80} height={80} loading="lazy" className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-accent/30" decoding="async" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Sam Hamouda</h3>
                      <p className="text-accent text-sm font-medium mb-4">Founder, upranked.io — GCC SEO Strategist &amp; Creator of the APEX Framework™</p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        Sam Hamouda founded upranked.io to bring founder-level SEO strategy to high-value businesses in the GCC and beyond. Every answer in this FAQ reflects Sam's direct experience working with healthcare, industrial, and B2B clients across Dubai, Riyadh, Kuwait City, Manama, London, and New York. When you book a strategy call, you speak directly with Sam — not an intake team.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['GCC SEO', 'APEX Framework™', 'Medical SEO', 'Industrial SEO', 'Bilingual EN/AR', 'Business Strategy'].map(tag => (
                          <span key={tag} className="text-xs bg-navy border border-border rounded-full px-3 py-1 text-text-secondary">{tag}</span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Link href="/about">
                          <a className="text-accent text-sm font-semibold hover:underline">Full credentials &amp; profile →</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Service Areas */}
            <section id="service-areas">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">upranked.io Service Areas — GCC, UK &amp; USA</h2>
                <p className="text-text-secondary mb-8">
                  Serving high-value businesses across six priority markets. Find an SEO expert near you in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
                <p className="text-text-secondary text-sm">
                  Also serving: Abu Dhabi, Sharjah, Jeddah, Makkah, Dammam, Muscat, Doha, Birmingham, Manchester, Chicago, Los Angeles, and Miami.
                </p>

                {/* Quick service links */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Medical SEO', href: '/services/medical-seo' },
                    { label: 'Industrial SEO', href: '/services/industrial-seo' },
                    { label: 'Business SEO', href: '/services/business-seo' },
                    { label: 'Business Consultation', href: '/services/business-consultation' },
                    { label: 'Custom Website', href: '/services/tailored-website' },
                    { label: 'Business Strategy', href: '/services/business-strategy' },
                  ].map(link => (
                    <Link key={link.href} href={link.href}>
                      <a className="flex items-center justify-between p-4 bg-dark-gray border border-border hover:border-accent/40 rounded-xl transition-colors group">
                        <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Link>
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
              Still Have <span className="text-accent">Questions</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 30-minute strategy call with Sam Hamouda. Ask anything about your specific situation — no obligations, no pressure. Available for businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link href="/contact">
                <a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                  Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a
                href="/contact"
                className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-2"
              >
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
