import EduTitle from '../atoms/Edutitle';         // Componente para mostrar el nombre de la institución
import EduSubtitle from '../atoms/EduSubtitle';   // Componente para mostrar el subtítulo (ej. título obtenido)
import EduDescription from '../atoms/EduDescription'; // Componente para mostrar una descripción o detalle

interface EducationCardProps {
  institution: string;   // Nombre de la institución educativa
  subtitle: string;      // Título o carrera cursada
  description: string;   // Descripción adicional o detalles del estudio
}

export default function EducationCard({ institution, subtitle, description }: EducationCardProps) {
  return (
    <div
      // Tarjeta con fondo blanco, sombra, bordes redondeados, padding interno,
      // ancho completo y un máximo de ancho definido
      className="bg-white shadow rounded-xl p-6 w-full max-w-2xl"
    >
      <EduTitle>{institution}</EduTitle>         {/* Muestra el nombre de la institución */}
      <EduSubtitle>{subtitle}</EduSubtitle>      {/* Muestra el título o grado académico */}
      <EduDescription>{description}</EduDescription> {/* Muestra una descripción adicional */}
    </div>
  );
}
