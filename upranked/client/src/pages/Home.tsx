/*
 * PAGE: /
 * PRIMARY KW: SEO agency Dubai (Vol: ~2,400/mo | KD: 42)
 * SECONDARY KW: GCC SEO agency, growth intelligence lab, upranked.io, SEO company Dubai UAE
 * LSI: digital marketing Dubai, organic growth GCC, APEX Framework SEO, Sam SEO
 * NEAR ME VARIANTS: SEO agency near me Dubai, SEO company near me UAE, SEO expert near me GCC
 * META TITLE (57 chars): SEO Agency Dubai & GCC | upranked.io — APEX Framework™
 * META DESC (158 chars): upranked.io is a premium SEO agency in Dubai & the GCC. Medical, Industrial & Business SEO built on the APEX Framework™ by Sam. Book a free strategy call.
 * INTERNAL LINKS TO: /contact, /about, /methodology, /industries, /growth-intelligence, /blog
 * SCHEMA: @graph → Organization + FAQPage + Person + BreadcrumbList
 * IMAGES: /images/home/seo-agency-dubai-hero.webp, gcc-seo-results.webp, apex-framework-overview.webp, sam-hamouda-seo-expert.webp
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ChevronDown, Stethoscope, Factory, Briefcase, Code2, Globe, TrendingUp, Target,
  CheckCircle, ArrowRight, MapPin, Phone, Mail, Star, Shield, Award, Search, Zap
} from 'lucide-react';
import { Link } from 'wouter';
import { usePageMeta } from '@/hooks/usePageMeta';

/* ─── Data ─── */
const seoServices = [
  { titleEn: 'Medical SEO', titleAr: 'تحسين محركات البحث الطبية', descEn: 'Rank #1 for patient searches across Dubai Healthcare City, UAE & GCC. DHA/MOH-compliant, bilingual EN/AR.', descAr: 'تصدر نتائج البحث عن المرضى في مدينة دبي للرعاية الصحية والإمارات والخليج', icon: Stethoscope, href: '/industries/medical' },
  { titleEn: 'Industrial SEO', titleAr: 'تحسين محركات البحث الصناعية', descEn: 'B2B procurement search dominance for manufacturers and suppliers in UAE free zones and GCC industrial cities.', descAr: 'هيمنة على بحث الشراء B2B للصناع والموردين في المناطق الحرة الإماراتية', icon: Factory, href: '/industries/industrial' },
  { titleEn: 'Business SEO', titleAr: 'تحسين محركات البحث للأعمال', descEn: 'Commercial-intent SEO for professional services, B2B companies, and enterprises across Dubai, Riyadh & beyond.', descAr: 'تحسين محركات البحث الموجه للتجارة للخدمات المهنية والشركات عبر دبي والرياض وما بعدها', icon: TrendingUp, href: '/industries/business' },
  { titleEn: 'AEO — Answer Engine', titleAr: 'تحسين محركات الإجابة', descEn: 'Get cited in ChatGPT, Google AI Overviews, Perplexity & Gemini. The fastest-growing visibility channel for Dubai businesses.', descAr: 'احصل على الاقتباس في ChatGPT ونظرات Google AI وPerplexity', icon: Zap, href: '/seo/aeo' },
  { titleEn: 'GEO — Generative SEO', titleAr: 'تحسين محركات الذكاء الاصطناعي', descEn: 'Generative Engine Optimization — rank your brand in AI-generated answers and multi-market search simultaneously.', descAr: 'تحسين محركات البحث التوليدية للظهور في نتائج الذكاء الاصطناعي', icon: Globe, href: '/seo/geo' },
];

