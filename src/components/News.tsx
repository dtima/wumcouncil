import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function News() {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: "Cultural Festival Success",
      description: "Annual cultural festival brings together diverse communities",
      date: "2024-02-15",
      image: "/lovable-uploads/cabc010a-8d06-44b3-81fe-d65c1ec580e9.png"
    },
    {
      id: 2,
      title: "New Community Center",
      description: "Mayor inaugurates state-of-the-art community center",
      date: "2024-02-14",
      image: "/lovable-uploads/cc71449f-908f-4f00-a2c5-0401461e5801.png"
    },
    {
      id: 3,
      title: "Green Initiative Launch",
      description: "City launches ambitious green space development project",
      date: "2024-02-13",
      image: "/lovable-uploads/cabc010a-8d06-44b3-81fe-d65c1ec580e9.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{t("news.title")}</h2>
          <Button variant="outline" className="gap-2">
            {t("news.viewAll")} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <p className="text-sm text-gray-500 mt-4">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}