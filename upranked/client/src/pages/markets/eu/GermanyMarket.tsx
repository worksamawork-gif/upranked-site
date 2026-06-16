import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency Germany — Frankfurt & Berlin Search Optimization', description: 'SEO services for businesses in Germany — technical SEO, content strategy, and GCC-to-Germany expansion SEO by upranked.io. APEX Framework by Sam.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/eu/germany', areaServed: ['Frankfurt', 'Berlin', 'Munich', 'Germany'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Does upranked.io offer SEO services in Germany?', acceptedAnswer: { '@type': 'Answer', text: "Yes. upranked.io serves businesses in Germany — including Frankfurt's financial sector, Berlin's tech ecosystem, and Munich's industrial and engineering market. The APEX Framework delivers structured SEO across German market verticals. Book a free APEX Diagnostic to discuss your Germany SEO strategy." } },
      { '@type': 'Question', name: 'How competitive is SEO in Germany compared to Dubai?', acceptedAnswer: { '@type': 'Answer', text: "Germany is one of Europe's most competitive B2B SEO markets. Frankfurt's financial services and Berlin's tech sector have high keyword difficulty and sophisticated buyer search behaviour. German buyers research thoroughly before purchase — making content architecture and technical authority essential for ranking success." } },
      { '@type': 'Question', name: 'Do you serve GCC businesses expanding into Germany?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io specifically serves GCC businesses entering the German market — for example, a Dubai-based investment firm targeting Frankfurt financial institutions, or a GCC industrial supplier targeting German manufacturing procurement. Cross-market GCC-to-Germany SEO from a single specialist agency is a core upranked.io capability.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'Germany SEO', item: 'https://upranked.io/markets/eu/germany' }] },
    { '@type': 'Person', name: 'Sam', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Germany Technical SEO', desc: 'Deep technical audits for German websites — Core Web Vitals, crawlability, hreflang for German/English, and structured data aligned with Google.de ranking patterns.' },
  { title: 'German Content Architecture', desc: 'Topic cluster content strategy for German market queries — commercial-intent keyword mapping in German and English, Mittelstand buyer vocabulary, and competitive content gap analysis.' },
  { title: 'Germany Link Building', desc: 'German-authority backlink acquisition — Handelsblatt, Wirtschaftswoche, sector trade publications, DACH business directories, and B2B industry citations building German domain credibility.' },
  { title: 'Frankfurt Financial SEO', desc: "Specialist SEO for Frankfurt's financial district — targeting asset managers, private equity, banking, and fintech buyers searching Germany's financial hub." },
  { title: 'Berlin Tech & Startup SEO', desc: "Content authority and technical SEO for Berlin's tech ecosystem — SaaS, fintech, and digital-first companies competing for Germany's growing online B2B market." },
  { title: 'GCC-to-Germany Expansion SEO', desc: 'Cross-market SEO for GCC businesses entering Germany — aligning German SEO investments with GCC brand positioning and leveraging existing GCC authority signals for faster DACH market entry.' },
];

const faqs = [
  { q: 'Does upranked.io offer SEO services in Germany?', a: "Yes. upranked.io serves German businesses and GCC companies entering the German market. The APEX Framework is market-agnostic — the same structured SEO methodology delivering results in Dubai and Riyadh is applied to Germany's competitive B2B and financial services sectors." },
  { q: 'How competitive is SEO in Germany compared to Dubai?', a: "Germany's B2B and financial SEO market is highly competitive — particularly in Frankfurt, Munich, and Berlin. German buyers research extensively before engaging, making deep content architecture and technical authority critical for organic ranking success." },
  { q: 'Do you serve GCC businesses expanding into Germany?', a: 'Yes. upranked.io specifically serves GCC businesses entering Germany — investment firms targeting Frankfurt, industrial suppliers targeting German manufacturing, and GCC healthcare groups expanding into the DACH market. Cross-market SEO from a single specialist is a key upranked.io differentiator.' },
  { q: 'What German sectors does upranked.io specialise in?', a: 'upranked.io serves German businesses in financial services, industrial manufacturing and engineering, professional B2B services, healthcare, and technology — aligning with the same GCC sectors where upranked.io has the deepest expertise, enabling natural cross-market expansion strategies.' },
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

export default function GermanyMarket() {
  usePageMeta({ title: 'SEO Agency Germany — Frankfurt, Berlin & DACH Search Optimization', description: 'SEO agency for Germany and the DACH region. Technical SEO, content architecture, and GCC-to-Germany expansion SEO — APEX Framework by Sam at upranked.io.', schema, schemaId: 'germany-market-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <nav className="text-sm text-text-secondary mb-6">
            <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">Germany</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇩🇪 Germany — DACH Market</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency Germany — <span className="gradient-text">Frankfurt, Berlin & DACH</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Germany's B2B and financial SEO market demands deep technical foundations, authoritative content, and precision keyword strategy. upranked.io's APEX Framework delivers measurable organic growth for German businesses and GCC companies entering the DACH market.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Germany SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Germany</strong> is Europe's largest economy and one of its most competitive B2B SEO markets — particularly in Frankfurt (finance), Munich (engineering & industrial), and Berlin (tech & startups). German buyers research thoroughly before purchase, making content depth and technical authority essential. upranked.io serves both Germany-based businesses and GCC companies expanding into the DACH region.</p>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Germany SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Germany SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>

      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img src="/favicon.svg" alt="Sam — SEO strategist at upranked.io serving Germany and GCC businesses" width={112} height={176} loading="lazy" decoding="async" className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0" />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your Germany SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam is a GCC SEO strategist with deep expertise across GCC and global markets. The APEX Framework — upranked.io's structured SEO methodology — delivers the same systematic content architecture and technical foundations that win in Dubai and Riyadh to Germany's highly competitive financial services, industrial, and professional B2B sectors.</p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 text-center">All Markets Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

          <div className="text-center mt-10">
            <Link href="/contact/">
              <a className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                Book a Germany SEO Strategy Call <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