const growthServices = [
  { titleEn: 'Business Consultation', titleAr: 'استشارات الأعمال', descEn: '1-on-1 strategic sessions with Sam — GCC market positioning, growth roadmap, APEX diagnostic.', descAr: 'جلسات استراتيجية فردية مع Sam', icon: Briefcase, href: '/growth-intelligence/consultation' },
  { titleEn: 'Tailored Tools', titleAr: 'أدوات مخصصة', descEn: 'Custom growth dashboards, keyword trackers, and intelligence platforms built for your GCC business.', descAr: 'لوحات تحكم مخصصة ومنصات ذكاء النمو', icon: Code2, href: '/growth-intelligence/tools' },
  { titleEn: 'Tailored Website', titleAr: 'موقع مخصص', descEn: 'Premium SEO-ready website designed and built for high-value businesses in Dubai, London, and the GCC.', descAr: 'موقع ويب متميز جاهز لتحسين محركات البحث لعملك', icon: Globe, href: '/growth-intelligence/websites' },
  { titleEn: 'Business Strategy', titleAr: 'استراتيجية الأعمال', descEn: 'Market positioning, competitor displacement strategy, and digital growth roadmap for UAE, KSA & global expansion.', descAr: 'تحديد موقعك في السوق وخارطة طريق النمو للخليج', icon: Target, href: '/growth-intelligence/strategy' },
];

const apexPhases = [
  { letter: 'A', phase: 'Audit', desc: 'Forensic review of your search presence, keyword gaps, technical health, and competitor rankings across GCC markets.' },
  { letter: 'P', phase: 'Position', desc: 'Revenue-intent keyword architecture targeting buyers in Dubai, Riyadh, Kuwait, London, and New York at the moment of decision.' },
  { letter: 'E', phase: 'Execute', desc: 'On-page, technical, bilingual content, schema markup, GBP optimisation, and authority link building — in the right sequence.' },
  { letter: 'X', phase: 'Expand', desc: 'Scale rankings to new GCC cities, new keywords, and new global markets. Compound organic ROI month over month.' },
];

const stats = [
  { value: '20+', label: 'GCC businesses served' },
  { value: '3', label: 'Specialisations: Medical, Industrial, Business' },
  { value: '280%', label: 'Avg organic lead increase at 12 months' },
  { value: '6', label: 'Priority markets: Dubai, Riyadh, Kuwait, Bahrain, London, NY' },
];

