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
    title: "Solar Street Lights Installation Complete",
    description: "A major solar street lighting project has been successfully completed in Wum municipality, enhancing safety and accessibility while promoting sustainable energy solutions. The project was officially inaugurated by the SDO of Menchum Division.",
    date: "2024-03-18",
    image: "/lovable-uploads/a4aee135-5b38-499d-b020-6eaf4364e1c5.png"
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