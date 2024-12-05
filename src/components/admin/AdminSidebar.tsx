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
  ChevronDown,
} from "lucide-react";

const sidebarItems = [
  { 
    icon: LayoutDashboard, 
    label: "Dashboard", 
    href: "/admin-dtima",
    active: true 
  },
  { 
    icon: Users, 
    label: "Users", 
    href: "/admin-dtima/users",
    subItems: [
      { label: "All Users", href: "/admin-dtima/users" },
      { label: "Add User", href: "/admin-dtima/users/add" },
    ]
  },
  { 
    icon: FileText, 
    label: "Content", 
    href: "/admin-dtima/content" 
  },
  { 
    icon: Calendar, 
    label: "Events", 
    href: "/admin-dtima/events" 
  },
  { 
    icon: MessageSquare, 
    label: "Chat", 
    href: "/admin-dtima/chat" 
  },
  { 
    icon: Bell, 
    label: "Notifications", 
    href: "/admin-dtima/notifications" 
  },
  { 
    icon: Settings, 
    label: "Settings", 
    href: "/admin-dtima/settings" 
  },
];

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
            <div key={item.label}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-4 py-3 text-gray-700 rounded-md transition-colors",
                  item.active
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-50"
                )}
                onClick={(e) => {
                  if (item.subItems) {
                    e.preventDefault();
                    setExpandedItem(expandedItem === item.label ? null : item.label);
                  }
                }}
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5" />
                  <span className="ml-3">{item.label}</span>
                </div>
                {item.subItems && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedItem === item.label && "transform rotate-180"
                    )}
                  />
                )}
              </a>
              {item.subItems && expandedItem === item.label && (
                <div className="ml-12 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}