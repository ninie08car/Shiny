import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Employees from "./pages/Employees";
import EmployeeDetail from "./pages/EmployeeDetail";
import About from "./pages/About";
import AboutLayout from "./pages/About/Layout";
import AboutPresentation from "./pages/About/Presentation";
import AboutTeam from "./pages/About/Team";
import AboutContact from "./pages/About/Contact";
import Error from "./pages/Error";
import "./index.css";

// Note pour l'étudiant : Pour l'instant, seule la page Home est affichée.
// Dans le chapitre 1, vous configurerez React Router pour naviguer entre les différentes pages.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route index element={<AboutPresentation />} />
            <Route path="team" element={<AboutTeam />} />
            <Route path="contact" element={<AboutContact />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);
