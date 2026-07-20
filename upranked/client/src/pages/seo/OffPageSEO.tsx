import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Off-Page SEO & Link Building Dubai & GCC',
      description: 'Off-page SEO and authority building for businesses in Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London and New York — GCC-relevant backlinks, digital PR, and brand authority.',
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      url: 'https://upranked.io/seo/off-page',
      areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is off-page SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Off-page SEO refers to actions taken outside your website to improve its authority and search rankings — primarily link building (earning backlinks from other websites), digital PR, brand mentions, and local citations. In the GCC, off-page SEO must target GCC-relevant publications, business directories, and regional authority sources.' } },
        { '@type': 'Question', name: 'How does link building work for Dubai and GCC businesses?', acceptedAnswer: { '@type': 'Answer', text: 'GCC link building targets regional authority sources — UAE business publications, Gulf industry directories, Arabic-language media, GCC chamber of commerce listings, and sector-specific sites in healthcare, industrial, and professional services. Generic Western backlinks have limited impact on GCC domain authority. upranked.io builds links from sources that Google associates with GCC market credibility.' } },
        { '@type': 'Question', name: 'Is digital PR part of off-page SEO in the GCC?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Digital PR — earning coverage and mentions in Gulf Business, Arabian Business, Zawya, and sector-specific GCC publications — produces high-authority backlinks that directly improve Google rankings for businesses in Dubai, Riyadh, and Kuwait. It also builds brand awareness among the exact buyer audience you want to reach.' } },
        { '@type': 'Question', name: 'How long does off-page SEO take to improve rankings in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Authority building is a longer-term investment than on-page SEO. Most Dubai and GCC clients see measurable domain authority improvements within 3–4 months and ranking impacts from link acquisition within 4–6 months. The compounding effect means results accelerate significantly in months 6–12.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://upranked.io/industries' },
        { '@type': 'ListItem', position: 3, name: 'Off-Page SEO', item: 'https://upranked.io/seo/off-page' },
      ],
    },
    { '@type': 'Person', name: 'Sam', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'GCC Authority Link Building', desc: 'Backlinks from UAE, KSA, Kuwait, and Bahrain business publications, directories, and industry authorities — not generic global link farms.' },
  { title: 'Digital PR & Media Coverage', desc: 'Earned mentions and features in Gulf Business, Zawya, Arabian Business, and sector-specific GCC publications that signal regional authority to Google.' },
  { title: 'Competitor Backlink Analysis', desc: 'Reverse-engineer the exact link profiles of your top-ranking competitors in Dubai and the GCC — then systematically acquire the same authority sources.' },
  { title: 'Local Citation Building', desc: 'Consistent NAP (Name, Address, Phone) across GCC business directories, Google Business Profile, and regional citation sources for Dubai, Riyadh, Kuwait, and Bahrain.' },
  { title: 'Broken Link Reclamation', desc: 'Identify mentions of your brand or business that lack a link and convert them into backlinks — a low-effort, high-impact authority tactic for established GCC businesses.' },
  { title: 'Arabic Press & Media', desc: 'Off-page authority from Arabic-language publications and media adds bilingual trust signals that generic English-only link building completely misses.' },
];

const faqs = [
  { q: 'What is off-page SEO?', a: 'Off-page SEO refers to actions taken outside your website to improve its authority and search rankings — primarily link building, digital PR, brand mentions, and local citations. In the GCC, off-page SEO must target GCC-relevant publications, business directories, and regional authority sources in Dubai, Riyadh, Kuwait, and Bahrain.' },
  { q: 'How does link building work for Dubai and GCC businesses?', a: 'GCC link building targets regional authority sources — UAE business publications, Gulf industry directories, Arabic-language media, GCC chamber of commerce listings, and sector-specific sites. Generic Western backlinks have limited impact on GCC domain authority. upranked.io builds links from sources that Google associates with GCC market credibility.' },
  { q: 'Is digital PR part of off-page SEO in the GCC?', a: 'Yes. Digital PR — earning coverage in Gulf Business, Arabian Business, Zawya, and sector-specific GCC publications — produces high-authority backlinks that directly improve Google rankings for businesses in Dubai, Riyadh, and Kuwait. It also builds brand awareness among the exact buyer audience you want to reach.' },
  { q: 'How long does off-page SEO take to improve rankings in Dubai?', a: 'Authority building is a longer-term investment than on-page SEO. Most Dubai and GCC clients see measurable domain authority improvements within 3–4 months and ranking impacts from link acquisition within 4–6 months. Results compound significantly in months 6–12.' },
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
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-5 pb-5 pt-2 bg-dark-gray border-t border-border"><p className="text-text-secondary leading-relaxed">{a}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function OffPageSEO() {
  usePageMeta({
    title: 'Off-Page SEO Dubai GCC | Link Building',
    description: 'Build domain authority that ranks — GCC-relevant backlinks, Gulf business digital PR, and citation building for Dubai, Riyadh, Kuwait & Bahrain. APEX Framework by Sam.',
    schema,
    schemaId: 'off-page-seo-schema',
  });

  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
                <span className="mx-2 text-border">/</span>
                <Link href="/seo/"><a className="hover:text-accent transition-colors">SEO</a></Link>
                <span className="mx-2 text-border">/</span>
                <span className="text-accent">Off-Page SEO</span>
              </nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Off-Page SEO</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Off-Page SEO Dubai &amp; GCC — <span className="gradient-text">Authority Building &amp; Link Strategy</span>
                </h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">
                  Rankings are a vote of confidence. The more high-quality sites that link to yours — especially from GCC-relevant sources in Dubai, Riyadh, Kuwait, Bahrain, London, and New York — the more Google trusts you. upranked.io builds the right links from the right sources for your sector and market.
                </p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">Off-page SEO</strong> encompasses all actions taken outside your own website to improve search authority — backlink acquisition, digital PR, brand mentions, local citations, and social signals. In the GCC, off-page SEO must focus on regionally relevant authority sources that signal Dubai, KSA, Kuwait, and Bahrain market credibility to Google.</p>
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
                  src="/heroes/10-offpage-seo.svg"
                  alt="Off-page SEO and link building diagram showing GCC authority sources, backlink profiles and digital PR for Dubai businesses — upranked.io"
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
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Off-Page SEO Services for GCC Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <CheckCircle className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Off-Page SEO FAQs — Dubai &amp; GCC</h2>
          <div className="space-y-3">
            {faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
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
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-3xl">
          <div className="p-5 bg-navy border border-accent/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Related Reading</p>
              <p className="text-white font-semibold text-sm mb-1">Arabic SEO Agency in Dubai — Full 2026 Guide</p>
              <p className="text-text-secondary text-xs leading-relaxed">Why Arabic-language link building is a separate channel — and how GCC businesses build off-page authority for both English and Arabic search.</p>
            </div>
            <Link href="/blog/arabic-seo-agency-dubai-uae/"><a className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap inline-flex items-center gap-2">Read Guide <ArrowRight className="w-4 h-4" /></a></Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Build Authority That <span className="text-accent">Compounds</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will audit your current backlink profile and show you exactly where your authority gaps are in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.</p>
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
