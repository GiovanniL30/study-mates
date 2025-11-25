import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BookOpenIcon, BotMessageSquareIcon, HomeIcon, SettingsIcon, UsersRoundIcon } from "lucide-react";
import logo from "@/assets/icons/logo.png";
import { Link, useLocation } from "react-router";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: BookOpenIcon,
  },
  {
    title: "Community",
    url: "/community",
    icon: UsersRoundIcon,
  },
  {
    title: "AI Kuto-San",
    url: "/bot",
    icon: BotMessageSquareIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsIcon,
  },
];

const ApplicationSideBar = () => {
  const location = useLocation();

  const isItemActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <div className="bg-white flex items-center justify-center rounded-md">
                  <img className="object-cover w-[90%] h-full" src={logo} alt="" />
                </div>
                <span className="text-base font-semibold ">Dormmates</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isItemActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default ApplicationSideBar;
