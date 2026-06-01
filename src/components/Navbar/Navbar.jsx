import { useState } from "react";
import "./Navbar.css";
import LogoGenesis from "../../assets/Logo-Genesis.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-genesis">
        <div className="navbar-container">
        <button
          className="navbar-burger"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="navbar-brand">
          <img src={LogoGenesis} alt="Logo Génesis" />
          <a href="#inicio" className="navbar-title">
            Génesis
          </a>
        </div>

        <div className={`navbar-links ${open ? "active" : ""}`}>
          <a href="#inicio">Inicio</a>
          <a href="#talleres">Talleres</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>

          <div className="navbar-social-mobile">
            <a href="https://www.instagram.com/genesis.psicoterapia?igsh=MWNic2VtNDM0a3I1Mg==" aria-label="Instagram">
              <IoLogoInstagram />
            </a>

            <a href="https://cl.linkedin.com/in/génesis-galleguillos" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-social">
            

            <a href="https://www.instagram.com/genesis.psicoterapia?igsh=MWNic2VtNDM0a3I1Mg==" aria-label="Instagram">
              <IoLogoInstagram />
            </a>

            <a href="https://cl.linkedin.com/in/génesis-galleguillos" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
          <a className="navbar-button" href="https://agendapro.com/site/cl/psicoterapiaonlinegenesisgalleguillos/513921">
            <LuCalendarHeart /> Agendar
          </a>
          
        </div>
        </div>
      </nav>

      {open && <div className="navbar-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}

export default Navbar;
