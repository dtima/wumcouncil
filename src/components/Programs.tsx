import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      title: "Agenda de développement",
      description: "Notre maire fait avancer Mokolo à travers un agenda progressif axé sur l'opportunité, la sécurité publique et l'investissement pour l'avenir.",
      image: "/lovable-uploads/a01031b6-450d-41a8-9a7d-c5e00d86203c.png"
    },
    {
      title: "Logements de qualité",
      description: "Le plan de logement de la ville est ancré dans la conviction que tous les habitants devraient avoir accès à un logement sûr, de qualité et abordable.",
      image: "/lovable-uploads/cabc010a-8d06-44b3-81fe-d65c1ec580e9.png"
    },
    {
      title: "Année de la Jeunesse",
      description: "2024 est l'année de la jeunesse à Mokolo. Notre initiative vise à équiper tous les jeunes avec les outils et ressources nécessaires pour réussir.",
      image: "/lovable-uploads/cc71449f-908f-4f00-a2c5-0401461e5801.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Programmes et priorités</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader className="p-0">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </CardHeader>
              <CardContent className="px-0">
                <CardTitle className="text-xl mb-3 text-cameroon-green">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}