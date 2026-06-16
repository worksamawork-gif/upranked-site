import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Search, TrendingUp, MapPin, Stethoscope, Layers } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const seoIndustryLinks = [
  { label: 'Medical SEO', labelAr: 'تحسين محركات البحث الطبية', href: '/industries/medical-seo/', desc: 'For clinics & hospitals' },
  { label: 'Industrial SEO', labelAr: 'تحسين محركات البحث الصناعية', href: '/industries/industrial-seo/', desc: 'For B2B & manufacturing' },
  { label: 'Business SEO', labelAr: 'تحسين محركات البحث للأعمال', href: '/industries/business-seo/', desc: 'Revenue-focused SEO' },
];

const seoTypeLinks = [
  { label: 'On-Page SEO', labelAr: 'تحسين الصفحات', href: '/seo/on-page/', desc: 'Content, keywords, metadata' },
  { label: 'Off-Page SEO', labelAr: 'بناء الروابط', href: '/seo/off-page/', desc: 'Authority & link building' },
  { label: 'Technical SEO', labelAr: 'السيو التقني', href: '/seo/technical/', desc: 'Site speed & architecture' },
  { label: 'Local SEO', labelAr: 'السيو المحلي', href: '/seo/local/', desc: 'Near-me & Google Maps' },
  { label: 'Bilingual SEO', labelAr: 'السيو ثنائي اللغة', href: '/seo/bilingual/', desc: 'Arabic & English search' },
  { label: 'Schema Markup', labelAr: 'ترميز Schema', href: '/seo/schema/', desc: 'Structured data & rich results' },
  { label: 'SEO Analytics', labelAr: 'تحليلات السيو', href: '/seo/analytics/', desc: 'Rank tracking & attribution' },
  { label: 'Content Architecture', labelAr: 'هيكل المحتوى', href: '/seo/content-architecture/', desc: 'Topic clusters & silos' },
  { label: 'AEO', labelAr: 'تحسين محركات الإجابة', href: '/seo/aeo/', desc: 'Answer & AI engine optimization' },
  { label: 'GEO — Generative SEO', labelAr: 'تحسين محركات الذكاء الاصطناعي', href: '/seo/geo/', desc: 'ChatGPT, AI Overviews & multi-market' },
];

const growthLinks = [
  { label: 'Business Consultation', labelAr: 'استشارات الأعمال', href: '/growth-intelligence/consultation/', desc: 'Expert consultation for your business' },
  { label: 'Tailored Tools', labelAr: 'أدوات مخصصة', href: '/growth-intelligence/tools/', desc: 'Custom growth tools' },
  { label: 'Tailored Website', labelAr: 'موقع مخصص', href: '/growth-intelligence/websites/', desc: 'Custom website for your business' },
  { label: 'Business Strategy', labelAr: 'استراتيجية الأعمال', href: '/growth-intelligence/strategy/', desc: 'Market positioning & growth' },
];

