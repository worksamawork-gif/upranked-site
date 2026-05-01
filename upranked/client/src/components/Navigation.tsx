import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Search, TrendingUp, MapPin, Stethoscope } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const seoIndustryLinks = [
  { label: 'Medical SEO', labelAr: 'تحسين محركات البحث الطبية', href: '/industries/medical-seo', desc: 'For clinics & hospitals' },
  { label: 'Industrial SEO', labelAr: 'تحسين محركات البحث الصناعية', href: '/industries/industrial-seo', desc: 'For B2B & manufacturing' },
  { label: 'Business SEO', labelAr: 'تحسين محركات البحث للأعمال', href: '/industries/business-seo', desc: 'Revenue-focused SEO' },
];

const seoTypeLinks = [
  { label: 'On-Page SEO', labelAr: 'تحسين الصفحات', href: '/seo/on-page', desc: 'Content, keywords, metadata' },
  { label: 'Off-Page SEO', labelAr: 'بناء الروابط', href: '/seo/off-page', desc: 'Authority & link building' },
  { label: 'Technical SEO', labelAr: 'السيو التقني', href: '/seo/technical', desc: 'Site speed & architecture' },
  { label: 'Local SEO', labelAr: 'السيو المحلي', href: '/seo/local', desc: 'Near-me & Google Maps' },
  { label: 'Bilingual SEO', labelAr: 'السيو ثنائي اللغة', href: '/seo/bilingual', desc: 'Arabic & English search' },
  { label: 'Schema Markup', labelAr: 'ترميز Schema', href: '/seo/schema', desc: 'Structured data & rich results' },
  { label: 'SEO Analytics', labelAr: 'تحليلات السيو', href: '/seo/analytics', desc: 'Rank tracking & attribution' },
  { label: 'Content Architecture', labelAr: 'هيكل المحتوى', href: '/seo/content-architecture', desc: 'Topic clusters & silos' },
  { label: 'Geo-Targeted SEO', labelAr: 'السيو الجغرافي', href: '/seo/geo', desc: 'Multi-market SEO' },
];

const growthLinks = [
  { label: 'Business Consultation', labelAr: 'استشارات الأعمال', href: '/growth-intelligence/consultation', desc: 'Expert consultation for your business' },
  { label: 'Tailored Tools', labelAr: 'أدوات مخصصة', href: '/growth-intelligence/tools', desc: 'Custom growth tools' },
  { label: 'Tailored Website', labelAr: 'موقع مخصص', href: '/growth-intelligence/websites', desc: 'Custom website for your business' },
  { label: 'Business Strategy', labelAr: 'استراتيجية الأعمال', href: '/growth-intelligence/strategy', desc: 'Market positioning & growth' },
];

