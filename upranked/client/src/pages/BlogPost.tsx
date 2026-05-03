import { motion } from 'framer-motion';
import { Link, useRoute } from 'wouter';
import { ArrowRight, ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, type BlogSection, type BlogPost } from '@/data/blogPosts';
import { usePageMeta } from '@/hooks/usePageMeta';
import NotFound from './NotFound';
import { useState, useEffect } from 'react';
import { supabase, adaptPost } from '@/lib/supabase';

const categoryColors: Record<string, string> = {
  'SEO Strategy': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Medical SEO': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Industrial SEO': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Methodology': 'bg-accent/10 text-accent border-accent/20',
};

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'h2':
      return <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">{section.text}</h2>;
    case 'h3':
      return <h3 key={index} className="text-xl font-bold text-accent mt-8 mb-3">{section.text}</h3>;
    case 'p':
      return <p key={index} className="text-text-secondary leading-relaxed mb-5">{section.text}</p>;
    case 'ul':
      return (
        <ul key={index} className="mb-5 space-y-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className="mb-5 space-y-2 list-none">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="w-6 h-6 bg-accent/20 text-accent rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold">{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      );
    case 'blockquote':
      return (
        <blockquote key={index} className="border-l-4 border-accent pl-6 py-4 my-8 bg-dark-gray rounded-r-xl">
          <p className="text-white text-lg font-medium leading-relaxed italic">{section.text}</p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug ?? '';
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);

  useEffect(() => {
    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()
      .then(({ data }) => {
        if (data) setPost(adaptPost(data) as unknown as BlogPost);
        else setPost(getPostBySlug(slug) ?? null);
      });
  }, [slug]);

  const p = post as any;
  const schemaType = p?.schemaType || 'Article';
  const hasCustomSchema = p?.schemaCustom;

  usePageMeta(post ? {
    title: post.metaTitle,
    description: post.metaDescription,
    schemaId: `blog-post-${slug}`,
    schema: hasCustomSchema
      ? JSON.parse(p.schemaCustom)
      : {
          '@context': 'https://schema.org',
          '@type': schemaType,
          headline: post.title,
          description: post.metaDescription,
          ...(p?.featuredImage ? { image: { '@type': 'ImageObject', url: `https://upranked.io${p.featuredImage}`, description: p.featuredImageAlt || post.title } } : {}),
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: { '@type': 'Person', name: p?.author || 'Sam Hamouda', url: 'https://upranked.io/about' },
          publisher: {
            '@type': 'Organization',
            name: 'upranked.io',
            url: 'https://upranked.io',
            logo: { '@type': 'ImageObject', url: 'https://upranked.io/favicon.svg' },
          },
          url: `https://upranked.io/blog/${post.slug}/`,
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://upranked.io/blog/${post.slug}/` },
          articleSection: post.category,
          ...(p?.focusKeyphrase ? { keywords: p.focusKeyphrase } : {}),
        },
    // Extra meta tags for OG/Twitter injected below
  } : {
    title: 'Article Not Found',
    description: 'This article could not be found.',
  });

  if (post === undefined) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (post === null) return <NotFound />;

  const related = getRelatedPosts(post.relatedSlugs);
  const categoryColor = categoryColors[post.category] ?? 'bg-accent/10 text-accent border-accent/20';

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 lg:px-8 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-dark-gray to-navy opacity-60 -z-10" />
        <div className="container-premium max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </a>
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${categoryColor}`}>
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-text-secondary text-sm">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} min read
              </span>
              <span className="flex items-center gap-1.5 text-text-secondary text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-text-secondary leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Key Intelligence Block */}
      <section className="bg-dark-gray border-y border-border py-8">
        <div className="container-premium max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-1 flex-shrink-0 bg-accent rounded-full self-stretch" />
            <div>
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Key Intelligence — 3-Point Summary</p>
              <p className="text-text-secondary leading-relaxed">{post.keyIntelligence}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-navy">
        <div className="container-premium max-w-3xl">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {p.contentHtml
              ? <div className="prose-dark" dangerouslySetInnerHTML={{ __html: p.contentHtml }} />
              : post.content.map((section, i) => renderSection(section, i))
            }
          </motion.article>

          {/* Author */}
          <div className="mt-12 p-6 rounded-xl bg-dark-gray border border-border flex items-start gap-4">
            <img src="/images/sam-hamouda-seo-consultant-dubai.webp" alt="Sam Hamouda — Founder of upranked.io" width={48} height={48} loading="lazy" className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0 border border-accent/30" decoding="async" />
            <div>
              <p className="font-bold text-white">Sam Hamouda</p>
              <p className="text-text-secondary text-sm">Founder, upranked.io · Creator of the APEX Framework™ · GCC Growth Intelligence Specialist</p>
              <Link href="/about">
                <a className="text-accent text-sm hover:underline mt-1 inline-block">About Sam →</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-gray">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="card-premium text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{post.cta.heading}</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">{post.cta.body}</p>
            <Link href={post.cta.href}>
              <a className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-300">
                {post.cta.label} <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section-padding bg-navy">
          <div className="container-premium max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Related <span className="text-accent">Articles</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <motion.div key={rel.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="group">
                  <Link href={`/blog/${rel.slug}`}>
                    <a className="card-premium h-full flex flex-col gap-3 hover:border-accent/50 transition-all duration-300">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold self-start ${categoryColors[rel.category] ?? 'bg-accent/10 text-accent border-accent/20'}`}>
                        {rel.category}
                      </span>
                      <h3 className="font-bold text-white text-sm leading-snug group-hover:text-accent transition-colors">{rel.title}</h3>
                      <span className="text-accent text-xs font-semibold mt-auto flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
