import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "hero.searchPlaceholder": "What can we help you find?",
    "nav.government": "Government",
    "nav.residents": "Residents",
    "nav.visitors": "Visitors",
    "nav.business": "Business",
    "nav.mayorsOffice": "Mayor's Office",
    "nav.meetMayor": "Meet the Mayor",
    "nav.cabinet": "The Mayor's Cabinet",
    "nav.partner": "Partners",
    "nav.education": "Education",
    "nav.health": "Health Services",
    "nav.socialAffairs": "Social Affairs",
    "nav.culture": "Culture & Arts",
    "nav.sports": "Sports & Recreation",
    "nav.markets": "Markets",
    "nav.tourism": "Tourism",
    "nav.hotels": "Hotels & Accommodation",
    "nav.restaurants": "Restaurants",
    "nav.attractions": "Tourist Attractions",
    "nav.events": "Events",
    "nav.investment": "Investment Opportunities",
    "nav.tenders": "Tenders & Procurement",
    "nav.licenses": "Licenses & Permits",
    "nav.taxes": "Municipal Taxes",
    "nav.projects": "Development Projects"
  },
  fr: {
    "hero.searchPlaceholder": "Que pouvons-nous vous aider à trouver ?",
    "nav.government": "Gouvernement",
    "nav.residents": "Résidents",
    "nav.visitors": "Visiteurs",
    "nav.business": "Entreprises",
    "nav.mayorsOffice": "Bureau du Maire",
    "nav.meetMayor": "Rencontrer le Maire",
    "nav.cabinet": "Le Cabinet du Maire",
    "nav.partner": "Partenaires",
    "nav.education": "Éducation",
    "nav.health": "Services de Santé",
    "nav.socialAffairs": "Affaires Sociales",
    "nav.culture": "Culture et Arts",
    "nav.sports": "Sports et Loisirs",
    "nav.markets": "Marchés",
    "nav.tourism": "Tourisme",
    "nav.hotels": "Hôtels et Hébergement",
    "nav.restaurants": "Restaurants",
    "nav.attractions": "Sites Touristiques",
    "nav.events": "Événements",
    "nav.investment": "Opportunités d'Investissement",
    "nav.tenders": "Appels d'Offres",
    "nav.licenses": "Licences et Permis",
    "nav.taxes": "Taxes Municipales",
    "nav.projects": "Projets de Développement"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}