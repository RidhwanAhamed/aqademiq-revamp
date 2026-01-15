import { SEOConfig } from '@/hooks/useSEO';

const BASE_URL = 'https://aqademiq.com';
const DEFAULT_OG_IMAGE = 'https://aqademiq.com/lovable-uploads/322f4c09-269e-4fad-89a5-82e1beb1b42f.png';

export const seoConfig: Record<string, SEOConfig> = {
  '/': {
    title: 'Aqademiq - Student Productivity Hub | Productivity App for Students',
    description: 'Aqademiq is the ultimate productivity hub for students. Master study habits, time management, and academic success with our productivity app designed specifically for students.',
    keywords: 'student productivity hub, productivity app for students, student productivity app, academic productivity, study productivity, student time management',
    canonical: `${BASE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Aqademiq - Student Productivity Hub',
        description: 'Aqademiq is the ultimate productivity hub for students. Master study habits, time management, and academic success with our productivity app designed specifically for students.',
        url: `${BASE_URL}/`,
        image: DEFAULT_OG_IMAGE,
        publisher: {
          '@type': 'Organization',
          name: 'Aqademiq',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Use Aqademiq Student Productivity Hub',
        description: 'Learn how to set up and use Aqademiq, the productivity hub for students, in 5 minutes.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Connect Your School',
            text: 'Plug in your university and course list. Aqademiq syncs all your deadlines and course schedule. (2 minutes)',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Tell Ada About You',
            text: 'How do you study best? Do deadlines stress you out? Are notifications overwhelming? Ada asks 3 quick questions to personalize your plan. (2 minutes)',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Get Your Week Plan',
            text: 'Boom. Your semester unfolds week by week. Each day shows exactly what to focus on—no overwhelm, no decision paralysis. Ada adapts it as your courses evolve. (1 minute)',
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Aqademiq designed for ADHD or neurodivergent students?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Aqademiq is designed for all students, with specific accessibility features neurodivergent students find invaluable: sensory-friendly modes, low-distraction layouts, adaptive notifications, and clear step-by-step planning. ADHD students especially benefit from Ada\'s micro-task breakdown and reduced decision paralysis. But anyone struggling with procrastination finds it useful.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Aqademiq actually reduce procrastination?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Procrastination research shows it\'s often driven by decision fatigue, task overwhelm, or poor planning—not laziness. Aqademiq addresses all three: Ada breaks big projects into concrete steps (reducing overwhelm), prioritizes your week automatically (cutting decision fatigue), and adapts your plan in real-time (boosting motivation). Studies show AI-assisted planning reduces procrastination by 30–40%.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to set up?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most students finish setup in 3–5 minutes: connect your school, answer 3 quick questions about your study style, and Ada builds your week. You\'ll have a full semester plan before your next class.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the interface sensory-friendly for ADHD or autism?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can turn off animations, reduce colors, mute notifications, and switch to a simplified layout. We designed Aqademiq with the input of neurodivergent students, so sensory customization is built-in, not an afterthought.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is this different from other study apps?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most study apps are task managers with a study coat of paint. Aqademiq is built on behavioral psychology and adaptive AI. It doesn\'t just list what to do; it explains *why* and *when*, prevents decision paralysis, and feels designed for how students actually think—especially those prone to procrastination or sensory overload.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I sync my existing calendar and LMS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Aqademiq integrates with Google Calendar, Apple Calendar, and most university LMS systems. Import your syllabus directly, and Ada automatically creates tasks and deadlines for you.',
            },
          },
        ],
      },
    ],
  },
  '/features': {
    title: 'Features - Student Productivity Tools | Aqademiq',
    description: 'Discover powerful student productivity features. Smart scheduling, grade tracking, focus tools, and more in one unified productivity hub for students.',
    keywords: 'student productivity features, academic planning tools, student organization, productivity tools for students, student scheduling app',
    canonical: `${BASE_URL}/features`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Features - Student Productivity Tools | Aqademiq',
      description: 'Discover powerful student productivity features. Smart scheduling, grade tracking, focus tools, and more in one unified productivity hub for students.',
      url: `${BASE_URL}/features`,
      image: DEFAULT_OG_IMAGE,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Features',
            item: `${BASE_URL}/features`,
          },
        ],
      },
    },
  },
  '/why-aqademiq': {
    title: 'Why Students Choose Aqademiq | Student Productivity Platform',
    description: 'Learn why thousands of students trust Aqademiq as their productivity hub. Built for how students actually work, not how productivity apps think they should.',
    keywords: 'why productivity app, student productivity solution, academic productivity platform, best productivity app for students',
    canonical: `${BASE_URL}/why-aqademiq`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Why Students Choose Aqademiq | Student Productivity Platform',
      description: 'Learn why thousands of students trust Aqademiq as their productivity hub. Built for how students actually work, not how productivity apps think they should.',
      url: `${BASE_URL}/why-aqademiq`,
      image: DEFAULT_OG_IMAGE,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Why Aqademiq',
            item: `${BASE_URL}/why-aqademiq`,
          },
        ],
      },
    },
  },
  '/about': {
    title: 'About Aqademiq | Student Productivity Hub for Academic Success',
    description: 'Aqademiq helps students achieve academic success through intelligent productivity tools. Learn about our mission to transform student productivity.',
    keywords: 'about student productivity, academic productivity tools, student productivity platform, productivity hub for students',
    canonical: `${BASE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About Aqademiq | Student Productivity Hub for Academic Success',
      description: 'Aqademiq helps students achieve academic success through intelligent productivity tools. Learn about our mission to transform student productivity.',
      url: `${BASE_URL}/about`,
      image: DEFAULT_OG_IMAGE,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: `${BASE_URL}/about`,
          },
        ],
      },
    },
  },
};

// Helper function to get SEO config for a route
export function getSEOConfig(pathname: string): SEOConfig {
  return seoConfig[pathname] || seoConfig['/'];
}
