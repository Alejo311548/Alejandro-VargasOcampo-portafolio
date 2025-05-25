interface ParagraphProps {
  children: React.ReactNode;   // Contenido que se mostrará dentro del párrafo (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del párrafo
}

export default function Paragraph({ children, className = '' }: ParagraphProps) {
  return (
    <p
      // Texto con color gris medio, con clases adicionales opcionales para personalización
      className={`text-gray-600 ${className}`}
    >
      {children}  
    </p>
  );
}
