import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Building2, Wrench, Receipt, FileCheck, Heart, Stamp, Ring } from "lucide-react";
import { Button } from "./ui/button";

export function QuickLinks() {
  const quickLinks = [
    { icon: <Building2 className="h-6 w-6 md:h-8 md:w-8 text-cameroon-green" />, label: "Services administratifs", href: "/services/administrative" },
    { icon: <Wrench className="h-6 w-6 md:h-8 md:w-8 text-cameroon-red" />, label: "Services techniques", href: "/services/technical" },
    { icon: <Receipt className="h-6 w-6 md:h-8 md:w-8 text-cameroon-yellow" />, label: "Impôts et taxes", href: "/services/tax" },
    { icon: <FileText className="h-6 w-6 md:h-8 md:w-8 text-cameroon-green" />, label: "Factures et contraventions", href: "/services/bills" },
    { icon: <FileCheck className="h-6 w-6 md:h-8 md:w-8 text-cameroon-red" />, label: "Licences et permis", href: "/services/licenses" },
    { icon: <Stamp className="h-6 w-6 md:h-8 md:w-8 text-cameroon-yellow" />, label: "Timbre communal", href: "/services/stamp" },
    { icon: <Heart className="h-6 w-6 md:h-8 md:w-8 text-cameroon-green" />, label: "Acte de naissance", href: "/services/birth-certificate" },
    { icon: <Ring className="h-6 w-6 md:h-8 md:w-8 text-cameroon-red" />, label: "Mariage", href: "/services/marriage" },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Nos Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="h-auto flex-col gap-2 md:gap-4 p-3 md:p-6 hover:bg-cameroon-green/5 transition-all duration-300"
            >
              <a href={link.href}>
                {link.icon}
                <span className="text-xs md:text-sm font-medium text-center mt-2">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}