import ProjectCard from '../../components/ProjectCard'
import EmployeeCard from '../../components/EmployeeCard'
import { projectsData } from '../../data/projects'
import { employeesData } from '../../data/employees'
import './Home.css'

function Home() {
  // Affiche les 3 derniers projets
  const recentProjects = projectsData.slice(0, 3)

  // Affiche 4 employés
  const featuredEmployees = employeesData.slice(0, 4)

  return (
    <div className="page">
      <section id="dashboard" className="page-header">
        <h1>Dashboard 📊</h1>
        <p>Bienvenue chez Shiny, votre agence spécialisée dans le développement web.</p>
      </section>

      <section id="projects" className="dashboard-section">
        <h2>Projets récents</h2>
        <div className="projects-grid">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="employees" className="dashboard-section">
        <h2>Équipe</h2>
        <div className="employees-grid">
          {featuredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
