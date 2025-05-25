import PortfolioImage from '../atoms/PortfolioImage';
import PortfolioTitle from '../atoms/PortfolioTitle';
import PortfolioDescription from '../atoms/PortfolioDescription';
import LearnMoreButton from '../atoms/LearnMoreButton';

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  onLearnMore: () => void;
}

export default function PortfolioCard({
  image,
  title,
  description,
  onLearnMore,
}: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md w-80 min-h-[400px] flex flex-col justify-between flex-shrink-0">
      <PortfolioImage src={image} alt={title} />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <PortfolioTitle>{title}</PortfolioTitle>
          <PortfolioDescription>{description}</PortfolioDescription>
        </div>
        <div className="mt-4">
          <LearnMoreButton onClick={onLearnMore} />
        </div>
      </div>
    </div>
  );
}
