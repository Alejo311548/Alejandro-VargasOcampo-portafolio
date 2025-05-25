export default function SidebarItem({ children }: { children: React.ReactNode }) {
  return (
    <p
      // Texto pequeño y color gris claro para los ítems del sidebar
      className="text-sm text-gray-300"
    >
      {children}  // Renderiza el contenido pasado como hijos
    </p>
  );
}
