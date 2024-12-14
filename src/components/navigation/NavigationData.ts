export const getNavigationItems = (t: (key: string) => string) => [
  {
    trigger: t("nav.government"),
    items: [
      { href: "/government/meet-mayor", label: t("nav.meetMayor") },
      { href: "/government/executive-offices", label: t("nav.executiveOffices") },
      { href: "/government/partner", label: t("nav.partner") },
    ],
  },
  {
    trigger: t("nav.residents"),
    items: [
      { href: "/practical-guide", label: "Points of Interest" },
      { href: "/residents/education", label: "Education" },
      { href: "/residents/health", label: "Health Services" },
      { href: "/residents/social", label: "Social Services" },
      { href: "/residents/security", label: "Security" },
      { href: "/residents/culture", label: "Culture & Arts" },
      { href: "/residents/sports", label: "Sports & Leisure" },
      { href: "/residents/markets", label: "Markets" },
    ],
  },
  {
    trigger: t("nav.visitors"),
    items: [
      { href: "/practical-guide", label: "Practical Guide" },
      { href: "/visitors/tourism", label: t("nav.tourism") },
      { href: "/visitors/hotels", label: t("nav.hotels") },
      { href: "/visitors/restaurants", label: t("nav.restaurants") },
      { href: "/visitors/events", label: t("nav.events") },
    ],
  },
  {
    trigger: t("nav.business"),
    items: [
      { href: "/business/investment", label: t("nav.investment") },
      { href: "/business/tenders", label: t("nav.tenders") },
      { href: "/business/licenses", label: t("nav.licenses") },
      { href: "/business/taxes", label: t("nav.taxes") },
      { href: "/business/projects", label: t("nav.projects") },
    ],
  },
];