import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { Programs } from "@/components/Programs";
import { News } from "@/components/News";
import { Events } from "@/components/Events";
import { MayorNote } from "@/components/MayorNote";
import { Footer } from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <QuickLinks />
        <Programs />
        <News />
        <Events />
        <MayorNote />
        <Footer />
        <ChatBot />
      </div>
    </LanguageProvider>
  );
};

export default Index;