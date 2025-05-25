import PortfolioImage from '../atoms/PortfolioImage';           // Componente para mostrar la imagen del proyecto
import PortfolioTitle from '../atoms/PortfolioTitle';           // Componente para mostrar el título del proyecto
import PortfolioDescription from '../atoms/PortfolioDescription'; // Componente para mostrar la descripción del proyecto
import LearnMoreButton from '../atoms/LearnMoreButton';         // Botón para acceder a más información

interface PortfolioCardProps {
  image: string;              // URL de la imagen del proyecto
  title: string;              // Título del proyecto
  description: string;        // Descripción breve del proyecto
  onLearnMore: () => void;    // Función que se ejecuta al hacer clic en "Saber más"
}

export default function PortfolioCard({
  image,
  title,
  description,
  onLearnMore,
}: PortfolioCardProps) {
  return (
    <div
      // Tarjeta con fondo blanco, bordes redondeados, sombra, ancho fijo,
      // altura mínima y diseño flexible para distribuir los elementos verticalmente
      className="bg-white rounded-xl shadow-md w-80 min-h-[400px] flex flex-col justify-between flex-shrink-0"
    >
      <PortfolioImage src={image} alt={title} /> {/* Muestra la imagen del proyecto */}

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <PortfolioTitle>{title}</PortfolioTitle>         {/* Muestra el título del proyecto */}
          <PortfolioDescription>{description}</PortfolioDescription> {/* Muestra una breve descripción */}
        </div>

        <div className="mt-4">
          <LearnMoreButton onClick={onLearnMore} />        {/* Botón para ver más información */}
        </div>
      </div>
    </div>
  );
}
