interface LearnMoreButtonProps {
  onClick: () => void;      // Función que se ejecuta al hacer clic en el botón
  className?: string;       // Clases CSS opcionales para personalizar el estilo del botón
}

export default function LearnMoreButton({ onClick, className = '' }: LearnMoreButtonProps) {
  return (
    <button
      onClick={onClick}  // Evento click que ejecuta la función pasada como prop
      // Estilos con margen superior, fondo amarillo con efecto hover, texto blanco,
      // fuente seminegrita, padding y bordes redondeados, más clases opcionales
      className={`mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded ${className}`}
    >
      Saber más  // Texto fijo que se muestra en el botón
    </button>
  );
}
