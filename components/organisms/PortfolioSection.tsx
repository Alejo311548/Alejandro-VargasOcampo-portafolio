// Indica que este archivo debe ser tratado como un componente del lado del cliente en Next.js
'use client';

// Importa el hook useState de React para manejar el estado local
import { useState } from 'react';

// Importa el componente PortfolioCard 
import PortfolioCard from '../molecules/PortfolioCard';

// Importa el componente Modal 
import Modal from '../atoms/Modal';

// Datos del portafolio: array de objetos con información sobre cada proyecto
const portfolioData = [
  {
    // Título del proyecto
    title: 'Sistema de Agendamiento Médico',
    // Imagen asociada al proyecto
    image: '/Citasalud.png',
    // Descripción corta del proyecto
    description: 'Aplicación para EPS con gestión de citas, JWT, PostgreSQL y más.',
    // Contenido detallado que se mostrará en el modal al hacer clic en "más información"
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          Módulo de fábrica-escuela. Plataforma modular para gestión de citas médicas desarrollada con Java, Spring Boot y PostgreSQL.
          Incluye autenticación con JWT, control de roles, Docker, Swagger, SonarCloud, Github Actions y pruebas de carga con Gatling.
        </p>
        <a
          href="https://cita-salud.vercel.app/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Visitar sitio web
        </a>
      </div>
    ),
  },
  {
    title: 'Bela',
    image: '/Entropia.png',
    description: 'ERP especializado para cumplimiento de normativa INVIMA, facturación DIAN y más.',
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          (En desarrollo) ERP desarrollado para empresas cosméticas para dar cumplimiento a la Resolución 2214 de la CAN, facturación y nómina electrónica (DIAN), ventas con pasarela y panel administrativo.
        </p>
      </div>
    ),
  },
  {
    title: 'Primera base de datos de productos naturales de Colombia',
    image: '/ejecol.png',
    description: 'Primera base de datos especializada en productos naturales colombianos.',
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          Desarrollo de la primera base de datos de productos naturales de Colombia, que centraliza información científica, usos tradicionales y datos taxonómicos.
        </p>
        <a
          href="https://www.npdbejecol.com"
          target="_blank"
          className="text-blue-500 underline"
        >
          Visitar sitio web
        </a>
      </div>
    ),
  },
  {
    title: 'Sistema de gestión para Professional Cosmetics SAS',
    image: '/SIGProfessional.png',
    description: 'ERP especializado para gestión de diferentes áreas de la empresa.',
    details: (
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <p>
          ERP desarrollado para empresa cosmética Professional Cosmetics, con el fin de comunicar la información entre las diferentes áreas de la empresa.
        </p>
        <a
          href="https://www.hidraliss.com/login"
          target="_blank"
          className="text-blue-500 underline"
        >
          Visitar sitio web
        </a>
      </div>
    ),
  },
];

// Componente principal que representa la sección de portafolio
export default function PortfolioSection() {
  // Estado para guardar el contenido que se mostrará en el modal
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  // Estado para guardar el título del modal
  const [modalTitle, setModalTitle] = useState<string>('');

  // Función para abrir el modal con un título y contenido específicos
  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
  };

  // Función para cerrar el modal (resetea el título y contenido)
  const closeModal = () => {
    setModalContent(null);
    setModalTitle('');
  };

  return (
    // Sección principal con relleno vertical y fondo gris claro
    <section className="py-16 bg-gray-100">
      
      {/* Título de la sección, centrado y con estilo tipográfico fuerte */}
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Portafolio de Proyectos
      </h2>

      {/* Contenedor de tarjetas con desplazamiento horizontal y espacios entre ellas */}
      <div className="overflow-x-auto flex gap-6 px-6 snap-x">
        {portfolioData.map((project, index) => (
          // Cada tarjeta está centrada y no se encoge en el scroll horizontal
          <div key={index} className="snap-center flex-shrink-0">
            <PortfolioCard
              image={project.image}
              title={project.title}
              description={project.description}
              // Al hacer clic en "más información", se abre el modal con detalles del proyecto
              onLearnMore={() => openModal(project.title, project.details)}
            />
          </div>
        ))}
      </div>

      {/* Si hay contenido para el modal, se renderiza el componente Modal con su contenido */}
      {modalContent && (
        <Modal title={modalTitle} content={modalContent} onClose={closeModal} />
      )}
    </section>
  );
}
