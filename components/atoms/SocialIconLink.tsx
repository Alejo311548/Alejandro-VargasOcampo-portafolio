import { IconType } from 'react-icons';

interface SocialIconLinkProps {
  icon: IconType;   // Componente de ícono importado desde react-icons
  href: string;     // URL al que dirigirá el enlace al hacer clic
}

export default function SocialIconLink({ icon: Icon, href }: SocialIconLinkProps) {
  return (
    <a
      href={href}                      // Dirección del enlace
      target="_blank"                  // Abre el enlace en una nueva pestaña
      rel="noopener noreferrer"       // Mejora seguridad y rendimiento al abrir en nueva pestaña
      // Estilo: texto blanco, cambia a amarillo al pasar el cursor, tamaño de texto grande
      className="text-white hover:text-yellow-400 text-xl"
    >
      <Icon />  {/* Renderiza el ícono pasado como componente */}
    </a>
  );
}
