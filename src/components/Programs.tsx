import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      title: "Infrastructure Development",
      description: "Investing in modern roads, bridges, and facilities to connect our communities and foster economic growth. Our commitment to infrastructure development includes the construction of essential public facilities and maintenance of existing structures.",
      image: "/lovable-uploads/b140cc2e-6a87-4ba4-b664-fe2a4c4f4737.png"
    },
    {
      title: "Education Excellence",
      description: "Supporting schools with modern facilities and resources, including the provision of quality furniture and infrastructure. We're committed to creating an environment where every student can thrive and succeed.",
      image: "/lovable-uploads/c96f705c-365b-45bb-b8ef-54d5daec361d.png"
    },
    {
      title: "Agricultural Development",
      description: "Modernizing our agricultural sector through improved facilities and support systems. The newly designed cattle market and agricultural initiatives demonstrate our commitment to sustainable farming practices.",
      image: "/lovable-uploads/b4c4e954-c8d3-4d5e-ac30-1f674a29e782.png"
    },
    {
      title: "Community Development",
      description: "Building sustainable community spaces and facilities that serve our residents' needs. From market improvements to public amenities, we're creating a more livable environment for all.",
      image: "/lovable-uploads/74343f98-350a-4de5-a22b-a6f96babe8db.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Programs & Priorities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wum Council is committed to fostering sustainable development through strategic programs that enhance our community's quality of life and create opportunities for all residents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-cameroon-green">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 mb-4">
                  {program.description}
                </CardDescription>
                <Button variant="link" className="text-cameroon-green hover:text-cameroon-green/90 p-0 h-auto font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}