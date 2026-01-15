export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const baseUrl = "https://aqademiq.com";
const defaultOgImage = "https://aqademiq.com/lovable-uploads/322f4c09-269e-4fad-89a5-82e1beb1b42f.png";

export const seoConfig: Record<string, SEOConfig> = {
  "/": {
    title: "Student Productivity App - AI Academic Planner for Students | Aqademiq",
    description: "Transform your academic chaos into clarity with Aqademiq, the AI-powered student productivity app. Built on behavioral psychology, designed for students who procrastinate. Features smart scheduling, AI study coach (Ada), grade tracking, and ADHD-friendly design.",
    keywords: "student productivity app, academic planner, study planner app, AI study coach, academic scheduling, student organization app, procrastination help, ADHD study tools, academic planning tool, student productivity platform",
    canonical: `${baseUrl}/`,
    ogTitle: "Student Productivity App - AI Academic Planner for Students | Aqademiq",
    ogDescription: "Transform your academic chaos into clarity, built on behavioral psychology. Designed for students who procrastinate, with accessibility features neurodivergent students love.",
    ogImage: defaultOgImage,
    ogType: "website",
    twitterTitle: "Student Productivity App - AI Academic Planner | Aqademiq",
    twitterDescription: "Transform your academic chaos into clarity, built on behavioral psychology. Designed for students who procrastinate, with accessibility features neurodivergent students love.",
    twitterImage: defaultOgImage,
  },
  "/features": {
    title: "Features - Smart Academic Planning Tools | Aqademiq",
    description: "Discover Aqademiq's powerful features: smart scheduling, AI study coach (Ada), grade tracking, focus tools, and more. The complete academic planning toolkit designed for student productivity and success.",
    keywords: "academic planning tools, student organization app, AI study coach, smart scheduling, grade tracking, focus timer, student productivity features, academic calendar app, study planning tools",
    canonical: `${baseUrl}/features`,
    ogTitle: "Features - Smart Academic Planning Tools | Aqademiq",
    ogDescription: "One hub for actually finishing work. Aqademiq combines smart scheduling, AI coaching, grade tracking, and focus tools into one unified platform designed specifically for students.",
    ogImage: defaultOgImage,
    ogType: "website",
    twitterTitle: "Features - Smart Academic Planning Tools | Aqademiq",
    twitterDescription: "One hub for actually finishing work. Aqademiq combines smart scheduling, AI coaching, grade tracking, and focus tools into one unified platform.",
    twitterImage: defaultOgImage,
  },
  "/why-aqademiq": {
    title: "Why Aqademiq - Best Student Productivity App | Aqademiq",
    description: "Why students actually use Aqademiq. Most productivity apps treat procrastination like a willpower problem. We know it's a planning problem, decision fatigue, and sensory overload. We fix all three. The best student productivity app for academic success.",
    keywords: "best student productivity app, procrastination help for students, academic planning app comparison, why choose Aqademiq, student productivity platform, ADHD-friendly study app, neurodivergent study tools",
    canonical: `${baseUrl}/why-aqademiq`,
    ogTitle: "Why Aqademiq - Best Student Productivity App | Aqademiq",
    ogDescription: "Why students actually use Aqademiq. Most productivity apps treat procrastination like a willpower problem. We know it's a planning problem, decision fatigue, and sensory overload. We fix all three.",
    ogImage: defaultOgImage,
    ogType: "website",
    twitterTitle: "Why Aqademiq - Best Student Productivity App | Aqademiq",
    twitterDescription: "Why students actually use Aqademiq. Most productivity apps treat procrastination like a willpower problem. We fix all three.",
    twitterImage: defaultOgImage,
  },
  "/about": {
    title: "About Us - Student-First Academic Planning Platform | Aqademiq",
    description: "Helping students study sustainably with AI. We're on a mission to help students achieve their academic goals without sacrificing their mental health. Founded by students who procrastinate, for students who procrastinate.",
    keywords: "student productivity platform, academic success tools, about Aqademiq, student-first design, AI academic planning, sustainable studying, academic planning company",
    canonical: `${baseUrl}/about`,
    ogTitle: "About Us - Student-First Academic Planning Platform | Aqademiq",
    ogDescription: "Helping students study sustainably with AI. We're on a mission to help students achieve their academic goals without sacrificing their mental health.",
    ogImage: defaultOgImage,
    ogType: "website",
    twitterTitle: "About Us - Student-First Academic Planning Platform | Aqademiq",
    twitterDescription: "Helping students study sustainably with AI. We're on a mission to help students achieve their academic goals without sacrificing their mental health.",
    twitterImage: defaultOgImage,
  },
};

export const getSEOConfig = (pathname: string): SEOConfig => {
  return seoConfig[pathname] || seoConfig["/"];
};
