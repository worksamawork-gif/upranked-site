import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Mail, Zap, Brain, MessageSquare } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';

// AEO page — primary kw: "answer engine optimization dubai" / "aeo optimization"
// secondary: "aeo services dubai", "aeo vs seo", "arabic aeo dubai", "ai search optimization dubai"
// meta title: 54 chars | meta desc: 133 chars

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AEO — Answer Engine Optimization Dubai & GCC',
      description: 'Answer Engine Optimization (AEO) services for Dubai and GCC businesses — schema markup, E-E-A-T authority, FAQ optimization, Arabic AEO, and AI answer platform visibility across ChatGPT, Google AI Overviews, Perplexity, and Gemini.',
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
      url: 'https://upranked.io/seo/aeo',
      areaServed: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Kuwait City', 'Manama', 'London', 'New York'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is AEO (Answer Engine Optimization)?', acceptedAnswer: { '@type': 'Answer', text: 'Answer Engine Optimization (AEO) is the discipline of structuring your website, content, and entity data so that conversational AI search engines — ChatGPT, Google AI Overviews, Perplexity, Gemini, and Microsoft Copilot — cite your business when a prospect asks a question. Unlike traditional SEO, which competes for blue link positions, AEO determines whether your brand appears as the answer before a user ever clicks anything.' } },
        { '@type': 'Question', name: 'How does AEO differ from traditional SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SEO targets the ten blue links on Google\'s search results page. AEO targets answer engines that synthesize responses from across the web — Google AI Overviews, ChatGPT, Perplexity, Gemini, and voice assistants. A business optimised for AEO gets cited in AI-generated answers, featured snippets, and voice search responses — which are increasingly where high-intent searchers look first, before scrolling to organic results.' } },
        { '@type': 'Question', name: 'Is Arabic AEO possible for Dubai businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — and it is almost entirely untapped. Arabic-language AEO for Dubai, UAE, and GCC businesses involves optimising Arabic content for structured data markup, implementing FAQ schema in Arabic, building E-E-A-T signals for Arabic-language entity recognition, and ensuring Arabic content meets the quality threshold for AI citation. Most Dubai businesses have zero Arabic AEO presence, creating a significant competitive advantage for early movers.' } },
        { '@type': 'Question', name: 'Which AI platforms does AEO target?', acceptedAnswer: { '@type': 'Answer', text: 'AEO targets six primary platforms for Dubai businesses: Google AI Overviews (the AI summary at the top of Google results), ChatGPT (including browsing and search functions), Perplexity AI (widely used by professionals and researchers), Microsoft Copilot, Google Gemini, and Apple Siri (voice search). Each platform has different citation logic, but all reward structured content, strong E-E-A-T signals, and schema markup.' } },
        { '@type': 'Question', name: 'How long does AEO take to show results?', acceptedAnswer: { '@type': 'Answer', text: 'AEO results appear on different timelines than traditional SEO. Featured snippet and Google AI Overview appearances can occur within 4–8 weeks for well-structured content targeting specific questions. ChatGPT and Perplexity citation typically takes 2–4 months as these platforms re-index and learn from the web. Building consistent AI platform presence across all six major platforms is typically a 3–6 month programme.' } },
      ],
    },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' }, { '@type': 'ListItem', position: 2, name: 'SEO Services', item: 'https://upranked.io/seo' }, { '@type': 'ListItem', position: 3, name: 'AEO — Answer Engine Optimization', item: 'https://upranked.io/seo/aeo' }] },
    { '@type': 'Person', name: 'Sama Alaa', jobTitle: 'Founder & GCC SEO Strategist', worksFor: { '@type': 'Organization', name: 'upranked.io' }, url: 'https://upranked.io/about' },
  ],
};

