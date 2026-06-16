import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, XCircle, Star, Shield, Zap, Globe, TrendingUp } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'SEO Pricing Dubai & GCC — upranked.io Packages 2026',
      description: 'Transparent SEO pricing for Dubai, UAE, and GCC businesses. APEX Diagnostic, Growth, Authority, and GCC Scale retainers. Founder-led bilingual EN/AR SEO by Sam at upranked.io.',
      url: 'https://upranked.io/pricing/',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does SEO cost in Dubai in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO in Dubai ranges from AED 1,500/month for basic local packages to AED 50,000+/month for large enterprise campaigns. upranked.io offers founder-led bilingual SEO starting from $650 one-time (APEX Diagnostic) and monthly retainers from $1,200/month — positioned in the premium mid-market, not the commodity tier.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in upranked.io\'s SEO retainer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every retainer includes technical SEO, content strategy, keyword tracking, and monthly reporting. Authority and GCC Scale packages add full bilingual Arabic-English SEO, link building, schema markup, and AEO/GEO optimisation for AI search visibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a minimum contract length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'upranked.io works on 3-month minimum engagements to allow sufficient time for meaningful organic results. Most clients see measurable movement within 60–90 days. Long-term retainers are month-to-month after the initial 3 months.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer one-off SEO audits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The APEX Diagnostic is a one-time engagement at $650 / AED 2,400. It includes a full technical audit, competitor gap analysis, GCC keyword opportunity map, and a 90-day prioritised roadmap — delivered directly by Sam.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why are upranked.io prices lower than large Dubai SEO agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'upranked.io is a boutique, founder-led practice — not a large agency with layers of account managers, sales teams, and overhead. Every dirham you invest goes directly into your SEO strategy, not into running a 50-person office. You get senior-level expertise at a price that reflects lean, specialist delivery.',
          },
        },
      ],
    },
    {
      '@type': 'PriceSpecification',
      name: 'APEX Diagnostic',
      price: '650',
      priceCurrency: 'USD',
      description: 'One-time SEO audit, competitor analysis, keyword map, and 90-day roadmap for GCC businesses.',
    },
  ],
};

const plans = [
  {
    id: 'diagnostic',
    icon: Zap,
    name: 'APEX Diagnostic',
    tag: 'Free · Limited Time',
    priceUSD: '$650',
    priceAED: 'AED 2,400',
    period: 'one-time',
    description: 'For a limited time, the full APEX Diagnostic is free. Get a complete picture of your GCC search position, keyword gaps, and fastest path to page 1 — at no cost.',
    cta: 'Claim Free Diagnostic',
    href: '/contact/',
    highlight: false,
    includes: [
      'Full technical SEO audit',
      'Competitor gap analysis (3 rivals)',
      'GCC keyword opportunity map',
      'Bilingual EN/AR keyword coverage',
      'Commercial-intent priority scoring',
      '90-day prioritised roadmap',
      'Delivered by Sam personally',
      'PDF + live 60-min walkthrough',
    ],
    excludes: [
      'Ongoing optimisation',
      'Content production',
      'Link building',
    ],
  },
  {
    id: 'growth',
    icon: TrendingUp,
    name: 'Growth Retainer',
    tag: 'Monthly',
    priceUSD: '$1,200',
    priceAED: 'AED 4,400',
    period: '/month',
    description: 'Core SEO execution for businesses ready to move from invisible to consistently ranking for their highest-value English keywords.',
    cta: 'Start Growing',
    href: '/contact/',
    highlight: false,
    includes: [
      'Technical SEO (ongoing fixes)',
      'On-page optimisation (4 pages/mo)',
      'English keyword targeting',
      'Google Business Profile optimisation',
      'Monthly rank tracking report',
      'Core link building (2 links/mo)',
      'Schema markup implementation',
      'Monthly strategy call with Sam',
    ],
    excludes: [
      'Arabic content production',
      'Multi-market GCC targeting',
    ],
  },
  {
    id: 'authority',
    icon: Star,
    name: 'Authority Retainer',
    tag: 'Most Popular',
    priceUSD: '$2,200',
    priceAED: 'AED 8,100',
    period: '/month',
    description: 'Full bilingual EN/AR SEO for businesses competing in GCC\'s most valuable sectors — Medical, Industrial, and professional services.',
    cta: 'Build Authority',
    href: '/contact/',
    highlight: true,
    includes: [
      'Everything in Growth, plus:',
      'Full bilingual EN/AR SEO',
      'Native Arabic keyword research',
      'Arabic content production (4 pieces/mo)',
      'hreflang + RTL technical setup',
      'On-page optimisation (8 pages/mo)',
      'Authority link building (5 links/mo)',
      'AEO/GEO AI search optimisation',
      'FAQPage + schema full coverage',
      'Bi-weekly strategy calls with Sam',
    ],
    excludes: [],
  },
  {
    id: 'gcc-scale',
    icon: Globe,
    name: 'GCC Scale',
    tag: 'Multi-Market',
    priceUSD: '$3,600',
    priceAED: 'AED 13,200',
    period: '/month',
    description: 'For businesses expanding across two or more GCC markets — UAE + KSA, UAE + Kuwait, or any multi-country combination.',
    cta: 'Scale Across GCC',
    href: '/contact/',
    highlight: false,
    includes: [
      'Everything in Authority, plus:',
      'Coverage for 2 GCC markets',
      'Country-specific keyword architectures',
      'Market-specific Arabic dialects',
      'Localised content for each market',
      'On-page optimisation (16 pages/mo)',
      'Aggressive link building (10 links/mo)',
      'Cross-market authority building',
      'Competitor displacement strategy',
      'Weekly strategy calls with Sam',
    ],
    excludes: [],
  },
];

