import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency Dubai UAE — Search Optimization for Dubai Businesses', description: 'SEO services for businesses in Dubai UAE — bilingual Arabic-English SEO, Google Business Profile, local and technical SEO by upranked.io. APEX Framework by Sama Alaa.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/gcc/uae/dubai', areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'UAE'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What makes Dubai SEO different from other markets?', acceptedAnswer: { '@type': 'Answer', text: "Dubai's SEO market is uniquely bilingual — a significant share of buyers search in Arabic while others search in English, and many switch between both depending on the query type. Dubai is also one of the GCC's most competitive SEO markets with high search volumes in real estate, healthcare, finance, and professional services. Effective Dubai SEO requires native Arabic keyword research, bilingual content, RTL technical architecture, and Google Business Profile optimization for the UAE market." } },
      { '@type': 'Question', name: 'How long does SEO take to show results in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Most Dubai businesses see measurable ranking improvements within 3–4 months of starting a structured SEO program, with significant organic traffic growth in months 4–8. Competitive sectors like real estate, healthcare, and finance may take 6–12 months to reach dominant positions. upranked.io focuses on commercial-intent keywords that drive leads and revenue — not vanity rankings.' } },
      { '@type': 'Question', name: 'Do you offer SEO services near me in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io is based in Dubai, UAE and serves businesses across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Sama Alaa personally oversees all Dubai SEO engagements. Book a free APEX Diagnostic call to discuss your Dubai SEO strategy.' } },
      { '@type': 'Question', name: 'Which Dubai sectors need SEO most urgently?', acceptedAnswer: { '@type': 'Answer', text: "Dubai's highest-ROI SEO sectors are: real estate (extremely high CPC and commercial intent), healthcare and medical clinics (near-me searches dominate), legal and financial services (high-value B2B queries), and industrial and logistics (B2B decision-maker research). upranked.io has specific APEX Framework adaptations for each sector." } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'GCC Markets', item: 'https://upranked.io/markets/gcc' }, { '@type': 'ListItem', position: 3, name: 'Dubai SEO', item: 'https://upranked.io/markets/gcc/uae/dubai' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Dubai Keyword Research', desc: 'Native Arabic and English keyword research for Dubai — covering UAE-specific search patterns, Dubai buyer vocabulary, and high-intent commercial queries across all priority Dubai sectors.' },
  { title: 'Google Business Profile Dubai', desc: 'GBP optimization for Dubai businesses — bilingual Arabic-English listing, Dubai address formatting, UAE phone format, local category selection, and review generation strategy.' },
  { title: 'Dubai Near-Me SEO', desc: 'Page and content optimization specifically targeting "near me in Dubai," "SEO agency Dubai," and location-modified queries — the highest-conversion query pattern in the UAE market.' },
  { title: 'Bilingual Dubai Content', desc: 'Arabic and English content written natively for Dubai buyers — separate keyword targeting for EN and AR search intent, UAE-specific examples and references, Dubai-market authority.' },
  { title: 'Dubai Technical SEO', desc: 'Technical audit and fixes for UAE-hosted websites — UAE CDN optimization, bilingual RTL architecture, hreflang for .ae domain, and Core Web Vitals for Dubai-based users.' },
  { title: 'Dubai Link Building', desc: 'Backlinks from UAE business publications, Dubai Chamber of Commerce, Khaleej Times digital, Arabian Business, Zawya, and sector-specific Dubai authority sources.' },
];

const faqs = [
  { q: 'What makes Dubai SEO different from other markets?', a: "Dubai's SEO market is uniquely bilingual — buyers search in Arabic or English depending on query type. Dubai is also one of the GCC's most competitive SEO markets with high search volumes in real estate, healthcare, finance, and professional services. Effective Dubai SEO requires native Arabic keyword research, bilingual content, RTL technical architecture, and GBP optimization for UAE." },
  { q: 'How long does SEO take to show results in Dubai?', a: 'Most Dubai businesses see measurable ranking improvements within 3–4 months, with significant organic traffic growth in months 4–8. Competitive sectors like real estate, healthcare, and finance may take 6–12 months to reach dominant positions. upranked.io focuses on commercial-intent keywords that drive leads and revenue.' },
  { q: 'Do you offer SEO services near me in Dubai?', a: 'Yes. upranked.io is based in Dubai, UAE and serves businesses across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Sama Alaa personally oversees all Dubai SEO engagements. Book a free APEX Diagnostic call to discuss your Dubai SEO strategy.' },
  { q: 'Which Dubai sectors need SEO most urgently?', a: "Dubai's highest-ROI SEO sectors are: real estate (extremely high CPC and commercial intent), healthcare and medical clinics (near-me searches), legal and financial services (high-value B2B queries), and industrial and logistics (B2B decision-maker research). upranked.io has specific APEX Framework adaptations for each sector." },
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

export default function DubaiMarket() {
  usePageMeta({ title: 'SEO Agency Dubai UAE — Bilingual Arabic-English Search Optimization', description: 'SEO agency in Dubai UAE. Bilingual Arabic-English SEO, Google Business Profile, local and technical SEO for Dubai businesses — APEX Framework by Sama Alaa at upranked.io.', schema, schemaId: 'dubai-market-schema' });
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
            <span className="text-accent">Dubai, UAE</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇦🇪 Dubai, UAE</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency Dubai UAE — <span className="gradient-text">Bilingual Arabic &amp; English Search Optimization</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Dubai is the GCC's most competitive digital market — high search volumes, bilingual buyers, and sophisticated competition in every major sector. upranked.io's APEX Framework delivers the bilingual SEO infrastructure Dubai businesses need to rank, convert, and grow.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Dubai SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Dubai</strong> is the UAE's largest city and the GCC's dominant commercial hub, with one of the highest digital search volumes in the Middle East. Dubai's buyer base is uniquely bilingual — Arabic-speaking UAE nationals and Arabic expatriates search primarily in Arabic, while a large international expat community searches in English. Effective Dubai SEO must address both audiences with native-quality content and separate optimization strategies.</p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Dubai SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Dubai SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-seo-consultant-dubai.webp"
              alt="Sama Alaa — SEO consultant serving Dubai and UAE businesses at upranked.io"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your Dubai SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sama Alaa</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io, Dubai UAE</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sama Alaa is a GCC SEO strategist based in Dubai with deep expertise across UAE, KSA, Kuwait, and Bahrain markets. The APEX Framework — upranked.io's structured SEO methodology — was developed from hands-on experience ranking competitive Dubai sectors including real estate, healthcare, financial services, and professional B2B.</p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
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
            <h2 className="text-4xl font-bold mb-6">Rank #1 in <span className="text-accent">Dubai</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your Dubai search presence and show you exactly what it takes to dominate your sector in UAE organic search.</p>
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
