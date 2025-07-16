import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, 
    // FaExternalLinkAlt 
} from "react-icons/fa";
import PropTypes from 'prop-types';

const datosExperiencia = [
  {
    puesto: "Programador Web",
    empresa: "Creative Quality",
    ubicacion: "Granada, España",
    periodo: "Marzo 2024 - Julio 2025",
    duracion: "1 año 4 meses",
    descripcion:
      "Participación activa en el ciclo completo de desarrollo de software, evolucionando desde un rol inicial de prácticas hasta asumir responsabilidades como programador junior en proyectos clave.",
    tecnologias: ["PHP", "MySQL", "JavaScript", "jQuery", "Docker", "CSS"],
    logros: [
      "Contribuí al desarrollo y mantenimiento de aplicaciones web para clientes.",
      "Asumí gradualmente mayores responsabilidades en el análisis y desarrollo de nuevas funcionalidades.",
      "Mejoré mis habilidades en la resolución de problemas y en el trabajo con bases de datos relacionales."
    ],
    tipo: "Jornada parcial",
  },
  {
    puesto: "Desarrollador WordPress",
    empresa: "Trabajo Independiente",
    ubicacion: "Remoto",
    periodo: "Septiembre 2024 - Octubre 2024",
    duracion: "2 meses",
    descripcion:
      "Creación de sitios web para clientes utilizando WordPress. Esta experiencia me permitió aplicar mis conocimientos de forma práctica y gestionar proyectos de manera autónoma.",
    tecnologias: ["WordPress", "WooCommerce", "Plugins"],
    logros: [
      "Desarrollé sitios web funcionales y personalizados.",
      "Adquirí experiencia en la personalización de temas y en el uso de plugins.",
      "Participé en reuniones con clientes para definir requisitos y entregar soluciones."
    ],
    tipo: "Freelance",
    tieneProyectos: true,
  },
];

const Experience = ({ onSelectTech }) => {
  const [tarjetaExpandida, setTarjetaExpandida] = useState(null)

  const alternarExpansion = (indice) => {
    setTarjetaExpandida(tarjetaExpandida === indice ? null : indice)
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

          {datosExperiencia.map((trabajo, indice) => (
            <div key={indice} className="relative mb-8 md:mb-12 last:mb-0">
              {/* Punto de timeline - solo desktop */}
              <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Card container */}
              <div className={`md:w-1/2 ${indice % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                  {/* Header del trabajo */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white leading-tight">
                        {trabajo.puesto}
                      </h3>
                      <span
                        className={`ml-3 px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                          trabajo.tipo === "Freelance"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        }`}
                      >
                        {trabajo.tipo}
                      </span>
                    </div>

                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{trabajo.empresa}</p>

                    {/* Info de tiempo y ubicación */}
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{trabajo.periodo}</span>
                        <span className="text-gray-400">• {trabajo.duracion}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>{trabajo.ubicacion}</span>
                      </div>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">{trabajo.descripcion}</p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trabajo.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-full border shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón expandir */}
                  <button
                    onClick={() => alternarExpansion(indice)}
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    {tarjetaExpandida === indice ? "Ocultar detalles" : "Ver logros principales"}
                    <span
                      className={`transform transition-transform duration-200 ${tarjetaExpandida === indice ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Logros expandibles */}
                  {tarjetaExpandida === indice && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <ul className="space-y-2">
                        {trabajo.logros.map((logro, logroIndice) => (
                          <li
                            key={logroIndice}
                            className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed">{logro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Botón de proyectos relacionados para freelance */}
                  {trabajo.tieneProyectos && (
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
  onSelectTech: PropTypes.func.isRequired
};

export default Experience
