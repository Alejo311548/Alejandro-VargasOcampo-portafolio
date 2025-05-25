interface PortfolioImageProps {
  src: string;   // URL o ruta de la imagen que se mostrará
  alt: string;   // Texto alternativo para accesibilidad y SEO
}

export default function PortfolioImage({ src, alt }: PortfolioImageProps) {
  return (
    <div
      // Contenedor con altura fija, ancho completo, fondo blanco, bordes redondeados en la parte superior,
      // ocultación de contenido que desborde, y centrado flexbox del contenido (imagen)
      className="h-48 w-full bg-white rounded-t-xl overflow-hidden flex items-center justify-center"
    >
      <img
        src={src}      // Fuente de la imagen
        alt={alt}      // Texto alternativo de la imagen
        // Imagen contenida dentro del contenedor, manteniendo proporción, altura completa y ancho automático
        className="object-contain h-full w-auto"
      />
    </div>
  );
}
