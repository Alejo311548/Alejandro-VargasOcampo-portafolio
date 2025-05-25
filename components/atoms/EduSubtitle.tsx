
interface EduSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function EduSubtitle({ children, className = '' }: EduSubtitleProps) {
  return (
    <span className={`text-sm text-yellow-500 font-semibold ${className}`}>
      {children}
    </span>
  );
}
