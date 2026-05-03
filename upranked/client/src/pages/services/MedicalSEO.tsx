/**
 * SEO REFERENCE BLOCK (Internal — not visible on page)
 * URL: /industries/medical
 * Primary KW: medical SEO Dubai (commercial intent)
 * Secondary KWs: medical SEO UAE, SEO for clinics Dubai, hospital SEO UAE, healthcare SEO agency GCC,
 *   SEO for doctors Dubai, medical digital marketing UAE, clinic SEO agency near me, dental SEO Dubai,
 *   specialist SEO UAE, DHA compliant SEO, bilingual medical SEO, Arabic medical SEO UAE,
 *   Google Business Profile clinic Dubai, medical content marketing UAE, E-E-A-T healthcare SEO
 * Page Type: Sub-page (service)
 * Search Intent: Commercial
 * Location Targets: Dubai (primary, 40+), UAE, Abu Dhabi, Sharjah, Riyadh, Kuwait City, Doha, GCC
 * Near Me: 4+ uses
 * NAP Placements: Hero + Service Areas + Footer CTA = 3
 * Word Count Target: 2,500–3,500
 * Anchor Variations: medical SEO Dubai | medical SEO agency UAE | SEO for clinics GCC | healthcare SEO near me
 * Internal TO-links (10-12): /industries, /methodology, /contact, /about, /faq, /blog/medical-seo-dubai-clinics,
 *   /industries/business, /growth-intelligence/consultation, /industries/industrial, /blog/seo-uae-2026-what-works,
 *   /blog/bilingual-seo-arabic-english, /growth-intelligence/strategy
 * Internal FROM-links (4-6): /industries, /blog/medical-seo-dubai-clinics, /home services section, /faq
 */

