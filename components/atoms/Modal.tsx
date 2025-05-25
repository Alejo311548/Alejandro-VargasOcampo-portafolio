interface ModalProps {
  title: string;             // Título que se mostrará en la cabecera del modal
  content: React.ReactNode;  // Contenido del modal, puede ser cualquier elemento React
  onClose: () => void;       // Función que se ejecuta al cerrar el modal (clic en el botón de cerrar)
}

export default function Modal({ title, content, onClose }: ModalProps) {
  return (
    <div
      // Fondo semi-transparente que cubre toda la pantalla, con posicionamiento fijo y
      // centrado del contenido del modal, además de un z-index alto para estar encima
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        // Contenedor del modal con fondo blanco, padding, bordes redondeados,
        // ancho máximo y adaptable al 100% del contenedor padre
        className="bg-white p-6 rounded-xl max-w-md w-full"
      >
        <div
          // Cabecera del modal con título y botón de cierre alineados en extremos,
          // con margen inferior para separar del contenido
          className="flex justify-between items-center mb-4"
        >
          <h2 className="text-xl font-bold text-gray-800">{title}</h2> {/* Título del modal */}
          <button
            onClick={onClose}                // Cierra el modal al hacer clic
            className="text-gray-600 text-xl font-bold"
          >
            &times;                         {/* Símbolo de cierre (×) */}
          </button>
        </div>
        <div>{content}</div> {/* Contenido dinámico del modal */}
      </div>
    </div>
  );
}
