import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Local SEO Dubai & GCC', description: 'Local SEO services for businesses in Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK and New York USA — Google Business Profile, near-me optimization, local citations by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/seo/local', areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is local SEO and why does it matter in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Local SEO optimizes your business to appear in location-specific searches — "medical clinic near me in Dubai," "industrial supplier Riyadh," "SEO agency Kuwait City." In the GCC, near-me and location-based searches make up a significant share of high-intent commercial queries. Ranking in Google Maps and the local pack puts your business in front of buyers at the exact moment they are ready to act.' } },
      { '@type': 'Question', name: 'How does Google Business Profile optimization work for GCC businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Google Business Profile (GBP) optimization for GCC businesses involves: correct Arabic-English business name and description, accurate UAE/KSA/Kuwait/Bahrain address formatting, GCC phone number format, local category selection, photo optimization, review management, and regular posting. upranked.io manages GBP profiles across all six priority markets.' } },
      { '@type': 'Question', name: 'What are "near me" searches and how do I rank for them in Dubai?', acceptedAnswer: { '@type': 'Answer', text: '"Near me" searches — like "SEO agency near me Dubai" or "business consultant near me in Riyadh" — are among the highest-intent query types in Google. Ranking for them requires an optimized Google Business Profile, consistent NAP citations, local landing pages for each service area, and on-page content that includes the location + service combination in natural, high-frequency language.' } },
      { '@type': 'Question', name: 'Do you offer local SEO for businesses across multiple GCC cities?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io builds multi-location local SEO strategies for businesses operating across Dubai, Abu Dhabi, Sharjah, Riyadh, Jeddah, Kuwait City, and Manama simultaneously — with separate GBP profiles, city-specific landing pages, and localized citation building for each location.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://upranked.io/industries' }, { '@type': 'ListItem', position: 3, name: 'Local SEO', item: 'https://upranked.io/seo/local' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Google Business Profile Optimization', desc: 'Bilingual GBP setup and optimization for Dubai, Riyadh, Kuwait, and Bahrain — Arabic-English business information, category selection, photo strategy, and post frequency.' },
  { title: 'Near-Me Search Domination', desc: 'Page content and metadata specifically engineered to rank for "near me" and location-modified queries in your GCC or global market — the highest-intent search pattern in Google.' },
  { title: 'Local Citation Building', desc: 'Consistent NAP across UAE, KSA, Kuwait, and Bahrain business directories — Yellow Pages Gulf, Bayut, Dubizzle Business, Chamber of Commerce listings, and 40+ local citation sources.' },
  { title: 'City-Specific Landing Pages', desc: 'Dedicated landing pages for Dubai, Abu Dhabi, Riyadh, Jeddah, Kuwait City, Manama, London, and New York — each with localized content, schema, and conversion elements.' },
  { title: 'Review Strategy & Management', desc: 'Google review generation campaigns for GCC businesses — bilingual review request templates, response strategy, and reputation monitoring across all priority markets.' },
  { title: 'Local Schema Markup', desc: 'LocalBusiness, MedicalOrganization, and PostalAddress schema in GCC address format — signaling precise location and business type to Google for maps and local pack inclusion.' },
];

