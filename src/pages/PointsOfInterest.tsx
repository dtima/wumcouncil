import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";

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
  ],
};

const PointsOfInterest = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("hotels");

  const categories = {
    hotels: t("poi.hotels"),
    ngos: t("poi.ngos"),
    travelAgencies: t("poi.travelAgencies"),
    restaurants: t("poi.restaurants"),
    markets: t("poi.markets"),
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold text-center mb-8">{t("nav.pointsOfInterest")}</h1>
        
        <div className="w-full max-w-xs mx-auto mb-8">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(categories).map(([key, label]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pointsOfInterest[selectedCategory].map((item, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 sm:h-56">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader className="flex-none">
                <CardTitle className="text-xl sm:text-2xl">{item.name}</CardTitle>
                <CardDescription className="italic text-sm sm:text-base">{item.slogan}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between gap-4">
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                <div className="space-y-2 text-sm sm:text-base">
                  <a 
                    href={`tel:${item.phone}`} 
                    className="flex items-center gap-2 hover:text-cameroon-green transition-colors"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{item.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${item.email}`}
                    className="flex items-center gap-2 hover:text-cameroon-green transition-colors"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="break-all">{item.email}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{item.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PointsOfInterest;