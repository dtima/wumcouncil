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
          src="/lovable-uploads/b1923bd5-b7dc-4aa5-a49a-bc6cf6440eda.png"
          alt="Mokolo City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Bienvenue à la Commune de Mokolo
        </h1>
        
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