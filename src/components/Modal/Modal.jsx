import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.css";

function Modal({ isOpen, onClose, type, item }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !item) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(event) => event.stopPropagation()}>
        {type === "servicio" ? (
          <div className="modal-content modal-service">
            <div className="modal-header">
              <h3>{item.title}</h3>
              <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
                <AiOutlineClose />
              </button>
            </div>
            <span className="modal-pill">{item.modality || "Sesión Online"}</span>
            <p>{item.description}</p>
            <div className="modal-values">
              <div>
                <span>Duración</span>
                <strong>{item.duration}</strong>
              </div>
              <div>
                <span>Valor</span>
                <strong>{item.price}</strong>
              </div>
            </div>
            <a className="modal-action" href="https://agendapro.com/site/cl/psicoterapiaonlinegenesisgalleguillos/513921">
              Agendar
            </a>
          </div>
        ) : (
          <div className="modal-content modal-workshop">
            <div className="modal-copy">
              <div className="modal-header">
                <h3>{item.title}</h3>
                <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
                  <AiOutlineClose />
                </button>
              </div>
              <p>{item.description}</p>
              <div className="modal-values">
                <div>
                  <span>Fecha</span>
                  <strong>{item.date}</strong>
                </div>
                <div>
                  <span>Empresa</span>
                  <strong>{item.company}</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
