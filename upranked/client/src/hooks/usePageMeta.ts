import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  schema?: object;
  schemaId?: string;
  canonical?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function usePageMeta({ title, description, schema, schemaId = 'page-schema', canonical }: PageMeta) {
  useEffect(() => {
    const fullTitle = `${title} | upranked.io`;
    const pathname = window.location.pathname.endsWith('/') ? window.location.pathname : `${window.location.pathname}/`;
    const canonicalUrl = canonical ?? `https://upranked.io${pathname}`;

    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const prevCanonical = document.getElementById('canonical-tag')?.getAttribute('href') ?? '';
    const prevOgUrl = document.getElementById('og-url')?.getAttribute('content') ?? '';
    const prevOgTitle = document.getElementById('og-title')?.getAttribute('content') ?? '';
    const prevOgDesc = document.getElementById('og-description')?.getAttribute('content') ?? '';
    const prevTwTitle = document.getElementById('twitter-title')?.getAttribute('content') ?? '';
    const prevTwDesc = document.getElementById('twitter-description')?.getAttribute('content') ?? '';

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', description);
    document.getElementById('canonical-tag')?.setAttribute('href', canonicalUrl);
    document.getElementById('og-url')?.setAttribute('content', canonicalUrl);
    document.getElementById('og-title')?.setAttribute('content', fullTitle);
    document.getElementById('og-description')?.setAttribute('content', description);
    document.getElementById('twitter-title')?.setAttribute('content', fullTitle);
    document.getElementById('twitter-description')?.setAttribute('content', description);

    let script: HTMLScriptElement | null = null;
    if (schema) {
      // Remove any pre-rendered copy with the same id before injecting to prevent duplicates
      document.getElementById(schemaId)?.remove();
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = schemaId;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      setMeta('meta[name="description"]', 'content', prevDesc);
      document.getElementById('canonical-tag')?.setAttribute('href', prevCanonical);
      document.getElementById('og-url')?.setAttribute('content', prevOgUrl);
      document.getElementById('og-title')?.setAttribute('content', prevOgTitle);
      document.getElementById('og-description')?.setAttribute('content', prevOgDesc);
      document.getElementById('twitter-title')?.setAttribute('content', prevTwTitle);
      document.getElementById('twitter-description')?.setAttribute('content', prevTwDesc);
      document.getElementById(schemaId)?.remove();
    };
  }, [title, description, canonical, schemaId]);
}
