import "./Talleres.css";
import { useEffect, useState, useMemo } from "react";

function Talleres({ talleres = [], onOpenTaller }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const fondo = useMemo(() => {
    try {
      return new URL("../../assets/FondoTaller.png", import.meta.url).href;
    } catch (e) {
      return null;
    }
  }, []);

  if (!talleres || talleres.length === 0) {
    return null;
  }

  const prev = () => setIndex((i) => (i - 1 + talleres.length) % talleres.length);
  const next = () => setIndex((i) => (i + 1) % talleres.length);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setIndex((i) => (i + 1) % talleres.length);
    }, 30000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, talleres.length]);

  const current = talleres[index];

  return (
    <section className="talleres-section" id="talleres">
      <div className="section-header">
        <p className="section-label">Instancias de Aprendizaje y Reflexión</p>
        <h2>Espacios que acompañan tu proceso con calidez y claridad.</h2>
      </div>

      <div
        className="carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="carousel-nav left" onClick={prev} aria-label="Anterior">
          ‹
        </button>

        <div className="carousel-center" style={
              fondo
                ? { backgroundImage: `url(${fondo})`, backgroundSize: 'cover' }
                : { background: "linear-gradient(180deg,#e4d6c3 0%, #fbf5ec 100%)" }
            }>

          <div className="carousel-panel" key={current.id}>
            <h2>{current.title}</h2>
            <p className="carousel-summary">{current.summary}</p>
            <p className="carousel-desc">{current.description}</p>
            <div className="carousel-meta">
              <span className="meta-item">Fecha: {current.date || "-"}</span>
              <span className="meta-item">Empresa: {current.company || "-"}</span>
            </div>

            <div className="carousel-actions">
              <button className="btn-primary" onClick={() => onOpenTaller(current)}>
                Saber Más
              </button>
            </div>
          </div>
        </div>

        <button className="carousel-nav right" onClick={next} aria-label="Siguiente">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {talleres.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir al taller ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Talleres;
