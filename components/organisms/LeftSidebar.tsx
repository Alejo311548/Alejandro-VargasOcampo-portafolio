// Importa los componentes atómicos necesarios para construir la barra lateral
import SidebarTitle from '../atoms/SidebarTitle';
import SidebarItem from '../atoms/SidebarItem';
import SidebarProgress from '../atoms/SidebarProgress';

// Componente funcional que representa la barra lateral izquierda
export default function LeftSidebar() {
  return (
    // Etiqueta <aside> que representa una sección secundaria fija a la izquierda, solo visible en pantallas medianas en adelante
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 overflow-y-auto hidden md:block">
      
      {/* Contenedor superior con imagen de perfil y datos personales */}
      <div className="flex flex-col items-center mb-8">
        {/* Imagen del usuario con estilo redondeado y borde amarillo */}
        <img src="/foto.png" className="w-24 h-24 rounded-full mb-3 border-2 border-yellow-400" alt="Foto" />
        
        {/* Nombre del usuario centrado y con tipografía destacada */}
        <h2 className="text-lg font-semibold text-white text-center">Alejandro Vargas</h2>
        
        {/* Descripción corta del usuario en texto gris y centrado */}
        <p className="text-sm text-gray-400 text-center">Ingeniero Químico | M.Sc. Química</p>
      </div>

      {/* Contenedor general de secciones, con espacio vertical entre ellas */}
      <div className="space-y-4">

        {/* Sección de contacto */}
        <div>
          <SidebarTitle>Contacto</SidebarTitle>
          <SidebarItem>Pereira, Colombia</SidebarItem>
          <SidebarItem>+57 304 389 6186</SidebarItem>
          <SidebarItem>alejandro.vargaso@udea.edu.co</SidebarItem>
        </div>

        {/* Sección de idiomas con barras de progreso */}
        <div>
          <SidebarTitle>Idiomas</SidebarTitle>
          <SidebarProgress label="Español" percent={100} />
          <SidebarProgress label="Inglés" percent={80} />
        </div>

        {/* Sección de lenguajes de programación con barras de progreso */}
        <div>
          <SidebarTitle>Lenguajes</SidebarTitle>
          <SidebarProgress label="JavaScript" percent={90} />
          <SidebarProgress label="Java" percent={85} />
          <SidebarProgress label="Python" percent={60} />
          <SidebarProgress label="PHP" percent={90} />
        </div>

        {/* Sección de habilidades adicionales */}
        <div>
          <SidebarTitle>Habilidades Extra</SidebarTitle>
          <SidebarItem>Trabajo en equipo</SidebarItem>
          <SidebarItem>Liderazgo</SidebarItem>
          <SidebarItem>Comunicación</SidebarItem>
          <SidebarItem>Pensamiento analítico</SidebarItem>
          <SidebarItem>Gestión de proyectos</SidebarItem>
          <SidebarItem>Adaptabilidad tecnológica</SidebarItem>
          <SidebarItem>Atención al detalle</SidebarItem>
        </div>

      </div>
    </aside>
  );
}
