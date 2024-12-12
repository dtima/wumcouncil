import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Tourism = () => {
  const { t } = useLanguage();

  const attractions = [
    {
      title: "Menchum Falls",
      description: "A majestic waterfall with a height of about 80 meters, Menchum Falls is one of the largest waterfalls in West Africa. The falls create a spectacular view with tremendous cascading water, especially during the rainy season. The sheer walls are lined with greenery due to constant mist, offering breathtaking photo opportunities.",
      image: "/lovable-uploads/3d519c3b-80df-4ca8-9226-933f770ae98f.png",
      location: "Bangwe, Wum Municipality",
    },
    {
      title: "The Four Lakes of Wum",
      description: "Wum is known as the 'Land of Four Lakes', featuring Lake Wum, Lake Atue, Lake Oshien, and Lake Illum. Each lake has its unique characteristics and mystical stories. Lake Atue is the largest and most ecologically diverse, while Lake Oshien is known for its changing water colors.",
      image: "/lovable-uploads/6d27ebcf-dc39-435f-bf9e-493cb0347b84.png",
      location: "Various locations in Wum Municipality",
    },
    {
      title: "Hot Springs of Itiaku",
      description: "The natural hot springs of Itiaku offer a unique therapeutic experience. These mineral-rich waters are believed to have healing properties, making them a perfect destination for relaxation and natural wellness.",
      image: "/placeholder.svg",
      location: "Itiaku, Wum Municipality",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8">Discover Wum's Natural Wonders</h1>
        
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Welcome to Wum, where nature's most spectacular wonders await. From thundering waterfalls to serene lakes and healing hot springs, our municipality offers unforgettable experiences for every visitor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{attraction.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{attraction.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{attraction.description}</p>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Plan Your Visit</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to experience the natural wonders of Wum? Contact our tourism office for guided tours, accommodation recommendations, and travel tips.
          </p>
          <Button size="lg" className="mx-auto">
            Contact Tourism Office
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Tourism;