import merge from "@/lib/merge";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { type Location } from "react-router-dom";

interface SidebarProps {
  links: SidebarLink[];
  className?: string;
  current?: Location;
}

export interface SidebarLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

const Sidebar = ({ links, current, className }: SidebarProps) => {
  return (
    <aside className={merge("flex flex-col gap-3 p-4 text-white", className)}>
      <div className="flex gap-2 justify-center">
        <img className="w-[120px] h-[100px]" src={logo} alt="StudyMates Logo" />
      </div>
      {links?.map((link) => {
        return (
          <Link key={link.url} to={link.url}>
            <div
              className={merge(
                "flex items-center px-2 py-1 gap-2 rounded-xl hover:bg-gray-300 hover:text-black",
                current?.pathname === link.url ? "bg-white text-black" : ""
              )}
            >
              {link.icon}
              <span className="font-light text-lg">{link.label}</span>
            </div>
          </Link>
        );
      })}
      <div className="mt-auto">Logout</div>
    </aside>
  );
};

export default Sidebar;
