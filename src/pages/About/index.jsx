import "./About.css";

function About() {
  return (
    <div className="page">
      <div className="about-container">
        <h1>À propos 📖</h1>
        <section className="about-section">
          <h2>Annie Berjou</h2>
          <p>Bienvenue chez les Berjou. Aujourd'hui on regarde 'One Piece'.</p>
        </section>
        <section className="about-section">
          <h2>Shiny</h2>
          <p>
            Bienvenue chez Shiny, votre agence spécialisée dans le développement
            web. Cette application vous permet de consulter les informations sur
            nos projets en cours et notre équipe talentueuse.
          </p>
        </section>

        <section className="about-section">
          <h2>Notre mission</h2>
          <p>
            Chez Shiny, nous créons des applications web modernes et
            performantes pour nos clients. Notre équipe passionnée et nos
            projets innovants sont au cœur de notre succès.
          </p>
        </section>

        <section className="about-section">
          <h2>Technologies utilisées</h2>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">React Router</span>
            <span className="tech-badge">Vite</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">CSS</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