const features = [
  { icon: Brain, title: 'Schema Markup & Structured Data', desc: 'FAQ, HowTo, Article, LocalBusiness, and Person schema implemented across your site — giving AI answer engines the structured signals they need to extract and cite your content accurately.' },
  { icon: CheckCircle, title: 'E-E-A-T Authority Building', desc: 'Experience, Expertise, Authoritativeness, and Trustworthiness signals built through author credentials, citation acquisition, entity establishment, and consistent brand presence across authoritative sources.' },
  { icon: MessageSquare, title: 'Featured Snippet Optimisation', desc: 'Content restructured and formatted to win Google\'s featured snippet positions — the paragraph, list, and table formats that feed directly into Google AI Overviews and voice search responses.' },
  { icon: Zap, title: 'FAQ & HowTo Content Architecture', desc: 'Conversational FAQ and HowTo content built around the exact questions your target customers ask AI assistants — structured to match how language models extract and synthesise answers.' },
  { icon: ArrowRight, title: 'Voice Search & Arabic AEO', desc: 'Optimisation for Arabic and English voice search queries — the fastest-growing AEO channel in the GCC, where over 95% of users are mobile and voice query patterns differ significantly from typed searches.' },
  { icon: MapPin, title: 'AI Platform Citation Building', desc: 'Systematic presence-building across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Microsoft Copilot — each platform has different citation logic, and each requires a tailored approach.' },
];

