import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface Props {
  menuItems: Array<{
    trigger: string;
    items: Array<{ href: string; label: string }>;
  }>;
}

export const DesktopNav = ({ menuItems }: Props) => {
  return (
    <NavigationMenu aria-label="Main Navigation">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.trigger}>
            <NavigationMenuTrigger 
              aria-label={`${item.trigger} menu`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  (e.target as HTMLElement).click();
                }
              }}
            >
              {item.trigger}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul 
                className="grid w-[400px] gap-3 p-4" 
                role="menu" 
                aria-label={`${item.trigger} submenu`}
              >
                {item.items.map((subItem) => (
                  <li key={subItem.href} role="none">
                    <NavigationMenuLink
                      href={subItem.href}
                      className="block p-2 hover:bg-accent rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cameroon-green"
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          window.location.href = subItem.href;
                        }
                      }}
                    >
                      {subItem.label}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};