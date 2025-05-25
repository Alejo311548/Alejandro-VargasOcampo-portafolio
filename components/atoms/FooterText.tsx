interface FooterTextProps {
  children: React.ReactNode;   // Contenido que se mostrará dentro del párrafo (texto o elementos React)
  className?: string;          // Clases CSS opcionales para personalizar el estilo del texto del footer
}

export default function FooterText({ children, className = '' }: FooterTextProps) {
  return (
    <p
      // Texto pequeño, color gris claro, centrado y con clases adicionales opcionales para personalización
      className={`text-sm text-gray-400 text-center ${className}`}
    >
      {children}  // Renderiza el contenido pasado como hijos
    </p>
  );
}
