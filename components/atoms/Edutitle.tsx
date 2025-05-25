interface EduTitleProps {
  children: React.ReactNode;   // Contenido que se mostrará como título (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del título
}

export default function EduTitle({ children, className = '' }: EduTitleProps) {
  return (
    <h3 
      // Estilo de título: tamaño grande, fuente en negrita y color gris oscuro, con clases adicionales opcionales
      className={`text-lg font-bold text-gray-800 ${className}`}
    >
      {children}  // Renderiza el contenido pasado como hijos
    </h3>
  );
}
