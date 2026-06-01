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
    id: "psicoterapia-online",
    title: "Psicoterapia Particular Online",
    summary:
      "Atención psicológica individual online, enfocada en acompañamiento emocional, evaluación inicial y definición de objetivos terapéuticos.",
    description:
      "Atención psicológica individual en modalidad online, orientada al acompañamiento emocional, evaluación inicial, definición de objetivos terapéuticos e intervención psicológica según las necesidades de cada consultante. El trabajo se desarrolla desde un enfoque respetuoso, confidencial y centrado en el bienestar integral de la persona.",
    modality: "Modalidad online",
    duration: "A coordinar",
    price: "Consultar",
  },
  {
    id: "talleres-psicoeducativos",
    title: "Diseño y Ejecución de Talleres Psicoeducativos",
    summary:
      "Talleres para comunidades educativas, organizaciones sociales, niñeces, juventudes, docentes y equipos de trabajo.",
    description:
      "Planificación y facilitación de talleres dirigidos a comunidades educativas, organizaciones sociales, niñeces, juventudes, docentes y equipos de trabajo. Las intervenciones abordan temáticas socioemocionales, convivencia, autocuidado, género, derechos humanos, identidad, comunicación y resolución de conflictos.",
    modality: "Taller psicoeducativo",
    duration: "A coordinar",
    price: "Según propuesta",
  },
  {
    id: "capacitaciones-comunidades-educativas",
    title: "Capacitaciones y Acompañamiento a Comunidades Educativas",
    summary:
      "Espacios formativos para fortalecer herramientas de gestión emocional, comunicación y convivencia escolar.",
    description:
      "Desarrollo de espacios formativos para docentes, equipos de convivencia escolar y comunidades educativas, con el objetivo de fortalecer herramientas prácticas para la gestión emocional, comunicación efectiva, abordaje de conflictos y construcción de ambientes seguros, colaborativos e inclusivos.",
    modality: "Capacitación",
    duration: "A coordinar",
    price: "Según propuesta",
  },
  {
    id: "intervencion-comunitaria",
    title: "Intervención Comunitaria y Diagnóstico Social",
    summary:
      "Levantamiento de necesidades, análisis territorial y diseño de estrategias de intervención comunitaria.",
    description:
      "Levantamiento de información, análisis de necesidades y diseño de estrategias de intervención en contextos comunitarios. Experiencia en trabajo territorial, coordinación con redes locales y acompañamiento de comunidades desde un enfoque participativo, intercultural y de derechos.",
    modality: "Intervención comunitaria",
    duration: "A coordinar",
    price: "Según propuesta",
  },
  {
    id: "psicoeducacion-nineces-juventudes",
    title: "Psicoeducación con Niñeces y Juventudes",
    summary:
      "Actividades socioemocionales y participativas para fortalecer identidad, autocuidado y convivencia.",
    description:
      "Facilitación de actividades orientadas al desarrollo socioemocional, fortalecimiento de la identidad, expresión corporal, participación, autocuidado y convivencia. Trabajo con metodologías lúdicas, participativas y adaptadas a distintas edades y contextos educativos.",
    modality: "Psicoeducación",
    duration: "A coordinar",
    price: "Según propuesta",
  },
];

