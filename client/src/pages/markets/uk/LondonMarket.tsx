import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency London UK — Search Optimization for London Businesses', description: 'SEO services for businesses in London and the UK — technical SEO, content strategy, link building and local SEO by upranked.io. APEX Framework by Sam Hamouda.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/uk/london', areaServed: ['London', 'United Kingdom'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Does upranked.io offer SEO services in London?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io serves businesses in London and the wider UK market. While upranked.io is headquartered in Dubai, the APEX Framework is market-agnostic — the same structured SEO methodology applied in Dubai and Riyadh delivers measurable results in London\'s competitive market. Book a free APEX Diagnostic call to discuss your London SEO strategy.' } },
      { '@type': 'Question', name: 'How competitive is SEO in London compared to Dubai?', acceptedAnswer: { '@type': 'Answer', text: "London is one of the world's most competitive SEO markets — significantly more competitive than most GCC cities. Financial services, legal, property, and professional B2B sectors in London have extremely high keyword competition and CPC values. Effective London SEO requires deep technical foundations, high-authority link profiles, and comprehensive content architecture — exactly what the APEX Framework delivers." } },
      { '@type': 'Question', name: 'Do you serve GCC businesses that also need UK or London SEO coverage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io specifically serves GCC businesses expanding into London and UK markets — for example, a Dubai-based financial services firm targeting London institutional investors, or a KSA healthcare group opening UK clinics. Cross-market SEO strategy spanning GCC and London from a single agency with deep expertise in both markets is a key upranked.io differentiator.' } },
      { '@type': 'Question', name: 'What London sectors does upranked.io have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'upranked.io serves London businesses in financial services and fintech, professional B2B services, healthcare and medical, legal services, and technology. These align with the GCC sectors where upranked.io has the deepest expertise — making cross-market GCC-to-London expansion strategies a natural capability.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'London SEO', item: 'https://upranked.io/markets/uk/london' }] },
    { '@type': 'Person', name: 'Sam Hamouda', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'London Technical SEO', desc: "Deep technical SEO audits for London businesses — Core Web Vitals, crawlability, indexation, UK CDN optimization, and structured data aligned with Google UK's ranking patterns." },
  { title: 'London Content Architecture', desc: 'Topic cluster content strategy for London market queries — commercial-intent keyword mapping, UK buyer vocabulary, and competitive content gap analysis against London sector leaders.' },
  { title: 'London Link Building', desc: 'UK-authority backlink acquisition — City AM digital, The Times business, sector-specific UK publications, and London business directory citations building UK domain credibility.' },
  { title: 'London Local SEO', desc: 'Google Business Profile optimization for London — UK address and phone formatting, London borough-specific landing pages, and near-me search optimization for London buyers.' },
  { title: 'GCC-to-London Expansion SEO', desc: 'Cross-market SEO strategy for GCC businesses entering London — aligning UK SEO investments with GCC brand positioning and leveraging GCC authority signals in the UK market.' },
  { title: 'London Financial Services SEO', desc: "Specialist SEO for London's financial sector — regulatory-aware content strategy, FCA-compliant language, and high-intent keyword targeting for London's investment and advisory buyers." },
];

const faqs = [
  { q: 'Does upranked.io offer SEO services in London?', a: "Yes. upranked.io serves businesses in London and the wider UK market. The APEX Framework is market-agnostic — the same structured SEO methodology that delivers results in Dubai and Riyadh works in London's competitive market. Book a free APEX Diagnostic call to discuss your London SEO strategy." },
  { q: 'How competitive is SEO in London compared to Dubai?', a: "London is one of the world's most competitive SEO markets. Financial services, legal, property, and professional B2B sectors have extremely high keyword competition and CPC values. Effective London SEO requires deep technical foundations, high-authority link profiles, and comprehensive content architecture — exactly what the APEX Framework delivers." },
  { q: 'Do you serve GCC businesses that also need UK or London SEO coverage?', a: 'Yes. upranked.io specifically serves GCC businesses expanding into London and the UK — for example, a Dubai-based financial services firm targeting London investors, or a KSA healthcare group opening UK clinics. Cross-market SEO spanning GCC and London from a single agency is a key upranked.io differentiator.' },
  { q: 'What London sectors does upranked.io have experience with?', a: 'upranked.io serves London businesses in financial services and fintech, professional B2B services, healthcare, legal services, and technology — aligning with the GCC sectors where upranked.io has the deepest expertise, enabling natural cross-market GCC-to-London expansion strategies.' },
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

export default function LondonMarket() {
  usePageMeta({ title: 'SEO Agency London UK — Technical SEO & Content Strategy', description: 'SEO agency for London and the UK. Technical SEO, content architecture, link building and GCC-to-London expansion SEO — APEX Framework by Sam Hamouda at upranked.io.', schema, schemaId: 'london-market-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <nav className="text-sm text-text-secondary mb-6">
            <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">London, UK</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇬🇧 London, UK</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency London UK — <span className="gradient-text">Technical SEO &amp; Content Strategy</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">London is one of the world's most competitive SEO environments. upranked.io's APEX Framework — built on deep technical foundations and commercial-intent content architecture — delivers measurable organic growth for London businesses and GCC companies expanding into the UK market.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">London SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">London</strong> is the UK's financial, commercial, and digital hub — and one of the world's most competitive SEO markets by keyword difficulty and link competition. London's high search volumes, sophisticated buyer base, and extreme sector competition make technical SEO foundations and high-authority content essential for organic ranking success. upranked.io serves both London-based businesses and GCC businesses entering the UK market.</p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
              <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">London SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">London SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
              alt="Sam Hamouda — SEO strategist at upranked.io serving London UK and GCC businesses"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your London SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam Hamouda</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam Hamouda is a GCC SEO strategist with deep expertise across GCC and global markets. The APEX Framework — upranked.io's structured SEO methodology — is market-agnostic, delivering the same systematic content architecture and technical foundations that win in Dubai and Riyadh to London's highly competitive financial services, legal, and professional B2B sectors.</p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
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
            <h2 className="text-4xl font-bold mb-6">Rank in <span className="text-accent">London</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your London search presence and build a strategy that delivers measurable organic growth in one of the world's most competitive SEO markets.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/contact"><a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2">Book Free Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact" className="btn-secondary text-lg px-10 py-5">Contact Us</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
              <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
