
import ProfileSection from '@/components/organisms/ProfileSection';
import KnowledgeSection from '@/components/organisms/KnowledgeSection';
import EducationSection from '@/components/organisms/EducationSection';
import PortfolioSection from '@/components/organisms/PortfolioSection';
import FooterSection from '@/components/organisms/FooterSection';
import LeftSidebar from '@/components/organisms/LeftSidebar';
import RightSidebar from '@/components/organisms/RightSidebar';

export default function Home() {
  return (
    <>
      <LeftSidebar />
      <RightSidebar />
      <main className="md:ml-64 md:mr-16 p-6">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <FooterSection />
      </main>
    </>
  );
}
