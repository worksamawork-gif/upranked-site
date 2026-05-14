import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'Bilingual SEO Dubai — Arabic & English Search Optimization', description: 'Bilingual EN/AR SEO for businesses in Dubai UAE, Riyadh KSA, Kuwait, Bahrain — native Arabic keyword research, RTL architecture, hreflang, bilingual content strategy by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/seo/bilingual', areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is bilingual SEO and why is it essential in the GCC?', acceptedAnswer: { '@type': 'Answer', text: "Bilingual SEO is the practice of optimizing a website for search visibility in two languages simultaneously — in the GCC's case, English and Arabic. It requires separate keyword research for each language (Arabic buyers search with different query structures and vocabulary), distinct URL architectures, hreflang tags, and native-quality content in both languages. The GCC's bilingual buyer base means English-only SEO misses 30–60% of potential traffic depending on the sector." } },
      { '@type': 'Question', name: 'Is Arabic SEO just translating English content?', acceptedAnswer: { '@type': 'Answer', text: "No. Arabic SEO is fundamentally different from translated English content. Arabic search queries use Modern Standard Arabic, Gulf dialectal Arabic, and mixed Arabic-English (code-switching) depending on the topic, buyer segment, and GCC country. Machine-translated content fails all three. upranked.io develops Arabic SEO content written by native Arabic-speaking SEO specialists who understand the linguistic nuances of search in Dubai, Riyadh, Kuwait, and Bahrain." } },
      { '@type': 'Question', name: 'What are hreflang tags and why do they matter for bilingual GCC websites?', acceptedAnswer: { '@type': 'Answer', text: "Hreflang tags are HTML attributes that tell Google which version of a page to show to users based on their language and location. Without correct hreflang implementation, Google may show the wrong language version of your pages to Arabic or English searchers in the GCC — dramatically reducing CTR and rankings. upranked.io implements hreflang as part of every bilingual SEO engagement." } },
      { '@type': 'Question', name: 'Which GCC countries benefit most from bilingual Arabic SEO?', acceptedAnswer: { '@type': 'Answer', text: "All GCC markets benefit from bilingual SEO, but Saudi Arabia (Riyadh, Jeddah, Makkah) has the highest proportion of Arabic-first searchers — making Arabic SEO a critical investment for businesses targeting KSA. UAE (Dubai, Abu Dhabi) has a more balanced EN/AR split. Kuwait and Bahrain lean more heavily Arabic for consumer-facing queries. upranked.io tailors the bilingual ratio for each market." } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://upranked.io/industries' }, { '@type': 'ListItem', position: 3, name: 'Bilingual SEO', item: 'https://upranked.io/seo/bilingual' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Native Arabic Keyword Research', desc: 'Arabic keyword research conducted by native Arabic-speaking SEO specialists — covering MSA, Gulf dialect, and EN/AR code-switching patterns specific to UAE, KSA, Kuwait, and Bahrain buyers.' },
  { title: 'RTL Technical Architecture', desc: 'Full right-to-left layout implementation with correct RTL CSS, Arabic font optimization, bilingual URL structures, and Arabic-compatible Core Web Vitals — not just flipped English pages.' },
  { title: 'Hreflang Implementation', desc: 'Correct hreflang tag setup ensuring Google shows the right language version to Arabic and English searchers in each GCC country — eliminating duplicate content penalties and traffic loss.' },
  { title: 'Arabic Content Strategy', desc: 'Separate Arabic content architecture with Arabic-specific buyer intent mapping, topic clusters for Arabic search queries, and content written in native GCC Arabic — not translated English.' },
  { title: 'Bilingual Schema Markup', desc: '@graph JSON-LD schema implemented for both EN and AR page versions — including Arabic business name, address, and phone number in the correct GCC format for each market.' },
  { title: 'Arabic Link Building', desc: 'Authority links from Arabic-language publications, GCC Arabic business directories, and regional Arabic media — building domain authority for Arabic search separately from English.' },
];

const faqs = [
  { q: 'What is bilingual SEO and why is it essential in the GCC?', a: "Bilingual SEO optimizes a website for search visibility in both English and Arabic. It requires separate keyword research for each language (Arabic buyers search with different query structures), distinct URL architectures, hreflang tags, and native-quality content. The GCC's bilingual buyer base means English-only SEO misses 30–60% of potential traffic depending on the sector and country." },
  { q: 'Is Arabic SEO just translating English content?', a: "No. Arabic SEO requires native Arabic keyword research, Gulf dialect awareness, and content written by Arabic SEO specialists — not machine translations. Arabic search queries use MSA, Gulf dialectal Arabic, and mixed Arabic-English (code-switching) depending on the topic and market. upranked.io develops Arabic SEO content written natively for Dubai, Riyadh, Kuwait, and Bahrain buyers." },
  { q: 'What are hreflang tags and why do they matter for bilingual GCC websites?', a: "Hreflang tags tell Google which language version of a page to show based on user location and language preference. Without correct hreflang, Google may show the wrong language version to Arabic or English searchers — reducing CTR and rankings. upranked.io implements hreflang as part of every bilingual SEO engagement." },
  { q: 'Which GCC countries benefit most from bilingual Arabic SEO?', a: "All GCC markets benefit from bilingual SEO. Saudi Arabia (Riyadh, Jeddah) has the highest proportion of Arabic-first searchers. UAE (Dubai, Abu Dhabi) has a more balanced EN/AR split. Kuwait and Bahrain lean more heavily Arabic for consumer-facing queries. upranked.io tailors the bilingual ratio for each market." },
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

export default function BilingualSEO() {
  usePageMeta({ title: 'Bilingual SEO Dubai — Arabic & English Search Optimization GCC', description: 'Bilingual EN/AR SEO for Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain. Native Arabic keyword research, RTL architecture, hreflang — APEX Framework by Sama Alaa.', schema, schemaId: 'bilingual-seo-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6"><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span className="mx-2 text-border">/</span><Link href="/seo/"><a className="hover:text-accent transition-colors">SEO</a></Link><span className="mx-2 text-border">/</span><span className="text-accent">Bilingual SEO</span></nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Bilingual SEO</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Bilingual SEO Dubai — <span className="gradient-text">Arabic &amp; English Search Optimization for the GCC</span></h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">English-only SEO in the GCC leaves up to 60% of potential organic traffic on the table. upranked.io builds true bilingual SEO strategies — native Arabic keyword research, RTL architecture, and separately optimized Arabic content — for businesses in Dubai, Riyadh, Kuwait City, and Manama.</p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Bilingual SEO</strong> is the practice of optimizing a website for organic search visibility in two languages simultaneously — in the GCC context, English and Arabic. It requires separate keyword research in each language, distinct content strategies for EN and AR buyer intent, hreflang tag implementation, RTL-compatible technical architecture, and native-quality Arabic content. It is not translated English SEO.</p>
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
                  src="/heroes/11-bilingual-seo.svg"
                  alt="Bilingual Arabic and English SEO strategy visual showing EN/AR keyword mapping, hreflang architecture and RTL content for GCC markets — upranked.io Dubai"
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Bilingual SEO Services for GCC Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Bilingual SEO FAQs — Dubai &amp; GCC</h2>
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
            <h2 className="text-4xl font-bold mb-6">Capture <span className="text-accent">Both Languages</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your Arabic SEO coverage and show exactly how much traffic you are missing across Dubai, Riyadh, Kuwait, and Bahrain.</p>
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
