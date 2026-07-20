import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Schema Markup & Structured Data Dubai & GCC', description: '@graph JSON-LD schema markup and structured data implementation for businesses in Dubai, Riyadh, Kuwait, Bahrain, London and New York — rich results, FAQPage, LocalBusiness, MedicalOrganization by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/seo/schema', areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is schema markup and why does it matter for GCC businesses?', acceptedAnswer: { '@type': 'Answer', text: "Schema markup (structured data) is code added to a website that helps search engines understand the content and context of each page — enabling rich results like FAQ dropdowns, review stars, breadcrumbs, and business information panels in Google search. For businesses in Dubai, Riyadh, Kuwait, and Bahrain, schema markup is a competitive differentiator since most local competitors don't implement it correctly." } },
      { '@type': 'Question', name: 'What schema types does upranked.io implement for GCC businesses?', acceptedAnswer: { '@type': 'Answer', text: 'upranked.io implements @graph JSON-LD schema for: Organization, LocalBusiness, MedicalOrganization (for clinics and hospitals), Service, FAQPage, Person (for founder and key staff), BreadcrumbList, Product, and Article. Each schema type is selected based on your business type and target SERP features in Dubai, Riyadh, Kuwait, or Bahrain.' } },
      { '@type': 'Question', name: 'Does schema markup directly improve rankings in Dubai?', acceptedAnswer: { '@type': 'Answer', text: "Schema markup is not a direct ranking factor, but it enables rich results (FAQ dropdowns, knowledge panels, star ratings) that dramatically increase click-through rates in Google search — which is a positive ranking signal. For businesses in Dubai's competitive sectors, a 30-50% CTR increase from rich results translates directly to more traffic without needing to rank higher." } },
      { '@type': 'Question', name: 'Do you implement Arabic schema markup for bilingual GCC websites?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io implements schema markup separately for EN and AR versions of GCC websites — ensuring Arabic-language pages have correctly localized structured data, Arabic business name, address, and phone number (NAP) in the correct format, and hreflang signals aligned with schema language declarations.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://upranked.io/industries' }, { '@type': 'ListItem', position: 3, name: 'Schema Markup', item: 'https://upranked.io/seo/schema' }] },
    { '@type': 'Person', name: 'Sam', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: '@graph JSON-LD Implementation', desc: 'Full @graph schema architecture connecting Organization, Service, Person, FAQPage, and BreadcrumbList nodes — the highest-fidelity structured data approach Google recommends.' },
  { title: 'FAQPage Rich Results', desc: 'FAQ schema markup that creates expandable question-answer dropdowns directly in Google search results — increasing CTR and dominating more SERP real estate for Dubai and GCC queries.' },
  { title: 'LocalBusiness & MedicalOrganization', desc: 'Business type-specific schema for clinics, hospitals, professional services, and industrial B2B companies — with correct GCC address formatting, opening hours, and service area declarations.' },
  { title: 'Bilingual Schema (EN + AR)', desc: 'Separate schema implementations for English and Arabic website versions — ensuring Google correctly understands both language versions of your GCC business pages.' },
  { title: 'Rich Results Testing & Validation', desc: 'Schema validated against Google Rich Results Test and Schema.org validator — eliminating errors that prevent structured data from generating rich results in search.' },
  { title: 'Breadcrumb & Sitelinks Schema', desc: 'BreadcrumbList implementation for clean sitelink displays in Google search — helping buyers navigate your service hierarchy from the SERP before even clicking.' },
];

