/**
 * prerender.mjs — Static HTML snapshot generator
 *
 * Runs after `vite build`. Spins up a local static server, visits every
 * public route with headless Chromium, and writes the fully-rendered HTML
 * to the correct path inside dist/public/.
 *
 * Result: AI crawlers, Googlebot, and social-card fetchers receive complete
 * HTML (headings, body copy, FAQ, JSON-LD) instead of an empty SPA shell.
 */

import { chromium } from 'playwright';
import { createClient } from '@supabase/supabase-js';
import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist/public');
const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

const SUPABASE_URL = 'https://xusvmvvosdvmixtqkiop.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'sb_publishable_dtOltW0Hz6plqrVz2e3tjQ_UculjCKG';

async function fetchSupabaseBlogRoutes() {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('status', 'published');
    return (data || []).map(p => `/blog/${p.slug}`);
  } catch {
    console.warn('  ⚠ Could not fetch Supabase blog routes, using static list only');
    return [];
  }
}

// All public routes to pre-render
const ROUTES = [
  '/',
  '/about',
  '/methodology',
  '/contact',
  '/faq',
  '/blog',

  // SEO hub + types
  '/seo',
  '/seo/on-page',
  '/seo/off-page',
  '/seo/technical',
  '/seo/local',
  '/seo/bilingual',
  '/seo/schema',
  '/seo/analytics',
  '/seo/content-architecture',
  '/seo/geo',

  // Industry SEO
  '/seo-industries',
  '/industries/medical-seo',
  '/industries/industrial-seo',
  '/industries/business-seo',

  // Growth Intelligence
  '/growth-intelligence',
  '/growth-intelligence/consultation',
  '/growth-intelligence/tools',
  '/growth-intelligence/websites',
  '/growth-intelligence/strategy',

  // Markets
  '/markets/gcc',
  '/markets/gcc/uae/dubai',
  '/markets/gcc/ksa/riyadh',
  '/markets/gcc/kuwait',
  '/markets/gcc/bahrain',
  '/markets/uk/london',
  '/markets/usa/new-york',
  '/markets/eu/germany',
  '/markets/eu/france',

  // Legal
  '/privacy',
  '/terms',

  // Blog posts
  '/blog/seo-uae-2026-what-works',
  '/blog/medical-seo-dubai-clinics',
  '/blog/industrial-b2b-seo-gcc-procurement',
  '/blog/why-gcc-businesses-invisible-google',
  '/blog/bilingual-seo-arabic-english',
  '/blog/apex-framework-explained',
  '/blog/arabic-seo-agency-dubai-uae',

  // AEO & GEO pages
  '/seo/aeo',
  '/blog/riyadh-seo-guide-2026',
  '/blog/aeo-geo-bahrain-dubai-gcc-ai-search',
  '/blog/healthcare-seo-uae-2026',
];

function startServer(cleanShell) {
  return new Promise((resolve, reject) => {
    const app = express();
    app.use(express.static(DIST_DIR));
    // SPA fallback: always serve the ORIGINAL clean Vite shell (not a pre-rendered
    // home page) so schema tags from '/' don't bleed into other routes during prerender.
    app.use((err, _req, res, next) => {
      if (err instanceof URIError) return res.send(cleanShell);
      next(err);
    });
    app.get('*', (_req, res) => res.send(cleanShell));
    const server = app.listen(PORT, () => resolve(server));
    server.on('error', reject);
  });
}

function routeToFilePath(route) {
  if (route === '/') return path.join(DIST_DIR, 'index.html');
  return path.join(DIST_DIR, route.slice(1).replace(/\/$/, ''), 'index.html');
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`✗ dist/public not found. Run "vite build" first.`);
    process.exit(1);
  }

  console.log('\n🔍 Pre-rendering pages for AI crawlers...\n');

  // Merge static routes with any new blog posts published via Supabase
  const supabaseBlogRoutes = await fetchSupabaseBlogRoutes();
  const staticBlogSlugs = new Set(ROUTES.filter(r => r.startsWith('/blog/')));
  const newBlogRoutes = supabaseBlogRoutes.filter(r => !staticBlogSlugs.has(r));
  if (newBlogRoutes.length) console.log(`  + ${newBlogRoutes.length} new blog route(s) from Supabase\n`);
  const ROUTES_ALL = [...ROUTES, ...newBlogRoutes];

  // Read the original Vite-built shell BEFORE any route is rendered, so that
  // pre-rendering '/' (which writes home-schema into dist/public/index.html)
  // doesn't contaminate the fallback HTML served for subsequent routes.
  const cleanShell = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

  const server = await startServer(cleanShell);
  const browser = await chromium.launch();
  const context = await browser.newContext({
    // Block analytics and font downloads to speed up rendering
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
  });

  // Block non-essential third-party requests during prerender
  await context.route(/fonts\.googleapis|fonts\.gstatic|googletagmanager|google-analytics|twemoji|cdn\.jsdelivr/, route => route.abort());

  let passed = 0;
  let failed = 0;

  for (const route of ROUTES_ALL) {
    const page = await context.newPage();
    try {
      await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait until React has rendered at least an h1
      await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});

      const html = await page.content();
      const dest = routeToFilePath(route);

      // Ensure canonical tag always uses trailing slash to match Netlify's served URLs
      const fixedHtml = html.replace(
        /(<link rel="canonical" href="https:\/\/upranked\.io)(\/[^"]*[^"\/])(" id="canonical-tag")/g,
        '$1$2/$3'
      );

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, fixedHtml, 'utf-8');

      console.log(`  ✓ ${route}`);
      passed++;
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`\n${passed} pages pre-rendered${failed ? `, ${failed} failed` : ''} — done.\n`);

  if (failed > 0) process.exit(1);
}

prerender().catch(err => {
  console.error('\nPrerender crashed:', err);
  process.exit(1);
});
