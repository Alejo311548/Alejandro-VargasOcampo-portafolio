// Indica que este componente se ejecuta en el cliente (Next.js)
"use client";

// Importa useState para manejar estado local en el componente
import { useState } from 'react';

// Importa componentes atómicos reutilizables para encabezados, párrafos, botones, avatar y modal
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import Avatar from '../atoms/Avatar';
import Modal from '../molecules/Modal';

// Componente funcional que representa la sección de perfil
export default function ProfileSection() {
  // Estado booleano para controlar la visibilidad del modal
  const [open, setOpen] = useState(false);

  return (
    // Sección principal con fondo blanco, padding, bordes redondeados, sombra, margen inferior y diseño flexible
    <section className="bg-white p-8 rounded-2xl shadow-lg mb-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">

      {/* Contenedor de texto, que ocupa todo el espacio disponible y se centra en pantallas pequeñas, se alinea a la izquierda en pantallas grandes */}
      <div className="flex-1 text-center lg:text-left">
        {/* Encabezado con nombre y título resaltado */}
        <Heading>
          Soy <span className="text-gray-800">Alejandro Vargas Ocampo</span>{' '}
          <span className="text-yellow-500">Back-end Developer</span>
        </Heading>

        {/* Párrafo descriptivo con estilo de texto gris, tamaño base y máxima anchura para buena legibilidad */}
        <Paragraph className="mt-4 text-gray-700 text-base leading-relaxed max-w-2xl">
          Ingeniero Químico con Maestría en Química. Actualmente curso Ingeniería de Sistemas
          y un Doctorado en Ciencias - Química. Apasionado por construir soluciones eficientes y escalables
          aplicando arquitectura limpia, automatización y desarrollo backend con tecnologías modernas.
        </Paragraph>

        {/* Botón que al hacer clic abre el modal (cambia el estado a true) */}
        <Button onClick={() => setOpen(true)} className="mt-6">
          VER MÁS
        </Button>
      </div>

      {/* Contenedor para la imagen/avatar, con tamaño fijo, margen a la izquierda en pantallas grandes y sin encogerse */}
      <div className="w-[300px] h-[300px] relative lg:ml-6 shrink-0">
        {/* Componente Avatar que muestra la foto con bordes redondeados, que cubre todo el contenedor, con sombra */}
        <Avatar
          src="/foto_2.png"
          alt="Alejandro Vargas Ocampo"
          className="rounded-2xl object-cover w-full h-full shadow-md"
        />
      </div>

      {/* Componente Modal que se muestra o no según el estado "open", recibe título y función para cerrar */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Sobre mí"
      >
        {/* Contenido del modal: párrafo con texto descriptivo detallado sobre el perfil profesional */}
        <Paragraph className="text-gray-700 text-base leading-relaxed">
          Ingeniero Químico con Maestría en Química, actualmente cursando Ingeniería de Sistemas y un Doctorado en Ciencias - Química.

Apasionado por el desarrollo backend, especializado en la construcción de sistemas robustos, seguros y escalables con Java + Spring Boot, PHP + Laravel y Python + Django.

He liderado el desarrollo de sistemas ERP personalizados para la industria cosmética, diseñados específicamente para cumplir normativas del INVIMA, incluyendo trazabilidad de ingredientes, control de calidad y gestión documental.

He entrenado y desplegado modelos de inteligencia artificial para comercio electrónico, enfocados en recomendaciones personalizadas, análisis de comportamiento de compra y optimización de conversiones.

Experiencia en desarrollo de plataformas e-commerce integradas con pasarelas de pago, sistemas de inventario y paneles administrativos con foco en rendimiento y usabilidad.

He aplicado técnicas de machine learning para la predicción de propiedades bioactivas en extractos vegetales, combinando ciencia de datos y química computacional para impulsar el desarrollo de productos naturales con valor agregado.
        </Paragraph>
      </Modal>
    </section>
  );
}
