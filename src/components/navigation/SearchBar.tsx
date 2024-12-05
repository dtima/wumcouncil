import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchBarProps {
  showSearch: boolean;
}

export const SearchBar = ({ showSearch }: SearchBarProps) => {
  const { t } = useLanguage();

  if (!showSearch) return null;

  return (
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
  );
};