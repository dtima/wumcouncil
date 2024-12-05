import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { ContentList } from "@/components/admin/content/ContentList";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  const dummyContent = [
    {
      id: "1",
      title: "Welcome to Garoua III",
      status: "published" as const,
      lastModified: "2024-02-20",
    },
    {
      id: "2",
      title: "New Community Center Opening",
      status: "draft" as const,
      lastModified: "2024-02-19",
    },
  ];

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
                path="/content/*"
                element={
                  <>
                    <Breadcrumb className="mb-4">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/admin-dtima">Dashboard</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink>Content Management</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                    <ContentList title="Content Management" items={dummyContent} />
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