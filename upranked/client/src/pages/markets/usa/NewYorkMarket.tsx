import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency New York USA — Search Optimization for New York Businesses', description: 'SEO services for businesses in New York City and the USA — technical SEO, content strategy, link building by upranked.io. APEX Framework by Sam.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/usa/new-york', areaServed: ['New York City', 'New York', 'United States'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Does upranked.io offer SEO services in New York?', acceptedAnswer: { '@type': 'Answer', text: "Yes. upranked.io serves businesses in New York City and across the USA. The APEX Framework's structured SEO methodology delivers results in New York's highly competitive market — and is particularly suited for GCC businesses entering the US market, or US-based businesses expanding into GCC markets. Book a free APEX Diagnostic call to discuss your New York SEO strategy." } },
      { '@type': 'Question', name: 'How competitive is SEO in New York City?', acceptedAnswer: { '@type': 'Answer', text: 'New York City has some of the highest keyword competition and CPC values in the world — particularly in financial services, legal, real estate, healthcare, and professional B2B. Effective NYC SEO requires extremely strong technical foundations, high-authority content, and a systematic link acquisition strategy from US-authority publications. The APEX Framework was designed for exactly this level of competitive density.' } },
      { '@type': 'Question', name: 'Do you work with GCC businesses entering the US market?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io specifically serves GCC businesses expanding into the US market — for example, a Dubai-based investment firm targeting US institutional clients, or a KSA technology company entering the New York startup ecosystem. Cross-market SEO strategy spanning GCC and New York from a single agency with expertise in both markets is a core upranked.io capability.' } },
      { '@type': 'Question', name: 'What New York sectors does upranked.io specialize in?', acceptedAnswer: { '@type': 'Answer', text: "upranked.io's core NYC sectors align with GCC expertise: financial services and fintech, professional B2B services, healthcare and medical, legal services, and technology. These are also New York's highest-competition SEO sectors — where the APEX Framework's systematic content architecture and technical foundations deliver the largest competitive advantages." } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'New York SEO', item: 'https://upranked.io/markets/usa/new-york' }] },
    { '@type': 'Person', name: 'Sam', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'New York Technical SEO', desc: 'Deep technical SEO for NYC businesses — Core Web Vitals, crawlability, indexation, US CDN optimization, and structured data aligned with Google US ranking signals.' },
  { title: 'NYC Content Architecture', desc: 'Topic cluster content strategy for New York market queries — commercial-intent keyword mapping, US buyer vocabulary, and competitive content gap analysis against NYC sector leaders.' },
  { title: 'New York Link Building', desc: 'US-authority backlink acquisition — Forbes, Business Insider, sector-specific US publications, and NYC business directory citations building US domain authority.' },
  { title: 'NYC Local SEO', desc: 'Google Business Profile optimization for New York — US address and phone formatting, Manhattan/borough-specific landing pages, and near-me search optimization for NYC buyers.' },
  { title: 'GCC-to-US Expansion SEO', desc: 'Cross-market SEO strategy for GCC businesses entering New York — aligning US SEO investments with GCC brand positioning and leveraging GCC authority in the US market context.' },
  { title: 'Financial Services SEO NYC', desc: "Specialist SEO for New York's financial sector — SEC-aware content strategy, high-intent keyword targeting for NYC's investment, hedge fund, and institutional finance buyer segments." },
];

