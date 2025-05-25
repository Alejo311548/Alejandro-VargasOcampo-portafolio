export default function SidebarTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      // Título del sidebar con tamaño mediano, fuente seminegrita, color blanco,
      // margen superior y margen inferior para separación
      className="text-md font-semibold text-white mt-4 mb-1"
    >
      {children}  
    </h3>
  );
}
