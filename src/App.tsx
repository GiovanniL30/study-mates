import { routes } from "@/routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseProvider from "@/lib/context/CourseProvider";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <CourseProvider>
      <RouterProvider router={router} />
    </CourseProvider>
  );
};

export default App;
