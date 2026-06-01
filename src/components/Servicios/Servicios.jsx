import "./Servicios.css";
import recursoServicio1 from "../../assets/RecursoServicio1.png";
import recursoServicio2 from "../../assets/RecursoServicio2.png";
import recursoServicio3 from "../../assets/RecursoServicio3.png";

const serviceImages = [recursoServicio1, recursoServicio2, recursoServicio3];

function Servicios({ servicios, onOpenService }) {
  return (
    <section className="services-section" id="servicios">
      <div className="section-header">
        <p className="section-label">Servicio</p>
        <h2>Atenciones diseñadas para tu bienestar.</h2>
      </div>

      <div className="services-grid">
        {servicios.map((servicio, index) => (
          <article key={servicio.id} className="service-card">
            <img
              className="service-card-image"
              src={serviceImages[index % serviceImages.length]}
              alt={servicio.title}
            />
            <div>
              <h3>{servicio.title}</h3>
              <p>{servicio.summary}</p>
            </div>
            <button onClick={() => onOpenService(servicio)}>Saber más</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
