import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Analytics & Reporting Dubai & GCC', description: 'SEO analytics, rank tracking, and performance reporting for businesses in Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK and New York USA — Google Search Console, revenue attribution, competitor tracking by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/seo/analytics', areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What SEO metrics actually matter for GCC businesses?', acceptedAnswer: { '@type': 'Answer', text: 'The metrics that matter for GCC businesses are: organic sessions from target markets (Dubai, Riyadh, Kuwait, Bahrain), keyword rankings for commercial-intent queries in each GCC country, click-through rates from Google Search Console, conversion rate from organic traffic, and revenue or lead attribution from SEO. Vanity metrics like total impressions or average position across all queries are misleading without market-level segmentation.' } },
      { '@type': 'Question', name: 'How do you track SEO rankings separately for Dubai and Riyadh?', acceptedAnswer: { '@type': 'Answer', text: 'GCC rank tracking requires location-specific tracking setup — separate rank tracking profiles for .ae (UAE), .sa (KSA), .kw (Kuwait), and .bh (Bahrain) Google domains, with city-level tracking for Dubai, Riyadh, Kuwait City, and Manama. This ensures you see actual SERP positions as local buyers see them, not averaged global positions that obscure GCC performance.' } },
      { '@type': 'Question', name: 'What is Google Search Console and why is it essential for SEO reporting?', acceptedAnswer: { '@type': 'Answer', text: 'Google Search Console (GSC) is a free Google tool that shows exactly which queries are bringing users to your site, which pages rank for which queries, your average position, and your click-through rate. For GCC businesses, GSC data is the most reliable source of organic performance data — upranked.io integrates GSC data into every monthly SEO report and uses it to guide keyword prioritization.' } },
      { '@type': 'Question', name: 'How does upranked.io report on SEO performance for clients in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'upranked.io delivers monthly SEO performance reports covering: GCC keyword ranking movements, organic traffic by market, GSC query data, conversion and revenue attribution, competitor ranking changes, and the specific actions taken and planned. Reports are designed to show business impact — not just traffic numbers — so decision-makers in Dubai, Riyadh, and Kuwait can clearly see SEO ROI.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://upranked.io/industries' }, { '@type': 'ListItem', position: 3, name: 'SEO Analytics', item: 'https://upranked.io/seo/analytics' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'GCC Rank Tracking', desc: 'Location-specific keyword rank tracking for Dubai, Riyadh, Kuwait City, and Manama — separate Google domain profiles (.ae, .sa, .kw, .bh) showing real SERP positions as local buyers see them.' },
  { title: 'Google Search Console Integration', desc: 'GSC data analysis covering queries, impressions, CTR, and position by market — segmented by GCC country and language to separate Arabic vs English performance.' },
  { title: 'Revenue & Lead Attribution', desc: 'Connecting organic traffic to business outcomes — form submissions, calls, WhatsApp contacts, and revenue — so SEO impact is measured in business results, not just rankings.' },
  { title: 'Custom GCC Dashboards', desc: 'Market-segmented dashboards built in Looker Studio or client-preferred tools — showing Dubai, KSA, Kuwait, and Bahrain performance side by side with competitor benchmarks.' },
  { title: 'Competitor Rank Monitoring', desc: 'Track how your rankings move relative to named competitors in Dubai, Riyadh, Kuwait, and Bahrain — identifying opportunities when competitors lose ground on target queries.' },
  { title: 'Bilingual Analytics Separation', desc: 'Separate performance reporting for English and Arabic pages — ensuring Arabic SEO progress is tracked independently and not diluted by EN page metrics.' },
];

const faqs = [
  { q: 'What SEO metrics actually matter for GCC businesses?', a: 'The metrics that matter are: organic sessions from target GCC markets, keyword rankings for commercial-intent queries by country, GSC click-through rates, conversion rate from organic, and revenue or lead attribution. Total impressions and averaged global position are misleading without market-level segmentation by Dubai, Riyadh, Kuwait, and Bahrain.' },
  { q: 'How do you track SEO rankings separately for Dubai and Riyadh?', a: 'GCC rank tracking requires separate profiles for .ae, .sa, .kw, and .bh Google domains with city-level tracking for each priority market. This shows actual SERP positions as local buyers see them — not averaged global positions that obscure real GCC performance.' },
  { q: 'What is Google Search Console and why is it essential for SEO reporting?', a: 'Google Search Console shows which queries bring users to your site, which pages rank, average position, and CTR. For GCC businesses, GSC data is the most reliable organic performance source — upranked.io integrates GSC into every monthly report and uses it to guide keyword prioritization.' },
  { q: 'How does upranked.io report on SEO performance for clients in Dubai?', a: 'Monthly SEO reports cover: GCC keyword ranking movements, organic traffic by market, GSC query data, conversion attribution, competitor changes, and actions taken. Reports show business impact — not just traffic — so decision-makers in Dubai, Riyadh, and Kuwait can clearly see SEO ROI.' },
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

export default function SEOAnalytics() {
  usePageMeta({ title: 'SEO Analytics & Reporting Dubai & GCC — Rank Tracking & Revenue Attribution', description: 'SEO analytics and reporting for Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London & New York. GCC rank tracking, GSC integration, revenue attribution — APEX Framework by Sama Alaa.', schema, schemaId: 'seo-analytics-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6"><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span className="mx-2 text-border">/</span><Link href="/seo/"><a className="hover:text-accent transition-colors">SEO</a></Link><span className="mx-2 text-border">/</span><span className="text-accent">SEO Analytics</span></nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">SEO Analytics</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Analytics Dubai &amp; GCC — <span className="gradient-text">Rank Tracking &amp; Revenue Attribution</span></h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Rankings without revenue attribution are vanity metrics. upranked.io tracks SEO performance at the market level — separate rank tracking for Dubai, Riyadh, Kuwait, and Bahrain — and connects organic visibility directly to business outcomes: leads, calls, and revenue.</p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">SEO analytics</strong> is the measurement and interpretation of organic search performance — keyword rankings, organic traffic, click-through rates, and conversion attribution — to quantify the business impact of SEO investment. For GCC businesses, effective SEO analytics requires market-level segmentation across Dubai, Riyadh, Kuwait City, and Manama, and separate tracking of English and Arabic page performance.</p>
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
                  src="/heroes/13-seo-analytics.svg"
                  alt="SEO analytics dashboard tracking organic traffic growth, keyword rankings, and revenue attribution for Dubai and GCC businesses — upranked.io"
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">SEO Analytics Services for GCC Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">SEO Analytics FAQs — Dubai &amp; GCC</h2>
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
            <h2 className="text-4xl font-bold mb-6">Measure <span className="text-accent">What Matters</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your current analytics setup and show you exactly what your SEO is — and is not — delivering across Dubai, Riyadh, Kuwait, Bahrain, London, and New York.</p>
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
