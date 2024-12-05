import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Menu,
  X,
  Bell,
  Calendar,
  MessageSquare,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: FileText, label: "Content", href: "/admin/content" },
  { icon: Calendar, label: "Events", href: "/admin/events" },
  { icon: MessageSquare, label: "Chat", href: "/admin/chat" },
  { icon: Bell, label: "Notifications", href: "/admin/notifications" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center justify-center border-b">
          <img
            src="/lovable-uploads/43369764-2dc3-4409-957a-f7466442ba0b.png"
            alt="Garoua III Logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-xl font-bold">Admin Panel</span>
        </div>

        <nav className="mt-6 px-4">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span className="ml-3">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}