const compareRows = [
  { feature: 'Technical SEO audit', diagnostic: true, growth: true, authority: true, gcc: true },
  { feature: 'Keyword research (EN)', diagnostic: true, growth: true, authority: true, gcc: true },
  { feature: 'Monthly rank tracking', diagnostic: false, growth: true, authority: true, gcc: true },
  { feature: 'On-page optimisation', diagnostic: false, growth: true, authority: true, gcc: true },
  { feature: 'Google Business Profile', diagnostic: false, growth: true, authority: true, gcc: true },
  { feature: 'Link building', diagnostic: false, growth: '2/mo', authority: '5/mo', gcc: '10/mo' },
  { feature: 'Arabic SEO (EN/AR bilingual)', diagnostic: true, growth: false, authority: true, gcc: true },
  { feature: 'Arabic content production', diagnostic: false, growth: false, authority: '4/mo', gcc: 'Custom' },
  { feature: 'AEO / AI search optimisation', diagnostic: false, growth: false, authority: true, gcc: true },
  { feature: 'Schema markup', diagnostic: false, growth: true, authority: true, gcc: true },
  { feature: 'Multi-market GCC coverage', diagnostic: false, growth: false, authority: false, gcc: true },
  { feature: 'Direct access to Sam', diagnostic: true, growth: true, authority: true, gcc: true },
];

