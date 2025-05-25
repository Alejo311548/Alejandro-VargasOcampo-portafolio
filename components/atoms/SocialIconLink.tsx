
import { IconType } from 'react-icons';

interface SocialIconLinkProps {
  icon: IconType;
  href: string;
}

export default function SocialIconLink({ icon: Icon, href }: SocialIconLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-xl">
      <Icon />
    </a>
  );
}
