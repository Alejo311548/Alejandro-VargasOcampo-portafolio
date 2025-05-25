// Importa el componente FooterText desde la carpeta de átomos
import FooterText from '../atoms/FooterText';

// Define el componente FooterSection que representa el pie de página del sitio
export default function FooterSection() {
  return (
    // Etiqueta <footer> con fondo gris oscuro, padding vertical y un margen superior
    <footer className="bg-gray-800 py-6 mt-10">
      {/* Componente reutilizable de texto de pie de página */}
      <FooterText>
        {/* Se muestra el año actual dinámicamente seguido del nombre y un mensaje de derechos reservados */}
        &copy; {new Date().getFullYear()} Alejandro Vargas Ocampo. Todos los derechos reservados.
      </FooterText>
    </footer>
  );
}
