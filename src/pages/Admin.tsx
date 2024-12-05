import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Admin = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100">
        <AdminSidebar />
        <div className="lg:pl-64">
          <AdminHeader />
          <main className="p-4 md:p-6 max-w-7xl mx-auto">
            <Breadcrumb className="mb-4">
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin-dtima">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>Overview</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <AdminOverview />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Admin;