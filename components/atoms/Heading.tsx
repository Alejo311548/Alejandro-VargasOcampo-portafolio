interface HeadingProps {
  children: React.ReactNode;   // Contenido que se mostrará dentro del encabezado (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del encabezado
}

export default function Heading({ children, className = '' }: HeadingProps) {
  return (
    <h1
      // Estilo de encabezado principal: tamaño muy grande, fuente en negrita y color gris muy oscuro,
      // con clases adicionales opcionales para personalización
      className={`text-3xl font-bold text-gray-900 ${className}`}
    >
      {children}  
    </h1>
  );
}
