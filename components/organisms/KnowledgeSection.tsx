// Importa el componente de tarjeta de conocimiento desde la carpeta de moléculas
import KnowledgeCard from '../molecules/KnowledgeCard';

// Importa iconos desde react-icons/fi (Feather Icons)
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiShield, 
  FiGitBranch, 
  FiTerminal,
  FiActivity,
  FiShoppingCart,
  FiPackage
} from 'react-icons/fi';

// Define un array de objetos que representan cada habilidad técnica
const knowledgeData = [
  {
    icon: <FiCode className="text-yellow-500" size={28} />,  // Icono + color + tamaño
    title: 'Desarrollo Back-end',
    description: 'Spring Boot, Laravel, Django, Node.js, APIs REST, GraphQL, JWT',
  },
  {
    icon: <FiDatabase className="text-blue-500" size={28} />,
    title: 'Bases de Datos',
    description: 'PostgreSQL, MySQL, MongoDB',
  },
  {
    icon: <FiServer className="text-purple-500" size={28} />,
    title: 'Arquitectura de Sistemas',
    description: 'Monolitos modulares, Microservicios, Docker, Clean Architecture',
  },
  {
    icon: <FiShield className="text-red-500" size={28} />,
    title: 'Seguridad',
    description: 'JWT, Roles, Validación CORS, OAuth (básico)',
  },
  {
    icon: <FiGitBranch className="text-green-600" size={28} />,
    title: 'DevOps & Calidad',
    description: 'GitHub Actions, SonarCloud, Gatling, CI/CD',
  },
  {
    icon: <FiTerminal className="text-gray-700" size={28} />,
    title: 'Lenguajes',
    description: 'Java, PHP, Python, JavaScript, TypeScript',
  },
  {
    icon: <FiPackage className="text-pink-500" size={28} />,
    title: 'ERP para Cosmética',
    description: 'Sistemas adaptados a normativas INVIMA, trazabilidad, control de calidad',
  },
  {
    icon: <FiShoppingCart className="text-emerald-600" size={28} />,
    title: 'E-commerce Inteligente',
    description: 'Modelos de IA para recomendaciones y comportamiento de compra',
  },
  {
    icon: <FiActivity className="text-indigo-500" size={28} />,
    title: 'Machine Learning Aplicado',
    description: 'Predicción de propiedades bioactivas en plantas con modelos de ML',
  },
];

// Componente principal que renderiza la sección de conocimientos técnicos
export default function KnowledgeSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      {/* Título principal de la sección */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Conocimientos Técnicos</h2>

      {/* Contenedor flexible para alinear las tarjetas de conocimiento */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {knowledgeData.map((item, index) => (
          <KnowledgeCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