const marketsLinks = [
  { label: 'All GCC Markets', labelAr: 'أسواق دول الخليج', href: '/markets/gcc/', desc: 'Dubai, Riyadh, Kuwait, Bahrain' },
  { label: 'Dubai, UAE 🇦🇪', labelAr: 'دبي، الإمارات', href: '/markets/gcc/uae/dubai/', desc: 'UAE\'s largest digital market' },
  { label: 'Riyadh, KSA 🇸🇦', labelAr: 'الرياض، السعودية', href: '/markets/gcc/ksa/riyadh/', desc: 'Arabic-first SEO for KSA' },
  { label: 'Kuwait City 🇰🇼', labelAr: 'مدينة الكويت', href: '/markets/gcc/kuwait/', desc: 'High per-capita GCC market' },
  { label: 'Manama, Bahrain 🇧🇭', labelAr: 'المنامة، البحرين', href: '/markets/gcc/bahrain/', desc: 'GCC financial hub' },
  { label: 'London, UK 🇬🇧', labelAr: 'لندن، المملكة المتحدة', href: '/markets/uk/london/', desc: 'UK market SEO' },
  { label: 'New York, USA 🇺🇸', labelAr: 'نيويورك، أمريكا', href: '/markets/usa/new-york/', desc: 'US market SEO' },
  { label: 'Germany 🇩🇪', labelAr: 'ألمانيا', href: '/markets/eu/germany/', desc: 'Frankfurt, Berlin & DACH' },
  { label: 'France 🇫🇷', labelAr: 'فرنسا', href: '/markets/eu/france/', desc: 'Paris & French market' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const marketsRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => { setIsOpen(false); setMobileExpanded(null); }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (marketsRef.current && !marketsRef.current.contains(e.target as Node)) setMarketsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => { setServicesOpen(false); setMarketsOpen(false); };

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location === href || location.startsWith(href + '/');

  const isServicesActive =
    isActive('/seo') || isActive('/seo-industries') || isActive('/industries') || isActive('/growth-intelligence');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const ctaLabel = language === 'en' ? 'Book a Call' : 'احجز استشارة';

  const topNavLinks = language === 'en'
    ? [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about/' },
        { label: 'Methodology', href: '/methodology/' },
        { label: 'Blog', href: '/blog/' },
        { label: 'Pricing', href: '/pricing/' },
        { label: 'FAQ', href: '/faq/' },
        { label: 'Contact', href: '/contact/' },
      ]
    : [
        { label: 'الرئيسية', href: '/' },
        { label: 'من نحن', href: '/about/' },
        { label: 'المنهجية', href: '/methodology/' },
        { label: 'المدونة', href: '/blog/' },
        { label: 'الأسعار', href: '/pricing/' },
        { label: 'الأسئلة الشائعة', href: '/faq/' },
        { label: 'اتصل بنا', href: '/contact/' },
      ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container-premium flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-7 h-7" aria-hidden="true">
                <path d="M 15 22 L 15 57 Q 15 85 50 85 Q 85 85 85 57 L 85 26 L 92 26 L 77 5 L 62 26 L 70 26 L 70 57 Q 70 74 50 74 Q 30 74 30 57 L 30 22 Z" fill="#0A0F1E"/>
              </svg>
            </div>
            <span className="hidden md:inline font-bold text-lg group-hover:text-accent transition-colors">upranked.io</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">

          {topNavLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`font-medium text-sm transition-colors duration-300 ${isActive(item.href) ? 'nav-link-active' : 'nav-link-inactive'}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >{item.label}</a>
            </Link>
          ))}

          <span className="w-px h-4 bg-border mx-1" />

          {/* Services Dropdown (SEO Types + SEO Industries + Growth) */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setMarketsOpen(false); }}
              className={`flex items-center gap-1.5 transition-colors duration-300 font-medium text-sm ${
                isServicesActive ? 'text-accent' : 'text-text-secondary hover:text-accent'
              }`}
            >
              <Layers className="w-4 h-4" />
              {language === 'en' ? 'Services' : 'الخدمات'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[680px] bg-dark-gray border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
                <div className="grid grid-cols-3 divide-x divide-border">

                  {/* SEO Types column */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-navy/60 border-b border-border">
                      <Search className="w-3.5 h-3.5 text-accent" />
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {language === 'en' ? 'SEO Types' : 'أنواع SEO'}
                      </span>
                    </div>
                    <Link href="/seo/">
                      <a className="flex flex-col px-4 py-2 hover:bg-navy border-b border-border/50 transition-colors" onClick={closeAll}>
                        <span className="font-bold text-accent text-xs">All SEO Types →</span>
                      </a>
                    </Link>
                    <div className="max-h-[320px] overflow-y-auto">
                      {seoTypeLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                          <a className="flex flex-col px-4 py-2 hover:bg-navy border-l-2 border-transparent hover:border-accent transition-all duration-200 group" onClick={closeAll}>
                            <span className="font-semibold text-white group-hover:text-accent transition-colors text-xs">{language === 'ar' ? link.labelAr : link.label}</span>
                            <span className="text-xs text-text-secondary mt-0.5 leading-tight">{link.desc}</span>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* SEO Industries column */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-navy/60 border-b border-border">
                      <Stethoscope className="w-3.5 h-3.5 text-accent" />
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {language === 'en' ? 'SEO Industries' : 'قطاعات SEO'}
                      </span>
                    </div>
                    <Link href="/seo-industries/">
                      <a className="flex flex-col px-4 py-2 hover:bg-navy border-b border-border/50 transition-colors" onClick={closeAll}>
                        <span className="font-bold text-accent text-xs">All Industries →</span>
                      </a>
                    </Link>
                    {seoIndustryLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <a className="flex flex-col px-4 py-2 hover:bg-navy border-l-2 border-transparent hover:border-accent transition-all duration-200 group" onClick={closeAll}>
                          <span className="font-semibold text-white group-hover:text-accent transition-colors text-xs">{language === 'ar' ? link.labelAr : link.label}</span>
                          <span className="text-xs text-text-secondary mt-0.5 leading-tight">{link.desc}</span>
                        </a>
                      </Link>
                    ))}
                  </div>

                  {/* Growth Intelligence column */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-navy/60 border-b border-border">
                      <TrendingUp className="w-3.5 h-3.5 text-accent" />
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {language === 'en' ? 'Growth' : 'ذكاء النمو'}
                      </span>
                    </div>
                    <Link href="/growth-intelligence/">
                      <a className="flex flex-col px-4 py-2 hover:bg-navy border-b border-border/50 transition-colors" onClick={closeAll}>
                        <span className="font-bold text-accent text-xs">All Growth Services →</span>
                      </a>
                    </Link>
                    {growthLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <a className="flex flex-col px-4 py-2 hover:bg-navy border-l-2 border-transparent hover:border-accent transition-all duration-200 group" onClick={closeAll}>
                          <span className="font-semibold text-white group-hover:text-accent transition-colors text-xs">{language === 'ar' ? link.labelAr : link.label}</span>
                          <span className="text-xs text-text-secondary mt-0.5 leading-tight">{link.desc}</span>
                        </a>
                      </Link>
                    ))}
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Markets Dropdown */}
          <div ref={marketsRef} className="relative">
            <button
              onClick={() => { setMarketsOpen(!marketsOpen); setServicesOpen(false); }}
              className={`flex items-center gap-1.5 transition-colors duration-300 font-medium text-sm ${
                isActive('/markets') ? 'text-accent' : 'text-text-secondary hover:text-accent'
              }`}
            >
              <MapPin className="w-4 h-4" />
              {language === 'en' ? 'Markets' : 'الأسواق'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${marketsOpen ? 'rotate-180' : ''}`} />
            </button>
            {marketsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-gray border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
                {marketsLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className="flex flex-col px-4 py-3 hover:bg-navy border-l-2 border-transparent hover:border-accent transition-all duration-200 group" onClick={closeAll}>
                      <span className="font-semibold text-white group-hover:text-accent transition-colors text-sm">{language === 'ar' ? link.labelAr : link.label}</span>
                      <span className="text-xs text-text-secondary mt-0.5">{link.desc}</span>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button onClick={toggleLanguage} className="p-2 hover:bg-dark-gray rounded-lg transition-colors flex items-center gap-1.5" aria-label="Toggle language">
            <Globe className="w-5 h-5 text-accent" />
            <span className="hidden md:inline text-sm font-semibold text-accent">{language.toUpperCase()}</span>
          </button>
          <Link href="/contact/">
            <a className="hidden md:inline-block px-5 py-2 bg-accent text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 text-sm whitespace-nowrap">
              {ctaLabel}
            </a>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 hover:bg-dark-gray rounded-lg transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6 text-accent" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-gray border-t border-border animate-fade-in-down">
          <div className="container-premium py-4 space-y-1 max-h-[80vh] overflow-y-auto">

            {/* Services accordion */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between py-3 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg transition-colors font-medium"
            >
              <span className="flex items-center gap-2"><Layers className="w-4 h-4" />{language === 'en' ? 'Services' : 'الخدمات'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'services' && (
              <div className="pl-3 space-y-2 pb-2">

                {/* SEO Types section */}
                <div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5">
                    <Search className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{language === 'en' ? 'SEO Types' : 'أنواع SEO'}</span>
                  </div>
                  <Link href="/seo/">
                    <a className="block py-1.5 px-3 text-accent font-semibold hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>All SEO Types →</a>
                  </Link>
                  {seoTypeLinks.map(link => (
                    <Link key={link.href} href={link.href}>
                      <a className="block py-1.5 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>
                        {language === 'ar' ? link.labelAr : link.label}
                      </a>
                    </Link>
                  ))}
                </div>

                <div className="border-t border-border/50 mx-3" />

                {/* SEO Industries section */}
                <div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{language === 'en' ? 'SEO Industries' : 'قطاعات SEO'}</span>
                  </div>
                  <Link href="/seo-industries/">
                    <a className="block py-1.5 px-3 text-accent font-semibold hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>All Industries →</a>
                  </Link>
                  {seoIndustryLinks.map(link => (
                    <Link key={link.href} href={link.href}>
                      <a className="block py-1.5 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>
                        {language === 'ar' ? link.labelAr : link.label}
                      </a>
                    </Link>
                  ))}
                </div>

                <div className="border-t border-border/50 mx-3" />

                {/* Growth section */}
                <div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{language === 'en' ? 'Growth Intelligence' : 'ذكاء النمو'}</span>
                  </div>
                  <Link href="/growth-intelligence/">
                    <a className="block py-1.5 px-3 text-accent font-semibold hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>All Growth Services →</a>
                  </Link>
                  {growthLinks.map(link => (
                    <Link key={link.href} href={link.href}>
                      <a className="block py-1.5 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>
                        {language === 'ar' ? link.labelAr : link.label}
                      </a>
                    </Link>
                  ))}
                </div>

              </div>
            )}

            {/* Markets accordion */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'markets' ? null : 'markets')}
              className="w-full flex items-center justify-between py-3 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg transition-colors font-medium"
            >
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{language === 'en' ? 'Markets' : 'الأسواق'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'markets' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'markets' && (
              <div className="pl-4 space-y-1 pb-1">
                {marketsLinks.map(link => (
                  <Link key={link.href} href={link.href}>
                    <a className="block py-2 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>
                      {language === 'ar' ? link.labelAr : link.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}

            {topNavLinks.map(item => (
              <Link key={item.href} href={item.href}>
                <a className="block py-3 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg transition-colors font-medium" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </Link>
            ))}

            <div className="pt-3 border-t border-border">
              <Link href="/contact/">
                <a className="block w-full text-center px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all" onClick={() => setIsOpen(false)}>
                  {ctaLabel}
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
