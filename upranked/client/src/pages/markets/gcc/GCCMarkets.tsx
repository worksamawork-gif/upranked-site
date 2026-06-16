import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { usePageMeta } from '../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency GCC — Gulf Cooperation Council SEO Services', description: 'SEO services for businesses across the Gulf Cooperation Council — Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain. APEX Framework bilingual SEO by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/gcc/', areaServed: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Jeddah', 'Kuwait City', 'Manama'] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://upranked.io/markets/gcc/' }, { '@type': 'ListItem', position: 3, name: 'GCC', item: 'https://upranked.io/markets/gcc/' }] },
    { '@type': 'Person', name: 'Sam', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const markets = [
  { name: 'Dubai, UAE', flag: '🇦🇪', href: '/markets/gcc/uae/dubai', desc: 'The GCC\'s most competitive digital market. Bilingual EN/AR SEO for Dubai businesses across real estate, healthcare, finance, and professional services.', stats: ['3.4M+ monthly searches', 'Bilingual EN/AR', 'Google Maps pack priority'] },
  { name: 'Riyadh, KSA', flag: '🇸🇦', href: '/markets/gcc/ksa/riyadh', desc: 'Saudi Arabia\'s largest market with the highest proportion of Arabic-first searchers in the GCC. Arabic SEO is non-negotiable for KSA growth.', stats: ['Arabic-first market', 'Vision 2030 growth sectors', 'High commercial intent'] },
  { name: 'Kuwait City', flag: '🇰🇼', href: '/markets/gcc/kuwait', desc: 'High per-capita income market with strong Arabic-language search behavior. Kuwait buyers research extensively before purchasing — content depth wins.', stats: ['High-value consumer market', 'Arabic-dominant search', 'Professional services focus'] },
  { name: 'Manama, Bahrain', flag: '🇧🇭', href: '/markets/gcc/bahrain', desc: 'Bahrain\'s compact market punches above its weight in financial services and professional B2B. A strategic GCC beachhead for regional expansion.', stats: ['Financial services hub', 'B2B-heavy query mix', 'Regional expansion gateway'] },
];

export default function GCCMarkets() {
  usePageMeta({ title: 'GCC SEO Agency — Dubai, Riyadh, Kuwait & Bahrain | upranked.io', description: 'Expert SEO across the Gulf Cooperation Council — bilingual Arabic-English strategies for Dubai UAE, Riyadh KSA, Kuwait City, and Manama Bahrain. APEX Framework by Sam at upranked.io.', schema, schemaId: 'gcc-markets-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <nav className="text-sm text-text-secondary mb-6">
            <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">GCC Markets</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">GCC Markets</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency GCC — <span className="gradient-text">Dubai, Riyadh, Kuwait &amp; Bahrain</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">The GCC is a high-intent, bilingual digital market where English-only SEO misses up to 60% of potential organic traffic. upranked.io's APEX Framework delivers bilingual Arabic-English SEO across all four GCC priority markets — built for the region, not adapted from Western templates.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">GCC SEO Overview</p>
              <p className="text-text-secondary text-sm leading-relaxed">The <strong className="text-white">Gulf Cooperation Council (GCC)</strong> comprises six countries — UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, and Oman. upranked.io currently serves four priority GCC markets: Dubai UAE, Riyadh KSA, Kuwait City, and Manama Bahrain. Each market has distinct search behavior, language preferences, and buyer demographics requiring market-specific SEO strategy.</p>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">GCC Priority Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {markets.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{m.flag}</span>
                  <h3 className="text-xl font-bold text-white">{m.name}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{m.desc}</p>
                <ul className="space-y-1 mb-5">
                  {m.stats.map(s => <li key={s} className="flex items-center gap-2 text-sm text-text-secondary"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />{s}</li>)}
                </ul>
                <Link href={m.href}><a className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">View {m.name} SEO <ArrowRight className="w-4 h-4" /></a></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why the GCC Requires a Different SEO Approach</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>The GCC's digital search environment differs fundamentally from Western markets. Arabic-language search behavior, bilingual buyer journeys, and market-specific regulatory contexts mean that SEO strategies built for London or New York underperform systematically in Dubai and Riyadh.</p>
            <p>upranked.io's APEX Framework was built from the ground up for GCC conditions — native Arabic keyword research, RTL technical architecture, hreflang implementation, and bilingual content strategies that address how GCC buyers actually search, not how Western frameworks assume they do.</p>
            <p>Every GCC engagement covers all four priority markets simultaneously, ensuring businesses benefit from cross-market authority building and consistent brand signals across Dubai, Riyadh, Kuwait City, and Manama.</p>
            <p>For market-specific SEO strategy guides, see: <Link href="/blog/dubai-seo-guide-2026/"><a className="text-accent hover:underline">Dubai SEO 2026</a></Link>, <Link href="/blog/riyadh-seo-guide-2026/"><a className="text-accent hover:underline">Riyadh SEO 2026</a></Link>, and <Link href="/blog/kuwait-seo-guide-2026/"><a className="text-accent hover:underline">Kuwait SEO 2026</a></Link>.</p>
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
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">About the Strategist</p>
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
            <h2 className="text-4xl font-bold mb-6">Dominate <span className="text-accent">GCC Search</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will show you exactly where your GCC search presence stands across Dubai, Riyadh, Kuwait, and Bahrain — and what it takes to lead your sector.</p>
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
