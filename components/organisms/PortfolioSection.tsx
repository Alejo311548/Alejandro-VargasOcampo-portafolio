'use client';

import { useState } from 'react';
import PortfolioCard from '../molecules/PortfolioCard';
import Modal from '../atoms/Modal';

const portfolioData = [
  {
    title: 'Sistema de Agendamiento Médico',
    image: '/Citasalud.png',
    description: 'Aplicación para EPS con gestión de citas, JWT, PostgreSQL y más.',
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

export default function PortfolioSection() {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalTitle('');
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Portafolio de Proyectos
      </h2>

      <div className="overflow-x-auto flex gap-6 px-6 snap-x">
        {portfolioData.map((project, index) => (
          <div key={index} className="snap-center flex-shrink-0">
            <PortfolioCard
              image={project.image}
              title={project.title}
              description={project.description}
              onLearnMore={() => openModal(project.title, project.details)}
            />
          </div>
        ))}
      </div>

      {modalContent && (
        <Modal title={modalTitle} content={modalContent} onClose={closeModal} />
      )}
    </section>
  );
}
