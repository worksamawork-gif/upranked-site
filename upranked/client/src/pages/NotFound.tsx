import { Search, Home, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-navy flex items-center justify-center px-4 pt-32 pb-20">
        <div className="text-center max-w-2xl">
          <p className="text-accent font-bold text-7xl mb-4 leading-none">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Page Not Found
          </h1>
          <p className="text-text-secondary text-lg mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Head back to a page below.
          </p>

          <div className="w-full max-w-[600px] mx-auto mb-10">
            <img
              src="/heroes/07-slogan-hero.svg"
              alt="Uplevel your digital growth — upranked.io SEO agency Dubai"
              width={800}
              height={600}
              loading="eager"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-accent/30"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-gray border border-border text-white rounded-lg font-semibold hover:border-accent/60 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="border-t border-border pt-10">
            <p className="text-text-secondary text-sm mb-6 uppercase tracking-widest font-semibold">Popular Pages</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {[
                { label: 'About Sam', href: '/about' },
                { label: 'APEX Methodology', href: '/methodology' },
                { label: 'Industries We Serve', href: '/industries' },
                { label: 'Medical SEO', href: '/industries/medical-seo' },
                { label: 'Industrial SEO', href: '/industries/industrial-seo' },
                { label: 'Business SEO', href: '/industries/business-seo' },
                { label: 'GCC Markets', href: '/markets/gcc' },
                { label: 'Blog & Insights', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-2.5 bg-dark-gray border border-border rounded-lg text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <Search className="w-3 h-3 flex-shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
