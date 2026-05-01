import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency Manama Bahrain — SEO for Bahrain Businesses', description: 'SEO services for businesses in Manama and Bahrain — Arabic-English SEO, Google Business Profile, financial services and B2B SEO by upranked.io. APEX Framework by Sam Hamouda.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/gcc/bahrain', areaServed: ['Manama', 'Bahrain'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What makes Bahrain a strategic SEO market for GCC expansion?', acceptedAnswer: { '@type': 'Answer', text: "Bahrain's compact market has outsized importance for businesses using it as a GCC expansion base — particularly in financial services, fintech, and professional B2B. Bahrain's regulatory environment makes it a preferred first market for international businesses entering the GCC, and a strong Bahrain SEO presence builds credibility that transfers across the region. Bahrain also has a bilingual buyer base leaning more Arabic than UAE but less than KSA." } },
      { '@type': 'Question', name: 'Which sectors benefit most from SEO in Bahrain?', acceptedAnswer: { '@type': 'Answer', text: 'Financial services and fintech have the highest SEO ROI in Bahrain — Bahrain is a licensed financial hub and searches for banking, investment, and fintech services have very high commercial intent. Professional B2B services, healthcare, and real estate also benefit significantly. Bahrain\'s relatively smaller competitive SEO landscape means businesses can rank faster than in Dubai or Riyadh with less overall investment.' } },
      { '@type': 'Question', name: 'Do you offer SEO services near me in Manama?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io serves businesses in Manama and across Bahrain. All Bahrain engagements include Bahrain-specific Arabic keyword research, BH-targeted Google Business Profile optimization, and Bahrain Chamber of Commerce and local directory citation building. Book a free APEX Diagnostic call for your Bahrain SEO strategy.' } },
      { '@type': 'Question', name: 'How long does SEO take to show results in Bahrain?', acceptedAnswer: { '@type': 'Answer', text: "Bahrain's smaller competitive SEO landscape means ranking improvements typically appear faster than in larger GCC markets like Dubai or Riyadh. Most Bahrain businesses see measurable improvements within 2–3 months and significant ranking shifts in months 3–6. The relative lack of sophisticated SEO competition in Bahrain creates significant ranking opportunities for businesses that invest early." } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'GCC Markets', item: 'https://upranked.io/markets/gcc' }, { '@type': 'ListItem', position: 3, name: 'Bahrain SEO', item: 'https://upranked.io/markets/gcc/bahrain' }] },
    { '@type': 'Person', name: 'Sam Hamouda', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Bahrain Arabic-English SEO', desc: 'Bilingual SEO strategy for Bahrain — Arabic-first content for local Arabic-speaking buyers and English content for Bahrain\'s international financial and business community.' },
  { title: 'Financial Services SEO Bahrain', desc: 'Specialized SEO for Bahrain\'s regulated financial sector — banking, investment, insurance, and fintech content strategies aligned with CBB regulatory context and high-intent commercial queries.' },
  { title: 'Manama Google Business Profile', desc: 'GBP optimization for Bahrain businesses — Manama address formatting, BH phone number format, bilingual Arabic-English listing, and Bahrain-specific category selection.' },
  { title: 'Bahrain Local Citations', desc: 'NAP consistency across Bahrain business directories — Bahrain Chamber of Commerce, Bahrain Yellow Pages, and local citation sources specific to the Manama business community.' },
  { title: 'Bahrain B2B SEO', desc: 'Professional services and B2B SEO for Bahrain businesses targeting GCC procurement decision-makers — long-form expertise content, case study pages, and commercial-intent query targeting.' },
  { title: 'GCC Expansion SEO', desc: 'Bahrain as a beachhead: domain authority building that scales across the GCC — establishing regional credibility that transfers to UAE, KSA, and Kuwait search rankings.' },
];

const faqs = [
  { q: 'What makes Bahrain a strategic SEO market for GCC expansion?', a: "Bahrain's compact market has outsized importance for businesses using it as a GCC expansion base — particularly in financial services, fintech, and professional B2B. Bahrain's regulatory environment makes it a preferred first market for international businesses entering the GCC, and strong Bahrain SEO presence builds credibility that transfers across the region." },
  { q: 'Which sectors benefit most from SEO in Bahrain?', a: "Financial services and fintech have the highest SEO ROI in Bahrain — Bahrain is a licensed financial hub with very high commercial intent searches. Professional B2B services, healthcare, and real estate also benefit significantly. Bahrain's relatively smaller competitive SEO landscape means businesses can rank faster than in Dubai or Riyadh with less overall investment." },
  { q: 'Do you offer SEO services near me in Manama?', a: 'Yes. upranked.io serves businesses in Manama and across Bahrain. All Bahrain engagements include Bahrain-specific Arabic keyword research, BH-targeted GBP optimization, and Bahrain Chamber of Commerce citation building. Book a free APEX Diagnostic call for your Bahrain SEO strategy.' },
  { q: 'How long does SEO take to show results in Bahrain?', a: "Bahrain's smaller competitive SEO landscape means ranking improvements typically appear faster than in larger GCC markets. Most Bahrain businesses see measurable improvements within 2–3 months and significant ranking shifts in months 3–6. The relative lack of sophisticated SEO competition creates significant early-mover ranking opportunities." },
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

export default function BahrainMarket() {
  usePageMeta({ title: 'SEO Agency Manama Bahrain — Arabic & English SEO for Bahrain Businesses', description: 'SEO agency for Manama and Bahrain. Financial services SEO, Arabic-English bilingual content, Google Business Profile — APEX Framework by Sam Hamouda at upranked.io.', schema, schemaId: 'bahrain-market-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <nav className="text-sm text-text-secondary mb-6">
            <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
            <span className="mx-2 text-border">/</span>
            <Link href="/markets/gcc"><a className="hover:text-accent transition-colors">GCC Markets</a></Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-accent">Manama, Bahrain</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇧🇭 Manama, Bahrain</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency Manama Bahrain — <span className="gradient-text">Arabic &amp; English SEO for Bahrain Businesses</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Bahrain's compact but high-value market rewards early SEO movers — less competition than Dubai, faster ranking timelines, and a strategic gateway to wider GCC growth. upranked.io builds bilingual SEO foundations for Bahrain businesses that scale across the GCC.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Bahrain SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Manama</strong> is Bahrain's capital and the GCC's licensed financial services hub. Bahrain punches above its weight in financial services, fintech, and professional B2B — all sectors with high search-based buyer research. Bahrain's buyer base leans more Arabic than UAE but less than KSA, and its regulatory environment makes it a preferred GCC entry point for international businesses seeking regional SEO credibility.</p>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Bahrain SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Bahrain SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
              alt="Sam Hamouda — GCC SEO strategist specializing in Bahrain and Manama bilingual SEO"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your Bahrain SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sam Hamouda</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sam Hamouda is a GCC SEO strategist with deep expertise across Bahrain, UAE, KSA, and Kuwait markets. The APEX Framework — upranked.io's structured SEO methodology — builds bilingual SEO foundations for Bahrain businesses that establish search dominance in Manama and scale credibility across the wider GCC.</p>
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
            <h2 className="text-4xl font-bold mb-6">Own Bahrain Search <span className="text-accent">Before Your Competitors Do</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will show you exactly where Bahrain SEO opportunities exist in your sector — and what it takes to establish search dominance in Manama before the market gets more competitive.</p>
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
