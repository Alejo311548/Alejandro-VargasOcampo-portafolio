interface EduDescriptionProps {
  children: React.ReactNode;   // Contenido que se mostrará dentro del párrafo (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del párrafo
}

export default function EduDescription({ children, className = '' }: EduDescriptionProps) {
  return (
    <p 
      // Texto pequeño, color gris, margen superior para separación y clases adicionales opcionales
      className={`text-sm text-gray-600 mt-2 ${className}`}
    >
      {children}  
    </p>
  );
}
