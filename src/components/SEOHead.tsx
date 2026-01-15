import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSEOConfig } from "@/lib/seoConfig";

/**
 * SEOHead component that manages meta tags for SEO
 * This component updates the document head with SEO metadata based on the current route
 */
export function SEOHead() {
  const location = useLocation();
  const config = getSEOConfig(location.pathname);

  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Update meta description
    updateMetaTag('description', config.description);

    // Update meta keywords
    updateMetaTag('keywords', config.keywords);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);

    // Update Open Graph tags
    if (config.ogTitle) updateMetaTag('og:title', config.ogTitle, 'property');
    if (config.ogDescription) updateMetaTag('og:description', config.ogDescription, 'property');
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, 'property');
      updateMetaTag('og:image:secure_url', config.ogImage, 'property');
    }
    if (config.ogType) updateMetaTag('og:type', config.ogType, 'property');
    updateMetaTag('og:url', config.canonical, 'property');

    // Update Twitter Card tags
    if (config.twitterTitle) updateMetaTag('twitter:title', config.twitterTitle);
    if (config.twitterDescription) updateMetaTag('twitter:description', config.twitterDescription);
    if (config.twitterImage) updateMetaTag('twitter:image', config.twitterImage);
    updateMetaTag('twitter:url', config.canonical);

  }, [config, location.pathname]);

  return null; // This component doesn't render anything
}
