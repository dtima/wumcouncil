import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FileText } from "lucide-react";

const flashNewsData = [
  {
    id: 1,
    title: "Mayor Represents Wum at European Parliament",
    description: "Lord Mayor Dighambong Anthony Mvo attended a crucial session at the European Parliament, strengthening international partnerships and discussing development opportunities for Wum municipality.",
    date: "2024-03-20",
    image: "/lovable-uploads/7e67adfb-95f6-4e9f-9e42-75ba332bcd80.png"
  },
  {
    id: 2,
    title: "Council Executive Session Advances Development Plans",
    description: "The Wum Council held a productive working session to discuss and approve key development initiatives for the municipality, focusing on infrastructure and community services.",
    date: "2024-03-18",
    image: "/lovable-uploads/fc9b420c-cd58-49ee-88cf-5ea693f50db5.png"
  },
  {
    id: 3,
    title: "Mayor Leads Municipal Inspection Tour",
    description: "Lord Mayor Dighambong Anthony Mvo, accompanied by council officials, conducted an extensive inspection of ongoing development projects across Wum municipality.",
    date: "2024-03-15",
    image: "/lovable-uploads/fd76049e-a2ee-424f-bfea-78d94c1a6eb9.png"
  }
];

export function FlashNewsCarousel() {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-cameroon-green" />
            <h2 className="text-2xl md:text-3xl font-bold">Flash Info</h2>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/flash-news")}
            className="hover:bg-cameroon-green hover:text-white transition-colors"
          >
            View all
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {flashNewsData.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(item.date), "dd MMMM yyyy")}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}