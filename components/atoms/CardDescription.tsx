interface CardDescriptionProps {
  children: React.ReactNode;   // Contenido que se mostrará dentro del párrafo (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del párrafo
}

export default function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p 
      // Texto pequeño y color gris, con clases adicionales opcionales para personalización
      className={`text-sm text-gray-600 ${className}`}
    >
      {children}  // Renderiza el contenido pasado como hijos
    </p>
  );
}
