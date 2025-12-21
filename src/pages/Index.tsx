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

const Index = () => {
  return (
    <PageLayout>
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
