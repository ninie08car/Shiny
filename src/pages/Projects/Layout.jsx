import { Outlet, NavLink } from "react-router-dom";
import "./ProjectLayout.css";

function ProjectLayout() {
  return (
    <div className="page">
      <nav className="project-nav">
        <NavLink to="/project" end className="about-link">
          Tous
        </NavLink>
        <NavLink to="/project/inprogress" className="about-link">
          En cours
        </NavLink>
        <NavLink to="/project/completed" className="about-link">
          Terminés
        </NavLink>
        <NavLink to="/project/planned" className="about-link">
          Planifiés
        </NavLink>
      </nav>
      <div className="project-content">
        <Outlet />
      </div>
    </div>
  );
}

export default ProjectLayout;