const faqs = [
  { q: 'Does upranked.io offer SEO services in New York?', a: "Yes. upranked.io serves businesses in New York City and across the USA. The APEX Framework delivers results in New York's highly competitive market — and is particularly suited for GCC businesses entering the US market or US businesses expanding into GCC markets. Book a free APEX Diagnostic call to discuss your New York SEO strategy." },
  { q: 'How competitive is SEO in New York City?', a: "New York City has some of the highest keyword competition and CPC values in the world — particularly in financial services, legal, real estate, healthcare, and professional B2B. Effective NYC SEO requires extremely strong technical foundations, high-authority content, and systematic link acquisition from US-authority publications. The APEX Framework was designed for exactly this level of competitive density." },
  { q: 'Do you work with GCC businesses entering the US market?', a: 'Yes. upranked.io specifically serves GCC businesses expanding into the US market — for example, a Dubai-based investment firm targeting US institutional clients, or a KSA technology company entering the New York ecosystem. Cross-market SEO spanning GCC and New York from a single agency is a core upranked.io capability.' },
  { q: 'What New York sectors does upranked.io specialize in?', a: "upranked.io's core NYC sectors align with GCC expertise: financial services and fintech, professional B2B services, healthcare, legal services, and technology — New York's highest-competition SEO sectors where the APEX Framework's systematic content architecture delivers the largest competitive advantages." },
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
        {open && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}><div className="px-5 pb-5 pt-2 bg-dark-gray border-t border-border"><p className="text-text-secondary leading-relaxed">{a}</p></div></motion.div>)}
      </AnimatePresence>
    </div>
  );
}

export default function NewYorkMarket() {
  usePageMeta({ title: 'SEO Agency New York | Technical SEO & Content', description: 'SEO agency for New York City and the USA. Technical SEO, content architecture, link building and GCC-to-US expansion SEO — APEX Framework by Sam at upranked.io.', schema, schemaId: 'new-york-market-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <nav className="text-sm text-text-secondary mb-6">
            <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">New York, USA</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇺🇸 New York, USA</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency New York USA — <span className="gradient-text">Technical SEO &amp; Content Strategy</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">New York City's extreme SEO competition rewards only the most technically sound and content-deep strategies. upranked.io's APEX Framework delivers the systematic content architecture and technical foundations that NYC's highest-value sectors demand — and bridges GCC businesses entering the US market.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">New York SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">New York City</strong> is the world's leading financial and commercial hub — and among the world's most competitive SEO markets by keyword difficulty, link competition, and content depth requirements. NYC's financial services, legal, real estate, and professional B2B sectors have extremely high CPC values and sophisticated organic search competition. upranked.io serves both NYC-based businesses and GCC businesses entering the US market.</p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">New York SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">New York SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
              alt="Sam — SEO strategist at upranked.io serving New York USA and GCC businesses"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your New York SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam is a GCC SEO strategist with deep expertise across GCC and global markets. The APEX Framework — upranked.io's structured SEO methodology — delivers the systematic content architecture and technical foundations that NYC's financial services, legal, and professional B2B sectors demand, and bridges GCC businesses entering the US market.</p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">All Markets Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { flag: '🇦🇪', city: 'Dubai, UAE', href: '/markets/gcc/uae/dubai' },
              { flag: '🇸🇦', city: 'Riyadh, KSA', href: '/markets/gcc/ksa/riyadh' },
              { flag: '🇰🇼', city: 'Kuwait City', href: '/markets/gcc/kuwait' },
              { flag: '🇧🇭', city: 'Manama, Bahrain', href: '/markets/gcc/bahrain' },
              { flag: '🇬🇧', city: 'London, UK', href: '/markets/uk/london' },
              { flag: '🇺🇸', city: 'New York, USA', href: '/markets/usa/new-york' },
              { flag: '🇩🇪', city: 'Germany', href: '/markets/eu/germany' },
              { flag: '🇫🇷', city: 'France', href: '/markets/eu/france' },
            ].map(m => (
              <Link key={m.city} href={m.href}><a className="bg-navy border border-border rounded-xl p-4 flex items-center gap-3 hover:border-accent/40 transition-colors"><span className="text-2xl">{m.flag}</span><span className="text-white font-medium text-sm">{m.city}</span></a></Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Rank in <span className="text-accent">New York</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your New York search presence and build a strategy for measurable organic growth in one of the world's most competitive SEO markets.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/contact/"><a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2">Book Free Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact/" className="btn-secondary text-lg px-10 py-5">Contact Us</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
