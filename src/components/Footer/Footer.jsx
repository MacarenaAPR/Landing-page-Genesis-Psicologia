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
          <a href="mailto:genesisgalleguillosv@gmail.com">genesisgalleguillosv@gmail.com</a>
          <a href="tel:+569987654321">+569 23851079</a>
        </div>

        <div className="footer-social">
          <p className="footer-title">Síguenos</p>
          <div className="footer-social-links">
   
            <a href="https://www.instagram.com/genesis.psicoterapia?igsh=MWNic2VtNDM0a3I1Mg==" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://cl.linkedin.com/in/génesis-galleguillos" aria-label="LinkedIn">
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
