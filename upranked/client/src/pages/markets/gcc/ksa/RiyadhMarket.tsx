import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency Riyadh KSA — Arabic SEO for Saudi Arabia Businesses', description: 'SEO services for businesses in Riyadh and across Saudi Arabia — Arabic-first SEO, Vision 2030 sectors, Google Maps and local SEO by upranked.io. APEX Framework by Sam.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/gcc/ksa/riyadh/', areaServed: ['Riyadh', 'Jeddah', 'Makkah', 'Saudi Arabia'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'Why is Arabic SEO more important in Saudi Arabia than in UAE?', acceptedAnswer: { '@type': 'Answer', text: 'Saudi Arabia has a significantly higher proportion of Arabic-first searchers than UAE. KSA nationals make up a larger share of the buyer base, and Arabic is the dominant search language across most commercial sectors. In Riyadh and Jeddah, English-only SEO can miss 50–70% of potential organic traffic depending on the sector. upranked.io\'s KSA SEO strategy is Arabic-first by default.' } },
      { '@type': 'Question', name: 'What are the highest-growth SEO sectors in Riyadh under Vision 2030?', acceptedAnswer: { '@type': 'Answer', text: "Saudi Arabia's Vision 2030 is driving explosive growth in entertainment, tourism, healthcare, technology, and professional services sectors — all of which have rapidly growing search volumes in Riyadh and Jeddah. upranked.io tracks Vision 2030 sector development and adapts content strategies to emerging high-volume KSA search queries as the market evolves." } },
      { '@type': 'Question', name: 'Do you offer SEO services near me in Riyadh?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io serves businesses in Riyadh, Jeddah, Makkah, and across Saudi Arabia. While upranked.io is headquartered in Dubai, all KSA client engagements are managed directly by Sam with deep KSA market knowledge and Arabic-native SEO specialists. Book a free APEX Diagnostic call for Riyadh SEO strategy.' } },
      { '@type': 'Question', name: 'How is SEO in Saudi Arabia different from SEO in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'KSA SEO differs from Dubai SEO in three key ways: (1) Arabic is the dominant search language in KSA vs more balanced EN/AR in Dubai; (2) KSA has different sector dynamics — higher focus on retail, hospitality, and government-adjacent B2B; (3) KSA search volumes are higher in absolute terms as the largest GCC economy. Google Business Profile setup also differs slightly for KSA address formatting.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'GCC Markets', item: 'https://upranked.io/markets/gcc/' }, { '@type': 'ListItem', position: 3, name: 'Riyadh SEO', item: 'https://upranked.io/markets/gcc/ksa/riyadh/' }] },
    { '@type': 'Person', name: 'Sam', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Arabic-First KSA Keyword Research', desc: 'Native Arabic keyword research for Riyadh and Jeddah — KSA-specific vocabulary, MSA vs Gulf dialect patterns, and Vision 2030 sector search query mapping.' },
  { title: 'Saudi Google Business Profile', desc: 'GBP setup and optimization for KSA businesses — KSA address formatting, Arabic business name, Saudi phone format, and KSA-specific local category selection.' },
  { title: 'Vision 2030 Sector SEO', desc: 'Content strategies aligned with KSA\'s fastest-growing sectors — entertainment, tourism, healthcare, technology, and professional services emerging under Vision 2030.' },
  { title: 'Riyadh Local SEO', desc: 'City-specific local SEO for Riyadh — near-me optimization, Riyadh-specific landing pages, local citation building across Saudi business directories and Chamber of Commerce.' },
  { title: 'KSA Technical SEO', desc: 'Technical SEO for Saudi Arabia-hosted or -targeted sites — Arabic RTL architecture, .sa domain optimization, Saudi CDN configuration, and bilingual hreflang implementation.' },
  { title: 'Arabic Press & KSA Media', desc: 'Link building from Saudi business media — Arab News digital, Saudi Gazette, Asharq Al-Awsat, and KSA sector-specific publications building Saudi domain authority.' },
];

