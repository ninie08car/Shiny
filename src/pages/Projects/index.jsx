import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Nos projets 🚀</h1>
        <p>Découvrez l'ensemble des projets Shiny.</p>
      </div>

      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
