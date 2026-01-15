import { Header, Footer, PageLayout } from "@/components/layout";
import { 
  HeroSection, 
  SocialProofSection,
  ValuePropsSection,
  HowItWorksSection,
  ProductShowcaseSection,
  TestimonialsSection,
  FAQSection,
  FinalCTASection 
} from "@/components/sections";
import { useSEO } from "@/hooks/useSEO";
import { StructuredData } from "@/components/StructuredData";
import {
  generateFAQSchema,
  generateHowToSchema,
  generateProductSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/structuredData";

// FAQ data for structured data
const faqs = [
  {
    question: "Is Aqademiq designed for ADHD or neurodivergent students?",
    answer: "Aqademiq is designed for all students, with specific accessibility features neurodivergent students find invaluable: sensory-friendly modes, low-distraction layouts, adaptive notifications, and clear step-by-step planning. ADHD students especially benefit from Ada's micro-task breakdown and reduced decision paralysis. But anyone struggling with procrastination finds it useful.",
  },
  {
    question: "How does Aqademiq actually reduce procrastination?",
    answer: "Procrastination research shows it's often driven by decision fatigue, task overwhelm, or poor planning—not laziness. Aqademiq addresses all three: Ada breaks big projects into concrete steps (reducing overwhelm), prioritizes your week automatically (cutting decision fatigue), and adapts your plan in real-time (boosting motivation). Studies show AI-assisted planning reduces procrastination by 30–40%.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most students finish setup in 3–5 minutes: connect your school, answer 3 quick questions about your study style, and Ada builds your week. You'll have a full semester plan before your next class.",
  },
  {
    question: "Is the interface sensory-friendly for ADHD or autism?",
    answer: "Yes. You can turn off animations, reduce colors, mute notifications, and switch to a simplified layout. We designed Aqademiq with the input of neurodivergent students, so sensory customization is built-in, not an afterthought.",
  },
  {
    question: "How is this different from other study apps?",
    answer: "Most study apps are task managers with a study coat of paint. Aqademiq is built on behavioral psychology and adaptive AI. It doesn't just list what to do; it explains *why* and *when*, prevents decision paralysis, and feels designed for how students actually think—especially those prone to procrastination or sensory overload.",
  },
  {
    question: "Can I sync my existing calendar and LMS?",
    answer: "Absolutely. Aqademiq integrates with Google Calendar, Apple Calendar, and most university LMS systems. Import your syllabus directly, and Ada automatically creates tasks and deadlines for you.",
  },
];

// HowTo steps for structured data
const howToSteps = [
  {
    name: "Connect Your School",
    text: "Plug in your university and course list. Aqademiq syncs all your deadlines and course schedule. (2 minutes)",
  },
  {
    name: "Tell Ada About You",
    text: "How do you study best? Do deadlines stress you out? Are notifications overwhelming? Ada asks 3 quick questions to personalize your plan. (2 minutes)",
  },
  {
    name: "Get Your Week Plan",
    text: "Boom. Your semester unfolds week by week. Each day shows exactly what to focus on—no overwhelm, no decision paralysis. Ada adapts it as your courses evolve. (1 minute)",
  },
];

const Index = () => {
  useSEO(); // Update SEO meta tags for this page
  
  // Generate all structured data for homepage
  const structuredData = [
    generateProductSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateFAQSchema(faqs),
    generateHowToSchema(howToSteps),
    generateBreadcrumbSchema([
      { position: 1, name: "Home", item: "https://aqademiq.com" },
    ]),
  ];
  
  return (
    <PageLayout>
      <StructuredData data={structuredData} />
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ValuePropsSection />
        <HowItWorksSection />
        <ProductShowcaseSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </PageLayout>
  );
};

export default Index;
