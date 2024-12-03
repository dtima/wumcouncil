import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Construction } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Programs() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t("programs.title")}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-cameroon-green" />
                {t("programs.agenda")}
              </CardTitle>
              <CardDescription>
                {t("programs.agendaDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="mt-4">
                {t("programs.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Construction className="h-5 w-5 text-cameroon-green" />
                {t("programs.projects")}
              </CardTitle>
              <CardDescription>
                {t("programs.projectsDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="mt-4">
                {t("programs.viewProjects")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}