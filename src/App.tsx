import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./MainLayout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/courses/Courses";
import Community from "./pages/Community";
import BotPage from "./pages/BotPage";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="community" element={<Community />} />
          <Route path="bot" element={<BotPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
