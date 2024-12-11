import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building2, Wrench, Heart, Building, TreePine, Wheat, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Investir = () => {
  const sectors = [
    {
      icon: <Building2 className="h-12 w-12 text-cameroon-green" />,
      title: "Infrastructure",
      description: "Le secteur des infrastructures à Mokolo offre de nombreuses opportunités d'investissement. La ville a besoin de routes modernes, de logements et d'entrepôts pour soutenir sa croissance économique.",
      opportunities: [
        "Construction de routes stratégiques",
        "Développement de zones résidentielles",
        "Création d'espaces commerciaux",
      ],
    },
    {
      icon: <Wheat className="h-12 w-12 text-cameroon-yellow" />,
      title: "Agriculture",
      description: "L'agriculture est un pilier de l'économie locale. Les sols fertiles de Mokolo sont parfaits pour diverses cultures comme le maïs, le mil, le sorgho et les arachides.",
      opportunities: [
        "Unités de transformation agroalimentaire",
        "Coopératives agricoles modernes",
        "Production d'huiles végétales",
      ],
    },
    {
      icon: <TreePine className="h-12 w-12 text-cameroon-green" />,
      title: "Tourisme",
      description: "Le potentiel touristique de Mokolo est considérable avec les Monts Mandara et le riche patrimoine culturel des peuples Mafa.",
      opportunities: [
        "Développement d'écolodges",
        "Circuits touristiques organisés",
        "Centres culturels et artisanaux",
      ],
    },
    {
      icon: <Building className="h-12 w-12 text-cameroon-red" />,
      title: "Commerce",
      description: "Participez à l'expansion du commerce local et de l'artisanat traditionnel.",
      opportunities: [
        "Création de marchés modernes",
        "Développement de boutiques artisanales",
        "Promotion des produits locaux",
      ],
    },
    {
      icon: <Sun className="h-12 w-12 text-cameroon-yellow" />,
      title: "Énergies Renouvelables",
      description: "Investissez dans le solaire et l'électrification rurale.",
      opportunities: [
        "Installation de panneaux solaires",
        "Projets d'énergie éolienne",
        "Solutions d'électrification pour les villages",
      ],
    },
    {
      icon: <Heart className="h-12 w-12 text-cameroon-red" />,
      title: "Santé",
      description: "Développez des infrastructures de santé modernes pour la communauté.",
      opportunities: [
        "Construction de cliniques et hôpitaux",
        "Programmes de santé communautaire",
        "Partenariats avec des ONG pour la santé",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-cameroon-green text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Investir à Mokolo</h1>
          <p className="text-xl max-w-2xl">
            Découvrez les opportunités d'investissement dans une ville en pleine croissance
          </p>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {sectors.map((sector, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="p-4 bg-gray-50 rounded-full inline-block mb-4">
                    {sector.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{sector.title}</h2>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <Button className="flex items-center gap-2">
                    Contactez-nous <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Opportunités</h3>
                  <ul className="space-y-4">
                    {sector.opportunities.map((opportunity, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 bg-cameroon-green rounded-full" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investir;
