import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.government": "Government",
    "nav.executiveOffices": "Executive Offices",
    "nav.meetMayor": "Meet the Mayor",
    "nav.partner": "Partners",
    "nav.residents": "Residents",
    "nav.visitors": "Visitors",
    "nav.business": "Business",
    "nav.education": "Education",
    "nav.health": "Health Services",
    "nav.socialAffairs": "Social Services",
    "nav.culture": "Culture & Arts",
    "nav.sports": "Sports & Leisure",
    "nav.markets": "Markets",
    "nav.tourism": "Tourism",
    "nav.hotels": "Hotels & Accommodation",
    "nav.restaurants": "Restaurants",
    "nav.attractions": "Tourist Sites",
    "nav.events": "Events",
    "nav.investment": "Investment Opportunities",
    "nav.tenders": "Tenders",
    "nav.licenses": "Licenses & Permits",
    "nav.taxes": "Municipal Taxes",
    "nav.projects": "Development Projects",
  },
  fr: {
    "nav.government": "Gouvernement",
    "nav.executiveOffices": "Bureaux Exécutifs",
    "nav.meetMayor": "Rencontrer le Maire",
    "nav.partner": "Partenaires",
    "nav.residents": "Résidents",
    "nav.visitors": "Visiteurs",
    "nav.business": "Entreprises",
    "nav.education": "Éducation",
    "nav.health": "Services de Santé",
    "nav.socialAffairs": "Services Sociaux",
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
    "nav.projects": "Projets de Développement",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en"); // Changed default to English

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
