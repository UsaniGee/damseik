import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = "website",
  canonical 
}) => {
  const siteName = "Dam Seik Services";
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : "https://damseikservices.com";
  const defaultTitle = `${title || "Home"} | ${siteName}`;
  const defaultDescription = description || "Dam Seik Services Limited - Leading provider of oil & gas engineering solutions, pipeline services, well services, and marine support in Nigeria.";
  const defaultImage = ogImage || `${siteUrl}/og-image.jpg`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? `${siteUrl}${window.location.pathname}` : siteUrl);

  useEffect(() => {
    document.title = defaultTitle;

    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', defaultDescription);
    if (keywords) updateMetaTag('keywords', keywords);
  
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:title', defaultTitle, true);
    updateMetaTag('og:description', defaultDescription, true);
    updateMetaTag('og:image', defaultImage, true);
    updateMetaTag('og:site_name', siteName, true);

    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', canonicalUrl, true);
    updateMetaTag('twitter:title', defaultTitle, true);
    updateMetaTag('twitter:description', defaultDescription, true);
    updateMetaTag('twitter:image', defaultImage, true);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [title, description, keywords, ogImage, ogType, canonical, defaultTitle, defaultDescription, defaultImage, canonicalUrl, siteName]);

  return null;
};

export default SEO;

