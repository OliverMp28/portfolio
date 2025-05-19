import { FaGraduationCap } from "react-icons/fa";
import PropTypes from "prop-types";

const Study = ({ title, institution, year, description }) => (
  <div className="flex items-start mb-8 relative">
    <div className="w-12 h-12 bg-blue-500 dark:bg-blue-700 rounded-full flex items-center justify-center mr-4 shrink-0">
      <FaGraduationCap className="text-white text-xl" />
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{institution}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{year}</p>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>
      )}
    </div>
    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
  </div>
);

Study.propTypes = {
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const Studies = () => {
  const mis_estudios = [
    {
      title: "FPGS Desarrollo de aplicaciones web",
      institution: "Atlantida Cidep, Granada, España",
      year: "2024 - 2025",
      description: "Estudio de grado superior en el desarrollo de software enfocado a la web y las tecnologías que conlleva",
    },
    {
      title: "FPGS Desarrollo de aplicaciones multiplataforma",
      institution: "Atlantida Cidep - Granada, España",
      year: "2022 - 2024",
      description: "Grado superior en el desarrollo enfocado a multiplataforma, desde la base de código y manejo de datos hasta el desarrollo de interfaces",
    },
    {
      title: "Ing. de Sistemas",
      institution: "U.P. San Juan Bautista - Perú",
      year: "2020 - 2022",
      description: "Aquí inicié mi carrera profesional, estuve un par de años muy valiosos en esta universidad en la cual senté las bases y el gusto por el desarrollo de software",
    },
  ];
  

  return (
    <section id="estudios" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-reveal">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Mi Recorrido Académico
        </h2>
        <div className="max-w-3xl mx-auto">
          {mis_estudios.map((study, index) => (
            <Study key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
