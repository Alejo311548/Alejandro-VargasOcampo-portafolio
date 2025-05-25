// Importa iconos de redes sociales desde la librería react-icons (GitHub, LinkedIn)
import { FaGithub, FaLinkedin} from 'react-icons/fa';

// Importa un componente atómico que renderiza un enlace con un icono social
import SocialIconLink from '../atoms/SocialIconLink';

// Componente funcional que representa la barra lateral derecha fija
export default function RightSidebar() {
  return (
    // Contenedor <aside> fijo en la esquina superior derecha, altura completa y ancho fijo de 16 unidades,
    // con fondo gris oscuro, diseño flexible en columna, centrado vertical y horizontalmente,
    // espacio entre íconos, oculto en pantallas pequeñas y visible en medianas en adelante
    <aside className="fixed top-0 right-0 h-full w-16 bg-gray-900 flex flex-col items-center justify-center space-y-6 hidden md:flex">
      
      {/* Enlace con icono de GitHub apuntando al perfil de Alejandro */}
      <SocialIconLink icon={FaGithub} href="https://github.com/Alejo311548" />
      
      {/* Enlace con icono de LinkedIn apuntando al perfil de Alejandro */}
      <SocialIconLink icon={FaLinkedin} href="https://www.linkedin.com/in/alejandro-vargas-ocampo-b36132324/" />
      
      
    </aside>
  );
}
