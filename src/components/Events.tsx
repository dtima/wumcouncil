import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Events() {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: "L5P Holidaze",
      date: "2024-10-04",
      time: "12:00 PM - Dec, 22 10:00 PM"
    },
    {
      id: 2,
      title: "Events on Broad Street",
      date: "2024-11-12",
      time: "06:00 AM - Jan, 31 06:00 PM"
    },
    {
      id: 3,
      title: "Holiday Vendors Market",
      date: "2024-12-06",
      time: "01:00 PM - Dec, 08 11:00 PM"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{t("events.title")}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Calendar className="rounded-md" />
          </div>
          
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-cameroon-green text-white p-4 rounded-lg text-center min-w-[80px]">
                    <div className="text-sm font-semibold">
                      {new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                    </div>
                    <div className="text-2xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardContent className="p-0 text-sm text-gray-500">
                      {event.time}
                    </CardContent>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}