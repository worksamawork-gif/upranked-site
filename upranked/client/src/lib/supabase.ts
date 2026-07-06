import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://xusvmvvosdvmixtqkiop.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_dtOltW0Hz6plqrVz2e3tjQ_UculjCKG';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/** Transform a Supabase Storage URL to use on-the-fly image compression.
 *  Converts /storage/v1/object/public/ → /storage/v1/render/image/public/
 *  Non-Supabase URLs are returned unchanged.
 */
export function optimizeImageUrl(url: string | undefined | null, width = 800, quality = 80): string {
  if (!url) return '';
  if (!url.includes('supabase.co/storage/v1/object/public/')) return url;
  return url
    .replace('/storage/v1/object/public/', '/storage/v1/render/image/public/')
    + `?width=${width}&quality=${quality}&format=webp`;
}

export type SupabasePost = {
  id: string;
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  excerpt: string;
  key_intelligence: string;
  category: string;
  tags: string[];
  author: string;
  author_image: string;
  featured_image: string;
  featured_image_alt: string;
  read_time: number;
  status: 'draft' | 'published';
  published_at: string;
  created_at: string;
  updated_at: string;
  content: Array<{ type: string; text?: string; items?: string[] }>;
  content_html: string;
  cta_heading: string;
  cta_body: string;
  cta_label: string;
  cta_href: string;
  related_slugs: string[];
  // SEO
  focus_keyphrase: string;
  canonical_url: string;
  robots_index: boolean;
  robots_follow: boolean;
  // Schema
  schema_type: string;
  schema_custom: string;
  // Open Graph
  og_title: string;
  og_description: string;
  og_image: string;
  og_image_alt: string;
  // Twitter Card
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
};

/** Convert a Supabase post to the camelCase shape used by Blog/BlogPost pages */
export function adaptPost(p: SupabasePost) {
  return {
    slug: p.slug,
    title: p.title,
    metaTitle: p.meta_title || p.title,
    metaDescription: p.meta_description || p.excerpt,
    excerpt: p.excerpt,
    keyIntelligence: p.key_intelligence,
    category: p.category,
    tags: p.tags || [],
    readTime: p.read_time,
    publishedAt: p.published_at,
    content: (p.content || []) as any[],
    contentHtml: p.content_html || '',
    relatedSlugs: p.related_slugs || [],
    cta: {
      heading: p.cta_heading,
      body: p.cta_body,
      label: p.cta_label,
      href: p.cta_href,
    },
    // Extended SEO fields passed through for BlogPost rendering
    focusKeyphrase: p.focus_keyphrase,
    canonicalUrl: p.canonical_url,
    robotsIndex: p.robots_index !== false,
    robotsFollow: p.robots_follow !== false,
    schemaType: p.schema_type || 'BlogPosting',
    schemaCustom: p.schema_custom || '',
    featuredImage: p.featured_image,
    featuredImageAlt: p.featured_image_alt,
    ogTitle: p.og_title,
    ogDescription: p.og_description,
    ogImage: p.og_image || p.featured_image,
    ogImageAlt: p.og_image_alt || p.featured_image_alt,
    twitterCard: p.twitter_card || 'summary_large_image',
    twitterTitle: p.twitter_title,
    twitterDescription: p.twitter_description,
    twitterImage: p.twitter_image || p.og_image || p.featured_image,
  };
}
