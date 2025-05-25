import IconBox from '../atoms/IconBox';               // Componente para mostrar el ícono en la parte superior
import CardTitle from '../atoms/CardTitle';           // Componente para mostrar el título de la tarjeta
import CardDescription from '../atoms/CardDescription'; // Componente para mostrar una breve descripción

interface KnowledgeCardProps {
  icon: React.ReactNode;  // Ícono representativo del conocimiento o habilidad
  title: string;          // Título del conocimiento o área
  description: string;    // Breve descripción del contenido o habilidad
}

export default function KnowledgeCard({ icon, title, description }: KnowledgeCardProps) {
  return (
    <div
      // Tarjeta con fondo blanco, sombra, bordes redondeados, padding,
      // centrado de texto, ancho completo y ancho máximo limitado
      className="bg-white shadow rounded-xl p-6 text-center w-full max-w-xs"
    >
      <IconBox icon={icon} />                   {/* Muestra el ícono en un contenedor estilizado */}
      <CardTitle>{title}</CardTitle>            {/* Muestra el título del conocimiento */}
      <CardDescription>{description}</CardDescription>  {/* Muestra una breve descripción */}
    </div>
  );
}
