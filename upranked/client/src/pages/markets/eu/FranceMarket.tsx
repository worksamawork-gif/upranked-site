import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency France — Paris & French Market Search Optimization', description: 'SEO services for businesses in France — technical SEO, content strategy, and GCC-to-France expansion SEO by upranked.io. APEX Framework by Sam.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/eu/france', areaServed: ['Paris', 'Lyon', 'Marseille', 'France'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Does upranked.io offer SEO services in France?', acceptedAnswer: { '@type': 'Answer', text: "Yes. upranked.io serves businesses in France — including Paris's financial and luxury sectors, Lyon's industrial market, and France's broader professional services ecosystem. The APEX Framework delivers structured SEO across French market verticals. Book a free APEX Diagnostic to discuss your France SEO strategy." } },
      { '@type': 'Question', name: 'How competitive is SEO in France compared to Dubai?', acceptedAnswer: { '@type': 'Answer', text: "France is a sophisticated SEO market with strong competition in luxury, finance, technology, and professional services — particularly in Paris. French buyers research extensively online before engaging B2B service providers, making content authority and technical foundations essential for ranking success in France." } },
      { '@type': 'Question', name: 'Do you serve GCC businesses expanding into France?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io specifically serves GCC businesses entering the French market — investment firms targeting Paris financial institutions, GCC luxury brands expanding in France, and Gulf healthcare groups entering the European market. Cross-market GCC-to-France SEO from a single specialist is a core upranked.io capability.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'France SEO', item: 'https://upranked.io/markets/eu/france' }] },
    { '@type': 'Person', name: 'Sam', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'France Technical SEO', desc: 'Deep technical audits for French websites — Core Web Vitals, crawlability, hreflang for French/English/Arabic, and structured data aligned with Google.fr ranking patterns.' },
  { title: 'French Content Architecture', desc: 'Topic cluster content strategy for French market queries — commercial-intent keyword mapping in French and English, French B2B buyer vocabulary, and competitive content gap analysis against French sector leaders.' },
  { title: 'France Link Building', desc: "French-authority backlink acquisition — Le Monde, Les Echos, sector trade publications, French business directories, and B2B industry citations building domain credibility for France's market." },
  { title: 'Paris Financial & Luxury SEO', desc: "Specialist SEO for Paris's financial district La Défense and France's luxury sector — targeting high-net-worth buyers, asset managers, and premium brand decision-makers." },
  { title: 'French B2B & Industrial SEO', desc: "Commercial-intent SEO for French industrial and professional services markets — precision keyword targeting for France's manufacturing, engineering, and corporate services sectors." },
  { title: 'GCC-to-France Expansion SEO', desc: 'Cross-market SEO for GCC businesses entering France — luxury, finance, and investment sectors with natural GCC-France business connections, leveraging existing GCC authority signals for faster French market entry.' },
];

const faqs = [
  { q: 'Does upranked.io offer SEO services in France?', a: "Yes. upranked.io serves French businesses and GCC companies entering France. The APEX Framework is market-agnostic — the same structured SEO methodology delivering results in Dubai and Riyadh is applied to France's competitive financial, luxury, and professional services sectors." },
  { q: 'How competitive is SEO in France compared to Dubai?', a: "France's B2B SEO market is highly competitive — particularly in Paris for finance and luxury, and Lyon for industrial sectors. French buyers research extensively before purchase, making content depth and technical authority critical for organic ranking success." },
  { q: 'Do you serve GCC businesses expanding into France?', a: 'Yes. upranked.io specifically serves GCC businesses entering France — investment firms targeting Paris financial institutions, GCC luxury brands expanding in France, and Gulf healthcare groups entering European markets. Cross-market SEO from a single specialist is a key upranked.io differentiator.' },
  { q: 'What French sectors does upranked.io specialise in?', a: "upranked.io serves French businesses in financial services and private banking, luxury and premium consumer brands, industrial and engineering, professional B2B services, and healthcare — aligning with GCC sectors where upranked.io has the deepest expertise, enabling natural GCC-to-France cross-market strategies." },
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

export default function FranceMarket() {
  usePageMeta({ title: 'SEO Agency France — Paris & French Market Search Optimization', description: 'SEO agency for France and Paris. Technical SEO, content architecture, luxury & financial SEO, and GCC-to-France expansion — APEX Framework by Sam at upranked.io.', schema, schemaId: 'france-market-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <nav className="text-sm text-text-secondary mb-6">
            <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">France</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇫🇷 France — Paris & Beyond</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency France — <span className="gradient-text">Paris, Luxury & B2B Markets</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">France's financial, luxury, and B2B SEO market demands authoritative content, technical precision, and deep market knowledge. upranked.io's APEX Framework delivers measurable organic growth for French businesses and GCC companies expanding into France and Europe.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">France SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">France</strong> is one of Europe's most sophisticated digital markets — Paris leads in financial services, luxury, and professional B2B, while Lyon and Marseille serve major industrial and logistics sectors. French buyers research extensively online before engaging, making content authority and technical SEO foundations essential. upranked.io serves both French businesses and GCC companies entering the French and European market.</p>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">France SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">France SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>

      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img src="/favicon.svg" alt="Sam — SEO strategist at upranked.io serving France and GCC businesses" width={112} height={176} loading="lazy" decoding="async" className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0" />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your France SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam is a GCC SEO strategist with deep expertise across GCC and global markets. The APEX Framework — upranked.io's structured SEO methodology — delivers the same systematic content architecture and technical foundations that win in Dubai and Riyadh to France's competitive luxury, financial, and professional B2B sectors.</p>
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
                Book a France SEO Strategy Call <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
