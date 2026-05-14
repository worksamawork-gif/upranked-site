import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Geo-Targeted SEO Dubai & GCC — International & Multi-Market SEO', description: 'Geo-targeted and international SEO for businesses in Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK and New York USA — hreflang, ccTLD strategy, multi-market content by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/seo/geo', areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is geo-targeted SEO and why does it matter for GCC businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Geo-targeted SEO (also called international SEO or multi-market SEO) is the optimization of a website to rank in specific countries or cities — rather than just globally. For GCC businesses operating across Dubai, Riyadh, Kuwait, and Bahrain, geo-targeted SEO ensures you rank in each market\'s local Google index, not just globally. This requires country-specific URL structures, hreflang tags, local content, and separate Google Search Console properties for each target country.' } },
      { '@type': 'Question', name: 'Should GCC businesses use ccTLDs, subdomains, or subdirectories for geo-targeting?', acceptedAnswer: { '@type': 'Answer', text: 'For most GCC businesses, subdirectories (upranked.io/ae/, upranked.io/sa/) or subdomains (ae.upranked.io) are more practical than separate ccTLDs (.ae, .sa) because they consolidate domain authority onto a single root domain. ccTLDs are effective for large enterprises with significant resources for separate domain authority building. upranked.io recommends subdirectory structure for most GCC multi-market implementations, with correct hreflang and geo-targeting signals in Google Search Console.' } },
      { '@type': 'Question', name: 'How do you target Dubai specifically in Google search versus the UAE generally?', acceptedAnswer: { '@type': 'Answer', text: 'Targeting Dubai specifically requires: Google Business Profile verified in Dubai with a Dubai address, city-level location content ("Dubai" mentioned naturally in page copy, headings, and schema), city-specific landing pages, and local citation sources tied to the Dubai business community. Google Search Console geo-targeting can be set to UAE, but city-level targeting for Dubai comes primarily from GBP verification and local citation consistency.' } },
      { '@type': 'Question', name: 'Can one website rank in both Dubai and London simultaneously?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single-domain website can rank in both Dubai and London using subdirectory structure (/ae/ for UAE, /uk/ for UK), hreflang tags specifying country targeting, separate Google Business Profile listings for each city, and market-specific content in each subdirectory. upranked.io manages multi-market SEO strategies for businesses targeting Dubai, Riyadh, Kuwait, Bahrain, London, and New York from a single domain.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://upranked.io/industries' }, { '@type': 'ListItem', position: 3, name: 'Geo-Targeted SEO', item: 'https://upranked.io/seo/geo' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Multi-Market URL Architecture', desc: 'Subdirectory or subdomain structure for UAE, KSA, Kuwait, Bahrain, UK, and USA — consolidating domain authority while giving each market its own geo-targeted content hierarchy.' },
  { title: 'Hreflang Implementation', desc: 'Country and language hreflang tags connecting market-specific page versions — ensuring Google serves the right content to the right country and language audience across all six GCC and global markets.' },
  { title: 'Google Search Console Geo-Targeting', desc: 'Country-specific Search Console properties configured for UAE, KSA, Kuwait, Bahrain, UK, and USA — with correct International Targeting settings and performance monitoring by market.' },
  { title: 'City-Level Landing Pages', desc: 'Dedicated landing pages for Dubai, Abu Dhabi, Riyadh, Jeddah, Kuwait City, Manama, London, and New York — each with localized content, schema, and NAP signals for that specific city.' },
  { title: 'ccTLD vs Subdirectory Strategy', desc: 'Market analysis and recommendation on ccTLD (.ae, .sa), subdomain, or subdirectory geo-targeting strategy — based on your domain authority, resource availability, and multi-market SEO goals.' },
  { title: 'International Citation Building', desc: 'Consistent NAP citations across UAE, KSA, Kuwait, Bahrain, UK, and US business directories — building geo-trust signals in each target market from local authority citation sources.' },
];

const faqs = [
  { q: 'What is geo-targeted SEO and why does it matter for GCC businesses?', a: "Geo-targeted SEO optimizes a website to rank in specific countries or cities rather than globally. For GCC businesses across Dubai, Riyadh, Kuwait, and Bahrain, geo-targeted SEO ensures you rank in each market's local Google index — requiring country-specific URL structures, hreflang tags, local content, and separate Google Search Console properties for each target country." },
  { q: 'Should GCC businesses use ccTLDs, subdomains, or subdirectories for geo-targeting?', a: 'For most GCC businesses, subdirectories (domain.com/ae/, domain.com/sa/) or subdomains are more practical than separate ccTLDs (.ae, .sa) because they consolidate domain authority onto a single root domain. upranked.io recommends subdirectory structure for most GCC multi-market implementations, with correct hreflang and geo-targeting signals in Google Search Console.' },
  { q: 'How do you target Dubai specifically in Google search versus the UAE generally?', a: 'Targeting Dubai specifically requires: Google Business Profile verified in Dubai, city-level location content in page copy, headings, and schema, city-specific landing pages, and local citation sources tied to the Dubai business community. City-level targeting for Dubai comes primarily from GBP verification and local citation consistency.' },
  { q: 'Can one website rank in both Dubai and London simultaneously?', a: 'Yes. A single-domain website can rank in both Dubai and London using subdirectory structure (/ae/ for UAE, /uk/ for UK), hreflang tags specifying country targeting, separate Google Business Profile listings for each city, and market-specific content. upranked.io manages multi-market SEO for businesses targeting Dubai, Riyadh, Kuwait, Bahrain, London, and New York from a single domain.' },
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

export default function GeoSEO() {
  usePageMeta({ title: 'Geo-Targeted SEO Dubai & GCC — International & Multi-Market Search', description: 'Geo-targeted and international SEO for Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London & New York. Hreflang, ccTLD strategy, multi-market content — APEX Framework by Sama Alaa.', schema, schemaId: 'geo-seo-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6"><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span className="mx-2 text-border">/</span><Link href="/seo/"><a className="hover:text-accent transition-colors">SEO</a></Link><span className="mx-2 text-border">/</span><span className="text-accent">Geo-Targeted SEO</span></nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Geo-Targeted SEO</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Geo-Targeted SEO Dubai &amp; GCC — <span className="gradient-text">International &amp; Multi-Market Search</span></h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Ranking globally is not the same as ranking in Dubai. upranked.io builds geo-targeted SEO strategies that put your business in front of the right buyers in the right market — Dubai, Riyadh, Kuwait City, Manama, London, and New York — with separate market signals for each.</p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Geo-targeted SEO</strong> (international SEO) is the practice of optimizing a website to rank in specific geographic markets — countries or cities — using hreflang tags, country-specific URL structures, local content, and market-specific Google signals. For businesses operating across the GCC and globally, geo-targeted SEO ensures that buyers in Dubai, Riyadh, Kuwait, Bahrain, London, and New York each see market-relevant content in their local Google search results.</p>
                </div>
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/15-geo-targeted-seo.svg"
                  alt="Geo-targeted SEO map showing location-specific organic strategies across UAE, Saudi Arabia, Kuwait, Bahrain, London and New York — upranked.io"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Geo-Targeted SEO Services for GCC &amp; Global Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Geo-Targeted SEO FAQs — Dubai &amp; GCC</h2>
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
                <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
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
            <h2 className="text-4xl font-bold mb-6">Rank in <span className="text-accent">Every Market You Serve</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your current geo-targeting setup and identify exactly which markets you are missing in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.</p>
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
