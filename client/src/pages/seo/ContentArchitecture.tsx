import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', name: 'SEO Content Architecture Dubai & GCC', description: 'SEO content architecture and topic cluster strategy for businesses in Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK and New York USA — pillar pages, topic clusters, content silos by upranked.io.', provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' }, url: 'https://upranked.io/seo/content-architecture', areaServed: ['Dubai', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is SEO content architecture?', acceptedAnswer: { '@type': 'Answer', text: 'SEO content architecture is the strategic organization of a website\'s content into interconnected topic clusters — pillar pages covering broad topics, supported by cluster pages covering specific subtopics, all interlinked to signal topical authority to Google. For GCC businesses in Dubai and Riyadh, effective content architecture also requires separate Arabic and English content silos with correct hreflang linking between language versions.' } },
      { '@type': 'Question', name: 'What is a topic cluster and why does it matter for GCC SEO?', acceptedAnswer: { '@type': 'Answer', text: 'A topic cluster is a group of interlinked pages — one pillar page covering a broad topic and multiple supporting pages covering specific aspects. Google uses the interlinking pattern to assess topical authority. For businesses in Dubai targeting "SEO services," a topic cluster would include the main pillar plus cluster pages for technical SEO, local SEO, bilingual SEO, and link building — all internally linked back to the pillar.' } },
      { '@type': 'Question', name: 'How does content architecture differ for bilingual Arabic-English GCC websites?', acceptedAnswer: { '@type': 'Answer', text: 'Bilingual content architecture requires parallel topic cluster structures in both English and Arabic — not just translated pages. The Arabic cluster must be built around Arabic search queries (which differ significantly from translated English queries), have its own internal linking structure within the AR subdirectory, and use hreflang tags to connect equivalent EN and AR pages. Cross-linking between EN and AR versions must be handled via hreflang only, not regular href links.' } },
      { '@type': 'Question', name: 'How many pages does a GCC content architecture typically require?', acceptedAnswer: { '@type': 'Answer', text: 'A comprehensive GCC content architecture for a single service line typically requires: 1 pillar page, 8–12 cluster pages covering subtopics, 6 market-specific landing pages (Dubai, Riyadh, Kuwait City, Manama, London, New York), and equivalent Arabic versions where bilingual coverage is required. upranked.io plans and builds content architectures with a 12–18 month roadmap, prioritizing pages by commercial intent and competitive gap.' } },
    ] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://upranked.io/industries' }, { '@type': 'ListItem', position: 3, name: 'Content Architecture', item: 'https://upranked.io/seo/content-architecture' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { title: 'Topic Cluster Strategy', desc: 'Pillar page and cluster page architecture mapped to your GCC buyer journey — structuring content to signal topical authority to Google for Dubai, Riyadh, Kuwait, and Bahrain market queries.' },
  { title: 'Keyword Gap & Intent Mapping', desc: 'Full keyword gap analysis identifying which commercial-intent queries your competitors rank for in the GCC that you currently miss — prioritized by search volume and conversion potential.' },
  { title: 'Bilingual Content Silos', desc: 'Parallel Arabic and English content architecture with separate interlinking structures, Arabic-specific topic clusters built around native GCC Arabic queries, and correct hreflang connections.' },
  { title: 'Internal Linking Architecture', desc: 'Systematic internal link structure flowing page authority from high-equity pillar pages to target commercial pages — eliminating orphan pages and link equity leakage.' },
  { title: 'Market Landing Page Framework', desc: 'City-specific landing page architecture for Dubai, Abu Dhabi, Riyadh, Jeddah, Kuwait City, Manama, London, and New York — each with unique content and local schema.' },
  { title: 'Content Roadmap & Prioritization', desc: '12–18 month content production roadmap prioritized by commercial impact — ensuring the highest-ROI content gets built first and every page has a clear role in the topic cluster.' },
];

