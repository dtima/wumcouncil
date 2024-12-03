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
    "nav.gettingAround": "Getting Around – Visitors",
    "nav.history": "History",
    "nav.movements": "Garoua III Movements",
    "nav.thingsToDo": "Things To Do",
    "nav.licenses": "Licenses & Permits",
    "nav.suppliers": "Suppliers",
    "nav.grants": "Grants, Loans & Incentives",
    "nav.zoning": "Buildings & Zoning",
    "nav.bids": "Bids",
    "nav.onlinePermits": "Get Online Permits",
    "nav.startBusiness": "How to Start Your Business",
    "nav.ceremonial": "Obtain Ceremonial Documents",
    "nav.findBusiness": "Find Registered Business",
    "nav.businessLicense": "Apply for a Business License",
    "nav.eventsPermit": "Apply for a Special Events Permit",
    "nav.applyJob": "Apply for a Job",
    "nav.forms": "Download Forms",
    "nav.faqs": "See FAQs",
    "footer.contact": "Contact Information",
    "footer.hours": "Mon-Fri: 8:15 am to 5:00 pm",
    "footer.quickLinks": "Quick Links",
    "footer.cityDetails": "City Details",
    "footer.incorporated": "Incorporated: 1947",
    "footer.population": "Population: 250,000 (2023 est.)",
    "footer.area": "Area: 180 km²",
    "footer.followUs": "Follow Us",
    "footer.taskForce": "Task Force",
    "footer.fraudReport": "Report Fraud: If you suspect fraud, waste, or abuse, please report it.",
    "footer.credits": "Website Designed by DTIMA – Connecting People & Government"
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
    "nav.gettingAround": "Se Déplacer – Visiteurs",
    "nav.history": "Histoire",
    "nav.movements": "Mouvements de Garoua III",
    "nav.thingsToDo": "Activités à Faire",
    "nav.licenses": "Licences et Permis",
    "nav.suppliers": "Fournisseurs",
    "nav.grants": "Subventions, Prêts et Incitatifs",
    "nav.zoning": "Bâtiments et Zonage",
    "nav.bids": "Appels d'Offres",
    "nav.onlinePermits": "Obtenir des Permis en Ligne",
    "nav.startBusiness": "Comment Démarrer Votre Entreprise",
    "nav.ceremonial": "Obtenir des Documents Officiels",
    "nav.findBusiness": "Trouver une Entreprise Enregistrée",
    "nav.businessLicense": "Demander une Licence Commerciale",
    "nav.eventsPermit": "Demander un Permis d'Événement Spécial",
    "nav.applyJob": "Postuler à un Emploi",
    "nav.forms": "Télécharger des Formulaires",
    "nav.faqs": "Voir la FAQ",
    "footer.contact": "Coordonnées",
    "footer.hours": "Lun-Ven: 8h15 à 17h00",
    "footer.quickLinks": "Liens Rapides",
    "footer.cityDetails": "Détails de la Ville",
    "footer.incorporated": "Fondée en 1947",
    "footer.population": "Population: 250 000 (est. 2023)",
    "footer.area": "Superficie: 180 km²",
    "footer.followUs": "Suivez-nous",
    "footer.taskForce": "Groupe de Travail",
    "footer.fraudReport": "Signaler une fraude: Si vous suspectez une fraude, un gaspillage ou un abus, veuillez le signaler.",
    "footer.credits": "Site Web Conçu par DTIMA – Connecter les Citoyens et le Gouvernement"
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
