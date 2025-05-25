"use client";
import { useState } from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import Avatar from '../atoms/Avatar';
import Modal from '../molecules/Modal';

export default function ProfileSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg mb-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Texto (izquierda) */}
      <div className="flex-1 text-center lg:text-left">
        <Heading>
          Soy <span className="text-gray-800">Alejandro Vargas Ocampo</span>{' '}
          <span className="text-yellow-500">Back-end Developer</span>
        </Heading>

        <Paragraph className="mt-4 text-gray-700 text-base leading-relaxed max-w-2xl">
          Ingeniero Químico con Maestría en Química. Actualmente curso Ingeniería de Sistemas
          y un Doctorado en Ciencias - Química. Apasionado por construir soluciones eficientes y escalables
          aplicando arquitectura limpia, automatización y desarrollo backend con tecnologías modernas.
        </Paragraph>

        <Button onClick={() => setOpen(true)} className="mt-6">
          VER MÁS
        </Button>
      </div>

      {/* Imagen (derecha) */}
      <div className="w-[300px] h-[300px] relative lg:ml-6 shrink-0">
        <Avatar
          src="/foto_2.png"
          alt="Alejandro Vargas Ocampo"
          className="rounded-2xl object-cover w-full h-full shadow-md"
        />
      </div>

      {/* Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Sobre mí"
      >
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
