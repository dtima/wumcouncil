import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Hotel, Utensils, Camera, Calendar } from "lucide-react";

const PracticalGuide = () => {
  const { t } = useLanguage();

  const visitorGuides = [
    {
      title: "Tourism",
      icon: <MapPin className="h-5 w-5" />,
      content: "Discover Wum's breathtaking attractions including the majestic Menchum Falls, four volcanic lakes (Wum, Atue, Oshien, and Illum), and the healing hot springs of Itiaku."
    },
    {
      title: "Hotels & Accommodation",
      icon: <Hotel className="h-5 w-5" />,
      content: "Find comfortable stays in Wum including Morning Star Hotel, Lake Nyos Hotel, Green Wood Motel, and Eden Garden Motel."
    },
    {
      title: "Restaurants",
      icon: <Utensils className="h-5 w-5" />,
      content: "Experience local and international cuisine at various restaurants throughout Wum."
    },
    {
      title: "Tourist Sites",
      icon: <Camera className="h-5 w-5" />,
      content: "Visit our natural wonders including Menchum Falls, the four lakes, hot springs, and cultural heritage sites."
    },
    {
      title: "Events",
      icon: <Calendar className="h-5 w-5" />,
      content: "Stay updated with local festivals, cultural celebrations, and community events."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visitor's Guide</h2>
            <p className="text-gray-600 mb-6">Discover Wum's tourist services and attractions</p>
            
            <Accordion type="single" collapsible className="w-full">
              {visitorGuides.map((guide, index) => (
                <AccordionItem key={index} value={`visitor-item-${index}`}>
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

      <Footer />
    </div>
  );
};

export default PracticalGuide;