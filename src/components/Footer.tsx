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
              <p className="font-bold text-sm md:text-base">Wum Council</p>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <MapPin className="h-4 w-4" />
                <p>North West Region, Cameroon</p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="h-4 w-4" />
                <p>+237 123 456 789</p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Mail className="h-4 w-4" />
                <p>contact@wumcouncil.cm</p>
              </div>
              <p className="text-sm md:text-base">P.O. Box 9 Wum</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/government/meet-mayor" className="hover:underline">{t("nav.meetMayor")}</a></li>
              <li><a href="/government/executive-offices" className="hover:underline">{t("nav.executiveOffices")}</a></li>
              <li><a href="/visitors/tourism" className="hover:underline">{t("nav.tourism")}</a></li>
              <li><a href="/flash-news" className="hover:underline">{t("nav.news")}</a></li>
              <li><a href="/business/investment" className="hover:underline">{t("nav.investment")}</a></li>
            </ul>
          </div>

          {/* Important Services */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/residents/education" className="hover:underline">{t("nav.education")}</a></li>
              <li><a href="/residents/health" className="hover:underline">{t("nav.health")}</a></li>
              <li><a href="/residents/markets" className="hover:underline">{t("nav.markets")}</a></li>
              <li><a href="/business/licenses" className="hover:underline">{t("nav.licenses")}</a></li>
              <li><a href="/business/taxes" className="hover:underline">{t("nav.taxes")}</a></li>
            </ul>
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
          <p>2025 © Wum Council</p>
          <p className="text-sm">Website Designed by DTIMA – Connecting People & Government</p>
        </div>
      </div>
    </footer>
  );
};