import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { allPosts as staticPosts } from '@/data/blogPosts';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useState, useEffect } from 'react';
import { supabase, adaptPost } from '@/lib/supabase';

const categoryColors: Record<string, string> = {
  'SEO Strategy': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Medical SEO': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Industrial SEO': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Methodology': 'bg-accent/10 text-accent border-accent/20',
};

function CategoryBadge({ category }: { category: string }) {
  const color = categoryColors[category] ?? 'bg-accent/10 text-accent border-accent/20';
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${color}`}>
      <Tag className="w-3 h-3" />
      {category}
    </span>
  );
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState(staticPosts);

  useEffect(() => {
    supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .then(({ data }) => {
        if (data && data.length > 0) {
          const adapted = data.map(adaptPost);
          const staticSlugs = new Set(staticPosts.map(p => p.slug));
          const newOnly = adapted.filter(p => !staticSlugs.has(p.slug));
          setBlogPosts([...newOnly, ...staticPosts] as any);
        }
      });
  }, []);

  usePageMeta({
    title: 'Blog — Growth Intelligence for GCC Businesses',
    description: 'In-depth articles on SEO, growth strategy, and digital intelligence for high-value businesses in the UAE, Saudi Arabia, Kuwait, Bahrain, and Qatar.',
    schemaId: 'blog-schema',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'upranked.io Blog',
      url: 'https://upranked.io/blog',
      description: 'Growth Intelligence articles for high-value GCC businesses.',
      publisher: { '@type': 'Organization', name: 'upranked.io', url: 'https://upranked.io' },
    },
  });

  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Blog</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Growth Intelligence <span className="gradient-text">for the GCC</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Practical, research-backed articles on SEO, growth strategy, and market intelligence — written specifically for high-value businesses in the UAE, Saudi Arabia, Kuwait, Bahrain, and Qatar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-6">Latest Article</p>
            <Link href={`/blog/${featured.slug}`}>
              <a className="block group">
                <div className="card-premium p-8 md:p-10 hover:border-accent/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <CategoryBadge category={featured.category} />
                    <span className="flex items-center gap-1.5 text-text-secondary text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime} min read
                    </span>
                    <span className="text-text-secondary text-sm">{new Date(featured.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>

                  {/* Key Intelligence block */}
                  <div className="border-l-4 border-accent pl-5 py-2 bg-navy/30 rounded-r-lg mb-6">
                    <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Key Intelligence</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{featured.keyIntelligence}</p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="section-padding bg-navy">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl font-bold">More <span className="text-accent">Articles</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <a className="card-premium h-full flex flex-col gap-4 hover:border-accent/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/10">
                    <div className="flex items-center justify-between gap-3">
                      <CategoryBadge category={post.category} />
                      <span className="flex items-center gap-1 text-text-secondary text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-accent transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
                      <span className="text-text-secondary text-xs">{new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight className="w-3.5 h-3.5" /></span>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Apply This to <span className="text-accent">Your Business</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Knowledge is one thing — execution is another. Book a free APEX Diagnostic with Sama Alaa and get a clear, actionable plan for your specific market position.
            </p>
            <Link href="/contact">
              <a className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                Book a Free APEX Diagnostic <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
