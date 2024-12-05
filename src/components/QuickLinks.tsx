import { useLanguage } from "@/contexts/LanguageContext";
import { Trash2, DollarSign, FileText, TreePine, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

export function QuickLinks() {
  const { t } = useLanguage();

  const quickLinks = [
    { icon: <Trash2 className="h-6 w-6 md:h-8 md:w-8" />, label: t("quickLinks.trash"), href: "/services/trash" },
    { icon: <DollarSign className="h-6 w-6 md:h-8 md:w-8" />, label: t("quickLinks.bills"), href: "/services/bills" },
    { icon: <FileText className="h-6 w-6 md:h-8 md:w-8" />, label: t("quickLinks.permits"), href: "/services/permits" },
    { icon: <TreePine className="h-6 w-6 md:h-8 md:w-8" />, label: t("quickLinks.parks"), href: "/services/parks" },
    { icon: <Briefcase className="h-6 w-6 md:h-8 md:w-8" />, label: t("quickLinks.jobs"), href: "/services/jobs" },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">{t("quickLinks.title")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="h-auto flex-col gap-2 md:gap-4 p-3 md:p-6 hover:bg-cameroon-green/5"
            >
              <a href={link.href}>
                {link.icon}
                <span className="text-xs md:text-sm font-medium text-center">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}