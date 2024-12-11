import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

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

export default function FlashNews() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Flash Info</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {flashNewsData.map((news) => (
          <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{news.title}</CardTitle>
              <p className="text-gray-600 mb-2">{news.description}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(news.date), "dd MMMM yyyy")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}