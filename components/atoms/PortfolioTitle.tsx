interface PortfolioTitleProps {
  children: React.ReactNode;   // Contenido que se mostrará como título (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del título
}

export default function PortfolioTitle({ children, className = '' }: PortfolioTitleProps) {
  return (
    <h3
      // Estilo de título: tamaño grande, fuente seminegrita y color gris oscuro,
      // con clases adicionales opcionales para personalización
      className={`text-lg font-semibold text-gray-800 ${className}`}
    >
      {children}  
    </h3>
  );
}
