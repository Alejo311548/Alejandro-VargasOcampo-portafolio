// Importa los componentes de tipo organismo que constituyen las secciones principales de la página
import ProfileSection from '@/components/organisms/ProfileSection';
import KnowledgeSection from '@/components/organisms/KnowledgeSection';
import EducationSection from '@/components/organisms/EducationSection';
import PortfolioSection from '@/components/organisms/PortfolioSection';
import FooterSection from '@/components/organisms/FooterSection';
import LeftSidebar from '@/components/organisms/LeftSidebar';
import RightSidebar from '@/components/organisms/RightSidebar';

// Componente funcional principal que representa la página de inicio
export default function Home() {
  return (
    <>
      {/* Barra lateral izquierda fija */}
      <LeftSidebar />
      
      {/* Barra lateral derecha fija */}
      <RightSidebar />
      
      {/* Contenedor principal con márgenes a los lados para dejar espacio a las barras laterales en pantallas medianas hacia arriba y padding general */}
      <main className="md:ml-64 md:mr-16 p-6">
        
        {/* Sección de perfil personal */}
        <ProfileSection />
        
        {/* Sección de conocimientos o habilidades */}
        <KnowledgeSection />
        
        {/* Sección de educación */}
        <EducationSection />
        
        {/* Sección de portafolio de proyectos */}
        <PortfolioSection />
        
        {/* Sección de pie de página */}
        <FooterSection />
      </main>
    </>
  );
}
