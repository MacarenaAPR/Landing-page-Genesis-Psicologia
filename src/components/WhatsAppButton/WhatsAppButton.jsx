import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "+56923851079";
const WHATSAPP_MESSAGE =
  "Hola, me gustaría obtener más información sobre los servicios de Genesis Psicología";

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}

export default WhatsAppButton;