const talleresData = [
  {
    id: "rol-profesor-jefe",
    title: "Taller de Fortalecimiento del Rol del Profesor Jefe",
    summary:
      "Herramientas para fortalecer el liderazgo, vínculo y acompañamiento del profesor jefe.",
    description:
      "Taller dirigido a docentes y equipos educativos, orientado a fortalecer el rol del profesor jefe como figura clave en la construcción de ambientes escolares seguros, colaborativos e inclusivos. Se trabajan herramientas de comunicación asertiva, escucha activa, resolución de conflictos, vínculo escuela-familia, autocuidado docente e inteligencia emocional.",
    date: "A coordinar",
    company: "Génesis Psicología",
  },
  {
    id: "resolucion-conflictos-comunicacion",
    title: "Taller de Resolución de Conflictos y Comunicación Asertiva",
    summary:
      "Estrategias prácticas para abordar conflictos mediante diálogo, escucha activa y comunicación efectiva.",
    description:
      "Espacio práctico para identificar conflictos frecuentes en contextos educativos y comunitarios, promoviendo estrategias de diálogo, escucha activa, validación emocional y comunicación efectiva. Incluye dinámicas participativas, análisis de situaciones cotidianas y construcción colectiva de soluciones.",
    date: "A coordinar",
    company: "Génesis Psicología",
  },
  {
    id: "inteligencia-emocional-autocuidado",
    title: "Taller de Inteligencia Emocional y Autocuidado",
    summary:
      "Herramientas para reconocer emociones, autorregularse y fortalecer el bienestar personal.",
    description:
      "Instancia orientada al reconocimiento y gestión de emociones, promoviendo herramientas de autorregulación, autocuidado y bienestar personal. Pensado para docentes, equipos de trabajo, estudiantes o comunidades que requieren fortalecer recursos emocionales para enfrentar desafíos cotidianos.",
    date: "A coordinar",
    company: "Génesis Psicología",
  },
  {
    id: "genero-roles-estereotipos",
    title: "Taller de Género, Roles y Estereotipos",
    summary:
      "Espacio reflexivo sobre roles de género, estereotipos, equidad y prevención de violencias.",
    description:
      "Taller reflexivo y participativo que aborda los roles de género, estereotipos, desigualdades y formas de relación en contextos educativos y comunitarios. Busca promover el pensamiento crítico, el respeto, la equidad y la prevención de violencias.",
    date: "A coordinar",
    company: "Génesis Psicología",
  },
  {
    id: "derechos-humanos-buen-trato",
    title: "Taller de Derechos Humanos y Buen Trato",
    summary:
      "Formación en derechos humanos, convivencia, buen trato y respeto por la diversidad.",
    description:
      "Espacio formativo orientado a sensibilizar sobre derechos humanos, buen trato, convivencia y respeto por la diversidad. Se trabaja mediante actividades reflexivas y participativas que favorecen el reconocimiento de derechos y responsabilidades en la vida cotidiana.",
    date: "A coordinar",
    company: "Génesis Psicología",
  },
  {
    id: "identidad-autoestima-nineces-juventudes",
    title: "Taller de Identidad y Autoestima para Niñeces y Juventudes",
    summary:
      "Actividades para fortalecer identidad, autoestima, expresión emocional y sentido de pertenencia.",
    description:
      "Actividad dirigida a niñas, niños y jóvenes, enfocada en el fortalecimiento de la identidad, autoestima, expresión emocional y valoración de la diversidad cultural. Se utilizan dinámicas creativas y participativas para favorecer la confianza, el reconocimiento personal y el sentido de pertenencia.",
    date: "A coordinar",
    company: "Génesis Psicología",
  },
  {
    id: "expresion-corporal-teatro",
    title: "Taller de Expresión Corporal y Teatro",
    summary:
      "Taller lúdico para desarrollar expresión emocional, comunicación, creatividad y seguridad personal.",
    description:
      "Taller lúdico orientado al desarrollo de la expresión emocional, comunicación, creatividad y seguridad personal mediante herramientas teatrales y corporales. Favorece la participación, la confianza grupal y la expresión de emociones en un espacio seguro.",
    date: "A coordinar",
    company: "Génesis Psicología",
  },
  {
    id: "participacion-ciudadania-juvenil",
    title: "Talleres de Participación y Ciudadanía Juvenil",
    summary:
      "Espacios de diálogo juvenil para identificar necesidades y construir propuestas colectivas.",
    description:
      "Espacios de conversación y reflexión con estudiantes sobre temáticas relevantes para sus comunidades, promoviendo la participación, el diálogo, la identificación de necesidades y la construcción colectiva de propuestas.",
    date: "A coordinar",
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
