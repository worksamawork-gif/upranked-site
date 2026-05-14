import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Technical SEO Dubai & GCC', description: 'Technical SEO audits and fixes for businesses in Dubai, Riyadh, Kuwait, Bahrain, London and New York — crawlability, Core Web Vitals, site architecture, indexation by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/seo/technical', areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is technical SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Technical SEO refers to optimizing the infrastructure of a website — crawlability, indexation, site speed, Core Web Vitals, mobile usability, structured data, and URL architecture — so search engines can efficiently discover, understand, and rank your content. For GCC businesses in Dubai and Riyadh, technical SEO must also account for bilingual RTL page architecture.' } },
      { '@type': 'Question', name: 'What Core Web Vitals scores do Dubai websites need to rank?', acceptedAnswer: { '@type': 'Answer', text: 'Google requires LCP (Largest Contentful Paint) under 2.5 seconds, FID/INP under 200ms, and CLS (Cumulative Layout Shift) under 0.1 to pass the Core Web Vitals assessment. Dubai-hosted websites with international CDN delivery often struggle with LCP — upranked.io audits and fixes these issues as part of every technical SEO engagement.' } },
      { '@type': 'Question', name: 'How does bilingual RTL architecture affect technical SEO in the GCC?', acceptedAnswer: { '@type': 'Answer', text: 'Arabic RTL websites require correct hreflang tag implementation, separate URL structures for AR and EN versions, RTL-compatible schema markup, and bilingual XML sitemaps. Incorrect implementation causes duplicate content penalties and splits link equity between EN and AR versions of the same page — a common and costly technical error for GCC businesses.' } },
      { '@type': 'Question', name: 'Do you offer technical SEO audits near me in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io offers forensic technical SEO audits for businesses across Dubai, Abu Dhabi, Riyadh, Kuwait City, Manama, London, and New York. Every audit is delivered with a prioritized fix list and Sama Alaa personally oversees all implementation.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://upranked.io/industries' }, { '@type': 'ListItem', position: 3, name: 'Technical SEO', item: 'https://upranked.io/seo/technical' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Forensic Crawl Audit', desc: 'Full Screaming Frog / Sitebulb crawl analysis — identifying crawl errors, broken links, redirect chains, orphan pages, and indexation blockers across your entire site.' },
  { title: 'Core Web Vitals Optimization', desc: 'LCP, CLS, and INP measurement and remediation for Dubai-hosted sites — image optimization, server response time, JavaScript deferral, and CDN configuration.' },
  { title: 'Bilingual RTL Architecture', desc: 'Hreflang implementation, Arabic URL structure, bilingual XML sitemaps, and RTL schema markup — the technical foundation for EN/AR GCC websites.' },
  { title: 'Site Speed & Hosting', desc: 'Load time audits for UAE, KSA, and GCC server configurations — identifying hosting bottlenecks, compression issues, and render-blocking resources.' },
  { title: 'Indexation & Sitemap', desc: 'XML sitemap structure, robots.txt configuration, canonical tags, and Google Search Console coverage analysis to ensure every important page is indexed.' },
  { title: 'Structured Data Audit', desc: 'Comprehensive @graph JSON-LD schema audit — identifying missing, invalid, or conflicting structured data across all page types and service categories.' },
];

const faqs = [
  { q: 'What is technical SEO?', a: 'Technical SEO refers to optimizing the infrastructure of a website — crawlability, indexation, site speed, Core Web Vitals, mobile usability, structured data, and URL architecture — so search engines can efficiently discover, understand, and rank your content. For GCC businesses in Dubai and Riyadh, technical SEO must also account for bilingual RTL page architecture.' },
  { q: 'What Core Web Vitals scores do Dubai websites need to rank?', a: 'Google requires LCP under 2.5 seconds, FID/INP under 200ms, and CLS under 0.1 to pass the Core Web Vitals assessment. Dubai-hosted websites with international CDN delivery often struggle with LCP — upranked.io audits and fixes these issues as part of every technical SEO engagement.' },
  { q: 'How does bilingual RTL architecture affect technical SEO in the GCC?', a: 'Arabic RTL websites require correct hreflang implementation, separate URL structures for AR and EN versions, RTL-compatible schema markup, and bilingual XML sitemaps. Incorrect implementation causes duplicate content penalties and splits link equity between language versions.' },
  { q: 'Do you offer technical SEO audits near me in Dubai?', a: 'Yes. upranked.io offers forensic technical SEO audits for businesses across Dubai, Abu Dhabi, Riyadh, Kuwait City, Manama, London, and New York. Every audit is delivered with a prioritized fix list and Sama Alaa personally oversees all implementation.' },
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

export default function TechnicalSEO() {
  usePageMeta({ title: 'Technical SEO Dubai & GCC — Site Architecture, Speed & Crawlability', description: 'Technical SEO audits for Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London & New York. Core Web Vitals, bilingual RTL architecture, crawl fixes — APEX Framework by Sama Alaa.', schema, schemaId: 'technical-seo-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6"><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span className="mx-2 text-border">/</span><Link href="/seo/"><a className="hover:text-accent transition-colors">SEO</a></Link><span className="mx-2 text-border">/</span><span className="text-accent">Technical SEO</span></nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Technical SEO</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Technical SEO Dubai &amp; GCC — <span className="gradient-text">Site Architecture, Speed &amp; Crawlability</span></h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Your content and backlinks are only as effective as the technical foundation beneath them. upranked.io's technical SEO service audits and fixes the infrastructure issues that are silently blocking your rankings in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.</p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Technical SEO</strong> is the optimization of a website's infrastructure — crawlability, indexation, page speed, Core Web Vitals, mobile performance, URL architecture, and structured data — so that search engines can efficiently discover and rank content. In the GCC, technical SEO must also address bilingual Arabic-English architecture and RTL layout compatibility.</p>
                </div>
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/08-magnifier-audit.svg"
                  alt="Technical SEO audit visualization showing site architecture, Core Web Vitals, crawlability, and indexation health for GCC businesses — upranked.io Dubai"
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Technical SEO Services for GCC Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical SEO FAQs — Dubai &amp; GCC</h2>
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
            <h2 className="text-4xl font-bold mb-6">Fix the Foundation <span className="text-accent">First</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will identify every technical issue silently blocking your rankings in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.</p>
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
