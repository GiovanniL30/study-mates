import { Outlet } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import ApplicationSideBar from "@/components/SiteSidebar";
import SiteHeader from "./components/SiteHeader";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <ApplicationSideBar />
      <main className="p-2">
        <SiteHeader />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
