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
      { href: "/residents/education", label: t("nav.education") },
      { href: "/residents/health", label: t("nav.health") },
      { href: "/residents/social-affairs", label: t("nav.socialAffairs") },
      { href: "/residents/culture", label: t("nav.culture") },
      { href: "/residents/sports", label: t("nav.sports") },
      { href: "/residents/markets", label: t("nav.markets") },
    ],
  },
  {
    trigger: t("nav.visitors"),
    items: [
      { href: "/visitors/tourism", label: t("nav.tourism") },
      { href: "/visitors/hotels", label: t("nav.hotels") },
      { href: "/visitors/restaurants", label: t("nav.restaurants") },
      { href: "/visitors/attractions", label: t("nav.attractions") },
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