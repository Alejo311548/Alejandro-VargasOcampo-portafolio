interface ModalProps {
  isOpen: boolean;            // Indica si el modal debe mostrarse o no
  onClose: () => void;        // Función que se ejecuta al cerrar el modal
  title: string;              // Título que se muestra en la parte superior del modal
  children: React.ReactNode;  // Contenido principal del modal
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;  // Si el modal no está abierto, no se renderiza nada

  return (
    <div
      // Fondo semitransparente negro, cubre toda la pantalla, centra el contenido,
      // y se sitúa por encima del resto del contenido gracias al z-index
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        // Contenedor del modal: fondo blanco, padding, bordes redondeados,
        // ancho máximo y posición relativa para colocar el botón de cierre
        className="bg-white p-8 rounded-xl max-w-lg relative"
      >
        <button
          onClick={onClose}  // Al hacer clic, se ejecuta la función para cerrar el modal
          // Botón de cierre (X) en la esquina superior derecha con estilo y efecto hover
          className="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>  {/* Muestra el título del modal */}
        <div>{children}</div>  {/* Renderiza el contenido pasado como hijos */}
      </div>
    </div>
  );
}
