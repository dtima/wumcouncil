import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Flag } from "lucide-react";

export function Events() {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: "Cameroon Youth Day Celebration",
      date: "2025-02-11",
      time: "08:00 AM - 06:00 PM",
      month: "FEB",
      day: "11",
      description: "Join us in celebrating Cameroon's Youth Day with cultural performances, sports competitions, and youth empowerment activities across Wum municipality."
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-2">
          <Calendar className="h-6 w-6 text-cameroon-green" />
          {t("events.title")}
        </h2>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow p-3 md:p-4 flex items-start gap-4 md:gap-6">
              <div className="bg-cameroon-green text-white p-2 md:p-4 rounded text-center min-w-[70px] md:min-w-[90px] flex flex-col items-center">
                <Flag className="h-5 w-5 mb-1" />
                <div className="text-base md:text-lg font-semibold">{event.month}</div>
                <div className="text-2xl md:text-4xl font-bold">{event.day}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{event.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-2">{event.time}</p>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-end">
          <Button 
            variant="default" 
            className="bg-cameroon-green hover:bg-cameroon-green/90 text-white px-6 md:px-8 text-sm md:text-base"
          >
            {t("events.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}