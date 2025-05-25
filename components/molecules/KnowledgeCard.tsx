
import IconBox from '../atoms/IconBox';
import CardTitle from '../atoms/CardTitle';
import CardDescription from '../atoms/CardDescription';

interface KnowledgeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function KnowledgeCard({ icon, title, description }: KnowledgeCardProps) {
  return (
    <div className="bg-white shadow rounded-xl p-6 text-center w-full max-w-xs">
      <IconBox icon={icon} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </div>
  );
}
