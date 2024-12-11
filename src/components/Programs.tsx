import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      title: "Development Agenda",
      description: "Our mayor is moving Wum forward through a progressive agenda focused on opportunity, public safety, and investment in our future.",
      image: "/lovable-uploads/f3f24954-183c-4d8d-90d5-b7e368248769.png"
    },
    {
      title: "Quality Housing",
      description: "The city's housing plan is anchored in the belief that all residents should have access to safe, quality, and affordable housing.",
      image: "/lovable-uploads/2a4074c1-3d83-45a7-984e-4924b250dc6b.png"
    },
    {
      title: "Year of Youth",
      description: "2024 is the year of youth in Wum. Our initiative aims to equip all young people with the tools and resources needed to succeed.",
      image: "/lovable-uploads/86b57e71-80d4-434c-8465-302772034e7d.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Programs & Priorities</h2>
        
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