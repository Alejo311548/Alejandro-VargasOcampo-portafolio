interface EduSubtitleProps {
  children: React.ReactNode;   // Contenido que se mostrará dentro del span (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del subtítulo
}

export default function EduSubtitle({ children, className = '' }: EduSubtitleProps) {
  return (
    <span 
      // Texto pequeño, color amarillo, fuente seminegrita y clases adicionales opcionales para personalización
      className={`text-sm text-yellow-500 font-semibold ${className}`}
    >
      {children}  
    </span>
  );
}
