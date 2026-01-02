import './Error.css'

// Note pour l'étudiant : Cette page sera utilisée dans le chapitre 2
// pour gérer les erreurs 404 avec une route path="*"
function Error() {
  return (
    <div className="page">
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <h2>Oups 🙈 Cette page n'existe pas</h2>
        <p>La page que vous cherchez semble introuvable.</p>
        {/* Dans le chapitre 2, ce lien <a> sera remplacé par un <Link> */}
        <a href="/" className="error-link">
          Retour à l'accueil
        </a>
      </div>
    </div>
  )
}

export default Error
