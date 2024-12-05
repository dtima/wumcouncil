import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";
import { SearchBar } from "./navigation/SearchBar";
import { Logo } from "./navigation/Logo";
import { LanguageToggle } from "./navigation/LanguageToggle";
import { getNavigationItems } from "./navigation/NavigationData";

export function Navigation() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const menuItems = getNavigationItems(t);

  return (
    <nav 
      className="fixed w-full bg-white/95 backdrop-blur-lg z-50 border-b border-cameroon-green" 
      role="navigation" 
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <DesktopNav menuItems={menuItems} />
            <LanguageToggle />
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

      <SearchBar showSearch={showSearch} />
      <MobileNav isOpen={isOpen} menuItems={menuItems} />
    </nav>
  );
}