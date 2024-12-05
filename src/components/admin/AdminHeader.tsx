import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

export function AdminHeader() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="h-16 bg-white border-b px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold hidden md:block">Welcome back, Admin</h2>
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search in dashboard..."
            className="w-full pl-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          className="font-medium"
        >
          {language.toUpperCase()}
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </Button>

        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}