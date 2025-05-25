
interface EduDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function EduDescription({ children, className = '' }: EduDescriptionProps) {
  return (
    <p className={`text-sm text-gray-600 mt-2 ${className}`}>
      {children}
    </p>
  );
}
