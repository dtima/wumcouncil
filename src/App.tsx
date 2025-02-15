import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import FlashNews from "./pages/FlashNews";
import MeetTheMayor from "./pages/MeetTheMayor";
import MayorBiography from "./pages/MayorBiography";
import ExecutiveOffices from "./pages/ExecutiveOffices";
import Tourism from "./pages/Tourism";
import PracticalGuide from "./pages/PracticalGuide";
import ResidentsGuide from "./pages/ResidentsGuide";
import InvestmentOpportunities from "./pages/InvestmentOpportunities";

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <LanguageProvider>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin-dtima/*" element={<Admin />} />
            <Route path="/flash-news" element={<FlashNews />} />
            <Route path="/government/meet-mayor" element={<MeetTheMayor />} />
            <Route path="/government/mayor-biography" element={<MayorBiography />} />
            <Route path="/government/executive-offices" element={<ExecutiveOffices />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/practical-guide" element={<PracticalGuide />} />
            <Route path="/residents-guide" element={<ResidentsGuide />} />
            <Route path="/business/investment" element={<InvestmentOpportunities />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </LanguageProvider>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;