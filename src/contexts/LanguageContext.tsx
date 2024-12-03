import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.government": "Government",
    "nav.residents": "Residents",
    "nav.visitors": "Visitors",
    "nav.business": "Business",
    "nav.iwantto": "I Want To...",
    "nav.mayorsOffice": "Mayor's Office",
    "nav.meetMayor": "Meet the Mayor",
    "nav.cabinet": "The Mayor's Cabinet",
    "nav.partner": "Partner with Garoua III",
    "nav.artsCulture": "Arts & Culture",
    "nav.education": "Education",
    "nav.directions": "Directions to City Hall",
    "nav.safety": "Public Safety",
    "nav.parks": "Parks & Recreation",
    "hero.title": "Welcome to Garoua III",
    "hero.subtitle": "A Haven of Cultural Diversity and Untapped Potential",
    "hero.searchPlaceholder": "Search the City of Garoua III...",
    "quickLinks.trash": "Trash & Recycling",
    "quickLinks.bills": "Pay Bills",
    "quickLinks.permits": "Licenses & Permits",
    "quickLinks.parks": "Parks & Recreation",
    "quickLinks.jobs": "Jobs",
    "programs.title": "Programs & Priorities",
    "programs.agenda": "Moving Garoua III Forward Agenda",
    "programs.projects": "Ongoing Projects",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.government": "Gouvernement",
    "nav.residents": "Résidents",
    "nav.visitors": "Visiteurs",
    "nav.business": "Entreprises",
    "nav.iwantto": "Je Veux...",
    "nav.mayorsOffice": "Bureau du Maire",
    "nav.meetMayor": "Rencontrer le Maire",
    "nav.cabinet": "Le Cabinet du Maire",
    "nav.partner": "Partenariat avec Garoua III",
    "nav.artsCulture": "Arts et Culture",
    "nav.education": "Éducation",
    "nav.directions": "Direction de la Mairie",
    "nav.safety": "Sécurité Publique",
    "nav.parks": "Parcs et Loisirs",
    "hero.title": "Bienvenue à Garoua III",
    "hero.subtitle": "Un havre de diversité culturelle et de potentiel inexploité",
    "hero.searchPlaceholder": "Rechercher dans la ville de Garoua III...",
    "quickLinks.trash": "Recyclage",
    "quickLinks.bills": "Payer les factures",
    "quickLinks.permits": "Licences et permis",
    "quickLinks.parks": "Parcs et loisirs",
    "quickLinks.jobs": "Emplois",
    "programs.title": "Programmes et priorités",
    "programs.agenda": "Programme d'action de Garoua III",
    "programs.projects": "Projets en cours",
  },
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
