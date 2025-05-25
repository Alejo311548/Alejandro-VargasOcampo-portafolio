// components/organisms/EducationSection.tsx
import EducationCard from '../molecules/EducationCard';

const educationData = [
  {
    institution: 'Servicio Nacional de Aprendizaje - SENA',
    subtitle: 'Tecnología en Análisis y Desarrollo de Software',
    description: 'Formación técnica en diseño, desarrollo y mantenimiento de sistemas de software aplicando metodologías ágiles.',
  },
  {
    institution: 'Universidad de Caldas',
    subtitle: 'Licenciatura en Biología y Química',
    description: 'Enfoque en docencia de ciencias naturales, formación pedagógica e investigación científica.',
  },
  {
    institution: 'Universidad Nacional de Colombia',
    subtitle: 'Ingeniería Química',
    description: 'Diseño y optimización de procesos químicos e industriales, con sólida base en termodinámica, operaciones unitarias y simulación.',
  },
  {
    institution: 'Universidad de Caldas',
    subtitle: 'Maestría en Química',
    description: 'Investigación en química aplicada, síntesis orgánica, análisis instrumental y publicación científica.',
  },
];

const currentStudies = [
  {
    institution: 'Universidad de Antioquia',
    subtitle: 'Ingeniería de Sistemas (En curso)',
    description: 'Desarrollo de software, arquitectura de sistemas, inteligencia artificial y bases de datos avanzadas.',
  },
  {
    institution: 'Universidad Tecnológica de Pereira',
    subtitle: 'Doctorado en Ciencias - Química (En curso)',
    description:
      'Investigación interdisciplinar centrada en la predicción de actividades biológicas como actividad antiinflamatoria, antitumoral, antimicrobiana y antioxidante de extractos de plantas mediante algoritmos de aprendizaje automático (Machine Learning). Aplicación de modelos computacionales para acelerar la selección de compuestos bioactivos con potencial farmacológico.',
  },
];

export default function EducationSection() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Educación</h2>

      <h3 className="text-xl font-semibold text-gray-700 mb-6">Estudios Realizados</h3>
      <div className="flex flex-col gap-6 items-center mb-12">
        {educationData.map((item, index) => (
          <EducationCard
            key={`done-${index}`}
            institution={item.institution}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-6">Estudios en Curso</h3>
      <div className="flex flex-col gap-6 items-center">
        {currentStudies.map((item, index) => (
          <EducationCard
            key={`current-${index}`}
            institution={item.institution}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
