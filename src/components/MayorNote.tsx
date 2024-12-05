import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export function MayorNote() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">{t("mayor.sectionTitle")}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/lovable-uploads/7c65c822-eb17-4dbc-b1eb-a2eb38cdb851.png"
              alt={t("mayor.imageAlt")}
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">{t("mayor.title")}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("mayor.message")}
            </p>
            <Button className="mt-6 bg-cameroon-green hover:bg-cameroon-green/90">
              {t("mayor.learnMore")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}