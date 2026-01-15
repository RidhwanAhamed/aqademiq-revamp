import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSEOConfig } from "@/lib/seoConfig";

export function useSEO() {
  const location = useLocation();
  const config = getSEOConfig(location.pathname);

  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (config.ogTitle) updateOGTag('og:title', config.ogTitle);
    if (config.ogDescription) updateOGTag('og:description', config.ogDescription);
    if (config.ogImage) {
      updateOGTag('og:image', config.ogImage);
      updateOGTag('og:image:secure_url', config.ogImage);
    }
    if (config.ogType) updateOGTag('og:type', config.ogType);
    updateOGTag('og:url', config.canonical);

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="twitter:${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', `twitter:${name}`);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (config.twitterTitle) updateTwitterTag('title', config.twitterTitle);
    if (config.twitterDescription) updateTwitterTag('description', config.twitterDescription);
    if (config.twitterImage) updateTwitterTag('image', config.twitterImage);
    updateTwitterTag('url', config.canonical);

  }, [config, location.pathname]);

  return config;
}