import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { CheckCircle, ArrowRight, Search, MapPin, Phone, Mail, ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';

// ─── DATA ────────────────────────────────────────────────────────────────────

const benefits = [
  { title: 'Rank #1 for High-Intent Patient Queries', desc: 'We target the exact search terms patients in Dubai, Abu Dhabi, and across the UAE type when they need your speciality — not generic traffic that never books.' },
  { title: 'HIPAA-Aware E-E-A-T Content', desc: 'Medical content built to Google\'s strictest quality standards. Every page demonstrates Experience, Expertise, Authority, and Trust — the signals Google requires to rank YMYL healthcare content.' },
  { title: 'Google Business Profile Domination', desc: 'Local pack visibility for your clinic across Dubai, Abu Dhabi, Sharjah, and the wider UAE — the map results that drive the highest-intent patient appointments.' },
  { title: 'Medical Schema (Rich Results)', desc: 'Structured data markup (MedicalOrganization, MedicalProcedure, Physician) that generates star ratings, appointment links, and FAQ rich results directly in Google search.' },
  { title: 'Bilingual SEO — English + Arabic', desc: 'Native-quality Arabic medical content with proper RTL implementation and hreflang — capturing Arabic-speaking patients across the full GCC market that English-only sites completely miss.' },
  { title: 'Reputation Management & Reviews', desc: 'Systematic review generation strategy across Google, Doctify, and platform-specific directories — building the social proof that converts search visibility into booked appointments.' },
  { title: 'Local SEO Across the UAE & GCC', desc: 'Multi-location optimisation covering Dubai, Abu Dhabi, Sharjah, Ajman, Riyadh, Kuwait City, and Doha — every market your practice serves, covered.' },
  { title: 'Physician & Credential Pages', desc: 'Dedicated doctor profile pages with credentials, specialisations, and verified experience — the single most powerful E-E-A-T signal available to a medical practice.' },
  { title: 'DHA/MOH Compliance Signals', desc: 'Prominent DHA and MOH license display, regulatory body listings, and insurance partnership coverage that both patients and Google quality evaluators look for in UAE medical websites.' },
  { title: 'Bilingual Keyword Research', desc: 'Independent Arabic and English keyword research — not translated queries. Real search data for how GCC patients actually search in both languages.' },
  { title: 'Core Web Vitals Optimisation', desc: 'Medical websites that load in under 2.5 seconds on mobile, pass all three Core Web Vitals, and provide the seamless experience that converts search traffic into patient inquiries.' },
  { title: 'Monthly ROI Reporting', desc: 'Reports tied to patient inquiries, appointment bookings, and revenue influenced by organic search — not vanity metrics like impressions or generic rankings.' },
];

const process = [
  {
    step: 'A', label: 'Audit',
    title: 'APEX Medical Audit',
    desc: 'A comprehensive 5-dimension audit: technical health, E-E-A-T signals, competitive intelligence across GCC medical search, keyword landscape (EN + AR), and your current market positioning against ranked competitors in Dubai and across the UAE.',
    deliverables: ['Full crawl report + Core Web Vitals assessment', 'E-E-A-T gap analysis vs. top 3 ranking clinics', 'Bilingual keyword opportunity map', 'GBP audit and local visibility score'],
  },
  {
    step: 'P', label: 'Position',
    title: 'Patient Intent Mapping',
    desc: 'We identify the exact queries your patients type — symptoms, specialities, locations, procedures — and build a content architecture that positions your practice as the authoritative answer at every stage of the patient search journey.',
    deliverables: ['Patient intent funnel mapping (EN + AR)', 'Content architecture blueprint', 'Competitor displacement strategy', 'Positioning brief: what you own vs. what to build'],
  },
  {
    step: 'E', label: 'Execute',
    title: 'Authority Building',
    desc: 'Medical E-E-A-T content creation by healthcare-savvy writers, physician credential pages, structured data implementation, Google Business Profile optimisation, and strategic link acquisition from trusted GCC health publications and medical directories.',
    deliverables: ['Physician + procedure pages (EN + AR)', 'Schema markup: MedicalOrganization + FAQPage + Person', 'GBP optimisation + review generation system', 'Medical backlink outreach (DHA, MOH, health media)'],
  },
  {
    step: 'X', label: 'Expand',
    title: 'Performance Reporting',
    desc: 'Monthly reporting tied to real patient outcomes: inquiry volume from organic, appointment bookings attributed to SEO, cost-per-patient-acquisition from organic vs. paid, and the competitive displacement of ranked rivals across your target specialities.',
    deliverables: ['Monthly patient inquiry attribution report', 'Ranking movement dashboard (EN + AR)', 'ROI calculation: organic vs. paid CPA', 'Quarterly expansion opportunities brief'],
  },
];

const stats = [
  { value: '300%', label: 'Average organic traffic increase for GCC medical clients' },
  { value: '4–6mo', label: 'Average time to page 1 for primary speciality keywords in Dubai' },
  { value: '4.8x', label: 'Average ROI for medical SEO clients at 12 months' },
  { value: '100%', label: 'GCC market focus — no generic agency playbooks' },
];

const faqs = [
  {
    q: 'How long does medical SEO take to show results in Dubai and the UAE?',
    a: 'Most UAE clinics see meaningful ranking improvements within 3–5 months and significant traffic growth by month 6–9. Medical SEO operates under Google\'s strictest YMYL standards, which require genuine authority-building — this takes longer than e-commerce SEO but produces far more durable results. By month 12, well-executed medical SEO typically delivers 4–8x ROI versus paid alternatives.',
  },
  {
    q: 'What makes medical SEO different from standard SEO?',
    a: 'Google classifies healthcare content as YMYL (Your Money or Your Life) — meaning it applies the strictest E-E-A-T quality standards. A clinic website must demonstrate verifiable clinical credentials, patient experience signals, and authoritative backlinks from trusted medical sources. Generic SEO tactics that work for retail or hospitality will not rank healthcare content in the UAE.',
  },
  {
    q: 'Do you create Arabic medical content for GCC patients?',
    a: 'Yes — and it\'s one of our core specialisations. We conduct independent Arabic keyword research (not translated English queries), create native-quality Arabic medical content written or reviewed by educated Arabic speakers, and implement correct hreflang and RTL architecture. Arabic medical search in the UAE and Saudi Arabia is significantly under-served, creating asymmetric ranking opportunities for practices that invest in it properly.',
  },
  {
    q: 'Is SEO effective for private clinics and specialist practices in Dubai?',
    a: 'Exceptionally so. GCC patients — both Emiratis and the UAE\'s large expat population — actively search specialists online before booking. A well-ranked specialist clinic in Dubai typically sees 3–5x more organic patient inquiries than one relying solely on referrals. With the right long-tail speciality keywords, even new clinics can achieve local pack visibility within 3–4 months.',
  },
  {
    q: 'What is a medical SEO agency near me in Dubai, and how do I choose one?',
    a: 'A medical SEO agency near me in Dubai should specialise in healthcare — not be a generalist agency that treats a clinic like any other business. The right partner understands DHA and MOH compliance requirements, E-E-A-T principles for YMYL content, bilingual Arabic-English strategy, and GBP optimisation for UAE medical directories. Ask any agency for case studies of UAE medical clients and evidence of bilingual SEO capability before engaging.',
  },
  {
    q: 'What upranked.io\'s medical SEO differ from other agencies in the UAE?',
    a: 'Three factors: sector exclusivity (we only work with high-value GCC businesses, not generic SMBs), the APEX Framework™ (a proprietary 4-phase methodology built for trust-sensitive industries), and founder-led delivery (Sam Hamouda leads every medical SEO engagement personally — not a junior account manager). We also provide bilingual EN/AR strategy as standard, not as an add-on.',
  },
];

const serviceAreas = [
  { city: 'Dubai, UAE', detail: 'Dubai Healthcare City, JLT, Jumeirah, Downtown, Business Bay, Deira — Primary GCC hub', primary: true },
  { city: 'Riyadh, KSA', detail: 'Riyadh Medical Mile, KAFD, Olaya, Diriyah — Fastest-growing GCC market', primary: true },
  { city: 'Kuwait City, Kuwait', detail: 'Salmiya, Hawally, Sharq medical district, Rumaithiya — Strong private healthcare demand' },
  { city: 'Manama, Bahrain', detail: 'Seef Medical District, Diplomatic Area, Amwaj Islands, BDF hospital zone' },
  { city: 'London, UK', detail: 'Harley Street, City of London, Chelsea, Kensington, Mayfair private clinics — Global expansion market', primary: true },
  { city: 'New York, USA', detail: 'Manhattan, Upper East Side, Midtown medical practices & specialist groups — Global expansion market', primary: true },
  { city: 'Abu Dhabi & Sharjah, UAE', detail: 'Al Reem Island, Khalidiyah, Mussafah · Sharjah Healthcare City, Al Majaz, Al Nahda, Ajman Corniche' },
  { city: 'Jeddah & NEOM, KSA', detail: 'Jeddah Corniche, Al Hamra · NEOM health city developments, Eastern Province, Dammam' },
  { city: 'Doha, Qatar', detail: 'West Bay clinics, Lusail City, Hamad Medical Corporation area, Al Dafna, QSTP' },
];

// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-dark-gray hover:bg-navy/50 transition-colors group"
        aria-expanded={open}
      >
        <span className="font-semibold text-white pr-4 group-hover:text-accent transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-5 pb-5 pt-3 bg-dark-gray border-t border-border">
              <p className="text-text-secondary leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function MedicalSEO() {
  usePageMeta({
    title: 'Medical SEO Dubai & UAE | Healthcare SEO Agency | upranked.io',
    description: 'Specialist medical SEO agency for clinics, hospitals & practices in Dubai & UAE. E-E-A-T content, bilingual EN/AR, GBP optimisation. Book a free strategy call.',
    schemaId: 'medical-seo-schema',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://upranked.io/industries/medical#service',
          serviceType: 'Medical SEO',
          name: 'Medical SEO for GCC Healthcare Providers',
          description: 'Specialist SEO for hospitals, clinics, and medical practices across Dubai, UAE, and the wider GCC. E-E-A-T content, bilingual EN/AR strategy, Google Business Profile optimisation.',
          provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
          areaServed: ['AE', 'SA', 'KW', 'QA', 'BH'],
          url: 'https://upranked.io/industries/medical',
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://upranked.io/industries/medical#faq',
          mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@type': 'Person',
          '@id': 'https://upranked.io/about#sam',
          name: 'Sam Hamouda',
          jobTitle: 'Founder & Chief Growth Strategist',
          worksFor: { '@type': 'Organization', name: 'upranked.io' },
          url: 'https://upranked.io/about',
          sameAs: ['https://www.linkedin.com/company/115836359/'],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
            { '@type': 'ListItem', position: 2, name: 'SEO by Industry', item: 'https://upranked.io/industries' },
            { '@type': 'ListItem', position: 3, name: 'Medical SEO Dubai', item: 'https://upranked.io/industries/medical' },
          ],
        },
      ],
    },
  });

  return (
    <div className="min-h-screen bg-navy text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">SEO · Medical · Dubai & UAE</span>

              {/* H1 — primary KW in first 152 chars */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Medical SEO Dubai — <span className="gradient-text">Rank #1, Get More Patients</span>
              </h1>

              {/* Hero body ≤100 words */}
              <p className="text-lg text-text-secondary mb-6 leading-relaxed max-w-xl">
                Specialist medical SEO agency serving clinics, hospitals, and practices across Dubai, Abu Dhabi, and the GCC. We use the APEX Framework™ to build the E-E-A-T authority Google requires to rank healthcare websites — in English and Arabic — so your ideal patients find you, not your competitors.
              </p>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-text-secondary">
                {['DHA/MOH-Aware Strategy', 'Bilingual EN/AR', 'E-E-A-T Specialists', 'Founder-Led by Sam Hamouda'].map(t => (
                  <div key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              {/* 2 CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <a className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                    Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="/methodology">
                  <a className="btn-secondary text-lg px-8 py-4">View APEX Framework™</a>
                </Link>
              </div>

              {/* NAP #1 */}
              <div className="flex flex-wrap gap-6 text-sm text-text-secondary border-t border-border pt-6">
                <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> Contact Us
                </a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" /> Sam@upranked.io
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE
                </span>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="block">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-dark-gray aspect-[4/3]">
                <img
                  src="/images/sam-hamouda-seo-consultant-dubai.webp"
                  alt="Sam Hamouda — medical SEO consultant in Dubai ranking clinics and healthcare providers across the GCC at upranked.io"
                  width={600}
                  height={450}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-dark-gray/50">
                  <div className="text-center p-8">
                    <div className="text-6xl font-black text-accent mb-3">300%</div>
                    <div className="text-white font-semibold">Average organic traffic increase</div>
                    <div className="text-text-secondary text-sm mt-1">for GCC medical clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <section className="bg-dark-gray py-6 border-y border-border">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-text-secondary">
            {['Healthcare SEO Specialists', 'Google E-E-A-T Compliant', 'Bilingual EN/AR Content', 'DHA/MOH-Aware', 'APEX Framework™', 'GCC-Only Focus'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABLE OF CONTENTS ─────────────────────────────────────────────── */}
      <section className="section-padding-sm bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="p-6 rounded-xl bg-dark-gray border border-border">
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">On This Page</p>
            <ol className="space-y-2 text-sm">
              {[
                ['#what-is', 'What is Medical SEO?'],
                ['#why-different', 'Why Medical SEO in UAE is Different'],
                ['#whats-included', 'What\'s Included in Medical SEO'],
                ['#apex-process', 'The APEX Framework™ for Healthcare'],
                ['#results', 'Results & Statistics'],
                ['#expert-review', 'Expert Review — Sam Hamouda'],
                ['#why-upranked', 'Why upranked.io for Medical SEO?'],
                ['#service-areas', 'Service Areas — Dubai & GCC'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {label}
                  </a>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS MEDICAL SEO (featured snippet target) ─────────────────── */}
      <section id="what-is" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is <span className="text-accent">Medical SEO</span>?
            </h2>
            {/* Featured snippet: definition box */}
            <div className="p-6 rounded-xl bg-navy border-l-4 border-accent mb-8">
              <p className="text-white leading-relaxed">
                <strong>Medical SEO</strong> is the practice of optimising a healthcare website — clinic, hospital, or specialist practice — to rank higher on Google for the search terms potential patients use when looking for medical care in a specific location. Unlike standard SEO, medical SEO must comply with Google's strictest quality framework (YMYL — Your Money or Your Life), demonstrating verifiable clinical <strong>Experience, Expertise, Authority, and Trust (E-E-A-T)</strong> to rank sustainably.
              </p>
            </div>

            <p className="text-text-secondary leading-relaxed mb-5">
              In Dubai and across the UAE, patients increasingly begin their healthcare journey with a Google search — whether they're looking for a specialist in Dubai Marina, comparing dermatology clinics in Abu Dhabi, or searching in Arabic for a physiotherapy centre near me in Sharjah. Clinics that appear at the top of these searches capture the majority of new patient inquiries.
            </p>
            <p className="text-text-secondary leading-relaxed mb-5">
              The GCC medical SEO landscape presents a distinctive challenge: a highly competitive English-language market in Dubai and Abu Dhabi, an underserved but substantial Arabic-language patient base searching across the Emirates and into Saudi Arabia, and a regulatory environment (DHA, MOH, HAAD) that requires specific trust signals most agencies don't know to include.
            </p>

            <img
              src="/images/medical/medical-seo-uae-patient-search-journey.webp"
              alt="Medical SEO UAE — patient search journey from Google to clinic booking in Dubai"
              width={800}
              height={400}
              loading="lazy"
              className="w-full rounded-xl border border-border my-6"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHY DIFFERENT ─────────────────────────────────────────────────── */}
      <section id="why-different" className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Medical SEO in <span className="text-accent">Dubai & the UAE</span> is Different
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'YMYL Standards', icon: '⚖️', desc: 'Google applies its strictest quality evaluation to medical content. E-E-A-T signals that a lifestyle blog ignores are non-negotiable ranking factors for a Dubai clinic.' },
                { title: 'Bilingual Market', icon: '🌐', desc: 'The UAE\'s patient base searches in English, Arabic, and transliterated Arabic. A monolingual strategy misses 40–60% of the addressable market.' },
                { title: 'Local Pack Competition', icon: '📍', desc: 'The Google Maps results for "cardiologist Dubai" or "IVF clinic near me Abu Dhabi" drive more bookings than organic blue links — and require a completely different optimisation strategy.' },
              ].map(c => (
                <div key={c.title} className="p-6 rounded-xl bg-dark-gray border border-border">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="text-lg font-bold text-accent mb-2">{c.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Featured snippet: comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <caption className="text-left text-text-secondary text-xs mb-3">Medical SEO vs. Generic SEO — Key Differences</caption>
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left text-accent font-semibold">Factor</th>
                    <th className="py-3 px-4 text-left text-accent font-semibold">Generic SEO</th>
                    <th className="py-3 px-4 text-left text-accent font-semibold">Medical SEO (upranked.io)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Google Quality Standard', 'Standard', 'YMYL — highest tier'],
                    ['Content Requirements', 'Keyword-rich copy', 'Verifiable clinical E-E-A-T'],
                    ['Author Credentials', 'Not required', 'Doctor/specialist byline + bio'],
                    ['Schema Markup', 'Basic', 'MedicalOrganization, Physician, MedicalProcedure'],
                    ['Language Strategy', 'English only', 'Bilingual EN/AR with hreflang'],
                    ['Local Signals', 'GBP basics', 'DHA/MOH + medical directories'],
                    ['Link Sources', 'Any DA 40+', 'Healthcare publications + medical bodies'],
                  ].map(([factor, generic, medical], i) => (
                    <tr key={factor} className={`border-b border-border ${i % 2 === 0 ? 'bg-dark-gray/30' : ''}`}>
                      <td className="py-3 px-4 text-white font-medium">{factor}</td>
                      <td className="py-3 px-4 text-text-secondary">{generic}</td>
                      <td className="py-3 px-4 text-accent font-medium">{medical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────────── */}
      <section id="whats-included" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title mb-4">What's Included in <span className="text-accent">Medical SEO</span></h2>
            <p className="section-subtitle">Everything your UAE healthcare practice needs to dominate GCC search</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.04 }} viewport={{ once: true }} className="flex items-start gap-3 p-4 rounded-xl bg-navy border border-border hover:border-accent/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{b.title}</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding-sm bg-navy border-y border-border">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-xl mb-1">Is your clinic invisible on Google in Dubai?</p>
              <p className="text-text-secondary">Book a free 30-min APEX Diagnostic — no obligations, just clarity on what's possible.</p>
            </div>
            <Link href="/contact">
              <a className="btn-primary px-8 py-3 whitespace-nowrap inline-flex items-center gap-2">
                Get Your Free Audit <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── APEX PROCESS ──────────────────────────────────────────────────── */}
      <section id="apex-process" className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="section-title mb-4">The <span className="text-accent">APEX Framework™</span> for Healthcare SEO</h2>
            <p className="section-subtitle">A proven 4-phase methodology built for high-trust medical practices in the GCC</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }} className="card-premium relative overflow-hidden">
                <div className="text-7xl font-black text-border absolute -top-2 -right-2 leading-none select-none opacity-40">{p.step}</div>
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                  <span className="text-accent font-black text-lg">{p.step}</span>
                </div>
                <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">{p.label}</p>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.deliverables.map(d => (
                    <li key={d} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/methodology">
              <a className="btn-secondary px-8 py-3 inline-flex items-center gap-2">
                Explore the Full APEX Framework™ <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section id="results" className="section-padding-sm bg-navy">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 rounded-xl bg-dark-gray border border-border">
                <div className="text-4xl font-black text-accent mb-2">{s.value}</div>
                <div className="text-sm text-text-secondary leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-E-A-T EXPERT REVIEW ─────────────────────────────────────────── */}
      <section id="expert-review" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="card-premium p-8 md:p-10">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-6">Expert Review & E-E-A-T Verification</p>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img src="/images/sam-hamouda-seo-consultant-dubai.webp" alt="Sam Hamouda — Founder upranked.io, Medical SEO Expert GCC" width={96} height={96} loading="lazy" className="w-24 h-24 rounded-full object-cover object-top border-2 border-accent/30" decoding="async" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">Sam Hamouda</h3>
                  <span className="text-xs bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded-full font-semibold">Reviewed & Verified</span>
                </div>
                <p className="text-accent font-semibold text-sm mb-1">Founder, upranked.io · Creator of the APEX Framework™</p>
                <p className="text-text-secondary text-sm mb-4">GCC Growth Intelligence Specialist · Medical SEO Expert · Bilingual EN/AR Strategy</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  All medical SEO strategies on this page have been designed and personally reviewed by Sam Hamouda. Every engagement at upranked.io is founder-led — meaning the strategy, content architecture, and execution direction for your clinic or practice comes directly from Sam, not delegated to a junior account manager. Sam has worked with medical practices across Dubai, Abu Dhabi, and the wider GCC, building the APEX Framework™ specifically for the complex authority requirements of healthcare SEO in the UAE.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Star className="w-4 h-4 text-accent" />
                    <span>20+ GCC clients served</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>APEX Framework™ Creator</span>
                  </div>
                  <a href="https://www.linkedin.com/company/115836359/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
                    LinkedIn Profile →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY UPRANKED.IO ───────────────────────────────────────────────── */}
      <section id="why-upranked" className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Healthcare Practices Choose <span className="text-accent">upranked.io</span> Over Other Agencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Medical SEO Specialists — Not Generalists', desc: 'We don\'t serve restaurants, e-commerce, or SaaS alongside your clinic. Our GCC-only focus means every strategy, keyword database, and link contact is relevant to high-value healthcare in Dubai and the UAE.' },
                { title: 'The APEX Framework™ — Built for E-E-A-T', desc: 'Standard SEO playbooks were not designed for YMYL content. The APEX Framework™ was built specifically for trust-sensitive industries — starting with the authority signals Google requires before rankings can move.' },
                { title: 'Bilingual Capability — Real Arabic SEO', desc: 'We don\'t machine-translate your English pages. We conduct independent Arabic keyword research, write native-quality Arabic medical content, and implement correct RTL architecture — capturing a patient segment your English-only competitors cannot reach.' },
                { title: 'Founder-Led on Every Engagement', desc: 'Sam Hamouda personally leads every medical SEO engagement. You\'re not passed to a junior team after signing — strategy, direction, and quality review remain with the founder throughout.' },
                { title: 'ROI-Tied Reporting', desc: 'We report on patient inquiries, appointment bookings, and cost-per-patient from organic search — not impressions and traffic that don\'t pay your lease.' },
                { title: 'No Long-Term Lock-in', desc: 'Month-to-month after the initial setup phase. We keep clients through results, not contracts.' },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl bg-dark-gray border border-border hover:border-accent/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE AREAS + NAP #2 ────────────────────────────────────────── */}
      <section id="service-areas" className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Medical SEO Service Areas — <span className="text-accent">GCC, UK &amp; USA</span>
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              upranked.io provides medical SEO services across the GCC (Dubai, Riyadh, Kuwait, Bahrain) and global markets in London and New York. Whether your clinic is in Dubai Healthcare City, Harley Street London, or Manhattan — our APEX Framework™ adapts to each market's search landscape and patient behaviour. Searching for a medical SEO agency near me in Dubai, London, or New York? We're here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {serviceAreas.map(area => (
                <div key={area.city} className={`p-4 rounded-xl border hover:border-accent/50 transition-colors ${area.primary ? 'bg-navy border-accent/30' : 'bg-navy/50 border-border'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <h3 className="font-bold text-white text-sm">{area.city}</h3>
                    {area.primary && <span className="ml-auto text-xs text-accent border border-accent/30 rounded px-1.5 py-0.5 flex-shrink-0">Priority</span>}
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">{area.detail}</p>
                </div>
              ))}
            </div>

            {/* NAP #2 */}
            <div className="p-6 rounded-xl bg-navy border border-accent/30 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div>
                <p className="font-bold text-white text-lg mb-1">upranked.io</p>
                <p className="text-text-secondary text-sm">Premium Growth Intelligence Lab · Medical SEO Specialists</p>
              </div>
              <div className="flex flex-wrap gap-6 text-sm md:ml-auto">
                <a href="/contact" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> Contact Us
                </a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" /> Sam@upranked.io
                </a>
                <span className="flex items-center gap-2 text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="section-title mb-3">Medical SEO <span className="text-accent">FAQ</span></h2>
            <p className="text-text-secondary">Common questions from UAE clinics and healthcare practices</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={f.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}>
                <FAQItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq">
              <a className="text-accent hover:underline text-sm">View all SEO FAQs →</a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA (most prominent) ──────────────────────────────────── */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <div className="p-10 md:p-14 rounded-2xl bg-gradient-to-br from-navy to-dark-gray border border-accent/30 shadow-2xl shadow-accent/10">
              <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-4">Free APEX Diagnostic — No Obligation</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Ready to Become the <span className="text-accent">Top-Ranked</span> Medical Practice in Your Speciality?
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Book a free 30-minute strategy call with Sam Hamouda. We'll audit your clinic's current search visibility in Dubai and across the UAE, identify the highest-intent patient queries you're missing, and give you a clear, honest picture of what it would take to dominate your market.
              </p>
              <Link href="/contact">
                <a className="btn-primary text-xl px-12 py-6 inline-flex items-center gap-3 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                  Book Your Free Strategy Call <ArrowRight className="w-6 h-6" />
                </a>
              </Link>

              {/* NAP #3 */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-text-secondary border-t border-border pt-6">
                <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> Contact Us
                </a>
                <a href="mailto:Sam@upranked.io" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" /> Sam@upranked.io
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Dubai, UAE · GCC Region
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
