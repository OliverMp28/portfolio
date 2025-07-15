import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, 
    // FaExternalLinkAlt 
} from "react-icons/fa";
import PropTypes from 'prop-types';

const experienceData = [
  {
    role: "Programador Web",
    company: "Creative Quality",
    location: "Granada, España",
    period: "Marzo 2024 - Julio 2025",
    duration: "1 año 4 meses",
    description:
      "Participación activa en el ciclo completo de desarrollo de software, evolucionando desde un rol inicial de prácticas hasta asumir responsabilidades como p3rogramador junior en proyectos clave.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "Docker", "CSS3"],
    achievements: [
      "Contribuí al desarrollo y mantenimiento de aplicaciones web para clientes.",
      "Asumí gradualmente mayores responsabilidades en el análisis y desarrollo de nuevas funcionalidades.",
      "Mejoré mis habilidades en la resolución de problemas y en el trabajo con bases de datos relacionales."
    ],
    type: "Tiempo completo",
  },
  {
    role: "Desarrollador WordPress",
    company: "Trabajo Independiente",
    location: "Remoto",
    period: "Septiembre 2024 - Octubre 2024",
    duration: "2 meses",
    description:
      "Creación de sitios web para clientes utilizando WordPress. Esta experiencia me permitió aplicar mis conocimientos de forma práctica y gestionar proyectos de manera autónoma.",
    technologies: ["WordPress", "WooCommerce", "Plugins"],
    achievements: [
      "Desarrollé sitios web funcionales y personalizados.",
      "Adquirí experiencia en la personalización de temas y en el uso de plugins.",
      "Participé en reuniones con clientes para definir requisitos y entregar soluciones."
    ],
    type: "Freelance",
    hasProjectsToShow: true,
  },
];

const Experience = ({ onSelectTech, selectedTech }) => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="experiencia" className="py-16 bg-white dark:bg-gray-900 scroll-reveal">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Experiencia Profesional</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria en el desarrollo web y los proyectos que han marcado mi crecimiento profesional
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical - oculta en móvil */}
          <div className="hidden md:block absolute left-1/2 w-px h-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {experienceData.map((job, index) => (
            <div key={index} className="relative mb-8 md:mb-12 last:mb-0">
              {/* Punto de timeline - solo desktop */}
              <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Card container */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                  {/* Header del trabajo */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                        {job.role}
                      </h3>
                      <span
                        className={`ml-3 px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                          job.type === "Freelance"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        }`}
                      >
                        {job.type}
                      </span>
                    </div>

                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{job.company}</p>

                    {/* Info de tiempo y ubicación */}
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{job.period}</span>
                        <span className="text-gray-400">• {job.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">{job.description}</p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        onClick={() => onSelectTech(selectedTech === tech ? null : tech)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full border shadow-sm transition-all duration-200 cursor-pointer ${selectedTech === tech ? 'bg-blue-600 text-white border-blue-700 scale-105' : 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón expandir */}
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    {expandedCard === index ? "Ocultar detalles" : "Ver logros principales"}
                    <span
                      className={`transform transition-transform duration-200 ${expandedCard === index ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Logros expandibles */}
                  {expandedCard === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Botón de proyectos relacionados para freelance */}
                  {job.hasProjectsToShow && (
                    <div className="mt-4">
                      <a 
                        href="#proyectos" 
                        onClick={() => onSelectTech('WordPress')}
                        className="group inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
                      >
                        {/* <FaExternalLinkAlt className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" /> */}
                        Ver proyectos relacionados
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen simple */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">2+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Años</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">20+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Proyectos</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">8+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Tecnologías</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

Experience.propTypes = {
  onSelectTech: PropTypes.func.isRequired,
  selectedTech: PropTypes.string
};

export default Experience
