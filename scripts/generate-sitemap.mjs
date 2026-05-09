/**
 * generate-sitemap.mjs
 *
 * Generates dist/public/sitemap.xml at build time.
 * Static pages are hardcoded; blog posts are fetched live from Supabase
 * so every new post is included automatically without manual edits.
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR  = path.resolve(__dirname, '../dist/public');

const SUPABASE_URL = 'https://xusvmvvosdvmixtqkiop.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'sb_publishable_dtOltW0Hz6plqrVz2e3tjQ_UculjCKG';

const TODAY = new Date().toISOString().split('T')[0];

function url(loc, lastmod, changefreq, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const STATIC_URLS = [
  url('https://upranked.io/',                                    '2026-04-26', 'weekly',  '1.0'),
  url('https://upranked.io/about/',                              '2026-04-26', 'monthly', '0.9'),
  url('https://upranked.io/methodology/',                        '2026-04-26', 'monthly', '0.9'),
  url('https://upranked.io/contact/',                            '2026-04-26', 'monthly', '0.9'),
  url('https://upranked.io/faq/',                                '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/privacy/',                            '2026-05-01', 'yearly',  '0.3'),
  url('https://upranked.io/terms/',                              '2026-05-01', 'yearly',  '0.3'),
  url('https://upranked.io/seo/',                                '2026-05-01', 'weekly',  '0.9'),
  url('https://upranked.io/seo-industries/',                     '2026-05-01', 'weekly',  '0.9'),
  url('https://upranked.io/industries/medical-seo/',             '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/industries/industrial-seo/',          '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/industries/business-seo/',            '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/on-page/',                        '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/off-page/',                       '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/technical/',                      '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/schema/',                         '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/local/',                          '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/bilingual/',                      '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/analytics/',                      '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/content-architecture/',           '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/seo/geo/',                            '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/growth-intelligence/',                '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/growth-intelligence/consultation/',   '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/growth-intelligence/tools/',          '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/growth-intelligence/websites/',       '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/growth-intelligence/strategy/',       '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/markets/gcc/',                        '2026-04-26', 'monthly', '0.9'),
  url('https://upranked.io/markets/gcc/uae/dubai/',              '2026-04-26', 'monthly', '0.9'),
  url('https://upranked.io/markets/gcc/ksa/riyadh/',             '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/markets/gcc/kuwait/',                 '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/markets/gcc/bahrain/',                '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/markets/uk/london/',                  '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/markets/usa/new-york/',               '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/markets/eu/germany/',                 '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/markets/eu/france/',                  '2026-04-26', 'monthly', '0.8'),
  url('https://upranked.io/blog/',                                          '2026-04-26', 'weekly',  '0.8'),
  // Static blog posts (hardcoded in blogPosts.ts)
  url('https://upranked.io/blog/seo-uae-2026-what-works/',                  '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/blog/medical-seo-dubai-clinics/',                '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/blog/industrial-b2b-seo-gcc-procurement/',       '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/blog/why-gcc-businesses-invisible-google/',      '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/blog/bilingual-seo-arabic-english/',             '2026-04-26', 'monthly', '0.7'),
  url('https://upranked.io/blog/apex-framework-explained/',                 '2026-04-26', 'monthly', '0.7'),
].join('\n');

async function generateSitemap() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('slug, published_at, updated_at')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) console.warn('⚠ Supabase error, blog posts skipped:', error.message);

  const blogUrls = (posts || [])
    .map(p => {
      const lastmod = (p.updated_at || p.published_at || TODAY).split('T')[0];
      return url(`https://upranked.io/blog/${p.slug}/`, lastmod, 'monthly', '0.7');
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${STATIC_URLS}
${blogUrls ? blogUrls + '\n' : ''}
</urlset>
`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`  ✓ sitemap.xml — ${(posts || []).length} blog post(s) from Supabase`);
}

generateSitemap().catch(err => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
