import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function MayorNote() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">{t("mayor.sectionTitle")}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="/lovable-uploads/3ac64ce7-499a-485f-a3bb-afcf1375acef.png"
              alt={t("mayor.imageAlt")}
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{t("mayor.title")}</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t("mayor.message")}
            </p>
            <Link to="/government/mayor-biography">
              <Button className="mt-4 md:mt-6 bg-cameroon-green hover:bg-cameroon-green/90 text-sm md:text-base">
                {t("mayor.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}