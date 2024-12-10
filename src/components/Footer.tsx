import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-cameroon-green text-white py-8 md:py-12 mt-8 md:mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.contact")}</h3>
            <div className="space-y-2">
              <p className="font-bold text-sm md:text-base">Garoua III City Hall</p>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <MapPin className="h-4 w-4" />
                <p>55 Trinity Ave SW</p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="h-4 w-4" />
                <p>+237 123 456 789</p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Mail className="h-4 w-4" />
                <p>contact@garoua3.cm</p>
              </div>
              <p className="text-sm md:text-base">{t("footer.hours")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#government" className="hover:underline">{t("nav.government")}</a></li>
              <li><a href="#residents" className="hover:underline">{t("nav.residents")}</a></li>
              <li><a href="#visitors" className="hover:underline">{t("nav.visitors")}</a></li>
              <li><a href="#business" className="hover:underline">{t("nav.business")}</a></li>
              <li><a href="#taskforce" className="hover:underline">{t("footer.taskForce")}</a></li>
              <li><a href="#iwantto" className="hover:underline">{t("nav.iwantto")}</a></li>
              <li><a href="/reports" className="hover:underline">{t("footer.reports")}</a></li>
            </ul>
          </div>

          {/* City Details */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.cityDetails")}</h3>
            <p className="text-sm md:text-base">{t("footer.incorporated")}</p>
            <div className="space-y-2 text-sm md:text-base">
              <p>{t("footer.population")}</p>
              <p>{t("footer.area")}</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-cameroon-yellow transition-colors">
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#twitter" className="hover:text-cameroon-yellow transition-colors">
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#linkedin" className="hover:text-cameroon-yellow transition-colors">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#youtube" className="hover:text-cameroon-yellow transition-colors">
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>{t("footer.fraudReport")}</p>
          <p>{t("footer.credits")}</p>
        </div>
      </div>
    </footer>
  );
};