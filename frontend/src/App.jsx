import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profilePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/projectPage";
import SearchPage from "./pages/searchPage";
import Navbar from "./components/ui/navbar";
import { ThemeProvider } from "./components/ui/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="p-6 text-gray-900 dark:text-gray-100">
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}



export default App;
