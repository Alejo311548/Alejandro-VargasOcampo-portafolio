
interface LearnMoreButtonProps {
  onClick: () => void;
  className?: string;
}

export default function LearnMoreButton({ onClick, className = '' }: LearnMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded ${className}`}
    >
      Saber más
    </button>
  );
}
