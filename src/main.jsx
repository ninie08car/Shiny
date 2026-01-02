import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Home from './pages/Home'
import './index.css'

// Note pour l'étudiant : Pour l'instant, seule la page Home est affichée.
// Dans le chapitre 1, vous configurerez React Router pour naviguer entre les différentes pages.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
)
