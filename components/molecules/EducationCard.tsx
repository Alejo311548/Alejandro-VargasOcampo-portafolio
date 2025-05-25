
import EduTitle from '../atoms/Edutitle';
import EduSubtitle from '../atoms/EduSubtitle';
import EduDescription from '../atoms/EduDescription';

interface EducationCardProps {
  institution: string;
  subtitle: string;
  description: string;
}

export default function EducationCard({ institution, subtitle, description }: EducationCardProps) {
  return (
    <div className="bg-white shadow rounded-xl p-6 w-full max-w-2xl">
      <EduTitle>{institution}</EduTitle>
      <EduSubtitle>{subtitle}</EduSubtitle>
      <EduDescription>{description}</EduDescription>
    </div>
  );
}
