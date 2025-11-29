import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import { Outlet, useLocation } from "react-router-dom";
import { type SidebarLink } from "@/components/ui/Sidebar";
import { IoHomeOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const links: SidebarLink[] = [
  {
    label: "Dashboard",
    url: "/main",
    icon: <IoHomeOutline />,
  },
  {
    label: "Courses",
    url: "/main/courses",
    icon: <FaGraduationCap />,
  },
  {
    label: "Community",
    url: "/main/community",
    icon: <RiUserCommunityFill />,
  },
  {
    label: "Ai Kuto-San",
    url: "/main/chat",
    icon: <CiChat1 />,
  },
  {
    label: "Settings",
    url: "/main/settings",
    icon: <CiSettings />,
  },
];

const MainLayout = () => {
  const currentLocation = useLocation();

  return (
    <main className="flex gap-2 w-full min-h-screen bg-background">
      <Sidebar current={currentLocation} className="bg-black w-[300px]" links={links} />
      <div className="flex flex-col gap-2 w-full p-4">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