const faqs = [
  { q: 'What is AEO (Answer Engine Optimization)?', a: 'Answer Engine Optimization (AEO) is the discipline of structuring your website, content, and entity data so that conversational AI search engines — ChatGPT, Google AI Overviews, Perplexity, Gemini, and Microsoft Copilot — cite your business when a prospect asks a question. Unlike traditional SEO, which competes for blue link positions, AEO determines whether your brand appears as the answer before a user ever clicks anything.' },
  { q: 'How does AEO differ from traditional SEO?', a: "Traditional SEO targets the ten blue links on Google's search results page. AEO targets answer engines that synthesize responses from across the web. A business optimised for AEO gets cited in AI-generated answers, featured snippets, and voice search responses — which is increasingly where high-intent searchers look first, before scrolling to organic results. SEO and AEO are complementary: strong SEO authority is a prerequisite for AEO visibility." },
  { q: 'Is Arabic AEO possible for Dubai and GCC businesses?', a: "Yes — and it is almost entirely untapped. Arabic-language AEO involves optimising Arabic content for structured data markup, implementing FAQ schema in Arabic, building E-E-A-T signals for Arabic-language entity recognition, and ensuring Arabic content meets AI citation quality thresholds. Most Dubai businesses have zero Arabic AEO presence, creating a significant competitive advantage for early movers." },
  { q: 'Which AI platforms does AEO target for Dubai businesses?', a: 'AEO targets six primary platforms: Google AI Overviews (the AI summary at the top of Google results), ChatGPT (including browsing and search), Perplexity AI, Microsoft Copilot, Google Gemini, and voice search assistants. Each platform has different citation logic, but all reward structured content, strong E-E-A-T signals, and schema markup.' },
  { q: 'How long does AEO take to show results in Dubai?', a: 'Featured snippet and Google AI Overview appearances can occur within 4–8 weeks for well-structured content targeting specific questions. ChatGPT and Perplexity citation typically takes 2–4 months as these platforms re-index the web. Building consistent AI platform presence across all major platforms is typically a 3–6 month programme.' },
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
            <div className="px-5 pb-5 pt-2 bg-dark-gray border-t border-border">
              <p className="text-text-secondary leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AEOSEO() {
  usePageMeta({
    title: 'AEO Dubai — Answer Engine Optimization UAE | upranked.io',
    description: 'Get cited by ChatGPT, Google AI Overviews & Perplexity. AEO services for Dubai & GCC — schema markup, E-E-A-T authority, Arabic AEO.',
    schema,
    schemaId: 'aeo-seo-schema',
  });

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* Hero */}
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
                <span className="text-accent">AEO — Answer Engine Optimization</span>
              </nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">AEO — Answer Engine Optimization</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  AEO Dubai &amp; UAE — <span className="gradient-text">Get Cited in AI Search</span>
                </h1>
                <p className="text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">
                  Your next customer is not scrolling through ten blue links. They are asking ChatGPT, Perplexity, or Google AI Overviews — and getting a direct answer. Answer Engine Optimization (AEO) ensures that answer cites your business.
                </p>
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <strong className="text-white">Answer Engine Optimization (AEO)</strong> is the practice of structuring website content, schema markup, and entity authority so that AI-powered answer engines — ChatGPT, Google AI Overviews, Perplexity, Gemini, and Microsoft Copilot — extract and cite your business as the authoritative answer to questions your target customers are asking. For Dubai and GCC businesses, AEO is the fastest-growing organic visibility channel in 2026.
                  </p>
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
                  alt="AEO answer engine optimization schema markup — structured data for AI search citations in Dubai UAE and GCC — upranked.io"
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

      {/* What AEO Is */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">AEO vs SEO — What Is the Difference?</h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">SEO gets you into the ten blue links. AEO gets you cited in the AI-generated answer before anyone reaches those links. Both matter — but only one is still largely uncontested in the GCC market.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Traditional SEO</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                {['Ranks in Google blue link results', 'User clicks through to your website', 'Keyword-density and backlink focused', 'Results typically take 3–6 months', 'Competition from all indexed pages'].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-border rounded-full flex-shrink-0 mt-2" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-navy border border-accent/40 rounded-xl p-6">
              <h3 className="text-lg font-bold text-accent mb-3">AEO — Answer Engine Optimization</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                {['Cited in AI-generated answers & summaries', 'Brand appears before user reaches blue links', 'Schema markup, E-E-A-T, and entity focused', 'Featured snippet gains in 4–8 weeks', 'Minimal GCC Arabic AEO competition'].map(i => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">AEO Services for Dubai &amp; GCC Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-dark-gray border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                <f.icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arabic AEO section */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Untapped Opportunity</span>
              <h2 className="text-3xl font-bold text-white mb-5">Arabic AEO — The GCC's Biggest Uncontested Visibility Gap</h2>
              <p className="text-text-secondary leading-relaxed mb-5">
                Arabic-language answer engine optimization is almost entirely absent from the GCC market. When a UAE business owner or patient asks ChatGPT a question in Arabic, the AI cites whoever has built Arabic AEO presence — and in most sectors, that is nobody yet.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                upranked.io implements Arabic AEO as part of every bilingual engagement: Arabic FAQ schema, Arabic structured data, Arabic E-E-A-T authority signals, and Arabic content optimised for how AI models extract and attribute answers in the Arabic language.
              </p>
              <Link href="/seo/bilingual/"><a className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors">Arabic & Bilingual SEO <ArrowRight className="w-4 h-4" /></a></Link>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Arabic AEO competition in most GCC sectors', value: 'Near zero' },
                { label: 'UAE voice search queries in Arabic', value: 'Growing 3x YoY' },
                { label: 'AI platforms supporting Arabic answers', value: '6 major platforms' },
                { label: 'Time to first Arabic AI citation', value: '4–10 weeks' },
              ].map(stat => (
                <div key={stat.label} className="bg-navy border border-border rounded-xl p-4 flex items-center justify-between gap-4">
                  <span className="text-text-secondary text-sm">{stat.label}</span>
                  <span className="text-accent font-bold text-sm flex-shrink-0">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">AEO FAQs — Dubai &amp; UAE</h2>
          <div className="space-y-3">
            {faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* Author + Markets */}
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
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">AEO Strategy by</p>
              <h3 className="text-xl font-bold text-white mb-1">Sama Alaa</h3>
              <p className="text-accent text-sm mb-3">Founder &amp; GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Sama Alaa leads all AEO and answer engine strategy at upranked.io — covering schema markup architecture, E-E-A-T authority building, and Arabic AEO for Dubai, UAE, and GCC clients. Every AEO engagement is delivered on the APEX Framework™, adapted for the unique entity and authority landscape of the GCC market.
              </p>
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
              <Link key={m.city} href={m.href}>
                <a className="bg-navy border border-border rounded-xl p-4 flex items-center gap-3 hover:border-accent/40 transition-colors">
                  <span className="text-2xl">{m.flag}</span>
                  <span className="text-white font-medium text-sm">{m.city}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Be the <span className="text-accent">Answer</span> — Not Just a Result</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">
              Book a free APEX Diagnostic. We will audit your current AEO position — schema coverage, E-E-A-T signals, AI platform presence — and map the fastest path to AI answer citations in your sector.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/contact/"><a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2">Book Free AEO Audit <ArrowRight className="w-5 h-5" /></a></Link>
              <Link href="/seo/schema/"><a className="btn-secondary text-lg px-10 py-5">Schema Markup Services</a></Link>
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
