import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { NewsManagement } from "@/components/admin/content/NewsManagement";
import { EventsManagement } from "@/components/admin/content/EventsManagement";
import { ProgramsManagement } from "@/components/admin/content/ProgramsManagement";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Current admin route:", location.pathname);
  }, [location]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100">
        <AdminSidebar />
        <div className="lg:pl-64">
          <AdminHeader />
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Breadcrumb className="mb-4">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/admin-dtima">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink>Overview</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                    <AdminOverview />
                  </>
                }
              />
              <Route
                path="/content/news"
                element={
                  <>
                    <Breadcrumb className="mb-4">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/admin-dtima">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink>News Management</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                    <NewsManagement />
                  </>
                }
              />
              <Route
                path="/content/events"
                element={
                  <>
                    <Breadcrumb className="mb-4">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/admin-dtima">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink>Events Management</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                    <EventsManagement />
                  </>
                }
              />
              <Route
                path="/content/programs"
                element={
                  <>
                    <Breadcrumb className="mb-4">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/admin-dtima">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink>Programs Management</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                    <ProgramsManagement />
                  </>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Admin;