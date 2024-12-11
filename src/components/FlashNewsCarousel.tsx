import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { newspaper } from "lucide-react";

const flashNewsData = [
  {
    id: 1,
    title: "Inauguration du nouveau marché",
    description: "Le maire inaugure le nouveau marché central de Mokolo",
    date: "2024-03-15",
    image: "/lovable-uploads/cabc010a-8d06-44b3-81fe-d65c1ec580e9.png"
  },
  {
    id: 2,
    title: "Campagne de vaccination",
    description: "Lancement d'une campagne de vaccination gratuite",
    date: "2024-03-14",
    image: "/lovable-uploads/cc71449f-908f-4f00-a2c5-0401461e5801.png"
  },
  // Add more flash news items here
];

export function FlashNewsCarousel() {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <newspaper className="h-6 w-6 text-cameroon-green" />
            <h2 className="text-2xl md:text-3xl font-bold">Flash Info</h2>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/flash-news")}
            className="hover:bg-cameroon-green hover:text-white transition-colors"
          >
            Voir tout
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