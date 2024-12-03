import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.trigger}>
                    <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.href}>
                            <NavigationMenuLink
                              href={subItem.href}
                              className="block p-2 hover:bg-accent rounded-md"
                            >
                              {subItem.label}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

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
          {menuItems.map((item) => (
            <div key={item.trigger} className="space-y-2">
              <div className="px-3 py-2 text-base font-medium text-gray-700">
                {item.trigger}
              </div>
              {item.items.map((subItem) => (
                <a
                  key={subItem.href}
                  href={subItem.href}
                  className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-cameroon-green hover:bg-gray-50 pl-6"
                >
                  {subItem.label}
                </a>
              ))}
            </div>
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