const faqs = [
  { q: 'What is local SEO and why does it matter in Dubai?', a: 'Local SEO optimizes your business to appear in location-specific searches — "medical clinic near me in Dubai," "industrial supplier Riyadh," "SEO agency Kuwait City." In the GCC, near-me and location-based searches make up a significant share of high-intent commercial queries. Ranking in Google Maps and the local pack puts your business in front of buyers at the exact moment they are ready to act.' },
  { q: 'How does Google Business Profile optimization work for GCC businesses?', a: 'GBP optimization for GCC businesses involves: correct Arabic-English business name and description, accurate UAE/KSA/Kuwait/Bahrain address formatting, GCC phone number format, local category selection, photo optimization, review management, and regular posting. upranked.io manages GBP profiles across all six priority markets.' },
  { q: 'What are "near me" searches and how do I rank for them in Dubai?', a: '"Near me" searches — like "SEO agency near me Dubai" or "business consultant near me in Riyadh" — are among the highest-intent query types in Google. Ranking for them requires an optimized Google Business Profile, consistent NAP citations, local landing pages for each service area, and on-page content that includes location + service combinations naturally.' },
  { q: 'Do you offer local SEO for businesses across multiple GCC cities?', a: 'Yes. upranked.io builds multi-location local SEO strategies for businesses operating across Dubai, Abu Dhabi, Sharjah, Riyadh, Jeddah, Kuwait City, and Manama simultaneously — with separate GBP profiles, city-specific landing pages, and localized citation building for each location.' },
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

export default function LocalSEO() {
  usePageMeta({ title: 'Local SEO Dubai & GCC — Near-Me Search & Google Business Profile', description: 'Local SEO for Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London & New York. Google Business Profile, near-me optimization, local citations — APEX Framework by Sama Alaa.', schema, schemaId: 'local-seo-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6"><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span className="mx-2 text-border">/</span><Link href="/seo/"><a className="hover:text-accent transition-colors">SEO</a></Link><span className="mx-2 text-border">/</span><span className="text-accent">Local SEO</span></nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Local SEO</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Local SEO Dubai &amp; GCC — <span className="gradient-text">Dominate Near-Me Searches</span></h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">When buyers in Dubai, Riyadh, Kuwait, or Bahrain search for businesses "near me," they are ready to act. upranked.io's local SEO service puts your business in the Google local pack and maps results at the exact moment high-intent buyers are looking — in Dubai, Riyadh, Kuwait City, Manama, London, and New York.</p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Local SEO</strong> is the optimization of a business's online presence to rank in geographically specific search results — Google Maps, the local pack (map with three business listings), and location-modified searches like "SEO agency Dubai" or "clinic near me Kuwait City." In the GCC, local SEO must address bilingual Arabic-English business listings and multi-city coverage across UAE, KSA, Kuwait, and Bahrain.</p>
                </div>
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-start pt-4 lg:pt-16">
              <img
                src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
                alt="Sama Alaa — local SEO expert in Dubai optimizing Google Business Profiles and near-me searches for GCC businesses at upranked.io"
                width={480}
                height={640}
                loading="eager"
                decoding="async"
                className="rounded-2xl border border-border object-cover object-top w-full max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Local SEO Services for Dubai &amp; GCC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Local SEO FAQs — Dubai &amp; GCC</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-seo-consultant-dubai.webp"
              alt="Sama Alaa — Founder and GCC SEO Strategist at upranked.io, Dubai UAE"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Written &amp; Overseen By</p>
              <h3 className="text-xl font-bold text-white mb-1">Sama Alaa</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sama Alaa is a GCC SEO strategist with deep expertise across UAE, KSA, Kuwait, and Bahrain markets. The APEX Framework — upranked.io's structured SEO methodology — was developed from hands-on experience ranking competitive GCC sectors including financial services, healthcare, industrial, and professional B2B.</p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Markets Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { flag: '🇦🇪', city: 'Dubai, UAE', href: '/markets/gcc/uae/dubai' },
              { flag: '🇸🇦', city: 'Riyadh, KSA', href: '/markets/gcc/ksa/riyadh' },
              { flag: '🇰🇼', city: 'Kuwait City', href: '/markets/gcc/kuwait' },
              { flag: '🇧🇭', city: 'Manama, Bahrain', href: '/markets/gcc/bahrain' },
              { flag: '🇬🇧', city: 'London, UK', href: '/markets/uk/london' },
              { flag: '🇺🇸', city: 'New York, USA', href: '/markets/usa/new-york' },
            ].map(m => (
              <Link key={m.city} href={m.href}><a className="bg-navy border border-border rounded-xl p-4 flex items-center gap-3 hover:border-accent/40 transition-colors"><span className="text-2xl">{m.flag}</span><span className="text-white font-medium text-sm">{m.city}</span></a></Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Rank #1 <span className="text-accent">Near Me</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your local presence and show exactly what it takes to rank in the Google local pack in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/contact/"><a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2">Book Free Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact/" className="btn-secondary text-lg px-10 py-5">Contact Us</a>
            </div>
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