const faqs = [
  {
    q: 'How much does SEO cost in Dubai in 2026?',
    a: 'Most Dubai SEO agencies charge AED 1,500–3,500/month for basic packages, AED 4,000–12,000 for standard SME retainers, and AED 12,000–50,000+ for enterprise or multi-market campaigns. upranked.io sits in the premium mid-market: founder-led, bilingual, and GCC-specialist — priced at $1,200–$3,600/month depending on scope.',
  },
  {
    q: 'Why should I choose upranked.io over a larger SEO agency in Dubai?',
    a: "Larger agencies split your budget across account managers, sales teams, and overhead. At upranked.io, Sam personally leads every engagement — meaning your strategy is built and executed by the same GCC SEO specialist who designed the APEX Framework™, not delegated to a junior after the sales call.",
  },
  {
    q: 'Is there a minimum contract length?',
    a: 'Monthly retainers require a 3-month minimum. SEO compounds over time — meaningful ranking movement typically takes 60–90 days in competitive GCC markets. After month 3, engagements continue month-to-month with no lock-in.',
  },
  {
    q: 'Do prices include Arabic content production?',
    a: 'Arabic SEO strategy and keyword research are included from the Authority Retainer upward. Native Arabic content production (4 pieces/month) is included in Authority; full custom volume is included in GCC Scale. Growth Retainer covers English only.',
  },
  {
    q: 'Can I start with the APEX Diagnostic and upgrade to a retainer?',
    a: 'Yes — and most clients do. The Diagnostic gives you a clear roadmap before committing to ongoing spend. Right now the Diagnostic is free (limited time, value $650), so there is no upfront cost to getting started. If you move to a retainer within 30 days, the transition is seamless with no setup fees.',
  },
  {
    q: 'Do you offer custom pricing for larger or more complex projects?',
    a: 'Yes. Medical practices with multiple locations, industrial B2B companies with large product catalogues, or businesses targeting 3+ GCC markets often need custom scoping. Book a free 30-minute call and Sam will outline what a tailored engagement would look like.',
  },
];

function CellValue({ val }: { val: boolean | string }) {
  if (val === true) return <CheckCircle className="w-5 h-5 text-accent mx-auto" />;
  if (val === false) return <XCircle className="w-4 h-4 text-border mx-auto" />;
  return <span className="text-accent font-semibold text-sm">{val}</span>;
}

