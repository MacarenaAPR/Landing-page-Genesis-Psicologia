import "./Hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section
      className="hero-section"
      id="inicio"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-container">
        <div className="hero-content">
        <div className="hero-title-group">
          <span className="hero-label">Psicología humana y cercana</span>
          <h1>Psicoterapia centrada en la persona, con enfoque humano y cercano.</h1>
        </div>

        <h2 className="hero-description">
          Psicoterapia online para acompañarte en tu proceso de bienestar emocional.
        </h2>
        <p>Génesis Galleguillos</p>
        <div className="hero-meta">  
          <span>Bienestar emocional  |  Intervención comunitaria  |  Psicoeducación </span>
        </div>

        <a className="hero-button" href="#">
          Agendar
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
