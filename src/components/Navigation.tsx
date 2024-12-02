import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-cameroon-green via-cameroon-red to-cameroon-yellow bg-clip-text text-transparent">
                Garoua III
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-700 hover:text-cameroon-green transition-colors">
              {t("nav.home")}
            </a>
            <a href="#about" className="text-gray-700 hover:text-cameroon-green transition-colors">
              {t("nav.about")}
            </a>
            <a href="#invest" className="text-gray-700 hover:text-cameroon-green transition-colors">
              {t("nav.invest")}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-cameroon-green transition-colors">
              {t("nav.contact")}
            </a>
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="font-semibold"
            >
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cameroon-green"
          >
            {t("nav.home")}
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cameroon-green"
          >
            {t("nav.about")}
          </a>
          <a
            href="#invest"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cameroon-green"
          >
            {t("nav.invest")}
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cameroon-green"
          >
            {t("nav.contact")}
          </a>
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="w-full justify-start font-semibold"
          >
            {language.toUpperCase()}
          </Button>
        </div>
      </div>
    </nav>
  );
}