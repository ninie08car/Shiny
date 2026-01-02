import './Header.css'

// Note pour l'étudiant : Ce composant Header contient la structure de base.
// Dans le chapitre 1, vous remplacerez les balises <a> par des composants <Link> de React Router.

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">Shiny</h1>
        <nav className="nav">
          {/* Ces liens sont des ancres qui scrollent dans la page.
              Dans le chapitre 1, ils seront remplacés par des composants Link pour naviguer entre les pages */}
          <a href="#dashboard" className="nav-link">Dashboard</a>
          <a href="#projects" className="nav-link">Projets</a>
          <a href="#employees" className="nav-link">Employés</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