export default function Pricing() {
  usePageMeta({
    title: 'SEO Pricing Dubai & GCC — Transparent Packages 2026',
    description: 'APEX Diagnostic is free for a limited time (value $650). Transparent SEO pricing for Dubai UAE and GCC businesses. Growth retainer from $1,200/month. Founder-led by Sam at upranked.io.',
    schemaId: 'pricing-schema',
    schema,
  });

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Pricing</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transparent SEO Pricing — <span className="gradient-text">No Hidden Fees</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
              Every upranked.io engagement is founder-led by Sam. You see the price, you know what's included, and you deal with the same person from first call to monthly report. No junior handoffs. No surprise invoices.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Bilingual EN/AR included from Authority tier</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 3-month minimum — then month-to-month</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> APEX Diagnostic is free right now — limited time, no commitment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market context banner */}
      <section className="bg-dark-gray border-y border-border py-6">
        <div className="container-premium max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-1 flex-shrink-0 bg-accent rounded-full self-stretch" />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">Market Context — Dubai SEO Pricing 2026</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Standard SEO agencies in Dubai charge <strong className="text-white">AED 4,000–12,000/month</strong> for SME packages. Premium bilingual agencies charge <strong className="text-white">AED 12,000–25,000/month</strong>. Enterprise multi-market campaigns start at <strong className="text-white">AED 15,000–50,000+/month</strong>. upranked.io prices are positioned below the market rate at every tier — with founder-led delivery that most agencies charge enterprise rates to match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col rounded-2xl border p-6 ${
                    plan.id === 'diagnostic'
                      ? 'border-green-500/50 bg-dark-gray/80 shadow-xl shadow-green-500/10'
                      : plan.highlight
                      ? 'border-accent bg-dark-gray shadow-2xl shadow-accent/20'
                      : 'border-border bg-dark-gray/50'
                  }`}
                >
                  {plan.id === 'diagnostic' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">🔥 Free Right Now</span>
                    </div>
                  )}
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-navy text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.id === 'diagnostic' ? 'bg-green-500/15' : plan.highlight ? 'bg-accent/20' : 'bg-navy'}`}>
                      <Icon className={`w-5 h-5 ${plan.id === 'diagnostic' ? 'text-green-400' : 'text-accent'}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-widest ${plan.id === 'diagnostic' ? 'text-green-400' : plan.highlight ? 'text-accent' : 'text-text-secondary'}`}>{plan.tag}</span>
                      <p className="font-bold text-white text-sm">{plan.name}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    {plan.id === 'diagnostic' ? (
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="text-4xl font-black text-green-400">FREE</span>
                          <span className="text-text-secondary text-sm line-through opacity-60">$650</span>
                        </div>
                        <p className="text-xs text-green-400/80 font-medium">Limited time offer · $650 value</p>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-white">{plan.priceUSD}</span>
                          <span className="text-text-secondary text-sm">{plan.period}</span>
                        </div>
                        <p className="text-text-secondary text-xs mt-1">{plan.priceAED}{plan.period !== 'one-time' ? '/month' : ' one-time'}</p>
                      </div>
                    )}
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">{plan.description}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.includes.map((item, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${item.startsWith('Everything') ? 'text-accent font-semibold' : 'text-text-secondary'}`}>
                        {!item.startsWith('Everything') && <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />}
                        {item}
                      </li>
                    ))}
                    {plan.excludes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-border">
                        <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href}>
                    <a className={`w-full text-center py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.id === 'diagnostic'
                        ? 'bg-green-500 text-white hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30'
                        : plan.highlight
                        ? 'bg-accent text-navy hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30'
                        : 'border border-accent text-accent hover:bg-accent/10'
                    }`}>
                      {plan.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-text-secondary text-sm mt-8"
          >
            APEX Diagnostic is free for a limited time (value $650). Monthly retainers from $1,200/month. AED rates at 1 USD = 3.67 AED. 3-month minimum. No setup fees.
          </motion.p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Full <span className="text-accent">Feature Comparison</span></h2>
            <p className="text-text-secondary">Everything side-by-side — no asterisks, no fine print.</p>
          </motion.div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-4 text-text-secondary font-medium w-1/3">Feature</th>
                  {plans.map(p => (
                    <th key={p.id} className={`px-4 py-4 text-center font-bold ${p.id === 'diagnostic' ? 'text-green-400' : p.highlight ? 'text-accent' : 'text-white'}`}>
                      <div>{p.name}</div>
                      <div className={`text-xs font-normal mt-0.5 ${p.id === 'diagnostic' ? 'text-green-400' : 'text-text-secondary'}`}>{p.id === 'diagnostic' ? 'FREE' : `${p.priceUSD}${p.period !== 'one-time' ? '/mo' : ''}`}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${i % 2 === 0 ? 'bg-navy/30' : ''}`}>
                    <td className="px-4 py-3 text-text-secondary">{row.feature}</td>
                    <td className="px-4 py-3 text-center"><CellValue val={row.diagnostic} /></td>
                    <td className="px-4 py-3 text-center"><CellValue val={row.growth} /></td>
                    <td className="px-4 py-3 text-center bg-accent/5"><CellValue val={row.authority} /></td>
                    <td className="px-4 py-3 text-center"><CellValue val={row.gcc} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why upranked pricing makes sense */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Why Our Prices Are <span className="text-accent">Structured This Way</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'No Agency Overhead',
                body: 'upranked.io is a founder-led boutique. There are no layers of account managers, sales teams, or office overhead eating into your investment. You pay for strategy and execution — not headcount.',
              },
              {
                icon: Star,
                title: 'Below Market, Above Freelancers',
                body: 'Generic Dubai agencies charge AED 12,000–25,000/month for bilingual SEO. Freelancers charge AED 1,500–3,000 but lack GCC sector depth. upranked.io is positioned in the premium mid-market: specialist expertise, lean delivery.',
              },
              {
                icon: TrendingUp,
                title: 'ROI Is the Metric',
                body: 'Every engagement is measured in qualified leads and pipeline generated — not rankings or sessions. If the organic channel isn\'t contributing to revenue, we say so directly and adjust strategy.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-dark-gray border border-border rounded-xl p-6">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Pricing <span className="text-accent">FAQ</span></h2>
            <p className="text-text-secondary">Common questions about what you get and how it works.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }} viewport={{ once: true }} className="bg-navy border border-border rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Sure Which Plan? <span className="text-accent">Start Here.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Book a free 30-minute call. Sam will review your current position, your market, and your competitors — and tell you honestly which package fits your situation. No commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/">
                <a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                  Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <Link href="/pricing/#diagnostic">
                <a className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-2">
                  Start with Diagnostic — $650
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
