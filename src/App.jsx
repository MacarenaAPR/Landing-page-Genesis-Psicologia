import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Talleres from "./components/Talleres/Talleres.jsx";
import Servicios from "./components/Servicios/Servicios.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "./components/Modal/Modal.jsx";

const serviciosData = [
  {
    id: "ansiedad",
    title: "Ansiedad y Estrés",
    summary: "Acompañamiento personalizado para reducir tensión y recuperar calma.",
    description:
      "Sesión online diseñada para abordar ansiedad y estrés con una mirada terapéutica y cercana.",
    duration: "55 min",
    price: "$45.000",
  },
  {
    id: "autoestima",
    title: "Autoestima y Desarrollo Personal",
    summary: "Herramientas para fortalecer confianza y encontrar equilibrio emocional.",
    description:
      "Sesión con foco en autocuidado, límites saludables y crecimiento personal desde lo cotidiano.",
    duration: "55 min",
    price: "$45.000",
  },
  {
    id: "psicoterapia",
    title: "Psicoterapia Adulto | Infantil",
    summary: "Acompañamiento seguro para distintas etapas de la vida y del desarrollo.",
    description:
      "Espacio confidencial para adultos y niños, pensado para trabajar emociones, temas familiares y sociales.",
    duration: "55 min",
    price: "$45.000",
  },
];

const talleresData = [
  {
    id: "taller-1",
    title: "Taller de Autocuidado",
    summary: "Estrategias prácticas para construir una rutina emocionalmente saludable.",
    description:
      "Un espacio de aprendizaje para reconocer recursos personales y practicar cambios de forma amable y sostenible.",
    date: "12 de Junio, 2026",
    company: "Génesis Psicología",
  },
  {
    id: "taller-2",
    title: "Taller de Comunicación Afectiva",
    summary: "Claves para escuchar y expresar con claridad en relaciones cercanas.",
    description:
      "Taller grupal que ayuda a mejorar vínculos y generar conversaciones más respetuosas y seguras.",
    date: "24 de Junio, 2026",
    company: "Génesis Psicología",
  },
  {
    id: "taller-3",
    title: "Reflexión sobre Bienestar",
    summary: "Espacio reflexivo para conectar con lo que necesitas hoy.",
    description:
      "Actividad pensada para acompañar procesos de cambio, evaluar recursos y crear nuevas metas personales.",
    date: "05 de Julio, 2026",
    company: "Génesis Psicología",
  },
];

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openServiceModal = (service) => setActiveModal({ type: "servicio", item: service });
  const openTallerModal = (taller) => setActiveModal({ type: "taller", item: taller });
  const closeModal = () => setActiveModal(null);

  return (
    <div className={`app ${activeModal ? "modal-open" : ""}`}>
      <Navbar />
      <main className={activeModal ? "content-blur" : ""}>
        <Hero />
        <Servicios servicios={serviciosData} onOpenService={openServiceModal} />
        <Talleres talleres={talleresData} onOpenTaller={openTallerModal} />
        <Footer />
      </main>
      <Modal
        isOpen={Boolean(activeModal)}
        onClose={closeModal}
        type={activeModal?.type}
        item={activeModal?.item}
      />
    </div>
  );
}

export default App;
