interface CardTitleProps {
  children: React.ReactNode;   // Contenido que se mostrará como título (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del título
}

export default function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 
      // Estilo de título: tamaño grande, fuente seminegrita y color gris oscuro, con clases adicionales opcionales
      className={`text-lg font-semibold text-gray-800 ${className}`}
    >
      {children}  // Renderiza el contenido pasado como hijos
    </h3>
  );
}
