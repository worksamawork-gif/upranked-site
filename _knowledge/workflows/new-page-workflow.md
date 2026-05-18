# New Page Creation Workflow — upranked.io

## Quick Decision Tree

```
Need a new page?
    │
    ├── Blog post? → See sops/add-blog-post.md
    │
    ├── Service/SEO page?
    │       → Copy client/src/pages/services/BusinessSEO.tsx
    │       → See sops/add-new-page.md
    │
    ├── Market page?
    │       → Copy nearest market page (e.g. DubaiMarket.tsx)
    │       → Add to /markets/[region]/[city]/
    │
    └── Hub/overview page?
            → Copy GrowthIntelligence.tsx or Industries.tsx
```

---

## Page Component Template (Minimum Viable)

Every service/SEO page follows this structure:

```tsx
import { motion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import { CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: '[Service Name]',
      provider: { '@type': 'Organization', name: 'upranked.io' },
      areaServed: [{ '@type': 'City', name: '[City]' }],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

export default function PageName() {
  usePageMeta({
    title: 'Page Title',
    description: 'Meta description under 160 chars.',
    schema,
    schemaId: 'unique-schema-id',
  });

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div ...>
              <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">
                Category Label
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                H1 Headline with Primary Keyword
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Value proposition paragraph.
              </p>
            </motion.div>
            <motion.div ...>
              <div className="w-full max-w-[800px]">
                <img src="/heroes/XX-name.svg" alt="..." width={800} height={600}
                  loading="eager" decoding="async" className="w-full h-auto rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="section-padding bg-dark-gray">...</section>

      {/* FAQ */}
      <section className="section-padding bg-navy">...</section>

      {/* Author bio */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-4xl">
          <div className="bg-navy border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
            <img src="/images/sam-hamouda-seo-consultant-dubai.webp"
              alt="Sama Alaa — Founder and GCC SEO Strategist at upranked.io, Dubai UAE"
              width={400} height={640} loading="lazy" decoding="async"
              className="w-28 h-44 rounded-xl object-cover object-top flex-shrink-0" />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Written & Overseen By</p>
              <h3 className="text-xl font-bold text-white mb-1">Sama Alaa</h3>
              <p className="text-accent text-sm mb-3">Founder & GCC SEO Strategist — upranked.io</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">...</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">CTA Heading</h2>
          <p className="text-text-secondary mb-8">CTA body text.</p>
          <a href="/contact/" className="btn-primary text-lg px-8 py-4">
            Book Your Free APEX Diagnostic
          </a>
        </div>
      </section>
    </div>
  );
}
```

---

## Checklist Before Publishing a New Page

- [ ] `usePageMeta` set with unique title, description, schema
- [ ] H1 contains primary keyword
- [ ] Hero SVG assigned (see asset-registry.md for available ones)
- [ ] Author bio card included
- [ ] FAQ section with FAQPage schema
- [ ] CTA section points to /contact/
- [ ] Route added to App.tsx
- [ ] Route added to scripts/prerender.mjs
- [ ] Link added from appropriate hub page
- [ ] Footer or nav link added if top-level page
- [ ] Build runs without errors
- [ ] Page renders correctly in browser after deploy
