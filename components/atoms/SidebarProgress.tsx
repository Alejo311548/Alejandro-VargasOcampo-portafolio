interface SidebarProgressProps {
  label: string;    // Etiqueta descriptiva para la barra de progreso
  percent: number;  // Porcentaje que indica el progreso (0 a 100)
}

export default function SidebarProgress({ label, percent }: SidebarProgressProps) {
  return (
    <div className="mb-2">
      <p className="text-sm text-gray-300">{label}</p> {/* Texto descriptivo del progreso */}
      <div
        // Barra de fondo gris que actúa como contenedor de la barra de progreso
        className="w-full bg-gray-600 h-2 rounded"
      >
        <div
          // Barra amarilla que indica visualmente el progreso, con ancho dinámico según el porcentaje
          className="bg-yellow-400 h-2 rounded"
          style={{ width: `${percent}%` }}  // Ancho proporcional al porcentaje de progreso
        ></div>
      </div>
    </div>
  );
}
