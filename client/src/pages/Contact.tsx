import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, ChevronDown } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Book a Free SEO Strategy Call — upranked.io',
      description:
        'Book a free 30-minute SEO strategy call with Sama Alaa, founder of upranked.io. Serving businesses in Dubai, Riyadh, Kuwait City, Manama, London, and New York.',
      url: 'https://upranked.io/contact',
      provider: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I book a strategy call with Sama Alaa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fill in the contact form on this page or reach out directly via our contact page or email uprankedio@gmail.com. Sama reviews every inquiry personally and responds within 24 hours to schedule your free strategy call.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the initial strategy consultation really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — completely free, no strings attached. The 30-minute APEX Diagnostic is an honest conversation about your current digital position in the GCC market. You get real insights and a clear picture of what is possible, whether you engage with us or not.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the strategy call take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The initial call is 30 minutes. If there is strong alignment and a clear opportunity, Sama may invite you to an extended 60-minute APEX Diagnostic session at no cost. All scheduling happens over WhatsApp or email — no booking software required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I book a strategy call if I am not based in Dubai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. upranked.io works with businesses across all six priority markets: Dubai (UAE), Riyadh (KSA), Kuwait City, Manama (Bahrain), London (UK), and New York (USA). All calls are conducted remotely via video or WhatsApp.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I prepare before my SEO strategy call?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nothing formal is required. It helps to have a rough sense of your current website performance, your top 3 competitors, and the growth outcome you are chasing. Sama will guide the conversation — you do not need to prepare a brief or presentation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly will Sama respond to my inquiry near me in the GCC?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All inquiries are reviewed personally by Sama within 24 hours. Businesses in Dubai, Riyadh, Kuwait, and Bahrain receive priority responses given the time zone alignment. London and New York inquiries are also responded to within the same 24-hour window.',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      name: 'Sama Alaa',
      jobTitle: 'Founder & GCC SEO Strategist',
      worksFor: { '@type': 'Organization', name: 'upranked.io' },
      url: 'https://upranked.io/about',
      telephone: '+201121664778',
      email: 'uprankedio@gmail.com',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://upranked.io' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://upranked.io/contact' },
      ],
    },
  ],
};

const tocItems = [
  { id: 'what-to-expect', label: 'What to Expect' },
  { id: 'contact-form', label: 'Book a Call' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'faqs', label: 'FAQs' },
];

const serviceAreas = [
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', note: 'HQ Market — Business Bay, DIFC, Downtown Dubai', primary: true },
  { city: 'Riyadh', country: 'KSA', flag: '🇸🇦', note: 'King Fahd Rd, Olaya, North Riyadh corridors', primary: true },
  { city: 'Kuwait City', country: 'Kuwait', flag: '🇰🇼', note: 'Salmiya, Hawalli, Sharq financial district', primary: true },
  { city: 'Manama', country: 'Bahrain', flag: '🇧🇭', note: 'Diplomatic Area, Seef District, Amwaj Islands', primary: true },
  { city: 'London', country: 'UK', flag: '🇬🇧', note: 'City of London, Canary Wharf, West End', primary: true },
  { city: 'New York', country: 'USA', flag: '🇺🇸', note: 'Manhattan, Brooklyn, Tri-State Area', primary: true },
];

const expectItems = [
  'A real conversation with Sama — not an intake form review with a junior team',
  'Honest assessment of your current digital position in the GCC or global market',
  'Specific opportunities identified based on your industry and target market',
  'Clear next steps whether you engage with us or not — no high-pressure close',
];

