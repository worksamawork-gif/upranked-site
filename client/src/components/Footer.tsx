import { Mail, MessageCircle, MapPin, LinkedinIcon, TwitterIcon, Facebook, Instagram, Phone } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-border mt-20">
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-7 h-7" aria-hidden="true">
                  <path d="M 15 22 L 15 57 Q 15 85 50 85 Q 85 85 85 57 L 85 26 L 92 26 L 77 5 L 62 26 L 70 26 L 70 57 Q 70 74 50 74 Q 30 74 30 57 L 30 22 Z" fill="#0A0F1E"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">upranked.io</p>
                <p className="text-xs text-text-secondary">Premium Growth Intelligence Lab</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Premium SEO and Growth Intelligence services for high-value businesses in the GCC — UAE, Saudi Arabia, Kuwait, and Bahrain.
            </p>
            <div className="flex items-center gap-2 pt-2 flex-wrap">
              <a href="https://www.linkedin.com/company/upranked-io/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-navy rounded-lg transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4 text-accent" />
              </a>
              <a href="https://x.com/Upranked7" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-navy rounded-lg transition-colors" aria-label="X / Twitter">
                <TwitterIcon className="w-4 h-4 text-accent" />
              </a>
              <a href="https://www.instagram.com/upranked.io/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-navy rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-accent" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589100073844" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-navy rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>

          {/* SEO Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">SEO Services</h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: 'All SEO Types', href: '/seo' },
                { label: 'SEO by Industry', href: '/seo-industries' },
                { label: 'Medical SEO', href: '/industries/medical-seo' },
                { label: 'Industrial SEO', href: '/industries/industrial-seo' },
                { label: 'Business SEO', href: '/industries/business-seo' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a className="text-text-secondary hover:text-accent transition-colors text-sm">{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">SEO by Type</h4>
            <ul className="space-y-2">
              {[
                { label: 'On-Page SEO', href: '/seo/on-page' },
                { label: 'Off-Page SEO', href: '/seo/off-page' },
                { label: 'Technical SEO', href: '/seo/technical' },
                { label: 'Local SEO', href: '/seo/local' },
                { label: 'Bilingual SEO', href: '/seo/bilingual' },
                { label: 'Schema Markup', href: '/seo/schema' },
                { label: 'SEO Analytics', href: '/seo/analytics' },
                { label: 'Content Architecture', href: '/seo/content-architecture' },
                { label: 'Geo-Targeted SEO', href: '/seo/geo' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a className="text-text-secondary hover:text-accent transition-colors text-sm">{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Intelligence */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">Growth Intelligence</h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: 'Business Consultation', href: '/growth-intelligence/consultation' },
                { label: 'Tailored Tools', href: '/growth-intelligence/tools' },
                { label: 'Tailored Website', href: '/growth-intelligence/websites' },
                { label: 'Business Strategy', href: '/growth-intelligence/strategy' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a className="text-text-secondary hover:text-accent transition-colors text-sm">{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Sama Alaa', href: '/about' },
                { label: 'APEX Methodology', href: '/methodology' },
                { label: 'Insights / Blog', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a className="text-text-secondary hover:text-accent transition-colors text-sm">{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">Markets</h4>
            <ul className="space-y-2">
              {[
                { label: '🇦🇪 Dubai, UAE', href: '/markets/gcc/uae/dubai' },
                { label: '🇸🇦 Riyadh, KSA', href: '/markets/gcc/ksa/riyadh' },
                { label: '🇰🇼 Kuwait City', href: '/markets/gcc/kuwait' },
                { label: '🇧🇭 Manama, Bahrain', href: '/markets/gcc/bahrain' },
                { label: '🇬🇧 London, UK', href: '/markets/uk/london' },
                { label: '🇺🇸 New York, USA', href: '/markets/usa/new-york' },
                { label: '🇩🇪 Germany', href: '/markets/eu/germany' },
                { label: '🇫🇷 France', href: '/markets/eu/france' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a className="text-text-secondary hover:text-accent transition-colors text-sm">{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:uprankedio@gmail.com" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  uprankedio@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+201039173978" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  +20103 917 3978
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="/contact/" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm">Dubai, UAE · GCC Region</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link href="/contact/">
                <a className="inline-block px-5 py-2.5 bg-accent text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 text-sm">
                  Book Free APEX Diagnostic
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">© 2026 upranked.io. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy/">
              <a className="text-text-secondary hover:text-accent transition-colors text-sm">Privacy Policy</a>
            </Link>
            <Link href="/terms/">
              <a className="text-text-secondary hover:text-accent transition-colors text-sm">Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