const faqs = [
  {
    q: 'What is upranked.io and what does it do?',
    a: 'upranked.io is a premium Growth Intelligence Lab — a specialist SEO agency based in Dubai, UAE, serving high-value businesses across the GCC and globally in London and New York. Founded by Sam, upranked.io delivers sector-specific SEO in three verticals: Medical SEO, Industrial B2B SEO, and Business SEO. Every engagement is built on the APEX Framework™ — a proprietary 4-phase methodology (Audit → Position → Execute → Expand) that ties organic search visibility directly to revenue and qualified leads.',
  },
  {
    q: 'What makes upranked.io different from other SEO agencies in Dubai?',
    a: 'Three distinctions: (1) Sector specialisation — we operate in Medical, Industrial, and Business SEO only, not every industry under the sun. (2) GCC-first, globally capable — built on deep UAE and Saudi Arabia market intelligence, with priority market coverage extending to London and New York. (3) Founder-led delivery — Sam is personally involved in every client engagement. No junior handoffs. Revenue, not rankings, is the primary metric.',
  },
  {
    q: 'What is the APEX Framework™?',
    a: 'The APEX Framework™ is upranked.io\'s proprietary 4-phase SEO and growth methodology: Audit (full digital health and keyword opportunity review), Position (commercial-intent keyword architecture for GCC and global markets), Execute (on-page, technical, bilingual EN/AR content, schema, and authority building), and Expand (scaling to new markets, keywords, and compounding ROI). Created by Sam from 20+ GCC client engagements. Learn more at the Methodology page.',
  },
  {
    q: 'Which markets does upranked.io serve?',
    a: 'upranked.io serves six priority markets: Dubai (UAE), Riyadh (Saudi Arabia), Kuwait City (Kuwait), Manama (Bahrain), London (UK), and New York (USA). Within the GCC, we also cover Abu Dhabi, Sharjah, Ajman, Jeddah, NEOM, and Doha. Engagements are conducted remotely and in person. If you\'re searching for an SEO agency near me in Dubai or an SEO company near me in London, upranked.io is your GCC-specialist option.',
  },
  {
    q: 'Does upranked.io do bilingual Arabic and English SEO?',
    a: 'Yes — bilingual SEO is standard in every engagement. We conduct independent Arabic keyword research (not translated English keywords), produce or review native-quality Arabic content, implement hreflang tagging, and configure RTL technical requirements. Arabic search in the UAE and Saudi Arabia is a separate channel with distinct buyer patterns. Businesses that skip Arabic SEO leave 35–50% of GCC search volume untouched.',
  },
  {
    q: 'How do I get started with upranked.io?',
    a: 'Book a free 30-minute APEX Diagnostic call with Sam. In that session, you\'ll get a clear picture of your current search position, a competitor gap analysis for your GCC market, and a prioritised roadmap — no commitment required. You can book via the Contact page, our contact page, or email uprankedio@gmail.com.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://upranked.io/#organization',
      name: 'upranked.io',
      alternateName: 'upranked',
      description: 'Premium Growth Intelligence Lab — specialist SEO agency in Dubai delivering Medical SEO, Industrial B2B SEO, and Business SEO across the GCC, UK, and USA on the APEX Framework™.',
      url: 'https://upranked.io',
      logo: 'https://upranked.io/logo.png',
      telephone: '+201121664778',
      email: 'uprankedio@gmail.com',
      founder: {
        '@type': 'Person',
        '@id': 'https://upranked.io/about#person',
        name: 'Sam',
        jobTitle: 'Founder & Chief Growth Strategist',
      },
      address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Bahrain' },
        { '@type': 'City', name: 'London' },
        { '@type': 'City', name: 'New York' },
      ],
      availableLanguage: [{ '@type': 'Language', name: 'English' }, { '@type': 'Language', name: 'Arabic' }],
      sameAs: ['https://www.linkedin.com/company/upranked-io/'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://upranked.io/#faq',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'Person',
      '@id': 'https://upranked.io/about#person',
      name: 'Sam',
      jobTitle: 'Founder & Chief Growth Strategist',
      worksFor: { '@type': 'Organization', '@id': 'https://upranked.io/#organization' },
      url: 'https://upranked.io/about',
      sameAs: ['https://www.linkedin.com/company/upranked-io/'],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://upranked.io/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
      ],
    },
  ],
};

