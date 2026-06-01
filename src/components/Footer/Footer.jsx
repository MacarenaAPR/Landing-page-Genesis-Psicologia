import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section" id="contacto">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo" />
          <div>
            <h3>Génesis Galleguillos</h3>
            <p>Psicóloga | Gestión de proyectos sociales, infancia e interculturalidad | Intervención comunitaria, psicoeducación y derechos humanos.</p>
          </div>
        </div>

        <div className="footer-info">
          <p className="footer-title">Contacto</p>
          <a href="mailto:Contacto@mail.cl">Contacto@mail.cl</a>
          <a href="tel:+569987654321">+569 9876 54321</a>
        </div>

        <div className="footer-social">
          <p className="footer-title">Síguenos</p>
          <div className="footer-social-links">
            {/* TODO: reemplazar por link real de Facebook */}
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            {/* TODO: reemplazar por link real de Instagram */}
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* TODO: reemplazar por link real de LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Génesis Psicología. Todos los derechos reservados.</p>
        <p className="footer-credit">Creado por MPR.ING</p>
      </div>
    </footer>
  );
}

export default Footer;