const marketsLinks = [
  { label: 'All GCC Markets', labelAr: 'أسواق دول الخليج', href: '/markets/gcc', desc: 'Dubai, Riyadh, Kuwait, Bahrain' },
  { label: 'Dubai, UAE 🇦🇪', labelAr: 'دبي، الإمارات', href: '/markets/gcc/uae/dubai', desc: 'UAE\'s largest digital market' },
  { label: 'Riyadh, KSA 🇸🇦', labelAr: 'الرياض، السعودية', href: '/markets/gcc/ksa/riyadh', desc: 'Arabic-first SEO for KSA' },
  { label: 'Kuwait City 🇰🇼', labelAr: 'مدينة الكويت', href: '/markets/gcc/kuwait', desc: 'High per-capita GCC market' },
  { label: 'Manama, Bahrain 🇧🇭', labelAr: 'المنامة، البحرين', href: '/markets/gcc/bahrain', desc: 'GCC financial hub' },
  { label: 'London, UK 🇬🇧', labelAr: 'لندن، المملكة المتحدة', href: '/markets/uk/london', desc: 'UK market SEO' },
  { label: 'New York, USA 🇺🇸', labelAr: 'نيويورك، أمريكا', href: '/markets/usa/new-york', desc: 'US market SEO' },
  { label: 'Germany 🇩🇪', labelAr: 'ألمانيا', href: '/markets/eu/germany', desc: 'Frankfurt, Berlin & DACH' },
  { label: 'France 🇫🇷', labelAr: 'فرنسا', href: '/markets/eu/france', desc: 'Paris & French market' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [seoTypesOpen, setSeoTypesOpen] = useState(false);
  const [seoIndustriesOpen, setSeoIndustriesOpen] = useState(false);
  const [growthOpen, setGrowthOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const seoTypesRef = useRef<HTMLDivElement>(null);
  const seoIndustriesRef = useRef<HTMLDivElement>(null);
  const growthRef = useRef<HTMLDivElement>(null);
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
      if (seoTypesRef.current && !seoTypesRef.current.contains(e.target as Node)) setSeoTypesOpen(false);
      if (seoIndustriesRef.current && !seoIndustriesRef.current.contains(e.target as Node)) setSeoIndustriesOpen(false);
      if (growthRef.current && !growthRef.current.contains(e.target as Node)) setGrowthOpen(false);
      if (marketsRef.current && !marketsRef.current.contains(e.target as Node)) setMarketsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => { setSeoTypesOpen(false); setSeoIndustriesOpen(false); setGrowthOpen(false); setMarketsOpen(false); };

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location === href || location.startsWith(href + '/');

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
        { label: 'About', href: '/about' },
        { label: 'Methodology', href: '/methodology' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
      ]
    : [
        { label: 'الرئيسية', href: '/' },
        { label: 'من نحن', href: '/about' },
        { label: 'المنهجية', href: '/methodology' },
        { label: 'المدونة', href: '/blog' },
        { label: 'الأسئلة الشائعة', href: '/faq' },
        { label: 'اتصل بنا', href: '/contact' },
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

          {/* Primary links first: Home → About → Methodology → Blog → FAQ → Contact */}
          {topNavLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`font-medium text-sm transition-colors duration-300 ${isActive(item.href) ? 'nav-link-active' : 'nav-link-inactive'}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >{item.label}</a>
            </Link>
          ))}

          <span className="w-px h-4 bg-border mx-1" />

          {/* SEO Types Dropdown */}
          <div ref={seoTypesRef} className="relative">
            <button
              onClick={() => { setSeoTypesOpen(!seoTypesOpen); setSeoIndustriesOpen(false); setGrowthOpen(false); setMarketsOpen(false); }}
              className={`flex items-center gap-1.5 transition-colors duration-300 font-medium text-sm ${
                isActive('/seo') ? 'text-accent' : 'text-text-secondary hover:text-accent'
              }`}
            >
              <Search className="w-4 h-4" />
              {language === 'en' ? 'SEO Types' : 'أنواع SEO'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${seoTypesOpen ? 'rotate-180' : ''}`} />
            </button>
            {seoTypesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-gray border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 max-h-[80vh] overflow-y-auto">
                <Link href="/seo">
                  <a className="flex flex-col px-4 py-3 bg-navy/50 border-b border-border hover:bg-navy transition-colors" onClick={closeAll}>
                    <span className="font-bold text-accent text-sm">All SEO Types →</span>
                    <span className="text-xs text-text-secondary mt-0.5">On-page, technical, local & more</span>
                  </a>
                </Link>
                {seoTypeLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className="flex flex-col px-4 py-2.5 hover:bg-navy border-l-2 border-transparent hover:border-accent transition-all duration-200 group" onClick={closeAll}>
                      <span className="font-semibold text-white group-hover:text-accent transition-colors text-sm">{language === 'ar' ? link.labelAr : link.label}</span>
                      <span className="text-xs text-text-secondary mt-0.5">{link.desc}</span>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SEO Industries Dropdown */}
          <div ref={seoIndustriesRef} className="relative">
            <button
              onClick={() => { setSeoIndustriesOpen(!seoIndustriesOpen); setSeoTypesOpen(false); setGrowthOpen(false); setMarketsOpen(false); }}
              className={`flex items-center gap-1.5 transition-colors duration-300 font-medium text-sm ${
                isActive('/seo-industries') || isActive('/industries') ? 'text-accent' : 'text-text-secondary hover:text-accent'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              {language === 'en' ? 'SEO Industries' : 'قطاعات SEO'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${seoIndustriesOpen ? 'rotate-180' : ''}`} />
            </button>
            {seoIndustriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-gray border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
                <Link href="/seo-industries">
                  <a className="flex flex-col px-4 py-3 bg-navy/50 border-b border-border hover:bg-navy transition-colors" onClick={closeAll}>
                    <span className="font-bold text-accent text-sm">All SEO Industries →</span>
                    <span className="text-xs text-text-secondary mt-0.5">Medical, Industrial & Business SEO</span>
                  </a>
                </Link>
                {seoIndustryLinks.map((link) => (
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

          {/* Growth Intelligence Dropdown */}
          <div ref={growthRef} className="relative">
            <button
              onClick={() => { setGrowthOpen(!growthOpen); setSeoTypesOpen(false); setSeoIndustriesOpen(false); setMarketsOpen(false); }}
              className={`flex items-center gap-1.5 transition-colors duration-300 font-medium text-sm ${
                isActive('/growth-intelligence') ? 'text-accent' : 'text-text-secondary hover:text-accent'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              {language === 'en' ? 'Growth' : 'ذكاء النمو'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${growthOpen ? 'rotate-180' : ''}`} />
            </button>
            {growthOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-gray border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
                <Link href="/growth-intelligence">
                  <a className="flex flex-col px-4 py-3 bg-navy/50 border-b border-border hover:bg-navy transition-colors" onClick={closeAll}>
                    <span className="font-bold text-accent text-sm">All Growth Services →</span>
                    <span className="text-xs text-text-secondary mt-0.5">Full Growth Intelligence overview</span>
                  </a>
                </Link>
                {growthLinks.map((link) => (
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

          {/* Markets Dropdown */}
          <div ref={marketsRef} className="relative">
            <button
              onClick={() => { setMarketsOpen(!marketsOpen); setSeoTypesOpen(false); setSeoIndustriesOpen(false); setGrowthOpen(false); }}
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
          <Link href="/contact">
            <a className="hidden md:inline-block px-5 py-2 bg-accent text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 text-sm whitespace-nowrap">
              {ctaLabel}
            </a>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-dark-gray rounded-lg transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6 text-accent" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-gray border-t border-border animate-fade-in-down">
          <div className="container-premium py-4 space-y-1">

            {/* SEO Types accordion */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'seoTypes' ? null : 'seoTypes')}
              className="w-full flex items-center justify-between py-3 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg transition-colors font-medium"
            >
              <span className="flex items-center gap-2"><Search className="w-4 h-4" />{language === 'en' ? 'SEO Types' : 'أنواع SEO'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'seoTypes' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'seoTypes' && (
              <div className="pl-4 space-y-1 pb-1">
                <Link href="/seo">
                  <a className="block py-2 px-3 text-accent font-semibold hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>All SEO Types →</a>
                </Link>
                {seoTypeLinks.map(link => (
                  <Link key={link.href} href={link.href}>
                    <a className="block py-2 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>
                      {language === 'ar' ? link.labelAr : link.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}

            {/* SEO Industries accordion */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'seoIndustries' ? null : 'seoIndustries')}
              className="w-full flex items-center justify-between py-3 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg transition-colors font-medium"
            >
              <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4" />{language === 'en' ? 'SEO Industries' : 'قطاعات SEO'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'seoIndustries' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'seoIndustries' && (
              <div className="pl-4 space-y-1 pb-1">
                <Link href="/seo-industries">
                  <a className="block py-2 px-3 text-accent font-semibold hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>All SEO Industries →</a>
                </Link>
                {seoIndustryLinks.map(link => (
                  <Link key={link.href} href={link.href}>
                    <a className="block py-2 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>
                      {language === 'ar' ? link.labelAr : link.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}

            {/* Growth Intelligence accordion */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'growth' ? null : 'growth')}
              className="w-full flex items-center justify-between py-3 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg transition-colors font-medium"
            >
              <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" />{language === 'en' ? 'Growth Intelligence' : 'ذكاء النمو'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'growth' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded === 'growth' && (
              <div className="pl-6 space-y-1 pb-1">
                {growthLinks.map(link => (
                  <Link key={link.href} href={link.href}>
                    <a className="block py-2 px-3 text-text-secondary hover:text-accent hover:bg-navy/40 rounded-lg text-sm transition-colors" onClick={() => setIsOpen(false)}>
                      {language === 'ar' ? link.labelAr : link.label}
                    </a>
                  </Link>
                ))}
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
              <div className="pl-6 space-y-1 pb-1">
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
              <Link href="/contact">
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
