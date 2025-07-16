import { useState } from "react"
import { FaGithub, FaExpandAlt, FaCompressAlt, FaGlobe, FaExternalLinkAlt, FaDownload } from "react-icons/fa"
import { FiAlertCircle } from "react-icons/fi"
import PropTypes from 'prop-types';

const projectsData = [
  {
    id: 1,
    title: "Stellargia",
    description: "App Android sobre el espacio.",
    fullDescription:
      "Esta es una app hecha en Android Studio, fue una app básica a fin de probar el entorno movil, esta app muestra datos curiosos de planetas y constelaciones, ademas de un calculador de tu peso en otros planetas.",
    image: "/img/Stellargia.jpg",
    technologies: ["Android Studio"],
    links: [
      { type: "release", url: "https://drive.google.com/file/d/1g98UHf-8d10PhX9Q9FE6trH8AA9SDMLL/view?usp=drive_link" },
    ],
  },
  {
    id: 2,
    title: "Web tienda de perfumes",
    description: "Tienda básica para venta de perfumes.",
    fullDescription:
      "Esta web fue hecha para un vendedor de perfumes árabes hecha en WordPress",
    image: "/img/webperfumes.png",
    technologies: ["WordPress", "WooCommerce", "Plugins"],
    links: [
      { type: "web", url: "https://esenciadeoriente.com/" },
      // { type: "github", url: "https://github.com/OliverMp28/proyecto_vision" },
    ],
  },
  {
    id: 3,
    title: "Web inmobiliaria",
    description: "Web básica de estilo inmobiliaria.",
    fullDescription:
      "Esta web fue hecha para un agente inmobiliario, ayudandolo a promocionar sus propiedades, está hecha en WordPress y un plugin llamado estatik.",
    image: "/img/websinek.png",
    technologies: ["WordPress", "Plugins"],
    links: [
      { type: "web", url: "https://sinekstate.com/" },
      // { type: "github", url: "https://github.com/OliverMp28/proyecto_vision" },
    ],
  },
  {
    id: 4,
    title: "Daino",
    description: "Juego del dinosaurio",
    fullDescription:
      "Este es el juego del dinosaurio de Google adaptado a la web con HTML, CSS, JS, PHP, MySQL y Git. Fue el primer proyecto que hice por gusto propio y por curiosidad de aprender, desarrollado en mis inicios",
    image: "/img/daino2.png",
    technologies: ["CSS", "JavaScript", "PHP", "MySQL", "Git"],
    links: [
      { type: "github", url: "https://github.com/OliverMp28/olivermppr" },
      { type: "web", url: "https://daino.bernersites.com/" },
    ],
  },
  {
    id: 5,
    title: "Tout Play Cam Detection",
    description: "web de minijuegos con detección de gestos por cámara.",
    fullDescription:
      "Basada en la librería MediaPipe, esta web fue hecha a fin de probar el potencial de la detección por cámara, adaptándola a mover ciertos personajes o controles con los gestos de rostro",
    image: "/img/tout3.png",
    technologies: ["CSS", "Bootstrap", "JavaScript", "jQuery", "PHP", "Mediapipe", "MySQL", "Git"],
    links: [
      { type: "web", url: "https://tout.bernersites.com/" },
      { type: "github", url: "https://github.com/OliverMp28/proyecto_vision" },
    ],
  },
  {
    id: 6,
    title: "Calculadora",
    description: "Calculadora hecha en Java para Windows",
    fullDescription: "Calculadora hecha en Java, este es uno de los proyectos que hice con este lenguaje en 2023. Dispone de un diseño sencillo y funcional ademas de un instalador .exe que tienen disponible para descargar.",
    image: "/img/calculadora.png",
    technologies: ["Java"],
    links: [
      { type: "github", url: "https://github.com/OliverMp28/calculadora-java/tree/main" },
      { type: "release", url: "https://github.com/OliverMp28/calculadora-java/releases/download/descargable/CalculadoraJava.exe" },
    ],
  },
  {
    id: 7,
    title: "Portal Inmobiliario",
    description: "Aplicación web portal inmobiliario (en desarrollo)",
    fullDescription: "Portal inmobiliario con frontend en React/TypeScript y backend en PHP separados mediante API HTTP. Es un proyecto de fin de curso actualmente en desarrollo y pronto disponible.",
    image: "/img/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind", "CSS", "PHP", "Bun", "Git", "MySQL", "Docker"],
    inDevelopment: true,
    links: [
      // { type: "github", url: "#" } // Próximamente
    ],
  }
  // Agrega más proyectos según necesites
]

