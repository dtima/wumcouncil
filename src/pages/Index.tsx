import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { InvestmentOpportunities } from "@/components/InvestmentOpportunities";
import { News } from "@/components/News";
import { Events } from "@/components/Events";
import { MayorNote } from "@/components/MayorNote";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { FlashNewsCarousel } from "@/components/FlashNewsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <QuickLinks />
      <FlashNewsCarousel />
      <InvestmentOpportunities />
      <News />
      <Events />
      <MayorNote />
      <Partners />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;