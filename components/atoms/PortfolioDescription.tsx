
interface PortfolioDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PortfolioDescription({ children, className = '' }: PortfolioDescriptionProps) {
  return (
    <p className={`text-sm text-gray-600 ${className}`}>
      {children}
    </p>
  );
}
