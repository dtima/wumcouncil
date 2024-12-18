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
      { href: "/points-of-interest", label: "Points of Interest" },
    ],
  },
  {
    trigger: t("nav.visitors"),
    items: [
      { href: "/practical-guide", label: "Practical Guide" },
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