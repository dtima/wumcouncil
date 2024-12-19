import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";

const flashNewsData = [
  {
    id: 1,
    title: "Mayor Represents Wum at European Parliament",
    description: "Lord Mayor Dighambong Anthony Mvo attended a crucial session at the European Parliament, strengthening international partnerships and discussing development opportunities for Wum municipality.",
    date: "2024-03-20",
    image: "/lovable-uploads/7e67adfb-95f6-4e9f-9e42-75ba332bcd80.png"
  },
  {
    id: 2,
    title: "Council Executive Session Advances Development Plans",
    description: "The Wum Council held a productive working session to discuss and approve key development initiatives for the municipality, focusing on infrastructure and community services.",
    date: "2024-03-18",
    image: "/lovable-uploads/fc9b420c-cd58-49ee-88cf-5ea693f50db5.png"
  },
  {
    id: 3,
    title: "Lions of Salam FC Wins Peace Tournament",
    description: "Lions of Salam FC emerged victorious in the 6th edition of the Wum Council Peace and Unity Tournament, defeating St Martin's FC 3-2 in an exciting final at the Wum Municipal Stadium.",
    date: "2024-03-15",
    image: "/lovable-uploads/2c4c6492-71b4-4f82-be64-0ba827581423.png"
  },
  {
    id: 4,
    title: "PWD Group Leads Community Cleanup",
    description: "Persons with Disabilities in Wum demonstrated remarkable community spirit by organizing and conducting a cleanup campaign around the Divisional Delegation of Social Affairs, inspiring local residents.",
    date: "2024-03-12",
    image: "/lovable-uploads/b4ab82ac-687d-4d0b-a4a8-2912db097da3.png"
  },
  {
    id: 5,
    title: "New Municipal Center Development",
    description: "The Wum Council unveils plans for a modern three-story municipal center designed by POLARIS DESIGN. The facility will serve as a 'Gateway' to Wum, featuring council chambers, meeting halls, and public service areas.",
    date: "2024-03-10",
    image: "/lovable-uploads/67fcc573-766a-4768-b8bf-29fa58ff7cb4.png"
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