const faqs = [
  {
    q: 'How do I book a strategy call with Sama Alaa?',
    a: 'Fill in the contact form on this page or reach out directly via our contact page or email uprankedio@gmail.com. Sama reviews every inquiry personally and responds within 24 hours to schedule your free strategy call.',
  },
  {
    q: 'Is the initial strategy consultation really free?',
    a: 'Yes — completely free, no strings attached. The 30-minute APEX Diagnostic is an honest conversation about your current digital position in the GCC market. You get real insights and a clear picture of what is possible, whether you engage with us or not.',
  },
  {
    q: 'How long does the strategy call take?',
    a: 'The initial call is 30 minutes. If there is strong alignment and a clear opportunity, Sama may invite you to an extended 60-minute APEX Diagnostic session at no cost. All scheduling happens over WhatsApp or email — no booking software required.',
  },
  {
    q: 'Can I book a strategy call if I am not based in Dubai?',
    a: 'Absolutely. upranked.io works with businesses across all six priority markets: Dubai (UAE), Riyadh (KSA), Kuwait City, Manama (Bahrain), London (UK), and New York (USA). All calls are conducted remotely via video or WhatsApp.',
  },
  {
    q: 'What should I prepare before my SEO strategy call?',
    a: 'Nothing formal is required. It helps to have a rough sense of your current website performance, your top 3 competitors, and the growth outcome you are chasing. Sama will guide the conversation — you do not need to prepare a brief or presentation.',
  },
  {
    q: 'How quickly will Sama respond to my inquiry near me in the GCC?',
    a: 'All inquiries are reviewed personally by Sama within 24 hours. Businesses in Dubai, Riyadh, Kuwait, and Bahrain receive priority responses given the time zone alignment. London and New York inquiries are also responded to within the same 24-hour window.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-dark-gray hover:bg-navy/50 transition-colors group"
      >
        <span className="font-semibold text-white pr-4 group-hover:text-accent transition-colors">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-2 bg-dark-gray border-t border-border">
              <p className="text-text-secondary leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [activeSection, setActiveSection] = useState('what-to-expect');
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({});

  usePageMeta({
    title: 'Book a Free SEO Strategy Call — Dubai, GCC & Global',
    description:
      'Book a free 30-minute SEO strategy call with Sama Alaa at upranked.io. Serving businesses in Dubai UAE, Riyadh KSA, Kuwait City, Manama Bahrain, London UK, and New York USA.',
    schema,
    schemaId: 'contact-schema',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          sectionRefs.current[e.target.id] = e;
        });
        const visible = Object.values(sectionRefs.current)
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    tocItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise(r => setTimeout(r, 1200));
    setFormState('success');
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Hero + NAP #1 */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-sm text-text-secondary mb-6">
                <Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link>
                <span className="mx-2 text-border">/</span>
                <span className="text-accent">Contact</span>
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Get in Touch</span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Book a Free SEO Strategy Call — Dubai, GCC, London &amp; New York
                </h1>
                <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                  A free 30-minute conversation with Sama Alaa. No pitch, no pressure — just clarity on what's possible for your business across the GCC and global markets. Available for clients in Dubai, Riyadh, Kuwait City, Manama, London, and New York.
                </p>

                {/* Featured snippet definition box */}
                <div className="bg-dark-gray border-l-4 border-accent rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">What You Get</p>
                  <p className="text-white font-semibold mb-1">The Free APEX Diagnostic</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    A focused 30-minute strategy session where Sama Alaa applies the APEX Framework™ to your specific situation — delivering an honest audit of your current digital position, a competitor analysis, and a prioritized growth roadmap. No obligations, no upsells during the call.
                  </p>
                </div>

                {/* NAP #1 */}
                <div className="flex flex-wrap gap-5 text-sm text-text-secondary">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
                  <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
                  <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="flex justify-center items-center">
              <div className="w-full max-w-[800px]">
                <img
                  src="/heroes/08-magnifier-audit.svg"
                  alt="SEO audit magnifier visual — free APEX Diagnostic call with upranked.io founder Sama Alaa"
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content + sticky TOC */}
      <div className="px-4 md:px-6 lg:px-8 py-12">
        <div className="container-premium grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <p className="text-xs text-text-secondary uppercase tracking-widest mb-4 font-semibold">On This Page</p>
              <nav className="space-y-1">
                {tocItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm py-1.5 px-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'text-accent bg-accent/10 font-semibold'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* NAP #2 */}
              <div className="mt-8 p-4 bg-dark-gray border border-border rounded-xl text-xs text-text-secondary space-y-2">
                <p className="text-white font-semibold text-sm mb-2">upranked.io</p>
                <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-accent flex-shrink-0" /> Dubai, UAE — GCC &amp; Global</p>
                <a href="/contact/" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Phone className="w-3 h-3 text-accent flex-shrink-0" /> Contact Us</a>
                <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors"><Mail className="w-3 h-3 text-accent flex-shrink-0" /> uprankedio@gmail.com</a>
              </div>

              <div className="mt-4 p-4 bg-navy border border-accent/30 rounded-xl text-xs">
                <p className="text-accent font-semibold mb-1">Response Time</p>
                <p className="text-text-secondary">All inquiries reviewed personally by Sama within 24 hours. Priority for GCC-based businesses.</p>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-20">

            {/* What to Expect */}
            <section id="what-to-expect">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">What to Expect</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  The free APEX Diagnostic is not a sales call disguised as a consultation. It is a structured 30-minute session where Sama reviews your actual situation — your market, your competitors, your current digital position — and gives you a frank, expert perspective on what is possible. The goal is to leave you with clarity, not a quote.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                  {expectItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-dark-gray border border-border rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: 'Free', label: 'No cost, ever' },
                    { value: '30 min', label: 'Focused session' },
                    { value: '24hr', label: 'Response guarantee' },
                    { value: '6', label: 'Priority markets' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-dark-gray border border-border rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-black text-accent mb-1">{s.value}</div>
                      <div className="text-text-secondary text-xs">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* E-E-A-T bio */}
                <div className="mt-10 bg-dark-gray border border-accent/30 rounded-2xl p-6">
                  <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-4">Who You'll Speak With</p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <img src="/images/sam-hamouda-seo-consultant-dubai.webp" alt="Sama Alaa — Founder of upranked.io, GCC SEO Strategist Dubai" width={64} height={64} loading="lazy" className="w-16 h-16 rounded-full object-cover object-top flex-shrink-0 border-2 border-accent/30" decoding="async" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Sama Alaa</h3>
                      <p className="text-accent text-sm font-medium mb-3">Founder, upranked.io — GCC SEO Strategist &amp; Creator of the APEX Framework™</p>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Sama Alaa personally handles every initial strategy conversation at upranked.io. There are no junior intake calls, no gatekeeping staff. When you book a call, you speak directly with the founder — the same person who will design and execute your growth strategy if you choose to move forward.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Contact Form */}
            <section id="contact-form">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">Book Your Free Strategy Call</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Fill in the form below or contact Sama directly via WhatsApp or email. All messages are read and responded to personally within 24 hours — whether you are in Dubai, London, New York, or anywhere across the GCC.
                </p>

                {/* Direct contact options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a
                    href="/contact/"
                    className="flex items-center gap-4 p-4 bg-dark-gray border border-border rounded-xl hover:border-accent/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm group-hover:text-accent transition-colors">Contact Us</p>
                      <p className="text-text-secondary text-xs">Contact Us</p>
                    </div>
                  </a>
                  <a
                    href="mailto:uprankedio@gmail.com"
                    className="flex items-center gap-4 p-4 bg-dark-gray border border-border rounded-xl hover:border-accent/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm group-hover:text-accent transition-colors">Email Sama</p>
                      <p className="text-text-secondary text-xs">uprankedio@gmail.com</p>
                    </div>
                  </a>
                </div>

                {/* Form */}
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-premium text-center py-16"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Received</h3>
                    <p className="text-text-secondary leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. Sama will review your details personally and be in touch within 24 hours to schedule your strategy call.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="card-premium space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                      <p className="text-text-secondary text-sm">Fill in the form and Sama will follow up within 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="input-premium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">Phone / WhatsApp</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 ..."
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">Company Name</label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="input-premium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Market / Location</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-premium"
                      >
                        <option value="">Select your primary market...</option>
                        <optgroup label="GCC Priority Markets">
                          <option value="dubai-uae">Dubai, UAE</option>
                          <option value="riyadh-ksa">Riyadh, Saudi Arabia</option>
                          <option value="kuwait-city">Kuwait City, Kuwait</option>
                          <option value="manama-bahrain">Manama, Bahrain</option>
                          <option value="gcc-other">Other GCC (Abu Dhabi, Sharjah, Doha...)</option>
                        </optgroup>
                        <optgroup label="Global Markets">
                          <option value="london-uk">London, UK</option>
                          <option value="new-york-usa">New York, USA</option>
                          <option value="other-global">Other global market</option>
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-premium"
                      >
                        <option value="">Select a service...</option>
                        <optgroup label="SEO">
                          <option value="medical-seo">Medical SEO</option>
                          <option value="industrial-seo">Industrial SEO</option>
                          <option value="business-seo">Business SEO</option>
                        </optgroup>
                        <optgroup label="Growth Intelligence">
                          <option value="consultation">Business Consultation</option>
                          <option value="tools">Custom Growth Tools</option>
                          <option value="website">Custom Website</option>
                          <option value="strategy">Business Strategy</option>
                        </optgroup>
                        <option value="unsure">Not sure yet — need guidance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Tell Us About Your Challenge</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="What's your biggest growth challenge right now? What have you tried? What results are you aiming for?"
                        className="input-premium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="btn-primary w-full text-lg py-4 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? (
                        <>Sending...</>
                      ) : (
                        <>Send Message &amp; Book a Call <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>

                    <p className="text-text-secondary text-xs text-center">
                      By submitting this form you agree to be contacted by Sama Alaa at upranked.io. No spam — ever.
                    </p>
                  </form>
                )}
              </motion.div>
            </section>

            {/* Service Areas */}
            <section id="service-areas">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">Service Areas — GCC, UK &amp; USA</h2>
                <p className="text-text-secondary mb-8">
                  upranked.io works with high-value businesses across six priority markets. Book a free strategy call regardless of location — all consultations are conducted remotely via video or WhatsApp.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceAreas.map(area => (
                    <motion.div
                      key={area.city}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`border rounded-xl p-4 hover:border-accent/50 transition-colors ${
                        area.primary ? 'border-accent/30 bg-navy/60' : 'border-border bg-dark-gray'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{area.flag}</span>
                        {area.primary && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold">Priority</span>
                        )}
                      </div>
                      <h3 className="font-bold text-white">{area.city}, {area.country}</h3>
                      <p className="text-text-secondary text-xs mt-1">{area.note}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-text-secondary text-sm mt-4">
                  Also serving: Abu Dhabi, Sharjah, Jeddah, Dammam, Muscat, Doha, Birmingham, Manchester, Chicago, Los Angeles, Miami.
                </p>
              </motion.div>
            </section>

            {/* FAQs */}
            <section id="faqs">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-2">Booking FAQs</h2>
                <p className="text-text-secondary mb-8">
                  Common questions about booking a strategy call with Sama Alaa at upranked.io — for businesses in Dubai, Riyadh, Kuwait, Bahrain, London, and New York.
                </p>
                <div className="space-y-3">
                  {faqs.map(faq => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </motion.div>
            </section>
          </main>
        </div>
      </div>

      {/* CTA + NAP #3 */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Talk? <span className="text-accent">Book Your Free Call.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              30 minutes with Sama Alaa. Free, honest, and focused on your actual situation — whether you are in Dubai, Riyadh, Kuwait, Bahrain, London, or New York.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="/contact/"
                className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:uprankedio@gmail.com"
                className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-2"
              >
                Email Sama
              </a>
            </div>
            {/* NAP #3 */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> upranked.io — Dubai, UAE (GCC, UK &amp; USA)</span>
              <a href="/contact/" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4 text-accent" /> Contact Us</a>
              <a href="mailto:uprankedio@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail className="w-4 h-4 text-accent" /> uprankedio@gmail.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
