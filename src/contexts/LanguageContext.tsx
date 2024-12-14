import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "events.title": "Events",
    "events.viewAll": "View All Events",
    "mayor.sectionTitle": "Serving the Wum Council",
    "mayor.title": "Meet Lord Mayor Dighambong Anthony Mvo",
    "mayor.message": "As the Mayor of Wum Council, I am committed to fostering sustainable development and improving the lives of our residents. Our vision encompasses infrastructure development, youth empowerment, and environmental conservation. Together, we are building a more prosperous and inclusive community.",
    "mayor.learnMore": "Read Full Biography",
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
    "events.title": "Événements",
    "events.viewAll": "Voir Tous les Événements",
    "mayor.sectionTitle": "Au Service du Conseil de Wum",
    "mayor.title": "Rencontrez le Maire Dighambong Anthony Mvo",
    "mayor.message": "En tant que Maire du Conseil de Wum, je m'engage à favoriser le développement durable et à améliorer la vie de nos résidents. Notre vision englobe le développement des infrastructures, l'autonomisation des jeunes et la conservation de l'environnement. Ensemble, nous construisons une communauté plus prospère et inclusive.",
    "mayor.learnMore": "Lire la Biographie Complète",
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
