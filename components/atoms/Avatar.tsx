import Image from 'next/image';

interface AvatarProps {
  src: string;           // URL o ruta de la imagen del avatar
  alt: string;           // Texto alternativo para accesibilidad y SEO
  size?: number;         // Tamaño opcional (ancho y alto) del avatar en píxeles, por defecto 300
  className?: string;    // Clases CSS adicionales opcionales para personalizar el contenedor
}

export default function Avatar({ src, alt, size = 300, className = '' }: AvatarProps) {
  return (
    <div
      // Contenedor con tamaño fijo basado en la prop 'size' y clases CSS combinadas
      style={{ width: size, height: size }}
      className={`relative ${className}`}
    >
      <Image
        src={src}               // Fuente de la imagen
        alt={alt}               // Texto alternativo para la imagen
        fill                    // Prop de Next.js para que la imagen llene el contenedor padre
        className="object-cover rounded-2xl shadow-xl"  // Estilos para ajustar la imagen (recorte, bordes redondeados y sombra)
      />
    </div>
  );
}
