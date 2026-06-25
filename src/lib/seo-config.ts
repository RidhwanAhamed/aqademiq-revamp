import { SEOConfig } from '@/hooks/useSEO';

const BASE_URL = 'https://aqademiq.com';
const DEFAULT_OG_IMAGE = 'https://aqademiq.com/lovable-uploads/322f4c09-269e-4fad-89a5-82e1beb1b42f.png';
const ORGANIZATION_NAME = 'R13 Labs India Private Limited';
const SUPPORT_URL = `${BASE_URL}/support`;

export const seoConfig: Record<string, SEOConfig> = {
  '/': {
    title: 'Aqademiq — AI Study Planner for Students Who Procrastinate | ADHD-Friendly',
    description: "Aqademiq uses procrastination psychology to build study plans you'll actually follow. ADHD-friendly, neurodivergent-accessible, AI-powered. Set up in 5 minutes.",
    keywords: 'ADHD study app, AI study planner, neurodivergent planner, procrastination app for students, best study app for ADHD, college productivity app, student time management, academic planning tools, executive function app, anti-procrastination app, student productivity hub, AI study coach, study planner for college, neurodivergent study tools, student organization app',
    canonical: `${BASE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Aqademiq — AI Study Planner for Students Who Procrastinate',
        description: 'AI-powered academic planning platform built on procrastination psychology. ADHD-friendly, neurodivergent-accessible, set up in 5 minutes.',
        url: `${BASE_URL}/`,
        image: DEFAULT_OG_IMAGE,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.hero-description', '.faq-answer'],
        },
        publisher: {
          '@type': 'Organization',
          name: ORGANIZATION_NAME,
          url: BASE_URL,
          logo: `${BASE_URL}/aqademiq-logo.svg`,
          brand: 'Aqademiq',
        },
        mainEntity: {
          '@type': 'SoftwareApplication',
          name: 'Aqademiq',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web',
          url: BASE_URL,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Stop Procrastinating with Aqademiq AI Study Planner',
        description: 'Set up Aqademiq in 5 minutes and get an AI-generated study plan that adapts to your habits.',
        totalTime: 'PT5M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Connect Your School',
            text: 'Plug in your university and course list. Aqademiq syncs all your deadlines and course schedule automatically. (2 minutes)',
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
            text: 'Your semester unfolds week by week. Each day shows exactly what to focus on — no overwhelm, no decision paralysis. Ada adapts as courses evolve. (1 minute)',
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
              text: 'Aqademiq is designed for all students, with specific accessibility features neurodivergent students find invaluable: sensory-friendly modes, low-distraction layouts, adaptive notifications, and clear step-by-step planning. ADHD students especially benefit from Ada\'s micro-task breakdown and reduced decision paralysis.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Aqademiq actually reduce procrastination?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Procrastination research shows it\'s often driven by decision fatigue, task overwhelm, or poor planning — not laziness. Aqademiq addresses all three: Ada breaks big projects into concrete steps (reducing overwhelm), prioritizes your week automatically (cutting decision fatigue), and adapts your plan in real-time (boosting motivation).',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to set up Aqademiq?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most students finish setup in 3–5 minutes: connect your school, answer 3 quick questions about your study style, and Ada builds your week.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the interface sensory-friendly for ADHD or autism?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can turn off animations, reduce colors, mute notifications, and switch to a simplified layout. Sensory customization is built-in, not an afterthought.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is Aqademiq different from other study apps?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most study apps are task managers with a study coat of paint. Aqademiq is built on behavioral psychology and adaptive AI. It explains why and when to study, prevents decision paralysis, and adapts to how students actually think.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I sync my existing calendar and LMS with Aqademiq?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Aqademiq integrates with Google Calendar, Apple Calendar, and most university LMS systems. Import your syllabus directly, and Ada automatically creates tasks and deadlines.',
            },
          },
        ],
      },
    ],
  },
  '/features': {
    title: 'Features — AI Study Coach, Smart Planning & ADHD Tools | Aqademiq',
    description: 'Explore Aqademiq features: AI study coach Ada, smart weekly planning, grade analytics, focus timer, task chunking, and ADHD-friendly accessibility. All in one app.',
    keywords: 'AI study coach, smart study planner, ADHD study tools, grade tracking app, focus timer for students, task chunking, student productivity features, neurodivergent study app, academic planning features, Pomodoro timer students, study schedule generator, AI academic assistant, college study tools, executive function support, study habit tracker',
    canonical: `${BASE_URL}/features`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Aqademiq Features — AI Study Coach, Smart Planning & ADHD Tools',
        description: 'Complete feature breakdown: AI study coach Ada, smart weekly planning, grade analytics, focus timer, task chunking, and ADHD-friendly design.',
        url: `${BASE_URL}/features`,
        image: DEFAULT_OG_IMAGE,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.feature-description'],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Features', item: `${BASE_URL}/features` },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Aqademiq Features',
        description: 'All features available in the Aqademiq student productivity platform',
        numberOfItems: 8,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Smart Weekly Planning', description: 'AI-generated personalized study schedules that adapt in real-time to your progress and priorities.' },
          { '@type': 'ListItem', position: 2, name: 'AI Study Coach (Ada)', description: 'Personal AI assistant that breaks projects into micro-tasks, suggests optimal study times, and adapts plans.' },
          { '@type': 'ListItem', position: 3, name: 'Grade Analytics', description: 'Visual dashboards tracking performance across all courses with trend analysis and at-risk alerts.' },
          { '@type': 'ListItem', position: 4, name: 'Focus Timer', description: 'Customizable Pomodoro-style timer with ambient sounds and distraction blocking for deep work sessions.' },
          { '@type': 'ListItem', position: 5, name: 'Task Chunking', description: 'Automatically breaks large assignments into smaller, actionable steps to reduce overwhelm.' },
          { '@type': 'ListItem', position: 6, name: 'Progress Tracking', description: 'Visual progress indicators, streak tracking, and achievement badges to maintain motivation.' },
          { '@type': 'ListItem', position: 7, name: 'ADHD-Friendly Design', description: 'Sensory-friendly modes, reduced animations, low-distraction layouts, and adaptive notifications.' },
          { '@type': 'ListItem', position: 8, name: 'Calendar & LMS Integration', description: 'Sync with Google Calendar, Apple Calendar, Canvas, Blackboard, and Moodle.' },
        ],
      },
    ],
  },
  '/why-aqademiq': {
    title: 'Why Students Choose Aqademiq Over Other Study Apps | Research-Backed',
    description: 'Built on procrastination psychology, not just task management. See why ADHD students, neurodivergent learners, and chronic procrastinators trust Aqademiq.',
    keywords: 'best study app for procrastination, why Aqademiq, ADHD productivity app comparison, neurodivergent study app review, procrastination psychology app, AI study app vs Notion, study planner comparison, best app for executive function, student productivity platform, anti-procrastination tools, behavioral psychology study app, adaptive AI planner, study app for overwhelmed students, ADHD college tools, focus app for students',
    canonical: `${BASE_URL}/why-aqademiq`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Why Students Choose Aqademiq Over Other Study Apps',
        description: 'Built on procrastination psychology research. See why ADHD students and neurodivergent learners trust Aqademiq over generic task managers.',
        url: `${BASE_URL}/why-aqademiq`,
        image: DEFAULT_OG_IMAGE,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.comparison-text'],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Why Aqademiq', item: `${BASE_URL}/why-aqademiq` },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'How Aqademiq Compares to Other Study Apps',
        description: 'Comparison of Aqademiq with generic productivity tools',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'vs. Notion', description: 'Notion is a general workspace requiring manual setup. Aqademiq is purpose-built for students with AI-powered automatic planning.' },
          { '@type': 'ListItem', position: 2, name: 'vs. Todoist', description: 'Todoist lists tasks. Aqademiq intelligently sequences, prioritizes, and adapts your study plan using behavioral psychology.' },
          { '@type': 'ListItem', position: 3, name: 'vs. Google Calendar', description: 'Google Calendar shows when things happen. Aqademiq tells you what to study, when, and why — based on deadlines and your patterns.' },
          { '@type': 'ListItem', position: 4, name: 'vs. Forest / Focus Apps', description: 'Focus apps help during sessions. Aqademiq decides what to focus on. They complement each other; Aqademiq includes a built-in focus timer.' },
        ],
      },
    ],
  },
  '/about': {
    title: 'About Aqademiq — Built by Students, for Students Who Procrastinate',
    description: 'Meet the team behind Aqademiq. We built the study app we wished we had — research-backed, ADHD-friendly, and designed to end academic procrastination.',
    keywords: 'about Aqademiq, Aqademiq team, student startup, ADHD study app creators, neurodivergent app developers, academic productivity company, procrastination research, student-built app, educational technology startup, study app mission',
    canonical: `${BASE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Aqademiq — Built by Students, for Students Who Procrastinate',
        description: 'Meet the team behind Aqademiq. We built the study app we wished we had — research-backed, ADHD-friendly, designed to end academic procrastination.',
        url: `${BASE_URL}/about`,
        image: DEFAULT_OG_IMAGE,
        mainEntity: {
          '@type': 'Organization',
          name: ORGANIZATION_NAME,
          url: BASE_URL,
          logo: `${BASE_URL}/aqademiq-logo.svg`,
          description: 'R13 Labs India Private Limited builds Aqademiq, an AI-powered academic planning platform for students.',
          brand: {
            '@type': 'Brand',
            name: 'Aqademiq',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            url: SUPPORT_URL,
          },
          sameAs: [
            'https://twitter.com/Aqademiq',
            'https://www.linkedin.com/company/aqademiq',
            'https://www.instagram.com/tryaqademiq/',
          ],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
          ],
        },
      },
    ],
  },
  '/support': {
    title: 'Support — Aqademiq by R13 Labs India Private Limited',
    description: 'Official Aqademiq support page with contact channels and organization details. Aqademiq is a product of R13 Labs India Private Limited.',
    keywords: 'Aqademiq support, R13 Labs India Private Limited, Aqademiq contact, Apple developer support URL',
    canonical: SUPPORT_URL,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Aqademiq Support',
        description: 'Official support page for Aqademiq by R13 Labs India Private Limited.',
        url: SUPPORT_URL,
        mainEntity: {
          '@type': 'Organization',
          name: ORGANIZATION_NAME,
          url: BASE_URL,
          brand: 'Aqademiq',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            email: 'tryaqademiq@gmail.com',
            url: SUPPORT_URL,
          },
        },
      },
    ],
  },
};

// Helper function to get SEO config for a route
export function getSEOConfig(pathname: string): SEOConfig {
  return seoConfig[pathname] || seoConfig['/'];
}