/* ─── Animated hero growth dashboard ─── */
function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [traffic, setTraffic] = useState(0);
  const [keywords, setKeywords] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const counter = (setter: (n: number) => void, target: number, duration: number, delay: number) => {
      const t = setTimeout(() => {
        const start = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - start) / (duration * 1000), 1);
          setter(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, delay * 1000);
      return t;
    };
    const t1 = counter(setTraffic, 280, 1.4, 0.9);
    const t2 = counter(setKeywords, 24, 1.0, 1.2);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full select-none">
      <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-navy/85 border border-accent/30 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[11px] text-text-secondary uppercase tracking-wide font-medium mb-1">Organic Growth · 12-mo avg</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-accent leading-none">+{traffic}%</span>
                <span className="text-xs text-green-400 font-semibold">↑ GCC clients</span>
              </div>
            </div>
            <div className="flex items-end gap-1" style={{ height: 44 }}>
              {[22, 35, 28, 48, 58, 70, 86].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.55 + i * 0.07, duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                  className={`w-2.5 rounded-t-sm ${i === 6 ? 'bg-accent' : 'bg-accent/25'}`}
                />
              ))}
            </div>
          </div>

          <div className="mb-2">
            <svg viewBox="0 0 400 100" className="w-full h-[80px]" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hgFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5A623" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[28, 55, 82].map(y => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              <motion.path
                d="M0,90 C50,86 75,80 110,68 C142,57 162,48 195,36 C224,26 252,19 288,13 C315,8 345,6 390,4 L390,100 L0,100 Z"
                fill="url(#hgFill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.85 }}
              />
              <motion.path
                d="M0,90 C50,86 75,80 110,68 C142,57 162,48 195,36 C224,26 252,19 288,13 C315,8 345,6 390,4"
                stroke="#F5A623"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={{ duration: 1.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle cx="390" cy="4" r="4" fill="#F5A623"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                transition={{ delay: 2.4, duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              />
              <motion.circle cx="390" cy="4" r="4" fill="none" stroke="#F5A623"
                animate={inView ? { r: [4, 13, 4], opacity: [0.6, 0, 0.6], strokeWidth: [2, 0.5, 2] } : {}}
                transition={{ delay: 2.6, duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
            <div className="flex justify-between mt-0.5 px-0.5">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => (
                <motion.span key={m} className="text-[9px] text-text-secondary"
                  initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.45 + i * 0.09 }}>{m}</motion.span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { label: 'Page 1 Keywords', value: keywords },
              { label: '12-mo ROI', value: '4.8x' },
              { label: 'GCC Markets', value: 6 },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 6 }}
                transition={{ delay: 1.1 + i * 0.14, ease: [0.25, 1, 0.5, 1], duration: 0.4 }}
                className="bg-dark-gray/80 border border-border/50 rounded-xl p-2.5 text-center"
              >
                <p className="text-base font-black text-white leading-none mb-0.5">{s.value}</p>
                <p className="text-[9px] text-text-secondary leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-px overflow-hidden bg-border/30">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            style={{ width: '40%' }}
            initial={{ x: '-100%' }}
            animate={{ x: '350%' }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 3.5, ease: 'linear', repeatDelay: 4 }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="absolute -top-4 left-4 bg-dark-gray/95 border border-accent/35 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2 z-10"
      >
        <span className="text-base">🇦🇪</span>
        <div>
          <p className="text-white text-xs font-bold leading-none">Dubai, UAE</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="text-[9px] text-green-400">Active · Medical SEO</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="absolute -bottom-4 right-4 bg-dark-gray/95 border border-accent/35 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2 z-10"
      >
        <span className="text-base">🇸🇦</span>
        <div>
          <p className="text-white text-xs font-bold leading-none">Riyadh, KSA</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="text-[9px] text-green-400">Active · Business SEO</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── FAQ accordion (home page) ─── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-dark-gray hover:bg-navy/60 transition-colors duration-200"
      >
        <span className="font-semibold text-white pr-4 text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 py-5 text-text-secondary leading-relaxed text-sm md:text-base bg-navy/30 border-t border-border">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  usePageMeta({
    title: 'SEO Agency Dubai & GCC | upranked.io — APEX Framework™',
    description: 'upranked.io is a premium SEO agency in Dubai & the GCC. Medical, Industrial & Business SEO built on the APEX Framework™ by Sam. Book a free strategy call.',
    schemaId: 'home-schema',
    schema,
  });

  useEffect(() => {
    const lang = document.documentElement.lang || 'en';
    setLanguage(lang as 'en' | 'ar');
  }, []);

  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-10 texture-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-80 -z-10" />
        {/* Animated orbs — desktop only (blur-3xl is GPU-expensive on mobile) */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10 animate-orb" />
        <div className="hidden lg:block absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-accent/8 rounded-full blur-3xl -z-10 animate-orb-slow" />
        <div className="hidden lg:block absolute top-2/3 left-1/2 w-[280px] h-[280px] bg-yellow-500/5 rounded-full blur-3xl -z-10 animate-orb" style={{ animationDelay: '5s' }} />

        <div className="container-premium w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left: Text ── */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block text-accent font-semibold tracking-widest text-xs uppercase bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
                  Dubai, UAE · GCC · London · New York
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.55, ease: [0.25, 1, 0.5, 1] }}
                  className="inline-block bg-gradient-to-r from-accent to-yellow-500 text-black font-bold text-xs px-3 py-1.5 rounded-full"
                >
                  EN / AR
                </motion.span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {isAr ? (
                  <>upranked.io — <span className="gradient-text">وكالة SEO المتميزة</span> للخليج</>
                ) : (
                  <>SEO Agency Dubai &amp; GCC —{' '}<span className="shimmer-gold">Premium Growth Intelligence</span> Lab</>
                )}
              </h1>

              {/* Key Intelligence block — GEO / AI crawler target */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl px-6 py-4 mb-8">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Key Intelligence</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  upranked.io is a specialist SEO agency based in Dubai, serving high-value businesses in the GCC and globally in London and New York. Founded by Sam, it delivers Medical SEO, Industrial B2B SEO, and Business SEO using the proprietary APEX Framework™ — a 4-phase methodology (Audit → Position → Execute → Expand) that treats organic search as a revenue function, not a marketing cost.
                </p>
              </div>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {isAr
                  ? 'استراتيجية تحسين محركات البحث وذكاء النمو للعملاء ذوي القيمة العالية في منطقة الخليج ولندن ونيويورك'
                  : 'Sector-specific SEO and Growth Intelligence for high-value businesses in Dubai, Riyadh, Kuwait, Bahrain, London & New York — built on the APEX Framework™ by Sam.'}
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-text-secondary">
                {[
                  isAr ? 'خبراء السوق الخليجي' : '20+ GCC Clients Served',
                  isAr ? 'بقيادة المؤسس Sam' : 'Founded by Sam',
                  isAr ? 'إطار APEX™ الاحترافي' : 'APEX Framework™ Methodology',
                  isAr ? 'ثنائي اللغة EN/AR' : 'Bilingual EN/AR Strategy',
                ].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              {/* NAP #1 */}
              <address className="not-italic flex flex-wrap gap-4 text-sm text-text-secondary mb-8">
                <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> Contact Us
                </a>
                <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · New York
                </span>
              </address>

              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <Link href="/contact/">
                  <a className="btn-primary text-base px-8 py-4 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 active:scale-100 transition-all duration-300 inline-flex items-center gap-2">
                    {isAr ? 'احجز تشخيص APEX المجاني' : 'Book Free APEX Diagnostic'} <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="/seo-industries/">
                  <a className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2">
                    {isAr ? 'استكشف تخصصاتنا' : 'Explore Our Specialisations'}
                  </a>
                </Link>
              </div>

              <motion.div
                className="flex items-center gap-2 cursor-default"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-5 h-5 text-accent" />
                <span className="text-text-secondary text-xs">{isAr ? 'استكشف تخصصاتنا' : 'Explore Our Specialisations'}</span>
              </motion.div>
            </motion.div>

            {/* ── Right: Animated growth dashboard ── */}
            <div className="flex justify-center items-center lg:px-2 py-8">
              <div className="w-full max-w-[360px] sm:max-w-[440px] lg:max-w-none">
                <HeroVisual />
              </div>
            </div>

          </div>

          {/* Specialisations bar — inside hero, credibility anchored before first scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-10 pt-6 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-5 md:gap-8 text-xs text-text-secondary">
              {['Medical SEO Specialists', 'Industrial B2B SEO', 'Business SEO Dubai', 'AEO — Answer Engine', 'GEO — Generative SEO', 'Bilingual EN/AR', 'APEX Framework™', 'GCC + London + New York'].map(t => (
                <div key={t} className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-default">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS UPRANKED.IO — featured snippet target ── */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Is <span className="text-accent">upranked.io</span>?
            </h2>

            {/* Definition box */}
            <div className="border-l-4 border-accent bg-dark-gray/80 rounded-r-xl p-6 mb-8">
              <p className="font-semibold text-white mb-2 text-sm uppercase tracking-wide">Definition</p>
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-white">upranked.io</strong> is a premium Growth Intelligence Lab and specialist SEO agency based in Dubai, UAE. Founded by Sam, it provides sector-specific SEO and growth strategy for high-value businesses across the GCC (Dubai, Riyadh, Kuwait, Bahrain) and globally in London and New York. Unlike generalist agencies, upranked.io operates exclusively in Medical SEO, Industrial B2B SEO, and Business SEO — sectors where search visibility translates directly to high-value leads and revenue. Every engagement is delivered on the proprietary APEX Framework™: Audit → Position → Execute → Expand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'GCC-First, Globally Capable', body: 'Built on deep UAE and Saudi Arabia market intelligence. Priority coverage in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.' },
                { icon: Search, title: 'Sector-Specific Only', body: 'Medical SEO, Industrial B2B SEO, and Business SEO. Not every industry — the three sectors where GCC search intent and deal value are highest.' },
                { icon: Zap, title: 'Revenue-First Methodology', body: 'Every engagement measured in leads, pipeline, and revenue attributed to organic search. Not rankings, not sessions — revenue.' },
              ].map(item => (
                <div key={item.title} className="bg-dark-gray border border-border rounded-xl p-5 hover:border-accent/40 card-glow transition-colors">
                  <item.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SEO SERVICES ── */}
      <section id="services" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isAr ? 'خدمات تحسين محركات البحث المتخصصة' : 'Specialist'} <span className="text-accent">SEO Services</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {isAr
                ? 'ثلاثة قطاعات. ثلاث استراتيجيات. نتيجة واحدة: إيرادات عضوية من محركات البحث.'
                : 'Three sectors. Three strategies. One outcome: qualified inbound leads from organic search in your GCC market.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="group">
                  <Link href={service.href}>
                    <a className="card-premium-hover card-glow h-full flex flex-col gap-4 p-6 md:p-8 cursor-pointer transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{isAr ? service.titleAr : service.titleEn}</h3>
                      <p className="text-text-secondary flex-1 text-sm leading-relaxed">{isAr ? service.descAr : service.descEn}</p>
                      <div className="inline-flex items-center gap-1.5 text-accent font-semibold text-xs bg-accent/10 border border-accent/30 rounded-full px-3 py-1.5 mt-1 group-hover:bg-accent/20 group-hover:border-accent transition-all duration-300">
                        {isAr ? 'اكتشف المزيد ←' : 'Explore Service →'}
                      </div>
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/seo-industries/">
              <a className="btn-secondary inline-flex items-center gap-2 text-sm px-6 py-2.5">
                {isAr ? 'جميع خدمات SEO' : 'All SEO Services'} <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GROWTH INTELLIGENCE ── */}
      <section className="section-padding bg-navy border-t border-border">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-accent">{isAr ? 'ذكاء النمو' : 'Growth Intelligence'}</span>{isAr ? ' — ما وراء SEO' : ' — Beyond SEO'}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {isAr
                ? 'خدمات تطوير الأعمال المتخصصة — استشارات، أدوات، مواقع وأطر استراتيجية لعملك'
                : 'Business development services for GCC companies that need more than search rankings — strategy, consultation, custom tools, and SEO-ready websites.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="group">
                  <Link href={service.href}>
                    <a className="card-premium-hover card-glow h-full flex flex-col gap-4 p-6 cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{isAr ? service.titleAr : service.titleEn}</h3>
                      <p className="text-text-secondary flex-1 text-xs leading-relaxed">{isAr ? service.descAr : service.descEn}</p>
                      <div className="inline-flex items-center gap-1.5 text-accent font-semibold text-xs bg-accent/10 border border-accent/30 rounded-full px-3 py-1.5 mt-1 group-hover:bg-accent/20 group-hover:border-accent transition-all duration-300">
                        {isAr ? 'اكتشف المزيد ←' : 'Learn More →'}
                      </div>
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/growth-intelligence/">
              <a className="btn-secondary inline-flex items-center gap-2 text-sm px-6 py-2.5">
                {isAr ? 'جميع خدمات ذكاء النمو' : 'All Growth Intelligence Services'} <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── APEX TEASER ── */}
      <section className="section-padding bg-dark-gray border-y border-border section-accent-top">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The <span className="text-accent">APEX Framework™</span> — Our Methodology
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                Created by Sam from 20+ GCC client engagements. A 4-phase proprietary system that turns search visibility into measurable revenue — built for the UAE, Saudi Arabia, and global markets.
              </p>
            </div>

            {/* Desktop: flex row with animated flow connectors */}
            <div className="hidden lg:flex items-start gap-0 mb-8">
              {apexPhases.map((phase, i) => (
                <div key={phase.letter} className="flex items-start flex-1 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 bg-navy border border-border rounded-xl p-5 hover:border-accent/50 card-glow transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black font-black text-lg">{phase.letter}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">{phase.phase}</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">{phase.desc}</p>
                  </motion.div>
                  {i < 3 && (
                    <div className="flex-shrink-0 flex items-center justify-center w-9 self-stretch">
                      <motion.div
                        animate={{ x: [0, 4, 0], opacity: [0.35, 0.9, 0.35] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                      >
                        <ArrowRight className="w-4 h-4 text-accent/60" />
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile/tablet: grid with numbered step badges */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {apexPhases.map((phase, i) => (
                <motion.div
                  key={phase.letter}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-navy border border-border rounded-xl p-5 hover:border-accent/40 card-glow transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-[10px] font-bold text-accent flex-shrink-0">{i + 1}</span>
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-black font-black text-lg">{phase.letter}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-2">{phase.phase}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/">
                <a className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                  {isAr ? 'احجز تشخيص APEX المجاني' : 'Book Free APEX Diagnostic'} <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
              <Link href="/methodology/">
                <a className="btn-secondary inline-flex items-center gap-2 text-sm px-6 py-3">
                  {isAr ? 'استكشف المنهجية الكاملة' : 'Explore the Full Methodology'} <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <div className="py-5 bg-dark-gray border-b border-border/60">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center sm:text-left"
          >
            <p className="text-text-secondary text-sm">
              {isAr ? 'شاهدت ما يكفي؟ لنرسم خارطة فرصتك في الخليج —' : "Seen enough? Let's map your GCC search opportunity —"}
            </p>
            <Link href="/contact/">
              <a className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3 whitespace-nowrap hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                {isAr ? 'احجز تشخيص APEX المجاني' : 'Book Free APEX Diagnostic'} <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-dark-gray border border-border"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-accent mb-2">{s.value}</div>
                <div className="text-xs text-text-secondary leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sam BIO BOX ── */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-accent/30 rounded-2xl p-6 bg-navy/60"
          >
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">Your Growth Strategist — E-E-A-T Verified</p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src="/favicon.svg"
                alt="Sam — founder of upranked.io, GCC SEO expert and growth strategist based in Dubai UAE"
                width={140} height={140}
                loading="lazy"
                className="rounded-xl border border-accent/20 flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 object-cover"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Sam</h2>
                <p className="text-accent text-sm mb-4">Founder &amp; Chief Growth Strategist, upranked.io · Dubai, UAE</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Sam founded upranked.io on one conviction: the GCC's most valuable businesses deserve a growth partner who speaks their market, their language, and delivers results tied to revenue — not just traffic. With 20+ GCC client engagements across Medical, Industrial, and Business sectors, Sam personally leads every upranked.io engagement. No junior handoffs. No Western playbooks. Just sector-specific, bilingual, revenue-first SEO strategy built for Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/about/">
                    <a className="text-accent text-sm hover:underline inline-flex items-center gap-1">
                      Full Bio <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </Link>
                  <span className="text-border">|</span>
                  <a href="https://www.linkedin.com/company/upranked-io/" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                    LinkedIn →
                  </a>
                  <span className="text-border">|</span>
                  <Link href="/contact/">
                    <a className="text-accent text-sm hover:underline">Book a Call →</a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRIORITY MARKETS ── */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              SEO Agency <span className="text-accent">Near Me</span> — Priority Markets
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto text-sm">
              Searching for an SEO agency near me in Dubai, an SEO company near me in London, or a GCC growth strategist in Riyadh? upranked.io serves six priority markets and the broader GCC region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { flag: '🇦🇪', city: 'Dubai, UAE', tag: 'Primary Hub', detail: 'DIFC, Downtown, Business Bay, JLT, Dubai Healthcare City, DIC' },
                { flag: '🇸🇦', city: 'Riyadh, KSA', tag: 'Priority', detail: 'KAFD, Olaya, Diriyah Gate — Vision 2030 growth market' },
                { flag: '🇰🇼', city: 'Kuwait City', tag: 'Priority', detail: 'Salmiya, Hawally, Sharq financial district' },
                { flag: '🇧🇭', city: 'Manama, Bahrain', tag: 'Priority', detail: 'Bahrain Financial Harbour, Seef, Amwaj Islands' },
                { flag: '🇬🇧', city: 'London, UK', tag: 'Global', detail: 'City of London, Canary Wharf, Mayfair, Shoreditch' },
                { flag: '🇺🇸', city: 'New York, USA', tag: 'Global', detail: 'Manhattan, Midtown, Financial District, Brooklyn' },
              ].map(area => (
                <div key={area.city} className="border border-accent/20 bg-dark-gray rounded-xl p-4 hover:border-accent/50 transition-colors">
                  <h3 className="font-bold text-white mb-1.5 flex items-center gap-2 text-sm">
                    <span>{area.flag}</span>
                    <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    {area.city}
                    <span className="ml-auto text-xs text-accent border border-accent/30 rounded px-1.5 py-0.5 flex-shrink-0">{area.tag}</span>
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{area.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-accent">SEO Agency Dubai</span> — FAQ
            </h2>
            <p className="text-text-secondary text-sm">Common questions about upranked.io, the APEX Framework™, and how we work.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA + NAP #2 & #3 ── */}
      <section className="section-padding bg-gradient-to-br from-navy via-dark-gray to-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent -z-10" />
        <div className="container-premium max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Star className="w-12 h-12 text-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isAr
                ? 'هل أنت مستعد لتحويل البحث إلى إيرادات؟'
                : 'Ready to Turn Search into Your Top Revenue Channel?'}
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {isAr
                ? 'احجز مكالمة تشخيص APEX المجانية مع Sam — 30 دقيقة، تحليل واضح لفرصتك في السوق.'
                : 'Book a free 30-minute APEX Diagnostic call with Sam. Walk away with your GCC market opportunity map, competitor gap analysis, and a prioritised roadmap — no commitment required.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Link href="/contact/">
                <a className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                  {isAr ? 'احجز تشخيص APEX المجاني' : 'Book Free APEX Diagnostic'} <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a
                href="https://wa.me/201039173978?text=Hi%20Sam%2C%20I%27d%20like%20to%20book%20a%20free%20APEX%20Diagnostic%20call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-4"
              >
                {isAr ? 'واتساب Sam مباشرة' : 'WhatsApp Sam'}
              </a>
            </div>

            {/* NAP #3 */}
            <address className="not-italic flex flex-col sm:flex-row gap-4 justify-center text-sm text-text-secondary mt-10">
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors justify-center">
                <Phone className="w-4 h-4 text-accent" /> Contact Us
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors justify-center">
                <Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC · London · NY
              </span>
            </address>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
