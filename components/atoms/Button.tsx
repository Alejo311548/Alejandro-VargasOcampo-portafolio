
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition ${className}`}
    >
      {children}
    </button>
  );
}
