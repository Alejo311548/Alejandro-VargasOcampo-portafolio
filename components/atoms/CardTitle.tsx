interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold text-gray-800 ${className}`}>
      {children}
    </h3>
  );
}
