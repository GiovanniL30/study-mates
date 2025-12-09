import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import MainLayout from "@/components/layout/MainLayout";
import CourseLayout from "@/components/layout/CourseLayout";
import Dashboard from "@/pages/Dashboard";
import Community from "@/pages/Community";
import Courses from "@/pages/Courses";
import Chat from "@/pages/Chat";
import Settings from "@/pages/Settings";
import SelectedCourse from "@/pages/SelectedCourse";
import SelectedCourseLesson from "@/pages/SelectedCourseLesson";
import SelectedCourseActivity from "@/pages/SelectedCourseActivity";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "*", element: <NotFound /> },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "courses", element: <Courses /> },
      { path: "community", element: <Community /> },
      { path: "chat", element: <Chat /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/c",
    element: <CourseLayout />,
    children: [
      { path: ":courseId", element: <SelectedCourse /> },
      { path: ":courseId/l/:lessonId", element: <SelectedCourseLesson /> },
      { path: ":courseId/a/:activityId", element: <SelectedCourseActivity /> },
    ],
  },
];
