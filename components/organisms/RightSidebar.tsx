
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialIconLink from '../atoms/SocialIconLink';

export default function RightSidebar() {
  return (
    <aside className="fixed top-0 right-0 h-full w-16 bg-gray-900 flex flex-col items-center justify-center space-y-6 hidden md:flex">
      <SocialIconLink icon={FaGithub} href="https://github.com/Alejo311548" />
      <SocialIconLink icon={FaLinkedin} href="https://www.linkedin.com/in/alejandro-vargas-ocampo-b36132324/" />
      
    </aside>
  );
}
