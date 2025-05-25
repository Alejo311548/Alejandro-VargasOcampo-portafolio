// components/organisms/LeftSidebar.tsx
import SidebarTitle from '../atoms/SidebarTitle';
import SidebarItem from '../atoms/SidebarItem';
import SidebarProgress from '../atoms/SidebarProgress';

export default function LeftSidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 overflow-y-auto hidden md:block">
  <div className="flex flex-col items-center mb-8">
    <img src="/foto.png" className="w-24 h-24 rounded-full mb-3 border-2 border-yellow-400" alt="Foto" />
    <h2 className="text-lg font-semibold text-white text-center">Alejandro Vargas</h2>
    <p className="text-sm text-gray-400 text-center">Ingeniero Químico | M.Sc. Química</p>
    
  </div>

  <div className="space-y-4">
    <div>
      <SidebarTitle>Contacto</SidebarTitle>
      <SidebarItem>Pereira, Colombia</SidebarItem>
      <SidebarItem>+57 304 389 6186</SidebarItem>
      <SidebarItem>alejandro.vargaso@udea.edu.co</SidebarItem>
    </div>

    <div>
      <SidebarTitle>Idiomas</SidebarTitle>
      <SidebarProgress label="Español" percent={100} />
      <SidebarProgress label="Inglés" percent={80} />
    </div>

    <div>
      <SidebarTitle>Lenguajes</SidebarTitle>
      <SidebarProgress label="JavaScript" percent={90} />
      <SidebarProgress label="Java" percent={85} />
      <SidebarProgress label="Python" percent={60} />
      <SidebarProgress label="PHP" percent={90} />
    </div>

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
