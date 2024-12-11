import { Building2, Wrench, Heart, Building, TreePine, Wheat, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function InvestmentOpportunities() {
  const sectors = [
    {
      icon: <Building2 className="h-8 w-8 text-cameroon-green" />,
      title: "Infrastructure",
      description: "Investissez dans le développement des routes, logements et entrepôts modernes.",
    },
    {
      icon: <Wheat className="h-8 w-8 text-cameroon-yellow" />,
      title: "Agriculture",
      description: "Opportunités dans la transformation des produits agricoles et l'agro-industrie.",
    },
    {
      icon: <TreePine className="h-8 w-8 text-cameroon-green" />,
      title: "Tourisme",
      description: "Développez l'écotourisme autour des Monts Mandara et du patrimoine culturel.",
    },
    {
      icon: <Building className="h-8 w-8 text-cameroon-red" />,
      title: "Commerce",
      description: "Participez à l'expansion du commerce local et de l'artisanat traditionnel.",
    },
    {
      icon: <Sun className="h-8 w-8 text-cameroon-yellow" />,
      title: "Énergies Renouvelables",
      description: "Investissez dans le solaire et l'électrification rurale.",
    },
    {
      icon: <Heart className="h-8 w-8 text-cameroon-red" />,
      title: "Santé",
      description: "Développez des infrastructures de santé modernes pour la communauté.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Opportunités d'Investissement</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les secteurs porteurs de Mokolo et participez à son développement économique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full inline-block">
                  {sector.icon}
                </div>
                <CardTitle className="text-xl mb-2">{sector.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {sector.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <Button
                  variant="outline"
                  className="group-hover:bg-cameroon-green group-hover:text-white transition-colors duration-300"
                  asChild
                >
                  <a href="/investir">En savoir plus</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}