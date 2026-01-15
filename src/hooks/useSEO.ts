import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object | object[];
  noindex?: boolean;
}

const BASE_URL = 'https://aqademiq.com';

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', config.description);
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }

    // Robots meta tag
    updateMetaTag('robots', config.noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', config.title, true);
    updateMetaTag('og:description', config.description, true);
    updateMetaTag('og:type', config.ogType || 'website', true);
    updateMetaTag('og:url', config.canonical || `${BASE_URL}${window.location.pathname}`, true);
    updateMetaTag('og:site_name', 'Aqademiq', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
      updateMetaTag('og:image:secure_url', config.ogImage, true);
      updateMetaTag('og:image:type', 'image/png', true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:alt', config.title, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', config.title);
    updateMetaTag('twitter:description', config.description);
    updateMetaTag('twitter:url', config.canonical || `${BASE_URL}${window.location.pathname}`);
    updateMetaTag('twitter:site', '@Aqademiq');
    updateMetaTag('twitter:creator', '@Aqademiq');
    
    if (config.ogImage) {
      updateMetaTag('twitter:image', config.ogImage);
      updateMetaTag('twitter:image:alt', config.title);
    }

    // Canonical URL
    const canonicalUrl = config.canonical || `${BASE_URL}${window.location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Structured Data (JSON-LD)
    const removeExistingStructuredData = () => {
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach((script) => {
        // Keep base structured data from index.html, only remove dynamic ones
        const content = script.textContent || '';
        if (content.includes('"@type":"WebPage"') && !content.includes('"@type":"SoftwareApplication"')) {
          script.remove();
        }
      });
    };

    if (config.structuredData) {
      removeExistingStructuredData();
      
      const dataArray = Array.isArray(config.structuredData) 
        ? config.structuredData 
        : [config.structuredData];

      dataArray.forEach((data) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    // Cleanup function
    return () => {
      // Note: We don't remove meta tags on cleanup to avoid flickering
      // The next route change will update them anyway
    };
  }, [config]);
}
