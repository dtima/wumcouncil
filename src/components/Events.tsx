import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Events() {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: "L5P Holidaze",
      date: "2024-11-16",
      time: "12:00 PM - Feb, 03 10:00 PM",
      month: "NOV",
      day: "16"
    },
    {
      id: 2,
      title: "Holiday Vendors Market",
      date: "2024-12-06",
      time: "01:00 PM - Dec, 08 11:00 PM",
      month: "DEC",
      day: "06"
    },
    {
      id: 3,
      title: "Winterfest 2024 - Tour of Lights, Jingle Jog & Parade",
      date: "2024-12-06",
      time: "05:30 PM - Dec, 07 05:00 PM",
      month: "DEC",
      day: "06"
    },
    {
      id: 4,
      title: "Frankie Beverly and Mays Birthday Concert Tribute",
      date: "2024-12-06",
      time: "06:00 PM - Dec, 07",
      month: "DEC",
      day: "06"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{t("events.title")}</h2>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow p-3 md:p-4 flex items-start gap-4 md:gap-6">
              <div className="bg-[#0EA5E9] text-white p-2 md:p-4 rounded text-center min-w-[70px] md:min-w-[90px]">
                <div className="text-base md:text-lg font-semibold">{event.month}</div>
                <div className="text-2xl md:text-4xl font-bold">{event.day}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{event.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{event.time}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-end">
          <Button 
            variant="default" 
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-6 md:px-8 text-sm md:text-base"
          >
            {t("events.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}