const faqs = [
  { q: 'Why is Arabic SEO more important in Saudi Arabia than in UAE?', a: "Saudi Arabia has a higher proportion of Arabic-first searchers than UAE. KSA nationals make up a larger share of the buyer base, and Arabic is the dominant search language across most commercial sectors. English-only SEO can miss 50–70% of potential organic traffic in Riyadh and Jeddah. upranked.io's KSA SEO strategy is Arabic-first by default." },
  { q: 'What are the highest-growth SEO sectors in Riyadh under Vision 2030?', a: "Vision 2030 is driving growth in entertainment, tourism, healthcare, technology, and professional services — all with rapidly growing search volumes in Riyadh and Jeddah. upranked.io tracks Vision 2030 sector development and adapts content strategies to emerging high-volume KSA search queries." },
  { q: 'Do you offer SEO services near me in Riyadh?', a: 'Yes. upranked.io serves businesses in Riyadh, Jeddah, Makkah, and across Saudi Arabia. All KSA client engagements are managed directly by Sam with Arabic-native SEO specialists. Book a free APEX Diagnostic call for your Riyadh SEO strategy.' },
  { q: 'How is SEO in Saudi Arabia different from SEO in Dubai?', a: 'KSA SEO differs from Dubai SEO in three key ways: (1) Arabic is the dominant search language in KSA vs more balanced EN/AR in Dubai; (2) KSA has different sector dynamics — higher focus on retail, hospitality, and government-adjacent B2B; (3) KSA has higher absolute search volumes as the largest GCC economy.' },
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

export default function RiyadhMarket() {
  usePageMeta({ title: 'Riyadh SEO Agency KSA — Arabic-First SEO for Saudi Businesses | upranked.io', description: 'SEO agency for Riyadh and Saudi Arabia. Arabic-first keyword research, Vision 2030 sector content, Google Business Profile — APEX Framework by Sam at upranked.io.', schema, schemaId: 'riyadh-market-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <nav className="text-sm text-text-secondary mb-6">
            <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
            <span className="mx-2 text-border">/</span>
            <Link href="/markets/gcc/"><a className="hover:text-accent transition-colors">GCC Markets</a></Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">Riyadh, KSA</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇸🇦 Riyadh, KSA</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency Riyadh KSA — <span className="gradient-text">Arabic SEO for Saudi Arabia Businesses</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Saudi Arabia is the GCC's largest economy and most Arabic-first digital market. upranked.io's APEX Framework delivers Arabic-first SEO for Riyadh and KSA businesses — native Arabic keyword research, Vision 2030 sector content strategies, and full bilingual technical architecture.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Riyadh SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Riyadh</strong> is Saudi Arabia's capital and the GCC's largest city by population, with a rapidly digitizing economy driven by Vision 2030. KSA has the GCC's highest proportion of Arabic-first searchers, making native Arabic SEO a critical investment. Riyadh's commercial sectors — healthcare, retail, professional services, entertainment — all have high and growing search volumes with strong commercial intent.</p>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Riyadh &amp; KSA SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Riyadh SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
              alt="Sam — GCC SEO strategist specializing in Saudi Arabia and Riyadh KSA markets"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your KSA SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam is a GCC SEO strategist with deep expertise across KSA, UAE, Kuwait, and Bahrain markets. All KSA engagements are managed directly by Sam with Arabic-native SEO specialists — combining strategic oversight with native Arabic market knowledge for Riyadh, Jeddah, and across Saudi Arabia.</p>
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
            <h2 className="text-4xl font-bold mb-6">Lead Your Sector in <span className="text-accent">Saudi Arabia</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your KSA search presence and show you exactly how much Arabic search traffic you are missing in Riyadh, Jeddah, and across Saudi Arabia. <Link href="/blog/riyadh-seo-guide-2026/"><a className="text-accent hover:underline">Read the complete Riyadh SEO guide →</a></Link></p>
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