const faqs = [
  { q: 'What is SEO content architecture?', a: "SEO content architecture is the strategic organization of a website's content into interconnected topic clusters — pillar pages covering broad topics, supported by cluster pages covering specific subtopics, all interlinked to signal topical authority to Google. For GCC businesses, effective architecture also requires separate Arabic and English content silos with correct hreflang linking." },
  { q: 'What is a topic cluster and why does it matter for GCC SEO?', a: 'A topic cluster is a group of interlinked pages — one pillar page covering a broad topic and multiple supporting pages covering specific aspects. Google uses the interlinking pattern to assess topical authority. For a Dubai SEO business, a topic cluster would include the main pillar plus cluster pages for technical SEO, local SEO, bilingual SEO, and link building — all internally linked back to the pillar.' },
  { q: 'How does content architecture differ for bilingual Arabic-English GCC websites?', a: 'Bilingual content architecture requires parallel topic cluster structures in both English and Arabic — not just translated pages. The Arabic cluster must be built around native Arabic search queries, have its own internal linking structure within the AR subdirectory, and use hreflang tags to connect equivalent EN and AR pages.' },
  { q: 'How many pages does a GCC content architecture typically require?', a: 'A comprehensive GCC content architecture for a single service line typically requires: 1 pillar page, 8–12 cluster pages, 6 market-specific landing pages (Dubai, Riyadh, Kuwait City, Manama, London, New York), and equivalent Arabic versions where bilingual coverage is required. upranked.io plans with a 12–18 month roadmap, prioritizing by commercial intent and competitive gap.' },
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

export default function ContentArchitecture() {
  usePageMeta({ title: 'SEO Content Architecture Dubai & GCC — Topic Clusters & Content Strategy', description: 'SEO content architecture for Dubai UAE, Riyadh KSA, Kuwait, Bahrain, London & New York. Topic clusters, bilingual content silos, pillar pages — APEX Framework by Sama Alaa.', schema, schemaId: 'content-architecture-schema' });
  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav className="text-sm text-text-secondary mb-6"><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span className="mx-2 text-border">/</span><Link href="/seo"><a className="hover:text-accent transition-colors">SEO</a></Link><span className="mx-2 text-border">/</span><span className="text-accent">Content Architecture</span></nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Content Architecture</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">SEO Content Architecture Dubai &amp; GCC — <span className="gradient-text">Topic Clusters &amp; Content Strategy</span></h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">Publishing pages without a content architecture is like building without a blueprint. upranked.io designs topic cluster structures for GCC businesses that tell Google you are the authority in your sector — in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.</p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed"><strong className="text-white">SEO content architecture</strong> is the strategic design of a website's content into topic clusters — a pillar page covering a broad topic supported by interlinked cluster pages covering specific subtopics. This structure signals topical authority to Google and accelerates rankings across an entire subject area rather than isolated keywords. In the GCC, content architecture must account for separate Arabic and English search behaviors and bilingual URL structures.</p>
                </div>
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE</span>
                  <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> Sam@upranked.io</a>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-start pt-4 lg:pt-16">
              <img
                src="/images/sam-hamouda-best-seo-consultant-gcc.webp"
                alt="Sama Alaa — SEO content architecture specialist in Dubai designing topic clusters and pillar pages for GCC businesses at upranked.io"
                width={480}
                height={640}
                loading="eager"
                decoding="async"
                className="rounded-2xl border border-border object-cover object-top w-full max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Content Architecture Services for GCC Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6 hover:border-accent/40 transition-colors"><CheckCircle className="w-6 h-6 text-accent mb-3" /><h3 className="font-bold text-white mb-2">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></motion.div>))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Content Architecture FAQs — Dubai &amp; GCC</h2>
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
                <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
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
            <h2 className="text-4xl font-bold mb-6">Build a Content <span className="text-accent">Architecture That Ranks</span></h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">Book a free APEX Diagnostic. We will map your current content gaps and design a topic cluster architecture that builds topical authority in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.</p>
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
