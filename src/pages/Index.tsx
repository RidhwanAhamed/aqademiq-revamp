import { Header, Footer, PageLayout } from "@/components/layout";
import { HeroSection, FeaturesSection, CTASection } from "@/components/sections";

const Index = () => {
  return (
    <PageLayout>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </PageLayout>
  );
};

export default Index;
