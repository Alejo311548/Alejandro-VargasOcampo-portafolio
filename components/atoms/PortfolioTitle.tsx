
interface PortfolioTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function PortfolioTitle({ children, className = '' }: PortfolioTitleProps) {
  return (
    <h3 className={`text-lg font-semibold text-gray-800 ${className}`}>
      {children}
    </h3>
  );
}
