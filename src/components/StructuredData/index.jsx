import { useEffect } from 'react';
import { CONTACT_EMAIL, SITE_URL } from '../../config/site';

const StructuredData = ({ type = 'Organization', data }) => {
  useEffect(() => {
    const defaultOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dam Seik Services Limited",
      "url": SITE_URL,
      "logo": "https://res.cloudinary.com/dnu4lxiie/image/upload/v1744211989/Dam_Seik_Services_Limited_Logo_2-removebg-preview_xuimnd.png",
      "description": "Leading provider of oil & gas engineering solutions, pipeline services, well services, and marine support in Nigeria.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#10 Second Avenue, Federal Housing Estate Rumuemue, Mile 4",
        "addressLocality": "Port Harcourt",
        "addressRegion": "Rivers State",
        "addressCountry": "NG"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-803-343-3350",
        "contactType": "Customer Service",
        "email": CONTACT_EMAIL
      }
    };

    const schemaData = data || defaultOrganization;

    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, type]);

  return null;
};

export default StructuredData;