const faqs = [
  { q: 'What is schema markup and why does it matter for GCC businesses?', a: "Schema markup (structured data) is code added to a website that helps search engines understand the content and context of each page — enabling rich results like FAQ dropdowns, review stars, breadcrumbs, and business information panels. For businesses in Dubai, Riyadh, Kuwait, and Bahrain, schema markup is a competitive differentiator since most local competitors don't implement it correctly." },
  { q: 'What schema types does upranked.io implement for GCC businesses?', a: 'upranked.io implements @graph JSON-LD schema for: Organization, LocalBusiness, MedicalOrganization, Service, FAQPage, Person, BreadcrumbList, and Article. Each schema type is selected based on your business type and target SERP features in Dubai, Riyadh, Kuwait, or Bahrain.' },
  { q: 'Does schema markup directly improve rankings in Dubai?', a: "Schema markup enables rich results (FAQ dropdowns, knowledge panels, star ratings) that dramatically increase click-through rates in Google search. For businesses in Dubai's competitive sectors, a 30–50% CTR increase from rich results translates directly to more traffic without needing to rank higher." },
  { q: 'Do you implement Arabic schema markup for bilingual GCC websites?', a: 'Yes. upranked.io implements schema markup separately for EN and AR versions of GCC websites — ensuring Arabic-language pages have correctly localized structured data, Arabic business NAP in the correct format, and hreflang signals aligned with schema language declarations.' },
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

export default function SchemaSEO() {
  usePageMeta({ title: 'Schema Markup Dubai GCC | Rich Results SEO', description: 'Schema markup and @graph JSON-LD implementation for Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London & New York. FAQPage, LocalBusiness, MedicalOrg rich results by Sam.', schema, schemaId: 'schema-seo-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6"><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span className="mx-2 text-border">/</span><Link href="/seo/"><a className="hover:text-accent transition-colors">SEO</a></Link><span className="mx-2 text-border">/</span><span className="text-accent">Schema Markup</span></nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Schema Markup</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Schema Markup &amp; Structured Data — <span className="gradient-text">Dubai &amp; GCC Rich Results SEO</span></h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Most GCC businesses leave rich results on the table. Correct @graph JSON-LD schema markup creates FAQ dropdowns, business panels, and sitelinks directly in Google search — dominating more SERP real estate in Dubai, Riyadh, Kuwait, Bahrain, London, and New York without ranking higher.</p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Schema markup</strong> (structured data) is standardized code — most commonly @graph JSON-LD — added to web pages to help search engines understand the content type, business context, and entity relationships. Correct schema implementation enables Google rich results including FAQ accordions, review stars, breadcrumbs, and business information panels — giving GCC businesses more visible, clickable SERP presence.</p>
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
                  src="/heroes/12-schema-markup.svg"
                  alt="Schema markup JSON-LD structured data visualization showing rich result types for GCC businesses — FAQ, LocalBusiness, Service schema by upranked.io Dubai"
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Schema Markup Services for GCC Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Schema Markup FAQs — Dubai &amp; GCC</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
          <div className="mt-10 p-5 bg-dark-gray border border-accent/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Related Reading</p>
              <p className="text-white font-semibold text-sm mb-1">Schema Markup for GCC Businesses — Rich Results Guide 2026</p>
              <p className="text-text-secondary text-xs leading-relaxed">Step-by-step schema markup implementation for Dubai, Riyadh, and GCC businesses — with real JSON-LD examples for FAQPage, LocalBusiness, and MedicalOrganization.</p>
            </div>
            <Link href="/blog/schema-markup-gcc-rich-results/"><a className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap inline-flex items-center gap-2">Read Guide <ArrowRight className="w-4 h-4" /></a></Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/favicon.svg"
              alt="Sam — Founder and GCC SEO Strategist at upranked.io, Dubai UAE"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Written &amp; Overseen By</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam is a GCC SEO strategist with deep expertise across UAE, KSA, Kuwait, and Bahrain markets. The APEX Framework — upranked.io's structured SEO methodology — was developed from hands-on experience ranking competitive GCC sectors including financial services, healthcare, industrial, and professional B2B.</p>
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
            <h2 className="text-4xl font-bold mb-6">Unlock <span className="text-accent">Rich Results</span> in Google</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your schema implementation and show exactly which rich results you are missing in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.</p>
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
