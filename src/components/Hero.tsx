import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/cc71449f-908f-4f00-a2c5-0401461e5801.png"
          alt="Garoua City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in max-w-4xl mx-auto">
        <img
          src="/lovable-uploads/43369764-2dc3-4409-957a-f7466442ba0b.png"
          alt="Garoua III Logo"
          className="w-32 h-32 mx-auto mb-8"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8">
          {t("hero.subtitle")}
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder={t("hero.searchPlaceholder")}
            className="w-full px-6 py-4 rounded-full text-lg bg-white/95 shadow-lg focus:outline-none focus:ring-2 focus:ring-cameroon-green"
          />
          <Button
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-cameroon-green hover:bg-cameroon-green/90"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}