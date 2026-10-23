import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildHead } from '../../lib/seo';
import { findRoute } from '../../routes/manifest';

// Head elements this component owns; anything matching is replaced on each route change.
const MANAGED = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'meta[name="keywords"]',
  'meta[name^="twitter:"]',
  'meta[property^="og:"]',
  'link[rel="canonical"]',
  'script[type="application/ld+json"]',
].join(',');

/**
 * Keeps document head tags in sync with the current route's manifest entry
 * during client-side navigation. Prerendered HTML ships the same tags.
 */
const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = buildHead(findRoute(pathname));
    document.title = head.title;

    document.head.querySelectorAll(MANAGED).forEach((el) => el.remove());

    for (const { tag, attrs } of head.tags) {
      const el = document.createElement(tag);
      for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
      document.head.appendChild(el);
    }
    for (const data of head.jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = '';
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
};

export default SEO;
