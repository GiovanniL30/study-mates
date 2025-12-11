import { Outlet } from "react-router-dom";
import Header from "@/components/ui/Header";
import ClarityRouteTracker from "@/lib/ClarityRouteTracker";

const CourseLayout = () => {
  return (
    <main className="flex flex-col gap-2 bg-background w-full min-h-screen p-4">
      <ClarityRouteTracker />
      <Header />
      <div className="flex justify-center w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default CourseLayout;
