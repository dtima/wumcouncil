import { Button } from "../ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="font-semibold"
      aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
    >
      {language.toUpperCase()}
    </Button>
  );
};