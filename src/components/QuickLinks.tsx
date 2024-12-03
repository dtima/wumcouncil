import { useLanguage } from "@/contexts/LanguageContext";
import { Trash2, DollarSign, FileText, TreePine, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

export function QuickLinks() {
  const { t } = useLanguage();

  const quickLinks = [
    { icon: <Trash2 className="h-8 w-8" />, label: t("quickLinks.trash"), href: "/services/trash" },
    { icon: <DollarSign className="h-8 w-8" />, label: t("quickLinks.bills"), href: "/services/bills" },
    { icon: <FileText className="h-8 w-8" />, label: t("quickLinks.permits"), href: "/services/permits" },
    { icon: <TreePine className="h-8 w-8" />, label: t("quickLinks.parks"), href: "/services/parks" },
    { icon: <Briefcase className="h-8 w-8" />, label: t("quickLinks.jobs"), href: "/services/jobs" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="h-auto flex-col gap-4 p-6 hover:bg-cameroon-green/5"
            >
              <a href={link.href}>
                {link.icon}
                <span className="text-sm font-medium text-center">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}