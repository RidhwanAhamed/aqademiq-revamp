/**
 * Structured Data (JSON-LD) generators for SEO
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

/**
 * Generate FAQPage structured data
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb) => ({
      "@type": "ListItem",
      "position": crumb.position,
      "name": crumb.name,
      "item": crumb.item,
    })),
  };
}

/**
 * Generate HowTo structured data
 */
export function generateHowToSchema(steps: Array<{ name: string; text: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up Aqademiq",
    "description": "Learn how to set up Aqademiq in 5 minutes to transform your academic planning",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
    })),
  };
}

/**
 * Enhanced Product/SoftwareApplication schema
 */
export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Aqademiq",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://aqademiq.app",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1",
    },
    "description": "AI-powered academic planning tool that uses procrastination psychology to build study plans. Designed for students with ADHD and neurodivergent needs. Features smart scheduling, AI study coach (Ada), grade tracking, and customizable focus modes.",
    "featureList": [
      "Smart Weekly Planning",
      "AI Study Coach (Ada)",
      "Grade Analytics",
      "Focus Timer",
      "Task Chunking",
      "Progress Tracking",
      "ADHD-friendly Design",
      "Neurodivergent Support",
      "Calendar Integration",
      "LMS Integration",
    ],
    "screenshot": "https://aqademiq.com/lovable-uploads/322f4c09-269e-4fad-89a5-82e1beb1b42f.png",
    "url": "https://aqademiq.app",
    "author": {
      "@type": "Organization",
      "name": "Aqademiq",
      "url": "https://aqademiq.com",
    },
    "keywords": "student productivity app, academic planner, study planner app, AI study coach",
  };
}

/**
 * Organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aqademiq",
    "url": "https://aqademiq.com",
    "logo": "https://aqademiq.com/aqademiq-logo.svg",
    "description": "AI-powered academic planning platform for students. Built on procrastination psychology research, designed with neurodivergent students in mind.",
    "sameAs": [
      "https://twitter.com/Aqademiq",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://aqademiq.com",
      "email": "tryaqademiq@gmail.com",
    },
  };
}

/**
 * WebSite schema
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aqademiq",
    "url": "https://aqademiq.com",
    "description": "AI-powered academic planning for students. Transform your courses, deadlines, and commitments into conflict-free schedules.",
    "publisher": {
      "@type": "Organization",
      "name": "Aqademiq",
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aqademiq.com?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}
