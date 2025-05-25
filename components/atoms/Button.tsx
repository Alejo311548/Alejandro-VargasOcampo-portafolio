interface ButtonProps {
  children: React.ReactNode;   // Contenido que se renderizará dentro del botón (texto, íconos, etc.)
  onClick?: () => void;        // Función opcional que se ejecuta al hacer clic en el botón
  className?: string;          // Clases CSS opcionales para personalizar el estilo del botón
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}  // Evento click que ejecuta la función pasada como prop
      // Clases CSS para el diseño visual del botón y efectos al pasar el mouse, más clases adicionales opcionales
      className={`bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition ${className}`}
    >
      {children}  // Renderiza el contenido dentro del botón
    </button>
  );
}
