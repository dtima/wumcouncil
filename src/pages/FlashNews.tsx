import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";

const flashNewsData = [
  {
    id: 1,
    title: "Mayor Inspects Development Projects",
    description: "Lord Mayor Dighambong Anthony Mvo conducted a comprehensive inspection of ongoing construction projects across Wum municipality, including roads, classrooms, agricultural facilities, and the women's empowerment center.",
    date: "2024-03-20",
    image: "/lovable-uploads/171abf4e-62b4-424a-b987-27e75b3f0d4f.png"
  },
  {
    id: 2,
    title: "Livestock Farmers Receive Awards",
    description: "The Wum Council, in collaboration with the Ministry of Livestock, awarded prizes to outstanding livestock farmers. Winners in cattle rearing and poultry farming categories received equipment to support their operations.",
    date: "2024-03-15",
    image: "/lovable-uploads/2404a4e3-32f8-4642-b2f7-a8a9ebc8f526.png"
  },
  {
    id: 3,
    title: "Clean-up Campaign Launched",
    description: "A major clean-up operation has been initiated to improve sanitation and waste management in the municipality, focusing on market areas and major junctions to enhance public health and commerce.",
    date: "2024-03-10",
    image: "/lovable-uploads/51042e71-dcba-478b-9fbf-2d916289a959.png"
  }
];

export default function FlashNews() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto py-8 px-4">
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
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
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