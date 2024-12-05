import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const menuItems = [
    {
      trigger: t("nav.government"),
      items: [
        { href: "/government/mayors-office", label: t("nav.mayorsOffice") },
        { href: "/government/meet-mayor", label: t("nav.meetMayor") },
        { href: "/government/cabinet", label: t("nav.cabinet") },
        { href: "/government/partner", label: t("nav.partner") },
      ],
    },
    {
      trigger: t("nav.residents"),
      items: [
        { href: "/residents/arts-culture", label: t("nav.artsCulture") },
        { href: "/residents/education", label: t("nav.education") },
        { href: "/residents/directions", label: t("nav.directions") },
        { href: "/residents/safety", label: t("nav.safety") },
        { href: "/residents/parks", label: t("nav.parks") },
      ],
    },
    {
      trigger: t("nav.visitors"),
      items: [
        { href: "/visitors/education", label: t("nav.education") },
        { href: "/visitors/getting-around", label: t("nav.gettingAround") },
        { href: "/visitors/history", label: t("nav.history") },
        { href: "/visitors/movements", label: t("nav.movements") },
        { href: "/visitors/parks", label: t("nav.parks") },
        { href: "/visitors/things-to-do", label: t("nav.thingsToDo") },
      ],
    },
    {
      trigger: t("nav.business"),
      items: [
        { href: "/business/licenses", label: t("nav.licenses") },
        { href: "/business/suppliers", label: t("nav.suppliers") },
        { href: "/business/grants", label: t("nav.grants") },
        { href: "/business/zoning", label: t("nav.zoning") },
        { href: "/business/bids", label: t("nav.bids") },
        { href: "/business/permits", label: t("nav.onlinePermits") },
        { href: "/business/start", label: t("nav.startBusiness") },
      ],
    },
    {
      trigger: t("nav.iwantto"),
      items: [
        { href: "/i-want-to/ceremonial", label: t("nav.ceremonial") },
        { href: "/i-want-to/find-business", label: t("nav.findBusiness") },
        { href: "/i-want-to/business-license", label: t("nav.businessLicense") },
        { href: "/i-want-to/events-permit", label: t("nav.eventsPermit") },
        { href: "/i-want-to/apply-job", label: t("nav.applyJob") },
        { href: "/i-want-to/forms", label: t("nav.forms") },
        { href: "/i-want-to/faqs", label: t("nav.faqs") },
      ],
    },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <nav 
      className="fixed w-full bg-white/95 backdrop-blur-lg z-50 border-b border-cameroon-green" 
      role="navigation" 
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-2">
            <a 
              href="/" 
              className="flex-shrink-0 flex items-center gap-2" 
              aria-label="Home"
            >
              <img
                src="/lovable-uploads/43369764-2dc3-4409-957a-f7466442ba0b.png"
                alt="Garoua III Logo"
                className="h-10 w-10"
                loading="eager"
              />
              <span className="text-xl font-bold text-gray-900">
                Garoua III
              </span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <DesktopNav menuItems={menuItems} />
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="font-semibold"
              aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              aria-label={showSearch ? "Close search" : "Open search"}
              aria-expanded={showSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              aria-label={showSearch ? "Close search" : "Open search"}
              aria-expanded={showSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {showSearch && (
        <div 
          className="border-t border-gray-200 py-3 px-4 animate-fade-in"
          role="search"
          aria-label="Site search"
        >
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cameroon-green"
              aria-label="Search"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-cameroon-green hover:bg-cameroon-green/90 text-white"
              aria-label="Submit search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <MobileNav isOpen={isOpen} menuItems={menuItems} />
    </nav>
  );
}