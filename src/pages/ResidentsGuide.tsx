import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Heart, Handshake, Shield, Music, Trophy, ShoppingBag } from "lucide-react";

const ResidentsGuide = () => {
  const { t } = useLanguage();

  const residentGuides = [
    {
      title: "Education",
      icon: <GraduationCap className="h-5 w-5" />,
      content: "Access information about local schools, educational programs, and learning resources. Wum municipality has several educational institutions including primary, secondary, and vocational training centers. Find details about enrollment, academic calendars, and educational support services."
    },
    {
      title: "Health Services",
      icon: <Heart className="h-5 w-5" />,
      content: "The Bu Integrated Health Center, Wum Urban Integrated Health Center, and Upkwa Integrated Health Center provide essential healthcare services. Find information about medical facilities, emergency services, and healthcare programs available to residents."
    },
    {
      title: "Social Services",
      icon: <Handshake className="h-5 w-5" />,
      content: "Access community support programs, social welfare services, and assistance programs. Learn about youth development initiatives, support for the elderly, and community outreach programs available to Wum residents."
    },
    {
      title: "Security",
      icon: <Shield className="h-5 w-5" />,
      content: "Stay informed about local security measures, emergency contacts, and safety guidelines. Find information about police services, emergency response teams, and community safety programs."
    },
    {
      title: "Culture & Arts",
      icon: <Music className="h-5 w-5" />,
      content: "Explore Wum's rich cultural heritage through local events, art exhibitions, and traditional ceremonies. Discover opportunities to participate in cultural activities and learn about our community's artistic traditions."
    },
    {
      title: "Sports & Leisure",
      icon: <Trophy className="h-5 w-5" />,
      content: "Participate in local sports events, recreational activities, and community fitness programs. Find information about sports facilities, youth programs, and leisure activities available throughout the municipality."
    },
    {
      title: "Markets",
      icon: <ShoppingBag className="h-5 w-5" />,
      content: "The Wum Main Market serves as the central commercial hub. Find information about market days, trading hours, and available products. Learn about local businesses, shopping facilities, and commercial opportunities in the municipality."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Resident's Guide</h2>
            <p className="text-gray-600 mb-6">Discover Wum's essential services and community resources</p>
            
            <Accordion type="single" collapsible className="w-full">
              {residentGuides.map((guide, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex items-center gap-3">
                    {guide.icon}
                    {guide.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {guide.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResidentsGuide;