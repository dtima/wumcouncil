import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Wrench, Receipt, FileText, FileCheck, Stamp, Heart, Church } from "lucide-react";
import { Button } from "./ui/button";

export function QuickLinks() {
  const quickLinks = [
    { icon: <Building2 className="h-6 w-6 md:h-8 md:w-8 text-purple-500" />, label: "Administrative services", href: "/services/administrative" },
    { icon: <Wrench className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />, label: "Technical services", href: "/services/technical" },
    { icon: <Receipt className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />, label: "Taxes", href: "/services/tax" },
    { icon: <FileText className="h-6 w-6 md:h-8 md:w-8 text-pink-500" />, label: "Bills and fines", href: "/services/bills" },
    { icon: <FileCheck className="h-6 w-6 md:h-8 md:w-8 text-green-500" />, label: "Licences and permits", href: "/services/licenses" },
    { icon: <Stamp className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />, label: "Communal stamps", href: "/services/stamp" },
    { icon: <Heart className="h-6 w-6 md:h-8 md:w-8 text-red-500" />, label: "Birth certificates", href: "/services/birth-certificate" },
    { icon: <Church className="h-6 w-6 md:h-8 md:w-8 text-indigo-500" />, label: "Marriage", href: "/services/marriage" },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="h-auto flex-col gap-2 md:gap-4 p-3 md:p-6 hover:bg-gray-50 transition-all duration-300"
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