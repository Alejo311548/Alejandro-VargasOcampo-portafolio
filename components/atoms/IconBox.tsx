
interface IconBoxProps {
  icon: React.ReactNode;
  className?: string;
}

export default function IconBox({ icon, className = '' }: IconBoxProps) {
  return (
    <div className={`text-yellow-500 text-4xl mb-4 ${className}`}>
      {icon}
    </div>
  );
}
