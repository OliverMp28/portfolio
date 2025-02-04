import { useState } from "react"
import { FaGithub, FaExpandAlt, FaCompressAlt, FaGlobe, FaExternalLinkAlt } from "react-icons/fa"

const projectsData = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción breve del proyecto.",
    fullDescription:
      "Esta es una descripción extendida del Proyecto 1, donde se explica en detalle la funcionalidad, tecnologías utilizadas y el proceso de desarrollo.",
    image: "/images/project1.jpg",
    technologies: ["React", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/tuusuario/proyecto1" },
      { type: "web", url: "https://proyecto1.com" },
    ],
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Otro proyecto que usa HTML, CSS y JavaScript.",
    fullDescription:
      "En este proyecto se implementa una interfaz web usando HTML, CSS y JavaScript, con un enfoque en la usabilidad y un diseño responsivo.",
    image: "/images/project2.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      { type: "github", url: "https://github.com/tuusuario/proyecto2" },
      { type: "drive", url: "https://drive.google.com/file/d/..." },
    ],
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Proyecto backend hecho con Node.js y Python.",
    fullDescription:
      "Proyecto 3 es un servicio backend desarrollado en Node.js y Python, que incluye API REST y procesamiento de datos en tiempo real.",
    image: "/images/project3.jpg",
    technologies: ["Node.js", "Python"],
    links: [{ type: "web", url: "https://proyecto3.com" }],
  },
  // Agrega más proyectos según necesites
]

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false)

  const getLinkIcon = (type) => {
    switch (type) {
      case "github":
        return <FaGithub />
      case "web":
        return <FaGlobe />
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
      case "drive":
        return "Google Drive"
      default:
        return "Enlace"
    }
  }

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`Proyecto ${project.id}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{project.title}</h3>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {expanded ? project.fullDescription : project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            {expanded ? (
              <>
                <FaCompressAlt /> Ver menos
              </>
            ) : (
              <>
                <FaExpandAlt /> Ver más
              </>
            )}
          </button>
          <div className="flex gap-4">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                {getLinkIcon(link.type)} {getLinkText(link.type)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = ({ selectedTech }) => {
  const filteredProjects = selectedTech
    ? projectsData.filter((project) => project.technologies.includes(selectedTech))
    : projectsData

  return (
    <section id="proyectos" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-reveal">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
