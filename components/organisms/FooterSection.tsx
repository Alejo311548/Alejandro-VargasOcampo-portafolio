
import FooterText from '../atoms/FooterText';

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 py-6 mt-10">
      <FooterText>&copy; {new Date().getFullYear()} Alejandro Vargas Ocampo. Todos los derechos reservados.</FooterText>
    </footer>
  );
}
