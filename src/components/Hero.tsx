import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/cc71449f-908f-4f00-a2c5-0401461e5801.png"
          alt="Garoua City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 px-4">
          {t("hero.subtitle")}
        </p>
        
        {/* Search Bar */}
        <div className="max-w-sm mx-auto sm:max-w-md md:max-w-lg relative" role="search">
          <input
            type="text"
            placeholder={t("hero.searchPlaceholder")}
            className="w-full px-4 py-3 md:px-6 md:py-4 rounded-full text-base md:text-lg bg-white/95 shadow-lg focus:outline-none focus:ring-2 focus:ring-cameroon-green"
          />
          <Button
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-cameroon-green hover:bg-cameroon-green/90"
          >
            <Search className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}