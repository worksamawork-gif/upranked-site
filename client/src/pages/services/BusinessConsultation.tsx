/*
 * PAGE: /growth-intelligence/consultation
 * PRIMARY KW: business consultation Dubai (Vol: ~880/mo | KD: 32)
 * SECONDARY KW: growth strategy consultant GCC, business consultant Dubai UAE, Sama Alaa consultation
 * NEAR ME: business consultant near me Dubai, growth strategist near me UAE
 * META TITLE (60 chars): Business Consultation Dubai | Sama Alaa | upranked.io
 * META DESC (158 chars): 1-on-1 business consultation with Sama Alaa in Dubai & GCC. APEX Framework™ applied to your growth bottlenecks. 90-day roadmap. Book a free intro call.
 * SCHEMA: @graph → Service + FAQPage + Person + BreadcrumbList
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  CheckCircle, ArrowRight, ChevronDown, Users, Target, BarChart3,
  Zap, Shield, MapPin, Phone, Mail, Star, Briefcase, TrendingUp
} from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} viewport={{ once: true }} className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="w-full flex items-center justify-between px-6 py-5 text-left bg-dark-gray hover:bg-navy/60 transition-colors duration-200">
        <span className="font-semibold text-white pr-4 text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 py-5 text-text-secondary leading-relaxed text-sm bg-navy/30 border-t border-border">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const faqs = [
  { q: 'What is business consultation with Sama Alaa and who is it for?', a: 'Business consultation with Sama Alaa is a direct, founder-led strategic advisory service for business owners, marketing leaders, and founders across Dubai, the GCC, London, and New York. It is designed for companies that need senior-level strategic thinking applied to their specific growth challenge — not a generic agency package. Each engagement uses the APEX Framework™ to diagnose, position, and build an actionable 90-day growth roadmap.' },
  { q: 'What topics does a business consultation session cover?', a: 'Sessions are tailored to your priority challenge. Common topics include: organic search strategy and SEO investment planning, GCC market entry positioning, competitive displacement strategy, digital channel mix optimisation, bilingual EN/AR content and SEO strategy, Google Business Profile and local SEO, and building a revenue attribution framework to measure marketing ROI. You come with the challenge — Sama applies the APEX Framework™ to build your roadmap.' },
  { q: 'How is this different from hiring a digital marketing agency in Dubai?', a: 'Three key differences: (1) Founder-led — you work directly with Sama Alaa, not a junior account manager who inherited your account after the sales call. (2) Strategy-first — sessions focus on the strategic layer, not execution deliverables. (3) GCC-specific — every recommendation is informed by real market intelligence from Dubai, Riyadh, Kuwait, and Bahrain, not global templates applied to the region.' },
  { q: 'Can I book a one-time consultation or do I need an ongoing retainer?', a: 'Both options are available. A one-time APEX Diagnostic session gives you clarity on your current position, a competitor gap analysis, and a 90-day roadmap. An ongoing retainer provides continuous strategic guidance, monthly accountability reviews, and priority WhatsApp access to Sama as you execute. The best fit depends on how much strategic support your team needs beyond the initial roadmap.' },
  { q: 'Do you offer business consultation for companies expanding into the GCC from London or New York?', a: 'Yes — market entry consultation for international businesses expanding into Dubai, Riyadh, Kuwait, or Bahrain is one of our core specialisations. We cover GCC search behaviour, Arabic SEO requirements, local competitor landscape, free zone positioning, GBP setup for UAE, and the go-to-market channel mix that works in your target GCC city. Engagements are conducted remotely and in person.' },
  { q: 'How do I get started with a business consultation?', a: 'Book a free 30-minute APEX Diagnostic intro call via the Contact page, our contact page, or email uprankedio@gmail.com. In the intro call, Sama reviews your current position, identifies your highest-leverage growth opportunity, and outlines the consultation scope that fits your situation. No commitment required for the intro call.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://upranked.io/growth-intelligence/consultation#service',
      name: 'Business Consultation Dubai — 1-on-1 with Sama Alaa',
      serviceType: 'Business Consultation',
      description: '1-on-1 strategic business consultation with Sama Alaa, founder of upranked.io. APEX Framework™ applied to your GCC growth challenges. 90-day roadmap delivered.',
      provider: { '@type': 'Organization', '@id': 'https://upranked.io/#organization', name: 'upranked.io', url: 'https://upranked.io' },
      areaServed: ['Dubai', 'Riyadh', 'Kuwait', 'Bahrain', 'London', 'New York'],
      url: 'https://upranked.io/growth-intelligence/consultation',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://upranked.io/growth-intelligence/consultation#faq',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'Person',
      '@id': 'https://upranked.io/about#person',
      name: 'Sama Alaa',
      jobTitle: 'Founder & Chief Growth Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io' },
      url: 'https://upranked.io/about',
      sameAs: ['https://www.linkedin.com/company/upranked-io/'],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://upranked.io/growth-intelligence/consultation#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Growth Intelligence', item: 'https://upranked.io/growth-intelligence' },
        { '@type': 'ListItem', position: 3, name: 'Business Consultation', item: 'https://upranked.io/growth-intelligence/consultation' },
      ],
    },
  ],
};

const benefits = [
  { icon: Users, title: 'Senior Consultant Access', desc: 'Every session is led by our senior consulting team — not delegated to juniors. Direct, high-level strategic guidance.' },
  { icon: Target, title: 'APEX Framework™ Applied', desc: 'Your growth challenge analysed through the Audit → Position → Execute → Expand methodology built from 20+ GCC engagements.' },
  { icon: BarChart3, title: '90-Day Growth Roadmap', desc: 'A prioritised, actionable roadmap with specific milestones, KPIs, and channel investments delivered after each session.' },
  { icon: TrendingUp, title: 'Competitor Intelligence', desc: 'A full competitor gap analysis for your GCC or global market — where they rank, where they are weak, and how to displace them.' },
  { icon: Zap, title: 'Revenue Attribution Setup', desc: 'Guidance on connecting organic, paid, and referral channels to actual revenue — so you always know your true marketing ROI.' },
  { icon: Shield, title: 'Priority WhatsApp Access', desc: 'Direct WhatsApp line to Sama between sessions for urgent questions, quick reviews, and strategic sounding-board support.' },
];

const steps = [
  { n: '01', title: 'Free APEX Diagnostic Call', desc: 'A free 30-minute intro call. Sama reviews your current digital position, identifies your top growth opportunity, and scopes the right consultation format for your situation.' },
  { n: '02', title: 'Pre-Session Audit', desc: 'Before the main session, Sama conducts a full review of your website, keyword rankings, competitor landscape, and GCC market position. No session starts cold.' },
  { n: '03', title: '90-Minute Strategy Session', desc: 'A focused working session applying the APEX Framework™ to your specific challenge. Output: a clear 90-day growth roadmap with prioritised actions, KPIs, and quick wins.' },
  { n: '04', title: 'Ongoing Accountability', desc: 'Optional monthly check-in calls, resource sharing, and priority WhatsApp access as you execute. Strategy is only valuable when it leaves the document.' },
];

export default function BusinessConsultation() {
  usePageMeta({
    title: 'Business Consultation Dubai | Sama Alaa | upranked.io',
    description: '1-on-1 business consultation with Sama Alaa in Dubai & GCC. APEX Framework™ applied to your growth bottlenecks. 90-day roadmap. Book a free intro call.',
    schemaId: 'consultation-schema',
    schema,
  });

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* HERO + NAP #1 */}
      <section className="relative pt-32 pb-20 px-4 texture-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-70 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link><span>/</span>
                <Link href="/growth-intelligence/"><a className="hover:text-accent transition-colors">Growth Intelligence</a></Link><span>/</span>
                <span className="text-accent">Business Consultation</span>
              </nav>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="inline-block text-accent font-semibold tracking-widest text-xs uppercase bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">Growth Intelligence · Consultation</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Business Consultation Dubai —{' '}<span className="gradient-text">Expert Growth Strategy</span>
                </h1>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Direct strategic consultation with the founder of upranked.io. Get the APEX Framework™ applied to your GCC growth challenge, a competitor gap analysis, and a 90-day roadmap — no junior handoffs, no agency overhead.
                </p>
                <address className="not-italic flex flex-col sm:flex-row gap-4 text-sm text-text-secondary mb-8">
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY</span>
                </address>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact/"><a className="btn-primary inline-flex items-center gap-2 text-base px-7 py-3.5">Book Free Intro Call <ArrowRight className="w-5 h-5" /></a></Link>
                  <Link href="/about/"><a className="btn-secondary inline-flex items-center gap-2 text-base px-7 py-3.5">Meet Sama Alaa</a></Link>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/21-business-consultation.svg"
                  alt="Business consultation and APEX Framework growth advisory for GCC companies — strategic planning, market entry, and revenue growth by upranked.io Dubai"
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

      {/* TRUST BAR */}
      <section className="bg-dark-gray py-5 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs text-text-secondary">
            {['Direct Founder Access', 'APEX Framework™', 'GCC Market Intelligence', '90-Day Roadmaps', 'GCC + London + NY'].map(t => (
              <div key={t} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full" /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is <span className="text-accent">Business Consultation</span> with upranked.io?</h2>
            <div className="border-l-4 border-accent bg-dark-gray/80 rounded-r-xl p-6 mb-8">
              <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-2">Definition</p>
              <p className="text-text-secondary leading-relaxed"><strong className="text-white">Business consultation at upranked.io</strong> is a direct, founder-led strategic advisory service where Sama Alaa applies the APEX Framework™ — Audit → Position → Execute → Expand — to your specific growth challenge in Dubai, the GCC, London, or New York. Unlike generalist agency consultations, every session is focused on commercial outcomes: where you rank, where competitors are vulnerable, what your organic growth opportunity is, and the exact prioritised moves to capture it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Briefcase, title: 'Who It Is For', items: ['Business owners with a growth challenge', 'Marketing leaders needing senior guidance', 'Companies entering the GCC market', 'Businesses expanding from London/NY to GCC', 'Teams that have tried generic agencies'] },
                { icon: Target, title: 'What You Get', items: ['90-day growth roadmap', 'Competitor gap analysis', 'APEX Framework™ applied to your business', 'Channel investment prioritisation', 'Revenue attribution framework'] },
                { icon: TrendingUp, title: 'Markets Served', items: ['Dubai, UAE (primary)', 'Riyadh, KSA', 'Kuwait City, Kuwait', 'Manama, Bahrain', 'London, UK · New York, USA'] },
              ].map(card => (
                <div key={card.title} className="bg-dark-gray border border-border rounded-xl p-5">
                  <card.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-bold text-white mb-3 text-sm">{card.title}</h3>
                  <ul className="space-y-1.5">
                    {card.items.map(i => <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get from <span className="text-accent">Expert Consultation</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Senior-level strategic guidance without agency overhead — applied directly to your GCC or global market challenge.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="card-premium group hover:border-accent/50 transition-colors">
                <b.icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2 text-sm">{b.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How a <span className="text-accent">Consultation Engagement</span> Works</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">From free intro call to 90-day roadmap in four clear steps.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="card-premium relative">
                <div className="text-6xl font-black text-border absolute -top-2 -right-2 leading-none select-none">{s.n}</div>
                <h3 className="text-lg font-bold text-accent mb-3 mt-2">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-12 bg-gradient-to-r from-accent/10 via-navy to-accent/10 border-y border-accent/20">
        <div className="container-premium text-center">
          <p className="text-lg font-semibold text-white mb-2">Ready to get clarity on your growth path?</p>
          <p className="text-text-secondary text-sm mb-6">Book a free 30-minute APEX Diagnostic — no commitment, just a clear picture of your opportunity.</p>
          <Link href="/contact/"><a className="btn-primary inline-flex items-center gap-2">Book Free Intro Call <ArrowRight className="w-4 h-4" /></a></Link>
        </div>
      </section>

      {/* Sama BIO */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="border border-accent/30 rounded-2xl p-8 bg-navy/60">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-5">Your Consultant — E-E-A-T Verified</p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img src="/images/sam-hamouda-best-seo-consultant-gcc.webp" alt="Sama Alaa — business consultant Dubai, founder upranked.io GCC SEO strategist" width={140} height={140} loading="lazy" className="rounded-xl border border-accent/20 flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 object-cover object-top" decoding="async" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Sama Alaa</h2>
                <p className="text-accent text-sm mb-3">Founder &amp; Chief Growth Strategist, upranked.io · Dubai, UAE</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">Sama Alaa is a specialist GCC growth strategist with 20+ client engagements across Medical, Industrial, and Business sectors in Dubai, Riyadh, Kuwait, and Bahrain. As the creator of the APEX Framework™, Sama personally leads every consultation — no handoffs. His direct, founder-led model means you get the same depth of expertise that built upranked.io's reputation across the GCC, London, and New York.</p>
                <div className="flex gap-4">
                  <Link href="/about/"><a className="text-accent text-sm hover:underline">Full Bio →</a></Link>
                  <a href="/contact/" className="text-accent text-sm hover:underline">Contact Us →</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Consultation Dubai — <span className="text-accent">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}</div>
        </div>
      </section>

      {/* BOOKING CTA + NAP #2 & #3 */}
      <section className="section-padding bg-gradient-to-br from-navy via-dark-gray to-navy">
        <div className="container-premium max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Star className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Clarity on Your <span className="text-accent">Growth Path</span></h2>
            <p className="text-text-secondary mb-6 leading-relaxed">Book a free 30-minute APEX Diagnostic with Sama Alaa. Come with your biggest growth challenge — leave with a clear, prioritised roadmap.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact/"><a className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">Book Free Intro Call <ArrowRight className="w-5 h-5" /></a></Link>
              <a href="/contact/" className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4">Contact Us</a>
            </div>
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary">
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors justify-center"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <span className="hidden sm:block text-border">|</span>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors justify-center"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2 justify-center"><MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY</span>
            </address>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
