interface IconBoxProps {
  icon: React.ReactNode;   // Ícono o elemento React que se mostrará dentro del contenedor
  className?: string;      // Clases CSS opcionales para personalizar el estilo del contenedor
}

export default function IconBox({ icon, className = '' }: IconBoxProps) {
  return (
    <div
      // Color amarillo, tamaño de texto muy grande y margen inferior para separación,
      // con clases adicionales opcionales para personalización
      className={`text-yellow-500 text-4xl mb-4 ${className}`}
    >
      {icon}  // Renderiza el ícono pasado como prop
    </div>
  );
}
