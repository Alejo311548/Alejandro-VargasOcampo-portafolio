
interface FooterTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function FooterText({ children, className = '' }: FooterTextProps) {
  return (
    <p className={`text-sm text-gray-400 text-center ${className}`}>
      {children}
    </p>
  );
}
