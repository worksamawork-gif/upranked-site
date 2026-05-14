import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Agency Kuwait City — Arabic SEO for Kuwait Businesses', description: 'SEO services for businesses in Kuwait City and Kuwait — Arabic SEO, Google Business Profile, local citations and bilingual content by upranked.io. APEX Framework by Sama Alaa.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/markets/gcc/kuwait', areaServed: ['Kuwait City', 'Kuwait'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is the search behavior of Kuwait buyers online?', acceptedAnswer: { '@type': 'Answer', text: "Kuwait has one of the GCC's most Arabic-dominant search behaviors for consumer-facing queries. Kuwaiti buyers research extensively before purchasing — especially in high-value categories like real estate, vehicles, electronics, and professional services. This research-heavy behavior makes long-form content and in-depth FAQ pages particularly effective for Kuwait SEO compared to other GCC markets." } },
      { '@type': 'Question', name: 'Do you offer SEO services near me in Kuwait City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. upranked.io serves businesses in Kuwait City and across Kuwait. All Kuwait engagements include Kuwait-specific Arabic keyword research, KW-targeted Google Business Profile optimization, and Kuwait business directory citation building. Book a free APEX Diagnostic call to discuss your Kuwait SEO strategy.' } },
      { '@type': 'Question', name: 'Which sectors have the highest SEO ROI in Kuwait?', acceptedAnswer: { '@type': 'Answer', text: 'Kuwait\'s highest-ROI SEO sectors are: real estate and property (very high CPC and commercial intent), automotive (high-volume Arabic-language research queries), healthcare and private clinics, retail and e-commerce, and financial services. B2B professional services also benefit significantly from SEO in Kuwait as procurement decision-makers actively research online.' } },
      { '@type': 'Question', name: 'Is Google Business Profile optimization important for Kuwait businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Google Maps and local pack results are heavily used in Kuwait for finding businesses near me — especially for healthcare, food and beverage, automotive services, and professional services. A correctly optimized Arabic-English GBP for Kuwait, with KW phone format and Kuwait City address, is essential for local pack rankings in Kuwait City.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'GCC Markets', item: 'https://upranked.io/markets/gcc' }, { '@type': 'ListItem', position: 3, name: 'Kuwait SEO', item: 'https://upranked.io/markets/gcc/kuwait' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Kuwait Arabic Keyword Research', desc: 'Native Arabic keyword research for Kuwait City — Gulf dialect awareness, Kuwait-specific buyer vocabulary, and high-intent commercial query mapping across Kuwait priority sectors.' },
  { title: 'Kuwait Google Business Profile', desc: 'GBP optimization for Kuwait businesses — Arabic-English bilingual listing, Kuwait address and phone formatting, local category selection, and Kuwait review generation strategy.' },
  { title: 'Kuwait Local Citations', desc: 'NAP consistency across Kuwait business directories — Kuwait Yellow Pages, Kuwait Chamber of Commerce listings, and local citation sources specific to the Kuwait market.' },
  { title: 'Long-Form Kuwait Content', desc: "Research-depth content matching Kuwait buyers' extensive pre-purchase research behavior — in-depth Arabic and English guides, comparison content, and FAQ-rich service pages." },
  { title: 'Kuwait Near-Me SEO', desc: 'Near-me and Kuwait City location-modified search optimization — ensuring visibility for "near me in Kuwait City" and sector + location query combinations used by Kuwait buyers.' },
  { title: 'Kuwait Link Building', desc: 'Backlinks from Kuwait business publications, Al-Qabas digital, Kuwait Times, Arab Times, and Kuwait sector-specific authority sources building Kuwait domain credibility.' },
];

const faqs = [
  { q: 'What is the search behavior of Kuwait buyers online?', a: "Kuwait has one of the GCC's most Arabic-dominant search behaviors for consumer-facing queries. Kuwaiti buyers research extensively before purchasing — especially in real estate, vehicles, electronics, and professional services. This research-heavy behavior makes long-form content and FAQ-rich pages particularly effective for Kuwait SEO." },
  { q: 'Do you offer SEO services near me in Kuwait City?', a: 'Yes. upranked.io serves businesses in Kuwait City and across Kuwait. All Kuwait engagements include Kuwait-specific Arabic keyword research, KW-targeted GBP optimization, and Kuwait business directory citation building. Book a free APEX Diagnostic call for your Kuwait SEO strategy.' },
  { q: 'Which sectors have the highest SEO ROI in Kuwait?', a: "Kuwait's highest-ROI SEO sectors are: real estate (high CPC and commercial intent), automotive (high-volume Arabic research queries), healthcare and private clinics, retail and e-commerce, and financial services. B2B professional services also benefit significantly as procurement decision-makers research online." },
  { q: 'Is Google Business Profile optimization important for Kuwait businesses?', a: 'Yes. Google Maps local pack results are heavily used in Kuwait for finding businesses nearby — especially for healthcare, food and beverage, automotive services, and professional services. A correctly optimized Arabic-English GBP with KW phone format and Kuwait City address is essential for local pack rankings.' },
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

export default function KuwaitMarket() {
  usePageMeta({ title: 'SEO Agency Kuwait City — Arabic SEO for Kuwait Businesses', description: 'SEO agency for Kuwait City and Kuwait. Arabic SEO, Google Business Profile, local citations and bilingual content — APEX Framework by Sama Alaa at upranked.io.', schema, schemaId: 'kuwait-market-schema' });
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
            <span className="text-accent">Kuwait City</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">🇰🇼 Kuwait City</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Agency Kuwait City — <span className="gradient-text">Arabic SEO for Kuwait Businesses</span></h1>
            <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Kuwait's high per-capita income market has one of the GCC's most research-intensive buyer journeys. upranked.io builds Arabic-first SEO strategies for Kuwait City businesses — native Arabic content, GBP optimization, and local citations that convert Kuwait's high-intent buyers.</p>
            <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Kuwait SEO Market</p>
              <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Kuwait City</strong> is Kuwait's capital and sole major commercial hub, with high per-capita income and sophisticated buyer behavior. Kuwait leans heavily Arabic for consumer-facing searches, and buyers conduct extensive online research before high-value purchases. Businesses competing in Kuwait benefit significantly from in-depth Arabic content strategies and strong Google Maps presence in Kuwait City.</p>
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Kuwait SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Kuwait SEO FAQs</h2>
          <div className="space-y-3">{faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}</div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img
              src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
              alt="Sama Alaa — GCC SEO strategist specializing in Kuwait City Arabic SEO at upranked.io"
              width={400}
              height={640}
              loading="lazy"
              decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0"
            />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Your Kuwait SEO Strategist</p>
              <h3 className="text-xl font-bold text-white mb-1">Sama Alaa</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">Sama Alaa is a GCC SEO strategist with deep expertise across Kuwait, UAE, KSA, and Bahrain markets. The APEX Framework — upranked.io's structured SEO methodology — delivers Arabic-first SEO for Kuwait City businesses, built around the extensive pre-purchase research behavior of Kuwait's high per-capita income buyer base.</p>
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
            <h2 className="text-4xl font-bold mb-6">Capture <span className="text-accent">Kuwait City Search</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your Kuwait search presence and show exactly how much Arabic organic traffic you are leaving on the table in Kuwait City.</p>
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
