
interface EduTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function EduTitle({ children, className = '' }: EduTitleProps) {
  return (
    <h3 className={`text-lg font-bold text-gray-800 ${className}`}>
      {children}
    </h3>
  );
}
