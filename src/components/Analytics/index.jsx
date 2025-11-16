import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, GA_MEASUREMENT_ID]);

  const trackCTA = (ctaName, location) => {
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_name: ctaName,
        location: location,
      });
    }
  };

  const trackFormSubmission = (formName) => {
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submission', {
        form_name: formName,
      });
    }
  };

  // Expose tracking functions globally for use in components
  if (typeof window !== 'undefined') {
    window.trackCTA = trackCTA;
    window.trackFormSubmission = trackFormSubmission;
  }

  return null;
};

export default Analytics;

