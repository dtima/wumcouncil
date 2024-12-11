import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin } from "lucide-react";

interface PointOfInterest {
  name: string;
  slogan: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  image: string;
}

const pointsOfInterest: Record<string, PointOfInterest[]> = {
  hotels: [
    {
      name: "Hôtel Mont Mokolo",
      slogan: "Votre oasis de confort au cœur de Mokolo",
      description: "Un établissement de luxe offrant une vue imprenable sur la ville et des services haut de gamme.",
      phone: "+237 123 456 789",
      email: "contact@montmokolo.cm",
      address: "123 Avenue Principale, Mokolo",
      image: "/lovable-uploads/photo-1649972904349-6e44c42644a7.jpg"
    },
    // Add more hotels as needed
  ],
  ngos: [
    {
      name: "Association pour le Développement",
      slogan: "Ensemble pour un meilleur avenir",
      description: "ONG locale œuvrant pour le développement communautaire et l'éducation.",
      phone: "+237 234 567 890",
      email: "info@devmokolo.org",
      address: "45 Rue de la Solidarité, Mokolo",
      image: "/lovable-uploads/photo-1605810230434-7631ac76ec81.jpg"
    },
    // Add more NGOs as needed
  ],
  travelAgencies: [
    {
      name: "Mokolo Voyages",
      slogan: "Explorez le monde depuis Mokolo",
      description: "Agence de voyage proposant des services complets pour vos déplacements nationaux et internationaux.",
      phone: "+237 345 678 901",
      email: "reservations@mokolovoyages.cm",
      address: "78 Boulevard du Commerce, Mokolo",
      image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg"
    },
    // Add more travel agencies as needed
  ],
  restaurants: [
    {
      name: "Le Terroir",
      slogan: "La saveur authentique de Mokolo",
      description: "Restaurant traditionnel offrant une cuisine locale raffinée dans un cadre chaleureux.",
      phone: "+237 456 789 012",
      email: "contact@leterroir.cm",
      address: "156 Rue des Saveurs, Mokolo",
      image: "/lovable-uploads/photo-1581090464777-f3220bbe1b8b.jpg"
    },
    // Add more restaurants as needed
  ],
  markets: [
    {
      name: "Marché Central de Mokolo",
      slogan: "Le cœur commercial de la ville",
      description: "Le plus grand marché de la région, offrant une variété de produits locaux et importés.",
      phone: "+237 567 890 123",
      email: "info@marchemokolo.cm",
      address: "Place du Marché, Centre-ville, Mokolo",
      image: "/lovable-uploads/photo-1504893524553-b855bce32c67.jpg"
    },
    // Add more markets as needed
  ],
};

const PointsOfInterest = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-8">{t("nav.pointsOfInterest")}</h1>
      
      <Tabs defaultValue="hotels" className="w-full">
        <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8">
          <TabsTrigger value="hotels">{t("poi.hotels")}</TabsTrigger>
          <TabsTrigger value="ngos">{t("poi.ngos")}</TabsTrigger>
          <TabsTrigger value="travelAgencies">{t("poi.travelAgencies")}</TabsTrigger>
          <TabsTrigger value="restaurants">{t("poi.restaurants")}</TabsTrigger>
          <TabsTrigger value="markets">{t("poi.markets")}</TabsTrigger>
        </TabsList>

        {Object.entries(pointsOfInterest).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription className="italic">{item.slogan}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">{item.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{item.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{item.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.address}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PointsOfInterest;