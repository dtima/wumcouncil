import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  isOpen: boolean;
  menuItems: Array<{
    trigger: string;
    items: Array<{ href: string; label: string }>;
  }>;
}

export const MobileNav = ({ isOpen, menuItems }: Props) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div 
      className="md:hidden animate-fade-in"
      role="navigation"
      aria-label="Mobile Navigation"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
        {menuItems.map((item) => (
          <div 
            key={item.trigger} 
            className="space-y-2"
            role="menu"
            aria-label={`${item.trigger} menu`}
          >
            <div 
              className="px-3 py-2 text-base font-medium text-gray-700" 
              role="menuitem"
            >
              {item.trigger}
            </div>
            {item.items.map((subItem) => (
              <a
                key={subItem.href}
                href={subItem.href}
                className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-cameroon-green hover:bg-gray-50 pl-6 focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:ring-offset-2"
                role="menuitem"
                tabIndex={0}
              >
                {subItem.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};