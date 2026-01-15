import { Header, Footer, PageLayout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
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

const Index = () => {
  return (
    <PageLayout>
      <SEO {...getSEOConfig('/')} />
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
