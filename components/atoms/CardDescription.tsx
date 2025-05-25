interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-sm text-gray-600 ${className}`}>
      {children}
    </p>
  );
}