//esto define el orden de visualización por IDs de proyecto (puedes modificar solo este array)
const ordenProyectos = [2, 5, 4, 3, 1, 6, 7]

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false)
  const isInDevelopment = project.inDevelopment === true

  const getLinkIcon = (type) => {
    switch (type) {
      case "github":
        return <FaGithub />
      case "web":
        return <FaGlobe />
      case "release":
        return <FaDownload />
      default:
        return <FaExternalLinkAlt />
    }
  }

  const getLinkText = (type) => {
    switch (type) {
      case "github":
        return "Repositorio"
      case "web":
        return "Sitio Web"
      case "release":
        return "Descargar"
      default:
        return "Enlace"
    }
  }

  return (
    <div
      className={`group relative flex flex-col ${isInDevelopment ? "bg-gray-100 dark:bg-gray-900 border-2 border-dashed border-yellow-400 dark:border-yellow-600" : "bg-white dark:bg-gray-800"} rounded-xl shadow-lg transition-all duration-500 overflow-hidden`}
    >
      {/* Header con imagen */}
      <div className="relative h-48 overflow-hidden">
        {isInDevelopment && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <span className="text-yellow-300 text-xl font-bold flex items-center gap-2">
              <FiAlertCircle className="animate-pulse" /> En desarrollo
            </span>
          </div>
        )}
        <img
          src={project.image || "/placeholder.svg"}
          alt={`Proyecto ${project.id}`}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isInDevelopment ? "opacity-70 filter dark:brightness-75" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
      </div>

      {/* contenido */}
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4 relative">
          <div
            className={`text-gray-600 dark:text-gray-300 text-justify leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${
              expanded ? "max-h-96 opacity-100" : "max-h-20 opacity-90"
            }`}
          >
            <div className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0 absolute"}`}>
              {expanded && project.fullDescription}
            </div>
            <div className={`transition-opacity duration-300 ${!expanded ? "opacity-100" : "opacity-0"}`}>
              {!expanded && project.description}
            </div>
          </div>
        </div>

        {/* tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* botones reorganizados */}
        <div className="mt-auto space-y-4">
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="group/btn flex items-center gap-2 px-4 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg transition-all duration-300 border border-indigo-200 dark:border-indigo-700 cursor-pointer"
            >
              <span className="transition-transform duration-300 group-hover/btn:scale-110">
                {expanded ? <FaCompressAlt /> : <FaExpandAlt />}
              </span>
              <span className="font-medium">{expanded ? "Ver menos" : "Ver más"}</span>
            </button>
          </div>

          {/* Enlaces - Responsive layout */}
          {project.links.length > 0 && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-center gap-2 px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 cursor-pointer"
                  >
                    <span className="transition-transform duration-300 group-hover/link:scale-110">
                      {getLinkIcon(link.type)}
                    </span>
                    <span className="font-medium text-sm">{getLinkText(link.type)}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullDescription: PropTypes.string,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    inDevelopment: PropTypes.bool,
  }).isRequired,
}

const Projects = ({ selectedTech, onClearFilter }) => {
  const proyectosFiltrados = selectedTech
    ? projectsData.filter((proyecto) => proyecto.technologies.includes(selectedTech))
    : projectsData

  const proyectosOrdenados = [...proyectosFiltrados].sort(
    (a, b) => ordenProyectos.indexOf(a.id) - ordenProyectos.indexOf(b.id),
  )

  return (
    <section id="proyectos" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">Mis Proyectos</h2>

        {selectedTech && (
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-3 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Filtrando por:</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{selectedTech}</span>
              <button
                onClick={onClearFilter}
                className="ml-2 text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                aria-label="Limpiar filtro"
              >
                &times;
              </button>
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosOrdenados.map((proyecto) => (
            <ProjectCard key={proyecto.id} project={proyecto} />
          ))}
        </div>
      </div>
    </section>
  )
}

Projects.propTypes = {
  selectedTech: PropTypes.string,
  onClearFilter: PropTypes.func.isRequired,
}

export default Projects

