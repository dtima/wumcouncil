import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const navItems = [
    { key: "government", href: "/government" },
    { key: "residents", href: "/residents" },
    { key: "visitors", href: "/visitors" },
    { key: "business", href: "/business" },
    { key: "iwantto", href: "/i-want-to" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-lg z-50 border-b border-cameroon-green after:content-[''] after:block after:h-1 after:bg-gradient-to-r after:from-cameroon-green after:via-cameroon-red after:to-cameroon-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-2">
            <a href="/" className="flex-shrink-0 flex items-center gap-2">
              <img
                src="/lovable-uploads/43369764-2dc3-4409-957a-f7466442ba0b.png"
                alt="Garoua III Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-gray-900">
                Garoua III
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-cameroon-green transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="font-semibold"
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      {showSearch && (
        <div className="border-t border-gray-200 py-3 px-4 animate-fade-in">
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cameroon-green"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-cameroon-green hover:bg-cameroon-green/90"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block animate-fade-in" : "hidden animate-fade-out"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cameroon-green hover:bg-gray-50"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
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