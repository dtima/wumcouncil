import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import FlashNews from "./pages/FlashNews";
import MeetTheMayor from "./pages/MeetTheMayor";
import ExecutiveOffices from "./pages/ExecutiveOffices";

const App = () => (
  <ErrorBoundary>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin-dtima/*" element={<Admin />} />
            <Route path="/flash-news" element={<FlashNews />} />
            <Route path="/government/meet-mayor" element={<MeetTheMayor />} />
            <Route path="/government/executive-offices" element={<ExecutiveOffices />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </ErrorBoundary>
);

export default App;